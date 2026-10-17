"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { ArrowRight, Gauge, Layers, MapPin, Send } from "../icons";
import "./interactive.css";

export interface PipelineStage {
  heading: string;
  pages: { path: string; title: string; desc: string }[];
}

const STAGE_ICONS = [MapPin, Gauge, Send, Layers];

/**
 * Services hub: the pipeline stages as a connected 3D track, and the selected stage's services as
 * 3D flip cards (front: name; back: what it does). Every card is a link and every stage's cards are
 * in the HTML (inactive stages are `hidden`), so all services stay crawlable.
 */
export function PipelineFlip({ stages }: { stages: PipelineStage[] }) {
  const [active, setActive] = useState(0);
  // Running number across stages, so services are numbered 01–34 in pipeline order.
  const offsets = stages.map((_, i) => stages.slice(0, i).reduce((sum, s) => sum + s.pages.length, 0));

  return (
    <div className="pipe" data-no-reveal>
      <ol className="pipe-track" role="tablist" aria-label="Pipeline stages">
        {stages.map((s, i) => {
          const Icon = STAGE_ICONS[Math.min(i, STAGE_ICONS.length - 1)];
          return (
            <li key={s.heading} className="pipe-step" data-state={i < active ? "done" : i === active ? "active" : "todo"}>
              <button type="button" role="tab" aria-selected={i === active} aria-controls={`pipe-${i}`} onClick={() => setActive(i)} className="pipe-btn">
                <span className="pipe-icon">
                  <Icon size={20} />
                </span>
                <span className="min-w-0 text-left">
                  <span className="pipe-kicker">Stage {String(i + 1).padStart(2, "0")}</span>
                  <span className="pipe-name">{s.heading}</span>
                </span>
                <span className="pipe-count">{s.pages.length}</span>
              </button>
            </li>
          );
        })}
      </ol>

      {stages.map((s, i) => (
        <div key={s.heading} id={`pipe-${i}`} role="tabpanel" aria-label={s.heading} hidden={i !== active} className="pipe-panel">
          <ul className="flip-grid">
            {s.pages.map((p, j) => (
              <li key={p.path} style={{ "--i": j } as CSSProperties}>
                <Link href={p.path} className="flip">
                  <span className="flip-inner">
                    <span className="flip-face flip-front">
                      <span className="flip-n">{String(offsets[i] + j + 1).padStart(2, "0")}</span>
                      <span className="flip-title">{p.title}</span>
                      <span className="flip-touch-desc">{p.desc}</span>
                      <span className="flip-hint">
                        {s.heading} <ArrowRight size={14} />
                      </span>
                    </span>
                    <span className="flip-face flip-back">
                      <span className="flip-back-title">{p.title}</span>
                      <span className="flip-desc">{p.desc}</span>
                      <span className="flip-open">
                        Open <ArrowRight size={16} />
                      </span>
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
