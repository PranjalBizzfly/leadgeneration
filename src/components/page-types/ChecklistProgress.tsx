"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Progress bar for checklist and worksheet pages. The checkboxes are server-rendered (unchecked) inside
 * the nearest [data-checklist] wrapper; after mount this restores saved ticks from localStorage and keeps
 * them in sync. Nothing changes size on hydration, so there is no layout shift.
 */
export function ChecklistProgress({ storageKey, total }: { storageKey: string; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(0);
  const key = `leadgen-checklist:${storageKey}`;

  useEffect(() => {
    const root = ref.current?.closest<HTMLElement>("[data-checklist]");
    if (!root) return;
    const boxes = () => [...root.querySelectorAll<HTMLInputElement>("input[data-check]")];

    let saved: string[] = [];
    try {
      saved = JSON.parse(localStorage.getItem(key) ?? "[]");
    } catch {}
    for (const b of boxes()) b.checked = saved.includes(b.dataset.check ?? "");
    const sync = () => {
      const ids = boxes().filter((b) => b.checked).map((b) => b.dataset.check ?? "");
      setDone(ids.length);
      try {
        localStorage.setItem(key, JSON.stringify(ids));
      } catch {}
    };
    setDone(boxes().filter((b) => b.checked).length);
    root.addEventListener("change", sync);
    const onClear = () => {
      for (const b of boxes()) b.checked = false;
      sync();
    };
    root.addEventListener("checklist-clear", onClear);
    return () => {
      root.removeEventListener("change", sync);
      root.removeEventListener("checklist-clear", onClear);
    };
  }, [key]);

  const pct = total ? Math.round((done / total) * 100) : 0;

  return (
    <div ref={ref} className="checklist-bar">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-bold" role="status" aria-live="polite">
          Progress: {done} of {total}
        </p>
        <button
          type="button"
          className="btn-text"
          onClick={(e) => e.currentTarget.closest("[data-checklist]")?.dispatchEvent(new Event("checklist-clear"))}
        >
          Clear Progress
        </button>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-line" aria-hidden="true">
        <div className="h-full rounded-full bg-grad transition-[width] duration-300 motion-reduce:transition-none" style={{ width: `${pct}%` }} />
      </div>
      <p className="mt-2 text-xs text-muted">Your ticks are saved only in this browser.</p>
    </div>
  );
}
