// Usage: PLAYWRIGHT_BROWSERS_PATH=0 node scripts/tour-test.mjs [baseUrl]
// Checks the homepage 3D walkthrough: "you" walk to the first room by yourself, the host asks a question,
// the reply runs the stage, the software window shows the result, and the visit moves to the next room.
// Then checks manual replies, the Next chip, pause and console errors, on desktop and mobile.
import { chromium } from "playwright";

const base = process.argv[2] ?? "http://localhost:3125";
const issues = [];
const browser = await chromium.launch({ args: ["--use-gl=swiftshader", "--enable-webgl", "--ignore-gpu-blocklist"] });

for (const [name, viewport] of [["desktop", { width: 1440, height: 900 }], ["mobile", { width: 390, height: 844 }]]) {
  const page = await browser.newPage({ viewport });
  const errors = [];
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("pageerror", (e) => errors.push(String(e)));
  // "load", not "networkidle": link prefetching keeps the network busy for ~8s, by which time the story has already asked its first question.
  await page.goto(base + "/", { waitUntil: "load" });
  const vis = (t) => page.getByText(t, { exact: false }).locator("visible=true").first();
  const wait = async (t, ms, label) => {
    try {
      await vis(t).waitFor({ timeout: ms });
      return true;
    } catch {
      issues.push(`[${name}] ${label} ("${t}" not shown)`);
      return false;
    }
  };
  if ((await page.getByText("Start The Tour").count()) > 0) issues.push(`[${name}] old tour prompt still present`);
  await page.getByRole("toolbar", { name: "Pipeline stages" }).scrollIntoViewIfNeeded();
  // Autoplay: walk → ask → reply → result → move on.
  await wait("Who are you looking for today?", 30000, "did not walk to Discovery desk and ask");
  await page.screenshot({ path: `.qa/walk-${name}-ask.png` });
  await wait("Found them.", 10000, "auto reply did not produce a result");
  await wait("Sample Clinic A", 2000, "software window did not show sample records");
  await page.screenshot({ path: `.qa/walk-${name}-result.png` });
  await wait("Shall I find their contact details?", 20000, "did not walk on to Enrichment room");
  // Manual: choosing a room pauses the story; you walk there and reply yourself.
  await page.getByRole("toolbar", { name: "Pipeline stages" }).getByRole("button", { name: /Audit/ }).click();
  await wait("Shall I check how healthy it is?", 20000, "did not walk to Audit room when chosen");
  await page.getByRole("button", { name: "Audit their website" }).click().catch(() => issues.push(`[${name}] reply chip not clickable`));
  await wait("It grades a D.", 6000, "manual reply did not run audit");
  await page.screenshot({ path: `.qa/walk-${name}-audit.png` });
  await page.getByRole("button", { name: /Next: Detect/ }).click().catch(() => issues.push(`[${name}] Next chip not clickable`));
  await wait("clearly need your help", 20000, "Next chip did not walk to Detect room");
  await page.waitForTimeout(4000);
  if (!(await vis("clearly need your help").isVisible())) issues.push(`[${name}] story kept going while paused`);
  const real = errors.filter((e) => !/WebGL|GPU stall|swiftshader/i.test(e));
  if (real.length) issues.push(`[${name}] console: ${real.slice(0, 3).join(" | ")}`);
  await page.close();
}
await browser.close();
console.log(issues.length ? `${issues.length} issue(s):\n${issues.join("\n")}` : "walkthrough: walks, asks, replies, shows results and moves on, on desktop and mobile; no console errors");
