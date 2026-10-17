/**
 * Plan facts, word for word from docs/VERIFIED-FACTS.md ("Plans"). No prices are published, so none appear.
 * Do not add features, limits or availability that are not listed there.
 */
export const PLAN_TIERS = [
  {
    name: "Free",
    blurb: "For small teams just getting started",
    features: ["3 scrape queries", "Website enrichment", "Lead dashboard and CSV export", "1 admin user"],
  },
  {
    name: "Growth",
    blurb: "For growing teams that need deeper insights and automation",
    features: ["50 scrape queries per month", "AI lead scoring and outreach", "Full team access with 7 role modules", "SEO and website-build reports"],
    featured: true,
  },
  {
    name: "Scale",
    blurb: "For high-volume operations that demand dedicated infrastructure",
    features: [
      "Unlimited queries",
      "A distributed scrape fleet",
      "Multiple sources (LinkedIn, IndiaMART)",
      "Per-org API keys",
      "Priority support and SLA",
      "A dedicated success manager",
    ],
  },
] as const;

/** Notes the live site states alongside the plans (VERIFIED-FACTS.md). */
export const PLAN_NOTES = ["No hidden fees, cancel anytime", "Save 20% on annual billing", "3 free queries included"] as const;
