// Verifies every page has exactly 8 unique, non-empty FAQs, read from its built FAQPage JSON-LD.
// Covers the home page, the sitemap page and every content page in src/content/pages.
// Run after `next build`: node scripts/faq-check.mjs [--list]
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = ".next/server/app";
const REQUIRED = 8;

const contentRoutes = readdirSync("src/content/pages").flatMap((f) =>
  [...readFileSync(join("src/content/pages", f), "utf8").matchAll(/^\s+path: "(\/[^"]*)"/gm)].map((m) => m[1]),
);
const routes = ["/", "/sitemap", ...contentRoutes];
const fileFor = (route) => join(ROOT, route === "/" ? "index.html" : `${route.slice(1)}.html`);

const decode = (s) => s.replace(/\\u003c/g, "<").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
const failures = [];
const counts = {};

for (const route of routes) {
  if (!existsSync(fileFor(route))) {
    counts[route] = 0;
    failures.push(`${route}: no built HTML`);
    continue;
  }
  const html = readFileSync(fileFor(route), "utf8");
  const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .map((m) => {
      try {
        return JSON.parse(decode(m[1]));
      } catch {
        return null;
      }
    })
    .filter((d) => d && d["@type"] === "FAQPage");
  const faqs = blocks.flatMap((b) => b.mainEntity ?? []);
  const qs = faqs.map((f) => (f.name ?? "").trim());
  const as = faqs.map((f) => (f.acceptedAnswer?.text ?? "").trim());
  const problems = [];
  if (blocks.length !== 1) problems.push(`${blocks.length} FAQ sections`);
  if (faqs.length !== REQUIRED) problems.push(`${faqs.length} FAQs`);
  if (new Set(qs.map((q) => q.toLowerCase())).size !== qs.length) problems.push("duplicate questions");
  if (qs.some((q) => !q) || as.some((a) => !a)) problems.push("empty question or answer");
  counts[route] = faqs.length;
  if (problems.length) failures.push(`${route}: ${problems.join(", ")}`);
}

const tally = Object.values(counts).reduce((t, n) => ((t[n] = (t[n] ?? 0) + 1), t), {});
console.log(`Routes checked: ${routes.length} (${new Set(routes).size} unique)`);
console.log(`FAQ count distribution: ${JSON.stringify(tally)}`);
if (process.argv.includes("--list")) for (const [r, n] of Object.entries(counts).sort()) console.log(`${String(n).padStart(3)}  ${r}`);
if (failures.length) {
  console.log(`\n${failures.length} failing route(s):\n` + failures.join("\n"));
  process.exit(1);
}
console.log("All routes pass.");
