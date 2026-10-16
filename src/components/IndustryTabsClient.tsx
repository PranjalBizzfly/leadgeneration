"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from "react";
import { ArrowRight, Check, ChevronRight } from "@/components/icons";

export interface IndustryTab {
  path: string;
  title: string;
  summary: string;
  highlights: string[];
  topics: string[];
  image?: string;
}

/**
 * Industry playbooks as a 3D orbit: the industries sit on a rotating ring, the front card is the active tab
 * and the detail panel below shows its highlights and guide chapters. The ring cards are WAI-ARIA tabs
 * (roving tabindex, arrow/Home/End keys); dragging, the arrow buttons or clicking a card also spin it.
 * The ring also turns by itself every few seconds; it pauses while hovered, focused or dragged, has a
 * Pause/Play button, and never auto-turns under reduced motion (rotation is then instant, too).
 */
const AUTO_TURN_MS = 3500;
export function IndustryTabsClient({ tabs, className = "" }: { tabs: IndustryTab[]; className?: string }) {
  const n = tabs.length;
  // `turn` keeps counting past n so the ring always spins the short way round instead of unwinding.
  const [turn, setTurn] = useState(0);
  const active = ((turn % n) + n) % n;
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const drag = useRef<{ x: number; moved: boolean } | null>(null);
  const id = useId();
  const step = 360 / n;
  const [playing, setPlaying] = useState(true);
  const holding = useRef(false);

  // Auto-rotation. The interval callback (not the effect body) updates state; hover, focus and drag hold it.
  useEffect(() => {
    if (!playing || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (!holding.current && !document.hidden) setTurn((v) => v + 1);
    }, AUTO_TURN_MS);
    return () => window.clearInterval(timer);
  }, [playing]);

  const goTo = (target: number, focus = false) => {
    const t = ((target % n) + n) % n;
    let delta = t - active;
    if (delta > n / 2) delta -= n;
    if (delta < -n / 2) delta += n;
    setTurn((v) => v + delta);
    if (focus) refs.current[t]?.focus({ preventScroll: true });
  };

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const map: Record<string, number> = { ArrowRight: active + 1, ArrowDown: active + 1, ArrowLeft: active - 1, ArrowUp: active - 1, Home: 0, End: n - 1 };
    if (e.key in map) {
      e.preventDefault();
      goTo(map[e.key], true);
    }
  };

  // Drag to spin: every ~70px of horizontal travel moves one industry.
  const onDown = (e: PointerEvent<HTMLDivElement>) => {
    drag.current = { x: e.clientX, moved: false };
  };
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 70) {
      d.moved = true;
      d.x = e.clientX;
      setTurn((v) => v + (dx < 0 ? 1 : -1));
    }
  };
  const onUp = () => {
    setTimeout(() => (drag.current = null), 0);
  };

  const t = tabs[active];

  return (
    <div
      className={`orbit ${className}`}
      data-no-reveal
      style={{ "--n": n, "--step": `${step}deg` } as CSSProperties}
      onPointerEnter={() => (holding.current = true)}
      onPointerLeave={() => (holding.current = false)}
      onFocus={() => (holding.current = true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) holding.current = false;
      }}
    >
      <div className="orbit-stage" onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp} onPointerLeave={onUp}>
        <div role="tablist" aria-label="Industry playbooks" aria-orientation="horizontal" className="orbit-ring" data-no-reveal style={{ "--turn": turn } as CSSProperties}>
          {tabs.map((tab, i) => {
            const selected = i === active;
            // Distance from the front, 0 (front) to n/2 (back); drives fade and blur.
            const raw = Math.abs(i - active);
            const dist = Math.min(raw, n - raw);
            return (
              <button
                key={tab.path}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`${id}-tab-${i}`}
                aria-selected={selected}
                aria-controls={`${id}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => {
                  if (!drag.current?.moved) goTo(i);
                }}
                onKeyDown={onKey}
                className="orbit-card"
                data-back={dist > 2 ? "" : undefined}
                style={{ "--i": i, "--dist": dist } as CSSProperties}
              >
                <span className="orbit-card-media">
                  <span className="orbit-card-letter" aria-hidden="true">
                    {tab.title[0]}
                  </span>
                </span>
                <span className="orbit-card-body">
                  <span className="orbit-card-n">Playbook {String(i + 1).padStart(2, "0")}</span>
                  <span className="orbit-card-title">{tab.title}</span>
                </span>
              </button>
            );
          })}
        </div>
        <button type="button" className="orbit-nav orbit-prev" onClick={() => goTo(active - 1)} aria-label="Previous industry">
          <ChevronRight size={20} className="rotate-180" />
        </button>
        <button type="button" className="orbit-nav orbit-next" onClick={() => goTo(active + 1)} aria-label="Next industry">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="orbit-hint">
        <span aria-hidden="true">Drag, use the arrows or pick a card</span>
        <button type="button" className="orbit-play" aria-pressed={!playing} onClick={() => setPlaying((v) => !v)}>
          {playing ? "Pause Rotation" : "Play Rotation"}
        </button>
      </div>

      <div key={t.path} role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${active}`} tabIndex={0} className="orbit-panel">
        <div className="grid gap-7 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
          <div className="min-w-0">
            <p className="orbit-card-n">
              Playbook {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
            </p>
            <h3 className="mt-2 text-2xl font-extrabold text-ink sm:text-[1.75rem]">{t.title}</h3>
            <p className="mt-3 text-[15.5px] leading-relaxed text-ink-soft">{t.summary}</p>
            <ul className="mt-5 grid gap-2.5">
              {t.highlights.map((h, j) => (
                <li key={h} className="orbit-in flex items-start gap-2.5 text-[15px] text-ink" style={{ "--k": j } as CSSProperties}>
                  <span className="tick mt-0.5 shrink-0">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
            <Link href={t.path} className="btn btn-primary mt-7 !rounded-full !px-6 !py-3">
              Explore {t.title} <ArrowRight size={17} />
            </Link>
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-wider text-brand">Inside The Guide</p>
            <ol className="orbit-chapters mt-3">
              {t.topics.map((s, j) => (
                <li key={s} className="orbit-chapter orbit-in" style={{ "--k": j + 2 } as CSSProperties}>
                  <span className="orbit-chapter-n">{String(j + 1).padStart(2, "0")}</span>
                  <span className="min-w-0">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
