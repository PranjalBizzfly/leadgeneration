/** Site-wide configuration. Set NEXT_PUBLIC_SITE_URL to the production origin before deploying. */
export const SITE = {
  name: "LeadGen AI",
  tagline: "Prospect Intelligence Platform",
  description:
    "LeadGen AI helps teams find, understand, and reach the right prospects. One pipeline covers multi-source scraping, enrichment, scoring, audits and outreach.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://leadgeneration.oxo1.com").replace(/\/$/, ""),
  /** The LeadGen AI application, used for "Start free" CTAs. */
  appUrl: "https://leadgeneration.oxo1.com/",
} as const;

export function absoluteUrl(path: string) {
  return `${SITE.url}${path === "/" ? "" : path}`;
}
