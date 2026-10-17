// Layout coverage: for every content page, which layout family rendered it, and is all of its content present?
// Reads the built HTML (run after `next build`). Usage: node scripts/layout-coverage.mjs [--list]
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = join(process.env.NEXT_DIST_DIR || ".next", "server", "app");
const pages = [];
for (const f of readdirSync("src/content/pages")) pages.push(...(await import(pathToFileURL(resolve("src/content/pages", f)).href)).pages);

const decode = (s) =>
  s
    .replace(/<!-- -->/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
// Compare on letters/digits only, so markup splits, entities and typing-effect spans can't cause false misses.
const squash = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "");

const counts = {};
const problems = [];
for (const c of pages) {
  const file = join(ROOT, `${c.path.slice(1)}.html`);
  if (!existsSync(file)) {
    problems.push(`${c.path}: no built HTML`);
    continue;
  }
  const raw = readFileSync(file, "utf8");
  const family = raw.match(/class="page-root layout-([a-z]+)/)?.[1] ?? "UNKNOWN";
  counts[family] = (counts[family] ?? 0) + 1;
  if (family === "UNKNOWN") problems.push(`${c.path}: no layout family on page root`);
  // Text of the page body (scripts and the RSC payload excluded) for content checks.
  const body = squash(decode(raw.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ")));
  const must = [
    ["h1", c.h1],
    ...c.intro.map((t) => ["intro", t]),
    ...c.highlights.map((t) => ["highlight", t]),
    ...c.sections.flatMap((s) => [["section heading", s.heading], ...s.paragraphs.map((t) => ["paragraph", t]), ...(s.bullets ?? []).map((t) => ["bullet", t])]),
    ...(c.steps ? [["steps heading", c.steps.heading], ...c.steps.items.flatMap((i) => [["step", i.title], ["step text", i.text]])] : []),
    ...(c.considerations ? [["considerations", c.considerations.heading], ...c.considerations.items.map((t) => ["consideration", t])] : []),
    ...(c.example ? [["example", c.example.heading], ["example text", c.example.text]] : []),
    ...c.faqs.flatMap((f) => [["faq q", f.q], ["faq a", f.a]]),
  ];
  // The glossary renders "Term: definition" bullets as term + definition (capitalised), so match each half.
  for (const [kind, text] of must) {
    const parts = family === "glossary" && kind === "bullet" && text.includes(": ") ? text.split(": ") : [text];
    for (const part of parts) {
      if (!body.includes(squash(part))) {
        problems.push(`${c.path} [${family}]: missing ${kind}: "${text.slice(0, 60)}"`);
        break;
      }
    }
  }
  const h1s = (raw.replace(/<script[\s\S]*?<\/script>/g, "").match(/<h1\b/g) ?? []).length;
  if (h1s !== 1) problems.push(`${c.path} [${family}]: ${h1s} <h1> elements`);
}

console.log(`Content pages: ${pages.length}`);
console.log("Pages per layout family:", JSON.stringify(Object.fromEntries(Object.entries(counts).sort((a, b) => b[1] - a[1]))));
if (process.argv.includes("--list")) for (const c of pages) console.log(c.path);
if (problems.length) {
  console.log(`\n${problems.length} problem(s):\n${problems.slice(0, 40).join("\n")}`);
  process.exit(1);
}
console.log("Every content page has a layout family, one <h1>, and all of its content.");
