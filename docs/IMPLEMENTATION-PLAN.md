# Implementation plan & phase record

## Starting point
The repository was empty (no commits, no files), so the project was scaffolded with `create-next-app` (Next.js 16.4, React 19, TypeScript, Tailwind CSS v4, App Router, ESLint). There was no existing code to preserve.

## Reference research (2026-10-13)
- **Subject — https://leadgeneration.oxo1.com/**: a client-rendered app called "LeadGen AI — Prospect Intelligence Platform". Its product copy was extracted from the live JS bundles. Verified facts are in [`VERIFIED-FACTS.md`](./VERIFIED-FACTS.md); the site's testimonials, company names and dashboard numbers look like demo data and were not reused.
- **UI/UX — https://sky9india1.netlify.app/**: a Vite/React site with grouped mega-menus, Poppins headings over Inter body text, a slate light/dark palette, an enquiry form, FAQs and a "visual sitemap directory". These patterns were adapted with original styling (Plus Jakarta Sans and Inter, an indigo and teal OKLCH palette, original SVG illustrations); none of its branding or exact layouts were copied.

## Architecture
| Concern | Location |
|---|---|
| 300-route plan (single source of truth) | `src/content/plan.ts` |
| Page content (data, not JSX) | `src/content/pages/*.ts`, aggregated in `src/content/all-pages.ts` |
| Content schema | `src/content/types.ts` |
| Registry: live routes, breadcrumbs, related pages, search index | `src/lib/registry.ts` |
| Rendering of any content page | `src/app/[...slug]/page.tsx` → `src/components/ContentPage.tsx` |
| Custom pages | `src/app/page.tsx` (home), `src/app/sitemap/page.tsx`, `src/app/search/` |
| SEO | `generateMetadata` per route, `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/opengraph-image.tsx`, JSON-LD (Organization, BreadcrumbList, FAQPage) |
| Navigation | `src/lib/nav.ts` (mega-menu config), `Header`, `MobileNav`, `Footer` |
| Forms | `src/components/LeadForm.tsx` → `src/app/api/contact/route.ts` |

A route is **live** when it is in the plan and either has a content entry or is a custom route. Live routes automatically appear in `sitemap.xml`, the HTML sitemap, search, hub card grids and related-page suggestions. Any other path returns a real HTTP 404. This requires `partialPrefetching: false` in `next.config.ts`: with it enabled, `notFound()` arrives after streaming starts, so the response keeps a 200 status.

## Phase 1 (complete): 150 routes
- Group 1 Core: 15/15
- Group 2 Services: 35/35
- Group 3 Strategies: 40/40
- Group 4 Industries: 45/45
- Group 5 B2B: 15/30 (the hub plus the first 14 audience pages)

The exact route-by-route status (✅ live / ⏳ reserved) is in [`SITEMAP-300.md`](./SITEMAP-300.md).

## Phase 2 (complete): 150 routes
- B2B: 15 (`b2b-b.ts`) · B2C: 20 (`b2c.ts`) · Lead capture: 25 (`lead-capture-a.ts`, `lead-capture-b.ts`) · Qualification: 20 (`qualification.ts`) · Tools: 20 (`tools.ts`) · Resources: 30 (`resources-a.ts`, `resources-b.ts`) · Compare: 20 (`compare.ts`)
- The `phase` field in `plan.ts` records the phase each route was delivered in. Every route is now live (300/300).
- Phase 2 framework changes: dedicated hero illustrations for the form, chart, book, scale and flow variants; navigation, footer and homepage links to the new hubs; a header fix so nothing wraps at 1024–1440px; a smaller hero illustration on tablet (hidden on phones); and a duplicate-paragraph check in `content-check.mts`.

## Redesign to the reference layout (after Phase 2)
The homepage and the shared inner-page template were rebuilt to follow the structure and scale of https://sky9india1.netlify.app/, keeping LeadGen AI's own colours, logo and illustrations. No page content changed.
- **Global:** dark theme by default (the toggle still switches and persists), an 80px header with an active-section underline, a wider container (80rem), a larger type scale, pill badges above centred section headings (`SectionHeading`) and icon tiles.
- **Homepage** (`src/app/page.tsx`, `src/components/home/`):
  - Hero with an app-style preview panel labelled "Illustrative preview".
  - Scrolling capability strip.
  - Fact band using only verifiable numbers (3 sources, 0–100 score, 6 modules, live page count).
  - About split with a pipeline card.
  - Tabbed module cards (plan availability taken from VERIFIED-FACTS).
  - Why-choose grid, five-step methodology, alternating solution splits, industries grid, strategies, plans, FAQ, gradient CTA and learning-library hubs.
- **Inner pages** (`ContentPage.tsx`):
  - Full-width hero: breadcrumbs, icon and pill, large H1, subtitle, fact chips (category, audience, reading time) and two CTAs, beside a framed illustration.
  - Overview with key-takeaway cards and numbered "Part" sections, next to a sticky summary card (facts, on-this-page list, CTAs).
  - Centred step-card and consideration-card grids, an illustrative-example banner, hub topic link-cards, a centred FAQ, related-topic link-cards and a large CTA band.
- **Bug fixed:** the floating animation now animates the CSS `translate` property, so it no longer overrides SVG `transform` attributes, which had been moving illustration elements out of place.
- **Reference capture:** `scripts/ref-shots.mjs` saves full-page and per-viewport screenshots of any URL, for comparison.

## Adding or changing pages later
1. Edit an entry in `src/content/pages/*.ts` following [`CONTENT-BRIEF.md`](./CONTENT-BRIEF.md). New routes must first be added to `plan.ts`, which changes the 300 total.
2. Run `npm run check:content`, `npx tsc --noEmit`, `npm run lint` and `npm run build`, then `npm start` with `npm run qa` and `npm run qa:visual`, and finally `npm run docs:sitemap`.

## Visual QA
`npm run qa:visual` (needs `npm i --no-save playwright` and `PLAYWRIGHT_BROWSERS_PATH=0 npx playwright install chromium`, which installs Chromium inside `node_modules`):
- Screenshots representative pages at 1440, 820 and 390px in light and dark into `.qa/` (gitignored).
- Fails on horizontal overflow, console errors, failed requests or collapsed illustrations.
- Exercises the mega menu, Ctrl+K search, theme persistence, form validation, search filters and the mobile menu.
- With `--all`, also sweeps every sitemap URL at mobile width.

## Environment variables
| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes, in production | The marketing site's public origin (e.g. `https://www.example.com`). Used for canonical URLs, `sitemap.xml`, `robots.txt` and Open Graph URLs. It falls back to `https://leadgeneration.oxo1.com`, the app's domain, which is probably not where this site will be hosted. It is read at build time, so rebuild after changing it. |
| `CONTACT_WEBHOOK_URL` | Yes, before launch | An HTTPS endpoint (CRM inbox, automation webhook or email relay) that receives contact and request-access submissions as JSON. If it is unset, submissions are only written to the server log. If the endpoint fails, the user sees an error rather than a false success. Keep it in the host's secret store, never in the repo. |

## Deployment checklist
1. Set `NEXT_PUBLIC_SITE_URL` and `CONTACT_WEBHOOK_URL` in the hosting environment.
2. `npm ci && npm run build && npm start` (Node 20+). Any Node host that runs `next start` works. The site needs a server runtime for `/api/contact`, so it cannot be a static export.
3. Smoke-test after deploying: `node scripts/qa-crawl.mts https://<your-domain>`, plus one real form submission to confirm delivery.
4. Submit `https://<your-domain>/sitemap.xml` in search-engine webmaster tools.
5. Confirm with the business: plan prices (deliberately absent), the legal entity, and the authoritative privacy policy and terms for the app (the site's versions cover only this website).

## Known limitations
- Form delivery has not been verified end to end: no webhook was configured during development, and no real submissions were sent to external services.
- Hero and section visuals are original inline SVG illustrations, not photography. No image-generation tool was available.
- H1 capitalisation varies between content files: some use sentence case, some title case. It is consistent within each group.
