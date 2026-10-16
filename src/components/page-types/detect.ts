import type { PageContent, PlanEntry, Section } from "@/content/types";

export type PageKind = "service" | "compare" | "strategy" | "glossary" | "checklist" | "default";

export function pageKind(plan: PlanEntry, isHub: boolean): PageKind {
  if (isHub) return "default";
  if (plan.path === "/resources/lead-generation-glossary") return "glossary";
  if (plan.group === "resources" && /checklist|worksheet/i.test(`${plan.path} ${plan.title}`)) return "checklist";
  if (plan.group === "services" && plan.path.startsWith("/services/")) return "service";
  if (plan.group === "compare" && plan.path.startsWith("/compare/") && plan.path.includes("-vs-")) return "compare";
  if (plan.group === "strategies" && plan.path.startsWith("/strategies/")) return "strategy";
  return "default";
}

const STOP = new Set(["lead", "leads", "generation", "prospecting", "lists", "list", "the", "and", "in", "to", "a", "of", "vs"]);
const stem = (w: string) => w.toLowerCase().replace(/[^a-z0-9]/g, "").replace(/(ing|s)$/, "");
const STOP_STEMS = new Set([...STOP].map(stem));
const words = (s: string) => s.split(/[\s-]+/).map(stem).filter((w) => w && !STOP_STEMS.has(w));

export interface ComparisonLayout {
  sides: [string, string];
  before: Section[];
  columns: [Section[], Section[]];
  after: Section[];
}

/**
 * Comparison pages: derive "A" and "B" from the title ("A Vs B") and put sections whose heading
 * mentions exactly one side into that side's column. Returns null when the mapping is ambiguous.
 */
export function comparisonLayout(plan: PlanEntry, content: PageContent): ComparisonLayout | null {
  const parts = plan.title.split(/\s+vs\.?\s+/i);
  if (parts.length !== 2) return null;
  const keys = parts.map((p) => new Set(words(p))) as [Set<string>, Set<string>];
  const sideOf = (s: Section) => {
    const h = words(s.heading);
    const a = h.some((w) => keys[0].has(w) && !keys[1].has(w));
    const b = h.some((w) => keys[1].has(w) && !keys[0].has(w));
    return a === b ? -1 : a ? 0 : 1;
  };
  const sides = content.sections.map(sideOf);
  const first = sides.findIndex((s) => s >= 0);
  const last = sides.length - 1 - [...sides].reverse().findIndex((s) => s >= 0);
  if (first < 0) return null;
  // Mapped sections must be contiguous, with at least one per side, or the layout would reorder the story.
  if (sides.slice(first, last + 1).some((s) => s < 0)) return null;
  const columns: [Section[], Section[]] = [[], []];
  content.sections.forEach((s, i) => {
    const side = sides[i];
    if (side === 0 || side === 1) columns[side].push(s);
  });
  if (!columns[0].length || !columns[1].length) return null;
  // "B2B Vs B2C Lead Generation" → labels "B2B" and "B2C": drop trailing filler words shared by both sides.
  const label = (p: string) => p.split(/\s+/).reduceRight<string[]>((acc, w) => (acc.length || !STOP_STEMS.has(stem(w)) ? [w, ...acc] : acc), []).join(" ") || p;
  return { sides: [label(parts[0]), label(parts[1])], before: content.sections.slice(0, first), columns, after: content.sections.slice(last + 1) };
}
