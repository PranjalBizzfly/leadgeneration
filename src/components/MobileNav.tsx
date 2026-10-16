"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { NavItem } from "@/lib/nav";
import { ChevronDown, Close, Menu } from "./icons";

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState(pathname);

  // Close the drawer whenever the route changes.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="grid size-10 place-items-center rounded-xl border border-line bg-surface text-ink"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <Menu size={20} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Main menu">
          <button type="button" className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} aria-label="Close menu" />
          <nav id="mobile-menu" className="fade-up absolute inset-y-0 right-0 flex w-[min(24rem,100%)] flex-col bg-bg shadow-lift">
            <div className="flex h-16 items-center justify-between border-b border-line px-4">
              <span className="font-display font-bold">Menu</span>
              <button type="button" onClick={() => setOpen(false)} className="grid size-10 place-items-center rounded-xl text-ink" aria-label="Close menu">
                <Close size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-2 py-3">
              {items.map((item) =>
                item.columns ? (
                  <details key={item.label} className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-3 py-3 font-semibold [&::-webkit-details-marker]:hidden">
                      {item.label}
                      <ChevronDown size={18} className="text-muted transition group-open:rotate-180" />
                    </summary>
                    <div className="mb-2 ml-3 border-l border-line pl-3">
                      {item.columns.map((c) => (
                        <div key={c.heading} className="py-1.5">
                          <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-muted">{c.heading}</div>
                          {c.links.map((l) => (
                            <Link key={l.href} href={l.href} className="block rounded-lg px-2 py-2 text-[15px] text-ink-soft hover:text-brand">
                              {l.title}
                            </Link>
                          ))}
                        </div>
                      ))}
                      {item.footer && (
                        <Link href={item.footer.href} className="block px-2 py-2 text-sm font-semibold text-brand">
                          {item.footer.title} →
                        </Link>
                      )}
                    </div>
                  </details>
                ) : (
                  <Link key={item.label} href={item.href} className="block rounded-xl px-3 py-3 font-semibold">
                    {item.label}
                  </Link>
                ),
              )}
            </div>
            <div className="grid gap-2 border-t border-line p-4">
              <Link href="/request-access" className="btn btn-primary w-full">
                Request Access
              </Link>
              <Link href="/search" className="btn btn-ghost w-full">
                Search The Site
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
