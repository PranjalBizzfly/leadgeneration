import type { Metadata } from "next";
import { FaqSection } from "@/components/FaqSection";
import { CAREERS_FAQS } from "@/content/company-faqs";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { ArrowRight, Check, FileCheck, Send, Sparkle, Target, Users } from "@/components/icons";
import { LetterHeading } from "@/components/LetterHeading";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Careers: Open Roles At LeadGen AI",
  description: "Open roles at LeadGen AI: Sales Executive, Software Developer Coordinator, Email Marketing Executive, Business Development Executive and Prompt Engineer.",
  path: "/careers",
});

/** Responsibilities are as specified by the company; skills are the practical abilities each role calls for. */
const ROLES = [
  {
    id: "sales-executive",
    title: "Sales Executive",
    team: "Sales",
    icon: Target,
    intro: "Help businesses discover how LeadGen AI can find, enrich and prioritise their next customers, and guide prospects from first conversation to signed plan.",
    responsibilities: [
      "Identify potential customers",
      "Contact prospects",
      "Explain services",
      "Follow up on leads",
      "Maintain customer relationships",
      "Work toward sales targets",
    ],
    skills: ["Clear spoken and written communication", "Listening and questioning in discovery conversations", "Organised follow-up and pipeline discipline", "Comfort explaining a software product"],
  },
  {
    id: "software-developer-coordinator",
    title: "Software Developer Coordinator",
    team: "Product & Engineering",
    icon: FileCheck,
    intro: "Keep development work organised and moving: the link between developers, product and the rest of the business as the platform evolves.",
    responsibilities: [
      "Coordinate development tasks",
      "Communicate with developers and other teams",
      "Track project progress",
      "Organize requirements",
      "Monitor deadlines",
      "Help ensure smooth project delivery",
    ],
    skills: ["Understanding of how software is built and shipped", "Requirement writing and task breakdown", "Tracking work across tools and teams", "Calm, precise communication under deadlines"],
  },
  {
    id: "email-marketing-executive",
    title: "Email Marketing Executive",
    team: "Marketing",
    icon: Send,
    intro: "Plan and run email campaigns that reach the right people with the right message, and keep our lists healthy and our sending responsible.",
    responsibilities: [
      "Plan and send email campaigns",
      "Maintain email lists",
      "Write engaging email content",
      "Monitor campaign performance",
      "Improve open and click rates",
      "Follow email marketing best practices",
    ],
    skills: ["Concise, persuasive copywriting", "List segmentation and hygiene", "Reading campaign metrics and testing changes", "Awareness of consent and opt-out obligations"],
  },
  {
    id: "business-development-executive",
    title: "Business Development Executive",
    team: "Business Development",
    icon: Users,
    intro: "Open new doors for LeadGen AI by finding the clients, partners and markets where our prospect intelligence platform can do the most good.",
    responsibilities: [
      "Research new business opportunities",
      "Identify potential clients and partners",
      "Build business relationships",
      "Arrange meetings",
      "Follow up on prospects",
      "Support business growth",
    ],
    skills: ["Market and account research", "Relationship building and networking", "Professional outreach and meeting scheduling", "Persistence with thoughtful follow-up"],
  },
  {
    id: "prompt-engineer",
    title: "Prompt Engineer",
    team: "AI",
    icon: Sparkle,
    intro: "Shape how AI works inside our product and our teams, from AI-drafted outreach to internal workflows, by designing, testing and refining prompts.",
    responsibilities: [
      "Create and improve AI prompts",
      "Test prompt outputs",
      "Refine instructions for accuracy",
      "Work with AI tools",
      "Document effective prompting methods",
      "Collaborate with teams to improve AI-assisted workflows",
    ],
    skills: ["Precise, structured writing", "Systematic testing and comparison of outputs", "Hands-on familiarity with AI tools", "Clear documentation habits"],
  },
];

const applyHref = (title: string) => `/contact?topic=Careers&role=${encodeURIComponent(title)}`;

export default function CareersPage() {
  return (
    <div className="page-root">
      <PageHero
        path="/careers"
        badge="Careers"
        title="Careers At LeadGen AI: Help Teams Find The Right Prospects"
        intro="LeadGen AI builds one pipeline that takes teams from a search to a qualified conversation. We are hiring across sales, business development, marketing, engineering coordination and AI. Browse the open roles below and apply directly."
      >
        <a href="#open-roles" className="btn btn-primary !rounded-full !px-7 !py-3.5">
          View Open Roles <ArrowRight size={17} />
        </a>
        <Link href="/about" className="btn btn-ghost !rounded-full !px-7 !py-3.5">
          About
        </Link>
      </PageHero>

      <section id="open-roles" className="section-y scroll-mt-24">
        <div className="container-x">
          <SectionHeading badge="Open Roles" title={`${ROLES.length} Open Positions`} subtitle="Each role lists what you will do and the skills that help. Apply with a short note about yourself and the role you want." />

          <nav aria-label="Jump to role" className="mt-10 flex flex-wrap justify-center gap-2.5">
            {ROLES.map((r) => (
              <a key={r.id} href={`#${r.id}`} className="chip transition hover:border-brand hover:text-brand">
                {r.title}
              </a>
            ))}
          </nav>

          <div className="mt-9 grid gap-6">
            {ROLES.map(({ icon: Icon, ...r }) => (
              <article key={r.id} id={r.id} className="card scroll-mt-28 overflow-hidden !rounded-3xl">
                <header className="flex flex-col gap-4 border-b border-line bg-surface-2 px-6 py-5 sm:flex-row sm:items-center sm:px-8">
                  <span className="icon-tile">
                    <Icon size={22} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-brand">{r.team}</p>
                    <h3 className="mt-0.5 text-2xl font-extrabold">{r.title}</h3>
                  </div>
                  <Link href={applyHref(r.title)} className="btn btn-primary !rounded-full !px-6">
                    Contact <ArrowRight size={16} />
                  </Link>
                </header>
                <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_1fr_1fr]">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted">About The Role</p>
                    <p className="mt-3 leading-relaxed text-ink-soft">{r.intro}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted">Key Responsibilities</p>
                    <ul className="mt-3 grid gap-2.5">
                      {r.responsibilities.map((x) => (
                        <li key={x} className="flex items-start gap-2.5 text-[15px] text-ink-soft">
                          <Check size={17} className="mt-0.5 shrink-0 text-brand" strokeWidth={2.6} /> {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted">Relevant Skills</p>
                    <ul className="mt-3 grid gap-2.5">
                      {r.skills.map((x) => (
                        <li key={x} className="flex items-start gap-2.5 text-[15px] text-ink-soft">
                          <Sparkle size={15} className="mt-1 shrink-0 text-accent" /> {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-line bg-bg-alt p-6 text-center sm:p-8">
            <LetterHeading text="How To Apply" as="h2" triggerOnScroll className="text-2xl font-extrabold" />
            <span aria-hidden="true" className="heading-accent-line mx-auto mt-2.5" />
            <p className="mt-3 leading-relaxed text-ink-soft">
              Choose a role and select <strong>Apply Now</strong>. The contact form opens with the role filled in. Tell us a little about yourself and include a link to your CV or
              profile. We reply to the email address you provide.
            </p>
          </div>
        </div>
      </section>

      <FaqSection items={CAREERS_FAQS} subtitle="Quick answers about roles and applying at LeadGen AI." cut="cut-tilt" />

      <div className="container-x mt-12 md:mt-14">
        <CtaBand heading="Don’t See Your Role?" text="Send us a note about what you’d like to work on. We read every message." label="Contact" href="/contact?topic=Careers" />
      </div>
    </div>
  );
}
