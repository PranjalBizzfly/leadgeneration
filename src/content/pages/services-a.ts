import type { PageContent } from "../types";

export const pages: PageContent[] = [
  {
    path: "/services",
    title: "Services",
    h1: "LeadGen AI Platform Services: From Discovery To Outreach",
    metaTitle: "Platform Services: Discover, Enrich, Qualify, Engage",
    metaDescription:
      "Explore every LeadGen AI capability grouped into five clusters (Discover, Enrich, Qualify, Engage and Operate) and see how the modules connect.",
    eyebrow: "Services",
    intro: [
      "LeadGen AI is a prospect intelligence platform that runs one connected pipeline. It finds businesses across Google Maps, LinkedIn and IndiaMART, adds contact details to each record, scores and audits it, and flags sales opportunities. Your team then works the result in a CRM pipeline with AI-drafted outreach. This page Maps every service into five clusters so you can see what each module does and how it hands off to the next.",
      "You do not need to adopt everything at once. Most teams start with a single query and a CSV export, then add scoring, audits and outreach as their process matures. The clusters below explain what sits where, which plan includes it, and how to choose a sensible starting point.",
    ],
    highlights: [
      "One query fans out to three sources",
      "Every field traceable to its source",
      "Scores stored with their reasons",
      "Outreach sent through your own transport",
    ],
    sections: [
      {
        heading: "Discover: Finding The Businesses Worth Knowing About",
        paragraphs: [
          "Discovery turns a search (a category and a location, or a directory search term) into lead records. One query fans out to each enabled source, and results are normalised into one record per business with duplicates merged across sources. Large jobs run on a worker fleet, so a scrape keeps going after you close the tab.",
        ],
        bullets: [
          "Multi-Source Lead Scraping, Google Maps Lead Extraction, LinkedIn Lead Enrichment and IndiaMART Lead Extraction",
          "Distributed Scrape Fleet for long, high-volume jobs",
          "Lead List Building and Local Business Prospecting as applied workflows",
        ],
      },
      {
        heading: "Enrich: Completing Each Record With Reachable Contact Routes",
        paragraphs: [
          "New leads are queued for enrichment automatically. The platform finds the website, crawls the pages that usually list contact details and compares what it finds with the existing record. It only writes a field when the new value is more complete. Manual edits are never overwritten.",
        ],
        bullets: [
          "AI Contact Enrichment, Business Email Discovery, Phone Number Validation",
          "Website Enrichment and Social Profile Enrichment",
          "Lead De-duplication, Lead Data Normalisation and Source Traceability",
        ],
      },
      {
        heading: "Qualify: Deciding Who Deserves Attention First",
        paragraphs: [
          "Qualification modules turn raw records into a prioritised list. AI lead scoring gives each lead a single 0–100 score with the reasons stored on the record. The SEO website audit grades a prospect’s site across technical health, content, metadata, structured data and performance. Business opportunity detection flags missing websites, sites that don’t resolve, listings with no reachable contact route and weak audits, each with its evidence.",
        ],
        bullets: [
          "AI Lead Scoring, Sales Prioritisation and Prospect Research",
          "SEO Website Audit and Opportunity Reports",
          "Business Opportunity Detection and Missing Website Detection",
          "Agency Client Prospecting, Website Redesign Prospecting and SEO Agency Lead Generation",
        ],
      },
      {
        heading: "Engage: Working Leads Through A Pipeline And Outreach",
        paragraphs: [
          "Engagement happens on a pipeline board with stages, owners and full activity history. Outreach drafts are written from the lead’s own enrichment and audit data, campaigns are sent through your configured email transport, and every message is logged against its lead. Sending limits and opt-out obligations are respected, and you stay in control of the list.",
        ],
        bullets: [
          "CRM Pipeline Management",
          "AI Outreach Campaigns and AI-Drafted Outreach Messages",
          "Outreach Activity Logging",
        ],
      },
      {
        heading: "Operate: Access, Data Movement And Administration",
        paragraphs: [
          "Operational services keep the platform usable across teams and tools. Role-based access controls who sees which records. Multi-tenant workspaces keep organisations separate. The lead dashboard gives every user sortable and filterable views. CSV export moves data into other systems, and per-org API keys on the Scale plan support programmatic integration.",
        ],
        bullets: [
          "Lead Dashboard and CSV Lead Export",
          "Role-Based Team Access and Multi-Tenant Workspaces",
          "API Access",
        ],
      },
      {
        heading: "How Plans Map To The Clusters",
        paragraphs: [
          "The Free plan covers the basics of Discover and Enrich: 3 scrape queries, website enrichment, the lead dashboard and CSV export for one admin user. Growth adds 50 scrape queries per month, AI lead scoring and outreach, full team access with 7 role modules, and SEO and website-build reports. Scale adds unlimited queries, a distributed scrape fleet, the LinkedIn and IndiaMART sources, per-org API keys, priority support with an SLA and a dedicated success manager. Prices are shared on request rather than published here.",
        ],
      },
    ],
    steps: {
      heading: "Choosing Where To Start",
      items: [
        { title: "Name One Market", text: "Pick a single category and geography you already sell into, so early results are easy to judge." },
        { title: "Run A Discovery Query", text: "Use a free query to see what the sources return and how complete the records are after enrichment." },
        { title: "Export Or Score", text: "On Free, export to CSV and work the list in your existing tools; on Growth, sort by score and review the stored reasons." },
        { title: "Add Audits For Service Sales", text: "If you sell web, SEO or marketing services, use audits and opportunity flags as the evidence behind each pitch." },
        { title: "Move The Top Band Into The Pipeline", text: "Assign owners, draft outreach from the lead’s data, review it, and send through your own email transport." },
      ],
    },
    considerations: {
      heading: "Before You Commit",
      items: [
        "LinkedIn and IndiaMART sources are part of the Scale plan; Free and Growth teams work mainly with Google Maps Data.",
        "Data quality depends on what businesses publish. Enrichment can only add contact details that are publicly available.",
        "Scoring and outreach are Growth features, so a Free trial shows discovery and enrichment, not the full pipeline.",
        "Outreach still needs a configured email transport and your own judgement about who to contact and how often.",
        "Named third-party CRM integrations are not offered; data moves out through CSV export, or through per-org API keys on Scale.",
      ],
    },
    example: {
      heading: "A Small Agency Mapping Its First Month",
      text: "Imagine a four-person digital agency in Indore that wants local clinic clients. In week one it runs a single Google Maps query for clinics in two neighbourhoods and lets enrichment fill in websites and public emails. In week two it upgrades to Growth, sorts by score and opens audits on the top fifty. Opportunity flags highlight a dozen clinics with no working website. The team moves those into the pipeline, assigns owners and sends reviewed, audit-based drafts through its own email account.",
    },
    faqs: [
      { q: "Do I Have To Use Every Module Together?", a: "No. Each module is useful on its own. Many teams use discovery and CSV export first and add scoring, audits and outreach later. The pipeline simply makes handoffs easier when you do combine them." },
      { q: "Which Cluster Should A Web Design Studio Start With?", a: "Discover plus Qualify. A local query followed by audits and missing-website flags gives a studio a list of businesses with visible, evidenced website problems to talk about." },
      { q: "Where Do I See What Each Plan Includes?", a: "The Plans page lists the Free, Growth and Scale features. Pricing is not published on the site, so request access or contact the team for a quote." },
      { q: "Can Engineers Integrate The Platform With Internal Systems?", a: "On the Scale plan, per-org API keys support programmatic access. On other plans, CSV export is the way to move lead data into other tools." },
      { q: "What Is The Simplest Way To Test The Platform Before Upgrading?", a: "Pick one category and one geography you already sell into and run it as a free query. Let enrichment finish, then check how complete the records are and export them to CSV. That small test shows whether the data suits your market before you pay for scoring or outreach." },
      { q: "Which Plan Do I Need For LinkedIn And IndiaMART Data?", a: "Both sources are part of the Scale plan. Free and Growth teams work mainly with Google Maps Data, which already suits most local prospecting. Scale also adds unlimited queries, a distributed scrape fleet and per-org API keys." },
      { q: "How Do The Five Clusters Hand Off To Each Other?", a: "Discover creates lead records, enrich fills in websites and contact details, and qualify adds a score, audits and opportunity flags. Engage then moves the best leads into the pipeline with outreach, while operate covers access, exports and administration across all of them." },
      { q: "Does The Platform Send Outreach From Its Own Servers?", a: "No. Campaigns are sent through the email transport you configure, so messages come from your own sending setup. Every message is logged against its lead, and sending limits and opt-out obligations are respected." },
    ],
    related: ["/how-it-works", "/platform-overview", "/plans", "/services/multi-source-lead-scraping", "/services/ai-lead-scoring", "/services/crm-pipeline-management"],
    cta: { heading: "Try The Pipeline On Your Own Market", text: "Run three free queries and see how discovery and enrichment look for the businesses you sell to.", label: "Start Free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/services/multi-source-lead-scraping",
    title: "Multi-Source Lead Scraping",
    h1: "Multi-Source Lead Scraping: One Query Across Three Sources",
    metaTitle: "Multi-Source Lead Scraping Across Maps, LinkedIn, IndiaMART",
    metaDescription:
      "Run one query across Google Maps, LinkedIn and IndiaMART and get one de-duplicated, source-traced record per business, processed on a worker fleet.",
    eyebrow: "Discover",
    intro: [
      "Multi-source lead scraping in LeadGen AI means you write one query (a category and a location, or a directory search term) and it fans out to every enabled source: Google Maps, LinkedIn and IndiaMART. The results come back as one normalised lead record per business, de-duplicated across sources, with each field tagged with the source it came from.",
      "The point is to stop stitching spreadsheets together. Instead of running three separate searches, exporting three files and reconciling them by hand, your team gets a single list it can enrich, score and work straight away.",
    ],
    highlights: [
      "Category plus location, or directory terms",
      "One record per business",
      "Per-field source traceability",
      "Jobs continue after you close the tab",
    ],
    sections: [
      {
        heading: "How A Single Query Fans Out",
        paragraphs: [
          "When you submit a query, the platform sends it to each source you have enabled. Google Maps is suited to category-and-location searches such as “interior designers in Bengaluru”. IndiaMART is searched with directory terms that suppliers use to describe their products. LinkedIn adds company context for B2B prospecting. Each source returns what it publicly lists, and the platform merges those responses into one dataset.",
          "Because sources describe the same business differently, results are normalised into a consistent record shape before they are compared. That normalisation is what makes cross-source de-duplication possible.",
        ],
      },
      {
        heading: "What Each Lead Record Contains",
        paragraphs: ["Every record follows the same structure regardless of where its data originated:"],
        bullets: [
          "Business name, category and full postal address",
          "Website, listed phone numbers and public email addresses",
          "Ratings, review counts and listing-completeness signals",
          "The source each field came from, for traceability",
        ],
      },
      {
        heading: "Why Per-Field Sources Matter",
        paragraphs: [
          "When a phone number came from a Maps listing and an email came from a directory profile, you want to know that before you call or write. Source tags let reps judge how fresh and reliable a value is likely to be. They help ops teams explain odd records, and they give managers a clear audit trail when a prospect asks where their details were found.",
        ],
      },
      {
        heading: "Worker Fleet, Quotas And Job Records",
        paragraphs: [
          "Long jobs run on a worker fleet rather than in your browser, so a large scrape keeps going after the tab is closed. Quotas are enforced per plan and per billing cycle: Free includes 3 scrape queries, Growth 50 per month, and Scale unlimited queries with a distributed scrape fleet. Every job records what it fetched and when, which makes it easy to see which list came from which run.",
        ],
      },
      {
        heading: "Which Plans Include Which Sources",
        paragraphs: [
          "Multiple sources, including LinkedIn and IndiaMART, are listed as a Scale plan feature. Teams on Free and Growth can still run discovery and enrichment; teams that need all three sources in one query, at volume, are the natural fit for Scale.",
        ],
      },
    ],
    steps: {
      heading: "Running A Multi-Source Scrape",
      items: [
        { title: "Define The Segment", text: "Write down the category, geography or product terms that describe your buyers, and keep each query narrow enough to review." },
        { title: "Choose Sources", text: "Enable the sources that suit the segment: Maps for local businesses, IndiaMART for suppliers, LinkedIn for company context." },
        { title: "Submit And Leave It Running", text: "The worker fleet processes the job in the background; you can close the tab and return later." },
        { title: "Review Merged Records", text: "Check the de-duplicated list, glance at source tags and spot-check a few records against the original listings." },
        { title: "Hand Off To Enrichment And Scoring", text: "New leads are queued for enrichment automatically; once complete, sort and filter before moving the best into the pipeline." },
      ],
    },
    considerations: {
      heading: "Limits To Plan Around",
      items: [
        "Results reflect what businesses publish publicly; a sparse listing produces a sparse record until enrichment fills gaps.",
        "Broad queries burn quota quickly and produce lists too large to review. Narrow, repeatable queries usually work better.",
        "De-duplication relies on normalised details; businesses listed under very different names or addresses may still need a manual check.",
        "Using scraped public data still carries obligations. Check current rules in your markets and see our responsible prospecting guidance.",
        "LinkedIn and IndiaMART sources require the Scale plan.",
      ],
    },
    example: {
      heading: "A Packaging Supplier Widening Its Search",
      text: "Picture a corrugated packaging maker in Ahmedabad looking for food producers. It runs “food processing units in Gujarat” on Google Maps and a related IndiaMART directory term in the same query. Several businesses appear in both sources; the platform merges them, keeping the Maps phone number and the directory-listed email on one record, each tagged with its origin. The sales lead reviews a single list rather than two overlapping exports.",
    },
    faqs: [
      { q: "Will The Same Business Appear Twice If It Is On Maps And IndiaMART?", a: "Results are normalised and de-duplicated across sources, so the aim is one record per business. Edge cases with very different names or addresses are worth a quick manual check." },
      { q: "How Many Queries Can I Run?", a: "Free includes 3 scrape queries, Growth includes 50 per month, and Scale offers unlimited queries. Quotas reset per billing cycle." },
      { q: "Does The Scrape Stop If My Laptop Goes To Sleep?", a: "No. Jobs run on the worker fleet, not in your browser, so they continue in the background and record what was fetched and when." },
      { q: "Can I Tell Which Source A Phone Number Came From?", a: "Yes. Each field carries the source it came from, so you can see whether a value originated on Maps, LinkedIn, IndiaMART or later enrichment." },
      { q: "How Narrow Should A Multi-Source Query Be?", a: "Narrow enough that your team can review the results. A single category in a defined area, or one specific product term, usually works better than a broad sector across a whole state. Broad queries burn quota quickly and produce lists too large to work properly." },
      { q: "Which Source Should I Enable For Which Kind Of Buyer?", a: "Google Maps suits local businesses found by category and location. IndiaMART suits suppliers searched by product terms, and LinkedIn adds company context for B2B prospecting. Many teams combine two sources when both location and product matter." },
      { q: "What Should I Check After A Multi-Source Job Finishes?", a: "Scan the merged list, glance at the source tags and spot-check a few records against the original listings. Pay extra attention to businesses with very different names or addresses across sources, since those are the cases most likely to need a manual merge check." },
      { q: "Am I Free To Use Scraped Public Data However I Like?", a: "Not necessarily. Public data can still carry obligations under privacy and marketing rules, which differ by market. Check current rules where you prospect and read our responsible prospecting guidance. This is general information, not legal advice." },
    ],
    related: ["/data-sources", "/services/google-maps-lead-extraction", "/services/indiamart-lead-extraction", "/services/lead-de-duplication", "/services/distributed-scrape-fleet", "/services/source-traceability"],
    cta: { heading: "Run Your First Multi-Source Query", text: "Start with three free queries and see what one search returns for your market.", label: "Start Free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/services/google-maps-lead-extraction",
    title: "Google Maps Lead Extraction",
    h1: "Google Maps Lead Extraction For Local-Market Sellers",
    metaTitle: "Google Maps Lead Extraction for Local Prospecting",
    metaDescription:
      "Turn category and location searches on Google Maps into enriched lead records with addresses, phones, ratings and review counts for local outreach.",
    eyebrow: "Discover",
    intro: [
      "Google Maps lead extraction turns a category-and-location search (“physiotherapy clinics in Kochi”, say) into structured lead records you can enrich, score and contact. LeadGen AI captures each listing’s business name, category, full address, website, listed phone numbers, ratings, review counts and listing-completeness signals, and tags every field with its source.",
      "For anyone selling to local businesses, Maps is often the most complete public picture of who operates where. Extraction saves the hours spent copying listings by hand and gives you a consistent dataset to filter and prioritise.",
    ],
    highlights: [
      "Category plus location queries",
      "Ratings and review counts captured",
      "Listing-completeness signals per lead",
      "Feeds enrichment and scoring automatically",
    ],
    sections: [
      {
        heading: "Designing Category And Location Queries",
        paragraphs: [
          "Maps queries work best when the category matches how businesses describe themselves and the location is tight enough to be meaningful. “Dentist” in a single city district usually produces a cleaner list than “healthcare” across a state. Many teams run the same category across several neighbourhoods as separate queries so they can compare areas and stage outreach geographically.",
        ],
        bullets: [
          "Use the category wording customers would type",
          "Split large cities into districts or suburbs",
          "Run synonyms (“salon”, “beauty parlour”) as separate queries if needed",
        ],
      },
      {
        heading: "Fields You Get From Each Listing",
        paragraphs: [
          "Each Maps result becomes a lead record with business name, category, full postal address, website, listed phone numbers, ratings, review counts and listing-completeness signals. After extraction, enrichment visits the website to add public emails, normalised phone numbers, contact and about pages, and social profiles where available.",
        ],
      },
      {
        heading: "Reading Ratings, Reviews And Completeness",
        paragraphs: [
          "Listing signals are useful qualification hints. A business with many recent reviews is clearly trading; one with an incomplete listing and no website may need exactly the help a marketing agency sells. These signals also feed AI Lead Scoring, which considers record completeness, website health and signs of an active, operating business.",
          "Treat them as indicators, not verdicts. A low rating might mean an unhappy customer base or simply a handful of reviews.",
        ],
      },
      {
        heading: "Local Use Cases That Suit Maps Data",
        paragraphs: ["Maps-led discovery fits sellers whose buyers have a physical presence:"],
        bullets: [
          "Web and SEO agencies looking for weak or missing websites",
          "Suppliers and distributors mapping retailers in a territory",
          "Software vendors targeting clinics, salons, gyms or restaurants",
          "Field sales teams planning visit routes by address",
        ],
      },
      {
        heading: "From Extracted List To Working Pipeline",
        paragraphs: [
          "Extraction is the first step, not the last. New records are queued for enrichment automatically, then scored 0–100 with stored reasons on Growth and above. You can sort by score, open an SEO audit on promising leads, check opportunity flags and move the top band into the CRM pipeline with owners assigned.",
        ],
      },
      {
        heading: "Keeping Maps-Derived Lists Fresh",
        paragraphs: [
          "Local markets change constantly: businesses open, close, move and rebrand. Each job records what it fetched and when, so you can see how old a list is. Teams that prospect the same territory repeatedly often re-run their core queries on a regular schedule. They also re-enrich older leads before a campaign, so scores and contact details reflect the businesses as they are now rather than as they were months ago.",
        ],
      },
    ],
    steps: {
      heading: "A Typical Maps Extraction Workflow",
      items: [
        { title: "Pick Category And Area", text: "Choose one category and a defined locality so the list stays reviewable." },
        { title: "Run The Query", text: "The job runs on the worker fleet and records what it fetched and when." },
        { title: "Let Enrichment Complete", text: "Websites are found and contact pages crawled to add emails, phones and social profiles." },
        { title: "Filter By Signals", text: "Use score, review counts, website presence and completeness to shortlist." },
        { title: "Assign And Contact", text: "Move shortlisted leads into the pipeline and draft outreach from their own data." },
      ],
    },
    considerations: {
      heading: "Things To Keep In Mind",
      items: [
        "Listings reflect what owners publish, and some are out of date. Closed or moved businesses can appear.",
        "Many small businesses list a phone number but no email; enrichment can only add emails published on their own site.",
        "Dense urban categories can return more results than you can work; narrow queries protect your quota and focus.",
        "Calling and emailing businesses is subject to local rules on marketing contact. Check current requirements for your market.",
      ],
    },
    example: {
      heading: "A Booking-Software Vendor Mapping Salons",
      text: "Consider a two-person team in Jaipur selling appointment software. It runs “salon” queries across six city areas. After enrichment, it filters for salons with strong review counts but no booking link on their website, sorts by score and works through the top thirty, mentioning each salon’s review volume in the opening line of a reviewed draft.",
    },
    faqs: [
      { q: "Which Maps Fields Are Most Useful For Qualification?", a: "Website presence, review counts and listing completeness are often the quickest signals. Combined with the AI score and its reasons, they help you see who is active and who may need your service." },
      { q: "Does Maps Extraction Give Me Email Addresses?", a: "Maps listings rarely include email. Enrichment adds public business emails discovered on the company’s own website when they exist." },
      { q: "How Should I Split A Large City?", a: "Run separate queries for districts or suburbs. Smaller lists are easier to review, and you can stage outreach area by area." },
      { q: "Should I Run Synonyms Like “Salon” And “Beauty Parlour” Separately?", a: "Often, yes. Businesses describe themselves in different words, so running common synonyms as separate queries can surface listings one term would miss. De-duplication then helps keep the same business from appearing twice in your working list." },
      { q: "Can A Closed Or Moved Business Appear In My Results?", a: "Yes. Listings reflect what owners publish, and some are out of date. Review counts, recent activity and listing completeness help you spot dormant entries, and a quick check before calling avoids wasted effort on businesses that no longer trade there." },
      { q: "How Often Should I Re-Run Queries For The Same Territory?", a: "There is no fixed rule, but local markets change constantly as businesses open, close and rebrand. Teams prospecting the same area often re-run core queries on a regular schedule and re-enrich older leads before a campaign. Each job records when it ran, so you can judge a list’s age." },
      { q: "Is Maps Extraction Useful For Planning Field Sales Visits?", a: "It can be. Every record includes a full postal address, so field teams can group leads by district and plan visit routes area by area. Combining address with score helps reps spend their time on the most promising stops." },
      { q: "Do Low Ratings Mean A Business Is A Poor Prospect?", a: "Not on their own. A low rating might reflect unhappy customers or simply a handful of reviews. Treat ratings and review counts as indicators alongside the score and its reasons, not as a verdict on whether to contact the business." },
    ],
    related: ["/services/multi-source-lead-scraping", "/services/local-business-prospecting", "/services/ai-contact-enrichment", "/services/missing-website-detection", "/services/ai-lead-scoring"],
    cta: { heading: "Map Your Local Market", text: "Run a free Maps query for one category and see the enriched records you get back.", label: "Start Free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/services/linkedin-lead-enrichment",
    title: "LinkedIn Lead Enrichment",
    h1: "LinkedIn Lead Enrichment For B2B Context",
    metaTitle: "LinkedIn Lead Enrichment for B2B Sales Teams",
    metaDescription:
      "Add LinkedIn as a source for company context in B2B prospecting, merged with Maps and directory data into one traceable lead record. Scale plan feature.",
    eyebrow: "Discover",
    intro: [
      "LinkedIn lead enrichment in LeadGen AI adds LinkedIn as one of the sources a query can fan out to, so B2B teams get company context alongside Maps and directory data in one de-duplicated record. Each value keeps a tag showing it came from LinkedIn, which matters when a rep wants to know how a detail was found.",
      "LinkedIn is most useful as research context: understanding what a company does and whether it fits your market before deciding who to approach. LinkedIn is listed among the multiple sources included on the Scale plan.",
    ],
    highlights: [
      "Company context for B2B fit",
      "Merged with Maps and IndiaMART",
      "Source tagged on every field",
      "Available on the Scale plan",
    ],
    sections: [
      {
        heading: "What LinkedIn Adds To A Lead Record",
        paragraphs: [
          "Maps and directories describe where a business is and how to reach it. LinkedIn tends to describe what the company is: how it presents itself professionally and what it says it does. When LinkedIn is enabled, those details are normalised into the same lead record as other sources, and the record is de-duplicated so you are not working the same company twice.",
          "Enrichment can also attach social profiles found on the company’s own website, which often includes a link to its LinkedIn page.",
        ],
      },
      {
        heading: "Using Company Context To Judge Fit",
        paragraphs: [
          "AI lead scoring weighs fit against your stated market, category and geography. Richer company context helps you and your reps check that fit. For example, you can confirm that a business listed as an “IT company” actually offers managed services rather than training.",
        ],
        bullets: [
          "Confirm the company’s core offering before outreach",
          "Spot companies outside your target segment early",
          "Gather talking points that reflect how the company describes itself",
        ],
      },
      {
        heading: "Decision-Maker Research Done Responsibly",
        paragraphs: [
          "LeadGen AI’s verified record fields are business-level: name, category, address, website, listed phones, public emails, ratings and completeness signals. Identifying the right person to speak to remains part of your own research. A common approach is to use the company context to decide which role is likely to own the problem (the owner in a small firm, an operations or marketing head in a larger one) and then reach out through channels the business has made public.",
          "Avoid collecting personal data you have no clear reason to hold, and respect platform terms and local privacy rules.",
        ],
      },
      {
        heading: "Where LinkedIn Fits In The Pipeline",
        paragraphs: [
          "LinkedIn Data flows through the same stages as any other source: enrichment, scoring with stored reasons, optional SEO audit, opportunity flags and then the CRM pipeline. AI-drafted outreach can draw on the lead’s enrichment data, so company context gathered upstream can shape a more relevant first message. You review it before it is sent through your own email transport.",
        ],
      },
    ],
    steps: {
      heading: "Adding LinkedIn To B2B Prospecting",
      items: [
        { title: "Describe The Target Companies", text: "Write a short definition of your ideal customer: industry, size cues and geography." },
        { title: "Enable LinkedIn With Other Sources", text: "Run the query with LinkedIn alongside Maps or IndiaMART so records merge into one list." },
        { title: "Review Company Context", text: "Skim the merged records to confirm each company actually matches your definition." },
        { title: "Decide On The Approach Role", text: "Note which function is likely to own the problem you solve, and research responsibly." },
        { title: "Draft And Review Outreach", text: "Use enrichment-based drafts, edit them for accuracy and send through your configured transport." },
      ],
    },
    considerations: {
      heading: "Points To Weigh",
      items: [
        "LinkedIn as a source is part of the Scale plan; Free and Growth do not include it.",
        "Company pages vary widely in completeness, so context will be rich for some leads and thin for others.",
        "The platform’s verified fields are business-level; it is not positioned as a personal contact database.",
        "Platform terms and privacy laws apply to how you use professional data. Take advice for your jurisdiction.",
        "Context helps personalisation, but reps should still verify details before referencing them in a message.",
      ],
    },
    example: {
      heading: "A Cloud Consultancy Checking Fit",
      text: "Suppose a small cloud consultancy in Hyderabad targets logistics firms. Its Maps query returns many “logistics” listings, from courier counters to freight forwarders. With LinkedIn enabled, the merged records show which companies describe themselves as freight and warehousing operators. The team filters to those, reviews the score reasons and drafts outreach that references the company’s own stated focus.",
    },
    faqs: [
      { q: "Is LinkedIn Included On The Growth Plan?", a: "No. Multiple sources, including LinkedIn and IndiaMART, are listed as Scale plan features." },
      { q: "Does LinkedIn Enrichment Give Me Personal Contact Details?", a: "LeadGen AI’s verified lead fields are business-level details. Identifying and contacting individuals is part of your own responsible research." },
      { q: "How Is LinkedIn Data Kept Separate From Maps Data On A Record?", a: "It is merged into one record, but every field carries its source, so you can always see whether a value came from LinkedIn or elsewhere." },
      { q: "Who Benefits Most From Adding LinkedIn As A Source?", a: "B2B teams whose fit depends on what a company actually does, not just where it is. Consultancies, software vendors and service firms use it to confirm a company’s core offering before outreach. Purely local sellers often get what they need from Maps alone." },
      { q: "How Do I Decide Which Role To Approach At A Company?", a: "Use the company context to judge who is likely to own the problem you solve. In a small firm that is often the owner; in a larger one it may be an operations or marketing head. Then reach out through channels the business has made public." },
      { q: "What If A Company’s LinkedIn Page Is Thin Or Outdated?", a: "Company pages vary widely, so context will be rich for some leads and sparse for others. Fall back on the website’s about page, captured during enrichment, and verify any detail before referencing it in a message." },
      { q: "Can LinkedIn Context Improve AI-Drafted Messages?", a: "Yes. Drafts draw on the lead’s enrichment data, so company context gathered upstream can make a first message more relevant. A rep should still check each detail and edit the draft before it is sent through your own email transport." },
      { q: "Do Privacy Rules Apply To Professional Data From LinkedIn?", a: "Yes. Platform terms and privacy laws apply to how you use professional data, and they vary by jurisdiction. Avoid collecting personal data you have no clear reason to hold, and take advice for your market. This is general information, not legal advice." },
    ],
    related: ["/services/multi-source-lead-scraping", "/services/social-profile-enrichment", "/services/ai-lead-scoring", "/responsible-prospecting", "/plans"],
    cta: { heading: "Discuss B2B Sources On Scale", text: "Tell us about your market and we’ll walk you through multi-source discovery.", label: "Request Access", href: "/request-access" },
  },
  {
    path: "/services/indiamart-lead-extraction",
    title: "IndiaMART Lead Extraction",
    h1: "IndiaMART Lead Extraction For B2B Sellers In India",
    metaTitle: "IndiaMART Lead Extraction for Suppliers and B2B Sellers",
    metaDescription:
      "Search IndiaMART with directory terms and turn supplier listings into enriched, de-duplicated lead records ready for scoring and outreach.",
    eyebrow: "Discover",
    intro: [
      "IndiaMART lead extraction lets you search the directory with the terms suppliers use for their products (“stainless steel fasteners”, “PP woven bags”) and turn matching listings into lead records in LeadGen AI. Those records are normalised, de-duplicated against Maps and LinkedIn results, enriched and scored like any other lead.",
      "For Indian manufacturers, traders, service providers and the vendors who sell to them, IndiaMART is a dense map of who supplies what. Extraction makes it workable as a prospect list instead of a set of browser tabs.",
    ],
    highlights: [
      "Search by directory product terms",
      "Supplier listings become lead records",
      "Merged with Maps for fuller records",
      "Available on the Scale plan",
    ],
    sections: [
      {
        heading: "Searching With Directory Terms",
        paragraphs: [
          "Directory searches differ from map searches. Instead of category and location, you use the product or service wording that sellers list under. Good terms are specific: “industrial RO plant” finds a narrower, more relevant group than “water”. Teams often keep a list of terms per product line and run them as separate queries.",
        ],
        bullets: [
          "Use the exact product names buyers and suppliers use",
          "Try trade synonyms and regional spellings separately",
          "Combine with a Maps query when location also matters",
        ],
      },
      {
        heading: "What Supplier Records Contain",
        paragraphs: [
          "Each listing becomes a record with the standard fields (business name, category, address, website, listed phones and public emails where available, plus listing-completeness signals) each tagged with its source. Enrichment then visits the supplier’s own website, if it has one, to add business emails, normalised phones, contact and about pages, and social profiles.",
        ],
      },
      {
        heading: "Who Uses IndiaMART Extraction",
        paragraphs: ["The directory serves two very different prospecting goals:"],
        bullets: [
          "Vendors selling to suppliers: packaging, logistics, software, finance or marketing services aimed at MSMEs",
          "Buyers and traders looking for alternative sources of a component or material",
          "Agencies finding suppliers with thin websites who could benefit from a better online presence",
          "Distributors identifying manufacturers to represent in a region",
        ],
      },
      {
        heading: "Qualifying Directory Leads",
        paragraphs: [
          "Directory listings vary in quality. AI Lead Scoring helps by weighing record completeness, website health, fit against your stated market and signs of an active business, and storing the reasons. The SEO Website Audit and opportunity flags are particularly useful for agencies: many suppliers have a directory listing but no website, or a site that doesn’t resolve.",
        ],
      },
      {
        heading: "Combining IndiaMART With Other Sources",
        paragraphs: [
          "Because one query fans out to every enabled source, a supplier found on IndiaMART and on Google Maps ends up as one record. The Maps side often contributes ratings and an exact address; the directory side contributes product context. De-duplication prevents your team from contacting the same supplier twice.",
        ],
      },
      {
        heading: "Approaching Directory Suppliers Well",
        paragraphs: [
          "Suppliers listed on a B2B directory receive a steady stream of enquiries, many of them low quality. Messages that stand out tend to name the supplier’s specific product line, explain a concrete reason for contact and propose a small next step. Phone is often the faster route for owner-run units, while email suits suppliers with an established website and a published business address.",
        ],
      },
    ],
    steps: {
      heading: "Building A Supplier Prospect List",
      items: [
        { title: "List Your Product Terms", text: "Write down the directory terms that describe the suppliers you want to reach." },
        { title: "Run Directory Queries", text: "Submit them with IndiaMART enabled, adding Maps where location matters." },
        { title: "Let Enrichment Finish", text: "Websites, emails and normalised phones are added where suppliers publish them." },
        { title: "Shortlist By Score And Fit", text: "Sort by score, read the reasons and filter out suppliers outside your segment." },
        { title: "Work The Pipeline", text: "Assign owners, draft outreach from the lead’s data, review it and send." },
      ],
    },
    considerations: {
      heading: "Practical Limits",
      items: [
        "IndiaMART as a source is part of the Scale plan.",
        "Many directory suppliers have no website, so email discovery may find nothing; phone may be the main route.",
        "Listings can be outdated or duplicated under trading names; review before bulk outreach.",
        "Indian data-protection rules are evolving. Check current obligations and take advice before contacting at scale.",
      ],
    },
    example: {
      heading: "A Freight Forwarder Prospecting Exporters",
      text: "Imagine a freight forwarder in Ludhiana that wants knitwear exporters. It runs directory terms for “woollen knitwear manufacturer” and “hosiery exporter” together with a Maps query for the city. The merged list shows two hundred suppliers. Scoring puts the active ones with working websites near the top, and the team calls the first forty with notes drawn from each supplier’s product listing.",
    },
    faqs: [
      { q: "How Are Directory Search Terms Different From Maps Queries?", a: "Maps queries pair a category with a location. Directory queries use the product or service wording suppliers list under, so specificity of the product term matters most." },
      { q: "Can I Prospect IndiaMART Suppliers On The Free Plan?", a: "IndiaMART is listed among the multiple sources on the Scale plan. Free and Growth focus on core discovery and enrichment." },
      { q: "What If A Supplier Appears On Both IndiaMART And Maps?", a: "The two results are normalised and merged into one lead record, with each field tagged by the source it came from." },
      { q: "How Do I Choose Good IndiaMART Search Terms?", a: "Use the exact product names suppliers list under, such as “industrial RO plant” rather than “water”. Try trade synonyms and regional spellings as separate queries, and keep a term list for each product line so searches stay repeatable." },
      { q: "Should I Call Or Email IndiaMART Suppliers?", a: "It depends on the supplier. Phone is often faster for owner-run units, especially those without a website. Email suits suppliers with an established site and a published business address, where enrichment can discover a business email." },
      { q: "Why Do Many Directory Leads Have No Email?", a: "Many suppliers have a directory listing but no website of their own, so enrichment has nothing to crawl. For those leads the listed phone number is usually the main route, and agencies may treat the missing site as an opportunity in itself." },
      { q: "How Do I Make My Message Stand Out To A Busy Supplier?", a: "Directory suppliers receive many low-quality enquiries. Name their specific product line, give a concrete reason for contacting them and propose a small next step. Short, specific messages tend to get further than generic introductions." },
      { q: "What Should I Watch For Before Bulk Outreach To Suppliers?", a: "Listings can be outdated or duplicated under trading names, so review the shortlist first. Indian Data-Protection Rules are also evolving, so check current obligations before contacting at scale. This is general information, not legal advice." },
    ],
    related: ["/services/multi-source-lead-scraping", "/services/lead-de-duplication", "/b2b/msme-suppliers", "/industries/manufacturing", "/services/phone-number-validation"],
    cta: { heading: "Prospect India’s Supplier Base", text: "Talk to us about IndiaMART extraction and multi-source discovery on Scale.", label: "Request Access", href: "/request-access" },
  },
  {
    path: "/services/ai-contact-enrichment",
    title: "AI Contact Enrichment",
    h1: "AI Contact Enrichment That Fills Gaps Without Overwriting Your Work",
    metaTitle: "AI Contact Enrichment: Emails, Phones and Websites",
    metaDescription:
      "Leads are queued for enrichment automatically: websites found, contact pages crawled and new values written only when more complete. Edits stay safe.",
    eyebrow: "Enrich",
    intro: [
      "AI contact enrichment in LeadGen AI completes each lead record with the details your team needs to reach the business. New leads are queued automatically. The platform finds the website, crawls the pages that normally list contact details, and compares what it finds with the existing record. It only writes a field when the new value is more complete.",
      "The result is a record with business emails discovered on the company’s own site, phone numbers normalised and checked for a plausible format, the website and its contact and about pages, social profiles and company details, each with a note of where it came from. None of it overwrites a field someone edited by hand.",
    ],
    highlights: [
      "Queued automatically for every new lead",
      "Writes only more complete values",
      "Never overwrites manual edits",
      "Records the source of each value",
    ],
    sections: [
      {
        heading: "How The Enrichment Queue Works",
        paragraphs: [
          "As soon as a scrape produces new leads, they join the enrichment queue. You do not need to trigger anything. Enrichment runs in the background, which means a large list can be enriching while your team reviews the first completed records.",
          "For each lead the platform does three things. It finds the business’s website, crawls the pages on that site that usually list contact details, and compares what it finds with what the record already holds.",
        ],
      },
      {
        heading: "Reconciliation: Only Better Data Gets Written",
        paragraphs: [
          "This check is what makes automatic enrichment safe to trust. A field is written only when the new value is more complete than the existing one. If a Maps listing already supplied a full phone number, enrichment will not replace it with a shorter fragment found in a footer.",
          "Hand edits are always protected. If a rep corrected an email after a bounce or replaced a switchboard number with a direct line, enrichment never overwrites that field.",
        ],
      },
      {
        heading: "What Gets Added To A Record",
        paragraphs: ["Depending on what the business publishes, enrichment can add:"],
        bullets: [
          "Business emails discovered on the company’s own website",
          "Phone numbers normalised and checked for a plausible format",
          "The business’s website plus its contact and about pages",
          "Social profiles linked from the site",
          "Company details that help with context and scoring",
        ],
      },
      {
        heading: "Safe Defaults And Source Tracking",
        paragraphs: [
          "Enrichment reads only the sources you asked for and records where each value came from. That combination keeps the platform predictable: no surprise data from places you didn’t choose, and a clear trail for every field. If a prospect asks where you found their email, you can tell them exactly.",
        ],
      },
      {
        heading: "How Enrichment Powers The Rest Of The Pipeline",
        paragraphs: [
          "Enriched records score better and draft better. AI lead scoring considers record completeness and website health, and recalculates when a lead is re-enriched. AI-drafted outreach uses the lead’s enrichment data to personalise. Website enrichment on the Free plan lets smaller teams try this. Growth adds scoring and outreach, which make full use of enriched data.",
        ],
      },
    ],
    steps: {
      heading: "What Happens After A Lead Is Created",
      items: [
        { title: "Queued", text: "The new lead joins the enrichment queue automatically." },
        { title: "Website Found", text: "The platform finds the business’s own website." },
        { title: "Contact Pages Crawled", text: "Pages that usually carry contact details, such as contact and about pages, are read." },
        { title: "Results Compared", text: "New values are compared with existing ones and written only when more complete; manual edits are skipped." },
        { title: "Score Refreshed", text: "When a lead is re-enriched, its score recalculates to reflect the fuller record." },
      ],
    },
    considerations: {
      heading: "Honest Limits",
      items: [
        "Enrichment depends on the business having a website that publishes contact details; no site means little to crawl.",
        "Public emails are often generic inboxes such as info@ or sales@ rather than named individuals.",
        "A plausible phone format is not proof that a number is live or answered.",
        "Sites change; data that was accurate at enrichment time can go stale, so re-enrich before major campaigns.",
        "Lawful use of discovered contact details remains your responsibility in each market.",
      ],
    },
    example: {
      heading: "A List That Fills Itself In",
      text: "Picture an SDR at a payroll software start-up in Pune who scrapes two hundred manufacturing units from Maps. Only some listings show emails. Over the next hour enrichment finds websites, finds contact pages and adds business emails and normalised phone numbers. One rep had already corrected a phone number for a key account; enrichment leaves that field untouched.",
    },
    faqs: [
      { q: "Do I Need To Start Enrichment Manually?", a: "No. New leads are queued for enrichment automatically once they are created by a scrape." },
      { q: "What Happens To A Field I Corrected By Hand?", a: "It stays as you left it. Enrichment never overwrites a field the user edited manually." },
      { q: "Will Enrichment Replace Good Data With Worse Data?", a: "It writes a field only when the new value is more complete than the existing one, so a fuller value already on the record is kept." },
      { q: "Is Enrichment Available On The Free Plan?", a: "Free includes website enrichment along with the lead dashboard and CSV export. Scoring and outreach, which make the most of enriched data, are on Growth." },
      { q: "How Long Does Enrichment Take For A Large List?", a: "It runs in the background, so timing depends on list size and the sites involved. You do not have to wait for the whole list; your team can start reviewing the first completed records while the rest continue enriching." },
      { q: "Why Did Enrichment Find Nothing For Some Leads?", a: "Enrichment depends on the business having a website that publishes contact details. If there is no site, or contact details sit behind a form, there is little to find. Those gaps can still be useful, for example as opportunity flags." },
      { q: "Can I See Where An Enriched Value Came From?", a: "Yes. Enrichment records where each value came from, so every field has a clear trail. If a prospect asks where you found their email, you can tell them exactly which page or source it came from." },
      { q: "Does Enrichment Affect The Lead Score?", a: "Yes. AI lead scoring considers record completeness and website health, and scores recalculate when a lead is re-enriched. A fuller record usually gives a more reliable score, which makes prioritisation more trustworthy." },
    ],
    related: ["/services/business-email-discovery", "/services/phone-number-validation", "/services/website-enrichment", "/services/social-profile-enrichment", "/services/source-traceability"],
    cta: { heading: "See Enrichment On Your Leads", text: "Run a free query and watch records fill in with websites, emails and phones.", label: "Start Free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/services/business-email-discovery",
    title: "Business Email Discovery",
    h1: "Business Email Discovery From Company Websites",
    metaTitle: "Business Email Discovery From Company Websites",
    metaDescription:
      "Find public business emails published on a company’s own website, with the source recorded for every address, and use them with deliverability in mind.",
    eyebrow: "Enrich",
    intro: [
      "Business email discovery in LeadGen AI finds the email addresses a company publishes on its own website. During enrichment the platform finds the site, crawls the pages that usually list contact details (contact and about pages, for instance) and adds the business emails it finds to the lead record, noting where each one came from.",
      "Because addresses come from the business’s own published pages rather than guesswork, they are ones the company has chosen to make public. That makes them a sound starting point for outreach, provided you treat deliverability and consent with the same care.",
    ],
    highlights: [
      "Emails from the company’s own site",
      "Source recorded for every address",
      "Manual corrections never overwritten",
      "Feeds AI-drafted outreach",
    ],
    sections: [
      {
        heading: "Where Discovered Emails Come From",
        paragraphs: [
          "The rule is simple: emails are discovered on the company’s own website. Directory listings may also carry public email addresses, which are captured at scrape time with their source. Enrichment complements those by reading the business’s own contact pages. The platform does not present guessed or pattern-generated addresses as discovered emails.",
        ],
      },
      {
        heading: "Why The Source Of An Email Matters",
        paragraphs: [
          "Every value on a record carries its source. For email that is particularly useful. An address published on the company’s contact page today is likely to be monitored; one found on an old directory profile may not be. Source tags let reps choose the better address and help managers answer questions about how a contact was obtained.",
        ],
        bullets: [
          "Prefer addresses found on the business’s current website",
          "Check the source before sending to a directory-only address",
          "Keep the source in mind when responding to data requests",
        ],
      },
      {
        heading: "What Kinds Of Addresses To Expect",
        paragraphs: [
          "Small and mid-sized businesses commonly publish shared inboxes (info@, contact@, sales@, enquiries@) and sometimes an owner’s or manager’s address. Shared inboxes are often read by the decision-maker in smaller firms, and by an administrator who routes messages in larger ones. Writing so that a forwarded email still makes sense is a good habit.",
        ],
      },
      {
        heading: "Deliverability Care When Using Discovered Emails",
        paragraphs: [
          "Discovered addresses are sent through your own configured email transport, so your sender reputation is at stake. Teams often warm up new sending domains, keep daily volumes modest, write to small, relevant segments and remove addresses that bounce. LeadGen AI’s outreach respects sending limits and opt-out obligations, every message is logged against its lead, so it is easy to see who has already been contacted.",
        ],
      },
      {
        heading: "How Teams Use Email Discovery Day To Day",
        paragraphs: [
          "Outbound teams typically filter for leads with a discovered email and a strong score, open the score reasons and audit, and generate an AI draft that refers to the lead’s own data. The rep edits, sends and moves the lead to the next pipeline stage. Leads without an email go to a calling list instead.",
        ],
      },
    ],
    steps: {
      heading: "From Discovery To First Email",
      items: [
        { title: "Enrich New Leads", text: "Leads are queued automatically and their websites crawled for contact pages." },
        { title: "Filter For Email-Ready Leads", text: "Sort or filter for records that now carry a business email and a good score." },
        { title: "Check The Source", text: "Confirm the address came from the company’s own site where possible." },
        { title: "Draft And Review", text: "Generate an AI draft from enrichment and audit data, then edit it for accuracy and tone." },
        { title: "Send Within Limits", text: "Send through your email transport, respecting limits and opt-outs; the message is logged." },
      ],
    },
    considerations: {
      heading: "Limits And Responsibilities",
      items: [
        "If a business publishes no email on its site, discovery will not invent one.",
        "Shared inboxes may be filtered or ignored; relevance and brevity matter more than volume.",
        "Rules on unsolicited business email differ by country. Check current requirements and take legal advice.",
        "Addresses go stale as businesses change; re-enrich older lists before reusing them.",
        "Always honour opt-outs promptly and keep your list under your own control.",
      ],
    },
    example: {
      heading: "Splitting A List By Contact Route",
      text: "Imagine a bookkeeping firm in Chennai with three hundred enriched retail leads. About half now carry a business email discovered on the shop’s own website. The team sends short, reviewed drafts to the top-scoring email leads at a steady daily pace, while the rest, mostly shops with only a phone listed, go to a colleague’s calling list.",
    },
    faqs: [
      { q: "Does LeadGen AI Guess Email Addresses From Name Patterns?", a: "Enrichment finds business emails published on the company’s own website. It does not present guessed addresses as discovered emails." },
      { q: "Why Are Most Discovered Emails Generic Inboxes?", a: "That is what many small businesses publish. A clear, relevant message to a shared inbox can still reach the owner or be forwarded to the right person." },
      { q: "How Do I Protect My Sending Domain When Using Discovered Emails?", a: "Send modest volumes to relevant segments, remove bounces, honour opt-outs and use a properly configured transport. The platform respects sending limits and logs every message." },
      { q: "Which Pages Are Searched For Email Addresses?", a: "Enrichment crawls the pages on the company’s own website that usually list contact details, such as contact and about pages. Directory listings may also carry public emails, which are captured at scrape time with their source." },
      { q: "Should I Prefer A Website Email Over A Directory Email?", a: "Usually, yes. An address published on the business’s current contact page is more likely to be monitored than one from an old directory profile. Check the source tag on each address before choosing which to use." },
      { q: "What Should I Do With Leads That Have No Email?", a: "Move them to a calling list instead. Many small businesses publish only a phone number, and discovery will not invent an address that is not published. Re-enrich later in case the business adds contact details to its site." },
      { q: "How Should I Write To A Shared Inbox Like info@?", a: "Write so the message still makes sense if it is forwarded. State clearly why you are writing, mention something specific about the business and keep the ask small. In smaller firms the owner often reads the shared inbox directly." },
      { q: "Are There Rules On Emailing Discovered Business Addresses?", a: "Yes. Rules on unsolicited business email differ by country, and some require clear opt-outs or a lawful basis. Check current requirements where you send, honour opt-outs promptly and take legal advice. This is general information, not legal advice." },
    ],
    related: ["/services/ai-contact-enrichment", "/services/ai-outreach-campaigns", "/services/ai-drafted-outreach-messages", "/services/source-traceability", "/responsible-prospecting"],
    cta: { heading: "Find The Emails Businesses Publish", text: "Run a free query and see which of your prospects list a business email on their site.", label: "Start Free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/services/phone-number-validation",
    title: "Phone Number Validation",
    h1: "Phone Number Validation For Calling Teams",
    metaTitle: "Phone Number Normalisation and Format Validation",
    metaDescription:
      "Listed phone numbers are normalised to a consistent format and checked for plausibility, so calling teams spend less time on obviously broken numbers.",
    eyebrow: "Enrich",
    intro: [
      "Phone number validation in LeadGen AI normalises the numbers found on listings and websites into a consistent format and checks each one for a plausible format. Calling teams get cleaner numbers to dial, and obviously malformed entries are easier to spot before anyone wastes a call.",
      "It is a format check, not a live-line test. A plausible number can still be disconnected or go unanswered, so validation is best seen as hygiene that improves the odds rather than a guarantee of a conversation.",
    ],
    highlights: [
      "Consistent number formatting",
      "Plausible-format checks",
      "Source recorded for each number",
      "Hand-corrected numbers stay protected",
    ],
    sections: [
      {
        heading: "Why Normalisation Matters For Calling",
        paragraphs: [
          "The same number can appear as “098xxxxxxx”, “+91 98xxx xxxxx” or “98xxx-xxxxx” depending on where it was listed. Left raw, these variants make a list hard to scan, break click-to-dial tools and hide duplicates. Normalising numbers into one consistent format makes the list readable, sortable and easier to de-duplicate.",
        ],
      },
      {
        heading: "What A Plausible-Format Check Does",
        paragraphs: [
          "After normalisation, each number is checked for a plausible format: does it look like a real phone number with a sensible length and structure? Numbers that fail are easy to set aside. Typical problems this catches include truncated digits, stray characters and fragments picked up from a page footer.",
        ],
        bullets: [
          "Catches truncated or overlong numbers",
          "Flags stray characters and formatting noise",
          "Does not confirm the line is active or answered",
        ],
      },
      {
        heading: "Where Numbers Come From",
        paragraphs: [
          "Phone numbers are captured from listings at scrape time (Google Maps, IndiaMART and other enabled sources) and from the company’s own website during enrichment. Each number carries its source. When a listing and a website disagree, that source tag helps a rep decide which to try first; the website number is often the one the business maintains.",
        ],
      },
      {
        heading: "Building It Into A Calling Workflow",
        paragraphs: [
          "Calling teams commonly filter for leads with a valid-format phone, sort by score and work the list in blocks. After each call, the rep logs the outcome in the CRM pipeline’s activity history and corrects the number if needed. That correction is protected: enrichment will never overwrite a field edited by hand.",
          "Pairing calls with email is common too: a short email first, then a call that references it, or the reverse.",
        ],
      },
      {
        heading: "When The Format Check Fails",
        paragraphs: [
          "A number that fails the plausible-format check is not necessarily useless. It may be a fragment of a real number split across a page, or a number written with unusual punctuation. Teams often set failed numbers aside for a quick manual look rather than deleting them, and check whether the business publishes another number on its listing or website.",
        ],
      },
    ],
    steps: {
      heading: "Preparing A Call List",
      items: [
        { title: "Enrich The List", text: "Let enrichment normalise numbers and add any found on the business’s own site." },
        { title: "Filter For Plausible Numbers", text: "Keep leads whose numbers pass the format check; set others aside for research." },
        { title: "Prioritise By Score", text: "Sort by the 0–100 score and read the reasons before calling." },
        { title: "Call And Log", text: "Record outcomes in the pipeline’s activity history against each lead." },
        { title: "Fix What You Learn", text: "Correct wrong numbers by hand; your edits are never overwritten by enrichment." },
      ],
    },
    considerations: {
      heading: "What Validation Can And Cannot Tell You",
      items: [
        "A plausible format is not a connected line; expect some numbers to be out of service.",
        "Listed numbers are often reception or switchboard lines, not direct dials.",
        "Mobile numbers listed by sole traders may be personal; be respectful about timing and frequency.",
        "Telemarketing and do-not-call rules vary by country. Check current requirements before calling at scale.",
        "Numbers age; re-enrich older lists before a calling sprint.",
      ],
    },
    example: {
      heading: "A Calling Sprint For A Field-Sales Team",
      text: "Consider a three-rep team in Nagpur selling water purifiers to offices. Its Maps list has numbers in five different formats. After enrichment, every number appears consistently and a handful fail the format check. The team calls the plausible ones in score order across two mornings, logs outcomes against each lead and corrects three numbers that reached the wrong office.",
    },
    faqs: [
      { q: "Does Phone Validation Confirm A Number Is In Service?", a: "No. It normalises the number and checks for a plausible format. Whether the line is active only becomes clear when you call." },
      { q: "Which Number Should I Try When The Listing And Website Differ?", a: "Check the source tag on each. The number on the business’s own current website is often the one it maintains, but a recent listing number may also be right." },
      { q: "Will Enrichment Undo A Phone Number I Corrected?", a: "No. Fields edited by hand are never overwritten by enrichment." },
      { q: "Why Does Normalisation Help With Duplicates?", a: "Consistent formatting means the same number written different ways is recognisable as one value, which supports cleaner records and de-duplication." },
      { q: "What Kinds Of Phone Problems Does The Format Check Catch?", a: "It catches numbers with truncated or extra digits, stray characters and formatting noise, and fragments picked up from a page footer. Those are easy to set aside before a rep wastes a call on them." },
      { q: "Should I Delete Numbers That Fail The Format Check?", a: "Usually not straight away. A failed number may be part of a real number split across a page or written with unusual punctuation. Set it aside for a quick manual look and check whether the business lists another number." },
      { q: "Are Listed Numbers Usually Direct Lines?", a: "Often they are reception or switchboard lines rather than direct dials. Be ready to ask for the right person, and if you learn a better number, correct it by hand; enrichment will not overwrite your edit." },
      { q: "Do I Need To Follow Do-Not-Call Rules When Calling Leads?", a: "Telemarketing and do-not-call rules vary by country, so check current requirements before calling at scale. Mobile numbers listed by sole traders may also be personal, so be respectful about timing and frequency. This is general information, not legal advice." },
    ],
    related: ["/services/ai-contact-enrichment", "/services/lead-data-normalisation", "/services/crm-pipeline-management", "/strategies/cold-calling", "/services/source-traceability"],
    cta: { heading: "Give Your Callers Cleaner Numbers", text: "Try enrichment free and see how normalised phone numbers change your call list.", label: "Start Free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/services/website-enrichment",
    title: "Website Enrichment",
    h1: "Website Enrichment: Finding Sites And The Pages That Matter",
    metaTitle: "Website Enrichment for Lead Research and Outreach",
    metaDescription:
      "Find each lead’s website, capture its contact and about pages, and use that context for research, audits and outreach. Included on the Free plan.",
    eyebrow: "Enrich",
    intro: [
      "Website enrichment in LeadGen AI finds each lead’s website and captures the pages with the most useful context, usually the contact and about pages. That gives researchers a reliable link to how the business describes itself, a place to find published contact details, and the starting point for an SEO audit or opportunity check.",
      "Website enrichment is included on the Free plan, so even a one-person team can turn a raw listing into a researched lead.",
    ],
    highlights: [
      "Finds the business’s own website",
      "Captures contact and about pages",
      "Feeds audits and opportunity flags",
      "Included on the Free plan",
    ],
    sections: [
      {
        heading: "What Finding A Website Means",
        paragraphs: [
          "Listings sometimes have no website, a broken link or a social page in place of a site. This step works out the business’s own website for the record. Once it is found, the platform knows where to look for contact details and what to audit. If no website can be found, that gap is useful information in itself.",
        ],
      },
      {
        heading: "Contact And About Pages As Research Context",
        paragraphs: [
          "The contact page usually holds emails, phone numbers and addresses. The about page tells you what the business thinks matters: how long it has operated, what it specialises in, who leads it. Researchers use these to confirm fit and gather a credible opening line.",
        ],
        bullets: [
          "Confirm services offered match your target segment",
          "Find the business’s own description of its specialism",
          "Spot founders or managers named publicly",
          "Note the tone the business uses about itself",
        ],
      },
      {
        heading: "How Website Data Flows Into Scoring And Audits",
        paragraphs: [
          "AI lead scoring considers website health and whether the business is credibly online. The SEO website audit fetches the site and grades technical health, content, metadata, structured data and performance. Business opportunity detection flags leads with no website or a site that doesn’t resolve. All three depend on website enrichment doing its job first.",
        ],
      },
      {
        heading: "Using Website Context In Outreach",
        paragraphs: [
          "AI-drafted outreach uses the lead’s enrichment and audit data. A draft that references a business’s stated speciality, or a specific issue found on its site, reads as researched rather than generic. Reps should still check the reference against the live site before sending; websites change.",
        ],
      },
      {
        heading: "Website Enrichment And Record Completeness",
        paragraphs: [
          "A found website usually fills several other fields at once: business emails, normalised phone numbers and social profiles found on the site. That is why website enrichment has a big effect on record completeness, one of the factors in the AI lead score. Leads that remain without a website after enrichment are worth reviewing separately. For some sellers they are the weakest leads, and for web studios they are the best.",
        ],
      },
    ],
    steps: {
      heading: "Researching A Lead With Website Enrichment",
      items: [
        { title: "Open The Enriched Record", text: "Check the website and its captured contact and about pages." },
        { title: "Confirm Fit", text: "Read how the business describes itself and compare with your target market." },
        { title: "Check Website Health", text: "On Growth, open the audit to see the grade and the highest-severity findings." },
        { title: "Note One Specific Detail", text: "Pick a single relevant fact to reference in outreach." },
        { title: "Draft And Verify", text: "Generate a draft, verify the reference against the live site and send." },
      ],
    },
    considerations: {
      heading: "Points To Remember",
      items: [
        "Businesses without a website give enrichment little to work with, but that gap is a qualification signal in its own right.",
        "The site found may be outdated; the about page may describe the business as it was years ago.",
        "Some sites hide contact details behind forms, so no email will be found even when the site loads.",
        "Audits and scoring that build on website data are Growth features; Free covers the enrichment itself.",
      ],
    },
    example: {
      heading: "Pre-Call Research In Ten Minutes",
      text: "Imagine an account executive at an HR services firm in Kolkata preparing for five calls. For each lead she opens the website, reads the about page and notes that one firm mentions rapid hiring for a new branch. That detail becomes her opening question. Another lead’s site doesn’t resolve, so she moves it to a colleague who sells website services.",
    },
    faqs: [
      { q: "What If A Listing Links To A Social Page Instead Of A Website?", a: "Enrichment tries to find the business’s own website. Where none exists, that absence can trigger opportunity flags, and social profiles can still be captured." },
      { q: "Is Website Enrichment Part Of The Free Plan?", a: "Yes. Free includes website enrichment, the lead dashboard and CSV export." },
      { q: "Should I Re-Enrich Websites Before A New Campaign?", a: "It is a sensible habit for older lists. Sites change, and re-enrichment refreshes the record and recalculates the lead’s score so your priorities reflect current data." },
      { q: "Which Pages Does Website Enrichment Focus On?", a: "It crawls the pages that normally carry contact details, such as contact and about pages, rather than trying to read the entire site." },
      { q: "What Does It Mean When No Website Can Be Resolved?", a: "It means the platform could not establish a working site of the business’s own. For many sellers that makes the lead weaker, but for web studios it is a strong signal, and it can trigger opportunity flags for missing or non-resolving sites." },
      { q: "How Can I Use The About Page Before A Sales Call?", a: "Read how the business describes itself, what it specialises in and any recent developments, then pick one relevant detail to open the conversation. Confirm it against the live site first, because about pages can describe a business as it was years ago." },
      { q: "Why Does Website Enrichment Raise Record Completeness So Much?", a: "A found website often fills several fields at once, including business emails, normalised phone numbers and social profiles. Record completeness is one of the factors in the AI lead score, so a resolved site can noticeably change how a lead is prioritised." },
      { q: "Do I Need Website Enrichment To Run An SEO Audit?", a: "Yes, in practice. The SEO website audit fetches the resolved site, so enrichment has to establish the website first. Audits and scoring are Growth features, while the enrichment itself is available on the Free plan." },
    ],
    related: ["/services/ai-contact-enrichment", "/services/seo-website-audit", "/services/missing-website-detection", "/services/prospect-research", "/services/ai-drafted-outreach-messages"],
    cta: { heading: "Find Websites For Your Leads", text: "Website enrichment is on the Free plan. Run a query and see what it finds.", label: "Start Free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/services/social-profile-enrichment",
    title: "Social Profile Enrichment",
    h1: "Social Profile Enrichment For Better-Informed Outreach",
    metaTitle: "Social Profile Enrichment for Personalised Outreach",
    metaDescription:
      "Capture the social profiles a business links from its own website and use its public presence as context for relevant, accurate personalisation.",
    eyebrow: "Enrich",
    intro: [
      "Social profile enrichment in LeadGen AI adds a business’s social profiles to its lead record as part of contact enrichment. When the platform crawls the company’s website for contact details, it also captures the social profiles the business links to, and records where each one was found.",
      "For sellers who personalise, those profiles are a window into what the business is doing now (new services, events, hiring, seasonal offers) which a static listing rarely shows. Used with care, that context makes a first message more relevant. Used carelessly, it can make it feel intrusive or simply wrong.",
    ],
    highlights: [
      "Profiles captured during enrichment",
      "Source recorded for each profile",
      "Context for relevant personalisation",
      "Signals of an active business",
    ],
    sections: [
      {
        heading: "Where Social Profiles Come From",
        paragraphs: [
          "Social profiles are added during the enrichment pass that finds a lead’s website and crawls its contact pages. Businesses commonly link their profiles in a header, footer or contact page, and those links are captured on the record with their source. Because the business itself published the link, the profile is very likely to be its official presence rather than a fan page or a namesake.",
        ],
      },
      {
        heading: "What A Social Presence Tells You",
        paragraphs: [
          "A social profile is rarely a direct contact route for B2B outreach, but it is rich context. It can show whether the business is actively posting, what it is promoting, how it speaks to customers and whether it is growing.",
        ],
        bullets: [
          "Recent activity suggests an operating, engaged business",
          "Promotions reveal priorities, such as a new branch or service",
          "Tone tells you how formal your outreach should be",
          "A dormant profile may signal a gap your service could fill",
        ],
      },
      {
        heading: "Turning Context Into Personalisation",
        paragraphs: [
          "The most effective personalisation is a single specific, relevant observation linked to the reason you are writing. “I saw you opened a second studio in baner” followed by a relevant point about bookings beats a paragraph of flattery. AI-drafted outreach draws on the lead’s enrichment data. Reps add or verify the social detail themselves before sending.",
          "Keep it professional. Reference what the business has published as a business, not personal posts by its staff.",
        ],
      },
      {
        heading: "Keeping Social Data Accurate",
        paragraphs: [
          "Social profiles change faster than websites. A post that was current at enrichment time may be weeks old when you write. Check the live profile before referencing anything, and re-enrich older leads before a campaign so their records, and scores, reflect the latest state.",
        ],
      },
      {
        heading: "How Social Presence Relates To Scoring",
        paragraphs: [
          "AI lead scoring weighs record completeness, website health, fit and signals of an active, operating business, and stores the reasons. Social profiles add to completeness and context. The stored reasons tell you what actually influenced a particular score, so you do not need to guess.",
        ],
      },
    ],
    steps: {
      heading: "Using Social Profiles In A Research Routine",
      items: [
        { title: "Open The Enriched Record", text: "Find the social profiles captured from the business’s own website." },
        { title: "Scan Recent Activity", text: "Look for a current, business-related development worth mentioning." },
        { title: "Connect It To Your Offer", text: "Write one sentence linking that development to the problem you solve." },
        { title: "Verify Before Sending", text: "Confirm the detail on the live profile and edit the AI draft accordingly." },
        { title: "Log And Move On", text: "Send through your email transport; the message is logged against the lead." },
      ],
    },
    considerations: {
      heading: "Accuracy And Etiquette",
      items: [
        "Profiles are only captured when the business links them from its site; some businesses link none.",
        "Social content dates quickly, so an outdated reference can undermine your credibility.",
        "Over-personalisation can feel invasive; one relevant observation is usually enough.",
        "Platform terms and privacy rules apply to how you use social data. Stay with business-level, public information.",
        "Personalisation takes time per lead, so reserve it for your higher-scoring band.",
      ],
    },
    example: {
      heading: "One Line That Changed The Reply Rate Feeling",
      text: "Suppose a corporate gifting company in Gurugram is writing to event agencies. For its top twenty leads, a rep opens each linked profile and finds that one agency recently posted about a large product launch. Her reviewed draft opens with a line about that launch and offers branded kits for future ones. Leads with quiet profiles get the standard audit-based draft instead.",
    },
    faqs: [
      { q: "Does Social Enrichment Find Profiles The Business Didn’t Link?", a: "Social profiles are captured during website enrichment, so the profiles linked from the business’s own site are the ones you can rely on." },
      { q: "Should I Contact Prospects Through Their Social Profiles?", a: "Teams usually treat social profiles as context and use email or phone for outreach. If you do message through a platform, follow its rules and keep it relevant." },
      { q: "How Much Personalisation Is Enough?", a: "One specific, accurate, business-related observation tied to your reason for writing tends to work better than several generic compliments." },
      { q: "Why Might Social Context Be Wrong In A Draft?", a: "Profiles change quickly. If the lead was enriched weeks ago, re-enrich or check the live profile before referencing anything." },
      { q: "How Do I Know A Captured Profile Is The Official One?", a: "Profiles are captured from links on the business’s own website, usually in the header, footer or contact page. Because the business published the link itself, it is very likely to be its official presence rather than a fan page or namesake." },
      { q: "Which Leads Deserve Social Research Before Outreach?", a: "Personalisation takes time per lead, so most teams reserve it for their higher-scoring band. Lower-priority leads or those with quiet profiles can receive a standard audit-based draft instead." },
      { q: "Can A Dormant Social Profile Be A Useful Signal?", a: "Yes. A profile that has not been updated in a long time may point to a gap a marketing or content service could fill. Treat it as a hint to check, not proof that the business is inactive." },
      { q: "What Should I Avoid Referencing From Social Profiles?", a: "Stick to what the business has published as a business, such as launches, events or new services. Avoid personal posts by staff, respect platform terms and privacy rules, and keep it to one relevant observation so the message does not feel intrusive." },
    ],
    related: ["/services/ai-contact-enrichment", "/services/website-enrichment", "/services/ai-drafted-outreach-messages", "/services/prospect-research", "/services/linkedin-lead-enrichment"],
    cta: { heading: "Add Context To Every Lead", text: "Request a walkthrough and see how enrichment builds a fuller picture of each prospect.", label: "Request Access", href: "/request-access" },
  },
  {
    path: "/services/ai-lead-scoring",
    title: "AI Lead Scoring",
    h1: "AI Lead Scoring With Reasons You Can Read",
    metaTitle: "AI Lead Scoring: 0–100 Scores With Stored Reasons",
    metaDescription:
      "Every lead gets one 0–100 score based on completeness, website health, market fit and activity signals, with the reasons stored on the record.",
    eyebrow: "Qualify",
    intro: [
      "AI lead scoring in LeadGen AI gives every lead a single 0–100 score and stores the reasons for that score on the record. The score reflects how complete the record is, the health of the business’s website and whether it is credibly online, its fit against your stated market, category and geography, and signals that it is an active, operating business.",
      "Sales managers use the score to decide where reps spend their time. You can sort and filter by score, and push the top band into the CRM pipeline. Scores recalculate when a lead is re-enriched, so the ranking reflects the latest data, not last month’s.",
    ],
    highlights: [
      "One 0–100 score per lead",
      "Reasons stored on every record",
      "Recalculates after re-enrichment",
      "Push the top band to pipeline",
    ],
    sections: [
      {
        heading: "The Four Factors Behind Every Score",
        paragraphs: ["The score combines four kinds of evidence about a lead:"],
        bullets: [
          "Record completeness: how much of the record is filled in, such as website, phones and emails",
          "Website health: whether the business has a working site and is credibly online",
          "Fit: how well the lead matches the market, category and geography you have stated",
          "Activity: signals that the business is active and operating",
        ],
      },
      {
        heading: "Why Stored Reasons Matter",
        paragraphs: [
          "A number on its own tends to be either trusted blindly or ignored. Storing the reasons on the record lets a rep see why a lead scored 82 (complete contact details, healthy site, strong fit) or why another scored 31. This helps reps start better conversations, and it helps managers spot when the stated market definition needs adjusting.",
        ],
      },
      {
        heading: "Working With Score Bands",
        paragraphs: [
          "Most teams find it useful to think in bands rather than exact numbers. A common approach is a top band for immediate rep attention, a middle band for lighter-touch outreach or later review, and a low band that is parked or used for other purposes. The thresholds are a team decision; review them after a few weeks against what actually converted.",
          "For agencies, low scores are not always bad news. A business scoring low because of website health may be an ideal prospect for web or SEO services.",
        ],
      },
      {
        heading: "Recalculation Keeps Scores Honest",
        paragraphs: [
          "Scores recalculate when a lead is re-enriched. If a business launches a website, adds contact details or changes its listing, re-enrichment updates the record and the score moves with it. Before a campaign on an older list, re-enriching is a sensible way to refresh both data and priority.",
        ],
      },
      {
        heading: "From Score To Pipeline",
        paragraphs: [
          "Sorting and filtering by score works across the lead dashboard. When you are ready, push the top band into the CRM pipeline, assign owners and generate AI drafts that use each lead’s enrichment and audit data. AI lead scoring is included in the Growth and Scale plans.",
        ],
      },
    ],
    steps: {
      heading: "Putting Scores To Work",
      items: [
        { title: "State Your Market", text: "Define the category, geography and market you are targeting so fit can be judged." },
        { title: "Enrich And Score", text: "Let enrichment complete; each lead receives a 0–100 score with reasons." },
        { title: "Set Your Bands", text: "Agree thresholds for top, middle and low bands with the team." },
        { title: "Read Reasons Before Outreach", text: "Use the stored reasons to shape the first conversation." },
        { title: "Push And Review", text: "Move the top band into the pipeline and revisit thresholds against outcomes." },
      ],
    },
    considerations: {
      heading: "Using Scores Wisely",
      items: [
        "The score reflects public data; a business with a thin online presence may be a strong buyer offline.",
        "Fit depends on how clearly you state your market. A vague definition produces less useful scores.",
        "A score is a prioritisation aid, not a prediction of revenue or a guarantee of conversion.",
        "Stale data means stale scores; re-enrich before relying on an old list.",
        "Scoring is a Growth feature, not part of the Free plan.",
      ],
    },
    example: {
      heading: "A Manager Rebuilding The Daily List",
      text: "Picture a sales manager at an office-supplies distributor in Bhopal with six hundred leads. She sets a top band of 75 and above, which gives about ninety leads. Reading reasons, she notices several high scorers sit outside the delivery area, so she tightens the stated geography. After rescoring, the top band is smaller and more deliverable, and each rep gets fifteen leads a day.",
    },
    faqs: [
      { q: "What Goes Into The 0–100 Score?", a: "Record completeness, website health and credible online presence, fit against your stated market, category and geography, and signals of an active, operating business." },
      { q: "Can I See Why A Lead Got Its Score?", a: "Yes. The reasons are stored on the lead record, so anyone reviewing the lead can see what drove the score." },
      { q: "Do Scores Update Automatically?", a: "Scores recalculate when a lead is re-enriched, so refreshed data produces a refreshed score." },
      { q: "Should Agencies Ignore Low-Scoring Leads?", a: "Not necessarily. A low score driven by poor website health can point to exactly the businesses that need web or SEO help." },
      { q: "How Do I Choose Thresholds For Score Bands?", a: "Thresholds are a team decision. Many teams start with a top band for immediate rep attention, a middle band for lighter outreach and a low band that is parked, then review the cut-offs after a few weeks against what actually converted." },
      { q: "Why Are High-Scoring Leads Sometimes A Poor Fit?", a: "Usually because the stated market is too vague. Fit is judged against the category, geography and market you define, so reading the stored reasons and tightening that definition often produces a smaller, more useful top band." },
      { q: "Is The Score A Prediction Of Whether A Lead Will Buy?", a: "No. It is a prioritisation aid based on public data, not a forecast of revenue or a guarantee of conversion. A business with a thin online presence can still be a strong buyer offline." },
      { q: "Which Plans Include AI Lead Scoring?", a: "AI lead scoring is included on the Growth and Scale plans. The Free plan covers discovery, website enrichment, the lead dashboard and CSV export, which lets you judge data quality before upgrading." },
    ],
    related: ["/services/sales-prioritisation", "/services/crm-pipeline-management", "/services/ai-contact-enrichment", "/services/seo-website-audit", "/services/lead-dashboard", "/plans"],
    cta: { heading: "Rank Your Leads By Evidence", text: "Request access to see AI lead scoring and stored reasons on your own market.", label: "Request Access", href: "/request-access" },
  },
  {
    path: "/services/seo-website-audit",
    title: "SEO Website Audit",
    h1: "SEO Website Audits That Turn Into Client-Ready Reports",
    metaTitle: "SEO Website Audit for Agencies and Prospecting",
    metaDescription:
      "Audit a lead’s website across technical health, content, metadata, structured data and performance, and hand over a graded, prioritised fix list.",
    eyebrow: "Qualify",
    intro: [
      "The SEO website audit in LeadGen AI fetches a lead’s website and checks it against rules covering technical health, content, metadata, structured data and performance. It grades each area, rolls the grades into an overall score and produces a report with a per-area scorecard, findings ranked by severity with plain-English explanations, performance and page-health metrics, and a prioritised fix list.",
      "For agencies, that report does two jobs. It qualifies the prospect, showing whether there is real work to do, and it opens the conversation with something useful the prospect can act on.",
    ],
    highlights: [
      "Five audit areas, each graded",
      "Findings ranked by severity",
      "Plain-English explanations",
      "Prioritised, client-ready fix list",
    ],
    sections: [
      {
        heading: "What The Rule Set Covers",
        paragraphs: ["Each audit checks the site against rules grouped into five areas:"],
        bullets: [
          "Technical health: whether the site is built and served soundly",
          "Content: the substance and quality signals of the page content",
          "Metadata: titles, descriptions and similar page-level signals",
          "Structured data: machine-readable markup that helps search engines",
          "Performance: speed and page-health metrics",
        ],
      },
      {
        heading: "Reading The Scorecard",
        paragraphs: [
          "The overall grade gives a quick answer to “is this site in good shape?”. The per-area scorecard shows where the problems are: a site might score well on content but poorly on metadata and performance. That breakdown helps you match prospects to the service you actually sell.",
        ],
      },
      {
        heading: "Severity-Ranked Findings In Plain English",
        paragraphs: [
          "Findings are ranked by severity, so the most damaging issues appear first. Each is explained in plain English. That matters because the person reading the report is often a business owner, not a developer. A clear explanation of why an issue matters is more persuasive than a technical code.",
        ],
      },
      {
        heading: "The Client-Ready Fix List",
        paragraphs: [
          "The report ends with a prioritised fix list that can be handed to the prospect. Agencies often send it as a goodwill gesture with a short note, or walk through it on a call. Because it is specific to the prospect’s site, it shows your skill far better than a generic sales deck.",
        ],
      },
      {
        heading: "Audits Inside The Wider Pipeline",
        paragraphs: [
          "Audit results feed other modules. Weak audits in the bottom band are flagged by Business Opportunity Detection. Website health contributes to the AI lead score. AI-drafted outreach can reference audit findings directly. SEO and website-build reports are included in the Growth plan and above.",
        ],
      },
      {
        heading: "Who Gets The Most From Audits",
        paragraphs: [
          "Audits are built with agencies in mind, but they help any seller whose offer touches a prospect’s online presence: web designers, SEO and content specialists, hosting and maintenance providers, and marketing consultants. For other sellers, a quick look at the audit grade still adds context. A business that invests in a healthy site often takes its digital channels seriously.",
        ],
      },
    ],
    steps: {
      heading: "Running Audit-Led Prospecting",
      items: [
        { title: "Shortlist Leads With Websites", text: "Filter enriched leads to those with a working site in your target segment." },
        { title: "Run The Audits", text: "Each site is fetched, checked against the rule set and graded by area." },
        { title: "Pick The Fitting Prospects", text: "Use the scorecard to find sites weak in the areas your agency fixes." },
        { title: "Personalise The Outreach", text: "Draft a message that references the top one or two severity findings." },
        { title: "Share The Fix List", text: "Offer the prioritised fix list and suggest a short call to talk through it." },
      ],
    },
    considerations: {
      heading: "Things To Be Aware Of",
      items: [
        "An audit reflects the site at the moment it was fetched; re-run it if time has passed.",
        "Automated checks cannot judge everything. Brand, design quality and business goals still need human review.",
        "A strong grade means less obvious work to sell; qualify those leads differently.",
        "Present findings constructively; a report that reads as an attack rarely wins a client.",
        "Audit reports are part of Growth and Scale, not the Free plan.",
      ],
    },
    example: {
      heading: "An SEO Freelancer’s First Ten Pitches",
      text: "Imagine an SEO freelancer in Coimbatore targeting architects. She audits thirty sites and finds that most score reasonably on content but poorly on metadata and structured data. She writes to the ten weakest, each email naming the two highest-severity findings in plain language, and attaches the fix list. Several owners reply asking what fixing the first item would involve.",
    },
    faqs: [
      { q: "Which Areas Does The SEO Audit Grade?", a: "Technical health, content, metadata, structured data and performance. Each is graded and the grades roll up into an overall score." },
      { q: "Can I Send The Audit Report To A Prospect?", a: "Yes. The report is designed as client-ready output, with plain-English findings and a prioritised fix list." },
      { q: "How Do Audits Affect Opportunity Flags?", a: "Weak audits in the bottom band are flagged by Business Opportunity Detection, with the evidence attached." },
      { q: "Is The Audit A Substitute For A Full Manual SEO Review?", a: "No. It is a fast, rule-based assessment ideal for prospecting and prioritising. A paid engagement usually adds deeper manual analysis." },
      { q: "How Should I Use A Strong Audit Grade When Prospecting?", a: "A strong grade means less obvious work to sell, so qualify those leads differently. For non-agency sellers, a healthy site can suggest a business that takes its digital channels seriously, which may make it a better fit for other offers." },
      { q: "How Do I Present Audit Findings Without Offending A Prospect?", a: "Frame findings as helpful observations, not criticism. Mention the one or two highest-severity issues in plain language, explain why they matter to the business and offer the fix list. A report that reads as an attack rarely wins a client." },
      { q: "When Should I Re-Run An Audit?", a: "An audit reflects the site at the moment it was fetched. If weeks have passed since the audit, or you know the prospect has changed its site, re-run it before referencing specific findings in outreach or on a call." },
      { q: "Is The SEO Audit Available On The Free Plan?", a: "No. SEO and website-build reports are included on the Growth plan and above. The Free plan covers discovery, website enrichment, the lead dashboard and CSV export." },
    ],
    related: ["/services/opportunity-reports", "/services/business-opportunity-detection", "/services/seo-agency-lead-generation", "/services/agency-client-prospecting", "/strategies/website-audit-offers"],
    cta: { heading: "Open Conversations With An Audit", text: "See how audit reports work for your prospects in a short walkthrough.", label: "Request Access", href: "/request-access" },
  },
  {
    path: "/services/business-opportunity-detection",
    title: "Business Opportunity Detection",
    h1: "Business Opportunity Detection With Evidence On Every Flag",
    metaTitle: "Business Opportunity Detection for Service Sellers",
    metaDescription:
      "Flag businesses with no website, broken sites, no reachable contact route or weak audits, each flag with its evidence, then reach them from outreach.",
    eyebrow: "Qualify",
    intro: [
      "Business opportunity detection in LeadGen AI flags leads that show a clear, fixable gap: businesses with no website, websites that don’t resolve, listings with no reachable contact route, and sites whose audit lands in the bottom band. Every flag carries the evidence behind it, and a flagged lead can be contacted straight from the outreach tools.",
      "For agencies and service sellers, those gaps are the opportunity. Rather than hoping a prospect has a problem, you start from a documented one.",
    ],
    highlights: [
      "Four kinds of opportunity flag",
      "Evidence attached to each flag",
      "Contact flagged leads directly",
      "Built for agencies and service sellers",
    ],
    sections: [
      {
        heading: "The Four Flags And What They Mean",
        paragraphs: ["Each flag points to a different kind of gap:"],
        bullets: [
          "No website: the business has no site associated with it",
          "Site doesn’t resolve: a website is listed but does not load",
          "No reachable contact route: the listing offers no usable way to get in touch",
          "Weak audit: the site’s audit result is in the bottom band",
        ],
      },
      {
        heading: "Why Evidence Matters",
        paragraphs: [
          "A flag without evidence is just a claim. A flag with evidence gives you something real to talk about. Because each flag records what triggered it, a rep can check it before reaching out and refer to it accurately. That protects your credibility: telling a business its site is down when it was a temporary blip is a poor first impression.",
        ],
      },
      {
        heading: "Matching Flags To Services",
        paragraphs: [
          "Different flags suit different sellers. Web design studios tend to pick no-website and non-resolving flags. SEO and marketing agencies focus on weak audits. Businesses selling listing management, call handling or customer-communication tools find the no-contact-route flag useful, as it signals customers may struggle to reach the business.",
        ],
      },
      {
        heading: "From Flag To Pipeline",
        paragraphs: [
          "Flagged leads can be contacted from the outreach tools. A typical workflow filters the dashboard for a flag, checks the evidence, pushes the shortlist into the CRM pipeline with owners, and generates AI drafts that use the lead’s enrichment and audit data. Every message is logged against the lead.",
          "For no-contact-route leads, email may not be possible; phone or a visit may be the only realistic route.",
        ],
      },
      {
        heading: "Combining Flags With Scores",
        paragraphs: [
          "Opportunity flags and AI lead scores answer different questions. The flag says “there is a gap”; the score helps say “this business is worth the effort”. An active, well-reviewed business with no website is usually a better prospect than a dormant listing with the same flag.",
        ],
      },
      {
        heading: "Reviewing Flags As A Team",
        paragraphs: [
          "Flags are most useful when the team agrees what each one means for its own process. A short shared note (which flags each person works, how evidence is checked and when a flagged lead is dropped) keeps effort focused. Reviewing a sample of flagged leads together in the first weeks also helps everyone agree on what a good opportunity looks like in your market.",
        ],
      },
    ],
    steps: {
      heading: "Working Opportunity Flags",
      items: [
        { title: "Run Discovery In Your Niche", text: "Scrape a category and area where your service is relevant." },
        { title: "Filter By Flag", text: "Choose the flag type that matches what you sell." },
        { title: "Verify The Evidence", text: "Check each flag’s evidence before outreach." },
        { title: "Prioritise Active Businesses", text: "Use score and activity signals to keep the businesses worth pursuing." },
        { title: "Reach Out Constructively", text: "Draft outreach that names the gap helpfully and offers a clear next step." },
      ],
    },
    considerations: {
      heading: "Caveats",
      items: [
        "A missing website may be a choice; some businesses thrive on referrals and listings alone.",
        "Non-resolving sites can be temporary outages, so re-check before claiming a site is down.",
        "No-contact-route leads are, by definition, harder to reach.",
        "Weak-audit flags depend on audits being run, which is a Growth feature.",
        "Lead with help rather than criticism; nobody enjoys being told their business is failing.",
      ],
    },
    example: {
      heading: "A Studio Sorting Flags By Service",
      text: "Consider a web and marketing studio in Mysuru that scrapes restaurants across the city. Forty are flagged with no website, twelve with a site that doesn’t resolve and thirty with weak audits. The founder handles the no-website group with a simple starter-site offer, while her colleague takes the weak-audit group with fix lists attached. Both confirm the evidence before each message.",
    },
    faqs: [
      { q: "What Triggers An Opportunity Flag?", a: "No website, a website that doesn’t resolve, a listing with no reachable contact route, or a weak audit in the bottom band." },
      { q: "Can I See Why A Lead Was Flagged?", a: "Yes. Every flag carries the evidence behind it, so you can verify it before outreach." },
      { q: "Which Opportunity Flag Suits Which Kind Of Seller?", a: "Web studios usually start with no-website and non-resolving flags, SEO and marketing agencies with weak audits, and sellers of communication or listing tools with the no-contact-route flag." },
      { q: "How Do I Contact A Lead With No Reachable Contact Route?", a: "Email will not be possible; teams usually try any phone number found elsewhere, or a visit for local businesses. Some such leads are simply unreachable." },
      { q: "Should I Double-Check A Flag Before Contacting The Business?", a: "Yes. A site that did not resolve may have been briefly down, and a missing website could exist but be unlinked. Checking the evidence first protects your credibility, because telling a business its site is down when it is not makes a poor first impression." },
      { q: "How Do Opportunity Flags And Lead Scores Work Together?", a: "The flag shows there is a gap, while the score helps show whether the business is worth the effort. An active, well-reviewed business with no website is usually a better prospect than a dormant listing with the same flag." },
      { q: "Why Are Some Leads Missing A Weak-Audit Flag?", a: "Weak-audit flags depend on audits being run, and audits are a Growth feature. If a lead has not been audited, it cannot receive that flag, though it may still carry website or contact-route flags." },
      { q: "How Can A Team Agree On Which Flags To Work?", a: "Write a short shared note covering which flags each person handles, how evidence is checked and when a flagged lead is dropped. Reviewing a sample of flagged leads together in the first weeks helps everyone calibrate what a good opportunity looks like." },
    ],
    related: ["/services/missing-website-detection", "/services/seo-website-audit", "/services/website-redesign-prospecting", "/services/agency-client-prospecting", "/services/ai-outreach-campaigns"],
    cta: { heading: "Find Businesses With A Fixable Gap", text: "Book a walkthrough to see opportunity flags and their evidence on your niche.", label: "Request Access", href: "/request-access" },
  },
  {
    path: "/services/missing-website-detection",
    title: "Missing Website Detection",
    h1: "Missing Website Detection For Web Design Studios",
    metaTitle: "Missing Website Detection: Find Businesses With No Site",
    metaDescription:
      "Find local businesses with no website or a site that doesn’t resolve, see the evidence behind each flag, and pitch a website with care and relevance.",
    eyebrow: "Qualify",
    intro: [
      "Missing website detection in LeadGen AI flags two specific situations: businesses with no website at all, and businesses whose listed website does not resolve. Both are part of Business Opportunity Detection, and each flag carries the evidence behind it, so a web design studio can see exactly why a lead was flagged before writing a word.",
      "For studios and freelancers, these leads are the most direct opportunity there is. The business plainly lacks a working site; the question is whether it wants one, and whether you can make the case without sounding pushy.",
    ],
    highlights: [
      "No-website and non-resolving flags",
      "Evidence attached to every flag",
      "Best paired with activity signals",
      "Contact flagged leads from outreach",
    ],
    sections: [
      {
        heading: "Two Flags, Two Different Conversations",
        paragraphs: [
          "A business with no website has either never had one or never linked one to its listings. A business with a non-resolving site had one, or at least listed one, that no longer loads. The pitch differs. The first often needs persuading that a site is worth having; the second already believed it was and may simply have let a domain or hosting plan lapse.",
        ],
        bullets: [
          "No website: lead with what a simple site would do for enquiries",
          "Non-resolving: point out, helpfully, that the listed link is broken",
        ],
      },
      {
        heading: "How Detection Works In The Pipeline",
        paragraphs: [
          "Discovery captures the website field from listings. Enrichment then tries to find the business’s own site. When no site exists, or the listed one will not load, the lead is flagged with the evidence. Flags appear alongside the AI lead score, so you can filter for flagged leads and sort them by score in one view.",
        ],
      },
      {
        heading: "Picking The Right Flagged Leads",
        paragraphs: [
          "Not every business without a site is a good prospect. Ratings, review counts and listing completeness help separate thriving businesses that have outgrown word of mouth from dormant listings. The AI lead score also considers signals of an active, operating business. Many studios focus first on well-reviewed businesses with complete listings but no site: clearly trading, clearly reachable, clearly missing something.",
        ],
      },
      {
        heading: "Pitch Approaches That Tend To Work",
        paragraphs: [
          "Teams often keep the first message short and specific. Mention how you found the business, note the gap neutrally, and suggest one concrete benefit tied to its category: online menus for restaurants, service areas for plumbers, appointment requests for clinics. For broken sites, a friendly heads-up that the link fails is useful in itself and earns attention.",
          "AI-drafted outreach can use the lead’s data as a starting point; review and adjust tone before sending.",
        ],
      },
      {
        heading: "Limits Of Missing-Website Signals",
        paragraphs: [
          "Detection is only as good as what is publicly listed and loading at the time. A business may have a site that is simply not linked anywhere, or a site that was briefly down. Check before you say so. And some owners have deliberately chosen not to have a website; respect a clear “no”.",
        ],
      },
    ],
    steps: {
      heading: "A Studio’s Missing-Website Workflow",
      items: [
        { title: "Scrape A Local Category", text: "Choose categories where a website clearly helps customers decide." },
        { title: "Filter For Website Flags", text: "Show leads flagged as having no website or a site that doesn’t resolve." },
        { title: "Check Activity", text: "Use reviews, completeness and score to keep active businesses." },
        { title: "Verify The Evidence", text: "Search for the business quickly and confirm the gap is real." },
        { title: "Send A Specific Offer", text: "Pitch one relevant benefit and suggest a short call or sample." },
      ],
    },
    considerations: {
      heading: "Before You Pitch",
      items: [
        "Without a website there is often no discovered email; phone or a visit may be the only route.",
        "Some businesses rely happily on listings and referrals and will not want a site.",
        "Non-resolving sites may be temporary outages; recheck before mentioning them.",
        "Avoid implying the business is failing; frame the gap as an opportunity.",
        "Follow local rules on unsolicited calls and messages.",
      ],
    },
    example: {
      heading: "A Two-Person Studio In A Tier-2 City",
      text: "Imagine a two-person web studio in Vadodara scraping physiotherapy clinics and bakeries. Twenty-five leads are flagged with no website, and eight have links that don’t resolve. They sort by score, keep the businesses with strong review counts, and phone the bakeries first with an offer of a one-page site showing their menu and opening hours. The broken-link clinics get a short, helpful email.",
    },
    faqs: [
      { q: "What Is The Difference Between ‘No Website’ And ‘Doesn’t Resolve’?", a: "No website means no site is associated with the business. Doesn’t resolve means a site is listed but does not load when fetched." },
      { q: "How Do I Reach A Business That Has No Website?", a: "Usually by the phone number on its listing, or in person for local businesses, since there is no site from which to discover an email." },
      { q: "Which Flagged Businesses Should A Studio Contact First?", a: "Many start with active, well-reviewed businesses that have complete listings but no site, because they are clearly trading and reachable." },
      { q: "Is Missing-Website Detection A Separate Product?", a: "It is part of Business Opportunity Detection, alongside flags for unreachable listings and weak audits." },
      { q: "How Should The Pitch Differ For A Broken Site?", a: "A business with a non-resolving site already believed a website was worth having, and may have let a domain or hosting plan lapse. A friendly heads-up that the listed link fails is useful in itself, and often earns more attention than a sales pitch." },
      { q: "What Benefits Should I Mention To A Business Without A Website?", a: "Pick one concrete benefit tied to its category, such as online menus for restaurants, service areas for plumbers or appointment requests for clinics. Keep the first message short, note the gap neutrally and suggest a brief call or sample." },
      { q: "What If The Business Says It Doesn’t Want A Website?", a: "Respect a clear no. Some owners thrive on listings and referrals alone and have deliberately chosen not to have a site. Log the outcome against the lead so nobody on your team contacts them again with the same offer." },
      { q: "Can A Business Be Flagged Even Though It Has A Website?", a: "Yes. Detection relies on what is publicly listed and resolvable at the time, so a site that is not linked anywhere or was briefly down can trigger a flag. A quick search before pitching confirms whether the gap is real." },
    ],
    related: ["/services/business-opportunity-detection", "/services/website-redesign-prospecting", "/services/local-business-prospecting", "/services/google-maps-lead-extraction", "/services/website-enrichment"],
    cta: { heading: "Find Businesses That Need A Website", text: "Book a walkthrough and see missing-website flags on the categories you serve.", label: "Request Access", href: "/request-access" },
  },
  {
    path: "/services/crm-pipeline-management",
    title: "CRM Pipeline Management",
    h1: "CRM Pipeline Management Built Around Your Leads",
    metaTitle: "CRM Pipeline Management With Stages and Owners",
    metaDescription:
      "Work leads on a pipeline board with stages, owners and full activity history, linked to enrichment, scores, audits and logged outreach.",
    eyebrow: "Engage",
    intro: [
      "CRM pipeline management in LeadGen AI gives sales teams a pipeline board with stages, owners and full activity history. It is built directly on the lead records the platform discovered, enriched and scored. Leads move from the dashboard into the pipeline (usually the top score band), and every message and change is recorded against them.",
      "Because the pipeline lives in the same place as the data, reps do not copy leads between tools or lose the context that made a lead interesting in the first place. Score reasons, audit findings, opportunity flags and outreach history all sit with the lead.",
    ],
    highlights: [
      "Pipeline board with stages",
      "Owners assigned per lead",
      "Full activity history",
      "Role-based visibility for teams",
    ],
    sections: [
      {
        heading: "Stages That Reflect How You Sell",
        paragraphs: [
          "The board organises leads into stages so everyone can see where each opportunity stands. Teams usually keep stages few and clear (for example, new, contacted, in conversation, proposal, won and lost) with a clear rule for when a lead moves. Simple stages keep the board honest. With too many, leads tend to sit in vague middle columns.",
        ],
      },
      {
        heading: "Owners And Accountability",
        paragraphs: [
          "Every lead in the pipeline can have an owner. Ownership answers the most common sales-team question, “who is handling this?”, and prevents two reps contacting the same business. Managers can review a rep’s pipeline at a glance and rebalance work when someone is overloaded or away.",
        ],
      },
      {
        heading: "Full Activity History On Every Lead",
        paragraphs: [
          "Activity history records what has happened to a lead over time, and every outreach message is logged against its lead. When a prospect replies months later, whoever picks it up can see the previous conversation, the audit that was shared and the stage changes that followed. Nothing gets lost when a lead changes hands.",
        ],
        bullets: [
          "See every message sent to the lead",
          "Review stage changes and ownership",
          "Pick up a lead without asking colleagues for context",
        ],
      },
      {
        heading: "Role-Based Access For Teams",
        paragraphs: [
          "Role-based access means each team sees the records it should. Growth includes full team access with 7 role modules, so a business can separate, for instance, sales from operations, or give managers broader visibility than individual reps. Multi-tenant workspaces keep organisations apart entirely.",
        ],
      },
      {
        heading: "Fitting The Pipeline Into The Wider Workflow",
        paragraphs: [
          "The pipeline connects upstream and downstream. Upstream, you sort and filter by score and push the top band in. Downstream, you draft outreach from the lead’s own enrichment and audit data and send it through your email transport. If your team also uses other tools, CSV export lets you move data out; named third-party CRM integrations are not offered.",
        ],
      },
    ],
    steps: {
      heading: "Setting Up A Working Pipeline",
      items: [
        { title: "Agree Stage Definitions", text: "Write one sentence per stage describing when a lead enters and leaves it." },
        { title: "Push Qualified Leads In", text: "Move the top score band from the dashboard into the pipeline." },
        { title: "Assign Owners", text: "Give every lead an owner so responsibility is clear." },
        { title: "Work And Log", text: "Send outreach, record outcomes and move leads through stages; messages are logged automatically." },
        { title: "Review Weekly", text: "Check stuck leads, rebalance ownership and close out dead opportunities." },
      ],
    },
    considerations: {
      heading: "Points To Plan For",
      items: [
        "A pipeline is only as accurate as the discipline of updating it; agree team habits early.",
        "Outreach and team roles are Growth features, so a Free workspace is limited to one admin user.",
        "If you already run a separate CRM, decide which system is the source of truth to avoid double entry.",
        "Data moves to other tools via CSV export, or per-org API keys on Scale, rather than named integrations.",
        "Too many stages blur meaning; start simple and add only when needed.",
      ],
    },
    example: {
      heading: "A Five-Rep Team Replacing A Shared Spreadsheet",
      text: "Imagine a commercial cleaning company in Thane whose reps tracked prospects in a shared spreadsheet. They switch to the pipeline board with five stages, assign every lead an owner and push in the top-scoring offices from a recent scrape. When a facilities manager replies to an old email, the rep who picks it up sees the original message, the score reasons and the previous owner in the activity history.",
    },
    faqs: [
      { q: "Can I Customise What Each Stage Means?", a: "The board is built on stages, owners and history. Teams typically agree their own stage definitions so movement between columns means the same thing to everyone." },
      { q: "Does The Pipeline Connect To Other CRMs?", a: "Named third-party CRM integrations are not offered. Data can be moved out with CSV export, or programmatically with per-org API keys on the Scale plan." },
      { q: "How Do I Stop Two Reps Contacting The Same Lead?", a: "Assign an owner to every pipeline lead and use role-based access so each team sees the records it should." },
      { q: "Where Do Outreach Messages Appear?", a: "Every message is logged against its lead, so it appears in that lead’s activity history." },
      { q: "How Many Pipeline Stages Should We Start With?", a: "Keep them few and unambiguous, for example new, contacted, in conversation, proposal, won and lost. Write one sentence per stage describing when a lead enters and leaves it, and add stages only when the team clearly needs them." },
      { q: "Can A Manager Rebalance Leads When A Rep Is Away?", a: "Yes. Every pipeline lead can have an owner, so a manager can review each rep’s pipeline at a glance and reassign leads. The activity history stays with the lead, so the new owner can see what has already happened." },
      { q: "How Many Users Can Work The Pipeline On Each Plan?", a: "The Free plan is limited to one admin user. Growth adds full team access with 7 role modules, so teams can give managers broader visibility than individual reps, and Scale builds on that for larger operations." },
      { q: "What If We Already Use Another CRM?", a: "Decide which system is the source of truth so your team avoids double entry. Named third-party CRM integrations are not offered, but you can move data out with CSV export, or programmatically with per-org API keys on scale." },
    ],
    related: ["/services/ai-outreach-campaigns", "/services/outreach-activity-logging", "/services/role-based-team-access", "/services/ai-lead-scoring", "/services/csv-lead-export"],
    cta: { heading: "Run Your Pipeline On Enriched Data", text: "Request a walkthrough of the pipeline board, roles and outreach logging.", label: "Request Access", href: "/request-access" },
  },
  {
    path: "/services/ai-outreach-campaigns",
    title: "AI Outreach Campaigns",
    h1: "AI Outreach Campaigns Sent Through Your Own Email Transport",
    metaTitle: "AI Outreach Campaigns With Logging and Opt-Outs",
    metaDescription:
      "Run outreach campaigns from AI-drafted, data-informed messages sent via your own email transport, with every message logged and opt-outs respected.",
    eyebrow: "Engage",
    intro: [
      "AI outreach campaigns in LeadGen AI let you send messages to a selected group of leads through your own configured email transport, using drafts written from each lead’s enrichment and audit data. Every message is logged against its lead. Outreach respects sending limits and opt-out obligations, and you stay in control of the list.",
      "The aim is relevant messages at a manageable scale, not blasting a list. Campaigns work best when the audience is narrow, the message refers to something true about each business, and someone reviews the drafts before they go.",
    ],
    highlights: [
      "Sent via your email transport",
      "Drafts built from lead data",
      "Every message logged per lead",
      "Respects limits and opt-outs",
    ],
    sections: [
      {
        heading: "How A Campaign Is Put Together",
        paragraphs: [
          "A campaign starts with a selection: usually leads filtered by score, flag or segment and pushed into the pipeline. Messages are drafted using each lead’s enrichment and audit data, reviewed, and sent through the email transport you have configured. Because sending happens through your own transport, replies come back to your own mailbox.",
        ],
      },
      {
        heading: "Why Your Own Email Transport Matters",
        paragraphs: [
          "Sending through your configured transport keeps your brand on the message and your relationship with the recipient direct. It also puts your sender reputation on the line, so the same hygiene you would apply to any outbound email applies here: authenticated domains, steady volumes and quick removal of bounces and opt-outs.",
        ],
      },
      {
        heading: "Logging, Limits And Opt-Outs",
        paragraphs: [
          "Every message is logged against its lead, so managers can see who was contacted, when and with what. Outreach respects sending limits and opt-out obligations. When someone asks not to be contacted again, honour it promptly and make sure the lead is excluded from future campaigns.",
        ],
        bullets: [
          "Per-lead message log for accountability",
          "Sending limits to protect deliverability",
          "Opt-out obligations respected",
          "You control who is on the list",
        ],
      },
      {
        heading: "Segmenting For Relevance",
        paragraphs: [
          "The best campaigns share a reason for writing. Group leads by opportunity flag (no website, weak audit), by category or by geography, so the core message fits everyone and the AI draft only has to personalise the details. Mixing unrelated segments in one campaign tends to produce vague messages.",
        ],
      },
      {
        heading: "Measuring And Improving",
        paragraphs: [
          "Because messages and stage changes live in the activity history, teams can review which segments produced conversations and adjust. A common approach is a small first send, a review of replies, then a refined message for the next batch. AI outreach is included on the Growth and Scale plans.",
        ],
      },
      {
        heading: "Follow-Ups Without Nagging",
        paragraphs: [
          "Replies often come after more than one touch, but repeated identical reminders damage goodwill. A common pattern is two or three follow-ups spaced several days apart, each adding something new: a relevant audit finding, the fix list, or a short example of similar work. Stop when the prospect asks you to, and use the activity log to make sure nobody on the team writes again by mistake.",
        ],
      },
    ],
    steps: {
      heading: "Launching A Campaign",
      items: [
        { title: "Configure Your Transport", text: "Connect the email transport you want campaigns sent through." },
        { title: "Select A Focused Segment", text: "Filter by score, flag or category and move the leads into the pipeline." },
        { title: "Generate And Review Drafts", text: "Let AI draft from enrichment and audit data, then edit for accuracy and tone." },
        { title: "Send Within Limits", text: "Send at a steady pace; limits and opt-outs are respected and every message is logged." },
        { title: "Follow Up And Refine", text: "Track replies, move leads through stages and improve the next batch." },
      ],
    },
    considerations: {
      heading: "Responsibilities That Stay With You",
      items: [
        "Email marketing laws such as anti-spam and data-protection rules differ by country; check current requirements and take legal advice.",
        "AI drafts can misread data; always review before sending.",
        "Your domain reputation is affected by complaints and bounces, so keep lists clean.",
        "Generic shared inboxes may need a message that still makes sense when forwarded.",
        "Outreach requires the Growth plan or above and a configured email transport.",
      ],
    },
    example: {
      heading: "A Small SEO Agency’s Weekly Campaign",
      text: "Picture a three-person SEO agency in Lucknow. Each Monday it selects twenty-five weak-audit leads in one category, generates drafts that cite each site’s top finding, and spends an hour editing them. Messages go out through the agency’s own mailbox across the week. On Friday the team reviews replies in the activity history and adjusts the following week’s opening line.",
    },
    faqs: [
      { q: "Whose Email Account Sends The Campaign?", a: "Campaigns are sent through the email transport you configure, so messages come from your own sending setup and replies return to you." },
      { q: "What Happens When Someone Opts Out?", a: "Outreach respects opt-out obligations. Make sure opted-out leads are excluded from future sends, and act on requests promptly." },
      { q: "How Large Should A Campaign Be?", a: "There is no single right size, but many teams start small and focused so they can review every draft and protect deliverability." },
      { q: "Can Managers Audit What Was Sent?", a: "Yes. Every message is logged against its lead, giving a per-lead record of outreach." },
      { q: "How Should I Segment Leads For A Campaign?", a: "Group leads that share a reason for writing, such as the same opportunity flag, category or geography. The core message then fits everyone, and the AI draft only has to personalise the details. Mixing unrelated segments tends to produce vague messages." },
      { q: "How Many Follow-Ups Should A Campaign Include?", a: "A common pattern is two or three follow-ups spaced several days apart, each adding something new such as an audit finding or the fix list. Stop when the prospect asks you to, and check the activity log so nobody writes again by mistake." },
      { q: "How Do I Protect My Domain Reputation During Campaigns?", a: "Send at a steady pace, use an authenticated sending domain and remove bounces and opt-outs quickly. Complaints and bounces affect your reputation because messages go through your own transport, so clean, focused lists matter more than volume." },
      { q: "How Can I Tell Which Campaign Segments Are Working?", a: "Messages and stage changes are recorded in each lead’s activity history, so you can review which segments led to replies and conversations. Many teams send a small first batch, review responses and refine the message for the next one." },
    ],
    related: ["/services/ai-drafted-outreach-messages", "/services/outreach-activity-logging", "/services/crm-pipeline-management", "/services/business-email-discovery", "/responsible-prospecting", "/strategies/cold-email-outreach"],
    cta: { heading: "Send Relevant Outreach, Not Volume", text: "See how campaigns, logging and opt-outs work in a guided walkthrough.", label: "Request Access", href: "/request-access" },
  },
  {
    path: "/services/ai-drafted-outreach-messages",
    title: "AI-Drafted Outreach Messages",
    h1: "AI-Drafted Outreach Messages Grounded In Each Lead’s Data",
    metaTitle: "AI-Drafted Outreach Messages From Lead and Audit Data",
    metaDescription:
      "Get first drafts personalised from each lead’s enrichment and audit data, then review and edit them before sending through your own email transport.",
    eyebrow: "Engage",
    intro: [
      "AI-drafted outreach messages in LeadGen AI are first drafts written from a lead’s own enrichment and audit data: its website, category, location, contact details and, where an audit has been run, its specific findings. SDRs get a relevant starting point in seconds rather than a blank page, then review and edit before the message is sent through their email transport.",
      "The value comes from using real data. A draft that refers to a real issue on a prospect’s site, or to how the business describes itself, is more useful than a template with a name swapped in, provided a human checks it is accurate.",
    ],
    highlights: [
      "Drafts use enrichment and audit data",
      "Specific to each lead",
      "Human review before sending",
      "Logged against the lead once sent",
    ],
    sections: [
      {
        heading: "What The Drafts Draw On",
        paragraphs: [
          "Drafts use the data the platform has gathered about the lead. That can include enrichment details such as the website, contact and about pages and social profiles, and audit data such as the overall grade and the highest-severity findings. Opportunity flags give a reason to write, and the score reasons hint at what makes the lead promising.",
        ],
      },
      {
        heading: "Why Data-Based Drafts Read Better",
        paragraphs: [
          "Recipients can tell when a message was written for them. A specific observation (“your site’s pages are missing descriptions, so search results show random text”) signals effort and expertise. Basing the draft on the lead’s actual data makes that kind of detail possible at a pace a busy SDR can keep up.",
        ],
      },
      {
        heading: "The Review Step Is Not Optional",
        paragraphs: [
          "AI can misread a field, overstate a finding or strike the wrong tone. Teams treat every draft as a draft: check each factual claim against the record or the live site, trim anything that sounds generic or exaggerated, and make sure the ask is clear and small.",
        ],
        bullets: [
          "Verify every specific claim",
          "Cut flattery and filler",
          "Keep one clear, low-effort next step",
          "Match the tone to the prospect’s category",
        ],
      },
      {
        heading: "Drafts Within Campaigns And One-Off Sends",
        paragraphs: [
          "Drafts work for both individual messages and campaigns. A rep preparing for a key account may rewrite heavily; a campaign to a tight segment may need only light edits per lead. Either way, sending goes through your configured email transport and the message is logged against its lead, respecting sending limits and opt-outs.",
        ],
      },
      {
        heading: "Writing Guidance Teams Often Adopt",
        paragraphs: [
          "Short beats long. A common structure is a one-line reason for writing based on the lead’s data, one line on why it matters to the business, one line on how you help, and a simple question. Follow-ups that add a new piece of value, such as offering the audit’s fix list, tend to land better than “just checking in”.",
        ],
      },
      {
        heading: "Keeping Brand Voice Consistent",
        paragraphs: [
          "When several reps edit drafts, messages can drift in tone and claims. Teams often keep a short style note (preferred greeting, words to avoid, how to describe the company’s service, which claims are allowed) and apply it while reviewing. That keeps outreach recognisably yours even though each draft starts from a different lead’s data.",
        ],
      },
    ],
    steps: {
      heading: "From Draft To Sent Message",
      items: [
        { title: "Open The Lead", text: "Check enrichment details, score reasons and any audit findings." },
        { title: "Generate A Draft", text: "Let the AI write a first version using the lead’s own data." },
        { title: "Fact-Check", text: "Confirm each specific claim against the record or the live website." },
        { title: "Edit For Voice", text: "Shorten, adjust tone and make the ask clear." },
        { title: "Send And Log", text: "Send through your email transport; the message is logged against the lead." },
      ],
    },
    considerations: {
      heading: "Know The Limits",
      items: [
        "Drafts are only as good as the data behind them; thin records produce generic drafts.",
        "AI can phrase findings more strongly than the evidence supports. Soften where needed.",
        "Reviewing every draft takes time; budget for it rather than skipping it.",
        "Personalised does not mean permitted; marketing rules still apply.",
        "AI outreach is available on Growth and Scale plans.",
      ],
    },
    example: {
      heading: "An SDR’s Morning Batch",
      text: "Imagine an SDR at a website maintenance firm in Visakhapatnam with fifteen leads to contact. For each, she generates a draft that cites the site’s top audit finding. On one, the draft says the site is “very slow”. She checks the metrics, softens it to “slower on mobile than it could be”, and offers the fix list. Fifteen reviewed messages take under an hour.",
    },
    faqs: [
      { q: "What Data Does The AI Use To Write A Draft?", a: "The lead’s own enrichment and audit data, such as its website, contact pages, social profiles and audit findings." },
      { q: "Are Drafts Sent Automatically?", a: "Treat them as drafts. Review and edit each one, then send through your configured email transport." },
      { q: "Why Does A Draft Sometimes Sound Generic?", a: "Usually because the lead’s record is thin. Re-enriching or running an audit gives the AI more specific material to work with." },
      { q: "What Structure Works Well For A Short Outreach Draft?", a: "A common structure is one line on why you are writing, based on the lead’s data, one line on why it matters to the business, one line on how you help, and a simple question. Short messages are easier to read and easier to reply to." },
      { q: "What Should I Check Before Sending An AI Draft?", a: "Verify every specific claim against the record or the live website, since AI can misread a field or overstate a finding. Cut flattery and filler, match the tone to the prospect’s category and make sure there is one clear, low-effort next step." },
      { q: "How Do We Keep Drafts Consistent Across Several Reps?", a: "Keep a short style note covering your preferred greeting, words to avoid, how to describe your service and which claims are allowed. Applying it during review keeps messages recognisably yours, even though each draft starts from a different lead’s data." },
      { q: "Can I Use AI Drafts For Follow-Ups?", a: "Yes. Drafts work for individual messages and campaigns alike. Follow-ups that add something new, such as offering the audit’s fix list, tend to land better than a plain “just checking in” note, and each sent message is logged against the lead." },
      { q: "Which Plans Include AI-Drafted Outreach?", a: "AI outreach is available on the Growth and Scale plans. Sending also needs a configured email transport, because messages go out through your own setup rather than the platform’s, with sending limits and opt-outs respected." },
    ],
    related: ["/services/ai-outreach-campaigns", "/services/seo-website-audit", "/services/ai-contact-enrichment", "/services/prospect-research", "/strategies/cold-email-outreach"],
    cta: { heading: "Write Better First Messages, Faster", text: "Request access to see drafts built from your own leads’ data.", label: "Request Access", href: "/request-access" },
  },
  {
    path: "/services/lead-de-duplication",
    title: "Lead De-Duplication",
    h1: "Lead De-Duplication: One Record Per Business",
    metaTitle: "Lead De-duplication Across Maps, LinkedIn and IndiaMART",
    metaDescription:
      "Results from Google Maps, LinkedIn and IndiaMART are normalised and merged so each business becomes one lead record, with field sources kept intact.",
    eyebrow: "Enrich",
    intro: [
      "Lead de-duplication in LeadGen AI merges results from different sources so each business ends up as one lead record. When a query fans out to Google Maps, LinkedIn and IndiaMART, the results are normalised into a consistent shape and de-duplicated across sources, with every field still tagged with where it came from.",
      "For ops teams, this removes one of the most tedious parts of list building: matching rows from different exports by hand. For reps, it means one owner, one history and no embarrassing double contact.",
    ],
    highlights: [
      "Cross-source merge into one record",
      "Normalisation makes matching possible",
      "Field sources preserved after merging",
      "Prevents double contact",
    ],
    sections: [
      {
        heading: "Why Duplicates Appear In The First Place",
        paragraphs: [
          "The same business is often listed in several places, and each listing describes it slightly differently. One source may use a trading name, another the registered name; one may abbreviate “road”, another may include a floor number. Without matching, a multi-source search returns the same business two or three times.",
        ],
      },
      {
        heading: "Normalise First, Then Compare",
        paragraphs: [
          "De-duplication depends on normalisation. Results are normalised into one record shape (consistent fields, consistent phone formats) so they can be compared like for like. Once normalised, results describing the same business are merged into one record per business.",
        ],
      },
      {
        heading: "What Happens To Fields When Records Merge",
        paragraphs: [
          "Merging does not lose track of where data came from. Each field on the merged record carries the source it came from, so you can see that the address came from Maps and the product context from IndiaMART. Later, enrichment compares new findings with the merged record. It only writes a field when the new value is more complete, and it never overwrites a hand edit.",
        ],
        bullets: [
          "Each field keeps its source tag",
          "Enrichment fills gaps only with more complete values",
          "Manual edits are protected",
        ],
      },
      {
        heading: "Why One Record Per Business Matters Downstream",
        paragraphs: [
          "Duplicates quietly damage everything after discovery. They inflate list sizes, split activity history across records, let two reps own the same business and risk a prospect receiving the same email twice. With one record per business, scores, audits, ownership and outreach logs all build up in one place.",
        ],
      },
      {
        heading: "Handling The Edge Cases",
        paragraphs: [
          "No automatic merge is perfect. Businesses with several branches, very different names across platforms, or shared addresses in a market complex can produce records that look similar but are distinct, or distinct-looking records that are the same. Ops teams typically spot-check merged lists, especially in dense commercial areas, and correct anything that looks wrong.",
        ],
      },
      {
        heading: "De-Duplication And List Sizing",
        paragraphs: [
          "Merging also makes list sizes easier to read. When one query fans out to several sources, the count of leads you work reflects distinct businesses rather than raw listings. That gives managers a truer picture of market size for a category and area, and stops reps overestimating how many prospects remain in a territory.",
        ],
      },
    ],
    steps: {
      heading: "Keeping Lists Clean",
      items: [
        { title: "Run Multi-Source Queries", text: "Search with the sources that suit your segment in a single query." },
        { title: "Let Normalisation And Merging Run", text: "Results are normalised and merged into one record per business." },
        { title: "Spot-Check Dense Areas", text: "Review records in market complexes and multi-branch chains." },
        { title: "Correct By Hand Where Needed", text: "Fix any field you know is wrong; enrichment will not overwrite your edit." },
        { title: "Assign One Owner", text: "Push the clean list into the pipeline so each business has one owner and history." },
      ],
    },
    considerations: {
      heading: "Edge Cases And Trade-Offs",
      items: [
        "Multi-branch businesses may be one company but several genuine locations. Decide how your team wants to treat them.",
        "Very different names across sources can prevent a match; manual review helps.",
        "Shared addresses in malls or industrial estates can make distinct businesses look alike.",
        "De-duplication applies to platform results; data imported from elsewhere is your responsibility to check.",
        "Multi-source discovery with LinkedIn and IndiaMART is a Scale plan feature.",
      ],
    },
    example: {
      heading: "A Merged List For A Building-Materials Supplier",
      text: "Suppose a tile distributor in Morbi runs one query for contractors and interior firms across Maps and IndiaMART. Dozens of firms appear in both. After merging, each firm is one record: Maps supplied the rating and exact address, the directory supplied product context. An ops lead spot-checks firms in a busy commercial complex and separates two that shared a building.",
    },
    faqs: [
      { q: "How Does LeadGen AI Decide Two Results Are The Same Business?", a: "Results are first normalised into a consistent record shape, then de-duplicated across sources so each business becomes one record." },
      { q: "Do I Lose The Source Of A Field When Records Merge?", a: "No. Each field on the merged record keeps the source it came from." },
      { q: "What About Branches Of The Same Business?", a: "Branches can be genuinely separate locations. Review multi-branch chains and decide how your team wants to handle them." },
      { q: "Will Merging Overwrite My Manual Corrections?", a: "Hand-edited fields are protected; enrichment never overwrites a field the user edited manually." },
      { q: "Why Does The Same Business Appear In Several Sources?", a: "Businesses are often listed in many places, and each listing describes them slightly differently. One source may use a trading name and another a registered name, or format an address differently. Without reconciliation, a multi-source search would return the same business several times." },
      { q: "Where Is Manual Review Most Needed After Merging?", a: "Dense commercial areas such as malls and industrial estates, where distinct businesses can share an address, and multi-branch chains. Businesses with very different names across platforms can also escape a match, so spot-check those before assigning owners." },
      { q: "Does De-Duplication Apply To Data I Bring In From Elsewhere?", a: "De-duplication applies to platform results. Data imported or combined from other sources is your responsibility to check, so review it carefully before mixing it with your working lists to avoid duplicate records and double contact." },
      { q: "How Does De-Duplication Change The Size Of My List?", a: "After merging, the count reflects distinct businesses rather than raw listings. That gives managers a truer picture of market size for a category and area, and stops reps overestimating how many prospects remain in a territory." },
    ],
    related: ["/services/multi-source-lead-scraping", "/services/lead-data-normalisation", "/services/source-traceability", "/data-sources", "/services/crm-pipeline-management"],
    cta: { heading: "Work One Clean List, Not Three", text: "Ask for a walkthrough of multi-source discovery and de-duplication.", label: "Request Access", href: "/request-access" },
  },
];
