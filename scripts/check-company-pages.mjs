// Usage: PLAYWRIGHT_BROWSERS_PATH=0 node scripts/check-company-pages.mjs [baseUrl]
// Status checks for the company pages and blog, plus the careers → contact pre-fill.
import { chromium } from "playwright";

const base = process.argv[2] ?? "http://localhost:3125";
const routes = ["careers", "vendors", "media", "press-kit", "blog", "blog/interpreting-a-lead-score", "press/leadgen-ai-mark-512.png", "press/leadgen-ai-mark.svg"];
for (const r of routes) console.log(`/${r}`, (await fetch(`${base}/${r}`)).status);
console.log("/blog/nope (expect 404)", (await fetch(`${base}/blog/nope`)).status);

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`${base}/careers`, { waitUntil: "networkidle" });
const applyLinks = await page.locator("a", { hasText: "Apply Now" }).count();
await page.locator("a", { hasText: "Apply Now" }).nth(4).click();
await page.waitForURL("**/contact?**");
await page.waitForLoadState("networkidle");
await page.waitForTimeout(500);
console.log("apply buttons:", applyLinks, "| prefill topic:", await page.inputValue("select[name=topic]"), "| message:", (await page.inputValue("textarea[name=message]")).split("\n")[0]);
await browser.close();
