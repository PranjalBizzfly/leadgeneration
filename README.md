# LeadGen AI — marketing website

A Next.js 16 (App Router, TypeScript, Tailwind CSS v4) site for LeadGen AI: 300 content pages, delivered in two phases. All 300 are live.

```bash
npm install
npm run dev            # http://localhost:3000
npm run build && npm start
```

| Script | Purpose |
|---|---|
| `npm run check:content` | Validate content files (plan membership, metadata lengths, duplicates, related links, word counts) |
| `npm run qa` | Crawl a running server (`npm start`, port 3000): statuses, titles, H1s, canonicals, broken links, sitemap, 404s |
| `npm run qa:visual` | Playwright screenshots, overflow, console-error and interaction checks (setup in the implementation plan) |
| `npm run docs:sitemap` | Regenerate `docs/SITEMAP-300.md` |

Environment variables (both needed before launch): `NEXT_PUBLIC_SITE_URL` (production origin, used for canonicals and the sitemap; read at build time) and `CONTACT_WEBHOOK_URL` (destination for form submissions). See the deployment checklist in the implementation plan.

Docs: [implementation plan & phase record](docs/IMPLEMENTATION-PLAN.md) · [300-page sitemap](docs/SITEMAP-300.md) · [verified facts](docs/VERIFIED-FACTS.md) · [content brief](docs/CONTENT-BRIEF.md)
