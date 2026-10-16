// Usage: PLAYWRIGHT_BROWSERS_PATH=0 node scripts/image-audit.mjs [baseUrl] — loads every sitemap URL and checks each
// rendered <img>: served from this site (no third-party hosts), WebP, decoded (not broken), and proper alt text:
// meaningful images need a descriptive alt (4+ words); decorative ones need alt="" plus data-decorative or an
// aria-hidden ancestor; an <img> with no alt attribute at all always fails. Every raster image response must
// be WebP (SVG vector graphics are fine).
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
  const found = await page.evaluate(() =>
    [...document.images].map((i) => ({
      src: i.currentSrc || i.src,
      alt: i.getAttribute("alt"),
      decorative: i.hasAttribute("data-decorative") || !!i.closest("[aria-hidden=true]"),
      ok: i.complete && i.naturalWidth > 0,
      w: i.naturalWidth,
    })),
  );
  for (const i of found) {
    imgs++;
    if (new URL(i.src).origin !== origin) issues.push(`${p}: third-party image ${i.src}`);
    if (!i.ok) issues.push(`${p}: broken image ${i.src}`);
    if (i.alt === null) issues.push(`${p}: no alt attribute on ${i.src}`);
    else if (i.alt.trim() === "") {
      if (!i.decorative) issues.push(`${p}: empty alt on a non-decorative image ${i.src}`);
    } else if (i.alt.trim().split(/\s+/).length < 4) issues.push(`${p}: weak alt "${i.alt}" on ${i.src}`);
  }
}
const nonWebp = [...formats].filter(([, t]) => !t.includes("webp") && !t.includes("svg"));
for (const [u, t] of nonWebp) issues.push(`not WebP (${t}): ${u}`);
await browser.close();
console.log(`${paths.length} pages · ${imgs} images checked · ${formats.size} unique image responses`);
console.log(issues.length ? `${issues.length} issue(s):\n${issues.slice(0, 30).join("\n")}` : "all images self-hosted, WebP, loaded, with alt text");
