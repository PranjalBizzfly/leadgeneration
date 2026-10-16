import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faqs } from "@/components/Faqs";
import { HeroVisual } from "@/components/HeroVisual";
import { Hero3D } from "@/components/home/Hero3D";
import { ModuleTabs } from "@/components/home/ModuleTabs";
import { TypedPhrase } from "@/components/home/TypedPhrase";
import { ArrowRight, Check, ChevronRight, FileCheck, Gauge, Layers, MapPin, Send, Shield, Sparkle, Target, Users } from "@/components/icons";
import { IndustryTabs } from "@/components/IndustryTabs";
import { ManualVsAutomated } from "@/components/ManualVsAutomated";
import { hasPhoto, Photo } from "@/components/Photo";
import { SampleCard, type SampleKind } from "@/components/SampleCards";
import { PageCard } from "@/components/RelatedPages";
import { SectionHeading } from "@/components/SectionHeading";
import type { Visual } from "@/lib/groups";
import { pageMetadata } from "@/lib/metadata";
import { getPlan, groupChildren, isLive, LIVE } from "@/lib/registry";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "AI-Powered Lead Generation & Prospect Intelligence",
    description:
      "Find, enrich, score and reach the right prospects from Google Maps, LinkedIn and IndiaMART, with SEO audits, opportunity detection and AI-drafted outreach.",
    path: "/",
  }),
  title: { absolute: `${SITE.name}: AI-Powered Lead Generation & Prospect Intelligence` },
};

const MARQUEE = [
  ["Google Maps Lead Extraction", "/services/google-maps-lead-extraction"],
  ["LinkedIn Lead Enrichment", "/services/linkedin-lead-enrichment"],
  ["IndiaMART Lead Extraction", "/services/indiamart-lead-extraction"],
  ["Business Email Discovery", "/services/business-email-discovery"],
  ["Phone Number Validation", "/services/phone-number-validation"],
  ["AI Lead Scoring", "/services/ai-lead-scoring"],
  ["SEO Website Audit", "/services/seo-website-audit"],
  ["Missing Website Detection", "/services/missing-website-detection"],
  ["CRM Pipeline Management", "/services/crm-pipeline-management"],
  ["AI-Drafted Outreach Messages", "/services/ai-drafted-outreach-messages"],
  ["CSV Lead Export", "/services/csv-lead-export"],
  ["API Access", "/services/api-access"],
] as const;

const PIPELINE_ROWS = [
  { icon: Layers, title: "Discover", text: "One query across Google Maps, LinkedIn and IndiaMART" },
  { icon: Sparkle, title: "Enrich", text: "Emails, phones, websites and socials added automatically" },
  { icon: Gauge, title: "Qualify", text: "0–100 scores, SEO audits and opportunity flags" },
  { icon: Send, title: "Engage", text: "CRM pipeline and AI-drafted outreach, every message logged" },
];

const WHY = [
  { icon: Layers, title: "One Pipeline, Not Five Tools", text: "Search, scraping, enrichment, scoring, audits and outreach share one record per business, so nothing is lost between exports." },
  { icon: Shield, title: "Traceable Data", text: "Every field records the source it came from, every job records what it fetched and when, and your manual edits are never overwritten." },
  { icon: Gauge, title: "Scores You Can Explain", text: "Each lead gets one 0–100 score. The reasons (completeness, website health, market fit and activity) are saved on the record." },
  { icon: FileCheck, title: "Audit-Led Conversations", text: "Open with evidence: a severity-ranked SEO report and a prioritised fix list you can hand straight to the prospect." },
  { icon: Target, title: "Opportunities Flagged For You", text: "Businesses with no website, a broken site, no contact route or a weak audit are flagged instead of buried mid-list." },
  { icon: Users, title: "Built For Teams", text: "Multi-tenant, role-based workspaces with 7 role modules on Growth, plus per-org API keys and a dedicated fleet on Scale." },
];

const BADGES = [
  { icon: Shield, tag: "Traceable", title: "Source Per Field", text: "Know where every value came from" },
  { icon: Layers, tag: "Background", title: "Worker Fleet", text: "Large scrapes keep running after you close the tab" },
  { icon: Users, tag: "Role-Based", title: "Team Access", text: "Each team sees the records it should" },
  { icon: Send, tag: "Accountable", title: "Logged Outreach", text: "Every message recorded against its lead" },
];

const METHOD = [
  { icon: Target, title: "Search", short: "Category + Location", text: "Pick your sources and describe the businesses you want: a category and location, or a directory search term." },
  { icon: Layers, title: "Scrape", short: "Fan-Out & De-Duplicate", text: "The query runs on each source you turned on, and the results are merged into one record per business." },
  { icon: Sparkle, title: "Enrich", short: "Fill The Gaps", text: "Contact routes and company context are added automatically, without touching your edits." },
  { icon: Gauge, title: "Score & Audit", short: "Prioritise", text: "Every lead gets a 0–100 score; audits and flags show who has a problem you can solve." },
  { icon: Send, title: "Reach Out", short: "Convert", text: "Push the top band into the CRM and send AI-drafted outreach that uses the lead’s own data." },
];

const SOLUTIONS: { badge: string; title: string; text: string; points: string[]; href: string; cta: string; visual: Visual; hue: number; tag: string; photo: string }[] = [
  {
    badge: "For Agencies",
    title: "Marketing & SEO Agency Prospecting",
    text: "Find local businesses in your niche, audit their websites automatically and open every conversation with evidence the owner can see for themselves.",
    points: ["SEO Website Audit", "Opportunity Detection", "AI-drafted outreach", "Client-ready reports"],
    href: "/services/agency-client-prospecting",
    cta: "Agency Client Prospecting",
    visual: "dashboard",
    hue: 265,
    tag: "Audit-Led Pitches",
    photo: "/images/pages/home--solution-agencies.webp",
  },
  {
    badge: "For Local-Market Sellers",
    title: "Local Business Prospecting",
    text: "Build city-by-category lists from Google Maps, enrich them with contact routes and work the highest-scoring businesses first.",
    points: ["Google Maps extraction", "Contact enrichment", "AI Lead Scoring", "CRM pipeline"],
    href: "/services/local-business-prospecting",
    cta: "Local Business Prospecting",
    visual: "map",
    hue: 160,
    tag: "City × Category Lists",
    photo: "/images/pages/home--solution-local.webp",
  },
  {
    badge: "For B2B Suppliers",
    title: "MSME Suppliers & Exporters",
    text: "Discover buyers and partners across IndiaMART and LinkedIn, with consistent records and the source of every field kept for trust.",
    points: ["IndiaMART extraction", "LinkedIn enrichment", "Cross-source de-duplication", "CSV export & API keys"],
    href: "/b2b/msme-suppliers",
    cta: "MSME Suppliers",
    visual: "network",
    hue: 285,
    tag: "Multi-Source Records",
    photo: "/images/pages/home--solution-suppliers.webp",
  },
  {
    badge: "For Sales Teams",
    title: "SDR & Sales Team Prioritisation",
    text: "Replace spreadsheet triage with score-sorted lists, owners and stages on a pipeline board, and outreach that is logged against every lead.",
    points: ["Score bands", "Pipeline stages & owners", "Role-based access", "Activity history"],
    href: "/b2b/sdr-teams",
    cta: "SDR Teams",
    visual: "pipeline",
    hue: 200,
    tag: "Work The Top Band",
    photo: "/images/pages/home--solution-sales-teams.webp",
  },
];

/** Sample product card shown on each solution photo, in SOLUTIONS order. */
const SOLUTION_SAMPLES: SampleKind[] = ["audit", "opportunity", "score", "pipeline"];

const PLANS = [
  { name: "Free", blurb: "For small teams just getting started with lead generation.", features: ["3 scrape queries", "Website Enrichment", "Lead dashboard & CSV export", "1 admin user"] },
  { name: "Growth", blurb: "For growing teams that want scoring, outreach and team roles.", features: ["50 scrape queries / month", "AI lead scoring & outreach", "Full team & 7 role modules", "SEO & website-build reports"], featured: true },
  { name: "Scale", blurb: "For high-volume teams that need their own infrastructure.", features: ["Unlimited queries", "Distributed Scrape Fleet", "Multi-source (LinkedIn, IndiaMART)", "Per-org API keys, priority support & SLA"] },
];

const HOME_FAQS = [
  { q: "Which data sources does LeadGen AI use?", a: "LeadGen AI discovers business leads from Google Maps, LinkedIn and IndiaMART. One query can search every source you turn on. The results are merged into one record per business, and the source of each field is recorded." },
  { q: "What does a lead record contain?", a: "Typically the business name, category and postal address; website, listed phone numbers and public email addresses; ratings, review counts and listing-completeness signals; plus anything added by enrichment, the 0–100 score with its reasons, and audit results." },
  { q: "Can I try it before choosing a paid plan?", a: "Yes. The Free plan includes 3 scrape queries, website enrichment, the lead dashboard and CSV export for one admin user. Growth and Scale add scoring, outreach, team roles, more queries and dedicated infrastructure." },
  { q: "Does LeadGen AI send emails on my behalf?", a: "Outreach campaigns are sent through the email transport you configure. Every message is logged against its lead, and you remain responsible for your list, sending limits and opt-out obligations." },
  { q: "How is each lead scored?", a: "Every lead gets one 0–100 score based on completeness, website health, market fit and activity. The reasons are stored on the record. Because the reasons are saved, your team can see why a lead ranks where it does instead of trusting a bare number." },
  { q: "Will enrichment overwrite changes my team makes by hand?", a: "No. Enrichment never overwrites a field you edited manually, and it only writes a field when the new value is more complete. Every field also records the source it came from, so you can always see where a value came from." },
  { q: "What happens if I close the browser during a large scrape?", a: "Nothing is lost. Long scrapes are handed to a background worker fleet rather than your browser, so they keep running after you close the tab. Each job records what it fetched and when, and quotas are tracked per plan and billing cycle." },
  { q: "Can I get my leads out of the platform?", a: "Yes. Leads can be exported to CSV, and CSV export is already included in the Free plan. Teams on the Scale plan can also use per-org API keys to connect LeadGen AI to their own systems and workflows." },
];

const HUB_ICONS = { "/b2c-lead-generation": Users, "/lead-capture-and-conversion": FileCheck, "/lead-qualification-and-nurturing": Gauge, "/tools-analytics-and-reporting": Layers, "/resources": Sparkle, "/comparisons-and-planning": Shield, "/lead-generation-strategies": Target, "/b2b-lead-generation": Users } as const;

export default function HomePage() {
  const industries = groupChildren("industries").slice(0, 12);
  const strategies = ["/strategies/cold-email-outreach", "/strategies/website-audit-offers", "/strategies/local-seo", "/strategies/linkedin-prospecting", "/strategies/outbound-sequences", "/strategies/account-based-marketing"]
    .filter(isLive)
    .map((p) => getPlan(p)!);
  const hubs = (["/lead-generation-strategies", "/b2b-lead-generation", "/b2c-lead-generation", "/lead-capture-and-conversion", "/lead-qualification-and-nurturing", "/tools-analytics-and-reporting", "/resources", "/comparisons-and-planning"] as const).filter(isLive);

  return (
    <div className="page-root">
      {/* ───────── Hero: headline beside a live 3D office where each room is one pipeline stage ───────── */}
      <section className="relative isolate overflow-hidden bg-bg text-ink">
        <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10 opacity-40" />
        <div className="container-x relative !max-w-[92rem] pb-10 pt-8 lg:py-10">
          <Hero3D
            intro={
              <div className="fade-up">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-ink-soft">
                  <span className="size-1.5 rounded-full bg-warm" /> AI-powered lead generation · prospect intelligence
                </p>
                <h1 className="mt-5 text-[clamp(2.2rem,3.5vw,3.6rem)] font-extrabold uppercase leading-[1] tracking-tight">
                  Turn Raw Market Data Into
                  <br />
                  <span className="text-grad">
                    <TypedPhrase phrases={["Qualified Pipeline", "Sales-Ready Leads", "Revenue You Close"]} />
                  </span>
                </h1>
                <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-soft">
                  Find, qualify and reach prospects on Google Maps, LinkedIn and IndiaMART. One AI-powered pipeline, from scraping to outreach.
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-ink-soft">
                  {["No Credit Card Required", "3 Free Queries Included", "Multi-Tenant & Role-Based"].map((t) => (
                    <li key={t} className="flex items-center gap-1.5">
                      <Check size={15} className="text-warm" strokeWidth={2.8} /> {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <a href={SITE.appUrl} rel="noopener" className="btn btn-primary !rounded-full !px-7 !py-3.5 text-base">
                    Start Scraping Free <ArrowRight size={18} />
                  </a>
                  <Link href="/how-it-works" className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-ink hover:text-brand">
                    How It Works <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            }
          />
        </div>
      </section>

      {/* ───────── Scrolling capability strip ───────── */}
      <section className="surface-soft marquee-wrap overflow-hidden py-6" aria-label="Platform capabilities">
        <div className="marquee">
          {[...MARQUEE, ...MARQUEE].map(([label, href], i) => (
            <Link
              key={`${href}-${i}`}
              href={href}
              tabIndex={i >= MARQUEE.length ? -1 : undefined}
              aria-hidden={i >= MARQUEE.length ? true : undefined}
              className="flex shrink-0 items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-3.5 font-semibold transition hover:border-brand hover:text-brand"
            >
              <span className="grid size-8 place-items-center rounded-lg bg-brand-soft text-brand">
                <Sparkle size={15} />
              </span>
              {label}
            </Link>
          ))}
        </div>
      </section>

      {/* ───────── About split ───────── */}
      <section className="section-y">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div className="card !rounded-[2rem] p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 border-b border-line pb-5">
              <div>
                <p className="font-display text-lg font-extrabold uppercase tracking-wide">The LeadGen AI pipeline</p>
                <p className="text-sm text-muted">From public data to qualified conversations</p>
              </div>
              <span className="pill shrink-0">Single Source Of Truth</span>
            </div>
            <div className="relative my-5">
              <div className={`overflow-hidden rounded-2xl border border-line bg-bg-alt ${hasPhoto("/images/pages/home--about-pipeline.webp") ? "" : "p-3"}`}>
                <Photo
                  file="/images/pages/home--about-pipeline.webp"
                  sizes="(min-width: 1024px) 34rem, 100vw"
                  fallback={<HeroVisual variant="pipeline" seed="home-about" className="h-auto w-full" />}
                />
              </div>
              <SampleCard kind="score" className="float-slow absolute -bottom-6 -left-4 hidden scale-90 xl:block" />
              <SampleCard kind="opportunity" className="float-slower absolute -right-6 -top-6 hidden scale-90 xl:block" />
            </div>
            <ol className="grid gap-3">
              {PIPELINE_ROWS.map(({ icon: Icon, ...r }, i) => (
                <li key={r.title} className="flex items-center gap-4 rounded-2xl border border-line bg-surface-2 p-4">
                  <span className="icon-tile !size-11">
                    <Icon size={19} />
                  </span>
                  <div>
                    <p className="font-bold">
                      {i + 1}. {r.title}
                    </p>
                    <p className="text-sm text-muted">{r.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <SectionHeading align="left" badge="About LeadGen AI" title="Find, Understand And Reach The Right Prospects" />
            <p className="lead mt-6">
              LeadGen AI is a prospect intelligence platform. It turns public business data into clean, scored leads you can export. Your team spends its
              time talking to prospects instead of copying and pasting research.
            </p>
            <p className="mt-5 leading-relaxed text-muted">
              Describe the businesses you want. The platform collects them, fills in missing contact details and scores every lead with saved reasons. It also audits websites
              and flags businesses with a clear problem you can solve.
            </p>
            <blockquote className="mt-8 rounded-2xl border border-line border-l-4 border-l-brand bg-surface p-6 text-lg font-semibold italic leading-relaxed">
              “From scraping to outreach, one AI-powered pipeline to discover, qualify, and close prospects.”
            </blockquote>
            <Link href="/about" className="btn btn-primary mt-9 !rounded-full !px-8 !py-4 text-base">
              About <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Modules ───────── */}
      <section className="surface-tint cut-wave section-y overflow-hidden" aria-labelledby="modules-title">
        <div aria-hidden="true" className="absolute left-1/2 top-0 size-[40rem] -translate-x-1/2 rounded-full bg-[var(--glow-1)] blur-3xl" />
        <div className="container-x relative">
          <SectionHeading
            id="modules-title"
            badge="Platform Modules"
            title="Everything Between “Who Should We Call?” And The First Reply"
            subtitle="Six connected modules on a single source of truth. Filter by pipeline stage to see what each one does."
          />
          <ModuleTabs />
        </div>
      </section>

      {/* ───────── Why ───────── */}
      <section className="section-y" aria-labelledby="why-title">
        <div className="container-x">
          <SectionHeading id="why-title" badge="Why LeadGen AI" title="Why Teams Choose LeadGen AI" subtitle="Prospecting designed for evidence, not guesswork." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map(({ icon: Icon, ...w }) => (
              <div key={w.title} className="card card-link p-7">
                <span className="icon-tile !size-14 !rounded-2xl">
                  <Icon size={24} />
                </span>
                <h3 className="mt-6 text-xl font-extrabold">{w.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{w.text}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-6 grid max-w-4xl gap-5 sm:grid-cols-2">
            {BADGES.map(({ icon: Icon, ...b }) => (
              <div key={b.title} className="card p-6">
                <div className="flex items-center justify-between">
                  <span className="icon-tile">
                    <Icon size={20} />
                  </span>
                  <span className="pill !text-[11px]">{b.tag}</span>
                </div>
                <h3 className="mt-5 text-lg font-extrabold">{b.title}</h3>
                <p className="mt-1.5 text-ink-soft">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Methodology ───────── */}
      <section data-theme="dark" className="surface-island section-y my-5 md:my-8" aria-labelledby="method-title">
        <div className="container-x">
          <SectionHeading id="method-title" badge="How It Works" title="Search, Scrape, Enrich, Score, Reach" subtitle="A five-stage workflow that takes you from a search term to logged outreach." />
          <div className="relative mt-10">
            <div aria-hidden="true" className="absolute inset-x-[8%] top-[4.25rem] hidden h-0.5 bg-gradient-to-r from-transparent via-brand/50 to-transparent lg:block" />
            <ol className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {METHOD.map(({ icon: Icon, ...m }) => (
                <li key={m.title} className="card card-link relative flex flex-col items-center p-6 text-center">
                  <span className="icon-tile !size-14 !rounded-2xl">
                    <Icon size={24} />
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold">{m.title}</h3>
                  <p className="text-sm font-semibold text-brand">{m.short}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{m.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-line bg-gradient-to-r from-[#1e1b4b] via-[#312e81] to-[#4c1d95] p-8 text-white sm:p-12">
            <div aria-hidden="true" className="absolute inset-y-0 right-0 w-full lg:w-3/5 [mask-image:linear-gradient(to_right,transparent,black_45%)]">
              <Photo file="/images/pages/home--background-jobs.webp" sizes="(min-width: 1024px) 45vw, 100vw" fill decorative className="opacity-45" />
            </div>
            <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-20" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                  <Sparkle size={14} /> Runs In The Background
                </span>
                <h3 className="mt-5 text-[clamp(1.6rem,3vw,2.3rem)] font-extrabold leading-tight">Large Jobs Keep Running After You Close The Tab</h3>
                <p className="mt-4 max-w-xl text-white/80">
                  Long scrapes are handed to the worker fleet rather than your browser. Quotas are enforced per plan and billing cycle, and every job records what it
                  fetched and when.
                </p>
              </div>
              <Link href="/how-it-works" className="btn !rounded-full bg-white !px-7 !py-3.5 text-base text-[#4338ca] hover:bg-white/90 lg:justify-self-end">
                How It Works <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Manual vs automated workflow ───────── */}
      <section className="section-y" aria-labelledby="mva-title">
        <div className="container-x">
          <SectionHeading
            id="mva-title"
            badge="Comparison"
            title="Manual Vs Automated Prospecting"
            subtitle="The same five jobs, done by hand or with LeadGen AI. Automate the collecting and checking; keep human judgement for the conversation."
          />
          <ManualVsAutomated className="mt-10" />
        </div>
      </section>

      {/* ───────── Solutions (alternating splits) ───────── */}
      <section className="section-y" aria-labelledby="solutions-title">
        <div className="container-x">
          <SectionHeading id="solutions-title" badge="Solutions" title="Built For Teams That Sell To Businesses" subtitle="The same pipeline, tuned to how your team finds and wins customers." />
          <div className="mt-10 grid gap-12 lg:gap-14">
            {SOLUTIONS.map((s, i) => (
              <div key={s.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className={i % 2 ? "lg:order-2" : undefined}>
                  <span className="pill">
                    <Sparkle size={14} /> {s.badge}
                  </span>
                  <h3 className="mt-5 text-[clamp(1.8rem,3.4vw,2.6rem)] font-extrabold leading-tight">{s.title}</h3>
                  <p className="lead mt-5">{s.text}</p>
                  <p className="mt-7 font-bold">Key Modules:</p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-[15px] text-ink-soft">
                        <span className="tick">
                          <Check size={13} strokeWidth={3} />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link href={s.href} className="btn btn-ghost mt-8 !rounded-xl !px-6 !py-3.5 text-base">
                    {s.cta} <ChevronRight size={18} />
                  </Link>
                </div>
                <div className={`card overflow-hidden !rounded-[2rem] p-5 ${i % 2 ? "lg:order-1" : ""}`}>
                  <div className={`relative overflow-hidden rounded-3xl border border-line bg-bg-alt ${hasPhoto(s.photo) ? "" : "p-4"}`}>
                    <SampleCard kind={SOLUTION_SAMPLES[i % SOLUTION_SAMPLES.length]} className="absolute bottom-4 left-4 z-10 hidden origin-bottom-left scale-[0.85] sm:block" />
                    <Photo
                      file={s.photo}
                      sizes="(min-width: 1024px) 36rem, 100vw"
                      fallback={<HeroVisual variant={s.visual} seed={`home-solution-${i}`} hue={s.hue} topic={s.title} className="h-auto w-full" />}
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3 px-1">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand">{s.badge}</span>
                    <span className="rounded-md border border-line px-2.5 py-1 font-mono text-xs font-semibold text-muted">{s.tag}</span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {s.points.slice(0, 2).map((p) => (
                      <div key={p} className="rounded-2xl border border-line bg-surface-2 p-4">
                        <p className="text-xs text-muted">Module</p>
                        <p className="mt-1 font-bold">{p}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Industries ───────── */}
      <section className="surface-soft cut-wave section-y" aria-labelledby="ind-title">
        <div className="container-x">
          <SectionHeading
            id="ind-title"
            badge="Industries"
            title="Playbooks For 44 Industries"
            subtitle="Buying triggers, listing signals and objections differ by vertical. Each guide covers generating leads and prospecting into the sector."
          />
          <IndustryTabs className="mt-10" />
          {/* Industry cards glide in three rows (alternating directions); each row is rendered four times for a seamless
              loop, with the copy hidden from assistive tech and keyboard. Hover pauses; reduced motion shows a grid. */}
          <div className="slide-rows mt-10" aria-label="More industry playbooks">
            {[0, 1, 2].map((row) => {
              const items = industries.filter((_, k) => k % 3 === row);
              return (
                <div key={row} className="slide-row" style={{ "--dir": row % 2 ? "reverse" : "normal", "--dur": `${38 + row * 6}s` } as CSSProperties}>
                  {[0, 1, 2, 3].map((copy) => (
                    <ul key={copy} className="slide-track" aria-hidden={copy > 0 ? true : undefined}>
                      {items.map((p) => (
                        <li key={p.path}>
                          <Link href={p.path} tabIndex={copy > 0 ? -1 : undefined} className="card card-link group flex h-full items-center gap-3 p-4 sm:gap-4 sm:p-5">
                            <span className="icon-tile !size-10 shrink-0 sm:!size-11">
                              <MapPin size={19} />
                            </span>
                            <span className="min-w-0 flex-1 text-[15px] font-bold leading-snug sm:text-base">{p.title}</span>
                            <ChevronRight size={17} className="shrink-0 text-muted transition group-hover:translate-x-1 group-hover:text-brand" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link href="/industries" className="btn btn-primary !rounded-full !px-8 !py-3.5 text-base">
              Industries <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Strategies ───────── */}
      <section className="section-y" aria-labelledby="str-title">
        <div className="container-x">
          <SectionHeading id="str-title" badge="Strategies" title="Practical Lead Generation Playbooks" subtitle="Step-by-step guides for outbound, inbound and multichannel campaigns." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {strategies.map((p) => (
              <PageCard key={p.path} page={p} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/lead-generation-strategies" className="btn btn-ghost !rounded-full !px-8 !py-3.5 text-base">
              All Strategies <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Plans ───────── */}
      <section className="surface-tint cut-wave section-y" aria-labelledby="plan-title">
        <div className="container-x">
          <SectionHeading id="plan-title" badge="Plans" title="Start Free, Scale When It Works" subtitle="Three plans, from a first test to dedicated infrastructure. See the live app for current pricing." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {PLANS.map((p) => (
              <div key={p.name} className={`card relative flex flex-col !rounded-3xl p-8 ${p.featured ? "card-accent" : ""}`}>
                {p.featured && (
                  <span className="absolute -top-3.5 left-8 rounded-full bg-grad px-3.5 py-1 text-xs font-bold">Most Popular</span>
                )}
                <h3 className="text-2xl font-extrabold">{p.name}</h3>
                <p className="mt-2 text-ink-soft">{p.blurb}</p>
                <ul className="mt-7 grid flex-1 gap-3.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[16px]">
                      <Check size={19} className="mt-0.5 shrink-0 text-success" strokeWidth={2.6} /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/plans" className={`btn mt-9 !rounded-full !py-3.5 ${p.featured ? "btn-primary" : "btn-ghost"}`}>
                  Plans
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="section-y" aria-labelledby="home-faq-title">
        <div className="container-x">
          <SectionHeading id="home-faq-title" badge="FAQ" title="Answers Before Your First Scrape" />
          <div className={`mx-auto mt-9 grid items-start gap-10 ${hasPhoto("/images/pages/home--final-cta.webp") ? "max-w-6xl lg:grid-cols-[1fr_1.25fr]" : "max-w-3xl"}`}>
            {hasPhoto("/images/pages/home--final-cta.webp") && (
              <div className="card hidden overflow-hidden !rounded-3xl lg:sticky lg:top-28 lg:block">
                <Photo file="/images/pages/home--final-cta.webp" sizes="(min-width: 1024px) 30rem, 100vw" />
              </div>
            )}
            <div>
              <Faqs items={HOME_FAQS} showHeading={false} />
              <p className="mt-5 text-center text-muted">
                More questions? Visit the{" "}
                <Link href="/faq" className="font-semibold text-brand">
                  FAQ
                </Link>{" "}
                or browse the{" "}
                <Link href="/sitemap" className="font-semibold text-brand">
                  Sitemap
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-x">
        <CtaBand
          heading="Find The Businesses That Need What You Sell"
          text="Run your first queries on the Free plan, or request a walkthrough for your team."
          label="Start Free"
          href={SITE.appUrl}
        />
      </div>

      {/* ───────── Knowledge hubs ───────── */}
      <section className="surface-soft cut-wave section-y" aria-labelledby="learn-title">
        <div className="container-x">
          <SectionHeading id="learn-title" badge="Learning Library" title="What You’ll Find In Our Guides" subtitle={`${LIVE.length} pages covering every stage, from first click to closed deal.`} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {hubs.map((path) => {
              const Icon = HUB_ICONS[path];
              const plan = getPlan(path)!;
              return (
                <Link key={path} href={path} className="card card-link group p-6">
                  <span className="icon-tile">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold">{plan.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    Explore <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
