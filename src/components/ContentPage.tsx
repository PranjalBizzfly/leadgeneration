import Image from "next/image";
import Link from "next/link";
import { heroImage } from "@/content/images";
import type { PageContent, PlanEntry } from "@/content/types";
import { GROUPS } from "@/lib/groups";
import { breadcrumbs, groupChildren, relatedPages } from "@/lib/registry";
import { SITE } from "@/lib/site";
import { Breadcrumbs } from "./Breadcrumbs";
import { CtaBand } from "./CtaBand";
import { Faqs } from "./Faqs";
import { HeroVisual } from "./HeroVisual";
import { ArrowRight, Check, FileCheck, Gauge, Info, Layers, MapPin, Send, Shield, Sparkle, Target, Users } from "./icons";
import { LeadForm } from "./LeadForm";
import { SectionHeading } from "./SectionHeading";
import { TopicLinkGrid } from "./TopicLinkCard";

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const SECTION_ICONS = [Layers, Target, Gauge, FileCheck, Send, Shield, Users, MapPin];
const GROUP_ICON = { core: Sparkle, services: Layers, strategies: Target, industries: MapPin, b2b: Users, b2c: Users, "lead-capture": FileCheck, qualification: Gauge, tools: Gauge, resources: FileCheck, compare: Shield } as const;

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

export function ContentPage({ content, plan }: { content: PageContent; plan: PlanEntry }) {
  const group = GROUPS[plan.group];
  const GroupIcon = GROUP_ICON[plan.group];
  const isHub = group.hub === plan.path;
  const children = isHub ? groupChildren(plan.group) : [];
  const related = relatedPages(plan.path);
  const minutes = readingMinutes(content);
  const toc = content.sections.map((s) => s.heading);
  const photo = heroImage(plan.path);

  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden="true" className="bg-grid absolute inset-0" />
        <div aria-hidden="true" className="absolute -top-48 right-[-10%] size-[42rem] rounded-full blur-3xl" style={{ background: `oklch(0.6 0.17 ${group.hue} / 0.18)` }} />
        <div aria-hidden="true" className="absolute -bottom-56 left-[-10%] size-[32rem] rounded-full bg-[var(--glow-2)] blur-3xl" />
        <div className="container-x relative grid items-center gap-12 py-12 md:py-16 lg:min-h-[34rem] lg:grid-cols-[1.2fr_1fr] lg:py-20">
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
            <h1 className="mt-6 text-[clamp(2.3rem,5vw,4rem)] font-extrabold leading-[1.05]">{content.h1}</h1>
            <p className="mt-6 max-w-2xl text-[clamp(1.1rem,1.8vw,1.3rem)] leading-relaxed text-ink-soft">{content.metaDescription}</p>
            <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Page facts">
              <li className="chip">
                <GroupIcon size={16} className="text-brand" /> {group.label}
              </li>
              <li className="chip">
                <Users size={16} className="text-brand" /> {plan.audience}
              </li>
              <li className="chip">
                <FileCheck size={16} className="text-brand" /> {minutes} min read
              </li>
              {isHub && (
                <li className="chip">
                  <Layers size={16} className="text-brand" /> {children.length} topics
                </li>
              )}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <CtaLink href={content.cta.href} className="btn btn-primary !rounded-full !px-7 !py-3.5 text-base">
                {content.cta.label} <ArrowRight size={18} />
              </CtaLink>
              <a href={content.form ? "#form" : "#overview"} className="btn btn-ghost !rounded-full !px-7 !py-3.5 text-base">
                {content.form ? "Go to the form" : "Read the guide"}
              </a>
            </div>
          </div>
          {/* Framed visual, styled like an app window */}
          <div className={`relative mx-auto w-full max-w-md lg:max-w-none ${photo ? "" : "hidden sm:block"}`}>
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
              {photo ? (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={1600}
                  height={1000}
                  preload
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 28rem, 100vw"
                  className="block h-auto w-full"
                />
              ) : (
                <div className="bg-bg-alt p-4">
                  <HeroVisual variant={group.visual} seed={plan.path} hue={group.hue} className="h-auto w-full" />
                </div>
              )}
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

      {/* ───────── Overview + article with sticky summary ───────── */}
      <section id="overview" className="section-y scroll-mt-24">
        <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,1fr)_23rem] lg:gap-16">
          <article className="min-w-0">
            <h2 className="text-[clamp(1.9rem,3.4vw,2.6rem)] font-extrabold">Overview</h2>
            <div className="mt-6 grid gap-5">
              {content.intro.map((p) => (
                <p key={p.slice(0, 40)} className="lead">
                  {p}
                </p>
              ))}
            </div>

            <h3 className="mt-12 text-xl font-bold">Key takeaways</h3>
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
              <div id="form" className="mt-14 scroll-mt-28">
                <LeadForm kind={content.form} />
              </div>
            )}

            {/* At-a-glance index: every part with a one-line summary. */}
            {content.sections.length > 1 && (
              <div className="mt-14 overflow-hidden rounded-3xl border border-line">
                <div className="flex items-center justify-between gap-4 border-b border-line bg-surface-2 px-6 py-4">
                  <h3 className="font-bold">At a glance</h3>
                  <span className="text-sm text-muted">{content.sections.length} parts</span>
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
                <section key={s.heading} id={slugify(s.heading)} className="mt-10 scroll-mt-28 overflow-hidden rounded-3xl border border-line bg-surface shadow-card">
                  <header className="flex items-center gap-4 border-b border-line bg-surface-2 px-6 py-5 sm:px-8">
                    <span className="icon-tile">
                      <Icon size={22} />
                    </span>
                    <div className="min-w-0">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand">Part {String(i + 1).padStart(2, "0")}</span>
                      <h2 className="mt-0.5 text-[clamp(1.35rem,2.4vw,1.75rem)] font-extrabold leading-tight">{s.heading}</h2>
                    </div>
                  </header>
                  <div className="grid gap-6 p-6 sm:p-8">
                    {keyIdea && (
                      <div className="rounded-2xl border-l-4 border-brand bg-brand-soft/60 px-5 py-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-brand">Key idea</p>
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
                        <p className="text-xs font-bold uppercase tracking-wider text-muted">Key points</p>
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
                    <dt className="text-muted">Best for</dt>
                    <dd className="text-right font-semibold">{plan.audience}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">Reading time</dt>
                    <dd className="font-semibold">{minutes} minutes</dd>
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
                    Compare plans
                  </Link>
                ) : (
                  <a href={SITE.appUrl} rel="noopener" className="btn btn-ghost mt-2.5 w-full !rounded-full">
                    Start free
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
        <section id={slugify(content.steps.heading)} className="section-y scroll-mt-20 border-y border-line bg-bg-alt">
          <div className="container-x">
            <SectionHeading badge="Step by step" title={content.steps.heading} subtitle={`A ${content.steps.items.length}-step process you can follow and adapt.`} />
            <ol
              className={`mt-14 grid gap-5 sm:grid-cols-2 ${content.steps.items.length >= 5 ? "lg:grid-cols-3 xl:grid-cols-5" : content.steps.items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
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
        <section id={slugify(content.considerations.heading)} className="section-y scroll-mt-20">
          <div className="container-x">
            <SectionHeading badge="Before you start" title={content.considerations.heading} />
            <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
        <section className="container-x pb-6" aria-label="Illustrative example">
          <div className="card grid items-center gap-8 overflow-hidden !rounded-[2rem] p-6 sm:p-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <span className="pill">
                <Sparkle size={14} /> Illustrative example
              </span>
              <h2 className="mt-5 text-[clamp(1.6rem,3vw,2.3rem)] font-extrabold leading-tight">{content.example.heading}</h2>
              <p className="lead mt-5">{content.example.text}</p>
              <p className="mt-5 text-sm text-muted">A hypothetical scenario for explanation only — not a customer story or a promised result.</p>
            </div>
            <div className="hidden rounded-3xl border border-line bg-bg-alt p-4 lg:block">
              <HeroVisual variant={group.visual === "dashboard" ? "pipeline" : "dashboard"} seed={`${plan.path}#example`} hue={group.hue} className="h-auto w-full" />
            </div>
          </div>
        </section>
      )}

      {/* ───────── Hub topics ───────── */}
      {isHub && children.length > 0 && (
        <section className="section-y" aria-labelledby="hub-topics">
          <div className="container-x">
            <SectionHeading id="hub-topics" badge={group.label} title={`All ${children.length} ${group.label.toLowerCase()} topics`} subtitle={group.blurb} />
            <TopicLinkGrid pages={children} />
          </div>
        </section>
      )}

      {/* ───────── FAQ ───────── */}
      {content.faqs.length > 0 && (
        <section id="faqs" className="section-y scroll-mt-20 border-y border-line bg-bg-alt" aria-labelledby="faq-title">
          <div className="container-x">
            <SectionHeading id="faq-title" badge="FAQ" title="Frequently asked questions" subtitle={`Quick answers about ${plan.title.toLowerCase()}.`} />
            <div className="mx-auto mt-12 max-w-3xl">
              <Faqs items={content.faqs} showHeading={false} />
            </div>
          </div>
        </section>
      )}

      {/* ───────── Related topics ───────── */}
      {related.length > 0 && (
        <section className="section-y" aria-labelledby="related-title">
          <div className="container-x">
            <SectionHeading id="related-title" badge="Keep exploring" title="Related topics" subtitle="Hand-picked pages that go deeper on the ideas covered here." />
            <TopicLinkGrid pages={related} />
          </div>
        </section>
      )}

      <div className="container-x">
        <CtaBand {...content.cta} />
      </div>
    </>
  );
}
