import Link from "next/link";
import { PLAN_NOTES, PLAN_TIERS } from "@/content/plans-data";
import { NAV } from "@/lib/nav";
import { breadcrumbs, describe, getContent } from "@/lib/registry";
import { SITE } from "@/lib/site";
import type { PlanEntry } from "@/content/types";
import { Breadcrumbs } from "../Breadcrumbs";
import { ArrowRight, Check, ChevronRight, FileCheck, Gauge, Layers, MapPin, Send, Shield, Sparkle, Target } from "../icons";
import { IndustryTabs } from "../IndustryTabs";
import { LetterHeading } from "../LetterHeading";
import { ManualVsAutomated } from "../ManualVsAutomated";
import { comparisonLayout } from "../page-types/detect";
import { SectionHeading } from "../SectionHeading";
import { Stepper, TabExplorer } from "./interactive";
import {
  HeroBackdrop,
  AccordionSection,
  BlockTitle,
  Considerations,
  Cta,
  CtaLink,
  type Ctx,
  Example,
  FaqBlock,
  FormSlot,
  GlancePanel,
  Intro,
  OverviewBand,
  KeyPoints,
  pad,
  PhotoHero,
  ProcessStrip,
  RelatedBlock,
  SECTION_ICONS,
  SectionBody,
  SectionCard,
  slugify,
  Takeaways,
  Timeline,
} from "./blocks";
import { pageFamily, type Family } from "./family";
import { ListFilter } from "./ListFilter";
import { PipelineFlip } from "./PipelineFlip";
import { PlayDeck } from "./PlayDeck";
import { Rolodex } from "./Rolodex";
import { ResourceLibrary } from "./ResourceLibrary";
import { GuideLayout } from "./layouts-reading";

/* ═══════════════════════ Comparison: "A vs B" ═══════════════════════
   Duel hero → context → two side-by-side columns under sticky side labels → making the call →
   how to decide → watch-outs → example. Falls back to the guide layout if the sides can't be mapped. */
export function ComparisonLayout({ ctx }: { ctx: Ctx }) {
  const { content, plan } = ctx;
  const cmp = comparisonLayout(plan, content);
  if (!cmp) return <GuideLayout ctx={ctx} />;
  return (
    <div className="page-root layout-comparison">
      <PhotoHero
        ctx={ctx}
        primaryLabel="Compare Both"
        aside={
          <div className="duel-badge" aria-label={`${cmp.sides[0]} versus ${cmp.sides[1]}`}>
            <span className="duel-side">
              <span className="duel-letter">A</span>
              {cmp.sides[0]}
            </span>
            <span className="duel-vs">VS</span>
            <span className="duel-side duel-side-b">
              <span className="duel-letter">B</span>
              {cmp.sides[1]}
            </span>
          </div>
        }
      />

      <section id="overview" className="section-y scroll-mt-24">
        <div className="container-x">
          <OverviewBand kicker="The Question" title={plan.title} content={content} label="In Short" />
        </div>
        {cmp.before.length > 0 && (
          <div className="container-x max-w-5xl">
            {cmp.before.map((s) => (
              <SectionCard key={s.heading} s={s} i={content.sections.indexOf(s)} label="Context" />
            ))}
          </div>
        )}
      </section>

      <section className="surface-soft section-y" aria-label="Side-by-side comparison">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2">
            {cmp.columns.map((col, c) => (
              <div key={cmp.sides[c]} className={`compare-col min-w-0 ${c ? "compare-col-b" : ""}`}>
                <p className="compare-side-label">
                  <span aria-hidden="true">{c ? "B" : "A"}</span> {cmp.sides[c]}
                </p>
                {col.map((s) => (
                  <SectionCard key={s.heading} s={s} i={content.sections.indexOf(s)} label={cmp.sides[c]} compact />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {cmp.after.length > 0 && (
        <section className="section-y" aria-label="Making the call">
          <div className="container-x max-w-5xl">
            <SectionHeading badge="Making The Call" title="Choosing Between Them" />
            {cmp.after.map((s) => (
              <SectionCard key={s.heading} s={s} i={content.sections.indexOf(s)} label="Verdict" />
            ))}
          </div>
        </section>
      )}

      {content.steps && (
        <section id={slugify(content.steps.heading)} data-theme="dark" className="surface-island section-y my-5 scroll-mt-20 md:my-8">
          <div className="container-x">
            <SectionHeading badge="How To Decide" title={content.steps.heading} />
            <div className="mt-10">
              <ProcessStrip items={content.steps.items} />
            </div>
          </div>
        </section>
      )}
      <Considerations ctx={ctx} badge="Watch-Outs" variant="list" />
      <Example ctx={ctx} />
      <FaqBlock ctx={ctx} />
      <RelatedBlock ctx={ctx} title="More Comparisons" />
      <Cta ctx={ctx} />
    </div>
  );
}

/* ═══════════════════════ Case: illustrative use-case scenarios ═══════════════════════
   Clearly labelled illustrative scenario: situation → journey stages → story chapters on a rail. */
export function CaseLayout({ ctx }: { ctx: Ctx }) {
  const { content } = ctx;
  return (
    <div className="page-root layout-case">
      <PhotoHero ctx={ctx} chips={["Illustrative scenario", "Not a customer story"]} primaryLabel="Follow The Scenario" />

      <section id="overview" className="section-y scroll-mt-24">
        <div className="container-x max-w-4xl">
          <p className="scenario-note">
            <Shield size={16} /> This is an illustrative scenario built to explain the workflow. It is not a customer case study, and it reports no real results.
          </p>
          <BlockTitle kicker="The Situation" title={content.title} className="mt-9" />
          <Intro content={content} className="mt-6" />
          <div className="mt-8">
            <Takeaways items={content.highlights} title="What The Scenario Shows" plain />
          </div>
        </div>
      </section>

      {content.steps && (
        <section id={slugify(content.steps.heading)} data-theme="dark" className="surface-island section-y my-5 scroll-mt-20 md:my-8">
          <div className="container-x">
            <SectionHeading badge="The Journey" title={content.steps.heading} />
            <div className="mx-auto mt-10 max-w-5xl">
              <Stepper steps={content.steps.items} label="Stage" />
            </div>
          </div>
        </section>
      )}

      <section className="section-y" aria-label="Scenario chapters">
        <div className="container-x">
          <ol className="play-rail mx-auto max-w-4xl">
            {content.sections.map((s, i) => (
              <li key={s.heading} id={slugify(s.heading)} className="play-rail-item scroll-mt-28">
                <span className="play-rail-n" aria-hidden="true">
                  {pad(i + 1)}
                </span>
                <div className="card !rounded-3xl p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand">Chapter {pad(i + 1)}</p>
                  <LetterHeading text={s.heading} as="h2" triggerOnScroll cursor={false} className="mt-1 text-[clamp(1.35rem,2.4vw,1.75rem)] font-extrabold leading-tight" />
                  <div className="mt-5">
                    <SectionBody s={s} keyIdea={false} />
                  </div>
                  {s.bullets && (
                    <div className="mt-6">
                      <KeyPoints items={s.bullets} />
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Example ctx={ctx} label="Scenario Recap · Illustrative" />
      <Considerations ctx={ctx} badge="What To Watch" />
      <FaqBlock ctx={ctx} />
      <RelatedBlock ctx={ctx} title="More Use Cases And Plans" />
      <Cta ctx={ctx} />
    </div>
  );
}

/* ═══════════════════════ Rollout: implementation plans and roles ═══════════════════════
   Plan timeline first → workstream cards grid → risks → example. */
export function RolloutLayout({ ctx }: { ctx: Ctx }) {
  const { content, plan, minutes } = ctx;
  return (
    <div className="page-root layout-rollout">
      <PhotoHero
        ctx={ctx}
        primaryLabel="See The Plan"
        aside={
          <GlancePanel
            title="Plan At A Glance"
            rows={[
              ...(content.steps ? [{ label: "Phases", value: String(content.steps.items.length) }] : []),
              { label: "Workstreams", value: String(content.sections.length) },
              { label: "Best For", value: plan.audience },
              { label: "Reading Time", value: `${minutes} Minutes` },
            ]}
          />
        }
      />

      <section id="overview" className="section-y scroll-mt-24">
        <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <BlockTitle kicker="The Plan" title={content.title} />
            <Intro content={content} className="mt-6" />
            <div className="mt-8">
              <Takeaways items={content.highlights} title="Plan Principles" plain />
            </div>
          </div>
          {content.steps && (
            <div id={slugify(content.steps.heading)} className="scroll-mt-28">
              <p className="text-xs font-bold uppercase tracking-wider text-brand">Phases</p>
              <h2 className="mt-1.5 text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold leading-tight">{content.steps.heading}</h2>
              <Timeline items={content.steps.items} label="Phase" className="mt-7" />
            </div>
          )}
        </div>
      </section>

      <section className="surface-soft section-y" aria-labelledby="workstreams">
        <div className="container-x">
          <SectionHeading id="workstreams" badge="Workstreams" title="What Each Part Involves" subtitle="Switch between workstreams to see what each one covers." />
          <div className="mt-10">
            <TabExplorer
              variant="top"
              label="Workstreams"
              tabs={content.sections.map((s, i) => ({ id: slugify(s.heading), label: s.heading, kicker: `Workstream ${pad(i + 1)}` }))}
            >
              {content.sections.map((s) => (
                <div key={s.heading} className="explorer-split">
                  <div className="min-w-0">
                    <h2 className="text-[clamp(1.3rem,2.2vw,1.7rem)] font-extrabold leading-tight">{s.heading}</h2>
                    <div className="mt-4">
                      <SectionBody s={s} keyIdea={false} />
                    </div>
                  </div>
                  {s.bullets && (
                    <div className="explorer-aside min-w-0">
                      <ul className="spec-list">
                        {s.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </TabExplorer>
          </div>
        </div>
      </section>

      <Considerations ctx={ctx} badge="Risks To Manage" />
      <Example ctx={ctx} />
      <FaqBlock ctx={ctx} />
      <RelatedBlock ctx={ctx} />
      <Cta ctx={ctx} />
    </div>
  );
}

/* ═══════════════════════ Brand story: company pages ═══════════════════════
   Centred story hero with a wide photo → purpose statement → principles grid → alternating narrative →
   process diagram (where the page has steps) → good to know. Only the page's own copy is used. */
export function StoryLayout({ ctx }: { ctx: Ctx }) {
  const { content, plan } = ctx;
  const [purpose, ...rest] = content.intro;
  return (
    <div className="page-root layout-story">
      <section data-theme={ctx.photo ? "dark" : undefined} className="relative isolate overflow-hidden bg-bg text-ink border-b border-line">
        <HeroBackdrop ctx={ctx} centered />
        <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 size-[40rem] -translate-x-1/2 rounded-full bg-[var(--glow-1)] blur-3xl" />
        <div className="container-x relative py-10 text-center md:py-14">
          <div className="flex justify-center">
            <Breadcrumbs items={breadcrumbs(plan.path)} />
          </div>
          <span className="pill mt-8">
            <Sparkle size={14} /> {content.eyebrow}
          </span>
          <LetterHeading text={content.h1} as="h1" className="mx-auto mt-6 max-w-4xl text-[clamp(2.3rem,5vw,4rem)] font-extrabold leading-[1.05]" />
          <p className="mx-auto mt-6 max-w-2xl text-[clamp(1.05rem,1.7vw,1.25rem)] leading-relaxed text-ink-soft">{content.metaDescription}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CtaLink href={content.cta.href} className="btn btn-primary !rounded-full !px-7 !py-3.5 text-base">
              {content.cta.label} <ArrowRight size={18} />
            </CtaLink>
            <a href="#overview" className="btn btn-ghost !rounded-full !px-7 !py-3.5 text-base">
              Read More
            </a>
          </div>
        </div>
      </section>

      <section id="overview" className="section-y scroll-mt-24">
        <div className="container-x max-w-4xl text-center">
          {purpose && <p className="story-purpose">{purpose}</p>}
          {rest.map((p) => (
            <p key={p.slice(0, 40)} className="lead mx-auto mt-6 max-w-3xl">
              {p}
            </p>
          ))}
        </div>
        <ul className="container-x mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.highlights.map((h, i) => {
            const Icon = SECTION_ICONS[i % SECTION_ICONS.length];
            return (
              <li key={h} className="card p-6 text-center">
                <span className="icon-tile mx-auto !size-12">
                  <Icon size={22} />
                </span>
                <p className="mt-4 font-bold leading-snug text-ink">{h}</p>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="surface-soft section-y" aria-label="Our approach">
        <div className="container-x">
          <TabExplorer
            variant="top"
            label="Our approach"
            tabs={content.sections.map((s, i) => ({ id: slugify(s.heading), label: s.heading, kicker: pad(i + 1) }))}
          >
          {content.sections.map((s, i) => (
            <article key={s.heading} className="explorer-split">
              <div className="min-w-0">
                <p className="font-mono text-sm font-bold text-brand">{pad(i + 1)}</p>
                <h2 className="mt-2 text-[clamp(1.6rem,3vw,2.3rem)] font-extrabold leading-tight">{s.heading}</h2>
              </div>
              <div className="min-w-0">
                <SectionBody s={s} keyIdea={false} />
                {s.bullets && (
                  <ul className="mt-6 grid gap-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-[15.5px] leading-relaxed text-ink">
                        <span className="tick mt-0.5">
                          <Check size={13} strokeWidth={3} />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
          </TabExplorer>
        </div>
      </section>

      {content.steps && (
        <section id={slugify(content.steps.heading)} data-theme="dark" className="surface-island section-y my-5 scroll-mt-20 md:my-8">
          <div className="container-x">
            <SectionHeading badge="How It Works" title={content.steps.heading} />
            <div className="mt-10">
              <ProcessStrip items={content.steps.items} />
            </div>
          </div>
        </section>
      )}

      {plan.path === "/how-it-works" && (
        <section className="section-y" aria-labelledby="manual-vs-automated">
          <div className="container-x">
            <SectionHeading id="manual-vs-automated" badge="Compare" title="Manual Vs Automated Prospecting" />
            <ManualVsAutomated className="mt-8" />
          </div>
        </section>
      )}

      <Considerations ctx={ctx} badge="Good To Know" variant="list" />
      <Example ctx={ctx} />
      <FaqBlock ctx={ctx} />
      <RelatedBlock ctx={ctx} title="Learn More About LeadGen AI" badge="Company" />
      <Cta ctx={ctx} />
    </div>
  );
}

/* ═══════════════════════ Plans: verified plan facts only ═══════════════════════ */
export function PlansLayout({ ctx }: { ctx: Ctx }) {
  const { content, plan } = ctx;
  return (
    <div className="page-root layout-plans">
      <section data-theme={ctx.photo ? "dark" : undefined} className="relative isolate overflow-hidden bg-bg text-ink border-b border-line">
        <HeroBackdrop ctx={ctx} centered />
        <div className="container-x relative py-10 text-center md:py-14">
          <div className="flex justify-center">
            <Breadcrumbs items={breadcrumbs(plan.path)} />
          </div>
          <span className="pill mt-8">
            <Sparkle size={14} /> {content.eyebrow}
          </span>
          <LetterHeading text={content.h1} as="h1" className="mx-auto mt-6 max-w-4xl text-[clamp(2.3rem,5vw,3.8rem)] font-extrabold leading-[1.05]" />
          <p className="mx-auto mt-6 max-w-2xl text-[clamp(1.05rem,1.7vw,1.25rem)] leading-relaxed text-ink-soft">{content.metaDescription}</p>
          <ul className="mt-6 flex flex-wrap justify-center gap-2" aria-label="Plan notes">
            {PLAN_NOTES.map((n) => (
              <li key={n} className="chip">
                <Check size={15} className="text-brand" /> {n}
              </li>
            ))}
          </ul>
        </div>
        <div className="container-x relative grid gap-6 pb-14 md:grid-cols-3">
          {PLAN_TIERS.map((t) => (
            <div key={t.name} className={`card relative flex flex-col !rounded-3xl p-8 ${"featured" in t && t.featured ? "card-accent" : ""}`}>
              {"featured" in t && t.featured && <span className="absolute -top-3.5 left-8 rounded-full bg-grad px-3.5 py-1 text-xs font-bold text-white">Most Popular</span>}
              <h2 className="text-2xl font-extrabold">{t.name}</h2>
              <p className="mt-2 text-ink-soft">{t.blurb}</p>
              <ul className="mt-6 grid flex-1 gap-2.5">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[15px] text-ink">
                    <span className="tick mt-0.5">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={SITE.appUrl} rel="noopener" className={`btn mt-8 !rounded-full !py-3 ${"featured" in t && t.featured ? "btn-primary" : "btn-ghost"}`}>
                Start With {t.name}
              </a>
            </div>
          ))}
        </div>
        <p className="container-x relative pb-12 text-center text-sm text-muted">No prices are published here. See the live app for current pricing.</p>
      </section>

      <section id="overview" className="section-y scroll-mt-24">
        <div className="container-x max-w-5xl">
          <BlockTitle kicker="Choosing A Plan" title="Which Plan Fits Your Team" />
          <Intro content={content} className="mt-6" />
          <div className="mt-8">
            <Takeaways items={content.highlights} title="At A Glance" />
          </div>
          {content.sections.map((s, i) => (
            <SectionCard key={s.heading} s={s} i={i} label="Guide" compact />
          ))}
        </div>
      </section>

      {content.steps && (
        <section id={slugify(content.steps.heading)} data-theme="dark" className="surface-island section-y my-5 scroll-mt-20 md:my-8">
          <div className="container-x">
            <SectionHeading badge="Step By Step" title={content.steps.heading} />
            <div className="mt-10">
              <ProcessStrip items={content.steps.items} />
            </div>
          </div>
        </section>
      )}
      <Considerations ctx={ctx} variant="list" />
      <Example ctx={ctx} />
      <FaqBlock ctx={ctx} />
      <Cta ctx={ctx} />
    </div>
  );
}

/* ═══════════════════════ Contact: focused conversion ═══════════════════════
   The form beside what happens next and reassurance taken from the page's own copy. */
export function ContactLayout({ ctx }: { ctx: Ctx }) {
  const { content, plan } = ctx;
  const kind = content.form ?? "contact";
  return (
    <div className="page-root layout-contact">
      <section data-theme={ctx.photo ? "dark" : undefined} className="relative isolate overflow-hidden bg-bg text-ink">
        <HeroBackdrop ctx={ctx} />
        <div aria-hidden="true" className="absolute -left-40 top-20 -z-10 size-[34rem] rounded-full bg-[var(--glow-2)] blur-3xl" />
        <div className="container-x relative grid gap-10 py-10 md:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,31rem)] lg:gap-14">
          <div className="min-w-0">
            <Breadcrumbs items={breadcrumbs(plan.path)} />
            <span className="pill mt-8">
              <Sparkle size={14} /> {content.eyebrow}
            </span>
            <LetterHeading text={content.h1} as="h1" className="mt-6 text-[clamp(2.2rem,4.6vw,3.5rem)] font-extrabold leading-[1.06]" />
            <p className="mt-5 max-w-xl text-[clamp(1.05rem,1.7vw,1.2rem)] leading-relaxed text-ink-soft">{content.metaDescription}</p>

            <div id="overview" className="mt-10 scroll-mt-28">
              <Intro content={content} />
            </div>

            <ul className="mt-8 grid gap-3">
              {content.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-[15px] font-semibold text-ink">
                  <span className="tick">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
            <FormSlot kind={kind} />
            <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-muted">
              <Shield size={15} className="mt-px shrink-0 text-success" />
              Your details are used only to respond to you. We reply to the email address you provide.
            </p>
          </div>
        </div>

        <div className="container-x relative pb-10 md:pb-14">
            <div className="mx-auto grid max-w-3xl gap-4">
              {content.sections.map((s, i) => (
                <details key={s.heading} id={slugify(s.heading)} className="card group !rounded-2xl p-5 open:shadow-lift" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-ink [&::-webkit-details-marker]:hidden">
                    <span>{s.heading}</span>
                    <ChevronRight size={18} className="shrink-0 text-brand transition group-open:rotate-90" />
                  </summary>
                  <div className="mt-4">
                    <SectionBody s={s} keyIdea={false} size="text-[15.5px]" />
                    {s.bullets && (
                      <div className="mt-4">
                        <KeyPoints items={s.bullets} label="Details" />
                      </div>
                    )}
                  </div>
                </details>
              ))}
            </div>
        </div>
      </section>

      {content.steps && (
        <section id={slugify(content.steps.heading)} className="surface-soft section-y scroll-mt-20">
          <div className="container-x">
            <SectionHeading badge="What Happens Next" title={content.steps.heading} />
            <div className="mt-10">
              <ProcessStrip items={content.steps.items} />
            </div>
          </div>
        </section>
      )}
      <Considerations ctx={ctx} variant="list" />
      <FaqBlock ctx={ctx} />
    </div>
  );
}

/* ═══════════════════════ Section hubs ═══════════════════════
   Each hub's directory is shaped by what it holds: a capability map, a searchable play library,
   the industry orbit plus an A–Z directory, a typed resource library, a learning path, or comparison tracks. */
const FAMILY_BADGE: Partial<Record<Family, string>> = {
  guide: "Guide",
  glossary: "Glossary",
  checklist: "Checklist",
  faq: "FAQ",
  toolkit: "Reference",
  workflow: "Process",
  comparison: "Comparison",
  case: "Use Case",
  rollout: "Plan",
  playbook: "Playbook",
};

function familyOf(p: PlanEntry): Family {
  const c = getContent(p.path);
  return c ? pageFamily(p, c, false) : "guide";
}

function DirCard({ page, n, badge }: { page: PlanEntry; n?: number; badge?: string }) {
  return (
    <Link href={page.path} className="card card-link group flex h-full flex-col gap-2 p-5" data-filter-item>
      <span className="flex items-center justify-between gap-3">
        {n !== undefined && <span className="font-mono text-xs font-bold text-brand">{pad(n)}</span>}
        {badge && <span className="rounded-full border border-line px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-muted">{badge}</span>}
      </span>
      <span className="font-display text-[16.5px] font-bold leading-snug text-ink group-hover:text-brand">{page.title}</span>
      <span className="line-clamp-2 text-sm leading-relaxed text-muted">{describe(page.path)}</span>
    </Link>
  );
}

type Lane = { heading: string; pages: PlanEntry[]; icon: typeof MapPin };

/** Tailwind needs literal class names, so the spans the lane grid computes map to fixed classes. */
const LG_SPAN: Record<number, string> = { 1: "", 2: "lg:col-span-2", 3: "lg:col-span-3" };

/**
 * Directory lanes, one grid per lane with zero dead space: the gradient panel fills the first cells (two
 * rows tall on wide screens, a full row on tablets), the cards flow after it, and the last card stretches
 * across whatever its row has left. `numbered` shows each card's place in a learning path instead of the
 * lane icon. Depth comes from the dir-panel / dir-card styles in globals.css.
 */
function LaneDirectory({ lanes, label, numbered = false }: { lanes: Lane[]; label: string; numbered?: boolean }) {
  return (
    <ol className="mt-10 grid gap-6">
      {lanes.map((g, i) => {
        const Icon = g.icon;
        const n = g.pages.length;
        const panelRows = n >= 2 ? 2 : 1;
        const lgLeft = (n + panelRows) % 3;
        const lgLast = lgLeft ? 4 - lgLeft : 1;
        const smLast = n % 2 ? 2 : 1;
        return (
          <li key={g.heading} className="dir-lane grid gap-3 rounded-3xl border border-line bg-surface/60 p-3 sm:grid-cols-2 sm:p-4 lg:grid-cols-3 lg:gap-4">
            <div className={`dir-panel relative flex flex-col overflow-hidden rounded-2xl bg-grad p-6 text-white sm:col-span-2 lg:col-span-1 ${panelRows === 2 ? "lg:row-span-2" : ""}`}>
              <span aria-hidden="true" className="absolute -right-2 -top-5 font-display text-[6.5rem] font-extrabold leading-none text-white/10">
                {pad(i + 1)}
              </span>
              <span className="dir-panel-icon grid size-11 place-items-center rounded-xl bg-white/15">
                <Icon size={20} />
              </span>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-white/75">
                {label} {pad(i + 1)}
              </p>
              <h3 className="mt-1 font-display text-2xl font-bold leading-tight">{g.heading}</h3>
              <p className="mt-auto pt-4 text-sm text-white/80">
                {n} {n === 1 ? "guide" : "guides"}
              </p>
            </div>
            {g.pages.map((p, j) => {
              const last = j === n - 1;
              const span = last ? `${smLast === 2 ? "sm:col-span-2" : ""} ${LG_SPAN[lgLast] || (smLast === 2 ? "lg:col-span-1" : "")}` : "";
              return (
                <Link key={p.path} href={p.path} className={`dir-card card card-link group flex h-full items-start gap-3.5 p-4 ${span}`} data-filter-item>
                  <span className="icon-tile !size-10 shrink-0 !rounded-xl font-display text-sm font-bold">{numbered ? j + 1 : <Icon size={18} />}</span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-start justify-between gap-2 font-display text-[16px] font-bold leading-snug text-ink group-hover:text-brand">
                      {p.title}
                      <ArrowRight size={15} className="mt-1 shrink-0 text-muted transition group-hover:text-brand" />
                    </span>
                    <span className="mt-1 line-clamp-2 block text-sm leading-relaxed text-muted">{describe(p.path)}</span>
                  </span>
                </Link>
              );
            })}
          </li>
        );
      })}
    </ol>
  );
}

function HubDirectory({ ctx }: { ctx: Ctx }) {
  const { plan, children, group } = ctx;
  const key = plan.group;

  if (key === "services") {
    // Capability map from the Services menu columns; anything not in a column is listed under "More Services".
    const nav = NAV.find((n) => n.href === plan.path);
    const cols = (nav?.columns ?? []).map((c) => ({ heading: c.heading, pages: c.links.map((l) => children.find((p) => p.path === l.href)).filter((p): p is PlanEntry => Boolean(p)) }));
    const used = new Set(cols.flatMap((c) => c.pages.map((p) => p.path)));
    const more = children.filter((p) => !used.has(p.path));
    const groups = [...cols, ...(more.length ? [{ heading: "More Services", pages: more }] : [])].filter((g) => g.pages.length);
    return (
      <div className="mt-10">
        <PipelineFlip stages={groups.map((g) => ({ heading: g.heading, pages: g.pages.map((p) => ({ path: p.path, title: p.title, desc: describe(p.path) })) }))} />
      </div>
    );
  }

  if (key === "industries") {
    const letters = [...new Set(children.map((p) => p.title[0].toUpperCase()))].sort();
    return (
      <>
        <IndustryTabs className="mt-10" />
        <div className="mt-14" data-filter-root>
          <div className="mx-auto max-w-xl">
            <ListFilter label="Filter industries" placeholder="Filter industries" />
          </div>
          <div className="mt-8 grid gap-8">
            {letters.map((l) => (
              <div key={l} data-filter-group className="grid gap-4 md:grid-cols-[4rem_1fr]">
                <span className="grid size-12 place-items-center rounded-xl bg-grad font-display text-xl font-bold text-white">{l}</span>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {children
                    .filter((p) => p.title[0].toUpperCase() === l)
                    .map((p) => (
                      <DirCard key={p.path} page={p} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (key === "strategies" || key === "b2b" || key === "b2c") {
    return (
      <div className="mt-10">
        <PlayDeck
          label={`${group.label} topics`}
          placeholder={key === "strategies" ? "Search plays, e.g. cold email" : `Search ${group.label} guides`}
          items={children.map((p) => ({ path: p.path, title: p.title, desc: describe(p.path), badge: key === "strategies" ? "Play" : `For ${p.audience.split(",")[0]}` }))}
        />
      </div>
    );
  }

  if (key === "resources") {
    return (
      <div className="mt-10">
        <ResourceLibrary items={children.map((p) => ({ path: p.path, title: p.title, desc: describe(p.path), type: FAMILY_BADGE[familyOf(p)] ?? "Guide" }))} />
      </div>
    );
  }

  if (key === "compare") {
    const tracks: { title: string; fams: Family[] }[] = [
      { title: "Side-By-Side Comparisons", fams: ["comparison", "guide"] },
      { title: "Illustrative Use Cases", fams: ["case"] },
      { title: "Implementation Planning", fams: ["rollout"] },
    ];
    return (
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {tracks.map((t) => (
          <div key={t.title} className="card !rounded-3xl p-6">
            <h3 className="font-display text-lg font-bold">{t.title}</h3>
            <ul className="mt-4 grid gap-2">
              {children
                .filter((p) => t.fams.includes(familyOf(p)))
                .map((p) => (
                  <li key={p.path}>
                    <Link href={p.path} className="flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-[15px] font-semibold text-ink-soft transition hover:bg-brand-soft hover:text-brand">
                      {p.title} <ChevronRight size={16} className="shrink-0" />
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  // Lead capture, qualification and tools: a numbered learning path, split by kind of page.
  const kinds: { title: string; fams: Family[] }[] = [
    { title: "Processes", fams: ["workflow"] },
    { title: "References And Frameworks", fams: ["toolkit"] },
    { title: "Comparisons And Guides", fams: ["comparison", "guide"] },
  ];
  const groups = kinds
    .map((k) => ({ heading: k.title, pages: children.filter((p) => k.fams.includes(familyOf(p))).map((p) => ({ path: p.path, title: p.title, desc: describe(p.path) })) }))
    .filter((g) => g.pages.length);
  return (
    <div className="mt-10">
      <Rolodex groups={groups} label={`${group.label} topics`} />
    </div>
  );
}

export function HubLayout({ ctx }: { ctx: Ctx }) {
  const { content, children, group } = ctx;
  return (
    <div className="page-root layout-hub">
      <PhotoHero ctx={ctx} chips={[`${children.length} Guides In This Section`, ...content.highlights.slice(0, 2)]} primaryLabel="Browse The Section" />

      <section id="overview" className="section-y scroll-mt-24">
        <div className="container-x">
          <OverviewBand kicker={group.label} title={`Inside ${content.title}`} content={content} />
          <div className="mt-16">
            <SectionHeading id="hub-topics" badge={group.label} title={`All ${children.length} ${group.label} Topics`} subtitle={group.blurb} />
          </div>
          <HubDirectory ctx={ctx} />
        </div>
      </section>

      <section className="surface-soft section-y" aria-label="Section guide">
        <div className="container-x max-w-5xl">
          <SectionHeading badge="Section Guide" title="How This Section Fits Together" />
          <div className="acc-list mt-10">
            {content.sections.map((s, i) => (
              <AccordionSection key={s.heading} s={s} i={i} label="Part" open={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {content.steps && (
        <section id={slugify(content.steps.heading)} data-theme="dark" className="surface-island section-y my-5 scroll-mt-20 md:my-8">
          <div className="container-x">
            <SectionHeading badge="Where To Start" title={content.steps.heading} />
            <div className="mt-10">
              <ProcessStrip items={content.steps.items} />
            </div>
          </div>
        </section>
      )}
      <Considerations ctx={ctx} variant="list" />
      <Example ctx={ctx} />
      <FaqBlock ctx={ctx} />
      <Cta ctx={ctx} />
    </div>
  );
}
