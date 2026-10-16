import Image from "next/image";
import { pageBackground } from "@/lib/page-background";
import Link from "next/link";
import type { PageContent, PlanEntry } from "@/content/types";
import { GROUPS, type Visual } from "@/lib/groups";
import { breadcrumbs, groupChildren, relatedPages } from "@/lib/registry";
import { SITE } from "@/lib/site";
import { Breadcrumbs } from "./Breadcrumbs";
import { CtaBand } from "./CtaBand";
import { Faqs } from "./Faqs";
import { HeroVisual } from "./HeroVisual";
import { ArrowRight, Check, FileCheck, Gauge, Info, Layers, MapPin, Send, Shield, Sparkle, Target, Users } from "./icons";
import { LeadForm } from "./LeadForm";
import { LetterHeading } from "./LetterHeading";
import { SectionHeading } from "./SectionHeading";
import { TopicLinkGrid } from "./TopicLinkCard";

/** The example shows the page group’s own scene, unless the hero already shows it (no photo), then a complementary one. */
const COMPLEMENT: Record<Visual, Visual> = { dashboard: "pipeline", pipeline: "dashboard", funnel: "chart", map: "dashboard", network: "flow", form: "chart", flow: "dashboard", chart: "dashboard", book: "flow", scale: "chart" };
const exampleVisual = (v: Visual, heroHasPhoto: boolean) => (heroHasPhoto ? v : COMPLEMENT[v]);

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const SECTION_ICONS = [Layers, Target, Gauge, FileCheck, Send, Shield, Users, MapPin];
const GROUP_ICON = { core: Sparkle, services: Layers, strategies: Target, industries: MapPin, b2b: Users, b2c: Users, "lead-capture": FileCheck, qualification: Gauge, tools: Gauge, resources: FileCheck, compare: Shield, blog: FileCheck } as const;

/** First sentence of a paragraph, for the at-a-glance summary. */
function firstSentence(p = "") {
  const m = p.match(/^.+?[.!?](?=\s|$)/);
  return m ? m[0] : p;
}

function readingMinutes(c: PageContent) {
  const text = [...c.intro, ...c.sections.flatMap((s) => [...s.paragraphs, ...(s.bullets ?? [])]), ...(c.steps?.items.map((i) => i.text) ?? []), ...c.faqs.map((f) => f.a)].join(" ");
  return Math.max(2, Math.round(text.split(/\s+/).length / 220));
}

function CtaLink({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
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

const CUTS = ["cut-wave", "cut-step", "cut-slant", "cut-curve", "cut-tilt", "cut-flow"];

export function ContentPage({ content, plan }: { content: PageContent; plan: PlanEntry }) {
  const group = GROUPS[plan.group];
  const GroupIcon = GROUP_ICON[plan.group];
  const isHub = group.hub === plan.path;
  const children = isHub ? groupChildren(plan.group) : [];
  const related = relatedPages(plan.path);
  // One section-cut shape per page (varies across pages, never mixed on one page).
  const cut = CUTS[[...plan.path].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 0) % CUTS.length];
  const minutes = readingMinutes(content);
  const toc = content.sections.map((s) => s.heading);
  const bg = pageBackground(plan.path);
  const photo = bg?.image;

  return (
    <div className="page-root">
      {/* ───────── Hero ───────── */}
      {photo ? (
        <>
        <section data-theme="dark" className="relative isolate overflow-hidden bg-bg text-ink">
          <Image src={photo.src} alt={bg.own ? photo.alt : ""} fill preload quality={90} sizes="100vw" className="-z-20 object-cover" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
          <div className="container-x relative pb-24 pt-8 md:pb-28 lg:pt-12">
            <Breadcrumbs items={breadcrumbs(plan.path)} />
            <span className="pill mt-6 !border-white/20 !bg-white/10 !text-white backdrop-blur">
              <Sparkle size={14} /> {content.eyebrow}
            </span>
            <LetterHeading text={content.h1} as="h1" className="mt-5 max-w-4xl text-[clamp(2.3rem,5.2vw,4.2rem)] font-extrabold uppercase leading-[1.02] tracking-tight text-white" />
            <span aria-hidden="true" className="heading-accent-line mt-4 w-20 !bg-gradient-to-r !from-indigo-400 !via-purple-300 !to-cyan-400" />
            <div className="mt-6 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
              <p className="max-w-2xl text-[clamp(1.05rem,1.6vw,1.2rem)] leading-relaxed text-white/85">{content.metaDescription}</p>
              <div className="flex flex-wrap gap-3">
                <CtaLink href={content.cta.href} className="btn btn-primary !rounded-full !px-6 !py-3">
                  {content.cta.label} <ArrowRight size={17} />
                </CtaLink>
                <a
                  href={content.form ? "#form" : "#overview"}
                  className="btn !rounded-full border border-white/25 bg-white/10 !px-6 !py-3 text-white backdrop-blur hover:bg-white/20"
                >
                  {content.form ? "Go To The Form" : "Read The Guide"} <ArrowRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Stats card overlapping the hero's bottom edge */}
        <div className="container-x relative z-10 -mt-16 md:-mt-20">
          <dl className="card mx-auto grid max-w-5xl grid-cols-2 divide-line !rounded-3xl py-2 shadow-lift md:grid-cols-4 md:divide-x">
            {[
              { icon: GroupIcon, value: group.label, label: "Category" },
              { icon: FileCheck, value: `${minutes} Min`, label: "Reading Time" },
              { icon: Layers, value: String(content.sections.length), label: "Guide Sections" },
              { icon: Users, value: String(content.faqs.length), label: "FAQs Answered" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center px-3 py-5 text-center">
                <span className="icon-tile !size-10 !rounded-xl">
                  <Icon size={18} />
                </span>
                <dd className={`mt-3 font-display font-bold leading-tight ${/^\d/.test(value) ? "text-[clamp(1.4rem,2.4vw,1.9rem)]" : "text-[clamp(1rem,1.5vw,1.2rem)]"}`}>{value}</dd>
                <dt className="mt-1 text-sm text-muted">{label}</dt>
              </div>
            ))}
          </dl>
        </div>
        </>
      ) : (
      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden="true" className="bg-grid absolute inset-0" />
        <div className="container-x relative grid items-center gap-10 py-10 md:py-12 lg:grid-cols-[1.2fr_1fr] lg:py-14">
          <div className="fade-up min-w-0">
            <Breadcrumbs items={breadcrumbs(plan.path)} />
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="icon-tile !size-11">
                <GroupIcon size={20} />
              </span>
              <span className="pill">
                <Sparkle size={14} /> {content.eyebrow}
              </span>
            </div>
            <LetterHeading text={content.h1} as="h1" className="mt-6 text-[clamp(2.3rem,5vw,4rem)] font-extrabold leading-[1.05]" />
            <span aria-hidden="true" className="heading-accent-line mt-4 w-20" />
            <p className="mt-6 max-w-2xl text-[clamp(1.1rem,1.8vw,1.3rem)] leading-relaxed text-ink-soft">{content.metaDescription}</p>
            <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Page facts">
              <li className="chip">
                <GroupIcon size={16} className="text-brand" /> {group.label}
              </li>
              <li className="chip">
                <Users size={16} className="text-brand" /> {plan.audience}
              </li>
              <li className="chip">
                <FileCheck size={16} className="text-brand" /> {minutes} Min Read
              </li>
              {isHub && (
                <li className="chip">
                  <Layers size={16} className="text-brand" /> {children.length} Topics
                </li>
              )}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <CtaLink href={content.cta.href} className="btn btn-primary !rounded-full !px-7 !py-3.5 text-base">
                {content.cta.label} <ArrowRight size={18} />
              </CtaLink>
              <a href={content.form ? "#form" : "#overview"} className="btn btn-ghost !rounded-full !px-7 !py-3.5 text-base">
                {content.form ? "Go To The Form" : "Read The Guide"}
              </a>
            </div>
          </div>
          {/* Framed visual, styled like an app window */}
          <div className="relative mx-auto hidden w-full max-w-md sm:block lg:max-w-none">
            <div className="card overflow-hidden !rounded-3xl shadow-lift">
              <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-5 py-3.5">
                <span className="size-3 rounded-full bg-[oklch(0.7_0.18_25)]" />
                <span className="size-3 rounded-full bg-[oklch(0.82_0.15_85)]" />
                <span className="size-3 rounded-full bg-[oklch(0.72_0.15_150)]" />
                <span className="ml-3 h-2.5 w-40 rounded-full bg-line" />
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[11px] font-semibold text-muted">
                  <span className="size-1.5 rounded-full bg-success" /> {group.label}
                </span>
              </div>
              <div className="bg-bg-alt p-4">
                <HeroVisual variant={group.visual} seed={plan.path} hue={group.hue} topic={plan.title} className="h-auto w-full" />
              </div>
            </div>
            <div className="float-slow absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3 shadow-lift md:flex">
              <span className="icon-tile !size-9 !rounded-xl">
                <Check size={16} strokeWidth={3} />
              </span>
              <span className="text-sm font-semibold">{content.highlights[0]}</span>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ───────── Overview + article with sticky summary ───────── */}
      <section id="overview" className="section-y scroll-mt-24">
        <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,1fr)_23rem] lg:gap-16">
          <article className="min-w-0">
            <div className="group">
              <LetterHeading text="Overview" as="h2" triggerOnScroll className="text-[clamp(1.9rem,3.4vw,2.6rem)] font-extrabold" />
              <span aria-hidden="true" className="heading-accent-line mt-3" />
            </div>
            <div className="mt-6 grid gap-5">
              {content.intro.map((p) => (
                <p key={p.slice(0, 40)} className="lead">
                  {p}
                </p>
              ))}
            </div>

            <h3 className="mt-9 text-xl font-bold">Key Takeaways</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {content.highlights.map((h) => (
                <li key={h} className="card flex items-center gap-3 px-5 py-4 text-[15px] font-semibold">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                    <Check size={15} strokeWidth={3} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            {content.form && (
              <div id="form" className="mt-10 scroll-mt-28">
                <LeadForm kind={content.form} />
              </div>
            )}

            {/* At-a-glance index: every part with a one-line summary. */}
            {content.sections.length > 1 && (
              <div className="mt-10 overflow-hidden rounded-3xl border border-line">
                <div className="flex items-center justify-between gap-4 border-b border-line bg-surface-2 px-6 py-4">
                  <h3 className="font-bold">At A Glance</h3>
                  <span className="text-sm text-muted">{content.sections.length} Parts</span>
                </div>
                <ol className="divide-y divide-line bg-surface">
                  {content.sections.map((s, i) => (
                    <li key={s.heading}>
                      <a href={`#${slugify(s.heading)}`} className="group grid gap-1 px-6 py-4 transition hover:bg-brand-soft sm:grid-cols-[3rem_14rem_1fr] sm:items-baseline sm:gap-4">
                        <span className="font-mono text-sm font-bold text-brand">{String(i + 1).padStart(2, "0")}</span>
                        <span className="font-semibold text-ink group-hover:text-brand">{s.heading}</span>
                        <span className="line-clamp-2 text-sm leading-relaxed text-muted">{firstSentence(s.paragraphs[0])}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {content.sections.map((s, i) => {
              const Icon = SECTION_ICONS[i % SECTION_ICONS.length];
              const [keyIdea, ...detail] = s.paragraphs;
              return (
                <section key={s.heading} id={slugify(s.heading)} className="group mt-10 scroll-mt-28 overflow-hidden rounded-3xl border border-line bg-surface shadow-card transition-all duration-300 hover:border-brand/40 hover:shadow-lift">
                  <header className="flex items-center gap-4 border-b border-line bg-surface-2 px-6 py-5 sm:px-8">
                    <span className="icon-tile">
                      <Icon size={22} />
                    </span>
                    <div className="min-w-0">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand">Part {String(i + 1).padStart(2, "0")}</span>
                      <LetterHeading text={s.heading} as="h2" triggerOnScroll className="mt-0.5 text-[clamp(1.35rem,2.4vw,1.75rem)] font-extrabold leading-tight transition-colors duration-300 group-hover:text-brand" />
                    </div>
                  </header>
                  <div className="grid gap-6 p-6 sm:p-8">
                    {keyIdea && (
                      <div className="rounded-2xl border-l-4 border-brand bg-brand-soft/60 px-5 py-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-brand">Key Idea</p>
                        <p className="mt-2 text-[17px] leading-relaxed text-ink">{keyIdea}</p>
                      </div>
                    )}
                    {detail.length > 0 && (
                      <div className="prose-body text-[16.5px]">
                        {detail.map((p) => (
                          <p key={p.slice(0, 40)}>{p}</p>
                        ))}
                      </div>
                    )}
                    {s.bullets && (
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-muted">Key Points</p>
                        <ol className="mt-3 grid gap-3 sm:grid-cols-2">
                          {s.bullets.map((b, j) => (
                            <li key={b} className="flex gap-3 rounded-xl border border-line bg-bg px-4 py-3.5 text-[15px] leading-relaxed text-ink-soft">
                              <span className="grid size-6 shrink-0 place-items-center rounded-md bg-brand-soft font-mono text-xs font-bold text-brand">{j + 1}</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </div>
                </section>
              );
            })}
          </article>

          {/* Sticky summary card */}
          <aside className="lg:block" aria-label="Page summary">
            <div className="card sticky top-28 overflow-hidden !rounded-3xl">
              <div className="border-b border-line p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-brand">{group.label}</p>
                <p className="mt-2 font-display text-xl font-extrabold leading-snug">{plan.title}</p>
                <dl className="mt-5 grid gap-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Best For</dt>
                    <dd className="text-right font-semibold">{plan.audience}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Reading Time</dt>
                    <dd className="font-semibold">{minutes} Minutes</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Sections</dt>
                    <dd className="font-semibold">{toc.length}</dd>
                  </div>
                </dl>
              </div>
              {toc.length > 1 && (
                <nav aria-label="On this page" className="hidden border-b border-line p-6 lg:block">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted">On this page</p>
                  <ol className="mt-3 grid gap-2.5 text-sm">
                    {toc.map((t, i) => (
                      <li key={t} className="flex gap-2.5">
                        <span className="font-mono text-xs text-brand">{String(i + 1).padStart(2, "0")}</span>
                        <a href={`#${slugify(t)}`} className="text-ink-soft hover:text-brand">
                          {t}
                        </a>
                      </li>
                    ))}
                    {content.faqs.length > 0 && (
                      <li className="flex gap-2.5">
                        <span className="font-mono text-xs text-brand">?</span>
                        <a href="#faqs" className="text-ink-soft hover:text-brand">
                          FAQs
                        </a>
                      </li>
                    )}
                  </ol>
                </nav>
              )}
              <div className="p-6">
                <CtaLink href={content.cta.href} className="btn btn-primary w-full !rounded-full">
                  {content.cta.label} <ArrowRight size={16} />
                </CtaLink>
                {content.cta.href.startsWith("http") ? (
                  <Link href="/plans" className="btn btn-ghost mt-2.5 w-full !rounded-full">
                    Plans
                  </Link>
                ) : (
                  <a href={SITE.appUrl} rel="noopener" className="btn btn-ghost mt-2.5 w-full !rounded-full">
                    Start Free
                  </a>
                )}
                <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-muted">
                  <Shield size={15} className="mt-px shrink-0 text-success" />
                  The Free plan includes 3 scrape queries, website enrichment and CSV export.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ───────── Process ───────── */}
      {content.steps && (
        <section id={slugify(content.steps.heading)} data-theme="dark" className="surface-island section-y my-8 scroll-mt-20 md:my-12">
          <div className="container-x">
            <SectionHeading badge="Step By Step" title={content.steps.heading} subtitle={`A ${content.steps.items.length}-Step Process You Can Follow And Adapt.`} />
            <ol
              className={`mt-10 grid gap-5 sm:grid-cols-2 ${content.steps.items.length >= 5 ? "lg:grid-cols-3 xl:grid-cols-5" : content.steps.items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
            >
              {content.steps.items.map((step, i) => (
                <li key={step.title} className="card card-link relative flex flex-col items-center p-6 text-center">
                  <span className="icon-tile relative !size-14 !rounded-2xl font-display text-lg font-extrabold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-[17px] font-bold leading-snug">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* ───────── Considerations ───────── */}
      {content.considerations && (
        <section id={slugify(content.considerations.heading)} className={`surface-tint ${cut} section-y scroll-mt-20`}>
          <div className="container-x">
            <SectionHeading badge="Before You Start" title={content.considerations.heading} />
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {content.considerations.items.map((c, i) => (
                <li key={c} className="card p-6">
                  <div className="flex items-center justify-between">
                    <span className="icon-tile !size-11 !text-warm">
                      <Info size={20} />
                    </span>
                    <span className="font-mono text-sm font-bold text-muted">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">{c}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ───────── Illustrative example banner ───────── */}
      {content.example && (
        <section className="container-x pb-6 pt-12 md:pt-16" aria-label="Illustrative example">
          <div className="card grid items-center gap-8 overflow-hidden !rounded-[2rem] p-6 sm:p-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <span className="pill">
                <Sparkle size={14} /> Illustrative Example
              </span>
              <LetterHeading text={content.example.heading} as="h2" triggerOnScroll className="mt-5 text-[clamp(1.6rem,3vw,2.3rem)] font-extrabold leading-tight" />
              <span aria-hidden="true" className="heading-accent-line mt-3" />
              <p className="lead mt-5">{content.example.text}</p>
              <p className="mt-5 text-sm text-muted">A hypothetical scenario for explanation only, not a customer story or a promised result.</p>
            </div>
            <div className="hidden rounded-3xl border border-line bg-bg-alt p-4 lg:block">
              <HeroVisual variant={exampleVisual(group.visual, Boolean(photo))} seed={`${plan.path}#example`} hue={group.hue} topic={plan.title} className="h-auto w-full" />
            </div>
          </div>
        </section>
      )}

      {/* ───────── Hub topics ───────── */}
      {isHub && children.length > 0 && (
        <section className="section-y" aria-labelledby="hub-topics">
          <div className="container-x">
            <SectionHeading id="hub-topics" badge={group.label} title={`All ${children.length} ${group.label} Topics`} subtitle={group.blurb} />
            <TopicLinkGrid pages={children} />
          </div>
        </section>
      )}

      {/* ───────── FAQ ───────── */}
      {content.faqs.length > 0 && (
        <section id="faqs" className={`surface-soft ${cut} section-y scroll-mt-20`} aria-labelledby="faq-title">
          <div className="container-x">
            <SectionHeading id="faq-title" badge="FAQ" title="Frequently Asked Questions" subtitle={`Quick answers about ${plan.title}.`} />
            <div className="mx-auto mt-9 max-w-3xl">
              <Faqs items={content.faqs} showHeading={false} />
            </div>
          </div>
        </section>
      )}

      {/* ───────── Related topics ───────── */}
      {related.length > 0 && (
        <section className="section-y" aria-labelledby="related-title">
          <div className="container-x">
            <SectionHeading id="related-title" badge="Keep Exploring" title="Related Topics" subtitle="Hand-picked pages that go deeper on the ideas covered here." />
            <TopicLinkGrid pages={related} />
          </div>
        </section>
      )}

      <div className="container-x">
        <CtaBand {...content.cta} />
      </div>
    </div>
  );
}
