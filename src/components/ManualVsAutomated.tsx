import Link from "next/link";
import { ArrowRight, Users } from "@/components/icons";
import { getPlan, isLive } from "@/lib/registry";
import { CompareSlider, type CompareStep } from "./CompareSlider";

const COMPARE_PATH = "/compare/manual-vs-automated-prospecting";

/**
 * Every line below is taken from /compare/manual-vs-automated-prospecting (src/content/pages/compare.ts)
 * or docs/VERIFIED-FACTS.md. Do not add time savings, percentages or new claims here.
 */
const STEPS: CompareStep[] = [
  {
    step: "Find Businesses",
    icon: "search",
    manual: "A seller starts with a browser and a spreadsheet, copying addresses by hand. No tooling or setup required.",
    auto: "A single query goes out to Google Maps, LinkedIn and IndiaMART, whichever are turned on. Long jobs keep running after the browser tab is closed.",
  },
  {
    step: "Keep Records Clean",
    icon: "layers",
    manual: "Two sellers record the same business differently, copy errors creep in, and duplicates appear when several people work one territory.",
    auto: "Results are normalised into one record per business and de-duplicated, with the source of each field recorded.",
  },
  {
    step: "Fill In Contacts",
    icon: "users",
    manual: "Time goes on hunting for a contact page and checking whether a website loads.",
    auto: "Enrichment finds business emails and contact pages on company websites, and never overwrites a field you edited by hand.",
  },
  {
    step: "Decide Who To Call",
    icon: "gauge",
    manual: "Deep hand research on a short list of high-value accounts, which can pick up details software may miss.",
    auto: "Each lead gets a 0–100 score with the reasons stored on the record, so sellers start the day with a ranked, consistent list.",
  },
  {
    step: "Reach Out And Log It",
    icon: "send",
    manual: "Each message is researched and written by hand, which builds market intuition but doesn’t scale.",
    auto: "AI-drafted outreach uses each lead’s enrichment and audit data, every message is logged against its lead, and you stay in control of what is sent.",
  },
];

/** Manual vs LeadGen AI as a before/after slider, built only from the comparison page and verified facts. */
export function ManualVsAutomated({ className = "" }: { className?: string }) {
  const plan = isLive(COMPARE_PATH) ? getPlan(COMPARE_PATH) : undefined;
  return (
    <div className={className}>
      <CompareSlider steps={STEPS} />
      <div className="mva-hybrid mx-auto mt-10 max-w-3xl">
        <span className="icon-tile !size-11 shrink-0">
          <Users size={20} />
        </span>
        <p className="text-[15.5px] leading-relaxed text-ink-soft">
          Most teams settle on a hybrid: software builds and ranks the list, people review the top band, add context and write or edit the message.
        </p>
      </div>
      {plan && (
        <div className="mt-6 text-center">
          <Link href={COMPARE_PATH} className="btn btn-ghost !rounded-full !px-6 !py-3">
            {plan.title} <ArrowRight size={17} />
          </Link>
        </div>
      )}
    </div>
  );
}
