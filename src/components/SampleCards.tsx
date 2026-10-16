import type { ReactNode } from "react";
import { FileCheck, Gauge, Target, Users } from "./icons";

/**
 * Small product fragments drawn in code, always labelled "Sample Data". Each shows a real LeadGen AI
 * concept from docs/VERIFIED-FACTS.md (score with stored reasons, audit grade with severity-ranked findings,
 * an opportunity flag with its evidence, a pipeline stage with an owner). Values are illustrative only.
 */
export type SampleKind = "score" | "audit" | "opportunity" | "pipeline";

function Tag() {
  return (
    <span className="rounded-full border border-line bg-surface-2 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted">Sample Data</span>
  );
}

function Head({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="flex items-center gap-2 text-[13px] font-bold text-ink">
        <span className="grid size-7 place-items-center rounded-lg bg-brand-soft text-brand">{icon}</span>
        {title}
      </span>
      <Tag />
    </div>
  );
}

export function SampleCard({ kind, className = "" }: { kind: SampleKind; className?: string }) {
  const base = `w-60 rounded-2xl border border-line bg-surface p-4 text-left shadow-lift ${className}`;
  if (kind === "score") {
    return (
      <div className={base} aria-hidden="true">
        <Head icon={<Gauge size={15} />} title="Lead Score" />
        <div className="mt-3 flex items-end gap-2">
          <span className="font-display text-3xl font-extrabold leading-none text-ink">82</span>
          <span className="pb-0.5 text-xs text-muted">/ 100</span>
        </div>
        <div className="mt-2.5 h-1.5 rounded-full bg-line">
          <div className="h-full w-[82%] rounded-full bg-grad" />
        </div>
        <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-muted">Stored Reasons</p>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {["Complete record", "Website health", "Market fit"].map((r) => (
            <span key={r} className="rounded-md bg-brand-soft px-2 py-0.5 text-[11px] font-semibold text-brand">
              {r}
            </span>
          ))}
        </div>
      </div>
    );
  }
  if (kind === "audit") {
    return (
      <div className={base} aria-hidden="true">
        <Head icon={<FileCheck size={15} />} title="SEO Audit" />
        <div className="mt-3 flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-xl bg-grad font-display text-xl font-extrabold text-white">C</span>
          <span className="text-xs leading-snug text-muted">Overall grade across technical health, content, metadata and performance</span>
        </div>
        <ul className="mt-3 grid gap-1.5 text-xs">
          {[
            ["High", 2, "bg-danger"],
            ["Medium", 4, "bg-warm"],
            ["Low", 7, "bg-success"],
          ].map(([label, n, dot]) => (
            <li key={label as string} className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-ink-soft">
                <span className={`size-2 rounded-full ${dot}`} /> {label} severity
              </span>
              <span className="font-bold text-ink">{n}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  if (kind === "opportunity") {
    return (
      <div className={base} aria-hidden="true">
        <Head icon={<Target size={15} />} title="Opportunity" />
        <p className="mt-3 inline-flex rounded-full bg-[color-mix(in_oklch,var(--warm)_16%,transparent)] px-2.5 py-1 text-xs font-bold text-warm">No website found</p>
        <p className="mt-2.5 text-xs leading-relaxed text-muted">Evidence: listing has a phone number and reviews, but no site and no reachable contact page.</p>
      </div>
    );
  }
  return (
    <div className={base} aria-hidden="true">
      <Head icon={<Users size={15} />} title="Pipeline" />
      <div className="mt-3 flex gap-1.5">
        {["New", "Contacted", "Meeting", "Won"].map((s, i) => (
          <span key={s} className={`h-1.5 flex-1 rounded-full ${i <= 1 ? "bg-grad" : "bg-line"}`} />
        ))}
      </div>
      <p className="mt-2.5 text-sm font-bold text-ink">Stage: Contacted</p>
      <div className="mt-2 flex items-center gap-2 text-xs text-muted">
        <span className="grid size-6 place-items-center rounded-full bg-brand-soft text-[10px] font-bold text-brand">AR</span>
        Owner assigned · history logged
      </div>
    </div>
  );
}

/** Picks the sample card that matches a service page's subject. */
export function sampleKindsFor(path: string): [SampleKind, SampleKind] {
  if (/audit|website/.test(path)) return ["audit", "opportunity"];
  if (/opportunit|missing-website|redesign/.test(path)) return ["opportunity", "audit"];
  if (/crm|pipeline|outreach|activity|prioritisation|dashboard/.test(path)) return ["pipeline", "score"];
  return ["score", "pipeline"];
}
