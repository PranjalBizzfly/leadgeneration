// Usage: PLAYWRIGHT_BROWSERS_PATH=0 node scripts/image-audit.mjs [baseUrl] — loads every sitemap URL and checks each
// rendered <img>: served from this site (no third-party hosts), WebP, decoded (not broken), non-empty alt text.
import { chromium } from "playwright";

const base = process.argv[2] ?? "http://localhost:3125";
const origin = new URL(base).origin;
const xml = await (await fetch(`${base}/sitemap.xml`)).text();
const paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const formats = new Map();
page.on("response", (r) => {
  if (r.request().resourceType() === "image") formats.set(r.url(), r.headers()["content-type"] ?? "");
});
const issues = [];
let imgs = 0;
for (const p of paths) {
  await page.goto(base + p, { waitUntil: "load" });
  await page.evaluate(async () => {
    for (const img of document.images) img.loading = "eager";
    await Promise.all([...document.images].map((i) => (i.complete ? null : new Promise((r) => { i.onload = i.onerror = r; }))));
  });
  const found = await page.evaluate(() => [...document.images].map((i) => ({ src: i.currentSrc || i.src, alt: i.getAttribute("alt"), ok: i.complete && i.naturalWidth > 0, w: i.naturalWidth })));
  for (const i of found) {
    imgs++;
    if (new URL(i.src).origin !== origin) issues.push(`${p}: third-party image ${i.src}`);
    if (!i.ok) issues.push(`${p}: broken image ${i.src}`);
    if (!i.alt || i.alt.trim().split(/\s+/).length < 4) issues.push(`${p}: missing/weak alt on ${i.src}`);
  }
}
const nonWebp = [...formats].filter(([u, t]) => u.includes("/_next/image") && !t.includes("webp"));
for (const [u, t] of nonWebp) issues.push(`not WebP (${t}): ${u}`);
await browser.close();
console.log(`${paths.length} pages · ${imgs} images checked · ${formats.size} unique image responses`);
console.log(issues.length ? `${issues.length} issue(s):\n${issues.slice(0, 30).join("\n")}` : "all images self-hosted, WebP, loaded, with alt text");
