import type { PageContent } from "../types";

export const pages: PageContent[] = [
  {
    path: "/resources",
    title: "Resources",
    h1: "Lead Generation Resources: Guides, Glossary, Checklists and Worksheets",
    metaTitle: "Lead Generation Resources, Guides & Checklists",
    metaDescription: "29 practical lead generation resources: beginner guides, a glossary, checklists, an ICP worksheet, compliance overviews, outreach craft and team planning.",
    eyebrow: "Resource library",
    intro: [
      "This resource library collects 29 practical guides for planning, running and improving lead generation, organised so you can find the right one for the job in front of you. Start with the fundamentals if you are new, use the worksheets and checklists when you are setting something up, and turn to the outreach, compliance and team guides when you are scaling.",
      "Every resource is educational. The guides explain methods, trade-offs and common mistakes; they do not promise results or quote invented benchmarks. Where a topic touches on law, such as GDPR, CAN-SPAM or India’s DPDP Act, the guide gives a general overview and points you towards current official sources and qualified advice.",
    ],
    highlights: [
      "29 guides in six clear collections",
      "Worksheets and checklists you can use today",
      "Plain-English compliance overviews",
      "No invented statistics or promises",
    ],
    sections: [
      {
        heading: "Foundations: where to start",
        paragraphs: [
          "If you are building a lead generation process for the first time, these resources give you the vocabulary and a working plan before you spend money on tools or channels.",
        ],
        bullets: [
          "Beginner’s Guide to Lead Generation — the basics and a first campaign, step by step",
          "Lead Generation Glossary — around 60 terms defined from A to Z",
          "Small Business Lead Generation Guide — a low-budget plan for owners",
          "Common Lead Generation Mistakes — pitfalls and how to fix them",
          "Agency Lead Generation FAQ — answers for agencies winning clients",
        ],
      },
      {
        heading: "Worksheets, checklists and planning tools",
        paragraphs: [
          "These are working documents rather than reading material. Use them in a planning session with your team and come out with decisions written down.",
        ],
        bullets: [
          "Lead Generation Checklist — setup to optimisation in one list",
          "ICP Worksheet — a step-by-step ideal customer profile exercise",
          "Lead Generation Budget Planning — allocation and test budgets",
          "Sales & Marketing Alignment — shared definitions both teams sign off",
          "Lead Generation Team Structure — roles and hiring order",
        ],
      },
      {
        heading: "Outreach craft",
        paragraphs: [
          "Outbound works when the list is right and the message is relevant. These guides focus on writing and conversation skills rather than channel strategy.",
        ],
        bullets: [
          "Cold Email Writing Guide — structures and illustrative examples",
          "Outreach Personalisation — choosing signals that make a message relevant",
          "Writing Subject Lines — principles and how to test them",
          "Follow-Up Emails — timing and what to say next",
          "Objection Handling — responding to common pushback",
          "Discovery Calls — agendas and questions",
          "Value Propositions — frameworks for saying why you matter",
        ],
      },
      {
        heading: "Compliance and responsible data",
        paragraphs: [
          "Prospecting involves personal and business data. These overviews explain the main ideas so you can ask better questions of your legal adviser; none of them is legal advice.",
        ],
        bullets: [
          "GDPR & Lead Generation — lawful basis and individual rights",
          "CAN-SPAM Basics — core requirements for commercial email in the US",
          "India DPDP Act Basics — consent and duties under India’s data protection law",
          "Ethical Data Collection — principles that go beyond the legal minimum",
          "Public Business Data — sources and their limits",
        ],
      },
      {
        heading: "Data, deliverability and measurement",
        paragraphs: [
          "The quieter operational work decides whether campaigns keep performing after the first month.",
        ],
        bullets: [
          "Email Deliverability Guide — sender reputation and content",
          "Data Hygiene Guide — routines that keep records usable",
          "List Segmentation — segments that make personalisation possible",
          "Competitor Research — methods for understanding alternatives",
          "SEO Audits as a Sales Tool — using audits ethically in prospecting",
          "Measuring Campaign Success — metrics and review rhythms",
          "Scaling Outreach — growing volume without losing quality",
        ],
      },
    ],
    steps: {
      heading: "How to use this library",
      items: [
        { title: "Learn the language", text: "Skim the glossary so terms such as MQL, ICP and sender reputation mean the same thing to everyone on your team." },
        { title: "Define who you serve", text: "Complete the ICP worksheet before building any list or writing any message." },
        { title: "Check your setup", text: "Work through the checklist and the relevant compliance overview for the countries you contact." },
        { title: "Write and send carefully", text: "Use the outreach craft guides to draft, then the deliverability guide to protect your domain." },
        { title: "Review and improve", text: "Agree measures with sales, then revisit the budget and mistakes guides each quarter." },
      ],
    },
    considerations: {
      heading: "Keep in mind",
      items: [
        "Guides describe common practice; your market, offer and buyers may behave differently, so test before you scale.",
        "Compliance overviews are general and can date as rules change; always check current official guidance.",
        "Worksheets only help if decisions are recorded and shared, not left in someone’s notes.",
        "Reading is not doing: pick one resource, act on it this week, then move to the next.",
      ],
    },
    example: {
      heading: "A first month using the library",
      text: "Imagine a two-person bookkeeping practice in Coimbatore that wants more small-business clients. In week one the partners read the beginner’s guide and fill in the ICP worksheet, settling on owner-run retailers within the city. In week two they use the checklist to set up tracking and read the DPDP overview before contacting anyone. In week three they draft a short cold email using the writing guide and send a small batch. In week four they review replies against the measures they agreed and adjust the message.",
    },
    faqs: [
      { q: "Which resource should a complete beginner read first?", a: "Start with the Beginner’s Guide, then the glossary. Together they give you the core ideas and the vocabulary used in every other guide." },
      { q: "Are the worksheets and checklists free to use internally?", a: "Yes. They are written to be copied into your own documents and adapted for your team’s planning sessions." },
      { q: "Do the compliance guides replace advice from a lawyer?", a: "No. They are educational overviews to help you understand the main ideas. Rules change and depend on your circumstances, so take qualified legal advice." },
      { q: "How do these resources relate to the LeadGen AI product?", a: "Most guides are tool-neutral. Where relevant, they note how a capability such as multi-source scraping, enrichment, 0–100 scoring or SEO audits can support the method described." },
    ],
    related: ["/strategies", "/b2b/ideal-customer-profile", "/responsible-prospecting", "/resources/beginners-guide", "/resources/glossary", "/lead-qualification"],
    cta: { heading: "Put the guides into practice", text: "Try the workflow on a small market with three free queries.", label: "Start free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/resources/beginners-guide",
    title: "Beginner's Guide to Lead Generation",
    h1: "A Beginner’s Guide to Lead Generation: Basics and Your First Campaign",
    metaTitle: "Beginner’s Guide to Lead Generation",
    metaDescription: "New to lead generation? Learn what a lead is, how inbound and outbound differ, and how to plan, run and review a small first campaign without wasting budget.",
    eyebrow: "Getting started",
    intro: [
      "Lead generation is the work of finding people or businesses who might buy from you and starting a conversation with them. For a beginner, the whole discipline comes down to three questions: who exactly should you talk to, how will you reach them, and what will you do when they respond?",
      "This guide covers the basic ideas and then walks you through a small first campaign you can run in a few weeks. The aim is not to produce a flood of leads straight away. It is to learn, with modest effort, which audience and message earn real replies, so that every later campaign starts from evidence instead of guesswork.",
    ],
    highlights: [
      "What counts as a lead",
      "Inbound and outbound in plain terms",
      "A small, low-risk first campaign",
      "How to judge whether it worked",
    ],
    sections: [
      {
        heading: "What a lead actually is",
        paragraphs: [
          "A lead is a person or organisation that could plausibly become a customer and that you have some way to contact. A business name scribbled on a list is a prospect; once you have a reachable contact and a reason to believe they fit, many teams call it a lead. When the lead shows interest or meets agreed criteria, it becomes qualified.",
          "These stages matter because they stop you mixing up activity and progress. A spreadsheet of a thousand names is not a pipeline. Ten conversations with businesses that fit is.",
        ],
        bullets: [
          "Prospect: fits your target market, not yet contacted",
          "Lead: reachable and plausibly a fit",
          "Qualified lead: interested or meets agreed criteria",
          "Opportunity: an active conversation about buying",
        ],
      },
      {
        heading: "The two directions: inbound and outbound",
        paragraphs: [
          "Inbound means buyers come to you, usually through search, content, reviews, referrals or ads. Outbound means you go to them, typically by email, phone or a professional network. Inbound tends to take longer to build but compounds; outbound gives you control over who you contact and when.",
          "Beginners often do best with one small outbound test, because it produces feedback quickly. You learn within weeks whether your audience and offer make sense, which then informs the content and pages you build for inbound.",
        ],
      },
      {
        heading: "The building blocks you need before starting",
        paragraphs: [
          "You do not need an elaborate stack. You need a clear description of who you serve, a simple offer, somewhere to record contacts and conversations, and a way to send messages that respects the rules in the countries you contact.",
        ],
        bullets: [
          "A one-paragraph ideal customer profile",
          "An offer that is easy to say yes to, such as a short call or a free review",
          "A place to track leads and stages, even a simple pipeline board",
          "A sending setup with authentication and an opt-out route",
        ],
      },
      {
        heading: "Where a platform helps and where it does not",
        paragraphs: [
          "Building the first list by hand teaches you a lot, but it is slow. LeadGen AI can run one query, such as a category and a city, across Google Maps, LinkedIn and IndiaMART, merge the results into one record per business, enrich them with contact details from each company’s own website and score each lead from 0 to 100 with stored reasons. The Free plan includes three scrape queries, website enrichment, the lead dashboard and CSV export.",
          "What a tool cannot do is decide who you should serve or what you should say. Those decisions remain yours, and they matter more than the size of the list.",
        ],
      },
    ],
    steps: {
      heading: "Run your first campaign",
      items: [
        { title: "Pick a narrow audience", text: "Choose one type of business in one place, for example independent physiotherapy clinics in one city." },
        { title: "Build a list of 50 to 100", text: "Keep it small enough to research properly. Remove anything that clearly does not fit." },
        { title: "Write one short message", text: "Explain who you help, one specific problem and a low-effort next step. Keep it under 120 words." },
        { title: "Send in small batches", text: "Send a handful a day, follow up once or twice, and honour every opt-out immediately." },
        { title: "Log every response", text: "Record replies, objections and meetings against each lead so patterns become visible." },
        { title: "Review after three weeks", text: "Compare reply quality across segments, keep what worked and change one thing for the next round." },
      ],
    },
    considerations: {
      heading: "Common beginner traps",
      items: [
        "Targeting everyone makes every message generic; narrow audiences produce clearer feedback.",
        "Large first sends from a new domain can harm deliverability before you have learned anything.",
        "Judging a campaign on opens rather than replies and meetings rewards the wrong behaviour.",
        "Rules on unsolicited contact differ by country; read the relevant overview and check current guidance.",
        "Changing several variables at once makes it impossible to know what caused a result.",
      ],
    },
    example: {
      heading: "A first campaign for a freelance photographer",
      text: "Picture a freelance product photographer in Jaipur who wants work from small online sellers. She lists 60 handicraft businesses with weak product images on their websites, writes a four-sentence email offering to reshoot three products as a sample, and sends ten a day. After three weeks she notices that replies come mostly from businesses with an active Instagram presence, so her second list focuses on those.",
    },
    faqs: [
      { q: "How many leads should a first campaign target?", a: "Somewhere between 50 and 100 is a sensible range. It is enough to see patterns and small enough to research each lead and write relevant messages." },
      { q: "Should I start with inbound or outbound?", a: "Many beginners start with a small outbound test because it gives faster feedback, then use what they learn to shape inbound content. Both work best together over time." },
      { q: "What is a realistic goal for my first few weeks?", a: "Aim to learn which audience and message produce genuine conversations. A handful of good replies is a useful result, because it tells you where to focus next." },
    ],
    related: ["/strategies", "/b2b/ideal-customer-profile", "/strategies/cold-email-outreach", "/resources/glossary", "/resources/lead-generation-checklist", "/resources/small-business-guide"],
    cta: { heading: "Build your first list in minutes", text: "Use three free queries to find and enrich your first audience.", label: "Start free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/resources/glossary",
    title: "Lead Generation Glossary",
    h1: "Lead Generation Glossary: Key Terms from A to Z",
    metaTitle: "Lead Generation Glossary: A–Z Terms Explained",
    metaDescription: "Plain-English definitions of 70+ lead generation terms, from A/B testing and BANT to sender reputation, SQL and workflow, grouped alphabetically.",
    eyebrow: "Reference",
    intro: [
      "This glossary defines the lead generation terms you are most likely to meet in sales, marketing and operations conversations, in plain English and grouped alphabetically. Use it to settle what a word means before a planning meeting, or share it with new team members so everyone works from the same vocabulary.",
      "Definitions describe how terms are commonly used; some organisations use them slightly differently. Where your team has its own meaning, such as what counts as a marketing qualified lead, write that definition down and agree it with sales.",
    ],
    highlights: [
      "70+ terms defined plainly",
      "Grouped by letter for quick scanning",
      "Covers sales, marketing and data terms",
      "Useful for onboarding new team members",
    ],
    sections: [
      {
        heading: "A to C",
        paragraphs: ["Terms covering testing, accounts, attribution, buying frameworks and conversion."],
        bullets: [
          "A/B test — showing two versions of a page, email or ad to comparable audiences to see which performs better on one measure",
          "Account-based marketing (ABM) — targeting a defined list of named organisations with coordinated, tailored outreach",
          "Attribution — the method used to credit leads or revenue to the channels and touches that influenced them",
          "Authentication (email) — DNS records such as SPF, DKIM and DMARC that let receiving servers verify a sender",
          "BANT — a qualification framework checking budget, authority, need and timeline",
          "Bounce — an email that could not be delivered; hard bounces are permanent, soft bounces temporary",
          "Buyer persona — a profile of an individual role in the buying process, with goals, pains and preferences",
          "Buying committee — the group of people who influence or approve a purchase",
          "Call to action (CTA) — the specific next step a message or page asks someone to take",
          "CHAMP — a qualification framework that starts with challenges, then authority, money and prioritisation",
          "Churn — customers who stop buying or cancel within a period",
          "Cold outreach — contacting someone who has had no previous relationship with you",
          "Conversion rate — the share of people at one stage who move to the next",
          "Cost per lead (CPL) — total spend on a channel divided by the leads it produced",
          "CRM — customer relationship management software that stores contacts, deals and activity",
        ],
      },
      {
        heading: "D to H",
        paragraphs: ["Terms covering data quality, deliverability, enrichment and funnels."],
        bullets: [
          "Data decay — the gradual loss of accuracy as people change roles and businesses move or close",
          "De-duplication — merging or removing records that describe the same person or business",
          "Deliverability — the ability of your emails to reach the inbox rather than spam or rejection",
          "Discovery call — an early conversation to understand a prospect’s situation and decide whether to proceed",
          "Disqualification — deciding a lead is not a fit and removing it from active pursuit",
          "Double opt-in — a sign-up confirmed by a second step, usually clicking a link in an email",
          "Drip campaign — a pre-scheduled series of messages sent over time",
          "Enrichment — adding missing details, such as website, email or social profiles, to an existing record",
          "Firmographics — company attributes such as industry, size, location and structure",
          "Fit score — a measure of how closely a lead matches your ideal customer profile",
          "Follow-up cadence — the planned timing and number of follow-up touches",
          "Funnel — the stages a lead moves through from first contact to customer",
          "Gated content — material offered in exchange for contact details",
          "Hand-off — passing a lead from marketing to sales, or from one owner to another, with context",
        ],
      },
      {
        heading: "I to M",
        paragraphs: ["Terms covering customer profiles, intent, lists and qualification stages."],
        bullets: [
          "Ideal customer profile (ICP) — a description of the organisations most likely to buy, succeed and stay",
          "Inbound — leads who find you, typically through search, content, referrals or ads",
          "Intent signal — behaviour suggesting active interest, such as visiting a pricing page or searching a topic",
          "Lawful basis — under GDPR, the legal ground relied on for processing personal data",
          "Lead — a potential customer you can contact and who plausibly fits your market",
          "Lead magnet — a useful resource offered to attract sign-ups",
          "Lead nurturing — building a relationship with leads who are not yet ready to buy",
          "Lead routing — the rules that assign incoming leads to the right person or team",
          "Lead scoring — ranking leads by fit, interest or both, often as a number",
          "Lead source — the channel or origin a lead came from",
          "List hygiene — routine cleaning of contact lists to remove invalid, outdated or opted-out records",
          "MQL (marketing qualified lead) — a lead marketing judges ready for sales attention under agreed criteria",
          "Multichannel — using several channels, such as email, phone and social, in one campaign",
        ],
      },
      {
        heading: "N to R",
        paragraphs: ["Terms covering consent, offers, pipelines and reporting."],
        bullets: [
          "Negative scoring — reducing a lead’s score for signals of poor fit or disinterest",
          "Normalisation — making fields consistent, such as phone formats or category names",
          "Objection — a stated reason a prospect hesitates or declines",
          "Opt-in — explicit permission to receive communications",
          "Opt-out — a request to stop receiving communications, which should be honoured promptly",
          "Outbound — contacting prospects who have not approached you",
          "Personalisation — tailoring a message using details relevant to the recipient",
          "Pipeline — the set of open opportunities and the stages they sit in",
          "Pipeline velocity — how quickly value moves through the pipeline to closed deals",
          "Prospect — a person or business that fits your market but has not yet engaged",
          "Qualification — checking whether a lead fits and is worth pursuing",
          "Re-engagement — an attempt to revive leads who have gone quiet",
          "Reply rate — the share of contacted prospects who respond",
          "Retargeting — showing ads to people who have previously interacted with you",
          "ROI — return on investment, the gain from a campaign relative to its cost",
        ],
      },
      {
        heading: "S to Z",
        paragraphs: ["Terms covering sales roles, sending, service levels and the end of the funnel."],
        bullets: [
          "SDR (sales development representative) — a role focused on prospecting and booking first meetings",
          "Segmentation — dividing a list into groups that share relevant characteristics",
          "Sender reputation — how mailbox providers judge a sending domain and IP, based on past behaviour",
          "Sequence — a planned set of outreach steps across days or weeks",
          "SLA (service level agreement) — an internal commitment, such as following up on a lead within a set time",
          "Speed to lead — the time between a lead’s enquiry and your first response",
          "SQL (sales qualified lead) — a lead sales has accepted as worth active pursuit",
          "Suppression list — contacts who must never be messaged, such as opt-outs",
          "Territory — a defined set of accounts or geography owned by a seller",
          "Total addressable market (TAM) — every organisation that could theoretically buy your offer",
          "Trigger event — a change, such as a new location or funding, that creates a reason to reach out",
          "UTM parameters — tags added to links so analytics can identify the campaign and source",
          "Value proposition — a clear statement of the benefit you deliver and to whom",
          "Warm lead — someone with existing awareness of, or contact with, your business",
          "Workflow — an automated or documented sequence of steps applied to leads",
        ],
      },
    ],
    considerations: {
      heading: "Using a shared vocabulary well",
      items: [
        "Terms such as MQL and SQL are only useful when your teams agree on the exact criteria behind them.",
        "Avoid importing jargon into prospect-facing messages; buyers rarely care what stage you think they are in.",
        "Revisit definitions when your process changes, or reports will quietly start measuring different things.",
        "Regulatory terms such as lawful basis have specific legal meanings; check official sources before relying on them.",
      ],
    },
    faqs: [
      { q: "What is the difference between a prospect and a lead?", a: "A prospect fits your target market but has not engaged; many teams call it a lead once there is a reachable contact and a reasonable belief that it fits. Your team should agree its own line." },
      { q: "Why do MQL and SQL definitions vary so much between companies?", a: "They reflect each company’s sales process, deal size and capacity. A team with few sellers may set a high bar for an SQL, while a high-volume team may accept leads earlier." },
      { q: "Should our team keep its own internal glossary?", a: "Yes, especially for stage names, score bands and disqualification reasons. A short internal glossary reduces arguments about reporting and makes onboarding faster." },
    ],
    related: ["/resources", "/resources/beginners-guide", "/lead-qualification/mql-vs-sql", "/services/ai-lead-scoring", "/b2b/ideal-customer-profile", "/resources/sales-marketing-alignment"],
    cta: { heading: "See these terms in action", text: "Walk through scoring, enrichment and pipeline stages on a live workspace.", label: "Request access", href: "/book-a-demo" },
  },
  {
    path: "/resources/lead-generation-checklist",
    title: "Lead Generation Checklist",
    h1: "The Lead Generation Checklist: From Setup to Ongoing Optimisation",
    metaTitle: "Lead Generation Checklist: Setup to Optimisation",
    metaDescription: "A practical lead generation checklist covering targeting, data, sending setup, compliance, follow-up, tracking and quarterly optimisation, ready to copy.",
    eyebrow: "Checklist",
    intro: [
      "A lead generation checklist makes sure the unglamorous foundations are in place before you launch, and that you keep improving once campaigns are running. Work through the items below in order, tick off what is done, and treat anything unticked as a risk to fix before scaling.",
      "The list is grouped into six phases: strategy, data, infrastructure, compliance, execution and optimisation. Copy it into your own document, assign an owner to each item and add a date. A checklist nobody owns tends to be completed once and then forgotten.",
    ],
    highlights: [
      "Six phases with tickable items",
      "Owners and dates for every item",
      "Covers compliance and deliverability basics",
      "A quarterly review routine built in",
    ],
    sections: [
      {
        heading: "Phase 1: strategy and targeting",
        paragraphs: ["Nothing else on this list works if you are talking to the wrong people with an unclear offer."],
        bullets: [
          "ICP written down: industry, size, geography, problem and disqualifiers",
          "One to three buyer roles identified for each target segment",
          "Value proposition stated in one sentence per segment",
          "A low-friction offer chosen, such as a short call or a free review",
          "Goals agreed in conversations and opportunities, not only lead counts",
        ],
      },
      {
        heading: "Phase 2: data and lists",
        paragraphs: ["Good data saves more time than any message tweak."],
        bullets: [
          "Sources chosen to match where your ICP is listed, such as maps, directories or professional networks",
          "Duplicates merged so each business appears once",
          "Contact details checked and the source of each field recorded",
          "Leads prioritised by fit, for example with a score and stored reasons",
          "Suppression list of opt-outs and existing customers loaded before any send",
        ],
      },
      {
        heading: "Phase 3: sending and tracking infrastructure",
        paragraphs: ["Set these up once and check them every quarter."],
        bullets: [
          "Email authentication records in place for the sending domain",
          "Sending volumes planned to ramp gradually",
          "Pipeline stages defined with owners and activity logging",
          "UTM tags on every campaign link",
          "Website forms tested and routed to a named person",
        ],
      },
      {
        heading: "Phase 4: compliance and responsibility",
        paragraphs: ["This is not legal advice; it is a prompt to check the rules that apply to you."],
        bullets: [
          "Applicable laws identified for each country you contact",
          "Lawful basis or consent position documented where required",
          "Clear sender identity and a working opt-out in every commercial message",
          "Privacy notice published and accurate",
          "Retention period set for prospect data you no longer need",
        ],
      },
      {
        heading: "Phase 5 and 6: execution and optimisation",
        paragraphs: ["Running a campaign well is mostly consistency; improving it is mostly honest review."],
        bullets: [
          "Messages reviewed by a second person before first send",
          "Follow-ups scheduled and responses logged against each lead",
          "Response time to inbound enquiries monitored",
          "Results reviewed by segment and source every month",
          "One change tested at a time, with notes on what was learned",
          "Lost and disqualified reasons collected and fed back into targeting",
        ],
      },
    ],
    steps: {
      heading: "How to run the checklist with your team",
      items: [
        { title: "Copy and assign", text: "Paste the list into a shared document and give every item an owner and a target date." },
        { title: "Mark the gaps", text: "Hold a short session to mark each item done, partial or missing, without debate about blame." },
        { title: "Fix blockers first", text: "Resolve anything in phases 1, 3 and 4 before launching, because those gaps are hardest to repair later." },
        { title: "Launch small", text: "Start with a limited segment so problems surface while they are cheap to fix." },
        { title: "Review quarterly", text: "Revisit the full list every quarter and after any major change to tools, team or market." },
      ],
    },
    considerations: {
      heading: "Limits of a checklist",
      items: [
        "A ticked box is not proof of quality; spot-check data and messages rather than trusting the tick.",
        "Some items, such as compliance, need specialist input that a checklist cannot supply.",
        "Long lists can stall a small team; prioritise the items that block launch and schedule the rest.",
        "Your process will evolve, so edit the checklist instead of working around it.",
      ],
    },
    example: {
      heading: "A checklist session at a small IT services firm",
      text: "Consider a five-person managed IT firm in Kochi preparing to approach dental and accounting practices. Running the checklist, they find no suppression list, no authentication on a new sending domain and no agreed definition of a qualified lead. They delay launch by a week, fix the domain, load existing clients as suppressed and agree that a qualified lead is a practice with more than five workstations and an expressed IT concern.",
    },
    faqs: [
      { q: "Which checklist items matter most before launching?", a: "Targeting, sending authentication, a suppression list and a working opt-out. Gaps there cause wasted effort, damaged reputation or compliance trouble that is hard to undo." },
      { q: "How often should we revisit the checklist?", a: "Quarterly works for most teams, plus whenever you change tools, enter a new country or segment, or bring on new team members." },
      { q: "Can one person own the whole checklist?", a: "One person can coordinate it, but items such as compliance, sending setup and sales definitions usually need input from different people." },
    ],
    related: ["/resources/icp-worksheet", "/resources/email-deliverability", "/services/lead-deduplication", "/responsible-prospecting", "/tools/utm-tracking", "/resources/beginners-guide"],
    cta: { heading: "Tick the data items faster", text: "Scrape, de-duplicate, enrich and score leads in one pipeline.", label: "See plans", href: "/plans" },
  },
  {
    path: "/resources/cold-email-writing",
    title: "Cold Email Writing Guide",
    h1: "Cold Email Writing: Structures, Sentences and Illustrative Examples",
    metaTitle: "Cold Email Writing Guide: Structures & Examples",
    metaDescription: "Learn the craft of writing cold emails: opening lines, structures that work, word choice, calls to action and illustrative example emails you can adapt.",
    eyebrow: "Outreach craft",
    intro: [
      "A well-written cold email is short, specific and easy to answer: it shows why you are writing to this person, offers one relevant idea and asks for one small next step. This guide is about the writing itself — sentence by sentence — rather than targeting, sequencing or volume, which the cold email outreach playbook covers.",
      "Below you will find the anatomy of a cold email, four structures you can adapt, a section on word choice and tone, and illustrative example emails. The examples are invented to show structure; they are not templates to send unchanged, and they make no claims about results.",
    ],
    highlights: [
      "Anatomy of a strong cold email",
      "Four adaptable structures",
      "Tone and word-choice guidance",
      "Illustrative examples, clearly labelled",
    ],
    sections: [
      {
        heading: "The anatomy of a cold email",
        paragraphs: [
          "Most effective cold emails contain the same four parts, whatever the industry. Each should earn its place in one or two sentences.",
        ],
        bullets: [
          "Reason for writing: a specific observation about the recipient, not a compliment",
          "Relevance: the problem or opportunity that observation suggests",
          "Credibility: one line on how you help similar businesses, without inflated claims",
          "Ask: a single question that is easy to answer with a yes, no or short reply",
        ],
      },
      {
        heading: "Four structures to adapt",
        paragraphs: [
          "Structures are scaffolding. Pick the one that fits what you genuinely know about the recipient.",
        ],
        bullets: [
          "Observation → implication → offer → question: best when you have noticed something concrete",
          "Question → context → option → question: opens with a problem the reader may recognise",
          "Before → after → bridge: describes a current state, a better state and how you get there",
          "Referral or shared context → reason → ask: when you have a mutual connection or shared event",
        ],
      },
      {
        heading: "Word choice, length and tone",
        paragraphs: [
          "Write as you would to a respected peer. Plain verbs beat business jargon, and concrete nouns beat adjectives. Cut any sentence that only talks about you. Many writers aim for 50 to 125 words, readable on a phone without scrolling.",
          "Avoid false familiarity, manufactured urgency and fake reply threads. They might lift a first response, but they erode trust and invite complaints.",
        ],
        bullets: [
          "Replace “we are a leading provider of” with what you actually do",
          "Replace “I hope this finds you well” with your reason for writing",
          "Replace “let me know if you’d like to hop on a quick 30-minute call” with a smaller ask",
          "Read it aloud: if you would not say it, rewrite it",
        ],
      },
      {
        heading: "Illustrative example: observation-led",
        paragraphs: [
          "Illustrative only. “Hi Meera — I was looking at Lotus Physio’s booking page and noticed the form doesn’t load on mobile. For a clinic where most new patients probably search on their phones, that may be costing enquiries. I fix booking flows for independent clinics. Would a two-minute screen recording showing the issue be useful?”",
          "Why it works: the observation is specific and checkable, the implication is hedged rather than exaggerated, and the ask offers value before requesting time.",
        ],
      },
      {
        heading: "Illustrative example: question-led",
        paragraphs: [
          "Illustrative only. “Hi Arjun — how are you currently handling bulk enquiries from IndiaMART at Sharma Fasteners? Many component suppliers I speak to find quotes slip because enquiries arrive in several places. I help small manufacturers put those enquiries into one tracked pipeline. Is that a problem worth a short chat, or is it already handled?”",
          "Why it works: the opening question invites a real answer, the middle line frames a common pattern without statistics, and the closing question gives an easy way to say no.",
        ],
      },
      {
        heading: "Where data makes writing easier",
        paragraphs: [
          "The hardest part of writing a cold email is having something true and specific to say. LeadGen AI’s enrichment and SEO audit data, such as missing metadata or a slow page, can supply that observation, and its AI-drafted outreach uses the lead’s own enrichment and audit data as a starting point. Review every draft yourself; the writer remains responsible for accuracy and tone.",
        ],
      },
    ],
    steps: {
      heading: "Write a cold email in six passes",
      items: [
        { title: "Find one true observation", text: "Look at the recipient’s website, listing or public profile and note one specific, verifiable detail." },
        { title: "Choose a structure", text: "Match the structure to what you know: observation-led if you have a detail, question-led if you have a common problem." },
        { title: "Draft without editing", text: "Write the four parts quickly, then leave it for a few minutes." },
        { title: "Cut by a third", text: "Remove throat-clearing, adjectives and any sentence about your company history." },
        { title: "Shrink the ask", text: "Make the next step smaller: a question, a resource or a short call rather than a long demo." },
        { title: "Check facts and compliance", text: "Confirm every claim is accurate and include your identity and an opt-out where required." },
      ],
    },
    considerations: {
      heading: "Writing pitfalls to avoid",
      items: [
        "Personalisation that is wrong is worse than none; double-check names, businesses and details.",
        "Clever subject lines that mislead the reader may breach rules and will damage trust.",
        "Long emails bury the ask; if it needs explaining, offer to explain on a call.",
        "AI-assisted drafts can sound generic or invent details; edit them line by line.",
        "Rules on commercial email vary by country; check current requirements for your recipients.",
      ],
    },
    example: {
      heading: "Rewriting a weak first draft",
      text: "Imagine a branding studio in Indore whose first draft reads: “We are a full-service creative agency with ten years’ experience delivering world-class branding.” Rewritten, it becomes: “Your new outlet in Vijay Nagar still uses the old logo on its Google listing. If a consistent refresh across your three locations is on your list this year, I can share how we’d approach it in a one-page note. Useful?” The second version is shorter, specific and easy to answer.",
    },
    faqs: [
      { q: "How long should a cold email be?", a: "Short enough to read on a phone without scrolling. Many writers aim for roughly 50 to 125 words, but clarity matters more than any exact count." },
      { q: "Is it acceptable to use humour in a cold email?", a: "Light, natural humour can work if it suits your brand and audience, but it is easy to misjudge with strangers. If in doubt, let clarity and relevance carry the message." },
      { q: "Should a cold email include links or attachments?", a: "Keep links to a minimum and avoid attachments in a first email, since both can affect deliverability and feel presumptuous. Offer to send material if the reader is interested." },
      { q: "How do I end a cold email without sounding pushy?", a: "Ask one simple question that is easy to answer either way, such as whether the problem is relevant or already handled, rather than demanding a meeting slot." },
    ],
    related: ["/strategies/cold-email-outreach", "/services/ai-drafted-outreach-messages", "/services/seo-website-audit", "/resources/subject-lines", "/resources/outreach-personalisation", "/resources/follow-up-emails"],
    cta: { heading: "Start every email with a real observation", text: "Use enrichment and audit findings as the basis for your first line.", label: "Request access", href: "/book-a-demo" },
  },
  {
    path: "/resources/outreach-personalisation",
    title: "Outreach Personalisation",
    h1: "Outreach Personalisation: Choosing Signals That Make Messages Relevant",
    metaTitle: "Outreach Personalisation: Signals and Relevance",
    metaDescription: "How SDRs choose personalisation signals that actually matter, from listing gaps to trigger events, and turn them into relevant outreach that scales sensibly.",
    eyebrow: "Outreach craft",
    intro: [
      "Good outreach personalisation connects a specific, relevant signal about the recipient to the reason you are writing; it is about relevance, not about proving you looked at their profile. Mentioning someone’s university or a recent holiday post is decoration. Pointing out that their booking page breaks on mobile, when you fix booking pages, is personalisation.",
      "This guide helps SDRs decide which signals are worth using, how deep to go for different segments and how to keep personalisation accurate as volume grows. It complements the cold email writing guide, which focuses on sentence-level craft.",
    ],
    highlights: [
      "Relevance over decoration",
      "A signal hierarchy for SDRs",
      "Tiered depth by account value",
      "Accuracy checks at scale",
    ],
    sections: [
      {
        heading: "Decoration versus relevance",
        paragraphs: [
          "A useful test: if you removed the personalised line, would the reason for your email change? If not, the line is decoration. Relevant personalisation explains why this recipient, why this offer and why now.",
          "Decorative lines are not harmless. Recipients increasingly recognise templated flattery, and it can make an otherwise solid email feel automated.",
        ],
      },
      {
        heading: "A hierarchy of signals",
        paragraphs: [
          "Not all signals are equal. Rank them by how directly they connect to the problem you solve.",
        ],
        bullets: [
          "Problem evidence: a visible gap you can fix, such as no website, a slow site or missing listing details",
          "Trigger events: a new location, a new hire in a relevant role, an expansion or a rebrand",
          "Fit context: category, size and geography that match businesses you already serve well",
          "Role context: the recipient’s responsibilities and the decisions they likely own",
          "Social context: shared connections, events or communities, used only when genuine",
        ],
      },
      {
        heading: "Tiering personalisation depth",
        paragraphs: [
          "Researching every lead deeply does not scale, and it is unnecessary. Many teams use tiers: deep, hand-written research for a small set of high-value accounts; one specific signal per lead for the main list; and segment-level relevance for broad, lower-value groups.",
        ],
        bullets: [
          "Tier 1: several signals, a custom angle and a tailored resource",
          "Tier 2: one problem or trigger signal plus segment messaging",
          "Tier 3: a message written for a tight segment, with no individual research",
        ],
      },
      {
        heading: "Turning data into a first line",
        paragraphs: [
          "Structured data makes tier 2 practical. LeadGen AI records listing-completeness signals, ratings and review counts, enrichment results and SEO audit findings on each lead, and its opportunity detection flags businesses with no website, sites that don’t resolve or weak audits, with the evidence attached. That evidence can become a specific, checkable opening line.",
          "Because every field records its source, you can verify a detail before using it rather than trusting it blindly.",
        ],
      },
      {
        heading: "Keeping personalisation accurate",
        paragraphs: [
          "The worst outcome is confident personalisation that is wrong: a closed branch, a misspelt name, a problem already fixed. Build checks into your process instead of relying on memory.",
        ],
        bullets: [
          "Verify the signal on the live website or listing before sending",
          "Use cautious language: “it looks like” rather than “you have”",
          "Refresh enrichment for old leads before reusing them",
          "Log which signal you used so replies can be analysed by signal type",
        ],
      },
    ],
    steps: {
      heading: "Personalise a batch of leads",
      items: [
        { title: "Segment first", text: "Group leads so that segment-level relevance is already strong before any individual research." },
        { title: "Assign tiers", text: "Mark a small number of accounts for deep research and the rest for single-signal personalisation." },
        { title: "Pull one signal per lead", text: "Choose the highest signal available from the hierarchy and note its source." },
        { title: "Write the bridge", text: "Connect the signal to your offer in one sentence that explains why it matters to them." },
        { title: "Verify and send", text: "Check the signal is still true, then send and record which signal type you used." },
      ],
    },
    considerations: {
      heading: "Trade-offs to weigh",
      items: [
        "Deep personalisation for every lead can collapse volume to a level that never produces enough conversations.",
        "Personal details unrelated to business can feel intrusive and may raise data protection questions.",
        "Automated personalisation fields can produce awkward or incorrect sentences without review.",
        "Signals age quickly; a trigger from six months ago is no longer a reason to write.",
      ],
    },
    example: {
      heading: "Signal-based personalisation for a web studio",
      text: "Suppose a web studio in Nagpur prospects restaurants. The team sorts leads by signal: twelve have no website, thirty have sites that load slowly on mobile and the rest have no obvious gap. The first group gets a message about being discoverable beyond the map listing, the second a note about slow menus on phones, and the third a segment-level email about online ordering. Replies are later compared by signal group to see which angle resonates.",
    },
    faqs: [
      { q: "How much time should an SDR spend researching one lead?", a: "It depends on the tier. A high-value account may justify extended research, while most leads need only enough time to find and verify one relevant signal." },
      { q: "Is mentioning a prospect’s social media posts a good idea?", a: "Only when the post is business-related and connects to your reason for writing. Personal posts used as icebreakers often feel intrusive." },
      { q: "Can personalisation be done well with AI assistance?", a: "AI can draft lines from structured data, but someone should check every claim and the tone. The value comes from accurate signals, not from the drafting itself." },
    ],
    related: ["/resources/cold-email-writing", "/services/business-opportunity-detection", "/services/prospect-research", "/strategies/trigger-event-prospecting", "/resources/list-segmentation", "/b2b/sdr-teams"],
    cta: { heading: "Find a real signal for every lead", text: "See enrichment, audit and opportunity flags on your own market.", label: "Request access", href: "/book-a-demo" },
  },
  {
    path: "/resources/gdpr-and-lead-generation",
    title: "GDPR & Lead Generation",
    h1: "GDPR and Lead Generation: Lawful Basis and Rights Explained",
    metaTitle: "GDPR and Lead Generation: An Educational Overview",
    metaDescription: "An educational overview of how GDPR affects lead generation: personal data, lawful basis, legitimate interests, transparency and individual rights. Not legal advice.",
    eyebrow: "Compliance overview",
    intro: [
      "GDPR applies to lead generation whenever you collect or use personal data about people in the EU, including business contacts such as a named person’s work email. It does not ban prospecting, but it requires a lawful basis for processing, transparency about what you do and respect for individuals’ rights.",
      "Not legal advice: this page is a general, educational overview to help you understand the main concepts and ask better questions. Requirements depend on your circumstances, member-state rules and related laws on electronic marketing, and they change. Check current guidance from the relevant data protection authority and take advice from a qualified professional before relying on any approach.",
    ],
    highlights: [
      "Educational overview, not legal advice",
      "Business contacts can be personal data",
      "Lawful basis and rights explained",
      "Practical questions to ask your adviser",
    ],
    sections: [
      {
        heading: "When GDPR applies to prospecting",
        paragraphs: [
          "GDPR concerns personal data: information that relates to an identifiable person. A company’s general switchboard number may not identify anyone, but a named employee’s email address, direct line or profile usually does. That means most B2B prospecting involves personal data, even though the purpose is business.",
          "The regulation can apply to organisations outside the EU when they target or monitor people in the EU. The UK has its own closely related regime. If you contact European prospects from India, the US or elsewhere, assume the rules may be relevant and check.",
        ],
      },
      {
        heading: "Lawful basis in plain terms",
        paragraphs: [
          "Every processing activity needs a lawful basis. For prospecting, discussions usually centre on two: consent and legitimate interests. Consent must be freely given, specific, informed and unambiguous. Legitimate interests can apply where your interest is genuine, the processing is necessary for it and it is not overridden by the person’s rights and expectations.",
          "Organisations relying on legitimate interests commonly document a balancing assessment explaining why the processing is reasonable. Separately, electronic marketing rules in individual countries may require consent for certain emails regardless of the GDPR basis, and these differ between B2B and consumer contexts.",
        ],
      },
      {
        heading: "Transparency obligations",
        paragraphs: [
          "People should know who is processing their data, why, on what basis, where it came from and how to exercise their rights. When you collect data from a source other than the person, such as a public website or directory, there are generally obligations to inform them within a reasonable time, often at first contact.",
        ],
        bullets: [
          "Identify your organisation clearly in outreach",
          "Explain briefly where you obtained their details",
          "Link to a privacy notice that covers prospecting",
          "Offer a simple way to object or opt out",
        ],
      },
      {
        heading: "Individual rights you must be ready to handle",
        paragraphs: [
          "Individuals have rights over their data, and prospecting processes should handle them without fuss. The right to object to direct marketing is particularly relevant: when someone objects, stop using their data for marketing and keep only what you need to make sure they are not contacted again.",
        ],
        bullets: [
          "Right to be informed about processing",
          "Right of access to the data you hold",
          "Rights to rectification and, in some cases, erasure",
          "Right to object, including to direct marketing",
          "Rights relating to restriction and portability in certain situations",
        ],
      },
      {
        heading: "Data minimisation and retention",
        paragraphs: [
          "Collect only what you need for the purpose. A prospect record rarely needs more than business details, a work contact route and notes relevant to the conversation. Set retention periods so stale prospect data is deleted rather than kept indefinitely.",
          "LeadGen AI records the source of each field and every job records what it fetched and when, which can support your own records of where data came from. Role-based access helps limit who sees which records. These features support good practice; they do not make any process compliant on their own.",
        ],
      },
    ],
    steps: {
      heading: "Questions to work through with your adviser",
      items: [
        { title: "Map your data", text: "List what personal data you collect about prospects, from which sources and where it is stored." },
        { title: "Choose and document a basis", text: "Decide the lawful basis for each activity and record your reasoning, including any balancing assessment." },
        { title: "Check marketing rules", text: "Confirm the electronic marketing rules in each country you contact, which may differ for business and consumer recipients." },
        { title: "Update notices and messages", text: "Make sure outreach identifies you, explains the source and links to a suitable privacy notice." },
        { title: "Set up rights handling", text: "Create a process and suppression list so objections and requests are handled promptly." },
      ],
    },
    considerations: {
      heading: "Important caveats",
      items: [
        "This overview is general and educational; it is not legal advice and may not reflect the latest guidance.",
        "Publicly available data is still personal data and does not escape the regulation simply by being public.",
        "Individual countries’ electronic marketing laws add requirements beyond GDPR itself.",
        "Penalties can be significant; rely on official sources and qualified advisers rather than summaries.",
      ],
    },
    example: {
      heading: "Preparing for a European outreach test",
      text: "Imagine a software consultancy in Pune planning to email operations managers at logistics firms in the Netherlands. Before sending, it maps the data it will hold, asks an adviser about lawful basis and Dutch marketing rules, writes a short privacy notice section on prospecting, adds a line to each email explaining where the contact came from and sets up a suppression list for anyone who objects.",
    },
    faqs: [
      { q: "Does GDPR apply to B2B emails sent to named employees?", a: "Generally the named person’s work email is personal data, so GDPR is relevant. Separate national marketing rules may treat business recipients differently, so check the specific countries with an adviser." },
      { q: "Is legitimate interest always available for cold outreach?", a: "No. It depends on whether the interest is genuine, the processing necessary and the balance with the person’s rights and expectations. Many organisations document this assessment; an adviser can help." },
      { q: "What should happen when an EU prospect objects to marketing?", a: "Stop marketing to them promptly and add them to a suppression list so they are not contacted again. Retain only the minimal data needed to honour the objection." },
    ],
    related: ["/responsible-prospecting", "/security-and-data-handling", "/services/source-traceability", "/resources/dpdp-act-india", "/resources/can-spam", "/resources/ethical-data-collection"],
    cta: { heading: "Questions about how data is handled?", text: "Talk to us about sources, traceability and access controls.", label: "Contact us", href: "/contact" },
  },
  {
    path: "/resources/can-spam",
    title: "CAN-SPAM Basics",
    h1: "CAN-SPAM Basics: Core Requirements for Commercial Email in the US",
    metaTitle: "CAN-SPAM Basics for Lead Generation Teams",
    metaDescription: "An educational overview of the US CAN-SPAM Act for lead generation: honest headers and subject lines, identification, address, opt-outs. Not legal advice.",
    eyebrow: "Compliance overview",
    intro: [
      "CAN-SPAM is the US federal law that sets rules for commercial email, and it applies to business-to-business messages as well as consumer email. Rather than requiring prior consent for most commercial messages, it focuses on honesty and on giving recipients a reliable way to stop further emails.",
      "Not legal advice: this page is an educational overview of the main ideas. It does not cover every requirement, exception or related state law, and rules and their interpretation can change. Check current guidance from the US Federal Trade Commission and consult a qualified lawyer before relying on any approach.",
    ],
    highlights: [
      "Educational overview, not legal advice",
      "Applies to B2B commercial email too",
      "Honesty and opt-outs at the core",
      "Practical checks before you send",
    ],
    sections: [
      {
        heading: "What kinds of email it covers",
        paragraphs: [
          "The law distinguishes broadly between commercial messages, whose main purpose is to advertise or promote a product or service, and transactional or relationship messages, such as order confirmations or account notices. Cold sales emails are usually commercial. Messages that mix content can be harder to classify; official guidance discusses how to assess the primary purpose.",
          "Because B2B email is not exempt, a sales team writing to US companies should assume the requirements apply to its outreach.",
        ],
      },
      {
        heading: "The core requirements in plain terms",
        paragraphs: [
          "The commonly cited requirements are straightforward to describe, though applying them carefully matters.",
        ],
        bullets: [
          "Header information must be accurate: the from name, address and routing must identify the sender",
          "Subject lines must not be deceptive about the content of the message",
          "The message should be identifiable as an advertisement where required",
          "A valid physical postal address for the sender must be included",
          "Recipients must be told how to opt out of future commercial emails",
          "Opt-out requests must be honoured promptly, within the time the law allows",
          "Responsibility can extend to businesses that hire others to send on their behalf",
        ],
      },
      {
        heading: "Opt-outs done properly",
        paragraphs: [
          "A clear opt-out route is the heart of the law. It should be easy to find and use, such as a reply instruction or a simple link, and it should not require the recipient to pay, log in or provide more information than an email address. Once someone opts out, they should not receive further commercial email from you, and their address should not be sold or transferred for marketing.",
          "Operationally, this means a suppression list that every sending tool checks, maintained across campaigns and team members.",
        ],
      },
      {
        heading: "Where CAN-SPAM sits among other rules",
        paragraphs: [
          "CAN-SPAM is not the only consideration for US outreach. Text messages and calls fall under different rules, some states have their own laws in related areas, and mailbox providers impose their own standards for bulk senders. If you also email recipients in other countries, their laws apply as well, often with stricter consent requirements.",
          "Meeting the legal minimum does not guarantee good deliverability or a good reputation. Relevance and restraint matter as much as compliance.",
        ],
      },
      {
        heading: "Supporting good practice in your tooling",
        paragraphs: [
          "LeadGen AI sends campaigns through your own configured email transport, logs every message against its lead and is designed so outreach respects sending limits and opt-out obligations while you stay in control of the list. You remain responsible for message content, sender identification and honouring opt-outs.",
        ],
      },
    ],
    steps: {
      heading: "A pre-send check for US campaigns",
      items: [
        { title: "Confirm sender identity", text: "Check that the from name and address clearly identify your business." },
        { title: "Review the subject line", text: "Make sure it accurately reflects the message and could not mislead the reader." },
        { title: "Add address and opt-out", text: "Include a valid postal address and a simple, working way to unsubscribe." },
        { title: "Load the suppression list", text: "Exclude everyone who has previously opted out, across all tools and senders." },
        { title: "Document and review", text: "Keep a record of your process and ask your lawyer to review templates periodically." },
      ],
    },
    considerations: {
      heading: "Important caveats",
      items: [
        "This overview is educational and not legal advice; it simplifies a law with exceptions and detailed guidance.",
        "Penalties can apply per message, so small process gaps can matter; check official sources for specifics.",
        "Agencies and vendors sending for you do not remove your own responsibility.",
        "Compliance with CAN-SPAM does not satisfy stricter laws for recipients outside the US.",
      ],
    },
    example: {
      heading: "Adapting a template for US prospects",
      text: "Consider a Bengaluru-based analytics firm starting outreach to US retailers. Its existing template has a vague from name and no postal address. Before sending, the team changes the sender to a named person at the company, adds the registered business address in the footer, writes an accurate subject line, adds a plain unsubscribe line and connects its suppression list to every sending account.",
    },
    faqs: [
      { q: "Does CAN-SPAM require consent before sending a cold email?", a: "For most commercial email, it focuses on honesty and opt-outs rather than prior consent. Other laws, including those of other countries, may require consent, so check with a lawyer." },
      { q: "Can we require recipients to log in to unsubscribe?", a: "Opt-outs should be simple. Requiring a login, a fee or extra personal information is generally not acceptable under the official guidance." },
      { q: "Are we responsible if an agency sends emails for us?", a: "Responsibility can extend to the business whose products are promoted, so set clear expectations and check the agency’s process." },
    ],
    related: ["/responsible-prospecting", "/services/ai-outreach-campaigns", "/services/outreach-activity-logging", "/resources/gdpr-and-lead-generation", "/resources/email-deliverability", "/tools/email-sending-setup"],
    cta: { heading: "Keep every message on the record", text: "See how outreach is logged per lead and sent via your own transport.", label: "Request access", href: "/book-a-demo" },
  },
  {
    path: "/resources/dpdp-act-india",
    title: "India DPDP Act Basics",
    h1: "India’s DPDP Act Basics: Consent and Duties for Lead Generation Teams",
    metaTitle: "India DPDP Act Basics for Lead Generation",
    metaDescription: "An educational overview of India’s Digital Personal Data Protection Act for lead generation: consent, notice, purpose, rights and duties. Not legal advice.",
    eyebrow: "Compliance overview",
    intro: [
      "India’s Digital Personal Data Protection Act, 2023, sets rules for processing digital personal data, and it matters to lead generation teams because prospect contact details about individuals generally count as personal data. Its central idea is that personal data should be processed for a lawful purpose, usually with the person’s consent, and protected responsibly.",
      "Not legal advice: this page is a general educational overview. Detailed rules and their implementation timelines are set out in subordinate rules and official notifications, and interpretation will develop over time. Check the current official text and guidance, and take advice from a qualified Indian legal professional before relying on any approach.",
    ],
    highlights: [
      "Educational overview, not legal advice",
      "Consent and notice at the centre",
      "Duties for organisations, rights for people",
      "Practical preparation steps",
    ],
    sections: [
      {
        heading: "Key roles and terms",
        paragraphs: [
          "The Act uses its own vocabulary. Understanding the roles helps you see where your business sits in a prospecting workflow.",
        ],
        bullets: [
          "Data principal — the individual the personal data relates to",
          "Data fiduciary — the organisation that decides why and how data is processed",
          "Data processor — an entity processing data on behalf of a fiduciary",
          "Consent manager — a registered entity through which people can give and manage consent",
          "Significant data fiduciary — a fiduciary the government designates for additional obligations",
        ],
      },
      {
        heading: "Consent and notice",
        paragraphs: [
          "Consent under the Act is expected to be free, specific, informed, unconditional and unambiguous, given through a clear affirmative action, and limited to the data necessary for the stated purpose. A notice should accompany or precede the request, explaining what data is processed and why, and how people can exercise their rights.",
          "People should be able to withdraw consent as easily as they gave it. For lead generation, this means simple opt-out routes and processes that actually stop further processing for that purpose.",
        ],
      },
      {
        heading: "Legitimate uses and publicly available data",
        paragraphs: [
          "The Act also describes certain legitimate uses where processing may occur without consent, and it addresses personal data that the individual has made publicly available. How these provisions apply to specific prospecting activities is a question for careful legal analysis rather than assumption. Do not treat data as free to use simply because it appears online.",
        ],
      },
      {
        heading: "Duties of data fiduciaries",
        paragraphs: [
          "Organisations deciding how prospect data is used carry duties. In plain terms, these include keeping data reasonably accurate where it is used to make decisions, protecting it with reasonable security safeguards, notifying breaches as required, erasing data when the purpose is served or consent is withdrawn unless retention is required, and providing a way for people to raise grievances.",
        ],
        bullets: [
          "Process only for the purpose people were told about",
          "Protect data with reasonable security safeguards",
          "Erase data that is no longer needed",
          "Publish contact details for data protection queries",
          "Ensure processors acting for you follow suitable terms",
        ],
      },
      {
        heading: "Rights of individuals",
        paragraphs: [
          "Individuals have rights to information about processing, to correction and erasure, to grievance redressal and to nominate someone to act for them in certain circumstances. Prospecting teams should know who handles these requests and how quickly they will respond.",
          "LeadGen AI records where each value came from, never overwrites fields a user edited by hand, and offers role-based access so teams see only the records they should. These features can support your process; your organisation remains responsible for its own compliance.",
        ],
      },
    ],
    steps: {
      heading: "Preparing your prospecting process",
      items: [
        { title: "Inventory your data", text: "List the personal data you hold about prospects, its sources, where it is stored and who can access it." },
        { title: "Define purposes", text: "Write down each purpose for which you use prospect data and confirm with an adviser the basis for each." },
        { title: "Draft notices and consent flows", text: "Make notices clear and plain, and design forms so consent is affirmative and easy to withdraw." },
        { title: "Set retention and erasure", text: "Decide how long prospect data is kept and schedule deletion of stale records." },
        { title: "Assign responsibility", text: "Name a person to handle data requests and grievances, and train the team on the process." },
      ],
    },
    considerations: {
      heading: "Important caveats",
      items: [
        "This page is educational and not legal advice; detailed rules and timelines should be checked in official sources.",
        "Penalties under the Act can be substantial, so rely on qualified advice rather than summaries.",
        "Other Indian rules, such as those on unsolicited commercial calls and messages, may also apply to outreach.",
        "If you also contact people abroad, foreign laws such as GDPR may apply alongside the DPDP Act.",
      ],
    },
    example: {
      heading: "A distributor reviews its enquiry handling",
      text: "Imagine an industrial supplies distributor in Ahmedabad that collects enquiries through its website and trade directories. Reviewing its process against the Act with an adviser, it rewrites its website notice in plain language, adds an affirmative consent checkbox for marketing updates, creates an email address for data requests and sets a schedule to delete enquiry records that have not progressed after an agreed period.",
    },
    faqs: [
      { q: "Does the DPDP Act cover business contact details?", a: "Details that relate to an identifiable individual, such as a named person’s mobile number or email, are generally personal data. How the Act applies to specific B2B scenarios should be confirmed with an adviser." },
      { q: "Can people withdraw consent once they have given it?", a: "Yes. The Act expects withdrawal to be as easy as giving consent, and processing for that purpose should stop, subject to any legal requirements." },
      { q: "Are the detailed rules under the DPDP Act final?", a: "Implementation depends on rules and notifications issued by the government, which may be phased. Check the latest official publications before finalising your process." },
    ],
    related: ["/responsible-prospecting", "/security-and-data-handling", "/b2b/msme-suppliers", "/resources/gdpr-and-lead-generation", "/resources/ethical-data-collection", "/lead-capture/consent-checkboxes"],
    cta: { heading: "Want to understand our data handling?", text: "Ask us about source traceability, roles and access controls.", label: "Contact us", href: "/contact" },
  },
  {
    path: "/resources/email-deliverability",
    title: "Email Deliverability Guide",
    h1: "Email Deliverability Guide: Sender Reputation and Content That Lands",
    metaTitle: "Email Deliverability Guide: Reputation & Content",
    metaDescription: "Understand email deliverability for outbound: how sender reputation forms, which content habits hurt inbox placement, and a routine to diagnose problems.",
    eyebrow: "Deliverability",
    intro: [
      "Email deliverability is whether your messages reach the inbox, and it depends mainly on your sender reputation and on how recipients react to what you send. Authentication gets you through the door, but reputation, list quality and content decide where you land over time.",
      "This guide focuses on reputation and content: how mailbox providers form a view of you, which writing and sending habits damage it, and how to diagnose a drop. For B2B-specific authentication and volume planning, see the B2B email deliverability guide; this page takes a broader view across outbound and marketing email.",
    ],
    highlights: [
      "How sender reputation forms",
      "Content habits that hurt placement",
      "List quality as a reputation lever",
      "A diagnostic routine for drops",
    ],
    sections: [
      {
        heading: "How mailbox providers judge you",
        paragraphs: [
          "Mailbox providers watch patterns attached to your sending domain and infrastructure. Signals widely understood to matter include bounces, spam complaints, whether people open, reply, delete or move your messages, sending consistency and whether you hit spam traps. None of the major providers publish exact formulas, so treat any precise threshold you read with caution.",
          "Reputation is earned slowly and lost quickly. A sudden spike in volume or one badly targeted send can undo months of careful behaviour.",
        ],
      },
      {
        heading: "List quality is the biggest lever",
        paragraphs: [
          "Most deliverability problems start with the list, not the message. Invalid addresses cause bounces, outdated records reach people who no longer care, and poorly targeted lists generate complaints.",
        ],
        bullets: [
          "Remove addresses that hard bounce immediately",
          "Prefer addresses found on the company’s own website over guessed patterns",
          "Refresh enrichment for records that have not been touched in months",
          "Suppress opt-outs and complainers permanently, across all tools",
          "Send to segments that genuinely match the message",
        ],
      },
      {
        heading: "Content habits that hurt placement",
        paragraphs: [
          "Content alone rarely sinks a reputable sender, but certain habits add risk and invite negative reactions from recipients.",
        ],
        bullets: [
          "Heavy images, many links or link shorteners in plain outreach",
          "Attachments in a first contact",
          "Misleading subject lines that produce complaints",
          "Identical messages sent at volume with no variation in relevance",
          "Hidden or awkward unsubscribe routes that push people to the spam button",
        ],
      },
      {
        heading: "Sending behaviour",
        paragraphs: [
          "Consistent, gradual sending looks like a real business; erratic bursts look like a spammer. Ramp new domains and mailboxes slowly, keep daily volumes steady and spread sends across the working day rather than releasing everything at once. Many teams send outreach from a separate subdomain so that problems do not affect transactional or internal mail.",
          "LeadGen AI sends campaigns through your configured email transport and respects sending limits and opt-out obligations, with every message logged against its lead. Enrichment adds business emails discovered on the company’s own site, which tends to be more reliable than guessing formats.",
        ],
      },
      {
        heading: "Reading the warning signs",
        paragraphs: [
          "Falling reply rates, rising bounces and complaints, or messages appearing in spam during seed tests all suggest a problem. Look at changes in list source, volume and content around the time things worsened before rewriting everything.",
        ],
      },
    ],
    steps: {
      heading: "Diagnose a deliverability drop",
      items: [
        { title: "Confirm the symptom", text: "Check whether the drop is in replies, bounces, complaints or placement, and for which domains." },
        { title: "Verify authentication", text: "Make sure SPF, DKIM and DMARC still pass; DNS changes sometimes break them silently." },
        { title: "Audit the recent list", text: "Look at bounce rates and sources for the latest sends and remove poor-quality segments." },
        { title: "Reduce and steady volume", text: "Lower daily sends and keep them consistent while reputation recovers." },
        { title: "Simplify content", text: "Strip extra links, images and tracking from outreach and make the opt-out obvious." },
        { title: "Monitor and restore gradually", text: "Track results for a few weeks before increasing volume again." },
      ],
    },
    considerations: {
      heading: "Realistic expectations",
      items: [
        "No setup guarantees inbox placement; providers change filtering without notice.",
        "Recovering a damaged domain can take weeks, and sometimes a fresh start is more practical.",
        "Open tracking has become less reliable as a signal; rely more on replies and conversations.",
        "Separate domains reduce risk but are not a licence to send poorly targeted email.",
      ],
    },
    example: {
      heading: "A recovery plan for a growth agency",
      text: "Imagine a growth agency in Gurugram that doubled its daily sends using a newly purchased list and soon saw replies vanish. It paused the campaign, removed the purchased segment, kept only addresses found on prospects’ own websites, cut volume to a steady level, removed images from its emails and added a plain-language opt-out line. Replies returned gradually over the following weeks as it rebuilt volume slowly.",
    },
    faqs: [
      { q: "Do spam trigger words really matter?", a: "Individual words matter far less than reputation and recipient reactions. Write naturally and honestly; misleading phrasing that causes complaints is the real risk." },
      { q: "How long does it take to warm up a new sending domain?", a: "Teams commonly ramp over several weeks, increasing volume gradually while watching bounces and replies. There is no universal schedule." },
      { q: "Should we remove tracking pixels from cold emails?", a: "Many outbound teams minimise tracking in first-touch emails to keep messages simple and plain. Measure success by replies rather than opens." },
    ],
    related: ["/b2b/email-deliverability", "/services/business-email-discovery", "/tools/email-verification", "/resources/subject-lines", "/resources/data-hygiene", "/resources/can-spam"],
    cta: { heading: "Start from better addresses", text: "Find business emails on each company’s own site with enrichment.", label: "Start free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/resources/subject-lines",
    title: "Writing Subject Lines",
    h1: "Writing Subject Lines: Principles, Patterns and How to Test Them",
    metaTitle: "Writing Email Subject Lines: Principles & Tests",
    metaDescription: "Principles for writing honest email subject lines that earn opens, patterns to adapt for outreach and newsletters, and a sensible way to test them.",
    eyebrow: "Email craft",
    intro: [
      "A good subject line tells the reader, honestly and briefly, why this email is worth opening now. It is a promise about the content, and the best ones are specific, relevant and short enough to read at a glance on a phone.",
      "This guide covers principles for both outreach and marketing email, patterns you can adapt, mistakes to avoid and a practical approach to testing. It does not offer magic words or guaranteed open rates, because none exist; what works depends on your audience and your reputation with them.",
    ],
    highlights: [
      "Honest promises, not tricks",
      "Patterns for outreach and newsletters",
      "Mistakes that cost trust",
      "Testing that produces real learning",
    ],
    sections: [
      {
        heading: "Principles that hold across audiences",
        paragraphs: [
          "Subject lines compete in a crowded inbox, but clarity usually beats cleverness. Readers decide in a moment whether an email is relevant, so make that judgement easy.",
        ],
        bullets: [
          "Be specific: name the topic, problem or benefit",
          "Be honest: the email must deliver what the subject promises",
          "Be brief: front-load the important words for mobile previews",
          "Match the preview text: treat the two as one unit",
          "Sound like a person, not a campaign",
        ],
      },
      {
        heading: "Patterns for cold outreach",
        paragraphs: [
          "Outreach subject lines tend to work best when they look like a normal message between colleagues. Short, lower-case or sentence-case lines that reference something specific are common. The examples here are illustrative only.",
        ],
        bullets: [
          "Topic plus company: “booking page at Lotus Physio”",
          "A specific observation: “your Google listing hours”",
          "A short question: “quote follow-ups?”",
          "A mutual context: “after the Surat textile expo”",
        ],
      },
      {
        heading: "Patterns for newsletters and marketing email",
        paragraphs: [
          "Subscribers already know you, so the subject line’s job is to signal what this issue offers. Consistency helps people recognise you; variety in the specific promise keeps them interested. Illustrative examples:",
        ],
        bullets: [
          "The outcome: “Three fixes for slow enquiry forms”",
          "The format: “Checklist: preparing for trade show season”",
          "The news: “New guide: budgeting your first campaign”",
          "The curiosity gap, used honestly: “The question we get most from clinics”",
        ],
      },
      {
        heading: "Mistakes that cost trust",
        paragraphs: [
          "Some techniques lift opens briefly while damaging reputation, and deceptive subject lines can raise legal issues under laws such as CAN-SPAM.",
        ],
        bullets: [
          "Fake “Re:” or “Fwd:” prefixes on first contact",
          "False urgency or invented deadlines",
          "All capitals and excessive punctuation",
          "Clickbait that the email body does not deliver",
          "Personalisation tokens that fail and show raw fields",
        ],
      },
      {
        heading: "Making tests meaningful",
        paragraphs: [
          "Open rates have become a noisier measure as mail clients pre-load content and privacy features change reporting. For outreach, judge subject lines mainly by replies and positive conversations. For newsletters, look at clicks and downstream actions alongside opens.",
          "Small lists make results unreliable. If each version reaches only a few dozen people, apparent winners may be chance. Run a test across several sends, or treat early results as directional rather than conclusive.",
        ],
      },
    ],
    steps: {
      heading: "Test subject lines properly",
      items: [
        { title: "Write a hypothesis", text: "State what you expect and why, for example that naming the prospect’s business will lift replies." },
        { title: "Change one thing", text: "Keep the body, audience and send time the same so only the subject line differs." },
        { title: "Split fairly", text: "Divide a single segment randomly rather than sending each version to a different type of audience." },
        { title: "Pick the right measure", text: "Use replies for outreach and clicks or conversions for marketing email, with opens as secondary." },
        { title: "Record and repeat", text: "Log results and repeat promising tests before treating them as rules." },
      ],
    },
    considerations: {
      heading: "Keep in perspective",
      items: [
        "A great subject line cannot rescue an irrelevant email or a poorly targeted list.",
        "What works for one audience may fail for another; avoid copying lines from different markets.",
        "Deliverability affects whether subject lines are seen at all; reputation comes first.",
        "Short-term open gains from tricks often lead to more complaints and unsubscribes later.",
      ],
    },
    example: {
      heading: "Testing two outreach subject lines",
      text: "Consider an accounting software reseller in Lucknow emailing small retailers. It tests “GST filing for Sharma Stores” against “quick question about your billing” across four weekly batches from the same segment. The specific line produces more replies in three of the four weeks, so the team adopts the pattern of naming the business and the specific topic, while continuing to test new angles.",
    },
    faqs: [
      { q: "How many words should a subject line have?", a: "Short lines read well on mobile, so many writers aim for a few words. Prioritise clarity and put the key words first, since longer lines get cut off." },
      { q: "Should subject lines include the recipient’s first name?", a: "It can help in some contexts, but it is widely used and may look automated. Naming the business or a specific topic often feels more relevant." },
      { q: "Are emojis a good idea in subject lines?", a: "They can suit consumer newsletters with a casual brand, but they rarely fit B2B outreach. Test with your own audience before adopting them." },
    ],
    related: ["/resources/cold-email-writing", "/strategies/email-newsletters", "/lead-capture/ab-testing", "/resources/email-deliverability", "/resources/follow-up-emails", "/strategies/cold-email-outreach"],
    cta: { heading: "Write from real context", text: "Use enrichment and audit details to make subject lines specific.", label: "Request access", href: "/book-a-demo" },
  },
  {
    path: "/resources/icp-worksheet",
    title: "ICP Worksheet",
    h1: "ICP Worksheet: Define Your Ideal Customer Profile Step by Step",
    metaTitle: "ICP Worksheet: Step-by-Step Ideal Customer Profile",
    metaDescription: "A fill-in ICP worksheet for B2B teams: review best customers, list firmographics, problems, triggers and disqualifiers, then turn the answers into searches.",
    eyebrow: "Worksheet",
    intro: [
      "This ICP worksheet walks your team through defining an ideal customer profile in a single working session, with prompts you answer in order and a finished one-page profile at the end. Copy the questions into a shared document, fill them in together and keep the result where sales and marketing can both see it.",
      "Where the ideal customer profile guide explains the concept and how to translate it into searches, this page is the exercise itself. Plan around two hours, bring data on your current customers, and include at least one person who talks to customers every week.",
    ],
    highlights: [
      "Six fill-in parts with prompts",
      "Built from your best customers",
      "Includes disqualifiers and triggers",
      "Ends with a one-page profile",
    ],
    sections: [
      {
        heading: "Part 1: review your best customers",
        paragraphs: [
          "Start from evidence, not aspiration. List five to ten customers who bought without heavy discounting, got clear value, were reasonable to serve and stayed or referred others. Then answer the prompts for each.",
        ],
        bullets: [
          "Customer name (internal only) and how they found you",
          "What problem were they trying to solve when they bought?",
          "Who was involved in the decision, and who signed off?",
          "How long from first conversation to purchase?",
          "What made them a good customer to work with?",
        ],
      },
      {
        heading: "Part 2: firmographics",
        paragraphs: [
          "Look across your best customers for shared characteristics. Fill in each line with a specific answer, using ranges rather than single values.",
        ],
        bullets: [
          "Industry or category: ______",
          "Size range (employees, locations or revenue band): ______",
          "Geography served or located in: ______",
          "Business model (for example B2B, retail, service, manufacturer): ______",
          "Digital presence (website, listings, reviews): ______",
        ],
      },
      {
        heading: "Part 3: problems, outcomes and buyers",
        paragraphs: [
          "Describe the situation that makes your offer valuable, in the customer’s words where possible.",
        ],
        bullets: [
          "The main problem they have before working with you: ______",
          "The outcome they want: ______",
          "What they try before finding you: ______",
          "The economic buyer’s role: ______",
          "Influencers and users in the decision: ______",
        ],
      },
      {
        heading: "Part 4: triggers and observable signals",
        paragraphs: [
          "Your ICP only helps prospecting if you can spot it from outside. List the events that create urgency and the signals you could actually observe.",
        ],
        bullets: [
          "Trigger events (new location, hiring, rebrand, regulation change): ______",
          "Signals visible on listings or websites (ratings, review counts, website health): ______",
          "Sources where these businesses are listed (Google Maps, LinkedIn, directories such as IndiaMART): ______",
        ],
      },
      {
        heading: "Part 5: disqualifiers",
        paragraphs: [
          "Equally important is who you should not pursue. Look at churned, unprofitable or difficult customers and lost deals.",
        ],
        bullets: [
          "Too small or too large when: ______",
          "Wrong model or category: ______",
          "Missing prerequisites (budget, systems, decision-maker access): ______",
          "Red flags seen in past difficult accounts: ______",
        ],
      },
      {
        heading: "Part 6: the one-page profile",
        paragraphs: [
          "Summarise your answers in a short paragraph and a handful of search criteria. A useful format: “[Category] businesses in [geography] with [size range], who are dealing with [problem], usually decided by [role], often triggered by [event]. We avoid [disqualifiers].”",
          "Then translate it into queries. In LeadGen AI, a category and a location form a query that fans out to the enabled sources, and the 0–100 score reflects fit against your stated market, category and geography, with reasons stored on each lead, so a clear ICP feeds directly into how leads are ranked.",
        ],
      },
    ],
    steps: {
      heading: "Run the worksheet session",
      items: [
        { title: "Prepare the data", text: "Export a list of current and past customers with revenue, tenure and source before the session." },
        { title: "Choose best and worst", text: "Agree five to ten best customers and three to five poor fits as a group." },
        { title: "Fill in parts 1 to 5", text: "Work through each part in order, writing answers directly into the shared document." },
        { title: "Draft the profile", text: "Write the one-paragraph summary and debate each word until everyone accepts it." },
        { title: "Convert to searches", text: "Turn the profile into categories, locations and filters you can run as queries." },
        { title: "Test and revise", text: "Build a small list, check it against the profile and revisit the worksheet after a quarter." },
      ],
    },
    considerations: {
      heading: "Common worksheet pitfalls",
      items: [
        "Basing the ICP on who you wish you sold to, rather than who actually succeeded, produces a profile that does not convert.",
        "Too few customers make patterns unreliable; early-stage teams should treat the result as a hypothesis.",
        "An ICP with no disqualifiers will let poor-fit leads clog the pipeline.",
        "Criteria you cannot observe from outside will not help list building, however accurate they are.",
        "Several distinct segments may need separate worksheets rather than one blended profile.",
      ],
    },
    example: {
      heading: "A worksheet outcome for a signage maker",
      text: "Picture a signage and printing business in Vadodara. Its worksheet shows that its best customers are multi-branch clinics and coaching institutes opening new locations, usually decided by the owner or an operations head. Disqualifiers include single-location shops seeking one-off banners. The resulting profile reads: “Education and healthcare businesses in Gujarat with two or more branches, opening a new location, decided by the owner. We avoid one-off banner orders.”",
    },
    faqs: [
      { q: "How many customers do we need to complete the worksheet?", a: "Five to ten good customers is a workable start. With fewer, complete it anyway but treat the profile as a hypothesis to test and revise." },
      { q: "Should we create more than one ICP?", a: "If your best customers fall into clearly different groups with different problems and buyers, complete a separate worksheet for each rather than averaging them." },
      { q: "Who should attend the worksheet session?", a: "Include someone from sales, someone from marketing and someone who delivers the service or supports customers, so the profile reflects buying and success." },
    ],
    related: ["/b2b/ideal-customer-profile", "/b2b/buyer-personas", "/services/lead-list-building", "/services/ai-lead-scoring", "/resources/lead-generation-checklist", "/resources/sales-marketing-alignment"],
    cta: { heading: "Turn your ICP into a scored list", text: "Run your profile as queries and rank leads by fit with stored reasons.", label: "Start free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/resources/small-business-guide",
    title: "Small Business Lead Generation Guide",
    h1: "Small Business Lead Generation: A Low-Budget Plan for Owners",
    metaTitle: "Small Business Lead Generation on a Low Budget",
    metaDescription: "A practical low-budget lead generation plan for small business owners: local visibility, referrals, simple outreach and a weekly routine you can sustain.",
    eyebrow: "For owners",
    intro: [
      "A small business can generate steady leads on a low budget by focusing on three things: being easy to find locally, asking satisfied customers to refer and review, and doing a small amount of consistent, targeted outreach. Time and consistency matter more than ad spend.",
      "This guide is written for owners who also run the business day to day. It sets out a plan you can sustain in a few hours a week, explains where to spend small amounts of money if you have them, and shows how to tell what is working without complicated analytics.",
    ],
    highlights: [
      "Built for a few hours weekly",
      "Free channels first, spend later",
      "Referrals and reviews as foundations",
      "Simple tracking an owner can manage",
    ],
    sections: [
      {
        heading: "Start with the free foundations",
        paragraphs: [
          "Before any spend, make sure people who already look for businesses like yours can find you and trust what they see. These steps cost little more than time.",
        ],
        bullets: [
          "Complete your Google Business Profile with accurate hours, photos, services and categories",
          "List in the directories your customers actually use, with consistent details",
          "Make sure your website loads on a phone and shows how to contact you",
          "Add one clear enquiry route, such as a call button or short form",
        ],
      },
      {
        heading: "Referrals and reviews",
        paragraphs: [
          "For most small businesses, happy customers are the cheapest source of new ones. Many owners simply never ask. Build the request into the end of every job or sale, when satisfaction is highest.",
          "Respond to every review, positive or negative, politely and promptly. Prospective customers read responses as evidence of how you treat people.",
        ],
        bullets: [
          "Ask for a review with a direct link at the moment of delivery",
          "Ask who else might benefit, and make introductions easy",
          "Thank referrers personally; a small gesture is often enough",
        ],
      },
      {
        heading: "Small, targeted outreach",
        paragraphs: [
          "If you sell to other businesses, a few personalised messages a week can open doors that waiting will not. Focus on a narrow group nearby who you can help clearly, such as a caterer contacting offices within a few kilometres.",
          "LeadGen AI’s Free plan includes three scrape queries, website enrichment, the lead dashboard and CSV export, which is enough to build a first local list from Google Maps and find contact details on each business’s own website. Keep volumes small and follow the rules for the places you contact.",
        ],
      },
      {
        heading: "Where to spend when you have a little budget",
        paragraphs: [
          "Spend only after the free foundations are in place, and start small enough that you can afford to learn. Local search ads aimed at high-intent searches, a modest boost for a post that already performs, or printed material for a local event are common starting points. Set a monthly cap and review it.",
        ],
      },
      {
        heading: "Keeping track without a data team",
        paragraphs: [
          "Ask every new enquiry how they heard about you and write it down. A simple sheet or pipeline board with columns for source, date, what they wanted and the outcome is enough to show where your customers come from after a few months.",
        ],
      },
    ],
    steps: {
      heading: "A weekly routine for owners",
      items: [
        { title: "Monday: check listings", text: "Spend fifteen minutes updating your profile, replying to reviews and adding a recent photo." },
        { title: "Tuesday: ask for referrals", text: "Message two or three recent happy customers asking for a review or introduction." },
        { title: "Wednesday: outreach", text: "Send five to ten thoughtful messages to businesses in your target group." },
        { title: "Thursday: follow up", text: "Reply to enquiries and follow up on earlier outreach that has gone quiet." },
        { title: "Friday: record and review", text: "Update your tracking sheet and note one thing to improve next week." },
      ],
    },
    considerations: {
      heading: "Realistic trade-offs",
      items: [
        "Free channels cost time; if your time is scarce, a small paid budget may be a better trade.",
        "Results from listings and reviews build gradually, so judge them over months rather than weeks.",
        "Outreach rules vary by country and channel; check what applies before messaging businesses or individuals.",
        "Trying every channel at once spreads effort too thin for any to work.",
      ],
    },
    example: {
      heading: "A bakery’s low-budget plan",
      text: "Imagine a small bakery in Mysuru that wants more office catering orders. The owner completes its Google profile with photos of platters, asks regular customers for reviews and lists offices within three kilometres. Each Wednesday she emails five office managers with a short note and a sample menu, offering a free tasting box. She records every order’s source and, after two months, sees which approach brings repeat orders.",
    },
    faqs: [
      { q: "What is the cheapest lead generation channel for a small business?", a: "Usually referrals and a well-maintained local listing, because they cost mostly time. Which works best depends on how your customers choose providers." },
      { q: "How many hours a week does a small business need to commit?", a: "A focused two to four hours a week is a realistic start for many owners, provided it is consistent." },
      { q: "When should an owner start paying for ads?", a: "Once the free foundations are in place and you can handle more enquiries. Start with a small, capped budget and track every enquiry’s source." },
    ],
    related: ["/strategies/google-business-profile", "/strategies/referral-programs", "/services/local-business-prospecting", "/resources/budget-planning", "/resources/beginners-guide", "/b2b/small-business-prospecting"],
    cta: { heading: "Build a local list for free", text: "Three free queries, enrichment and CSV export to get started.", label: "Start free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/resources/budget-planning",
    title: "Lead Generation Budget Planning",
    h1: "Lead Generation Budget Planning: Allocation, Testing and Review",
    metaTitle: "Lead Generation Budget Planning for Leaders",
    metaDescription: "How leaders plan a lead generation budget: work back from revenue goals, split spend between proven channels and tests, account for people and tools, review often.",
    eyebrow: "Planning",
    intro: [
      "A sound lead generation budget starts from the revenue you need, works backwards through your conversion stages to the conversations required, and then allocates money and time to the channels most likely to produce them, with a defined share set aside for testing. It is a plan to be revised, not a number fixed once a year.",
      "This guide explains how to build that model using your own figures, how to divide spend between proven channels and experiments, which costs leaders often forget, and how to review allocation as evidence arrives. It does not quote industry benchmarks, because your numbers matter more than anyone else’s averages.",
    ],
    highlights: [
      "Work backwards from revenue goals",
      "Separate proven spend from tests",
      "Count people and tools, not just ads",
      "Review monthly, reallocate quarterly",
    ],
    sections: [
      {
        heading: "Working backwards from revenue",
        paragraphs: [
          "Begin with the new revenue target for the period and your average deal value to estimate how many deals you need. Then use your own historical conversion rates between stages to estimate the opportunities, qualified leads and raw leads required. If you lack history, use cautious assumptions and plan to replace them quickly with real data.",
          "This model shows whether your goal is realistic for your capacity. It often reveals that the bottleneck is not lead volume but sales time or conversion at a particular stage.",
        ],
        bullets: [
          "Deals needed = revenue target ÷ average deal value",
          "Opportunities needed = deals ÷ opportunity-to-win rate",
          "Qualified leads needed = opportunities ÷ qualification-to-opportunity rate",
          "Leads needed = qualified leads ÷ lead-to-qualified rate",
        ],
      },
      {
        heading: "The full cost picture",
        paragraphs: [
          "Media spend is the visible part. A realistic budget also includes the people and systems that turn spend into pipeline.",
        ],
        bullets: [
          "People: SDRs, marketers, agencies and contractors",
          "Data and tools: list building, enrichment, CRM, sending and analytics",
          "Content and creative: writing, design and video",
          "Paid media and sponsorships",
          "Events, travel and print where relevant",
        ],
      },
      {
        heading: "Splitting proven channels and tests",
        paragraphs: [
          "A common approach is to put most of the budget into channels with evidence of producing pipeline, and to ring-fence a smaller share for structured tests of new channels, audiences or offers. The exact split depends on how mature your programme is; a new team may need a larger test share because little is proven yet.",
          "Give each test a fixed budget, duration and success measure before it starts, and decide in advance what result would justify moving it into the proven pool.",
        ],
      },
      {
        heading: "Choosing measures that guide reallocation",
        paragraphs: [
          "Cost per lead is easy to measure and easy to game. Leaders usually get better decisions from cost per qualified lead, cost per opportunity and, over longer periods, return on spend by channel. Track these by source and segment, not just in total.",
          "Data tooling can change the economics of outbound. LeadGen AI plans range from Free, with three scrape queries, to Growth, with 50 per month plus scoring and outreach, and Scale, with unlimited queries and a distributed scrape fleet. Prices are not published here; request access to discuss them.",
        ],
      },
      {
        heading: "Review rhythm",
        paragraphs: [
          "Review leading indicators monthly and reallocate quarterly. Monthly reviews catch broken campaigns early; quarterly reallocation gives channels enough time to show results without letting poor performers drain the budget for a year.",
        ],
      },
    ],
    steps: {
      heading: "Build your budget plan",
      items: [
        { title: "Set the revenue target", text: "Agree the new revenue goal for the period with leadership and finance." },
        { title: "Model the funnel", text: "Use your own conversion rates to calculate the leads and opportunities required." },
        { title: "Check capacity", text: "Confirm sales can handle the implied number of conversations; adjust hiring or targets if not." },
        { title: "Allocate by channel", text: "Assign spend and people to proven channels, then ring-fence a test budget." },
        { title: "Define test rules", text: "For each test, write the budget, duration, measure and graduation criteria." },
        { title: "Schedule reviews", text: "Put monthly check-ins and quarterly reallocation meetings in the calendar now." },
      ],
    },
    considerations: {
      heading: "Planning pitfalls",
      items: [
        "Copying benchmark conversion rates from other companies can make a plan look achievable when it is not.",
        "Cutting tests entirely in a tight year leaves you with no new channels when existing ones decline.",
        "Attribution is imperfect; avoid over-precise conclusions from multi-touch data.",
        "Long sales cycles delay revenue, so judge new channels on leading indicators first.",
        "People costs are often the largest line and the hardest to adjust quickly.",
      ],
    },
    example: {
      heading: "A budget model for a B2B services firm",
      text: "Suppose a facilities management company in Hyderabad wants a set number of new contracts next year. Using its own history, it calculates the opportunities and qualified leads required and finds its two sellers would be overloaded. Leadership adds one SDR, keeps most spend on referrals and outbound to commercial property managers, and ring-fences a smaller amount to test webinars for hospital administrators over one quarter.",
    },
    faqs: [
      { q: "What share of the budget should go to testing?", a: "It depends on maturity. Established programmes often keep a smaller test share; newer ones may test more because little is proven. Decide deliberately and protect it." },
      { q: "Should salaries be counted in the lead generation budget?", a: "For decision-making, yes. Counting people costs gives a truer picture of cost per opportunity and makes channel comparisons fairer." },
      { q: "How quickly should we cut a channel that is underperforming?", a: "Give it the agreed test period and minimum activity first. Cut earlier only if something is clearly broken, such as tracking failures or obvious targeting errors." },
    ],
    related: ["/tools/cost-per-lead", "/tools/roi-calculation", "/plans", "/b2b/pipeline-forecasting", "/resources/small-business-guide", "/resources/measuring-campaign-success"],
    cta: { heading: "Compare plans for your budget", text: "See what Free, Growth and Scale include before you allocate.", label: "View plans", href: "/plans" },
  },
  {
    path: "/resources/sales-marketing-alignment",
    title: "Sales & Marketing Alignment",
    h1: "Sales and Marketing Alignment: Building Shared Definitions That Stick",
    metaTitle: "Sales and Marketing Alignment: Shared Definitions",
    metaDescription: "Align sales and marketing around shared definitions of a lead, qualification criteria, stages and service levels, with a working session plan for leaders.",
    eyebrow: "Leadership",
    intro: [
      "Sales and marketing align when both teams use the same definitions for a lead, a qualified lead and each pipeline stage, and agree what each side commits to doing when a lead reaches them. Most friction between the teams comes from undefined words, not bad intentions.",
      "This guide is for leaders who want to fix that. It explains which definitions matter most, how to write them so they can be tested, how to agree service levels in both directions, and how to keep the agreement alive. The handoff mechanics themselves are covered in the B2B lead handoff guide; here the focus is on shared language and governance.",
    ],
    highlights: [
      "Definitions both teams sign",
      "Service levels in both directions",
      "Shared reports, one source of truth",
      "A regular review to keep it alive",
    ],
    sections: [
      {
        heading: "Why definitions cause most conflict",
        paragraphs: [
          "When marketing reports a rise in leads and sales says lead quality has fallen, both may be correct because they are counting different things. Without written definitions, each team optimises for its own idea of success and the reporting becomes a debate rather than a tool.",
          "Shared definitions turn arguments about quality into questions about criteria, which can be tested and changed.",
        ],
      },
      {
        heading: "The definitions that matter most",
        paragraphs: [
          "Keep the list short. These are the terms that most often cause disputes.",
        ],
        bullets: [
          "Lead: what minimum information and fit make a record count",
          "Marketing qualified lead: the fit and interest criteria for passing to sales",
          "Sales accepted and sales qualified: what sales checks before pursuing",
          "Opportunity: the point at which a deal enters the forecast",
          "Disqualified and recycled: reasons and what happens next",
          "Source: how a lead’s origin is recorded and credited",
        ],
      },
      {
        heading: "Writing criteria you can test",
        paragraphs: [
          "Vague definitions such as “engaged and a good fit” invite disagreement. Testable definitions name observable criteria: category, geography, size, a specific action taken, a score threshold. If two people would classify the same record differently, the definition needs work.",
          "Scoring helps when the logic is visible. LeadGen AI’s 0–100 score stores its reasons on each record — completeness, website health, fit against your stated market, category and geography, and signs of an active business — so both teams can see why a lead ranks where it does and argue about criteria rather than outcomes.",
        ],
      },
      {
        heading: "Service levels in both directions",
        paragraphs: [
          "Alignment means commitments on both sides. Marketing commits to delivering leads that meet the agreed definition; sales commits to acting on them within an agreed time and recording outcomes. Without the second half, marketing cannot learn what works.",
        ],
        bullets: [
          "Marketing: volume and quality targets against the agreed definition",
          "Sales: response time and number of attempts for each accepted lead",
          "Sales: recording an outcome and reason for every lead",
          "Both: a shared view of the pipeline with owners and activity history",
        ],
      },
      {
        heading: "Keeping alignment alive",
        paragraphs: [
          "Agreements decay as people, products and markets change. Hold a regular joint review, monthly for most teams, looking at the same report: leads by source, acceptance rate, outcomes and disqualification reasons. Change definitions deliberately and record the date, so trends remain interpretable.",
        ],
      },
    ],
    steps: {
      heading: "Run an alignment working session",
      items: [
        { title: "Gather the evidence", text: "Bring recent leads with their outcomes, and examples both teams consider good and poor." },
        { title: "Classify together", text: "Have both teams sort sample records and discuss every disagreement until the criteria are clear." },
        { title: "Write the definitions", text: "Record each definition with observable criteria and an owner responsible for maintaining it." },
        { title: "Agree service levels", text: "Set commitments for marketing quality and sales response, including outcome recording." },
        { title: "Build one report", text: "Create a single shared report both teams use, based on the new definitions." },
        { title: "Schedule the review", text: "Book a recurring joint review and agree how definitions will be changed." },
      ],
    },
    considerations: {
      heading: "What can undermine alignment",
      items: [
        "Separate tools with different data make shared reporting difficult; agree one source of truth.",
        "Compensation that rewards lead volume alone works against quality definitions.",
        "Definitions written by one team and imposed on the other rarely survive contact with reality.",
        "Changing criteria often without recording when makes historical comparisons misleading.",
      ],
    },
    example: {
      heading: "Resolving a quality dispute",
      text: "Imagine a cloud accounting reseller in Chennai where sales says marketing’s leads are poor. In a working session, both teams sort forty recent leads and discover sales rejects any business without a website, which marketing never knew. They add “has an operating website” to the qualified lead definition, agree that sales responds within one working day and records a reason for every rejection, and review the shared report monthly.",
    },
    faqs: [
      { q: "Who should own the lead definitions?", a: "Ownership is often shared, with a revenue operations or senior leader acting as the final decision-maker when the teams disagree." },
      { q: "When is it right to revise the shared lead definitions?", a: "Revise them when evidence shows a problem or the market shifts, not every month. Record each change and its date so reports remain interpretable." },
      { q: "What if sales does not record outcomes?", a: "Make outcome recording part of the agreed service level and keep it quick to do. Without outcomes, marketing cannot improve targeting, so leaders should treat it as essential." },
    ],
    related: ["/b2b/lead-handoff", "/lead-qualification/lead-status-definitions", "/services/crm-pipeline-management", "/services/ai-lead-scoring", "/resources/glossary", "/resources/icp-worksheet"],
    cta: { heading: "Give both teams one pipeline", text: "See shared stages, owners and scored leads with visible reasons.", label: "Request access", href: "/book-a-demo" },
  },
];
