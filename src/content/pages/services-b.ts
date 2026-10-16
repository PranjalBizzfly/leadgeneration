import type { PageContent } from "../types";

export const pages: PageContent[] = [
  {
    path: "/services/lead-data-normalisation",
    title: "Lead Data Normalisation",
    h1: "Lead Data Normalisation: Consistent, Clean Lead Records",
    metaTitle: "Lead Data Normalisation for Clean Records",
    metaDescription: "How LeadGen AI normalises leads from Google Maps, LinkedIn and IndiaMART into one consistent record per business, with tidy phone formats and source tracking.",
    eyebrow: "Data Quality",
    intro: [
      "Lead data normalisation means turning records that arrive in different shapes from different sources into one consistent format, so every lead has the same fields, written the same way. In LeadGen AI, results from Google Maps, LinkedIn and IndiaMART are normalised into one lead record per business. Phone numbers are normalised and checked for a plausible format, and each field keeps a note of the source it came from.",
      "For ops and RevOps teams, that consistency is what makes everything downstream work: sorting by score, filtering by category or geography, de-duplicating across sources, exporting to CSV and handing records to sellers who should not have to tidy data before they call. This page explains what normalisation covers, where it stops, and how to keep records clean once they are in your workspace.",
    ],
    highlights: [
      "One record shape across three sources",
      "Phone numbers normalised and format-checked",
      "Every field traceable to its source",
      "Manual edits never overwritten",
    ],
    sections: [
      {
        heading: "Why Records From Different Sources Disagree",
        paragraphs: [
          "A map listing, a professional network page and a B2B directory entry describe the same business in different words. One gives a category label, another an industry, a third a list of products. Addresses arrive split into parts or as a single line. Phone numbers come with or without country codes, spaces, brackets or extension notes.",
          "If those variations land in your lead list as they are, filters miss records, duplicates slip through and exported files need manual clean-up before anyone can use them. Normalisation fixes this when the data is collected, rather than leaving it to each user.",
        ],
      },
      {
        heading: "What LeadGen AI Normalises",
        paragraphs: [
          "Every lead is held as a single record per business with a consistent set of fields. Where the sources provide them, those fields are:",
        ],
        bullets: [
          "Business name and category",
          "Full postal address",
          "Website, listed phone numbers and public email addresses",
          "Ratings, review counts and listing-completeness signals",
          "The source each field came from",
        ],
      },
      {
        heading: "Phone Formats And Contact Fields",
        paragraphs: [
          "Phone numbers are the field most likely to arrive in a mess. During enrichment, LeadGen AI normalises numbers and checks them for a plausible format, so a calling team works from a consistent column rather than a mix of styles. A plausible-format check is not a live connection test: it tells you a number is shaped correctly, not that someone will answer it.",
          "Emails added by enrichment are business addresses discovered on the company’s own website. Enrichment only writes a field when the new value is more complete than the existing one. That rule stops a weaker value from replacing a better one.",
        ],
      },
      {
        heading: "Normalisation, De-Duplication And Traceability Work Together",
        paragraphs: [
          "Normalising fields is what makes cross-source de-duplication reliable: two listings can only be recognised as the same business once their names, addresses and contact details are written the same way. LeadGen AI de-duplicates across sources into one record per business.",
          "Because each field records where it came from, a normalised record does not hide its origins. If a seller questions an address or a number, anyone with access can see which source supplied it and when the job that fetched it ran.",
        ],
      },
      {
        heading: "Keeping Records Clean After Import",
        paragraphs: [
          "Normalisation at collection is only half the job. Teams often add a light set of house rules: a naming convention for pipeline stages, an agreed way to record when a contact asked not to be contacted again, and a habit of correcting a field by hand when a seller learns something better on a call.",
          "LeadGen AI never overwrites a field the user edited by hand, so those corrections survive later enrichment runs. Re-enrichment can still fill gaps in other fields and scores recalculate when a lead is re-enriched.",
        ],
      },
    ],
    steps: {
      heading: "How A Lead Becomes A Clean Record",
      items: [
        { title: "Run A Query", text: "Enter a category and location, or a directory search term; the query fans out to each enabled source." },
        { title: "Merge Into One Record", text: "Results are normalised into one lead record per business and de-duplicated across sources." },
        { title: "Enrich And Compare", text: "The enrichment queue finds the website, crawls contact pages and writes a field only when the new value is more complete." },
        { title: "Check Formats", text: "Phone numbers are normalised and checked for a plausible format before your team relies on them." },
        { title: "Review And Correct", text: "Sellers fix anything they learn by hand; those edits are protected from future enrichment." },
      ],
    },
    considerations: {
      heading: "Limits Worth Knowing",
      items: [
        "Normalisation tidies the data that sources provide; it cannot create a field a business never published.",
        "A plausibly formatted phone number may still be out of service, so calling teams should mark dead numbers by hand.",
        "Category labels differ between sources, so agree how your team segments leads rather than relying on one source’s labels.",
        "If you export to another system, map fields carefully so that system’s own rules do not undo your clean formats.",
        "Hand edits are protected, which also means an incorrect manual edit stays until someone corrects it.",
      ],
    },
    example: {
      heading: "A Distributor Cleaning Up A Regional List",
      text: "Imagine a packaging distributor in Coimbatore running an IndiaMART search for food manufacturers alongside a Google Maps query for the same category in three districts. Several businesses appear in both. In LeadGen AI they arrive as single records with consistent addresses and phone formats, each field marked with its source. The ops lead filters by district, notices two numbers a rep has already corrected by hand, and confirms those corrections are still in place after a re-enrichment run before exporting the list to CSV for a field team.",
    },
    faqs: [
      { q: "Does normalisation change the data I typed in myself?", a: "No. LeadGen AI never overwrites a field the user edited by hand. Normalisation and enrichment work around your corrections." },
      { q: "Can I see the original source of a normalised value?", a: "Yes. Each field records the source it came from, so a tidy value is still traceable to the listing, profile or website that supplied it." },
      { q: "Is a normalised phone number guaranteed to connect?", a: "No. Numbers are normalised and checked for a plausible format. That catches malformed entries but cannot confirm a line is live or answered." },
      { q: "Why do some records have more fields than others?", a: "Sources publish different amounts of detail, and some businesses list very little. Normalisation gives every record the same shape, but empty fields stay empty until enrichment finds a more complete value." },
      { q: "Does normalisation merge the same business found on Google Maps and IndiaMART?", a: "Yes. Results from each enabled source are normalised into one lead record per business and de-duplicated across sources. Consistent names, addresses and phone formats are what make that matching reliable, so you work from one record instead of several partial ones." },
      { q: "Why do category labels still differ between my leads?", a: "Each source uses its own vocabulary, so one calls a business a category, another an industry and a third lists products. Normalisation gives records the same shape, but your team should agree its own segments rather than relying on any one source’s taxonomy." },
      { q: "What happens if someone makes a wrong manual edit?", a: "Hand edits are protected from later enrichment, so an incorrect value stays until someone fixes it. Ask sellers to correct fields carefully, and check a field’s source when a value looks odd before deciding which version to keep." },
      { q: "How do I keep clean formats when I export to another tool?", a: "Map fields deliberately and run a small test import first. Some tools reformat phone numbers or strip leading characters, which can undo the consistent formats your records had inside LeadGen AI." },
    ],
    related: ["/services/lead-de-duplication", "/services/phone-number-validation", "/services/source-traceability", "/services/ai-contact-enrichment", "/services/csv-lead-export", "/data-sources"],
    cta: { heading: "See Clean Records From Your Own Query", text: "Run a search and inspect how each lead is normalised, de-duplicated and traced to its source.", label: "Start Free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/services/csv-lead-export",
    title: "CSV Lead Export",
    h1: "CSV Lead Export: Take Your Leads Into Other Tools",
    metaTitle: "CSV Lead Export for Use in Other Tools",
    metaDescription: "Export LeadGen AI leads to CSV on every plan. Learn how to prepare a clean export, map fields to your other tools and keep data hygiene after it leaves.",
    eyebrow: "Export",
    intro: [
      "CSV lead export lets you take the leads you have found, enriched and scored in LeadGen AI and open them in any tool that reads a spreadsheet file. CSV export is included with the lead dashboard on every plan, including free, so teams that run a separate CRM, dialler or reporting sheet can still use LeadGen AI to find prospects.",
      "A CSV is simple and works almost anywhere. That is its strength and its risk: once a file leaves the platform it no longer benefits from source tracking, manual-edit protection or role-based access. This page covers how to prepare a useful export, how to map fields and how to keep exported data tidy.",
    ],
    highlights: [
      "Included on Free, Growth and Scale",
      "Export filtered and score-sorted views",
      "Works with any spreadsheet-ready tool",
      "Plan field mapping before importing",
    ],
    sections: [
      {
        heading: "When Exporting Is The Right Move",
        paragraphs: [
          "Export makes sense when another system is where the work happens: a CRM your sales team already lives in, a calling tool, a mail-merge sheet for a small campaign, or a report for a manager who does not log in. It also suits one-off handovers, such as sending a regional list to a partner.",
          "If your team can work inside LeadGen AI, the built-in CRM pipeline, outreach tools and activity history keep everything linked to each lead. Many teams do both: they work the top band inside the platform and export a wider list for other purposes.",
        ],
      },
      {
        heading: "What A Lead Export Can Include",
        paragraphs: [
          "The fields available depend on what the sources published and what enrichment found. A typical lead record in LeadGen AI carries:",
        ],
        bullets: [
          "Business name, category and full postal address",
          "Website, listed phone numbers and public business emails",
          "Ratings, review counts and listing-completeness signals",
          "The 0–100 lead score on plans that include AI lead scoring",
          "Social profiles and company details added by enrichment",
        ],
      },
      {
        heading: "Preparing An Export Worth Importing",
        paragraphs: [
          "Most messy imports start with an unfiltered export. Before downloading, use the lead dashboard to narrow the view: filter by category, location or score, sort so the strongest leads are first, and remove records you have already decided to skip. A smaller, focused file is easier to check and less likely to create clutter in the destination system.",
          "It also helps to name files consistently, for example with the query, region and date, so anyone can tell later where a list came from even though the CSV itself does not carry the platform’s job records.",
        ],
      },
      {
        heading: "Mapping Fields To The Destination Tool",
        paragraphs: [
          "Every CRM or spreadsheet has its own field names. Spend a few minutes deciding which LeadGen AI columns map to which destination fields, and which should be left out. Common decisions include whether to split the address, where the score should live and whether to bring across ratings and review counts as custom fields.",
          "Run a small test import of ten or twenty rows first. Check phone numbers in particular, because some tools reformat or strip leading characters on import.",
        ],
      },
      {
        heading: "Hygiene Once Data Leaves The Platform",
        paragraphs: [
          "An exported file is a snapshot. It will not update when a lead is re-enriched or a score recalculates, and it will not reflect corrections your team makes in LeadGen AI afterwards. Treat old exports as stale and re-export when you need current data.",
          "Personal data in a spreadsheet is easy to forward and forget. Store exports where access is controlled, delete files you no longer need, and carry any opt-out records across so that a contact who asked not to be contacted is not reached again from another tool.",
        ],
      },
    ],
    steps: {
      heading: "A Clean Export Routine",
      items: [
        { title: "Filter The View", text: "In the lead dashboard, filter by category, location and score so the file contains only the leads you intend to use." },
        { title: "Sort By Priority", text: "Sort by score so the strongest leads sit at the top of the file." },
        { title: "Export To CSV", text: "Download the filtered view and name the file with its query, region and date." },
        { title: "Test The Import", text: "Import a small sample into the destination tool and check field mapping and phone formats." },
        { title: "Import And Archive", text: "Import the full file, then store or delete the CSV according to your team’s data rules." },
      ],
    },
    considerations: {
      heading: "Trade-Offs To Weigh",
      items: [
        "Exports do not stay in sync; scores and enrichment in LeadGen AI may change after you download.",
        "Per-field source tracking and manual-edit protection do not travel with a CSV.",
        "Role-based access stops at the edge of the platform, so control who receives exported files.",
        "Opt-out and suppression records must be carried into other tools by your own process.",
        "For automated, recurring transfers, per-org API keys on the Scale plan may fit better than repeated manual exports.",
      ],
    },
    example: {
      heading: "A Two-Person Consultancy Feeding Its Own CRM",
      text: "Picture a two-person bookkeeping consultancy in leeds that already keeps clients in a separate CRM. Each fortnight the founder runs a Google Maps query for new cafés and salons in nearby postcodes, filters the results to leads with a website and a listed phone number, sorts by score and exports the top forty rows. A test import of five rows shows the CRM dropping a leading zero from phone numbers, so she changes the column type before importing the rest and keeps the file name tied to the query and date.",
    },
    faqs: [
      { q: "Is CSV export available on the Free plan?", a: "Yes. The Free plan includes the lead dashboard and CSV export, alongside three scrape queries, website enrichment and one admin user." },
      { q: "Will my exported file update if a lead changes later?", a: "No. A CSV is a snapshot at the moment you export. Re-export when you need the latest enrichment, scores or corrections." },
      { q: "Can I export only part of my leads?", a: "Yes. Filter and sort the lead dashboard first, then export that view, so the file contains just the segment you need." },
      { q: "Does LeadGen AI connect directly to my CRM?", a: "LeadGen AI does not advertise named CRM connectors. The ways to move data out are CSV export and, on the Scale plan, per-org API keys." },
      { q: "Why did phone numbers lose their leading zero after import?", a: "Some spreadsheets and CRMs treat phone numbers as numbers and drop leading characters. Set the phone column to text in the destination tool, and always check a small test import of ten or twenty rows before loading the full file." },
      { q: "Does an exported CSV show where each field came from?", a: "Plan for it not to. Per-field source tracking and manual-edit protection stay inside LeadGen AI. Naming each file with its query, region and date helps you trace a list later, but the platform remains the reference for sources." },
      { q: "How should I handle opt-outs in exported lists?", a: "Carry them across with your own process. If a contact asked not to be contacted, make sure that status reaches the destination tool too, so nobody reaches them again from a different system or an old spreadsheet." },
      { q: "Is the lead score included in my export?", a: "The 0–100 score can be part of a lead record on plans that include AI lead scoring, which means Growth and Scale. On Free, exports focus on listing and enrichment fields such as contact details, ratings and review counts." },
    ],
    related: ["/services/lead-dashboard", "/services/api-access", "/services/lead-data-normalisation", "/services/crm-pipeline-management", "/plans"],
    cta: { heading: "Build A List And Export It Today", text: "Three free queries are included, with the lead dashboard and CSV export on the Free plan.", label: "Start Free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/services/role-based-team-access",
    title: "Role-Based Team Access",
    h1: "Role-Based Team Access For Prospecting Teams",
    metaTitle: "Role-Based Team Access and Permissions",
    metaDescription: "Set up role-based access in LeadGen AI so each team sees the records it should. Learn how role modules, visibility and team structure fit together.",
    eyebrow: "Administration",
    intro: [
      "Role-based team access means each person in your workspace sees and does only what their role requires. LeadGen AI is multi-tenant and role-based, so each team sees the records it should. The Growth plan includes full team access with seven role modules, while the Free plan has a single admin user.",
      "For admins, the practical question is how to turn a real team (researchers, SDRs, account managers, a manager or two) into roles that keep data tidy without slowing anyone down. This page covers how to think about role modules, visibility and team structure, and the habits that keep permissions sensible as the team grows.",
    ],
    highlights: [
      "Seven role modules on Growth",
      "Each team sees its own records",
      "Free plan: one admin user",
      "Pairs with per-lead activity history",
    ],
    sections: [
      {
        heading: "Why Access Control Matters In Prospecting",
        paragraphs: [
          "A prospecting workspace holds contact details, notes from calls, audit reports and a log of every message sent. Not everyone needs all of it. A researcher building lists rarely needs to send campaigns; a seller working one region may not need another region’s pipeline; a manager needs visibility across both.",
          "Access control reduces mistakes as much as it reduces risk. When people only see the records that belong to them, they are less likely to email someone a colleague is already speaking to or edit a lead they do not own.",
        ],
      },
      {
        heading: "Role Modules And What They Control",
        paragraphs: [
          "On the Growth plan LeadGen AI gives you full team access with seven role modules. Rather than giving everyone the same broad rights, an admin decides which areas of the product each role can use. When planning roles, teams usually think through areas such as:",
        ],
        bullets: [
          "Running scrape queries and spending plan quota",
          "Viewing and editing lead records",
          "Moving leads through CRM pipeline stages",
          "Drafting and sending outreach through the email transport",
          "Viewing SEO audit and opportunity reports",
          "Exporting leads to CSV and administering users",
        ],
      },
      {
        heading: "Visibility Follows Team Structure",
        paragraphs: [
          "LeadGen AI’s role-based access is designed so each team sees the records it should. Combined with pipeline owners, that lets you mirror how your organisation actually sells: by region, by product line, or by client account in an agency.",
          "Because the platform is also multi-tenant, separate organisations or client workspaces stay apart. Role-based access then controls who can do what inside each one.",
        ],
      },
      {
        heading: "Designing Roles For Common Team Shapes",
        paragraphs: [
          "A small team might use just three roles: an admin who manages users and quota, sellers who work the pipeline and send outreach, and a viewer for a founder who wants to watch progress. A larger team typically separates list building from outreach so that query quota is spent with care, and gives managers broad read access without making them admins.",
          "Whatever the shape, start with the narrowest access that lets each person do their job, then widen it when a real need appears. Narrowing rights after people are used to them is harder.",
        ],
      },
      {
        heading: "Accountability Alongside Access",
        paragraphs: [
          "Permissions decide what people can do; activity history shows what they did. The CRM pipeline keeps a full activity history and every outreach message is logged against its lead, so a manager can review who contacted whom and when.",
        ],
      },
    ],
    steps: {
      heading: "Setting Up Roles For A New Team",
      items: [
        { title: "List The Real Jobs", text: "Write down who builds lists, who sells, who manages and who only needs to watch." },
        { title: "Map Jobs To Role Modules", text: "Decide which product areas each job needs: queries, records, pipeline, outreach, reports, export, admin." },
        { title: "Invite With Narrow Rights", text: "Add users with the least access that lets them work, and keep admin rights to one or two people." },
        { title: "Assign Owners", text: "Give pipeline leads clear owners so visibility and responsibility line up." },
        { title: "Review Quarterly", text: "Remove leavers promptly and adjust roles as responsibilities change." },
      ],
    },
    considerations: {
      heading: "Things Admins Should Plan For",
      items: [
        "The Free plan includes one admin user; full team access with seven role modules comes with Growth.",
        "Role design is an organisational decision; the platform enforces it but cannot decide it for you.",
        "Exported CSV files sit outside role-based access, so restrict export rights where data sensitivity matters.",
        "Too many admins weakens control; too few creates a bottleneck when someone is away.",
        "Offboarding is a process: remove access the day someone leaves.",
      ],
    },
    example: {
      heading: "A Regional Sales Team Splitting Responsibilities",
      text: "Consider an office-supplies wholesaler in Ahmedabad with a sales manager, two researchers and four field sellers covering different parts of Gujarat. On the Growth plan the manager sets researchers up to run queries and edit records but not send campaigns, gives sellers pipeline and outreach rights for leads they own, and keeps export with herself. When a seller moves to another role, she removes his outreach access the same day and reassigns his open leads, whose activity history stays intact.",
    },
    faqs: [
      { q: "How many users can I have on the Free plan?", a: "The Free plan includes one admin user. Full team access with seven role modules is part of the Growth plan." },
      { q: "Can different teams see different leads?", a: "Yes. LeadGen AI is role-based so each team sees the records it should, and pipeline owners help line up visibility with responsibility." },
      { q: "Should researchers be able to send outreach?", a: "Many teams separate the two so list building and messaging have clear owners, but it depends on your size. Small teams often combine them." },
      { q: "What happens to a leaver’s leads?", a: "Their access should be removed and their leads reassigned to new owners. Activity history and message logs stay attached to each lead." },
      { q: "How many admins should a workspace have?", a: "Usually one or two. Too many admins weakens control, while only one can create a bottleneck when that person is away. Keep admin rights narrow and give managers broad read access instead of making them admins." },
      { q: "Should everyone be able to export leads to CSV?", a: "Often not. Exported files sit outside role-based access, so once data leaves the platform anyone with the file can forward it. Many teams keep export rights with a manager or admin where data sensitivity matters." },
      { q: "Is it better to start with narrow or broad permissions?", a: "Start narrow. Give each person the least access that lets them do their job, then widen it when a real need appears. Taking rights away after people are used to them is usually harder than adding them." },
      { q: "How often should roles be reviewed?", a: "A quarterly review suits most teams, plus an immediate change whenever someone leaves or changes job. Remove leavers the same day, reassign their leads and adjust roles as responsibilities shift between researchers, sellers and managers." },
    ],
    related: ["/services/multi-tenant-workspaces", "/services/crm-pipeline-management", "/services/outreach-activity-logging", "/security-and-data-handling", "/plans"],
    cta: { heading: "Plan Roles For Your Team", text: "Walk through how role modules would map to your team structure.", label: "Request Access", href: "/request-access" },
  },
  {
    path: "/services/api-access",
    title: "API Access",
    h1: "API Access With Per-Org API Keys",
    metaTitle: "API Access With Per-Org Keys on Scale",
    metaDescription: "LeadGen AI offers per-org API keys on the Scale plan. Learn general integration patterns, how to plan a connection to your systems and how to keep keys secure.",
    eyebrow: "For Technical Teams",
    intro: [
      "LeadGen AI provides per-org API keys on the Scale plan, giving technical teams a programmatic route to the platform alongside the lead dashboard and CSV export. That is what is offered: an API key issued per organisation, on the highest plan, for teams that want LeadGen AI to sit inside their own data flows.",
      "This page does not describe specific endpoints or named connectors. Instead it covers general integration patterns teams commonly use with a prospecting platform, how to plan a connection responsibly, and how to look after keys. For endpoint details, confirm the current documentation with the LeadGen AI team during evaluation.",
    ],
    highlights: [
      "Per-org API keys on Scale",
      "No named third-party connectors claimed",
      "General integration patterns explained",
      "Key security is your responsibility too",
    ],
    sections: [
      {
        heading: "What Is And Is Not Offered",
        paragraphs: [
          "The Scale plan lists per-org API keys alongside unlimited queries, a distributed scrape fleet, multiple sources (LinkedIn, IndiaMART), priority support and SLA, and a dedicated success manager. Free and Growth plans do not list API keys; on those plans, CSV export is the route for moving leads into other tools.",
          "LeadGen AI does not advertise ready-made connectors to named CRMs or marketing tools. Any connection to your systems is something your team builds using the API key, so plan for engineering time.",
        ],
      },
      {
        heading: "Common Integration Patterns",
        paragraphs: [
          "The following are general patterns teams use with prospecting data. Treat them as guidance for planning, and confirm what the API supports before committing to a design.",
        ],
        bullets: [
          "Scheduled sync: a nightly job pulls new or updated leads into an internal database or warehouse.",
          "Downstream push: your own service forwards high-scoring leads into the CRM your sellers already use.",
          "Reporting: lead counts, scores and pipeline status feed an internal dashboard.",
          "Enrichment of your own lists: internal records are matched against platform data where the API allows it.",
        ],
      },
      {
        heading: "Planning The Data Flow",
        paragraphs: [
          "Before writing code, decide which system is the source of truth for each field. LeadGen AI never overwrites a field a user edited by hand and records where each value came from. If your integration writes data back and forth, design it so those protections are not undone by a sync that blindly copies values.",
          "Also decide how often data needs to move. Scores recalculate when a lead is re-enriched, so a one-off copy will drift. A periodic sync with clear rules for updates usually works better than a single bulk import.",
        ],
      },
      {
        heading: "Keeping API Keys Secure",
        paragraphs: [
          "A per-org key represents your organisation’s access, so treat it like a password. Standard good practice applies:",
        ],
        bullets: [
          "Store keys in a secrets manager or environment variables, never in source code.",
          "Limit who in your organisation can view or rotate the key.",
          "Rotate the key when a team member with access leaves or a leak is suspected.",
          "Log your own integration’s calls so you can trace unexpected activity.",
        ],
      },
      {
        heading: "Responsible Use Of Automated Access",
        paragraphs: [
          "Automation makes it easy to move a lot of contact data quickly. The same obligations apply as in the interface: honour opt-outs, respect sending limits in any downstream outreach, and check data protection rules in the jurisdictions you work in. If a contact has asked not to be contacted, make sure that status reaches every system the API feeds.",
        ],
      },
    ],
    steps: {
      heading: "Planning An Integration",
      items: [
        { title: "Confirm Plan And Scope", text: "Check that you are on, or moving to, the Scale plan, and confirm current API documentation with the LeadGen AI team." },
        { title: "Define The Use Case", text: "Write down exactly what data should move, in which direction and how often." },
        { title: "Assign Field Ownership", text: "Decide which system owns each field so syncs never overwrite better data." },
        { title: "Secure The Key", text: "Store the per-org key in a secrets manager and restrict who can access it." },
        { title: "Build, Test, Monitor", text: "Start with a small sample, verify results against the dashboard, then add logging and alerts." },
      ],
    },
    considerations: {
      heading: "Before You Commit Engineering Time",
      items: [
        "API keys are listed only on the Scale plan; smaller plans rely on CSV export.",
        "There are no advertised named connectors, so any CRM link is custom work.",
        "Integrations need maintenance as both your systems and the platform change.",
        "Automated flows can spread stale or opted-out contacts quickly if suppression is not handled.",
        "Role-based access does not extend to systems you copy data into; secure those separately.",
      ],
    },
    example: {
      heading: "A Data Team Feeding An Internal Warehouse",
      text: "Suppose a facilities-services group in Bengaluru runs high-volume prospecting across several cities on the Scale plan. Its two-person data team uses the per-org API key in a nightly job that copies new and re-scored leads into the company’s internal warehouse, where regional managers already have reports. They store the key in their secrets manager, treat LeadGen AI as the owner of enrichment fields, and make sure any opt-out recorded in their own systems is checked before a lead is passed to sellers.",
    },
    faqs: [
      { q: "Which plan includes API access?", a: "Per-org API keys are listed on the Scale plan, alongside unlimited queries, the distributed scrape fleet and priority support." },
      { q: "Is there a ready-made connector for my CRM?", a: "LeadGen AI does not advertise named CRM connectors. Teams use CSV export, or build their own connection with per-org API keys on Scale." },
      { q: "Is the key per user or per organisation?", a: "Keys are per org, meaning they are issued at the organisation level. Manage who can see them accordingly." },
      { q: "Where can I find endpoint documentation?", a: "Ask the LeadGen AI team during evaluation for current API documentation; this page covers planning and general patterns only." },
      { q: "Can I use the API on the Growth plan?", a: "Per-org API keys are listed only on the Scale plan. On Free and Growth, CSV export is the route for moving leads into other tools, which works well for smaller or less frequent transfers." },
      { q: "What should I do if our API key is exposed?", a: "Treat it like a leaked password. Rotate the key promptly, update your integration to use the new one, and check your own logs for unexpected activity. Rotating is also sensible whenever a team member with access leaves." },
      { q: "How often should our integration sync leads?", a: "It depends on your use case. Scores recalculate when leads are re-enriched, so a one-off copy will drift. A periodic sync, such as a nightly job with clear rules for updates, usually works better than a single bulk import." },
      { q: "How do I stop a sync from overwriting corrected data?", a: "Decide which system owns each field before writing code. LeadGen AI never overwrites a field a user edited by hand, so design your integration not to blindly copy values back and forth in a way that undermines those corrections." },
    ],
    related: ["/services/csv-lead-export", "/services/distributed-scrape-fleet", "/services/multi-tenant-workspaces", "/platform-overview", "/plans"],
    cta: { heading: "Discuss An Integration", text: "Talk through your use case and what the Scale plan’s per-org API keys would involve.", label: "Contact", href: "/contact" },
  },
  {
    path: "/services/distributed-scrape-fleet",
    title: "Distributed Scrape Fleet",
    h1: "Distributed Scrape Fleet For High-Volume Prospecting",
    metaTitle: "Distributed Scrape Fleet for Large Jobs",
    metaDescription: "LeadGen AI runs long scrape jobs on a worker fleet, so large jobs continue after you close the tab. See how background jobs, quotas and job records work.",
    eyebrow: "Infrastructure",
    intro: [
      "A distributed scrape fleet is a pool of background workers that runs large data-collection jobs in parallel, independent of the user’s browser. In LeadGen AI, long jobs run on a worker fleet, so a large scrape keeps going after the browser tab is closed. The Scale plan includes a distributed scrape fleet for high-volume work that needs dedicated infrastructure.",
      "For teams prospecting across many categories and cities, this changes how work is planned: you queue jobs and return to finished results rather than waiting at a screen. Quotas are enforced per plan and per billing cycle, and every job records what it fetched and when, so volume stays easy to track.",
    ],
    highlights: [
      "Jobs continue after the tab closes",
      "Distributed fleet included on Scale",
      "Quotas per plan and billing cycle",
      "Every job records what it fetched",
    ],
    sections: [
      {
        heading: "Why Large Scrapes Need Background Workers",
        paragraphs: [
          "A single query in LeadGen AI fans out to each enabled source (Google Maps, LinkedIn and IndiaMART) and then results are normalised, de-duplicated and queued for enrichment. Multiply that across dozens of locations and categories and the work is far too long to run in one browser session.",
          "Running jobs on a worker fleet separates the work from the person who started it. A seller can start a regional scrape before a meeting, close the laptop, and find results ready afterwards.",
        ],
      },
      {
        heading: "What The Fleet Handles",
        paragraphs: [
          "The fleet takes on the long-running parts of the pipeline so the interface stays responsive. In practice that means:",
        ],
        bullets: [
          "Fanning a query out to each enabled source",
          "Collecting listing fields such as name, category, address, website, phones, ratings and reviews",
          "Feeding new leads into the automatic enrichment queue",
          "Recording what each job fetched and when",
        ],
      },
      {
        heading: "Quotas And Plan Limits",
        paragraphs: [
          "Quotas are enforced per plan and per billing cycle. The Free plan includes three scrape queries, Growth includes 50 scrape queries per month, and Scale offers unlimited queries with a distributed scrape fleet and multiple sources including LinkedIn and IndiaMART.",
          "Even with unlimited queries, volume should be planned. Large jobs produce large lists that someone must review, score and contact responsibly, so plan scrapes around the capacity of the team that will work them.",
        ],
      },
      {
        heading: "Job Records And Accountability",
        paragraphs: [
          "Because every job records what it fetched and when, you can answer practical questions later: which query produced this lead, how fresh is this data, and how much of this cycle’s quota has gone on a particular campaign. Combined with per-field source tracking, job records give ops teams the audit trail they need to trust a large data set.",
        ],
      },
      {
        heading: "Organising High-Volume Work",
        paragraphs: [
          "Teams running many jobs usually follow a simple naming and scheduling habit: one job per category-and-region pair, a clear owner per job, and a regular schedule for re-running searches in markets that change quickly. Spreading large jobs across a week also spreads the follow-up work for sellers, rather than delivering thousands of leads on a single day.",
        ],
      },
    ],
    steps: {
      heading: "Running A Large Job On The Fleet",
      items: [
        { title: "Design The Queries", text: "Break a market into category and location pairs, or directory search terms, that match your segments." },
        { title: "Check Quota", text: "Confirm how many queries your plan and billing cycle allow before queuing a batch." },
        { title: "Queue And Leave", text: "Start the jobs; the worker fleet keeps running after you close the browser tab." },
        { title: "Review Results", text: "Return to normalised, de-duplicated leads moving through enrichment and scoring." },
        { title: "Check The Job Record", text: "Use the job’s record of what it fetched and when to confirm coverage and freshness." },
      ],
    },
    considerations: {
      heading: "What To Weigh Before Scaling Up",
      items: [
        "The distributed fleet and unlimited queries are Scale plan features; Free and Growth have fixed query quotas.",
        "More data is only useful if your team can qualify and contact it responsibly.",
        "Source coverage varies by market; some regions have sparse listings no matter how many jobs you run.",
        "Scraped data ages, so schedule refreshes rather than treating a large run as permanent.",
        "Respect each source’s terms and local data protection rules; take advice where unsure.",
      ],
    },
    example: {
      heading: "A National Supplier Mapping A New Vertical",
      text: "Imagine a commercial-kitchen equipment supplier on the Scale plan that wants to map restaurants and caterers across twelve Indian cities. The operations lead queues one Google Maps job per city on Monday morning and an IndiaMART search for catering businesses, then closes her laptop. By the afternoon the jobs have finished in the background; leads are de-duplicated and moving through enrichment. She uses the job records to confirm every city was covered, then releases two cities a day to the sales team so follow-up stays manageable.",
    },
    faqs: [
      { q: "Do I need to keep my browser open while a scrape runs?", a: "No. Long jobs run on a worker fleet, so a large scrape keeps going after the browser tab is closed." },
      { q: "Which plan includes the distributed scrape fleet?", a: "The Scale plan lists a distributed scrape fleet, unlimited queries and multiple sources including LinkedIn and IndiaMART." },
      { q: "How are query limits counted?", a: "Quotas are enforced per plan and per billing cycle: three queries on Free, 50 per month on Growth and unlimited on Scale." },
      { q: "Can I tell when a lead was fetched?", a: "Yes. Every job records what it fetched and when, and each field records its source." },
      { q: "Does unlimited queries mean I should scrape everything at once?", a: "No. Large jobs produce large lists that someone must review, score and contact responsibly. Plan scrapes around your team’s capacity, and consider releasing results in batches so follow-up stays manageable." },
      { q: "How should I organise many jobs across regions?", a: "Many teams run one job per category-and-region pair, give each job a clear owner and spread large batches across the week. That keeps job records easy to read and avoids delivering thousands of leads on a single day." },
      { q: "Why did a large job return few leads in one region?", a: "Source coverage varies by market, and some areas simply have sparse listings. Check the job record to confirm what was fetched, then try different category terms or add another source such as IndiaMART where it suits the segment." },
      { q: "How often should large scrapes be re-run?", a: "Scraped data ages, especially in local markets where businesses open and close often. Schedule refreshes for fast-changing segments rather than treating one big run as permanent, and use job records to see how old each data set is." },
    ],
    related: ["/services/multi-source-lead-scraping", "/services/source-traceability", "/services/api-access", "/services/lead-list-building", "/platform-overview", "/plans"],
    cta: { heading: "Plan High-Volume Prospecting", text: "See how the Scale plan’s distributed fleet would handle your markets.", label: "Request Access", href: "/request-access" },
  },
  {
    path: "/services/lead-dashboard",
    title: "Lead Dashboard",
    h1: "The Lead Dashboard: Find, Filter And Act On Leads",
    metaTitle: "Lead Dashboard: Views, Filters and Sorting",
    metaDescription: "Use the LeadGen AI lead dashboard to view, filter and sort leads by score, push the top band into your pipeline and export to CSV. Included on every plan.",
    eyebrow: "Everyday Workspace",
    intro: [
      "The lead dashboard is where you see every lead in your LeadGen AI workspace, filter it down to the ones that matter and decide what to do next. It is included on every plan, from Free upwards, together with CSV export. On plans with AI lead scoring you can sort and filter by the 0–100 score and push the top band into the CRM pipeline.",
      "Most users spend more time here than anywhere else. This page explains what the dashboard shows, how to build useful views, and how to turn a long list into a short list you can work each day.",
    ],
    highlights: [
      "Included on Free, Growth and Scale",
      "Sort and filter by 0–100 score",
      "Push top leads into the pipeline",
      "Export any filtered view to CSV",
    ],
    sections: [
      {
        heading: "What Each Lead Row Tells You",
        paragraphs: [
          "Each lead is one normalised record per business, de-duplicated across sources. At a glance you can see the details that decide whether a lead is worth pursuing:",
        ],
        bullets: [
          "Business name, category and location",
          "Website, phone numbers and public emails",
          "Ratings, review counts and listing completeness",
          "The lead score and its stored reasons, where scoring is on",
          "Opportunity flags such as no website or weak audit",
        ],
      },
      {
        heading: "Filtering To A Workable List",
        paragraphs: [
          "A raw scrape is rarely a to-do list. Filters narrow it: by category to focus on one vertical, by location to match a territory, by whether a website or phone exists, or by score band. Combine filters to answer real questions such as ‘which dental clinics in this city have no reachable contact route?’ or ‘which manufacturers scored above our threshold this week?’",
        ],
      },
      {
        heading: "Sorting By Score And Reading The Reasons",
        paragraphs: [
          "On plans that include AI lead scoring, each lead has a single 0–100 score with the reasons stored on the record. The score reflects record completeness, website health, fit against your stated market, category and geography, and signals of an active, operating business. Sorting by score puts the strongest leads first.",
          "Read the reasons before acting on a number. Two leads with similar scores may be strong for different reasons, and the reasons often suggest the right opening line.",
        ],
      },
      {
        heading: "From Dashboard To Pipeline And Outreach",
        paragraphs: [
          "Once you have a good view, push the top band into the CRM pipeline, where leads gain stages, owners and an activity history. From there, AI-drafted outreach can use each lead’s enrichment and audit data, and campaigns go out through your configured email transport with every message logged.",
        ],
      },
      {
        heading: "Exporting A View",
        paragraphs: [
          "Any filtered, sorted view can be exported to CSV for use in other tools. Because an export is a snapshot, filter carefully first and re-export when you need current scores or enrichment.",
        ],
      },
    ],
    steps: {
      heading: "A Daily Dashboard Routine",
      items: [
        { title: "Open Your Territory View", text: "Filter by the categories and locations you own." },
        { title: "Sort By Score", text: "Put the highest-scoring leads at the top and skim their stored reasons." },
        { title: "Check Opportunity Flags", text: "Note leads flagged for a missing website, unreachable contact route or weak audit." },
        { title: "Push To Pipeline", text: "Move the day’s best leads into the CRM pipeline and assign owners." },
        { title: "Export If Needed", text: "Download a CSV of any view another tool or colleague needs." },
      ],
    },
    considerations: {
      heading: "Using The Dashboard Well",
      items: [
        "Lead scoring is part of Growth and Scale; on Free the dashboard focuses on listing and enrichment fields.",
        "A score is a prioritisation aid, not a verdict; check the reasons and use judgement.",
        "Very broad views hide good leads; build narrow views for each segment you work.",
        "Exports do not update, so avoid working from old downloads.",
        "Role-based access determines which records each user sees on their dashboard.",
      ],
    },
    example: {
      heading: "An SDR’s Monday Morning",
      text: "Picture an SDR at a small HR-software company in Kochi who owns the hospitality vertical in Kerala. On Monday she opens the dashboard, filters to hotels and resorts in her districts, sorts by score and reads the reasons for the top twenty. Three carry a weak-audit flag that suggests their booking pages are slow, which gives her a natural reason to get in touch. She pushes twelve leads into the pipeline, assigns them to herself and exports the rest of the view for a colleague planning a later campaign.",
    },
    faqs: [
      { q: "Is the lead dashboard available on the Free plan?", a: "Yes. The Free plan includes the lead dashboard and CSV export along with three scrape queries and website enrichment." },
      { q: "Can I sort leads by score on every plan?", a: "AI lead scoring is listed on Growth and Scale. On those plans you can sort and filter by score and push the top band into the pipeline." },
      { q: "Do I see every lead my organisation has collected?", a: "That depends on your role. LeadGen AI uses role-based access so each team sees the records it should." },
      { q: "What is the quickest way to share a list with someone outside the platform?", a: "Filter and sort the view you want, then export it to CSV, keeping in mind that the file is a snapshot." },
      { q: "What are opportunity flags on the dashboard?", a: "They mark leads with no website, a site that does not resolve, no reachable contact route or a weak audit, each with the evidence behind it. They help you spot a specific reason to get in touch alongside the score." },
      { q: "How do I build a view for my territory?", a: "Filter by the categories and locations you own, then sort by score on plans with AI lead scoring. Narrow views for each segment you work are more useful than one broad view, which tends to hide good leads." },
      { q: "Should I trust the score without reading the reasons?", a: "No. The score is a prioritisation aid, not a verdict. Two leads with similar scores may be strong for different reasons, and the stored reasons often suggest the best opening line for each one." },
      { q: "What happens when I push leads into the pipeline?", a: "They gain stages, owners and an activity history in the CRM pipeline. From there you can use AI-drafted outreach built from each lead’s enrichment and audit data, sent through your configured email transport with every message logged." },
    ],
    related: ["/services/ai-lead-scoring", "/services/sales-prioritisation", "/services/csv-lead-export", "/services/crm-pipeline-management", "/how-it-works"],
    cta: { heading: "Try The Dashboard With Your Own Query", text: "Three free queries, the lead dashboard and CSV export are included on Free.", label: "Start Free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/services/source-traceability",
    title: "Source Traceability",
    h1: "Source Traceability: Know Where Every Lead Field Came From",
    metaTitle: "Source Traceability for Every Lead Field",
    metaDescription: "LeadGen AI records the source of each lead field and what every job fetched and when. See how traceability builds trust and supports responsible prospecting.",
    eyebrow: "Data Trust",
    intro: [
      "Source traceability means you can tell where each piece of lead data came from. LeadGen AI records the source of every field on every lead. Enrichment notes where each value came from, and every scrape job records what it fetched and when. Nothing in a record is an unexplained value.",
      "For data-conscious teams, that matters for three reasons: sellers trust records they can check, ops teams can find the cause of bad data quickly, and compliance conversations go better when you can show how a contact detail was obtained. This page explains what is traced, how to use it and where its limits lie.",
    ],
    highlights: [
      "Per-field source on every lead",
      "Job records of what and when",
      "Enrichment notes each value’s origin",
      "Manual edits stay protected",
    ],
    sections: [
      {
        heading: "What Gets Traced",
        paragraphs: [
          "Traceability in LeadGen AI works at three levels:",
        ],
        bullets: [
          "Field level: each field on a lead records the source it came from: Google Maps, LinkedIn, IndiaMART or the company’s own website.",
          "Enrichment level: enrichment reads only the sources you asked for and records where each value came from.",
          "Job level: every scrape job records what it fetched and when.",
        ],
      },
      {
        heading: "Why Traceability Builds Trust In Data",
        paragraphs: [
          "Sellers quickly stop trusting a list when a few numbers are wrong and nobody can say why. With per-field sources, a seller who finds a bad phone number can see whether it came from a directory listing or the business’s own contact page, and ops can decide whether the problem is a stale listing or something else.",
          "It also helps when sources disagree. If a map listing and a website show different addresses, knowing which is which lets a person make a sensible call rather than guessing.",
        ],
      },
      {
        heading: "Traceability And Responsible Prospecting",
        paragraphs: [
          "Many data protection laws expect organisations to know how they obtained personal data and to be able to explain it. Recording sources does not by itself make any processing lawful, but it gives you the facts you need when a contact asks where you found their details or when you review your own practices. Check the current rules in your markets and take legal advice for your situation.",
          "Business emails added by enrichment are discovered on the company’s own site, and enrichment reads only the sources the user asked for. Both are useful facts in those conversations.",
        ],
      },
      {
        heading: "How Traceability Works With Enrichment",
        paragraphs: [
          "When enrichment runs, it compares new results with the existing record and only writes a field when the new value is more complete. It updates the source note to match. It never overwrites a field the user edited by hand, so human corrections are not silently replaced by automated values.",
        ],
      },
      {
        heading: "Putting Traceability To Work",
        paragraphs: [
          "Teams often build a few habits around source information: checking the source before calling a number that looks odd, reviewing job records when coverage of a region seems thin, and noting in the CRM when a seller corrects a field so the reason is visible later. Over time this shows which sources work best for which markets and segments.",
        ],
      },
    ],
    steps: {
      heading: "Investigating A Questionable Field",
      items: [
        { title: "Spot The Issue", text: "A seller flags a phone number, email or address that looks wrong." },
        { title: "Check The Field’s Source", text: "Open the lead and see which source supplied the value." },
        { title: "Check The Job Record", text: "Look at when the job that fetched it ran to judge freshness." },
        { title: "Correct By Hand", text: "Edit the field with the right value; the manual edit will not be overwritten by later enrichment." },
        { title: "Note The Pattern", text: "If one source is often wrong for a segment, adjust which sources you enable for it." },
      ],
    },
    considerations: {
      heading: "Limits Of Traceability",
      items: [
        "Knowing a value’s source does not prove the value is still correct; listings go stale.",
        "Traceability supports compliance work but does not replace legal advice or your own policies.",
        "Source notes stay in the platform; a CSV export or downstream system may not carry them.",
        "Manual edits are protected, so a wrong manual value persists until someone fixes it.",
        "Teams need a habit of checking sources for traceability to change outcomes.",
      ],
    },
    example: {
      heading: "Answering A Prospect’s Question",
      text: "Suppose a marketing consultant in bristol emails the owner of a local joinery firm, who replies asking where his address came from. The consultant opens the lead in LeadGen AI, sees the business email was found on the firm’s own contact page and the phone number came from its map listing, and replies with exactly that. The owner asks not to be contacted again, so the consultant records the opt-out against the lead, where it sits alongside the logged message history.",
    },
    faqs: [
      { q: "Can I see which source supplied a specific field?", a: "Yes. Each lead records the source each field came from, such as a map listing, a directory entry or the company’s website." },
      { q: "Does LeadGen AI record when data was collected?", a: "Every job records what it fetched and when, so you can judge how fresh a lead’s data is." },
      { q: "Is source traceability enough for data protection compliance?", a: "It helps you explain where data came from, but compliance depends on your processing, purposes and local law. Take legal advice for your markets." },
      { q: "Do source notes survive a CSV export?", a: "Plan for them not to. Treat traceability as a platform feature and keep the platform as your reference when questions arise." },
      { q: "What should I do when two sources show different addresses?", a: "Check which source supplied each value and when the job that fetched it ran. A person can then make a sensible call, confirm on the call if needed, and correct the field by hand, which later enrichment will not overwrite." },
      { q: "How do I answer a prospect who asks where I found their details?", a: "Open the lead and check the field’s source, such as the firm’s own contact page or its map listing, then explain simply. If they ask not to be contacted again, record the opt-out against the lead straight away." },
      { q: "Does enrichment change the source note on a field?", a: "Enrichment writes a field only when the new value is more complete and updates the source note accordingly. It never overwrites a field edited by hand, so human corrections are not silently replaced." },
      { q: "Can traceability show which sources work best for a segment?", a: "Yes, over time. If one source is often wrong or thin for a particular market, patterns in field sources and job records make that visible, and you can adjust which sources you enable for that segment." },
    ],
    related: ["/services/lead-data-normalisation", "/services/distributed-scrape-fleet", "/services/outreach-activity-logging", "/responsible-prospecting", "/security-and-data-handling", "/data-sources"],
    cta: { heading: "Work With Data You Can Explain", text: "See per-field sources and job records on your own leads.", label: "Start Free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/services/local-business-prospecting",
    title: "Local Business Prospecting",
    h1: "Local Business Prospecting With Maps-Led Discovery",
    metaTitle: "Local Business Prospecting Workflow",
    metaDescription: "A practical workflow for selling to local SMBs: find businesses on Google Maps, enrich and score them, spot opportunities and run personalised outreach.",
    eyebrow: "For Sellers To Local SMBs",
    intro: [
      "Local business prospecting is finding and approaching small businesses in a defined area (salons, clinics, restaurants, trades, shops). LeadGen AI handles it as one pipeline: a category-and-location query on Google Maps, automatic contact enrichment, a 0–100 score with stored reasons, opportunity flags and AI-drafted outreach sent through your own email transport.",
      "If you sell anything to local SMBs (software, marketing, accounting, supplies, equipment servicing) the challenge is rarely finding businesses. It is deciding which ones are worth your time and saying something relevant when you reach out. This page sets out a step-by-step workflow in LeadGen AI for exactly that.",
    ],
    highlights: [
      "Category plus location on Google Maps",
      "Contacts enriched from business websites",
      "Scores and flags guide priority",
      "Outreach logged against each lead",
    ],
    sections: [
      {
        heading: "Why Local Markets Reward A Focused Approach",
        paragraphs: [
          "Local businesses are often owner-run, busy and wary of generic pitches. They respond better to someone who knows their area and has noticed something specific about their business. They are also tightly clustered by geography, which makes territory-based work efficient for field and phone sellers alike.",
          "Map listings are a natural starting point because nearly every local business keeps one, and listings carry useful signals: category, address, phone, website, ratings, review counts and how complete the listing is.",
        ],
      },
      {
        heading: "Step One: Discover Businesses By Category And Place",
        paragraphs: [
          "Start with a query that pairs a category with a location, such as ‘physiotherapy clinics in Indiranagar’ or ‘bakeries in Manchester city centre’. The query fans out to each enabled source and results are normalised into one de-duplicated record per business. For product sellers in India, an IndiaMART search can add suppliers and traders that do not rely on map listings.",
          "Break a city into neighbourhoods or a region into towns rather than running one huge query; smaller segments are easier to review and assign.",
        ],
      },
      {
        heading: "Step Two: Enrich And Score",
        paragraphs: [
          "New leads queue for enrichment automatically. The platform finds each website, crawls the pages that usually list contact details, and adds business emails found on the company’s own site, normalised phone numbers, social profiles and company details.",
          "On Growth and Scale, each lead then gets a 0–100 score reflecting record completeness, website health, fit against your stated market, category and geography, and signals of an active, operating business. Sort by score to find businesses that are clearly trading and match your target.",
        ],
      },
      {
        heading: "Step Three: Find The Reason To Reach Out",
        paragraphs: [
          "Opportunity detection flags businesses with no website, sites that don’t resolve, listings with no reachable contact route and weak audits, each with the evidence behind it. For sellers of web, marketing or booking services, those flags are a direct opening. For other sellers, the enrichment and listing data still give context: review volume, category, how established the online presence looks.",
        ],
        bullets: [
          "Web and marketing services: lead with a missing site or weak audit.",
          "Software and booking tools: reference the business type and current online set-up.",
          "Suppliers and services: reference category, location and visible scale.",
        ],
      },
      {
        heading: "Step Four: Personalised Outreach And Follow-Up",
        paragraphs: [
          "Push the top band into the CRM pipeline, assign owners by territory and use AI-drafted outreach that draws on each lead’s enrichment and audit data. Review every draft before sending. Campaigns go through your configured email transport, respect sending limits and opt-out obligations, and every message is logged against its lead.",
        ],
      },
    ],
    steps: {
      heading: "The Local Prospecting Loop",
      items: [
        { title: "Query A Neighbourhood", text: "Run a category-and-location search for one segment of your territory." },
        { title: "Let Enrichment Run", text: "Contacts, websites and social profiles are added automatically from the sources you chose." },
        { title: "Sort And Filter", text: "Use score, flags and listing signals to pick this week’s best twenty or thirty businesses." },
        { title: "Draft And Review", text: "Generate AI drafts from enrichment and audit data, then edit them so each sounds like you." },
        { title: "Send, Log, Follow Up", text: "Send through your email transport and manage replies and next steps in the pipeline." },
      ],
    },
    considerations: {
      heading: "Practical Cautions",
      items: [
        "Many very small businesses publish little beyond a phone number, so some leads will have no email to enrich.",
        "Rules on unsolicited email and calls differ by country; check current requirements and take advice where needed.",
        "Owners talk to each other in small markets, so a careless message can travel; keep volume modest.",
        "Scores and flags support your judgement; a high-scoring business may still not need what you sell.",
        "Free covers three queries; sustained territory work usually needs Growth’s 50 monthly queries and scoring.",
      ],
    },
    example: {
      heading: "A POS Reseller Covering One City",
      text: "Imagine a point-of-sale reseller in Jaipur with two sellers. Each Monday they run Google Maps queries for cafés and restaurants in two neighbourhoods, let enrichment fill in websites and emails, then sort by score. They filter for businesses with healthy review counts, a sign of steady footfall, and check opportunity flags for those without a reachable contact route, which they plan to visit in person. The rest receive reviewed AI drafts referencing their neighbourhood and type of venue, sent through the company’s own mail server and logged against each lead.",
    },
    faqs: [
      { q: "Which source is best for local businesses?", a: "Google Maps is the natural starting point for most local categories. IndiaMART suits suppliers and traders in India, and LinkedIn adds company context where a business has a presence there." },
      { q: "What if a local business has no email address?", a: "Enrichment only adds emails found on the company’s own site. For businesses without one, use the listed phone number or plan an in-person visit." },
      { q: "How many businesses should I contact each week?", a: "There is no universal number. Most teams pick a volume they can personalise and follow up properly, then adjust based on replies." },
      { q: "Can I split a city between several sellers?", a: "Yes. Run queries by neighbourhood, push leads into the pipeline and assign owners, with role-based access controlling what each person sees." },
      { q: "How should I break up a city for prospecting?", a: "Run separate queries by neighbourhood or town rather than one huge query. Smaller segments are easier to review, easier to assign to sellers and let you mention the area in your message, which local owners tend to notice." },
      { q: "What can I say to a business if I do not sell web services?", a: "Use the listing and enrichment data for context: their category, neighbourhood, review volume and current online set-up. Software sellers might reference the business type, while suppliers can reference category, location and visible scale." },
      { q: "Is the Free plan enough for ongoing local prospecting?", a: "Free includes three queries, which suits a trial of one or two neighbourhoods. Sustained territory work usually needs Growth, which adds 50 monthly queries, AI lead scoring and AI-drafted outreach." },
      { q: "What mistakes hurt local prospecting most?", a: "Generic pitches and high volume. Owners in small markets talk to each other, so a careless message can travel. Review every AI draft, keep volume modest and check local rules on unsolicited email and calls before starting." },
    ],
    related: ["/services/google-maps-lead-extraction", "/services/business-opportunity-detection", "/services/ai-drafted-outreach-messages", "/services/sales-prioritisation", "/services/lead-list-building"],
    cta: { heading: "Map Your Local Market", text: "Run your first category-and-location queries free and see how leads are enriched and scored.", label: "Start Free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/services/agency-client-prospecting",
    title: "Agency Client Prospecting",
    h1: "Agency Client Prospecting With Audit-Led Pitches",
    metaTitle: "Agency Client Prospecting: Audit-Led Pitches",
    metaDescription: "How marketing agencies can find new clients with LeadGen AI: discover businesses, flag opportunities, attach audit evidence and send outreach that proves value.",
    eyebrow: "For Marketing Agencies",
    intro: [
      "Agency client prospecting works best when your first message shows expertise rather than claiming it. LeadGen AI is built for that: it finds businesses in your target niche and area, flags opportunities such as missing websites and weak audits with the evidence behind them, and drafts outreach that uses each lead’s own enrichment and audit data.",
      "Marketing agencies often depend on referrals, which are welcome but unpredictable. A repeatable outbound process fills the gaps. This page sets out a concrete workflow for agencies, from choosing a niche to running a follow-up sequence, using only features LeadGen AI actually has.",
    ],
    highlights: [
      "Find clients by niche and area",
      "Opportunity flags with supporting evidence",
      "Drafts built from audit findings",
      "Separate workspaces for teams or clients",
    ],
    sections: [
      {
        heading: "Choose A Niche You Can Speak To",
        paragraphs: [
          "Agencies that prospect ‘any business’ struggle to say anything specific. Pick one or two niches where you already have results or knowledge (dental practices, boutique hotels, home-improvement trades, B2B manufacturers) and a geography you can serve. The narrower the niche, the more specific your observations about a prospect’s marketing can be.",
        ],
      },
      {
        heading: "Build The Target List",
        paragraphs: [
          "Run category-and-location queries on Google Maps for local niches, IndiaMART searches for Indian manufacturers and suppliers, and add LinkedIn on the Scale plan for company context. Results are de-duplicated into one record per business and enriched automatically with websites, business emails from the company’s own site, phone numbers and social profiles.",
          "Listing signals already hint at need: a business with many reviews but a thin listing, or a respected firm with no social presence, may be poorly served by its current marketing.",
        ],
      },
      {
        heading: "Let Opportunity Flags And Audits Do The Qualifying",
        paragraphs: [
          "Business opportunity detection flags businesses with no website, sites that don’t resolve, listings with no reachable contact route and weak audits in the bottom band, each with its evidence. On Growth, SEO and website-build reports add depth: the audit grades technical health, content, metadata, structured data and performance, ranks findings by severity in plain English and produces a prioritised fix list.",
          "Map the flags to your services so each lead lands with the right offer:",
        ],
        bullets: [
          "No website or non-resolving site: website build",
          "Weak audit on metadata, content or structured data: SEO retainer",
          "Strong reviews, weak online presence: reputation and social work",
          "Performance issues: site speed and technical fixes",
        ],
      },
      {
        heading: "Pitch With Evidence, Not Adjectives",
        paragraphs: [
          "AI-drafted outreach uses each lead’s enrichment and audit data, so a first message can mention two or three specific findings and offer the full fix list. Edit each draft so the tone is yours and the claims are ones you can stand behind. Avoid promising rankings or traffic; describe what you found and what you would fix.",
        ],
      },
      {
        heading: "Manage The Pipeline As A Team",
        paragraphs: [
          "Push qualified prospects into the CRM pipeline with stages that suit an agency sale: contacted, audit shared, call booked, proposal sent, won or lost. Owners and activity history keep account managers on the same page, and every message sent through your email transport is logged. Multi-tenant workspaces and role-based access help larger agencies keep teams or sub-brands separate.",
        ],
      },
    ],
    steps: {
      heading: "An Agency Prospecting Cycle",
      items: [
        { title: "Define Niche And Area", text: "Choose the business types and locations where your case for value is strongest." },
        { title: "Scrape And Enrich", text: "Run queries across the relevant sources and let enrichment add contacts and websites." },
        { title: "Filter By Flags And Score", text: "Shortlist leads with opportunity flags that match your services and solid fit scores." },
        { title: "Audit And Draft", text: "Review each shortlisted audit, then edit AI drafts that reference its findings." },
        { title: "Send And Track", text: "Send through your email transport and move replies through pipeline stages." },
      ],
    },
    considerations: {
      heading: "Points Agencies Should Weigh",
      items: [
        "Audit reports are a door-opener, not a full strategy; be ready to go deeper on a call.",
        "Unsolicited audits can feel intrusive; keep the tone helpful and offer, rather than attach, long reports where appropriate.",
        "Prospecting rules differ by country; check email and data protection requirements before scaling.",
        "SEO and website-build reports and AI outreach are Growth features; Free covers scraping, enrichment and export.",
        "Results depend on your services and follow-up; no tool guarantees new clients.",
      ],
    },
    example: {
      heading: "A Boutique Agency Targeting Physiotherapy Clinics",
      text: "Consider a four-person marketing agency in edinburgh that has done good work for two physiotherapy practices. It runs Google Maps queries for physiotherapy clinics across five scottish towns, filters for leads with weak audits or no website, and reviews the top thirty. For a clinic whose audit shows missing page titles and no structured data, the account manager edits an AI draft that names those two issues and offers the prioritised fix list. Replies move through the pipeline, and the team reviews which flags led to calls after a month.",
    },
    faqs: [
      { q: "Which opportunity flags matter most for agencies?", a: "It depends on your services. Missing or non-resolving websites suit web-build offers; weak audits suit SEO and technical work; thin listings suggest local presence work." },
      { q: "Can several account managers prospect without stepping on each other?", a: "Yes. Pipeline owners, role-based access and per-lead activity history show who owns and has contacted each prospect." },
      { q: "Do I need the Scale plan to prospect for agency clients?", a: "Not necessarily. Growth includes AI scoring, outreach and SEO and website-build reports. Scale adds unlimited queries, LinkedIn and IndiaMART sources and per-org API keys." },
      { q: "Is it acceptable to send a prospect an audit they did not ask for?", a: "Many agencies do, but tone matters. Lead with one or two useful findings and offer the full report rather than overwhelming the reader." },
      { q: "How narrow should an agency’s niche be?", a: "Narrow enough that you can say something specific about a prospect’s marketing. One or two niches where you already have results, such as dental practices or boutique hotels, in a geography you can serve usually works better than targeting any business." },
      { q: "What pipeline stages suit an agency sale?", a: "Many agencies use stages such as contacted, audit shared, call booked, proposal sent and won or lost. Owners and activity history keep account managers on the same page, and every message sent through your email transport is logged against the lead." },
      { q: "Should I promise rankings or traffic in my pitch?", a: "No. Describe what you found and what you would fix instead. Outcomes depend on many factors, and specific, accurate findings build more trust than promises. Edit every AI draft so each claim is one you can stand behind." },
      { q: "How do I know which flags actually lead to clients?", a: "Review your pipeline after a month or so. Check which opportunity flags and audit findings led to replies, calls and proposals, then focus future queries and messages on the niches and flags that worked best." },
    ],
    related: ["/services/business-opportunity-detection", "/services/opportunity-reports", "/services/seo-agency-lead-generation", "/services/website-redesign-prospecting", "/services/multi-tenant-workspaces", "/industries/digital-agencies"],
    cta: { heading: "Find Your Next Agency Clients", text: "See how opportunity flags and audits could feed your outbound pipeline.", label: "Request Access", href: "/request-access" },
  },
  {
    path: "/services/website-redesign-prospecting",
    title: "Website Redesign Prospecting",
    h1: "Website Redesign Prospecting For Web Studios",
    metaTitle: "Website Redesign Prospecting for Studios",
    metaDescription: "Find businesses whose websites need a redesign. Use LeadGen AI’s weak-audit flags, scorecards and fix lists to back a redesign pitch with real evidence.",
    eyebrow: "For Web Studios",
    intro: [
      "Website redesign prospecting means finding businesses that already have a website but would clearly benefit from a better one. LeadGen AI supports it directly: its SEO audit grades each lead’s site on technical health, content, metadata, structured data and performance, and opportunity detection flags weak audits in the bottom band, as well as sites that don’t resolve.",
      "For a web studio, redesign prospects are often better buyers than businesses with no site at all: they already value being online and may have a budget line for it. The hard part is evidence. This page shows how to turn audit data into a redesign pitch that a business owner can understand and act on.",
    ],
    highlights: [
      "Weak-audit flags find tired sites",
      "Per-area scorecard backs your case",
      "Plain-English findings ranked by severity",
      "Prioritised fix list to share",
    ],
    sections: [
      {
        heading: "Redesign Prospects Versus No-Website Prospects",
        paragraphs: [
          "A business with no website needs persuading that a site is worth having. A business with a weak site already accepts that, but may not realise how its site compares or what is wrong with it. Your pitch therefore shifts from ‘you need a website’ to ‘here is specifically what is holding your current site back’.",
          "Sites that don’t resolve at all sit between the two: the owner thinks they have a website, but visitors cannot reach it. That is often the most urgent message you can send.",
        ],
      },
      {
        heading: "Spotting Weak Sites At Scale",
        paragraphs: [
          "Start with queries for the business types you design for, in the areas you serve. After enrichment finds each website, the SEO audit (included with SEO and website-build reports on growth) checks it against rules for technical health, content, metadata, structured data and performance, grades each area and rolls them into an overall score.",
          "Opportunity detection then flags the bottom band as weak audits. Combine that flag with lead score and listing signals: a business with strong reviews and a failing site is a better redesign prospect than one that appears barely active.",
        ],
      },
      {
        heading: "Reading The Audit Like A Designer",
        paragraphs: [
          "Not every audit finding justifies a redesign. Missing metadata can be fixed in an afternoon; poor performance across every page, broken structure and thin content usually point to a rebuild. Read the per-area scorecard and severity-ranked findings to decide which pitch fits:",
        ],
        bullets: [
          "A few metadata or structured-data gaps: offer fixes, which can lead to a larger project later.",
          "Poor performance and page-health metrics across the site: a strong case for a rebuild.",
          "Weak content and technical issues together: a redesign with a content refresh.",
          "Site not resolving: an urgent repair or replacement conversation.",
        ],
      },
      {
        heading: "Building The Pitch From Evidence",
        paragraphs: [
          "AI-drafted outreach uses each lead’s enrichment and audit data, so your first message can reference real findings in plain English. Keep it short: name the overall grade or two specific issues, explain why they matter to customers, and offer to send the prioritised fix list. Edit every draft before it goes out through your email transport.",
          "Avoid criticising the previous designer or exaggerating consequences. Owners respond better to calm, specific observations than to alarm.",
        ],
      },
      {
        heading: "Following Up And Closing",
        paragraphs: [
          "Track each prospect through pipeline stages such as audit shared, call booked and proposal sent. Because every message is logged against its lead, you can see at a glance who has seen the audit and who needs a nudge. When a prospect engages, the full report (scorecard, findings and fix list) forms the basis of your proposal.",
        ],
      },
    ],
    steps: {
      heading: "Redesign Prospecting, Step By Step",
      items: [
        { title: "Target The Right Businesses", text: "Query categories you design for in the areas you serve." },
        { title: "Audit The Sites", text: "Let enrichment find websites and the SEO audit grade each one." },
        { title: "Shortlist Weak But Active", text: "Filter for weak-audit flags plus strong listing signals and fit scores." },
        { title: "Choose The Pitch", text: "Decide between quick fixes, a rebuild or an urgent repair based on the scorecard." },
        { title: "Send And Follow Up", text: "Send reviewed AI drafts referencing specific findings and track replies in the pipeline." },
      ],
    },
    considerations: {
      heading: "Things To Keep In Mind",
      items: [
        "An automated audit measures technical and content signals; it cannot judge brand fit or visual quality.",
        "Some owners are attached to their current site, so frame findings as opportunities, not failures.",
        "SEO and website-build reports are part of Growth; plan your tier accordingly.",
        "A site may be temporarily down when audited; re-check before calling it non-resolving.",
        "Email and data protection rules vary by country; review them before running campaigns.",
      ],
    },
    example: {
      heading: "A Three-Person Studio Targeting Dental Clinics",
      text: "Picture a three-person web studio in Pune that has rebuilt sites for two dental clinics. It runs Google Maps queries for dental clinics across Pune and Nashik, filters for weak-audit flags, and sorts by score so clinics with many reviews and solid fit come first. One clinic’s audit shows poor performance metrics and missing structured data across its pages. The studio’s founder edits an AI draft that names those findings in plain language, offers the fix list, and logs the reply when the clinic asks for a call.",
    },
    faqs: [
      { q: "How does LeadGen AI decide a website is weak?", a: "The SEO audit grades technical health, content, metadata, structured data and performance, and opportunity detection flags sites whose audits fall in the bottom band." },
      { q: "Can the audit judge whether a site looks dated?", a: "No. It checks technical, content and performance rules. Visual and brand judgements remain yours, so look at the site yourself before pitching." },
      { q: "Should I attach the full audit to my first email?", a: "Many studios mention two or three findings and offer the full report on request. That keeps the first message short and invites a reply." },
      { q: "Is a non-resolving site always a redesign lead?", a: "Not always. It may be a lapsed domain or hosting issue. Treat it as an urgent repair conversation that can lead to a redesign." },
      { q: "Are redesign prospects better than businesses with no website?", a: "Often, because they already value being online and may have a budget for it. Your pitch shifts from persuading them to have a site to showing specifically what is holding their current site back." },
      { q: "When do audit findings justify a full rebuild?", a: "Poor performance and page-health metrics across the whole site, or weak content combined with technical issues, usually point to a rebuild. A few metadata or structured-data gaps are better offered as quick fixes, which can lead to a larger project later." },
      { q: "How do I avoid offending an owner who likes their site?", a: "Frame findings as opportunities, not failures, and never criticise the previous designer. Calm, specific observations in plain English work better than alarm, and offering the fix list lets the owner judge the evidence themselves." },
      { q: "Which prospects should I prioritise among weak sites?", a: "Combine the weak-audit flag with lead score and listing signals. A business with strong reviews and a failing site is usually a better redesign prospect than one that appears barely active or poorly matched to your market." },
    ],
    related: ["/services/seo-website-audit", "/services/missing-website-detection", "/services/opportunity-reports", "/services/agency-client-prospecting", "/services/ai-drafted-outreach-messages"],
    cta: { heading: "Find Sites Worth Rebuilding", text: "See weak-audit flags and scorecards on businesses in your target market.", label: "Request Access", href: "/request-access" },
  },
  {
    path: "/services/seo-agency-lead-generation",
    title: "SEO Agency Lead Generation",
    h1: "SEO Agency Lead Generation With Audit Door-Openers",
    metaTitle: "SEO Agency Lead Generation Workflow",
    metaDescription: "A lead generation workflow for SEO agencies: find prospects, use audit reports as door-openers, qualify with scores and flags, and manage outreach in one place.",
    eyebrow: "For SEO Agencies",
    intro: [
      "SEO agencies generate leads most reliably by showing a prospect a specific, credible problem with their own site. LeadGen AI is built around that idea: it finds businesses in your target niche, audits each website for technical health, content, metadata, structured data and performance, and produces client-ready output with a prioritised fix list.",
      "The difficulty for SEO agencies is that every competitor also offers a ‘free audit’. What sets yours apart is qualification (auditing the right businesses) and restraint in how you present findings. This page covers both as a step-by-step workflow in LeadGen AI.",
    ],
    highlights: [
      "Audits as evidence-backed door-openers",
      "Qualify with scores before auditing deeply",
      "Severity-ranked findings in plain English",
      "Every message logged per lead",
    ],
    sections: [
      {
        heading: "Why Audit-Led Prospecting Works For SEO",
        paragraphs: [
          "SEO is hard for owners to evaluate, so promises sound alike. A short list of real issues on their own site, explained in plain English, is different: it shows you looked, and it gives them something to check. LeadGen AI’s audit report includes an overall grade, a per-area scorecard, findings ranked by severity with plain-English explanations, performance and page-health metrics, and a prioritised fix list.",
        ],
      },
      {
        heading: "Qualifying Before You Pitch",
        paragraphs: [
          "Not every weak site belongs to a good client. Use the lead score to check that a business is active and fits your stated market, category and geography. Use listing signals such as reviews and completeness to judge whether it is established enough to pay for ongoing SEO.",
          "Good qualification questions to answer from the data include:",
        ],
        bullets: [
          "Is the business clearly operating, with recent reviews and a complete listing?",
          "Does it sit in a category where search drives enquiries?",
          "Do the audit findings point to work you do well and can explain?",
          "Is there a reachable contact route, such as a business email on its site?",
        ],
      },
      {
        heading: "Turning Findings Into A First Message",
        paragraphs: [
          "Choose the two or three highest-severity findings a non-specialist can understand, such as missing page titles, absent structured data or slow pages. AI-drafted outreach uses the lead’s audit and enrichment data to produce a first version. Your job is to tighten it, remove jargon and make sure every claim is accurate.",
          "Do not promise rankings, traffic or timelines. Explain what you found, why it matters, and offer the fix list or a short call.",
        ],
      },
      {
        heading: "Choosing Niches Where SEO Matters",
        paragraphs: [
          "SEO agencies often do best in categories where people search before they buy: clinics, legal and accounting practices, home services, hospitality, education providers and B2B manufacturers whose buyers research suppliers online. Run category-and-location queries for those, or IndiaMART searches for Indian manufacturers, and compare audit results across a niche to understand its typical weaknesses.",
        ],
      },
      {
        heading: "Running The Pipeline",
        paragraphs: [
          "Move responsive prospects through stages such as audit shared, discovery call, proposal and won. The CRM pipeline keeps owners and full activity history, and every message sent through your email transport is logged against its lead. Outreach respects sending limits and opt-out obligations; honour any request to stop.",
        ],
      },
    ],
    steps: {
      heading: "An SEO Agency Workflow",
      items: [
        { title: "Pick A Search-Driven Niche", text: "Choose categories and areas where buyers search before choosing a provider." },
        { title: "Scrape And Enrich", text: "Run queries and let enrichment find websites and business contacts." },
        { title: "Qualify", text: "Filter by score, listing signals and a reachable contact route." },
        { title: "Review The Audit", text: "Pick the clearest high-severity findings and check them yourself." },
        { title: "Reach Out And Track", text: "Send edited AI drafts through your email transport and manage replies in the pipeline." },
      ],
    },
    considerations: {
      heading: "Honest Trade-Offs",
      items: [
        "Prospects may receive many ‘free audit’ emails; specificity and tone are what set yours apart.",
        "Automated audits cover rule-based checks, not competitive research or keyword strategy.",
        "Verify a finding manually before naming it in outreach to avoid embarrassing errors.",
        "AI scoring, outreach and SEO reports are Growth features; Free offers scraping, enrichment and export.",
        "Check email marketing and data protection rules for each country you prospect in.",
      ],
    },
    example: {
      heading: "A Small SEO Consultancy Focusing On Law Firms",
      text: "Suppose a two-consultant SEO practice in melbourne wants more work from small law firms. It runs queries for family and conveyancing lawyers across three suburbs, keeps firms with complete listings, a business email and solid scores, and reviews their audits. For a firm whose pages lack meta descriptions and structured data, one consultant confirms the findings in a browser, edits the AI draft to two short paragraphs and offers the fix list. Over a few weeks the team notes which findings prompted replies.",
    },
    faqs: [
      { q: "What does the audit report give an SEO agency to share?", a: "An overall grade, a per-area scorecard, severity-ranked findings in plain English, performance and page-health metrics and a prioritised fix list designed to be handed to the prospect." },
      { q: "How do I avoid auditing businesses that will never buy?", a: "Qualify first. Use the lead score, review counts, listing completeness and fit with your market before spending time on an audit-led pitch." },
      { q: "Can I promise a prospect better rankings based on the audit?", a: "Avoid it. Describe the issues found and how you would fix them; outcomes depend on many factors outside an audit." },
      { q: "Which niches suit audit-led SEO prospecting?", a: "Categories where customers search before buying, such as clinics, professional services, home services and hospitality, tend to respond to search-related findings." },
      { q: "How do I stand out when prospects get many free audit emails?", a: "Specificity and tone. Name two or three verified, high-severity findings a non-specialist can understand, explain why they matter, and keep the message short. Generic audit offers blur together, while accurate observations about their own site do not." },
      { q: "Does the audit cover keyword research or competitors?", a: "No. The automated audit covers rule-based checks on technical health, content, metadata, structured data and performance. Keyword strategy and competitive research remain your agency’s own work, often after a prospect engages." },
      { q: "Why should I verify findings before sending outreach?", a: "A wrong claim in a first message damages credibility quickly. Check the top findings yourself in a browser before naming them, especially because a site may have changed since the audit ran." },
      { q: "Which plan do SEO agencies need?", a: "AI scoring, AI-drafted outreach and SEO and website-build reports are Growth features, which covers the core audit-led workflow. Free offers scraping, enrichment and export only, while Scale adds unlimited queries, LinkedIn and IndiaMART sources and API keys." },
    ],
    related: ["/services/seo-website-audit", "/services/opportunity-reports", "/services/agency-client-prospecting", "/services/ai-lead-scoring", "/services/prospect-research", "/industries/digital-agencies"],
    cta: { heading: "Open Doors With Audit Evidence", text: "See how LeadGen AI’s audit reports could support your agency’s outbound work.", label: "Request Access", href: "/request-access" },
  },
  {
    path: "/services/sales-prioritisation",
    title: "Sales Prioritisation",
    h1: "Sales Prioritisation With Score Bands And Daily Lists",
    metaTitle: "Sales Prioritisation With Lead Score Bands",
    metaDescription: "Help sellers focus on the right leads each day. Use LeadGen AI score bands, stored reasons and opportunity flags to build short, focused daily call lists.",
    eyebrow: "For Sales Managers",
    intro: [
      "Sales prioritisation is deciding which leads each seller should work today. LeadGen AI supports it with a 0–100 score per lead, reasons stored on the record, opportunity flags with evidence, and the ability to sort and filter by score and push the top band into the CRM pipeline.",
      "Most teams do not lack leads; they lack focus. Sellers cherry-pick familiar names, chase stale opportunities or work lists in alphabetical order. This page shows sales managers how to turn scores into bands, bands into daily lists, and daily lists into a habit the team actually follows.",
    ],
    highlights: [
      "Group scores into clear bands",
      "Reasons explain every priority",
      "Short daily lists per seller",
      "Scores refresh on re-enrichment",
    ],
    sections: [
      {
        heading: "What The Score Is Built From",
        paragraphs: [
          "LeadGen AI gives each lead a single 0–100 score reflecting record completeness, website health and whether the business is credibly online, fit against your stated market, category and geography, and signals of an active, operating business. The reasons are stored on the record, so a seller can see why a lead ranks where it does.",
          "Because fit is measured against your stated market, defining that market carefully is the first prioritisation decision a manager makes.",
        ],
      },
      {
        heading: "Turning Scores Into Bands",
        paragraphs: [
          "Individual numbers lead to arguments over a point or two. Bands are easier to act on. Many teams use three:",
        ],
        bullets: [
          "Top band: push into the pipeline and work this week.",
          "Middle band: hold for campaigns or re-check after re-enrichment.",
          "Low band: park unless an opportunity flag gives a specific reason to act.",
        ],
      },
      {
        heading: "Building Daily Lists",
        paragraphs: [
          "A daily list should be short enough to finish. Filter each seller’s territory to the top band, sort by score, and add any leads with fresh opportunity flags that match your offer. Then push them into the CRM pipeline with the seller as owner. A list a seller can complete keeps them moving. A list of two hundred gets put off.",
        ],
      },
      {
        heading: "Keeping Priorities Current",
        paragraphs: [
          "Scores recalculate when a lead is re-enriched, so a business that launches a website or completes its listing can move up. Re-run enrichment on parked leads from time to time and review the top band again. Activity history in the pipeline shows which priority leads have actually been contacted, which is the real measure of whether prioritisation is working.",
        ],
      },
      {
        heading: "Where Judgement Still Matters",
        paragraphs: [
          "Scores summarise data that is visible online. They cannot know that a prospect just signed with a competitor or that a referral is warm. Encourage sellers to override priorities when they have better information, and to correct records by hand. LeadGen AI never overwrites a manual edit.",
        ],
      },
    ],
    steps: {
      heading: "Setting Up A Prioritisation Routine",
      items: [
        { title: "Define Your Market", text: "State the categories and geographies you sell to so fit scoring reflects them." },
        { title: "Agree Bands", text: "Choose score ranges for top, middle and low bands and write them down." },
        { title: "Build Daily Lists", text: "Filter each territory to the top band plus relevant flags and keep the list short." },
        { title: "Push And Assign", text: "Move each list into the pipeline with an owner." },
        { title: "Review Weekly", text: "Check activity history, re-enrich parked leads and adjust bands if needed." },
      ],
    },
    considerations: {
      heading: "Cautions For Managers",
      items: [
        "AI lead scoring is part of Growth and Scale, not the Free plan.",
        "A vague market definition weakens fit scoring for everyone.",
        "Bands are a team convention; revisit them as you learn which leads convert.",
        "Leaning too hard on scores can mean promising low-band leads with strong opportunity flags get ignored.",
        "Prioritisation helps only if sellers work the list; track activity, not just list creation.",
      ],
    },
    example: {
      heading: "A Manager Resetting A Scattered Team",
      text: "Imagine a sales manager at a uniform supplier in Ludhiana whose five sellers each work leads their own way. She sets the stated market to schools, hospitals and hotels in Punjab, agrees bands with the team, and each morning filters every territory to the top band, capping lists at fifteen. Leads go into the pipeline with owners. After a month, activity history shows far fewer untouched top-band leads, and she moves the band threshold slightly after seeing which leads led to meetings.",
    },
    faqs: [
      { q: "Why use bands instead of raw scores?", a: "Bands turn a precise number into a clear instruction (work now, hold, or park) and reduce debate over small differences." },
      { q: "Can a low-scoring lead still be worth calling?", a: "Yes. A lead with an opportunity flag that matches your offer, or a warm referral, can justify action regardless of score." },
      { q: "How long should a daily list be?", a: "Short enough to finish with proper follow-up. Many teams find a list a seller completes each day beats a long one they abandon." },
      { q: "What makes a lead move between bands?", a: "Scores recalculate when a lead is re-enriched, so new information about its website, listing or contact details can change its band." },
      { q: "Why does defining our market matter for prioritisation?", a: "Fit is scored against your stated market, category and geography. A vague definition weakens fit scoring for the whole team, so describing the categories and regions you sell to carefully is the first prioritisation decision a manager makes." },
      { q: "How do I know if prioritisation is working?", a: "Check activity history in the pipeline, not just whether lists were created. If top-band leads are actually being contacted and some lead to meetings, it is working. Untouched top-band leads suggest lists are too long or not being followed." },
      { q: "Can sellers override the score?", a: "Yes, and they should when they know more. Scores summarise data visible online, so they cannot know about a warm referral or a recent competitor deal. Sellers can also correct records by hand without later enrichment overwriting them." },
      { q: "Is lead scoring available on the Free plan?", a: "No. AI lead scoring is part of the Growth and Scale plans. On Free you can still filter and sort by listing and enrichment fields, but score bands need a plan with scoring switched on." },
    ],
    related: ["/services/ai-lead-scoring", "/services/lead-dashboard", "/services/crm-pipeline-management", "/services/business-opportunity-detection", "/services/local-business-prospecting"],
    cta: { heading: "Give Your Team A Focused List", text: "See how score bands and daily lists would work with your territories.", label: "Request Access", href: "/request-access" },
  },
  {
    path: "/services/lead-list-building",
    title: "Lead List Building",
    h1: "Lead List Building: Query Design, Segments And Quality",
    metaTitle: "Lead List Building With Better Queries",
    metaDescription: "Build better lead lists with LeadGen AI: design focused queries across Google Maps, LinkedIn and IndiaMART, segment results and keep list quality high.",
    eyebrow: "For Marketers And SDRs",
    intro: [
      "Lead list building is turning a target market into a concrete set of businesses you can contact. In LeadGen AI it starts with a query (a category and a location, or a directory search term) that fans out to each enabled source and returns normalised, de-duplicated records that are then enriched automatically.",
      "The quality of a list is decided mostly before you press search. Query design, segmentation and a few quality checks matter more than volume. This page explains how marketers and SDRs can build lists that are focused enough to personalise and clean enough to trust.",
    ],
    highlights: [
      "Queries fan out across sources",
      "Segment by category and geography",
      "De-duplicated, enriched records",
      "Quality checks before outreach",
    ],
    sections: [
      {
        heading: "Designing Queries That Match Your Market",
        paragraphs: [
          "Google Maps queries pair a category with a location. IndiaMART takes directory search terms that describe products or suppliers. LinkedIn adds company context on the Scale plan. A precise category and a bounded location produce a list you can review. A vague term over a whole country produces noise.",
          "Try the words your buyers would use to describe themselves. ‘Physiotherapy clinic’ and ‘sports injury clinic’ may return different businesses, and running both can widen coverage without losing focus.",
        ],
      },
      {
        heading: "Segmenting From The Start",
        paragraphs: [
          "Build one list per segment you will message differently. Useful segment dimensions include:",
        ],
        bullets: [
          "Category or product line",
          "Geography: city, district or neighbourhood",
          "Online maturity: has a website, healthy audit or none",
          "Visible scale: review counts and listing completeness",
          "Score band, on plans with AI lead scoring",
        ],
      },
      {
        heading: "What The Platform Does For List Quality",
        paragraphs: [
          "Results are normalised into one record per business and de-duplicated across sources, so the same company does not appear three times. Enrichment adds business emails found on the company’s own site, normalised phone numbers, websites, social profiles and company details. It only writes a field when the new value is more complete. Each field records its source, and every job records what it fetched and when.",
        ],
      },
      {
        heading: "Checks Before A List Goes Live",
        paragraphs: [
          "Before handing a list to sellers or a campaign, spot-check twenty records: are they the right type of business, in the right place, still trading? Filter out records with no contact route if you plan email outreach, and remove businesses you already work with. Small checks prevent large embarrassments.",
        ],
      },
      {
        heading: "Planning Volume Around Quotas",
        paragraphs: [
          "Queries are counted against your plan: three on Free, 50 per month on Growth and unlimited on Scale. On limited plans, spend queries on your highest-value segments first, and review results before running the next batch so you learn what a good query looks like.",
        ],
      },
    ],
    steps: {
      heading: "Building A List From Scratch",
      items: [
        { title: "Define The Segment", text: "Write down the business type, location and reason you are contacting them." },
        { title: "Draft Queries", text: "Choose category-and-location pairs or directory terms in your buyers’ own words." },
        { title: "Run And Review", text: "Run the queries and scan the first results for relevance before running more." },
        { title: "Filter And Segment", text: "Use the dashboard to split results by category, area, contact route and score." },
        { title: "Spot-Check And Hand Over", text: "Check a sample by hand, then push to the pipeline or export to CSV." },
      ],
    },
    considerations: {
      heading: "Common Pitfalls",
      items: [
        "Big lists feel productive but are hard to personalise; prefer several focused lists.",
        "Category labels vary by source, so check results rather than trusting labels blindly.",
        "Some businesses publish little contact information; expect gaps in email coverage.",
        "Lists age quickly in fast-changing local markets; plan refreshes.",
        "Check data protection and marketing rules before contacting people on a new list.",
      ],
    },
    example: {
      heading: "An SDR Building Lists For A New Product",
      text: "Consider an SDR at an inventory-software start-up in Hyderabad tasked with testing demand among hardware wholesalers. She runs IndiaMART searches for hardware and sanitaryware wholesalers plus Google Maps queries for the same categories in two cities. After de-duplication she splits results by city and by whether a website exists, spot-checks twenty records, removes three existing customers and pushes two segments of forty into the pipeline with different opening messages.",
    },
    faqs: [
      { q: "Should I run one big query or several small ones?", a: "Several focused queries usually work better. They give segments you can message specifically and make review manageable." },
      { q: "Will the same business appear twice if it is on several sources?", a: "Results are normalised into one record per business and de-duplicated across sources." },
      { q: "How do I build lists on the Free plan?", a: "Free includes three scrape queries, website enrichment, the lead dashboard and CSV export, so choose your three most important segments." },
      { q: "What should I check before a list goes to sellers?", a: "Relevance, location, whether businesses are still trading, a usable contact route and overlap with existing customers." },
      { q: "How often should I refresh a lead list?", a: "It depends on how fast the market changes. Local categories with frequent openings and closures benefit from re-running queries every few months, while stable B2B directories can be refreshed less often. Re-enrichment also updates contact fields and scores on existing records." },
      { q: "How do I choose the right words for a query?", a: "Use the terms your buyers would use to describe themselves. Similar terms such as “physiotherapy clinic” and “sports injury clinic” can return different businesses, so running both can widen coverage while keeping the list focused." },
      { q: "Which segments should I split a list into?", a: "Build one list per segment you would message differently. Useful dimensions include category, geography, online maturity such as having a website, visible scale from reviews and listing completeness, and score band on plans with AI lead scoring." },
      { q: "Why do some businesses on my list have no email?", a: "Some businesses publish little contact information, and enrichment only adds business emails found on the company’s own site. Expect gaps, filter out records without a contact route if you plan email outreach, and use listed phone numbers for the rest." },
    ],
    related: ["/services/multi-source-lead-scraping", "/services/google-maps-lead-extraction", "/services/indiamart-lead-extraction", "/services/lead-dashboard", "/services/lead-de-duplication"],
    cta: { heading: "Build Your First Focused List", text: "Three free queries are included, enough to test a well-designed segment.", label: "Start Free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/services/prospect-research",
    title: "Prospect Research",
    h1: "Prospect Research Before The Call",
    metaTitle: "Prospect Research Using Enrichment and Audits",
    metaDescription: "Prepare for sales calls in minutes. Use LeadGen AI enrichment, score reasons, audit findings and activity history to research a prospect before you speak.",
    eyebrow: "For Account Executives",
    intro: [
      "Prospect research is the preparation you do before a call or meeting so you can talk about the prospect’s business rather than your own. LeadGen AI puts most of that context on one record: enriched contact details, website and about pages, social profiles, the lead score with its reasons, SEO audit findings, opportunity flags and the full activity history.",
      "Account executives rarely have an hour per prospect. The goal is a focused ten-minute routine that brings out what matters. This page sets one out, using only the data LeadGen AI actually holds, and suggests what to check outside the platform.",
    ],
    highlights: [
      "Context gathered on one record",
      "Score reasons suggest talking points",
      "Audit findings give specific hooks",
      "History shows every prior touch",
    ],
    sections: [
      {
        heading: "What Is Already On The Record",
        paragraphs: [
          "Before opening another tab, read the lead record. It can hold:",
        ],
        bullets: [
          "Business name, category, address, ratings and review counts",
          "Website plus contact and about pages, found by enrichment",
          "Business emails, normalised phone numbers and social profiles",
          "A 0–100 score with stored reasons",
          "SEO audit grades and severity-ranked findings, on plans with reports",
          "Opportunity flags and their evidence",
        ],
      },
      {
        heading: "Reading The Score Reasons",
        paragraphs: [
          "The stored reasons explain why the lead scored as it did: how complete the record is, how healthy the website looks, how well it fits your market and whether it shows signs of an active business. They often point to a conversation topic: a strong fit with a weak site, or an active business with an incomplete listing.",
        ],
      },
      {
        heading: "Using Audit Findings Carefully",
        paragraphs: [
          "If the prospect has a website, the audit’s plain-English findings and performance metrics give you concrete, verifiable observations. Pick one or two relevant to what you sell and check them yourself in a browser. Raised as questions rather than criticism, they show preparation without putting the prospect on the defensive.",
        ],
      },
      {
        heading: "Checking History Before You Speak",
        paragraphs: [
          "The CRM pipeline keeps full activity history and every outreach message is logged against its lead. Read it before the call: who reached out, what was said, what the prospect replied. Nothing hurts a call faster than repeating a pitch a colleague already made.",
        ],
      },
      {
        heading: "What To Check Beyond The Platform",
        paragraphs: [
          "LeadGen AI holds what sources and the business’s own website publish. For bigger deals, AEs often also read recent posts on the prospect’s social profiles, skim the about page for history and values, and think about likely objections. Record anything useful in the pipeline so the next person benefits.",
        ],
      },
    ],
    steps: {
      heading: "A Ten-Minute Research Routine",
      items: [
        { title: "Read The Record", text: "Note category, location, reviews and contact details." },
        { title: "Read The Score Reasons", text: "Identify the strongest fit signals and any gaps." },
        { title: "Scan The Audit", text: "Pick one or two findings relevant to your offer and verify them." },
        { title: "Review History", text: "Check previous messages, replies and notes in the pipeline." },
        { title: "Write Three Questions", text: "Prepare open questions based on what you found, and log them on the lead." },
      ],
    },
    considerations: {
      heading: "Research Pitfalls",
      items: [
        "Data reflects what was public when collected; confirm anything important on the call.",
        "Audit findings are technical signals; don’t assume you know the prospect’s priorities.",
        "Over-researching small deals wastes time; match effort to deal size.",
        "Use social profiles for business context only, and stay respectful of personal boundaries.",
        "Scoring and audit reports require Growth or Scale.",
      ],
    },
    example: {
      heading: "An AE Preparing For A Discovery Call",
      text: "Imagine an account executive at a scheduling-software company in dublin with a call booked with a chain of three dental practices. In ten minutes she reads the record (strong reviews, all three addresses). She sees score reasons noting good fit but a slow website, checks the audit’s performance findings and confirms one in her browser, and reads the logged emails showing a colleague’s first message. She opens the call by asking how patients currently book, rather than pitching.",
    },
    faqs: [
      { q: "Where does the context on a lead record come from?", a: "From the sources you enabled (Google Maps, LinkedIn, IndiaMART) and from enrichment of the business’s own website, with each field’s source recorded." },
      { q: "Can I see what my colleagues have already sent a prospect?", a: "Yes, subject to your role. Every message is logged against its lead and the pipeline keeps full activity history." },
      { q: "How should I raise audit findings on a call?", a: "As questions, for example asking whether site speed affects bookings, rather than as criticism. Verify the finding first." },
      { q: "Is this enough research for large deals?", a: "It is a strong starting point. For larger deals, add reading beyond the platform and record what you learn on the lead." },
      { q: "Should I research every lead this thoroughly?", a: "No. Save the full routine for booked calls and meetings. For first-touch outreach, the score reasons and one audit finding are usually enough to write a relevant message, and AI-drafted outreach already draws on enrichment and audit data." },
      { q: "What should I do with information I learn on a call?", a: "Record it on the lead in the pipeline. Notes, stage changes and corrected fields help the next person who works the account, and fields you edit by hand are never overwritten by later enrichment." },
      { q: "How recent is the data on a lead record?", a: "It reflects what sources and the business’s own website published when the data was collected. Every job records what it fetched and when, so check that date and confirm anything important directly with the prospect." },
      { q: "Is it fine to use a prospect’s social profiles for research?", a: "Use them for business context, such as recent company posts or announcements. Stay respectful of personal boundaries, and avoid bringing up anything that would feel intrusive in a first conversation." },
    ],
    related: ["/services/ai-contact-enrichment", "/services/website-enrichment", "/services/social-profile-enrichment", "/services/outreach-activity-logging", "/services/seo-agency-lead-generation"],
    cta: { heading: "Prepare For Calls Faster", text: "See how much context a single LeadGen AI lead record holds.", label: "Request Access", href: "/request-access" },
  },
  {
    path: "/services/opportunity-reports",
    title: "Opportunity Reports",
    h1: "Opportunity Reports: Shareable Audits And Fix Lists",
    metaTitle: "Opportunity Reports With Shareable Fix Lists",
    metaDescription: "LeadGen AI opportunity reports give agencies a client-ready audit: overall grade, per-area scorecard, severity-ranked findings and a prioritised fix list.",
    eyebrow: "For Agencies",
    intro: [
      "An opportunity report is a document you can hand to a prospect that shows what is holding their online presence back and what to fix first. In LeadGen AI, the SEO audit produces client-ready output (an overall grade with a per-area scorecard, findings ranked by severity with plain-English explanations, performance and page-health metrics, and a prioritised fix list). Opportunity detection adds flags with the evidence behind them.",
      "For agencies, the report is both a sales asset and the start of a scope of work. This page explains what goes into it, how to present it, and how to use it from first contact to proposal.",
    ],
    highlights: [
      "Overall grade and per-area scorecard",
      "Severity-ranked, plain-English findings",
      "Prioritised fix list to hand over",
      "Opportunity flags with evidence",
    ],
    sections: [
      {
        heading: "What Is In The Report",
        paragraphs: [
          "The audit checks a lead’s website against rules covering technical health, content, metadata, structured data and performance, grades each area and rolls the grades into an overall score. The output includes:",
        ],
        bullets: [
          "An overall grade with a scorecard for each area",
          "Findings ranked by severity, each explained in plain English",
          "Performance and page-health metrics",
          "A prioritised fix list that can be handed to the prospect",
        ],
      },
      {
        heading: "Where Opportunity Flags Fit",
        paragraphs: [
          "Opportunity detection flags businesses with no website, sites that don’t resolve, listings with no reachable contact route and weak audits in the bottom band. Each flag carries its evidence. For businesses with no working site there is no audit to share, so the flag and its evidence become the conversation instead.",
        ],
      },
      {
        heading: "Presenting A Report To A Prospect",
        paragraphs: [
          "A report lands better when it is introduced, not dumped. Summarise the overall grade and the two most important findings in your message, and offer the full report. When you share it, walk through the fix list in order and explain which items you would handle and roughly how. Keep the tone factual and helpful.",
        ],
      },
      {
        heading: "From Report To Proposal",
        paragraphs: [
          "The prioritised fix list maps naturally to a scope: quick fixes in a first phase, structural work in a second, ongoing content or performance work after that. Because findings are severity-ranked, you can justify the order. After the client signs, a later audit gives a straightforward before-and-after view of the same areas.",
        ],
      },
      {
        heading: "Using Reports Inside The Pipeline",
        paragraphs: [
          "Add a pipeline stage such as ‘report shared’ so the team can see which prospects have received one. AI-drafted outreach can reference audit data directly, and every message is logged, so follow-ups stay consistent across account managers.",
        ],
      },
    ],
    steps: {
      heading: "Using An Opportunity Report In A Sale",
      items: [
        { title: "Shortlist Prospects", text: "Filter for weak-audit and other opportunity flags among well-fitting leads." },
        { title: "Review The Report", text: "Read the scorecard and findings, and verify the top items yourself." },
        { title: "Introduce It", text: "Send a short message naming two findings and offering the full report." },
        { title: "Walk Through The Fix List", text: "On a call, explain priorities and what you would do about each." },
        { title: "Turn It Into Scope", text: "Build your proposal around the fix list’s order." },
      ],
    },
    considerations: {
      heading: "Using Reports Responsibly",
      items: [
        "Rule-based audits do not cover brand, design quality or competitive strategy.",
        "Verify top findings before sharing; a wrong claim damages credibility.",
        "Avoid implying guaranteed results from fixing the listed items.",
        "SEO and website-build reports are part of the Growth plan.",
        "A site may change after the audit; re-run it before a proposal meeting.",
      ],
    },
    example: {
      heading: "A Digital Agency Turning A Report Into A Scope",
      text: "Suppose a five-person digital agency in cape town shares a report with a boutique hotel whose site has a weak overall grade. The fix list starts with missing metadata and structured data, then performance issues across room pages. On the call, the account lead proposes a two-phase project in that order. The hotel agrees to phase one, and the agency plans to re-run the audit afterwards to show progress area by area.",
    },
    faqs: [
      { q: "What is included in a client-ready report?", a: "An overall grade with a per-area scorecard, severity-ranked findings in plain English, performance and page-health metrics and a prioritised fix list." },
      { q: "What if the prospect has no website to audit?", a: "Opportunity detection flags missing or non-resolving websites with evidence, which becomes the basis of the conversation instead of an audit." },
      { q: "Can a report become part of my proposal?", a: "Yes. The severity-ranked fix list maps well to project phases and helps justify the order of work." },
      { q: "Should I re-run the audit later?", a: "Re-running before a proposal keeps findings current, and re-running after work is done gives a clear before-and-after comparison." },
      { q: "Can I add my agency’s own commentary to the findings?", a: "Your commentary belongs in the message, the call and the proposal. Use the report as the factual base, then explain in your own words which items matter most for this particular business and why you would tackle them in that order." },
      { q: "Which plan includes opportunity reports?", a: "SEO and website-build reports are part of the Growth plan. Free covers scraping, enrichment, the lead dashboard and CSV export, so audit-based reports need a paid plan." },
      { q: "What does an audit report not cover?", a: "The audit is rule-based, checking technical health, content, metadata, structured data and performance. It does not judge brand, design quality or competitive strategy, so add your own expert view when discussing those areas with a prospect." },
      { q: "How can I track which prospects have received a report?", a: "Add a pipeline stage such as “report shared”. Every message is logged against its lead, so account managers can see who has seen a report and who needs a follow-up without duplicating each other’s work." },
    ],
    related: ["/services/seo-website-audit", "/services/business-opportunity-detection", "/services/agency-client-prospecting", "/services/website-redesign-prospecting", "/services/multi-tenant-workspaces"],
    cta: { heading: "See A Sample Opportunity Report", text: "Walk through how audit output could support your agency’s pitches.", label: "Request Access", href: "/request-access" },
  },
  {
    path: "/services/outreach-activity-logging",
    title: "Outreach Activity Logging",
    h1: "Outreach Activity Logging For Accountable Teams",
    metaTitle: "Outreach Activity Logging and Accountability",
    metaDescription: "LeadGen AI logs every outreach message against its lead and keeps full pipeline activity history. See how logging supports managers and compliance reviews.",
    eyebrow: "For Managers And Compliance",
    intro: [
      "Outreach activity logging is keeping a reliable record of every message sent to every prospect. In LeadGen AI, every message is logged against its lead, and the CRM pipeline keeps full activity history, with stages and owners. Managers can see who contacted whom and when without asking around.",
      "Logs serve two audiences. Managers use them to coach, balance workloads and stop duplicate contact. Compliance and leadership use them to show outreach is controlled, respects sending limits and honours opt-outs. This page covers both uses and the habits that make logs useful.",
    ],
    highlights: [
      "Every message logged per lead",
      "Full pipeline activity history",
      "Owners make responsibility visible",
      "Supports opt-out and limit discipline",
    ],
    sections: [
      {
        heading: "What Gets Recorded",
        paragraphs: [
          "Campaigns go out through your configured email transport and every message is logged against the lead it went to. The pipeline adds stage changes, owners and full activity history, so a single record shows the full sales history of a prospect: when they were found, who owns them, what they were sent and where they are now.",
        ],
      },
      {
        heading: "How Managers Use Activity Logs",
        paragraphs: [
          "Logs answer everyday questions quickly:",
        ],
        bullets: [
          "Has anyone already contacted this business?",
          "Which top-band leads have not been touched this week?",
          "How many follow-ups does a typical reply take?",
          "Which messages or audit findings prompt responses?",
        ],
      },
      {
        heading: "Logs As A Compliance Aid",
        paragraphs: [
          "LeadGen AI’s outreach respects sending limits and opt-out obligations, and the user stays in control of the list. Message logs let you show what was sent, to whom and when, which helps when a recipient asks about contact or when you review your own practices. Combined with per-field source tracking, you can also explain where a contact detail came from.",
          "Logging supports compliance but does not prove it. Rules on electronic marketing and data protection vary by country; check current requirements and take legal advice for your situation.",
        ],
      },
      {
        heading: "Preventing Duplicate And Unwanted Contact",
        paragraphs: [
          "In a team, the most common outreach mistake is two people contacting the same prospect, or someone contacting a person who asked to stop. Clear pipeline owners and a check of the log before sending prevent the first. Recording opt-outs against the lead, and checking before every campaign, prevents the second.",
        ],
      },
      {
        heading: "Making Logs Useful, Not Just Complete",
        paragraphs: [
          "A log full of messages but no outcomes tells half the story. Ask sellers to move stages promptly and add short notes after calls. Review logs in weekly one-to-ones rather than only when something goes wrong, so they become a coaching tool rather than an audit threat.",
        ],
      },
    ],
    steps: {
      heading: "Building A Logging Routine",
      items: [
        { title: "Configure The Transport", text: "Set up your email transport so campaigns send from your own domain and are logged." },
        { title: "Assign Owners", text: "Give every pipeline lead an owner so responsibility is clear." },
        { title: "Check Before Sending", text: "Review a lead’s history and any opt-out before contacting it." },
        { title: "Record Outcomes", text: "Move stages and add notes after replies and calls." },
        { title: "Review Weekly", text: "Use logs in team reviews to spot gaps and coach." },
      ],
    },
    considerations: {
      heading: "Limits And Responsibilities",
      items: [
        "Logs cover outreach sent through LeadGen AI; messages from personal inboxes or phones need recording separately.",
        "Logging is a record, not legal advice; your policies decide what is acceptable.",
        "Role-based access controls who can view logs, so set roles carefully.",
        "Exported data leaves the log behind; keep the platform as the system of record for contact history.",
        "Logs help only when people check them before acting.",
      ],
    },
    example: {
      heading: "A Manager Preventing Double Contact",
      text: "Picture a sales manager at an industrial-fasteners distributor in Chennai with six sellers working overlapping regions. Two sellers both draft emails to the same automotive workshop. Before sending, one checks the lead’s log, sees her colleague’s message from two days earlier and holds back. In the weekly review the manager uses logs to show the team how many top-band leads went uncontacted, then rebalances territories.",
    },
    faqs: [
      { q: "Are messages sent from LeadGen AI recorded automatically?", a: "Yes. Every message is logged against its lead, and the pipeline keeps full activity history." },
      { q: "Do logs prove our outreach is compliant?", a: "They help you show what was sent and when, but compliance depends on your practices and local law. Take legal advice for your markets." },
      { q: "Who can see outreach logs?", a: "Access follows LeadGen AI’s role-based permissions, so each team sees the records it should." },
      { q: "What about calls and emails sent outside the platform?", a: "Those are not captured automatically. Add notes to the lead so the history stays complete." },
      { q: "How can logs help with coaching sellers?", a: "Reviewing a seller’s logged messages alongside the replies and stage changes they led to shows which openings and follow-up patterns work. Managers often pick one or two examples each week to discuss, which keeps reviews helpful rather than critical." },
      { q: "How do logs help prevent two sellers contacting the same prospect?", a: "Clear pipeline owners plus a habit of checking the lead’s log before sending. If a colleague’s recent message is already there, the second seller can hold back and coordinate instead of sending a duplicate." },
      { q: "Where should opt-out requests be recorded?", a: "Record them against the lead in LeadGen AI as soon as they arrive, and check for them before every campaign. If you export data, carry opt-outs into other tools too, because exported files leave the log behind." },
      { q: "What makes a log useful rather than just complete?", a: "Outcomes. Ask sellers to move pipeline stages promptly and add short notes after calls and replies. A log that shows messages alongside results supports coaching and reviews far better than a list of sent emails alone." },
    ],
    related: ["/services/ai-outreach-campaigns", "/services/crm-pipeline-management", "/services/role-based-team-access", "/services/source-traceability", "/responsible-prospecting"],
    cta: { heading: "Run Accountable Outreach", text: "See how per-lead logs and pipeline history work for your team.", label: "Request Access", href: "/request-access" },
  },
  {
    path: "/services/multi-tenant-workspaces",
    title: "Multi-Tenant Workspaces",
    h1: "Multi-Tenant Workspaces For Agencies And Multi-Team Orgs",
    metaTitle: "Multi-Tenant Workspaces With Role Control",
    metaDescription: "LeadGen AI is multi-tenant and role-based. Learn how agencies and multi-team organisations can separate workspaces, assign roles and administer them well.",
    eyebrow: "Administration",
    intro: [
      "Multi-tenant workspaces keep separate organisations’ data apart on the same platform. LeadGen AI is described as multi-tenant and role-based: tenants are separated, and within each, role-based access means each team sees the records it should. Per-org API keys on the Scale plan follow the same organisation boundary.",
      "For agencies prospecting on behalf of several clients, and for organisations with distinct business units, that separation decides whether leads, outreach logs and reports stay where they belong. This page covers how to think about tenant separation, roles within each workspace and day-to-day administration. Confirm exact workspace arrangements for your account with the LeadGen AI team.",
    ],
    highlights: [
      "Multi-tenant and role-based",
      "Each team sees its own records",
      "Per-org API keys on Scale",
      "Clear administration habits",
    ],
    sections: [
      {
        heading: "Tenant Separation Versus Role-Based Access",
        paragraphs: [
          "Two layers work together. Tenant separation is the outer wall: one organisation’s leads, pipelines and logs are kept apart from another’s. Role-based access is the inner structure: within an organisation, people see and do only what their role allows. Growth includes full team access with seven role modules.",
        ],
      },
      {
        heading: "Who Benefits From Multi-Tenancy",
        paragraphs: [
          "Common cases include:",
        ],
        bullets: [
          "Agencies running prospecting for several clients who must not see each other’s data",
          "Groups with separate brands or regional businesses selling into different markets",
          "Franchise-style organisations with local teams and central oversight",
          "Resellers or consultancies separating internal prospecting from client work",
        ],
      },
      {
        heading: "Structuring Workspaces",
        paragraphs: [
          "Decide early where the walls go. A useful test: if two teams should never see each other’s leads or outreach history, they belong in separate tenants. If they should collaborate but with different permissions, they belong in one tenant with distinct roles. Agencies often keep their own new-business prospecting separate from client work for exactly this reason.",
        ],
      },
      {
        heading: "Administration And Quotas",
        paragraphs: [
          "Quotas are enforced per plan and per billing cycle. Every job records what it fetched and when, which helps admins see how query capacity is being used. On scale, per-org API keys let technical teams integrate an organisation’s data with its own systems without exposing other tenants.",
          "Keep a short list of admins per workspace, document who owns each, and review access when staff or clients change.",
        ],
      },
      {
        heading: "Ending A Client Relationship Cleanly",
        paragraphs: [
          "When an agency client leaves, decide in advance what happens to the data gathered for them: whether it is exported to CSV and handed over, retained or deleted, in line with your contract and data protection obligations. Remove user access promptly, rotate any API key the client’s systems used, and record the decision.",
        ],
      },
    ],
    steps: {
      heading: "Setting Up Workspaces For An Agency",
      items: [
        { title: "Map The Boundaries", text: "List clients and internal teams and decide which need full separation." },
        { title: "Confirm The Set-Up", text: "Agree the workspace arrangement for your account with the LeadGen AI team." },
        { title: "Define Roles", text: "Within each workspace, assign role modules by job, keeping admin rights narrow." },
        { title: "Secure Integrations", text: "On Scale, store each organisation’s API key separately and restrict access." },
        { title: "Review Regularly", text: "Audit users, roles and keys when staff or clients change." },
      ],
    },
    considerations: {
      heading: "Planning Considerations",
      items: [
        "Confirm how workspaces map to plans and billing for your account before committing.",
        "Separation protects data in the platform; exported CSVs need your own controls.",
        "Too many workspaces add admin overhead; separate only where it matters.",
        "Client contracts should state who owns prospecting data and what happens at the end.",
        "Data protection duties may differ by client and country; take advice where unsure.",
      ],
    },
    example: {
      heading: "An Agency Serving Three Clients",
      text: "Imagine a growth agency in nairobi that runs outbound prospecting for a solar installer, a logistics firm and its own new business. Each client’s work sits in its own workspace so leads and outreach logs never mix, and account managers are given roles only in the workspaces they serve. When the logistics client ends its contract, the agency exports that client’s leads to CSV as agreed, removes the client’s users and rotates the API key its systems used.",
    },
    faqs: [
      { q: "Is LeadGen AI Multi-Tenant?", a: "Yes. The platform is described as multi-tenant and role-based, so organisations are kept separate and each team sees the records it should." },
      { q: "Can an agency keep each client’s prospecting separate?", a: "That is a key use of multi-tenancy. Confirm the exact workspace arrangement for your plan with the LeadGen AI team." },
      { q: "How do API keys work across tenants?", a: "API keys are issued per organisation on the Scale plan, so each organisation’s integrations use its own key." },
      { q: "What should happen to data when a client leaves?", a: "Agree it in your contract: export, hand over, retain or delete in line with your obligations, then remove access and rotate keys." },
      { q: "Should a small team use more than one workspace?", a: "Usually not. A single workspace with sensible roles is simpler for a small team. Separate workspaces are worth the extra admin when data must not be shared, such as between agency clients." },
      { q: "When should teams share a workspace instead of separating?", a: "If two teams should collaborate but with different permissions, keep them in one workspace with distinct roles. If they should never see each other’s leads or outreach history, separate workspaces are the better fit." },
      { q: "Do exported CSVs stay inside a tenant’s protection?", a: "No. Tenant separation protects data inside the platform, but once a CSV is downloaded it needs your own controls. Store exports securely, limit who receives them and delete files you no longer need." },
      { q: "How can admins see how query quota is being used?", a: "Quotas are enforced per plan and per billing cycle, and every job records what it fetched and when. Reviewing job records helps admins understand which teams or campaigns are using query capacity." },
    ],
    related: ["/services/role-based-team-access", "/services/api-access", "/services/agency-client-prospecting", "/security-and-data-handling", "/plans"],
    cta: { heading: "Plan Workspaces For Your Teams", text: "Talk through how tenant separation and roles would fit your agency or organisation.", label: "Contact", href: "/contact" },
  },
];
