import type { Metadata } from "next";
import { FaqSection } from "@/components/FaqSection";
import { PRESS_KIT_FAQS } from "@/content/company-faqs";
import Link from "next/link";
import { CopyButton } from "@/components/CopyButton";
import { ArrowRight, FileCheck } from "@/components/icons";
import { BrandMark } from "@/components/Logo";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Press Kit: Logos, Descriptions & Brand Colours",
  description: "See the LeadGen AI logo mark, copy approved company descriptions and use the official brand colours and typefaces in press and partner materials.",
  path: "/press-kit",
});

const ASSETS = [
  { file: "/press/leadgen-ai-mark.svg", name: "Logo mark (SVG)", note: "Vector, gradient tile" },
  { file: "/press/leadgen-ai-mark-1024.png", name: "Logo mark (PNG, 1024px)", note: "High resolution" },
  { file: "/press/leadgen-ai-mark-512.png", name: "Logo mark (PNG, 512px)", note: "Web and social" },
  { file: "/press/leadgen-ai-mark-reversed.svg", name: "Reversed mark (SVG)", note: "White tile, indigo L" },
];

/** Descriptions drawn from the company's own published copy. */
const DESCRIPTIONS = [
  { label: "One line", text: "LeadGen AI is a prospect intelligence platform that helps teams find, understand, and reach the right prospects." },
  {
    label: "Short",
    text: "LeadGen AI is an AI-powered lead generation platform. From scraping to outreach, one pipeline discovers, qualifies and helps close prospects across Google Maps, LinkedIn and IndiaMART.",
  },
  {
    label: "Long",
    text: "LeadGen AI is a prospect intelligence platform for teams that sell to businesses. A single search fans out to Google Maps, LinkedIn and IndiaMART, and results are normalised into one de-duplicated record per business. The platform enriches each lead with contact routes, scores it from 0 to 100 with the reasons stored on the record, audits business websites, flags clear sales opportunities, and lets teams work leads in a built-in CRM with AI-drafted outreach sent through their own email transport.",
  },
];

const COLOURS = [
  { name: "Indigo", hex: "#6366F1", use: "Primary brand colour, logo tile" },
  { name: "Violet", hex: "#8B5CF6", use: "Gradient partner" },
  { name: "Cyan", hex: "#22D3EE", use: "Accent" },
  { name: "Ink", hex: "#0A0B0F", use: "Dark backgrounds" },
];

export default function PressKitPage() {
  return (
    <div className="page-root">
      <PageHero
        path="/press-kit"
        badge="Press Kit"
        title="LeadGen AI Press Kit"
        intro="Logo files, approved descriptions and brand colours for journalists, partners and event organisers. Please use these assets as provided and do not alter the logo."
      >
        <a href="#logos" className="btn btn-primary !rounded-full !px-7 !py-3.5">
          Get The Logo <ArrowRight size={17} />
        </a>
        <Link href="/media" className="btn btn-ghost !rounded-full !px-7 !py-3.5">
          Media
        </Link>
      </PageHero>

      <section id="logos" className="section-y scroll-mt-24">
        <div className="container-x">
          <SectionHeading badge="Logos" title="Logo Files" subtitle="The LeadGen AI mark is an indigo-to-violet rounded tile with a white L. The wordmark “LeadGen AI” is set in DM Sans Bold." />
          <div className="mx-auto mt-9 grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="card grid place-items-center gap-4 !rounded-3xl bg-white p-10">
              <span className="flex items-center gap-3 text-[#0f1222]">
                <BrandMark size={64} />
                <span className="font-display text-3xl font-bold">LeadGen AI</span>
              </span>
              <span className="text-xs font-semibold text-[#6b7280]">On light backgrounds</span>
            </div>
            <div className="card grid place-items-center gap-4 !rounded-3xl !bg-[#0a0b0f] p-10">
              <span className="flex items-center gap-3 text-white">
                <BrandMark size={64} />
                <span className="font-display text-3xl font-bold">LeadGen AI</span>
              </span>
              <span className="text-xs font-semibold text-white/60">On dark backgrounds</span>
            </div>
          </div>
          <ul className="mx-auto mt-6 grid max-w-4xl gap-3 sm:grid-cols-2">
            {ASSETS.map((a) => (
              <li key={a.file}>
                <div className="card flex items-center gap-4 px-5 py-4">
                  <span className="icon-tile !size-10 !rounded-xl">
                    <FileCheck size={18} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-bold">{a.name}</span>
                    <span className="block text-sm text-muted">{a.note}</span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-6 max-w-4xl text-sm text-muted">Keep clear space around the mark of at least a quarter of its width. Don’t recolour, stretch, rotate or add effects to the logo.</p>
        </div>
      </section>

      <section className="section-y border-y border-line bg-bg-alt cut-step">
        <div className="container-x">
          <SectionHeading badge="Boilerplate" title="Approved Descriptions" subtitle="Copy the length that fits your piece." />
          <div className="mx-auto mt-9 grid max-w-4xl gap-5">
            {DESCRIPTIONS.map((d) => (
              <div key={d.label} className="card p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-brand">{d.label}</h3>
                  <CopyButton text={d.text} />
                </div>
                <p className="mt-3 leading-relaxed text-ink-soft">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <SectionHeading badge="Brand" title="Colours & Typography" />
          <div className="mx-auto mt-9 grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {COLOURS.map((c) => (
              <div key={c.hex} className="card overflow-hidden">
                <div className="h-24 border-b border-line" style={{ background: c.hex }} />
                <div className="flex items-start justify-between gap-2 p-4">
                  <div>
                    <p className="font-bold">{c.name}</p>
                    <p className="font-mono text-sm text-ink-soft">{c.hex}</p>
                    <p className="mt-1 text-xs text-muted">{c.use}</p>
                  </div>
                  <CopyButton text={c.hex} />
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-6 grid max-w-4xl gap-5 sm:grid-cols-2">
            <div className="card p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-muted">Headings</p>
              <p className="mt-2 text-3xl font-semibold" style={{ fontFamily: "var(--font-headline)" }}>Bricolage Grotesque</p>
            </div>
            <div className="card p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-muted">Body text</p>
              <p className="mt-2 font-sans text-3xl font-semibold">DM Sans</p>
            </div>
          </div>
          <p className="mx-auto mt-10 max-w-4xl text-center text-sm text-muted">
            Need something that isn’t here, such as product screenshots? Use The <Link href="/contact?topic=Media" className="font-semibold text-brand">Contact</Link> Page.
          </p>
        </div>
      </section>

      <FaqSection items={PRESS_KIT_FAQS} subtitle="Quick answers about logos, descriptions and brand use." cut="cut-step" />
    </div>
  );
}
