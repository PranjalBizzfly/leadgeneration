"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check, FileCheck, Gauge, Layers, Send, Sparkle, Target } from "../icons";

type Stage = "Discover" | "Enrich" | "Qualify" | "Engage";

/** Every value here comes from docs/VERIFIED-FACTS.md. */
const MODULES: {
  stage: Stage;
  icon: typeof Layers;
  title: string;
  text: string;
  plan: string;
  output: string;
  points: string[];
  href: string;
  /** Destination page name, used verbatim as the link label. */
  page: string;
  featured?: boolean;
}[] = [
    {
      stage: "Discover",
      icon: Layers,
      title: "Multi-Source Scraping",
      text: "Run One Query And Collect Matching Businesses From Every Enabled Source.",
      plan: "All Plans",
      output: "One Record Per Business",
      points: ["Google Maps, LinkedIn & IndiaMART", "Cross-Source De-Duplication", "Worker Fleet For Long Jobs", "Quotas Tracked Per Plan"],
      href: "/services/multi-source-lead-scraping",
      page: "Multi-Source Lead Scraping",
    },
    {
      stage: "Enrich",
      icon: Sparkle,
      title: "AI Contact Enrichment",
      text: "Fill The Gaps Automatically With Contact Routes And Company Context.",
      plan: "All Plans",
      output: "Emails, Phones, Socials",
      points: ["Emails From The Company’s Own Site", "Phones Normalised And Format-Checked", "Source Recorded For Every Field", "Never Overwrites Manual Edits"],
      href: "/services/ai-contact-enrichment",
      page: "AI Contact Enrichment",
    },
    {
      stage: "Qualify",
      icon: Gauge,
      title: "AI Lead Scoring",
      text: "Rank The Whole List So Your Team Works The Top Of It First.",
      plan: "Growth & Scale",
      output: "0–100 Score + Reasons",
      points: ["Record Completeness", "Website Health", "Fit With Your Market", "Recalculates On Re-Enrichment"],
      href: "/services/ai-lead-scoring",
      page: "AI Lead Scoring",
      featured: true,
    },
    {
      stage: "Qualify",
      icon: FileCheck,
      title: "SEO Website Audit",
      text: "Audit A Prospect’s Site And Turn The Result Into A Report You Can Send.",
      plan: "Growth & Scale",
      output: "Client-Ready Report",
      points: ["Technical Health & Performance", "Content, Metadata, Structured Data", "Findings Ranked By Severity", "Prioritised Fix List"],
      href: "/services/seo-website-audit",
      page: "SEO Website Audit",
    },
    {
      stage: "Qualify",
      icon: Target,
      title: "Opportunity Detection",
      text: "Find Businesses Whose Website Or Listing Is Missing Or Broken.",
      plan: "Ask Our Team",
      output: "Flags With Evidence",
      points: ["No Website At All", "Sites That Don’t Resolve", "No Reachable Contact Route", "Weak Audit Results"],
      href: "/services/business-opportunity-detection",
      page: "Business Opportunity Detection",
    },
    {
      stage: "Engage",
      icon: Send,
      title: "CRM & AI Outreach",
      text: "Work Qualified Leads And Send AI-Drafted Outreach From The Same Record.",
      plan: "Growth & Scale",
      output: "Logged Conversations",
      points: ["Pipeline Stages And Owners", "Drafts Use Enrichment & Audit Data", "Your Own Email Transport", "Every Message Logged"],
      href: "/services/ai-outreach-campaigns",
      page: "AI Outreach Campaigns",
    },
  ];

const TABS: ("All" | Stage)[] = ["All", "Discover", "Enrich", "Qualify", "Engage"];

export function ModuleTabs() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("All");
  const shown = MODULES.filter((m) => tab === "All" || m.stage === tab);

  return (
    <>
      <div className="mt-10 flex flex-wrap justify-center gap-2.5" role="tablist" aria-label="Filter modules by stage">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={`rounded-full border px-5 py-2.5 text-sm font-bold transition ${tab === t ? "border-transparent bg-grad shadow-lift" : "border-line bg-surface text-ink-soft hover:border-brand hover:text-brand"
              }`}
          >
            {t === "All" ? "All Modules" : t}
          </button>
        ))}
      </div>
      <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="tabpanel">
        {shown.map(({ icon: Icon, ...m }) => (
          <article key={m.title} className={`card card-link relative flex flex-col p-7 ${m.featured ? "border-brand ring-4 ring-brand-soft" : ""}`}>
            {m.featured && (
              <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-brand bg-surface px-3 py-1 text-xs font-bold text-brand">
                <Sparkle size={12} /> Core Module
              </span>
            )}
            <div className="flex items-center justify-between">
              <span className="icon-tile">
                <Icon size={22} />
              </span>
              <span className="rounded-full border border-line px-3 py-1 text-xs font-bold uppercase tracking-wide text-muted">{m.stage}</span>
            </div>
            <h3 className="mt-6 text-xl font-extrabold">{m.title}</h3>
            <p className="mt-2 leading-relaxed text-ink-soft">{m.text}</p>
            <dl className="mt-6 grid gap-2.5 border-y border-line py-5 text-sm">
              <div className="flex justify-between gap-3">
                <dt className="text-muted">Available On</dt>
                <dd className="font-bold">{m.plan}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted">Output</dt>
                <dd className="text-right font-bold">{m.output}</dd>
              </div>
            </dl>
            <p className="mt-5 text-xs font-bold uppercase tracking-wider text-muted">Key Capabilities</p>
            <ul className="mt-3 grid flex-1 gap-2.5">
              {m.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[15px] text-ink-soft">
                  <Check size={17} className="mt-0.5 shrink-0 text-brand" strokeWidth={2.6} /> {p}
                </li>
              ))}
            </ul>
            <Link href={m.href} className="btn btn-primary mt-7 w-full !rounded-full">
              {m.page} <ArrowRight size={16} />
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
