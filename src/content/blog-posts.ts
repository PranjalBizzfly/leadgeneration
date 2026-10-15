import type { BlogPost } from "./company";

/**
 * Blog articles. Educational guidance only; product statements are limited to docs/VERIFIED-FACTS.md.
 * No dates, authors, statistics, customer names or prices by design.
 */
export const posts: BlogPost[] = [
  {
    slug: "build-a-city-by-category-prospect-list",
    title: "How to build a city-by-category prospect list that stays useful",
    category: "Prospecting",
    excerpt:
      "A good local prospect list starts with a grid of categories and places, not a single broad search. Here is how to plan it, run it and keep it workable.",
    metaDescription:
      "Plan a local prospect list as a grid of business categories and cities, run tidy searches, de-duplicate the results and keep the list focused on real buyers.",
    readMinutes: 3,
    sections: [
      {
        heading: "Start with a grid, not a search box",
        paragraphs: [
          "Most weak prospect lists come from one oversized search: \"restaurants in the north\" or \"clinics near me\". The results are vague, overlap heavily and are hard to work through in any order. A better starting point is a simple grid. Down one side, list the business categories you can genuinely help. Across the top, list the towns, cities or districts you can realistically serve.",
          "Each cell in that grid becomes one query: one category in one place. The grid tells you what you have covered, what is left and where the list is thin. It also turns a vague goal (\"find more leads\") into a set of finite, checkable jobs.",
        ],
        bullets: [
          "Keep categories specific: \"orthodontist\" rather than \"healthcare\".",
          "Use the place names your prospects use, including well-known districts in larger cities.",
          "Mark each cell as planned, run, reviewed or parked so nothing is searched twice by accident.",
        ],
      },
      {
        heading: "Choose categories your offer actually fits",
        paragraphs: [
          "It is tempting to add every category that might buy. Resist it. A category earns a row on the grid when you can describe, in one sentence, a problem those businesses commonly have and how you solve it. If you cannot, the category will produce leads you do not know what to say to.",
          "Look at your best existing clients and note their categories. Then add close neighbours: a firm that serves dental clinics can often serve physiotherapy and optometry practices with the same message. Write a short note against each category describing the angle you will use, because it will shape your outreach later.",
        ],
      },
      {
        heading: "Size the geography to your capacity",
        paragraphs: [
          "A list is only valuable if you can work it. If you can comfortably contact a modest number of businesses each week, there is little point pulling every category across an entire country. Start with the places closest to your existing clients, or where you can meet people in person, and expand when you are running out of good prospects rather than before.",
          "Smaller geographies also make personalisation easier. When you know the area, you can mention local context naturally, and you can spot listings that look out of place.",
        ],
      },
      {
        heading: "Run the queries and merge the results cleanly",
        paragraphs: [
          "Run each cell as its own query and keep the raw results together with a note of which query produced them. Neighbouring cells will overlap: a business on a district boundary, or one listed under two categories, will appear more than once. De-duplicate on a combination of name, address and phone number rather than name alone, since chains and franchises often share names.",
          "Tools can carry much of this load. In LeadGen AI, a single query made of a category and a location fans out to each enabled source, and the results are normalised into one lead record per business and de-duplicated across sources, with the source of each field recorded. Whatever you use, keep traceability: you should always be able to say where a record came from.",
        ],
        bullets: [
          "Record the query, the source and the date each record was collected.",
          "Normalise addresses and phone formats before de-duplicating.",
          "Keep a note of records you merged, in case a merge was wrong.",
        ],
      },
      {
        heading: "Review before you contact anyone",
        paragraphs: [
          "A short review pass saves a great deal of wasted outreach. Skim each new batch for businesses that have clearly closed, listings that belong to a different category, and duplicates the automatic pass missed. Remove obvious mismatches immediately and park anything uncertain.",
          "Then sort what remains by how well it fits. Completeness of the listing, a working website and a clear sign that the business is operating are all reasonable early filters. The aim is not a huge list; it is a list where every row is a business you would be comfortable contacting tomorrow.",
          "Finally, revisit the grid every few weeks. Cells that produced good conversations deserve neighbouring cells; cells that produced nothing deserve a closer look at the angle, or retirement.",
        ],
      },
    ],
    related: [
      "/services/google-maps-lead-extraction",
      "/services/lead-deduplication",
      "/b2b/territory-planning",
      "/services/local-business-prospecting",
    ],
    faqs: [
      { q: "What Is A Category And Location Grid For Prospecting?", a: "It Is A Simple Table With The Business Categories You Can Help Down One Side And The Places You Can Serve Across The Top. Each Cell Becomes One Query, So You Can See What Is Covered And What Is Left." },
      { q: "How Specific Should Business Categories Be On My Prospect Grid?", a: "As Specific As Possible, Such As Orthodontist Rather Than Healthcare. Specific Categories Give Cleaner Results And Make Your Message Easier To Tailor." },
      { q: "How Do I Decide Which Categories Deserve A Row On The Grid?", a: "Add A Category Only If You Can Describe In One Sentence A Common Problem Those Businesses Have And How You Solve It." },
      { q: "How Big An Area Should My First Prospect List Cover?", a: "Size It To How Many Businesses You Can Actually Contact Each Week. Start Close To Existing Clients And Expand When Good Prospects Run Out." },
      { q: "How Should I Remove Duplicates When Merging Query Results?", a: "Match On A Combination Of Name, Address And Phone Number Rather Than Name Alone, Since Chains And Franchises Often Share Names." },
      { q: "What Should I Record For Each Prospect I Collect?", a: "Record The Query, The Source And The Date Each Record Was Collected, So You Can Always Say Where A Record Came From." },
      { q: "What Should I Check Before Contacting A Newly Built List?", a: "Skim Each Batch For Closed Businesses, Wrong Categories And Missed Duplicates, Then Sort The Rest By How Well They Fit." },
      { q: "How Often Should I Revisit My Prospecting Grid?", a: "Every Few Weeks. Expand Around Cells That Produced Good Conversations And Rethink Or Retire The Ones That Produced Nothing." },
    ],
  },
  {
    slug: "google-maps-or-directories-choosing-a-source",
    title: "Google Maps or business directories: choosing the right source for each search",
    category: "Prospecting",
    excerpt:
      "Map listings and trade directories describe different kinds of businesses in different ways. Matching the source to the buyer saves hours of cleaning later.",
    metaDescription:
      "When to prospect from Google Maps, when to use B2B directories such as IndiaMART, and how to combine sources without duplicates or mismatched records.",
    readMinutes: 3,
    sections: [
      {
        heading: "Different sources answer different questions",
        paragraphs: [
          "Every data source reflects why businesses list themselves there. Map listings exist so that customers can find, visit and call a business. Trade directories exist so that buyers can find suppliers of a product. Professional networks exist so that people can present their roles and careers. None of them is a complete picture, and each one is strongest for a particular kind of prospect.",
          "The practical question is not \"which source is best?\" but \"where would the businesses I want to reach make themselves visible?\" Answer that first and the choice of source usually follows.",
        ],
      },
      {
        heading: "When map listings are the better starting point",
        paragraphs: [
          "Map listings suit businesses with a physical location that serve customers locally: clinics, salons, restaurants, trades, gyms, shops and professional offices. These businesses have strong reasons to keep their listing accurate, because it brings them customers.",
        ],
        bullets: [
          "You are selling to local, customer-facing businesses.",
          "Location matters to your offer, for example local SEO or in-person services.",
          "Ratings, review counts and listing completeness tell you something useful about the prospect.",
          "You want an address, a phone number and often a website in the same record.",
        ],
      },
      {
        heading: "When directories are the better starting point",
        paragraphs: [
          "Trade directories suit manufacturers, wholesalers, exporters and industrial suppliers, many of whom have little reason to appear on a map. A supplier of packaging materials or machine parts may barely register on a consumer map but list a full product catalogue in a B2B marketplace.",
          "Directory searches also work differently. Instead of a category and a place, you usually search by a product or service term, so your list is organised around what businesses sell rather than where they sit.",
        ],
        bullets: [
          "You are selling to suppliers, manufacturers or distributors.",
          "The buyer is defined by what they make or sell rather than where they are.",
          "Product terms describe your audience better than category names.",
        ],
      },
      {
        heading: "Combining sources without creating a mess",
        paragraphs: [
          "Many audiences straddle both worlds. A regional distributor may have a showroom on the map and a catalogue in a directory. Pulling from both sources gives you a fuller picture, but only if you reconcile the records. Otherwise you end up contacting the same business twice, with two slightly different names.",
          "Match records on several fields at once: name, phone number, address and website domain. When two sources disagree, prefer the more complete and more recent value, and keep a note of where each field came from so you can resolve questions later.",
          "LeadGen AI draws on Google Maps, LinkedIn and IndiaMART, normalises the results into one lead record per business and de-duplicates across sources while recording the source of each field. If you assemble lists by hand, aim for the same outcome: one row per business, with traceable fields.",
        ],
      },
      {
        heading: "A quick decision checklist",
        paragraphs: [
          "Before you run a new search, take a minute to answer these questions. They tend to point clearly at one source, or at a deliberate combination.",
        ],
        bullets: [
          "Do my prospects serve walk-in or local customers? Start with map listings.",
          "Do they sell products to other businesses? Start with a trade directory.",
          "Do I need a specific role or person rather than a business? Add a professional network.",
          "Will I use the website in my pitch? Make sure the source reliably provides one.",
          "Can I reconcile records from two sources? If not, run one source well before adding another.",
        ],
      },
      {
        heading: "Common mistakes when picking a source",
        paragraphs: [
          "The most frequent mistake is choosing a source because it is familiar rather than because it fits the audience. Teams that always start on a map end up with very few manufacturers, while teams that live in directories miss local service businesses entirely. Another mistake is judging a source on volume alone. A long list of loosely matched records costs more to clean and contact than a shorter list that fits well.",
          "It is also easy to forget that sources change. Businesses update listings, directories reorganise their categories and new competitors appear. Run a small test search before committing to a large one, read a sample of the results carefully, and only then scale up. That habit catches mismatched categories and odd search terms before they fill your database.",
        ],
      },
    ],
    related: [
      "/compare/google-maps-vs-linkedin-prospecting",
      "/services/indiamart-lead-extraction",
      "/services/multi-source-lead-scraping",
      "/data-sources",
      "/services/source-traceability",
    ],
    faqs: [
      { q: "When Is Google Maps The Right Source For Prospecting?", a: "When You Sell To Local, Customer-Facing Businesses Such As Clinics, Salons, Trades And Shops, And Want An Address, Phone And Often A Website In One Record." },
      { q: "When Should I Prospect From A Trade Directory Like IndiaMART?", a: "When Your Buyers Are Manufacturers, Wholesalers, Exporters Or Suppliers Who Are Defined By What They Sell Rather Than Where They Are." },
      { q: "Why Do Directory Searches Use Product Terms Instead Of Places?", a: "Trade Directories Are Organised Around What Businesses Sell, So You Usually Search By A Product Or Service Term Rather Than A Category And A Place." },
      { q: "When Should I Add A Professional Network Such As LinkedIn?", a: "When You Need A Specific Role Or Person Rather Than Just A Business." },
      { q: "How Do I Combine Google Maps And Directory Results Without Duplicates?", a: "Match Records On Name, Phone, Address And Website Domain Together, Prefer The More Complete And Recent Value, And Note Where Each Field Came From." },
      { q: "Is A Bigger List From One Source Always Better?", a: "No. A Long List Of Loosely Matched Records Costs More To Clean And Contact Than A Shorter List That Fits Well." },
      { q: "Should I Test A New Data Source Before A Large Search?", a: "Yes. Run A Small Test Search, Read A Sample Of The Results Carefully And Only Then Scale Up." },
      { q: "What Is The Most Common Mistake When Choosing A Lead Source?", a: "Choosing A Source Because It Is Familiar Rather Than Because It Fits The Audience You Want To Reach." },
    ],
  },
  {
    slug: "first-email-that-references-a-website-audit",
    title: "Writing a first email that references a website audit",
    category: "Outreach",
    excerpt:
      "An audit finding can make a cold email feel relevant, or make it feel like a lecture. The difference is in how much you share and how you frame it.",
    metaDescription:
      "How to write a cold first email built on a website audit: pick one finding, explain it plainly, offer the full report and keep the tone helpful, not critical.",
    readMinutes: 3,
    sections: [
      {
        heading: "Why an audit makes a stronger opening",
        paragraphs: [
          "Most cold emails are about the sender. An email built on a website audit is about the recipient: their site, their visitors, their missed opportunities. That shift alone makes it easier to read past the first line.",
          "An audit also gives you something concrete to offer. Instead of asking for time, you can offer a finished piece of work. The prospect gets value whether or not they reply, which lowers the stakes for both of you.",
        ],
      },
      {
        heading: "Pick one finding, not ten",
        paragraphs: [
          "The temptation is to show how thorough you have been by listing every issue. Resist it. A long list reads as criticism and hides the point. Choose the single finding that is easiest to understand and most clearly connected to the prospect's business.",
        ],
        bullets: [
          "Prefer findings a non-technical owner will recognise, such as a missing page title or a slow mobile page.",
          "Prefer findings tied to customers, such as no clear way to call or book.",
          "Avoid jargon-heavy findings unless you know the reader is technical.",
          "Check the finding yourself before you mention it; never rely on a report you have not opened.",
        ],
      },
      {
        heading: "A simple structure for the email",
        paragraphs: [
          "Keep the first email short enough to read on a phone without scrolling much. A four-part structure works well for most audiences.",
          "First, a line that shows you have looked at their business specifically. Second, the single finding, stated plainly, with one sentence on why it matters to their customers. Third, an offer: the full report, free, with no obligation. Fourth, a low-effort question that is easy to answer, such as whether they would like you to send it over.",
          "Notice what is missing: a long introduction to your company, a list of services, and a request for a call. Those can come later, once the prospect has shown interest.",
        ],
      },
      {
        heading: "Getting the tone right",
        paragraphs: [
          "The owner of a small business often built the website themselves, or paid someone they trust. Criticism of the site can feel personal. Frame findings as opportunities rather than failures, and avoid words like \"broken\", \"terrible\" or \"outdated\".",
        ],
        bullets: [
          "Say \"we noticed\" rather than \"your site fails\".",
          "Connect the finding to an outcome they care about, such as calls, bookings or enquiries.",
          "Acknowledge what is working, if something genuinely is.",
          "Never exaggerate the impact of a finding or promise a specific result.",
        ],
      },
      {
        heading: "Following up and handing over the report",
        paragraphs: [
          "If the prospect replies, send the full report promptly, with a short note pointing them to the two or three items worth fixing first. A prioritised list is far more useful than a long one. If they do not reply, one or two polite follow-ups spaced a few days apart are reasonable; each should add something, such as a second finding or a quick tip they can act on alone.",
          "LeadGen AI's SEO website audit produces a report with an overall grade, a per-area scorecard, findings ranked by severity with plain-English explanations, and a prioritised fix list that can be handed to the prospect. Its AI-drafted outreach uses the lead's own enrichment and audit data, so your draft starts from real findings. Always read and edit the draft before it goes out; the judgement about tone is yours.",
        ],
      },
      {
        heading: "An example draft, annotated",
        paragraphs: [
          "Here is an illustrative example for a fictional physiotherapy practice. Subject line: \"A quick note about booking on your site\". Body: \"Hello, I was looking at physiotherapy practices in your area and spent a few minutes on your website. One thing stood out: on a phone, the booking button sits below several screens of text, so a visitor in a hurry may never see it. Moving it higher is usually a small change. I have put together a short, free report on your site with a few other quick wins. Would you like me to send it over?\"",
          "The opening proves the email is not a mass mailing. The finding is specific, easy to picture and tied to bookings. The fix sounds achievable, which avoids the sense of criticism. The offer is concrete and free, and the closing question can be answered with a single word. There is no request for a call, no list of services and no claim about results.",
        ],
      },
    ],
    related: [
      "/resources/seo-audit-as-a-sales-tool",
      "/strategies/website-audit-offers",
      "/resources/cold-email-writing",
      "/services/ai-drafted-outreach-messages",
      "/services/seo-website-audit",
    ],
    faqs: [
      { q: "Why Open A Cold Email With A Website Audit Finding?", a: "It Makes The Email About The Recipient’s Own Site And Gives You A Finished Piece Of Work To Offer Instead Of Just Asking For Time." },
      { q: "How Many Audit Findings Should A First Email Mention?", a: "Just One. Pick The Finding That Is Easiest To Understand And Most Clearly Connected To The Prospect’s Business." },
      { q: "Which Kinds Of Audit Findings Work Best In A Cold Email?", a: "Findings A Non-Technical Owner Will Recognise, Like A Slow Mobile Page, Or Ones Tied To Customers, Like No Clear Way To Call Or Book." },
      { q: "What Structure Works For An Audit-Based First Email?", a: "Show You Looked At Their Business, State One Finding And Why It Matters, Offer The Full Report Free, Then Ask An Easy Question Such As Whether To Send It." },
      { q: "How Do I Mention Website Problems Without Sounding Critical?", a: "Frame Findings As Opportunities, Say We Noticed Rather Than Your Site Fails, And Avoid Words Like Broken Or Outdated." },
      { q: "What Should I Send When A Prospect Asks For The Audit?", a: "Send The Full Report Promptly With A Short Note Pointing To The Two Or Three Items Worth Fixing First." },
      { q: "How Many Follow-Ups Are Reasonable After An Audit Email?", a: "One Or Two Polite Follow-Ups Spaced A Few Days Apart, Each Adding Something New Such As A Second Finding Or A Quick Tip." },
      { q: "Can I Send LeadGen AI’s AI-Drafted Email Without Editing It?", a: "You Should Always Read And Edit The Draft First. It Starts From The Lead’s Real Enrichment And Audit Data, But The Judgement About Tone Is Yours." },
    ],
  },
  {
    slug: "consent-aware-outreach-basics",
    title: "Consent-aware outreach basics for B2B prospecting",
    category: "Data & Compliance",
    excerpt:
      "Contacting businesses you have not spoken to before is legitimate in many places, but only when it is done carefully. These are the habits that keep outreach respectful and defensible.",
    metaDescription:
      "Practical habits for consent-aware B2B outreach: use public business data, explain where you found contacts, honour opt-outs fast and keep clear records.",
    readMinutes: 3,
    sections: [
      {
        heading: "Know which rules apply to you",
        paragraphs: [
          "Rules for unsolicited business contact vary by country and by channel. Email, phone calls and messaging apps are often treated differently, and contacting a company's general address can be treated differently from contacting a named individual. Before you start a campaign, identify the laws that apply where you are based and where your prospects are, such as GDPR in the UK and EU, CAN-SPAM in the United States or the DPDP Act in India.",
          "This article is general guidance, not legal advice. If you operate across several countries or handle sensitive data, it is worth taking proper advice once and writing down the result as a simple internal policy.",
        ],
      },
      {
        heading: "Collect only what you need, from public business sources",
        paragraphs: [
          "Consent-aware outreach starts long before the first message. Collect business contact details that a business has chosen to publish, such as the email and phone number on its own website or listing, and avoid personal details that have nothing to do with the business.",
        ],
        bullets: [
          "Prefer role addresses and published business contacts over personal ones.",
          "Do not collect data you have no plan to use.",
          "Record where each contact detail came from, so you can answer if asked.",
          "Do not buy or swap lists whose origins you cannot explain.",
        ],
      },
      {
        heading: "Make every message easy to understand and easy to refuse",
        paragraphs: [
          "A recipient should be able to tell who you are, why you are contacting them and how to stop hearing from you, all within a few seconds. That means a real sender name, a genuine business address where required, an honest subject line and a clear way to opt out.",
          "It also helps to say briefly where you found their details, for example \"I came across your clinic's listing while looking at practices in your area\". This is courteous, and it answers the question most recipients are silently asking.",
        ],
      },
      {
        heading: "Treat opt-outs as permanent and immediate",
        paragraphs: [
          "When someone asks not to be contacted, stop. Add them to a suppression list that every campaign checks, not just the one they replied to. If you have several team members or tools sending messages, make sure they share the same list, otherwise someone else will contact the person again next month.",
        ],
        bullets: [
          "Process opt-out requests promptly, whether they arrive by link, reply or phone.",
          "Suppress at the business or address level, not just within one campaign.",
          "Never ask people to log in or explain themselves in order to opt out.",
          "Keep the suppression list even when you delete other data.",
        ],
      },
      {
        heading: "Keep records you could show someone",
        paragraphs: [
          "Good records protect you and your prospects. For each lead you should be able to say where the data came from, what you sent, when you sent it and whether the person opted out. If a regulator, a client or the prospect themselves asks, you can answer quickly and honestly.",
          "In LeadGen AI, every message is logged against its lead, outreach respects sending limits and opt-out obligations, and the source of each field is recorded. The responsibility for deciding who to contact still sits with you; tools make good habits easier, but they do not replace them.",
        ],
      },
      {
        heading: "Build the habits into your weekly process",
        paragraphs: [
          "Consent-aware outreach works best when it is part of the routine rather than a check done once a year. Before each campaign, confirm the list was built from sources you can explain, check it against your suppression list and read the message once from the recipient's point of view. After each campaign, process replies and opt-outs before planning the next one.",
          "Keep sending volumes modest and steady too. Sudden large sends are more likely to irritate recipients and to harm your sender reputation, and they make it harder to handle replies properly. Respectful outreach is slower than blasting a list, but it builds a reputation that makes future conversations easier, and it keeps you on the right side of both the law and your prospects.",
        ],
      },
    ],
    related: [
      "/responsible-prospecting",
      "/resources/gdpr-and-lead-generation",
      "/resources/dpdp-act-india",
      "/resources/can-spam",
      "/resources/ethical-data-collection",
    ],
    faqs: [
      { q: "Which Laws Affect Cold B2B Outreach?", a: "It Depends On Where You And Your Prospects Are. Examples Include GDPR In The UK And EU, CAN-SPAM In The United States And The DPDP Act In India." },
      { q: "Is This Consent-Aware Outreach Article Legal Advice?", a: "No. It Is General Guidance, And If You Work Across Several Countries Or Handle Sensitive Data It Is Worth Taking Proper Advice Once." },
      { q: "What Contact Details Are Fine To Collect For B2B Outreach?", a: "Business Contact Details A Business Has Chosen To Publish, Such As The Email And Phone On Its Own Website Or Listing. Prefer Role Addresses Over Personal Ones." },
      { q: "Should I Buy Prospect Lists From Third Parties?", a: "Avoid Buying Or Swapping Lists Whose Origins You Cannot Explain, Since You Should Always Know Where Each Contact Detail Came From." },
      { q: "What Must Every Outreach Message Make Clear?", a: "Who You Are, Why You Are Contacting Them And How To Stop Hearing From You, With A Real Sender Name, An Honest Subject Line And A Clear Opt-Out." },
      { q: "How Should I Handle An Opt-Out Request?", a: "Stop Immediately And Add The Person To A Suppression List That Every Campaign And Team Member Checks, And Keep It Even When You Delete Other Data." },
      { q: "What Records Should I Keep For Each Outreach Contact?", a: "Where The Data Came From, What You Sent, When You Sent It And Whether The Person Opted Out." },
      { q: "Does LeadGen AI Make Me Compliant Automatically?", a: "No. It Logs Every Message Against Its Lead And Respects Sending Limits And Opt-Out Obligations, But Deciding Who To Contact Is Still Your Responsibility." },
    ],
  },
  {
    slug: "keeping-a-lead-database-clean",
    title: "Keeping a lead database clean without a dedicated data team",
    category: "Data & Compliance",
    excerpt:
      "A lead database decays quietly. A few lightweight routines keep it accurate enough to trust, even when nobody owns data quality full time.",
    metaDescription:
      "Simple routines for keeping a lead database clean: consistent fields, de-duplication, re-enrichment, clear statuses and a regular review of stale records.",
    readMinutes: 3,
    sections: [
      {
        heading: "Why lead data goes stale",
        paragraphs: [
          "Businesses move, close, rebrand, change phone numbers and replace their websites. Staff leave and email addresses stop working. Meanwhile, your own team adds records in slightly different formats and imports lists that overlap with what you already have. None of this is dramatic on any single day, but over months it turns a reliable database into one nobody quite trusts.",
          "The fix is not a big annual clean-up. It is a set of small habits that stop the mess from building up in the first place.",
        ],
      },
      {
        heading: "Agree on a minimum record standard",
        paragraphs: [
          "Decide what a usable lead record must contain and how each field is written. Without this, de-duplication and filtering become guesswork.",
        ],
        bullets: [
          "Business name exactly as the business presents it, without added descriptors.",
          "A category from a short, fixed list rather than free text.",
          "Phone numbers stored in one international format.",
          "A full postal address, with town and region in separate fields if possible.",
          "Website stored as a domain, so it can be matched across records.",
          "The source of the record and when it was collected.",
        ],
      },
      {
        heading: "De-duplicate on the way in, not afterwards",
        paragraphs: [
          "Duplicates are cheapest to stop at the moment of import. Before adding a new batch, match it against existing records on several fields at once: website domain, phone number and address are usually stronger signals than name alone. Decide in advance which record wins when two match, for example the more complete one, and keep a log of merges so mistakes can be undone.",
          "If you use a platform that normalises and de-duplicates records automatically, still spot-check a sample of each batch. Automatic matching is only as good as the data it is given.",
        ],
      },
      {
        heading: "Re-check records before you rely on them",
        paragraphs: [
          "Rather than refreshing everything on a schedule, re-check records at the moments that matter: before a campaign, before a call, or when a record moves into an active pipeline stage. That focuses effort on leads you are about to use.",
          "LeadGen AI's contact enrichment reconciles new results with the existing record, writing a field only when the new value is more complete, and never overwrites a field the user edited by hand. Lead scores recalculate when a lead is re-enriched. Whichever tool you use, protect manual corrections: nothing frustrates a team faster than fixing a record and watching it revert.",
        ],
      },
      {
        heading: "Use statuses to retire records honestly",
        paragraphs: [
          "Not every lead belongs in your active list forever. Clear statuses let you keep history without cluttering daily work.",
        ],
        bullets: [
          "Closed or unreachable: the business has stopped trading or every contact route failed.",
          "Not a fit: wrong category, size or location for your offer.",
          "Opted out: never contact again, but keep the record for suppression.",
          "Recycle later: a reasonable fit that was not ready; revisit at a set point.",
        ],
      },
      {
        heading: "A monthly fifteen-minute review",
        paragraphs: [
          "Once a month, sort the database by date last updated and look at the oldest active records. Check a handful, retire what is clearly dead and flag the rest for re-enrichment. Then look at the newest records for formatting drift: a new team member or import often introduces a different style. Small, regular corrections keep the whole database usable.",
          "It helps to give one person light ownership of this review, even if it is only part of their role. They do not need to fix everything themselves; their job is to notice patterns, such as a source that keeps producing incomplete records or an import that keeps breaking phone formats, and to raise them with the team. Fixing the cause of a recurring problem saves far more time than correcting the same symptom every month.",
          "Finally, write your record standard and status definitions down somewhere everyone can find them. A one-page guide is enough. New team members will follow it from their first day, and the database will stay consistent as the team grows.",
        ],
      },
    ],
    related: [
      "/resources/data-hygiene",
      "/lead-qualification/crm-hygiene",
      "/services/lead-data-normalisation",
      "/tools/data-quality-metrics",
      "/services/ai-contact-enrichment",
    ],
    faqs: [
      { q: "Why Does A Lead Database Go Out Of Date?", a: "Businesses Move, Close, Rebrand And Change Numbers, Staff Leave, And Team Members Add Records In Different Formats. Small Changes Build Up Over Months." },
      { q: "What Should A Minimum Lead Record Standard Include?", a: "The Business Name As Presented, A Category From A Fixed List, A Phone In One International Format, A Full Address, The Website As A Domain, And The Source And Collection Date." },
      { q: "When Is The Best Time To Remove Duplicate Leads?", a: "At Import. Match Each New Batch Against Existing Records On Domain, Phone And Address Before Adding It, And Keep A Log Of Merges." },
      { q: "Should I Still Check Records If My Tool De-Duplicates Automatically?", a: "Yes. Spot-Check A Sample Of Each Batch, Because Automatic Matching Is Only As Good As The Data It Is Given." },
      { q: "How Often Should I Refresh Lead Data?", a: "Rather Than Refreshing Everything On A Schedule, Re-Check Records Before A Campaign, Before A Call Or When A Lead Moves Into An Active Pipeline Stage." },
      { q: "Will Re-Enrichment In LeadGen AI Overwrite My Manual Edits?", a: "No. Enrichment Writes A Field Only When The New Value Is More Complete And Never Overwrites A Field You Edited By Hand." },
      { q: "Which Statuses Help Retire Old Lead Records?", a: "Useful Statuses Are Closed Or Unreachable, Not A Fit, Opted Out, And Recycle Later." },
      { q: "What Should A Monthly Lead Database Review Cover?", a: "Check The Oldest Active Records, Retire What Is Clearly Dead, Flag The Rest For Re-Enrichment And Look At The Newest Records For Formatting Drift." },
    ],
  },
  {
    slug: "interpreting-a-lead-score",
    title: "How to interpret a lead score without over-trusting it",
    category: "Qualification",
    excerpt:
      "A lead score is a sorting aid, not a verdict. Reading the reasons behind it tells you far more than the number on its own.",
    metaDescription:
      "Read a lead score properly: understand what feeds it, check the reasons, use score bands for prioritising and know when your own judgement should win.",
    readMinutes: 3,
    sections: [
      {
        heading: "What a lead score is for",
        paragraphs: [
          "A lead score compresses many small signals into one number so that you can decide where to spend your time first. That is its whole job. It does not tell you whether a business will buy, and it cannot know things that are not in the data, such as a recent change of owner or a budget freeze.",
          "Treat the score as an ordering tool. It helps you work through a long list in a sensible sequence, and it helps a team agree on which leads deserve attention this week.",
        ],
      },
      {
        heading: "Know what feeds the number",
        paragraphs: [
          "You cannot interpret a score if you do not know what goes into it. Most scoring for outbound prospecting draws on a mix of fit signals (does this business match the market you serve?) and quality signals (is the record complete and is the business clearly active?).",
          "LeadGen AI's lead scoring, for example, gives a single 0 to 100 score per lead and stores the reasons on the record. The score reflects record completeness, website health and whether the business is credibly online, fit against your stated market, category and geography, and signals of an active, operating business. Knowing that, a low score could mean a poor fit, or simply an incomplete record that further enrichment might improve.",
        ],
      },
      {
        heading: "Always read the reasons",
        paragraphs: [
          "Two leads with the same score can be very different prospects. One might score well because its record is complete and its website is healthy; another because it sits squarely in your target category and area. Reading the reasons tells you which conversation to have.",
        ],
        bullets: [
          "High fit, weak website: a natural candidate for web or SEO services.",
          "High fit, incomplete record: enrich before deciding.",
          "Complete record, weak fit: possibly a polite pass, unless your market is changing.",
          "Signals of inactivity: check before contacting; the business may have closed.",
        ],
      },
      {
        heading: "Work in bands, not exact numbers",
        paragraphs: [
          "The difference between a 71 and a 74 rarely means anything. Group scores into a few bands and give each band a clear action. This keeps the team from arguing about decimals and makes the process easy to explain to newcomers.",
          "A simple pattern is three bands: a top band you contact first and push into the pipeline, a middle band you enrich, review or nurture, and a lower band you park unless something changes. Where the boundaries sit depends on your list, so revisit them once you have seen how leads in each band actually respond.",
        ],
      },
      {
        heading: "When to override the score",
        paragraphs: [
          "Your own knowledge should win when you know something the data does not. A referral, a conversation at an event or an existing relationship can make a modestly scored lead your best opportunity. Equally, a high-scoring lead in a category you have decided to stop serving should not jump the queue.",
          "When you override, write down why. Over time those notes show you where the scoring criteria and your real market differ, and they make it easier to adjust your stated market, category and geography so the score reflects how you actually sell.",
        ],
      },
      {
        heading: "Keep the score honest over time",
        paragraphs: [
          "Scores drift away from reality when the inputs change and nobody notices. If you widen your target geography, add a new category or start selling a different service, update the market you have described so that fit is judged against how you sell today. Re-enrich older leads before relying on their scores, because a record collected months ago may no longer reflect the business.",
          "Every so often, look back at the leads that became real conversations and check which bands they came from. If good opportunities keep appearing in the middle band, your boundaries may be too strict, or a signal that matters to your buyers may be missing from the record. If the top band rarely replies, look at the reasons on those records and ask whether they describe businesses that genuinely need what you offer.",
        ],
      },
    ],
    related: [
      "/services/ai-lead-scoring",
      "/lead-qualification/lead-scoring-models",
      "/lead-qualification/fit-vs-intent-scoring",
      "/services/sales-prioritisation",
    ],
    faqs: [
      { q: "What Is A Lead Score Actually For?", a: "It Is An Ordering Tool That Helps You Decide Where To Spend Time First. It Does Not Tell You Whether A Business Will Buy." },
      { q: "What Goes Into A LeadGen AI Lead Score?", a: "Record Completeness, Website Health And Online Presence, Fit Against Your Stated Market, Category And Geography, And Signals Of An Active Business." },
      { q: "Why Should I Read The Reasons Behind A Lead Score?", a: "Two Leads With The Same Score Can Be Very Different Prospects. The Reasons Tell You Which Conversation To Have." },
      { q: "Does A Low Score Always Mean A Poor Lead?", a: "No. It Could Mean A Poor Fit, Or Simply An Incomplete Record That Further Enrichment Might Improve." },
      { q: "Should I Sort Leads By Exact Score?", a: "Work In A Few Bands Instead, Since A 71 And A 74 Rarely Differ In Practice. Give Each Band A Clear Action." },
      { q: "When Should I Ignore The Lead Score?", a: "When You Know Something The Data Doesn’t, Such As A Referral Or An Existing Relationship. Write Down Why You Overrode It." },
      { q: "How Do I Keep Lead Scores Accurate Over Time?", a: "Update Your Stated Market When You Change What Or Where You Sell, And Re-Enrich Older Leads Before Relying On Their Scores." },
      { q: "How Can I Tell If My Score Bands Are Set Wrong?", a: "Look At Which Bands Real Conversations Came From. Good Leads In The Middle Band Or Few Replies From The Top Band Are Signs To Adjust." },
    ],
  },
  {
    slug: "weekly-prospecting-routine-for-small-agencies",
    title: "A weekly prospecting routine for small agencies",
    category: "Agencies",
    excerpt:
      "Client work always feels more urgent than prospecting. A fixed weekly rhythm keeps new business moving without taking over the week.",
    metaDescription:
      "A practical weekly prospecting routine for small agencies: plan on Monday, research and send midweek, follow up on Thursday and review on Friday.",
    readMinutes: 3,
    sections: [
      {
        heading: "Why agencies need a routine rather than a push",
        paragraphs: [
          "Small agencies tend to prospect in bursts. When work dries up, everyone pitches; when it picks up, prospecting stops. The result is a cycle of feast and famine, with new business always arriving a month or two after it was needed.",
          "A modest, fixed routine breaks that cycle. A few protected slots each week, kept even when the studio is busy, produce a steady trickle of conversations. The routine below assumes one person spending a few hours across the week; adjust it to your team.",
        ],
      },
      {
        heading: "Monday: choose this week's slice",
        paragraphs: [
          "Start the week by deciding exactly which prospects you will work on. Pick one category and one area, or one clear segment such as businesses with no website in a given town. A narrow slice makes research faster and messages more specific.",
        ],
        bullets: [
          "Pull or refresh the list for the slice.",
          "Remove businesses you already work with or have recently contacted.",
          "Sort by score or fit and pick a manageable number for the week.",
          "Note one sentence about why this segment needs your service.",
        ],
      },
      {
        heading: "Tuesday and Wednesday: research and first messages",
        paragraphs: [
          "Spend a short block each day reviewing prospects and sending first messages. For each one, look at the website and listing, run or open an audit, and pick a single specific observation to mention. Write the message, read it aloud once and send it.",
          "This is where tools save the most time. Opportunity flags such as no website, a site that does not resolve or a weak audit point you towards businesses with a visible need. LeadGen AI's business opportunity detection attaches the evidence behind each flag, and its AI-drafted outreach starts from the lead's enrichment and audit data. Still check every draft yourself: a message that sounds like you is worth the extra minute.",
        ],
      },
      {
        heading: "Thursday: follow up and update the pipeline",
        paragraphs: [
          "Most replies come after a follow-up, so give follow-ups their own slot instead of squeezing them in. Reply to anyone who responded, send polite second messages to those who did not, and move every lead to the right stage.",
        ],
        bullets: [
          "Answer replies first, especially requests for the audit or a call.",
          "Make each follow-up add something new, such as a second finding or a quick tip.",
          "Record outcomes, including no and not now, so you do not chase them again.",
          "Add opt-outs to your suppression list straight away.",
        ],
      },
      {
        heading: "Friday: a short review",
        paragraphs: [
          "End the week with fifteen minutes of honest review. Which segment produced replies? Which opening line got ignored? Was the list clean, or did you waste time on closed businesses? Write two or three notes and use them to choose next Monday's slice.",
          "Over a few months these notes become your agency's playbook: the categories that respond, the observations that open conversations and the follow-ups that work. That knowledge is far more valuable than any single campaign, and it keeps building as long as the routine continues.",
        ],
      },
      {
        heading: "Protecting the routine when work gets busy",
        paragraphs: [
          "The routine only works if it survives busy weeks. Put the slots in the calendar as recurring appointments and treat them like client meetings. If you must cut back, shrink the slice rather than skipping the week: contacting a handful of well-chosen prospects keeps the habit alive and keeps a few conversations moving.",
          "Sharing the load also helps. One person can build and clean the list, another can write the first messages and a third can handle replies. A shared pipeline board with clear stages and owners stops anything falling between people, and it means prospecting continues when one person is away. The goal is a rhythm the agency can sustain for years, not a heroic push that fades by the end of the month.",
        ],
      },
    ],
    related: [
      "/services/agency-client-prospecting",
      "/b2b/agencies",
      "/compare/use-case-web-design-studio",
      "/services/business-opportunity-detection",
      "/lead-qualification/follow-up-cadence",
    ],
    faqs: [
      { q: "Why Do Small Agencies Need A Weekly Prospecting Routine?", a: "Prospecting In Bursts Creates Feast And Famine. A Few Protected Slots Each Week Produce A Steady Flow Of Conversations." },
      { q: "How Much Time Does This Agency Prospecting Routine Take?", a: "It Assumes One Person Spending A Few Hours Across The Week, Which You Can Adjust To Your Team." },
      { q: "What Should An Agency Do On Monday For Prospecting?", a: "Pick One Narrow Slice, Such As One Category In One Area, Refresh The List, Remove Existing Contacts And Choose A Manageable Number For The Week." },
      { q: "How Should First Messages Be Prepared Midweek?", a: "Review Each Prospect’s Website And Listing, Run Or Open An Audit, Mention One Specific Observation And Read The Message Aloud Before Sending." },
      { q: "Why Give Follow-Ups Their Own Day In The Week?", a: "Most Replies Come After A Follow-Up, So A Dedicated Slot Stops Them Being Squeezed Out. Answer Replies First And Update Every Lead’s Stage." },
      { q: "What Should The Friday Prospecting Review Look At?", a: "Which Segment Replied, Which Opening Lines Were Ignored And Whether The List Was Clean. Use The Notes To Choose Next Monday’s Slice." },
      { q: "How Do I Keep Prospecting Going In A Busy Client Week?", a: "Shrink The Slice Rather Than Skipping The Week, And Keep The Slots In The Calendar As Recurring Appointments." },
      { q: "How Can Several Agency Team Members Share Prospecting Work?", a: "Split List Building, First Messages And Replies Between People, And Use A Shared Pipeline Board With Clear Stages And Owners." },
    ],
  },
  {
    slug: "turning-audit-findings-into-a-proposal",
    title: "Turning website audit findings into a proposal clients understand",
    category: "Outreach",
    excerpt:
      "An audit identifies problems; a proposal sells solutions. Bridging the two well is what turns an interested prospect into a client.",
    metaDescription:
      "Turn a website audit into a clear proposal: group findings into outcomes, prioritise by impact and effort, scope phases honestly and avoid promised results.",
    readMinutes: 3,
    sections: [
      {
        heading: "An audit is not a proposal",
        paragraphs: [
          "A prospect who has read your audit and agreed to talk is interested, but a list of findings does not tell them what to do next, what it involves or why they should hire you rather than fix things themselves. Sending the audit again with a quote attached rarely works.",
          "The proposal's job is to translate technical findings into business outcomes, decisions and a clear scope of work. It should be shorter than the audit and much easier to act on.",
        ],
      },
      {
        heading: "Group findings into outcomes the client cares about",
        paragraphs: [
          "Clients do not buy \"fix missing meta descriptions\" or \"add structured data\". They buy being easier to find, making it easier for visitors to get in touch, or a site that works properly on a phone. Group related findings under a handful of outcomes like these.",
        ],
        bullets: [
          "Being found: metadata, structured data and content gaps.",
          "Loading quickly: performance and page-health issues.",
          "Turning visits into enquiries: contact routes, calls to action and forms.",
          "Staying healthy: technical issues that cause problems over time.",
        ],
      },
      {
        heading: "Prioritise by impact and effort",
        paragraphs: [
          "Not every finding deserves the same attention. For each group, make a rough judgement of how much it matters to the client's goals and how much work it needs. Lead with high-impact, low-effort fixes; they build trust quickly and show progress early.",
          "Be willing to leave things out. A proposal that tries to fix everything looks expensive and unfocused. If a finding is minor, say so, and suggest the client handles it themselves or leaves it for later.",
          "LeadGen AI's SEO website audit ranks findings by severity with plain-English explanations and produces a prioritised fix list, which is a useful starting point. Your proposal adds the context the audit cannot know: the client's goals, budget and in-house skills.",
        ],
      },
      {
        heading: "Structure the proposal around phases",
        paragraphs: [
          "Breaking the work into phases makes it easier to say yes. A first phase with a modest, clearly defined scope lets the client try working with you before committing to more.",
        ],
        bullets: [
          "A short summary of what you found, in two or three sentences.",
          "The outcomes you will work towards, each linked to specific findings.",
          "Phase one: the quick, high-impact fixes, with what you will deliver.",
          "Later phases: larger pieces of work, described briefly.",
          "What you need from the client, such as access, content or approvals.",
          "How you will report progress.",
        ],
      },
      {
        heading: "Promise work, not results",
        paragraphs: [
          "It is tempting to predict rankings, traffic or enquiries. Avoid it. Search and conversion depend on many things outside your control, and a missed prediction damages trust far more than a cautious one. Describe what you will do and why it should help, and agree on what you will measure together.",
          "Finally, re-run the audit after the first phase and share the before-and-after scorecard. It is honest evidence of progress, and it gives you a natural reason to propose the next phase.",
        ],
      },
      {
        heading: "Presenting the proposal",
        paragraphs: [
          "Whenever possible, walk the client through the proposal on a short call rather than simply emailing it. Open the audit alongside it and show how each phase connects to specific findings. Clients are far more comfortable agreeing to work when they can see exactly why it is needed and can ask questions as they go.",
          "Invite pushback. Ask which outcomes matter most and whether anything in the scope looks unnecessary. Adjusting the proposal together turns it into a shared plan rather than a sales document, and a client who helped shape the scope is much more likely to approve it. Follow the call with a revised version that reflects what you agreed, and a clear next step such as a start date for phase one.",
        ],
      },
    ],
    related: [
      "/services/opportunity-reports",
      "/services/seo-website-audit",
      "/services/seo-agency-lead-generation",
      "/compare/use-case-local-seo-agency",
    ],
    faqs: [
      { q: "Why Isn’t Sending The Audit With A Quote Enough?", a: "A List Of Findings Doesn’t Tell The Client What To Do Next Or Why To Hire You. A Proposal Turns Findings Into Outcomes, Decisions And A Clear Scope." },
      { q: "How Should I Group Audit Findings In A Proposal?", a: "Group Them Under Outcomes Clients Care About, Such As Being Found, Loading Quickly, Turning Visits Into Enquiries And Staying Healthy." },
      { q: "Which Fixes Should Come First In An SEO Proposal?", a: "Lead With High-Impact, Low-Effort Fixes, Since They Build Trust Quickly And Show Progress Early." },
      { q: "Is It Fine To Leave Some Audit Findings Out Of A Proposal?", a: "Yes. A Proposal That Tries To Fix Everything Looks Expensive And Unfocused, So Mark Minor Items For The Client To Handle Or Leave For Later." },
      { q: "Why Split Website Work Into Phases?", a: "A Small, Clearly Defined First Phase Makes It Easier For The Client To Say Yes And Try Working With You Before Committing To More." },
      { q: "Should My Proposal Promise Rankings Or Traffic?", a: "No. Describe What You Will Do And Why It Should Help, And Agree Together On What You Will Measure." },
      { q: "How Can I Show Progress After The First Phase?", a: "Re-Run The Audit And Share The Before-And-After Scorecard. It Is Honest Evidence And A Natural Reason To Propose The Next Phase." },
      { q: "Is It Better To Email A Proposal Or Present It?", a: "Walk The Client Through It On A Short Call Where Possible, With The Audit Open Alongside, And Invite Their Feedback On The Scope." },
    ],
  },
];
