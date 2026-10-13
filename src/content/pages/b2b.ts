import type { PageContent } from "../types";

export const pages: PageContent[] = [
  {
    path: "/b2b",
    title: "B2B Lead Generation",
    h1: "B2B Lead Generation: Audiences, Motions and Fundamentals",
    metaTitle: "B2B Lead Generation Fundamentals and Audiences",
    metaDescription: "Learn how B2B lead generation works: defining audiences, choosing sales motions, building lists, qualifying accounts and reaching the people who buy.",
    eyebrow: "B2B",
    intro: [
      "B2B lead generation is the work of finding businesses that could buy from you, identifying the people inside them who influence the purchase, and starting a relevant conversation before a competitor does. Unlike consumer marketing, the buyer is an organisation with budgets, approvals and several stakeholders, so the job is as much about choosing the right accounts as it is about generating volume.",
      "This section of the site is organised around audiences and motions. Some pages cover who you sell to — small businesses, mid-market firms, enterprises, startups, MSME suppliers and trade businesses. Others cover the teams doing the selling — sales teams, SDRs, founders, agencies and consultants. Each page explains how to define, find, reach and qualify that audience, and where a prospect intelligence platform such as LeadGen AI fits.",
    ],
    highlights: [
      "Start from a written ideal customer profile",
      "Match the sales motion to deal size",
      "Qualify accounts before contacting people",
      "Keep every touch logged and traceable",
    ],
    sections: [
      {
        heading: "What makes B2B buying different",
        paragraphs: [
          "Business purchases are rarely impulsive. A buyer usually has a problem that is costing time or money, a budget owner who must agree, and sometimes a formal process involving procurement, finance or IT. The larger the purchase, the more people are involved and the longer the cycle tends to run.",
          "That changes what a “lead” means. A single contact who downloaded a guide is a signal, not a deal. Teams that do well in B2B think in accounts: is this business a fit, is there a reason to buy now, and who inside it should we speak to?",
        ],
        bullets: [
          "Several stakeholders with different concerns",
          "Rational justification, even when relationships matter",
          "Longer cycles for larger or riskier purchases",
          "Repeat and expansion revenue after the first sale",
        ],
      },
      {
        heading: "Choosing the right motion for your audience",
        paragraphs: [
          "A motion is the repeatable way you turn strangers into customers. Inbound relies on content, search and referrals to bring buyers to you. Outbound means you choose accounts and reach out first. Partner-led and marketplace-led motions borrow someone else’s audience. Most B2B teams blend two or three.",
          "Deal size is the usual guide. Low-value, high-volume sales to small businesses favour efficient, lightly personalised outreach and local data. High-value enterprise deals justify deep research, multi-threading and months of patient account work. The pages in this section go into each case.",
        ],
      },
      {
        heading: "Building and maintaining B2B lead lists",
        paragraphs: [
          "Good lists start with a precise definition: industry or category, location, size signals and anything that indicates need. From there, teams pull records from public business sources, de-duplicate them and enrich them with contact routes.",
          "LeadGen AI is built for this step. A single query — a category and a location, or a directory search term — fans out across Google Maps, LinkedIn and IndiaMART, and results are normalised into one de-duplicated record per business. Records carry the business name, category, address, website, listed phone numbers, public emails, ratings and review counts, with the source of each field recorded so you can trace where data came from.",
        ],
      },
      {
        heading: "Qualifying accounts before you reach out",
        paragraphs: [
          "Outreach time is the scarcest resource in most B2B teams, so qualification should happen before the first message, not after. Look at fit (does this business match your profile?), reachability (is there a working contact route?) and need (is there evidence of the problem you solve?).",
          "LeadGen AI gives each lead a single 0–100 score with the reasons stored on the record. The score reflects record completeness, website health, fit against your stated market, category and geography, and signals of an active business. You can sort and filter by score and push the top band into the CRM pipeline.",
        ],
      },
      {
        heading: "Reaching people and running the pipeline",
        paragraphs: [
          "Once accounts are qualified, relevance wins. A message that references something specific about the business — a gap on its website, a recent expansion, a missing contact route — earns more attention than a generic pitch. LeadGen AI drafts outreach using each lead’s enrichment and audit data, sends campaigns through your own configured email transport, and logs every message against its lead on a pipeline board with stages, owners and activity history.",
        ],
      },
    ],
    steps: {
      heading: "A practical B2B lead generation loop",
      items: [
        { title: "Define the profile", text: "Write down the industries, locations, size signals and needs of the accounts you serve best." },
        { title: "Build the list", text: "Translate the profile into category and location queries, then collect and de-duplicate records." },
        { title: "Enrich and score", text: "Add contact routes and rank accounts by fit and evidence of need." },
        { title: "Reach out with relevance", text: "Contact the top band with messages tied to what you learned about each business." },
        { title: "Track and refine", text: "Log every touch, review which segments respond, and tighten the profile." },
      ],
    },
    considerations: {
      heading: "Things to weigh before scaling",
      items: [
        "A vague ideal customer profile produces large lists and low reply rates; narrow first.",
        "Public business data goes stale, so plan to re-enrich lists before major campaigns.",
        "Outbound email is regulated differently by country; check current rules and take legal advice where unsure.",
        "Volume without follow-up wastes good leads — size lists to the team’s capacity.",
        "Some audiences, particularly enterprises, need channels beyond email, such as events or partners.",
      ],
    },
    example: {
      heading: "A payroll software reseller picks a starting segment",
      text: "Imagine a small payroll software reseller in Ahmedabad. Rather than targeting “all businesses”, it picks manufacturing firms within 50 km that have a working website and listed phone numbers. It runs category and location queries, filters to the top score band, and sends short emails referencing each firm’s industry. Replies are logged on the pipeline board, and after a month the team narrows further to the two sub-categories that responded best.",
    },
    faqs: [
      { q: "How is B2B lead generation different from B2C?", a: "B2B buyers are organisations with several stakeholders, budgets and approval steps, so cycles are longer and targeting focuses on accounts. B2C usually targets individuals with shorter, more emotional decisions." },
      { q: "Should a new B2B company start with inbound or outbound?", a: "Many start with outbound because it produces feedback quickly and lets you test which segments care. Inbound compounds over time, so teams often begin building content in parallel." },
      { q: "What is the minimum data needed for a usable B2B lead?", a: "At least the business name, category, location and one working contact route. A website is valuable because it lets you research the account and personalise outreach." },
      { q: "Where does LeadGen AI fit in a B2B process?", a: "It covers list building across Google Maps, LinkedIn and IndiaMART, contact enrichment, 0–100 scoring with reasons, SEO audits, opportunity flags, a CRM pipeline and AI-drafted outreach sent through your own email transport." },
    ],
    related: ["/b2b/ideal-customer-profile", "/b2b/buyer-personas", "/services/multi-source-lead-scraping", "/services/ai-lead-scoring", "/strategies/outbound-sequences", "/how-it-works"],
    cta: { heading: "Build your first B2B list", text: "Turn your ideal customer profile into a scored, de-duplicated list of accounts.", label: "Start free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/b2b/ideal-customer-profile",
    title: "Ideal Customer Profile",
    h1: "How to Build an Ideal Customer Profile You Can Search",
    metaTitle: "Ideal Customer Profile: Define Fit and Build Queries",
    metaDescription: "Define an ideal customer profile with firmographics and fit signals, then translate it into category, location and score criteria for real prospect lists.",
    eyebrow: "B2B audiences",
    intro: [
      "An ideal customer profile (ICP) is a written description of the type of business that gets the most value from what you sell and is most valuable to you in return. It describes companies, not people: their industry, size, location, operating model and the circumstances that make them need you.",
      "The best ICPs are specific enough to search. If your profile cannot be turned into a query — a category, a geography and a set of signals you can actually observe — it will not help your team build lists. This page covers how to draft one, test it against your customer base and translate it into criteria a tool like LeadGen AI can use.",
    ],
    highlights: [
      "Describe companies, not individual people",
      "Use signals you can actually observe",
      "Test against your best customers",
      "Map the profile to searchable queries",
    ],
    sections: [
      {
        heading: "Firmographics that belong in an ICP",
        paragraphs: [
          "Firmographics are the business equivalent of demographics. They are the backbone of the profile because they are usually visible from public data.",
        ],
        bullets: [
          "Industry or business category, as precisely as you can name it",
          "Geography: city, region, country or a radius from a location",
          "Size signals: locations, staff, product range or review volume",
          "Operating model: B2B or B2C, single site or multi-location",
          "Digital maturity: whether they have a website and how healthy it is",
        ],
      },
      {
        heading: "Fit signals beyond the basics",
        paragraphs: [
          "Two businesses with identical firmographics can be very different prospects. Fit signals capture the difference: a clinic with a dated website may need a redesign agency, while one with a strong site may not. A distributor listed on IndiaMART is visibly seeking trade enquiries.",
          "Write down the observable reasons your best customers bought. Common examples are a missing or broken website, weak search visibility, few reviews relative to competitors, recent expansion, or reliance on a single contact channel. These become filters and scoring criteria.",
        ],
      },
      {
        heading: "Validating the profile against real customers",
        paragraphs: [
          "Start with your existing customers, if you have them. List the ten or twenty you would most like to clone — those who paid on time, stayed, expanded or referred others — and look for what they share. Then list the ones you regret and note what differs.",
          "If you have no customers yet, write a hypothesis and treat early outreach as an experiment. Track replies by segment, and revise the ICP every few weeks until a pattern emerges.",
        ],
      },
      {
        heading: "Translating the ICP into searchable queries",
        paragraphs: [
          "This is where most profiles fall down. “Growing mid-sized service businesses” is not searchable; “physiotherapy clinics in Bengaluru and Mysuru” is. Break the ICP into categories and locations, and keep a list of synonyms, because businesses describe themselves differently on each platform.",
          "In LeadGen AI, a query is a category and a location, or a directory search term, and it fans out to each enabled source — Google Maps, LinkedIn and IndiaMART. The scoring engine then measures fit against your stated market, category and geography alongside completeness, website health and activity signals, so a well-defined ICP directly improves how leads are ranked.",
        ],
      },
      {
        heading: "Keeping the profile alive",
        paragraphs: [
          "An ICP is not a one-off document. Revisit it when you launch a product, enter a market or notice a segment converting unusually well. Because each LeadGen AI score stores its reasons on the record, you can review why leads ranked where they did and see whether the criteria still reflect reality.",
        ],
      },
    ],
    steps: {
      heading: "From ICP draft to first list",
      items: [
        { title: "List best and worst customers", text: "Identify the accounts you want more of and those you would avoid." },
        { title: "Extract shared traits", text: "Record category, location, size signals and the visible reasons they bought." },
        { title: "Write category and location queries", text: "Turn each segment into concrete searches with synonyms." },
        { title: "Run, score and review", text: "Collect records, sort by score and check whether the top band looks right." },
        { title: "Adjust the profile", text: "Tighten or widen criteria based on what the list and early replies show." },
      ],
    },
    considerations: {
      heading: "Common ICP pitfalls",
      items: [
        "Profiles built on aspiration rather than evidence tend to target accounts that never buy.",
        "Too many segments at once dilutes messaging; prioritise one or two.",
        "Firmographics alone miss timing — add need signals where you can observe them.",
        "Category labels vary across sources, so test several terms before concluding a segment is small.",
        "An ICP is not a persona; you still need to understand the roles inside the account.",
      ],
    },
    example: {
      heading: "A bookkeeping firm narrows its target",
      text: "Picture a four-person bookkeeping firm in Kochi. Its draft ICP said “small businesses”. Reviewing its twelve best clients, it noticed most were restaurants and retail shops with two or more outlets and an active Google listing. It rewrote the ICP as “restaurants and retail with multiple outlets in Ernakulam district”, ran those queries, and focused outreach on the top score band.",
    },
    faqs: [
      { q: "What is the difference between an ICP and a buyer persona?", a: "An ICP describes the type of company that fits; a persona describes a role or person inside that company. You need both: the ICP picks accounts, personas shape the message." },
      { q: "How many ideal customer profiles should a business have?", a: "Most small teams do best with one primary ICP and perhaps one secondary. More than that usually spreads effort too thinly to learn what works." },
      { q: "Can I build an ICP without any customers?", a: "Yes, as a hypothesis based on where your offer solves the most painful problem. Treat early campaigns as tests and update the profile from the replies." },
      { q: "How does an ICP affect lead scores in LeadGen AI?", a: "The score includes fit against your stated market, category and geography, so a clearly defined profile helps the right accounts rank higher alongside completeness, website health and activity signals." },
    ],
    related: ["/b2b", "/b2b/buyer-personas", "/services/ai-lead-scoring", "/services/lead-list-building", "/strategies/account-based-marketing"],
    cta: { heading: "Turn your ICP into a list", text: "Run category and location queries and see which accounts score best against your profile.", label: "Start free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/b2b/buyer-personas",
    title: "Buyer Personas",
    h1: "B2B Buyer Personas: Roles, Pains and Messaging",
    metaTitle: "B2B Buyer Personas: Roles, Pains and Messaging",
    metaDescription: "Build B2B buyer personas around real roles and pains, then use them to write messages that each stakeholder in a buying decision will find relevant.",
    eyebrow: "B2B audiences",
    intro: [
      "A B2B buyer persona is a short, evidence-based description of a role that influences a purchase — what that person is responsible for, what worries them, how they judge a supplier and what they need to hear. Personas sit inside your ideal customer profile: the ICP picks the account, the persona shapes the conversation.",
      "Useful personas are practical rather than decorative. Nobody needs to know a fictional buyer’s hobbies. What helps is knowing that an operations head cares about downtime, a finance lead cares about payback, and an owner of a small firm cares about both but has ten minutes a week to think about it. This page shows how to build personas from evidence and turn them into messaging.",
    ],
    highlights: [
      "Anchor personas to real job roles",
      "Focus on pains and success measures",
      "Write one core message per role",
      "Refresh personas from sales conversations",
    ],
    sections: [
      {
        heading: "The roles that usually shape a B2B purchase",
        paragraphs: [
          "Buying groups vary with company size, but the same functions appear again and again. In a small business, one owner may play every role. In a larger firm, each may be a separate person.",
        ],
        bullets: [
          "Economic buyer — owns the budget and signs off",
          "User or champion — feels the problem day to day",
          "Technical evaluator — checks fit, security or integration",
          "Procurement or finance — manages terms and risk",
          "Blocker — anyone whose concerns can stall the deal",
        ],
      },
      {
        heading: "Researching pains instead of guessing them",
        paragraphs: [
          "The strongest source is conversation: sales calls, support tickets, onboarding notes and lost-deal reviews. Ask customers what triggered the search, what alternatives they considered and what nearly stopped them buying. Patterns appear after a handful of interviews.",
          "Public signals help too. A business with no website, a broken site or a thin listing has visible problems; reviews often reveal what customers complain about. LeadGen AI’s SEO website audit and opportunity detection surface this kind of evidence per lead, which you can connect back to the persona who would care most.",
        ],
      },
      {
        heading: "A simple persona template that sales will use",
        paragraphs: [
          "Keep each persona to one page so it is actually read. The aim is a reference a rep can glance at before a call or a writer can use when drafting a sequence.",
        ],
        bullets: [
          "Role and typical titles",
          "Responsibilities and how success is measured",
          "Top three pains related to your offer",
          "Objections and the evidence that answers them",
          "Preferred channels and the tone that works",
        ],
      },
      {
        heading: "Turning personas into messaging",
        paragraphs: [
          "Write one core message per persona: the problem you solve for them, framed in their language, plus a single proof point. A finance persona hears about cost and risk; a user hears about time saved and fewer headaches. When you contact several people in one account, each should get a version suited to their role rather than the same email.",
          "LeadGen AI drafts outreach from each lead’s own enrichment and audit data, so the account-level specifics are already in the draft. Your persona work supplies the angle — which findings to lead with and how to frame them for the person reading.",
        ],
      },
      {
        heading: "Keeping personas honest over time",
        paragraphs: [
          "Personas drift as markets change. Review them quarterly against recent wins and losses. Because every message is logged against its lead in the LeadGen AI pipeline, you can look back at which angles drew replies from which kinds of businesses and update the personas accordingly.",
        ],
      },
    ],
    steps: {
      heading: "Building a persona in a week",
      items: [
        { title: "Pick the roles", text: "List the two or three roles involved in most of your recent deals." },
        { title: "Interview and review", text: "Talk to customers and read call notes for triggers, pains and objections." },
        { title: "Draft the one-pager", text: "Fill in the template with evidence, not assumptions." },
        { title: "Write the core message", text: "Create a short message and proof point for each persona." },
        { title: "Test in outreach", text: "Use the messages in real campaigns and note which resonate." },
      ],
    },
    considerations: {
      heading: "Limits and trade-offs",
      items: [
        "Personas built in a workshop without customer input often reflect internal bias.",
        "Too many personas become unmanageable; three or four is plenty for most teams.",
        "In small businesses the owner holds several personas at once, so keep messages compact.",
        "Personas guide tone but cannot replace research on the specific account.",
      ],
    },
    example: {
      heading: "An HR software vendor splits one message into three",
      text: "Suppose a small HR software vendor in Gurugram had been sending one email to everyone. After reviewing ten recent deals, it defined three personas: the founder (cost and time), the office manager (fewer spreadsheets) and the accountant (accurate payroll data). It rewrote its sequence so each role received its own opening line, while the account details came from the lead record.",
    },
    faqs: [
      { q: "How detailed should a B2B buyer persona be?", a: "Detailed enough to change what you say — role, responsibilities, pains, objections and channels. Personal details like hobbies rarely help in B2B." },
      { q: "Do I need personas if I sell to very small businesses?", a: "Yes, but they are simpler. The owner often plays every role, so one persona with a clear view of their priorities and time constraints may be enough." },
      { q: "How do personas relate to lead scoring?", a: "Scoring ranks accounts by fit and signals; personas decide who to contact inside those accounts and what to say. They work together rather than replacing each other." },
    ],
    related: ["/b2b/ideal-customer-profile", "/b2b/reaching-decision-makers", "/services/ai-drafted-outreach-messages", "/services/prospect-research", "/strategies/cold-email-outreach"],
    cta: { heading: "Pair personas with real account data", text: "Draft outreach that combines your persona angle with each lead’s enrichment and audit findings.", label: "Book a demo", href: "/book-a-demo" },
  },
  {
    path: "/b2b/reaching-decision-makers",
    title: "Reaching Decision-Makers",
    h1: "How to Reach Decision-Makers in B2B Accounts",
    metaTitle: "Reaching B2B Decision-Makers: Roles, Access, Relevance",
    metaDescription: "Identify who decides in a B2B account, find legitimate routes to reach them, and earn attention with relevance rather than volume or gatekeeper tricks.",
    eyebrow: "B2B audiences",
    intro: [
      "Reaching decision-makers comes down to three things: knowing which role actually decides, finding a legitimate route to that person or their team, and having something relevant enough to say that they respond. Most failed outreach breaks on the third point, not the first two.",
      "In a small business, the decision-maker is usually the owner, and the published phone number or email often reaches them directly. In larger organisations, authority is spread across a buying group and access runs through assistants, shared inboxes and internal champions. This page covers how to handle both.",
    ],
    highlights: [
      "Identify the role before the name",
      "Use public, legitimate contact routes",
      "Lead with account-specific relevance",
      "Enter through champions in larger firms",
    ],
    sections: [
      {
        heading: "Working out who actually decides",
        paragraphs: [
          "Titles mislead. A “director” in a ten-person firm may have less buying authority than an office manager who controls the supplier list. Start by asking what your product changes and whose budget or responsibility that falls under.",
          "For owner-led businesses, the answer is usually the owner or a partner. For mid-sized firms, it is often a department head with sign-off from finance. For enterprises, expect a committee. Map the roles first, then look for the people who hold them.",
        ],
      },
      {
        heading: "Finding legitimate contact routes",
        paragraphs: [
          "Public business information is the starting point: the company website, its contact and about pages, business listings and professional profiles. LeadGen AI’s enrichment resolves each lead’s website, crawls the pages that normally carry contact details and adds business emails found on the company’s own site, normalised phone numbers, social profiles and company details — recording where each value came from.",
          "Company-level routes such as a main line or general inbox are not dead ends. A short, polite request to be pointed to the right person often works, especially when you explain why the message is relevant.",
        ],
        bullets: [
          "Website contact and about pages",
          "Listed phone numbers on business profiles",
          "Professional profiles for role identification",
          "Referrals from existing customers or partners",
        ],
      },
      {
        heading: "Earning attention with relevance",
        paragraphs: [
          "Senior people filter ruthlessly. The messages that get through say something specific about their business: a measurable gap, a change you noticed, or a clear outcome similar firms have pursued. Generic praise and long product descriptions are deleted.",
          "LeadGen AI’s SEO website audit and opportunity detection give you concrete material — for example, a site that doesn’t resolve or a listing with no reachable contact route — and AI-drafted outreach builds that evidence into the first message.",
        ],
      },
      {
        heading: "Working through gatekeepers and champions",
        paragraphs: [
          "Assistants and front-desk staff are not obstacles to trick; they protect the decision-maker’s time. Be honest about who you are and why you are calling, and keep it brief. In larger accounts, a better route is often a champion — someone who feels the problem and will introduce you internally. Give champions material they can forward: a short summary, a relevant finding and a clear next step.",
        ],
      },
    ],
    steps: {
      heading: "A repeatable approach for each account",
      items: [
        { title: "Map the roles", text: "Decide which functions own the problem and the budget." },
        { title: "Enrich the account", text: "Collect website, emails, phone numbers and profiles with sources recorded." },
        { title: "Find the hook", text: "Pick one specific, verifiable observation about the business." },
        { title: "Make a short first contact", text: "Send a concise message or call that references the hook and asks one question." },
        { title: "Follow up and widen", text: "Follow up a few times, then approach a second role if the first stays quiet." },
      ],
    },
    considerations: {
      heading: "Points to keep in mind",
      items: [
        "Guessing personal email patterns can breach rules and damage your sender reputation; prefer published business contacts.",
        "Contacting many people in one account at once can feel like spam; sequence it.",
        "Rules on unsolicited calls and emails differ by country, so check current requirements and take advice.",
        "Senior access without a relevant reason tends to burn the account for months.",
        "Always honour opt-out requests promptly and record them.",
      ],
    },
    example: {
      heading: "A commercial cleaning firm gets past the front desk",
      text: "Imagine a commercial cleaning company in Hyderabad targeting private schools. Calls to the main line kept ending at reception. It switched approach: a short email to the school’s published office address, mentioning that its listing showed no weekend contact option and asking who handles facilities contracts. Several schools replied with the right name, and follow-up calls were then expected rather than cold.",
    },
    faqs: [
      { q: "Should I contact the CEO or someone lower down first?", a: "In small businesses, go to the owner. In larger firms, starting with the person who feels the problem often works better, as they can champion you to the budget holder." },
      { q: "Is it acceptable to email a generic info@ address?", a: "Yes. A short, relevant note asking to be directed to the right person is a legitimate route and often reaches someone who can forward it." },
      { q: "What contact data does LeadGen AI collect?", a: "Business emails found on the company’s own website, listed phone numbers normalised and checked for a plausible format, the website and its contact pages, social profiles and company details, each with its source recorded." },
      { q: "How many people in one account should I contact?", a: "Start with one or two, then widen if there is no response. Contacting the whole team at once tends to look automated and can irritate the account." },
    ],
    related: ["/b2b/buyer-personas", "/b2b/enterprise-accounts", "/services/ai-contact-enrichment", "/services/business-email-discovery", "/strategies/cold-calling", "/responsible-prospecting"],
    cta: { heading: "Find the right routes faster", text: "Enrich accounts with public contact routes and draft relevant first messages.", label: "Start free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/b2b/small-business-prospecting",
    title: "Small Business Prospecting",
    h1: "Prospecting Small Businesses: Owner-Led Buying and Local Data",
    metaTitle: "Small Business Prospecting with Local Data",
    metaDescription: "How to prospect small businesses: understand owner-led buying, build local lists from maps and directories, and reach busy owners with short, relevant offers.",
    eyebrow: "B2B audiences",
    intro: [
      "Prospecting small businesses works best when you accept how they buy: the owner usually decides, quickly or not at all, based on a clear problem and a trusted offer. Your job is to find the right local businesses, spot the ones with a visible need, and reach the owner with something short and concrete.",
      "Small businesses are numerous, local and well represented in public listings, which makes them ideal for data-driven prospecting. They are also busy and sceptical of sales pitches. This page covers how owner-led buying works, how to build local lists and how to qualify them before anyone picks up the phone.",
    ],
    highlights: [
      "The owner is usually the buyer",
      "Local listings make lists easy",
      "Visible gaps signal genuine need",
      "Keep offers short and specific",
    ],
    sections: [
      {
        heading: "How owner-led buying works",
        paragraphs: [
          "In most small firms, the owner controls spending and makes decisions alone or with a partner. There is no procurement process, which can make deals fast. The flip side is limited time and attention, and a strong aversion to risk with their own money.",
          "Owners respond to clear outcomes — more enquiries, fewer missed calls, less admin — and to proof that feels close to home, such as work for similar local businesses. They are wary of long contracts and jargon.",
        ],
        bullets: [
          "Decisions are fast when the problem is obvious",
          "Price sensitivity is real; payback must be clear",
          "Trust and local reputation carry weight",
          "Timing depends on season and cash flow",
        ],
      },
      {
        heading: "Building local lists from public data",
        paragraphs: [
          "Small businesses are visible on maps and directories, which carry the name, category, address, phone number, website, ratings and review counts. A category plus a city or area is usually enough to build a solid starting list.",
          "LeadGen AI runs a category-and-location query across enabled sources, normalises the results into one record per business and de-duplicates across sources. Long jobs continue on the worker fleet even after you close the browser tab, and every record shows where each field came from.",
        ],
      },
      {
        heading: "Spotting businesses with a visible need",
        paragraphs: [
          "Local data is rich in need signals. A business with no website, a site that doesn’t load, a listing without a reachable contact route, or few reviews compared with neighbours may all be good prospects, depending on what you sell.",
          "LeadGen AI’s business opportunity detection flags exactly these situations — no website, unresolved sites, no contact route, weak audits — with the evidence attached. The SEO website audit adds a graded scorecard and a prioritised fix list that can be shared with the owner as a conversation starter.",
        ],
      },
      {
        heading: "Reaching busy owners",
        paragraphs: [
          "Phone calls work well for many local businesses, especially outside peak hours. Email works when it is short and specific. In both cases, lead with the observation (“your site isn’t loading on mobile”) and a simple next step, not a product tour.",
          "Use the lead’s score to decide where to spend calling time, and log each touch so nobody calls the same owner twice in a week.",
        ],
      },
    ],
    steps: {
      heading: "A weekly small business prospecting routine",
      items: [
        { title: "Pick one category and area", text: "Choose a tight segment, such as salons in one district." },
        { title: "Run the query", text: "Collect and de-duplicate local records with contact details." },
        { title: "Filter for need", text: "Sort by score and opportunity flags to find visible gaps." },
        { title: "Contact the top band", text: "Call or email owners with one specific observation and offer." },
        { title: "Log and follow up", text: "Record outcomes on the pipeline board and follow up on a set schedule." },
      ],
    },
    considerations: {
      heading: "Realities of selling to small businesses",
      items: [
        "Deal values are often small, so efficiency matters more than deep research per account.",
        "Churn can be higher; plan for onboarding and quick early wins.",
        "Owners may respond better to phone or in-person contact than email.",
        "Listing data can be outdated for very small firms, so verify before investing much time.",
        "Unsolicited marketing rules apply to businesses too in many countries — check what applies to you.",
      ],
    },
    example: {
      heading: "A web designer works one neighbourhood at a time",
      text: "Consider a freelance web designer in Jaipur. Each week she picks one category, such as dental clinics in one area. She runs the query, filters to clinics flagged as having no website or a failing site, and calls in the late afternoon. She offers to send the free audit summary by email, which gives owners something tangible and makes the follow-up conversation easier.",
    },
    faqs: [
      { q: "Is calling or emailing better for small businesses?", a: "Both work; many local owners answer the phone more readily than they read sales email. A short email followed by a call is a common combination." },
      { q: "How large should a small business prospect list be?", a: "Size it to what you can follow up properly in a week or two. A few dozen well-chosen businesses usually beats hundreds you never get back to." },
      { q: "What signals suggest a small business needs help?", a: "No website, a site that fails to load, no reachable contact route, weak audit grades, or few reviews compared with local competitors are common examples, depending on what you sell." },
    ],
    related: ["/services/local-business-prospecting", "/services/google-maps-lead-extraction", "/services/business-opportunity-detection", "/b2b/agencies", "/strategies/cold-calling"],
    cta: { heading: "Prospect your local market", text: "Build a de-duplicated list of local businesses and see which ones have visible gaps.", label: "Start free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/b2b/mid-market-prospecting",
    title: "Mid-Market Prospecting",
    h1: "Mid-Market Prospecting: Committees, Process and Timing",
    metaTitle: "Mid-Market Prospecting: Committees and Timing",
    metaDescription: "Prospect mid-market companies effectively by understanding small buying committees, emerging processes and the timing triggers that open a buying window.",
    eyebrow: "B2B audiences",
    intro: [
      "Mid-market prospecting means selling to companies that have outgrown owner-only decisions but have not yet built enterprise-style procurement. Expect a small buying committee, an emerging process and a decision that hinges on timing — a new hire, a growth spurt or a system that has started to break.",
      "These companies often offer the best balance of deal size and speed. They have real budgets and real problems, and they can still decide within weeks if you reach the right people at the right moment. This page explains how to identify them, map their buying groups and time your outreach.",
    ],
    highlights: [
      "Two to five people usually decide",
      "Processes exist but stay flexible",
      "Growth triggers open buying windows",
      "Balance research depth with volume",
    ],
    sections: [
      {
        heading: "What defines a mid-market account",
        paragraphs: [
          "Definitions vary by industry, but the practical markers are consistent: multiple departments, a management layer between the owner and the front line, more than one location or a substantial single site, and at least some formal approval for purchases above a threshold.",
          "From public data you can often infer this through the number of locations, the breadth of services listed, a well-developed website with careers or team pages, and a high volume of reviews.",
        ],
      },
      {
        heading: "Mapping the small buying committee",
        paragraphs: [
          "Mid-market deals usually involve a department head who owns the problem, a senior leader or owner who approves spend, and sometimes a finance or IT voice. Each has different concerns, and none wants to be surprised late in the process.",
        ],
        bullets: [
          "Problem owner: wants the pain solved without disruption",
          "Approver: wants a clear return and low risk",
          "Finance or IT: wants terms, security and fit checked",
          "End users: want something that won’t slow them down",
        ],
      },
      {
        heading: "Timing triggers that open a window",
        paragraphs: [
          "Mid-market firms buy when something changes. Opening a new branch, hiring for a function, launching a new service, or visibly struggling with an existing setup are all triggers. Seasonality matters in many industries too.",
          "Some triggers are observable in lead data: a new location appearing in listings, a website relaunch, or a deteriorating site health score. LeadGen AI recalculates scores when a lead is re-enriched, so re-running enrichment on a target list periodically can surface accounts whose signals have changed.",
        ],
      },
      {
        heading: "Researching efficiently at mid-market scale",
        paragraphs: [
          "You cannot research every mid-market account as deeply as an enterprise, but generic outreach underperforms. A practical compromise is tiering: light research for the bulk of the list and deeper preparation for the top-scoring tier.",
          "LeadGen AI supports this by bundling the basics on every record — address, website, contacts, ratings, audit findings — and a 0–100 score with stored reasons, so reps can see in seconds why an account is worth their time.",
        ],
      },
      {
        heading: "Moving a deal through the process",
        paragraphs: [
          "Once a conversation starts, ask early how decisions of this size get made and who else should be involved. Offer a short summary the champion can circulate. Track stages, owners and every touch on the pipeline board so that handovers between colleagues don’t lose context.",
        ],
      },
    ],
    steps: {
      heading: "A mid-market prospecting workflow",
      items: [
        { title: "Define the size band", text: "Agree which observable signals mark an account as mid-market for you." },
        { title: "Build and tier the list", text: "Collect accounts, score them and split into research tiers." },
        { title: "Watch for triggers", text: "Re-enrich periodically and note changes in locations, sites or scores." },
        { title: "Open with the problem owner", text: "Start with the person who feels the pain, then widen to the approver." },
        { title: "Equip the champion", text: "Provide a concise summary and next steps they can share internally." },
      ],
    },
    considerations: {
      heading: "Trade-offs in the mid-market",
      items: [
        "Committees add time; build follow-ups into your forecast.",
        "Single-threaded deals stall when your contact goes quiet or leaves.",
        "Over-researching every account limits volume — tier your effort.",
        "Some mid-market firms behave like small businesses and others like enterprises; qualify the process early.",
      ],
    },
    example: {
      heading: "A fleet-tracking vendor times its outreach",
      text: "Picture a fleet-tracking vendor targeting logistics firms in Pune. It builds a list of firms with several listed depots and a working website, then re-enriches the list each month. When a firm adds a new depot to its listings, the account moves up the queue and the rep contacts the operations head with a note about managing an extra site.",
    },
    faqs: [
      { q: "How long do mid-market deals usually take?", a: "It depends heavily on product and price. They tend to be longer than small business deals and shorter than enterprise ones; ask each prospect about their process to forecast realistically." },
      { q: "Who should I contact first in a mid-market company?", a: "Usually the person who owns the problem, such as a department head. They can explain the process and help you reach the approver." },
      { q: "How do I know a company is mid-market from public data?", a: "Look for multiple locations, a broad service range, a well-developed website with team or careers pages, and substantial review volume. Set your own thresholds and test them." },
    ],
    related: ["/b2b/enterprise-accounts", "/b2b/small-business-prospecting", "/b2b/reaching-decision-makers", "/strategies/trigger-event-prospecting", "/services/crm-pipeline-management"],
    cta: { heading: "Tier your mid-market list", text: "Score accounts, see the reasons behind each score and focus research where it counts.", label: "Book a demo", href: "/book-a-demo" },
  },
  {
    path: "/b2b/enterprise-accounts",
    title: "Enterprise Accounts",
    h1: "Winning Enterprise Accounts with Planning and Multi-Threading",
    metaTitle: "Enterprise Account Planning and Multi-Threading",
    metaDescription: "Plan enterprise accounts properly: choose targets, map stakeholders, multi-thread relationships and sustain long cycles without losing momentum or context.",
    eyebrow: "B2B audiences",
    intro: [
      "Winning enterprise accounts depends on careful account planning and multi-threading — building relationships with several stakeholders across functions so that the deal does not depend on one contact. Enterprise buying involves committees, procurement, security and legal review, and cycles that can run for many months.",
      "Because each account is worth a great deal and the pool is small, enterprise prospecting inverts the volume logic of small business sales. You pick fewer targets, research each one thoroughly and coordinate a sustained programme of touches. This page covers how to choose accounts, plan them and keep momentum through long cycles.",
    ],
    highlights: [
      "Choose a short list of targets",
      "Write a plan for each account",
      "Build several relationships per account",
      "Expect procurement, security and legal steps",
    ],
    sections: [
      {
        heading: "Selecting enterprise targets",
        paragraphs: [
          "Enterprise target lists are usually short and deliberate. Start with your ideal customer profile, then add strategic filters: industries where you have proof, regions you can support and organisations whose structure suits your product. Many teams keep a named list that changes only at planned reviews.",
          "Larger organisations often operate many sites or branches. Public listings for those locations — addresses, websites, contact routes and review signals — help you understand footprint and spot regional teams that might pilot a solution before a wider rollout.",
        ],
      },
      {
        heading: "What goes into an account plan",
        paragraphs: [
          "An account plan is a living document the whole team can see. It does not need to be long, but it should answer why this account, why now and how you will get in.",
        ],
        bullets: [
          "Business priorities and recent changes",
          "Organisation map: divisions, regions and key roles",
          "Known pains and where your offer fits",
          "Existing relationships, partners or competitors in place",
          "Entry strategy and next three actions",
        ],
      },
      {
        heading: "Multi-threading the relationship",
        paragraphs: [
          "Single-threaded enterprise deals are fragile. If your one contact changes role, goes on leave or loses an internal argument, the opportunity can disappear. Multi-threading means deliberately connecting with the economic buyer, the problem owner, technical evaluators and end users, each with messaging that fits their concerns.",
          "Coordination matters. Several colleagues contacting one account need a shared view of who has spoken to whom. LeadGen AI’s CRM pipeline keeps stages, owners and full activity history on each record, and role-based access lets each team see the records it should.",
        ],
      },
      {
        heading: "Navigating procurement and security review",
        paragraphs: [
          "Enterprises often require vendor onboarding forms, security questionnaires, data-handling details and contract negotiation. Prepare these materials before you need them, and ask early what the process involves so it doesn’t surprise you at the end.",
          "Be precise about what your own product and processes do. Overstating capabilities in a questionnaire creates problems later.",
        ],
      },
      {
        heading: "Sustaining momentum through long cycles",
        paragraphs: [
          "Long cycles need regular, useful touches rather than check-ins. Share relevant insights, introduce peers, and keep mutual action plans updated. Review each account monthly against its plan and adjust if signals change.",
        ],
      },
    ],
    steps: {
      heading: "Running an enterprise account programme",
      items: [
        { title: "Agree the named list", text: "Select a small set of accounts with leadership and fix a review date." },
        { title: "Research and map", text: "Build an organisation map and note priorities, pains and existing vendors." },
        { title: "Plan the entry", text: "Choose the first stakeholders and the reason to engage each one." },
        { title: "Multi-thread deliberately", text: "Add relationships across functions, logging every interaction." },
        { title: "Manage the process", text: "Prepare for procurement and security steps and keep a shared action plan." },
      ],
    },
    considerations: {
      heading: "Enterprise realities",
      items: [
        "Cycles are long and forecasts uncertain; enterprise revenue should not be the only pipeline.",
        "Security and compliance reviews require accurate, prepared documentation.",
        "A small team can only work a handful of enterprise accounts properly.",
        "Public data shows footprint but not internal politics; conversations fill that gap.",
        "Pilots can stall without a clear success definition agreed upfront.",
      ],
    },
    example: {
      heading: "A training provider enters a hospital network",
      text: "Imagine a clinical training provider targeting a regional hospital group with many sites. It maps the group’s locations from public listings, identifies a single hospital with a new wing, and approaches its nursing head about a pilot. It then connects with the group’s learning lead and procurement, keeping every touch logged so the whole team can see where the account stands.",
    },
    faqs: [
      { q: "How many enterprise accounts can one seller handle?", a: "It varies with deal complexity, but enterprise sellers typically work a small, named set so they can research and engage each one properly rather than spreading thin." },
      { q: "What is multi-threading in B2B sales?", a: "Building relationships with several stakeholders in one account — buyers, users, evaluators — so the deal does not depend on a single contact." },
      { q: "Is outbound effective for enterprise accounts?", a: "It can be, when it is highly researched and coordinated. Many teams combine it with events, partners and referrals to reach senior stakeholders." },
    ],
    related: ["/b2b/mid-market-prospecting", "/b2b/reaching-decision-makers", "/strategies/account-based-marketing", "/services/role-based-team-access", "/services/crm-pipeline-management"],
    cta: { heading: "Coordinate account teams", text: "Keep stages, owners and activity history in one pipeline with role-based access.", label: "Book a demo", href: "/book-a-demo" },
  },
  {
    path: "/b2b/selling-to-startups",
    title: "Selling to Startups",
    h1: "Selling to Startups: Signals, Speed and Tight Budgets",
    metaTitle: "Selling to Startups: Signals, Speed and Budgets",
    metaDescription: "Sell to startups by spotting growth signals, matching their speed, respecting tight budgets and proving value fast before priorities shift again.",
    eyebrow: "B2B audiences",
    intro: [
      "Selling to startups rewards vendors who spot the right signals, move as quickly as the founders do, and price for tight budgets that grow over time. Startups decide fast when something is clearly useful, but they also drop tools quickly when priorities change or cash gets tight.",
      "Founders and early teams are reachable and often open to new tools, which makes startups attractive. The challenge is timing and fit: the same company may need something urgently one quarter and not at all the next. This page covers how to find startups, read their signals and structure an offer they can say yes to.",
    ],
    highlights: [
      "Founders often decide in days",
      "Growth signals reveal timing",
      "Flexible pricing lowers the barrier",
      "Prove value inside the first weeks",
    ],
    sections: [
      {
        heading: "How startups buy",
        paragraphs: [
          "Early-stage startups have few decision-makers, usually the founders. They evaluate tools by trying them, asking peers and reading reviews rather than running formal processes. Speed matters to them more than polish, and they dislike long contracts.",
          "As they grow, a function lead appears for sales, engineering or operations and starts owning budgets. Procurement arrives later. Knowing which stage a startup is at tells you who to talk to and how formal the process will be.",
        ],
      },
      {
        heading: "Signals that a startup may need you",
        paragraphs: [
          "Startups broadcast change. New hiring, a product launch, a move into a new city or a new website are all public. Activity on professional networks and in startup directories helps you see who is growing.",
        ],
        bullets: [
          "Recent hiring for the function your product supports",
          "A new website, product page or pricing page",
          "Expansion into new cities or markets",
          "Founders posting about a problem you solve",
        ],
      },
      {
        heading: "Finding startups in your target market",
        paragraphs: [
          "Startups tend to cluster around categories and cities — software firms in tech hubs, D2C brands in certain verticals. A category-and-location query across Google Maps and LinkedIn, as LeadGen AI runs, produces a list of businesses with websites and contact routes, normalised and de-duplicated across sources.",
          "Because the scoring engine considers whether a business is credibly online and actively operating, it helps separate active young companies from abandoned listings.",
        ],
      },
      {
        heading: "Matching their speed and budget",
        paragraphs: [
          "Make it easy to start: a short trial, monthly terms, or a small first scope. Respond within hours, not days. Keep demos short and focused on the founder’s stated problem.",
          "Budget constraints are real, but startups pay for things that save founder time or bring revenue. Frame your offer in those terms and plan for expansion as they grow.",
          "Expansion is where startup accounts pay off. A team that starts with one seat or one small project may grow into a significant customer within a year or two if the first experience is good. Plan check-ins around their milestones, such as new hires or new offices, and log each interaction so whoever owns the account later can see the history.",
        ],
      },
    ],
    steps: {
      heading: "A startup-focused outreach approach",
      items: [
        { title: "Choose the stage", text: "Decide whether you sell to very early teams or to funded, growing startups." },
        { title: "Build the list", text: "Query relevant categories and hubs, then filter for active, credible businesses." },
        { title: "Watch for signals", text: "Note hiring, launches and expansions that suggest timing." },
        { title: "Reach the founder or function lead", text: "Send a brief, specific message tied to the signal." },
        { title: "Offer a low-friction start", text: "Propose a trial or small first engagement with a clear success measure." },
      ],
    },
    considerations: {
      heading: "Risks with startup customers",
      items: [
        "Startups can shut down or pivot; avoid over-investing in any single account.",
        "Discounts given early can be hard to raise later — set expectations.",
        "Founders get many pitches; generic outreach is ignored quickly.",
        "Payment terms may need attention with very early companies.",
      ],
    },
    example: {
      heading: "A bookkeeping service targets funded startups",
      text: "Suppose an outsourced bookkeeping service in Bengaluru focuses on young software firms. It builds a list from category queries in the city, filters out businesses whose websites fail to resolve, and contacts founders whose firms are hiring their first finance or operations person, offering a one-month starter engagement.",
    },
    faqs: [
      { q: "What is the best channel for reaching startup founders?", a: "Professional networks, warm introductions and short direct emails are common. Founders respond to messages that show you understand their stage and problem." },
      { q: "Should I discount heavily to win startups?", a: "A low-friction start helps, but deep discounts can anchor price expectations. Many vendors prefer smaller scope or shorter terms over large discounts." },
      { q: "How do I avoid wasting time on inactive startups?", a: "Check for a working website, recent activity and a reachable contact route. Scoring that considers whether a business is credibly online helps filter out dormant listings." },
      { q: "Who inside a growing startup should I contact once it has hired managers?", a: "Once function leads exist, they usually own the budget for tools in their area. Founders still approve larger spend, so a common approach is to engage the function lead first and keep the founder informed with a short summary of value." },
    ],
    related: ["/b2b/founder-led-sales", "/b2b/ideal-customer-profile", "/strategies/linkedin-prospecting", "/strategies/trigger-event-prospecting", "/services/linkedin-lead-enrichment"],
    cta: { heading: "Find active startups", text: "Build a list of credible, active young businesses in your target categories and cities.", label: "Start free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/b2b/msme-suppliers",
    title: "MSME Suppliers",
    h1: "Lead Generation for MSME Suppliers in India",
    metaTitle: "MSME Supplier Lead Generation in India",
    metaDescription: "How Indian MSME suppliers can find B2B buyers through directories like IndiaMART, build trust with first-time customers and follow up enquiries efficiently.",
    eyebrow: "B2B audiences",
    intro: [
      "MSME suppliers in India generate leads most reliably by being visible where buyers search — B2B directories such as IndiaMART, Google Maps and industry networks — and by proactively reaching businesses that use their products. Trust is the deciding factor: buyers want proof that a supplier is genuine, consistent and responsive.",
      "Many micro, small and medium enterprises depend on a few long-standing customers and word of mouth. That works until a large customer leaves. This page covers how MSMEs can widen their buyer base, how vendors who sell to MSMEs can find them, and how LeadGen AI’s IndiaMART and Google Maps sources fit both angles.",
    ],
    highlights: [
      "Directories are where buyers search",
      "Trust signals decide first orders",
      "Fast enquiry response wins business",
      "Proactive outreach reduces customer concentration",
    ],
    sections: [
      {
        heading: "Why directories matter for MSMEs",
        paragraphs: [
          "B2B directories and marketplaces are a primary discovery channel for many Indian business buyers looking for components, raw materials, packaging or services. A complete, accurate listing with product details, location and contact routes puts an MSME in front of buyers actively searching.",
          "Directories also work in reverse. Suppliers can use them to identify manufacturers, distributors and traders who might buy their inputs, and to see which competitors serve a region.",
        ],
      },
      {
        heading: "Finding buyers proactively",
        paragraphs: [
          "Waiting for enquiries leaves growth to chance. Proactive suppliers identify businesses in the categories that consume their product — for example, a corrugated box maker targeting food processors and e-commerce sellers — and reach out directly.",
          "LeadGen AI can run a directory search term on IndiaMART alongside category and location queries on Google Maps, fanning out to each enabled source and merging results into one de-duplicated record per business. Records carry the business name, category, address, website, listed phone numbers and public emails, with the source of each field recorded. Note that multiple sources including LinkedIn and IndiaMART are part of the Scale plan.",
        ],
      },
      {
        heading: "Building trust with first-time buyers",
        paragraphs: [
          "B2B buyers in India often worry about quality consistency, delivery reliability and whether a supplier is a genuine manufacturer. Address those concerns directly.",
        ],
        bullets: [
          "Complete listings with clear product specifications",
          "A working website with address, contact and about pages",
          "Samples or small trial orders for new buyers",
          "Reviews and references from existing customers",
          "Prompt, professional replies to every enquiry",
        ],
      },
      {
        heading: "Selling to MSMEs as a vendor",
        paragraphs: [
          "Software firms, consultants, logistics providers and agencies all prospect MSMEs. The owner usually decides, often with family or a trusted accountant involved, and value for money is scrutinised. A list built from directory and maps data lets you segment by category and city.",
          "LeadGen AI’s SEO audit and opportunity detection highlight MSMEs with no website, broken sites or no reachable contact route — useful openings for vendors offering digital services.",
        ],
      },
    ],
    steps: {
      heading: "A buyer-discovery routine for MSME suppliers",
      items: [
        { title: "List buyer categories", text: "Write down the industries that consume your product and their likely locations." },
        { title: "Search directories and maps", text: "Collect buyers by category, location and directory search terms." },
        { title: "Score and shortlist", text: "Prioritise businesses with complete records and clear fit." },
        { title: "Make a trust-first approach", text: "Introduce your firm with specifications, location and an offer of samples." },
        { title: "Track enquiries and orders", text: "Log every conversation and follow up consistently." },
      ],
    },
    considerations: {
      heading: "Practical cautions",
      items: [
        "Directory enquiries can vary widely in quality; qualify before quoting in detail.",
        "Respond quickly — buyers often contact several suppliers at once.",
        "Check current rules on commercial communication and data handling, including India’s DPDP framework, and take advice where unsure.",
        "Price-only competition erodes margins; emphasise reliability and service.",
        "Keep listing details current as products and contact numbers change.",
      ],
    },
    example: {
      heading: "A fastener manufacturer widens its customer base",
      text: "Imagine a fastener manufacturer in Ludhiana that relied on three large customers. It ran directory search terms for machinery and furniture makers across Punjab and Haryana, shortlisted businesses with websites and listed phone numbers, and called each with an offer of free samples. Within a few months it had added several smaller regular buyers, reducing its dependence on any one customer.",
    },
    faqs: [
      { q: "Is IndiaMART useful for finding buyers, not just receiving enquiries?", a: "Yes. Suppliers can search it to identify manufacturers, traders and distributors in relevant categories and approach them directly, alongside handling inbound enquiries." },
      { q: "Which LeadGen AI plan includes IndiaMART as a source?", a: "Multiple sources, including LinkedIn and IndiaMART, are listed under the Scale plan." },
      { q: "How can a small supplier appear more trustworthy online?", a: "Keep listings complete, maintain a working website with address and contact pages, gather customer reviews and offer samples or trial orders to new buyers." },
      { q: "How should an MSME handle a large number of directory enquiries?", a: "Reply quickly with a short acknowledgement, ask two or three qualifying questions about quantity, specification and delivery location, and prioritise serious buyers for detailed quotes. Logging each enquiry on a pipeline board keeps follow-ups from slipping." },
    ],
    related: ["/services/indiamart-lead-extraction", "/strategies/b2b-marketplaces", "/b2b/exporters-and-importers", "/industries/manufacturing", "/industries/wholesale-distributors"],
    cta: { heading: "Find more B2B buyers", text: "Search directories and maps together and get one de-duplicated list of potential buyers.", label: "See plans", href: "/plans" },
  },
  {
    path: "/b2b/exporters-and-importers",
    title: "Exporters & Importers",
    h1: "Buyer Discovery for Exporters and Importers",
    metaTitle: "Exporter and Importer Lead Generation",
    metaDescription: "How exporters and importers discover buyers and suppliers in new markets, qualify trade partners and build trust across distance, language and regulation.",
    eyebrow: "B2B audiences",
    intro: [
      "Exporters and importers find trade partners by choosing target markets deliberately, building lists of distributors, wholesalers and manufacturers in those markets, and qualifying each one for genuineness and fit before investing in samples or negotiations. Distance makes trust harder to establish, so verification carries more weight than in domestic sales.",
      "Trade businesses often rely on trade fairs, agents and export promotion bodies, all of which remain valuable. Data-driven prospecting adds a steady, controllable stream of contacts between those events. This page covers market selection, buyer discovery, qualification and outreach for trade businesses.",
    ],
    highlights: [
      "Pick markets before picking buyers",
      "Verify partners before sending samples",
      "Distributors and wholesalers are common entry points",
      "Expect longer, relationship-led cycles",
    ],
    sections: [
      {
        heading: "Choosing which markets to target",
        paragraphs: [
          "Market selection comes first. Consider demand for your product, tariff and regulatory barriers, logistics cost, payment risk, language and existing competition. Government trade data, export promotion councils and industry associations can help, and many exporters start with one or two markets rather than spreading thin.",
          "Importers face the mirror question: which sourcing regions offer the right balance of quality, price, reliability and lead time.",
        ],
      },
      {
        heading: "Discovering buyers in a target market",
        paragraphs: [
          "The typical buyers for exporters are importers, distributors, wholesalers, retail chains and manufacturers who use the product as an input. Many of them maintain business listings with addresses, websites and contact details.",
          "LeadGen AI runs a category and location query — for instance, a product distributor category in a foreign city — across enabled sources such as Google Maps and LinkedIn, and normalises results into one de-duplicated record per business. For Indian sourcing, IndiaMART helps importers and buying agents identify domestic manufacturers and suppliers.",
        ],
      },
      {
        heading: "Qualifying trade partners",
        paragraphs: [
          "Trade fraud and mismatched expectations are real risks. Before negotiating, check that a partner is a genuine, operating business that handles your category at a relevant scale.",
        ],
        bullets: [
          "A working website consistent with the claimed business",
          "A verifiable physical address and phone number",
          "Reviews, ratings and listing completeness",
          "Product range that matches your category",
          "Willingness to share references or trade documentation",
        ],
      },
      {
        heading: "Outreach across distance and language",
        paragraphs: [
          "First contact is usually email. Keep it short, specific to the buyer’s range, and in clear English or the buyer’s language. Include your product category, certifications you genuinely hold, minimum order quantities and an offer to send a catalogue or samples.",
          "LeadGen AI’s 0–100 score reflects completeness, website health and signals of an active business, which helps you prioritise. AI-drafted outreach uses each lead’s enrichment data, and campaigns go out through your own email transport with every message logged.",
        ],
      },
    ],
    steps: {
      heading: "A trade buyer-discovery process",
      items: [
        { title: "Select one or two markets", text: "Assess demand, barriers, logistics and payment risk." },
        { title: "Define buyer types", text: "Decide whether you target importers, distributors, retailers or manufacturers." },
        { title: "Build and enrich the list", text: "Collect businesses by category and city, adding websites and contacts." },
        { title: "Verify before engaging", text: "Check websites, addresses and listing signals for genuineness." },
        { title: "Open with a tailored offer", text: "Send a concise email with catalogue, terms and sample options." },
      ],
    },
    considerations: {
      heading: "Trade-specific risks",
      items: [
        "Export and import rules, documentation and product standards differ by country; take specialist advice.",
        "Payment terms carry real risk with new partners; consider secure payment methods.",
        "Unsolicited email rules vary between jurisdictions, so check what applies in each market.",
        "Time zones and language slow responses; plan follow-ups accordingly.",
        "Listing data quality varies by country and source.",
        "Currency movements and freight costs can change the economics of a deal between quote and shipment, so build in review points.",
      ],
    },
    example: {
      heading: "A spice exporter tests a new market",
      text: "Picture a small spice exporter in Kochi exploring one Gulf city. It builds a list of food distributors and grocery wholesalers there, filters to businesses with working websites and complete listings, and emails each with its product list and a sample offer. It tracks replies on the pipeline board and visits the most promising contacts during a later trade trip.",
    },
    faqs: [
      { q: "How do exporters find genuine overseas buyers?", a: "Combine trade fairs, export councils and agents with direct prospecting of distributors and wholesalers in target cities, verifying each through website, address and listing signals." },
      { q: "Can importers use IndiaMART to find Indian suppliers?", a: "Yes. IndiaMART lists many Indian manufacturers and traders, and searching it helps importers and buying agents build supplier shortlists." },
      { q: "What should a first email to a foreign buyer include?", a: "Your product category, a short company introduction, genuine certifications, minimum order quantities, and an offer of a catalogue or samples." },
      { q: "How do importers qualify a new overseas supplier?", a: "Check the supplier’s website, address and listing signals, ask for references and documentation, and start with a small or sample order before committing to volume. Visiting or using a third-party inspection service is common for larger orders." },
    ],
    related: ["/b2b/msme-suppliers", "/services/indiamart-lead-extraction", "/services/multi-source-lead-scraping", "/strategies/cold-email-outreach", "/industries/textiles-and-apparel"],
    cta: { heading: "Discover trade partners", text: "Build verified lists of distributors and suppliers in your target markets.", label: "Talk to us", href: "/contact" },
  },
  {
    path: "/b2b/sales-teams",
    title: "B2B Sales Teams",
    h1: "Lead Generation for B2B Sales Teams: Territories, Lists, Process",
    metaTitle: "B2B Sales Teams: Territories, Lists and Process",
    metaDescription: "Help B2B sales teams generate pipeline with fair territories, shared lead lists, clear qualification rules and a consistent process every rep follows.",
    eyebrow: "Sales motions",
    intro: [
      "B2B sales teams generate consistent pipeline when three things are in place: territories that divide the market fairly, shared lead lists built from one source of truth, and a process every rep follows from first touch to handover. Without them, reps duplicate effort, cherry-pick easy accounts and leave large parts of the market untouched.",
      "Sales leaders spend a surprising amount of time on list arguments — who owns which account, why a lead was contacted twice, where a spreadsheet went. This page covers how to design territories, build and govern lists, and set up a process that scales as the team grows.",
    ],
    highlights: [
      "Divide territories by real potential",
      "Keep one shared, de-duplicated list",
      "Agree qualification rules in writing",
      "Log every touch against the lead",
    ],
    sections: [
      {
        heading: "Designing territories that are fair and workable",
        paragraphs: [
          "Territories can be split by geography, industry, account size or a mix. Geography suits field and local sales; industry suits teams whose messaging depends on vertical expertise; size tiers suit organisations with distinct small business and enterprise motions.",
          "Balance matters more than neatness. Two cities of similar size may hold very different numbers of businesses in your categories. Building lists for each candidate territory before assigning them gives you a factual basis for the split.",
        ],
        bullets: [
          "Count target accounts per territory, not just population",
          "Weight by score so quality is balanced, not only volume",
          "Review splits at set intervals, not ad hoc",
          "Write clear rules for accounts that span territories",
        ],
      },
      {
        heading: "Building lists from one source of truth",
        paragraphs: [
          "When each rep builds lists in personal spreadsheets, duplicates and gaps are inevitable. A shared system where every account exists once, with an owner and history, removes most conflict.",
          "LeadGen AI normalises results from Google Maps, LinkedIn and IndiaMART into one record per business and de-duplicates across sources. Every field records its source, every job records what it fetched and when, and the CRM pipeline assigns owners and stages. Records can be exported to CSV when you need them elsewhere.",
        ],
      },
      {
        heading: "Setting qualification rules the team shares",
        paragraphs: [
          "Reps qualify differently unless rules are explicit. Agree what makes an account worth working (fit and reachability), what makes a conversation an opportunity (need, authority, timing) and what disqualifies a lead.",
          "A shared score helps. LeadGen AI’s 0–100 score stores its reasons on each record, so a manager and a rep can look at the same account and see why it ranked where it did, and the team can agree that the top band gets priority.",
        ],
      },
      {
        heading: "A process from first touch to handover",
        paragraphs: [
          "Define the stages an account moves through and what must be true to move it on. Consistent stages make pipeline reviews meaningful and let colleagues take over accounts without starting from scratch.",
          "Role-based access in LeadGen AI lets each team see the records it should, which matters as you add managers, SDRs and account executives with different responsibilities. On the Growth plan, full team access includes seven role modules.",
        ],
      },
      {
        heading: "Coaching from activity data",
        paragraphs: [
          "When every message and call is logged against its lead, coaching becomes specific. Managers can see which segments a rep has worked, how many touches accounts received before replying and where deals tend to stall, and coach on behaviour rather than gut feel.",
        ],
      },
    ],
    steps: {
      heading: "Setting up a team lead generation system",
      items: [
        { title: "Size the market", text: "Build lists for candidate territories and count scored target accounts." },
        { title: "Assign territories", text: "Split by geography, industry or size so potential is balanced." },
        { title: "Centralise the list", text: "Keep every account once in a shared pipeline with an owner." },
        { title: "Write the rules", text: "Document qualification criteria, stages and disqualification reasons." },
        { title: "Review monthly", text: "Use activity and stage data to coach reps and adjust territories." },
      ],
    },
    considerations: {
      heading: "Common team challenges",
      items: [
        "Territory changes unsettle reps; communicate the reasons and timing clearly.",
        "A central system only works if reps actually log activity — make it easy and expected.",
        "Over-rigid rules can stop reps pursuing good opportunities outside the profile.",
        "List data ages; schedule re-enrichment before territory reviews.",
        "Different products or segments may need separate processes.",
      ],
    },
    example: {
      heading: "A packaging distributor rebalances its reps",
      text: "Consider a packaging distributor in Chennai with four reps who each built their own lists. Several accounts were contacted by two reps in the same week. The sales lead built one list per district from category queries, compared scored account counts, redrew the territories, and moved every account into a shared pipeline with an owner. Duplicate contacts stopped, and reviews focused on stage movement rather than ownership disputes.",
    },
    faqs: [
      { q: "Should B2B territories be based on geography or industry?", a: "Geography suits local and field sales; industry suits teams that need vertical expertise. Many teams combine them, for example industry within region." },
      { q: "How do I stop two reps contacting the same account?", a: "Keep one de-duplicated record per business in a shared pipeline with a named owner, and make checking ownership part of the process before outreach." },
      { q: "How often should territories be reviewed?", a: "Many teams review once or twice a year, or when headcount changes. Frequent changes disrupt relationships, so schedule reviews rather than making ad hoc moves." },
    ],
    related: ["/b2b/sdr-teams", "/services/crm-pipeline-management", "/services/role-based-team-access", "/services/lead-deduplication", "/services/sales-prioritisation"],
    cta: { heading: "Give your team one source of truth", text: "Shared, de-duplicated lists with owners, stages and role-based access.", label: "Book a demo", href: "/book-a-demo" },
  },
  {
    path: "/b2b/sdr-teams",
    title: "SDR Teams",
    h1: "Running SDR Teams: Research, Cadences and Metrics",
    metaTitle: "SDR Teams: Research, Cadences and Metrics",
    metaDescription: "Run an effective SDR team: speed up account research, design sensible outreach cadences and track metrics that reflect pipeline quality, not just activity.",
    eyebrow: "Sales motions",
    intro: [
      "An effective SDR team balances three things: enough research to make each touch relevant, cadences that follow up persistently without annoying prospects, and metrics that reward qualified meetings rather than raw activity. Get the balance wrong in any direction and you either produce too little or burn through the market.",
      "Sales development representatives sit between marketing and account executives. Their job is to turn target accounts into qualified conversations. This page is for SDR managers who want to reduce research time, design better sequences and measure what matters.",
    ],
    highlights: [
      "Cut research time, keep relevance",
      "Design cadences around buyer attention",
      "Measure meetings and quality, not dials",
      "Hand over with full context",
    ],
    sections: [
      {
        heading: "Making research fast enough to scale",
        paragraphs: [
          "SDRs often spend much of their day researching accounts by hand: checking websites, finding contact routes, reading listings. Some research is essential, but much of it is mechanical and can be prepared in advance.",
          "LeadGen AI assembles the mechanical part on each record: business name, category, address, website, listed phone numbers, public emails, ratings and review counts, plus enrichment from the company’s own site and an SEO audit with a graded scorecard. The 0–100 score with stored reasons tells the SDR at a glance why an account is in the queue, leaving their time for the judgment-based research that makes a message land.",
        ],
      },
      {
        heading: "Designing cadences that respect attention",
        paragraphs: [
          "A cadence is a planned sequence of touches across channels over a set period. Good cadences mix email and calls, space touches sensibly, and vary the angle of each message rather than repeating “just checking in”.",
        ],
        bullets: [
          "Open with the most relevant, account-specific observation",
          "Add value in each follow-up: a finding, a question, a resource",
          "Mix channels where appropriate, such as email then a call",
          "End with a polite close-the-loop message",
          "Stop immediately when someone opts out",
        ],
      },
      {
        heading: "Personalising at the right level",
        paragraphs: [
          "Not every account deserves the same depth. Tier accounts by score: the top tier gets fully personalised research and messaging, the middle tier gets segment-level personalisation with one account-specific line, and the rest may not be worth working yet.",
          "LeadGen AI drafts outreach using each lead’s own enrichment and audit data, so even middle-tier messages carry specifics. SDRs review and edit drafts rather than writing from scratch, and campaigns go through the team’s own email transport.",
        ],
      },
      {
        heading: "Metrics that reflect real pipeline",
        paragraphs: [
          "Activity metrics such as emails sent and calls made are easy to count but easy to game. Pair them with outcome measures and quality checks from the account executives receiving the meetings.",
        ],
        bullets: [
          "Reply rate and positive reply rate by segment",
          "Meetings booked and meetings held",
          "Meetings accepted as qualified by AEs",
          "Pipeline created from SDR-sourced meetings",
        ],
      },
      {
        heading: "Handing over cleanly to account executives",
        paragraphs: [
          "A meeting is only as good as the handover. Agree what context SDRs must pass on: the reason for contact, what the prospect said, the stakeholders identified and next steps. When every message is logged against the lead on the pipeline board, the AE can read the full history before the call.",
        ],
      },
    ],
    steps: {
      heading: "Standing up an SDR workflow",
      items: [
        { title: "Load scored accounts", text: "Give each SDR a queue of accounts ranked by score within their segment." },
        { title: "Tier the research", text: "Agree how much research each score band receives." },
        { title: "Build the cadence", text: "Write a multi-touch sequence with varied, value-adding messages." },
        { title: "Review drafts and send", text: "Edit AI-drafted messages for accuracy and tone before sending." },
        { title: "Measure and coach", text: "Track outcomes by segment and review quality with AEs weekly." },
      ],
    },
    considerations: {
      heading: "Watch-outs for SDR managers",
      items: [
        "High activity targets can push SDRs into spammy behaviour that harms sender reputation.",
        "Respect sending limits and opt-out obligations; check current email rules in each market.",
        "AI drafts still need human review for accuracy and tone.",
        "Burnout is common in SDR roles; varied work and clear progression help.",
        "Disagreements over meeting quality need a written definition both teams accept.",
      ],
    },
    example: {
      heading: "An SDR pod tiers its accounts",
      text: "Imagine a three-person SDR pod at a facilities software company in Mumbai. Previously each SDR researched every account equally. The manager split queues into three score bands: the top band received fully researched messages, the middle band received drafts built from audit and enrichment data with light edits, and the lowest band was parked. Research time fell and AEs reported better-prepared meetings.",
    },
    faqs: [
      { q: "How many touches should an SDR cadence include?", a: "There is no single right number. Many teams use several touches over two to four weeks, adjusting based on reply patterns and buyer feedback." },
      { q: "What is a good primary metric for SDRs?", a: "Qualified meetings accepted by account executives is a common choice, supported by reply rates and pipeline created, rather than raw activity counts." },
      { q: "Can AI-drafted messages replace SDR writing?", a: "They speed up drafting by pulling in account data, but SDRs should review each message for accuracy, relevance and tone before it is sent." },
    ],
    related: ["/b2b/sales-teams", "/strategies/outbound-sequences", "/services/ai-outreach-campaigns", "/services/outreach-activity-logging", "/services/prospect-research"],
    cta: { heading: "Give SDRs research-ready accounts", text: "Scored, enriched and audited leads with AI-drafted first messages to review.", label: "Book a demo", href: "/book-a-demo" },
  },
  {
    path: "/b2b/founder-led-sales",
    title: "Founder-Led Sales",
    h1: "Founder-Led Sales: Winning First Customers Without Losing Weeks",
    metaTitle: "Founder-Led Sales: First Customers and Time-Boxing",
    metaDescription: "A practical guide to founder-led sales: find your first customers, time-box prospecting around product work and learn enough to hire your first seller.",
    eyebrow: "Sales motions",
    intro: [
      "Founder-led sales means the founder personally finds, pitches and closes the first customers — and it works best when prospecting is time-boxed into fixed blocks so it doesn’t swallow product work or get skipped altogether. Early sales are as much about learning what the market wants as about revenue.",
      "Founders have advantages no hired seller does: deep product knowledge, authority to make decisions on the spot and credibility with early adopters. They also have very little time. This page covers how founders can find first customers, structure their week and capture what they learn for the team that follows.",
    ],
    highlights: [
      "Block fixed time for prospecting",
      "Start narrow with one segment",
      "Treat conversations as market research",
      "Document what works before hiring",
    ],
    sections: [
      {
        heading: "Why founders should sell first",
        paragraphs: [
          "Early customers are buying the founder’s vision as much as the product. Founders hear objections first-hand, can change pricing or scope during a call and spot patterns that would be lost in a handover. Many founders find that hiring a salesperson before they have closed deals themselves leads to confusion about what is actually working.",
        ],
      },
      {
        heading: "Finding the first ten customers",
        paragraphs: [
          "Start with your network — former colleagues, investors, advisers and communities — then move to cold outreach in a tightly defined segment. One category in one or two cities is enough to begin.",
          "LeadGen AI’s Free plan includes three scrape queries, website enrichment, a lead dashboard and CSV export for one admin user, which is enough for a founder to build a first targeted list and test a segment. Each record shows contact routes and where the data came from.",
        ],
        bullets: [
          "Warm introductions from your network",
          "Communities and events where your buyers gather",
          "A narrow cold list in one segment",
          "Referrals from each early customer",
        ],
      },
      {
        heading: "Time-boxing prospecting into the week",
        paragraphs: [
          "Prospecting fails for founders when it is done “when there’s time”. Fix blocks in the calendar — for instance, two mornings a week for outreach and one afternoon for calls — and protect them as you would an investor meeting.",
          "Batch similar tasks. Build the list in one sitting, write a short sequence once, then send and follow up in scheduled blocks. A pipeline board with stages keeps the state of every conversation visible, so you can pick up where you left off after a product sprint.",
        ],
      },
      {
        heading: "Learning from every conversation",
        paragraphs: [
          "Keep notes on every call: what triggered interest, which words the buyer used, which objections came up and why deals stalled. After twenty or thirty conversations, patterns become obvious and feed straight into your ideal customer profile and messaging.",
        ],
      },
      {
        heading: "Knowing when to hire your first seller",
        paragraphs: [
          "A common signal is when you can describe a repeatable path: a defined segment, a message that gets replies, a demo that converts and a typical objection list. At that point a first seller can follow and improve the playbook rather than invent it. Logged activity and stored lead scores give them a running start.",
        ],
      },
    ],
    steps: {
      heading: "A founder’s prospecting week",
      items: [
        { title: "Monday: build the list", text: "Run one or two targeted queries and shortlist the best-fit accounts." },
        { title: "Tuesday: send first touches", text: "Send short, specific messages to the shortlist." },
        { title: "Wednesday and Thursday: calls", text: "Hold discovery calls and follow up on replies." },
        { title: "Friday: review", text: "Note patterns, update the ICP and plan next week’s segment." },
      ],
    },
    considerations: {
      heading: "Founder pitfalls",
      items: [
        "Selling to friends can give false signals; seek strangers who pay.",
        "Founders often over-customise early deals in ways that do not scale.",
        "Skipping prospecting during product crunches stalls the pipeline for months.",
        "Not writing things down leaves the first hire with nothing to work from.",
        "Discounting to close quickly can set unhelpful price expectations.",
      ],
    },
    example: {
      heading: "A two-founder SaaS team finds its niche",
      text: "Picture two founders of a scheduling tool in Indore. One handles product; the other blocks Tuesday and Thursday mornings for sales. She starts with physiotherapy clinics in two cities, builds a list with three queries, and calls clinics flagged as having weak websites. After a month of notes, she sees that multi-therapist clinics reply far more often and narrows the segment accordingly.",
    },
    faqs: [
      { q: "How much time should a founder spend on sales?", a: "It depends on stage, but many founders protect fixed blocks each week. What matters most is consistency, so the pipeline does not stop during product work." },
      { q: "Can founders do cold outreach without it feeling awkward?", a: "Yes. Founders asking for feedback on a real problem are often received well, especially when the message is short, honest and specific to the recipient." },
      { q: "What can a founder do on LeadGen AI’s Free plan?", a: "The Free plan includes three scrape queries, website enrichment, a lead dashboard and CSV export, with one admin user — enough to build and test a first targeted list." },
      { q: "When is the right time to hire the first salesperson?", a: "Commonly once the founder has closed deals repeatedly in a defined segment and can describe the message, demo and objections that work." },
    ],
    related: ["/b2b/selling-to-startups", "/b2b/ideal-customer-profile", "/plans", "/strategies/cold-email-outreach", "/services/lead-dashboard"],
    cta: { heading: "Build your first list today", text: "Use three free queries to test a segment and find your first customers.", label: "Start free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/b2b/agencies",
    title: "Agencies Selling Services",
    h1: "Lead Generation for Agencies: Niche, Proof and Outreach",
    metaTitle: "Agency Lead Generation: Niche, Proof and Outreach",
    metaDescription: "How agencies win new clients: pick a niche, build proof that travels, and run outreach that opens with a specific, useful finding about each prospect.",
    eyebrow: "Sales motions",
    intro: [
      "Agencies win clients most consistently by choosing a clear niche, building proof that speaks to that niche, and opening outreach with something useful about the prospect’s own business — such as an audit finding — rather than a list of services. Referrals keep many agencies alive, but a repeatable outbound motion gives control over growth.",
      "Web, SEO, marketing and design agencies share a particular advantage: much of what they would fix is publicly visible. A slow website, missing metadata or a listing without a working contact route is evidence of need. This page covers niche selection, proof and outreach, and how LeadGen AI’s audit and opportunity tools fit.",
    ],
    highlights: [
      "Specialise to stand out",
      "Show proof relevant to the niche",
      "Open with a real finding",
      "Turn audits into conversations",
    ],
    sections: [
      {
        heading: "Choosing a niche that sustains pipeline",
        paragraphs: [
          "Generalist agencies compete on price. Specialists compete on understanding. A niche can be an industry (dental clinics, logistics firms), a service (local SEO, website rebuilds) or a combination. The best niches have many businesses, a clear and recurring need and enough budget to pay properly.",
          "Before committing, build a sample list in the candidate niche and check how many businesses exist in your target cities and how many show visible gaps.",
        ],
      },
      {
        heading: "Building proof that travels",
        paragraphs: [
          "Prospects want to see that you have solved their problem for businesses like them. Focus your portfolio and write-ups on the niche, explaining the problem, what you did and what changed, without inflating outcomes.",
        ],
        bullets: [
          "Before-and-after examples from the same industry",
          "Short write-ups explaining the approach, not just visuals",
          "Client references willing to take a call",
          "A sample audit or report that shows your thinking",
        ],
      },
      {
        heading: "Finding prospects with visible gaps",
        paragraphs: [
          "LeadGen AI’s business opportunity detection flags businesses with no website, sites that don’t resolve, listings with no reachable contact route and weak audits in the bottom band, with the evidence attached to each flag.",
          "The SEO website audit fetches a lead’s site and checks technical health, content, metadata, structured data and performance. It produces an overall grade, a per-area scorecard, findings ranked by severity with plain-English explanations and a prioritised fix list that can be handed to the prospect.",
        ],
      },
      {
        heading: "Outreach that opens with value",
        paragraphs: [
          "An email that says “we noticed your site has no meta descriptions on its service pages and loads slowly on mobile — here is a short report” earns more replies than “we offer web design services”. Keep it short, cite one or two findings and offer the full report.",
          "LeadGen AI drafts outreach using each lead’s audit and enrichment data, sends through your own email transport and logs each message against the lead. On the Growth plan, SEO and website-build reports are included alongside AI lead scoring and outreach.",
        ],
      },
    ],
    steps: {
      heading: "An agency outbound routine",
      items: [
        { title: "Pick a niche and city", text: "Choose one industry and location to focus on this month." },
        { title: "Build and audit the list", text: "Collect businesses and run audits to surface visible gaps." },
        { title: "Shortlist by evidence", text: "Prioritise prospects with clear, fixable problems and good fit." },
        { title: "Send a finding-led message", text: "Reference one or two specific issues and offer the report." },
        { title: "Follow up with the report", text: "Share the client-ready fix list and suggest a short call." },
      ],
    },
    considerations: {
      heading: "Trade-offs for agencies",
      items: [
        "A narrow niche can feel risky, but broad positioning usually weakens outreach.",
        "Audit findings must be accurate and explained politely — prospects can be sensitive about their sites.",
        "Free reports attract some prospects who never intend to buy; qualify before investing much time.",
        "Outbound takes consistent effort alongside client delivery; schedule it.",
        "Email rules apply to agency outreach too; check current requirements.",
      ],
    },
    example: {
      heading: "A small SEO agency focuses on clinics",
      text: "Imagine a three-person SEO agency in Nagpur that decides to focus on physiotherapy and dental clinics. It builds a list of clinics across three cities, runs audits, and shortlists those with weak metadata and slow pages. Each receives a short email citing two findings and offering the full report. Clinics that reply get a call walking through the prioritised fix list.",
    },
    faqs: [
      { q: "Should a new agency specialise straight away?", a: "Specialising early sharpens messaging and proof, though some agencies start broad and narrow once they see which clients they serve best." },
      { q: "Is it acceptable to send an unsolicited website audit?", a: "Many agencies do, as long as the findings are accurate, the tone is respectful and the recipient can easily opt out. Check email rules in your market." },
      { q: "What does the LeadGen AI audit report include?", a: "An overall grade, a per-area scorecard, findings ranked by severity with plain-English explanations, performance and page-health metrics, and a prioritised fix list." },
      { q: "How can an agency tell if a niche has enough prospects?", a: "Build a sample list in your target cities, count the businesses that match, and check how many show visible gaps such as weak audits or missing websites. If the count is small, widen the geography or adjust the niche." },
    ],
    related: ["/services/agency-client-prospecting", "/services/seo-website-audit", "/services/website-redesign-prospecting", "/services/seo-agency-lead-generation", "/industries/digital-agencies", "/b2b/consultants"],
    cta: { heading: "Open with a finding, not a pitch", text: "Audit prospects’ websites and send outreach built on real evidence.", label: "See plans", href: "/plans" },
  },
  {
    path: "/b2b/consultants",
    title: "Consultants",
    h1: "Lead Generation for Independent Consultants",
    metaTitle: "Consultant Lead Generation: Positioning and Outreach",
    metaDescription: "Independent consultants can win steady work through sharp positioning, deliberate referral habits and small, well-researched outreach to the right firms.",
    eyebrow: "Sales motions",
    intro: [
      "Independent consultants generate steady work by combining sharp positioning, a deliberate referral habit and small batches of well-researched outreach to firms that match their expertise. Most consultants depend heavily on referrals; the ones with predictable income add a light, consistent outbound motion so they are not at the mercy of word of mouth.",
      "Consulting is a trust sale. Buyers are hiring judgment, and they want evidence you understand their situation. This page covers how to position yourself, cultivate referrals and run outreach that fits a solo practice’s limited time.",
    ],
    highlights: [
      "Position around a specific problem",
      "Ask for referrals systematically",
      "Send small, researched outreach batches",
      "Keep the pipeline moving between projects",
    ],
    sections: [
      {
        heading: "Positioning that makes you easy to refer",
        paragraphs: [
          "“Business consultant” is hard to refer; “I help multi-branch clinics standardise front-desk operations” is easy. Strong positioning names the client type, the problem and the result you work towards. It also tells you exactly who to prospect.",
          "Positioning does not mean refusing other work. It means leading with one clear story so people remember you.",
        ],
      },
      {
        heading: "Building a referral habit",
        paragraphs: [
          "Referrals rarely happen by accident. Ask at natural moments — after a milestone, at project close — and be specific about who you help. Stay in touch with past clients and peers with occasional useful notes rather than generic newsletters.",
        ],
        bullets: [
          "Ask at project close, naming the type of client you want",
          "Partner with complementary consultants and agencies",
          "Share short, useful insights with your network periodically",
          "Thank referrers and tell them what happened",
        ],
      },
      {
        heading: "Outreach that suits a solo practice",
        paragraphs: [
          "Consultants do not need large lists. Ten to twenty well-chosen firms a week, each contacted with a thoughtful note, can be enough to keep the pipeline moving. The note should show you have looked at their business and see a relevant opportunity.",
          "LeadGen AI helps with the groundwork: a category-and-location query produces de-duplicated records with websites, contact routes, ratings and review counts, while the 0–100 score with stored reasons helps you pick the best-fit firms. For consultants whose work touches digital presence, the SEO audit adds concrete findings to reference.",
        ],
      },
      {
        heading: "Qualifying engagements before you propose",
        paragraphs: [
          "Proposals take time. Before writing one, confirm the problem, the decision-maker, the budget range and the timeline. A short discovery call with clear questions saves days of unpaid work on proposals that go nowhere.",
        ],
      },
      {
        heading: "Keeping the pipeline alive during projects",
        paragraphs: [
          "The classic consulting trap is feast and famine: busy delivery leads to no prospecting, then a gap when the project ends. A small weekly outreach block, tracked on a simple pipeline board with stages and activity history, keeps conversations warm so the next engagement is closer when the current one finishes.",
        ],
      },
    ],
    steps: {
      heading: "A weekly rhythm for consultants",
      items: [
        { title: "Refine the target list", text: "Pick ten to twenty firms that match your positioning." },
        { title: "Research each briefly", text: "Note one specific observation per firm from its website and listings." },
        { title: "Send personal notes", text: "Write short messages linking the observation to your expertise." },
        { title: "Nurture referrals", text: "Reach out to one or two past clients or partners each week." },
        { title: "Review the pipeline", text: "Update stages and plan follow-ups for the coming week." },
      ],
    },
    considerations: {
      heading: "Considerations for consultants",
      items: [
        "Narrow positioning may feel limiting at first but usually increases referrals.",
        "Outreach volume should stay low enough to personalise properly.",
        "Delivery commitments can crowd out prospecting; protect a weekly block.",
        "Unpaid proposals are costly — qualify before writing them.",
        "Check current email and data protection rules in each market you contact.",
      ],
    },
    example: {
      heading: "An operations consultant fills the gap between projects",
      text: "Suppose an independent operations consultant in Chandigarh, recently finishing a six-month engagement with a hospital, decides to focus on multi-branch diagnostic labs. She builds a list of labs across the region, shortlists those with several locations, and each week sends ten notes referencing a specific observation about each lab’s branch setup. She also asks her last client for an introduction to a peer.",
    },
    faqs: [
      { q: "How many prospects should an independent consultant contact each week?", a: "Many consultants find ten to twenty personalised notes manageable. The goal is consistency and quality rather than volume." },
      { q: "Is cold outreach appropriate for consultants?", a: "Yes, when it is personal, relevant and respectful. A thoughtful note showing you understand the firm’s situation is closer to professional networking than mass marketing." },
      { q: "How do I ask clients for referrals without feeling pushy?", a: "Ask at a natural high point, such as project completion, and be specific about the type of client you help so they can think of someone concrete." },
      { q: "Should consultants publish their rates when prospecting?", a: "Practice varies. Some share a starting range to filter out poor-fit enquiries early; others prefer to discuss scope first. Either way, confirm budget expectations during discovery before investing time in a proposal." },
    ],
    related: ["/b2b/agencies", "/b2b/founder-led-sales", "/strategies/referral-programs", "/strategies/partner-marketing", "/services/prospect-research"],
    cta: { heading: "Find firms that fit your expertise", text: "Build a short, scored list of firms and keep every conversation on one board.", label: "Start free", href: "https://leadgeneration.oxo1.com/" },
  },
];
