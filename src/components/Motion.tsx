"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** What animates in as it scrolls into view. Cards and list items get a 3D flip-up. */
const REVEAL = [
  "main h1",
  "main h2",
  "main h3",
  "main .lead",
  "main section p:not(.card p):not(.pill)",
  "main .pill",
  "main .card",

  "main ol > li",
  "main [role=tablist]",
  "main blockquote",
].join(",");

// Scroll reveal setup, called once the page is hydrated. Returns its cleanup.
function setupReveals() {
  const els = [...document.querySelectorAll<HTMLElement>(REVEAL)].filter(
    // Skip anything already on screen (no flash on load) and the 3D hero's own UI.
    // Also skip elements that aren't rendered at this screen size (they'd never "arrive").
    (el) => el.getClientRects().length > 0 && el.getBoundingClientRect().top > window.innerHeight * 0.92 && !el.closest("[aria-roledescription], [aria-hidden=true], details"),
  );
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add("rv-in");
        io.unobserve(e.target);
      }
    },
    { rootMargin: "0px", threshold: 0.01 },
  );
  // Each top-level section gets its own pair of reveal styles (for cards, and for text), so the
  // page doesn't animate the same way all the way down.
  const STYLES: [card: string, text: string][] = [
    ["rv-3d", "rv-up"],
    ["rv-zoom", "rv-left"],
    ["rv-flipy", "rv-up"],
    ["rv-left", "rv-right"],
    ["rv-3d", "rv-zoom"],
    ["rv-right", "rv-left"],
  ];
  const sections = [...document.querySelectorAll("main > div > section")];
  for (const el of els) {
    // Stagger siblings: the nth item in a group waits a little longer.
    const i = el.parentElement ? [...el.parentElement.children].indexOf(el) : 0;
    el.style.setProperty("--rv-d", `${Math.min(i, 8) * 70}ms`);
    const s = sections.findIndex((sec) => sec.contains(el));
    const [card, text] = STYLES[Math.max(0, s) % STYLES.length];
    const isHeading = el.matches("h1, h2, h3, .h-section");
    const isCard = el.matches(".card, ol > li");
    el.classList.add("rv", isHeading ? "rv-heading" : isCard ? card : text);
    io.observe(el);
  }
  return () => {
    io.disconnect();
    for (const el of els) el.classList.remove("rv", "rv-3d", "rv-up", "rv-left", "rv-right", "rv-zoom", "rv-flipy", "rv-heading", "rv-in");
  };
}

/**
 * Site-wide motion: staggered scroll reveals, 3D card tilt with a cursor spotlight, magnetic buttons and
 * a scroll-aware header. Pure progressive enhancement: everything is visible without JS, and nothing
 * runs for visitors who prefer reduced motion.
 */
export function Motion() {
  const pathname = usePathname();

  // Scroll reveals, re-armed on every page.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Wait until React has hydrated every target (streamed/Suspense parts hydrate later): changing
    // classes or styles on not-yet-hydrated nodes causes a hydration attribute mismatch.
    let cleanup: (() => void) | undefined;
    let tries = 0;
    let raf = 0;
    const wait = () => {
      const pending = [...document.querySelectorAll<HTMLElement>(REVEAL)].some((el) => !Object.keys(el).some((k) => k.startsWith("__reactFiber")));
      if (pending && ++tries < 120) raf = requestAnimationFrame(wait);
      else cleanup = setupReveals();
    };
    raf = requestAnimationFrame(wait);
    return () => {
      cancelAnimationFrame(raf);
      cleanup?.();
    };
  }, [pathname]);

  // Count-up numbers: every number inside a [data-count] element counts up from 0 when it comes into
  // view (ranges like "0–100" count up as a range). The final text is the server-rendered value.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = [...document.querySelectorAll<HTMLElement>("[data-count]")];
    const frames: number[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          io.unobserve(e.target);
          const el = e.target as HTMLElement;
          const final = el.dataset.count ?? el.textContent ?? "";
          const start = performance.now();
          const dur = 1400;
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = final.replace(/\d+/g, (n) => String(Math.round(Number(n) * eased)));
            if (p < 1) frames.push(requestAnimationFrame(tick));
          };
          frames.push(requestAnimationFrame(tick));
          el.closest(".card")?.querySelectorAll(".icon-tile").forEach((t, i) => {
            (t as HTMLElement).style.animation = `icon-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 90}ms both`;
          });
        }
      },
      { threshold: 0.6 },
    );
    els.forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      frames.forEach(cancelAnimationFrame);
      els.forEach((el) => (el.textContent = el.dataset.count ?? el.textContent));
    };
  }, [pathname]);

  // 3D tilt + spotlight on cards, magnetic primary buttons, header state. One delegated listener.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce), (hover: none)").matches) return;
    let tilted: HTMLElement | null = null;
    let pulled: HTMLElement | null = null;
    const reset = (el: HTMLElement | null) => {
      if (!el) return;
      el.style.removeProperty("--rx");
      el.style.removeProperty("--ry");
      el.style.removeProperty("--tx");
      el.style.removeProperty("--ty");
    };
    const onMove = (e: PointerEvent) => {
      const t = e.target as Element;
      const card = t.closest<HTMLElement>(".card-link");
      if (card !== tilted) reset(tilted);
      tilted = card;
      if (card) {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        card.style.setProperty("--rx", `${(0.5 - y) * 7}deg`);
        card.style.setProperty("--ry", `${(x - 0.5) * 9}deg`);
        card.style.setProperty("--mx", `${x * 100}%`);
        card.style.setProperty("--my", `${y * 100}%`);
      }
      const btn = t.closest<HTMLElement>(".btn-primary");
      if (btn !== pulled) reset(pulled);
      pulled = btn;
      if (btn) {
        const r = btn.getBoundingClientRect();
        btn.style.setProperty("--tx", `${((e.clientX - r.left) / r.width - 0.5) * 8}px`);
        btn.style.setProperty("--ty", `${((e.clientY - r.top) / r.height - 0.5) * 6}px`);
      }
    };
    const onLeave = () => {
      reset(tilted);
      reset(pulled);
      tilted = pulled = null;
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  // Header shrinks and gains a stronger blur once you scroll.
  useEffect(() => {
    const onScroll = () => document.documentElement.toggleAttribute("data-scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div aria-hidden="true" className="scroll-progress" />;
}
