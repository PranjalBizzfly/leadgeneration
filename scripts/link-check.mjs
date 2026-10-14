// Audits internal link labels against destination page names in the built site.
// A page's name is the current-page item in its breadcrumb ("Home" for /).
// A link passes when its text, or a title element inside a card link, equals that name exactly.
// Run after `next build`: node scripts/link-check.mjs [--all]
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = ".next/server/app";
const SKIP = new Set(["_not-found", "_global-error"]);

function walk(dir, out = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (f.endsWith(".html")) out.push(p);
  }
  return out;
}

const text = (html) =>
  html
    .replace(/<svg[\s\S]*?<\/svg>/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ")
    .replace(/<!-- -->/g, "")
    .replace(/\s+/g, " ")
    .trim();

const pages = new Map();
for (const file of walk(ROOT)) {
  const route = relative(ROOT, file).replace(/\\/g, "/").replace(/\.html$/, "");
  if (SKIP.has(route)) continue;
  const path = route === "index" ? "/" : `/${route}`;
  const html = readFileSync(file, "utf8").replace(/<script[\s\S]*?<\/script>/g, "");
  const crumb = html.match(/<span aria-current="page"[^>]*>([\s\S]*?)<\/span>/);
  pages.set(path, { name: path === "/" ? "Home" : crumb ? text(crumb[1]) : null, html });
}

const mismatches = new Map();
let checked = 0;
for (const [from, { html }] of pages) {
  for (const m of html.matchAll(/<a\b[^>]*href="(\/[^"#?]*)[^"]*"[^>]*>([\s\S]*?)<\/a>/g)) {
    const to = m[1].replace(/\/$/, "") || "/";
    const target = pages.get(to);
    if (!target) continue;
    // The brand logo (mark + wordmark) links home; it is a logo, not a text label.
    if (/aria-label="[^"]* home"/.test(m[0].slice(0, m[0].indexOf(">") + 1))) continue;
    const label = text(m[2]);
    checked++;
    if (label === target.name) continue;
    // Cards: the link wraps a title element plus a description; the title must be the exact name.
    const parts = [...m[2].matchAll(/<(h[1-6]|span|strong|p|div)\b[^>]*>([\s\S]*?)<\/\1>/g)].map((x) => text(x[2]));
    if (parts.includes(target.name)) continue;
    const key = `${to}\u0000${label}`;
    const e = mismatches.get(key) ?? { to, name: target.name, label, count: 0, from: new Set() };
    e.count++;
    e.from.add(from);
    mismatches.set(key, e);
  }
}

const unnamed = [...pages].filter(([, p]) => !p.name).map(([path]) => path);
console.log(`Pages: ${pages.size}   Internal links checked: ${checked}   Distinct mismatches: ${mismatches.size}`);
if (unnamed.length) console.log(`Pages with no breadcrumb name: ${unnamed.join(", ")}`);
const rows = [...mismatches.values()].sort((a, b) => b.count - a.count);
for (const r of process.argv.includes("--all") ? rows : rows.slice(0, 80))
  console.log(`${String(r.count).padStart(5)}  ${r.to}  name="${r.name}"  label="${r.label}"  (on ${r.from.size} pages, e.g. ${[...r.from][0]})`);
process.exit(mismatches.size ? 1 : 0);
