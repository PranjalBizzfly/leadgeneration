// Usage: node scripts/content-check.mts [file.ts ...]
// Validates page content files: plan membership, word counts, metadata lengths,
// related-link targets, and duplicate titles/descriptions/FAQ questions.
import { readdirSync } from "node:fs";
import { PLAN } from "../src/content/plan.ts";
import type { PageContent } from "../src/content/types.ts";

const planByPath = new Map(PLAN.map((p) => [p.path, p]));
const planned = new Set(PLAN.map((p) => p.path));
const files = process.argv.slice(2).length
  ? process.argv.slice(2)
  : readdirSync("src/content/pages").filter((f) => f.endsWith(".ts")).map((f) => `src/content/pages/${f}`);

const words = (s: string) => s.split(/\s+/).filter(Boolean).length;
function pageWords(p: PageContent) {
  const parts: string[] = [...p.intro, ...p.highlights];
  for (const s of p.sections) parts.push(s.heading, ...s.paragraphs, ...(s.bullets ?? []));
  if (p.steps) parts.push(p.steps.heading, ...p.steps.items.flatMap((i) => [i.title, i.text]));
  if (p.considerations) parts.push(...p.considerations.items);
  if (p.example) parts.push(p.example.text);
  for (const f of p.faqs) parts.push(f.q, f.a);
  return words(parts.join(" "));
}

let problems = 0;
const seenBlocks = new Map<string, string>();
const seen = { h1: new Map<string, string>(), meta: new Map<string, string>(), desc: new Map<string, string>(), faq: new Map<string, string>() };
const warn = (path: string, msg: string) => { problems++; console.log(`  ✗ ${path}: ${msg}`); };

for (const file of files) {
  const mod = await import(new URL(`../${file}`, import.meta.url).href);
  const pages: PageContent[] = mod.pages;
  console.log(`\n${file} — ${pages.length} pages`);
  for (const p of pages) {
    const w = pageWords(p);
    console.log(`  ${String(w).padStart(5)}w  ${p.path}`);
    if (!planByPath.has(p.path)) warn(p.path, "not in plan");
    if (p.metaTitle.length > 60) warn(p.path, `metaTitle ${p.metaTitle.length} chars`);
    if (p.metaDescription.length < 110 || p.metaDescription.length > 165) warn(p.path, `metaDescription ${p.metaDescription.length} chars`);
    for (const r of p.related) if (!planned.has(r)) warn(p.path, `related link not in the plan: ${r}`);
    if (p.related.includes(p.path)) warn(p.path, "links to itself");
    if (!/^(\/|https:\/\/leadgeneration\.oxo1\.com)/.test(p.cta.href)) warn(p.path, `bad cta href ${p.cta.href}`);
    const checks: [keyof typeof seen, string][] = [["h1", p.h1], ["meta", p.metaTitle], ["desc", p.metaDescription]];
    for (const [k, v] of checks) {
      const prev = seen[k].get(v.toLowerCase());
      if (prev) warn(p.path, `duplicate ${k} with ${prev}`);
      seen[k].set(v.toLowerCase(), p.path);
    }
    for (const f of p.faqs) {
      const prev = seen.faq.get(f.q.toLowerCase());
      if (prev) warn(p.path, `duplicate FAQ "${f.q}" with ${prev}`);
      seen.faq.set(f.q.toLowerCase(), p.path);
    }
    if (/lorem|todo|tbd|placeholder/i.test(JSON.stringify(p))) warn(p.path, "placeholder text");
    // No paragraph, bullet or FAQ answer of 12+ words may appear on two pages.
    const blocks = [...p.intro, ...p.sections.flatMap((s) => [...s.paragraphs, ...(s.bullets ?? [])]), ...p.faqs.map((f) => f.a), ...(p.considerations?.items ?? [])];
    for (const b of blocks) {
      if (words(b) < 12) continue;
      const key = b.toLowerCase().replace(/\s+/g, " ").trim();
      const prev = seenBlocks.get(key);
      if (prev && prev !== p.path) warn(p.path, `paragraph duplicated from ${prev}: "${b.slice(0, 60)}…"`);
      seenBlocks.set(key, p.path);
    }
  }
}
console.log(`\n${problems} problem(s)`);
