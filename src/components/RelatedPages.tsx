import Link from "next/link";
import type { PlanEntry } from "@/content/types";
import { GROUPS } from "@/lib/groups";
import { describe } from "@/lib/registry";
import { ArrowRight } from "./icons";

export function PageCard({ page }: { page: PlanEntry }) {
  return (
    <Link href={page.path} className="card card-link group flex h-full flex-col p-5">
      <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: `oklch(0.6 0.15 ${GROUPS[page.group].hue})` }}>
        {GROUPS[page.group].label}
      </span>
      <span className="mt-2 font-display text-[17px] font-bold leading-snug text-ink">{page.title}</span>
      <span className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{describe(page.path)}</span>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
        Read more <ArrowRight size={15} className="transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export function RelatedPages({ pages, heading = "Related reading" }: { pages: PlanEntry[]; heading?: string }) {
  if (!pages.length) return null;
  return (
    <section aria-labelledby="related-heading">
      <h2 id="related-heading" className="text-2xl font-bold sm:text-3xl">
        {heading}
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pages.map((p) => (
          <PageCard key={p.path} page={p} />
        ))}
      </div>
    </section>
  );
}
