// Usage: PLAYWRIGHT_BROWSERS_PATH=0 node scripts/video-frames.mjs <file-in-public> [everySeconds] [baseUrl]
// Captures frames of a video served from public/ by seeking it in the browser; saves .qa/vid/fNN.png.
import { mkdirSync } from "node:fs";
import { chromium } from "playwright";

const [file, every = "4", base = "http://localhost:3125"] = process.argv.slice(2);
mkdirSync(".qa/vid", { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 760 } });
await page.setContent(`<body style="margin:0;background:#000"><video id="v" muted playsinline style="width:1280px;height:720px;object-fit:contain" src="${base}/${encodeURI(file)}"></video></body>`);
const ok = await page.evaluate(
  () =>
    new Promise((r) => {
      const v = document.getElementById("v");
      v.onloadeddata = () => r({ d: v.duration, w: v.videoWidth });
      v.onerror = () => r({ err: String(v.error?.code) });
    }),
);
console.log(ok);
if (ok.err) process.exit(1);
let n = 0;
for (let t = 0.5; t < ok.d; t += Number(every)) {
  await page.evaluate((s) => new Promise((r) => { const v = document.getElementById("v"); v.onseeked = () => r(); v.currentTime = s; }), t);
  await page.locator("#v").screenshot({ path: `.qa/vid/f${String(++n).padStart(2, "0")}.png` });
}
console.log(n, "frames");
await browser.close();
