import { getPlan, isLive } from "./registry";

export interface NavLink {
  title: string;
  href: string;
  description?: string;
}
export interface NavColumn {
  heading: string;
  links: NavLink[];
}
export interface NavItem {
  label: string;
  href: string;
  columns?: NavColumn[];
  footer?: NavLink;
  /** Task-oriented shortcuts ("By Goal"): each column is one goal with 2–3 links. */
  goals?: NavColumn[];
  /** Path prefixes that mark this item active. */
  match: string[];
}

const descriptions: Record<string, string> = {
  "/services/multi-source-lead-scraping": "One query across three sources",
  "/services/google-maps-lead-extraction": "Local businesses by category and city",
  "/services/linkedin-lead-enrichment": "Company context for B2B outreach",
  "/services/indiamart-lead-extraction": "Suppliers and B2B sellers in India",
  "/services/ai-contact-enrichment": "Emails, phones, sites and socials",
  "/services/ai-lead-scoring": "A 0–100 score with reasons",
  "/services/seo-website-audit": "Client-ready website reports",
  "/services/business-opportunity-detection": "Spot businesses that need help",
  "/services/crm-pipeline-management": "Stages, owners and history",
  "/services/ai-outreach-campaigns": "AI-drafted, logged outreach",
};

function links(paths: string[]): NavLink[] {
  return paths
    .filter(isLive)
    .map((href) => ({ title: getPlan(href)!.title, href, description: descriptions[href] }));
}

function col(heading: string, paths: string[]): NavColumn {
  return { heading, links: links(paths) };
}

export const NAV: NavItem[] = [
  { label: "Home", href: "/", match: ["/"] },
  {
    label: "Services",
    match: ["/services"],
    href: "/services",
    columns: [
      col("Discover", ["/services/multi-source-lead-scraping", "/services/google-maps-lead-extraction", "/services/linkedin-lead-enrichment", "/services/indiamart-lead-extraction"]),
      col("Enrich & Qualify", ["/services/ai-contact-enrichment", "/services/ai-lead-scoring", "/services/seo-website-audit", "/services/business-opportunity-detection"]),
      col("Engage & Operate", ["/services/crm-pipeline-management", "/services/ai-outreach-campaigns", "/services/csv-lead-export", "/services/role-based-team-access", "/services/api-access"]),
    ],
    goals: [
      col("Find Leads", ["/services/multi-source-lead-scraping", "/services/google-maps-lead-extraction", "/services/lead-list-building"]),
      col("Fill Missing Contacts", ["/services/ai-contact-enrichment", "/services/website-enrichment", "/services/business-email-discovery"]),
      col("Decide Who To Call", ["/services/ai-lead-scoring", "/services/sales-prioritisation", "/services/business-opportunity-detection"]),
      col("Reach Out", ["/services/ai-outreach-campaigns", "/services/ai-drafted-outreach-messages", "/services/crm-pipeline-management"]),
    ],
    footer: { title: "Services", href: "/services" },
  },
  {
    label: "Strategies",
    match: ["/lead-generation-strategies", "/b2b-lead-generation", "/b2c-lead-generation", "/strategies", "/b2b", "/b2c"],
    href: "/lead-generation-strategies",
    columns: [
      col("By Team", ["/services/agency-client-prospecting", "/services/seo-agency-lead-generation", "/services/website-redesign-prospecting", "/services/local-business-prospecting", "/b2b/sdr-teams", "/b2b/founder-led-sales"]),
      col("B2B Audiences", ["/b2b-lead-generation", "/b2b/ideal-customer-profile", "/b2b/small-business-prospecting", "/b2b/msme-suppliers", "/b2b/exporters-and-importers"]),
      col("B2C Audiences", ["/b2c-lead-generation", "/b2c/homeowners", "/b2c/patients", "/b2c/students", "/b2c/local-shoppers"]),
      col("Strategies", ["/strategies/cold-email-outreach", "/strategies/linkedin-prospecting", "/strategies/local-seo", "/strategies/website-audit-offers", "/strategies/outbound-sequences"]),
    ],
    footer: { title: "All Strategies", href: "/lead-generation-strategies" },
  },
  {
    label: "Industries",
    match: ["/industries"],
    href: "/industries",
    columns: [
      col("Local Services", ["/industries/home-services", "/industries/plumbing", "/industries/hvac", "/industries/roofing", "/industries/cleaning-services"]),
      col("Health & Professional", ["/industries/dental-clinics", "/industries/medical-clinics", "/industries/law-firms", "/industries/accounting-firms", "/industries/financial-advisors"]),
      col("Industrial & Trade", ["/industries/manufacturing", "/industries/wholesale-and-distribution", "/industries/logistics", "/industries/textiles-and-apparel", "/industries/industrial-and-chemical-suppliers"]),
      col("Lifestyle & Tech", ["/industries/real-estate", "/industries/restaurants", "/industries/saas", "/industries/digital-agencies", "/industries/e-commerce"]),
    ],
    footer: { title: "Industries", href: "/industries" },
  },
  {
    label: "Resources",
    match: ["/resources", "/blog", "/lead-capture-and-conversion", "/lead-qualification-and-nurturing", "/tools-analytics-and-reporting", "/comparisons-and-planning", "/lead-capture", "/lead-qualification", "/tools", "/compare", "/faq", "/data-sources", "/sitemap"],
    href: "/resources",
    columns: [
      col("Guides", ["/resources", "/blog", "/resources/beginners-guide-to-lead-generation", "/resources/lead-generation-glossary", "/resources/lead-generation-checklist", "/resources/cold-email-writing", "/resources/icp-worksheet"]),
      col("Convert & Qualify", ["/lead-capture-and-conversion", "/lead-qualification-and-nurturing", "/tools-analytics-and-reporting", "/tools/lead-generation-kpis", "/lead-qualification/lead-scoring-models"]),
      col("Compare & Plan", ["/comparisons-and-planning", "/compare/inbound-vs-outbound", "/compare/manual-vs-automated-prospecting", "/compare/30-day-implementation-plan"]),
      col("Data & Trust", ["/data-sources", "/security-and-data-handling", "/responsible-prospecting", "/faq", "/sitemap"]),
    ],
    footer: { title: "Resources", href: "/resources" },
  },
  {
    label: "About",
    match: ["/about", "/careers", "/vendors", "/media", "/press-kit", "/platform-overview", "/how-it-works", "/why-leadgen-ai", "/plans", "/security-and-data-handling", "/responsible-prospecting"],
    href: "/about",
    columns: [
      col("Company", ["/about", "/why-leadgen-ai", "/platform-overview", "/how-it-works", "/careers"]),
      col("Press & Partners", ["/media", "/press-kit", "/vendors", "/blog"]),
      col("Get Started", ["/plans", "/request-access", "/contact"]),
    ],
  },
  { label: "Contact", href: "/contact", match: ["/contact", "/request-access"] },
];
