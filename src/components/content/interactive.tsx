"use client";

import { Children, useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { ArrowRight } from "../icons";
import "./interactive.css";

/**
 * Interactive building blocks for the layout families. Every panel is server-rendered into the HTML
 * (inactive ones are `hidden`), so search engines, screen readers and the coverage check see all content;
 * the interaction only changes which part is shown. All transitions stop under reduced motion (globals.css).
 */

export interface TabDef {
  id: string;
  label: string;
  kicker?: string;
  icon?: ReactNode;
}

/**
 * WAI-ARIA tabs with an animated panel. `side` puts the tab list in a column beside the panel on wide
 * screens (a scrolling pill row on phones); `top` puts the tabs above the panel.
 */
export function TabExplorer({ tabs, children, variant = "side", label }: { tabs: TabDef[]; children: ReactNode; variant?: "side" | "top"; label: string }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const uid = useId();
  const panels = Children.toArray(children);

  const select = (i: number, focus = false) => {
    const n = (i + tabs.length) % tabs.length;
    setActive(n);
    if (focus) refs.current[n]?.focus();
  };
  // In-page links (table of contents, hero chips) target a panel's id: open that tab and bring it into view.
  const idKey = tabs.map((t) => t.id).join("|");
  useEffect(() => {
    const ids = idKey.split("|");
    const open = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      const i = ids.indexOf(hash);
      if (i < 0) return;
      setActive(i);
      requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView({ block: "start" }));
    };
    open();
    window.addEventListener("hashchange", open);
    return () => window.removeEventListener("hashchange", open);
  }, [idKey]);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const map: Record<string, number> = { ArrowRight: active + 1, ArrowDown: active + 1, ArrowLeft: active - 1, ArrowUp: active - 1, Home: 0, End: tabs.length - 1 };
    if (e.key in map) {
      e.preventDefault();
      select(map[e.key], true);
    }
  };

  return (
    <div className={`explorer explorer-${variant}`}>
      <div role="tablist" aria-label={label} aria-orientation={variant === "side" ? "vertical" : "horizontal"} className="explorer-tabs">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${uid}-tab-${i}`}
            aria-selected={i === active}
            aria-controls={t.id}
            tabIndex={i === active ? 0 : -1}
            onClick={() => select(i)}
            onKeyDown={onKey}
            className="explorer-tab"
          >
            {t.icon && <span className="explorer-tab-icon">{t.icon}</span>}
            <span className="min-w-0">
              {t.kicker && <span className="explorer-tab-kicker">{t.kicker}</span>}
              <span className="explorer-tab-label">{t.label}</span>
            </span>
          </button>
        ))}
      </div>
      <div className="explorer-panels">
        {panels.map((panel, i) => (
          <div key={tabs[i]?.id ?? i} role="tabpanel" id={tabs[i]?.id ?? `${uid}-panel-${i}`} aria-labelledby={`${uid}-tab-${i}`} hidden={i !== active} tabIndex={0} className="explorer-panel">
            {panel}
          </div>
        ))}
        {/* Pinned to the panel's foot: progress through the tabs plus previous/next. */}
        <div className="explorer-foot">
          <span className="explorer-foot-bar" aria-hidden="true">
            <span style={{ width: `${((active + 1) / tabs.length) * 100}%` }} />
          </span>
          <span className="text-sm font-semibold text-muted">
            {active + 1} / {tabs.length}
          </span>
          <button type="button" className="explorer-foot-btn" onClick={() => select(active - 1)} aria-label={`Previous: ${tabs[(active - 1 + tabs.length) % tabs.length]?.label}`}>
            <ArrowRight size={16} className="rotate-180" />
          </button>
          <button type="button" className="explorer-foot-btn explorer-foot-next" onClick={() => select(active + 1)} aria-label={`Next: ${tabs[(active + 1) % tabs.length]?.label}`}>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

/** Interactive step-by-step: clickable step dots on an animated progress track, with Previous/Next. */
export function Stepper({ steps, label = "Step" }: { steps: { title: string; text: string }[]; label?: string }) {
  const [active, setActive] = useState(0);
  const uid = useId();
  const n = steps.length;
  const pct = n > 1 ? (active / (n - 1)) * 100 : 100;

  return (
    <div className="stepper">
      <div className="stepper-track">
        <div className="stepper-rail" aria-hidden="true">
          <span className="stepper-fill" style={{ width: `${pct}%` }} />
        </div>
        <ol className="stepper-dots">
          {steps.map((s, i) => (
            <li key={s.title}>
              <button
                type="button"
                className="stepper-dot"
                data-state={i < active ? "done" : i === active ? "active" : "todo"}
                aria-current={i === active ? "step" : undefined}
                aria-controls={`${uid}-step-${i}`}
                onClick={() => setActive(i)}
              >
                <span className="stepper-dot-n">{i + 1}</span>
                <span className="stepper-dot-label">{s.title}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>

      <div className="stepper-stage">
        {steps.map((s, i) => (
          <div key={s.title} id={`${uid}-step-${i}`} hidden={i !== active} className="stepper-panel">
            <p className="text-xs font-bold uppercase tracking-wider text-brand">
              {label} {i + 1} of {n}
            </p>
            <h3 className="mt-2 text-[clamp(1.3rem,2.4vw,1.75rem)] font-extrabold leading-tight text-ink">{s.title}</h3>
            <p className="mt-3 max-w-3xl text-[16.5px] leading-relaxed text-ink-soft">{s.text}</p>
          </div>
        ))}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button type="button" className="btn btn-ghost !rounded-full !px-5" onClick={() => setActive((v) => Math.max(0, v - 1))} disabled={active === 0}>
            Previous
          </button>
          <button type="button" className="btn btn-primary !rounded-full !px-5" onClick={() => setActive((v) => Math.min(n - 1, v + 1))} disabled={active === n - 1}>
            Next {label} <ArrowRight size={16} />
          </button>
          <span className="text-sm text-muted" aria-live="polite">
            {active + 1} / {n}
          </span>
        </div>
      </div>
    </div>
  );
}
