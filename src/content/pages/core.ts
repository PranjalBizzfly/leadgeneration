import type { PageContent } from "../types";

export const pages: PageContent[] = [
  {
    path: "/about",
    title: "About",
    h1: "About LeadGen AI, The Prospect Intelligence Platform",
    metaTitle: "About LeadGen AI: Prospect Intelligence Platform",
    metaDescription: "LeadGen AI helps teams find, understand and reach the right prospects with one pipeline from multi-source scraping to scored leads and outreach.",
    eyebrow: "Company",
    intro: [
      "LeadGen AI is a prospect intelligence platform that helps teams find, understand and reach the right prospects. It brings scraping, enrichment, scoring, website audits, opportunity detection, a CRM pipeline and AI-drafted outreach into one workflow. Turning a market into a contact list no longer means juggling a dozen tabs and spreadsheets.",
      "The platform starts from public business listings on Google Maps, LinkedIn and IndiaMART, turns them into one clean record per business, and then adds the context a seller needs before making contact: verified-format phone numbers, emails found on the company’s own site, a 0–100 score with stored reasons, and an audit of the prospect’s website. This page explains what the platform is, who it is built for and the principles behind it.",
    ],
    highlights: [
      "One pipeline from search to outreach",
      "Google Maps, LinkedIn and IndiaMART sources",
      "Every field traceable to its source",
      "Scores that explain themselves",
    ],
    sections: [
      {
        heading: "What LeadGen AI Actually Does",
        paragraphs: [
          "At its core, LeadGen AI answers a practical question: which businesses in my market are worth contacting, and what should I say to them? A single query (a category and a location, or a directory search term) fans out to each enabled source. The results are normalised into one lead record per business and de-duplicated across sources, so a business listed on two platforms appears once.",
          "From there, each new lead is queued for enrichment automatically. The platform finds the website, crawls the pages that normally carry contact details and matches what it finds against the existing record. Scoring, auditing and opportunity detection then help the user decide where to spend time, and the CRM and outreach tools carry the chosen leads through to contact.",
        ],
        bullets: [
          "Multi-source scraping with cross-source de-duplication",
          "AI contact enrichment from the company’s own website",
          "A 0–100 lead score with reasons stored on the record",
          "SEO website audits with client-ready reports",
          "Opportunity flags such as no website or a weak audit",
          "A pipeline board and AI-drafted outreach sent through your own email transport",
        ],
      },
      {
        heading: "Who The Platform Is Built For",
        paragraphs: [
          "LeadGen AI suits teams whose customers are businesses that can be found in public listings. Digital and web agencies use it to find local businesses with weak or missing websites. B2B sellers use it to build territory lists and prioritise accounts. Suppliers and distributors in India use IndiaMART search terms to find buyers and peers in their category.",
          "The plans reflect that range: a Free plan for small teams just getting started, a Growth plan for teams that need deeper insights and automation, and a Scale plan for high-volume operations that demand dedicated infrastructure.",
        ],
      },
      {
        heading: "Principles Behind The Product",
        paragraphs: [
          "A few design choices run through the whole platform and explain how it behaves day to day.",
        ],
        bullets: [
          "Traceability: every lead records the source each field came from, and every job records what it fetched and when.",
          "Respect for human edits: enrichment never overwrites a field the user edited by hand, and it writes a field only when the new value is more complete.",
          "Explainable prioritisation: the lead score is stored with its reasons, so a seller can see why a lead ranks where it does.",
          "User control over outreach: campaigns go out through the user’s configured email transport, respect sending limits and opt-out obligations, and every message is logged against its lead.",
        ],
      },
      {
        heading: "How The Pieces Fit Together",
        paragraphs: [
          "Long jobs run on a worker fleet, so a large scrape keeps going after the browser tab is closed. Quotas are enforced per plan and per billing cycle. Workspaces are multi-tenant and role-based, so each team sees the records it should. Leads can be exported to CSV, and the Scale plan adds per-org API keys for teams that want to connect the platform to their own systems.",
          "The result is a single place where research, qualification and first contact happen on the same record, with the history of each lead kept alongside it.",
        ],
      },
      {
        heading: "Where To Go Next",
        paragraphs: [
          "If you want the step-by-step flow, read How It Works. For the modules and data model, see the Platform Overview. If you are weighing the plans, the Plans page sets out what each tier includes. And if you would like a guided look at the product, request access and we will arrange a walkthrough.",
        ],
      },
    ],
    considerations: {
      heading: "What To Know Before You Start",
      items: [
        "LeadGen AI works from public business listings, so it fits best when your buyers are businesses visible on Google Maps, LinkedIn or IndiaMART.",
        "Lead quality depends on how clearly you define your market, category and geography; vague queries produce broad lists.",
        "LinkedIn and IndiaMART as sources are listed on the Scale plan, so check which sources your plan includes.",
        "Outreach is sent through your own email transport, so your sending reputation and compliance remain your responsibility.",
      ],
    },
    example: {
      heading: "A Small Agency’s First Week",
      text: "Imagine a four-person digital agency in Jaipur that wants more website clients. On the Free plan it runs a query for dental clinics in its city, reviews the enriched records and exports a shortlist to CSV. Seeing that several clinics have no website or a weak audit, it moves to Growth to use scoring, audit reports and AI-drafted outreach for the next campaign.",
    },
    faqs: [
      {
        q: "Is LeadGen AI A Data Vendor That Sells Contact Lists?",
        a: "No. LeadGen AI is a platform you run yourself. You define the query, the platform gathers and enriches public business data for that query, and the resulting records sit in your own workspace.",
      },
      {
        q: "What Does “Prospect Intelligence” Mean In Practice?",
        a: "It means a lead arrives with context rather than just a name and number: where each field came from, a score with reasons, an audit of the website and any opportunity flags, all on one record.",
      },
      {
        q: "Can I Try The Platform Before Committing To A Paid Plan?",
        a: "Yes. The Free plan includes 3 scrape queries, website enrichment, the lead dashboard and CSV export for one admin user, which is enough to judge whether the records suit your market.",
      },
      {
        q: "What Kind Of Team Gets The Most Out Of LeadGen AI?",
        a: "Teams whose customers are businesses visible in public listings. Digital and web agencies use it to find local businesses with weak or missing websites, B2B sellers build territory lists, and suppliers in India use IndiaMART search terms to find buyers and peers.",
      },
      {
        q: "Why Does LeadGen AI Store The Source Of Every Field?",
        a: "Traceability is one of the platform’s core principles. Knowing where a phone number or email came from helps you judge its reliability, correct mistakes and answer a prospect honestly if they ask how you found them.",
      },
      {
        q: "Will Automated Enrichment Undo The Corrections My Team Makes?",
        a: "No. Enrichment never overwrites a field someone edited by hand, and it only writes a field when the new value is more complete. That way records improve over time without losing your team’s knowledge.",
      },
      {
        q: "Who Is Responsible For The Emails Sent From The Platform?",
        a: "You are. Campaigns go out through your own configured email transport, so your sending reputation and compliance stay in your hands. The platform respects sending limits and opt-out obligations and logs every message against its lead.",
      },
      {
        q: "What Is A Common Mistake When Starting Out?",
        a: "Running vague, broad queries. Lead quality depends on how clearly you define your market, category and geography, so start with one specific category in one location, review the records, then widen.",
      },
    ],
    related: ["/how-it-works", "/platform-overview", "/why-leadgen-ai", "/plans", "/data-sources"],
    cta: {
      heading: "See The Pipeline On Your Own Market",
      text: "Start with three free queries and judge the records for yourself.",
      label: "Start Free",
      href: "https://leadgeneration.oxo1.com/",
    },
  },
  {
    path: "/contact",
    title: "Contact",
    h1: "Contact The LeadGen AI Team",
    metaTitle: "Contact LeadGen AI",
    metaDescription: "Questions about LeadGen AI, plans, data sources or a policy? Send a message with the details below so the team can give you a useful answer.",
    eyebrow: "Contact",
    intro: [
      "The quickest way to reach LeadGen AI is the contact form on this page. Tell us who you are, what you are trying to do and what you need from us, and the team will reply by email.",
      "A little detail up front saves a round of back-and-forth. The guidance below explains what to include for the most common kinds of question, from plan choices to data handling and policy requests.",
    ],
    highlights: [
      "One form for all enquiries",
      "Replies come by email",
      "Specific details get faster answers",
    ],
    sections: [
      {
        heading: "What To Include In Your Message",
        paragraphs: [
          "The most useful messages describe the situation rather than just the question. A short paragraph covering the points below usually lets us answer in one reply.",
        ],
        bullets: [
          "Your name, company and work email address",
          "What you sell and who you sell to (the categories and locations you prospect)",
          "Which sources matter to you: Google Maps, LinkedIn or IndiaMART",
          "Roughly how many queries you expect to run each month and how many people will use the workspace",
          "The specific question, or the decision you are trying to make",
        ],
      },
      {
        heading: "Common Reasons People Get In Touch",
        paragraphs: [
          "Most enquiries fall into a few groups. People ask us to help them choose between the Free, Growth and Scale plans, or to check whether the data sources cover a particular market. Others have questions about role-based access, per-org API keys or CSV export, or want the policy documents for the LeadGen AI application itself.",
          "If you already know you would like to see the product in action, the request access page is the better route, because it collects the details needed to plan a walkthrough.",
        ],
      },
      {
        heading: "What Happens After You Send It",
        paragraphs: [
          "Your message goes to the LeadGen AI team, who will reply to the email address you provide. We use the details only to respond to your enquiry, as described in the website Privacy Policy. If your question needs input from a specialist (for example on plan limits or data handling), it may take a little longer, and we will tell you.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I Use The Contact Form Or The Request Access Form?",
        a: "Use the contact form for questions, policy requests and anything general. Use request access when you want a guided walkthrough of the product and are ready to evaluate it.",
      },
      {
        q: "Can I Ask For The Privacy Policy That Covers The LeadGen AI Application?",
        a: "Yes. The privacy policy on this website covers the marketing site only. Ask through this form for the documents that govern your use of the application.",
      },
      {
        q: "What Should I Avoid Putting In The Message?",
        a: "Please don’t send passwords, API keys or other credentials. Describe the issue instead, and the team will advise on any secure next step.",
      },
      {
        q: "How Will The Team Reply To My Message?",
        a: "Replies come by email to the address you enter in the form. Use a work email you check regularly, and look in your spam folder if you are expecting a reply and haven’t seen one.",
      },
      {
        q: "What Details Help You Recommend A Plan?",
        a: "Tell us which sources matter to you, roughly how many queries you expect to run each month and how many people will use the workspace. Those three points usually decide between Free, Growth and Scale.",
      },
      {
        q: "Can I Ask Whether The Data Sources Cover My Market?",
        a: "Yes. Describe what you sell, the categories you prospect and the locations you cover. The team can then comment on how Google Maps, LinkedIn or IndiaMART are likely to fit your market.",
      },
      {
        q: "Why Might Some Answers Take Longer Than Others?",
        a: "Questions on topics such as plan limits or data handling sometimes need input from a specialist. When that happens, the team will let you know that the reply may take a little longer.",
      },
      {
        q: "How Are The Details I Send Through This Form Used?",
        a: "They are used only to respond to your enquiry, as described in the website Privacy Policy. If you later want your submission deleted, you can ask through this same form.",
      },
    ],
    related: ["/request-access", "/faq", "/plans", "/security-and-data-handling", "/privacy-policy"],
    cta: {
      heading: "Prefer To See It First?",
      text: "Request access and we will walk you through the pipeline on a market you care about.",
      label: "Request Access",
      href: "/request-access",
    },
    form: "contact",
  },
  {
    path: "/how-it-works",
    title: "How It Works",
    h1: "How LeadGen AI Works, From Search To Outreach",
    metaTitle: "How It Works: From Search to Outreach",
    metaDescription: "Follow the LeadGen AI pipeline step by step: search, multi-source scraping, enrichment, 0–100 scoring, SEO audit, opportunity detection and outreach.",
    eyebrow: "How It Works",
    intro: [
      "LeadGen AI works as one pipeline: you describe a market, the platform gathers matching businesses from Google Maps, LinkedIn and IndiaMART, enriches and scores each one, audits their websites, flags opportunities and lets you reach the best leads through your own email transport. Each stage writes to the same lead record, so nothing has to be copied between tools.",
      "This page walks through the stages in order and explains what happens at each one, what you control, and what the record looks like by the time it reaches your pipeline.",
    ],
    highlights: [
      "Seven stages, one lead record",
      "Jobs keep running after you close the tab",
      "Scores and audits explain their reasoning",
      "Outreach goes through your own email",
    ],
    sections: [
      {
        heading: "Search: Describing The Market You Want",
        paragraphs: [
          "Everything begins with a query. For map-style sources that means a category and a location, such as architects in Kochi. For directory sources such as IndiaMART it can be a search term that matches how suppliers describe themselves. The same query fans out to every source you have enabled, so you describe the market once.",
          "The clearer your query, the more useful the list. Teams often start narrow (one category, one city), check the results, then widen.",
        ],
      },
      {
        heading: "Scrape: Gathering And Merging Listings",
        paragraphs: [
          "The platform collects listings from each source and normalises them into one lead record per business, de-duplicating across sources. Each record carries the business name, category and full postal address; website, listed phone numbers and public email addresses; ratings, review counts and listing-completeness signals; and the source each field came from.",
          "Long jobs run on a worker fleet, so a large scrape continues after you close the browser tab. Every job records what it fetched and when, and quotas are enforced per plan and per billing cycle.",
        ],
      },
      {
        heading: "Enrich: Filling In Contact Details",
        paragraphs: [
          "New leads are queued for enrichment automatically. The platform finds each business’s website and crawls the pages that normally carry contact details (usually the contact and about pages). It then matches the results against the existing record.",
        ],
        bullets: [
          "Business emails discovered on the company’s own site",
          "Phone numbers normalised and checked for a plausible format",
          "The website and its contact and about pages",
          "Social profiles and company details",
        ],
      },
      {
        heading: "Score And Audit: Deciding Where To Focus",
        paragraphs: [
          "Each lead receives a single 0–100 score, with the reasons stored on the record. The score looks at four things: how complete the record is; website health and whether the business is credibly online; fit against your stated market, category and geography; and signs that the business is active and trading. You can sort and filter by score, and scores recalculate when a lead is re-enriched.",
          "The SEO website audit fetches a lead’s website and checks it against rules covering technical health, content, metadata, structured data and performance. It grades each area, rolls the grades into an overall score, and produces a report with ranked findings, plain-English explanations and a prioritised fix list you can hand to the prospect.",
        ],
      },
      {
        heading: "Detect And Reach Out: Turning Insight Into Contact",
        paragraphs: [
          "Opportunity detection flags businesses with no website, sites that don’t resolve, listings with no reachable contact route and audits in the bottom band. Each flag carries the evidence behind it.",
          "Leads you want to pursue move onto a pipeline board with stages, owners and full activity history. AI-drafted outreach uses the lead’s own enrichment and audit data, campaigns are sent through your configured email transport, and every message is logged against its lead. Outreach respects sending limits and opt-out obligations, and you stay in control of the list.",
        ],
      },
    ],
    steps: {
      heading: "The Pipeline In Six Steps",
      items: [
        { title: "Run A Query", text: "Enter a category and location, or a directory search term, and choose the sources to use." },
        { title: "Let The Fleet Scrape", text: "Workers gather listings, merge duplicates and record the source of every field." },
        { title: "Review Enriched Records", text: "Enrichment adds emails, normalised phone numbers, websites and social profiles without touching your manual edits." },
        { title: "Prioritise By Score And Audit", text: "Sort by the 0–100 score, read the stored reasons and open audits for the leads that matter." },
        { title: "Act On Opportunity Flags", text: "Use evidence-backed flags such as a missing website or a weak audit to shape your pitch." },
        { title: "Move Leads Into The Pipeline And Contact Them", text: "Assign owners, draft outreach with AI and send through your own email transport, with every message logged." },
      ],
    },
    considerations: {
      heading: "Things To Keep In Mind",
      items: [
        "Available sources and features depend on your plan; AI scoring, outreach and audit reports are part of Growth.",
        "Enrichment relies on what businesses publish on their own sites, so some records will stay incomplete.",
        "AI-drafted messages are drafts: review them for accuracy and tone before sending.",
        "Your email transport, sending volume and opt-out handling affect deliverability and compliance.",
      ],
    },
    example: {
      heading: "From Query To First Email",
      text: "Picture a two-person SEO consultancy in Indore. It queries for physiotherapy clinics in the city, lets enrichment run overnight, then filters for leads scoring in the top band whose audits show weak metadata and structured data. It moves twelve of them onto the pipeline, edits the AI drafts to reference each clinic’s specific findings and sends them through its own mailbox.",
    },
    faqs: [
      {
        q: "Do I Need To Keep The Browser Open While A Large Scrape Runs?",
        a: "No. Long jobs run on the worker fleet, so a large scrape keeps going after you close the tab, and the job record shows what was fetched and when.",
      },
      {
        q: "What Happens To A Lead’s Score When Its Data Changes?",
        a: "Scores recalculate when a lead is re-enriched, so a record that gains a working website or contact details can move up the list.",
      },
      {
        q: "Can I Skip Stages I Don’t Need?",
        a: "Yes. Many teams simply scrape, enrich and export to CSV. Scoring, audits and outreach are there when you want them, subject to your plan.",
      },
      {
        q: "Where Do The AI-Drafted Messages Get Their Details From?",
        a: "From the lead’s own record (its enrichment data and, where available, its website audit findings) so each draft refers to that specific business.",
      },
      {
        q: "How Should I Write My First Query?",
        a: "Start narrow with one category and one location, such as architects in Kochi. For directory sources like IndiaMART, use a search term that matches how suppliers describe themselves. Check the results, then widen once you know the list is useful.",
      },
      {
        q: "Why Do Some Leads Stay Incomplete After Enrichment?",
        a: "Enrichment relies on what businesses publish on their own websites. If a business has no site, or its site has no contact details, there may be nothing to add. Such leads can still be useful, especially when flagged as an opportunity.",
      },
      {
        q: "Which Areas Does The SEO Website Audit Check?",
        a: "It checks technical health, content, metadata, structured data and performance. Each area is graded, the grades roll up into an overall score, and the report lists ranked findings with plain-English explanations and a prioritised fix list.",
      },
      {
        q: "Should I Send AI Drafts Without Editing Them?",
        a: "No. AI-drafted messages are a starting point. Review each one for accuracy and tone, and add specific references to the prospect’s findings where it helps, before sending it through your own email transport.",
      },
    ],
    related: ["/platform-overview", "/data-sources", "/services/ai-lead-scoring", "/services/seo-website-audit", "/services/ai-outreach-campaigns", "/why-leadgen-ai"],
    cta: {
      heading: "Run The Pipeline On Your Market",
      text: "Three free queries are enough to see every early stage in action.",
      label: "Start Free",
      href: "https://leadgeneration.oxo1.com/",
    },
  },
  {
    path: "/platform-overview",
    title: "Platform Overview",
    h1: "LeadGen AI Platform Overview: Modules, Data Model And Infrastructure",
    metaTitle: "Platform Overview: Modules, Data Model, Fleet",
    metaDescription: "An overview of the LeadGen AI platform for sales and growth leaders: its modules, lead data model, worker fleet, role-based access, CSV export and API keys.",
    eyebrow: "Platform",
    intro: [
      "The LeadGen AI platform is a set of connected modules (scraping, enrichment, scoring, SEO audit, opportunity detection, CRM and outreach) that all read from and write to a single lead record. For a sales or growth leader, that means one source of truth for prospect data, with clear rules about where data comes from, who can see it and how it leaves the system.",
      "This overview covers the modules, the lead data model, the worker fleet that runs heavy jobs, how roles and workspaces separate teams, and the routes for getting data out through CSV export and per-org API keys.",
    ],
    highlights: [
      "Seven modules on one record",
      "Per-field source traceability",
      "Distributed worker fleet for big jobs",
      "Role-based, multi-tenant workspaces",
    ],
    sections: [
      {
        heading: "The Modules And What Each One Owns",
        paragraphs: [
          "Each module has a defined job, and together they form the pipeline from discovery to contact.",
        ],
        bullets: [
          "Multi-source scraping: one query fanned out to Google Maps, LinkedIn and IndiaMART, normalised and de-duplicated.",
          "AI contact enrichment: website resolution, contact-page crawling and reconciliation with the existing record.",
          "AI lead scoring: a 0–100 score per lead with stored reasons.",
          "SEO website audit: graded checks across technical health, content, metadata, structured data and performance.",
          "Business opportunity detection: evidence-backed flags such as no website or a weak audit.",
          "CRM pipeline: stages, owners and full activity history.",
          "AI outreach: drafts built from the lead’s data, sent through your configured email transport and logged.",
        ],
      },
      {
        heading: "The Lead Record As The Data Model",
        paragraphs: [
          "Everything is built around one record per business. It holds identity and location (business name, category, full postal address), contact routes (website, listed phone numbers, public email addresses), reputation and listing signals (ratings, review counts, listing completeness), enrichment results (emails from the company’s own site, normalised phone numbers, contact and about pages, social profiles, company details), the score and its reasons, audit results, opportunity flags, pipeline stage and owner, and the activity history including every message sent.",
          "Importantly, the record also stores the source each field came from. Enrichment writes a field only when the new value is more complete, and it never overwrites a field a user edited by hand. So the record gets better over time without wiping out your team’s corrections.",
        ],
      },
      {
        heading: "The Worker Fleet Behind Large Jobs",
        paragraphs: [
          "Scraping and enrichment can involve many pages and many listings. LeadGen AI runs long jobs on a worker fleet rather than in the browser, so a large scrape keeps going after the tab is closed. Every job records what it fetched and when, which helps when you need to explain where a list came from.",
          "Quotas are enforced per plan and per billing cycle. The Scale plan adds a distributed scrape fleet for high-volume operations.",
        ],
      },
      {
        heading: "Roles, Workspaces And Team Access",
        paragraphs: [
          "The platform is multi-tenant and role-based. Each organisation works in its own workspace, and role-based access means each team sees the records it should. The Growth plan includes full team access with seven role modules, while the Free plan is for a single admin user.",
          "For managers, this makes it practical to give researchers, sellers and agency account leads different views of the same pipeline without sharing a single login.",
        ],
      },
      {
        heading: "Getting Data Out: CSV Export And API Keys",
        paragraphs: [
          "Every plan includes CSV export from the lead dashboard, which is the simplest way to move records into another system or share a list. The Scale plan adds per-org API keys for teams that want programmatic access from their own tools. LeadGen AI does not publish named integrations with third-party CRMs, so plan around CSV export, API keys and your email transport.",
        ],
      },
    ],
    considerations: {
      heading: "Planning Considerations For Leaders",
      items: [
        "Decide early who needs which role, so the workspace matches how your team actually splits the work.",
        "If you rely on another CRM, plan how CSV exports or API access will keep both systems aligned.",
        "Monthly query quotas on Growth mean high-volume teams should estimate usage before choosing a plan.",
        "Per-org API keys and the distributed fleet are Scale features, so teams planning lots of integrations should look at that tier.",
        "Traceability helps with internal review, but you still need your own policy on how prospect data is used.",
      ],
    },
    example: {
      heading: "Splitting Work Across A Growing Team",
      text: "Consider a twelve-person B2B services firm in Hyderabad. Two researchers run queries and clean records, six sellers each own a pipeline stage for their territory, and a manager reviews scores and activity history weekly. Role-based access keeps each seller focused on their own leads, while CSV exports feed the finance team’s forecasting spreadsheet.",
    },
    faqs: [
      {
        q: "Which Module Should A New Team Switch On First?",
        a: "Most start with scraping, enrichment and the lead dashboard, check record quality, then add scoring and audits once they know which markets to focus on.",
      },
      {
        q: "Can Two Teams Share One Workspace Without Seeing Each Other’s Leads?",
        a: "Role-based access is designed so each team sees the records it should. Plan your roles to reflect those boundaries when you set up the workspace.",
      },
      {
        q: "Is There An API On Every Plan?",
        a: "No. Per-org API keys are listed on the Scale plan. Free and Growth include CSV export from the lead dashboard.",
      },
      {
        q: "Does LeadGen AI Have Built-In Integrations With Other CRMs?",
        a: "LeadGen AI does not publish named integrations with third-party CRMs. Teams usually move records with CSV export or, on the Scale plan, connect their own tools through per-org API keys, so plan your sync process around those routes.",
      },
      {
        q: "What Is Stored On A Single Lead Record?",
        a: "Identity and location, contact routes, ratings and listing signals, enrichment results, the score and its reasons, audit results, opportunity flags, pipeline stage and owner, and the full activity history. It also records the source of each field.",
      },
      {
        q: "Why Do Large Jobs Run On A Worker Fleet?",
        a: "Scraping and enrichment can involve many pages and listings, so long jobs run on workers rather than in the browser. A large scrape keeps going after you close the tab, and each job records what it fetched and when.",
      },
      {
        q: "How Should A Manager Plan Roles Before Inviting The Team?",
        a: "Map roles to how the work is actually split, such as researchers who run queries, sellers who own pipeline stages and managers who review scores. Growth includes full team access with seven role modules, while Free has a single admin user.",
      },
      {
        q: "When Does A Team Need The Scale Plan’s Infrastructure?",
        a: "When monthly query volume regularly goes beyond growth’s 50 queries, or the team needs LinkedIn and IndiaMART sources or programmatic access. Scale adds unlimited queries, a distributed scrape fleet and per-org API keys.",
      },
    ],
    related: ["/how-it-works", "/security-and-data-handling", "/services/role-based-team-access", "/services/api-access", "/services/distributed-scrape-fleet", "/plans"],
    cta: {
      heading: "Walk Through The Platform With Us",
      text: "Request access to see the modules, roles and data model on a live workspace.",
      label: "Request Access",
      href: "/request-access",
    },
  },
  {
    path: "/plans",
    title: "Plans",
    h1: "LeadGen AI Plans: Free, Growth And Scale",
    metaTitle: "Plans: Free, Growth and Scale Compared",
    metaDescription: "Compare the LeadGen AI Free, Growth and Scale plans by queries, features, team access and infrastructure, and find the right tier for your situation.",
    eyebrow: "Plans",
    intro: [
      "LeadGen AI offers three plans: Free for small teams just getting started, Growth for growing teams that need deeper insights and automation, and Scale for high-volume operations that demand dedicated infrastructure. The right choice depends mainly on how many queries you run, how many people need access and which sources you need.",
      "This page sets out what each plan includes and helps you choose by situation. Prices are not listed here; request access or get in touch for current pricing. The live site states “No hidden fees, cancel anytime”, and shows a “Save 20%” option on annual billing.",
    ],
    highlights: [
      "3 free queries included",
      "Growth is the most popular plan",
      "No hidden fees, cancel anytime",
      "Save 20% with annual billing",
    ],
    sections: [
      {
        heading: "Free: For Small Teams Just Getting Started",
        paragraphs: [
          "The Free plan is a way to test LeadGen AI on your own market before you commit. It is designed for one person evaluating whether the records suit their prospecting.",
        ],
        bullets: [
          "3 scrape queries",
          "Website Enrichment",
          "Lead dashboard and CSV export",
          "1 admin user",
        ],
      },
      {
        heading: "Growth: For Teams That Need Deeper Insights And Automation",
        paragraphs: [
          "Growth is marked as the most popular plan. It adds the intelligence and outreach layers on top of the basics, and opens the workspace to the whole team.",
        ],
        bullets: [
          "50 scrape queries per month",
          "AI lead scoring and outreach",
          "Full team access with 7 role modules",
          "SEO and website-build reports",
        ],
      },
      {
        heading: "Scale: For High-Volume Operations With Dedicated Infrastructure",
        paragraphs: [
          "Scale removes query limits and adds the infrastructure, sources and support that large teams, or teams with many integrations, need.",
        ],
        bullets: [
          "Unlimited queries",
          "A distributed scrape fleet",
          "Multiple sources, including LinkedIn and IndiaMART",
          "Per-org API keys",
          "Priority support and SLA",
          "A dedicated success manager",
        ],
      },
      {
        heading: "Choosing A Plan By Situation",
        paragraphs: [
          "Rather than comparing feature lists line by line, start from your situation.",
        ],
        bullets: [
          "You are exploring on your own and want to see real records: start on Free and use your 3 queries on your most important markets.",
          "You are a small agency or sales team that prospects every week and wants to prioritise and contact leads from one place: Growth, for scoring, outreach and audit reports.",
          "You sell to agencies’ clients and need client-ready audit output: Growth, because SEO and website-build reports are included.",
          "You need LinkedIn or IndiaMART alongside Google Maps, programmatic access or very high volume: Scale.",
          "You want a named contact and an SLA: Scale, which includes priority support and a dedicated success manager.",
        ],
      },
      {
        heading: "Estimating Your Query Needs",
        paragraphs: [
          "A query is one search, for example a category in a location. Teams often estimate usage by multiplying the categories they target by the locations they cover, then by how often they refresh. If that number regularly exceeds 50 a month, scale’s unlimited queries are worth discussing. Quotas are enforced per billing cycle.",
        ],
      },
    ],
    steps: {
      heading: "A Simple Way To Decide",
      items: [
        { title: "List Your Target Markets", text: "Write down the categories and locations you want to prospect." },
        { title: "Check Your Sources", text: "Decide whether Google Maps is enough or whether you need LinkedIn or IndiaMART." },
        { title: "Count Your Users", text: "One person can start on Free; a team needs Growth or Scale." },
        { title: "Estimate Monthly Queries", text: "Compare your estimate with Growth’s 50 queries per month." },
        { title: "Test On Free, Then Upgrade", text: "Use the 3 free queries to confirm record quality before choosing a paid tier." },
      ],
    },
    considerations: {
      heading: "Before You Choose",
      items: [
        "AI scoring and outreach are not part of Free, so judge Free on record quality rather than the full workflow.",
        "Growth’s 50 queries are per month; heavy refresh schedules can use them faster than expected.",
        "LinkedIn and IndiaMART are listed as Scale sources, which matters if your buyers live mainly on those platforms.",
        "Annual billing offers savings, but monthly billing may suit you while you are still testing fit.",
      ],
    },
    example: {
      heading: "Two Teams, Two Choices",
      text: "Suppose a solo consultant in Pune targets three categories in one city and refreshes quarterly; Free is enough to start and Growth covers the year comfortably. A distributor in Ahmedabad that wants IndiaMART search terms, many cities and an API link to its order system would look straight at Scale.",
    },
    faqs: [
      {
        q: "Why Aren’t Prices Shown On This Page?",
        a: "LeadGen AI does not publish prices on its public site. Request access or contact the team for current pricing for Growth and Scale.",
      },
      {
        q: "How Does The Annual Billing Saving Work?",
        a: "The live site shows a “Save 20%” option for annual billing. Confirm the details for your plan with the team when you request access.",
      },
      {
        q: "Can I Cancel A Paid Plan Later?",
        a: "The live site states “No hidden fees, cancel anytime.” Check the terms that apply to your account for specifics.",
      },
      {
        q: "Which Plan Includes Client-Ready SEO Reports?",
        a: "Growth includes SEO and website-build reports, and Scale builds on Growth for higher-volume teams.",
      },
      {
        q: "How Do I Estimate How Many Queries I Need Each Month?",
        a: "Multiply the categories you target by the locations you cover, then by how often you refresh each list. If the total regularly exceeds 50 a month, growth’s quota will feel tight and scale’s unlimited queries are worth discussing.",
      },
      {
        q: "What Should I Judge During The Free Plan?",
        a: "Focus on record quality for your market. Free includes 3 scrape queries, website enrichment, the lead dashboard and CSV export, but not AI scoring or outreach, so use it to check whether the listings and contact details suit your prospecting.",
      },
      {
        q: "Which Plan Do I Need For LinkedIn And IndiaMART?",
        a: "Multiple sources, including LinkedIn and IndiaMART, are listed on the Scale plan. If your buyers mainly appear on those platforms rather than Google Maps, factor that in when choosing a tier.",
      },
      {
        q: "What Extra Support Comes With Scale?",
        a: "Scale includes priority support with an SLA and a dedicated success manager. It suits teams that want a named contact alongside unlimited queries, a distributed scrape fleet and per-org API keys.",
      },
    ],
    related: ["/request-access", "/platform-overview", "/faq", "/services/seo-website-audit", "/services/api-access"],
    cta: {
      heading: "Not Sure Which Plan Fits?",
      text: "Request access and we will help you match a plan to your markets and team size.",
      label: "Request Access",
      href: "/request-access",
    },
  },
  {
    path: "/request-access",
    title: "Request Access",
    h1: "Request Access And A LeadGen AI Walkthrough",
    metaTitle: "Request Access: Book a LeadGen AI Walkthrough",
    metaDescription: "Request access to LeadGen AI and arrange a walkthrough of scraping, enrichment, scoring, audits and outreach on a market that matters to your team.",
    eyebrow: "Request Access",
    intro: [
      "Request access using the form on this page and the LeadGen AI team will arrange a walkthrough of the platform. The session shows the full pipeline (search, scraping, enrichment, scoring, audits, opportunity flags and outreach) ideally on a market you actually sell into.",
      "A walkthrough is most useful when we know a little about your team beforehand. The notes below explain what the session covers and how to prepare so you leave with a clear view of fit.",
    ],
    highlights: [
      "Walkthrough on your own market",
      "Covers the full pipeline",
      "Helps you pick the right plan",
    ],
    sections: [
      {
        heading: "What The Walkthrough Covers",
        paragraphs: [
          "We shape the session around your situation, but most walkthroughs cover the same ground.",
        ],
        bullets: [
          "Running a query across Google Maps, LinkedIn and IndiaMART, and how results are merged into one record per business",
          "What enrichment adds and how source traceability works at field level",
          "How the 0–100 score and its stored reasons help you prioritise",
          "An SEO website audit report and the opportunity flags it can trigger",
          "The pipeline board, AI-drafted outreach and sending through your own email transport",
          "Roles, workspaces, CSV export and per-org API keys",
          "Which plan fits your volume, sources and team size",
        ],
      },
      {
        heading: "How To Prepare",
        paragraphs: [
          "A few minutes of preparation makes the session much more useful. When you fill in the form, include as much of the following as you can.",
        ],
        bullets: [
          "Two or three categories and locations you prospect today",
          "The sources that matter most for your buyers",
          "How you prospect now: spreadsheets, a CRM, outsourced lists, and what frustrates you about it",
          "How many people would use the workspace and in what roles",
          "Any review requirements, such as data handling questions from IT",
        ],
      },
      {
        heading: "After The Walkthrough",
        paragraphs: [
          "You can start on the Free plan with 3 queries straight away, or discuss Growth or Scale if the walkthrough shows you need scoring, outreach, more sources or higher volume. Pricing is shared directly rather than published.",
        ],
      },
    ],
    faqs: [
      {
        q: "Who From My Team Should Join The Walkthrough?",
        a: "Ideally the person who owns prospecting day to day and whoever decides on the plan. If IT will review the tool, invite them too or send their questions in advance.",
      },
      {
        q: "Can The Walkthrough Use A Market I Choose?",
        a: "That is the aim. Name the categories and locations in the form so the session reflects your real prospecting.",
      },
      {
        q: "Do I Have To Request Access To Use The Free Plan?",
        a: "No. You can start free on the live site; requesting access is for teams that want a guided evaluation.",
      },
      {
        q: "What Will The Walkthrough Show?",
        a: "Most sessions cover running a query, how results merge into one record, what enrichment adds, the 0–100 score with its reasons, an SEO audit report, opportunity flags, the pipeline board and AI-drafted outreach, plus roles, CSV export and API keys.",
      },
      {
        q: "How Should I Prepare Before The Session?",
        a: "Note two or three categories and locations you prospect today, the sources that matter for your buyers and how you prospect now. Mention what frustrates you about your current process so the session can focus on it.",
      },
      {
        q: "Can IT Raise Data Handling Questions As Part Of The Request?",
        a: "Yes. Add any review requirements to the form. The team can then cover workspaces, roles and traceability during the session, and point you to the documentation that governs the LeadGen AI application if your review needs it.",
      },
      {
        q: "Will I Get Pricing During Or After The Walkthrough?",
        a: "Yes. Pricing is shared directly rather than published on the site. After the session you can start on Free straight away, or discuss Growth or Scale if you need scoring, outreach, more sources or higher volume.",
      },
      {
        q: "What Should I Share About My Team Size?",
        a: "Say how many people would use the workspace and in what roles, such as researchers, sellers or managers. This helps the team show role-based access properly and recommend a plan that fits.",
      },
    ],
    related: ["/how-it-works", "/plans", "/platform-overview", "/contact", "/security-and-data-handling"],
    cta: {
      heading: "Rather Explore On Your Own?",
      text: "Start with three free queries and come back when you want a guided tour.",
      label: "Start Free",
      href: "https://leadgeneration.oxo1.com/",
    },
    form: "demo",
  },
  {
    path: "/faq",
    title: "FAQ",
    h1: "LeadGen AI FAQ: Frequently Asked Questions",
    metaTitle: "LeadGen AI FAQ: Product, Data, Plans",
    metaDescription: "Answers to common questions about LeadGen AI: data sources, enrichment, lead scoring, SEO audits, outreach, team access and the Free, Growth and Scale plans.",
    eyebrow: "FAQ",
    intro: [
      "This page answers the questions people most often ask about LeadGen AI, from where the data comes from to how scoring, audits, outreach and plans work. If your question is not here, the contact page is the quickest way to ask it.",
      "The answers describe what the platform does today. Where a topic depends on your own obligations, such as email compliance, we point to general guidance and suggest checking current rules for your market.",
    ],
    highlights: [
      "Product and data questions",
      "Scoring, audit and outreach answers",
      "Plan and access questions",
    ],
    sections: [
      {
        heading: "Finding The Right Answer Quickly",
        paragraphs: [
          "The questions below run roughly from data, to scoring and audits, to outreach and plans. For deeper explanations, how it works walks through the pipeline stage by stage, data sources covers Google Maps, LinkedIn and IndiaMART in detail, and plans compares the three tiers.",
        ],
      },
      {
        heading: "How These Answers Are Kept Accurate",
        paragraphs: [
          "Every product statement on this page reflects what the live LeadGen AI platform describes about itself. We do not publish prices, so plan questions focus on what each tier includes rather than what it costs. If something here seems to differ from what you see in the application, tell us through the contact page so we can check and correct it.",
        ],
      },
      {
        heading: "If You Are Evaluating For A Team",
        paragraphs: [
          "Reviewers from IT or operations usually want the Security & Data Handling page, which sets out role-based access, multi-tenant workspaces, traceability and manual-edit protection. Sales and compliance leads will find practical guidance on Responsible Prospecting.",
        ],
      },
    ],
    faqs: [
      {
        q: "What Kinds Of Businesses Can I Find With LeadGen AI?",
        a: "Any business that appears in public listings on Google Maps, LinkedIn or IndiaMART. You search by category and location, or by a directory search term.",
      },
      {
        q: "What Information Comes With Each Lead?",
        a: "Business name, category and full postal address; website, listed phone numbers and public emails; ratings, review counts and listing-completeness signals; and the source of each field, plus whatever enrichment adds.",
      },
      {
        q: "Will I Get Duplicate Records When A Business Is Listed On Several Sources?",
        a: "No. Results are normalised into one lead record per business and de-duplicated across sources.",
      },
      {
        q: "Where Do Enriched Email Addresses Come From?",
        a: "From the business’s own website. Enrichment resolves the site, crawls the pages that normally carry contact details and records where each value came from.",
      },
      {
        q: "If I Correct A Lead’s Details By Hand, Will Enrichment Change Them Back?",
        a: "No. Enrichment never overwrites a field you edited by hand, and it writes a field only when the new value is more complete.",
      },
      {
        q: "What Does The 0–100 Lead Score Take Into Account?",
        a: "Record completeness, website health and whether the business is credibly online, fit against your stated market, category and geography, and signals of an active, operating business. The reasons are stored on the record.",
      },
      {
        q: "Which Email Account Sends My Outreach?",
        a: "Your own. Campaigns go out through the email transport you configure, and every message is logged against its lead.",
      },
      {
        q: "Can I Export My Leads?",
        a: "Yes. CSV export from the lead dashboard is included on every plan, and the Scale plan adds per-org API keys.",
      },
    ],
    related: ["/how-it-works", "/data-sources", "/plans", "/security-and-data-handling", "/responsible-prospecting", "/contact"],
    cta: {
      heading: "Still Have A Question?",
      text: "Send us the details and the team will reply by email.",
      label: "Contact",
      href: "/contact",
    },
  },
  {
    path: "/why-leadgen-ai",
    title: "Why LeadGen AI",
    h1: "Why Teams Choose LeadGen AI For Prospecting",
    metaTitle: "Why LeadGen AI: Traceable, Evidence-Based Leads",
    metaDescription: "Why LeadGen AI: one pipeline from scraping to outreach, traceable data, evidence-based lead scoring and audit-led outreach that gives every pitch substance.",
    eyebrow: "Why LeadGen AI",
    intro: [
      "Teams choose LeadGen AI because it replaces a patchwork of scrapers, spreadsheets and email tools with a single pipeline. Every lead is traceable, every score is explained, and every pitch can be based on real facts about the prospect’s business. The difference comes less from any single feature than from how the stages connect.",
      "This page compares that approach with the common alternatives (manual research, bought lists and stitched-together tools) and explains the four ideas that set LeadGen AI apart.",
    ],
    highlights: [
      "Single pipeline, no copy-paste",
      "Traceable data at field level",
      "Scores with stored reasons",
      "Audit-led, evidence-based outreach",
    ],
    sections: [
      {
        heading: "A Single Pipeline Instead Of A Tool Chain",
        paragraphs: [
          "Many teams prospect with one tool to scrape, another to find emails, a spreadsheet to sort, a CRM to track and a mail client to send. Each hand-off loses context and adds copy errors. In LeadGen AI, scraping, enrichment, scoring, audits, opportunity detection, the pipeline board and outreach all work on the same lead record.",
          "Because the record stays in one place, a lead’s history stays attached to it: where it came from, what enrichment found, how it scored, what the audit said and every message sent.",
        ],
      },
      {
        heading: "Traceable Data You Can Defend",
        paragraphs: [
          "Bought lists rarely tell you where a phone number or email came from. LeadGen AI stores the source each field came from, and every job records what it fetched and when. Enrichment reads only the sources you asked for.",
          "That matters when a prospect asks how you found them, when a manager questions list quality, or when you need to correct a record. Manual corrections are protected too: enrichment never overwrites a field you edited by hand.",
        ],
      },
      {
        heading: "Scoring Based On Evidence, Not Guesswork",
        paragraphs: [
          "Prioritising by gut feel or by alphabetical order wastes effort. The LeadGen AI score is a single 0–100 number per lead, built from how complete the record is, website health and credible online presence, fit against your stated market, category and geography, and signs that the business is active and trading.",
          "The reasons are stored on the record, so the score can be challenged and understood rather than taken on trust. Scores recalculate when a lead is re-enriched, keeping priorities current.",
        ],
      },
      {
        heading: "Outreach That Starts From The Prospect’s Situation",
        paragraphs: [
          "Generic cold emails tend to be ignored. LeadGen AI gives you something specific to say. The SEO audit grades a prospect’s website across technical health, content, metadata, structured data and performance, and produces a prioritised fix list you can hand to them. Opportunity detection flags missing websites, non-resolving sites, unreachable listings and weak audits, each with evidence.",
          "AI-drafted outreach then uses the lead’s own enrichment and audit data, so a first message can refer to something real about the business. You send through your own email transport, within sending limits and opt-out obligations.",
        ],
      },
      {
        heading: "How It Compares With The Alternatives",
        paragraphs: [
          "Each approach has its place; the question is which trade-offs suit your team.",
        ],
        bullets: [
          "Manual research: thorough for a handful of accounts, but slow to scale and hard to keep consistent.",
          "Bought lists: fast to obtain, but often stale, opaque about sources and shared with competitors.",
          "Stitched-together tools: flexible, but context is lost between steps and records drift out of sync.",
          "LeadGen AI: one record per business across sources, with enrichment, scoring, audit and outreach attached.",
        ],
      },
    ],
    considerations: {
      heading: "When LeadGen AI May Not Be The Right Fit",
      items: [
        "If your buyers are rarely listed on Google Maps, LinkedIn or IndiaMART, the source coverage may be limited for you.",
        "If you rely on deep integrations with a specific CRM, note that LeadGen AI offers CSV export and per-org API keys rather than named integrations.",
        "Teams that only need a one-off list may not use the scoring, audit and outreach layers enough to justify a paid plan.",
        "Evidence-based outreach still needs human review; AI drafts are a starting point.",
      ],
    },
    example: {
      heading: "Replacing A Spreadsheet Workflow",
      text: "Imagine a web studio in Coimbatore whose founder spends evenings copying listings into a spreadsheet, checking websites by hand and writing emails one by one. With LeadGen AI, the same founder runs a query for boutique hotels, lets enrichment and audits run, filters for leads flagged with no website or a weak audit, and sends drafts that cite each hotel’s specific gaps.",
    },
    faqs: [
      {
        q: "What Makes LeadGen AI Different From Buying A Lead List?",
        a: "You build the list from live public listings for the exact market you define, and every field records its source. A bought list is fixed at the moment it was put together and rarely shows where its data came from.",
      },
      {
        q: "Does Evidence-Based Outreach Really Need An Audit For Every Lead?",
        a: "Not always. Audits are most useful when you sell web, SEO or digital services. Other teams may lean on the score, enrichment data and opportunity flags instead.",
      },
      {
        q: "Can I Keep Using My Existing CRM Alongside LeadGen AI?",
        a: "Yes. Many teams prospect and qualify in LeadGen AI and move chosen leads into another system via CSV export, or via per-org API keys on the Scale plan.",
      },
      {
        q: "When Might LeadGen AI Not Be The Right Fit?",
        a: "If your buyers rarely appear on Google Maps, LinkedIn or IndiaMART, source coverage may be limited. Teams that only need a one-off list, or depend on deep named CRM integrations, may also find another approach suits them better.",
      },
      {
        q: "How Does A Single Pipeline Reduce Errors?",
        a: "Every stage works on the same lead record, so nothing is copied between a scraper, a spreadsheet, a CRM and a mail client. That removes copy errors and keeps each lead’s history, score, audit and messages attached to it.",
      },
      {
        q: "Can A Lead Score Be Questioned By My Team?",
        a: "Yes. The reasons behind each 0–100 score are stored on the record, so sellers and managers can see why a lead ranks where it does and challenge it. Scores also recalculate when a lead is re-enriched.",
      },
      {
        q: "How Is This Better Than Manual Research?",
        a: "Manual research is thorough for a handful of accounts but slow to scale and hard to keep consistent. LeadGen AI applies the same gathering, enrichment and scoring to every lead, leaving you time to review the ones that matter.",
      },
      {
        q: "What Gives An Outreach Message Real Substance?",
        a: "Specific evidence about the prospect, such as audit findings or an opportunity flag like a missing website. AI drafts use the lead’s own enrichment and audit data, so a first message can refer to something real, though it still needs human review.",
      },
    ],
    related: ["/how-it-works", "/about", "/services/source-traceability", "/services/ai-lead-scoring", "/services/business-opportunity-detection", "/plans"],
    cta: {
      heading: "Judge The Difference On Real Records",
      text: "Request access and compare LeadGen AI with how you prospect today.",
      label: "Request Access",
      href: "/request-access",
    },
  },
  {
    path: "/data-sources",
    title: "Data Sources",
    h1: "LeadGen AI Data Sources: Google Maps, LinkedIn And IndiaMART",
    metaTitle: "Data Sources: Google Maps, LinkedIn, IndiaMART",
    metaDescription: "How LeadGen AI gathers leads from Google Maps, LinkedIn and IndiaMART, normalises them into one record per business and removes duplicates across sources.",
    eyebrow: "Data Sources",
    intro: [
      "LeadGen AI draws its leads from three public sources (Google Maps, LinkedIn and IndiaMART) and turns their listings into one normalised, de-duplicated record per business. A single query fans out to each enabled source, so you describe your market once and get a merged list back.",
      "This page explains what each source is good for, which fields a lead carries, how normalisation and de-duplication work, and how traceability lets you see where every value came from.",
    ],
    highlights: [
      "Three sources, one query",
      "One record per business",
      "Source recorded for every field",
      "Jobs logged with what and when",
    ],
    sections: [
      {
        heading: "Google Maps: Local And Location-Led Markets",
        paragraphs: [
          "Google Maps is the natural source for businesses that serve customers in a place, such as clinics, restaurants, contractors, retailers, studios and professional firms. A query is typically a category and a location. Listings often carry a website, phone number, address, ratings and review counts, and listing-completeness signals help show how actively a business manages its presence.",
        ],
      },
      {
        heading: "LinkedIn: Company Context For B2B Selling",
        paragraphs: [
          "LinkedIn adds company context that is especially useful for B2B prospecting, where understanding the organisation matters as much as finding a phone number. It is listed among the multiple sources available on the Scale plan. As with any professional network, use it within the platform’s terms and with care for how you approach people.",
        ],
      },
      {
        heading: "IndiaMART: Suppliers And B2B Sellers In India",
        paragraphs: [
          "IndiaMART is a large B2B directory for Indian suppliers, manufacturers and traders. Queries here work best as directory search terms that match how suppliers describe their products. It suits distributors looking for partners, service providers selling to MSMEs and anyone mapping a supply category. IndiaMART is also listed among the Scale plan’s sources.",
        ],
      },
      {
        heading: "Normalisation And De-Duplication",
        paragraphs: [
          "Different sources describe the same business in different ways. LeadGen AI normalises results into a consistent lead record and de-duplicates across sources, so a business listed on Google Maps and IndiaMART appears once rather than twice.",
          "Each record carries the business name, category and full postal address; website, listed phone numbers and public email addresses; ratings, review counts and listing-completeness signals; and the source each field came from. Enrichment then builds on that base from the business’s own website.",
        ],
      },
      {
        heading: "Writing Queries That Return Useful Lists",
        paragraphs: [
          "The quality of a source list depends heavily on the query. Teams often find that specific categories work better than broad ones (“orthodontist” rather than “healthcare”), and that a city or district returns a more manageable list than a whole state. For directories, try the words suppliers actually use in their product titles, and run a couple of variants to see which brings back the most relevant businesses.",
          "It also helps to review a sample before running many queries. Check whether the categories match what you expected, whether listings carry websites and phone numbers, and how much enrichment will need to fill in.",
        ],
      },
      {
        heading: "Traceability, Jobs And Quotas",
        paragraphs: [
          "Because every field records its source, you can always answer the question “where did this come from?”. Every job records what it fetched and when. Long jobs run on a worker fleet and keep going after you close the tab, and quotas are enforced per plan and per billing cycle.",
        ],
      },
    ],
    steps: {
      heading: "From Query To Merged List",
      items: [
        { title: "Choose Your Sources", text: "Enable the sources your plan includes and that match where your buyers are listed." },
        { title: "Write The Query", text: "Use a category and location for map-style sources, or a search term for directories." },
        { title: "Let The Job Run", text: "Workers gather listings in the background and log what they fetch." },
        { title: "Review The Merged Records", text: "Check the de-duplicated list and the per-field sources before enrichment fills gaps." },
      ],
    },
    considerations: {
      heading: "Limits Of Public Listing Data",
      items: [
        "Listings are only as current as the business keeps them; some will be outdated or incomplete.",
        "Coverage varies by market: some categories and regions are listed more thoroughly than others.",
        "LinkedIn and IndiaMART are listed as Scale-plan sources, so check what your plan includes.",
        "Public availability does not remove your obligations; follow each platform’s terms and applicable law.",
      ],
    },
    example: {
      heading: "Combining Two Sources",
      text: "Suppose a packaging supplier in Ludhiana wants food manufacturers in Punjab. It runs a Google Maps query by category and location and an IndiaMART search term for the same products. Businesses found on both appear once, with each field showing whether it came from the map listing or the directory.",
    },
    faqs: [
      {
        q: "Which Source Should I Start With?",
        a: "Start where your buyers are most visible: Google Maps for local, location-led businesses; IndiaMART for Indian suppliers and traders; LinkedIn for B2B company context.",
      },
      {
        q: "How Does The Platform Decide Two Listings Are The Same Business?",
        a: "Results are normalised into a consistent record and de-duplicated across sources, so the same business found on different platforms is merged into one lead.",
      },
      {
        q: "Can I See Which Source Supplied A Particular Phone Number?",
        a: "Yes. Every lead records the source each field came from, including values added later by enrichment.",
      },
      {
        q: "How Do I Write A Good IndiaMART Search Term?",
        a: "Use the words suppliers actually put in their product titles rather than broad industry labels. Run a couple of variants and compare which one brings back the most relevant businesses before running many queries.",
      },
      {
        q: "Why Does My Google Maps Query Return Too Many Irrelevant Results?",
        a: "Broad categories and large areas produce broad lists. Specific categories usually work better, such as “orthodontist” rather than “healthcare”, and a city or district gives a more manageable list than a whole state.",
      },
      {
        q: "Are Listings Always Up To Date?",
        a: "No. Listings are only as current as each business keeps them, and coverage varies by category and region. Review a sample before scaling up, and let enrichment fill gaps from the business’s own website.",
      },
      {
        q: "Which Plan Includes LinkedIn And IndiaMART?",
        a: "Both are listed among the multiple sources available on the Scale plan. Check which sources your plan includes before building a workflow around them.",
      },
      {
        q: "Does Public Listing Data Remove My Obligations When Contacting Businesses?",
        a: "No. Public availability does not remove your obligations. Follow each source platform’s terms and the laws that apply to your outreach, and take care with any details that identify individuals.",
      },
    ],
    related: ["/services/multi-source-lead-scraping", "/services/google-maps-lead-extraction", "/services/indiamart-lead-extraction", "/services/lead-de-duplication", "/services/source-traceability", "/how-it-works"],
    cta: {
      heading: "Try A Query On Your Market",
      text: "See how listings from your sources merge into clean records.",
      label: "Start Free",
      href: "https://leadgeneration.oxo1.com/",
    },
  },
  {
    path: "/security-and-data-handling",
    title: "Security & Data Handling",
    h1: "Security And Data Handling In LeadGen AI",
    metaTitle: "Security & Data Handling at LeadGen AI",
    metaDescription: "How LeadGen AI handles data: role-based access, multi-tenant workspaces, per-org API keys, per-field source traceability, manual-edit protection and job logs.",
    eyebrow: "Security",
    intro: [
      "LeadGen AI handles prospect data through multi-tenant, role-based workspaces, per-org API keys, per-field source traceability, protection for manual edits, job records and per-plan quotas. This page sets out those controls for IT and operations reviewers, and only states what we can confirm the platform does.",
      "We do not list encryption standards, certifications or hosting regions here. If your review needs those details, contact the team and ask for the documentation that governs the LeadGen AI application.",
    ],
    highlights: [
      "Multi-tenant, role-based workspaces",
      "Per-org API keys on Scale",
      "Per-field source traceability",
      "Manual edits never overwritten",
    ],
    sections: [
      {
        heading: "Workspace Separation And Role-Based Access",
        paragraphs: [
          "LeadGen AI is multi-tenant: each organisation works in its own workspace. Within a workspace, role-based access means each team sees the records it should. The Growth plan includes full team access with seven role modules; the Free plan has a single admin user.",
          "Reviewers usually want to map roles to job functions (for example researchers, sellers and managers) so that access follows the principle of least privilege as closely as your team structure allows.",
        ],
      },
      {
        heading: "API Access Scoped To Your Organisation",
        paragraphs: [
          "On the Scale plan, programmatic access uses per-org API keys. Keys belong to your organisation rather than being shared across customers. As with any credential, treat them as secrets: store them in a secure location, limit who can see them and replace them if you suspect exposure.",
        ],
      },
      {
        heading: "Traceability Of Every Field And Job",
        paragraphs: [
          "Every lead records the source each field came from, including values added by enrichment. Every scraping job records what it fetched and when. Enrichment reads only the sources the user asked for.",
          "Together, these give reviewers an audit trail for prospect data: you can explain where a value originated and when it entered the workspace.",
        ],
      },
      {
        heading: "Protection For Human Corrections",
        paragraphs: [
          "Automated enrichment writes a field only when the new value is more complete than the existing one, and it never overwrites a field a user edited by hand. This prevents automated processes from silently undoing corrections your team has made.",
        ],
      },
      {
        heading: "Questions Reviewers Commonly Raise",
        paragraphs: [
          "IT and operations reviewers tend to ask the same few questions about any prospecting tool: who can see the data, where it came from, whether automation can corrupt it, and how it leaves the system. LeadGen AI’s answers are kept simple. Visibility is governed by workspaces and roles. Origin is recorded per field and per job. Automation only fills in more complete values and leaves manual edits alone. Data leaves through CSV export, per-org API keys on scale, and outreach sent through your own email transport.",
          "Where a review asks about controls not described here, such as infrastructure, encryption or formal attestations, treat this page as incomplete for that purpose and request the relevant documentation from the team rather than assuming either way.",
        ],
      },
      {
        heading: "Quotas, Outreach Logging And User Control",
        paragraphs: [
          "Quotas are enforced per plan and per billing cycle, which limits how much data a workspace can gather. On the outreach side, campaigns are sent through the user’s own configured email transport, every message is logged against its lead, and outreach respects sending limits and opt-out obligations, with the user in control of the list.",
        ],
      },
    ],
    steps: {
      heading: "A Practical Review Checklist",
      items: [
        { title: "Map Roles", text: "List who needs access and assign role modules to match job functions." },
        { title: "Decide On API Use", text: "If you are on Scale, agree who holds per-org API keys and how they are stored." },
        { title: "Confirm Your Email Transport", text: "Review the sending account outreach will use and your opt-out process." },
        { title: "Request Application Documents", text: "Ask the team for the policies that govern the LeadGen AI application itself." },
      ],
    },
    considerations: {
      heading: "What Remains Your Responsibility",
      items: [
        "Granting the right roles and removing access when people leave.",
        "Keeping API keys and email transport credentials secure.",
        "Deciding lawful and appropriate uses of prospect data in your jurisdictions.",
        "Requesting the application’s own policy and security documentation if your review requires it.",
      ],
    },
    faqs: [
      {
        q: "Does This Page Describe Encryption Or Certifications?",
        a: "No. We only state controls we can verify here. Contact the team for documentation on topics such as encryption, certifications or hosting.",
      },
      {
        q: "Can One Customer See Another Customer’s Leads?",
        a: "The platform is multi-tenant, with each organisation in its own workspace and role-based access within it.",
      },
      {
        q: "How Can I Show Where A Lead’s Data Originated During An Internal Audit?",
        a: "Use the per-field source records on the lead and the job record showing what was fetched and when.",
      },
      {
        q: "How Should We Store Per-Org API Keys?",
        a: "Treat them as secrets. Keep them in a secure location, limit who can see them and replace them if you suspect exposure. Keys belong to your organisation and are available on the Scale plan.",
      },
      {
        q: "Can Automated Enrichment Overwrite Our Manual Corrections?",
        a: "No. Enrichment writes a field only when the new value is more complete, and it never overwrites a field a user edited by hand. This stops automated processes from silently undoing your team’s fixes.",
      },
      {
        q: "In What Ways Can Data Leave The Platform?",
        a: "Through CSV export from the lead dashboard, through per-org API keys on the Scale plan, and through outreach sent via your own configured email transport. Every outreach message is logged against its lead.",
      },
      {
        q: "What Should We Do When Someone Leaves The Team?",
        a: "Remove their access promptly and review whether any API keys or email transport credentials they could see should be replaced. Managing roles and access remains your responsibility.",
      },
      {
        q: "How Can Roles Follow The Principle Of Least Privilege?",
        a: "Map role modules to job functions, such as researchers, sellers and managers, and give each person only the access their work needs. Growth includes full team access with seven role modules to support this.",
      },
    ],
    related: ["/platform-overview", "/services/role-based-team-access", "/services/multi-tenant-workspaces", "/services/source-traceability", "/responsible-prospecting", "/contact"],
    cta: {
      heading: "Need More Detail For Your Review?",
      text: "Contact the team for the documentation that governs the LeadGen AI application.",
      label: "Contact",
      href: "/contact",
    },
  },
  {
    path: "/responsible-prospecting",
    title: "Responsible Prospecting",
    h1: "Responsible Prospecting With Public Business Data",
    metaTitle: "Responsible Prospecting: Public Data, Opt-Outs",
    metaDescription: "Good practice for prospecting with public business data: relevance, consent, opt-outs, sending limits and how LeadGen AI supports responsible outreach.",
    eyebrow: "Good Practice",
    intro: [
      "Responsible prospecting means contacting businesses that have a plausible reason to want what you offer, using data they have made public, through channels and volumes that respect them and the law. A tool can make outreach faster; it cannot make careless outreach acceptable.",
      "This page offers general guidance for sales and compliance teams and explains how LeadGen AI’s design supports good practice. It is not legal advice: rules differ by country and channel, so check current requirements and take legal advice for your situation.",
    ],
    highlights: [
      "Relevance before volume",
      "Honour every opt-out",
      "Stay within sending limits",
      "Know where your data came from",
    ],
    sections: [
      {
        heading: "Using Public Business Data Thoughtfully",
        paragraphs: [
          "LeadGen AI gathers information that businesses publish in listings on Google Maps, LinkedIn and IndiaMART and on their own websites. Public availability is a starting point, not a blanket permission. Teams often apply a simple test: would this business reasonably expect to be contacted about this offer at this address?",
          "Business contact routes, such as a published business email or switchboard number, generally raise fewer concerns than personal details. Be cautious with anything that identifies an individual, and follow the terms of each source platform.",
        ],
      },
      {
        heading: "Consent And Lawful Basis",
        paragraphs: [
          "Different jurisdictions treat business-to-business outreach differently. Some rely on legitimate interest for relevant B2B contact, others require prior consent for certain channels, and rules for SMS or calls can be stricter than for email. Laws such as GDPR in Europe, CAN-SPAM in the United States and India’s DPDP Act each set their own expectations.",
          "Because the details change and depend on context, document your reasoning for each campaign and seek legal advice where you are unsure.",
        ],
      },
      {
        heading: "Opt-Outs And Sending Limits",
        paragraphs: [
          "An easy, honoured opt-out is a basic expectation in most markets. Make it simple to decline further contact, act on requests promptly and keep a suppression list so people who opt out are not contacted again from another list.",
          "Volume matters too. Sending large batches from a new or cold mailbox harms deliverability and can look like spam. LeadGen AI outreach respects sending limits and opt-out obligations, and campaigns go through your own configured email transport, so your domain’s reputation is at stake. That is another reason not to rush.",
        ],
      },
      {
        heading: "Relevance And Honesty In The Message",
        paragraphs: [
          "The most respectful outreach is relevant. Audit findings, opportunity flags and enrichment data let you write about something real, such as a broken website, missing structured data or an unreachable listing. Keep claims accurate, identify yourself clearly and avoid misleading subject lines.",
          "AI-drafted messages in LeadGen AI use the lead’s own data, but they are drafts. Review each one before it is sent.",
        ],
      },
      {
        heading: "How LeadGen AI Supports Good Practice",
        paragraphs: [
          "Several platform features make it easier to keep prospecting responsibly.",
        ],
        bullets: [
          "Every field records its source, so you can answer “how did you get my details?” honestly.",
          "Enrichment reads only the sources you asked for and never overwrites fields edited by hand.",
          "Every message is logged against its lead, giving a record of who was contacted and when.",
          "You stay in control of the list, and outreach respects sending limits and opt-out obligations.",
        ],
      },
    ],
    steps: {
      heading: "A Responsible Campaign Routine",
      items: [
        { title: "Define A Relevant Audience", text: "Choose categories and locations where your offer genuinely fits." },
        { title: "Check Your Basis For Contact", text: "Confirm the rules for your channel and the recipients’ jurisdiction." },
        { title: "Clean And Suppress", text: "Remove opt-outs and records you shouldn’t contact before sending." },
        { title: "Review Every Draft", text: "Make sure each message is accurate, specific and clearly identifies you." },
        { title: "Send In Measured Batches", text: "Respect sending limits and watch replies and opt-outs closely." },
      ],
    },
    considerations: {
      heading: "Common Pitfalls",
      items: [
        "Treating public data as consent for any type of contact.",
        "Re-importing lists without applying your suppression list.",
        "Sending unreviewed AI drafts that make inaccurate claims about a prospect.",
        "Scaling volume faster than your mailbox reputation can support.",
        "Assuming rules in one country apply in another.",
      ],
    },
    example: {
      heading: "Handling A Reply That Asks How You Found Them",
      text: "Imagine an accounting practice in Nagpur replies to an outreach email asking where its address came from. The sender checks the lead record, sees the email was found on the practice’s own contact page during enrichment, explains that politely and, when asked, adds the practice to the suppression list.",
    },
    faqs: [
      {
        q: "Is It Acceptable To Email A Business Just Because Its Address Is Public?",
        a: "Not automatically. Relevance, the channel, the recipient’s jurisdiction and your basis for contact all matter. Check the rules that apply and take advice if unsure.",
      },
      {
        q: "How Should We Handle An Opt-Out Request Received By Phone?",
        a: "Treat it the same as an email unsubscribe: record it, add the contact to your suppression list and make sure no future campaign reaches them.",
      },
      {
        q: "Does LeadGen AI Make Our Outreach Compliant Automatically?",
        a: "No tool can. The platform respects sending limits and opt-out obligations and keeps records, but compliance depends on your audience, content and process.",
      },
      {
        q: "Why Keep A Suppression List?",
        a: "A suppression list stops people who opted out from being contacted again when they appear in a new query or import. Apply it before every campaign, not just the first one.",
      },
      {
        q: "How Quickly Should We Increase Sending Volume?",
        a: "Gradually. Large batches from a new or cold mailbox harm deliverability and can look like spam. Because outreach goes through your own email transport, your domain’s reputation is at stake, so send in measured batches and watch replies and opt-outs.",
      },
      {
        q: "What Should We Say If A Prospect Asks How We Got Their Details?",
        a: "Check the lead record, which shows the source of each field, and explain honestly, for example that the email was found on their own contact page. If they ask not to be contacted, add them to your suppression list.",
      },
      {
        q: "Do The Same Rules Apply In Every Country?",
        a: "No. Laws such as GDPR in Europe, CAN-SPAM in the United States and India’s DPDP Act set different expectations, and rules for calls or SMS can be stricter than for email. Check current requirements for each recipient’s jurisdiction.",
      },
      {
        q: "Are Personal Details Treated Differently From Business Contact Routes?",
        a: "Generally, yes. A published business email or switchboard number usually raises fewer concerns than details that identify an individual. Be cautious with personal information and follow the terms of each source platform.",
      },
    ],
    related: ["/security-and-data-handling", "/services/ai-outreach-campaigns", "/services/outreach-activity-logging", "/services/source-traceability", "/data-sources"],
    cta: {
      heading: "Talk Through Your Outreach Process",
      text: "Request access and we will show how logging, traceability and limits work in practice.",
      label: "Request Access",
      href: "/request-access",
    },
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy",
    h1: "Website Privacy Policy",
    metaTitle: "Privacy Policy: LeadGen AI Website",
    metaDescription: "How the LeadGen AI marketing website handles your information: contact and request-access form data, theme preference storage and no installed analytics.",
    eyebrow: "Legal",
    intro: [
      "This policy explains what information this LeadGen AI marketing website collects, why, and what choices you have. In short: the site collects what you submit in the contact and request-access forms, stores your theme preference in your own browser, and does not run analytics.",
      "This policy covers this website only. It does not govern the LeadGen AI application. For the authoritative policy that applies to your use of the application, please contact LeadGen AI through the contact page.",
    ],
    highlights: [
      "Form submissions only",
      "Theme stored in your browser",
      "No analytics installed",
    ],
    sections: [
      {
        heading: "Information This Website Collects",
        paragraphs: [
          "When you use the contact form or the request-access form, we receive the details you enter: your name, work email, phone number with its country code, company (optional), topic and message. Please don’t include sensitive personal information or credentials in these forms.",
          "To block spam, the server briefly checks your IP address against a short-term submission limit and checks how long the form took to fill in. These checks are held in memory for a few minutes and are not stored with your submission.",
          "The site remembers whether you prefer a light or dark theme by storing that choice in your browser’s localStorage. This value stays on your device and is not sent to us. No analytics or advertising trackers are installed on this website.",
        ],
      },
      {
        heading: "How We Use It",
        paragraphs: [
          "We use form submissions to reply to your enquiry, to arrange a walkthrough if you request access, and to keep a record of our correspondence with you. We do not sell form submissions.",
          "Submissions are passed to the service we use to receive and manage enquiries, so the team can read and reply to them.",
        ],
      },
      {
        heading: "Retention",
        paragraphs: [
          "We keep form submissions for as long as needed to handle your enquiry and any resulting relationship, and then delete or anonymise them when they are no longer needed. You can clear the theme preference at any time by clearing your browser’s site data.",
        ],
      },
      {
        heading: "Your Choices And Rights",
        paragraphs: [
          "Depending on where you live, you may have rights to access, correct or delete the personal information you have sent us, or to object to how it is used. To make a request, use the contact page. We will respond within a reasonable time and may need to confirm your identity.",
        ],
      },
      {
        heading: "Changes And Contact",
        paragraphs: [
          "We may update this policy if the website changes, for example if a new form or tool is added, and will revise this page when we do. Questions about this policy, or requests for the policy governing the LeadGen AI application, can be sent through the contact page.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does This Website Use Cookies For Tracking?",
        a: "No analytics are installed. The only stored preference is your theme choice, kept in your browser’s localStorage.",
      },
      {
        q: "Does This Policy Cover Data Inside The LeadGen AI Application?",
        a: "No. It covers this marketing website only. Contact LeadGen AI for the authoritative policy that governs the application.",
      },
      {
        q: "How Do I Ask For My Form Submission To Be Deleted?",
        a: "Send a request through the contact page, using the same email address you used in the original form if possible.",
      },
      {
        q: "What Information Do The Website Forms Collect?",
        a: "The contact and request-access forms collect what you enter: your name, work email, phone number, optional company, topic and message. Please don’t include sensitive personal information or credentials in these forms.",
      },
      {
        q: "Is My Form Submission Sold To Anyone?",
        a: "No. This policy states that form submissions are not sold. They are used to reply to your enquiry, arrange a walkthrough if you request access and keep a record of our correspondence with you.",
      },
      {
        q: "How Long Are Form Submissions Kept?",
        a: "The policy says they are kept for as long as needed to handle your enquiry and any resulting relationship, then deleted or anonymised when no longer needed. It does not set a fixed period.",
      },
      {
        q: "How Do I Clear My Saved Theme Preference?",
        a: "Your light or dark theme choice is stored in your browser’s localStorage and stays on your device. You can remove it at any time by clearing this site’s data in your browser settings.",
      },
      {
        q: "Why Might You Ask Me To Confirm My Identity?",
        a: "When you ask to access, correct or delete information, confirming your identity helps make sure the request really comes from you. Depending on where you live, the rights available to you may vary.",
      },
    ],
    related: ["/terms-of-use", "/contact", "/security-and-data-handling", "/responsible-prospecting"],
    cta: {
      heading: "Questions About Your Data?",
      text: "Get in touch and we will respond by email.",
      label: "Contact",
      href: "/contact",
    },
  },
  {
    path: "/terms-of-use",
    title: "Terms Of Use",
    h1: "Website Terms Of Use",
    metaTitle: "Terms of Use: LeadGen AI Website",
    metaDescription: "The terms for using the LeadGen AI marketing website: permitted use, content accuracy, acceptable behaviour, limits of liability and how these terms change.",
    eyebrow: "Legal",
    intro: [
      "These terms govern your use of this LeadGen AI marketing website. By using the site, you agree to use it lawfully and in line with the conditions below. If you do not agree, please do not use the site.",
      "These terms cover the website only. Use of the LeadGen AI application is governed by separate terms; contact LeadGen AI through the contact page for the authoritative documents that apply to the application.",
    ],
    highlights: [
      "Applies to this website only",
      "Content is general information",
      "Use the site lawfully",
    ],
    sections: [
      {
        heading: "Using This Website",
        paragraphs: [
          "You may browse the site, read its content and use its forms to contact LeadGen AI or request access. You may share links to pages and quote short passages with attribution.",
        ],
      },
      {
        heading: "About The Content",
        paragraphs: [
          "Product descriptions on this site reflect the LeadGen AI platform as we understand it at the time of writing, and features or plans may change. Educational articles offer general guidance on lead generation; they are not legal, financial or professional advice. Examples are illustrative and do not describe real customers. Regulatory topics are summarised only in general terms, so check current rules and take advice for your circumstances.",
        ],
      },
      {
        heading: "Acceptable Use",
        paragraphs: [
          "When using this site, please do not:",
        ],
        bullets: [
          "Submit false, misleading or unlawful information through its forms",
          "Attempt to disrupt, overload or gain unauthorised access to the site",
          "Copy substantial parts of the site’s content for republication without permission",
          "Use the site to send spam or to harvest information about others",
        ],
      },
      {
        heading: "Limitation Of Liability",
        paragraphs: [
          "The website is provided as it is, for general information. To the extent permitted by law, LeadGen AI is not liable for losses arising from reliance on the site’s content or from the site being unavailable. Links to external sites are provided for convenience, and we are not responsible for their content. Nothing in these terms limits rights you have under law that cannot be excluded.",
        ],
      },
      {
        heading: "Changes To These Terms",
        paragraphs: [
          "We may update these terms from time to time, and the version on this page applies from the time it is published. Questions about these terms can be sent through the contact page.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do These Terms Apply To My LeadGen AI Account?",
        a: "No. They apply to this website only. Contact LeadGen AI for the terms that govern the application.",
      },
      {
        q: "Can I Quote Content From This Website In My Own Article?",
        a: "Short quotations with attribution and a link are fine. For larger reuse, please ask through the contact page.",
      },
      {
        q: "Are The Examples On This Site Real Customer Stories?",
        a: "No. Examples are illustrative scenarios written to explain ideas, and they do not describe real businesses.",
      },
      {
        q: "Can I Rely On Articles On This Site As Legal Advice?",
        a: "No. Educational articles offer general guidance on lead generation and are not legal, financial or professional advice. Regulatory topics are summarised only in general terms, so check current rules and take advice for your circumstances.",
      },
      {
        q: "Are Product Descriptions On This Site Guaranteed To Stay The Same?",
        a: "No. They reflect the platform as understood at the time of writing, and features or plans may change. If something matters to your decision, confirm the current details with the team.",
      },
      {
        q: "What Kinds Of Use Are Not Allowed On This Website?",
        a: "Submitting false or unlawful information through the forms, trying to disrupt or gain unauthorised access to the site, republishing substantial content without permission, and using the site to send spam or harvest information about others.",
      },
      {
        q: "Is LeadGen AI Responsible For Linked External Websites?",
        a: "No. Links to external sites are provided for convenience, and these terms state that LeadGen AI is not responsible for their content. Review each external site’s own terms before relying on it.",
      },
      {
        q: "How Will I Know If These Terms Change?",
        a: "Updated terms are published on this page, and the version shown here applies from the time it is published. Check back occasionally, and send any questions through the contact page.",
      },
    ],
    related: ["/privacy-policy", "/contact", "/responsible-prospecting", "/about"],
    cta: {
      heading: "Have A Question About These Terms?",
      text: "Send us a message and the team will reply.",
      label: "Contact",
      href: "/contact",
    },
  },
];
