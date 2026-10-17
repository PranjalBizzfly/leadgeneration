"use client";

import { useId, useRef, useState } from "react";
import { Search } from "../icons";

/**
 * Live text filter for a server-rendered list. It hides items inside the nearest [data-filter-root]
 * whose text doesn't contain the query (items: [data-filter-item]; optional groups: [data-filter-group]
 * are hidden when all their items are). Without JavaScript the full list simply stays visible.
 */
export function ListFilter({ label, placeholder, items = "[data-filter-item]" }: { label: string; placeholder: string; items?: string }) {
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState<number | null>(null);

  const apply = (q: string) => {
    const root = ref.current?.closest<HTMLElement>("[data-filter-root]");
    if (!root) return;
    const needle = q.trim().toLowerCase();
    let count = 0;
    for (const item of root.querySelectorAll<HTMLElement>(items)) {
      const match = !needle || (item.textContent ?? "").toLowerCase().includes(needle);
      item.hidden = !match;
      if (match) count++;
    }
    for (const group of root.querySelectorAll<HTMLElement>("[data-filter-group]")) {
      group.hidden = ![...group.querySelectorAll<HTMLElement>(items)].some((i) => !i.hidden);
    }
    setShown(needle ? count : null);
  };

  return (
    <div ref={ref} className="list-filter">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <Search size={18} className="text-muted" />
      <input id={id} type="search" placeholder={placeholder} onChange={(e) => apply(e.target.value)} className="min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-muted" />
      <span role="status" aria-live="polite" className="shrink-0 text-xs font-semibold text-muted">
        {shown === null ? "" : `${shown} match${shown === 1 ? "" : "es"}`}
      </span>
    </div>
  );
}

/** Print the page (checklists and worksheets). */
export function PrintButton() {
  return (
    <button type="button" className="btn btn-ghost !rounded-full !px-5" onClick={() => window.print()}>
      Print This Page
    </button>
  );
}
