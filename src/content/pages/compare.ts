import type { PageContent } from "../types";

export const pages: PageContent[] = [
  {
    path: "/compare",
    title: "Comparisons & Planning",
    h1: "Lead Generation Comparisons, Use Cases and Implementation Planning",
    metaTitle: "Lead Generation Comparisons and Planning Guides",
    metaDescription: "Balanced comparisons of lead generation approaches, illustrative LeadGen AI workflows and practical implementation plans for teams making a decision.",
    eyebrow: "Compare and plan",
    intro: [
      "This hub helps decision-makers choose between lead generation approaches, see how a prospecting platform could fit a particular kind of business, and plan a rollout that sticks. It is organised into three sets of pages: side-by-side comparisons of common choices, illustrative end-to-end workflows built only on verified LeadGen AI capabilities, and implementation guides for the first month and beyond.",
      "None of the comparisons declare a universal winner. Inbound and outbound, email and phone, buying and building lists all have contexts where they make sense, and the right mix depends on your market, your team and how quickly you need pipeline. The use-case pages are hypothetical scenarios rather than customer stories, and the planning pages map advice to features you can actually check: roles, CSV export, per-plan quotas and API keys on Scale.",
    ],
    highlights: [
      "Ten balanced, vendor-neutral comparisons",
      "Five illustrative, hypothetical workflows",
      "Four practical implementation guides",
      "Grounded in verified product capabilities",
    ],
    sections: [
      {
        heading: "Comparisons: choosing between approaches",
        paragraphs: [
          "The comparison pages cover the decisions that come up most often when a team designs or reviews its lead generation. Each one sets out what each option is good at, where it struggles, and a ‘when to choose which’ section that turns the trade-offs into a decision.",
        ],
        bullets: [
          "Inbound vs outbound, and B2B vs B2C lead generation",
          "Manual vs automated prospecting",
          "Buying vs building lead lists, and scraping vs data providers",
          "Cold email vs cold calling",
          "Google Maps vs LinkedIn prospecting",
          "SEO vs PPC, in-house vs outsourced, and CRM vs spreadsheet",
        ],
      },
      {
        heading: "Use cases: illustrative workflows",
        paragraphs: [
          "The use-case pages walk through how a particular type of business could run prospecting from first search to logged outreach. They are deliberately hypothetical. They describe steps and features, not results, and they make no claims about outcomes any real business achieved.",
        ],
        bullets: [
          "An agency winning new clients",
          "A local SEO agency using audits as an opening",
          "A web design studio finding businesses with weak or missing sites",
          "A B2B supplier prospecting on IndiaMART",
          "A sales team building out a new territory",
        ],
      },
      {
        heading: "Implementation: planning a rollout",
        paragraphs: [
          "The implementation guides are for new customers and the people who will own the rollout. They cover a week-by-week plan for the first 30 days, who should do what, how to move existing lead data in without carrying old problems across, and which milestones show the rollout is working.",
          "Each guide connects planning advice to features that exist today, such as role-based access with seven role modules on Growth, CSV export on every plan and per-org API keys on Scale, so you can plan against real constraints rather than assumptions.",
        ],
      },
      {
        heading: "How to use these pages in a decision",
        paragraphs: [
          "Teams often start with a comparison to settle the strategic question, read the use case closest to their business to picture the day-to-day work, and finish with the 30-day plan to estimate effort. If your question is mainly about a single capability, the service pages go deeper on each one.",
          "Where a comparison touches regulation, such as consent for outreach or the use of purchased data, the pages stay general. Check the current rules in each market you sell into and take legal advice where the stakes are high.",
        ],
      },
    ],
    steps: {
      heading: "A simple path through this section",
      items: [
        { title: "Name the decision", text: "Write down the choice you are actually making, such as whether to add outbound or how to replace a spreadsheet." },
        { title: "Read the matching comparison", text: "Note which trade-offs matter for your market, team size and timeline, and which you can live with." },
        { title: "Picture the workflow", text: "Pick the use case nearest your business and list the steps you would run each week." },
        { title: "Plan the first month", text: "Use the 30-day plan and team roles guide to assign owners and set a realistic pace." },
        { title: "Agree how you will judge it", text: "Choose milestones from the success metrics guide before you start, not after." },
      ],
    },
    considerations: {
      heading: "Before you compare",
      items: [
        "Comparisons describe typical trade-offs; your own market data should outweigh general guidance.",
        "Most teams end up with a mix of approaches rather than a single winner.",
        "Use cases are hypothetical and describe steps, not expected results.",
        "Plan features differ: check which plan includes the sources, scoring and roles your workflow needs.",
        "Regulatory questions need current local advice, not a comparison page.",
      ],
    },
    example: {
      heading: "Using the hub to plan a change",
      text: "Imagine a four-person consultancy in Ahmedabad that has relied on referrals and wants to add outbound. The founder reads the inbound vs outbound comparison, decides to keep referrals while testing a small outbound programme, reads the agency use case to picture the weekly routine, and then uses the 30-day plan to schedule setup, a first list, and a review at the end of the month.",
    },
    faqs: [
      { q: "Are the use-case pages real customer stories?", a: "No. They are hypothetical scenarios that show how verified LeadGen AI features could fit together. They contain no customer names and no reported results." },
      { q: "Do the comparison pages recommend a specific vendor?", a: "No. They compare approaches, not companies, and they don’t name or rank other tools." },
      { q: "Which page should a new customer read first?", a: "The 30-day implementation plan, followed by the team roles guide. Together they cover setup, ownership and the first review." },
    ],
    related: ["/how-it-works", "/plans", "/strategies/inbound-marketing", "/b2b/territory-planning", "/compare/inbound-vs-outbound", "/compare/30-day-implementation-plan"],
    cta: { heading: "Talk through your options", text: "Book a demo to see how LeadGen AI fits the approach you are weighing up.", label: "Book a demo", href: "/book-a-demo" },
  },
  {
    path: "/compare/inbound-vs-outbound",
    title: "Inbound vs Outbound",
    h1: "Inbound vs Outbound Lead Generation: Trade-offs for Leaders",
    metaTitle: "Inbound vs Outbound Lead Generation Trade-offs",
    metaDescription: "A balanced look at inbound and outbound lead generation: speed, cost profile, control and fit, plus how to decide which mix suits your team and market.",
    eyebrow: "Comparison",
    intro: [
      "Inbound lead generation attracts buyers who are already looking, while outbound reaches out to chosen prospects who may not be looking yet; inbound tends to compound slowly and outbound tends to produce conversations sooner. Neither is better in general. The right choice depends on how buyers in your market search, how many accounts you could ever sell to, and how soon you need pipeline.",
      "This page sets out what each approach does well, where each tends to struggle, and a practical way to decide on a mix. It is written for leaders who own the pipeline target and have to explain the trade-off to a team or a board.",
    ],
    highlights: [
      "Inbound compounds; outbound starts faster",
      "Control versus buyer-initiated intent",
      "Most teams run a deliberate mix",
      "Decide by market size and urgency",
    ],
    sections: [
      {
        heading: "What inbound does well",
        paragraphs: [
          "Inbound covers content, search, social, referrals, webinars and anything else that brings a buyer to you. Its biggest strength is intent: a person who fills in a form or calls after reading a guide has already decided the problem is worth solving. Those conversations often start warmer and need less persuasion.",
          "Inbound assets can also keep working long after they are made. A useful guide or a strong local listing can bring enquiries for months, so the cost of each enquiry can fall over time if the work is maintained.",
        ],
        bullets: [
          "Buyer-initiated conversations with visible intent",
          "Assets that can keep producing enquiries",
          "Builds brand and trust alongside leads",
        ],
      },
      {
        heading: "Where inbound struggles",
        paragraphs: [
          "Inbound is slow to start and hard to steer. Search rankings and audiences take months to build, and you have limited say over who arrives. A small consultancy that only wants twenty specific accounts may wait a long time for any of them to find it. Inbound also depends on buyers searching for the problem; in markets where people don’t yet know a solution exists, there is little demand to capture.",
        ],
      },
      {
        heading: "What outbound does well",
        paragraphs: [
          "Outbound means choosing who you want to talk to and contacting them directly through email, phone, LinkedIn or visits. Its strength is control. You pick the segment, the geography and the timing, and you can start conversations within days of deciding to.",
          "That makes outbound well suited to defined markets, new territories, new offers that buyers aren’t searching for, and situations where the pipeline gap is urgent. It also produces fast feedback on messaging, because replies or silence arrive quickly.",
        ],
        bullets: [
          "You choose the accounts and the timing",
          "Faster feedback on positioning and offer",
          "Works when demand isn’t searchable yet",
        ],
      },
      {
        heading: "Where outbound struggles",
        paragraphs: [
          "Outbound interrupts people, so it depends on relevance and on respecting consent and opt-out rules in each market. Poorly targeted lists damage sender reputation and brand. Output also tends to stop when the effort stops: there is less compounding than with inbound assets. And research-heavy outbound is labour-intensive unless list building and enrichment are handled efficiently.",
        ],
      },
      {
        heading: "When to choose which",
        paragraphs: [
          "Lean towards inbound when your buyers actively search for what you offer, your market is broad, and you can invest for a longer payback. Lean towards outbound when your market is narrow or well defined, buyers don’t yet search for the solution, or you need conversations this quarter.",
          "Many teams run both: outbound to create near-term pipeline and test messages, inbound to build a steadier base. Messages that earn replies in outbound often make good inbound content later. Platforms such as LeadGen AI sit mainly on the outbound side, with multi-source list building, enrichment, 0–100 scoring with reasons and AI-drafted outreach sent through your own email transport.",
        ],
      },
    ],
    steps: {
      heading: "Deciding on your mix",
      items: [
        { title: "Size the market", text: "Estimate how many accounts could realistically buy. A small, defined market favours outbound." },
        { title: "Check search demand", text: "See whether buyers search for the problem in your language and region. Weak demand limits inbound." },
        { title: "Set the time horizon", text: "Agree when pipeline is needed. Urgent gaps usually need some outbound." },
        { title: "Allocate capacity", text: "Split people and budget between the two, with a review date for each." },
        { title: "Share learning", text: "Feed outbound reply themes into inbound content, and inbound questions into outbound messaging." },
      ],
    },
    considerations: {
      heading: "Trade-offs to weigh",
      items: [
        "Inbound payback is slower and harder to forecast in the first months.",
        "Outbound needs careful targeting and attention to consent and opt-out rules.",
        "Attribution between the two is messy; buyers often touch both.",
        "Outbound output usually drops when activity stops.",
        "A mix adds coordination work between marketing and sales.",
      ],
    },
    example: {
      heading: "A mix in practice",
      text: "Consider a hypothetical IT support firm in Kochi with a blog that brings a trickle of enquiries. Its leadership keeps publishing monthly, but adds a small outbound programme targeting clinics and law offices in two districts, scored and reviewed weekly. After a quarter, the team reviews which channel produced qualified conversations and adjusts the split.",
    },
    faqs: [
      { q: "Is outbound still worth it if we already get inbound leads?", a: "It can be, if inbound volume is below target or doesn’t reach the accounts you most want. Outbound lets you pursue specific segments rather than waiting for them." },
      { q: "How long should we test outbound before judging it?", a: "Long enough to send to a meaningful sample and complete follow-ups, which for many teams is several weeks. Judge reply quality and qualified conversations, not just volume." },
      { q: "Can inbound and outbound share the same pipeline?", a: "Yes, and they usually should. Tag the source of each lead so you can compare how each channel progresses through stages." },
    ],
    related: ["/strategies/inbound-marketing", "/strategies/outbound-sequences", "/strategies/cold-email-outreach", "/compare/manual-vs-automated-prospecting", "/compare/seo-vs-ppc", "/tools/attribution-models"],
    cta: { heading: "Build an outbound engine", text: "Start with three free queries and see what an outbound list looks like for your market.", label: "Start free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/compare/b2b-vs-b2c",
    title: "B2B vs B2C Lead Generation",
    h1: "B2B vs B2C Lead Generation: Key Differences for Marketers",
    metaTitle: "B2B vs B2C Lead Generation Differences",
    metaDescription: "How B2B and B2C lead generation differ in buyers, channels, data, consent and cycle length, and how to choose tactics when you sell to both businesses and people.",
    eyebrow: "Comparison",
    intro: [
      "B2B lead generation targets organisations, where several people share a considered decision, while B2C targets individuals, who usually decide faster and on their own. That single difference shapes everything else: the data you can use, the channels that work, the role of consent, and how long a lead takes to become revenue.",
      "Many businesses sit on both sides. A solar installer sells to homeowners and to factories; an interior designer serves families and offices. This page compares the two modes side by side so marketers can choose tactics deliberately rather than copying a playbook built for the other audience.",
    ],
    highlights: [
      "Accounts and committees versus individuals",
      "Business data versus personal data",
      "Longer cycles versus faster decisions",
      "Different consent expectations by market",
    ],
    sections: [
      {
        heading: "How B2B lead generation works",
        paragraphs: [
          "In B2B, the unit is the account. You identify businesses that fit a profile — category, size, geography, signals of need — and then reach the people who influence the purchase. Public business information such as listings, websites and directory entries is central, because it describes the organisation rather than a private person.",
          "Cycles run longer and involve evaluation, comparison and approval. Leads often need nurturing over weeks or months, and qualification matters because a poor-fit account wastes a lot of sales time.",
        ],
        bullets: [
          "Targeting by firmographics and visible signals",
          "Several stakeholders per deal",
          "Outbound and account-based approaches common",
        ],
      },
      {
        heading: "How B2C lead generation works",
        paragraphs: [
          "In B2C, the unit is a person or household. Most leads come from people raising their hand: forms, calls, chats, bookings and ad responses. Volume is higher, decisions are faster and emotion, price and convenience weigh heavily. Response speed often decides who wins the customer.",
          "Because B2C leads are personal data, consent is a first-order concern. Unsolicited outreach to individuals is restricted in many markets, so B2C lead generation leans heavily on inbound, paid media and owned audiences.",
        ],
      },
      {
        heading: "Data, consent and channels compared",
        paragraphs: [
          "B2B teams can often prospect using public business information, provided they respect opt-outs and the rules where they operate. B2C teams usually need clear consent before marketing to individuals. Rules differ by country and channel, so check current regulations and take legal advice for your situation.",
        ],
        bullets: [
          "B2B channels: email, phone, LinkedIn, events, directories, account-based campaigns",
          "B2C channels: search, social ads, lead forms, messaging apps, referrals, offers",
          "B2B content: depth, proof and comparison material",
          "B2C content: clarity, trust signals and a fast path to booking",
        ],
      },
      {
        heading: "Where LeadGen AI fits",
        paragraphs: [
          "LeadGen AI is a B2B tool. It collects business records from Google Maps, LinkedIn and IndiaMART, enriches them with business emails and contact pages found on company websites, scores each lead 0–100 with stored reasons, and supports outreach through your own email transport. It is built for prospecting into businesses, not for collecting consumer leads.",
          "A B2C business can still use it on the B2B side of its own operation, for example a caterer looking for corporate clients or a fitness studio seeking workplace partnerships.",
        ],
      },
      {
        heading: "When to choose which approach",
        paragraphs: [
          "Use a B2B playbook when the buyer is an organisation, the deal value justifies research, and several people will be involved. Use a B2C playbook when the buyer is an individual acting for themselves, the decision is quick, and consent-based inbound is the realistic route. If you serve both, run them as separate programmes with separate messaging, metrics and data handling.",
        ],
      },
    ],
    steps: {
      heading: "Splitting a mixed business into two programmes",
      items: [
        { title: "Separate the offers", text: "List what you sell to businesses and to consumers, and the price and cycle of each." },
        { title: "Define each buyer", text: "Write an ideal customer profile for the B2B side and a persona for the B2C side." },
        { title: "Pick channels per side", text: "Match outbound and account work to B2B, and consent-based inbound to B2C." },
        { title: "Set separate metrics", text: "Track B2B by qualified accounts and pipeline, B2C by enquiry volume, response time and bookings." },
      ],
    },
    considerations: {
      heading: "Points to keep in mind",
      items: [
        "Consent rules for consumer outreach are stricter in many markets; take advice locally.",
        "Sole traders and very small businesses blur the line between business and personal data.",
        "B2B volume is lower, so each lead deserves more research.",
        "B2C success depends heavily on response speed and booking convenience.",
        "Mixing the two in one pipeline makes reporting confusing.",
      ],
    },
    example: {
      heading: "One business, two programmes",
      text: "Picture a hypothetical solar installer in Jaipur. For homeowners, it runs search ads and a quote form, and answers enquiries the same day. For commercial rooftops, it builds a list of warehouses and factories from map and directory searches, scores them, and sends researched emails to facility managers. Each side has its own pipeline stages and reports.",
    },
    faqs: [
      { q: "Can a B2C company use a B2B prospecting tool?", a: "Yes, for any part of its business that sells to organisations, such as corporate gifting, workplace offers or trade supply. It isn’t suited to collecting consumer contacts." },
      { q: "Are sole traders treated as businesses or individuals for data purposes?", a: "It depends on the jurisdiction and the data involved. Treat sole-trader contact details carefully and check local guidance before outreach." },
      { q: "Which side needs faster lead response?", a: "Both benefit, but B2C usually more so, because consumers often contact several providers and choose whoever replies first with a clear next step." },
    ],
    related: ["/b2b", "/b2c", "/b2c/consent-and-privacy", "/b2b/ideal-customer-profile", "/compare/inbound-vs-outbound", "/compare/google-maps-vs-linkedin-prospecting"],
    cta: { heading: "Prospect into businesses", text: "See how LeadGen AI builds scored B2B lists from three sources.", label: "View plans", href: "/plans" },
  },
  {
    path: "/compare/manual-vs-automated-prospecting",
    title: "Manual vs Automated Prospecting",
    h1: "Manual vs Automated Prospecting: Where Each Earns Its Place",
    metaTitle: "Manual vs Automated Prospecting Compared",
    metaDescription: "Compare manual and automated prospecting on research depth, speed, consistency and cost of time, and learn how sales leaders combine the two sensibly.",
    eyebrow: "Comparison",
    intro: [
      "Manual prospecting means people find, research and contact each lead by hand; automated prospecting uses software to collect, enrich and rank leads so people spend their time on judgement and conversation. Manual work gives depth on a few accounts, automation gives coverage and consistency across many. The useful question is which steps to automate, not whether to.",
      "This comparison is for sales leaders deciding how their team’s week should be spent. It looks at each approach honestly, including the risks of automating too much.",
    ],
    highlights: [
      "Depth on few versus coverage of many",
      "Automate collection, keep human judgement",
      "Consistency improves with clear rules",
      "Over-automation risks generic outreach",
    ],
    sections: [
      {
        heading: "The strengths of manual prospecting",
        paragraphs: [
          "A skilled seller researching an account by hand notices things software may miss: a recent expansion mentioned in a local paper, a tone on the website that suggests the owner is frustrated, a mutual connection. For a short list of high-value targets, that depth can be decisive.",
          "Manual prospecting also needs no setup. A founder can start today with a browser and a spreadsheet, and learn the market first-hand before deciding what to systematise.",
        ],
        bullets: [
          "Rich context for high-value accounts",
          "No tooling or setup required",
          "Builds market intuition quickly",
        ],
      },
      {
        heading: "The limits of manual prospecting",
        paragraphs: [
          "Hand research is slow and inconsistent. Two sellers will record the same business differently, copy errors creep in, and duplicates appear when several people work one territory. Much of the time goes on low-value steps — copying addresses, hunting for a contact page, checking whether a website loads — rather than on the conversation that wins the deal.",
        ],
      },
      {
        heading: "The strengths of automated prospecting",
        paragraphs: [
          "Automation handles the repetitive collection and checking work at a scale people can’t match. In LeadGen AI, a single query fans out to Google Maps, LinkedIn and IndiaMART as enabled; results are normalised into one record per business and de-duplicated; enrichment finds business emails and contact pages on company websites; and each lead receives a 0–100 score with the reasons stored on the record.",
          "Long jobs run on a worker fleet, so a large scrape continues after the browser tab is closed, and every job records what it fetched and when. Sellers start the day with a ranked, consistent list instead of a blank page.",
        ],
        bullets: [
          "Consistent records across sellers and sources",
          "Ranking that shows where to start",
          "Time freed for research and conversation",
        ],
      },
      {
        heading: "The risks of automated prospecting",
        paragraphs: [
          "Automation can tempt teams into volume over relevance. A large list sent generic messages harms reputation and rarely works. Scores and enrichment are only as good as the public information behind them, and a plausible phone format is not the same as a confirmed contact. Automation also needs setup: clear targeting, sensible quotas and someone who owns data quality.",
        ],
      },
      {
        heading: "When to choose which",
        paragraphs: [
          "Choose mainly manual work when the target list is small and each account is worth a lot, or when you are still learning a market. Choose automation for list building, enrichment and first-pass ranking whenever you work more than a handful of accounts. Most teams settle on a hybrid: software builds and ranks the list, people review the top band, add context and write or edit the message. LeadGen AI’s AI-drafted outreach uses each lead’s enrichment and audit data, but the user stays in control of the list and what is sent.",
        ],
      },
    ],
    steps: {
      heading: "Moving from manual to a sensible hybrid",
      items: [
        { title: "Time the current process", text: "Track for a week how long sellers spend finding, checking and recording leads versus talking to them." },
        { title: "Automate the copying", text: "Hand list building, de-duplication and contact discovery to software first." },
        { title: "Agree ranking rules", text: "Decide which score band and signals earn manual research." },
        { title: "Keep a human review step", text: "Have a person check each lead and message before outreach." },
        { title: "Review quality monthly", text: "Compare reply quality against the manual baseline and adjust targeting." },
      ],
    },
    considerations: {
      heading: "Trade-offs to weigh",
      items: [
        "Automation needs an owner for data quality and targeting.",
        "Scores reflect public information and stated fit, not buying intent you can’t see.",
        "Manual research doesn’t scale and varies between people.",
        "Automated sending without review risks generic, unwelcome messages.",
        "Plan quotas limit how many queries you can run per billing cycle.",
      ],
    },
    example: {
      heading: "A hybrid week",
      text: "Imagine a hypothetical three-seller team selling accounting software to small manufacturers in Coimbatore. On Monday a scrape runs for the district; by Tuesday each seller has a scored list. They spend fifteen minutes researching each top-band lead, edit an AI draft to reference something specific, and log each message on the pipeline board.",
    },
    faqs: [
      { q: "Which prospecting steps are safest to automate first?", a: "Collecting business records, removing duplicates and finding public contact routes. These are repetitive and benefit most from consistency." },
      { q: "Will automation make sellers lazy about research?", a: "Only if the process allows it. Requiring a short personal note or edit on every message keeps research part of the job." },
      { q: "How do we know if automated lists are good enough?", a: "Sample them. Check a batch of records by hand for accuracy and fit, and compare reply quality with your manual baseline." },
    ],
    related: ["/services/multi-source-lead-scraping", "/services/ai-lead-scoring", "/services/prospect-research", "/b2b/sdr-teams", "/compare/scraping-vs-data-providers", "/compare/crm-vs-spreadsheet"],
    cta: { heading: "Automate the busywork", text: "Try LeadGen AI with three free queries and keep human judgement where it counts.", label: "Start free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/compare/buying-vs-building-lead-lists",
    title: "Buying vs Building Lead Lists",
    h1: "Buying vs Building Lead Lists: Quality, Compliance and Control",
    metaTitle: "Buying vs Building Lead Lists: Quality and Risk",
    metaDescription: "Should you buy a lead list or build your own? Compare quality, freshness, compliance exposure, effort and control to choose the right route for your ops team.",
    eyebrow: "Comparison",
    intro: [
      "Buying a lead list gets you records quickly, but you inherit someone else’s targeting, freshness and consent practices; building your own list takes more effort but gives you control over who is on it and where each record came from. For most ops teams, the decision turns on quality and compliance rather than speed alone.",
      "This page compares the two routes, explains the questions to ask before buying, and sets out when building is worth the work.",
    ],
    highlights: [
      "Speed versus control and provenance",
      "Ask hard questions before buying",
      "Built lists can be refreshed anytime",
      "Compliance risk sits with the sender",
    ],
    sections: [
      {
        heading: "Why teams buy lists",
        paragraphs: [
          "A bought list is fast. You can have thousands of records the same day, often with fields you would struggle to gather yourself. For a quick test of a new segment, or when internal capacity is very limited, that speed is attractive.",
        ],
        bullets: [
          "Immediate volume",
          "No internal research effort",
          "Useful for rough market sizing",
        ],
      },
      {
        heading: "The quality and compliance problems with bought lists",
        paragraphs: [
          "Bought lists are only as good as the seller’s process, which you usually can’t see. Records age: businesses close, people move and numbers change. The same list may have been sold to many buyers, so its contacts are already saturated with outreach. Targeting may be broad, leaving you to filter out poor fits.",
          "The bigger issue is accountability. When you send to a contact, you are generally responsible for having a lawful basis and honouring opt-outs, whoever compiled the data. If the provider can’t explain sources and consent, the risk lands on you. Check current rules where you operate and take legal advice before using purchased personal data.",
        ],
      },
      {
        heading: "Why teams build lists",
        paragraphs: [
          "Building your own list means defining the segment yourself and gathering records from public sources. You know where each record came from, can refresh it whenever you need, and can tune it to your offer rather than a generic category.",
          "Tools have reduced the effort. LeadGen AI builds lists from Google Maps, LinkedIn and IndiaMART, de-duplicates across sources, records the source of each field, and enriches with business emails found on company websites. Each record carries a 0–100 score and its reasons, so filtering for fit is part of the build.",
        ],
        bullets: [
          "Provenance for every field",
          "Targeting matched to your offer",
          "Refresh on your schedule",
        ],
      },
      {
        heading: "The costs of building",
        paragraphs: [
          "Building still takes thought. Someone must define the target, choose the queries, review samples and manage quotas. Public sources don’t always carry a named decision-maker, so you may reach a general business address rather than a specific person. And coverage depends on how well your segment is represented on the sources you use.",
        ],
      },
      {
        heading: "When to choose which",
        paragraphs: [
          "Consider buying only when the provider can document its sources and consent practices clearly, the data is recent, and you will verify a sample before sending. Even then, treat the list as a starting point to enrich and filter. Choose building when compliance, freshness and fit matter, when you will contact the list more than once, or when you want to refresh it over time. Many ops teams build by default and buy only narrow, well-documented data for specific gaps.",
        ],
      },
    ],
    steps: {
      heading: "Questions to ask before buying any list",
      items: [
        { title: "Where did the data come from?", text: "Ask for the sources and collection method for each field." },
        { title: "How recent is it?", text: "Ask when records were last checked and how often they are refreshed." },
        { title: "What consent or basis applies?", text: "Ask what the provider can document about permission for marketing use in your markets." },
        { title: "Who else has it?", text: "Ask whether the list is exclusive or sold widely." },
        { title: "Can you test a sample?", text: "Verify a batch by hand before committing to the full list." },
      ],
    },
    considerations: {
      heading: "Risks and prerequisites",
      items: [
        "Responsibility for lawful outreach generally rests with the sender, not the list seller.",
        "Old or widely sold data harms deliverability and reputation.",
        "Built lists need someone to own targeting and quality.",
        "Public sources may give a business contact rather than a named buyer.",
        "Regulatory requirements vary by country and channel; seek current advice.",
      ],
    },
    example: {
      heading: "Choosing a route",
      text: "Suppose a hypothetical packaging supplier in Ludhiana is offered a cheap list of ‘food manufacturers in North India’. The ops lead asks for sources and refresh dates and gets vague answers. Instead, the team builds its own list from IndiaMART and map searches in three districts, reviews a sample, and exports the top-scored records by CSV for a sales review.",
    },
    faqs: [
      { q: "Is it legal to email contacts from a purchased list?", a: "It depends on where you and the recipients are, the type of contact and the consent attached. Rules differ widely, so take legal advice for your markets before sending." },
      { q: "How can we tell if a bought list is stale?", a: "Check a sample: visit websites, call a few numbers and look for closed businesses. A high share of failures signals stale data." },
      { q: "Can we enrich a list we already own?", a: "Within LeadGen AI, enrichment runs on lead records in your workspace. Enrichment never overwrites fields a user edited by hand and records where each value came from." },
    ],
    related: ["/services/lead-list-building", "/services/source-traceability", "/resources/ethical-data-collection", "/b2b/data-quality", "/compare/scraping-vs-data-providers", "/compare/data-migration-planning"],
    cta: { heading: "Build lists you can trace", text: "See how LeadGen AI records the source of every field.", label: "Book a demo", href: "/book-a-demo" },
  },
  {
    path: "/compare/scraping-vs-data-providers",
    title: "Scraping vs Data Providers",
    h1: "Scraping vs Data Providers: Freshness, Coverage and Fit",
    metaTitle: "Scraping vs Data Providers for Lead Data",
    metaDescription: "Compare collecting live public business data with licensing a data provider’s database: freshness, coverage, depth, cost of ownership and when each suits ops teams.",
    eyebrow: "Comparison",
    intro: [
      "Collecting public business data yourself gives you fresh records for the exact segment you define, while a data provider gives you a large pre-built database with fields that are hard to gather publicly, such as named contacts and company size. Freshness and local coverage usually favour live collection; breadth and depth on larger companies often favour providers.",
      "This comparison is for ops teams choosing a primary data approach. It avoids naming vendors and focuses on the structural trade-offs that hold regardless of who you buy from.",
    ],
    highlights: [
      "Live collection keeps records current",
      "Providers offer breadth and depth",
      "Local businesses favour public sources",
      "Many teams combine both approaches",
    ],
    sections: [
      {
        heading: "How live collection works",
        paragraphs: [
          "Live collection gathers data from public sources at the moment you need it. In LeadGen AI, a query such as a category and location fans out to Google Maps, LinkedIn and IndiaMART as enabled, and the results are normalised into one record per business with the source of each field recorded. Enrichment then visits the company website to find business emails, contact pages and social profiles.",
          "Because the data is fetched when you run the job, it reflects what the listing or website shows now, and each job records what it fetched and when.",
        ],
      },
      {
        heading: "Strengths and limits of live collection",
        paragraphs: [
          "Live collection is strongest for local and small businesses, which are well represented on map listings and directories and often missing or outdated in large databases. You also get signals that matter for selling services, such as ratings, review counts, listing completeness and website health.",
          "Its limits come from the sources themselves. Public listings rarely name the decision-maker or give company revenue, and a business that isn’t listed won’t appear. Responsible use matters too: collect only what you need, respect source terms and honour opt-outs.",
        ],
        bullets: [
          "Strong: freshness, local coverage, listing and website signals",
          "Weaker: named contacts, company size, private firmographics",
        ],
      },
      {
        heading: "How data providers work",
        paragraphs: [
          "Data providers maintain large databases compiled from many inputs and offer access by licence or credit. They often include job titles, named contacts, company size estimates and industry codes, and searching them is instant because the records already exist.",
        ],
      },
      {
        heading: "Strengths and limits of data providers",
        paragraphs: [
          "Providers shine for larger organisations and role-based targeting, where a named contact matters and public listings say little. The trade-off is freshness and fit: records are only as current as the provider’s last refresh, small and local businesses may be thin, and provenance can be hard to see. Licences can also restrict how data is stored or exported, so read terms carefully.",
        ],
        bullets: [
          "Strong: breadth, named roles, firmographic filters",
          "Weaker: local coverage, refresh visibility, provenance",
        ],
      },
      {
        heading: "When to choose which",
        paragraphs: [
          "Choose live collection when you sell to local or small businesses, when freshness and listing signals matter, or when you need to know where every field came from. Choose a provider when you target named roles in mid-size and larger organisations and public data won’t identify them. Teams that do both often use live collection to define and score the account list, then add named contacts from elsewhere for the top band — keeping track of which source supplied which field.",
        ],
      },
    ],
    steps: {
      heading: "Evaluating either approach on your own segment",
      items: [
        { title: "Define a test segment", text: "Pick one category and geography you genuinely sell into." },
        { title: "Pull a sample from each", text: "Collect a few hundred records through each route." },
        { title: "Check accuracy by hand", text: "Verify a random sample for open businesses, working websites and reachable contacts." },
        { title: "Compare coverage", text: "Count businesses found by one route but missed by the other." },
        { title: "Weigh cost of ownership", text: "Include the time to clean, enrich and maintain, not just the licence or plan." },
      ],
    },
    considerations: {
      heading: "Trade-offs to weigh",
      items: [
        "Public sources rarely give named decision-makers.",
        "Provider records can be months old without clear refresh dates.",
        "Collection volume is bounded by plan quotas per billing cycle.",
        "Licence terms may restrict export or reuse of provider data.",
        "Either route needs a policy on opt-outs and data retention.",
      ],
    },
    example: {
      heading: "Combining the two",
      text: "Take a hypothetical HR software vendor in Bengaluru targeting clinics and mid-size manufacturers. For clinics, it relies on map listings, which are current and complete. For manufacturers, it builds the account list from public sources, scores it, and then looks for HR heads by role for the top band, noting the origin of each contact.",
    },
    faqs: [
      { q: "Is collecting public business data allowed?", a: "Collecting publicly available business information is common, but terms of use, data-protection law and outreach rules all apply. Take advice for your markets and collect only what you need." },
      { q: "Why do large databases miss small local businesses?", a: "Small businesses change often and leave little trace in the corporate records many databases rely on. Map listings and directories tend to reflect them more closely." },
      { q: "How often should a collected list be refreshed?", a: "It depends on how fast your segment changes. Many teams re-run key queries before each campaign rather than reusing old exports." },
    ],
    related: ["/data-sources", "/services/multi-source-lead-scraping", "/resources/public-business-data", "/tools/web-scraping-tools", "/compare/buying-vs-building-lead-lists", "/compare/google-maps-vs-linkedin-prospecting"],
    cta: { heading: "See live collection in action", text: "Run three free queries and compare the results with your current data.", label: "Start free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/compare/cold-email-vs-cold-calling",
    title: "Cold Email vs Cold Calling",
    h1: "Cold Email vs Cold Calling: Choosing by Context",
    metaTitle: "Cold Email vs Cold Calling: Which Fits When",
    metaDescription: "When does cold email beat cold calling, and when is the phone better? A practical comparison for SDRs covering reach, depth, scale, timing and buyer context.",
    eyebrow: "Comparison",
    intro: [
      "Cold email scales well and lets a busy prospect reply when it suits them, while cold calling creates a live conversation that can qualify or disqualify a lead in minutes. Email usually wins on reach and documentation; the phone usually wins on speed of learning and with buyers who run their business from a mobile. The best channel depends on who you are calling and what you need from the first touch.",
      "This page helps SDRs and their managers choose a channel by context rather than habit, and shows how the two work together in a sequence.",
    ],
    highlights: [
      "Email scales; calls qualify fast",
      "Match the channel to the buyer",
      "Sequences often blend both channels",
      "Respect opt-outs on every channel",
    ],
    sections: [
      {
        heading: "Where cold email works best",
        paragraphs: [
          "Email suits buyers who work at a desk, read their inbox and prefer to consider a proposal before talking. It lets you include a specific observation, such as one finding from a website audit, and gives the prospect something to forward to a colleague. It is also easy to log and review, which helps managers coach.",
          "In LeadGen AI, AI-drafted outreach uses each lead’s own enrichment and audit data, campaigns are sent through your configured email transport, and every message is logged against the lead. Sending limits and opt-out obligations are respected.",
        ],
        bullets: [
          "Desk-based and senior buyers",
          "Messages that benefit from a specific finding",
          "Higher volume with consistent follow-up",
        ],
      },
      {
        heading: "Where cold email struggles",
        paragraphs: [
          "Inboxes are crowded, and a message can go unread without telling you why. Deliverability depends on sender reputation, list quality and content, so poor targeting harms future campaigns. Many small business owners also rarely check the generic address listed on their website.",
        ],
      },
      {
        heading: "Where cold calling works best",
        paragraphs: [
          "Calling suits owner-operators, trades, shops and clinics where the person answering may be the decision-maker. A short call can confirm whether there is a need, who decides and when to follow up. It is also useful when an email has been opened but not answered, or when the product needs a quick explanation.",
        ],
        bullets: [
          "Owner-run local businesses",
          "Fast qualification and disqualification",
          "Following up on silent email threads",
        ],
      },
      {
        heading: "Where cold calling struggles",
        paragraphs: [
          "Calls are time-intensive and harder to scale. Gatekeepers and voicemail absorb much of the effort, and rules on unsolicited calls vary by country and number type, so check current regulations before calling. Notes are only as good as the caller’s discipline in recording them.",
        ],
      },
      {
        heading: "When to choose which",
        paragraphs: [
          "Start with email when buyers are desk-based, the message benefits from evidence, or you need volume. Start with a call when the buyer runs the business on the move, the decision is simple, or speed matters. In practice many SDR teams use both: an email that shares something specific, a call a few days later that refers to it, and a short final note. Phone numbers that LeadGen AI normalises and checks for a plausible format make call lists cleaner, though a format check doesn’t confirm someone will answer.",
        ],
      },
    ],
    steps: {
      heading: "Designing a blended sequence",
      items: [
        { title: "Segment by buyer type", text: "Split leads into desk-based and on-the-move buyers using category and listing signals." },
        { title: "Choose the opening channel", text: "Open with email for the first group and a call for the second." },
        { title: "Reference across channels", text: "Make the call mention the email’s finding, and the email mention the call." },
        { title: "Log every touch", text: "Record calls and messages against the lead so anyone can pick up the thread." },
        { title: "Stop when asked", text: "Honour opt-outs immediately on all channels." },
      ],
    },
    considerations: {
      heading: "Trade-offs to weigh",
      items: [
        "Email deliverability depends on list quality and sender reputation.",
        "Calling rules differ by country; check current regulations.",
        "Calls take more seller time per lead.",
        "Generic info@ addresses may not reach the decision-maker.",
        "A blended sequence needs clear notes so channels don’t contradict each other.",
      ],
    },
    example: {
      heading: "Channel choice by segment",
      text: "Imagine a hypothetical bookkeeping firm in Nagpur prospecting two groups. For architecture practices, an SDR emails one observation from the firm’s website audit and follows up by phone. For hardware shops, the SDR calls first between mid-morning and lunch, then sends a short email summarising the call.",
    },
    faqs: [
      { q: "Should the first touch be an email or a call?", a: "Match it to the buyer. Desk-based professionals often prefer email first; owner-operators often respond better to a brief call." },
      { q: "How should a call reference a previous email?", a: "Briefly: mention the one specific point you raised and ask whether it is relevant, rather than asking if they ‘got your email’." },
      { q: "Does LeadGen AI place phone calls?", a: "No. It supplies normalised phone numbers and logs outreach, but calls are made by your team through your own phone setup." },
      { q: "What time of day suits cold calls to small businesses?", a: "It depends on the trade. Many owner-run shops and clinics are quieter mid-morning or mid-afternoon, away from opening rushes and lunch. Test a few windows, note when conversations actually happen, and plan call blocks around that pattern rather than a fixed rule." },
    ],
    related: ["/strategies/cold-email-outreach", "/strategies/cold-calling", "/services/ai-drafted-outreach-messages", "/b2b/email-deliverability", "/compare/inbound-vs-outbound", "/compare/use-case-agency-onboarding"],
    cta: { heading: "Prepare better first touches", text: "See how enrichment and audits give SDRs something specific to say.", label: "Book a demo", href: "/book-a-demo" },
  },
  {
    path: "/compare/google-maps-vs-linkedin-prospecting",
    title: "Google Maps vs LinkedIn Prospecting",
    h1: "Google Maps vs LinkedIn Prospecting: Matching Source to Audience",
    metaTitle: "Google Maps vs LinkedIn Prospecting Compared",
    metaDescription: "Which prospecting source suits your audience? Compare Google Maps and LinkedIn on business types, data, signals and outreach style, and when to combine them.",
    eyebrow: "Comparison",
    intro: [
      "Google Maps is strongest for finding local, physical businesses with addresses, phone numbers, ratings and reviews, while LinkedIn is strongest for professional and company-level information about firms whose staff are active online. The choice depends mostly on who you sell to: shops, clinics and trades live on maps; agencies, consultancies and tech firms are better represented on professional networks.",
      "Both are sources in LeadGen AI, along with IndiaMART. This page compares them so prospectors can pick the right starting point and know when to combine them.",
    ],
    highlights: [
      "Maps for local, physical businesses",
      "LinkedIn for professional, company-level data",
      "Different signals, different openers",
      "Combined results are de-duplicated",
    ],
    sections: [
      {
        heading: "What Google Maps prospecting gives you",
        paragraphs: [
          "Map listings describe businesses people visit or call: restaurants, clinics, salons, contractors, retailers, workshops. A search by category and location returns business names, categories, addresses, websites, phone numbers, ratings, review counts and listing-completeness signals.",
          "Those signals are useful for anyone selling services to local businesses. A strong rating with no website, or a half-complete listing, suggests a business that is doing well offline and may need help online.",
        ],
        bullets: [
          "Dense coverage of local and physical businesses",
          "Ratings, reviews and listing completeness",
          "Phone-first contact routes",
        ],
      },
      {
        heading: "Limits of Google Maps prospecting",
        paragraphs: [
          "Listings rarely name a decision-maker, and businesses without a physical presence may be thin or absent. Categories are chosen by owners, so the same type of business can appear under several labels, which means queries need some care.",
        ],
      },
      {
        heading: "What LinkedIn prospecting gives you",
        paragraphs: [
          "Professional networks describe companies and the people who work in them, which suits B2B services, software, consulting and other knowledge businesses. Company pages carry industry and descriptive information, and the network reflects how firms present themselves professionally.",
          "In LeadGen AI, LinkedIn is available as a source on the Scale plan, alongside IndiaMART, and results join the same normalised, de-duplicated lead records as map data.",
        ],
        bullets: [
          "Better coverage of professional and office-based firms",
          "Company-level descriptive information",
          "Suits role-aware, account-based outreach",
        ],
      },
      {
        heading: "Limits of LinkedIn prospecting",
        paragraphs: [
          "Many small local businesses have no meaningful presence on professional networks. Outreach etiquette also differs: people expect relevance and restraint, and platform terms apply. Contact details often still need to come from the company’s own website, which is where enrichment helps.",
        ],
      },
      {
        heading: "When to choose which",
        paragraphs: [
          "Start with Google Maps when your buyers are local, physical businesses and when listing and review signals tell you something about need. Start with LinkedIn when your buyers are professional firms, when company-level context matters more than footfall, or when the businesses you want don’t serve walk-in customers. Combine them when your segment straddles both — for example, accounting firms that have offices but also present themselves professionally — and rely on cross-source de-duplication to keep one record per business.",
        ],
      },
    ],
    steps: {
      heading: "Picking and testing a source",
      items: [
        { title: "Describe the buyer", text: "Note whether your buyer serves walk-in customers or works office to office." },
        { title: "Run a small query on each", text: "Use the same category and city on both sources." },
        { title: "Compare overlap", text: "See how many businesses appear in both, and which source added unique ones." },
        { title: "Check signal usefulness", text: "Decide whether reviews or company descriptions help your opener more." },
        { title: "Set a default", text: "Choose a primary source per segment and add the other where it fills gaps." },
      ],
    },
    considerations: {
      heading: "Trade-offs to weigh",
      items: [
        "LinkedIn and IndiaMART as sources are listed on the Scale plan.",
        "Neither source reliably names the buyer at small firms.",
        "Category labels vary; test several search terms.",
        "Platform terms and outreach norms differ between sources.",
        "Combining sources uses more of your query quota.",
      ],
    },
    example: {
      heading: "Source choice for two segments",
      text: "Consider a hypothetical digital agency in Indore. For dental clinics, it searches map listings by area and filters for strong reviews with weak websites. For logistics consultancies, it uses LinkedIn data, since those firms rarely depend on walk-in visibility. Both lists land in the same workspace, de-duplicated and scored.",
    },
    faqs: [
      { q: "Which source is better for restaurants and clinics?", a: "Map listings usually, because those businesses rely on local discovery and keep their address, hours, phone and reviews current there." },
      { q: "Can one business appear on both sources?", a: "Yes. LeadGen AI normalises results into one record per business and de-duplicates across sources, keeping a note of which source supplied each field." },
      { q: "Is LinkedIn data available on the Free plan?", a: "Multiple sources, including LinkedIn and IndiaMART, are listed under the Scale plan. Check the plans page for the current breakdown." },
      { q: "Which source gives better openers for outreach?", a: "Map data offers concrete local signals such as reviews, listing completeness and website health, which suit service pitches. Professional network data offers company context, which suits messages about growth or specialisation. Choose the source whose signals connect most directly to the problem you solve." },
    ],
    related: ["/services/google-maps-lead-extraction", "/services/linkedin-lead-enrichment", "/strategies/linkedin-prospecting", "/services/local-business-prospecting", "/compare/scraping-vs-data-providers", "/compare/use-case-sales-territory"],
    cta: { heading: "Compare sources on your market", text: "Look at the plans to see which sources each tier includes.", label: "View plans", href: "/plans" },
  },
  {
    path: "/compare/seo-vs-ppc",
    title: "SEO vs PPC",
    h1: "SEO vs PPC for Lead Generation: Time, Cost and Control",
    metaTitle: "SEO vs PPC for Leads: Time, Cost, Control",
    metaDescription: "Compare SEO and pay-per-click for lead generation on time to results, cost structure and control, with guidance on when marketers should use one, the other or both.",
    eyebrow: "Comparison",
    intro: [
      "PPC buys visibility immediately and stops when you stop paying, while SEO earns visibility slowly and keeps working as long as the site stays strong. PPC gives tight control over who sees what and when; SEO gives lasting reach that is harder to switch on and off. The right balance depends on budget, urgency and how competitive your search terms are.",
      "This page is for marketers deciding where to put effort and money. It compares the two on time, cost and control, then offers a way to choose.",
    ],
    highlights: [
      "PPC is fast; SEO compounds",
      "Paid spend versus content investment",
      "Tight targeting versus durable reach",
      "Many teams run both together",
    ],
    sections: [
      {
        heading: "Time to results",
        paragraphs: [
          "Paid search can show ads within a day of launching a campaign, which makes it useful for new offers, seasonal pushes and testing which messages attract enquiries. SEO usually takes months: pages need to be created, crawled, judged and linked to before they rank well, and progress is uneven.",
        ],
      },
      {
        heading: "Cost structure",
        paragraphs: [
          "PPC is a running cost. Each click is paid for, and in competitive categories costs can rise as more advertisers bid. When the budget stops, so do the leads. SEO is mostly an investment of time and expertise in content, technical health and reputation. It isn’t free, but the cost doesn’t scale with every visitor, and good pages can keep bringing enquiries long after they are written.",
          "Neither is cheap by default. Poorly managed ads waste budget quickly, and SEO work that targets the wrong terms can take months to reveal itself.",
        ],
      },
      {
        heading: "Control and targeting",
        paragraphs: [
          "PPC offers precise control: keywords, locations, schedules, devices and ad copy can all be changed in minutes, and spend is visible daily. SEO offers less control. Search engines decide rankings, algorithm changes shift results, and you can’t choose exactly who arrives.",
        ],
        bullets: [
          "PPC: fine-grained targeting, instant changes, clear spend",
          "SEO: durable visibility, trust from organic placement, slower feedback",
        ],
      },
      {
        heading: "How they support each other",
        paragraphs: [
          "Paid search data shows which terms produce enquiries, which can guide SEO priorities. Strong landing pages improve both. And once a page ranks organically for a term, some teams reduce paid spend on it while watching for any drop in leads.",
          "For agencies selling these services, website health is often the opening. LeadGen AI’s SEO website audit checks technical health, content, metadata, structured data and performance, and produces a client-ready report with prioritised fixes — useful evidence when proposing either approach to a prospect.",
        ],
      },
      {
        heading: "When to choose which",
        paragraphs: [
          "Lean on PPC when you need enquiries soon, are testing a new offer or market, or have a seasonal window. Lean on SEO when you can wait for results, your buyers research before contacting, and you want to reduce dependence on paid spend over time. For many businesses the sensible answer is both: PPC to fill the pipeline now, SEO to make it less expensive to fill later.",
        ],
      },
    ],
    steps: {
      heading: "Planning a balanced search budget",
      items: [
        { title: "List your priority terms", text: "Identify the searches that signal genuine buying intent for your offer." },
        { title: "Test with paid search", text: "Run small campaigns to learn which terms bring real enquiries." },
        { title: "Invest in pages for winners", text: "Create or improve organic pages for the terms that convert." },
        { title: "Fix technical foundations", text: "Address site health and speed, which help both channels." },
        { title: "Rebalance quarterly", text: "Shift spend as organic rankings grow or competition changes." },
      ],
    },
    considerations: {
      heading: "Trade-offs to weigh",
      items: [
        "PPC costs vary by category and can change with competition.",
        "SEO results are slow and not guaranteed.",
        "Both depend on landing pages that convert visitors into enquiries.",
        "Attribution between paid and organic is rarely clean.",
        "Advertising rules in regulated sectors apply to both; check them first.",
      ],
    },
    example: {
      heading: "A two-track plan",
      text: "Picture a hypothetical physiotherapy clinic in Pune opening a second location. It runs local paid search for the new area for the first few months while publishing service pages and building its listing. The marketing lead reviews enquiry sources each month and plans to taper paid spend if organic enquiries for the new area grow.",
    },
    faqs: [
      { q: "Can SEO replace PPC entirely?", a: "For some businesses, eventually, but it carries risk: rankings can drop and competitors can outbid you for attention. Many keep some paid presence for priority terms." },
      { q: "Which is better for a brand-new business?", a: "Paid search usually produces enquiries sooner, while SEO foundations are being laid. Starting both early is common." },
      { q: "How can agencies use audits to sell search services?", a: "A clear audit showing specific technical and content issues gives the prospect a concrete reason to talk, whether the proposal is SEO, PPC or both." },
      { q: "How should a small budget be split between SEO and PPC?", a: "There is no fixed split. A common approach is to put enough into paid search to produce enquiries now and learn which terms convert, while committing steady time each month to the pages and technical fixes that support organic visibility later." },
    ],
    related: ["/strategies/seo-lead-generation", "/strategies/ppc-lead-generation", "/services/seo-website-audit", "/lead-capture/landing-page-design", "/compare/inbound-vs-outbound", "/compare/use-case-local-seo-agency"],
    cta: { heading: "Open conversations with audits", text: "See how a client-ready SEO audit gives agencies a reason to reach out.", label: "Book a demo", href: "/book-a-demo" },
  },
  {
    path: "/compare/in-house-vs-outsourced",
    title: "In-House vs Outsourced Lead Generation",
    h1: "In-House vs Outsourced Lead Generation: Control and Cost",
    metaTitle: "In-House vs Outsourced Lead Generation",
    metaDescription: "Should you build a lead generation team or outsource it? Compare control, cost profile, speed, knowledge retention and risk to decide what suits your business.",
    eyebrow: "Comparison",
    intro: [
      "Running lead generation in-house gives you control over targeting, messaging and data, and keeps learning inside the business; outsourcing gives you experienced people and a faster start without hiring. In-house tends to suit companies that see lead generation as a lasting capability, while outsourcing suits those who need speed, specialist skills or flexibility.",
      "This page compares the two models for leaders deciding how to resource pipeline. It avoids naming providers and focuses on the trade-offs that apply whoever you work with.",
    ],
    highlights: [
      "Control and learning stay in-house",
      "Outsourcing brings speed and specialists",
      "Hybrid models share the work",
      "Own your data whichever you choose",
    ],
    sections: [
      {
        heading: "What in-house does well",
        paragraphs: [
          "An internal team knows the product, the customers and the culture. It can adjust targeting the same day sales feedback arrives, and every lesson about what works stays in the business. Data and relationships remain yours, and the team can grow with the company.",
        ],
        bullets: [
          "Direct control over targeting and messages",
          "Learning compounds inside the company",
          "Close alignment with sales",
        ],
      },
      {
        heading: "Where in-house struggles",
        paragraphs: [
          "Building a team takes time: hiring, training, tooling and management. Early output can be slow while people learn, and a small team is vulnerable when someone leaves. Fixed salaries also make it harder to scale down if priorities change.",
        ],
      },
      {
        heading: "What outsourcing does well",
        paragraphs: [
          "An outside provider can start quickly with people who already know how to build lists, write outreach and manage sequences. You avoid hiring risk, gain access to specialist skills and can often scale activity up or down with the contract.",
        ],
        bullets: [
          "Faster start without recruitment",
          "Experience across many campaigns",
          "Flexible capacity",
        ],
      },
      {
        heading: "Where outsourcing struggles",
        paragraphs: [
          "A provider knows your product less well than your team does, and messaging can feel generic. Incentives may favour activity or meeting counts over pipeline quality. Learning sits with the provider, and if the relationship ends you may leave with little. Data ownership and compliance responsibilities must be agreed clearly, because outreach in your name reflects on your brand.",
        ],
      },
      {
        heading: "When to choose which",
        paragraphs: [
          "Choose in-house when lead generation is core to growth, your market needs deep product knowledge, and you can invest in building a team over months. Choose outsourcing when you need results sooner, lack specialist skills, or want to test a market before committing headcount. Hybrid models are common: the provider runs execution while your team owns targeting, data and qualification, or the reverse.",
          "Whichever model you choose, keep the data in a workspace you control. In LeadGen AI, role-based access lets an organisation give an outside partner access to the records it needs, and CSV export means lead data isn’t locked to any one party.",
        ],
      },
    ],
    steps: {
      heading: "Making the resourcing decision",
      items: [
        { title: "Define the outcome", text: "State what you need: qualified conversations, meetings or a data asset." },
        { title: "Assess internal skills", text: "List who can target, write, research and manage a pipeline today." },
        { title: "Estimate time to productivity", text: "Compare how long a hire would take to ramp with a provider’s start time." },
        { title: "Agree data ownership", text: "Decide where records live and who can export them before any work starts." },
        { title: "Set a review point", text: "Judge the model on pipeline quality after an agreed period." },
      ],
    },
    considerations: {
      heading: "Trade-offs to weigh",
      items: [
        "In-house teams take months to reach full output.",
        "Outsourced activity metrics can hide weak pipeline quality.",
        "Outreach sent on your behalf still carries your compliance obligations.",
        "Knowledge leaves with a provider unless it is documented.",
        "Hybrid models need clear ownership to avoid gaps.",
      ],
    },
    example: {
      heading: "A hybrid arrangement",
      text: "Imagine a hypothetical industrial valve maker in Vadodara that hires an outside team for outbound while keeping qualification in-house. The company owns the workspace, gives the partner a role limited to prospecting and outreach, and its own sales manager reviews the pipeline weekly. Lead data stays exportable whatever happens to the contract.",
    },
    faqs: [
      { q: "What should an outsourcing agreement say about lead data?", a: "Who owns the records, where they are stored, how they are returned or deleted at the end, and who is responsible for consent and opt-out handling." },
      { q: "How do we judge an outsourced team fairly?", a: "On the quality of conversations and pipeline they create, measured against agreed definitions, not on the number of emails sent." },
      { q: "Can an outside partner work in our LeadGen AI workspace?", a: "Role-based access lets an organisation control what each user sees. Full team access with seven role modules is included on the Growth plan." },
      { q: "What does a hybrid in-house and outsourced model look like?", a: "Often the internal team owns targeting, data and qualification, while a partner handles list building or first-touch outreach. The key is written ownership of each step, shared definitions of a qualified lead and one workspace where everyone records activity." },
    ],
    related: ["/services/role-based-team-access", "/resources/team-structure", "/b2b/sales-teams", "/services/csv-lead-export", "/compare/implementation-team-roles", "/compare/manual-vs-automated-prospecting"],
    cta: { heading: "Keep your pipeline in your hands", text: "Talk to us about workspaces, roles and data ownership.", label: "Contact us", href: "/contact" },
  },
  {
    path: "/compare/crm-vs-spreadsheet",
    title: "CRM vs Spreadsheet",
    h1: "CRM vs Spreadsheet: When Small Teams Should Switch",
    metaTitle: "CRM vs Spreadsheet: When to Make the Switch",
    metaDescription: "Spreadsheet or CRM pipeline? Compare flexibility, history, ownership and team visibility, and learn the warning signs that a small team has outgrown its sheet.",
    eyebrow: "Comparison",
    intro: [
      "A spreadsheet is the fastest, most flexible way to start tracking leads, while a CRM pipeline is better once several people work the same leads and you need history, ownership and a shared view of stages. Small teams rarely need to switch on day one, but most reach a point where the sheet costs more time than it saves.",
      "This page compares the two honestly, lists the signs that it’s time to switch, and explains how to move without losing what made the spreadsheet useful.",
    ],
    highlights: [
      "Spreadsheets are fast to start",
      "CRMs keep history and ownership",
      "Watch for clear switching signals",
      "Keep CSV export as a safety net",
    ],
    sections: [
      {
        heading: "Why spreadsheets work at the start",
        paragraphs: [
          "A spreadsheet costs nothing extra, needs no training and bends to any process. A founder can add a column for a new idea in seconds, filter by city or status, and share the file with one colleague. While a single person works a short list, this is often enough.",
        ],
        bullets: [
          "Zero setup and full flexibility",
          "Familiar to everyone",
          "Easy to sort and filter small lists",
        ],
      },
      {
        heading: "Where spreadsheets break down",
        paragraphs: [
          "Problems start when several people edit the same file. Versions multiply, duplicates creep in, and nobody is sure who last contacted a lead or what was said. There is no activity history unless someone types it, no clear owner per record, and no protection against a mistaken sort that scrambles rows. Permissions are all-or-nothing.",
        ],
      },
      {
        heading: "What a CRM pipeline adds",
        paragraphs: [
          "A pipeline board shows every lead in a defined stage, with an owner and a history of activity. Managers can see what is stuck, sellers can pick up a colleague’s lead with context, and reports don’t rely on manual tallies.",
          "LeadGen AI includes a CRM pipeline with stages, owners and full activity history, and every outreach message is logged against its lead. Role-based access means each team sees the records it should. Because leads arrive already scored, users can push the top band straight into the pipeline.",
        ],
        bullets: [
          "Stages, owners and activity history",
          "Shared visibility without version conflicts",
          "Permissions by role",
        ],
      },
      {
        heading: "What a CRM costs you",
        paragraphs: [
          "A CRM asks for discipline: agreed stages, consistent updates and someone to keep it tidy. It is less flexible than a sheet, and over-engineered setups with too many fields can discourage use. The switch itself takes some effort to map and clean data.",
        ],
      },
      {
        heading: "When to choose which",
        paragraphs: [
          "Stay with a spreadsheet while one person works a short list and history doesn’t matter much. Switch to a CRM pipeline when more than one person touches the same leads, when you lose track of follow-ups, when you need to know who said what, or when managers need a pipeline view without asking around. Keep a spreadsheet for ad-hoc analysis: LeadGen AI’s CSV export, available on every plan, lets you pull data out whenever a sheet is the right tool.",
        ],
      },
    ],
    steps: {
      heading: "Switching from a sheet to a pipeline",
      items: [
        { title: "Agree your stages", text: "Write four to six stages with a clear entry rule for each." },
        { title: "Clean the sheet", text: "Remove duplicates and dead leads before moving anything." },
        { title: "Assign owners", text: "Give every active lead one named owner." },
        { title: "Set a logging habit", text: "Agree that every call and email is recorded on the lead." },
        { title: "Retire the old file", text: "Archive the spreadsheet so nobody keeps updating it in parallel." },
      ],
    },
    considerations: {
      heading: "Points to keep in mind",
      items: [
        "A CRM only helps if people update it consistently.",
        "Too many custom fields slow adoption.",
        "Running a sheet and a CRM in parallel recreates the version problem.",
        "The Free plan includes one admin user; team access comes with Growth.",
        "Keep exports for analysis rather than as a second system of record.",
      ],
    },
    example: {
      heading: "Recognising the moment",
      text: "Consider a hypothetical two-founder events company in Goa that tracked leads in a shared sheet. When they hired a third person, two of them contacted the same venue on the same day. They set five stages, assigned owners, moved active leads to a pipeline and kept the sheet only for monthly analysis from an export.",
    },
    faqs: [
      { q: "What is the clearest sign a team has outgrown its spreadsheet?", a: "When two people contact the same lead without knowing, or nobody can say when a lead was last contacted. Both mean shared history is missing." },
      { q: "Can we still use spreadsheets after moving to a CRM?", a: "Yes, for analysis. Export a CSV when you need pivot tables or one-off reports, but keep the CRM as the single place where leads are updated." },
      { q: "How many pipeline stages should a small team start with?", a: "Four to six is usually enough. Each should have a clear rule for entering it, so everyone uses stages the same way." },
    ],
    related: ["/services/crm-pipeline-management", "/services/csv-lead-export", "/lead-qualification/pipeline-stages", "/lead-qualification/crm-hygiene", "/compare/data-migration-planning", "/compare/30-day-implementation-plan"],
    cta: { heading: "Move to a pipeline that fits", text: "Start free and see your leads on a pipeline board.", label: "Start free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/compare/use-case-agency-onboarding",
    title: "Use Case: Agency Client Acquisition",
    h1: "Use Case: How an Agency Could Run Client Acquisition End to End",
    metaTitle: "Use Case: Agency Client Acquisition Workflow",
    metaDescription: "A hypothetical, step-by-step workflow showing how a marketing agency could find, qualify and contact prospective clients using verified LeadGen AI features.",
    eyebrow: "Illustrative use case",
    intro: [
      "This is a hypothetical scenario, not a customer story: it shows how a small marketing agency could run client acquisition from first search to logged outreach using LeadGen AI’s verified features. It describes steps and tools only. It makes no claims about results, and any agency’s outcomes will depend on its niche, offer and execution.",
      "The fictional agency in this walkthrough has five people, serves local service businesses, and wants a repeatable weekly routine for finding new clients rather than relying on referrals alone. It is on the Growth plan, which includes AI lead scoring and outreach, full team access with seven role modules, and SEO and website-build reports.",
    ],
    highlights: [
      "Hypothetical scenario, not a case study",
      "From niche search to logged outreach",
      "Uses only verified product features",
      "A repeatable weekly routine",
    ],
    sections: [
      {
        heading: "Setting up the workspace and roles",
        paragraphs: [
          "The agency’s founder acts as admin and invites the team. Role-based access means the two account managers can work the pipeline and outreach, the strategist can review audits, and an intern can help build lists without seeing everything. Agreeing roles first keeps the workspace tidy from day one.",
        ],
        bullets: [
          "Founder: admin, settings and email transport",
          "Account managers: pipeline and outreach",
          "Strategist: audits and opportunity review",
        ],
      },
      {
        heading: "Building the first niche list",
        paragraphs: [
          "The agency chooses one niche — say, physiotherapy clinics — in two cities. A single query with that category and each location fans out to Google Maps. Results are normalised into one record per business, de-duplicated, and each field notes the source it came from. Because large jobs run on the worker fleet, the founder can close the tab while the scrape finishes.",
          "New leads are queued for enrichment automatically. The platform resolves each website, crawls pages that normally carry contact details, and adds business emails found on the clinic’s own site, normalised phone numbers, contact and about pages and social profiles.",
        ],
      },
      {
        heading: "Qualifying with scores and opportunity flags",
        paragraphs: [
          "Every lead receives a 0–100 score with the reasons stored on the record, reflecting completeness, website health, fit with the agency’s stated market and signals of an active business. The team sorts by score and reviews the top band.",
          "Business opportunity detection flags clinics with no website, sites that don’t resolve, listings with no reachable contact route, and weak audits in the bottom band. Each flag carries the evidence behind it, which gives account managers a specific reason to reach out.",
        ],
      },
      {
        heading: "Using audits to open the conversation",
        paragraphs: [
          "For shortlisted clinics with a website, the strategist runs the SEO website audit. The report grades technical health, content, metadata, structured data and performance, ranks findings by severity in plain English, and produces a prioritised fix list that can be handed to the prospect.",
          "The agency’s approach is to mention one or two findings in a first message and offer the full report, rather than sending everything at once.",
        ],
      },
      {
        heading: "Outreach and pipeline follow-through",
        paragraphs: [
          "Shortlisted leads are pushed into the CRM pipeline, each with an owner. AI-drafted outreach uses the lead’s own enrichment and audit data; the account manager edits each draft to sound like the agency, then sends it through the agency’s configured email transport. Every message is logged against its lead, and sending limits and opt-out obligations are respected.",
          "Replies move leads through stages such as contacted, conversation, proposal and won or lost, with full activity history so anyone can pick up a thread.",
        ],
      },
    ],
    steps: {
      heading: "The weekly routine in this scenario",
      items: [
        { title: "Monday: run queries", text: "Run one or two niche and location queries and let enrichment complete." },
        { title: "Tuesday: review the top band", text: "Sort by score, read the stored reasons and check opportunity flags." },
        { title: "Wednesday: audit the shortlist", text: "Run audits on promising sites and note the most relevant findings." },
        { title: "Thursday: draft and send", text: "Edit AI drafts, send through the agency’s transport and log each message." },
        { title: "Friday: review the pipeline", text: "Move leads between stages, plan follow-ups and agree next week’s niche." },
      ],
    },
    considerations: {
      heading: "Things this scenario assumes",
      items: [
        "The agency has an email transport configured and a sensible sending pace.",
        "Scoring and outreach require the Growth plan or above.",
        "Queries count against the plan’s monthly quota.",
        "Public data may give a clinic’s general address rather than the owner’s.",
        "Outreach must follow consent and opt-out rules in each market.",
      ],
    },
    example: {
      heading: "One lead through the workflow",
      text: "In this fictional run, a physiotherapy clinic in Mysuru appears with strong reviews, a slow website and no structured data. The audit ranks the speed issue highly. The account manager edits an AI draft that mentions the speed finding and offers the full report, sends it, and moves the lead to ‘contacted’ with a follow-up date.",
    },
    faqs: [
      { q: "Is this agency workflow based on a real client?", a: "No. It is a fictional scenario built from LeadGen AI’s verified features to show how the pieces could fit together." },
      { q: "Which plan does this agency scenario assume?", a: "Growth, because it uses AI lead scoring, AI outreach, team roles and SEO reports, all listed on that plan." },
      { q: "Could a solo consultant run a smaller version?", a: "Yes. On the Free plan a single admin can run a few queries, see enriched leads on the dashboard and export them by CSV, then contact them through their own email." },
    ],
    related: ["/services/agency-client-prospecting", "/b2b/agencies", "/industries/digital-agencies", "/resources/agency-lead-generation-faq", "/compare/use-case-local-seo-agency", "/compare/implementation-team-roles"],
    cta: { heading: "See the workflow live", text: "Book a demo and we’ll walk through this routine with your niche.", label: "Book a demo", href: "/book-a-demo" },
  },
  {
    path: "/compare/use-case-local-seo-agency",
    title: "Use Case: Local SEO Agency",
    h1: "Use Case: An Illustrative Local SEO Agency Prospecting Workflow",
    metaTitle: "Use Case: Local SEO Agency Prospecting",
    metaDescription: "A hypothetical workflow showing how a local SEO agency could use listing signals, website audits and opportunity flags in LeadGen AI to prospect local businesses.",
    eyebrow: "Illustrative use case",
    intro: [
      "This is a hypothetical scenario rather than a customer story: it illustrates how a local SEO agency could prospect businesses whose listings and websites show room for improvement, using only verified LeadGen AI features. It contains no outcomes or results, and it is not a prediction of what any agency will achieve.",
      "The fictional agency specialises in local search for home-service trades — plumbers, electricians and pest control — across three towns. Its pitch rests on evidence: showing a business owner specific, fixable issues with their listing and website.",
    ],
    highlights: [
      "A fictional agency, not a client",
      "Listing signals reveal local gaps",
      "Audits supply concrete talking points",
      "Opportunity flags carry their evidence",
    ],
    sections: [
      {
        heading: "Why listing signals matter for local SEO prospecting",
        paragraphs: [
          "For a local SEO agency, the map listing itself is part of the diagnosis. Each lead record in LeadGen AI includes ratings, review counts and listing-completeness signals alongside business name, category, address, website and phone. A trade with many good reviews but an incomplete listing, or few reviews compared with neighbours, is a natural conversation for a local search specialist.",
        ],
      },
      {
        heading: "Collecting the trades in each town",
        paragraphs: [
          "The agency runs one query per trade and town, such as ‘pest control’ plus a town name, on Google Maps. Results are normalised, de-duplicated and stored with the source of each field. Enrichment then finds business emails on each company’s website, adds contact and about pages and social profiles, and normalises phone numbers, writing a field only when the new value is more complete.",
        ],
        bullets: [
          "One query per trade and town keeps lists focused",
          "Enrichment runs automatically on new leads",
          "Manual edits are never overwritten",
        ],
      },
      {
        heading: "Turning website audits into talking points",
        paragraphs: [
          "For trades with websites, the SEO website audit checks technical health, content, metadata, structured data and performance, grades each area and rolls the grades into an overall score. Findings are ranked by severity with plain-English explanations — useful because most trade owners aren’t SEO specialists.",
          "In this scenario, the agency looks especially for missing local structured data, thin service pages and slow mobile performance, since those connect directly to its offer. The prioritised fix list is client-ready, so it can be shared after a first conversation.",
        ],
      },
      {
        heading: "Finding businesses with no website at all",
        paragraphs: [
          "Business opportunity detection flags businesses with no website, sites that don’t resolve and listings with no reachable contact route. For a local SEO agency, a well-reviewed trade with no site is a clear candidate for a combined listing and website package. Each flag records the evidence behind it, so the account manager can describe exactly what was observed.",
        ],
      },
      {
        heading: "Contacting and tracking prospects",
        paragraphs: [
          "Leads are sorted by their 0–100 score and the top band is pushed into the pipeline. AI-drafted outreach draws on each lead’s enrichment and audit data; the agency edits drafts to keep a plain, local tone and sends them through its own email transport. Because many trades answer the phone more readily than email, account managers also call, using normalised numbers, and log the conversation against the lead.",
        ],
      },
    ],
    steps: {
      heading: "The workflow in five steps",
      items: [
        { title: "Choose trades and towns", text: "Pick a short list of trades and the towns the agency can serve well." },
        { title: "Collect and enrich", text: "Run one Google Maps query per combination and let enrichment complete." },
        { title: "Diagnose", text: "Review listing signals, run audits on websites and check opportunity flags." },
        { title: "Shortlist by score", text: "Sort by score, read the reasons and push the best fits into the pipeline." },
        { title: "Reach out with evidence", text: "Send edited drafts or call, referencing one specific finding, and log each touch." },
      ],
    },
    considerations: {
      heading: "Assumptions and limits",
      items: [
        "Audits and scoring are listed on the Growth plan.",
        "Listing signals show what is public, not the owner’s priorities.",
        "Trades are busy; calls may work better than email for some.",
        "Promising ranking outcomes would be inappropriate; describe fixes, not results.",
        "Outreach must respect opt-outs and local marketing rules.",
      ],
    },
    example: {
      heading: "A single prospect in this scenario",
      text: "In this fictional run, an electrician in Hubballi has dozens of positive reviews but a listing missing service areas and a website with no local structured data. The audit ranks both issues. The account manager calls, mentions the missing service areas, offers to send the fix list, and logs the call with a follow-up task.",
    },
    faqs: [
      { q: "Is this local SEO workflow a documented client result?", a: "No. It is an illustrative scenario that uses verified features to show a possible routine, with no claims about outcomes." },
      { q: "Which audit findings suit a local SEO pitch best?", a: "Issues an owner can understand quickly, such as missing structured data, slow mobile pages or thin service pages, because they connect clearly to local visibility." },
      { q: "Should an SEO agency promise rankings in outreach?", a: "It’s wiser not to. Describe the issues and the work you would do, since rankings depend on many factors outside anyone’s control." },
    ],
    related: ["/services/seo-agency-lead-generation", "/services/seo-website-audit", "/strategies/local-seo", "/resources/seo-audit-as-a-sales-tool", "/compare/use-case-web-design-studio", "/compare/seo-vs-ppc"],
    cta: { heading: "Try audit-led prospecting", text: "See the SEO audit and opportunity flags on leads from your own towns.", label: "Book a demo", href: "/book-a-demo" },
  },
  {
    path: "/compare/use-case-web-design-studio",
    title: "Use Case: Web Design Studio",
    h1: "Use Case: A Web Design Studio Finding Redesign Prospects",
    metaTitle: "Use Case: Web Design Studio Prospecting",
    metaDescription: "An illustrative, hypothetical workflow for a web design studio using missing-website flags, site audits and AI-drafted outreach in LeadGen AI to find redesign work.",
    eyebrow: "Illustrative use case",
    intro: [
      "This page describes a hypothetical scenario, not a customer story: a small web design studio using verified LeadGen AI features to find businesses that need a new or better website. It shows a possible process from search to outreach. It reports no results, and nothing here should be read as an expected outcome.",
      "The fictional studio has three people — a designer, a developer and a founder who handles sales — and builds sites for restaurants, cafés and boutique retailers. It wants to spend less time searching and more time on prospects with a visible website problem.",
    ],
    highlights: [
      "Hypothetical studio, no reported results",
      "Missing and broken sites flagged",
      "Audits show what a redesign fixes",
      "Founder-led outreach stays personal",
    ],
    sections: [
      {
        heading: "Two kinds of website opportunity",
        paragraphs: [
          "A web studio has two natural targets: businesses with no website, and businesses whose website is broken, slow or dated. LeadGen AI’s business opportunity detection covers both. It flags businesses with no website and sites that don’t resolve, and it flags weak audits in the bottom band. Each flag carries the evidence behind it.",
        ],
        bullets: [
          "No website: a build conversation",
          "Site doesn’t resolve: an urgent fix",
          "Weak audit: a redesign conversation",
        ],
      },
      {
        heading: "Building the restaurant and retail list",
        paragraphs: [
          "The founder runs Google Maps queries for restaurants, cafés and boutiques in the studio’s city, one category at a time. Records are normalised into one per business and de-duplicated, with the source of each field recorded. Enrichment resolves websites, crawls contact pages and adds business emails, phone numbers and social profiles.",
          "Listing signals such as ratings and review counts help the founder spot businesses that are popular offline, which often suggests they can invest in a better site.",
        ],
      },
      {
        heading: "Reading the audit like a designer",
        paragraphs: [
          "For businesses with a working site, the SEO website audit grades technical health, content, metadata, structured data and performance. The studio pays most attention to performance and page-health metrics and to content findings, because those map to what a redesign improves. The prioritised fix list helps the founder explain the problem without jargon.",
        ],
      },
      {
        heading: "Prioritising who to contact",
        paragraphs: [
          "Each lead has a 0–100 score with the reasons stored. The founder sorts by score, filters for opportunity flags, and pushes a manageable shortlist into the pipeline each week rather than the whole list. Growth also lists website-build reports alongside SEO reports, which suits a studio that wants to document what a new site would address.",
        ],
      },
      {
        heading: "Outreach that sounds like a studio",
        paragraphs: [
          "AI-drafted outreach uses each lead’s enrichment and audit data. The founder rewrites the opening line of every draft to reflect something they noticed — the menu as a PDF, a booking link that fails — and sends through the studio’s email transport. Every message is logged against the lead, and the pipeline board shows who is waiting for a reply. Opt-outs are honoured.",
        ],
      },
    ],
    steps: {
      heading: "The studio’s process in this scenario",
      items: [
        { title: "Search by category", text: "Run one Google Maps query per business type in the studio’s city." },
        { title: "Filter for opportunity", text: "Look for no-website, non-resolving and weak-audit flags." },
        { title: "Audit the shortlist", text: "Review performance, content and page-health findings for sites that exist." },
        { title: "Personalise and send", text: "Edit AI drafts with one specific observation and send through the studio’s transport." },
        { title: "Track and follow up", text: "Move leads through pipeline stages and schedule a polite follow-up." },
      ],
    },
    considerations: {
      heading: "What this scenario takes for granted",
      items: [
        "Opportunity flags show visible gaps, not willingness to spend.",
        "Some businesses without websites prefer to rely on social profiles.",
        "Audits and outreach features are listed on Growth.",
        "A small studio should cap weekly outreach to what it can follow up.",
        "Consent and opt-out rules still apply to every message.",
      ],
    },
    example: {
      heading: "A café in the scenario",
      text: "In this fictional run, a busy café in Chandigarh has strong reviews but its website doesn’t resolve. The opportunity flag records the failed lookup. The founder checks the café’s social profile, then sends a short note mentioning that the site appears to be down and offering a quick call. The lead moves to ‘contacted’.",
    },
    faqs: [
      { q: "Is this web studio scenario drawn from a real customer?", a: "No. It is a fictional walkthrough that uses verified features to show a possible process, without any reported results." },
      { q: "How should a studio approach a business with no website?", a: "Start with what they already have, such as reviews or a social page, and suggest how a simple site could help customers find menus, hours or bookings." },
      { q: "What audit areas matter most for a redesign pitch?", a: "Performance, page health and content findings usually connect most directly to what a redesign changes." },
      { q: "How many prospects should a small studio contact each week?", a: "Only as many as it can research properly and follow up on. For a three-person studio that might be a short weekly shortlist rather than a large batch, because a slow or forgotten follow-up wastes the effort of finding the lead." },
    ],
    related: ["/services/website-redesign-prospecting", "/services/missing-website-detection", "/services/business-opportunity-detection", "/industries/restaurants", "/compare/use-case-local-seo-agency", "/compare/use-case-agency-onboarding"],
    cta: { heading: "Find businesses that need a site", text: "Start with three free queries in your city.", label: "Start free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/compare/use-case-indiamart-supplier",
    title: "Use Case: B2B Supplier on IndiaMART",
    h1: "Use Case: A B2B Supplier Prospecting Buyers via IndiaMART",
    metaTitle: "Use Case: IndiaMART Supplier Prospecting",
    metaDescription: "A hypothetical end-to-end workflow showing how an Indian B2B supplier could combine IndiaMART and Google Maps data in LeadGen AI to find and contact trade buyers.",
    eyebrow: "Illustrative use case",
    intro: [
      "This is a hypothetical scenario, not a customer story: it shows how an Indian B2B supplier could use LeadGen AI’s verified features to find trade buyers through IndiaMART and other sources, then qualify and contact them. It describes a process only. It includes no results, and it does not predict what any supplier will see.",
      "The fictional supplier makes corrugated boxes in an industrial estate near Pune. Beyond handling inbound enquiries, it wants to approach food processors, pharmaceutical packers and e-commerce warehouses directly. Because IndiaMART and LinkedIn are listed as sources on the Scale plan, the scenario assumes Scale.",
    ],
    highlights: [
      "Fictional supplier, illustrative steps only",
      "IndiaMART and Maps combined",
      "One de-duplicated record per business",
      "Assumes the Scale plan",
    ],
    sections: [
      {
        heading: "Why combine IndiaMART with other sources",
        paragraphs: [
          "IndiaMART lists manufacturers, traders and distributors by product category, which helps a supplier find businesses that are active in trade. Some of those same businesses also appear on Google Maps with an address, phone and reviews; others appear on only one. LeadGen AI fans a query out to each enabled source and normalises the results into one record per business, de-duplicated across sources, with each field traced to where it came from.",
        ],
      },
      {
        heading: "Defining the buyer segments",
        paragraphs: [
          "The supplier writes three short segment definitions — food processors, pharmaceutical packers and e-commerce fulfilment warehouses — each limited to districts it can deliver to economically. It states its market, categories and geography in the workspace so that scoring can assess fit.",
        ],
        bullets: [
          "Segment by end use, not just category",
          "Limit geography to economic delivery range",
          "Record the target market for fit scoring",
        ],
      },
      {
        heading: "Collecting and enriching buyer records",
        paragraphs: [
          "Directory search terms such as product categories go to IndiaMART, and category plus district queries go to Google Maps. With Scale’s distributed scrape fleet and unlimited queries, larger jobs run in the background and each job records what it fetched and when. Enrichment then resolves each buyer’s website and adds business emails, normalised phone numbers, contact pages, social profiles and company details.",
        ],
      },
      {
        heading: "Qualifying trade buyers",
        paragraphs: [
          "Each lead receives a 0–100 score with stored reasons covering completeness, website health, fit with the stated market and signals of an active, operating business. The sales head sorts by score and reviews the top band, paying attention to fit reasons and signs that a business is operating at scale. Leads with no reachable contact route are flagged so the team doesn’t waste time on them.",
        ],
      },
      {
        heading: "Reaching out and tracking enquiries",
        paragraphs: [
          "Shortlisted buyers go into the pipeline with an owner. AI-drafted outreach uses each lead’s enrichment data; the sales executive edits drafts to mention the box grades and capacities relevant to that buyer, and sends through the supplier’s email transport. Calls are logged against the same record. Because per-org API keys are included on Scale, the supplier’s developer could also connect lead data to internal systems, and CSV export remains available for the accounts team.",
        ],
      },
    ],
    steps: {
      heading: "The supplier’s workflow in this scenario",
      items: [
        { title: "Write segment definitions", text: "Describe each buyer type and delivery range, and record them as the target market." },
        { title: "Search IndiaMART and Maps", text: "Run directory terms and category-plus-district queries across both sources." },
        { title: "Let records merge and enrich", text: "Allow de-duplication and enrichment to build one complete record per business." },
        { title: "Review the top band", text: "Read score reasons and drop poor fits or unreachable listings." },
        { title: "Contact and log", text: "Send edited drafts, make follow-up calls and record every touch on the pipeline." },
      ],
    },
    considerations: {
      heading: "Assumptions in this scenario",
      items: [
        "IndiaMART and LinkedIn as sources, API keys and unlimited queries are listed on Scale.",
        "Directory listings show trade activity, not current purchasing needs.",
        "Public data often gives a company contact rather than the purchase manager.",
        "Trade buyers usually expect samples, specifications and pricing quickly.",
        "Follow India’s data-protection and marketing rules; take advice where unsure.",
      ],
    },
    example: {
      heading: "A buyer record in the scenario",
      text: "In this fictional run, a spice processor near Satara appears on both IndiaMART and Google Maps. The records merge into one, enrichment finds a business email on its website, and its score reasons note strong fit and an active listing. The sales executive emails a short note offering food-grade carton samples and logs a follow-up call for the following week.",
    },
    faqs: [
      { q: "Is this IndiaMART supplier story a real case study?", a: "No. It is an illustrative scenario built from verified features, with no reported outcomes." },
      { q: "Why does this workflow assume the Scale plan?", a: "Multiple sources including IndiaMART, unlimited queries, the distributed fleet and per-org API keys are listed on Scale." },
      { q: "How should a supplier define buyer segments?", a: "By end use and delivery range rather than broad category alone, so each segment has a clear reason to need the product and can be served economically." },
    ],
    related: ["/services/indiamart-lead-extraction", "/b2b/msme-suppliers", "/strategies/b2b-marketplaces", "/industries/printing-and-packaging", "/compare/use-case-sales-territory", "/compare/google-maps-vs-linkedin-prospecting"],
    cta: { heading: "Explore multi-source prospecting", text: "Talk to us about IndiaMART and the Scale plan.", label: "Contact us", href: "/contact" },
  },
  {
    path: "/compare/use-case-sales-territory",
    title: "Use Case: Sales Territory Build-Out",
    h1: "Use Case: Building Out a New Sales Territory Step by Step",
    metaTitle: "Use Case: Sales Territory Build-Out Workflow",
    metaDescription: "A hypothetical workflow showing how a sales team could map, score and assign a new territory using LeadGen AI’s sources, scoring, roles and pipeline features.",
    eyebrow: "Illustrative use case",
    intro: [
      "This is a hypothetical scenario rather than a customer story: it shows how a sales team could map, prioritise and assign accounts in a new territory using verified LeadGen AI features. It lays out steps, not results, and contains no outcome figures.",
      "The fictional team sells commercial cleaning supplies and is expanding from one city into a neighbouring region with four towns. A regional manager and three sellers need a shared, de-duplicated account map and a fair way to divide it.",
    ],
    highlights: [
      "An imagined team, not a client",
      "Map the territory before assigning",
      "Scores guide where sellers start",
      "Roles keep each patch visible",
    ],
    sections: [
      {
        heading: "Mapping every relevant account",
        paragraphs: [
          "The manager lists the business types that buy cleaning supplies — hotels, hospitals, schools, offices, facility management firms — and runs a Google Maps query for each type in each town. Results are normalised into one record per business and de-duplicated, so a hospital listed under two categories appears once. Every field notes its source, and each job records what it fetched and when.",
          "Long jobs continue on the worker fleet after the tab closes, which matters when a territory spans many category and town combinations.",
        ],
      },
      {
        heading: "Enriching and scoring the map",
        paragraphs: [
          "Enrichment adds business emails from company websites, normalised phone numbers, contact pages and social profiles. Each account then carries a 0–100 score with stored reasons reflecting completeness, website health, fit with the stated market and geography, and signs of an active business. Sellers can sort and filter by score, so the first weeks focus on the strongest fits.",
        ],
      },
      {
        heading: "Dividing the territory fairly",
        paragraphs: [
          "With a complete map, the manager can divide accounts by town or by segment, aiming for similar numbers of high-scoring accounts per seller rather than similar raw counts. Owners are assigned on the pipeline board. Role-based access means each seller sees the records they should, while the manager sees the whole region.",
        ],
        bullets: [
          "Balance by top-band accounts, not just totals",
          "Assign one owner per account",
          "Keep a shared pool for unassigned leads",
        ],
      },
      {
        heading: "Working the territory week by week",
        paragraphs: [
          "Each seller pushes their top band into the pipeline, edits AI-drafted introductions that use enrichment data, and sends through the company’s email transport. Visits and calls are logged against the account alongside emails, so the full activity history is visible. Opt-outs and sending limits are respected.",
        ],
      },
      {
        heading: "Reviewing coverage and adjusting",
        paragraphs: [
          "At regular reviews the manager looks at how many top-band accounts each seller has contacted, which stages are filling and where accounts are stalling. If one patch is much stronger than another, ownership can be rebalanced. A CSV export gives the manager a snapshot for planning outside the platform. Before adding new towns, the manager re-runs key queries in existing ones so that newly opened businesses join the map and closed ones can be marked accordingly.",
        ],
      },
    ],
    steps: {
      heading: "Territory build-out in this scenario",
      items: [
        { title: "List buyer types and towns", text: "Agree which categories buy and which towns are in scope." },
        { title: "Run the mapping queries", text: "Query each category and town and let de-duplication merge the results." },
        { title: "Enrich and score", text: "Allow enrichment to complete and review score reasons for the top band." },
        { title: "Assign owners", text: "Divide accounts by town or segment, balancing high-scoring accounts." },
        { title: "Work and review", text: "Contact, log and review coverage regularly, rebalancing where needed." },
      ],
    },
    considerations: {
      heading: "Assumptions behind the scenario",
      items: [
        "Many category and town combinations use more of the query quota.",
        "Team roles are listed on Growth; unlimited queries on Scale.",
        "Map listings cover physical businesses well but not every buyer.",
        "Score reflects public signals and stated fit, not current demand.",
        "Frequent reassignment disrupts relationships; review on a schedule.",
      ],
    },
    example: {
      heading: "One town in the scenario",
      text: "In this fictional run, the town of Nashik produces records for hotels, schools and hospitals. A private hospital appears under two categories and merges into one record. Its score reasons note strong fit and a complete listing, so it lands in the top band of the seller who owns Nashik, who books a visit and logs it on the pipeline.",
    },
    faqs: [
      { q: "Is this territory build-out based on a real sales team?", a: "No. It is an illustrative scenario that uses verified features to show one possible approach, without reported outcomes." },
      { q: "How should a manager balance territories between sellers?", a: "Compare the number of high-fit accounts in each patch, not just raw totals, and consider travel time between towns." },
      { q: "Can sellers see each other’s accounts?", a: "That depends on how roles are set. Role-based access lets an organisation decide which records each team sees." },
      { q: "How long should a new territory take to map?", a: "It depends on the number of categories and towns and on the plan’s query quota. Mapping the highest-value categories first lets sellers start work while lower-priority combinations are added over the following weeks." },
    ],
    related: ["/b2b/territory-planning", "/services/sales-prioritisation", "/services/role-based-team-access", "/b2b/multi-location-businesses", "/compare/use-case-indiamart-supplier", "/compare/implementation-team-roles"],
    cta: { heading: "Map your next territory", text: "Book a demo to see territory mapping on your region.", label: "Book a demo", href: "/book-a-demo" },
  },
  {
    path: "/compare/30-day-implementation-plan",
    title: "30-Day Implementation Plan",
    h1: "A 30-Day Implementation Plan for LeadGen AI",
    metaTitle: "30-Day LeadGen AI Implementation Plan",
    metaDescription: "A practical week-by-week plan for a new LeadGen AI customer’s first 30 days: setup, roles, first lists, scoring, outreach and an end-of-month review.",
    eyebrow: "Implementation",
    intro: [
      "A sound first month with LeadGen AI moves from setup in week one, to a first focused list in week two, to scored outreach in week three, and a structured review in week four. The aim isn’t to use every feature at once; it is to prove one repeatable workflow on one segment, then expand.",
      "This plan is written for new customers and whoever owns the rollout. It maps each week to features that exist today and notes where plan limits matter, such as query quotas, team roles on Growth and API keys on Scale. Adjust the pace to your team’s capacity.",
    ],
    highlights: [
      "One segment, one workflow first",
      "Weekly goals with named owners",
      "Mapped to verified plan features",
      "A review built into week four",
    ],
    sections: [
      {
        heading: "Week 1: set up the workspace and roles",
        paragraphs: [
          "Start with the foundations. The admin configures the workspace, invites users and assigns roles so each person sees the records they should. Growth includes full team access with seven role modules; the Free plan has one admin user. Configure the email transport you will send from, and agree a sensible sending pace.",
          "Write down the first target segment — category, geography and the problem you solve — and record your market so scoring can assess fit.",
        ],
        bullets: [
          "Invite users and assign roles",
          "Configure the email transport",
          "Define and record the first segment",
        ],
      },
      {
        heading: "Week 2: build and check the first list",
        paragraphs: [
          "Run a small number of queries for the chosen segment. Results are normalised and de-duplicated, and enrichment runs automatically on new leads. Before anyone sends anything, review a sample by hand: are these the right businesses, are websites resolving, do contact routes look usable?",
          "Keep an eye on the query quota for your plan and billing cycle. It is better to run a few focused queries and learn from them than to spend the allowance on broad searches.",
        ],
      },
      {
        heading: "Week 3: score, shortlist and start outreach",
        paragraphs: [
          "Sort by the 0–100 score and read the stored reasons for the top band. If the reasons don’t match your idea of a good fit, refine the segment and recorded market rather than ignoring the score. Push a manageable shortlist into the pipeline with owners.",
          "Use AI-drafted outreach as a starting point, edit each draft, and send through your transport. Every message is logged against its lead. Where it suits your offer, run SEO audits on shortlisted sites to give outreach something specific to reference.",
        ],
      },
      {
        heading: "Week 4: review and decide what to expand",
        paragraphs: [
          "Hold a structured review. Look at list quality, how many shortlisted leads were contacted, reply quality, and where leads sit in the pipeline. Ask sellers what slowed them down. Decide whether to deepen the same segment, add a second one, add sources, or adjust roles.",
          "If you plan to connect lead data to other systems, this is a good point to plan it: CSV export is available on every plan, and per-org API keys are included on Scale.",
        ],
      },
      {
        heading: "What to leave until month two",
        paragraphs: [
          "Resist adding several segments, sources and campaigns at once. Multiple sources such as LinkedIn and IndiaMART, integrations via API keys and larger fleets are easier to adopt once the basic routine is working and people trust the data.",
        ],
      },
    ],
    steps: {
      heading: "Owners and outputs by week",
      items: [
        { title: "Week 1 — admin", text: "Workspace, roles, email transport and a written segment definition." },
        { title: "Week 2 — ops or list owner", text: "A first enriched list and a hand-checked sample." },
        { title: "Week 3 — sellers", text: "A scored shortlist in the pipeline and the first logged outreach." },
        { title: "Week 4 — rollout lead", text: "A review document with decisions for month two." },
      ],
    },
    considerations: {
      heading: "Common pitfalls in month one",
      items: [
        "Starting with too many segments makes it hard to learn anything.",
        "Skipping the hand-checked sample lets data problems reach prospects.",
        "Sending unedited drafts produces generic outreach.",
        "Plan quotas limit queries per billing cycle; plan them.",
        "Without a set review date, rollouts drift.",
      ],
    },
    example: {
      heading: "A compressed first month",
      text: "Imagine a hypothetical five-person IT services firm in Hyderabad. In week one the operations lead sets up roles and the email transport. In week two she runs queries for dental clinics in two areas and checks fifty records by hand. In week three two sellers contact the top band. In week four the team agrees to add architecture firms next month.",
    },
    faqs: [
      { q: "Can we finish implementation faster than 30 days?", a: "Small teams sometimes compress it, but keep the hand-checked sample and the review. Skipping them is where most rollouts go wrong." },
      { q: "What should the week-four review produce?", a: "A short written decision: what worked, what to fix, which segment to tackle next and who owns each change." },
      { q: "When should we set up API access?", a: "After the core workflow is running. Per-org API keys are on Scale, and integrations are easier to design once you know which data you actually use." },
    ],
    related: ["/how-it-works", "/plans", "/services/role-based-team-access", "/tools/email-sending-setup", "/compare/implementation-team-roles", "/compare/implementation-success-metrics"],
    cta: { heading: "Plan your first month with us", text: "Book a demo and we’ll walk through this plan for your team.", label: "Book a demo", href: "/book-a-demo" },
  },
  {
    path: "/compare/implementation-team-roles",
    title: "Implementation Team Roles",
    h1: "Implementation Team Roles: Who Does What in a Rollout",
    metaTitle: "Implementation Team Roles and Responsibilities",
    metaDescription: "Who should own what when rolling out LeadGen AI? Role definitions for admins, list owners, sellers and managers, mapped to role-based access and plans.",
    eyebrow: "Implementation",
    intro: [
      "A successful rollout needs four clear responsibilities: an admin who owns the workspace and access, a list owner who owns targeting and data quality, sellers who own outreach and pipeline updates, and a manager who owns review and decisions. In a small team one person may hold several of these, but each should be named.",
      "This guide is for admins planning a rollout. It maps each responsibility to LeadGen AI features — role-based access, query quotas, the email transport, CSV export and API keys — so you can assign people and permissions together.",
    ],
    highlights: [
      "Four responsibilities, each with an owner",
      "Permissions follow responsibilities",
      "One person can hold several",
      "Review ownership as the team grows",
    ],
    sections: [
      {
        heading: "The admin: workspace, access and sending",
        paragraphs: [
          "The admin sets up the workspace, invites users and assigns roles. LeadGen AI is multi-tenant and role-based, so the admin decides which records and modules each person can reach; Growth includes full team access with seven role modules, while Free includes one admin user. The admin also configures the email transport used for campaigns and, on Scale, manages per-org API keys.",
        ],
        bullets: [
          "Invites users and assigns roles",
          "Configures the email transport",
          "Manages API keys on Scale",
          "Removes access when people leave",
        ],
      },
      {
        heading: "The list owner: targeting and data quality",
        paragraphs: [
          "The list owner decides which segments to pursue, writes the queries and manages the query quota for the plan and billing cycle. They check samples by hand, watch for records that need correction and make sure the recorded market matches the team’s real target, since scoring assesses fit against it.",
          "Because enrichment never overwrites a field a user edited by hand, the list owner can correct records knowing those fixes will persist.",
        ],
      },
      {
        heading: "Sellers: outreach and pipeline discipline",
        paragraphs: [
          "Sellers work the leads they own. They read score reasons, review audits and opportunity flags where relevant, edit AI-drafted outreach and send through the configured transport. Every message is logged against the lead automatically; calls and meetings need to be recorded too. Sellers move leads between stages promptly so the pipeline reflects reality.",
        ],
      },
      {
        heading: "The manager: review, coaching and decisions",
        paragraphs: [
          "The manager owns the rhythm: weekly pipeline reviews, a monthly look at list quality and segment performance, and decisions about expanding to new segments or sources. They use activity history to coach and the pipeline board to spot stalled leads. CSV exports support planning and reporting outside the platform.",
        ],
      },
      {
        heading: "Covering roles in a small team",
        paragraphs: [
          "In a two- or three-person team, the founder might be admin and manager, while one colleague is list owner and seller. That works as long as each responsibility has a named person and a regular time in the week. As the team grows, separate the list owner from sellers first, because data quality suffers when nobody owns it.",
        ],
      },
    ],
    steps: {
      heading: "Assigning roles in practice",
      items: [
        { title: "List the responsibilities", text: "Write down admin, list owner, seller and manager duties for your team." },
        { title: "Name an owner for each", text: "Assign a person, even if one person holds several." },
        { title: "Match permissions", text: "Give each user a role that matches their duties, no more." },
        { title: "Set a weekly rhythm", text: "Book time for list checks, outreach and pipeline review." },
        { title: "Revisit quarterly", text: "Adjust roles and permissions as people join, leave or change jobs." },
      ],
    },
    considerations: {
      heading: "Things to watch",
      items: [
        "Granting everyone admin rights removes the benefit of role-based access.",
        "A missing list owner usually shows up as falling data quality.",
        "Team access beyond one admin requires Growth or above.",
        "API keys should be managed by the admin and revoked when no longer needed.",
        "Outside partners should get the narrowest role that lets them work.",
      ],
    },
    example: {
      heading: "Roles in a small firm",
      text: "Picture a hypothetical recruitment agency in Gurugram with four people. The founder is admin and manager. One consultant is list owner, running queries for logistics firms each Monday. The other two are sellers with roles limited to pipeline and outreach. Every Friday the founder reviews the board and decides next week’s focus.",
    },
    faqs: [
      { q: "Who should own the email transport configuration?", a: "The admin, because it affects every campaign and sender reputation. Sellers should not change it without agreement." },
      { q: "Should sellers be able to run their own queries?", a: "It can work, but quotas are shared per plan and billing cycle. Many teams route queries through the list owner to avoid overlap." },
      { q: "How should access be handled when someone leaves?", a: "Remove or reduce their role promptly, reassign their leads to new owners and review any API keys they managed." },
      { q: "Which role should a new seller start with?", a: "A role limited to the pipeline and outreach for the leads they own is usually enough. Wider access can be added once they are settled and their responsibilities grow." },
    ],
    related: ["/services/role-based-team-access", "/services/multi-tenant-workspaces", "/resources/team-structure", "/security-and-data-handling", "/compare/30-day-implementation-plan", "/compare/in-house-vs-outsourced"],
    cta: { heading: "Set up your team properly", text: "Compare plans to see which include full team access.", label: "View plans", href: "/plans" },
  },
  {
    path: "/compare/data-migration-planning",
    title: "Data Migration Planning",
    h1: "Data Migration Planning: Mapping and Cleaning Lead Data",
    metaTitle: "Lead Data Migration Planning: Map and Clean",
    metaDescription: "How to plan a lead data migration: inventory sources, map fields, clean duplicates and stale records, and decide what to rebuild fresh rather than carry across.",
    eyebrow: "Implementation",
    intro: [
      "Good data migration planning starts by deciding what not to move: old, unverifiable or duplicate records usually cost more to carry across than to rebuild. The rest is mapping fields from old to new, cleaning before you move, and keeping an export of the original so nothing is lost.",
      "This guide is for ops people moving lead data from spreadsheets or another system into a new workflow with LeadGen AI. It stays practical and is honest about what the platform does: it builds and enriches leads from Google Maps, LinkedIn and IndiaMART, supports CSV export on every plan and per-org API keys on Scale.",
    ],
    highlights: [
      "Decide what not to migrate",
      "Map fields before moving anything",
      "Clean at the source first",
      "Keep an untouched original export",
    ],
    sections: [
      {
        heading: "Taking inventory of existing lead data",
        paragraphs: [
          "List every place lead data lives today: shared sheets, a previous CRM, sellers’ personal files, email folders. For each, note who owns it, how many records it holds, when it was last updated and which fields it contains. This inventory often reveals overlapping lists and fields nobody uses.",
        ],
      },
      {
        heading: "Deciding what to move, rebuild or retire",
        paragraphs: [
          "Sort records into three groups. Active opportunities with real history should be carried over, with their notes. Prospects never contacted, or contacted long ago, are often better rebuilt fresh from public sources, because a new query returns current, enriched and source-traced records. Records with no clear origin, or contacts who opted out, should be retired — though opt-out lists themselves must be kept and honoured.",
        ],
        bullets: [
          "Move: active deals and recent conversations",
          "Rebuild: stale or never-contacted prospects",
          "Retire: unverifiable records; keep suppression lists",
        ],
      },
      {
        heading: "Mapping fields between systems",
        paragraphs: [
          "Create a simple mapping table: old field, new field, transformation needed. LeadGen AI’s lead records hold business name, category, full postal address, website, phone numbers, public email addresses, ratings, review counts and listing signals, plus the source of each field. Pipeline records carry stages, owners and activity history.",
          "Agree stage names before mapping old statuses onto them, and decide how free-text notes will be preserved. Fields with no destination should be documented and archived rather than forced into an unsuitable place.",
        ],
      },
      {
        heading: "Cleaning before you move",
        paragraphs: [
          "Clean at the source: merge duplicates, standardise phone formats and addresses, remove obvious test entries and fill owner fields. Moving dirty data simply relocates the problem. Once leads are in LeadGen AI, enrichment can fill gaps and records are de-duplicated across sources, but enrichment never overwrites fields a user edited by hand.",
        ],
      },
      {
        heading: "Protecting against loss and planning integrations",
        paragraphs: [
          "Before you start, export and store an untouched copy of every source. After migration, use CSV export to check counts and spot-check records against the originals. If other systems need lead data on an ongoing basis, plan whether CSV exports are enough or whether an integration through per-org API keys on Scale is warranted. Don’t assume connectors to named third-party tools exist; design around exports and the API.",
        ],
      },
    ],
    steps: {
      heading: "A migration plan in six steps",
      items: [
        { title: "Inventory", text: "List every source, its owner, size, freshness and fields." },
        { title: "Classify", text: "Mark records to move, rebuild or retire, and preserve suppression lists." },
        { title: "Map", text: "Build a field and stage mapping table with transformation rules." },
        { title: "Clean", text: "Merge duplicates and standardise formats in the source data." },
        { title: "Back up and move", text: "Store original exports, then move the agreed records." },
        { title: "Verify", text: "Compare counts and spot-check records, then retire the old system." },
      ],
    },
    considerations: {
      heading: "Risks and prerequisites",
      items: [
        "Losing opt-out records during migration creates compliance risk.",
        "Carrying stale data across damages trust in the new system early.",
        "Running old and new systems in parallel for long causes conflicting updates.",
        "Rebuilding lists uses query quota; plan it within the billing cycle.",
        "Integrations beyond CSV export and API keys should not be assumed.",
      ],
    },
    example: {
      heading: "A modest migration",
      text: "Consider a hypothetical industrial supplies trader in Rajkot with three spreadsheets and an old contact list. The ops lead keeps active quotes and their notes, retires a list of unknown origin, preserves the opt-out list, and rebuilds the prospect base with fresh queries. She stores original exports and checks a sample of moved records before archiving the sheets.",
    },
    faqs: [
      { q: "Should we migrate every old lead we have?", a: "Usually not. Move active opportunities, rebuild stale prospects from current sources and retire records you can’t verify, while keeping opt-out lists." },
      { q: "How do we preserve old notes and history?", a: "Decide in the mapping where notes will live, carry them across for active records, and keep the original exports archived for reference." },
      { q: "What is a suppression list and why keep it?", a: "It is a list of contacts who asked not to be contacted. Keeping and honouring it after migration prevents re-contacting people who opted out." },
    ],
    related: ["/tools/csv-import-and-export", "/services/lead-deduplication", "/resources/data-hygiene", "/services/api-access", "/compare/crm-vs-spreadsheet", "/compare/buying-vs-building-lead-lists"],
    cta: { heading: "Plan your move with us", text: "Talk to us about moving your lead data into a cleaner workflow.", label: "Contact us", href: "/contact" },
  },
  {
    path: "/compare/implementation-success-metrics",
    title: "Implementation Success Metrics",
    h1: "Implementation Success Metrics: Milestones That Show Progress",
    metaTitle: "Implementation Success Metrics and Milestones",
    metaDescription: "Which milestones show a lead generation rollout is working? Adoption, data quality, activity and pipeline measures for leaders, with targets you set for yourself.",
    eyebrow: "Implementation",
    intro: [
      "The best implementation success metrics track a sequence of milestones — adoption, data quality, consistent activity and then pipeline — rather than jumping straight to revenue. Early signals tell you whether the workflow is being used properly; later ones tell you whether it is producing value. Set your own targets from a baseline, because no external benchmark knows your market.",
      "This guide is for leaders who need to judge a rollout fairly. It suggests what to measure at each stage and where the data comes from in LeadGen AI, such as pipeline stages, activity history, scores and CSV exports.",
    ],
    highlights: [
      "Milestones in a deliberate order",
      "Baselines before targets",
      "Leading signals before revenue",
      "Data drawn from the pipeline",
    ],
    sections: [
      {
        heading: "Milestone 1: adoption",
        paragraphs: [
          "The first question is whether people are using the workflow. Useful measures include whether every intended user has logged in and holds the right role, whether the email transport is configured, and whether leads are being worked in the pipeline rather than in side spreadsheets.",
        ],
        bullets: [
          "Users active with correct roles",
          "Email transport configured and in use",
          "Pipeline used as the single record",
        ],
      },
      {
        heading: "Milestone 2: data quality",
        paragraphs: [
          "Once people are using the tool, check that what they work with is good. Hand-check a regular sample for fit and accuracy. Watch the share of leads with a usable contact route after enrichment, and whether score reasons match the team’s idea of a good fit. If the top band keeps surprising sellers, revisit the recorded market and segment definitions.",
        ],
      },
      {
        heading: "Milestone 3: consistent activity",
        paragraphs: [
          "Next, look at whether the routine is happening every week. Because every message is logged against its lead and the pipeline keeps full activity history, you can see how many shortlisted leads were contacted, how quickly follow-ups happened and whether owners move leads between stages promptly.",
          "Activity isn’t the goal, but inconsistent activity makes later outcomes impossible to judge.",
        ],
      },
      {
        heading: "Milestone 4: pipeline progress",
        paragraphs: [
          "Finally, measure movement: replies that become conversations, conversations that become proposals, and proposals that close. Compare these with whatever baseline you had before the rollout. Many teams review this monthly, using CSV exports for analysis alongside the pipeline board.",
          "Be patient with this stage. Sales cycles vary, and judging too early can lead to abandoning a workflow that simply hadn’t had time.",
        ],
      },
      {
        heading: "Setting targets without borrowed benchmarks",
        paragraphs: [
          "External figures rarely transfer to your segment, offer or region. A better approach is to record a baseline in the first month and set modest improvement targets from there. Write targets down before the rollout starts and review them at fixed intervals, so judgement isn’t driven by a single good or bad week.",
        ],
      },
    ],
    steps: {
      heading: "Building a simple scorecard",
      items: [
        { title: "Choose one or two measures per milestone", text: "Keep the scorecard short enough to review in ten minutes." },
        { title: "Record a baseline", text: "Capture current numbers, or your best estimate, before starting." },
        { title: "Set dated targets", text: "Agree what you expect by the end of month one and month three." },
        { title: "Review on a fixed rhythm", text: "Look at adoption and activity weekly, pipeline monthly." },
        { title: "Act on what you find", text: "Turn each review into one or two specific changes with owners." },
      ],
    },
    considerations: {
      heading: "Measurement pitfalls",
      items: [
        "Judging on revenue in the first weeks punishes a workflow that hasn’t had time.",
        "Counting emails sent rewards volume rather than relevance.",
        "Borrowed benchmarks rarely match your market.",
        "Leads worked outside the pipeline vanish from your metrics.",
        "Changing several things at once makes results hard to interpret.",
      ],
    },
    example: {
      heading: "A scorecard in practice",
      text: "Imagine a hypothetical software reseller in Chennai. Its manager tracks four items: users active with correct roles, the share of a weekly hand-checked sample that fits, the share of top-band leads contacted within a week, and conversations started per month. After the first month she sets targets for month three based on what she observed.",
    },
    faqs: [
      { q: "What should we measure in the first two weeks?", a: "Adoption and data quality: whether people use the workflow and whether the leads they see are accurate and on target. Pipeline measures come later." },
      { q: "Are there standard benchmarks for these milestones?", a: "Not ones that reliably fit every market. Set targets from your own baseline and adjust them as you learn." },
      { q: "How often should leaders review implementation metrics?", a: "Weekly for adoption and activity, monthly for data quality and pipeline progress, with a fuller review at the end of each quarter." },
      { q: "What if adoption is strong but pipeline isn’t moving?", a: "Look upstream first. Check whether the segment and recorded market really match your best customers, whether messages are specific enough, and whether follow-ups happen on time. Change one thing at a time so you can see which adjustment made the difference." },
    ],
    related: ["/b2b/metrics", "/tools/lead-generation-kpis", "/resources/measuring-campaign-success", "/services/lead-dashboard", "/compare/30-day-implementation-plan", "/compare/implementation-team-roles"],
    cta: { heading: "Define success before you start", text: "Book a demo and we’ll help you choose milestones that fit your rollout.", label: "Book a demo", href: "/book-a-demo" },
  },
];
