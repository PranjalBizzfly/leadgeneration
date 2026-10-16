"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { loadSearchIndex, runSearch, type SearchItem } from "@/lib/search";
import { ArrowRight, Search } from "./icons";

/** Shown before the visitor types anything. */
const START_HERE: { title: string; path: string; group: string }[] = [
  { title: "Platform Overview", path: "/platform-overview", group: "Company" },
  { title: "Services", path: "/services", group: "Platform Services" },
  { title: "How It Works", path: "/how-it-works", group: "Company" },
  { title: "Plans", path: "/plans", group: "Company" },
  { title: "Resources", path: "/resources", group: "Resources" },
];

const GridIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
    <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
  </svg>
);

export function SearchDialog({ total }: { total: number }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [items, setItems] = useState<SearchItem[]>([]);
  const [active, setActive] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = query.trim() ? runSearch(items, query, 8) : [];
  const list: { title: string; path: string; group: string }[] = query.trim() ? results : START_HERE;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open && !d.open) {
      d.showModal();
      loadSearchIndex().then(setItems);
      requestAnimationFrame(() => inputRef.current?.focus());
    } else if (!open && d.open) d.close();
  }, [open]);

  function close() {
    setOpen(false);
    setQuery("");
    setActive(0);
  }

  function go(path: string) {
    close();
    router.push(path);
  }

  function onInputKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, list.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (list[active]) go(list[active].path);
      else if (query.trim()) go(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="grid size-10 place-items-center rounded-xl border border-line bg-surface text-ink-soft transition hover:border-brand hover:text-brand"
        aria-label="Search the site (Ctrl+K)"
        title="Search (Ctrl+K)"
      >
        <Search size={18} />
      </button>

      <dialog
        ref={dialogRef}
        onClose={close}
        onClick={(e) => e.target === dialogRef.current && close()}
        aria-label="Site search"
        className="m-auto mt-[12vh] w-[min(40rem,calc(100vw-2rem))] overflow-hidden rounded-3xl border border-line bg-surface p-0 text-ink shadow-lift backdrop:bg-black/60 backdrop:backdrop-blur-md"
      >
        <div className="flex items-center gap-3 border-b border-line px-5 py-4">
          <Search size={20} className="shrink-0 text-ink-soft" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onInputKey}
            placeholder="Search Features, Solutions, Guides…"
            className="h-11 min-w-0 flex-1 rounded-xl border border-brand/60 bg-bg px-3.5 text-[17px] outline-none ring-brand-soft transition placeholder:text-muted focus:border-brand focus:ring-4"
            aria-label="Search query"
            role="combobox"
            aria-expanded={list.length > 0}
            aria-controls="search-results"
          />
          <button type="button" onClick={close} className="shrink-0 rounded-lg border border-line px-2.5 py-1.5 text-xs font-semibold text-ink-soft hover:text-ink" aria-label="Close search">
            Esc
          </button>
        </div>

        <div className="px-3 pb-2 pt-4">
          <p className="px-3 text-xs font-bold uppercase tracking-wider text-brand">{query.trim() ? `Results For “${query.trim()}”` : "Start Here"}</p>
          <ul id="search-results" role="listbox" className="mt-2 max-h-[50vh] overflow-y-auto">
            {query.trim() && results.length === 0 && (
              <li className="px-3 py-8 text-center text-sm text-muted">No pages match “{query}”. Try a broader term.</li>
            )}
            {list.map((r, i) => (
              <li key={r.path} role="option" aria-selected={i === active}>
                <Link
                  href={r.path}
                  onClick={close}
                  onMouseEnter={() => setActive(i)}
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 transition ${i === active ? "bg-brand-soft text-brand" : "text-ink"}`}
                >
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[16px] font-semibold">{r.title}</span>
                    {query.trim() && <span className="block truncate text-xs text-muted">{r.group}</span>}
                  </span>
                  <ArrowRight size={17} className="shrink-0 text-brand" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="px-3 pb-2 pt-3 text-sm text-muted">Type to search every page on the site. Use ↑ ↓ to move, Enter to open.</p>
        </div>

        <Link href="/sitemap" onClick={close} className="group flex items-center gap-3 border-t border-line bg-surface-2 px-6 py-4 transition hover:bg-brand-soft">
          <span className="text-brand">
            <GridIcon />
          </span>
          <span className="flex-1 text-[17px] font-bold">Sitemap</span>
          <span className="text-sm text-muted">{items.length || total} Pages</span>
          <ArrowRight size={17} className="text-brand transition group-hover:translate-x-1" />
        </Link>
      </dialog>
    </>
  );
}
