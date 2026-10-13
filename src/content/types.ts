export type GroupKey =
  | "core"
  | "services"
  | "strategies"
  | "industries"
  | "b2b"
  | "b2c"
  | "lead-capture"
  | "qualification"
  | "tools"
  | "resources"
  | "compare";

export interface Section {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Step {
  title: string;
  text: string;
}

export interface Faq {
  q: string;
  a: string;
}

/** Full, renderable content for one indexable page. */
export interface PageContent {
  /** Absolute path, e.g. "/services/ai-lead-scoring". Must match the plan. */
  path: string;
  /** Short label used in navigation, cards and breadcrumbs. */
  title: string;
  h1: string;
  /** 60 characters or fewer; the site name is appended automatically. */
  metaTitle: string;
  /** Roughly 140–160 characters. */
  metaDescription: string;
  eyebrow: string;
  /** Opening paragraphs that directly answer the page's main question. */
  intro: string[];
  /** Three or four short hero points. */
  highlights: string[];
  sections: Section[];
  steps?: { heading: string; items: Step[] };
  considerations?: { heading: string; items: string[] };
  /** Always rendered with an "Illustrative example" label. */
  example?: { heading: string; text: string };
  faqs: Faq[];
  /** Paths of genuinely related live pages. */
  related: string[];
  cta: { heading: string; text: string; label: string; href: string };
  /** Optional embedded form. */
  form?: "contact" | "demo";
}

export interface PlanEntry {
  path: string;
  title: string;
  group: GroupKey;
  audience: string;
  /** Short content outline, sections separated by "; ". */
  outline: string;
  phase: 1 | 2;
}
