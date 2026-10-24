import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import type { SiteImage } from "@/content/images";
import type { PageContent, PlanEntry, Section, Step } from "@/content/types";
import { GROUPS, type Visual } from "@/lib/groups";
import { pageBackground } from "@/lib/page-background";
import { breadcrumbs, groupChildren, relatedPages } from "@/lib/registry";
import { Breadcrumbs } from "../Breadcrumbs";
import { CtaBand } from "../CtaBand";
import { Faqs } from "../Faqs";
import { HeroVisual } from "../HeroVisual";
import { ArrowRight, Check, FileCheck, Gauge, Info, Layers, MapPin, Send, Shield, Sparkle, Target, Users } from "../icons";
import { LazyLeadForm } from "../LazyLeadForm";
import { LetterHeading } from "../LetterHeading";
import { SectionHeading } from "../SectionHeading";
import { TocSpy } from "../TocSpy";
import { TopicLinkGrid } from "../TopicLinkCard";
import type { Family } from "./family";

/* ───────────────────────── Page context shared by every layout ───────────────────────── */

export interface Ctx {
  content: PageContent;
  plan: PlanEntry;
  family: Family;
  group: (typeof GROUPS)[keyof typeof GROUPS];
  isHub: boolean;
  children: PlanEntry[];
  related: PlanEntry[];
  /** One section-cut shape per page, varied across pages. */
  cut: string;
  minutes: number;
  photo?: SiteImage;
  /** True when the photo is the page's own (meaningful alt); false when borrowed as a backdrop. */
  photoOwn: boolean;
}

const CUTS = ["cut-wave", "cut-step", "cut-slant", "cut-curve", "cut-tilt", "cut-flow"];

export function buildCtx(content: PageContent, plan: PlanEntry, family: Family): Ctx {
  const group = GROUPS[plan.group];
  const isHub = group.hub === plan.path;
  const bg = pageBackground(plan.path);
  return {
    content,
    plan,
    family,
    group,
    isHub,
    children: isHub ? groupChildren(plan.group) : [],
    related: relatedPages(plan.path),
    cut: CUTS[[...plan.path].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 0) % CUTS.length],
    minutes: readingMinutes(content),
    photo: bg?.image,
    photoOwn: Boolean(bg?.own),
  };
}

/* ───────────────────────── Small helpers ───────────────────────── */

export const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
export const pad = (n: number) => String(n).padStart(2, "0");

export function firstSentence(p = "") {
  const m = p.match(/^.+?[.!?](?=\s|$)/);
  return m ? m[0] : p;
}

export function readingMinutes(c: PageContent) {
  const text = [...c.intro, ...c.sections.flatMap((s) => [...s.paragraphs, ...(s.bullets ?? [])]), ...(c.steps?.items.map((i) => i.text) ?? []), ...c.faqs.map((f) => f.a)].join(" ");
  return Math.max(2, Math.round(text.split(/\s+/).length / 220));
}

export const SECTION_ICONS = [Layers, Target, Gauge, FileCheck, Send, Shield, Users, MapPin];
export const GROUP_ICON = { core: Sparkle, services: Layers, strategies: Target, industries: MapPin, b2b: Users, b2c: Users, "lead-capture": FileCheck, qualification: Gauge, tools: Gauge, resources: FileCheck, compare: Shield, blog: FileCheck } as const;

const COMPLEMENT: Record<Visual, Visual> = { dashboard: "pipeline", pipeline: "dashboard", funnel: "chart", map: "dashboard", network: "flow", form: "chart", flow: "dashboard", chart: "dashboard", book: "flow", scale: "chart" };

export function CtaLink({ href, className, children }: { href: string; className: string; children: ReactNode }) {
  return href.startsWith("http") ? (
    <a href={href} rel="noopener" className={className}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

/** Section heading inside layouts: typed heading + accent line, left-aligned. */
export function BlockTitle({ kicker, title, id, className = "" }: { kicker?: string; title: string; id?: string; className?: string }) {
  return (
    <div className={className}>
      {kicker && <p className="text-xs font-bold uppercase tracking-wider text-brand">{kicker}</p>}
      <LetterHeading text={title} as="h2" id={id} triggerOnScroll cursor={false} className="mt-1.5 text-[clamp(1.6rem,3vw,2.3rem)] font-extrabold leading-tight" />
      <span aria-hidden="true" className="heading-accent-line mt-3" />
    </div>
  );
}

/* ───────────────────────── Heroes ───────────────────────── */

function PhotoImage({ ctx }: { ctx: Ctx }) {
  const { photo, photoOwn } = ctx;
  if (!photo) return null;
  return <Image src={photo.src} alt={photoOwn ? photo.alt : ""} data-decorative={photoOwn ? undefined : ""} fill preload quality={90} sizes="100vw" className="-z-20 object-cover" />;
}

/**
 * Full-bleed photo hero (always dark). `aside` sits to the right on wide screens (a glance panel or a form);
 * pages without a photo get the same structure on the brand grid background.
 */
export function PhotoHero({ ctx, aside, chips, primaryLabel }: { ctx: Ctx; aside?: ReactNode; chips?: string[]; primaryLabel?: string }) {
  const { content, plan, photo } = ctx;
  return (
    <section data-theme="dark" className="relative isolate overflow-hidden bg-bg text-ink">
      <PhotoImage ctx={ctx} />
      {photo ? (
        <>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
        </>
      ) : (
        <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10 opacity-60" />
      )}
      <div className={`container-x relative grid gap-10 pb-16 pt-8 md:pb-20 lg:pt-12 ${aside ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:items-end lg:gap-12" : ""}`}>
        <div className="min-w-0">
          <Breadcrumbs items={breadcrumbs(plan.path)} />
          <span className="pill mt-6 !border-white/20 !bg-white/10 !text-white backdrop-blur">
            <Sparkle size={14} /> {content.eyebrow}
          </span>
          <LetterHeading text={content.h1} as="h1" className="mt-5 max-w-4xl text-[clamp(2.2rem,5vw,4rem)] font-extrabold uppercase leading-[1.03] tracking-tight text-white" />
          <span aria-hidden="true" className="heading-accent-line mt-4 w-20 !bg-gradient-to-r !from-indigo-400 !via-purple-300 !to-cyan-400" />
          <p className="mt-6 max-w-2xl text-[clamp(1.05rem,1.6vw,1.2rem)] leading-relaxed text-white/85">{content.metaDescription}</p>
          {chips && chips.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="At a glance">
              {chips.map((c) => (
                <li key={c} className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-sm font-semibold text-white backdrop-blur">
                  {c}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink href={content.cta.href} className="btn btn-primary !rounded-full !px-6 !py-3">
              {content.cta.label} <ArrowRight size={17} />
            </CtaLink>
            <a href="#overview" className="btn !rounded-full border border-white/25 bg-white/10 !px-6 !py-3 text-white backdrop-blur hover:bg-white/20">
              {primaryLabel ?? "Read The Guide"} <ArrowRight size={17} />
            </a>
          </div>
        </div>
        {aside && <div className="min-w-0">{aside}</div>}
      </div>
    </section>
  );
}

/** Glass panel for the photo hero's right column. */
export function GlancePanel({ title, rows }: { title: string; rows: { label: string; value: string }[] }) {
  return (
    <div className="rounded-3xl border border-white/15 bg-white/[0.07] p-6 text-white backdrop-blur-md">
      <p className="text-xs font-bold uppercase tracking-wider text-white/70">{title}</p>
      <dl className="mt-4 grid gap-3 text-sm">
        {rows.map((r) => (
          <div key={r.label} className="flex items-start justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
            <dt className="text-white/65">{r.label}</dt>
            <dd className="text-right font-semibold">{r.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/** Light split hero: copy on the left, a product visual or panel on the right. */
export function SplitHero({ ctx, visual, kicker, chips }: { ctx: Ctx; visual?: ReactNode; kicker?: string; chips?: string[] }) {
  const { content, plan } = ctx;
  const Icon = GROUP_ICON[plan.group];
  return (
    <section data-theme={ctx.photo ? "dark" : undefined} className="relative isolate overflow-hidden bg-bg text-ink border-b border-line">
      <HeroBackdrop ctx={ctx} />
      <div aria-hidden="true" className="absolute -right-40 -top-40 -z-10 size-[36rem] rounded-full bg-[var(--glow-1)] blur-3xl" />
      <div className={`container-x relative grid items-center gap-10 py-10 md:py-12 lg:gap-14 lg:py-16 ${visual ? "lg:grid-cols-[1.05fr_1fr]" : "lg:py-20"}`}>
        <div className="min-w-0">
          <Breadcrumbs items={breadcrumbs(plan.path)} />
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span className="icon-tile !size-11">
              <Icon size={20} />
            </span>
            <span className="pill">
              <Sparkle size={14} /> {kicker ?? content.eyebrow}
            </span>
          </div>
          <LetterHeading text={content.h1} as="h1" className="mt-6 text-[clamp(2.2rem,4.6vw,3.6rem)] font-extrabold leading-[1.06]" />
          <span aria-hidden="true" className="heading-accent-line mt-4 w-20" />
          <p className="mt-6 max-w-2xl text-[clamp(1.05rem,1.7vw,1.25rem)] leading-relaxed text-ink-soft">{content.metaDescription}</p>
          {chips && chips.length > 0 && (
            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2" aria-label="Highlights">
              {chips.map((c) => (
                <li key={c} className="flex items-center gap-2.5 text-[15px] font-semibold text-ink">
                  <span className="tick">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink href={content.cta.href} className="btn btn-primary !rounded-full !px-7 !py-3.5 text-base">
              {content.cta.label} <ArrowRight size={18} />
            </CtaLink>
            <a href="#overview" className="btn btn-ghost !rounded-full !px-7 !py-3.5 text-base">
              See How It Works
            </a>
          </div>
        </div>
        {visual && <div className="min-w-0">{visual}</div>}
      </div>
    </section>
  );
}

/**
 * Background image for these heroes: the page's photo sits behind the copy under a dark wash (the section
 * switches to the dark theme whenever it has a photo; a light wash made photos look faded), strong on the text side.
 * Pages without a photo keep the brand grid.
 */
export function HeroBackdrop({ ctx, centered = false }: { ctx: Ctx; centered?: boolean }) {
  if (!ctx.photo) return <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />;
  return (
    // Confined to the hero band (heading + intro line). Layouts like Contact keep more content in the same
    // section; without this cap the photo ran down behind all of it instead of staying a hero background.
    <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-full max-h-[30rem] overflow-hidden md:max-h-[38rem]">
      <PhotoImage ctx={ctx} />
      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-10 ${
          centered
            ? "bg-[color-mix(in_oklch,var(--bg)_72%,transparent)]"
            : // Solid behind the copy, fading out so the right half of the photo shows clearly; on narrow
              // screens the copy spans the width, so the wash stays stronger throughout.
              "bg-[linear-gradient(90deg,var(--bg)_0%,color-mix(in_oklch,var(--bg)_90%,transparent)_45%,color-mix(in_oklch,var(--bg)_70%,transparent)_100%)] lg:bg-[linear-gradient(90deg,var(--bg)_0%,color-mix(in_oklch,var(--bg)_92%,transparent)_48%,color-mix(in_oklch,var(--bg)_40%,transparent)_72%,color-mix(in_oklch,var(--bg)_8%,transparent)_100%)]"
        }`}
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[var(--bg)] to-transparent" />
    </div>
  );
}

/** Compact editorial hero for reading-first pages, on the page's background image. */
export function DocHero({ ctx, meta }: { ctx: Ctx; meta: string[]; banner?: boolean }) {
  const { content, plan } = ctx;
  return (
    <section data-theme={ctx.photo ? "dark" : undefined} className="relative isolate overflow-hidden bg-bg text-ink border-b border-line">
      <HeroBackdrop ctx={ctx} centered />
      <div className="container-x relative py-10 md:py-14">
        <div className="mx-auto max-w-4xl">
          <Breadcrumbs items={breadcrumbs(plan.path)} />
          <p className="mt-8 text-sm font-bold uppercase tracking-wider text-brand">{content.eyebrow}</p>
          <LetterHeading text={content.h1} as="h1" className="mt-3 text-[clamp(2.1rem,4.4vw,3.4rem)] font-extrabold leading-[1.08]" />
          <p className="mt-5 text-[clamp(1.05rem,1.7vw,1.25rem)] leading-relaxed text-ink-soft">{content.metaDescription}</p>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted" aria-label="About this page">
            {meta.map((m) => (
              <li key={m} className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-brand" />
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Content blocks ───────────────────────── */

/** Intro paragraphs as lead text. */
export function Intro({ content, className = "" }: { content: PageContent; className?: string }) {
  return (
    <div className={`grid gap-5 ${className}`}>
      {content.intro.map((p) => (
        <p key={p.slice(0, 40)} className="lead">
          {p}
        </p>
      ))}
    </div>
  );
}

/**
 * Overview band: the title spans the top, then the intro and the highlights sit side by side. The highlight
 * column stretches to the intro's height (each point grows to share it), so neither column leaves a gap.
 */
export function OverviewBand({ kicker, title, content, label = "Key Takeaways" }: { kicker: string; title: string; content: PageContent; label?: string }) {
  return (
    <div>
      <BlockTitle kicker={kicker} title={title} />
      <div className="overview-band mt-8">
        <Intro content={content} />
        {content.highlights.length > 0 && (
          <div className="overview-points">
            <p className="text-xs font-bold uppercase tracking-wider text-muted">{label}</p>
            <ol>
              {content.highlights.map((h, i) => (
                <li key={h} style={{ "--i": i } as CSSProperties}>
                  <span className="overview-points-n" aria-hidden="true">
                    {pad(i + 1)}
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}

/** Highlights as a tick list (cards or plain). */
export function Takeaways({ items, title = "Key Takeaways", plain = false }: { items: string[]; title?: string; plain?: boolean }) {
  return (
    <div>
      <h3 className="text-xl font-bold">{title}</h3>
      <ul className={`mt-5 grid gap-3 ${plain ? "" : "sm:grid-cols-2"}`}>
        {items.map((h) => (
          <li key={h} className={`flex items-center gap-3 text-[15px] font-semibold ${plain ? "" : "card px-5 py-4"}`}>
            <span className="tick">
              <Check size={13} strokeWidth={3} />
            </span>
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Bullets as a numbered key-points list. */
export function KeyPoints({ items, label = "Key Points" }: { items: string[]; label?: string }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-wider text-muted">{label}</p>
      <ol className="key-points mt-3">
        {items.map((b, j) => (
          <li key={b}>
            <span className="key-points-n" aria-hidden="true">
              {j + 1}
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Paragraph run with the first one emphasised as the key idea. */
export function SectionBody({ s, keyIdea = true, size = "text-[16.5px]" }: { s: Section; keyIdea?: boolean; size?: string }) {
  const [first, ...rest] = s.paragraphs;
  return (
    <div className="grid gap-5">
      {keyIdea && first ? (
        <div className="key-idea">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
            <Sparkle size={14} /> Key Idea
          </p>
          <p className="mt-2.5 text-[17.5px] font-medium leading-relaxed text-ink">{first}</p>
        </div>
      ) : null}
      {(keyIdea ? rest : s.paragraphs).length > 0 && (
        <div className={`prose-body ${size}`}>
          {(keyIdea ? rest : s.paragraphs).map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      )}
    </div>
  );
}

/** Classic guide part card (header band + key idea + body + key points). */
export function SectionCard({ s, i, label = "Part", compact = false, checklist = false }: { s: Section; i: number; label?: string; compact?: boolean; checklist?: boolean }) {
  const Icon = SECTION_ICONS[i % SECTION_ICONS.length];
  return (
    <section id={slugify(s.heading)} className={`guide-part group scroll-mt-28 overflow-hidden rounded-3xl border border-line shadow-card ${compact ? "mt-6" : "mt-10"} ${i % 2 ? "guide-part-alt" : "bg-surface"}`}>
      <header className={`flex items-center gap-4 border-b border-line bg-surface-2 ${compact ? "px-5 py-4" : "px-6 py-5 sm:px-8"}`}>
        <span className="icon-tile">
          <Icon size={22} />
        </span>
        <div className="min-w-0">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">
            {label} {pad(i + 1)}
          </span>
          <LetterHeading text={s.heading} as="h2" triggerOnScroll cursor={false} className={`mt-0.5 font-extrabold leading-tight transition-colors duration-300 group-hover:text-brand ${compact ? "text-[clamp(1.2rem,2vw,1.45rem)]" : "text-[clamp(1.35rem,2.4vw,1.75rem)]"}`} />
        </div>
      </header>
      <div className={`grid gap-6 ${compact ? "p-5" : "p-6 sm:p-8"}`}>
        <SectionBody s={s} />
        {s.bullets &&
          (checklist ? (
            <fieldset>
              <legend className="text-xs font-bold uppercase tracking-wider text-muted">Tick As You Go</legend>
              <ul className="checklist mt-3">
                {s.bullets.map((b, j) => (
                  <li key={b}>
                    <label className="checklist-item">
                      <input type="checkbox" data-check={`${i}-${j}`} className="checklist-box" />
                      <span>{b}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </fieldset>
          ) : (
            <KeyPoints items={s.bullets} />
          ))}
      </div>
    </section>
  );
}

/** A section as an animated accordion item (native details/summary, so it works without JavaScript). */
export function AccordionSection({ s, i, label = "Part", open = false }: { s: Section; i: number; label?: string; open?: boolean }) {
  const Icon = SECTION_ICONS[i % SECTION_ICONS.length];
  return (
    <details id={slugify(s.heading)} className="acc group scroll-mt-28" open={open}>
      <summary className="acc-summary">
        <span className="icon-tile !size-10 shrink-0">
          <Icon size={18} />
        </span>
        <h3 className="min-w-0 flex-1 font-display text-[clamp(1.1rem,1.8vw,1.3rem)] font-bold leading-snug text-ink">
          <span className="block font-sans text-[11px] font-bold uppercase tracking-wider text-brand">
            {label} {pad(i + 1)}
          </span>
          {s.heading}
        </h3>
        <span className="acc-chevron" aria-hidden="true" />
      </summary>
      <div className="acc-body">
        <SectionBody s={s} keyIdea={false} size="text-[15.5px]" />
        {s.bullets && (
          <ul className="spec-list mt-5">
            {s.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
      </div>
    </details>
  );
}

/** Steps as an island of numbered cards. */
export function StepsGrid({ steps, badge = "Step By Step", id }: { steps: NonNullable<PageContent["steps"]>; badge?: string; id?: string }) {
  const n = steps.items.length;
  return (
    <section id={id ?? slugify(steps.heading)} data-theme="dark" className="surface-island section-y my-5 scroll-mt-20 md:my-8">
      <div className="container-x">
        <SectionHeading badge={badge} title={steps.heading} subtitle={`A ${n}-step process you can follow and adapt.`} />
        <ol className={`mt-10 grid gap-5 sm:grid-cols-2 ${n >= 5 ? "lg:grid-cols-3 xl:grid-cols-5" : n === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {steps.items.map((step, i) => (
            <li key={step.title} className="card card-link relative flex flex-col items-center p-6 text-center">
              <span className="icon-tile relative !size-14 !rounded-2xl font-display text-lg font-extrabold">{pad(i + 1)}</span>
              <h3 className="mt-5 text-[17px] font-bold leading-snug">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Steps as a horizontal connected process (wraps to a vertical chain on narrow screens). */
export function ProcessStrip({ items, label = "Step" }: { items: Step[]; label?: string }) {
  return (
    <ol className="process-strip" style={{ "--cols": items.length } as CSSProperties}>
      {items.map((step, i) => (
        <li key={step.title} className="process-node">
          <span className="process-dot" aria-hidden="true">
            {pad(i + 1)}
          </span>
          <div className="process-body">
            <p className="text-[11px] font-bold uppercase tracking-wider text-brand">
              {label} {i + 1}
            </p>
            <h3 className="mt-1 text-[16.5px] font-bold leading-snug text-ink">{step.title}</h3>
            <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Steps as a vertical timeline (the playbook rail). */
export function Timeline({ items, label = "Step", className = "" }: { items: Step[]; label?: string; className?: string }) {
  return (
    <ol className={`playbook ${className}`}>
      {items.map((step, i) => (
        <li key={step.title} className="playbook-item">
          <span className="playbook-node" aria-hidden="true">
            {pad(i + 1)}
          </span>
          <div className="card p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand">
              {label} {i + 1}
            </p>
            <h3 className="mt-1 text-[18px] font-bold leading-snug">{step.title}</h3>
            <p className="mt-2 text-[15.5px] leading-relaxed text-ink-soft">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Considerations: cards (default) or a compact ruled list. */
export function Considerations({ ctx, badge = "Before You Start", variant = "cards" }: { ctx: Ctx; badge?: string; variant?: "cards" | "list" }) {
  const c = ctx.content.considerations;
  if (!c) return null;
  return (
    <section id={slugify(c.heading)} className={`surface-tint ${ctx.cut} section-y scroll-mt-20`}>
      <div className="container-x">
        <SectionHeading badge={badge} title={c.heading} />
        {variant === "cards" ? (
          <ul className="mt-10 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.items.map((item, i) => (
              <li key={item} className="card p-6">
                <div className="flex items-center justify-between">
                  <span className="icon-tile !size-11 !text-warm">
                    <Info size={20} />
                  </span>
                  <span className="font-mono text-sm font-bold text-muted">{pad(i + 1)}</span>
                </div>
                <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">{item}</p>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="mx-auto mt-9 grid max-w-4xl auto-rows-fr gap-3 md:grid-cols-2">
            {c.items.map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-line bg-surface p-4 text-[15.5px] leading-relaxed text-ink-soft">
                <Info size={18} className="mt-0.5 shrink-0 text-warm" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

/** The page's illustrative example. Always labelled as hypothetical; never a customer story. */
export function Example({ ctx, label = "Illustrative Example" }: { ctx: Ctx; label?: string }) {
  const ex = ctx.content.example;
  if (!ex) return null;
  return (
    <section className="container-x pb-16 pt-12 md:pb-20 md:pt-16" aria-label={label}>
      {/* Bottom padding stays taller than a following section's wave cut (max 52px), so the wave never overlaps the card. */}
      <div className="card grid items-center gap-8 overflow-hidden !rounded-[2rem] p-6 sm:p-10 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <span className="pill">
            <Sparkle size={14} /> {label}
          </span>
          <LetterHeading text={ex.heading} as="h2" triggerOnScroll cursor={false} className="mt-5 text-[clamp(1.6rem,3vw,2.3rem)] font-extrabold leading-tight" />
          <span aria-hidden="true" className="heading-accent-line mt-3" />
          <p className="lead mt-5">{ex.text}</p>
          <p className="mt-5 text-sm text-muted">A hypothetical scenario for explanation only, not a customer story or a promised result.</p>
        </div>
        <div className="hidden rounded-3xl border border-line bg-bg-alt p-4 lg:block">
          <HeroVisual variant={ctx.photo ? ctx.group.visual : COMPLEMENT[ctx.group.visual]} seed={`${ctx.plan.path}#example`} hue={ctx.group.hue} topic={ctx.plan.title} className="h-auto w-full" />
        </div>
      </div>
    </section>
  );
}

export function FaqBlock({ ctx, title = "Frequently Asked Questions" }: { ctx: Ctx; title?: string }) {
  if (!ctx.content.faqs.length) return null;
  return (
    <section id="faqs" className={`surface-soft ${ctx.cut} section-y scroll-mt-20`} aria-labelledby="faq-title">
      <div className="container-x">
        <SectionHeading id="faq-title" badge="FAQ" title={title} subtitle={`Quick answers about ${ctx.plan.title}.`} />
        <div className="mx-auto mt-9 max-w-3xl">
          <Faqs items={ctx.content.faqs} showHeading={false} />
        </div>
      </div>
    </section>
  );
}

export function RelatedBlock({ ctx, title = "Related Topics", badge = "Keep Exploring" }: { ctx: Ctx; title?: string; badge?: string }) {
  if (!ctx.related.length) return null;
  return (
    <section className="surface-panel section-y my-5 md:my-8" aria-labelledby="related-title">
      <div className="container-x">
        <SectionHeading id="related-title" badge={badge} title={title} subtitle="Hand-picked pages that go deeper on the ideas covered here." />
        <TopicLinkGrid pages={ctx.related} />
      </div>
    </section>
  );
}

export function Cta({ ctx }: { ctx: Ctx }) {
  return (
    <div className="container-x">
      <CtaBand {...ctx.content.cta} />
    </div>
  );
}

/** "On this page" list with live highlighting of the section being read. */
export function TocNav({ items, faqs, className = "" }: { items: { id: string; label: string }[]; faqs?: boolean; className?: string }) {
  return (
    <nav aria-label="On this page" className={`toc ${className}`}>
      <TocSpy />
      <p className="text-xs font-bold uppercase tracking-wider text-muted">On this page</p>
      <ol className="mt-3 grid gap-2.5 text-sm">
        {items.map((t, i) => (
          <li key={t.id} className="flex gap-2.5">
            <span className="font-mono text-xs text-brand">{pad(i + 1)}</span>
            <a href={`#${t.id}`} className="text-ink-soft hover:text-brand">
              {t.label}
            </a>
          </li>
        ))}
        {faqs && (
          <li className="flex gap-2.5">
            <span className="font-mono text-xs text-brand">?</span>
            <a href="#faqs" className="text-ink-soft hover:text-brand">
              FAQs
            </a>
          </li>
        )}
      </ol>
    </nav>
  );
}

export const sectionToc = (sections: Section[]) => sections.map((s) => ({ id: slugify(s.heading), label: s.heading }));

/** The existing form, inside the layout that needs it. */
export function FormSlot({ kind }: { kind: "contact" | "demo" }) {
  return (
    <div id="form" className="min-w-0 scroll-mt-28">
      <LazyLeadForm kind={kind} />
    </div>
  );
}
