// Usage: PLAYWRIGHT_BROWSERS_PATH=0 node scripts/visual-qa.mjs [baseUrl] [--all]
// Requires playwright (npm i --no-save playwright && PLAYWRIGHT_BROWSERS_PATH=0 npx playwright install chromium).
// Screenshots representative pages at desktop and mobile widths in both themes (into .qa/),
// detects horizontal overflow, console errors and failed requests, and exercises the
// mobile menu, mega menu, search dialog, theme toggle and form validation.
// With --all, also checks every URL in sitemap.xml for overflow and console errors at mobile width.
import { mkdirSync } from "node:fs";
import { chromium } from "playwright";

const base = process.argv[2]?.startsWith("http") ? process.argv[2] : "http://localhost:3125";
const all = process.argv.includes("--all");
const PAGES = {
  home: "/",
  service: "/services/ai-lead-scoring",
  strategy: "/strategies/cold-email-outreach",
  industry: "/industries/dental-clinics",
  b2b: "/b2b/ideal-customer-profile",
  b2c: "/b2c/homeowners",
  capture: "/lead-capture/landing-page-design",
  qualification: "/lead-qualification/bant-framework",
  tools: "/tools/lead-generation-kpis",
  guide: "/resources/beginners-guide-to-lead-generation",
  glossary: "/resources/lead-generation-glossary",
  compare: "/compare/inbound-vs-outbound",
  hub: "/services",
  search: "/search?q=lead",
  contact: "/contact",
  demo: "/request-access",
  sitemap: "/sitemap",
  notfound: "/nope-404",
};
const VIEWPORTS = { desktop: { width: 1440, height: 900 }, tablet: { width: 820, height: 1100 }, mobile: { width: 390, height: 844 } };

mkdirSync(".qa", { recursive: true });
const browser = await chromium.launch();
const issues = [];

async function newPage(viewport, theme) {
  const ctx = await browser.newContext({ viewport, colorScheme: theme });
  const page = await ctx.newPage();
  const errors = [];
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("pageerror", (e) => errors.push(String(e)));
  // Prefetches cancelled by navigating away (net::ERR_ABORTED on ?_rsc=) are expected, not defects.
  page.on("requestfailed", (r) => {
    if (r.failure()?.errorText.includes("ERR_ABORTED") && r.url().includes("_rsc=")) return;
    errors.push(`request failed: ${r.url()} (${r.failure()?.errorText})`);
  });
  return { ctx, page, errors };
}

async function overflow(page) {
  return page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
}

for (const [vpName, viewport] of Object.entries(VIEWPORTS)) {
  for (const theme of ["light", "dark"]) {
    if (vpName === "tablet" && theme === "dark") continue;
    const { ctx, page, errors } = await newPage(viewport, theme);
    for (const [name, path] of Object.entries(PAGES)) {
      errors.length = 0;
      const res = await page.goto(base + path, { waitUntil: "networkidle" });
      const expected = name === "notfound" ? 404 : 200;
      if (res.status() !== expected) issues.push(`${path} [${vpName}] status ${res.status()}`);
      const ov = await overflow(page);
      if (ov > 1) issues.push(`${path} [${vpName}/${theme}] horizontal overflow ${ov}px`);
      const realErrors = errors.filter((e) => !(name === "notfound" && e.includes("404")));
      if (realErrors.length) issues.push(`${path} [${vpName}/${theme}] console: ${realErrors.slice(0, 3).join(" | ")}`);
      const brokenSvg = await page.evaluate(() => [...document.querySelectorAll("svg[role=img]")].filter((s) => s.checkVisibility() && s.getBoundingClientRect().height < 20).length);
      if (brokenSvg) issues.push(`${path} [${vpName}] ${brokenSvg} collapsed SVG illustrations`);
      if (["home", "service", "b2c", "compare", "contact", "search"].includes(name) || vpName !== "tablet")
        await page.screenshot({ path: `.qa/${name}-${vpName}-${theme}.png`, fullPage: name !== "home" ? false : true });
    }
    await ctx.close();
  }
}

// Interactions
{
  const { ctx, page, errors } = await newPage(VIEWPORTS.desktop, "light");
  await page.goto(base + "/", { waitUntil: "networkidle" });
  await page.hover("header nav >> text=Industries");
  await page.waitForTimeout(300);
  const megaVisible = await page.locator("header nav a[href='/industries/dental-clinics']").isVisible();
  if (!megaVisible) issues.push("mega menu did not open on hover");
  await page.screenshot({ path: ".qa/interaction-megamenu.png" });
  const megaBox = await page.locator("header nav a[href='/industries/dental-clinics']").boundingBox();
  if (megaBox && (megaBox.x < 0 || megaBox.x + megaBox.width > 1440)) issues.push("mega menu overflows viewport");

  await page.mouse.move(700, 700);
  await page.keyboard.press("Control+k");
  await page.waitForTimeout(400);
  await page.keyboard.type("dental");
  await page.waitForTimeout(400);
  const hits = await page.locator("#search-results a").count();
  if (!hits) issues.push("search dialog returned no results for 'dental'");
  await page.screenshot({ path: ".qa/interaction-search.png" });
  await page.keyboard.press("Enter");
  try {
    await page.waitForURL("**/industries/**", { timeout: 5000 });
  } catch {
    issues.push(`search Enter navigated to ${page.url()}`);
  }

  const before = await page.evaluate(() => document.documentElement.dataset.theme);
  await page.click("button[aria-label='Toggle light and dark theme']");
  const after = await page.evaluate(() => document.documentElement.dataset.theme);
  await page.reload({ waitUntil: "networkidle" });
  const persisted = await page.evaluate(() => document.documentElement.dataset.theme);
  if (before === after || persisted !== after) issues.push(`theme toggle ${before}→${after}, after reload ${persisted}`);

  await page.goto(base + "/contact", { waitUntil: "networkidle" });
  await page.click("form button[type=submit]");
  const fieldErrors = await page.locator("form [id^=err-]").count();
  if (fieldErrors !== 4) issues.push(`contact form showed ${fieldErrors} field errors on empty submit (expected 4: name, email, phone, message)`);
  await page.screenshot({ path: ".qa/interaction-form-errors.png" });

  // Search page filters
  await page.goto(base + "/search?q=scoring", { waitUntil: "networkidle" });
  const searchCount = await page.locator("main ul li a.card").count();
  if (!searchCount) issues.push("search page returned no results for 'scoring'");
  if (errors.length) issues.push(`interaction console errors: ${errors.slice(0, 3).join(" | ")}`);
  await ctx.close();
}
{
  const { ctx, page } = await newPage(VIEWPORTS.mobile, "dark");
  await page.goto(base + "/services", { waitUntil: "networkidle" });
  await page.click("button[aria-label='Open menu']");
  await page.click("#mobile-menu summary >> text=Industries");
  await page.waitForTimeout(200);
  await page.screenshot({ path: ".qa/interaction-mobile-menu.png" });
  await page.click("#mobile-menu a[href='/industries/plumbing']");
  await page.waitForURL("**/industries/plumbing");
  const stillOpen = await page.locator("#mobile-menu").count();
  if (stillOpen) issues.push("mobile menu stayed open after navigation");
  await ctx.close();
}

if (all) {
  const xml = await (await fetch(base + "/sitemap.xml")).text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
  const { ctx, page, errors } = await newPage(VIEWPORTS.mobile, "light");
  for (const path of urls) {
    errors.length = 0;
    await page.goto(base + path, { waitUntil: "load" });
    const ov = await overflow(page);
    if (ov > 1) issues.push(`${path} [mobile] horizontal overflow ${ov}px`);
    if (errors.length) issues.push(`${path} console: ${errors.slice(0, 2).join(" | ")}`);
  }
  console.log(`full sweep: ${urls.length} URLs at mobile width`);
  await ctx.close();
}

await browser.close();
console.log(issues.length ? `${issues.length} issue(s):\n${issues.join("\n")}` : "visual QA: no issues");
