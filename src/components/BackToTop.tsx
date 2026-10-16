"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "./icons";

/**
 * Floating top/bottom scroll controls. They appear only after the visitor has scrolled a little,
 * so they never cover the hero. On phones only the smaller "top" button shows, tucked into the corner
 * above the safe area; "bottom" is disabled when there is nowhere further to go.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [canDown, setCanDown] = useState(false);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(window.scrollY > 480);
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
    "grid size-10 place-items-center rounded-full border border-line bg-surface/90 text-ink shadow-[0_4px_14px_rgba(15,18,34,0.12)] backdrop-blur transition hover:border-brand hover:text-brand disabled:cursor-default disabled:opacity-50 disabled:hover:border-line disabled:hover:text-ink sm:size-12";

  return (
    <div
      className={`fixed bottom-[max(1rem,env(safe-area-inset-bottom))] in-data-sticky-cta:bottom-[calc(5rem+env(safe-area-inset-bottom))] md:in-data-sticky-cta:bottom-[max(1rem,env(safe-area-inset-bottom))] right-3 z-40 flex flex-col gap-2.5 transition-all duration-300 motion-reduce:transition-none sm:right-5 sm:gap-3 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <button type="button" onClick={() => window.scrollTo({ top: 0 })} aria-label="Scroll to top" tabIndex={visible ? 0 : -1} className={base}>
        <ChevronUp size={20} strokeWidth={1.6} />
      </button>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight })}
        aria-label="Scroll to bottom"
        tabIndex={visible ? 0 : -1}
        disabled={!canDown}
        className={`${base} !hidden sm:!grid`}
      >
        <ChevronDown size={20} strokeWidth={1.6} />
      </button>
    </div>
  );
}
