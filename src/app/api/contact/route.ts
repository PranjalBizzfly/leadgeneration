import { NextResponse } from "next/server";
import { checkPhone } from "@/lib/phone";

const MAX = { name: 120, email: 200, company: 160, message: 4000 };
const MAX_BODY_BYTES = 20_000;
/** Real people take a few seconds to fill the form; scripted posts are usually instant. */
const MIN_FILL_MS = 3_000;
/** Per-IP limit. In-memory, so it applies per server instance (enough to blunt a single noisy source). */
const RATE = { max: 5, windowMs: 10 * 60_000 };
const WEBHOOK_TIMEOUT_MS = Number(process.env.CONTACT_WEBHOOK_TIMEOUT_MS) || 10_000;
const hits = new Map<string, number[]>();

/** Returns the seconds until the caller may retry, or 0 when the request is within the limit. */
function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE.windowMs);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5_000) hits.clear();
  return recent.length > RATE.max ? Math.ceil((recent[0] + RATE.windowMs - now) / 1000) : 0;
}

type ErrorCode = "PAYLOAD_TOO_LARGE" | "UNSUPPORTED_MEDIA_TYPE" | "RATE_LIMITED" | "INVALID_JSON" | "VALIDATION_ERROR" | "UPSTREAM_ERROR" | "UPSTREAM_TIMEOUT" | "SERVICE_UNAVAILABLE";

/** Every response uses one shape: { success, requestId } plus an error object on failure. */
function fail(requestId: string, status: number, code: ErrorCode, message: string, details: Record<string, string> = {}, headers?: HeadersInit) {
  return NextResponse.json({ success: false, error: { code, message, details }, requestId }, { status, headers: { ...headers, "X-Request-Id": requestId } });
}
const ok = (requestId: string) => NextResponse.json({ success: true, requestId }, { headers: { "X-Request-Id": requestId } });

/**
 * Receives contact and access-request submissions.
 * If CONTACT_WEBHOOK_URL is set, the validated submission is forwarded there as JSON.
 * Without it, development logs the submission; production refuses it rather than showing a false success.
 */
export async function POST(request: Request) {
  const requestId = crypto.randomUUID();

  const type = (request.headers.get("content-type") ?? "").split(";")[0].trim().toLowerCase();
  if (type !== "application/json") {
    return fail(requestId, 415, "UNSUPPORTED_MEDIA_TYPE", "Requests must be sent as JSON.");
  }
  if (Number(request.headers.get("content-length") ?? 0) > MAX_BODY_BYTES) {
    return fail(requestId, 413, "PAYLOAD_TOO_LARGE", "That message is too long.");
  }
  const ip = (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || request.headers.get("x-real-ip") || "unknown";
  const retryAfter = rateLimited(ip);
  if (retryAfter) {
    return fail(requestId, 429, "RATE_LIMITED", "Too many submissions from your connection. Please wait a few minutes and try again.", {}, { "Retry-After": String(retryAfter) });
  }

  // Content-Length can be absent (chunked uploads), so the size limit is enforced on the bytes actually received.
  const raw = await request.text();
  if (new TextEncoder().encode(raw).length > MAX_BODY_BYTES) {
    return fail(requestId, 413, "PAYLOAD_TOO_LARGE", "That message is too long.");
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return fail(requestId, 400, "INVALID_JSON", "Invalid request.");
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    return fail(requestId, 400, "INVALID_JSON", "Invalid request.");
  }
  const body = parsed as Record<string, unknown>;

  const str = (k: string) => (typeof body[k] === "string" ? (body[k] as string).trim() : "");
  // Honeypot filled, or the form was "completed" faster than a person could: pretend success so bots learn nothing.
  const startedAt = Number(body.startedAt);
  if (str("website") || !Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS) {
    return ok(requestId);
  }

  const submission = {
    kind: str("kind") === "demo" ? "demo" : "contact",
    name: str("name").slice(0, MAX.name),
    email: str("email").slice(0, MAX.email),
    phone: "",
    company: str("company").slice(0, MAX.company),
    topic: str("topic") || str("source"),
    message: str("message").slice(0, MAX.message),
    receivedAt: new Date().toISOString(),
  };

  const errors: Record<string, string> = {};
  if (!submission.name) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email)) errors.email = "Please enter a valid email address.";
  const phone = checkPhone(str("phone"), str("phoneCountry"));
  if ("error" in phone) errors.phone = phone.error;
  else submission.phone = phone.e164;
  if (submission.message.length < 10) errors.message = "Please add a few words (at least 10 characters).";
  else if ((submission.message.match(/https?:\/\/|www\./gi) ?? []).length > 2) errors.message = "Please include no more than two links.";
  if (Object.keys(errors).length) return fail(requestId, 422, "VALIDATION_ERROR", "Please fix the highlighted fields.", errors);

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
        signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (err) {
      console.error(`[contact] ${requestId} delivery failed`, err);
      if (err instanceof Error && err.name === "TimeoutError") {
        return fail(requestId, 504, "UPSTREAM_TIMEOUT", "We couldn’t submit your message right now. Please try again shortly.");
      }
      return fail(requestId, 502, "UPSTREAM_ERROR", "We couldn’t submit your message right now. Please try again shortly.");
    }
  } else if (process.env.NODE_ENV === "production") {
    console.error(`[contact] ${requestId} CONTACT_WEBHOOK_URL is not set; submission not delivered`);
    return fail(requestId, 503, "SERVICE_UNAVAILABLE", "Our form isn’t accepting messages right now. Please try again later.");
  } else {
    console.info(`[contact] ${requestId} submission (set CONTACT_WEBHOOK_URL to forward):`, submission);
  }

  return ok(requestId);
}
