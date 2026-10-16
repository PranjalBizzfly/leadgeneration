"use client";

import { useId, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { Check, Gauge, Layers, Search, Send, Sparkle, Users } from "@/components/icons";

export interface CompareStep {
  step: string;
  icon: "search" | "layers" | "users" | "gauge" | "send";
  manual: string;
  auto: string;
}

const ICONS = { search: Search, layers: Layers, users: Users, gauge: Gauge, send: Send };

/**
 * Before/after slider: for each step, "the manual way" sits underneath and "with LeadGen AI" is revealed
 * on top by dragging the divider. The divider is a native range input (keyboard, touch and screen-reader
 * friendly). On phones it becomes a two-button toggle that wipes between the two. Steps are WAI-ARIA tabs.
 */
export function CompareSlider({ steps }: { steps: CompareStep[] }) {
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState(50);
  const [touched, setTouched] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  const s = steps[active];
  const Icon = ICONS[s.icon];

  const select = (i: number, focus = false) => {
    const n = (i + steps.length) % steps.length;
    setActive(n);
    if (focus) tabRefs.current[n]?.focus();
  };
  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const map: Record<string, number> = { ArrowRight: active + 1, ArrowLeft: active - 1, Home: 0, End: steps.length - 1 };
    if (e.key in map) {
      e.preventDefault();
      select(map[e.key], true);
    }
  };

  return (
    <div className="ba">
      <div role="tablist" aria-label="Prospecting steps" className="ba-steps">
        {steps.map((st, i) => {
          const StepIcon = ICONS[st.icon];
          const selected = i === active;
          return (
            <button
              key={st.step}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${id}-tab-${i}`}
              aria-selected={selected}
              aria-controls={`${id}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(i)}
              onKeyDown={onKey}
              className="ba-step"
            >
              <span className="ba-step-icon">
                <StepIcon size={16} />
              </span>
              <span className="ba-step-text">
                <span className="ba-step-n">Step {i + 1}</span>
                <span className="ba-step-title">{st.step}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div
        key={s.step}
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-tab-${active}`}
        data-side={pos >= 50 ? "manual" : "auto"}
        className={`ba-frame ${touched ? "" : "ba-hint"}`}
        style={{ "--pos": `${pos}%` } as CSSProperties}
      >
        {/* Manual layer (underneath) */}
        <div className="ba-layer ba-manual">
          <div className="ba-copy">
            <p className="ba-label ba-label-manual">
              <span className="ba-dot" /> The Manual Way
            </p>
            <p className="ba-text">{s.manual}</p>
          </div>
        </div>

        {/* LeadGen AI layer (on top, clipped from the divider to the right) */}
        <div className="ba-layer ba-auto" aria-hidden={pos >= 98}>
          <div className="ba-copy ba-copy-auto">
            <p className="ba-label ba-label-auto">
              <Sparkle size={13} /> With LeadGen AI
            </p>
            <p className="ba-text flex gap-2.5">
              <span className="tick mt-1 !size-5">
                <Check size={11} strokeWidth={3.2} />
              </span>
              <span>{s.auto}</span>
            </p>
          </div>
        </div>

        <div className="ba-center" aria-hidden="true">
          <span className="ba-center-icon">
            <Icon size={22} />
          </span>
          <span className="ba-center-title">{s.step}</span>
        </div>

        <div className="ba-divider" aria-hidden="true">
          <span className="ba-handle">
            <span>‹</span>
            <span>›</span>
          </span>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => {
            setPos(Number(e.target.value));
            setTouched(true);
          }}
          aria-label={`Compare ${s.step}: drag left to reveal the LeadGen AI way, right to see the manual way`}
          aria-valuetext={pos < 50 ? "Showing mostly LeadGen AI" : pos > 50 ? "Showing mostly the manual way" : "Showing both"}
          className="ba-range"
        />
      </div>

      {/* Phones: a two-button toggle drives the same wipe. */}
      <div className="ba-toggle" role="group" aria-label="Choose which way to show">
        <button
          type="button"
          aria-pressed={pos >= 50}
          onClick={() => {
            setPos(100);
            setTouched(true);
          }}
        >
          The Manual Way
        </button>
        <button
          type="button"
          aria-pressed={pos < 50}
          onClick={() => {
            setPos(0);
            setTouched(true);
          }}
        >
          With LeadGen AI
        </button>
      </div>
    </div>
  );
}
