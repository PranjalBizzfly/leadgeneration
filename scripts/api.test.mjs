// HTTP status code tests for the route handlers. Run after `next build`: npm run test:api
// Starts the built app twice: once forwarding to a local stub webhook, once with no webhook configured.
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { after, before, describe, test } from "node:test";

const NEXT = "node_modules/next/dist/bin/next";
const PORT = 3191;
const NO_HOOK_PORT = 3192;
const HOOK_PORT = 3193;
const BASE = `http://localhost:${PORT}`;
const children = [];
let hook;
let ipSeq = 0;

/** Stub webhook: "[fail]" in the message answers 500, "[slow]" never answers in time, anything else 200. */
function startHook() {
  return new Promise((resolve) => {
    hook = createServer((req, res) => {
      let data = "";
      req.on("data", (c) => (data += c));
      req.on("end", () => {
        if (data.includes("[fail]")) return res.writeHead(500).end();
        if (data.includes("[slow]")) return setTimeout(() => res.writeHead(200).end(), 3_000);
        res.writeHead(200).end();
      });
    }).listen(HOOK_PORT, resolve);
  });
}

async function startApp(port, env) {
  const child = spawn(process.execPath, [NEXT, "start", "-p", String(port)], { env: { ...process.env, ...env }, stdio: "ignore" });
  children.push(child);
  for (let i = 0; i < 60; i++) {
    try {
      await fetch(`http://localhost:${port}/search-index.json`);
      return;
    } catch {
      await new Promise((r) => setTimeout(r, 500));
    }
  }
  throw new Error(`app on port ${port} did not start`);
}

const valid = (extra = {}) => ({
  name: "Test Person",
  email: "test@example.com",
  phone: "98765 43210",
  phoneCountry: "IN",
  company: "Example Co",
  message: "Hello, I would like to learn more about the platform.",
  startedAt: Date.now() - 10_000,
  ...extra,
});

/** Each call gets its own client IP so the per-IP rate limit only applies where a test wants it. */
function post(body, { base = BASE, ip = `10.0.0.${++ipSeq}`, headers = {}, raw } = {}) {
  return fetch(`${base}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Forwarded-For": ip, ...headers },
    body: raw ?? JSON.stringify(body),
  });
}

async function expectError(res, status, code) {
  assert.equal(res.status, status);
  const json = await res.json();
  assert.equal(json.success, false);
  assert.equal(json.error.code, code);
  assert.equal(typeof json.error.message, "string");
  assert.equal(typeof json.requestId, "string");
  assert.equal(res.headers.get("x-request-id"), json.requestId);
  assert.doesNotMatch(JSON.stringify(json), /stack|at .+\.(js|ts):\d+/i, "no internals in error bodies");
  return json;
}

before(async () => {
  await startHook();
  await Promise.all([
    startApp(PORT, { CONTACT_WEBHOOK_URL: `http://localhost:${HOOK_PORT}/`, CONTACT_WEBHOOK_TIMEOUT_MS: "1000" }),
    startApp(NO_HOOK_PORT, { CONTACT_WEBHOOK_URL: "" }),
  ]);
});

after(() => {
  for (const c of children) c.kill();
  hook?.close();
});

describe("POST /api/contact", () => {
  test("200 with success body when the submission is delivered", async () => {
    const res = await post(valid());
    assert.equal(res.status, 200);
    const json = await res.json();
    assert.equal(json.success, true);
    assert.equal(typeof json.requestId, "string");
  });

  test("200 for honeypot submissions so bots learn nothing", async () => {
    const res = await post(valid({ website: "spam.example" }));
    assert.equal(res.status, 200);
    assert.equal((await res.json()).success, true);
  });

  test("415 when the body is not JSON", async () => {
    await expectError(await post(null, { headers: { "Content-Type": "text/plain" }, raw: "name=x" }), 415, "UNSUPPORTED_MEDIA_TYPE");
  });

  test("400 for malformed JSON", async () => {
    await expectError(await post(null, { raw: "{not json" }), 400, "INVALID_JSON");
  });

  test("400 for JSON that is not an object", async () => {
    await expectError(await post(null, { raw: "null" }), 400, "INVALID_JSON");
    await expectError(await post(null, { raw: "[1,2]" }), 400, "INVALID_JSON");
  });

  test("413 when Content-Length exceeds the limit", async () => {
    await expectError(await post(valid({ message: "x".repeat(25_000) })), 413, "PAYLOAD_TOO_LARGE");
  });

  test("413 for an oversized chunked body with no Content-Length", async () => {
    const big = JSON.stringify(valid({ message: "x".repeat(25_000) }));
    const stream = new ReadableStream({
      start(c) {
        c.enqueue(new TextEncoder().encode(big));
        c.close();
      },
    });
    const res = await fetch(`${BASE}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Forwarded-For": "10.1.0.1" },
      body: stream,
      duplex: "half",
    });
    await expectError(res, 413, "PAYLOAD_TOO_LARGE");
  });

  test("422 with per-field details for validation failures", async () => {
    const json = await expectError(await post(valid({ name: "", email: "nope", phone: "", message: "short" })), 422, "VALIDATION_ERROR");
    assert.deepEqual(Object.keys(json.error.details).sort(), ["email", "message", "name", "phone"]);
  });

  test("429 with Retry-After once the per-IP limit is exceeded", async () => {
    const ip = "10.2.0.1";
    for (let i = 0; i < 5; i++) assert.notEqual((await post(valid(), { ip })).status, 429);
    const res = await post(valid(), { ip });
    await expectError(res, 429, "RATE_LIMITED");
    const retry = Number(res.headers.get("retry-after"));
    assert.ok(retry > 0 && retry <= 600, `Retry-After should be 1–600 seconds, got ${retry}`);
  });

  test("502 when the webhook rejects the submission", async () => {
    await expectError(await post(valid({ message: "Please deliver this [fail] message." })), 502, "UPSTREAM_ERROR");
  });

  test("504 when the webhook does not answer in time", async () => {
    await expectError(await post(valid({ message: "Please deliver this [slow] message." })), 504, "UPSTREAM_TIMEOUT");
  });

  test("503 in production when no webhook is configured", async () => {
    await expectError(await post(valid(), { base: `http://localhost:${NO_HOOK_PORT}` }), 503, "SERVICE_UNAVAILABLE");
  });

  test("405 for unsupported methods", async () => {
    for (const method of ["GET", "PUT", "DELETE"]) {
      const res = await fetch(`${BASE}/api/contact`, { method });
      assert.equal(res.status, 405, method);
    }
  });
});

describe("other routes", () => {
  test("GET /search-index.json returns 200 JSON", async () => {
    const res = await fetch(`${BASE}/search-index.json`);
    assert.equal(res.status, 200);
    assert.match(res.headers.get("content-type") ?? "", /application\/json/);
    assert.ok(Array.isArray(await res.json()));
  });

  test("POST /search-index.json returns 405", async () => {
    assert.equal((await fetch(`${BASE}/search-index.json`, { method: "POST" })).status, 405);
  });

  test("unknown pages return 404, known pages 200", async () => {
    assert.equal((await fetch(`${BASE}/services/does-not-exist`)).status, 404);
    assert.equal((await fetch(`${BASE}/no-such-page`)).status, 404);
    assert.equal((await fetch(`${BASE}/services`)).status, 200);
    assert.equal((await fetch(`${BASE}/`)).status, 200);
  });
});
