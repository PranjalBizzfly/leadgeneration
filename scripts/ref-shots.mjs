// Usage: PLAYWRIGHT_BROWSERS_PATH=0 node scripts/ref-shots.mjs <url> <name> [width]
// Full-page screenshot of a reference URL into .qa/ref-<name>.png, plus a section outline.
import { mkdirSync } from "node:fs";
import { chromium } from "playwright";

const [url, name, width = "1440"] = process.argv.slice(2);
mkdirSync(".qa", { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: Number(width), height: 900 } });
await page.goto(url, { waitUntil: "networkidle" });
// Trigger scroll-based reveal animations.
await page.evaluate(async () => {
  for (let y = 0; y < document.body.scrollHeight; y += 600) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 120));
  }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(800);
await page.screenshot({ path: `.qa/ref-${name}.png`, fullPage: true });
// Also save viewport-height slices so details stay legible.
const total = await page.evaluate(() => document.body.scrollHeight);
// Scroll to each slice and capture the viewport, so in-view reveal animations have run.
await page.setViewportSize({ width: Number(width), height: 1000 });
for (let i = 0, y = 0; y < total; i++, y += 1000) {
  await page.evaluate((top) => window.scrollTo(0, top), y);
  await page.waitForTimeout(900);
  await page.screenshot({ path: `.qa/ref-${name}-${String(i).padStart(2, "0")}.png` });
}
const outline = await page.evaluate(() =>
  [...document.querySelectorAll("section, header, footer, h1, h2")].slice(0, 80).map((el) => {
    const r = el.getBoundingClientRect();
    return `${el.tagName.toLowerCase()} y=${Math.round(r.top + scrollY)} h=${Math.round(r.height)} ${el.tagName.startsWith("H") ? "“" + el.textContent.trim().slice(0, 70) + "”" : (el.className + "").slice(0, 90)}`;
  }),
);
console.log(`height=${await page.evaluate(() => document.body.scrollHeight)}\n${outline.join("\n")}`);
await browser.close();
