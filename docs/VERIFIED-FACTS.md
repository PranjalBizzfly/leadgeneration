# Verified source facts — LeadGen AI

Source: https://leadgeneration.oxo1.com/ (inspected 2026-10-13: the landing page, feature catalog and feature-detail bundles of the live site).
Only the statements below can be presented as facts about the product. Everything else on the site
must be framed as general, educational lead generation guidance, or labelled as an illustrative example.

## Brand
- Name: **LeadGen AI**. Descriptor: "Prospect Intelligence Platform".
- Positioning: "helps teams find, understand, and reach the right prospects."
- Hero line: "AI-powered lead generation" — "From scraping to outreach, one AI-powered pipeline to discover, qualify, and close prospects — across Google Maps, LinkedIn, and IndiaMART."

## Data sources
- Google Maps, LinkedIn and IndiaMART.
- A single query (a category and a location, or a directory search term) fans out to each enabled source.
- Results are normalised into one lead record per business and de-duplicated across sources.
- Per lead: business name, category, full postal address; website, listed phone numbers, public email addresses; ratings, review counts, listing-completeness signals; the source each field came from (traceability).
- Long jobs run on a worker fleet, so a large scrape keeps going after the browser tab is closed. Quotas are enforced per plan and per billing cycle, and every job records what it fetched and when.

## AI Contact Enrichment
- New leads are queued for enrichment automatically. The platform resolves the website, crawls the pages that normally carry contact details, and reconciles the results with the existing record, writing a field only when the new value is more complete.
- Adds business emails discovered on the company's own site, phone numbers normalised and checked for a plausible format, the website and its contact/about pages, social profiles and company details.
- Reads only the sources the user asked for, records where each value came from, and never overwrites a field the user edited by hand.

## AI Lead Scoring
- A single 0–100 score per lead, with the reasons stored on the record.
- The score reflects record completeness, website health and whether the business is credibly online, fit against the user's stated market, category and geography, and signals of an active, operating business.
- Users can sort and filter by score and push the top band into the CRM pipeline. Scores recalculate when a lead is re-enriched.

## SEO Website Audit
- Fetches a lead's website and checks it against rules covering technical health, content, metadata, structured data and performance. It grades each area and rolls the grades into an overall score.
- The report contains an overall grade with a per-area scorecard, findings ranked by severity with plain-English explanations, performance and page-health metrics, and a prioritised fix list that can be handed to the prospect ("client-ready output").

## Business Opportunity Detection
- Flags businesses with no website, sites that don't resolve, listings with no reachable contact route, and weak audits (bottom band).
- Each flag carries the evidence behind it, and the flagged lead can be contacted from the outreach tools.

## CRM & AI Outreach
- A pipeline board with stages, owners and full activity history.
- AI-drafted outreach that uses the lead's own enrichment and audit data.
- Campaigns are sent through the user's configured email transport.
- Role-based access, so each team sees the records it should.
- Every message is logged against its lead. Outreach respects sending limits and opt-out obligations, and the user stays in control of the list.

## Plans (no prices published — never invent prices)
- **Free** — "For small teams just getting started": 3 scrape queries, website enrichment, lead dashboard and CSV export, 1 admin user.
- **Growth** (marked "Most popular") — "For growing teams that need deeper insights and automation": 50 scrape queries per month, AI lead scoring and outreach, full team access with 7 role modules, SEO and website-build reports.
- **Scale** — "For high-volume operations that demand dedicated infrastructure": unlimited queries, a distributed scrape fleet, multiple sources (LinkedIn, IndiaMART), per-org API keys, priority support and SLA, a dedicated success manager.
- The site also says: "No hidden fees, cancel anytime", "Save 20%" (on annual billing), "Multi-tenant & role-based", "3 free queries included" and "Request access".

## Do NOT use
- The testimonial names, company names (Nimbus Cloud, VectorForge, PulseLayer) and dashboard numbers on the live site appear to be demo or placeholder content. They are unverified, so never reproduce them.
- No customer names, case studies, statistics, certifications, CRM integrations (beyond CSV export, API keys and the email transport), compliance certifications or guarantees.
