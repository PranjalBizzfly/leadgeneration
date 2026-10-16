"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Search } from "@/components/icons";
import { loadSearchIndex, runSearch, type SearchItem } from "@/lib/search";

export function SearchResults() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState(params.get("q") ?? "");
  const [items, setItems] = useState<SearchItem[] | null>(null);

  useEffect(() => {
    loadSearchIndex().then(setItems);
  }, []);

  const groups = items ? [...new Set(items.map((i) => i.group))] : [];
  const [group, setGroup] = useState("All");
  const results = items ? runSearch(items, query, 200).filter((r) => group === "All" || r.group === group) : [];

  function update(q: string) {
    setQuery(q);
    router.replace(q ? `${pathname}?q=${encodeURIComponent(q)}` : pathname, { scroll: false });
  }

  return (
    <div className="mt-8">
      <label className="flex h-14 items-center gap-3 rounded-2xl border border-line bg-surface px-4 shadow-card focus-within:border-brand">
        <Search size={20} className="text-muted" />
        <input
          value={query}
          onChange={(e) => update(e.target.value)}
          autoFocus
          placeholder="E.g. Cold Email, Dental Clinics, Lead Scoring"
          className="flex-1 bg-transparent text-lg outline-none placeholder:text-muted"
          aria-label="Search query"
        />
      </label>
      {groups.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {["All", ...groups].map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => setGroup(g)}
              aria-pressed={group === g}
              className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${group === g ? "border-transparent bg-grad" : "border-line bg-surface text-ink-soft hover:border-brand"}`}
            >
              {g}
            </button>
          ))}
        </div>
      )}
      <div className="mt-8" aria-live="polite">
        {items === null && <p className="text-muted">Loading the page index…</p>}
        {items && query && <p className="text-sm text-muted">{results.length} Result{results.length === 1 ? "" : "s"} For “{query}”</p>}
        {items && !query && <p className="text-muted">Start typing to search {items.length} Pages.</p>}
        <ul className="mt-4 grid gap-3">
          {results.map((r) => (
            <li key={r.path}>
              <Link href={r.path} className="card card-link block p-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand">{r.group}</span>
                <span className="mt-1 block font-display text-lg font-bold">{r.title}</span>
                <span className="mt-1 block text-sm text-muted">{r.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
