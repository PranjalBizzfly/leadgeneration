import type { PageContent, PlanEntry } from "@/content/types";
import { comparisonLayout } from "../page-types/detect";

/**
 * Layout families. Each content page is rendered by the family that fits its purpose and content,
 * not just its URL section. Anything unrecognised falls back to "guide", which renders every block.
 */
export type Family =
  | "service" // product capability pages
  | "playbook" // strategies, B2B and B2C audience plays
  | "industry" // vertical guides
  | "guide" // long-form editorial reading (also the safe fallback)
  | "toolkit" // setup, measurement and framework references
  | "workflow" // processes you build and run in stages
  | "glossary"
  | "checklist" // checklists and worksheets with tick boxes
  | "faq" // question-led pages
  | "comparison" // "A vs B"
  | "case" // illustrative use-case scenarios
  | "rollout" // implementation plans and roles
  | "story" // company / brand-story pages
  | "plans"
  | "legal"
  | "contact"
  | "hub"; // section hub pages

/** Lead Capture pages that are measurement references rather than build processes. */
const CAPTURE_MEASUREMENT = /a-b-testing|conversion-tracking|heatmaps|page-speed/;
/** Qualification pages that are frameworks or definitions (reference) rather than processes. */
const QUALIFICATION_FRAMEWORK = /bant|champ|lead-scoring-models|negative-scoring|disqualification|status-definitions|pipeline-stages/;
const STORY_PAGES = new Set(["/about", "/why-leadgen-ai", "/platform-overview", "/how-it-works", "/data-sources", "/security-and-data-handling", "/responsible-prospecting"]);

export function pageFamily(plan: PlanEntry, content: PageContent, isHub: boolean): Family {
  const p = plan.path;
  if (isHub) return "hub";

  // Company pages (the "core" group) are matched by purpose.
  if (plan.group === "core") {
    if (content.form) return "contact";
    if (p === "/plans") return "plans";
    if (p === "/faq") return "faq";
    if (/privacy|terms/.test(p)) return "legal";
    if (STORY_PAGES.has(p)) return "story";
    return "guide";
  }

  // Any "A vs B" page with sections that map cleanly onto the two sides, whichever section it lives in.
  if (/\svs\.?\s/i.test(plan.title) && comparisonLayout(plan, content)) return "comparison";

  switch (plan.group) {
    case "services":
      return "service";
    case "strategies":
    case "b2b":
    case "b2c":
      return "playbook";
    case "industries":
      return "industry";
    case "tools":
      return "toolkit";
    case "lead-capture":
      return CAPTURE_MEASUREMENT.test(p) ? "toolkit" : "workflow";
    case "qualification":
      return QUALIFICATION_FRAMEWORK.test(p) ? "toolkit" : "workflow";
    case "compare":
      if (p.includes("/use-case-")) return "case";
      // A "vs" page whose sections don't map onto two sides reads best as a guide.
      if (/\svs\.?\s/i.test(plan.title)) return "guide";
      return "rollout";
    case "resources":
      if (/glossary/.test(p)) return "glossary";
      if (/checklist|worksheet/.test(p)) return "checklist";
      if (/faq/.test(p)) return "faq";
      return "guide";
    default:
      return "guide";
  }
}
