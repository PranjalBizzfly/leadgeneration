"use client";

import { useEffect, useRef } from "react";

/**
 * Highlights the "On this page" link for the section being read. Rendered inside the TOC nav;
 * it marks the active link with aria-current="location" (styled in globals.css) and renders nothing.
 */
export function TocSpy() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const nav = ref.current?.closest("nav");
    if (!nav) return;
    const links = [...nav.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')];
    const targets = links.map((a) => document.getElementById(decodeURIComponent(a.hash.slice(1)))).filter((t): t is HTMLElement => !!t);
    if (!targets.length) return;

    const setActive = (id: string) => {
      for (const a of links) {
        if (a.hash.slice(1) === id) a.setAttribute("aria-current", "location");
        else a.removeAttribute("aria-current");
      }
    };

    // The active section is the last one whose top has passed the upper third of the viewport.
    const update = () => {
      const line = window.innerHeight * 0.33;
      let current = targets[0].id;
      for (const t of targets) if (t.getBoundingClientRect().top <= line) current = t.id;
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return <span ref={ref} hidden />;
}
