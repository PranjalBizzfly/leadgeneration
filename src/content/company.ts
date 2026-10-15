import type { Faq, PlanEntry } from "./types";

/** A published blog article. Articles carry no publication dates by design (none are verified). */
export interface BlogPost {
  slug: string;
  title: string;
  category: "Prospecting" | "Outreach" | "Qualification" | "Data & Compliance" | "Agencies";
  excerpt: string;
  /** 120–160 characters. */
  metaDescription: string;
  readMinutes: number;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  /** Paths of related live pages. */
  related: string[];
  /** Article-specific FAQs, rendered with FAQPage JSON-LD. */
  faqs?: Faq[];
}

/** Company pages outside the 300-page content plan, rendered by dedicated routes. */
export const COMPANY_PAGES: PlanEntry[] = [
  { path: "/careers", title: "Careers", group: "core", audience: "Job seekers", outline: "Open roles; responsibilities; how to apply", phase: 2 },
  { path: "/vendors", title: "Vendors", group: "core", audience: "Suppliers and partners", outline: "Vendor relationships; collaboration; contact", phase: 2 },
  { path: "/media", title: "Media", group: "core", audience: "Journalists", outline: "Company overview; media contact", phase: 2 },
  { path: "/press-kit", title: "Press Kit", group: "core", audience: "Journalists and partners", outline: "Logos; descriptions; brand colours", phase: 2 },
  { path: "/blog", title: "Blog", group: "blog", audience: "Practitioners", outline: "Articles by category", phase: 2 },
];
