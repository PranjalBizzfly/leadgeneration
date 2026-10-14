import Link from "next/link";
import { titleCase } from "@/lib/title-case";
import type { PlanEntry } from "@/content/types";
import { describe } from "@/lib/registry";
import { ChevronRight } from "./icons";

/** Compact "module" style link card: title, one-line description, chevron. */
export function TopicLinkCard({ page }: { page: PlanEntry }) {
  return (
    <Link href={page.path} className="card card-link group flex items-center gap-4 px-5 py-4">
      <span className="min-w-0 flex-1">
        <span className="block font-display text-[16px] font-bold text-ink">{page.title}</span>
        <span className="mt-1 line-clamp-1 block text-sm text-muted">{titleCase(describe(page.path))}</span>
      </span>
      <ChevronRight size={18} className="shrink-0 text-muted transition group-hover:translate-x-1 group-hover:text-brand" />
    </Link>
  );
}

export function TopicLinkGrid({ pages }: { pages: PlanEntry[] }) {
  return (
    <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {pages.map((p) => (
        <TopicLinkCard key={p.path} page={p} />
      ))}
    </div>
  );
}
