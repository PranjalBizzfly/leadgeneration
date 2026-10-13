import type { GroupKey } from "@/content/types";

export type Visual = "dashboard" | "pipeline" | "funnel" | "map" | "network" | "form" | "flow" | "chart" | "book" | "scale";

export interface GroupInfo {
  key: GroupKey;
  label: string;
  /** Hub path, or null for groups without a hub (core). */
  hub: string | null;
  blurb: string;
  visual: Visual;
  /** Hue used for accents (OKLCH hue angle). */
  hue: number;
}

export const GROUPS: Record<GroupKey, GroupInfo> = {
  core: { key: "core", label: "Company", hub: null, blurb: "About LeadGen AI, how it works, plans and support.", visual: "dashboard", hue: 265 },
  services: { key: "services", label: "Platform Services", hub: "/services", blurb: "Every capability in the LeadGen AI pipeline, from discovery to outreach.", visual: "pipeline", hue: 265 },
  strategies: { key: "strategies", label: "Strategies", hub: "/strategies", blurb: "Playbooks for inbound, outbound and multichannel lead generation.", visual: "funnel", hue: 285 },
  industries: { key: "industries", label: "Industries", hub: "/industries", blurb: "Vertical-specific guidance for generating and prospecting leads.", visual: "map", hue: 205 },
  b2b: { key: "b2b", label: "B2B", hub: "/b2b", blurb: "Reaching business buyers, from SMB owners to enterprise committees.", visual: "network", hue: 285 },
  b2c: { key: "b2c", label: "B2C", hub: "/b2c", blurb: "Consumer lead generation with consent and speed built in.", visual: "network", hue: 250 },
  "lead-capture": { key: "lead-capture", label: "Lead Capture", hub: "/lead-capture", blurb: "Landing pages, forms and conversion optimisation.", visual: "form", hue: 275 },
  qualification: { key: "qualification", label: "Qualification", hub: "/lead-qualification", blurb: "Scoring, nurturing and CRM workflows.", visual: "flow", hue: 300 },
  tools: { key: "tools", label: "Tools & Analytics", hub: "/tools", blurb: "Integrations, measurement and reporting.", visual: "chart", hue: 185 },
  resources: { key: "resources", label: "Resources", hub: "/resources", blurb: "Guides, glossary and checklists.", visual: "book", hue: 280 },
  compare: { key: "compare", label: "Comparisons", hub: "/compare", blurb: "Comparisons, use cases and implementation planning.", visual: "scale", hue: 300 },
};
