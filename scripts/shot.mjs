// Usage: PLAYWRIGHT_BROWSERS_PATH=0 node scripts/shot.mjs <url> <name> [width] [theme] [action]
// Viewport screenshot into .qa/<name>.png. action: "search" opens the search dialog first;
// "scroll" scrolls 1200px so the scroll controls show.
import { chromium } from "playwright";

const [url, name, width = "1440", theme = "dark", action = ""] = process.argv.slice(2);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: Number(width), height: 900 } });
await page.addInitScript((t) => localStorage.setItem("leadgen-site-theme", t), theme);
await page.goto(url, { waitUntil: "networkidle" });
if (action === "search") {
  await page.keyboard.press("Control+k");
  await page.waitForTimeout(500);
}
if (action === "scroll") {
  await page.evaluate(() => window.scrollTo({ top: 1200, behavior: "instant" }));
  await page.waitForTimeout(1500);
  console.log("header top:", await page.evaluate(() => document.querySelector("header").getBoundingClientRect().top), "scrollY:", await page.evaluate(() => scrollY));
}
if (action === "footer") {
  await page.locator("footer").screenshot({ path: `.qa/${name}.png` });
} else {
  await page.screenshot({ path: `.qa/${name}.png` });
}
await browser.close();
