import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { ArrowRight, Check, FileCheck, Layers, Send, Shield, Users } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Vendors: Working With LeadGen AI",
  description: "How LeadGen AI approaches vendor and supplier relationships, the kinds of collaboration we consider, and how to propose working together.",
  path: "/vendors",
});

const AREAS = [
  { icon: Layers, title: "Infrastructure & Tooling", text: "Services that help us run a reliable platform, such as hosting, monitoring and developer tooling that keeps the scraping and enrichment pipeline dependable." },
  { icon: Send, title: "Email & Communication", text: "Providers relevant to how teams send outreach. LeadGen AI sends campaigns through each customer’s own configured email transport." },
  { icon: Users, title: "Agencies & Consultants", text: "Marketing, SEO and sales consultancies that want to discuss using or recommending the platform for their own client prospecting." },
  { icon: FileCheck, title: "Content & Training", text: "Writers, educators and trainers who create practical material on prospecting, outreach and lead qualification." },
];

const PRINCIPLES = [
  "Clear scope, deliverables and ownership agreed in writing before work starts",
  "Responsible handling of any data shared in the course of the work",
  "Respect for the role-based access and data-handling practices described on our security page",
  "Honest communication about timelines, limits and changes",
];

const STEPS = [
  { title: "Send an introduction", text: "Use the vendor form to tell us who you are, what you offer and the problem it solves." },
  { title: "Initial review", text: "We check fit against current needs. Not every proposal will match what we need right now." },
  { title: "Conversation", text: "If there is a fit, we arrange a call to understand scope, approach and expectations." },
  { title: "Agreement", text: "Any engagement is confirmed in writing before work begins." },
];

export default function VendorsPage() {
  return (
    <>
      <PageHero
        path="/vendors"
        badge="Vendors"
        title="Working With LeadGen AI"
        intro="We rely on good partners to build and run a dependable prospect intelligence platform. If your product or service could help us, or help the teams that use LeadGen AI, we would like to hear from you."
      >
        <Link href="/contact?topic=Vendors" className="btn btn-primary !rounded-full !px-7 !py-3.5">
          Contact <ArrowRight size={17} />
        </Link>
        <Link href="/security-and-data-handling" className="btn btn-ghost !rounded-full !px-7 !py-3.5">
          Security & Data Handling
        </Link>
      </PageHero>

      <section className="section-y">
        <div className="container-x">
          <SectionHeading badge="Collaboration" title="Where We Collaborate" subtitle="Areas where we are open to vendor and partner conversations. These describe the kinds of collaboration we consider, not existing partnerships." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {AREAS.map(({ icon: Icon, ...a }) => (
              <div key={a.title} className="card card-link p-7">
                <span className="icon-tile">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-xl font-extrabold">{a.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-y border-line bg-bg-alt">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" badge="Principles" title="What We Expect From Every Vendor" />
            <ul className="mt-8 grid gap-3">
              {PRINCIPLES.map((p) => (
                <li key={p} className="card flex items-start gap-3 px-5 py-4 text-ink-soft">
                  <Shield size={19} className="mt-0.5 shrink-0 text-brand" /> {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading align="left" badge="Process" title="How It Works" />
            <ol className="mt-8 grid gap-3">
              {STEPS.map((s, i) => (
                <li key={s.title} className="card flex gap-4 p-5">
                  <span className="icon-tile !size-10 font-display font-bold">{i + 1}</span>
                  <div>
                    <h3 className="font-bold">{s.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 flex items-start gap-2 text-sm text-muted">
              <Check size={16} className="mt-0.5 shrink-0 text-success" /> We reply to every proposal sent through the form.
            </p>
          </div>
        </div>
      </section>

      <div className="container-x mt-12 md:mt-14">
        <CtaBand heading="Have Something That Could Help?" text="Send a short introduction and we will be in touch about next steps." label="Contact" href="/contact?topic=Vendors" />
      </div>
    </>
  );
}
