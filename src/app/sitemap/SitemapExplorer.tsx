"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Search } from "@/components/icons";

export interface SitemapGroup {
  key: string;
  label: string;
  pages: { path: string; title: string }[];
}

/** Filterable, collapsible directory of every live page. */
export function SitemapExplorer({ groups }: { groups: SitemapGroup[] }) {
  const total = groups.reduce((n, g) => n + g.pages.length, 0);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());

  const q = query.trim().toLowerCase();
  const visible = groups
    .filter((g) => filter === "all" || g.key === filter)
    .map((g) => ({ ...g, pages: q ? g.pages.filter((p) => p.title.toLowerCase().includes(q) || p.path.includes(q)) : g.pages }))
    .filter((g) => g.pages.length > 0);
  const shown = visible.reduce((n, g) => n + g.pages.length, 0);
  const allCollapsed = visible.length > 0 && visible.every((g) => collapsed.has(g.key));

  function toggle(key: string) {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  const chip = (active: boolean) =>
    `inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[15px] font-semibold transition ${
      active ? "border-brand bg-brand-soft text-ink ring-2 ring-brand/40" : "border-line bg-surface text-ink-soft hover:border-brand hover:text-ink"
    }`;

  return (
    <>
      <div className="card mt-10 !rounded-3xl p-5 sm:p-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <label className="flex h-13 flex-1 items-center gap-3 rounded-2xl border border-line bg-bg px-4 focus-within:border-brand md:max-w-xl">
            <Search size={18} className="text-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search pages…"
              aria-label="Search pages"
              className="h-12 flex-1 bg-transparent text-[16px] outline-none placeholder:text-muted"
            />
          </label>
          <div className="flex items-center gap-6 md:ml-4">
            <p className="text-sm font-bold uppercase tracking-[0.12em]" aria-live="polite">
              {shown === total ? total : `${shown} of ${total}`} pages
            </p>
            <button
              type="button"
              onClick={() => setCollapsed(allCollapsed ? new Set() : new Set(visible.map((g) => g.key)))}
              className="border-b-2 border-brand pb-0.5 text-sm font-bold text-ink transition hover:text-brand"
            >
              {allCollapsed ? "Expand all" : "Collapse all"}
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2.5" role="group" aria-label="Filter by category">
          <button type="button" onClick={() => setFilter("all")} aria-pressed={filter === "all"} className={chip(filter === "all")}>
            All <span className="text-sm font-medium text-muted">{total}</span>
          </button>
          {groups.map((g) => (
            <button key={g.key} type="button" onClick={() => setFilter(g.key)} aria-pressed={filter === g.key} className={chip(filter === g.key)}>
              {g.label} <span className="text-sm font-medium text-muted">{g.pages.length}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-14">
        {visible.length === 0 && <p className="text-center text-lg text-muted">No pages match “{query}”.</p>}
        {visible.map((g) => {
          const isCollapsed = collapsed.has(g.key);
          return (
            <section key={g.key} aria-labelledby={`sm-${g.key}`}>
              <div className="flex items-end justify-between gap-4 border-b border-line pb-5">
                <h2 id={`sm-${g.key}`} className="text-[clamp(1.75rem,3.6vw,2.6rem)] font-extrabold uppercase leading-none tracking-tight">
                  {g.label}
                </h2>
                <button
                  type="button"
                  onClick={() => toggle(g.key)}
                  aria-expanded={!isCollapsed}
                  aria-controls={`sm-list-${g.key}`}
                  className="flex shrink-0 items-center gap-1.5 text-sm font-bold uppercase tracking-[0.12em] text-ink-soft transition hover:text-brand"
                >
                  {g.pages.length} pages <ChevronDown size={17} className={`transition ${isCollapsed ? "-rotate-90" : ""}`} />
                </button>
              </div>
              {!isCollapsed && (
                <ul id={`sm-list-${g.key}`} className="mt-7 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
                  {g.pages.map((p) => (
                    <li key={p.path}>
                      <Link href={p.path} className="text-[17px] text-ink transition hover:text-brand">
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>
    </>
  );
}
