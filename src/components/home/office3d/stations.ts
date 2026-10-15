/** The six product stations in the 3D office, in pipeline order. Copy comes from each feature's own page. */
export interface Station {
  id: string;
  short: string;
  title: string;
  blurb: string;
  href: string;
  image: string;
  /** Room centre on the office floor plate (x, z). */
  pos: [number, number];
  accent: string;
}

export const STATIONS: Station[] = [
  {
    id: "scrape",
    short: "Scrape",
    title: "Multi-Source Lead Scraping",
    blurb: "Run one query across Google Maps, LinkedIn and IndiaMART and get one de-duplicated, source-traced record per business.",
    href: "/services/multi-source-lead-scraping",
    image: "/images/pages/services--multi-source-lead-scraping.webp",
    pos: [-3.4, -5.5],
    accent: "#6366f1",
  },
  {
    id: "enrich",
    short: "Enrich",
    title: "AI Contact Enrichment",
    blurb: "Leads are queued for enrichment automatically: websites found, contact pages crawled, and new values written only when they are more complete.",
    href: "/services/ai-contact-enrichment",
    image: "/images/pages/services--ai-contact-enrichment.webp",
    pos: [4, -5.5],
    accent: "#0ea5e9",
  },
  {
    id: "score",
    short: "Score",
    title: "AI Lead Scoring",
    blurb: "Every lead gets one 0–100 score based on completeness, website health, market fit and activity signals, with the reasons stored on the record.",
    href: "/services/ai-lead-scoring",
    image: "/images/pages/services--ai-lead-scoring.webp",
    pos: [11.4, -5.5],
    accent: "#8b5cf6",
  },
  {
    id: "audit",
    short: "Audit",
    title: "SEO Website Audit",
    blurb: "Audit a lead’s website across technical health, content, metadata, structured data and performance, and hand over a graded, prioritised fix list.",
    href: "/services/seo-website-audit",
    image: "/images/pages/services--seo-website-audit.webp",
    pos: [11.4, 5.5],
    accent: "#10b981",
  },
  {
    id: "detect",
    short: "Detect",
    title: "Business Opportunity Detection",
    blurb: "Flag businesses with no website, broken sites, no reachable contact route or weak audits, each flag with its evidence.",
    href: "/services/business-opportunity-detection",
    image: "/images/pages/services--business-opportunity-detection.webp",
    pos: [4, 5.5],
    accent: "#f59e0b",
  },
  {
    id: "crm",
    short: "CRM & Outreach",
    title: "CRM & AI Outreach",
    blurb: "Work leads on a pipeline board with stages, owners and full activity history, linked to enrichment, scores, audits and logged outreach.",
    href: "/services/crm-pipeline-management",
    image: "/images/pages/services--crm-pipeline-management.webp",
    pos: [-3.4, 5.5],
    accent: "#ec4899",
  },
];
