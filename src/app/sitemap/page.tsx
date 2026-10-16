import type { Metadata } from "next";
import { Faqs } from "@/components/Faqs";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import type { GroupKey } from "@/content/types";
import { GROUPS } from "@/lib/groups";
import { pageMetadata } from "@/lib/metadata";
import { LIVE } from "@/lib/registry";
import { SitemapExplorer, type SitemapGroup } from "./SitemapExplorer";

export const metadata: Metadata = pageMetadata({
  title: "Sitemap: Every Page on the Site",
  description: "A complete directory of every live page on the LeadGen AI website, grouped by platform services, strategies, industries, B2B audiences and company pages.",
  path: "/sitemap",
});

const SITEMAP_FAQS = [
  { q: "What Does This Sitemap Page Show?", a: "It lists every live page on the LeadGen AI website in one place, grouped by topic. You can see platform services, strategies, industries, B2B and B2C audiences, lead capture, qualification, tools, resources, comparisons and company pages without clicking through menus." },
  { q: "How Are The Pages Grouped?", a: "Pages are grouped by the same topic categories used across the site, such as platform services, strategies and industries. Each group shows how many pages it contains, and each page links straight to its own guide." },
  { q: "How Do I Find A Specific Page Quickly?", a: "Use the search box at the top of the directory. It filters the list as you type, matching page titles and paths. The counter shows how many pages match your search out of the total." },
  { q: "Can I Collapse Groups I Don’t Need?", a: "Yes. Each group can be collapsed or expanded on its own, and the expand all and collapse all control lets you open or close every group at once. This makes a long directory easier to scan." },
  { q: "Is This The Same As The XML Sitemap Used By Search Engines?", a: "Not quite. This page is a human-friendly directory for visitors. Search engines use a separate machine-readable sitemap.xml file, which lists the same live pages in a format crawlers understand." },
  { q: "Where Should I Start If I’m New To Lead Generation?", a: "The resources group is a good starting point, especially the beginner’s guide, glossary and lead generation checklist. From there you can move into strategies or industries that match how your team finds customers." },
  { q: "Where Can I Learn What The LeadGen AI Platform Does?", a: "Open the company and platform services groups. They cover how the platform works, its modules from multi-source scraping to AI-drafted outreach, the data sources it uses, and how plans differ." },
  { q: "What If I Can’t Find The Page I’m Looking For?", a: "Try a broader search term, or use the site search, which also matches page descriptions and categories. If the topic isn’t covered yet, you can reach the team through the contact page with your question." },
];

export default function SitemapPage() {
  const groups: SitemapGroup[] = (Object.keys(GROUPS) as GroupKey[])
    .map((g) => ({ key: g, label: GROUPS[g].label, pages: LIVE.filter((p) => p.group === g).map((p) => ({ path: p.path, title: p.title })) }))
    .filter((g) => g.pages.length > 0);

  return (
    <div className="relative">
      <PageHero
        path="/sitemap"
        badge="Explore All Pages"
        title="Sitemap"
        intro={`Every Live Page On This Site (${LIVE.length} Pages), Grouped By Topic. Filter By Category Or Search To Jump Straight To A Page.`}
      />
      <div className="container-x relative py-12 md:py-16">
        <SitemapExplorer groups={groups} />
      </div>
      <section className="section-y scroll-mt-20 border-y border-line bg-bg-alt cut-flow" aria-labelledby="sitemap-faq-title">
        <div className="container-x">
          <SectionHeading id="sitemap-faq-title" badge="FAQ" title="Frequently Asked Questions" subtitle="Quick answers about using the sitemap." />
          <div className="mx-auto mt-9 max-w-3xl">
            <Faqs items={SITEMAP_FAQS} showHeading={false} />
          </div>
        </div>
      </section>
    </div>
  );
}
