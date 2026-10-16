"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { Plus } from "../icons";
import { STATIONS } from "./office3d/stations";
import type { SceneApi } from "./office3d/OfficeScene";
import { AppWindow } from "./office3d/AppWindow";
import type { Bubble } from "./office3d/OfficeScene";
import { DIALOGUE } from "./office3d/story";
import type { RunState } from "./office3d/StoryPanel";

// The 3D office (three.js) is loaded after the page renders, so it never blocks the hero text.
const OfficeScene = dynamic(() => import("./office3d/OfficeScene"), { ssr: false });

// One stable subscribe function per query, so React doesn't re-subscribe on every render.
const mediaSubs = new Map<string, (cb: () => void) => () => void>();
const subscribeMedia = (q: string) => {
  let sub = mediaSubs.get(q);
  if (!sub) {
    sub = (cb) => {
      const m = window.matchMedia(q);
      m.addEventListener("change", cb);
      return () => m.removeEventListener("change", cb);
    };
    mediaSubs.set(q, sub);
  }
  return sub;
};
function useMedia(q: string, serverValue: boolean) {
  return useSyncExternalStore(subscribeMedia(q), () => window.matchMedia(q).matches, () => serverValue);
}

const noop = () => () => {};
/**
 * WebGL support, probed ONCE per page load. React calls a useSyncExternalStore snapshot on every
 * render, and the story re-renders this component at every step; probing each time created a fresh
 * WebGL context per render until the browser hit its context limit and dropped the office's own
 * context, blanking the scene. The probe context is also released straight away.
 */
let webglCache: boolean | null = null;
const webglSupported = () => {
  if (webglCache !== null) return webglCache;
  try {
    const c = document.createElement("canvas");
    const gl = (c.getContext("webgl2") ?? c.getContext("webgl")) as WebGLRenderingContext | null;
    webglCache = Boolean(gl);
    gl?.getExtension("WEBGL_lose_context")?.loseContext();
  } catch {
    webglCache = false;
  }
  return webglCache;
};

const iconBtn =
  "grid size-10 place-items-center rounded-full border border-line bg-surface/90 text-ink transition hover:border-line hover:bg-surface/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

/** Live, explorable 3D office where each room is one stage of the LeadGen AI pipeline. */
export function Hero3D({ intro }: { intro: React.ReactNode }) {
  const reduced = useMedia("(prefers-reduced-motion: reduce)", false);
  const compact = useMedia("(max-width: 767px)", false);
  const canRender = useSyncExternalStore(noop, webglSupported, () => true);
  const [selected, setSelected] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  // The 3D view could not be recovered after a WebGL failure: fall back to the panel + stage buttons.
  const [failed, setFailed] = useState(false);
  const onFatal = useCallback(() => setFailed(true), []);
  const onReady = useCallback(() => setReady(true), []);
  const [visible, setVisible] = useState(true);
  const box = useRef<HTMLDivElement>(null);
  const api = useRef<SceneApi | null>(null);

  // Stop rendering while the hero is scrolled out of view.
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: "100px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const index = STATIONS.findIndex((s) => s.id === selected);
  const station = index >= 0 ? STATIONS[index] : null;
  const [runs, setRuns] = useState<Record<string, RunState>>({});
  const timers = useRef<number[]>([]);
  useEffect(() => {
    const t = timers.current;
    return () => t.forEach(clearTimeout);
  }, []);
  // Simulated run: a short, clearly labelled pause, then the sample output. Nothing is fetched or sent.
  const runStage = useCallback(
    (id: string) => {
      setRuns((r) => ({ ...r, [id]: "running" }));
      timers.current.push(window.setTimeout(() => setRuns((r) => ({ ...r, [id]: "done" })), reduced ? 0 : 1100));
    },
    [reduced],
  );
  const doneKey = STATIONS.filter((s) => runs[s.id] === "done").map((s) => s.id).join(",");
  const completed = useMemo(() => (doneKey ? doneKey.split(",") : []), [doneKey]);

  // The story plays like a guided visit: "you" walk to each room, its host asks what you need, your
  // reply runs that stage on the sample clinics, and the software window shows the result. Then you
  // move on. Any manual choice pauses the story; Play resumes it.
  const DWELL_MS = 7000;
  const [playing, setPlaying] = useState(true);

  const [arrived, setArrived] = useState<string | null>(null);
  const autoplay = playing && !reduced && visible && ready;
  const here = station && arrived === station.id ? station.id : null;
  const run = station ? (runs[station.id] ?? "idle") : "idle";
  const go = useCallback((i: number) => {
    if (i >= STATIONS.length) setRuns({});
    setSelected(STATIONS[(i + STATIONS.length) % STATIONS.length].id);
  }, []);
  // Overview → start walking to the first room.
  useEffect(() => {
    if (!autoplay || index >= 0) return;
    const t = window.setTimeout(() => go(0), 1200);
    return () => clearTimeout(t);
  }, [autoplay, index, go]);
  // Arrived and asked → reply after a beat.
  useEffect(() => {
    if (!autoplay || !here || run !== "idle") return;
    const t = window.setTimeout(() => runStage(here), 2200);
    return () => clearTimeout(t);
  }, [autoplay, here, run, runStage]);
  // Result shown → linger, then walk to the next room.
  // A plain timer (no per-frame React state): re-rendering every frame would re-render the whole 3D
  // scene 60 times a second. The progress bar animates in CSS over the same duration instead.
  useEffect(() => {
    if (!autoplay || !here || run !== "done") return;
    const t = window.setTimeout(() => go(index + 1), DWELL_MS);
    return () => clearTimeout(t);
  }, [autoplay, here, run, index, go]);
  const manual = useCallback((id: string | null) => {
    setPlaying(false);
    setSelected(id);
  }, []);
  const next = () => (index === STATIONS.length - 1 ? (setRuns({}), setSelected(STATIONS[0].id)) : setSelected(STATIONS[index + 1].id));
  const talk = here ? DIALOGUE[here] : null;
  const bubble: Bubble | null =
    here && talk
      ? run === "idle"
        ? { stationId: here, host: talk.host, text: talk.ask, chips: [{ label: talk.reply, primary: true, onClick: () => runStage(here) }] }
        : run === "running"
          ? { stationId: here, host: talk.host, text: "On it…", chips: [] }
          : {
              stationId: here,
              host: talk.host,
              text: talk.done,
              chips: [{ label: index === STATIONS.length - 1 ? "Start over" : `Next: ${STATIONS[index + 1].short} →`, primary: true, onClick: next }],
            }
      : null;
  // The card shows the current stage once it starts working; while you walk to the next room it keeps
  // showing the last stage you saw (it never flashes empty between rooms).
  const live = station && here && run !== "idle" ? station : null;
  const lastShown = [...STATIONS].slice(0, Math.max(0, index + (live ? 1 : 0))).reverse().find((s) => runs[s.id] === "done") ?? null;
  // Before the first result, show the current (or first) stage waiting for your answer.
  const shown = live ?? lastShown ?? station ?? STATIONS[0];
  const shownIndex = shown ? STATIONS.indexOf(shown) : -1;
  const panel = shown && (
    <AppWindow
      station={shown}
      index={shownIndex}
      run={runs[shown.id] ?? "idle"}
      playing={autoplay}
      dwellMs={live && autoplay && run === "done" ? DWELL_MS : 0}
      status={
        live ? undefined : station && here === station.id ? `${DIALOGUE[station.id].host} is asking you…` : station ? `Walking to the ${station.short} room…` : "Starting the visit…"
      }
      onTogglePlay={() => setPlaying((p) => !p)}
      onJump={(i) => manual(STATIONS[i].id)}
    />
  );
  const show3d = canRender && !failed;

  const office = (
    <div className="flex flex-1 flex-col gap-3">
      <div
        ref={box}
        className="relative h-[23rem] overflow-hidden rounded-[1.75rem] border border-line bg-[radial-gradient(ellipse_at_50%_40%,var(--surface-2)_0%,var(--bg-alt)_75%)] shadow-lift sm:h-[34rem] lg:h-[50rem]"
        role="region"
        aria-roledescription="Interactive 3D office"
        aria-label="LeadGen AI pipeline shown as a 3D office. Use the stage buttons below to explore each room."
      >
        {/* While the 3D office loads: just the panel's own background and a quiet status line (no photo). */}
        {show3d && !ready && (
          <div className="pointer-events-none absolute inset-0 flex flex-col justify-end gap-3 p-6 sm:p-8" role="status">
            <span className="sr-only">Loading The 3D Office…</span>
            <span aria-hidden="true" className="skeleton h-[45%] w-full rounded-2xl" />
            <span aria-hidden="true" className="skeleton h-4 w-2/3" />
            <span aria-hidden="true" className="skeleton h-4 w-1/3" />
          </div>
        )}
        {!show3d && (
          <p className="absolute inset-0 grid place-items-center px-8 text-center text-sm text-ink/70">
            {failed ? "The 3D view stopped working in this browser. The story continues in the panel; use the stage buttons below to move between rooms." : "Your browser can’t show the 3D office. Use the stage buttons below to follow the story."}
          </p>
        )}
        {show3d && (
          <OfficeScene
            selected={selected}
            onSelect={manual}
            reduced={reduced}
            active={visible}
            compact={compact}
            api={api}
            onReady={onReady}
            completed={completed}
            onArrive={setArrived}
            bubble={bubble}
            onFatal={onFatal}
          />
        )}

        {/* Story panel (desktop: floating over the scene) */}

        {show3d && ready && (
          <>
            <p className="pointer-events-none absolute bottom-4 left-4 hidden rounded-full bg-surface/90 px-3 py-1.5 text-xs font-semibold text-ink/80 md:block">
              Drag To Rotate · Right-Drag To Pan · Click A Room
            </p>
            <p className="pointer-events-none absolute left-3 top-3 rounded-full bg-surface/90 px-3 py-1.5 text-[11px] font-semibold text-ink/80 md:hidden">
              Tap A Room · Two Fingers To Move
            </p>
            <div className="absolute bottom-3 right-3 flex gap-2" role="group" aria-label="Camera controls">
              <button type="button" className={iconBtn} aria-label="Rotate left" onClick={() => api.current?.rotate(-1)}>
                <RotateIcon />
              </button>
              <button type="button" className={iconBtn} aria-label="Rotate right" onClick={() => api.current?.rotate(1)}>
                <RotateIcon flip />
              </button>
              <button type="button" className={iconBtn} aria-label="Zoom in" onClick={() => api.current?.zoom(1.25)}>
                <Plus size={18} />
              </button>
              <button type="button" className={iconBtn} aria-label="Zoom out" onClick={() => api.current?.zoom(0.8)}>
                <MinusIcon />
              </button>
              <button
                type="button"
                className={`${iconBtn} !w-auto px-3.5 text-xs font-bold`}
                onClick={() => {
                  manual(null);
                  api.current?.reset();
                }}
              >
                Reset
              </button>
            </div>
          </>
        )}
      </div>

      {/* Stage picker: the keyboard and screen-reader route through the same six rooms. */}
      <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none]" role="toolbar" aria-label="Pipeline stages">
        {STATIONS.map((s, i) => {
          const on = s.id === selected;
          return (
            <button
              key={s.id}
              type="button"
              aria-pressed={on}
              onClick={() => manual(on ? null : s.id)}
              className={`flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-3.5 py-2 text-sm md:min-h-0 font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                on ? "border-transparent text-ink" : "border-line bg-ink/5 text-ink/85 hover:border-line hover:bg-ink/10"
              }`}
              style={on ? { background: s.accent } : undefined}
            >
              <span className="font-mono text-xs opacity-80">{runs[s.id] === "done" ? "✓" : String(i + 1).padStart(2, "0")}</span>
              {s.short}
            </button>
          );
        })}
      </div>
    </div>
  );
  // Always a software window (never an empty placeholder), at a fixed height so nothing around it moves.
  const softwareCard = <div className="h-[26rem] sm:h-[22rem] lg:h-[23rem]">{panel}</div>;

  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)] lg:items-stretch lg:gap-10">
      <div className="flex flex-col justify-between gap-7">
        {intro}
        <div className="hidden lg:block">{softwareCard}</div>
      </div>
      <div className="flex flex-col gap-3">
        {office}
        <div className="lg:hidden">{softwareCard}</div>
      </div>
    </div>
  );
}

function RotateIcon({ flip = false }: { flip?: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={flip ? { transform: "scaleX(-1)" } : undefined}>
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 4v5h5" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M5 12h14" />
    </svg>
  );
}
