# Content brief for page writers

You are writing page content for the LeadGen AI marketing website (Next.js). Content is data: a TypeScript file
exporting `pages: PageContent[]`. The renderer handles layout, the hero, breadcrumbs, the CTA band and related cards.

## Read first
- `src/content/types.ts` — the `PageContent` schema (follow it exactly).
- `src/content/plan.ts` — the 300-page plan. Each page you write must use the exact `path` and fit the `title`, `audience` and `outline` given there.
- `docs/VERIFIED-FACTS.md` — the ONLY facts you may state about the LeadGen AI product.

## File format
```ts
import type { PageContent } from "../types";

export const pages: PageContent[] = [
  {
    path: "/services/ai-lead-scoring",
    title: "AI Lead Scoring",
    ...
  },
];
```
Use double-quoted strings. Use typographic apostrophes (’) and dashes (—) in prose so you rarely need escapes. The file must be valid TypeScript, with no other imports and no JSX.

## Depth and structure (per page)
- About **750–1,100 words** across intro, sections, steps, considerations, example and FAQs. Legal pages (privacy, terms) and short utility pages (contact, request access) may be 400–700 words.
- `intro`: 2 paragraphs that directly answer the page's main question in the first sentence.
- `highlights`: 3–4 short points (at most 8 words each).
- `sections`: 4–6 sections with specific, meaningful H2 headings (never "Introduction", "Overview" or "Conclusion"). Each has 1–3 paragraphs and bullets where useful.
- `steps`: a real process (4–6 steps) where the topic has one.
- `considerations`: 4–6 honest trade-offs, risks or prerequisites.
- `example`: one concrete scenario. It is ALWAYS rendered as "Illustrative example", so keep it obviously hypothetical (e.g. "a three-person web studio in Pune…"). Never use real company names.
- `faqs`: 3–5 genuinely useful questions specific to THIS page. Never repeat a question used on another page, even reworded slightly.
- `related`: 4–6 paths of genuinely related **Phase 1** pages (phase: 1 in plan.ts). Never link to Phase 2 paths, and never link to the page itself.
- `cta`: a heading, a sentence, a label and an href. Use `/book-a-demo`, `/contact` or `/plans`, or `https://leadgeneration.oxo1.com/` for "Start free".
- `metaTitle` ≤ 60 characters (the site name is appended automatically, so don't include it). `metaDescription` 120–160 characters. Every `h1`, `metaTitle` and `metaDescription` must be unique across the site.

## Truthfulness rules (critical)
- Product claims must come only from VERIFIED-FACTS.md. When describing how LeadGen AI helps, map the topic to verified capabilities: multi-source scraping (Google Maps, LinkedIn, IndiaMART), enrichment, 0–100 scoring with stored reasons, SEO audit, opportunity detection, CRM pipeline, AI-drafted outreach via the user's email transport, CSV export, role-based access, per-org API keys, worker fleet, and the Free/Growth/Scale plans.
- Never invent prices, statistics, percentages, benchmarks, customer names, testimonials, case studies, awards, certifications, integrations with named third-party tools, guarantees or results. Don't write "studies show" or "X% of buyers".
- General best-practice advice is welcome. Present it as guidance ("teams often…", "a common approach is…"), not as data.
- Regulatory topics (GDPR, CAN-SPAM, DPDP, TCPA, healthcare or legal advertising rules): stay general, tell readers to check current rules and take legal advice, and don't quote specific penalties or clauses unless you are certain.
- Industry pages should cover BOTH angles where it makes sense: how businesses in that industry generate their own leads, and how vendors and agencies prospect into that industry with a tool like LeadGen AI. Make them specific to the industry — its buying triggers, seasonality, typical decision-makers, listing signals on Google Maps or directories, objections and compliance sensitivities. Don't produce templated pages that only swap the industry name.
- Write for a professional audience in clear, concrete, varied prose with no hype and no keyword stuffing. British or Indian English spelling is fine ("optimise"); stay consistent within a file.

## Check your work
Run `node scripts/content-check.mts src/content/pages/<your-file>.ts` from the project root and fix every reported problem (the duplicate check only sees files passed in, so also run it with no arguments at the end to check across all files). Then run `npx tsc --noEmit --skipLibCheck --strict --module esnext --moduleResolution bundler --target es2022 src/content/pages/<your-file>.ts` to confirm the file type-checks.

## Phase 2 addendum
- `related` may now point to ANY path in `plan.ts` (Phase 1 or Phase 2), because all 300 routes will be live at launch. Prefer a mix: 2–3 Phase 1 pages (services, strategies, industries, b2b, core) and 2–3 pages from your own group or other Phase 2 groups.
- 148 Phase 1 pages already exist. Before writing, skim the h1s and FAQ questions in `src/content/pages/*.ts` for overlapping topics (e.g. `/services/ai-lead-scoring` vs `/lead-qualification/lead-scoring-models`). Take a clearly different angle, and never reuse a question or paragraph.
- Several writers work in parallel. Run the no-argument cross-file check at the very end and fix any duplicates it reports in YOUR file only.
- Write content with the Write or Edit tools, not Bash heredocs: the project-isolation hook misreads object text such as a FAQ `q` key as a drive path.
- Don't edit files other than your own content file.
