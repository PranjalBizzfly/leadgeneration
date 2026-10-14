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
  core: { key: "core", label: "Company", hub: null, blurb: "About LeadGen AI, How It Works, Plans And Support.", visual: "dashboard", hue: 265 },
  services: { key: "services", label: "Platform Services", hub: "/services", blurb: "Every Capability In The LeadGen AI Pipeline, From Discovery To Outreach.", visual: "pipeline", hue: 265 },
  strategies: { key: "strategies", label: "Strategies", hub: "/strategies", blurb: "Playbooks For Inbound, Outbound And Multichannel Lead Generation.", visual: "funnel", hue: 285 },
  industries: { key: "industries", label: "Industries", hub: "/industries", blurb: "Vertical-Specific Guidance For Generating And Prospecting Leads.", visual: "map", hue: 205 },
  b2b: { key: "b2b", label: "B2B", hub: "/b2b", blurb: "Reaching Business Buyers, From SMB Owners To Enterprise Committees.", visual: "network", hue: 285 },
  b2c: { key: "b2c", label: "B2C", hub: "/b2c", blurb: "Consumer Lead Generation With Consent And Speed Built In.", visual: "network", hue: 250 },
  "lead-capture": { key: "lead-capture", label: "Lead Capture", hub: "/lead-capture", blurb: "Landing Pages, Forms And Conversion Optimisation.", visual: "form", hue: 275 },
  qualification: { key: "qualification", label: "Qualification", hub: "/lead-qualification", blurb: "Scoring, Nurturing And CRM Workflows.", visual: "flow", hue: 300 },
  tools: { key: "tools", label: "Tools & Analytics", hub: "/tools", blurb: "Integrations, Measurement And Reporting.", visual: "chart", hue: 185 },
  resources: { key: "resources", label: "Resources", hub: "/resources", blurb: "Guides, Glossary And Checklists.", visual: "book", hue: 280 },
  compare: { key: "compare", label: "Comparisons", hub: "/compare", blurb: "Comparisons, Use Cases And Implementation Planning.", visual: "scale", hue: 300 },
  blog: { key: "blog", label: "Blog", hub: "/blog", blurb: "Practical articles on prospecting, outreach and qualification.", visual: "book", hue: 280 },
};
