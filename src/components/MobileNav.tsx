"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { NavItem } from "@/lib/nav";
import { ChevronDown, Close, Menu, Search } from "./icons";

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [lastPath, setLastPath] = useState(pathname);

  // Close the menu whenever the route changes.
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
      {/* One button opens and closes the menu; it stays above the overlay so the X is always reachable. */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="relative z-[60] grid size-10 place-items-center rounded-xl border border-line bg-surface text-ink"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        {open ? <Close size={20} /> : <Menu size={20} />}
      </button>

      {/* Portalled to <body>: the header's backdrop-filter would otherwise trap this fixed overlay inside the header. */}
      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-50 pointer-events-none"
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
          >
            <button
              type="button"
              tabIndex={-1}
              className="pointer-events-auto absolute inset-x-0 bottom-0 top-16 bg-black/40"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            />
            {/* Floating card under the header: search, accordion links, then the two actions. */}
            <nav
              id="mobile-menu"
              className="fade-up pointer-events-auto absolute inset-x-3 top-[4.5rem] mx-auto flex max-h-[calc(100dvh-5.5rem)] max-w-md flex-col overflow-y-auto rounded-2xl border border-line bg-surface p-4 shadow-lift sm:inset-x-6"
            >
              <form
                role="search"
                onSubmit={(e) => {
                  e.preventDefault();
                  const q = String(
                    new FormData(e.currentTarget).get("q") ?? "",
                  ).trim();
                  setOpen(false);
                  router.push(
                    q ? `/search?q=${encodeURIComponent(q)}` : "/search",
                  );
                }}
                className="mb-2"
              >
                <label className="flex items-center gap-2.5 rounded-full border border-line bg-bg px-4 py-2.5 text-muted focus-within:border-brand">
                  <Search size={17} />
                  <input
                    name="q"
                    type="search"
                    placeholder="I’m looking for…"
                    aria-label="Search the site"
                    className="min-w-0 flex-1 bg-transparent text-[15px] text-ink outline-none placeholder:text-muted"
                  />
                </label>
              </form>
              <div className="divide-y divide-line">
                {items.map((item) =>
                  item.columns ? (
                    <details key={item.label} className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between px-1 py-3.5 font-semibold [&::-webkit-details-marker]:hidden">
                        {item.label}
                        <ChevronDown
                          size={18}
                          className="text-muted transition group-open:rotate-180"
                        />
                      </summary>
                      <div className="mb-3 ml-1 border-l border-line pl-3">
                        {item.columns.map((c) => (
                          <div key={c.heading} className="py-1.5">
                            <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-muted">
                              {c.heading}
                            </div>
                            {c.links.map((l) => (
                              <Link
                                key={l.href}
                                href={l.href}
                                className="block rounded-lg px-2 py-2 text-[15px] text-ink-soft hover:text-brand"
                              >
                                {l.title}
                              </Link>
                            ))}
                          </div>
                        ))}
                        {item.goals && (
                          <details className="group/goals py-1.5">
                            <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-muted [&::-webkit-details-marker]:hidden">
                              By Goal
                              <ChevronDown
                                size={16}
                                className="transition group-open/goals:rotate-180"
                              />
                            </summary>
                            {item.goals.map((g) => (
                              <div key={g.heading} className="py-1">
                                <div className="px-2 py-1 text-sm font-semibold text-ink">
                                  {g.heading}
                                </div>
                                {g.links.map((l) => (
                                  <Link
                                    key={l.href}
                                    href={l.href}
                                    className="block rounded-lg py-1.5 pl-4 pr-2 text-[15px] text-ink-soft hover:text-brand"
                                  >
                                    {l.title}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </details>
                        )}
                        {item.footer && (
                          <Link
                            href={item.footer.href}
                            className="block px-2 py-2 text-sm font-semibold text-brand"
                          >
                            {item.footer.title} →
                          </Link>
                        )}
                      </div>
                    </details>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-1 py-3.5 font-semibold"
                    >
                      {item.label}
                    </Link>
                  ),
                )}
              </div>
              <div className="mt-2 grid justify-items-start gap-3 border-t border-line pt-5">
                <Link href="/request-access" className="btn btn-primary">
                  Request Access
                </Link>
                <Link href="/contact" className="btn btn-ghost">
                  Contact Us
                </Link>
              </div>
            </nav>
          </div>,
          document.body,
        )}
    </div>
  );
}
