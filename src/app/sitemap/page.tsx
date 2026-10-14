import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Sparkle } from "@/components/icons";
import { hasPhoto, Photo } from "@/components/Photo";
import type { GroupKey } from "@/content/types";
import { GROUPS } from "@/lib/groups";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbs, LIVE } from "@/lib/registry";
import { SitemapExplorer, type SitemapGroup } from "./SitemapExplorer";

export const metadata: Metadata = pageMetadata({
  title: "Sitemap — Every Page on the Site",
  description: "A complete directory of every live page on the LeadGen AI website, grouped by platform services, strategies, industries, B2B audiences and company pages.",
  path: "/sitemap",
});

export default function SitemapPage() {
  const groups: SitemapGroup[] = (Object.keys(GROUPS) as GroupKey[])
    .map((g) => ({ key: g, label: GROUPS[g].label, pages: LIVE.filter((p) => p.group === g).map((p) => ({ path: p.path, title: p.title })) }))
    .filter((g) => g.pages.length > 0);

  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_top,var(--glow-1),transparent_70%)]" />
      <div className="container-x relative py-12 md:py-16">
        <Breadcrumbs items={breadcrumbs("/sitemap")} />
        <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="pill">
              <Sparkle size={14} /> Explore all pages
            </span>
            <h1 className="mt-5 text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.05]">Sitemap</h1>
            <p className="lead mt-4 max-w-2xl">Every live page on this site ({LIVE.length} pages), grouped by topic. Filter by category or search to jump straight to a page.</p>
          </div>
          {hasPhoto("/images/pages/sitemap.webp") && (
            <div className="card hidden overflow-hidden !rounded-3xl lg:block">
              <Photo file="/images/pages/sitemap.webp" sizes="(min-width: 1024px) 34rem, 100vw" />
            </div>
          )}
        </div>
        <SitemapExplorer groups={groups} />
      </div>
    </div>
  );
}
