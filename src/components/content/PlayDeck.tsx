"use client";

import Link from "next/link";
import { useId, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from "react";
import { ArrowRight, Search } from "../icons";
import "./interactive.css";

export interface DeckItem {
  path: string;
  title: string;
  desc: string;
  badge: string;
}

/**
 * 3D coverflow deck for the strategy, B2B and B2C hubs. The active card faces the reader; neighbours fan
 * back in perspective. Move with the arrows, a swipe, the arrow keys or the topic index underneath.
 * Every card is a server-rendered link, so all topics stay crawlable.
 */
export function PlayDeck({ items, label, placeholder }: { items: DeckItem[]; label: string; placeholder: string }) {
  const id = useId();
  const [active, setActive] = useState(0);
  const [query, setQuery] = useState("");
  const drag = useRef<number | null>(null);
  const n = items.length;
  const go = (i: number) => setActive(((i % n) + n) % n);

  const needle = query.trim().toLowerCase();
  const match = (it: DeckItem) => !needle || `${it.title} ${it.desc} ${it.badge}`.toLowerCase().includes(needle);
  const shown = items.filter(match).length;

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    go(active + (e.key === "ArrowRight" ? 1 : -1));
  };
  const onDown = (e: PointerEvent) => (drag.current = e.clientX);
  const onUp = (e: PointerEvent) => {
    if (drag.current === null) return;
    const dx = e.clientX - drag.current;
    drag.current = null;
    if (Math.abs(dx) > 40) go(active + (dx < 0 ? 1 : -1));
  };

  return (
    <div className="deck" data-no-reveal>
      <div className="list-filter deck-search mx-auto max-w-xl">
        <label htmlFor={id} className="sr-only">
          {label}
        </label>
        <Search size={18} className="text-muted" />
        <input
          id={id}
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            const q = e.target.value.trim().toLowerCase();
            const first = items.findIndex((it) => !q || `${it.title} ${it.desc} ${it.badge}`.toLowerCase().includes(q));
            if (first >= 0) setActive(first);
          }}
          className="min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-muted"
        />
        <span role="status" aria-live="polite" className="shrink-0 text-xs font-semibold text-muted">
          {needle ? `${shown} match${shown === 1 ? "" : "es"}` : ""}
        </span>
      </div>

      <div className="deck-stage" role="group" aria-roledescription="carousel" aria-label={label} tabIndex={0} onKeyDown={onKey} onPointerDown={onDown} onPointerUp={onUp} onPointerCancel={() => (drag.current = null)}>
        {items.map((it, i) => {
          // Shortest signed distance around the loop, so the deck wraps seamlessly.
          let off = i - active;
          if (off > n / 2) off -= n;
          if (off < -n / 2) off += n;
          const far = Math.abs(off) > 3;
          return (
            <Link
              key={it.path}
              href={it.path}
              className="deck-card"
              data-active={off === 0 ? "" : undefined}
              data-dim={match(it) ? undefined : ""}
              tabIndex={off === 0 ? 0 : -1}
              aria-hidden={far ? true : undefined}
              onClick={(e) => {
                if (off !== 0) {
                  e.preventDefault();
                  go(i);
                }
              }}
              style={{ "--off": off, "--abs": Math.abs(off), zIndex: 50 - Math.abs(off), opacity: far ? 0 : undefined, pointerEvents: far ? "none" : undefined } as CSSProperties}
            >
              <span className="deck-card-top">
                <span className="deck-card-n">{String(i + 1).padStart(2, "0")}</span>
                <span className="deck-card-badge">{it.badge}</span>
              </span>
              <span className="deck-card-title">{it.title}</span>
              <span className="deck-card-desc">{it.desc}</span>
              <span className="deck-card-go">
                Open <ArrowRight size={16} />
              </span>
            </Link>
          );
        })}
        <button type="button" className="deck-nav deck-prev" onClick={() => go(active - 1)} aria-label="Previous topic">
          <ArrowRight size={18} className="rotate-180" />
        </button>
        <button type="button" className="deck-nav deck-next" onClick={() => go(active + 1)} aria-label="Next topic">
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="deck-progress" aria-hidden="true">
        <span style={{ width: `${((active + 1) / n) * 100}%` }} />
      </div>

      {/* Topic index: every topic as a chip; click to bring it to the front. */}
      <ol className="deck-index" aria-label={`${label} index`}>
        {items.map((it, i) => (
          <li key={it.path} hidden={!match(it)}>
            <button type="button" className="deck-chip" aria-pressed={i === active} onClick={() => go(i)}>
              <span className="deck-chip-n">{String(i + 1).padStart(2, "0")}</span>
              {it.title}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
