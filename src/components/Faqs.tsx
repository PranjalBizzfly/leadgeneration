import type { Faq } from "@/content/types";
import { Plus } from "./icons";
import { JsonLd } from "./JsonLd";

export function Faqs({ items, heading = "Frequently asked questions", showHeading = true }: { items: Faq[]; heading?: string; showHeading?: boolean }) {
  if (!items.length) return null;
  return (
    <section aria-labelledby={showHeading ? "faq-heading" : undefined} aria-label={showHeading ? undefined : heading}>
      {showHeading && (
        <h2 id="faq-heading" className="text-2xl font-bold sm:text-3xl">
          {heading}
        </h2>
      )}
      <div className={`${showHeading ? "mt-6" : ""} divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface`}>
        {items.map((f) => (
          <details key={f.q} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold transition hover:text-brand [&::-webkit-details-marker]:hidden">
              <h3 className="text-[17px]">{f.q}</h3>
              <span className="grid size-8 shrink-0 place-items-center rounded-full border border-line text-muted transition group-open:rotate-45 group-open:border-brand group-open:text-brand">
                <Plus size={16} />
              </span>
            </summary>
            <p className="px-6 pb-6 text-[16px] leading-relaxed text-ink-soft">{f.a}</p>
          </details>
        ))}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
    </section>
  );
}
