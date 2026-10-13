// Usage: node scripts/qa-crawl.mts [baseUrl] — run against `next start`.
// Fetches every live route, checks status, <title>, H1 count, canonical, meta description,
// broken internal links, duplicate titles/descriptions, and that unknown/Phase 2 routes 404.
import { PLAN } from "../src/content/plan.ts";
import { readdirSync, readFileSync } from "node:fs";

const base = process.argv[2] ?? "http://localhost:3123";
const authored = new Set<string>(["/", "/sitemap"]);
for (const f of readdirSync("src/content/pages"))
  for (const m of readFileSync(`src/content/pages/${f}`, "utf8").matchAll(/^\s{4}path: "([^"]+)"/gm)) authored.add(m[1]);
const live = PLAN.filter((p) => authored.has(p.path)).map((p) => p.path);
const extra = ["/search", "/sitemap.xml", "/robots.txt", "/search-index.json", "/opengraph-image"];

const issues: string[] = [];
const titles = new Map<string, string>();
const descs = new Map<string, string>();
const linked = new Set<string>();
const inbound = new Map<string, number>();

for (const path of live) {
  const res = await fetch(base + path);
  const html = await res.text();
  if (res.status !== 200) { issues.push(`${path}: status ${res.status}`); continue; }
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1] ?? "";
  const h1s = (html.match(/<h1[\s>]/g) ?? []).length;
  if (!title) issues.push(`${path}: missing title`);
  if (!desc) issues.push(`${path}: missing description`);
  if (!canonical.endsWith(path === "/" ? "" : path)) issues.push(`${path}: canonical ${canonical}`);
  if (h1s !== 1) issues.push(`${path}: ${h1s} h1 elements`);
  if (titles.has(title)) issues.push(`${path}: duplicate title with ${titles.get(title)}`);
  if (descs.has(desc)) issues.push(`${path}: duplicate description with ${descs.get(desc)}`);
  titles.set(title, path);
  descs.set(desc, path);
  const main = html.split('<main id="main">')[1]?.split("</main>")[0] ?? "";
  for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) linked.add(m[1]);
  for (const m of main.matchAll(/href="(\/[^"#?]*)/g)) if (m[1] !== path) inbound.set(m[1], (inbound.get(m[1]) ?? 0) + 1);
}

for (const href of linked) {
  if (href.startsWith("/_next") || live.includes(href) || extra.includes(href)) continue;
  const res = await fetch(base + href);
  if (res.status !== 200) issues.push(`broken internal link: ${href} (${res.status})`);
}
for (const path of extra) {
  const res = await fetch(base + path);
  if (res.status !== 200) issues.push(`${path}: status ${res.status}`);
}
for (const path of live) if (path !== "/" && !inbound.get(path)) issues.push(`${path}: no contextual inbound links from page bodies`);

const sitemap = await (await fetch(base + "/sitemap.xml")).text();
const sitemapCount = (sitemap.match(/<loc>/g) ?? []).length;
if (sitemapCount !== live.length) issues.push(`sitemap.xml has ${sitemapCount} URLs, expected ${live.length}`);

const reserved = PLAN.find((p) => !authored.has(p.path));
for (const path of ["/definitely-not-a-page", "/services/nope", reserved?.path].filter(Boolean) as string[]) {
  const res = await fetch(base + path);
  if (res.status !== 404) issues.push(`${path}: expected 404, got ${res.status}`);
}

console.log(`checked ${live.length} live routes, ${linked.size} unique internal hrefs, sitemap ${sitemapCount} URLs`);
console.log(issues.length ? issues.join("\n") : "no issues");
