"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Closes the open desktop mega menu after a page change. The menus are pure CSS (hover/focus-within), so
 * a clicked link would keep its menu open: drop focus and hide menus until the pointer leaves the nav.
 */
export function MegaMenuCloser() {
  const pathname = usePathname();
  useEffect(() => {
    const nav = document.querySelector<HTMLElement>('nav[aria-label="Main"]');
    if (!nav) return;
    if (nav.contains(document.activeElement)) (document.activeElement as HTMLElement).blur();
    // Only a menu the pointer is still over stays open; elsewhere hover already closed it.
    if (!nav.matches(":hover")) return;
    nav.dataset.menuClosed = "";
    const reopen = () => delete nav.dataset.menuClosed;
    nav.addEventListener("mouseleave", reopen, { once: true });
    nav.addEventListener("focusin", reopen, { once: true });
    return () => {
      nav.removeEventListener("mouseleave", reopen);
      nav.removeEventListener("focusin", reopen);
      reopen();
    };
  }, [pathname]);
  return null;
}
