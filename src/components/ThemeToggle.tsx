"use client";

import { Moon, Sun } from "./icons";

export const THEME_KEY = "leadgen-site-theme";

/** Toggles data-theme on <html>. Both icons render; CSS shows the relevant one, so there is no hydration mismatch. */
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* storage unavailable — theme still applies for this visit */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="grid size-10 place-items-center rounded-xl border border-line bg-surface text-ink-soft transition hover:border-brand hover:text-brand"
      aria-label="Toggle light and dark theme"
      title="Toggle theme"
    >
      <Sun size={18} className="hidden dark:block" />
      <Moon size={18} className="dark:hidden" />
    </button>
  );
}

/** Runs before paint to apply the saved theme. Dark is the default, matching the reference design. */
export const themeScript = `(function(){var t="dark";try{var s=localStorage.getItem("${THEME_KEY}");if(s==="light"||s==="dark")t=s}catch(e){}document.documentElement.dataset.theme=t})()`;
