import { Faqs } from "../Faqs";
import { Info, Sparkle } from "../icons";
import { LetterHeading } from "../LetterHeading";
import { ChecklistProgress } from "../page-types/ChecklistProgress";
import { Glossary } from "../page-types/Glossary";
import { SectionHeading } from "../SectionHeading";
import {
  Considerations,
  Cta,
  type Ctx,
  DocHero,
  Example,
  FaqBlock,
  Intro,
  KeyPoints,
  pad,
  ProcessStrip,
  RelatedBlock,
  SectionBody,
  SectionCard,
  sectionToc,
  slugify,
  Takeaways,
  Timeline,
  TocNav,
} from "./blocks";
import { ListFilter, PrintButton } from "./ListFilter";

/* ═══════════════════════ Guide: long-form editorial reading ═══════════════════════
   Compact editorial hero → sticky chapter list beside one readable column (intro, takeaways box,
   chapters, step-by-step, callouts and FAQ inline) → continue reading. Also the safe fallback. */
export function GuideLayout({ ctx }: { ctx: Ctx }) {
  const { content, plan, group, minutes } = ctx;
  const toc = sectionToc(content.sections);
  return (
    <div className="page-root layout-guide">
      <DocHero ctx={ctx} meta={[group.label, `${minutes} min read`, `For ${plan.audience}`]} />

      <div className="container-x section-y">
        <div className="guide-grid">
          <aside className="hidden lg:block" aria-label="Chapters">
            <div className="sticky top-28">
              <TocNav items={toc} faqs={content.faqs.length > 0} />
            </div>
          </aside>
          <article id="overview" className="min-w-0 scroll-mt-28">
            <Intro content={content} />
            <div className="guide-takeaways mt-9">
              <Takeaways items={content.highlights} plain />
            </div>

            {content.sections.map((s, i) => (
              <section key={s.heading} id={slugify(s.heading)} className="guide-chapter scroll-mt-28">
                <p className="text-xs font-bold uppercase tracking-wider text-brand">Chapter {pad(i + 1)}</p>
                <LetterHeading text={s.heading} as="h2" triggerOnScroll cursor={false} className="mt-1.5 text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold leading-tight" />
                <div className="mt-5">
                  <SectionBody s={s} keyIdea={false} size="text-[17px]" />
                </div>
                {s.bullets && (
                  <div className="mt-6">
                    <KeyPoints items={s.bullets} />
                  </div>
                )}
              </section>
            ))}

            {content.steps && (
              <section id={slugify(content.steps.heading)} className="guide-chapter scroll-mt-28">
                <p className="text-xs font-bold uppercase tracking-wider text-brand">Step By Step</p>
                <h2 className="mt-1.5 text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold leading-tight">{content.steps.heading}</h2>
                <Timeline items={content.steps.items} className="mt-7" />
              </section>
            )}

            {content.considerations && (
              <aside className="guide-callout mt-12" aria-labelledby="guide-before">
                <p id="guide-before" className="flex items-center gap-2 font-bold text-ink">
                  <Info size={18} className="text-warm" /> {content.considerations.heading}
                </p>
                <ul className="mt-4 grid gap-2.5">
                  {content.considerations.items.map((c) => (
                    <li key={c} className="text-[15.5px] leading-relaxed text-ink-soft">
                      {c}
                    </li>
                  ))}
                </ul>
              </aside>
            )}

            {content.example && (
              <aside className="guide-example mt-8" aria-labelledby="guide-example">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
                  <Sparkle size={14} /> Illustrative Example
                </p>
                <p id="guide-example" className="mt-2 text-lg font-bold text-ink">
                  {content.example.heading}
                </p>
                <p className="mt-3 text-[16px] leading-relaxed text-ink-soft">{content.example.text}</p>
                <p className="mt-3 text-xs text-muted">A hypothetical scenario for explanation only, not a customer story or a promised result.</p>
              </aside>
            )}

            {content.faqs.length > 0 && (
              <section id="faqs" className="guide-chapter scroll-mt-28" aria-labelledby="guide-faq">
                <p className="text-xs font-bold uppercase tracking-wider text-brand">FAQ</p>
                <h2 id="guide-faq" className="mt-1.5 text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold leading-tight">
                  Frequently Asked Questions
                </h2>
                <div className="mt-6">
                  <Faqs items={content.faqs} showHeading={false} />
                </div>
              </section>
            )}
          </article>
        </div>
      </div>

      <RelatedBlock ctx={ctx} title="Continue Reading" badge="Next Up" />
      <Cta ctx={ctx} />
    </div>
  );
}

/* ═══════════════════════ Glossary: fast navigation to definitions ═══════════════════════ */
export function GlossaryLayout({ ctx }: { ctx: Ctx }) {
  const { content, group, minutes } = ctx;
  const terms = content.sections.reduce((n, s) => n + (s.bullets?.length ?? 0), 0);
  return (
    <div className="page-root layout-glossary">
      <DocHero ctx={ctx} meta={[group.label, `${terms} terms`, `${minutes} min read`]} banner={false} />
      <div id="overview" className="container-x section-y scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <Intro content={content} />
          <div className="mt-8">
            <Takeaways items={content.highlights} />
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Glossary ranges">
            {content.sections.map((s) => (
              <div key={s.heading} className="card p-5">
                <h2 className="font-display text-lg font-bold">{s.heading}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div data-filter-root className="mt-10">
            <div className="glossary-tools">
              <ListFilter label="Filter glossary terms" placeholder="Filter terms, e.g. bounce or ICP" />
            </div>
            <Glossary sections={content.sections} />
          </div>
        </div>
      </div>
      <Considerations ctx={ctx} badge="Using The Terms" variant="list" />
      <FaqBlock ctx={ctx} />
      <RelatedBlock ctx={ctx} />
      <Cta ctx={ctx} />
    </div>
  );
}

/* ═══════════════════════ Checklist / worksheet: interactive tick boxes ═══════════════════════ */
export function ChecklistLayout({ ctx }: { ctx: Ctx }) {
  const { content, plan, group, minutes } = ctx;
  const total = content.sections.reduce((n, s) => n + (s.bullets?.length ?? 0), 0);
  const isWorksheet = /worksheet/i.test(plan.path);
  return (
    <div className="page-root layout-checklist">
      <DocHero ctx={ctx} meta={[isWorksheet ? "Interactive Worksheet" : "Interactive Checklist", `${total} items`, group.label, `${minutes} min read`]} banner={false} />
      <div id="overview" className="container-x section-y scroll-mt-28">
        <div className="mx-auto max-w-4xl">
          <Intro content={content} />
          <div className="mt-8">
            <Takeaways items={content.highlights} title="What You Get" />
          </div>
          {content.steps && (
            <div className="mt-10">
              <p className="text-xs font-bold uppercase tracking-wider text-brand">How To Use It</p>
              <h2 className="mt-1.5 text-[clamp(1.4rem,2.4vw,1.8rem)] font-extrabold leading-tight">{content.steps.heading}</h2>
              <div className="mt-6">
                <ProcessStrip items={content.steps.items} />
              </div>
            </div>
          )}
          <div data-checklist={plan.path} className="mt-10">
            <div className="checklist-sticky">
              <ChecklistProgress storageKey={plan.path} total={total} />
            </div>
            <div className="mt-4 flex justify-end print:hidden">
              <PrintButton />
            </div>
            {content.sections.map((s, i) => (
              <SectionCard key={s.heading} s={s} i={i} label="Section" checklist />
            ))}
          </div>
        </div>
      </div>
      <Considerations ctx={ctx} variant="list" />
      <Example ctx={ctx} />
      <FaqBlock ctx={ctx} />
      <RelatedBlock ctx={ctx} />
      <Cta ctx={ctx} />
    </div>
  );
}

/* ═══════════════════════ FAQ pages: questions first, searchable ═══════════════════════ */
export function FaqLayout({ ctx }: { ctx: Ctx }) {
  const { content, group } = ctx;
  return (
    <div className="page-root layout-faq">
      <DocHero ctx={ctx} meta={[group.label, `${content.faqs.length} questions answered`]} banner={false} />
      <div id="overview" className="container-x section-y scroll-mt-28">
        <div className="mx-auto max-w-3xl">
          <Intro content={content} />
          <div className="mt-8">
            <Takeaways items={content.highlights} title="What This Page Covers" />
          </div>
          <section id="faqs" data-filter-root className="mt-10 scroll-mt-28" aria-label="Questions and answers">
            <ListFilter label="Search the questions" placeholder="Search the questions" items="details" />
            <div className="faq-filterable mt-5">
              <Faqs items={content.faqs} showHeading={false} />
            </div>
          </section>
        </div>
      </div>
      {content.sections.length > 0 && (
        <section className="surface-soft section-y" aria-labelledby="faq-context">
          <div className="container-x max-w-5xl">
            <SectionHeading id="faq-context" badge="More Context" title="The Detail Behind The Answers" />
            {content.sections.map((s, i) => (
              <SectionCard key={s.heading} s={s} i={i} label="Topic" compact />
            ))}
          </div>
        </section>
      )}
      <Considerations ctx={ctx} variant="list" />
      <RelatedBlock ctx={ctx} />
      <Cta ctx={ctx} />
    </div>
  );
}

/* ═══════════════════════ Legal: plain document ═══════════════════════
   Readable numbered clauses with a contents list; no marketing panels. */
export function LegalLayout({ ctx }: { ctx: Ctx }) {
  const { content, minutes } = ctx;
  const toc = sectionToc(content.sections);
  return (
    <div className="page-root layout-legal">
      <DocHero ctx={ctx} meta={["Legal", `${content.sections.length} sections`, `${minutes} min read`]} banner={false} />
      <div className="container-x section-y">
        <div className="guide-grid">
          <aside className="hidden lg:block" aria-label="Contents">
            <div className="sticky top-28">
              <TocNav items={toc} faqs={content.faqs.length > 0} />
            </div>
          </aside>
          <article id="overview" className="legal-doc min-w-0 scroll-mt-28">
            <Intro content={content} />
            <div className="guide-takeaways mt-8">
              <Takeaways items={content.highlights} title="In Brief" plain />
            </div>
            {content.sections.map((s, i) => (
              <section key={s.heading} id={slugify(s.heading)} className="scroll-mt-28">
                <h2>
                  <span className="legal-n">{i + 1}.</span> {s.heading}
                </h2>
                {s.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
                {s.bullets && (
                  <ul>
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            {content.considerations && (
              <section id={slugify(content.considerations.heading)} className="scroll-mt-28">
                <h2>{content.considerations.heading}</h2>
                <ul>
                  {content.considerations.items.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </section>
            )}
            {content.faqs.length > 0 && (
              <section id="faqs" className="scroll-mt-28">
                <h2>Questions About This Page</h2>
                <div className="mt-4">
                  <Faqs items={content.faqs} showHeading={false} />
                </div>
              </section>
            )}
          </article>
        </div>
      </div>
    </div>
  );
}
