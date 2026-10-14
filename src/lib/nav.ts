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
  /** Path prefixes that mark this item active. */
  match: string[];
}

const descriptions: Record<string, string> = {
  "/services/multi-source-lead-scraping": "One Query Across Three Sources",
  "/services/google-maps-lead-extraction": "Local Businesses By Category And City",
  "/services/linkedin-lead-enrichment": "Company Context For B2B Outreach",
  "/services/indiamart-lead-extraction": "Suppliers And B2B Sellers In India",
  "/services/ai-contact-enrichment": "Emails, Phones, Sites And Socials",
  "/services/ai-lead-scoring": "A 0–100 Score With Reasons",
  "/services/seo-website-audit": "Client-Ready Website Reports",
  "/services/business-opportunity-detection": "Spot Businesses That Need Help",
  "/services/crm-pipeline-management": "Stages, Owners And History",
  "/services/ai-outreach-campaigns": "AI-Drafted, Logged Outreach",
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
    footer: { title: "Services", href: "/services" },
  },
  {
    label: "Solutions",
    match: ["/strategies", "/b2b", "/b2c"],
    href: "/strategies",
    columns: [
      col("By Team", ["/services/agency-client-prospecting", "/services/seo-agency-lead-generation", "/services/website-redesign-prospecting", "/services/local-business-prospecting", "/b2b/sdr-teams", "/b2b/founder-led-sales"]),
      col("B2B Audiences", ["/b2b", "/b2b/ideal-customer-profile", "/b2b/small-business-prospecting", "/b2b/msme-suppliers", "/b2b/exporters-and-importers"]),
      col("B2C Audiences", ["/b2c", "/b2c/homeowners", "/b2c/patients", "/b2c/students", "/b2c/local-shoppers"]),
      col("Strategies", ["/strategies/cold-email-outreach", "/strategies/linkedin-prospecting", "/strategies/local-seo", "/strategies/website-audit-offers", "/strategies/outbound-sequences"]),
    ],
    footer: { title: "Solutions", href: "/strategies" },
  },
  {
    label: "Industries",
    match: ["/industries"],
    href: "/industries",
    columns: [
      col("Local Services", ["/industries/home-services", "/industries/plumbing", "/industries/hvac", "/industries/roofing", "/industries/cleaning-services"]),
      col("Health & Professional", ["/industries/dental-clinics", "/industries/medical-clinics", "/industries/law-firms", "/industries/accounting-firms", "/industries/financial-advisors"]),
      col("Industrial & Trade", ["/industries/manufacturing", "/industries/wholesale-distributors", "/industries/logistics", "/industries/textiles-and-apparel", "/industries/industrial-and-chemical-suppliers"]),
      col("Lifestyle & Tech", ["/industries/real-estate", "/industries/restaurants", "/industries/saas", "/industries/digital-agencies", "/industries/ecommerce"]),
    ],
    footer: { title: "Industries", href: "/industries" },
  },
  {
    label: "Resources",
    match: ["/resources", "/blog", "/lead-capture", "/lead-qualification", "/tools", "/compare", "/faq", "/data-sources", "/sitemap"],
    href: "/resources",
    columns: [
      col("Guides", ["/resources", "/blog", "/resources/beginners-guide", "/resources/glossary", "/resources/lead-generation-checklist", "/resources/cold-email-writing", "/resources/icp-worksheet"]),
      col("Convert & Qualify", ["/lead-capture", "/lead-qualification", "/tools", "/tools/lead-generation-kpis", "/lead-qualification/lead-scoring-models"]),
      col("Compare & Plan", ["/compare", "/compare/inbound-vs-outbound", "/compare/manual-vs-automated-prospecting", "/compare/30-day-implementation-plan"]),
      col("Data & Trust", ["/data-sources", "/security-and-data-handling", "/responsible-prospecting", "/faq", "/sitemap"]),
    ],
    footer: { title: "Resources", href: "/resources" },
  },
  {
    label: "About",
    match: ["/about", "/careers", "/vendors", "/media", "/press-kit", "/platform", "/how-it-works", "/why-leadgen-ai", "/plans", "/security-and-data-handling", "/responsible-prospecting"],
    href: "/about",
    columns: [
      col("Company", ["/about", "/why-leadgen-ai", "/platform", "/how-it-works", "/careers"]),
      col("Press & Partners", ["/media", "/press-kit", "/vendors", "/blog"]),
      col("Get Started", ["/plans", "/book-a-demo", "/contact"]),
    ],
  },
  { label: "Contact", href: "/contact", match: ["/contact", "/book-a-demo"] },
];
