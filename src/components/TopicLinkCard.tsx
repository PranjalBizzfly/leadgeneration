import Link from "next/link";
import type { PlanEntry } from "@/content/types";
import { describe } from "@/lib/registry";
import { ChevronRight } from "./icons";

/** Compact "module" style link card: title, one-line description, chevron. */
export function TopicLinkCard({ page }: { page: PlanEntry }) {
  return (
    <Link href={page.path} className="card card-link group flex items-center gap-4 px-5 py-4">
      <span className="min-w-0 flex-1">
        <span className="block font-display text-[16px] font-bold text-ink">{page.title}</span>
        <span className="mt-1 line-clamp-1 block text-sm text-muted">{describe(page.path)}</span>
      </span>
      <ChevronRight size={18} className="shrink-0 text-muted transition group-hover:translate-x-1 group-hover:text-brand" />
    </Link>
  );
}

/** Large "start here" tile that leads a bento grid: full description and a clear call to read. */
function FeatureTopicCard({ page }: { page: PlanEntry }) {
  return (
    <Link href={page.path} className="card card-link card-accent group flex flex-col justify-between gap-6 p-7 sm:col-span-2 lg:row-span-2">
      <span>
        <span className="pill">Start Here</span>
        <span className="mt-5 block font-display text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-tight text-ink">{page.title}</span>
        <span className="mt-3 block max-w-xl leading-relaxed text-ink-soft">{describe(page.path)}</span>
      </span>
      <span className="btn-text">
        Read The Guide <ChevronRight size={18} />
      </span>
    </Link>
  );
}

export function TopicLinkGrid({ pages, bento = false }: { pages: PlanEntry[]; bento?: boolean }) {
  // Bento: the first topic becomes a large tile spanning two columns and two rows on wide screens.
  const [first, ...rest] = pages;
  return (
    <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {bento && first ? (
        <>
          <FeatureTopicCard page={first} />
          {rest.map((p) => (
            <TopicLinkCard key={p.path} page={p} />
          ))}
        </>
      ) : (
        pages.map((p) => <TopicLinkCard key={p.path} page={p} />)
      )}
    </div>
  );
}
