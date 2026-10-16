import type { ReactNode } from "react";
import { Check, FileCheck, Gauge, Info, Layers, MapPin, Send, Target, Users } from "../icons";

/**
 * "In The App" panel for service pages: an app-window-style card drawn in code that shows what the
 * feature's output looks like. Every value is SAMPLE DATA about fictional businesses ("Sample …"), and
 * only capabilities listed in docs/VERIFIED-FACTS.md are shown.
 */
type Family = "records" | "enrich" | "score" | "audit" | "flags" | "pipeline" | "message" | "generic";

function familyFor(path: string): Family {
  const p = path.toLowerCase();
  if (/logging|crm|pipeline/.test(p)) return "pipeline";
  if (/outreach|drafted/.test(p)) return "message";
  if (/audit|opportunity-reports|seo-agency/.test(p)) return "audit";
  if (/opportunity|missing-website|redesign|agency-client/.test(p)) return "flags";
  if (/scor|prioritis|dashboard/.test(p)) return "score";
  if (/enrich|email-discovery|phone|normalisation|de-duplication|traceability|prospect-research/.test(p)) return "enrich";
  if (/scrap|extraction|list-building|fleet|local-business/.test(p)) return "records";
  return "generic";
}

const TITLES: Record<Family, string> = {
  records: "Lead Records",
  enrich: "Enriched Record",
  score: "Lead Score",
  audit: "Website Audit",
  flags: "Opportunity Flags",
  pipeline: "Pipeline Card",
  message: "Drafted Message",
  generic: "Lead Record",
};

function SourceTag({ children }: { children: ReactNode }) {
  return <span className="shrink-0 rounded-full border border-line bg-surface-2 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted">{children}</span>;
}

function Row({ k, v, src }: { k: string; v: string; src?: string }) {
  return (
    <div className="grid grid-cols-[6.5rem_minmax(0,1fr)_auto] items-center gap-3 border-b border-line py-2.5 last:border-0">
      <dt className="text-[11px] font-bold uppercase tracking-wider text-muted">{k}</dt>
      <dd className="truncate text-sm text-ink">{v}</dd>
      {src ? <SourceTag>{src}</SourceTag> : <span />}
    </div>
  );
}

function Body({ family }: { family: Family }) {
  switch (family) {
    case "records":
      return (
        <ul className="grid gap-2.5">
          {[
            { n: "Sample Clinic A", c: "Dental Clinic · Sample City", s: "Google Maps", i: MapPin },
            { n: "Sample Supplies B", c: "Industrial Supplier · Sample City", s: "IndiaMART", i: Layers },
            { n: "Sample Studio C", c: "Design Studio · Sample City", s: "LinkedIn", i: Users },
          ].map(({ n, c, s, i: Icon }) => (
            <li key={n} className="flex items-center gap-3 rounded-xl border border-line bg-surface px-3.5 py-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
                <Icon size={16} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-bold">{n}</span>
                <span className="block truncate text-xs text-muted">{c}</span>
              </span>
              <SourceTag>{s}</SourceTag>
            </li>
          ))}
        </ul>
      );
    case "enrich":
      return (
        <>
          <p className="text-sm font-bold">Sample Clinic B</p>
          <dl className="mt-2">
            <Row k="Website" v="sample-clinic-b.example" src="Website" />
            <Row k="Email" v="hello@sample-clinic-b.example" src="Website" />
            <Row k="Phone" v="+91 00000 00000" src="Google Maps" />
            <Row k="Social" v="Profile linked" src="Website" />
          </dl>
          <p className="mt-3 text-xs text-muted">Each field records where its value came from. Fields you edit by hand are never overwritten.</p>
        </>
      );
    case "score":
      return (
        <>
          <div className="flex items-end justify-between gap-4">
            <p className="text-sm font-bold">Sample Clinic A</p>
            <p>
              <span className="font-display text-4xl font-extrabold leading-none">82</span>
              <span className="ml-1 text-xs text-muted">/ 100</span>
            </p>
          </div>
          <div className="mt-3 h-2 rounded-full bg-line">
            <div className="h-full w-[82%] rounded-full bg-grad" />
          </div>
          <p className="mt-4 text-[11px] font-bold uppercase tracking-wider text-muted">Stored Reasons</p>
          <ul className="mt-2 grid gap-2 text-sm">
            {["Complete record: website, phone and email found", "Website resolves and loads", "Matches your category and location", "Recent reviews suggest an active business"].map((r) => (
              <li key={r} className="flex items-start gap-2.5">
                <span className="tick mt-0.5 !size-5">
                  <Check size={11} strokeWidth={3} />
                </span>
                {r}
              </li>
            ))}
          </ul>
        </>
      );
    case "audit":
      return (
        <>
          <div className="flex items-center gap-4">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-grad font-display text-2xl font-extrabold">D</span>
            <div>
              <p className="text-sm font-bold">sample-clinic-b.example</p>
              <p className="text-xs text-muted">Overall grade with a per-area scorecard</p>
            </div>
          </div>
          <ul className="mt-4 grid gap-2 text-sm">
            {[
              ["High", "Pages are missing meta descriptions"],
              ["High", "No structured data for the business"],
              ["Medium", "Slow loading on mobile"],
            ].map(([sev, f]) => (
              <li key={f} className="flex items-center gap-3 rounded-xl border border-line bg-surface px-3 py-2.5">
                <span className={`w-16 shrink-0 text-[10px] font-bold uppercase tracking-wider ${sev === "High" ? "text-warm" : "text-muted"}`}>{sev}</span>
                <span className="min-w-0">{f}</span>
              </li>
            ))}
          </ul>
        </>
      );
    case "flags":
      return (
        <ul className="grid gap-2.5">
          {[
            { n: "Sample Bakery D", f: "No website", e: "Listing has no website field" },
            { n: "Sample Salon E", f: "Site doesn’t resolve", e: "Listed domain returned no page" },
            { n: "Sample Clinic B", f: "Weak audit", e: "Overall audit in the bottom band" },
          ].map(({ n, f, e }) => (
            <li key={n} className="rounded-xl border border-line bg-surface px-3.5 py-3">
              <div className="flex items-center justify-between gap-3">
                <span className="truncate text-sm font-bold">{n}</span>
                <span className="shrink-0 rounded-full bg-warm/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-warm">{f}</span>
              </div>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-muted">
                <Info size={12} /> Evidence: {e}
              </p>
            </li>
          ))}
        </ul>
      );
    case "pipeline":
      return (
        <>
          <div className="flex gap-1.5" aria-hidden="true">
            {["New", "Contacted", "Meeting", "Won"].map((s, i) => (
              <span key={s} className={`flex-1 rounded-lg px-2 py-1.5 text-center text-[11px] font-bold ${i === 1 ? "bg-grad" : "bg-surface-2 text-muted"}`}>
                {s}
              </span>
            ))}
          </div>
          <div className="mt-3 rounded-xl border border-line bg-surface p-3.5">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-bold">Sample Clinic A</span>
              <span className="text-xs text-muted">Owner: Sample Rep</span>
            </div>
            <ul className="mt-3 grid gap-1.5 border-t border-line pt-3 text-xs text-ink-soft">
              <li>Email logged: first message sent</li>
              <li>Stage moved: New → Contacted</li>
              <li>Note added: asked about a call next week</li>
            </ul>
          </div>
        </>
      );
    case "message":
      return (
        <div className="rounded-xl border border-line bg-surface p-3.5 text-sm">
          <p className="text-xs text-muted">To: Sample Clinic B</p>
          <p className="mt-1 text-xs text-muted">Uses: enrichment and audit data</p>
          <p className="mt-3 font-bold">A quick note about your website</p>
          <p className="mt-2 leading-relaxed text-ink-soft">
            Hello, I looked at your site and noticed the pages have no meta descriptions and it loads slowly on mobile. I have put together a short list of fixes. Would it help if I sent it over?
          </p>
          <p className="mt-3 text-xs text-muted">Draft only. You review, edit and send it through your own email transport.</p>
        </div>
      );
    default:
      return (
        <>
          <p className="text-sm font-bold">Sample Clinic A</p>
          <dl className="mt-2">
            <Row k="Category" v="Dental Clinic" src="Google Maps" />
            <Row k="Address" v="Sample Street, Sample City" src="Google Maps" />
            <Row k="Rating" v="4.6 (sample)" src="Google Maps" />
            <Row k="Score" v="82 / 100" />
          </dl>
        </>
      );
  }
}

const ICONS: Record<Family, typeof Gauge> = { records: MapPin, enrich: Layers, score: Gauge, audit: FileCheck, flags: Target, pipeline: Users, message: Send, generic: Layers };

export function InTheApp({ path, className = "" }: { path: string; className?: string }) {
  const family = familyFor(path);
  const Icon = ICONS[family];
  return (
    <figure className={`app-window ${className}`} aria-label={`Sample data preview: ${TITLES[family]}`}>
      <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-3">
        <span aria-hidden="true" className="size-2.5 rounded-full bg-[#f87171]" />
        <span aria-hidden="true" className="size-2.5 rounded-full bg-[#fbbf24]" />
        <span aria-hidden="true" className="size-2.5 rounded-full bg-[#34d399]" />
        <span className="ml-2 flex min-w-0 items-center gap-1.5 truncate text-xs font-semibold text-ink-soft">
          <Icon size={13} /> {TITLES[family]}
        </span>
        <span className="ml-auto shrink-0 rounded-full bg-warm/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-warm">Sample Data</span>
      </div>
      <div className="bg-bg-alt p-4 sm:p-5">
        <Body family={family} />
      </div>
      <figcaption className="border-t border-line px-4 py-2.5 text-xs text-muted">Fictional businesses and illustrative values, not real results.</figcaption>
    </figure>
  );
}
