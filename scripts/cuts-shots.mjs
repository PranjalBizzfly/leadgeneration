// Usage: PLAYWRIGHT_BROWSERS_PATH=0 node scripts/cuts-shots.mjs [baseUrl]
// Screenshots every shaped section edge (top and bottom) on sample pages at desktop/tablet/mobile in both
// themes into .qa/cut-*.png, and checks that no section content sits inside the cut-away band.
import { chromium } from "playwright";

const base = process.argv[2] ?? "http://localhost:3125";
const pages = ["/", "/services/ai-lead-scoring", "/press-kit"];
const sizes = { d: 1440, t: 820, m: 390 };
const issues = [];
const browser = await chromium.launch();
for (const theme of ["dark", "light"]) {
  for (const [sz, width] of Object.entries(sizes)) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: "reduce" });
    await page.addInitScript((t) => localStorage.setItem("leadgen-site-theme", t), theme);
    for (const path of pages) {
      await page.goto(base + path, { waitUntil: "networkidle" });
      const cuts = await page.evaluate(() =>
        [...document.querySelectorAll(":is(.cut-wave,.cut-step,.cut-slant,.cut-curve,.cut-tilt,.cut-flow)")].map((s) => {
          const r = s.getBoundingClientRect();
          const h = parseFloat(getComputedStyle(s).getPropertyValue("--cut-h")) || 0;
          const cutPx = Math.min(76, Math.max(28, (window.innerWidth * 5) / 100));
          // Any visible text/element inside the top or bottom band would be clipped by the mask.
          const clipped = [...s.querySelectorAll("h2,h3,p,a,button,li,img")].some((el) => {
            const e = el.getBoundingClientRect();
            if (el.closest("details:not([open])") && !el.closest("summary")) return false;
            return e.height > 0 && (e.top < r.top + cutPx - 2 || e.bottom > r.bottom - cutPx + 2);
          });
          return { cls: [...s.classList].find((c) => c.startsWith("cut-")), top: r.top + scrollY, bottom: r.bottom + scrollY, clipped, h };
        }),
      );
      for (const [i, c] of cuts.entries()) {
        if (c.clipped) issues.push(`${path} [${sz}/${theme}] ${c.cls}: content inside the cut band`);
        if (theme === "dark" && sz !== "t" && i < 2) {
          for (const edge of ["top", "bottom"]) {
            const y = Math.max(0, c[edge] - 70);
            await page.evaluate((v) => window.scrollTo(0, v), y);
            await page.waitForTimeout(150);
            await page.screenshot({ path: `.qa/cut-${path === "/" ? "home" : path.split("/").pop()}-${sz}-${c.cls}-${edge}.png`, clip: { x: 0, y: c[edge] - y - 60, width, height: 140 } });
          }
        }
      }
      const ov = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      if (ov > 1) issues.push(`${path} [${sz}/${theme}] horizontal overflow ${ov}px`);
      if (sz === "d") console.log(`${path} [${theme}]: ${cuts.map((c) => c.cls).join(", ")}`);
    }
    await page.close();
  }
}
await browser.close();
console.log(issues.length ? `${issues.length} issue(s):\n${issues.join("\n")}` : "cuts: no clipped content, no overflow, both themes, all sizes");
