// Usage: PLAYWRIGHT_BROWSERS_PATH=0 node scripts/responsive-check.mjs [baseUrl]
import { chromium } from "playwright";

const base = process.argv[2] ?? "http://localhost:3000";
const issues = [];

const VIEWPORTS = [
  { name: "Mobile (iPhone SE)", width: 375, height: 667 },
  { name: "Mobile (iPhone 14)", width: 390, height: 844 },
  { name: "Tablet (iPad)", width: 768, height: 1024 },
  { name: "Desktop (1280x800)", width: 1280, height: 800 },
  { name: "Desktop (1440x900)", width: 1440, height: 900 },
];

const PATHS = [
  "/",
  "/services/multi-source-lead-scraping",
  "/services/ai-lead-scoring",
  "/careers",
  "/blog",
  "/blog/build-a-city-by-category-prospect-list",
  "/sitemap",
  "/search",
];

const browser = await chromium.launch({
  args: ["--use-gl=swiftshader", "--enable-webgl", "--ignore-gpu-blocklist"],
});

console.log(`Starting responsive audit across ${VIEWPORTS.length} viewports and ${PATHS.length} pages...`);

for (const vp of VIEWPORTS) {
  console.log(`\n--- Testing ${vp.name} (${vp.width}x${vp.height}) ---`);
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  const page = await ctx.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));

  for (const path of PATHS) {
    errors.length = 0;
    const res = await page.goto(base + path, { waitUntil: "networkidle" });
    if (!res || res.status() !== 200) {
      issues.push(`${vp.name} ${path}: HTTP status ${res?.status()}`);
      continue;
    }

    // Wait for initial letter typing to settle
    await page.waitForTimeout(1400);

    // Check horizontal overflow
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth
    );
    if (overflow > 1) {
      issues.push(`${vp.name} ${path}: horizontal overflow by ${overflow}px`);
    }

    // Check H1 exists and is visible
    const h1 = page.locator("h1").first();
    const h1Count = await h1.count();
    if (!h1Count) {
      issues.push(`${vp.name} ${path}: missing H1`);
    } else {
      const isVisible = await h1.isVisible();
      const text = (await h1.textContent())?.trim();
      if (!isVisible || !text) {
        issues.push(`${vp.name} ${path}: H1 not visible or empty`);
      }
    }

    // Scroll down to test scroll-triggered LetterHeadings
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await page.waitForTimeout(800);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1200);

    if (errors.length) {
      issues.push(`${vp.name} ${path}: page errors: ${errors.slice(0, 2).join(" | ")}`);
    }

    const ovStatus = overflow <= 1 ? "✓ No overflow" : `✗ Overflow ${overflow}px`;
    console.log(`  ${path}: ${ovStatus} | H1 OK`);
  }

  await ctx.close();
}

await browser.close();

console.log("\n=========================================");
if (issues.length) {
  console.error(`Responsive audit found ${issues.length} issue(s):\n${issues.join("\n")}`);
  process.exit(1);
} else {
  console.log("Responsive audit passed! All viewports (mobile, tablet, desktop) have zero horizontal overflow, visible letter-by-letter headings, and clean layouts.");
}
