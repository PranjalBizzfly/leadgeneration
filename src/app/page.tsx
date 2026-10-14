import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faqs } from "@/components/Faqs";
import { HeroVisual } from "@/components/HeroVisual";
import { HeroPanel } from "@/components/home/HeroPanel";
import { ModuleTabs } from "@/components/home/ModuleTabs";
import { TypedPhrase } from "@/components/home/TypedPhrase";
import { ArrowRight, Check, ChevronRight, FileCheck, Gauge, Layers, MapPin, Send, Shield, Sparkle, Target, Users } from "@/components/icons";
import { hasPhoto, Photo } from "@/components/Photo";
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
      "Find, enrich, score and reach the right prospects from Google Maps, LinkedIn and IndiaMART — with SEO audits, opportunity detection and AI-drafted outreach.",
    path: "/",
  }),
  title: { absolute: `${SITE.name} — AI-Powered Lead Generation & Prospect Intelligence` },
};

const MARQUEE = [
  ["Google Maps lead extraction", "/services/google-maps-lead-extraction"],
  ["LinkedIn enrichment", "/services/linkedin-lead-enrichment"],
  ["IndiaMART extraction", "/services/indiamart-lead-extraction"],
  ["Business email discovery", "/services/business-email-discovery"],
  ["Phone number validation", "/services/phone-number-validation"],
  ["AI lead scoring", "/services/ai-lead-scoring"],
  ["SEO website audit", "/services/seo-website-audit"],
  ["Missing website detection", "/services/missing-website-detection"],
  ["CRM pipeline", "/services/crm-pipeline-management"],
  ["AI-drafted outreach", "/services/ai-drafted-outreach-messages"],
  ["CSV export", "/services/csv-lead-export"],
  ["API access", "/services/api-access"],
] as const;

const PIPELINE_ROWS = [
  { icon: Layers, title: "Discover", text: "One query across Google Maps, LinkedIn and IndiaMART" },
  { icon: Sparkle, title: "Enrich", text: "Emails, phones, websites and socials added automatically" },
  { icon: Gauge, title: "Qualify", text: "0–100 scores, SEO audits and opportunity flags" },
  { icon: Send, title: "Engage", text: "CRM pipeline and AI-drafted outreach, every message logged" },
];

const WHY = [
  { icon: Layers, title: "One pipeline, not five tools", text: "Search, scraping, enrichment, scoring, audits and outreach share one record per business, so nothing is lost between exports." },
  { icon: Shield, title: "Traceable data", text: "Every field records the source it came from, every job records what it fetched and when, and your manual edits are never overwritten." },
  { icon: Gauge, title: "Scores you can explain", text: "Each lead gets a single 0–100 score with the reasons stored on the record — completeness, website health, market fit and activity." },
  { icon: FileCheck, title: "Audit-led conversations", text: "Open with evidence: a severity-ranked SEO report and a prioritised fix list you can hand straight to the prospect." },
  { icon: Target, title: "Opportunities surfaced for you", text: "Businesses with no website, a broken site, no contact route or a weak audit are flagged instead of buried mid-list." },
  { icon: Users, title: "Built for teams", text: "Multi-tenant, role-based workspaces with 7 role modules on Growth, plus per-org API keys and a dedicated fleet on Scale." },
];

const BADGES = [
  { icon: Shield, tag: "Traceable", title: "Source per field", text: "Know where every value came from" },
  { icon: Layers, tag: "Background", title: "Worker fleet", text: "Large scrapes keep running after you close the tab" },
  { icon: Users, tag: "Role-based", title: "Team access", text: "Each team sees the records it should" },
  { icon: Send, tag: "Accountable", title: "Logged outreach", text: "Every message recorded against its lead" },
];

const METHOD = [
  { icon: Target, title: "Search", short: "Category + location", text: "Pick sources and describe the businesses you want — a category and a location, or a directory search term." },
  { icon: Layers, title: "Scrape", short: "Fan-out & de-duplicate", text: "The query fans out to each enabled source and is normalised into one record per business." },
  { icon: Sparkle, title: "Enrich", short: "Fill the gaps", text: "Contact routes and company context are added automatically, without touching your edits." },
  { icon: Gauge, title: "Score & audit", short: "Prioritise", text: "Every lead gets a 0–100 score; audits and flags show who has a problem you can solve." },
  { icon: Send, title: "Reach out", short: "Convert", text: "Push the top band into the CRM and send AI-drafted outreach that uses the lead’s own data." },
];

const SOLUTIONS: { badge: string; title: string; text: string; points: string[]; href: string; cta: string; visual: Visual; hue: number; tag: string; photo: string }[] = [
  {
    badge: "For agencies",
    title: "Marketing & SEO agency prospecting",
    text: "Find local businesses in your niche, audit their websites automatically and open every conversation with evidence the owner can see for themselves.",
    points: ["SEO website audit", "Opportunity detection", "AI-drafted outreach", "Client-ready reports"],
    href: "/services/agency-client-prospecting",
    cta: "Explore agency prospecting",
    visual: "dashboard",
    hue: 265,
    tag: "Audit-led pitches",
    photo: "/images/pages/home--solution-agencies.webp",
  },
  {
    badge: "For local-market sellers",
    title: "Local business prospecting",
    text: "Build city-by-category lists from Google Maps, enrich them with contact routes and work the highest-scoring businesses first.",
    points: ["Google Maps extraction", "Contact enrichment", "AI lead scoring", "CRM pipeline"],
    href: "/services/local-business-prospecting",
    cta: "Explore local prospecting",
    visual: "map",
    hue: 160,
    tag: "City × category lists",
    photo: "/images/pages/home--solution-local.webp",
  },
  {
    badge: "For B2B suppliers",
    title: "MSME suppliers & exporters",
    text: "Discover buyers and partners across IndiaMART and LinkedIn, with consistent records and the source of every field kept for trust.",
    points: ["IndiaMART extraction", "LinkedIn enrichment", "Cross-source de-duplication", "CSV export & API keys"],
    href: "/b2b/msme-suppliers",
    cta: "Explore supplier prospecting",
    visual: "network",
    hue: 285,
    tag: "Multi-source records",
    photo: "/images/pages/home--solution-suppliers.webp",
  },
  {
    badge: "For sales teams",
    title: "SDR & sales team prioritisation",
    text: "Replace spreadsheet triage with score-sorted lists, owners and stages on a pipeline board, and outreach that is logged against every lead.",
    points: ["Score bands", "Pipeline stages & owners", "Role-based access", "Activity history"],
    href: "/b2b/sdr-teams",
    cta: "Explore sales team workflows",
    visual: "pipeline",
    hue: 200,
    tag: "Work the top band",
    photo: "/images/pages/home--solution-sales-teams.webp",
  },
];

const PLANS = [
  { name: "Free", blurb: "For small teams just getting started with lead generation.", features: ["3 scrape queries", "Website enrichment", "Lead dashboard & CSV export", "1 admin user"] },
  { name: "Growth", blurb: "For growing teams that need deeper insights and automation.", features: ["50 scrape queries / month", "AI lead scoring & outreach", "Full team & 7 role modules", "SEO & website-build reports"], featured: true },
  { name: "Scale", blurb: "For high-volume operations that demand dedicated infrastructure.", features: ["Unlimited queries", "Distributed scrape fleet", "Multi-source (LinkedIn, IndiaMART)", "Per-org API keys, priority support & SLA"] },
];

const HOME_FAQS = [
  { q: "Which data sources does LeadGen AI use?", a: "LeadGen AI discovers business leads from Google Maps, LinkedIn and IndiaMART. A single query can fan out to every enabled source, and the results are de-duplicated into one record per business, with the source of each field recorded." },
  { q: "What does a lead record contain?", a: "Typically the business name, category and postal address; website, listed phone numbers and public email addresses; ratings, review counts and listing-completeness signals; plus anything added by enrichment, the 0–100 score with its reasons, and audit results." },
  { q: "Can I try it before choosing a paid plan?", a: "Yes. The Free plan includes 3 scrape queries, website enrichment, the lead dashboard and CSV export for one admin user. Growth and Scale add scoring, outreach, team roles, more queries and dedicated infrastructure." },
  { q: "Does LeadGen AI send emails on my behalf?", a: "Outreach campaigns are sent through the email transport you configure. Every message is logged against its lead, and you remain responsible for your list, sending limits and opt-out obligations." },
];

const BoltIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const HUB_ICONS = { "/b2c": Users, "/lead-capture": FileCheck, "/lead-qualification": Gauge, "/tools": Layers, "/resources": Sparkle, "/compare": Shield, "/strategies": Target, "/b2b": Users } as const;

export default function HomePage() {
  const industries = groupChildren("industries").slice(0, 12);
  const strategies = ["/strategies/cold-email-outreach", "/strategies/website-audit-offers", "/strategies/local-seo", "/strategies/linkedin-prospecting", "/strategies/outbound-sequences", "/strategies/account-based-marketing"]
    .filter(isLive)
    .map((p) => getPlan(p)!);
  const hubs = (["/strategies", "/b2b", "/b2c", "/lead-capture", "/lead-qualification", "/tools", "/resources", "/compare"] as const).filter(isLive);
  const stats = [
    { value: "3", label: "Data sources", icon: MapPin },
    { value: "0–100", label: "Lead score with reasons", icon: Gauge },
    { value: "6", label: "Connected modules", icon: Layers },
    { value: String(LIVE.length), label: "Free guides & playbooks", icon: FileCheck },
  ];

  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.16] [mask-image:linear-gradient(to_bottom,black_40%,transparent)]">
          <Photo file="/images/pages/home--hero-backdrop.webp" sizes="100vw" fill decorative preload />
        </div>
        <div aria-hidden="true" className="bg-grid absolute inset-0" />
        <div aria-hidden="true" className="absolute -top-56 right-[-15%] size-[52rem] rounded-full bg-[var(--glow-1)] blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-64 left-[-15%] size-[40rem] rounded-full bg-[var(--glow-3)] blur-3xl" />
        <div className="container-x relative grid items-center gap-14 pb-20 pt-14 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[1.15fr_1fr] lg:pb-24 lg:pt-16">
          <div className="fade-up">
            {/* Hero copy mirrors the live LeadGen AI landing page. */}
            <span className="pill !normal-case !tracking-normal !text-sm">
              <BoltIcon /> AI-powered lead generation
            </span>
            <h1 className="mt-7 text-[clamp(2.75rem,6.2vw,4.8rem)] font-extrabold leading-[1.05]">
              Turn raw market data into
              <br />
              <TypedPhrase phrases={["qualified pipeline", "sales-ready leads", "revenue you close"]} />
            </h1>
            <p className="lead mt-7 max-w-xl">
              From scraping to outreach, one AI-powered pipeline to discover, qualify, and close prospects — across Google Maps, LinkedIn, and IndiaMART.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={SITE.appUrl} rel="noopener" className="btn btn-primary !rounded-full !px-8 !py-4 text-base">
                Start scraping free <ArrowRight size={18} />
              </a>
              <a href={SITE.appUrl} rel="noopener" className="btn btn-ghost !rounded-full !px-8 !py-4 text-base">
                Sign in
              </a>
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-[15px] font-medium text-ink-soft">
              {["No credit card required", "3 free queries included", "Multi-tenant & role-based"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check size={18} className="text-success" strokeWidth={2.6} /> {t}
                </li>
              ))}
            </ul>
          </div>
          <HeroPanel />
        </div>
      </section>

      {/* ───────── Scrolling capability strip ───────── */}
      <section className="marquee-wrap overflow-hidden border-y border-line bg-bg-alt py-6" aria-label="Platform capabilities">
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

      {/* ───────── Fact band ───────── */}
      <section className="container-x pt-16 md:pt-20" aria-label="LeadGen AI at a glance">
        <div className="card grid grid-cols-2 divide-line !rounded-[2rem] lg:grid-cols-4 lg:divide-x">
          {stats.map(({ icon: Icon, ...s }) => (
            <div key={s.label} className="flex flex-col items-center px-4 py-9 text-center">
              <span className="icon-tile !size-14 !rounded-2xl">
                <Icon size={24} />
              </span>
              <p className="mt-5 font-display text-[clamp(2.2rem,4vw,3rem)] font-extrabold leading-none">{s.value}</p>
              <p className="mt-2 font-semibold text-ink-soft">{s.label}</p>
            </div>
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
              <span className="pill shrink-0">Single source of truth</span>
            </div>
            <div className={`my-5 overflow-hidden rounded-2xl border border-line bg-bg-alt ${hasPhoto("/images/pages/home--about-pipeline.webp") ? "" : "p-3"}`}>
              <Photo
                file="/images/pages/home--about-pipeline.webp"
                sizes="(min-width: 1024px) 34rem, 100vw"
                fallback={<HeroVisual variant="pipeline" seed="home-about" className="h-auto w-full" />}
              />
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
            <SectionHeading align="left" badge="About LeadGen AI" title="Find, understand and reach the right prospects" />
            <p className="lead mt-6">
              LeadGen AI is a prospect intelligence platform. It turns raw public business data into clean, qualified, export-ready opportunities — so your team spends its
              time on conversations, not copy-paste research.
            </p>
            <p className="mt-5 leading-relaxed text-muted">
              Describe the businesses you want, and the platform collects them, fills in missing contact routes, scores every lead with stored reasons, audits websites
              and flags the businesses with an obvious problem you can solve.
            </p>
            <blockquote className="mt-8 rounded-2xl border border-line border-l-4 border-l-brand bg-surface p-6 text-lg font-semibold italic leading-relaxed">
              “From scraping to outreach, one AI-powered pipeline to discover, qualify, and close prospects.”
            </blockquote>
            <Link href="/about" className="btn btn-primary mt-9 !rounded-full !px-8 !py-4 text-base">
              Learn more about LeadGen AI <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Modules ───────── */}
      <section className="section-y relative overflow-hidden border-y border-line bg-bg-alt" aria-labelledby="modules-title">
        <div aria-hidden="true" className="absolute left-1/2 top-0 size-[40rem] -translate-x-1/2 rounded-full bg-[var(--glow-1)] blur-3xl" />
        <div className="container-x relative">
          <SectionHeading
            id="modules-title"
            badge="Platform modules"
            title="Everything between “who should we call?” and the first reply"
            subtitle="Six connected modules on a single source of truth. Filter by pipeline stage to see what each one does."
          />
          <ModuleTabs />
        </div>
      </section>

      {/* ───────── Why ───────── */}
      <section className="section-y" aria-labelledby="why-title">
        <div className="container-x">
          <SectionHeading id="why-title" badge="Why LeadGen AI" title="Why teams choose LeadGen AI" subtitle="Prospecting designed for evidence, not guesswork." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      <section className="section-y border-y border-line bg-bg-alt" aria-labelledby="method-title">
        <div className="container-x">
          <SectionHeading id="method-title" badge="How it works" title="Search, Scrape, Enrich, Score, Reach" subtitle="A five-stage workflow that takes you from a search term to logged outreach." />
          <div className="relative mt-16">
            <div aria-hidden="true" className="absolute inset-x-[8%] top-[4.25rem] hidden h-0.5 bg-gradient-to-r from-transparent via-brand/50 to-transparent lg:block" />
            <ol className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {METHOD.map(({ icon: Icon, ...m }, i) => (
                <li key={m.title} className="card card-link relative flex flex-col items-center p-6 text-center">
                  <span className="absolute right-4 top-3 font-mono text-2xl font-extrabold text-line">{String(i + 1).padStart(2, "0")}</span>
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
          <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-line bg-gradient-to-r from-[#1e1b4b] via-[#312e81] to-[#4c1d95] p-8 text-white sm:p-12">
            <div aria-hidden="true" className="absolute inset-y-0 right-0 w-full lg:w-3/5 [mask-image:linear-gradient(to_right,transparent,black_45%)]">
              <Photo file="/images/pages/home--background-jobs.webp" sizes="(min-width: 1024px) 45vw, 100vw" fill decorative className="opacity-45" />
            </div>
            <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-20" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                  <Sparkle size={14} /> Runs in the background
                </span>
                <h3 className="mt-5 text-[clamp(1.6rem,3vw,2.3rem)] font-extrabold leading-tight">Large jobs keep running after you close the tab</h3>
                <p className="mt-4 max-w-xl text-white/80">
                  Long scrapes are handed to the worker fleet rather than your browser. Quotas are enforced per plan and billing cycle, and every job records what it
                  fetched and when.
                </p>
              </div>
              <Link href="/how-it-works" className="btn !rounded-full bg-white !px-7 !py-3.5 text-base text-[#4338ca] hover:bg-white/90 lg:justify-self-end">
                Read the full walkthrough <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Solutions (alternating splits) ───────── */}
      <section className="section-y" aria-labelledby="solutions-title">
        <div className="container-x">
          <SectionHeading id="solutions-title" badge="Solutions" title="Built for teams that sell to businesses" subtitle="The same pipeline, tuned to how your team finds and wins customers." />
          <div className="mt-16 grid gap-20">
            {SOLUTIONS.map((s, i) => (
              <div key={s.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className={i % 2 ? "lg:order-2" : undefined}>
                  <span className="pill">
                    <Sparkle size={14} /> {s.badge}
                  </span>
                  <h3 className="mt-5 text-[clamp(1.8rem,3.4vw,2.6rem)] font-extrabold leading-tight">{s.title}</h3>
                  <p className="lead mt-5">{s.text}</p>
                  <p className="mt-7 font-bold">Key modules:</p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-[15px] text-ink-soft">
                        <span className="grid size-6 shrink-0 place-items-center rounded-full border border-brand/40 text-brand">
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
                  <div className={`overflow-hidden rounded-3xl border border-line bg-bg-alt ${hasPhoto(s.photo) ? "" : "p-4"}`}>
                    <Photo
                      file={s.photo}
                      sizes="(min-width: 1024px) 36rem, 100vw"
                      fallback={<HeroVisual variant={s.visual} seed={`home-solution-${i}`} hue={s.hue} className="h-auto w-full" />}
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
      <section className="section-y border-y border-line bg-bg-alt" aria-labelledby="ind-title">
        <div className="container-x">
          <SectionHeading
            id="ind-title"
            badge="Industries"
            title="Playbooks for 44 industries"
            subtitle="Buying triggers, listing signals and objections differ by vertical. Each guide covers generating leads and prospecting into the sector."
          />
          <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((p) => (
              <li key={p.path}>
                <Link href={p.path} className="card card-link group flex h-full items-center gap-4 p-5">
                  <span className="icon-tile !size-11">
                    <MapPin size={19} />
                  </span>
                  <span className="min-w-0 flex-1 font-bold">{p.title}</span>
                  <ChevronRight size={17} className="hidden shrink-0 text-muted transition group-hover:translate-x-1 group-hover:text-brand sm:block" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Link href="/industries" className="btn btn-primary !rounded-full !px-8 !py-3.5 text-base">
              View all industries <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Strategies ───────── */}
      <section className="section-y" aria-labelledby="str-title">
        <div className="container-x">
          <SectionHeading id="str-title" badge="Strategies" title="Practical lead generation playbooks" subtitle="Step-by-step guides for outbound, inbound and multichannel campaigns." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {strategies.map((p) => (
              <PageCard key={p.path} page={p} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/strategies" className="btn btn-ghost !rounded-full !px-8 !py-3.5 text-base">
              All 39 strategies <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Plans ───────── */}
      <section className="section-y border-y border-line bg-bg-alt" aria-labelledby="plan-title">
        <div className="container-x">
          <SectionHeading id="plan-title" badge="Plans" title="Start free, scale when it works" subtitle="Three plans, from a first test to dedicated infrastructure. See the live app for current pricing." />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {PLANS.map((p) => (
              <div key={p.name} className={`card relative flex flex-col !rounded-3xl p-8 ${p.featured ? "border-brand ring-4 ring-brand-soft" : ""}`}>
                {p.featured && (
                  <span className="absolute -top-3.5 left-8 rounded-full bg-grad px-3.5 py-1 text-xs font-bold">Most popular</span>
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
                  Compare {p.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="section-y" aria-labelledby="home-faq-title">
        <div className="container-x">
          <SectionHeading id="home-faq-title" badge="FAQ" title="Answers before your first scrape" />
          <div className={`mx-auto mt-12 grid items-start gap-10 ${hasPhoto("/images/pages/home--final-cta.webp") ? "max-w-6xl lg:grid-cols-[1fr_1.25fr]" : "max-w-3xl"}`}>
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
                full FAQ
              </Link>{" "}
              or browse the{" "}
              <Link href="/sitemap" className="font-semibold text-brand">
                complete sitemap
              </Link>
              .
            </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-x">
        <CtaBand
          heading="Find the businesses that need what you sell"
          text="Run your first queries on the Free plan, or request a walkthrough for your team."
          label="Start free"
          href={SITE.appUrl}
        />
      </div>

      {/* ───────── Knowledge hubs ───────── */}
      <section className="section-y" aria-labelledby="learn-title">
        <div className="container-x">
          <SectionHeading id="learn-title" badge="Learning library" title="What you’ll find in our guides" subtitle={`${LIVE.length} pages covering every stage, from first click to closed deal.`} />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {hubs.map((path) => {
              const Icon = HUB_ICONS[path];
              const plan = getPlan(path)!;
              const count = LIVE.filter((p) => p.group === plan.group).length;
              return (
                <Link key={path} href={path} className="card card-link group p-6">
                  <div className="flex items-center justify-between">
                    <span className="icon-tile">
                      <Icon size={20} />
                    </span>
                    <span className="text-sm font-bold text-muted">{count} pages</span>
                  </div>
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
    </>
  );
}
