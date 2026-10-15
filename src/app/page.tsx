import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faqs } from "@/components/Faqs";
import { HeroVisual } from "@/components/HeroVisual";
import { Hero3D } from "@/components/home/Hero3D";
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
  { icon: Layers, title: "Discover", text: "One Query Across Google Maps, LinkedIn And IndiaMART" },
  { icon: Sparkle, title: "Enrich", text: "Emails, Phones, Websites And Socials Added Automatically" },
  { icon: Gauge, title: "Qualify", text: "0–100 Scores, SEO Audits And Opportunity Flags" },
  { icon: Send, title: "Engage", text: "CRM Pipeline And AI-Drafted Outreach, Every Message Logged" },
];

const WHY = [
  { icon: Layers, title: "One Pipeline, Not Five Tools", text: "Search, Scraping, Enrichment, Scoring, Audits And Outreach Share One Record Per Business, So Nothing Is Lost Between Exports." },
  { icon: Shield, title: "Traceable Data", text: "Every Field Records The Source It Came From, Every Job Records What It Fetched And When, And Your Manual Edits Are Never Overwritten." },
  { icon: Gauge, title: "Scores You Can Explain", text: "Each Lead Gets One 0–100 Score. The Reasons (Completeness, Website Health, Market Fit And Activity) Are Saved On The Record." },
  { icon: FileCheck, title: "Audit-Led Conversations", text: "Open With Evidence: A Severity-Ranked SEO Report And A Prioritised Fix List You Can Hand Straight To The Prospect." },
  { icon: Target, title: "Opportunities Flagged For You", text: "Businesses With No Website, A Broken Site, No Contact Route Or A Weak Audit Are Flagged Instead Of Buried Mid-List." },
  { icon: Users, title: "Built For Teams", text: "Multi-Tenant, Role-Based Workspaces With 7 Role Modules On Growth, Plus Per-Org API Keys And A Dedicated Fleet On Scale." },
];

const BADGES = [
  { icon: Shield, tag: "Traceable", title: "Source Per Field", text: "Know Where Every Value Came From" },
  { icon: Layers, tag: "Background", title: "Worker Fleet", text: "Large Scrapes Keep Running After You Close The Tab" },
  { icon: Users, tag: "Role-Based", title: "Team Access", text: "Each Team Sees The Records It Should" },
  { icon: Send, tag: "Accountable", title: "Logged Outreach", text: "Every Message Recorded Against Its Lead" },
];

const METHOD = [
  { icon: Target, title: "Search", short: "Category + Location", text: "Pick Your Sources And Describe The Businesses You Want: A Category And Location, Or A Directory Search Term." },
  { icon: Layers, title: "Scrape", short: "Fan-Out & De-Duplicate", text: "The Query Runs On Each Source You Turned On, And The Results Are Merged Into One Record Per Business." },
  { icon: Sparkle, title: "Enrich", short: "Fill The Gaps", text: "Contact Routes And Company Context Are Added Automatically, Without Touching Your Edits." },
  { icon: Gauge, title: "Score & Audit", short: "Prioritise", text: "Every Lead Gets A 0–100 Score; Audits And Flags Show Who Has A Problem You Can Solve." },
  { icon: Send, title: "Reach Out", short: "Convert", text: "Push The Top Band Into The CRM And Send AI-Drafted Outreach That Uses The Lead’s Own Data." },
];

const SOLUTIONS: { badge: string; title: string; text: string; points: string[]; href: string; cta: string; visual: Visual; hue: number; tag: string; photo: string }[] = [
  {
    badge: "For Agencies",
    title: "Marketing & SEO Agency Prospecting",
    text: "Find Local Businesses In Your Niche, Audit Their Websites Automatically And Open Every Conversation With Evidence The Owner Can See For Themselves.",
    points: ["SEO Website Audit", "Opportunity Detection", "AI-Drafted Outreach", "Client-Ready Reports"],
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
    text: "Build City-By-Category Lists From Google Maps, Enrich Them With Contact Routes And Work The Highest-Scoring Businesses First.",
    points: ["Google Maps Extraction", "Contact Enrichment", "AI Lead Scoring", "CRM Pipeline"],
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
    text: "Discover Buyers And Partners Across IndiaMART And LinkedIn, With Consistent Records And The Source Of Every Field Kept For Trust.",
    points: ["IndiaMART Extraction", "LinkedIn Enrichment", "Cross-Source De-Duplication", "CSV Export & API Keys"],
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
    text: "Replace Spreadsheet Triage With Score-Sorted Lists, Owners And Stages On A Pipeline Board, And Outreach That Is Logged Against Every Lead.",
    points: ["Score Bands", "Pipeline Stages & Owners", "Role-Based Access", "Activity History"],
    href: "/b2b/sdr-teams",
    cta: "SDR Teams",
    visual: "pipeline",
    hue: 200,
    tag: "Work The Top Band",
    photo: "/images/pages/home--solution-sales-teams.webp",
  },
];

const PLANS = [
  { name: "Free", blurb: "For Small Teams Just Getting Started With Lead Generation.", features: ["3 Scrape Queries", "Website Enrichment", "Lead Dashboard & CSV Export", "1 Admin User"] },
  { name: "Growth", blurb: "For Growing Teams That Want Scoring, Outreach And Team Roles.", features: ["50 Scrape Queries / Month", "AI Lead Scoring & Outreach", "Full Team & 7 Role Modules", "SEO & Website-Build Reports"], featured: true },
  { name: "Scale", blurb: "For High-Volume Teams That Need Their Own Infrastructure.", features: ["Unlimited Queries", "Distributed Scrape Fleet", "Multi-Source (LinkedIn, IndiaMART)", "Per-Org API Keys, Priority Support & SLA"] },
];

const HOME_FAQS = [
  { q: "Which Data Sources Does LeadGen AI Use?", a: "LeadGen AI Discovers Business Leads From Google Maps, LinkedIn And IndiaMART. One Query Can Search Every Source You Turn On. The Results Are Merged Into One Record Per Business, And The Source Of Each Field Is Recorded." },
  { q: "What Does A Lead Record Contain?", a: "Typically The Business Name, Category And Postal Address; Website, Listed Phone Numbers And Public Email Addresses; Ratings, Review Counts And Listing-Completeness Signals; Plus Anything Added By Enrichment, The 0–100 Score With Its Reasons, And Audit Results." },
  { q: "Can I Try It Before Choosing A Paid Plan?", a: "Yes. The Free Plan Includes 3 Scrape Queries, Website Enrichment, The Lead Dashboard And CSV Export For One Admin User. Growth And Scale Add Scoring, Outreach, Team Roles, More Queries And Dedicated Infrastructure." },
  { q: "Does LeadGen AI Send Emails On My Behalf?", a: "Outreach Campaigns Are Sent Through The Email Transport You Configure. Every Message Is Logged Against Its Lead, And You Remain Responsible For Your List, Sending Limits And Opt-Out Obligations." },
  { q: "How Is Each Lead Scored?", a: "Every Lead Gets One 0–100 Score Based On Completeness, Website Health, Market Fit And Activity. The Reasons Are Stored On The Record. Because The Reasons Are Saved, Your Team Can See Why A Lead Ranks Where It Does Instead Of Trusting A Bare Number." },
  { q: "Will Enrichment Overwrite Changes My Team Makes By Hand?", a: "No. Enrichment Never Overwrites A Field You Edited Manually, And It Only Writes A Field When The New Value Is More Complete. Every Field Also Records The Source It Came From, So You Can Always See Where A Value Came From." },
  { q: "What Happens If I Close The Browser During A Large Scrape?", a: "Nothing Is Lost. Long Scrapes Are Handed To A Background Worker Fleet Rather Than Your Browser, So They Keep Running After You Close The Tab. Each Job Records What It Fetched And When, And Quotas Are Tracked Per Plan And Billing Cycle." },
  { q: "Can I Get My Leads Out Of The Platform?", a: "Yes. Leads Can Be Exported To CSV, And CSV Export Is Already Included In The Free Plan. Teams On The Scale Plan Can Also Use Per-Org API Keys To Connect LeadGen AI To Their Own Systems And Workflows." },
];

const HUB_ICONS = { "/b2c": Users, "/lead-capture": FileCheck, "/lead-qualification": Gauge, "/tools": Layers, "/resources": Sparkle, "/compare": Shield, "/strategies": Target, "/b2b": Users } as const;

export default function HomePage() {
  const industries = groupChildren("industries").slice(0, 12);
  const strategies = ["/strategies/cold-email-outreach", "/strategies/website-audit-offers", "/strategies/local-seo", "/strategies/linkedin-prospecting", "/strategies/outbound-sequences", "/strategies/account-based-marketing"]
    .filter(isLive)
    .map((p) => getPlan(p)!);
  const hubs = (["/strategies", "/b2b", "/b2c", "/lead-capture", "/lead-qualification", "/tools", "/resources", "/compare"] as const).filter(isLive);

  return (
    <>
      {/* ───────── Hero: headline beside a live 3D office where each room is one pipeline stage ───────── */}
      <section className="relative isolate overflow-hidden bg-bg text-ink">
        <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10 opacity-40" />
        <div className="container-x relative !max-w-[92rem] pb-10 pt-8 lg:py-10">
          <Hero3D
            intro={
              <div className="fade-up">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-ink-soft">
                  <span className="size-1.5 rounded-full bg-warm" /> AI-Powered Lead Generation · Prospect Intelligence
                </p>
                <h1 className="mt-5 text-[clamp(2.2rem,3.5vw,3.6rem)] font-extrabold uppercase leading-[1] tracking-tight">
                  Turn Raw Market Data Into
                  <br />
                  <span className="text-grad">
                    <TypedPhrase phrases={["Qualified Pipeline", "Sales-Ready Leads", "Revenue You Close"]} />
                  </span>
                </h1>
                <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-soft">
                  Find, Qualify And Reach Prospects On Google Maps, LinkedIn And IndiaMART. One AI-Powered Pipeline, From Scraping To Outreach.
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
                  <Link href="/how-it-works" className="inline-flex items-center gap-1.5 font-semibold text-ink hover:text-brand">
                    How It Works <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            }
          />
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

      {/* ───────── About split ───────── */}
      <section className="section-y">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div className="card !rounded-[2rem] p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 border-b border-line pb-5">
              <div>
                <p className="font-display text-lg font-extrabold uppercase tracking-wide">The LeadGen AI Pipeline</p>
                <p className="text-sm text-muted">From Public Data To Qualified Conversations</p>
              </div>
              <span className="pill shrink-0">Single Source Of Truth</span>
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
            <SectionHeading align="left" badge="About LeadGen AI" title="Find, Understand And Reach The Right Prospects" />
            <p className="lead mt-6">
              LeadGen AI Is A Prospect Intelligence Platform. It Turns Public Business Data Into Clean, Scored Leads You Can Export. Your Team Spends Its
              Time Talking To Prospects Instead Of Copying And Pasting Research.
            </p>
            <p className="mt-5 leading-relaxed text-muted">
              Describe The Businesses You Want. The Platform Collects Them, Fills In Missing Contact Details And Scores Every Lead With Saved Reasons. It Also Audits Websites
              And Flags Businesses With A Clear Problem You Can Solve.
            </p>
            <blockquote className="mt-8 rounded-2xl border border-line border-l-4 border-l-brand bg-surface p-6 text-lg font-semibold italic leading-relaxed">
              “From Scraping To Outreach, One AI-Powered Pipeline To Discover, Qualify, And Close Prospects.”
            </blockquote>
            <Link href="/about" className="btn btn-primary mt-9 !rounded-full !px-8 !py-4 text-base">
              About <ArrowRight size={18} />
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
            badge="Platform Modules"
            title="Everything Between “Who Should We Call?” And The First Reply"
            subtitle="Six Connected Modules On A Single Source Of Truth. Filter By Pipeline Stage To See What Each One Does."
          />
          <ModuleTabs />
        </div>
      </section>

      {/* ───────── Why ───────── */}
      <section className="section-y" aria-labelledby="why-title">
        <div className="container-x">
          <SectionHeading id="why-title" badge="Why LeadGen AI" title="Why Teams Choose LeadGen AI" subtitle="Prospecting Designed For Evidence, Not Guesswork." />
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
      <section className="section-y border-y border-line bg-bg-alt" aria-labelledby="method-title">
        <div className="container-x">
          <SectionHeading id="method-title" badge="How It Works" title="Search, Scrape, Enrich, Score, Reach" subtitle="A Five-Stage Workflow That Takes You From A Search Term To Logged Outreach." />
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
              <Photo file="/images/pages/home--background-jobs.webp" sizes="(min-width: 1024px) 45vw, 100vw" fill className="opacity-45" />
            </div>
            <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-20" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                  <Sparkle size={14} /> Runs In The Background
                </span>
                <h3 className="mt-5 text-[clamp(1.6rem,3vw,2.3rem)] font-extrabold leading-tight">Large Jobs Keep Running After You Close The Tab</h3>
                <p className="mt-4 max-w-xl text-white/80">
                  Long Scrapes Are Handed To The Worker Fleet Rather Than Your Browser. Quotas Are Enforced Per Plan And Billing Cycle, And Every Job Records What It
                  Fetched And When.
                </p>
              </div>
              <Link href="/how-it-works" className="btn !rounded-full bg-white !px-7 !py-3.5 text-base text-[#4338ca] hover:bg-white/90 lg:justify-self-end">
                How It Works <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Solutions (alternating splits) ───────── */}
      <section className="section-y" aria-labelledby="solutions-title">
        <div className="container-x">
          <SectionHeading id="solutions-title" badge="Solutions" title="Built For Teams That Sell To Businesses" subtitle="The Same Pipeline, Tuned To How Your Team Finds And Wins Customers." />
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
      <section className="section-y border-y border-line bg-bg-alt" aria-labelledby="ind-title">
        <div className="container-x">
          <SectionHeading
            id="ind-title"
            badge="Industries"
            title="Playbooks For 44 Industries"
            subtitle="Buying Triggers, Listing Signals And Objections Differ By Vertical. Each Guide Covers Generating Leads And Prospecting Into The Sector."
          />
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
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
              Industries <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Strategies ───────── */}
      <section className="section-y" aria-labelledby="str-title">
        <div className="container-x">
          <SectionHeading id="str-title" badge="Strategies" title="Practical Lead Generation Playbooks" subtitle="Step-By-Step Guides For Outbound, Inbound And Multichannel Campaigns." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {strategies.map((p) => (
              <PageCard key={p.path} page={p} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/strategies" className="btn btn-ghost !rounded-full !px-8 !py-3.5 text-base">
              Solutions <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Plans ───────── */}
      <section className="section-y border-y border-line bg-bg-alt" aria-labelledby="plan-title">
        <div className="container-x">
          <SectionHeading id="plan-title" badge="Plans" title="Start Free, Scale When It Works" subtitle="Three Plans, From A First Test To Dedicated Infrastructure. See The Live App For Current Pricing." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {PLANS.map((p) => (
              <div key={p.name} className={`card relative flex flex-col !rounded-3xl p-8 ${p.featured ? "border-brand ring-4 ring-brand-soft" : ""}`}>
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
                More Questions? Visit The{" "}
                <Link href="/faq" className="font-semibold text-brand">
                  FAQ
                </Link>{" "}
                Or Browse The{" "}
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
          text="Run Your First Queries On The Free Plan, Or Request A Walkthrough For Your Team."
          label="Start Free"
          href={SITE.appUrl}
        />
      </div>

      {/* ───────── Knowledge hubs ───────── */}
      <section className="section-y" aria-labelledby="learn-title">
        <div className="container-x">
          <SectionHeading id="learn-title" badge="Learning Library" title="What You’ll Find In Our Guides" subtitle={`${LIVE.length} Pages Covering Every Stage, From First Click To Closed Deal.`} />
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
    </>
  );
}
