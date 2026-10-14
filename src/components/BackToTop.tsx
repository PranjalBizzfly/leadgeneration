"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "./icons";

/** Floating top/bottom scroll controls, always shown; a button is disabled when there is nowhere to go. */
export function BackToTop() {
  const [canUp, setCanUp] = useState(false);
  const [canDown, setCanDown] = useState(false);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setCanUp(window.scrollY > 40);
      setCanDown(max - window.scrollY > 40);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const base =
    "grid size-12 place-items-center rounded-full border border-line bg-surface text-ink shadow-[0_4px_14px_rgba(15,18,34,0.08)] transition hover:border-brand hover:text-brand disabled:cursor-default disabled:opacity-60 disabled:hover:border-line disabled:hover:text-ink";

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <button type="button" onClick={() => window.scrollTo({ top: 0 })} aria-label="Scroll to top" disabled={!canUp} className={base}>
        <ChevronUp size={20} strokeWidth={1.6} />
      </button>
      <button type="button" onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight })} aria-label="Scroll to bottom" disabled={!canDown} className={base}>
        <ChevronDown size={20} strokeWidth={1.6} />
      </button>
    </div>
  );
}
