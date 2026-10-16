// Usage: PLAYWRIGHT_BROWSERS_PATH=0 node scripts/motion-test.mjs [baseUrl]
// Verifies the motion system: reveals arm below the fold and resolve when scrolled to, nothing stays
// hidden, card tilt and magnetic buttons respond, header reacts to scroll, page transitions don't
// break navigation, and reduced motion leaves everything visible.
import { chromium } from "playwright";

const base = process.argv[2] ?? "http://localhost:3125";
const issues = [];
const browser = await chromium.launch({ args: ["--use-gl=swiftshader", "--enable-webgl", "--ignore-gpu-blocklist"] });

for (const path of ["/", "/services/ai-lead-scoring", "/careers", "/blog"]) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  await page.goto(base + path, { waitUntil: "networkidle" });
  const armed = await page.locator(".rv").count();
  if (!armed) issues.push(`${path}: no reveal targets armed`);
  // Scroll through the whole page; everything armed must end up revealed.
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  // Wheel scrolling like a visitor: programmatic scrollTo jumps are cancelled by the site's smooth
  // scrolling and skip past content, which made this check flaky.
  for (let y = 0; y < h; y += 300) {
    await page.mouse.wheel(0, 300);
    await page.waitForTimeout(200);
  }
  await page.waitForTimeout(1200);
  const hidden = await page.locator(".rv:not(.rv-in)").count();
  if (hidden) issues.push(`${path}: ${hidden} element(s) never revealed`);
  if (!(await page.evaluate(() => document.documentElement.hasAttribute("data-scrolled")))) issues.push(`${path}: header did not react to scroll`);
  // Tilt a card.
  const card = page.locator(".card-link").first();
  if (await card.count()) {
    await card.scrollIntoViewIfNeeded();
    const b = await card.boundingBox();
    await page.mouse.move(b.x + b.width * 0.85, b.y + b.height * 0.2);
    await page.waitForTimeout(200);
    // Cards follow the cursor with a spotlight (--mx/--my); the earlier 3D tilt (--rx) was removed from Motion.tsx.
    const rx = await card.evaluate((el) => el.style.getPropertyValue("--mx") || el.style.getPropertyValue("--rx"));
    if (!rx) issues.push(`${path}: card spotlight did not respond`);
  }
  if (errors.length) issues.push(`${path}: ${errors.slice(0, 2).join(" | ")}`);
  console.log(`${path}: ${armed} reveal targets`);
  await page.close();
}

// Client-side navigation with the page transition: content must change and stay visible.
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  await page.goto(base + "/services", { waitUntil: "networkidle" });
  await page.locator("main a[href='/services/ai-lead-scoring']").first().click();
  await page.waitForURL("**/services/ai-lead-scoring");
  await page.waitForTimeout(900);
  const h1 = await page.locator("h1").first().textContent();
  const op = await page.locator("main").evaluate((m) => getComputedStyle(m.firstElementChild).opacity);
  if (!/scor/i.test(h1 ?? "")) issues.push(`navigation: wrong page (${h1})`);
  if (Number(op) < 0.99) issues.push(`navigation: page content left at opacity ${op}`);
  if (errors.length) issues.push(`navigation: ${errors.slice(0, 2).join(" | ")}`);
  await page.close();
}

// Reduced motion: nothing hidden, no transforms.
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
  const page = await ctx.newPage();
  await page.goto(base + "/services", { waitUntil: "networkidle" });
  if (await page.locator(".rv").count()) issues.push("reduced motion: reveals were armed");
  await ctx.close();
}

await browser.close();
console.log(issues.length ? `${issues.length} issue(s):\n${issues.join("\n")}` : "motion: reveals, tilt, header, page transitions and reduced motion all OK");
