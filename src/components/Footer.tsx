import Link from "next/link";
import { getPlan, isLive, LIVE } from "@/lib/registry";
import { SITE } from "@/lib/site";
import { ArrowRight } from "./icons";
import { BrandMark } from "./Logo";

const COLUMNS: { heading: string; paths: string[]; more?: { label: string; href: string } }[] = [
  {
    heading: "Services",
    paths: [
      "/services/multi-source-lead-scraping",
      "/services/google-maps-lead-extraction",
      "/services/ai-contact-enrichment",
      "/services/ai-lead-scoring",
      "/services/seo-website-audit",
      "/services/business-opportunity-detection",
      "/services/crm-pipeline-management",
      "/services/ai-outreach-campaigns",
    ],
    more: { label: "Services", href: "/services" },
  },
  {
    heading: "Strategies",
    paths: ["/strategies/cold-email-outreach", "/strategies/linkedin-prospecting", "/strategies/local-seo", "/strategies/website-audit-offers", "/strategies/outbound-sequences"],
    more: { label: "Solutions", href: "/strategies" },
  },
  {
    heading: "Industries",
    paths: ["/industries/real-estate", "/industries/dental-clinics", "/industries/manufacturing", "/industries/saas", "/industries/digital-agencies"],
    more: { label: "Industries", href: "/industries" },
  },
  { heading: "Quick Links", paths: ["/how-it-works", "/platform", "/plans", "/faq", "/book-a-demo", "/b2b", "/b2c", "/resources", "/compare"] },
  { heading: "Legal", paths: ["/privacy-policy", "/terms", "/responsible-prospecting", "/security-and-data-handling"] },
  { heading: "Company", paths: ["/about", "/careers", "/vendors", "/media", "/press-kit", "/blog", "/contact", "/sitemap"] },
];

async function copyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await copyrightYear();
  return (
    <footer className="mt-10 md:mt-12 border-t border-line bg-bg-alt">
      <div className="container-x grid grid-cols-2 gap-x-6 gap-y-10 py-12 md:grid-cols-4 md:py-14 xl:grid-cols-[1.9fr_repeat(6,minmax(0,1fr))_1.35fr]">
        {/* Brand */}
        <div className="col-span-2 md:col-span-4 xl:col-span-1 xl:pr-6">
          <Link href="/" className="inline-flex items-center gap-3" aria-label={`${SITE.name} home`}>
            <BrandMark size={44} />
            <span>
              <span className="block whitespace-nowrap font-display text-xl font-bold leading-tight">LeadGen AI</span>
              <span className="block whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Prospect Intelligence</span>
            </span>
          </Link>
          <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-ink-soft">
            One Pipeline To Discover, Enrich, Score, Audit And Reach The Right Prospects Across Google Maps, LinkedIn And IndiaMART.
          </p>
          <div className="mt-6 grid max-w-[15rem] gap-3">
            <a href={SITE.appUrl} rel="noopener" className="btn btn-primary !justify-start !rounded-xl !px-4">
              <BrandMark size={26} />
              <span className="text-left leading-tight">
                <span className="block text-[11px] font-medium opacity-80">Free Plan, 3 Queries</span>
                <span className="block text-[15px]">Start Free</span>
              </span>
            </a>
            <a href={SITE.appUrl} rel="noopener" className="btn btn-ghost !justify-start !rounded-xl !px-4">
              <span className="grid size-[26px] place-items-center rounded-lg border border-line text-brand">
                <ArrowRight size={14} />
              </span>
              <span className="text-left leading-tight">
                <span className="block text-[11px] font-medium text-muted">Already A Customer?</span>
                <span className="block text-[15px]">Sign In</span>
              </span>
            </a>
          </div>
        </div>

        {/* Link columns */}
        {COLUMNS.map((c) => (
          <nav key={c.heading} aria-label={c.heading}>
            <h2 className="font-display text-lg font-bold text-ink">{c.heading}</h2>
            <ul className="mt-6 grid gap-3.5">
              {c.paths.filter(isLive).map((p) => (
                <li key={p}>
                  <Link href={p} className="text-[15px] leading-snug text-ink-soft transition hover:text-brand">
                    {getPlan(p)!.title}
                  </Link>
                </li>
              ))}
              {c.more && (
                <li>
                  <Link href={c.more.href} className="text-[15px] font-semibold leading-snug text-brand hover:underline">
                    {c.more.label}
                    <ArrowRight size={14} className="ml-1.5 inline-block align-[-2px]" />
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        ))}

        {/* Contact sales */}
        <div className="col-span-2 md:col-span-1">
          <h2 className="font-display text-lg font-bold text-ink">Contact Sales</h2>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">Tell Us Who You Sell To And We’ll Show You How To Find Them With LeadGen AI.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-ghost whitespace-nowrap !rounded-full !border-brand !px-4 !text-brand">
              Contact <ArrowRight size={15} />
            </Link>
            <Link href="/services" className="btn btn-primary whitespace-nowrap !rounded-full !px-4">
              Services
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col items-center gap-1.5 py-6 text-center text-sm text-muted">
          <p>
            © {year} {SITE.name}. All Rights Reserved.
          </p>
          <p className="text-xs">
            {LIVE.length} Pages · Product Details Reflect The Live LeadGen AI Application · Examples Are Illustrative.
          </p>
        </div>
      </div>
    </footer>
  );
}
