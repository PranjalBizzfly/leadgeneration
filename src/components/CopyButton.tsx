"use client";

import { useState } from "react";

export function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [done, setDone] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setDone(true);
      setTimeout(() => setDone(false), 1400);
    } catch {
      /* clipboard blocked: the text remains selectable on the page */
    }
  }
  return (
    <button
      type="button"
      onClick={copy}
      className={`shrink-0 rounded-lg border px-3 py-1 text-xs font-semibold transition ${done ? "border-brand bg-brand-soft text-brand" : "border-line text-ink-soft hover:border-brand hover:text-brand"}`}
    >
      {done ? "Copied" : label}
    </button>
  );
}
