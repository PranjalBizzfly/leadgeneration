"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

const HIDDEN_ON = new Set(["/", "/contact", "/request-access"]);

/**
 * Phone-only (< 768px) sticky call-to-action bar. Shows after the first viewport on long pages and hides
 * when the final CTA band ([data-final-cta]) or the footer is on screen. While shown it sets
 * `data-sticky-cta` on <body>; an `in-data-sticky-cta:` variant in BackToTop lift the scroll button above it,
 * and the body gets bottom padding so the last content is never covered.
 */
export function StickyCta() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const enabled = !HIDDEN_ON.has(pathname);

  useEffect(() => {
    if (!enabled) return;
    const mq = window.matchMedia("(max-width: 767px)");
    const endVisible = new Set<Element>();
    let io: IntersectionObserver | undefined;

    const update = () => {
      const long = document.documentElement.scrollHeight > window.innerHeight * 2.5;
      setShow(mq.matches && long && window.scrollY > window.innerHeight && endVisible.size === 0);
    };
    // Wait a frame so the new route's DOM is in place before observing.
    const raf = requestAnimationFrame(() => {
      io = new IntersectionObserver((entries) => {
        for (const e of entries) {
          if (e.isIntersecting) endVisible.add(e.target);
          else endVisible.delete(e.target);
        }
        update();
      });
      document.querySelectorAll("[data-final-cta], footer").forEach((el) => io?.observe(el));
      update();
    });
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    mq.addEventListener("change", update);
    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      mq.removeEventListener("change", update);
    };
  }, [enabled, pathname]);

  const visible = enabled && show;
  useEffect(() => {
    const body = document.body;
    if (visible) {
      body.dataset.stickyCta = "";
      body.style.paddingBottom = "calc(4.5rem + env(safe-area-inset-bottom))";
    }
    return () => {
      delete body.dataset.stickyCta;
      body.style.paddingBottom = "";
    };
  }, [visible]);

  if (!enabled) return null;
  return (
    <nav
      aria-label="Quick Actions"
      aria-hidden={!visible}
      inert={!visible}
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-line bg-surface px-3 pb-[max(0.625rem,env(safe-area-inset-bottom))] pt-2.5 shadow-[0_-6px_18px_rgba(15,18,34,0.12)] transition duration-300 motion-reduce:transition-none md:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0 motion-reduce:translate-y-0"
      }`}
    >
      <div className="flex gap-2">
        <a href={SITE.appUrl} target="_blank" rel="noopener" className="btn btn-primary flex-1 !px-3 !py-2.5 text-sm">
          Start Free
        </a>
        <Link href="/request-access" className="btn btn-ghost flex-1 !px-3 !py-2.5 text-sm">
          Request Access
        </Link>
      </div>
    </nav>
  );
}
