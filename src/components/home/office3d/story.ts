/**
 * The hero's product story. One illustrative scenario follows the same three sample records through
 * all six stages. Every capability described here is in docs/VERIFIED-FACTS.md; every value shown
 * (names, scores, grades) is SAMPLE DATA for explanation and is labelled as such in the UI.
 */

export const SCENARIO = {
  who: "A web design studio in Pune",
  goal: "find dental clinics that need a better website, and reach the right ones first",
};

/** Fictional businesses. Not real clinics, not real results. */
export interface SampleLead {
  id: "a" | "b" | "c";
  name: string;
  area: string;
  colour: string;
  rating: string;
  phoneRaw: string;
  phone: string;
  website: string | null;
  email: string | null;
  social: string | null;
  score: number;
  reasons: string[];
  flag: string | null;
  flagEvidence: string | null;
}

export const LEADS: SampleLead[] = [
  {
    id: "a",
    name: "Sample Clinic A",
    area: "Kothrud, Pune",
    colour: "#6366f1",
    rating: "4.6 ★ · 212 reviews",
    phoneRaw: "020 2543 xxxx",
    phone: "+91 20 2543 xxxx",
    website: "sampleclinic-a.example",
    email: "hello@sampleclinic-a.example",
    social: "Instagram profile",
    score: 82,
    reasons: ["Complete record: email, phone and website found", "Website resolves and loads", "Matches your category and city", "Active listing with recent reviews"],
    flag: null,
    flagEvidence: null,
  },
  {
    id: "b",
    name: "Sample Clinic B",
    area: "Baner, Pune",
    colour: "#0ea5e9",
    rating: "4.2 ★ · 87 reviews",
    phoneRaw: "98xxx xxx21",
    phone: "+91 98xxx xxx21",
    website: "sampleclinic-b.example",
    email: "contact@sampleclinic-b.example",
    social: null,
    score: 64,
    reasons: ["Reachable by email and phone", "Website online but weak in places", "Matches your category and city"],
    flag: "Weak website audit",
    flagEvidence: "Audit graded the site in the bottom band (see Stage 04)",
  },
  {
    id: "c",
    name: "Sample Clinic C",
    area: "Hadapsar, Pune",
    colour: "#f59e0b",
    rating: "4.8 ★ · 54 reviews",
    phoneRaw: "9xxxx-xxx47",
    phone: "+91 9xxxx xxx47",
    website: null,
    email: null,
    social: null,
    score: 41,
    reasons: ["Phone only: no website or email to enrich", "Matches your category and city", "Active listing with recent reviews"],
    flag: "No website",
    flagEvidence: "No website on the listing and none found during enrichment",
  },
];

export interface StoryStage {
  id: string;
  /** What the user does. */
  input: string;
  /** What the platform does (verified behaviour only). */
  process: string;
  /** What the user gets. */
  output: string;
  /** Why it matters, in one line. */
  why: string;
  /** Label for the demo button. */
  run: string;
  /** Plan note where a feature is plan-limited (from the live plans). */
  plan?: string;
}

export const STORY: Record<string, StoryStage> = {
  scrape: {
    id: "scrape",
    input: "Choose a source and describe the businesses you want: a category and a location.",
    process: "The query fans out to each enabled source. Results are normalised into one record per business and de-duplicated. Long jobs run on the worker fleet, so they finish even if you close the tab.",
    output: "Lead records with name, category, address, phone, website, rating and reviews, and the source of every field.",
    why: "You start from real public listings instead of a blank spreadsheet.",
    run: "Run Sample Search",
    plan: "Free includes 3 queries. LinkedIn and IndiaMART are listed on Scale.",
  },
  enrich: {
    id: "enrich",
    input: "Nothing: new leads are queued for enrichment automatically.",
    process: "The platform resolves each website, crawls the pages that usually carry contact details, and writes a value only when it is more complete than what is there. It never overwrites a field you edited by hand.",
    output: "Business emails from the company’s own site, normalised phone numbers, websites, social profiles and company details, each with its source.",
    why: "Gives you a real route to reach each business.",
    run: "Enrich Sample Records",
  },
  score: {
    id: "score",
    input: "Your target market, category and geography.",
    process: "Each lead is scored on the evidence attached to it: record completeness, website health, fit with your market, and signs of an active business. Scores recalculate when a lead is re-enriched.",
    output: "One 0–100 score per lead, with the reasons stored on the record. Sort or filter by score and push the top band into the CRM.",
    why: "Your team works the best prospects first, and can see why.",
    run: "Score Sample Records",
    plan: "Lead scoring is included on Growth and Scale.",
  },
  audit: {
    id: "audit",
    input: "A lead’s website (here, Sample Clinic B).",
    process: "The site is fetched and checked against rules for technical health, content, metadata, structured data and performance. Each area is graded and rolled into an overall score.",
    output: "An overall grade, a per-area scorecard, findings ranked by severity in plain English, and a prioritised fix list you can hand to the prospect.",
    why: "You open the conversation with evidence the owner can see.",
    run: "Audit Sample Website",
    plan: "SEO reports are listed on Growth and Scale.",
  },
  detect: {
    id: "detect",
    input: "Nothing extra: detection runs on enriched and audited leads.",
    process: "Leads are checked for the patterns that make a business a buyer: no website, a site that doesn’t resolve, no reachable contact route, or an audit in the bottom band.",
    output: "Flagged leads surfaced to the top, each flag carrying the evidence behind it.",
    why: "The clinics with an obvious problem you can solve stop hiding mid-list.",
    run: "Check Sample Records",
  },
  crm: {
    id: "crm",
    input: "Pick the leads to work and review the AI-drafted message.",
    process: "Leads move onto a pipeline board with stages and owners. Outreach is drafted using the lead’s own enrichment and audit data and sent through your own configured email transport, after you approve it.",
    output: "A worked pipeline with full activity history; every message logged against its lead, respecting sending limits and opt-outs.",
    why: "Discovery turns into conversations, with a record of everything sent.",
    run: "Prepare Sample Outreach",
    plan: "AI outreach is included on Growth and Scale.",
  },
};

/** What each room's host says to "you" during the walkthrough. */
export const DIALOGUE: Record<string, { host: string; ask: string; reply: string; done: string }> = {
  scrape: {
    host: "Discovery Desk",
    ask: "Welcome! Who are you looking for today?",
    reply: "Dental clinics in Pune",
    done: "Found them. Three clinics from Google Maps, one de-duplicated record each. Next, let’s find how to reach them.",
  },
  enrich: {
    host: "Enrichment Team",
    ask: "I have your three clinics. Shall I find their contact details?",
    reply: "Yes, enrich them",
    done: "Done. A and B now have emails from their own sites. C has no website, so there was nothing more to find.",
  },
  score: {
    host: "Scoring Desk",
    ask: "Want me to rank these clinics so you know who to call first?",
    reply: "Score them",
    done: "Clinic A is your strongest lead. Every score keeps its reasons, so you can see why.",
  },
  audit: {
    host: "Audit Lab",
    ask: "Clinic B has a website. Shall I check how healthy it is?",
    reply: "Audit their website",
    done: "It grades a D. I’ve listed the fixes by severity, ready to show the owner.",
  },
  detect: {
    host: "Opportunity Desk",
    ask: "Let me spot the clinics that clearly need your help.",
    reply: "Find opportunities",
    done: "Two flags: Clinic C has no website, and Clinic B’s audit is weak. Each comes with its evidence.",
  },
  crm: {
    host: "Outreach Team",
    ask: "Ready to reach out? I’ll put them on your pipeline and draft a message.",
    reply: "Prepare outreach",
    done: "Your draft to Clinic B quotes its audit. Nothing is sent until you approve it.",
  },
};

export const AUDIT_SAMPLE = {
  site: "sampleclinic-b.example",
  grade: "D",
  areas: [
    { name: "Technical health", grade: "C" },
    { name: "Content", grade: "C" },
    { name: "Metadata", grade: "E" },
    { name: "Structured data", grade: "E" },
    { name: "Performance", grade: "D" },
  ],
  findings: [
    { severity: "High", text: "Pages have no meta descriptions, so search results show random snippets." },
    { severity: "High", text: "No structured data, so search engines can’t read clinic hours or location." },
    { severity: "Medium", text: "Large images slow the homepage on mobile." },
  ],
};

export const DRAFT_SAMPLE = {
  to: "Sample Clinic B",
  subject: "Three quick fixes for your clinic’s website",
  body: "Hi, I ran a quick audit of sampleclinic-b.example. Two issues stand out: your pages have no meta descriptions, and search engines can’t read your opening hours. Both are quick to fix. Happy to share the full report.",
};
