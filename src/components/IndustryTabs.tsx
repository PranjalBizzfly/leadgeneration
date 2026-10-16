import { heroImage } from "@/content/images";
import { getContent, getPlan, isLive } from "@/lib/registry";
import { IndustryTabsClient, type IndustryTab } from "./IndustryTabsClient";

/** Industry pages shown as tabs; each must be live, otherwise it is skipped. */
const DEFAULT_PATHS = [
  "/industries/real-estate",
  "/industries/dental-clinics",
  "/industries/restaurants",
  "/industries/manufacturing",
  "/industries/digital-agencies",
  "/industries/saas",
  "/industries/financial-advisors",
  "/industries/e-commerce",
];

/** Server component: reuses each industry page's own copy and passes only plain, trimmed data to the client tabs. */
export function IndustryTabs({ paths = DEFAULT_PATHS, className = "" }: { paths?: string[]; className?: string }) {
  const tabs: IndustryTab[] = paths.filter(isLive).flatMap((path) => {
    const plan = getPlan(path);
    const content = getContent(path);
    if (!plan || !content) return [];
    const img = heroImage(path);
    return [
      {
        path,
        title: plan.title,
        summary: content.metaDescription,
        highlights: content.highlights.slice(0, 4),
        topics: content.sections.slice(0, 4).map((s) => s.heading),
        image: img?.src,
      },
    ];
  });
  if (!tabs.length) return null;
  return <IndustryTabsClient tabs={tabs} className={className} />;
}
