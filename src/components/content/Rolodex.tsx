"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { ArrowRight, ChevronRight } from "../icons";
import "./interactive.css";

export interface RolodexGroup {
  heading: string;
  pages: { path: string; title: string; desc: string }[];
}

/**
 * Learning-path hubs (lead capture, qualification, tools) as a 3D rolodex: topic cards sit on a wheel that
 * turns around its horizontal axis. Turn it with the arrows, the mouse wheel, the arrow keys or the grouped
 * index beside it. Every card is a server-rendered link, so all topics stay crawlable.
 */
export function Rolodex({ groups, label }: { groups: RolodexGroup[]; label: string }) {
  const items = groups.flatMap((g) => g.pages.map((p) => ({ ...p, group: g.heading })));
  const n = items.length;
  const [active, setActive] = useState(0);
  const lastWheel = useRef(0);
  const go = (i: number) => setActive(Math.max(0, Math.min(n - 1, i)));

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    go(active + (e.key === "ArrowDown" ? 1 : -1));
  };
  // One card per wheel gesture; the page scrolls normally at either end of the wheel. A native listener is
  // needed because React's wheel handler is passive and cannot prevent the page from scrolling.
  const stage = useRef<HTMLDivElement>(null);
  const activeRef = useRef(active);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);
  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const onWheel = (e: globalThis.WheelEvent) => {
      const dir = e.deltaY > 0 ? 1 : -1;
      const cur = activeRef.current;
      if ((dir > 0 && cur === n - 1) || (dir < 0 && cur === 0)) return;
      e.preventDefault();
      const now = Date.now();
      if (now - lastWheel.current < 260) return;
      lastWheel.current = now;
      setActive(cur + dir);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [n]);

  let idx = -1;
  return (
    <div className="rolo" data-no-reveal>
      <nav className="rolo-index" aria-label={`${label} index`}>
        {groups.map((g) => (
          <div key={g.heading}>
            <p className="rolo-index-head">{g.heading}</p>
            <ol>
              {g.pages.map((p) => {
                idx++;
                const i = idx;
                return (
                  <li key={p.path}>
                    <button type="button" aria-pressed={i === active} onClick={() => go(i)} className="rolo-index-btn">
                      <span className="rolo-index-n">{String(i + 1).padStart(2, "0")}</span>
                      <span className="min-w-0 truncate">{p.title}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        ))}
      </nav>

      <div className="rolo-main">
        <div className="rolo-stage" role="group" aria-roledescription="carousel" aria-label={label} tabIndex={0} onKeyDown={onKey} ref={stage}>
          <div className="rolo-axle" aria-hidden="true" />
          {items.map((it, i) => {
            const off = i - active;
            const far = Math.abs(off) > 2;
            return (
              <Link
                key={it.path}
                href={it.path}
                className="rolo-card"
                data-active={off === 0 ? "" : undefined}
                tabIndex={off === 0 ? 0 : -1}
                aria-hidden={far ? true : undefined}
                onClick={(e) => {
                  if (off !== 0) {
                    e.preventDefault();
                    go(i);
                  }
                }}
                style={{ "--off": off, "--abs": Math.abs(off), zIndex: 40 - Math.abs(off), opacity: far ? 0 : undefined, pointerEvents: far ? "none" : undefined } as CSSProperties}
              >
                <span className="rolo-tab">{it.group}</span>
                <span className="rolo-n">{String(i + 1).padStart(2, "0")}</span>
                <span className="min-w-0 flex-1">
                  <span className="rolo-title">{it.title}</span>
                  <span className="rolo-desc">{it.desc}</span>
                </span>
                <span className="rolo-go" aria-hidden="true">
                  <ArrowRight size={18} />
                </span>
              </Link>
            );
          })}
        </div>
        <div className="rolo-controls">
          <button type="button" className="rolo-btn" onClick={() => go(active - 1)} disabled={active === 0} aria-label="Previous topic">
            <ChevronRight size={18} className="-rotate-90" />
          </button>
          <span className="rolo-meter" aria-hidden="true">
            <span style={{ width: `${((active + 1) / n) * 100}%` }} />
          </span>
          <span className="text-sm font-semibold text-muted" aria-live="polite">
            {active + 1} / {n}
          </span>
          <button type="button" className="rolo-btn rolo-btn-next" onClick={() => go(active + 1)} disabled={active === n - 1} aria-label="Next topic">
            <ChevronRight size={18} className="rotate-90" />
          </button>
        </div>
      </div>
    </div>
  );
}
