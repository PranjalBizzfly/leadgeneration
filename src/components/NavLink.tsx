"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** Top-level header link that shows an underline when the current page belongs to its section. */
export function NavLink({ href, match, children }: { href: string; match: string[]; children: ReactNode }) {
  const pathname = usePathname();
  const active = match.some((m) => (m === "/" ? pathname === "/" : pathname === m || pathname.startsWith(`${m}/`)));
  return (
    <Link
      href={href}
      aria-current={active ? "true" : undefined}
      className={`relative flex items-center gap-1 whitespace-nowrap rounded-lg px-2 py-2 text-[15px] font-semibold transition xl:px-3 ${
        active ? "text-brand" : "text-ink-soft hover:text-ink group-focus-within:text-ink"
      }`}
    >
      {children}
      {/* Always rendered (only its visibility changes): the prerendered "/" shell doesn't know the current
          path, so a conditional element made the server and client trees differ (React hydration error 418). */}
      <span aria-hidden="true" className={`absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-brand transition-opacity xl:inset-x-3 ${active ? "opacity-100" : "opacity-0"}`} />

    </Link>
  );
}
