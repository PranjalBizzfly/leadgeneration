"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Search } from "@/components/icons";

interface Summary {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readMinutes: number;
}

export function BlogExplorer({ posts }: { posts: Summary[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(posts.map((p) => p.category))];
  const q = query.trim().toLowerCase();
  const shown = posts.filter((p) => (category === "All" || p.category === category) && (!q || `${p.title} ${p.excerpt} ${p.category}`.toLowerCase().includes(q)));

  return (
    <>
      <div className="card flex flex-col gap-4 !rounded-3xl p-5 md:flex-row md:items-center">
        <label className="flex h-12 flex-1 items-center gap-3 rounded-2xl border border-line bg-bg px-4 focus-within:border-brand">
          <Search size={18} className="text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles…"
            aria-label="Search articles"
            className="h-full flex-1 bg-transparent text-[16px] outline-none placeholder:text-muted"
          />
        </label>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${category === c ? "border-transparent bg-grad" : "border-line bg-surface text-ink-soft hover:border-brand"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-8 text-sm text-muted" aria-live="polite">
        {shown.length} article{shown.length === 1 ? "" : "s"}
      </p>
      {shown.length === 0 ? (
        <p className="mt-6 text-center text-lg text-muted">No articles match your search.</p>
      ) : (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card card-link group flex flex-col p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="pill !text-[11px]">{p.category}</span>
                <span className="text-xs font-semibold text-muted">{p.readMinutes} min read</span>
              </div>
              <h2 className="mt-5 text-xl font-extrabold leading-snug">{p.title}</h2>
              <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{p.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                Read Article <ArrowRight size={15} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
