import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faqs } from "@/components/Faqs";
import { Sparkle } from "@/components/icons";
import { hasPhoto, Photo } from "@/components/Photo";
import { SectionHeading } from "@/components/SectionHeading";
import type { GroupKey } from "@/content/types";
import { GROUPS } from "@/lib/groups";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbs, LIVE } from "@/lib/registry";
import { SitemapExplorer, type SitemapGroup } from "./SitemapExplorer";

export const metadata: Metadata = pageMetadata({
  title: "Sitemap: Every Page on the Site",
  description: "A complete directory of every live page on the LeadGen AI website, grouped by platform services, strategies, industries, B2B audiences and company pages.",
  path: "/sitemap",
});

const SITEMAP_FAQS = [
  { q: "What Does This Sitemap Page Show?", a: "It Lists Every Live Page On The LeadGen AI Website In One Place, Grouped By Topic. You Can See Platform Services, Strategies, Industries, B2B And B2C Audiences, Lead Capture, Qualification, Tools, Resources, Comparisons And Company Pages Without Clicking Through Menus." },
  { q: "How Are The Pages Grouped?", a: "Pages Are Grouped By The Same Topic Categories Used Across The Site, Such As Platform Services, Strategies And Industries. Each Group Shows How Many Pages It Contains, And Each Page Links Straight To Its Own Guide." },
  { q: "How Do I Find A Specific Page Quickly?", a: "Use The Search Box At The Top Of The Directory. It Filters The List As You Type, Matching Page Titles And Paths. The Counter Shows How Many Pages Match Your Search Out Of The Total." },
  { q: "Can I Collapse Groups I Don’t Need?", a: "Yes. Each Group Can Be Collapsed Or Expanded On Its Own, And The Expand All And Collapse All Control Lets You Open Or Close Every Group At Once. This Makes A Long Directory Easier To Scan." },
  { q: "Is This The Same As The XML Sitemap Used By Search Engines?", a: "Not Quite. This Page Is A Human-Friendly Directory For Visitors. Search Engines Use A Separate Machine-Readable Sitemap.xml File, Which Lists The Same Live Pages In A Format Crawlers Understand." },
  { q: "Where Should I Start If I’m New To Lead Generation?", a: "The Resources Group Is A Good Starting Point, Especially The Beginner’s Guide, Glossary And Lead Generation Checklist. From There You Can Move Into Strategies Or Industries That Match How Your Team Finds Customers." },
  { q: "Where Can I Learn What The LeadGen AI Platform Does?", a: "Open The Company And Platform Services Groups. They Cover How The Platform Works, Its Modules From Multi-Source Scraping To AI-Drafted Outreach, The Data Sources It Uses, And How Plans Differ." },
  { q: "What If I Can’t Find The Page I’m Looking For?", a: "Try A Broader Search Term, Or Use The Site Search, Which Also Matches Page Descriptions And Categories. If The Topic Isn’t Covered Yet, You Can Reach The Team Through The Contact Page With Your Question." },
];

export default function SitemapPage() {
  const groups: SitemapGroup[] = (Object.keys(GROUPS) as GroupKey[])
    .map((g) => ({ key: g, label: GROUPS[g].label, pages: LIVE.filter((p) => p.group === g).map((p) => ({ path: p.path, title: p.title })) }))
    .filter((g) => g.pages.length > 0);

  return (
    <div className="relative">
      <div className="container-x relative py-12 md:py-16">
        <Breadcrumbs items={breadcrumbs("/sitemap")} />
        <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="pill">
              <Sparkle size={14} /> Explore All Pages
            </span>
            <h1 className="mt-5 text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.05]">Sitemap</h1>
            <p className="lead mt-4 max-w-2xl">Every Live Page On This Site ({LIVE.length} Pages), Grouped By Topic. Filter By Category Or Search To Jump Straight To A Page.</p>
          </div>
          {hasPhoto("/images/pages/sitemap.webp") && (
            <div className="card hidden overflow-hidden !rounded-3xl lg:block">
              <Photo file="/images/pages/sitemap.webp" sizes="(min-width: 1024px) 34rem, 100vw" />
            </div>
          )}
        </div>
        <SitemapExplorer groups={groups} />
      </div>
      <section className="section-y scroll-mt-20 border-y border-line bg-bg-alt" aria-labelledby="sitemap-faq-title">
        <div className="container-x">
          <SectionHeading id="sitemap-faq-title" badge="FAQ" title="Frequently Asked Questions" subtitle="Quick Answers About Using The Sitemap." />
          <div className="mx-auto mt-9 max-w-3xl">
            <Faqs items={SITEMAP_FAQS} showHeading={false} />
          </div>
        </div>
      </section>
    </div>
  );
}
