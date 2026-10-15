"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "../../icons";
import type { Station } from "./stations";
import { STATIONS } from "./stations";
import { STORY } from "./story";
import { Demo, type RunState } from "./StoryPanel";

interface Props {
  station: Station;
  index: number;
  run: RunState;
  playing: boolean;
  /** When > 0, the current stage's progress bar fills over this many milliseconds. */
  dwellMs: number;
  /** Shown in the title bar while you walk to the next room. */
  status?: string;
  onTogglePlay: () => void;
  onJump: (i: number) => void;
}

/**
 * A software window that floats over the 3D office and shows what LeadGen AI is doing in the room the
 * camera is visiting: the same three sample clinics move through all six stages as the story plays.
 */
export function AppWindow({ station, index, run, playing, dwellMs, status, onTogglePlay, onJump }: Props) {
  const s = STORY[station.id];
  const [details, setDetails] = useState(false);
  return (
    <div className="flex max-h-full w-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/95 text-ink shadow-lift backdrop-blur-xl" aria-live="polite">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-line bg-ink/[0.03] px-3.5 py-2.5">
        <span className="size-2.5 rounded-full bg-[#f87171]" />
        <span className="size-2.5 rounded-full bg-[#fbbf24]" />
        <span className="size-2.5 rounded-full bg-[#34d399]" />
        <span className="ml-2 truncate font-mono text-[11px] text-ink/55">leadgen-ai / {station.id}</span>
        {status && <span className="ml-auto truncate text-[11px] font-semibold text-ink/70">{status}</span>}
        <span className={`${status ? "" : "ml-auto "}shrink-0 rounded-full bg-warm/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-warm`}>Sample Data</span>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-3">
        <p className="text-[11px] font-bold uppercase tracking-wider" style={{ color: station.accent }}>
          Step {index + 1} · {station.short}
        </p>
        <p className="mt-0.5 text-[15px] font-bold leading-snug">{station.title}</p>
        <p className="mt-1 text-[12.5px] leading-relaxed text-ink/70">{s.why}</p>

        <div className="mt-3">
          <Demo id={station.id} run={run} />
        </div>

        <button type="button" onClick={() => setDetails((d) => !d)} className="mt-3 text-[11px] font-bold text-ink/60 underline-offset-2 hover:text-ink hover:underline" aria-expanded={details}>
          {details ? "Hide how it works" : "How it works"}
        </button>
        {details && (
          <dl className="mt-2 grid gap-1.5 text-[12px] leading-relaxed">
            {[
              ["You", s.input],
              ["LeadGen AI", s.process],
              ["You get", s.output],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-[4.6rem_1fr] gap-2">
                <dt className="text-[10px] font-bold uppercase tracking-wider text-ink/45">{k}</dt>
                <dd className="text-ink/80">{v}</dd>
              </div>
            ))}
            {s.plan && <p className="text-[11px] text-ink/45">{s.plan}</p>}
          </dl>
        )}
      </div>

      {/* Story progress: one segment per stage */}
      <div className="flex items-center gap-2.5 border-t border-line px-3.5 py-2.5">
        <button
          type="button"
          onClick={onTogglePlay}
          aria-label={playing ? "Pause story" : "Play story"}
          className="grid size-8 shrink-0 place-items-center rounded-full bg-ink text-bg transition hover:bg-ink/85"
        >
          {playing ? (
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
              <rect x="2" y="1.5" width="3" height="9" rx="1" fill="currentColor" />
              <rect x="7" y="1.5" width="3" height="9" rx="1" fill="currentColor" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M3 1.5v9l7.5-4.5z" fill="currentColor" />
            </svg>
          )}
        </button>
        <div className="flex flex-1 gap-1" role="group" aria-label="Story stages">
          {STATIONS.map((st, i) => (
            <button key={st.id} type="button" onClick={() => onJump(i)} aria-label={`Go to ${st.short}`} className="group relative h-6 flex-1">
              <span className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 overflow-hidden rounded-full bg-ink/15 group-hover:bg-ink/25">
                {i === index && dwellMs > 0 ? (
                  <span
                    key={`${st.id}-${dwellMs}`}
                    className="block h-full origin-left rounded-full"
                    style={{ background: st.accent, animation: `story-fill ${dwellMs}ms linear forwards` }}
                  />
                ) : (
                  <span className="block h-full rounded-full" style={{ background: st.accent, width: i <= index ? "100%" : "0%" }} />
                )}
              </span>
            </button>
          ))}
        </div>
        <Link href={station.href} className="hidden shrink-0 items-center gap-1 text-[11px] font-bold text-ink/75 hover:text-ink sm:inline-flex">
          Details <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}
