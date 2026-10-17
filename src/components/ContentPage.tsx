import type { ComponentType } from "react";
import type { PageContent, PlanEntry } from "@/content/types";
import { GROUPS } from "@/lib/groups";
import { buildCtx, type Ctx } from "./content/blocks";
import { pageFamily, type Family } from "./content/family";
import { CaseLayout, ComparisonLayout, ContactLayout, HubLayout, PlansLayout, RolloutLayout, StoryLayout } from "./content/layouts-company";
import { IndustryLayout, PlaybookLayout, ServiceLayout, ToolkitLayout, WorkflowLayout } from "./content/layouts-product";
import { ChecklistLayout, FaqLayout, GlossaryLayout, GuideLayout, LegalLayout } from "./content/layouts-reading";

/**
 * Content pages are rendered by layout family (see content/family.ts): each family has its own page
 * structure, built from the shared blocks in content/blocks.tsx so branding and accessibility stay
 * consistent. Unknown or unclassified pages fall back to the guide layout, which renders every block.
 */
const LAYOUTS: Record<Family, ComponentType<{ ctx: Ctx }>> = {
  service: ServiceLayout,
  playbook: PlaybookLayout,
  industry: IndustryLayout,
  guide: GuideLayout,
  toolkit: ToolkitLayout,
  workflow: WorkflowLayout,
  glossary: GlossaryLayout,
  checklist: ChecklistLayout,
  faq: FaqLayout,
  comparison: ComparisonLayout,
  case: CaseLayout,
  rollout: RolloutLayout,
  story: StoryLayout,
  plans: PlansLayout,
  legal: LegalLayout,
  contact: ContactLayout,
  hub: HubLayout,
};

export function ContentPage({ content, plan }: { content: PageContent; plan: PlanEntry }) {
  const isHub = GROUPS[plan.group].hub === plan.path;
  const family = pageFamily(plan, content, isHub);
  const Layout = LAYOUTS[family] ?? GuideLayout;
  return <Layout ctx={buildCtx(content, plan, family)} />;
}
