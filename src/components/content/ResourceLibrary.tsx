"use client";

import Link from "next/link";
import { useId, useState, type CSSProperties } from "react";
import { ArrowRight, Search } from "../icons";
import "./interactive.css";

export interface LibraryItem {
  path: string;
  title: string;
  desc: string;
  type: string;
}

/** Spine colour per resource type (hue on the brand ramp); guides drift through the indigo–violet range. */
const TYPE_HUE: Record<string, number> = { Checklist: 200, Glossary: 32, FAQ: 340 };
const hueFor = (item: LibraryItem, i: number) => TYPE_HUE[item.type] ?? 236 + ((i * 9) % 40);
/** Slightly uneven book heights so the shelf reads as real books (stable per position). */
const heightFor = (i: number) => 78 + ((i * 37) % 23);

/**
 * Resource library as a 3D bookshelf. Every resource is a book spine (a real link, so all stay crawlable);
 * hovering or focusing a spine pulls it off the shelf and opens its cover in the preview above.
 * Type tabs and search push non-matching books back and dim them instead of removing them, so the shelf
 * never develops gaps.
 */
export function ResourceLibrary({ items }: { items: LibraryItem[] }) {
  const id = useId();
  const [type, setType] = useState("All");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const types = ["All", ...[...new Set(items.map((i) => i.type))].sort((a, b) => items.filter((i) => i.type === b).length - items.filter((i) => i.type === a).length)];
  const needle = query.trim().toLowerCase();
  const matches = (i: LibraryItem) => (type === "All" || i.type === type) && (!needle || `${i.title} ${i.desc} ${i.type}`.toLowerCase().includes(needle));
  const shown = items.filter(matches).length;

  // Keep the preview on a matching book when the filter changes.
  const pick = (t: string, q: string) => {
    const n = q.trim().toLowerCase();
    const first = items.findIndex((i) => (t === "All" || i.type === t) && (!n || `${i.title} ${i.desc} ${i.type}`.toLowerCase().includes(n)));
    if (first >= 0) setActive(first);
  };

  const book = items[active];
  const hue = hueFor(book, active);

  return (
    <div className="library" data-no-reveal>
      <div className="library-bar">
        <div role="group" aria-label="Filter by type" className="library-types">
          {types.map((t) => {
            const count = t === "All" ? items.length : items.filter((i) => i.type === t).length;
            return (
              <button
                key={t}
                type="button"
                aria-pressed={type === t}
                onClick={() => {
                  setType(t);
                  pick(t, query);
                }}
                className="library-type"
              >
                {t === "All" ? "All" : `${t}${count > 1 && !t.endsWith("s") ? "s" : ""}`}
                <span className="library-type-n">{count}</span>
              </button>
            );
          })}
        </div>
        <div className="list-filter library-search">
          <label htmlFor={id} className="sr-only">
            Search resources
          </label>
          <Search size={18} className="text-muted" />
          <input
            id={id}
            type="search"
            placeholder="Search guides, checklists and more"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              pick(type, e.target.value);
            }}
            className="min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-muted"
          />
          <span role="status" aria-live="polite" className="shrink-0 text-xs font-semibold text-muted">
            {shown} of {items.length}
          </span>
        </div>
      </div>

      {/* Preview: the selected book's cover in 3D beside its details. */}
      <div className="shelf-preview" aria-live="polite">
        <div key={book.path} className="book-cover-wrap">
          <div className="book-cover" style={{ "--h": hue } as CSSProperties}>
            <span className="book-cover-type">{book.type}</span>
            <span className="book-cover-title">{book.title}</span>
            <span className="book-cover-n">{String(active + 1).padStart(2, "0")}</span>
          </div>
        </div>
        <div key={`${book.path}-text`} className="shelf-preview-text">
          <p className="text-xs font-bold uppercase tracking-wider text-brand">
            {book.type} · {String(active + 1).padStart(2, "0")} of {items.length}
          </p>
          <h3 className="mt-2 text-[clamp(1.4rem,2.6vw,2rem)] font-extrabold leading-tight text-ink">{book.title}</h3>
          <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-ink-soft">{book.desc}</p>
          <Link href={book.path} className="btn btn-primary mt-6 !rounded-full !px-6 !py-3">
            {book.title} <ArrowRight size={17} />
          </Link>
        </div>
      </div>

      {/* The shelf. Hover or focus a spine to preview it; click to open it. */}
      <div className="shelf">
        <ol className="shelf-row" aria-label="All resources">
          {items.map((item, i) => {
            const on = matches(item);
            return (
              <li key={item.path} className="shelf-slot">
                <Link
                  href={item.path}
                  className="book"
                  data-active={i === active ? "" : undefined}
                  data-dim={on ? undefined : ""}
                  tabIndex={on ? undefined : -1}
                  aria-hidden={on ? undefined : true}
                  onMouseEnter={() => on && setActive(i)}
                  onFocus={() => setActive(i)}
                  style={{ "--h": hueFor(item, i), "--bh": `${heightFor(i)}%`, "--i": i } as CSSProperties}
                >
                  <span className="book-n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="book-title">{item.title}</span>
                  <span className="book-dot" aria-hidden="true" />
                </Link>
              </li>
            );
          })}
        </ol>
        <div className="shelf-plank" aria-hidden="true" />
      </div>
      {shown === 0 && <p className="mt-6 text-center text-ink-soft">No resources match that search.</p>}
    </div>
  );
}
