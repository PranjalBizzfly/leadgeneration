---
name: website-development
description: Rules and working procedure for building, editing and verifying the LeadGen AI marketing website (Next.js 16 App Router, 300-page content plan, 3D homepage story). Use for any task that adds or changes pages, content, design, images, animations, forms, SEO or navigation in this repository.
---

# LeadGen AI website: development skill

The project files are the source of truth. When this file and the code disagree, trust the code and update this file.

## 1. Project overview

- **What it is:** the marketing site for **LeadGen AI**, a prospect intelligence platform (live app: https://leadgeneration.oxo1.com/). Audience: agencies, sales teams and B2B suppliers, mostly in India.
- **Stack:** Next.js 16 App Router (Cache Components on), React 19, TypeScript, Tailwind CSS v4, three.js via `@react-three/fiber` and `drei` for the homepage 3D office. Fonts: Space Grotesk (headings), Inter (body). Before using Next APIs, read `node_modules/next/dist/docs/`, as `AGENTS.md` instructs. This version differs from older Next.js.
- **Routes and content:**
  - `src/content/plan.ts`: the 300-route plan, the single source of truth for content pages.
  - `src/content/pages/*.ts`: page content as data (schema in `src/content/types.ts`), aggregated in `src/content/all-pages.ts`.
  - `src/lib/registry.ts`: live routes, breadcrumbs, related pages and the search index. A route is live only if it is in the plan with content, or is a custom route.
  - `src/app/[...slug]/page.tsx`: renders every content page through `src/components/ContentPage.tsx`.
  - Custom routes: `/` (`src/app/page.tsx`), `/sitemap`, `/search`, `/careers`, `/vendors`, `/media`, `/press-kit`, `/blog` and `/blog/[slug]`. Company pages and blog posts are registered in `src/content/company.ts` and `src/content/blog-posts.ts`.
  - Navigation: `src/lib/nav.ts` and `src/components/Footer.tsx`.
- **Key docs:** read the relevant one before working in its area. Don't copy them into this file.
  - [`docs/VERIFIED-FACTS.md`](../../../docs/VERIFIED-FACTS.md): the only product claims allowed.
  - [`docs/CONTENT-BRIEF.md`](../../../docs/CONTENT-BRIEF.md): how to write page content.
  - [`docs/IMPLEMENTATION-PLAN.md`](../../../docs/IMPLEMENTATION-PLAN.md): architecture, environment variables, deployment and known limitations.
  - [`docs/SITEMAP-300.md`](../../../docs/SITEMAP-300.md): generated route list (`npm run docs:sitemap`).
  - [`docs/IMAGE-PROMPT-BRIEF.md`](../../../docs/IMAGE-PROMPT-BRIEF.md) and `docs/IMAGE-PROMPTS.md`: image rules and the prompt for each image position.

## 2. Design and UI/UX

- Premium, clean and content-rich. Reuse the existing design tokens in `src/app/globals.css` (`--bg`, `--surface`, `--ink`, `--brand`, `--grad` and so on) and components (`SectionHeading`, `.card`, `.card-link`, `.btn-primary`, `.btn-ghost`, `.pill`, `.icon-tile`, `TopicLinkGrid`, `CtaBand`, `PageHero`). Never hard-code one-off colours.
- The brand palette comes from the logo: indigo `#6366F1`, violet `#8B5CF6`, cyan `#22D3EE`. The logo is the gradient "L" tile in `src/components/Logo.tsx`.
- Keep spacing, card sizes and section rhythm consistent (`.section-y`, `.container-x`). Avoid empty gaps and repeated identical layouts, but keep whitespace that is there on purpose.
- Every change must work at desktop (1440px+), tablet (820px) and phone (390px) widths with no horizontal scroll.
- **Light and dark themes are both supported.** The toggle stores its choice in `localStorage["leadgen-site-theme"]` and dark is the default. Use theme tokens so new UI works in both. Only the inner-page photo heroes and the footer are intentionally always dark.

## 3. Content quality

- Simple, natural English. No hype, filler, keyword stuffing or robotic phrasing.
- Product claims come only from `docs/VERIFIED-FACTS.md`. Never invent prices (none are published), statistics, customers, testimonials, integrations, certifications or guarantees. Label any scenario as an illustrative example or sample data.
- Each page stays on its own topic and audience (see its `plan.ts` entry). No duplicated paragraphs or FAQ questions across pages; `npm run check:content` enforces this.
- Visible page titles must match their navigation and link labels. Title Case is used for UI labels and headings (helper: `src/lib/title-case.ts`).

## 4. Pages and routing

- Read `plan.ts` and the registry before adding or changing pages. Keep existing URLs, navigation and internal links working unless the change is explicitly requested.
- New content pages go in `plan.ts` plus a `src/content/pages/*.ts` entry imported in `all-pages.ts`. New custom pages also need a registry entry, so they appear in `sitemap.xml`, the HTML sitemap and search.
- No placeholder text, duplicate routes or broken links. Unknown and unfinished routes must return a real 404. This depends on `partialPrefetching: false` in `next.config.ts`, so don't re-enable it.

## 5. Images and accessibility

- All photos are self-hosted 1600×1000 WebP in `public/images/pages/`, mapped in the generated `src/content/images.ts` and rendered with `next/image` (quality 90) through `Photo` or `heroImage()`.
- To add images: drop the files into `public/images/incoming/`, then run `node scripts/import-images.mjs` (or `scripts/reencode-images.mjs` to re-encode). Alt text comes from `docs/image-prompts/*.json`.
- No third-party or stock images. Unsplash, Pexels and similar photos were removed on purpose. No hotlinking, no readable text inside images, and don't reuse one image on unrelated pages.
- Meaningful images get descriptive alt text; purely decorative ones get `alt=""` (`Photo decorative`).
- Keep semantic HTML: one `<h1>` per page, a logical heading order, labelled form fields, keyboard-reachable controls and visible focus styles.

## 6. Animations and interactions

- Motion lives in `src/components/Motion.tsx` (scroll reveals, card tilt, magnetic buttons, count-ups via `data-count`, header state), the motion section of `globals.css` (scroll-driven section entrances, page transitions) and `src/app/template.tsx` (React `ViewTransition`).
- Animations must be subtle and useful. They must never hide content permanently, cause layout shift or interfere with scrolling, and must switch off under `prefers-reduced-motion`.
- **Don't** clip-path or hide images until revealed: a fully clipped lazy image never intersects, so it never loads. Don't apply reveals inside `<details>`.
- **3D homepage (`src/components/home/Hero3D.tsx`, `office3d/`):** this is the most fragile area.
  - The canvas must stay opaque with `preserveDrawingBuffer: true`.
  - Keep a fixed box height, so the canvas never resizes when nearby text changes.
  - No `backdrop-filter`, CSS `filter` or scale animation on elements over or around the canvas, and no per-frame React state in the hero.
  - Each of these has caused blank or blinking frames on real GPUs.
  - Story copy and sample data live in `office3d/story.ts`. It must stay clearly labelled "Sample Data" and must never send anything.
- Test everything interactive: menus, mobile nav, search (Ctrl+K), theme toggle, forms and the 3D story controls.

## 7. Forms, SEO and technical quality

- Forms (`LeadForm`, `PhoneField`) post to `src/app/api/contact/route.ts`. It does server-side validation and has a honeypot field. Submissions go to `CONTACT_WEBHOOK_URL` if it is set; otherwise they only reach the server log. Never claim delivery works unless it has been verified.
- Environment variables: `NEXT_PUBLIC_SITE_URL` (canonical origin, read at build time), `CONTACT_WEBHOOK_URL`, `CONTACT_WEBHOOK_TIMEOUT_MS` and `NEXT_PUBLIC_GA_MEASUREMENT_ID`. GA4 loads only when the ID is set and the visitor gives consent. Never commit secrets or invent IDs.
- Every page uses `pageMetadata()` from `src/lib/metadata.ts`, giving a unique title and description, a canonical URL and Open Graph/Twitter tags. `sitemap.ts`, `robots.ts` and the JSON-LD (Organization, BreadcrumbList, FAQPage) must stay correct.
- Keep the existing conventions: server components by default, `"use client"` only when needed, the `@/` import alias, no new dependencies without a clear need. Playwright and ffmpeg-static are installed with `--no-save` and are not dependencies.

## 8. Coding and change management

- Read a file before editing it, reuse the patterns already there, and keep changes focused. No drive-by refactors, no deleting working features, no reverting other people's in-progress changes.
- Don't commit, push or deploy unless asked. Deployment goes to the Vercel team `team_6wteTJFEAdbbyl4ttL1U5OTv`. The public domain is `leadgeneration-ai-web.vercel.app`.

## 9. Quality assurance

Run what applies, and report anything you couldn't run rather than saying it passed:

```bash
npx tsc --noEmit && npm run lint && npm run check:content && npm run build
npm start                     # then, against http://localhost:3000:
npm run qa                    # all routes: status, metadata, canonicals, links, sitemap, 404s
npm run qa:visual             # Playwright: overflow, console errors, interactions (PLAYWRIGHT_BROWSERS_PATH=0)
node scripts/image-audit.mjs  # images self-hosted, WebP, loaded, alt text
node scripts/motion-test.mjs  # reveals resolve, tilt, page transitions, reduced motion
node scripts/tour-test.mjs    # homepage 3D walkthrough
```

Test on the production build (`npm start`). The dev server's hot reload recreates WebGL contexts and makes the 3D hero look broken. The automated browser renders WebGL in software, so it can't reproduce GPU-only problems; say so when that matters.

## 10. Working procedure for every task

1. Understand the request and inspect the current implementation and the relevant docs above.
2. Identify the exact files and components involved.
3. Make only the required change, following these rules.
4. Verify it with the checks in section 9, plus screenshots for anything visual.
5. Summarise what changed, which files, what was verified, and anything left open.
