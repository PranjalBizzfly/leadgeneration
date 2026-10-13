// Usage: node scripts/sitemap-doc.mts — regenerates docs/SITEMAP-300.md from src/content/plan.ts
// and marks each route live/reserved based on whether a content file defines it.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { PLAN } from "../src/content/plan.ts";

const authored = new Set<string>(["/", "/sitemap"]);
for (const f of readdirSync("src/content/pages")) {
  for (const m of readFileSync(`src/content/pages/${f}`, "utf8").matchAll(/^\s{4}path: "([^"]+)"/gm)) authored.add(m[1]);
}

const labels: Record<string, string> = {
  core: "1. Core website, company, contact & conversion",
  services: "2. Lead generation services",
  strategies: "3. Strategies, methods & campaign types",
  industries: "4. Industry-specific lead generation",
  b2b: "5. B2B lead generation & business audiences",
  b2c: "6. B2C lead generation & consumer audiences",
  "lead-capture": "7. Lead capture, landing pages, forms & CRO",
  qualification: "8. Qualification, scoring, nurturing & CRM",
  tools: "9. Tools, integrations, analytics & reporting",
  resources: "10. Educational resources, guides & glossary",
  compare: "11. Comparisons, use cases & implementation",
};

const live = PLAN.filter((p) => authored.has(p.path));
let md = `# 300-Page Sitemap — LeadGen AI website\n\nGenerated from \`src/content/plan.ts\` by \`node scripts/sitemap-doc.mts\`. Do not edit by hand.\n\n`;
md += `- Total planned routes: **${PLAN.length}**\n- Live (implemented): **${live.length}**\n- Reserved for Phase 2: **${PLAN.length - live.length}**\n\n`;
md += `Status key: ✅ live · ⏳ reserved for Phase 2\n\n`;
for (const [key, label] of Object.entries(labels)) {
  const rows = PLAN.filter((p) => p.group === key);
  md += `## ${label} — ${rows.length} pages\n\n| # | Status | Route | Title | Audience | Outline |\n|---|---|---|---|---|---|\n`;
  rows.forEach((p, i) => {
    md += `| ${i + 1} | ${authored.has(p.path) ? "✅" : "⏳"} P${p.phase} | \`${p.path}\` | ${p.title} | ${p.audience} | ${p.outline} |\n`;
  });
  md += "\n";
}
writeFileSync("docs/SITEMAP-300.md", md);
console.log(`docs/SITEMAP-300.md written: ${live.length} live / ${PLAN.length} planned`);
