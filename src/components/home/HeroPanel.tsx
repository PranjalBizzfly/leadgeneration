import { FileCheck, Gauge, MapPin, Send, Sparkle } from "../icons";

/**
 * App-window style preview of the LeadGen AI pipeline, built in HTML.
 * Values are illustrative and labelled as such; they are not customer data.
 */
export function HeroPanel() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <span className="absolute -top-4 right-6 z-10 inline-flex items-center gap-1.5 rounded-full bg-grad px-3.5 py-1.5 text-xs font-bold shadow-lift">
        <Sparkle size={13} /> One pipeline, six modules
      </span>
      <div className="card overflow-hidden !rounded-[1.75rem] shadow-lift">
        <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-5 py-4">
          <span className="size-3 rounded-full bg-[oklch(0.7_0.18_25)]" />
          <span className="size-3 rounded-full bg-[oklch(0.82_0.15_85)]" />
          <span className="size-3 rounded-full bg-[oklch(0.72_0.15_150)]" />
          <span className="ml-3 font-mono text-xs text-muted">leadgen-ai / pipeline</span>
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[11px] font-semibold text-muted">
            <span className="size-1.5 rounded-full bg-success" /> Illustrative preview
          </span>
        </div>
        <div className="grid gap-3.5 bg-bg-alt p-5">
          {/* Discovered lead */}
          <div className="card flex items-center gap-4 p-4">
            <span className="icon-tile !size-11">
              <MapPin size={20} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[15px] font-bold">Lead discovered</p>
              <p className="text-sm text-muted">Dental clinic · Google Maps · de-duplicated</p>
            </div>
            <span className="rounded-full border border-success/40 bg-success/10 px-2.5 py-1 text-xs font-bold text-success">New</span>
          </div>
          {/* Score */}
          <div className="card p-4">
            <div className="flex items-center gap-3">
              <span className="icon-tile !size-10">
                <Gauge size={18} />
              </span>
              <p className="flex-1 text-[15px] font-bold">AI lead score</p>
              <p className="font-display text-2xl font-extrabold">
                86<span className="text-sm font-semibold text-muted">/100</span>
              </p>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-line">
              <div className="h-full w-[86%] rounded-full bg-grad" />
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-ink-soft">
              {["Complete record", "Weak website", "Fits your market"].map((r) => (
                <span key={r} className="rounded-md border border-line bg-surface-2 px-2 py-1">
                  {r}
                </span>
              ))}
            </div>
          </div>
          {/* Audit */}
          <div className="card flex items-center gap-4 p-4">
            <span className="icon-tile !size-10">
              <FileCheck size={18} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[15px] font-bold">SEO audit ready</p>
              <p className="text-sm text-muted">Findings ranked by severity, with a fix list</p>
            </div>
            <span className="rounded-full border border-warm/50 bg-warm/10 px-2.5 py-1 text-xs font-bold text-warm">Opportunity</span>
          </div>
          {/* Flow */}
          <div className="card flex flex-wrap items-center gap-2 p-4 font-mono text-xs font-semibold">
            {["Scrape", "Enrich", "Score", "Audit", "Outreach"].map((s, i) => (
              <span key={s} className="flex items-center gap-2">
                {i > 0 && <span className="text-muted">→</span>}
                <span className={`rounded-md border px-2 py-1 ${i === 4 ? "border-brand bg-brand-soft text-brand" : "border-line bg-surface-2"}`}>{s}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="float-slow absolute -bottom-16 left-8 hidden items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3 shadow-lift sm:flex">
        <span className="icon-tile !size-10 !rounded-xl">
          <Send size={17} />
        </span>
        <div>
          <p className="text-sm font-bold">AI-drafted outreach</p>
          <p className="text-xs text-muted">Sent through your own email transport</p>
        </div>
      </div>
    </div>
  );
}
