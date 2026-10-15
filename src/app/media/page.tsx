import type { Metadata } from "next";
import { FaqSection } from "@/components/FaqSection";
import { MEDIA_FAQS } from "@/content/company-faqs";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { ArrowRight, Check, FileCheck, Gauge, Layers, MapPin, Send, Sparkle, Target } from "@/components/icons";
import { LetterHeading } from "@/components/LetterHeading";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Media: Information For Journalists",
  description: "Company information about LeadGen AI for journalists and writers, what the platform does, and how to reach the team with media enquiries.",
  path: "/media",
});

/** Verified product facts only (docs/VERIFIED-FACTS.md). */
const FACTS = [
  { icon: MapPin, label: "Data sources", value: "Google Maps, LinkedIn and IndiaMART" },
  { icon: Sparkle, label: "Enrichment", value: "Business emails, normalised phones, websites and social profiles" },
  { icon: Gauge, label: "Lead scoring", value: "A single 0–100 score with the reasons stored on each record" },
  { icon: FileCheck, label: "SEO audit", value: "Graded website audits with a prioritised, client-ready fix list" },
  { icon: Target, label: "Opportunity detection", value: "Flags businesses with no website, broken sites or weak audits" },
  { icon: Send, label: "CRM & outreach", value: "Pipeline board and AI-drafted outreach via the user’s own email transport" },
  { icon: Layers, label: "Plans", value: "Free, Growth and Scale" },
];

export default function MediaPage() {
  return (
    <>
      <PageHero
        path="/media"
        badge="Media"
        title="Information For Media"
        intro="Writing about prospecting, sales technology or AI in lead generation? Here is accurate background on LeadGen AI and the fastest way to reach our team."
      >
        <Link href="/contact?topic=Media" className="btn btn-primary !rounded-full !px-7 !py-3.5">
          Contact <ArrowRight size={17} />
        </Link>
        <Link href="/press-kit" className="btn btn-ghost !rounded-full !px-7 !py-3.5">
          Press Kit
        </Link>
      </PageHero>

      <section className="section-y">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionHeading align="left" badge="About" title="LeadGen AI In Brief" />
            <p className="lead mt-6">{SITE.name} is a {SITE.tagline.toLowerCase()}. It helps teams find, understand and reach the right prospects with one pipeline that runs from multi-source scraping to enrichment, scoring, website audits and outreach.</p>
            <p className="mt-5 leading-relaxed text-ink-soft">
              A single query, such as a business category and a location, fans out to each enabled source. The results are normalised into one record per business, de-duplicated, and
              enriched with contact routes. Every field records where it came from, and manual edits are never overwritten by automated enrichment.
            </p>
            <p className="mt-5 leading-relaxed text-ink-soft">
              For accuracy, please rely on the facts on this page and the <Link href="/press-kit" className="font-semibold text-brand">Press Kit</Link>, and contact us to confirm anything
              else before publishing.
            </p>
          </div>
          <div className="card overflow-hidden !rounded-3xl">
            <div className="border-b border-line bg-surface-2 px-6 py-4">
              <LetterHeading text="Key Facts" as="h2" triggerOnScroll className="font-bold" />
              <span aria-hidden="true" className="heading-accent-line mt-2 w-10" />
            </div>
            <dl className="divide-y divide-line">
              {FACTS.map(({ icon: Icon, ...f }) => (
                <div key={f.label} className="flex items-start gap-4 px-6 py-4">
                  <span className="icon-tile !size-10 !rounded-xl">
                    <Icon size={18} />
                  </span>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-muted">{f.label}</dt>
                    <dd className="mt-0.5 font-semibold">{f.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section-y border-y border-line bg-bg-alt">
        <div className="container-x">
          <SectionHeading badge="Media Contact" title="Talk To Our Team" subtitle="For interviews, comment, product information or image requests, send a message through the contact form with the Media topic selected." />
          <div className="mx-auto mt-9 grid max-w-4xl gap-5 sm:grid-cols-3">
            {["Your name and publication", "The topic and your deadline", "The questions you would like answered"].map((t) => (
              <div key={t} className="card flex items-start gap-3 p-5 text-ink-soft">
                <Check size={18} className="mt-0.5 shrink-0 text-brand" strokeWidth={2.6} /> {t}
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted">We do not currently publish press releases or coverage on this site.</p>
        </div>
      </section>

      <FaqSection items={MEDIA_FAQS} subtitle="Quick Answers For Journalists And Writers." className="!border-t-0" />

      <div className="container-x mt-12 md:mt-14">
        <CtaBand heading="Working On A Story?" text="Include your deadline and we will do our best to respond in time." label="Contact" href="/contact?topic=Media" />
      </div>
    </>
  );
}
