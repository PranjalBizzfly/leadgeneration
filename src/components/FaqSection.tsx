import type { Faq } from "@/content/types";
import { Faqs } from "./Faqs";
import { SectionHeading } from "./SectionHeading";

/** Full-width FAQ band matching the content-page FAQ section (visible list + FAQPage JSON-LD). */
export function FaqSection({ items, subtitle, className = "" }: { items: Faq[]; subtitle: string; className?: string }) {
  if (!items.length) return null;
  return (
    <section id="faqs" className={`section-y scroll-mt-20 border-y border-line bg-bg-alt ${className}`} aria-labelledby="faq-title">
      <div className="container-x">
        <SectionHeading id="faq-title" badge="FAQ" title="Frequently Asked Questions" subtitle={subtitle} />
        <div className="mx-auto mt-9 max-w-3xl">
          <Faqs items={items} showHeading={false} />
        </div>
      </div>
    </section>
  );
}
