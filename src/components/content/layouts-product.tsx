import type { CSSProperties } from "react";
import Link from "next/link";
import { groupChildren } from "@/lib/registry";
import { Check, ChevronRight } from "../icons";
import { LetterHeading } from "../LetterHeading";
import { SectionHeading } from "../SectionHeading";
import { Stepper, TabExplorer } from "./interactive";
import {
  AccordionSection,
  BlockTitle,
  Considerations,
  Cta,
  type Ctx,
  Example,
  FaqBlock,
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
  slugify,
  SplitHero,
  Takeaways,
  Timeline,
} from "./blocks";

/* ═══════════════════════ Service: product capability pages ═══════════════════════
   Split hero with a sample-data product preview → capability map → connected workflow →
   alternating deep dives → use case → good-to-know → FAQ → related services. */
export function ServiceLayout({ ctx }: { ctx: Ctx }) {
  const { content } = ctx;
  return (
    <div className="page-root layout-service">
      <SplitHero ctx={ctx} chips={content.highlights} />

      <section id="overview" className="section-y scroll-mt-24">
        <div className="container-x">
          {/* Title on top, intro flowing in two balanced newspaper columns: no empty column beside either. */}
          <BlockTitle kicker="Overview" title="What It Does" />
          <Intro content={content} className="intro-columns mt-7" />
          {/* Capability explorer: one tab per capability; its detail slides in beside the list. */}
          <div className="mt-12">
            <TabExplorer
              label="Capabilities"
              tabs={content.sections.map((s, i) => {
                const Icon = SECTION_ICONS[i % SECTION_ICONS.length];
                return { id: slugify(s.heading), label: s.heading, kicker: `Capability ${pad(i + 1)}`, icon: <Icon size={18} /> };
              })}
            >
              {content.sections.map((s) => (
                <div key={s.heading} className="explorer-split">
                  <div className="min-w-0">
                    <h2 className="text-[clamp(1.4rem,2.4vw,1.85rem)] font-extrabold leading-tight">{s.heading}</h2>
                    <div className="mt-4">
                      <SectionBody s={s} keyIdea={false} />
                    </div>
                  </div>
                  {s.bullets && (
                    <div className="explorer-aside min-w-0">
                      <KeyPoints items={s.bullets} label="What You Get" />
                    </div>
                  )}
                </div>
              ))}
            </TabExplorer>
          </div>
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

      <Example ctx={ctx} label="Use Case · Illustrative" />
      <Considerations ctx={ctx} badge="Good To Know" variant="list" />
      <FaqBlock ctx={ctx} />
      <RelatedBlock ctx={ctx} title="Related Services" badge="More Capabilities" />
      <Cta ctx={ctx} />
    </div>
  );
}

/* ═══════════════════════ Playbook: strategies, B2B and B2C ═══════════════════════
   Photo hero with a glance panel → why + outcomes beside the step timeline → numbered plays on a rail
   → watch-outs → the play in action. Labels follow the audience (B2B accounts, B2C consumers). */
const PLAYBOOK_LABELS = {
  strategies: { glance: "Play At A Glance", learn: "What You'll Get", part: "Play", stepsBadge: "The Playbook", cons: "Watch-Outs", ex: "The Play In Action · Illustrative", related: "Related Plays" },
  b2b: { glance: "Account Focus", learn: "What You'll Learn", part: "Insight", stepsBadge: "Account Playbook", cons: "Before You Engage", ex: "Account Scenario · Illustrative", related: "More B2B Guides" },
  b2c: { glance: "Audience Snapshot", learn: "What You'll Learn", part: "Moment", stepsBadge: "Consumer Playbook", cons: "Before You Reach Out", ex: "Customer Scenario · Illustrative", related: "More B2C Guides" },
} as const;

export function PlaybookLayout({ ctx }: { ctx: Ctx }) {
  const { content, plan, minutes } = ctx;
  const L = PLAYBOOK_LABELS[plan.group as keyof typeof PLAYBOOK_LABELS] ?? PLAYBOOK_LABELS.strategies;
  return (
    <div className={`page-root layout-playbook playbook-${plan.group}`}>
      <PhotoHero
        ctx={ctx}
        primaryLabel="Start The Playbook"
        aside={
          <GlancePanel
            title={L.glance}
            rows={[
              { label: "Best For", value: plan.audience },
              ...(content.steps ? [{ label: "Steps", value: String(content.steps.items.length) }] : []),
              { label: "Sections", value: String(content.sections.length) },
              { label: "Reading Time", value: `${minutes} Minutes` },
            ]}
          />
        }
      />

      <section id="overview" className="section-y scroll-mt-24">
        <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <BlockTitle kicker="Why It Matters" title={content.title} />
            <Intro content={content} className="mt-6" />
            <div className="mt-8">
              <Takeaways items={content.highlights} title={L.learn} plain />
            </div>
          </div>
          {content.steps ? (
            <div id={slugify(content.steps.heading)} className="scroll-mt-28">
              <p className="text-xs font-bold uppercase tracking-wider text-brand">{L.stepsBadge}</p>
              <h2 className="mt-1.5 text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold leading-tight">{content.steps.heading}</h2>
              <Timeline items={content.steps.items} className="mt-7" />
            </div>
          ) : (
            <div />
          )}
        </div>
      </section>

      <section className="surface-soft section-y" aria-label={`${L.part}s`}>
        <div className="container-x">
          <ol className="play-rail mx-auto max-w-4xl">
            {content.sections.map((s, i) => (
              <li key={s.heading} id={slugify(s.heading)} className="play-rail-item scroll-mt-28">
                <span className="play-rail-n" aria-hidden="true">
                  {pad(i + 1)}
                </span>
                <div className="card !rounded-3xl p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand">
                    {L.part} {pad(i + 1)}
                  </p>
                  <LetterHeading text={s.heading} as="h2" triggerOnScroll cursor={false} className="mt-1 text-[clamp(1.35rem,2.4vw,1.75rem)] font-extrabold leading-tight" />
                  <div className="mt-5">
                    <SectionBody s={s} keyIdea={false} />
                  </div>
                  {s.bullets && (
                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-ink">
                          <span className="tick mt-0.5">
                            <Check size={13} strokeWidth={3} />
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Example ctx={ctx} label={L.ex} />
      <Considerations ctx={ctx} badge={L.cons} />
      <FaqBlock ctx={ctx} />
      <RelatedBlock ctx={ctx} title={L.related} />
      <Cta ctx={ctx} />
    </div>
  );
}

/* ═══════════════════════ Industry: vertical guides ═══════════════════════
   Photo hero with sector signals → overview + sector snapshot → challenge-and-approach rows →
   prospecting workflow strip → sector scenario → watch-outs → more industries selector. */
export function IndustryLayout({ ctx }: { ctx: Ctx }) {
  const { content, plan } = ctx;
  const others = groupChildren("industries").filter((p) => p.path !== plan.path);
  return (
    <div className="page-root layout-industry">
      <PhotoHero ctx={ctx} chips={content.highlights} primaryLabel="Explore The Sector" />

      <section id="overview" className="section-y scroll-mt-24">
        <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <BlockTitle kicker="The Sector" title="How This Sector Buys" />
            <Intro content={content} className="mt-6" />
          </div>
          <aside className="card self-start !rounded-3xl p-6 sm:p-7" aria-label="Sector snapshot">
            <p className="text-xs font-bold uppercase tracking-wider text-brand">Sector Snapshot</p>
            <p className="mt-2 font-display text-xl font-bold">{plan.title}</p>
            <p className="mt-1 text-sm text-muted">For {plan.audience}</p>
            <ol className="mt-5 grid gap-2 text-sm">
              {content.sections.map((s, i) => (
                <li key={s.heading}>
                  <a href={`#${slugify(s.heading)}`} className="flex gap-3 rounded-xl px-2 py-1.5 text-ink-soft transition hover:bg-brand-soft hover:text-brand">
                    <span className="font-mono text-xs text-brand">{pad(i + 1)}</span>
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      <section className="surface-soft section-y" aria-label="Challenges and approaches">
        <div className="container-x">
          <SectionHeading badge="Challenges" title="The Situation And How To Approach It" subtitle="Pick a challenge to see what is going on and what to do about it." />
          <div className="mt-10">
          <TabExplorer
            variant="top"
            label="Sector challenges"
            tabs={content.sections.map((s, i) => ({ id: slugify(s.heading), label: s.heading, kicker: `Challenge ${pad(i + 1)}` }))}
          >
          {content.sections.map((s) => (
            <article key={s.heading} className={`sector-row ${s.bullets ? "" : "sector-row-solo"}`}>
              <div className="min-w-0 p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-wider text-muted">The Situation</p>
                <h2 className="mt-1.5 text-[clamp(1.35rem,2.4vw,1.75rem)] font-extrabold leading-tight">{s.heading}</h2>
                <div className="mt-5">
                  <SectionBody s={s} keyIdea={false} />
                </div>
              </div>
              {s.bullets && (
                <div className="sector-approach min-w-0 p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand">How To Approach It</p>
                  <ul className="mt-4 grid gap-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-ink">
                        <ChevronRight size={16} className="mt-1 shrink-0 text-brand" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
          </TabExplorer>
          </div>
        </div>
      </section>

      {content.steps && (
        <section id={slugify(content.steps.heading)} data-theme="dark" className="surface-island section-y my-5 scroll-mt-20 md:my-8">
          <div className="container-x">
            <SectionHeading badge="Prospecting Workflow" title={content.steps.heading} />
            <div className="mt-10">
              <ProcessStrip items={content.steps.items} />
            </div>
          </div>
        </section>
      )}

      <Example ctx={ctx} label="Sector Scenario · Illustrative" />
      <Considerations ctx={ctx} badge="Sector Watch-Outs" variant="list" />
      <FaqBlock ctx={ctx} />

      <section className="section-y" aria-labelledby="more-industries">
        <div className="container-x">
          <SectionHeading id="more-industries" badge="Industries" title="More Industry Playbooks" subtitle="Each sector has its own buying triggers and listing signals." />
          <div className="marquee-fade mt-9 grid gap-3">
            {[0, 1, 2].map((row) => {
              const items = others.filter((_, i) => i % 3 === row);
              return (
                <div key={row} className="marquee-wrap overflow-hidden">
                  <ul className={`marquee gap-2.5 py-1 ${row === 1 ? "marquee-reverse" : ""}`} style={{ animationDuration: `${40 + row * 6}s` } as CSSProperties}>
                    {[...items, ...items].map((p, i) => {
                      const dup = i >= items.length;
                      return (
                        <li key={`${p.path}-${i}`} aria-hidden={dup || undefined} className={dup ? "marquee-dup" : undefined}>
                          <Link href={p.path} className="chip whitespace-nowrap" tabIndex={dup ? -1 : undefined}>
                            {p.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Cta ctx={ctx} />
    </div>
  );
}

/* ═══════════════════════ Toolkit: setup, measurement and framework references ═══════════════════════
   Split hero with a quick-reference card → setup checklist → reference cards grid → worked example
   → pitfalls → FAQ. Labels follow the section (tools, qualification frameworks, capture measurement). */
const TOOLKIT_KICKER: Record<string, string> = { tools: "Setup & Measurement", qualification: "Framework", "lead-capture": "Measurement" };

export function ToolkitLayout({ ctx }: { ctx: Ctx }) {
  const { content, plan } = ctx;
  const kicker = TOOLKIT_KICKER[plan.group] ?? "Reference";
  return (
    <div className="page-root layout-toolkit">
      <SplitHero
        ctx={ctx}
        kicker={kicker}
        visual={
          <div className="card !rounded-3xl p-6 shadow-lift sm:p-7">
            <p className="text-xs font-bold uppercase tracking-wider text-brand">Quick Reference</p>
            <ol className="mt-4 grid gap-2.5">
              {content.highlights.map((h, i) => (
                <li key={h} className="flex items-center gap-3 rounded-2xl border border-line bg-surface-2 px-4 py-3 text-[15px] font-semibold">
                  <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-grad text-xs font-bold text-white">{i + 1}</span>
                  {h}
                </li>
              ))}
            </ol>
            <p className="mt-5 text-xs font-bold uppercase tracking-wider text-muted">In This Reference</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {content.sections.map((s) => (
                <li key={s.heading}>
                  <a href={`#${slugify(s.heading)}`} className="inline-block rounded-full border border-line px-3 py-1 text-xs font-semibold text-ink-soft hover:border-brand hover:text-brand">
                    {s.heading}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        }
      />

      <section id="overview" className="section-y scroll-mt-24">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <BlockTitle kicker="Overview" title={content.title} />
            <Intro content={content} className="mt-6" />
          </div>
          {content.steps && (
            <div id={slugify(content.steps.heading)} className="scroll-mt-28">
              <p className="text-xs font-bold uppercase tracking-wider text-brand">{plan.group === "qualification" ? "Apply It" : "Setup Checklist"}</p>
              <h2 className="mt-1.5 text-[clamp(1.4rem,2.4vw,1.8rem)] font-extrabold leading-tight">{content.steps.heading}</h2>
              <ol className="setup-list mt-6">
                {content.steps.items.map((s, i) => (
                  <li key={s.title}>
                    <span className="setup-n" aria-hidden="true">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-bold text-ink">{s.title}</p>
                      <p className="mt-1 text-[14.5px] leading-relaxed text-ink-soft">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </section>

      <section className="surface-soft section-y" aria-labelledby="reference-title">
        <div className="container-x">
          <SectionHeading id="reference-title" badge={kicker} title="Reference" subtitle="Open any part of the topic; the first one is open to start you off." />
          <div className="acc-list mx-auto mt-10 max-w-4xl">
            {content.sections.map((s, i) => (
              <AccordionSection key={s.heading} s={s} i={i} label="Part" open={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <Example ctx={ctx} label="Worked Example · Illustrative" />
      <Considerations ctx={ctx} badge="Pitfalls" variant="list" />
      <FaqBlock ctx={ctx} />
      <RelatedBlock ctx={ctx} />
      <Cta ctx={ctx} />
    </div>
  );
}

/* ═══════════════════════ Workflow: processes you build and run in stages ═══════════════════════
   Photo hero with a process glance → overview → zig-zag process diagram → stage cards on a chain
   → common pitfalls → walk-through → FAQ. */
export function WorkflowLayout({ ctx }: { ctx: Ctx }) {
  const { content, plan, minutes } = ctx;
  const stage = plan.group === "lead-capture" ? "Build Step" : "Stage";
  return (
    <div className="page-root layout-workflow">
      <PhotoHero
        ctx={ctx}
        primaryLabel="See The Process"
        aside={
          <GlancePanel
            title="Process At A Glance"
            rows={[
              ...(content.steps ? [{ label: "Steps", value: String(content.steps.items.length) }] : []),
              { label: "Best For", value: plan.audience },
              { label: "Reading Time", value: `${minutes} Minutes` },
            ]}
          />
        }
      />

      <section id="overview" className="section-y scroll-mt-24">
        <div className="container-x">
          <OverviewBand kicker="Overview" title={content.title} content={content} />
        </div>
      </section>

      {content.steps && (
        <section id={slugify(content.steps.heading)} data-theme="dark" className="surface-island section-y my-5 scroll-mt-20 md:my-8">
          <div className="container-x">
            <SectionHeading badge="The Process" title={content.steps.heading} />
            <div className="mx-auto mt-12 max-w-5xl">
              <Stepper steps={content.steps.items} label="Step" />
            </div>
          </div>
        </section>
      )}

      <section className="section-y" aria-label={`${stage}s in detail`}>
        <div className="container-x max-w-4xl">
          <SectionHeading badge={`${stage}s`} title={`Each ${stage} In Detail`} subtitle="Open a stage to read how it works." />
          <div className="acc-list mt-10">
            {content.sections.map((s, i) => (
              <AccordionSection key={s.heading} s={s} i={i} label={stage} open={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <Considerations ctx={ctx} badge="Common Pitfalls" />
      <Example ctx={ctx} label="Walk-Through · Illustrative" />
      <FaqBlock ctx={ctx} />
      <RelatedBlock ctx={ctx} />
      <Cta ctx={ctx} />
    </div>
  );
}
