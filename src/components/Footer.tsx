import Link from "next/link";
import { getPlan, isLive } from "@/lib/registry";
import { SITE } from "@/lib/site";
import { ArrowRight } from "./icons";
import { BrandMark } from "./Logo";
import { SocialLinks } from "./SocialLinks";

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
    more: { label: "All Services", href: "/services" },
  },
  {
    heading: "Strategies",
    paths: ["/strategies/cold-email-outreach", "/strategies/linkedin-prospecting", "/strategies/local-seo", "/strategies/website-audit-offers", "/strategies/outbound-sequences"],
    more: { label: "All Strategies", href: "/strategies" },
  },
  {
    heading: "Industries",
    paths: ["/industries/real-estate", "/industries/dental-clinics", "/industries/manufacturing", "/industries/saas", "/industries/digital-agencies"],
    more: { label: "All Industries", href: "/industries" },
  },
  { heading: "Quick Links", paths: ["/how-it-works", "/platform", "/plans", "/faq", "/book-a-demo", "/b2b", "/b2c", "/resources", "/compare"] },
  { heading: "Legal", paths: ["/privacy-policy", "/terms", "/responsible-prospecting", "/security-and-data-handling"] },
  { heading: "Company", paths: ["/about", "/careers", "/vendors", "/media", "/press-kit", "/blog", "/contact", "/sitemap"] },
];

async function copyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

const heading = "font-display text-[17px] font-bold text-[#a5b4fc]";
const link = "text-[15px] leading-snug text-white/80 transition-colors hover:text-[#a5b4fc]";

export async function Footer() {
  const year = await copyrightYear();
  return (
    <footer data-theme="dark" className="relative isolate mt-16 overflow-hidden bg-[#07080b] text-white md:mt-20">
      {/* Soft diagonal panels for depth */}
      <div aria-hidden="true" className="absolute -right-40 -top-24 -z-10 h-[140%] w-[38rem] rotate-[28deg] bg-gradient-to-b from-white/[0.05] to-transparent" />
      <div aria-hidden="true" className="absolute -right-10 top-10 -z-10 h-[120%] w-[22rem] rotate-[28deg] bg-gradient-to-b from-white/[0.035] to-transparent" />

      {/* Tagline tab hanging from the top edge */}
      <div className="flex justify-center px-4">
        <p className="rounded-b-[2rem] bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] px-8 pb-3.5 pt-2.5 text-center font-display text-[clamp(1.15rem,2.4vw,1.9rem)] font-bold italic tracking-tight shadow-[0_18px_40px_-18px_rgba(99,102,241,0.8)] sm:px-14">
          From Raw Data To Real Conversations…
        </p>
      </div>

      <div className="container-x !max-w-[92rem] grid grid-cols-2 gap-x-6 gap-y-10 pb-12 pt-12 md:grid-cols-4 md:pt-14 xl:grid-cols-[1.7fr_repeat(6,minmax(0,1fr))_1.3fr] xl:gap-x-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-4 xl:col-span-1">
          <Link href="/" className="inline-flex items-center gap-3" aria-label={`${SITE.name} home`}>
            <BrandMark size={48} />
            <span>
              <span className="block whitespace-nowrap font-display text-2xl font-bold leading-tight">LeadGen AI</span>
              <span className="block whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.16em] text-[#a5b4fc]">Prospect Intelligence</span>
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/70">
            One Pipeline To Discover, Enrich, Score, Audit And Reach The Right Prospects Across Google Maps, LinkedIn And IndiaMART.
          </p>
          <SocialLinks className="mt-5" />
        </div>

        {/* Link columns */}
        {COLUMNS.map((c) => (
          <nav key={c.heading} aria-label={c.heading}>
            <h2 className={heading}>{c.heading}</h2>
            <ul className="mt-5 grid gap-2.5">
              {c.paths.filter(isLive).map((p) => (
                <li key={p}>
                  <Link href={p} className={link}>
                    {getPlan(p)!.title}
                  </Link>
                </li>
              ))}
              {c.more && (
                <li>
                  <Link href={c.more.href} className="text-[15px] font-semibold leading-snug text-[#a5b4fc] transition-colors hover:text-white">
                    {c.more.label}
                    <ArrowRight size={14} className="ml-1.5 inline-block align-[-2px]" />
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        ))}

        {/* Get started */}
        <div className="col-span-2 md:col-span-1">
          <h2 className={heading}>Get Started</h2>
          <p className="mt-5 text-[15px] leading-relaxed text-white/70">Tell Us Who You Sell To And We’ll Show You How To Find Them.</p>
          <div className="mt-6 grid max-w-[14.5rem] gap-3">
            <a href={SITE.appUrl} rel="noopener" className="group flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] py-2 pl-2 pr-5 transition hover:brightness-110">
              <span className="grid size-[30px] shrink-0 place-items-center overflow-hidden rounded-full bg-white/15 [&>*]:!rounded-full">
                <BrandMark size={30} />
              </span>
              <span className="leading-tight">
                <span className="block whitespace-nowrap text-[11px] font-medium text-white/80">Free Plan, 3 Queries</span>
                <span className="block text-[16px] font-bold">Start Free</span>
              </span>
            </a>
            <a href={SITE.appUrl} rel="noopener" className="group flex items-center gap-2.5 rounded-full border border-white/25 bg-black py-2 pl-2 pr-5 transition hover:border-[#a5b4fc]">
              <span className="grid size-[30px] shrink-0 place-items-center rounded-full bg-white/10 text-white">
                <ArrowRight size={14} />
              </span>
              <span className="leading-tight">
                <span className="block whitespace-nowrap text-[11px] font-medium text-white/70">Already A Customer?</span>
                <span className="block text-[16px] font-bold transition-colors group-hover:text-[#a5b4fc]">Sign In</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="container-x py-6 text-center text-sm text-white/70">
          Copyright © {year} {SITE.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
