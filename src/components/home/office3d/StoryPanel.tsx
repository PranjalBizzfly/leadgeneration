"use client";

import Link from "next/link";
import { ArrowRight, Check, ChevronRight, Close } from "../../icons";
import type { Station } from "./stations";
import { AUDIT_SAMPLE, DRAFT_SAMPLE, LEADS, SCENARIO, STORY, type SampleLead } from "./story";

export type RunState = "idle" | "running" | "done";

const navBtn =
  "grid size-9 place-items-center rounded-full border border-line bg-ink/5 text-ink transition hover:border-line hover:bg-ink/10 disabled:opacity-35 disabled:hover:border-line disabled:hover:bg-ink/5";

interface Props {
  station: Station;
  index: number;
  total: number;
  run: RunState;
  onRun: () => void;
  onStep: (d: number) => void;
  onOverview: () => void;
}

/** One stage of the hero story: input → processing → output, with a runnable sample demonstration. */
export function StoryPanel({ station, index, total, run, onRun, onStep, onOverview }: Props) {
  const s = STORY[station.id];
  return (
    <div className="flex max-h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/95 text-ink shadow-lift backdrop-blur-xl" aria-live="polite">
      <div className="flex items-start gap-3 border-b border-line px-4 py-3">
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-bold uppercase tracking-wider" style={{ color: station.accent }}>
            Stage {String(index + 1).padStart(2, "0")} Of {String(total).padStart(2, "0")} · {station.short}
          </p>
          <p className="mt-0.5 text-base font-bold leading-snug">{station.title}</p>
        </div>
        <button type="button" onClick={onOverview} aria-label="Back to overview" className={`${navBtn} !size-8 shrink-0`}>
          <Close size={14} />
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-3">
        <ol className="grid gap-2 text-[13px] leading-relaxed">
          <Step n="You" text={s.input} />
          <Step n="LeadGen AI" text={s.process} />
          <Step n="You Get" text={s.output} />
        </ol>
        {s.plan && <p className="mt-2 text-[11px] text-ink/50">{s.plan}</p>}

        {/* Sample demonstration */}
        <div className="mt-3 rounded-xl border border-dashed border-line bg-ink/[0.03] p-3">
          <div className="flex items-center justify-between gap-2">
            <span className="rounded-full bg-warm/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-warm">Sample Demo · Not Live Data</span>
            {run !== "done" && (
              <button
                type="button"
                onClick={onRun}
                disabled={run === "running"}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold text-ink transition disabled:opacity-60"
                style={{ background: station.accent }}
              >
                {run === "running" ? "Running Sample…" : s.run}
                {run === "idle" && <ArrowRight size={13} />}
              </button>
            )}
          </div>
          <p className="mt-2 text-[11px] text-ink/55">
            Scenario: {SCENARIO.who} wants to {SCENARIO.goal}. Clinic names and values below are fictional.
          </p>
          <div className="mt-2.5">
            <Demo id={station.id} run={run} />
          </div>
        </div>
        <p className="mt-2.5 text-[12px] font-semibold text-ink/80">Why it matters: {s.why}</p>
      </div>

      <div className="flex items-center justify-between gap-2 border-t border-line px-4 py-2.5">
        <Link href={station.href} className="inline-flex items-center gap-1 text-xs font-bold text-ink/85 hover:text-ink">
          Feature Details <ArrowRight size={13} />
        </Link>
        <div className="flex items-center gap-1.5">
          <button type="button" onClick={() => onStep(-1)} disabled={index === 0} aria-label="Previous stage" className={navBtn}>
            <ChevronRight size={15} className="rotate-180" />
          </button>
          <button type="button" onClick={onOverview} className="rounded-full border border-line px-3 py-2 text-xs font-bold hover:border-line">
            Overview
          </button>
          <button
            type="button"
            onClick={() => onStep(1)}
            disabled={index === total - 1}
            aria-label="Next stage"
            className="inline-flex h-9 items-center gap-1 rounded-full bg-ink px-3 text-xs font-bold text-bg transition hover:bg-ink/85 disabled:opacity-35"
          >
            Next <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

function Step({ n, text }: { n: string; text: string }) {
  return (
    <li className="grid grid-cols-[4.75rem_1fr] gap-2">
      <span className="pt-px text-[10px] font-bold uppercase tracking-wider text-ink/45">{n}</span>
      <span className="text-ink/85">{text}</span>
    </li>
  );
}

function Dot({ lead }: { lead: SampleLead }) {
  return <span className="inline-block size-2 shrink-0 rounded-full" style={{ background: lead.colour }} />;
}

function Pending({ text }: { text: string }) {
  return <p className="py-3 text-center text-[12px] text-ink/45">{text}</p>;
}

function Running() {
  return (
    <div className="grid gap-1.5 py-1" aria-label="Running sample">
      {LEADS.map((l) => (
        <div key={l.id} className="h-7 animate-pulse rounded-md bg-ink/10" />
      ))}
    </div>
  );
}

/** Stage-specific sample output, using the same three fictional clinics throughout. */
export function Demo({ id, run }: { id: string; run: RunState }) {
  if (id === "scrape") {
    return (
      <>
        <div className="mb-2 grid grid-cols-3 gap-1.5 text-[11px]">
          {[
            ["Source", "Google Maps"],
            ["Category", "Dental clinic"],
            ["Location", "Pune"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-md border border-line bg-surface/90 px-2 py-1">
              <p className="text-ink/45">{k}</p>
              <p className="font-semibold">{v}</p>
            </div>
          ))}
        </div>
        {run === "idle" ? (
          <Pending text="Answer the host in the office to run this step." />
        ) : run === "running" ? (
          <Running />
        ) : (
          <ul className="grid gap-1.5">
            {LEADS.map((l) => (
              <li key={l.id} className="rounded-md border border-line bg-surface/90 px-2 py-1.5 text-[11px]">
                <p className="flex items-center gap-1.5 font-semibold">
                  <Dot lead={l} /> {l.name} <span className="font-normal text-ink/50">· {l.area}</span>
                </p>
                <p className="mt-0.5 text-ink/60">
                  {l.rating} · {l.phoneRaw} · {l.website ?? "no website listed"}
                </p>
                <p className="mt-0.5 text-[10px] text-ink/40">Source: Google Maps · one de-duplicated record</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }

  if (id === "enrich") {
    if (run === "idle") return <Pending text="Answer the host in the office to run this step." />;
    if (run === "running") return <Running />;
    return (
      <ul className="grid gap-1.5">
        {LEADS.map((l) => (
          <li key={l.id} className="rounded-md border border-line bg-surface/90 px-2 py-1.5 text-[11px]">
            <p className="flex items-center gap-1.5 font-semibold">
              <Dot lead={l} /> {l.name}
            </p>
            <dl className="mt-1 grid grid-cols-[4.2rem_1fr] gap-x-2 gap-y-0.5 text-ink/70">
              <dt className="text-ink/45">Phone</dt>
              <dd>
                {l.phone} <span className="text-ink/40">(normalised)</span>
              </dd>
              <dt className="text-ink/45">Email</dt>
              <dd>{l.email ? <>{l.email} <span className="text-ink/40">(from clinic site)</span></> : <span className="text-warm">None found: no website to read</span>}</dd>
              <dt className="text-ink/45">Social</dt>
              <dd>{l.social ?? <span className="text-ink/40">Not found</span>}</dd>
            </dl>
          </li>
        ))}
      </ul>
    );
  }

  if (id === "score") {
    if (run === "idle") return <Pending text="Answer the host in the office to run this step." />;
    if (run === "running") return <Running />;
    return (
      <ul className="grid gap-1.5">
        {[...LEADS]
          .sort((a, b) => b.score - a.score)
          .map((l) => (
            <li key={l.id} className="rounded-md border border-line bg-surface/90 px-2 py-1.5 text-[11px]">
              <div className="flex items-center gap-2">
                <Dot lead={l} />
                <span className="flex-1 font-semibold">{l.name}</span>
                <span className="font-mono text-sm font-bold">
                  {l.score}
                  <span className="text-[10px] text-ink/45">/100</span>
                </span>
              </div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-ink/10">
                <div className="h-full rounded-full" style={{ width: `${l.score}%`, background: l.colour }} />
              </div>
              <ul className="mt-1 text-ink/60">
                {l.reasons.map((r) => (
                  <li key={r}>· {r}</li>
                ))}
              </ul>
            </li>
          ))}
        <li className="text-[10px] text-ink/45">Illustrative scores. Real scores come from each lead’s own evidence.</li>
      </ul>
    );
  }

  if (id === "audit") {
    return (
      <>
        <div className="mb-2 rounded-md border border-line bg-surface/90 px-2 py-1 text-[11px]">
          <span className="text-ink/45">Website · </span>
          <span className="font-semibold">{AUDIT_SAMPLE.site}</span> <span className="text-ink/45">(Sample Clinic B)</span>
        </div>
        {run === "idle" ? (
          <Pending text="Answer the host in the office to run this step." />
        ) : run === "running" ? (
          <Running />
        ) : (
          <div className="grid gap-2 text-[11px]">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-lg bg-danger/15 font-mono text-xl font-bold text-danger">{AUDIT_SAMPLE.grade}</span>
              <div className="grid flex-1 grid-cols-5 gap-1">
                {AUDIT_SAMPLE.areas.map((a) => (
                  <div key={a.name} className="rounded border border-line px-1 py-0.5 text-center" title={a.name}>
                    <p className="truncate text-[9px] text-ink/45">{a.name}</p>
                    <p className="font-mono font-bold">{a.grade}</p>
                  </div>
                ))}
              </div>
            </div>
            <ul className="grid gap-1">
              {AUDIT_SAMPLE.findings.map((f) => (
                <li key={f.text} className="flex gap-2 rounded-md border border-line bg-surface/90 px-2 py-1">
                  <span className={`shrink-0 font-bold ${f.severity === "High" ? "text-danger" : "text-warm"}`}>{f.severity}</span>
                  <span className="text-ink/75">{f.text}</span>
                </li>
              ))}
            </ul>
            <p className="text-[10px] text-ink/45">Illustrative report. A real audit fetches and grades the live site.</p>
          </div>
        )}
      </>
    );
  }

  if (id === "detect") {
    if (run === "idle") return <Pending text="Answer the host in the office to run this step." />;
    if (run === "running") return <Running />;
    return (
      <ul className="grid gap-1.5">
        {LEADS.map((l) => (
          <li key={l.id} className="rounded-md border border-line bg-surface/90 px-2 py-1.5 text-[11px]">
            <p className="flex items-center gap-1.5 font-semibold">
              <Dot lead={l} /> {l.name}
              {l.flag ? (
                <span className="ml-auto rounded-full bg-warm/15 px-2 py-0.5 text-[10px] font-bold text-warm">{l.flag}</span>
              ) : (
                <span className="ml-auto text-[10px] text-ink/45">No flag</span>
              )}
            </p>
            {l.flagEvidence && <p className="mt-0.5 text-ink/60">Evidence: {l.flagEvidence}</p>}
          </li>
        ))}
      </ul>
    );
  }

  // CRM & Outreach
  if (run === "idle") return <Pending text="Answer the host in the office to run this step." />;
  if (run === "running") return <Running />;
  return (
    <div className="grid gap-2 text-[11px]">
      <div className="grid grid-cols-3 gap-1.5">
        {[
          ["New", [LEADS[2]]],
          ["Contacting", [LEADS[1]]],
          ["Qualified", [LEADS[0]]],
        ].map(([stage, leads]) => (
          <div key={stage as string} className="rounded-md border border-line bg-surface/90 p-1.5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-ink/45">{stage as string}</p>
            {(leads as SampleLead[]).map((l) => (
              <p key={l.id} className="mt-1 flex items-center gap-1 rounded bg-ink/5 px-1.5 py-1 font-semibold">
                <Dot lead={l} /> <span className="truncate">{l.name.replace("Sample ", "")}</span>
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="rounded-md border border-line bg-surface/90 p-2">
        <p className="text-ink/45">AI-drafted message to {DRAFT_SAMPLE.to}</p>
        <p className="mt-1 font-semibold">{DRAFT_SAMPLE.subject}</p>
        <p className="mt-1 text-ink/70">{DRAFT_SAMPLE.body}</p>
        <div className="mt-2 flex items-center justify-between gap-2">
          <span className="flex items-center gap-1 text-[10px] text-ink/50">
            <Check size={12} /> Uses Stage 04 audit findings
          </span>
          <button type="button" disabled className="cursor-not-allowed rounded-full border border-line px-2.5 py-1 text-[10px] font-bold text-ink/50" title="Demo only: nothing is sent">
            Send · Disabled In Demo
          </button>
        </div>
      </div>
      <p className="text-[10px] text-ink/45">Nothing is sent from this demo. In the product, you approve each message and it goes through your own email transport.</p>
    </div>
  );
}
