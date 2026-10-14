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
      "LeadGen AI Is A Prospect Intelligence Platform That Runs One Connected Pipeline. It Finds Businesses Across Google Maps, LinkedIn And IndiaMART, Adds Contact Details To Each Record, Scores And Audits It, And Flags Sales Opportunities. Your Team Then Works The Result In A CRM Pipeline With AI-Drafted Outreach. This Page Maps Every Service Into Five Clusters So You Can See What Each Module Does And How It Hands Off To The Next.",
      "You Do Not Need To Adopt Everything At Once. Most Teams Start With A Single Query And A CSV Export, Then Add Scoring, Audits And Outreach As Their Process Matures. The Clusters Below Explain What Sits Where, Which Plan Includes It, And How To Choose A Sensible Starting Point.",
    ],
    highlights: [
      "One Query Fans Out To Three Sources",
      "Every Field Traceable To Its Source",
      "Scores Stored With Their Reasons",
      "Outreach Sent Through Your Own Transport",
    ],
    sections: [
      {
        heading: "Discover: Finding The Businesses Worth Knowing About",
        paragraphs: [
          "Discovery Turns A Search (A Category And A Location, Or A Directory Search Term) Into Lead Records. One Query Fans Out To Each Enabled Source, And Results Are Normalised Into One Record Per Business With Duplicates Merged Across Sources. Large Jobs Run On A Worker Fleet, So A Scrape Keeps Going After You Close The Tab.",
        ],
        bullets: [
          "Multi-Source Lead Scraping, Google Maps Lead Extraction, LinkedIn Lead Enrichment And IndiaMART Lead Extraction",
          "Distributed Scrape Fleet For Long, High-Volume Jobs",
          "Lead List Building And Local Business Prospecting As Applied Workflows",
        ],
      },
      {
        heading: "Enrich: Completing Each Record With Reachable Contact Routes",
        paragraphs: [
          "New Leads Are Queued For Enrichment Automatically. The Platform Finds The Website, Crawls The Pages That Usually List Contact Details And Compares What It Finds With The Existing Record. It Only Writes A Field When The New Value Is More Complete. Manual Edits Are Never Overwritten.",
        ],
        bullets: [
          "AI Contact Enrichment, Business Email Discovery, Phone Number Validation",
          "Website Enrichment And Social Profile Enrichment",
          "Lead De-Duplication, Lead Data Normalisation And Source Traceability",
        ],
      },
      {
        heading: "Qualify: Deciding Who Deserves Attention First",
        paragraphs: [
          "Qualification Modules Turn Raw Records Into A Prioritised List. AI Lead Scoring Gives Each Lead A Single 0–100 Score With The Reasons Stored On The Record. The SEO Website Audit Grades A Prospect’s Site Across Technical Health, Content, Metadata, Structured Data And Performance. Business Opportunity Detection Flags Missing Websites, Sites That Don’t Resolve, Listings With No Reachable Contact Route And Weak Audits, Each With Its Evidence.",
        ],
        bullets: [
          "AI Lead Scoring, Sales Prioritisation And Prospect Research",
          "SEO Website Audit And Opportunity Reports",
          "Business Opportunity Detection And Missing Website Detection",
          "Agency Client Prospecting, Website Redesign Prospecting And SEO Agency Lead Generation",
        ],
      },
      {
        heading: "Engage: Working Leads Through A Pipeline And Outreach",
        paragraphs: [
          "Engagement Happens On A Pipeline Board With Stages, Owners And Full Activity History. Outreach Drafts Are Written From The Lead’s Own Enrichment And Audit Data, Campaigns Are Sent Through Your Configured Email Transport, And Every Message Is Logged Against Its Lead. Sending Limits And Opt-Out Obligations Are Respected, And You Stay In Control Of The List.",
        ],
        bullets: [
          "CRM Pipeline Management",
          "AI Outreach Campaigns And AI-Drafted Outreach Messages",
          "Outreach Activity Logging",
        ],
      },
      {
        heading: "Operate: Access, Data Movement And Administration",
        paragraphs: [
          "Operational Services Keep The Platform Usable Across Teams And Tools. Role-Based Access Controls Who Sees Which Records. Multi-Tenant Workspaces Keep Organisations Separate. The Lead Dashboard Gives Every User Sortable And Filterable Views. CSV Export Moves Data Into Other Systems, And Per-Org API Keys On The Scale Plan Support Programmatic Integration.",
        ],
        bullets: [
          "Lead Dashboard And CSV Lead Export",
          "Role-Based Team Access And Multi-Tenant Workspaces",
          "API Access",
        ],
      },
      {
        heading: "How Plans Map To The Clusters",
        paragraphs: [
          "The Free Plan Covers The Basics Of Discover And Enrich: 3 Scrape Queries, Website Enrichment, The Lead Dashboard And CSV Export For One Admin User. Growth Adds 50 Scrape Queries Per Month, AI Lead Scoring And Outreach, Full Team Access With 7 Role Modules, And SEO And Website-Build Reports. Scale Adds Unlimited Queries, A Distributed Scrape Fleet, The LinkedIn And IndiaMART Sources, Per-Org API Keys, Priority Support With An SLA And A Dedicated Success Manager. Prices Are Shared On Request Rather Than Published Here.",
        ],
      },
    ],
    steps: {
      heading: "Choosing Where To Start",
      items: [
        { title: "Name One Market", text: "Pick A Single Category And Geography You Already Sell Into, So Early Results Are Easy To Judge." },
        { title: "Run A Discovery Query", text: "Use A Free Query To See What The Sources Return And How Complete The Records Are After Enrichment." },
        { title: "Export Or Score", text: "On Free, Export To CSV And Work The List In Your Existing Tools; On Growth, Sort By Score And Review The Stored Reasons." },
        { title: "Add Audits For Service Sales", text: "If You Sell Web, SEO Or Marketing Services, Use Audits And Opportunity Flags As The Evidence Behind Each Pitch." },
        { title: "Move The Top Band Into The Pipeline", text: "Assign Owners, Draft Outreach From The Lead’s Data, Review It, And Send Through Your Own Email Transport." },
      ],
    },
    considerations: {
      heading: "Before You Commit",
      items: [
        "LinkedIn And IndiaMART Sources Are Part Of The Scale Plan; Free And Growth Teams Work Mainly With Google Maps Data.",
        "Data Quality Depends On What Businesses Publish. Enrichment Can Only Add Contact Details That Are Publicly Available.",
        "Scoring And Outreach Are Growth Features, So A Free Trial Shows Discovery And Enrichment, Not The Full Pipeline.",
        "Outreach Still Needs A Configured Email Transport And Your Own Judgement About Who To Contact And How Often.",
        "Named Third-Party CRM Integrations Are Not Offered; Data Moves Out Through CSV Export, Or Through Per-Org API Keys On Scale.",
      ],
    },
    example: {
      heading: "A Small Agency Mapping Its First Month",
      text: "Imagine A Four-Person Digital Agency In Indore That Wants Local Clinic Clients. In Week One It Runs A Single Google Maps Query For Clinics In Two Neighbourhoods And Lets Enrichment Fill In Websites And Public Emails. In Week Two It Upgrades To Growth, Sorts By Score And Opens Audits On The Top Fifty. Opportunity Flags Highlight A Dozen Clinics With No Working Website. The Team Moves Those Into The Pipeline, Assigns Owners And Sends Reviewed, Audit-Based Drafts Through Its Own Email Account.",
    },
    faqs: [
      { q: "Do I Have To Use Every Module Together?", a: "No. Each Module Is Useful On Its Own. Many Teams Use Discovery And CSV Export First And Add Scoring, Audits And Outreach Later. The Pipeline Simply Makes Handoffs Easier When You Do Combine Them." },
      { q: "Which Cluster Should A Web Design Studio Start With?", a: "Discover Plus Qualify. A Local Query Followed By Audits And Missing-Website Flags Gives A Studio A List Of Businesses With Visible, Evidenced Website Problems To Talk About." },
      { q: "Where Do I See What Each Plan Includes?", a: "The Plans Page Lists The Free, Growth And Scale Features. Pricing Is Not Published On The Site, So Request Access Or Contact The Team For A Quote." },
      { q: "Can Engineers Integrate The Platform With Internal Systems?", a: "On The Scale Plan, Per-Org API Keys Support Programmatic Access. On Other Plans, CSV Export Is The Way To Move Lead Data Into Other Tools." },
      { q: "What Is The Simplest Way To Test The Platform Before Upgrading?", a: "Pick One Category And One Geography You Already Sell Into And Run It As A Free Query. Let Enrichment Finish, Then Check How Complete The Records Are And Export Them To CSV. That Small Test Shows Whether The Data Suits Your Market Before You Pay For Scoring Or Outreach." },
      { q: "Which Plan Do I Need For LinkedIn And IndiaMART Data?", a: "Both Sources Are Part Of The Scale Plan. Free And Growth Teams Work Mainly With Google Maps Data, Which Already Suits Most Local Prospecting. Scale Also Adds Unlimited Queries, A Distributed Scrape Fleet And Per-Org API Keys." },
      { q: "How Do The Five Clusters Hand Off To Each Other?", a: "Discover Creates Lead Records, Enrich Fills In Websites And Contact Details, And Qualify Adds A Score, Audits And Opportunity Flags. Engage Then Moves The Best Leads Into The Pipeline With Outreach, While Operate Covers Access, Exports And Administration Across All Of Them." },
      { q: "Does The Platform Send Outreach From Its Own Servers?", a: "No. Campaigns Are Sent Through The Email Transport You Configure, So Messages Come From Your Own Sending Setup. Every Message Is Logged Against Its Lead, And Sending Limits And Opt-Out Obligations Are Respected." },
    ],
    related: ["/how-it-works", "/platform", "/plans", "/services/multi-source-lead-scraping", "/services/ai-lead-scoring", "/services/crm-pipeline-management"],
    cta: { heading: "Try The Pipeline On Your Own Market", text: "Run Three Free Queries And See How Discovery And Enrichment Look For The Businesses You Sell To.", label: "Start Free", href: "https://leadgeneration.oxo1.com/" },
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
      "Multi-Source Lead Scraping In LeadGen AI Means You Write One Query (A Category And A Location, Or A Directory Search Term) And It Fans Out To Every Enabled Source: Google Maps, LinkedIn And IndiaMART. The Results Come Back As One Normalised Lead Record Per Business, De-Duplicated Across Sources, With Each Field Tagged With The Source It Came From.",
      "The Point Is To Stop Stitching Spreadsheets Together. Instead Of Running Three Separate Searches, Exporting Three Files And Reconciling Them By Hand, Your Team Gets A Single List It Can Enrich, Score And Work Straight Away.",
    ],
    highlights: [
      "Category Plus Location, Or Directory Terms",
      "One Record Per Business",
      "Per-Field Source Traceability",
      "Jobs Continue After You Close The Tab",
    ],
    sections: [
      {
        heading: "How A Single Query Fans Out",
        paragraphs: [
          "When You Submit A Query, The Platform Sends It To Each Source You Have Enabled. Google Maps Is Suited To Category-And-Location Searches Such As “Interior Designers In Bengaluru”. IndiaMART Is Searched With Directory Terms That Suppliers Use To Describe Their Products. LinkedIn Adds Company Context For B2B Prospecting. Each Source Returns What It Publicly Lists, And The Platform Merges Those Responses Into One Dataset.",
          "Because Sources Describe The Same Business Differently, Results Are Normalised Into A Consistent Record Shape Before They Are Compared. That Normalisation Is What Makes Cross-Source De-Duplication Possible.",
        ],
      },
      {
        heading: "What Each Lead Record Contains",
        paragraphs: ["Every Record Follows The Same Structure Regardless Of Where Its Data Originated:"],
        bullets: [
          "Business Name, Category And Full Postal Address",
          "Website, Listed Phone Numbers And Public Email Addresses",
          "Ratings, Review Counts And Listing-Completeness Signals",
          "The Source Each Field Came From, For Traceability",
        ],
      },
      {
        heading: "Why Per-Field Sources Matter",
        paragraphs: [
          "When A Phone Number Came From A Maps Listing And An Email Came From A Directory Profile, You Want To Know That Before You Call Or Write. Source Tags Let Reps Judge How Fresh And Reliable A Value Is Likely To Be. They Help Ops Teams Explain Odd Records, And They Give Managers A Clear Audit Trail When A Prospect Asks Where Their Details Were Found.",
        ],
      },
      {
        heading: "Worker Fleet, Quotas And Job Records",
        paragraphs: [
          "Long Jobs Run On A Worker Fleet Rather Than In Your Browser, So A Large Scrape Keeps Going After The Tab Is Closed. Quotas Are Enforced Per Plan And Per Billing Cycle: Free Includes 3 Scrape Queries, Growth 50 Per Month, And Scale Unlimited Queries With A Distributed Scrape Fleet. Every Job Records What It Fetched And When, Which Makes It Easy To See Which List Came From Which Run.",
        ],
      },
      {
        heading: "Which Plans Include Which Sources",
        paragraphs: [
          "Multiple Sources, Including LinkedIn And IndiaMART, Are Listed As A Scale Plan Feature. Teams On Free And Growth Can Still Run Discovery And Enrichment; Teams That Need All Three Sources In One Query, At Volume, Are The Natural Fit For Scale.",
        ],
      },
    ],
    steps: {
      heading: "Running A Multi-Source Scrape",
      items: [
        { title: "Define The Segment", text: "Write Down The Category, Geography Or Product Terms That Describe Your Buyers, And Keep Each Query Narrow Enough To Review." },
        { title: "Choose Sources", text: "Enable The Sources That Suit The Segment: Maps For Local Businesses, IndiaMART For Suppliers, LinkedIn For Company Context." },
        { title: "Submit And Leave It Running", text: "The Worker Fleet Processes The Job In The Background; You Can Close The Tab And Return Later." },
        { title: "Review Merged Records", text: "Check The De-Duplicated List, Glance At Source Tags And Spot-Check A Few Records Against The Original Listings." },
        { title: "Hand Off To Enrichment And Scoring", text: "New Leads Are Queued For Enrichment Automatically; Once Complete, Sort And Filter Before Moving The Best Into The Pipeline." },
      ],
    },
    considerations: {
      heading: "Limits To Plan Around",
      items: [
        "Results Reflect What Businesses Publish Publicly; A Sparse Listing Produces A Sparse Record Until Enrichment Fills Gaps.",
        "Broad Queries Burn Quota Quickly And Produce Lists Too Large To Review. Narrow, Repeatable Queries Usually Work Better.",
        "De-Duplication Relies On Normalised Details; Businesses Listed Under Very Different Names Or Addresses May Still Need A Manual Check.",
        "Using Scraped Public Data Still Carries Obligations. Check Current Rules In Your Markets And See Our Responsible Prospecting Guidance.",
        "LinkedIn And IndiaMART Sources Require The Scale Plan.",
      ],
    },
    example: {
      heading: "A Packaging Supplier Widening Its Search",
      text: "Picture A Corrugated Packaging Maker In Ahmedabad Looking For Food Producers. It Runs “Food Processing Units In Gujarat” On Google Maps And A Related IndiaMART Directory Term In The Same Query. Several Businesses Appear In Both Sources; The Platform Merges Them, Keeping The Maps Phone Number And The Directory-Listed Email On One Record, Each Tagged With Its Origin. The Sales Lead Reviews A Single List Rather Than Two Overlapping Exports.",
    },
    faqs: [
      { q: "Will The Same Business Appear Twice If It Is On Maps And IndiaMART?", a: "Results Are Normalised And De-Duplicated Across Sources, So The Aim Is One Record Per Business. Edge Cases With Very Different Names Or Addresses Are Worth A Quick Manual Check." },
      { q: "How Many Queries Can I Run?", a: "Free Includes 3 Scrape Queries, Growth Includes 50 Per Month, And Scale Offers Unlimited Queries. Quotas Reset Per Billing Cycle." },
      { q: "Does The Scrape Stop If My Laptop Goes To Sleep?", a: "No. Jobs Run On The Worker Fleet, Not In Your Browser, So They Continue In The Background And Record What Was Fetched And When." },
      { q: "Can I Tell Which Source A Phone Number Came From?", a: "Yes. Each Field Carries The Source It Came From, So You Can See Whether A Value Originated On Maps, LinkedIn, IndiaMART Or Later Enrichment." },
      { q: "How Narrow Should A Multi-Source Query Be?", a: "Narrow Enough That Your Team Can Review The Results. A Single Category In A Defined Area, Or One Specific Product Term, Usually Works Better Than A Broad Sector Across A Whole State. Broad Queries Burn Quota Quickly And Produce Lists Too Large To Work Properly." },
      { q: "Which Source Should I Enable For Which Kind Of Buyer?", a: "Google Maps Suits Local Businesses Found By Category And Location. IndiaMART Suits Suppliers Searched By Product Terms, And LinkedIn Adds Company Context For B2B Prospecting. Many Teams Combine Two Sources When Both Location And Product Matter." },
      { q: "What Should I Check After A Multi-Source Job Finishes?", a: "Scan The Merged List, Glance At The Source Tags And Spot-Check A Few Records Against The Original Listings. Pay Extra Attention To Businesses With Very Different Names Or Addresses Across Sources, Since Those Are The Cases Most Likely To Need A Manual Merge Check." },
      { q: "Am I Free To Use Scraped Public Data However I Like?", a: "Not Necessarily. Public Data Can Still Carry Obligations Under Privacy And Marketing Rules, Which Differ By Market. Check Current Rules Where You Prospect And Read Our Responsible Prospecting Guidance. This Is General Information, Not Legal Advice." },
    ],
    related: ["/data-sources", "/services/google-maps-lead-extraction", "/services/indiamart-lead-extraction", "/services/lead-deduplication", "/services/distributed-scrape-fleet", "/services/source-traceability"],
    cta: { heading: "Run Your First Multi-Source Query", text: "Start With Three Free Queries And See What One Search Returns For Your Market.", label: "Start Free", href: "https://leadgeneration.oxo1.com/" },
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
      "Google Maps Lead Extraction Turns A Category-And-Location Search (“Physiotherapy Clinics In Kochi”, Say) Into Structured Lead Records You Can Enrich, Score And Contact. LeadGen AI Captures Each Listing’s Business Name, Category, Full Address, Website, Listed Phone Numbers, Ratings, Review Counts And Listing-Completeness Signals, And Tags Every Field With Its Source.",
      "For Anyone Selling To Local Businesses, Maps Is Often The Most Complete Public Picture Of Who Operates Where. Extraction Saves The Hours Spent Copying Listings By Hand And Gives You A Consistent Dataset To Filter And Prioritise.",
    ],
    highlights: [
      "Category Plus Location Queries",
      "Ratings And Review Counts Captured",
      "Listing-Completeness Signals Per Lead",
      "Feeds Enrichment And Scoring Automatically",
    ],
    sections: [
      {
        heading: "Designing Category And Location Queries",
        paragraphs: [
          "Maps Queries Work Best When The Category Matches How Businesses Describe Themselves And The Location Is Tight Enough To Be Meaningful. “Dentist” In A Single City District Usually Produces A Cleaner List Than “Healthcare” Across A State. Many Teams Run The Same Category Across Several Neighbourhoods As Separate Queries So They Can Compare Areas And Stage Outreach Geographically.",
        ],
        bullets: [
          "Use The Category Wording Customers Would Type",
          "Split Large Cities Into Districts Or Suburbs",
          "Run Synonyms (“Salon”, “Beauty Parlour”) As Separate Queries If Needed",
        ],
      },
      {
        heading: "Fields You Get From Each Listing",
        paragraphs: [
          "Each Maps Result Becomes A Lead Record With Business Name, Category, Full Postal Address, Website, Listed Phone Numbers, Ratings, Review Counts And Listing-Completeness Signals. After Extraction, Enrichment Visits The Website To Add Public Emails, Normalised Phone Numbers, Contact And About Pages, And Social Profiles Where Available.",
        ],
      },
      {
        heading: "Reading Ratings, Reviews And Completeness",
        paragraphs: [
          "Listing Signals Are Useful Qualification Hints. A Business With Many Recent Reviews Is Clearly Trading; One With An Incomplete Listing And No Website May Need Exactly The Help A Marketing Agency Sells. These Signals Also Feed AI Lead Scoring, Which Considers Record Completeness, Website Health And Signs Of An Active, Operating Business.",
          "Treat Them As Indicators, Not Verdicts. A Low Rating Might Mean An Unhappy Customer Base Or Simply A Handful Of Reviews.",
        ],
      },
      {
        heading: "Local Use Cases That Suit Maps Data",
        paragraphs: ["Maps-Led Discovery Fits Sellers Whose Buyers Have A Physical Presence:"],
        bullets: [
          "Web And SEO Agencies Looking For Weak Or Missing Websites",
          "Suppliers And Distributors Mapping Retailers In A Territory",
          "Software Vendors Targeting Clinics, Salons, Gyms Or Restaurants",
          "Field Sales Teams Planning Visit Routes By Address",
        ],
      },
      {
        heading: "From Extracted List To Working Pipeline",
        paragraphs: [
          "Extraction Is The First Step, Not The Last. New Records Are Queued For Enrichment Automatically, Then Scored 0–100 With Stored Reasons On Growth And Above. You Can Sort By Score, Open An SEO Audit On Promising Leads, Check Opportunity Flags And Move The Top Band Into The CRM Pipeline With Owners Assigned.",
        ],
      },
      {
        heading: "Keeping Maps-Derived Lists Fresh",
        paragraphs: [
          "Local Markets Change Constantly: Businesses Open, Close, Move And Rebrand. Each Job Records What It Fetched And When, So You Can See How Old A List Is. Teams That Prospect The Same Territory Repeatedly Often Re-Run Their Core Queries On A Regular Schedule. They Also Re-Enrich Older Leads Before A Campaign, So Scores And Contact Details Reflect The Businesses As They Are Now Rather Than As They Were Months Ago.",
        ],
      },
    ],
    steps: {
      heading: "A Typical Maps Extraction Workflow",
      items: [
        { title: "Pick Category And Area", text: "Choose One Category And A Defined Locality So The List Stays Reviewable." },
        { title: "Run The Query", text: "The Job Runs On The Worker Fleet And Records What It Fetched And When." },
        { title: "Let Enrichment Complete", text: "Websites Are Found And Contact Pages Crawled To Add Emails, Phones And Social Profiles." },
        { title: "Filter By Signals", text: "Use Score, Review Counts, Website Presence And Completeness To Shortlist." },
        { title: "Assign And Contact", text: "Move Shortlisted Leads Into The Pipeline And Draft Outreach From Their Own Data." },
      ],
    },
    considerations: {
      heading: "Things To Keep In Mind",
      items: [
        "Listings Reflect What Owners Publish, And Some Are Out Of Date. Closed Or Moved Businesses Can Appear.",
        "Many Small Businesses List A Phone Number But No Email; Enrichment Can Only Add Emails Published On Their Own Site.",
        "Dense Urban Categories Can Return More Results Than You Can Work; Narrow Queries Protect Your Quota And Focus.",
        "Calling And Emailing Businesses Is Subject To Local Rules On Marketing Contact. Check Current Requirements For Your Market.",
      ],
    },
    example: {
      heading: "A Booking-Software Vendor Mapping Salons",
      text: "Consider A Two-Person Team In Jaipur Selling Appointment Software. It Runs “Salon” Queries Across Six City Areas. After Enrichment, It Filters For Salons With Strong Review Counts But No Booking Link On Their Website, Sorts By Score And Works Through The Top Thirty, Mentioning Each Salon’s Review Volume In The Opening Line Of A Reviewed Draft.",
    },
    faqs: [
      { q: "Which Maps Fields Are Most Useful For Qualification?", a: "Website Presence, Review Counts And Listing Completeness Are Often The Quickest Signals. Combined With The AI Score And Its Reasons, They Help You See Who Is Active And Who May Need Your Service." },
      { q: "Does Maps Extraction Give Me Email Addresses?", a: "Maps Listings Rarely Include Email. Enrichment Adds Public Business Emails Discovered On The Company’s Own Website When They Exist." },
      { q: "How Should I Split A Large City?", a: "Run Separate Queries For Districts Or Suburbs. Smaller Lists Are Easier To Review, And You Can Stage Outreach Area By Area." },
      { q: "Should I Run Synonyms Like “Salon” And “Beauty Parlour” Separately?", a: "Often, Yes. Businesses Describe Themselves In Different Words, So Running Common Synonyms As Separate Queries Can Surface Listings One Term Would Miss. De-Duplication Then Helps Keep The Same Business From Appearing Twice In Your Working List." },
      { q: "Can A Closed Or Moved Business Appear In My Results?", a: "Yes. Listings Reflect What Owners Publish, And Some Are Out Of Date. Review Counts, Recent Activity And Listing Completeness Help You Spot Dormant Entries, And A Quick Check Before Calling Avoids Wasted Effort On Businesses That No Longer Trade There." },
      { q: "How Often Should I Re-Run Queries For The Same Territory?", a: "There Is No Fixed Rule, But Local Markets Change Constantly As Businesses Open, Close And Rebrand. Teams Prospecting The Same Area Often Re-Run Core Queries On A Regular Schedule And Re-Enrich Older Leads Before A Campaign. Each Job Records When It Ran, So You Can Judge A List’s Age." },
      { q: "Is Maps Extraction Useful For Planning Field Sales Visits?", a: "It Can Be. Every Record Includes A Full Postal Address, So Field Teams Can Group Leads By District And Plan Visit Routes Area By Area. Combining Address With Score Helps Reps Spend Their Time On The Most Promising Stops." },
      { q: "Do Low Ratings Mean A Business Is A Poor Prospect?", a: "Not On Their Own. A Low Rating Might Reflect Unhappy Customers Or Simply A Handful Of Reviews. Treat Ratings And Review Counts As Indicators Alongside The Score And Its Reasons, Not As A Verdict On Whether To Contact The Business." },
    ],
    related: ["/services/multi-source-lead-scraping", "/services/local-business-prospecting", "/services/ai-contact-enrichment", "/services/missing-website-detection", "/services/ai-lead-scoring"],
    cta: { heading: "Map Your Local Market", text: "Run A Free Maps Query For One Category And See The Enriched Records You Get Back.", label: "Start Free", href: "https://leadgeneration.oxo1.com/" },
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
      "LinkedIn Lead Enrichment In LeadGen AI Adds LinkedIn As One Of The Sources A Query Can Fan Out To, So B2B Teams Get Company Context Alongside Maps And Directory Data In One De-Duplicated Record. Each Value Keeps A Tag Showing It Came From LinkedIn, Which Matters When A Rep Wants To Know How A Detail Was Found.",
      "LinkedIn Is Most Useful As Research Context: Understanding What A Company Does And Whether It Fits Your Market Before Deciding Who To Approach. LinkedIn Is Listed Among The Multiple Sources Included On The Scale Plan.",
    ],
    highlights: [
      "Company Context For B2B Fit",
      "Merged With Maps And IndiaMART",
      "Source Tagged On Every Field",
      "Available On The Scale Plan",
    ],
    sections: [
      {
        heading: "What LinkedIn Adds To A Lead Record",
        paragraphs: [
          "Maps And Directories Describe Where A Business Is And How To Reach It. LinkedIn Tends To Describe What The Company Is: How It Presents Itself Professionally And What It Says It Does. When LinkedIn Is Enabled, Those Details Are Normalised Into The Same Lead Record As Other Sources, And The Record Is De-Duplicated So You Are Not Working The Same Company Twice.",
          "Enrichment Can Also Attach Social Profiles Found On The Company’s Own Website, Which Often Includes A Link To Its LinkedIn Page.",
        ],
      },
      {
        heading: "Using Company Context To Judge Fit",
        paragraphs: [
          "AI Lead Scoring Weighs Fit Against Your Stated Market, Category And Geography. Richer Company Context Helps You And Your Reps Check That Fit. For Example, You Can Confirm That A Business Listed As An “IT Company” Actually Offers Managed Services Rather Than Training.",
        ],
        bullets: [
          "Confirm The Company’s Core Offering Before Outreach",
          "Spot Companies Outside Your Target Segment Early",
          "Gather Talking Points That Reflect How The Company Describes Itself",
        ],
      },
      {
        heading: "Decision-Maker Research Done Responsibly",
        paragraphs: [
          "LeadGen AI’s Verified Record Fields Are Business-Level: Name, Category, Address, Website, Listed Phones, Public Emails, Ratings And Completeness Signals. Identifying The Right Person To Speak To Remains Part Of Your Own Research. A Common Approach Is To Use The Company Context To Decide Which Role Is Likely To Own The Problem (The Owner In A Small Firm, An Operations Or Marketing Head In A Larger One) And Then Reach Out Through Channels The Business Has Made Public.",
          "Avoid Collecting Personal Data You Have No Clear Reason To Hold, And Respect Platform Terms And Local Privacy Rules.",
        ],
      },
      {
        heading: "Where LinkedIn Fits In The Pipeline",
        paragraphs: [
          "LinkedIn Data Flows Through The Same Stages As Any Other Source: Enrichment, Scoring With Stored Reasons, Optional SEO Audit, Opportunity Flags And Then The CRM Pipeline. AI-Drafted Outreach Can Draw On The Lead’s Enrichment Data, So Company Context Gathered Upstream Can Shape A More Relevant First Message. You Review It Before It Is Sent Through Your Own Email Transport.",
        ],
      },
    ],
    steps: {
      heading: "Adding LinkedIn To B2B Prospecting",
      items: [
        { title: "Describe The Target Companies", text: "Write A Short Definition Of Your Ideal Customer: Industry, Size Cues And Geography." },
        { title: "Enable LinkedIn With Other Sources", text: "Run The Query With LinkedIn Alongside Maps Or IndiaMART So Records Merge Into One List." },
        { title: "Review Company Context", text: "Skim The Merged Records To Confirm Each Company Actually Matches Your Definition." },
        { title: "Decide On The Approach Role", text: "Note Which Function Is Likely To Own The Problem You Solve, And Research Responsibly." },
        { title: "Draft And Review Outreach", text: "Use Enrichment-Based Drafts, Edit Them For Accuracy And Send Through Your Configured Transport." },
      ],
    },
    considerations: {
      heading: "Points To Weigh",
      items: [
        "LinkedIn As A Source Is Part Of The Scale Plan; Free And Growth Do Not Include It.",
        "Company Pages Vary Widely In Completeness, So Context Will Be Rich For Some Leads And Thin For Others.",
        "The Platform’s Verified Fields Are Business-Level; It Is Not Positioned As A Personal Contact Database.",
        "Platform Terms And Privacy Laws Apply To How You Use Professional Data. Take Advice For Your Jurisdiction.",
        "Context Helps Personalisation, But Reps Should Still Verify Details Before Referencing Them In A Message.",
      ],
    },
    example: {
      heading: "A Cloud Consultancy Checking Fit",
      text: "Suppose A Small Cloud Consultancy In Hyderabad Targets Logistics Firms. Its Maps Query Returns Many “Logistics” Listings, From Courier Counters To Freight Forwarders. With LinkedIn Enabled, The Merged Records Show Which Companies Describe Themselves As Freight And Warehousing Operators. The Team Filters To Those, Reviews The Score Reasons And Drafts Outreach That References The Company’s Own Stated Focus.",
    },
    faqs: [
      { q: "Is LinkedIn Included On The Growth Plan?", a: "No. Multiple Sources, Including LinkedIn And IndiaMART, Are Listed As Scale Plan Features." },
      { q: "Does LinkedIn Enrichment Give Me Personal Contact Details?", a: "LeadGen AI’s Verified Lead Fields Are Business-Level Details. Identifying And Contacting Individuals Is Part Of Your Own Responsible Research." },
      { q: "How Is LinkedIn Data Kept Separate From Maps Data On A Record?", a: "It Is Merged Into One Record, But Every Field Carries Its Source, So You Can Always See Whether A Value Came From LinkedIn Or Elsewhere." },
      { q: "Who Benefits Most From Adding LinkedIn As A Source?", a: "B2B Teams Whose Fit Depends On What A Company Actually Does, Not Just Where It Is. Consultancies, Software Vendors And Service Firms Use It To Confirm A Company’s Core Offering Before Outreach. Purely Local Sellers Often Get What They Need From Maps Alone." },
      { q: "How Do I Decide Which Role To Approach At A Company?", a: "Use The Company Context To Judge Who Is Likely To Own The Problem You Solve. In A Small Firm That Is Often The Owner; In A Larger One It May Be An Operations Or Marketing Head. Then Reach Out Through Channels The Business Has Made Public." },
      { q: "What If A Company’s LinkedIn Page Is Thin Or Outdated?", a: "Company Pages Vary Widely, So Context Will Be Rich For Some Leads And Sparse For Others. Fall Back On The Website’s About Page, Captured During Enrichment, And Verify Any Detail Before Referencing It In A Message." },
      { q: "Can LinkedIn Context Improve AI-Drafted Messages?", a: "Yes. Drafts Draw On The Lead’s Enrichment Data, So Company Context Gathered Upstream Can Make A First Message More Relevant. A Rep Should Still Check Each Detail And Edit The Draft Before It Is Sent Through Your Own Email Transport." },
      { q: "Do Privacy Rules Apply To Professional Data From LinkedIn?", a: "Yes. Platform Terms And Privacy Laws Apply To How You Use Professional Data, And They Vary By Jurisdiction. Avoid Collecting Personal Data You Have No Clear Reason To Hold, And Take Advice For Your Market. This Is General Information, Not Legal Advice." },
    ],
    related: ["/services/multi-source-lead-scraping", "/services/social-profile-enrichment", "/services/ai-lead-scoring", "/responsible-prospecting", "/plans"],
    cta: { heading: "Discuss B2B Sources On Scale", text: "Tell Us About Your Market And We’ll Walk You Through Multi-Source Discovery.", label: "Request Access", href: "/book-a-demo" },
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
      "IndiaMART Lead Extraction Lets You Search The Directory With The Terms Suppliers Use For Their Products (“Stainless Steel Fasteners”, “PP Woven Bags”) And Turn Matching Listings Into Lead Records In LeadGen AI. Those Records Are Normalised, De-Duplicated Against Maps And LinkedIn Results, Enriched And Scored Like Any Other Lead.",
      "For Indian Manufacturers, Traders, Service Providers And The Vendors Who Sell To Them, IndiaMART Is A Dense Map Of Who Supplies What. Extraction Makes It Workable As A Prospect List Instead Of A Set Of Browser Tabs.",
    ],
    highlights: [
      "Search By Directory Product Terms",
      "Supplier Listings Become Lead Records",
      "Merged With Maps For Fuller Records",
      "Available On The Scale Plan",
    ],
    sections: [
      {
        heading: "Searching With Directory Terms",
        paragraphs: [
          "Directory Searches Differ From Map Searches. Instead Of Category And Location, You Use The Product Or Service Wording That Sellers List Under. Good Terms Are Specific: “Industrial RO Plant” Finds A Narrower, More Relevant Group Than “Water”. Teams Often Keep A List Of Terms Per Product Line And Run Them As Separate Queries.",
        ],
        bullets: [
          "Use The Exact Product Names Buyers And Suppliers Use",
          "Try Trade Synonyms And Regional Spellings Separately",
          "Combine With A Maps Query When Location Also Matters",
        ],
      },
      {
        heading: "What Supplier Records Contain",
        paragraphs: [
          "Each Listing Becomes A Record With The Standard Fields (Business Name, Category, Address, Website, Listed Phones And Public Emails Where Available, Plus Listing-Completeness Signals) Each Tagged With Its Source. Enrichment Then Visits The Supplier’s Own Website, If It Has One, To Add Business Emails, Normalised Phones, Contact And About Pages, And Social Profiles.",
        ],
      },
      {
        heading: "Who Uses IndiaMART Extraction",
        paragraphs: ["The Directory Serves Two Very Different Prospecting Goals:"],
        bullets: [
          "Vendors Selling To Suppliers: Packaging, Logistics, Software, Finance Or Marketing Services Aimed At MSMEs",
          "Buyers And Traders Looking For Alternative Sources Of A Component Or Material",
          "Agencies Finding Suppliers With Thin Websites Who Could Benefit From A Better Online Presence",
          "Distributors Identifying Manufacturers To Represent In A Region",
        ],
      },
      {
        heading: "Qualifying Directory Leads",
        paragraphs: [
          "Directory Listings Vary In Quality. AI Lead Scoring Helps By Weighing Record Completeness, Website Health, Fit Against Your Stated Market And Signs Of An Active Business, And Storing The Reasons. The SEO Website Audit And Opportunity Flags Are Particularly Useful For Agencies: Many Suppliers Have A Directory Listing But No Website, Or A Site That Doesn’t Resolve.",
        ],
      },
      {
        heading: "Combining IndiaMART With Other Sources",
        paragraphs: [
          "Because One Query Fans Out To Every Enabled Source, A Supplier Found On IndiaMART And On Google Maps Ends Up As One Record. The Maps Side Often Contributes Ratings And An Exact Address; The Directory Side Contributes Product Context. De-Duplication Prevents Your Team From Contacting The Same Supplier Twice.",
        ],
      },
      {
        heading: "Approaching Directory Suppliers Well",
        paragraphs: [
          "Suppliers Listed On A B2B Directory Receive A Steady Stream Of Enquiries, Many Of Them Low Quality. Messages That Stand Out Tend To Name The Supplier’s Specific Product Line, Explain A Concrete Reason For Contact And Propose A Small Next Step. Phone Is Often The Faster Route For Owner-Run Units, While Email Suits Suppliers With An Established Website And A Published Business Address.",
        ],
      },
    ],
    steps: {
      heading: "Building A Supplier Prospect List",
      items: [
        { title: "List Your Product Terms", text: "Write Down The Directory Terms That Describe The Suppliers You Want To Reach." },
        { title: "Run Directory Queries", text: "Submit Them With IndiaMART Enabled, Adding Maps Where Location Matters." },
        { title: "Let Enrichment Finish", text: "Websites, Emails And Normalised Phones Are Added Where Suppliers Publish Them." },
        { title: "Shortlist By Score And Fit", text: "Sort By Score, Read The Reasons And Filter Out Suppliers Outside Your Segment." },
        { title: "Work The Pipeline", text: "Assign Owners, Draft Outreach From The Lead’s Data, Review It And Send." },
      ],
    },
    considerations: {
      heading: "Practical Limits",
      items: [
        "IndiaMART As A Source Is Part Of The Scale Plan.",
        "Many Directory Suppliers Have No Website, So Email Discovery May Find Nothing; Phone May Be The Main Route.",
        "Listings Can Be Outdated Or Duplicated Under Trading Names; Review Before Bulk Outreach.",
        "Indian Data-Protection Rules Are Evolving. Check Current Obligations And Take Advice Before Contacting At Scale.",
      ],
    },
    example: {
      heading: "A Freight Forwarder Prospecting Exporters",
      text: "Imagine A Freight Forwarder In Ludhiana That Wants Knitwear Exporters. It Runs Directory Terms For “Woollen Knitwear Manufacturer” And “Hosiery Exporter” Together With A Maps Query For The City. The Merged List Shows Two Hundred Suppliers. Scoring Puts The Active Ones With Working Websites Near The Top, And The Team Calls The First Forty With Notes Drawn From Each Supplier’s Product Listing.",
    },
    faqs: [
      { q: "How Are Directory Search Terms Different From Maps Queries?", a: "Maps Queries Pair A Category With A Location. Directory Queries Use The Product Or Service Wording Suppliers List Under, So Specificity Of The Product Term Matters Most." },
      { q: "Can I Prospect IndiaMART Suppliers On The Free Plan?", a: "IndiaMART Is Listed Among The Multiple Sources On The Scale Plan. Free And Growth Focus On Core Discovery And Enrichment." },
      { q: "What If A Supplier Appears On Both IndiaMART And Maps?", a: "The Two Results Are Normalised And Merged Into One Lead Record, With Each Field Tagged By The Source It Came From." },
      { q: "How Do I Choose Good IndiaMART Search Terms?", a: "Use The Exact Product Names Suppliers List Under, Such As “Industrial RO Plant” Rather Than “Water”. Try Trade Synonyms And Regional Spellings As Separate Queries, And Keep A Term List For Each Product Line So Searches Stay Repeatable." },
      { q: "Should I Call Or Email IndiaMART Suppliers?", a: "It Depends On The Supplier. Phone Is Often Faster For Owner-Run Units, Especially Those Without A Website. Email Suits Suppliers With An Established Site And A Published Business Address, Where Enrichment Can Discover A Business Email." },
      { q: "Why Do Many Directory Leads Have No Email?", a: "Many Suppliers Have A Directory Listing But No Website Of Their Own, So Enrichment Has Nothing To Crawl. For Those Leads The Listed Phone Number Is Usually The Main Route, And Agencies May Treat The Missing Site As An Opportunity In Itself." },
      { q: "How Do I Make My Message Stand Out To A Busy Supplier?", a: "Directory Suppliers Receive Many Low-Quality Enquiries. Name Their Specific Product Line, Give A Concrete Reason For Contacting Them And Propose A Small Next Step. Short, Specific Messages Tend To Get Further Than Generic Introductions." },
      { q: "What Should I Watch For Before Bulk Outreach To Suppliers?", a: "Listings Can Be Outdated Or Duplicated Under Trading Names, So Review The Shortlist First. Indian Data-Protection Rules Are Also Evolving, So Check Current Obligations Before Contacting At Scale. This Is General Information, Not Legal Advice." },
    ],
    related: ["/services/multi-source-lead-scraping", "/services/lead-deduplication", "/b2b/msme-suppliers", "/industries/manufacturing", "/services/phone-number-validation"],
    cta: { heading: "Prospect India’s Supplier Base", text: "Talk To Us About IndiaMART Extraction And Multi-Source Discovery On Scale.", label: "Request Access", href: "/book-a-demo" },
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
      "AI Contact Enrichment In LeadGen AI Completes Each Lead Record With The Details Your Team Needs To Reach The Business. New Leads Are Queued Automatically. The Platform Finds The Website, Crawls The Pages That Normally List Contact Details, And Compares What It Finds With The Existing Record. It Only Writes A Field When The New Value Is More Complete.",
      "The Result Is A Record With Business Emails Discovered On The Company’s Own Site, Phone Numbers Normalised And Checked For A Plausible Format, The Website And Its Contact And About Pages, Social Profiles And Company Details, Each With A Note Of Where It Came From. None Of It Overwrites A Field Someone Edited By Hand.",
    ],
    highlights: [
      "Queued Automatically For Every New Lead",
      "Writes Only More Complete Values",
      "Never Overwrites Manual Edits",
      "Records The Source Of Each Value",
    ],
    sections: [
      {
        heading: "How The Enrichment Queue Works",
        paragraphs: [
          "As Soon As A Scrape Produces New Leads, They Join The Enrichment Queue. You Do Not Need To Trigger Anything. Enrichment Runs In The Background, Which Means A Large List Can Be Enriching While Your Team Reviews The First Completed Records.",
          "For Each Lead The Platform Does Three Things. It Finds The Business’s Website, Crawls The Pages On That Site That Usually List Contact Details, And Compares What It Finds With What The Record Already Holds.",
        ],
      },
      {
        heading: "Reconciliation: Only Better Data Gets Written",
        paragraphs: [
          "This Check Is What Makes Automatic Enrichment Safe To Trust. A Field Is Written Only When The New Value Is More Complete Than The Existing One. If A Maps Listing Already Supplied A Full Phone Number, Enrichment Will Not Replace It With A Shorter Fragment Found In A Footer.",
          "Hand Edits Are Always Protected. If A Rep Corrected An Email After A Bounce Or Replaced A Switchboard Number With A Direct Line, Enrichment Never Overwrites That Field.",
        ],
      },
      {
        heading: "What Gets Added To A Record",
        paragraphs: ["Depending On What The Business Publishes, Enrichment Can Add:"],
        bullets: [
          "Business Emails Discovered On The Company’s Own Website",
          "Phone Numbers Normalised And Checked For A Plausible Format",
          "The Business’s Website Plus Its Contact And About Pages",
          "Social Profiles Linked From The Site",
          "Company Details That Help With Context And Scoring",
        ],
      },
      {
        heading: "Safe Defaults And Source Tracking",
        paragraphs: [
          "Enrichment Reads Only The Sources You Asked For And Records Where Each Value Came From. That Combination Keeps The Platform Predictable: No Surprise Data From Places You Didn’t Choose, And A Clear Trail For Every Field. If A Prospect Asks Where You Found Their Email, You Can Tell Them Exactly.",
        ],
      },
      {
        heading: "How Enrichment Powers The Rest Of The Pipeline",
        paragraphs: [
          "Enriched Records Score Better And Draft Better. AI Lead Scoring Considers Record Completeness And Website Health, And Recalculates When A Lead Is Re-Enriched. AI-Drafted Outreach Uses The Lead’s Enrichment Data To Personalise. Website Enrichment On The Free Plan Lets Smaller Teams Try This. Growth Adds Scoring And Outreach, Which Make Full Use Of Enriched Data.",
        ],
      },
    ],
    steps: {
      heading: "What Happens After A Lead Is Created",
      items: [
        { title: "Queued", text: "The New Lead Joins The Enrichment Queue Automatically." },
        { title: "Website Found", text: "The Platform Finds The Business’s Own Website." },
        { title: "Contact Pages Crawled", text: "Pages That Usually Carry Contact Details, Such As Contact And About Pages, Are Read." },
        { title: "Results Compared", text: "New Values Are Compared With Existing Ones And Written Only When More Complete; Manual Edits Are Skipped." },
        { title: "Score Refreshed", text: "When A Lead Is Re-Enriched, Its Score Recalculates To Reflect The Fuller Record." },
      ],
    },
    considerations: {
      heading: "Honest Limits",
      items: [
        "Enrichment Depends On The Business Having A Website That Publishes Contact Details; No Site Means Little To Crawl.",
        "Public Emails Are Often Generic Inboxes Such As info@ Or sales@ Rather Than Named Individuals.",
        "A Plausible Phone Format Is Not Proof That A Number Is Live Or Answered.",
        "Sites Change; Data That Was Accurate At Enrichment Time Can Go Stale, So Re-Enrich Before Major Campaigns.",
        "Lawful Use Of Discovered Contact Details Remains Your Responsibility In Each Market.",
      ],
    },
    example: {
      heading: "A List That Fills Itself In",
      text: "Picture An SDR At A Payroll Software Start-Up In Pune Who Scrapes Two Hundred Manufacturing Units From Maps. Only Some Listings Show Emails. Over The Next Hour Enrichment Finds Websites, Finds Contact Pages And Adds Business Emails And Normalised Phone Numbers. One Rep Had Already Corrected A Phone Number For A Key Account; Enrichment Leaves That Field Untouched.",
    },
    faqs: [
      { q: "Do I Need To Start Enrichment Manually?", a: "No. New Leads Are Queued For Enrichment Automatically Once They Are Created By A Scrape." },
      { q: "What Happens To A Field I Corrected By Hand?", a: "It Stays As You Left It. Enrichment Never Overwrites A Field The User Edited Manually." },
      { q: "Will Enrichment Replace Good Data With Worse Data?", a: "It Writes A Field Only When The New Value Is More Complete Than The Existing One, So A Fuller Value Already On The Record Is Kept." },
      { q: "Is Enrichment Available On The Free Plan?", a: "Free Includes Website Enrichment Along With The Lead Dashboard And CSV Export. Scoring And Outreach, Which Make The Most Of Enriched Data, Are On Growth." },
      { q: "How Long Does Enrichment Take For A Large List?", a: "It Runs In The Background, So Timing Depends On List Size And The Sites Involved. You Do Not Have To Wait For The Whole List; Your Team Can Start Reviewing The First Completed Records While The Rest Continue Enriching." },
      { q: "Why Did Enrichment Find Nothing For Some Leads?", a: "Enrichment Depends On The Business Having A Website That Publishes Contact Details. If There Is No Site, Or Contact Details Sit Behind A Form, There Is Little To Find. Those Gaps Can Still Be Useful, For Example As Opportunity Flags." },
      { q: "Can I See Where An Enriched Value Came From?", a: "Yes. Enrichment Records Where Each Value Came From, So Every Field Has A Clear Trail. If A Prospect Asks Where You Found Their Email, You Can Tell Them Exactly Which Page Or Source It Came From." },
      { q: "Does Enrichment Affect The Lead Score?", a: "Yes. AI Lead Scoring Considers Record Completeness And Website Health, And Scores Recalculate When A Lead Is Re-Enriched. A Fuller Record Usually Gives A More Reliable Score, Which Makes Prioritisation More Trustworthy." },
    ],
    related: ["/services/business-email-discovery", "/services/phone-number-validation", "/services/website-enrichment", "/services/social-profile-enrichment", "/services/source-traceability"],
    cta: { heading: "See Enrichment On Your Leads", text: "Run A Free Query And Watch Records Fill In With Websites, Emails And Phones.", label: "Start Free", href: "https://leadgeneration.oxo1.com/" },
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
      "Business Email Discovery In LeadGen AI Finds The Email Addresses A Company Publishes On Its Own Website. During Enrichment The Platform Finds The Site, Crawls The Pages That Usually List Contact Details (Contact And About Pages, For Instance) And Adds The Business Emails It Finds To The Lead Record, Noting Where Each One Came From.",
      "Because Addresses Come From The Business’s Own Published Pages Rather Than Guesswork, They Are Ones The Company Has Chosen To Make Public. That Makes Them A Sound Starting Point For Outreach, Provided You Treat Deliverability And Consent With The Same Care.",
    ],
    highlights: [
      "Emails From The Company’s Own Site",
      "Source Recorded For Every Address",
      "Manual Corrections Never Overwritten",
      "Feeds AI-Drafted Outreach",
    ],
    sections: [
      {
        heading: "Where Discovered Emails Come From",
        paragraphs: [
          "The Rule Is Simple: Emails Are Discovered On The Company’s Own Website. Directory Listings May Also Carry Public Email Addresses, Which Are Captured At Scrape Time With Their Source. Enrichment Complements Those By Reading The Business’s Own Contact Pages. The Platform Does Not Present Guessed Or Pattern-Generated Addresses As Discovered Emails.",
        ],
      },
      {
        heading: "Why The Source Of An Email Matters",
        paragraphs: [
          "Every Value On A Record Carries Its Source. For Email That Is Particularly Useful. An Address Published On The Company’s Contact Page Today Is Likely To Be Monitored; One Found On An Old Directory Profile May Not Be. Source Tags Let Reps Choose The Better Address And Help Managers Answer Questions About How A Contact Was Obtained.",
        ],
        bullets: [
          "Prefer Addresses Found On The Business’s Current Website",
          "Check The Source Before Sending To A Directory-Only Address",
          "Keep The Source In Mind When Responding To Data Requests",
        ],
      },
      {
        heading: "What Kinds Of Addresses To Expect",
        paragraphs: [
          "Small And Mid-Sized Businesses Commonly Publish Shared Inboxes (info@, contact@, sales@, enquiries@) And Sometimes An Owner’s Or Manager’s Address. Shared Inboxes Are Often Read By The Decision-Maker In Smaller Firms, And By An Administrator Who Routes Messages In Larger Ones. Writing So That A Forwarded Email Still Makes Sense Is A Good Habit.",
        ],
      },
      {
        heading: "Deliverability Care When Using Discovered Emails",
        paragraphs: [
          "Discovered Addresses Are Sent Through Your Own Configured Email Transport, So Your Sender Reputation Is At Stake. Teams Often Warm Up New Sending Domains, Keep Daily Volumes Modest, Write To Small, Relevant Segments And Remove Addresses That Bounce. LeadGen AI’s Outreach Respects Sending Limits And Opt-Out Obligations, Every Message Is Logged Against Its Lead, So It Is Easy To See Who Has Already Been Contacted.",
        ],
      },
      {
        heading: "How Teams Use Email Discovery Day To Day",
        paragraphs: [
          "Outbound Teams Typically Filter For Leads With A Discovered Email And A Strong Score, Open The Score Reasons And Audit, And Generate An AI Draft That Refers To The Lead’s Own Data. The Rep Edits, Sends And Moves The Lead To The Next Pipeline Stage. Leads Without An Email Go To A Calling List Instead.",
        ],
      },
    ],
    steps: {
      heading: "From Discovery To First Email",
      items: [
        { title: "Enrich New Leads", text: "Leads Are Queued Automatically And Their Websites Crawled For Contact Pages." },
        { title: "Filter For Email-Ready Leads", text: "Sort Or Filter For Records That Now Carry A Business Email And A Good Score." },
        { title: "Check The Source", text: "Confirm The Address Came From The Company’s Own Site Where Possible." },
        { title: "Draft And Review", text: "Generate An AI Draft From Enrichment And Audit Data, Then Edit It For Accuracy And Tone." },
        { title: "Send Within Limits", text: "Send Through Your Email Transport, Respecting Limits And Opt-Outs; The Message Is Logged." },
      ],
    },
    considerations: {
      heading: "Limits And Responsibilities",
      items: [
        "If A Business Publishes No Email On Its Site, Discovery Will Not Invent One.",
        "Shared Inboxes May Be Filtered Or Ignored; Relevance And Brevity Matter More Than Volume.",
        "Rules On Unsolicited Business Email Differ By Country. Check Current Requirements And Take Legal Advice.",
        "Addresses Go Stale As Businesses Change; Re-Enrich Older Lists Before Reusing Them.",
        "Always Honour Opt-Outs Promptly And Keep Your List Under Your Own Control.",
      ],
    },
    example: {
      heading: "Splitting A List By Contact Route",
      text: "Imagine A Bookkeeping Firm In Chennai With Three Hundred Enriched Retail Leads. About Half Now Carry A Business Email Discovered On The Shop’s Own Website. The Team Sends Short, Reviewed Drafts To The Top-Scoring Email Leads At A Steady Daily Pace, While The Rest, Mostly Shops With Only A Phone Listed, Go To A Colleague’s Calling List.",
    },
    faqs: [
      { q: "Does LeadGen AI Guess Email Addresses From Name Patterns?", a: "Enrichment Finds Business Emails Published On The Company’s Own Website. It Does Not Present Guessed Addresses As Discovered Emails." },
      { q: "Why Are Most Discovered Emails Generic Inboxes?", a: "That Is What Many Small Businesses Publish. A Clear, Relevant Message To A Shared Inbox Can Still Reach The Owner Or Be Forwarded To The Right Person." },
      { q: "How Do I Protect My Sending Domain When Using Discovered Emails?", a: "Send Modest Volumes To Relevant Segments, Remove Bounces, Honour Opt-Outs And Use A Properly Configured Transport. The Platform Respects Sending Limits And Logs Every Message." },
      { q: "Which Pages Are Searched For Email Addresses?", a: "Enrichment Crawls The Pages On The Company’s Own Website That Usually List Contact Details, Such As Contact And About Pages. Directory Listings May Also Carry Public Emails, Which Are Captured At Scrape Time With Their Source." },
      { q: "Should I Prefer A Website Email Over A Directory Email?", a: "Usually, Yes. An Address Published On The Business’s Current Contact Page Is More Likely To Be Monitored Than One From An Old Directory Profile. Check The Source Tag On Each Address Before Choosing Which To Use." },
      { q: "What Should I Do With Leads That Have No Email?", a: "Move Them To A Calling List Instead. Many Small Businesses Publish Only A Phone Number, And Discovery Will Not Invent An Address That Is Not Published. Re-Enrich Later In Case The Business Adds Contact Details To Its Site." },
      { q: "How Should I Write To A Shared Inbox Like info@?", a: "Write So The Message Still Makes Sense If It Is Forwarded. State Clearly Why You Are Writing, Mention Something Specific About The Business And Keep The Ask Small. In Smaller Firms The Owner Often Reads The Shared Inbox Directly." },
      { q: "Are There Rules On Emailing Discovered Business Addresses?", a: "Yes. Rules On Unsolicited Business Email Differ By Country, And Some Require Clear Opt-Outs Or A Lawful Basis. Check Current Requirements Where You Send, Honour Opt-Outs Promptly And Take Legal Advice. This Is General Information, Not Legal Advice." },
    ],
    related: ["/services/ai-contact-enrichment", "/services/ai-outreach-campaigns", "/services/ai-drafted-outreach-messages", "/services/source-traceability", "/responsible-prospecting"],
    cta: { heading: "Find The Emails Businesses Publish", text: "Run A Free Query And See Which Of Your Prospects List A Business Email On Their Site.", label: "Start Free", href: "https://leadgeneration.oxo1.com/" },
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
      "Phone Number Validation In LeadGen AI Normalises The Numbers Found On Listings And Websites Into A Consistent Format And Checks Each One For A Plausible Format. Calling Teams Get Cleaner Numbers To Dial, And Obviously Malformed Entries Are Easier To Spot Before Anyone Wastes A Call.",
      "It Is A Format Check, Not A Live-Line Test. A Plausible Number Can Still Be Disconnected Or Go Unanswered, So Validation Is Best Seen As Hygiene That Improves The Odds Rather Than A Guarantee Of A Conversation.",
    ],
    highlights: [
      "Consistent Number Formatting",
      "Plausible-Format Checks",
      "Source Recorded For Each Number",
      "Hand-Corrected Numbers Stay Protected",
    ],
    sections: [
      {
        heading: "Why Normalisation Matters For Calling",
        paragraphs: [
          "The Same Number Can Appear As “098xxxxxxx”, “+91 98xxx Xxxxx” Or “98xxx-Xxxxx” Depending On Where It Was Listed. Left Raw, These Variants Make A List Hard To Scan, Break Click-To-Dial Tools And Hide Duplicates. Normalising Numbers Into One Consistent Format Makes The List Readable, Sortable And Easier To De-Duplicate.",
        ],
      },
      {
        heading: "What A Plausible-Format Check Does",
        paragraphs: [
          "After Normalisation, Each Number Is Checked For A Plausible Format: Does It Look Like A Real Phone Number With A Sensible Length And Structure? Numbers That Fail Are Easy To Set Aside. Typical Problems This Catches Include Truncated Digits, Stray Characters And Fragments Picked Up From A Page Footer.",
        ],
        bullets: [
          "Catches Truncated Or Overlong Numbers",
          "Flags Stray Characters And Formatting Noise",
          "Does Not Confirm The Line Is Active Or Answered",
        ],
      },
      {
        heading: "Where Numbers Come From",
        paragraphs: [
          "Phone Numbers Are Captured From Listings At Scrape Time (Google Maps, IndiaMART And Other Enabled Sources) And From The Company’s Own Website During Enrichment. Each Number Carries Its Source. When A Listing And A Website Disagree, That Source Tag Helps A Rep Decide Which To Try First; The Website Number Is Often The One The Business Maintains.",
        ],
      },
      {
        heading: "Building It Into A Calling Workflow",
        paragraphs: [
          "Calling Teams Commonly Filter For Leads With A Valid-Format Phone, Sort By Score And Work The List In Blocks. After Each Call, The Rep Logs The Outcome In The CRM Pipeline’s Activity History And Corrects The Number If Needed. That Correction Is Protected: Enrichment Will Never Overwrite A Field Edited By Hand.",
          "Pairing Calls With Email Is Common Too: A Short Email First, Then A Call That References It, Or The Reverse.",
        ],
      },
      {
        heading: "When The Format Check Fails",
        paragraphs: [
          "A Number That Fails The Plausible-Format Check Is Not Necessarily Useless. It May Be A Fragment Of A Real Number Split Across A Page, Or A Number Written With Unusual Punctuation. Teams Often Set Failed Numbers Aside For A Quick Manual Look Rather Than Deleting Them, And Check Whether The Business Publishes Another Number On Its Listing Or Website.",
        ],
      },
    ],
    steps: {
      heading: "Preparing A Call List",
      items: [
        { title: "Enrich The List", text: "Let Enrichment Normalise Numbers And Add Any Found On The Business’s Own Site." },
        { title: "Filter For Plausible Numbers", text: "Keep Leads Whose Numbers Pass The Format Check; Set Others Aside For Research." },
        { title: "Prioritise By Score", text: "Sort By The 0–100 Score And Read The Reasons Before Calling." },
        { title: "Call And Log", text: "Record Outcomes In The Pipeline’s Activity History Against Each Lead." },
        { title: "Fix What You Learn", text: "Correct Wrong Numbers By Hand; Your Edits Are Never Overwritten By Enrichment." },
      ],
    },
    considerations: {
      heading: "What Validation Can And Cannot Tell You",
      items: [
        "A Plausible Format Is Not A Connected Line; Expect Some Numbers To Be Out Of Service.",
        "Listed Numbers Are Often Reception Or Switchboard Lines, Not Direct Dials.",
        "Mobile Numbers Listed By Sole Traders May Be Personal; Be Respectful About Timing And Frequency.",
        "Telemarketing And Do-Not-Call Rules Vary By Country. Check Current Requirements Before Calling At Scale.",
        "Numbers Age; Re-Enrich Older Lists Before A Calling Sprint.",
      ],
    },
    example: {
      heading: "A Calling Sprint For A Field-Sales Team",
      text: "Consider A Three-Rep Team In Nagpur Selling Water Purifiers To Offices. Its Maps List Has Numbers In Five Different Formats. After Enrichment, Every Number Appears Consistently And A Handful Fail The Format Check. The Team Calls The Plausible Ones In Score Order Across Two Mornings, Logs Outcomes Against Each Lead And Corrects Three Numbers That Reached The Wrong Office.",
    },
    faqs: [
      { q: "Does Phone Validation Confirm A Number Is In Service?", a: "No. It Normalises The Number And Checks For A Plausible Format. Whether The Line Is Active Only Becomes Clear When You Call." },
      { q: "Which Number Should I Try When The Listing And Website Differ?", a: "Check The Source Tag On Each. The Number On The Business’s Own Current Website Is Often The One It Maintains, But A Recent Listing Number May Also Be Right." },
      { q: "Will Enrichment Undo A Phone Number I Corrected?", a: "No. Fields Edited By Hand Are Never Overwritten By Enrichment." },
      { q: "Why Does Normalisation Help With Duplicates?", a: "Consistent Formatting Means The Same Number Written Different Ways Is Recognisable As One Value, Which Supports Cleaner Records And De-Duplication." },
      { q: "What Kinds Of Phone Problems Does The Format Check Catch?", a: "It Catches Numbers With Truncated Or Extra Digits, Stray Characters And Formatting Noise, And Fragments Picked Up From A Page Footer. Those Are Easy To Set Aside Before A Rep Wastes A Call On Them." },
      { q: "Should I Delete Numbers That Fail The Format Check?", a: "Usually Not Straight Away. A Failed Number May Be Part Of A Real Number Split Across A Page Or Written With Unusual Punctuation. Set It Aside For A Quick Manual Look And Check Whether The Business Lists Another Number." },
      { q: "Are Listed Numbers Usually Direct Lines?", a: "Often They Are Reception Or Switchboard Lines Rather Than Direct Dials. Be Ready To Ask For The Right Person, And If You Learn A Better Number, Correct It By Hand; Enrichment Will Not Overwrite Your Edit." },
      { q: "Do I Need To Follow Do-Not-Call Rules When Calling Leads?", a: "Telemarketing And Do-Not-Call Rules Vary By Country, So Check Current Requirements Before Calling At Scale. Mobile Numbers Listed By Sole Traders May Also Be Personal, So Be Respectful About Timing And Frequency. This Is General Information, Not Legal Advice." },
    ],
    related: ["/services/ai-contact-enrichment", "/services/lead-data-normalisation", "/services/crm-pipeline-management", "/strategies/cold-calling", "/services/source-traceability"],
    cta: { heading: "Give Your Callers Cleaner Numbers", text: "Try Enrichment Free And See How Normalised Phone Numbers Change Your Call List.", label: "Start Free", href: "https://leadgeneration.oxo1.com/" },
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
      "Website Enrichment In LeadGen AI Finds Each Lead’s Website And Captures The Pages With The Most Useful Context, Usually The Contact And About Pages. That Gives Researchers A Reliable Link To How The Business Describes Itself, A Place To Find Published Contact Details, And The Starting Point For An SEO Audit Or Opportunity Check.",
      "Website Enrichment Is Included On The Free Plan, So Even A One-Person Team Can Turn A Raw Listing Into A Researched Lead.",
    ],
    highlights: [
      "Finds The Business’s Own Website",
      "Captures Contact And About Pages",
      "Feeds Audits And Opportunity Flags",
      "Included On The Free Plan",
    ],
    sections: [
      {
        heading: "What Finding A Website Means",
        paragraphs: [
          "Listings Sometimes Have No Website, A Broken Link Or A Social Page In Place Of A Site. This Step Works Out The Business’s Own Website For The Record. Once It Is Found, The Platform Knows Where To Look For Contact Details And What To Audit. If No Website Can Be Found, That Gap Is Useful Information In Itself.",
        ],
      },
      {
        heading: "Contact And About Pages As Research Context",
        paragraphs: [
          "The Contact Page Usually Holds Emails, Phone Numbers And Addresses. The About Page Tells You What The Business Thinks Matters: How Long It Has Operated, What It Specialises In, Who Leads It. Researchers Use These To Confirm Fit And Gather A Credible Opening Line.",
        ],
        bullets: [
          "Confirm Services Offered Match Your Target Segment",
          "Find The Business’s Own Description Of Its Specialism",
          "Spot Founders Or Managers Named Publicly",
          "Note The Tone The Business Uses About Itself",
        ],
      },
      {
        heading: "How Website Data Flows Into Scoring And Audits",
        paragraphs: [
          "AI Lead Scoring Considers Website Health And Whether The Business Is Credibly Online. The SEO Website Audit Fetches The Site And Grades Technical Health, Content, Metadata, Structured Data And Performance. Business Opportunity Detection Flags Leads With No Website Or A Site That Doesn’t Resolve. All Three Depend On Website Enrichment Doing Its Job First.",
        ],
      },
      {
        heading: "Using Website Context In Outreach",
        paragraphs: [
          "AI-Drafted Outreach Uses The Lead’s Enrichment And Audit Data. A Draft That References A Business’s Stated Speciality, Or A Specific Issue Found On Its Site, Reads As Researched Rather Than Generic. Reps Should Still Check The Reference Against The Live Site Before Sending; Websites Change.",
        ],
      },
      {
        heading: "Website Enrichment And Record Completeness",
        paragraphs: [
          "A Found Website Usually Fills Several Other Fields At Once: Business Emails, Normalised Phone Numbers And Social Profiles Found On The Site. That Is Why Website Enrichment Has A Big Effect On Record Completeness, One Of The Factors In The AI Lead Score. Leads That Remain Without A Website After Enrichment Are Worth Reviewing Separately. For Some Sellers They Are The Weakest Leads, And For Web Studios They Are The Best.",
        ],
      },
    ],
    steps: {
      heading: "Researching A Lead With Website Enrichment",
      items: [
        { title: "Open The Enriched Record", text: "Check The Website And Its Captured Contact And About Pages." },
        { title: "Confirm Fit", text: "Read How The Business Describes Itself And Compare With Your Target Market." },
        { title: "Check Website Health", text: "On Growth, Open The Audit To See The Grade And The Highest-Severity Findings." },
        { title: "Note One Specific Detail", text: "Pick A Single Relevant Fact To Reference In Outreach." },
        { title: "Draft And Verify", text: "Generate A Draft, Verify The Reference Against The Live Site And Send." },
      ],
    },
    considerations: {
      heading: "Points To Remember",
      items: [
        "Businesses Without A Website Give Enrichment Little To Work With, But That Gap Is A Qualification Signal In Its Own Right.",
        "The Site Found May Be Outdated; The About Page May Describe The Business As It Was Years Ago.",
        "Some Sites Hide Contact Details Behind Forms, So No Email Will Be Found Even When The Site Loads.",
        "Audits And Scoring That Build On Website Data Are Growth Features; Free Covers The Enrichment Itself.",
      ],
    },
    example: {
      heading: "Pre-Call Research In Ten Minutes",
      text: "Imagine An Account Executive At An HR Services Firm In Kolkata Preparing For Five Calls. For Each Lead She Opens The Website, Reads The About Page And Notes That One Firm Mentions Rapid Hiring For A New Branch. That Detail Becomes Her Opening Question. Another Lead’s Site Doesn’t Resolve, So She Moves It To A Colleague Who Sells Website Services.",
    },
    faqs: [
      { q: "What If A Listing Links To A Social Page Instead Of A Website?", a: "Enrichment Tries To Find The Business’s Own Website. Where None Exists, That Absence Can Trigger Opportunity Flags, And Social Profiles Can Still Be Captured." },
      { q: "Is Website Enrichment Part Of The Free Plan?", a: "Yes. Free Includes Website Enrichment, The Lead Dashboard And CSV Export." },
      { q: "Should I Re-Enrich Websites Before A New Campaign?", a: "It Is A Sensible Habit For Older Lists. Sites Change, And Re-Enrichment Refreshes The Record And Recalculates The Lead’s Score So Your Priorities Reflect Current Data." },
      { q: "Which Pages Does Website Enrichment Focus On?", a: "It Crawls The Pages That Normally Carry Contact Details, Such As Contact And About Pages, Rather Than Trying To Read The Entire Site." },
      { q: "What Does It Mean When No Website Can Be Resolved?", a: "It Means The Platform Could Not Establish A Working Site Of The Business’s Own. For Many Sellers That Makes The Lead Weaker, But For Web Studios It Is A Strong Signal, And It Can Trigger Opportunity Flags For Missing Or Non-Resolving Sites." },
      { q: "How Can I Use The About Page Before A Sales Call?", a: "Read How The Business Describes Itself, What It Specialises In And Any Recent Developments, Then Pick One Relevant Detail To Open The Conversation. Confirm It Against The Live Site First, Because About Pages Can Describe A Business As It Was Years Ago." },
      { q: "Why Does Website Enrichment Raise Record Completeness So Much?", a: "A Found Website Often Fills Several Fields At Once, Including Business Emails, Normalised Phone Numbers And Social Profiles. Record Completeness Is One Of The Factors In The AI Lead Score, So A Resolved Site Can Noticeably Change How A Lead Is Prioritised." },
      { q: "Do I Need Website Enrichment To Run An SEO Audit?", a: "Yes, In Practice. The SEO Website Audit Fetches The Resolved Site, So Enrichment Has To Establish The Website First. Audits And Scoring Are Growth Features, While The Enrichment Itself Is Available On The Free Plan." },
    ],
    related: ["/services/ai-contact-enrichment", "/services/seo-website-audit", "/services/missing-website-detection", "/services/prospect-research", "/services/ai-drafted-outreach-messages"],
    cta: { heading: "Find Websites For Your Leads", text: "Website Enrichment Is On The Free Plan. Run A Query And See What It Finds.", label: "Start Free", href: "https://leadgeneration.oxo1.com/" },
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
      "Social Profile Enrichment In LeadGen AI Adds A Business’s Social Profiles To Its Lead Record As Part Of Contact Enrichment. When The Platform Crawls The Company’s Website For Contact Details, It Also Captures The Social Profiles The Business Links To, And Records Where Each One Was Found.",
      "For Sellers Who Personalise, Those Profiles Are A Window Into What The Business Is Doing Now (New Services, Events, Hiring, Seasonal Offers) Which A Static Listing Rarely Shows. Used With Care, That Context Makes A First Message More Relevant. Used Carelessly, It Can Make It Feel Intrusive Or Simply Wrong.",
    ],
    highlights: [
      "Profiles Captured During Enrichment",
      "Source Recorded For Each Profile",
      "Context For Relevant Personalisation",
      "Signals Of An Active Business",
    ],
    sections: [
      {
        heading: "Where Social Profiles Come From",
        paragraphs: [
          "Social Profiles Are Added During The Enrichment Pass That Finds A Lead’s Website And Crawls Its Contact Pages. Businesses Commonly Link Their Profiles In A Header, Footer Or Contact Page, And Those Links Are Captured On The Record With Their Source. Because The Business Itself Published The Link, The Profile Is Very Likely To Be Its Official Presence Rather Than A Fan Page Or A Namesake.",
        ],
      },
      {
        heading: "What A Social Presence Tells You",
        paragraphs: [
          "A Social Profile Is Rarely A Direct Contact Route For B2B Outreach, But It Is Rich Context. It Can Show Whether The Business Is Actively Posting, What It Is Promoting, How It Speaks To Customers And Whether It Is Growing.",
        ],
        bullets: [
          "Recent Activity Suggests An Operating, Engaged Business",
          "Promotions Reveal Priorities, Such As A New Branch Or Service",
          "Tone Tells You How Formal Your Outreach Should Be",
          "A Dormant Profile May Signal A Gap Your Service Could Fill",
        ],
      },
      {
        heading: "Turning Context Into Personalisation",
        paragraphs: [
          "The Most Effective Personalisation Is A Single Specific, Relevant Observation Linked To The Reason You Are Writing. “I Saw You Opened A Second Studio In Baner” Followed By A Relevant Point About Bookings Beats A Paragraph Of Flattery. AI-Drafted Outreach Draws On The Lead’s Enrichment Data. Reps Add Or Verify The Social Detail Themselves Before Sending.",
          "Keep It Professional. Reference What The Business Has Published As A Business, Not Personal Posts By Its Staff.",
        ],
      },
      {
        heading: "Keeping Social Data Accurate",
        paragraphs: [
          "Social Profiles Change Faster Than Websites. A Post That Was Current At Enrichment Time May Be Weeks Old When You Write. Check The Live Profile Before Referencing Anything, And Re-Enrich Older Leads Before A Campaign So Their Records, And Scores, Reflect The Latest State.",
        ],
      },
      {
        heading: "How Social Presence Relates To Scoring",
        paragraphs: [
          "AI Lead Scoring Weighs Record Completeness, Website Health, Fit And Signals Of An Active, Operating Business, And Stores The Reasons. Social Profiles Add To Completeness And Context. The Stored Reasons Tell You What Actually Influenced A Particular Score, So You Do Not Need To Guess.",
        ],
      },
    ],
    steps: {
      heading: "Using Social Profiles In A Research Routine",
      items: [
        { title: "Open The Enriched Record", text: "Find The Social Profiles Captured From The Business’s Own Website." },
        { title: "Scan Recent Activity", text: "Look For A Current, Business-Related Development Worth Mentioning." },
        { title: "Connect It To Your Offer", text: "Write One Sentence Linking That Development To The Problem You Solve." },
        { title: "Verify Before Sending", text: "Confirm The Detail On The Live Profile And Edit The AI Draft Accordingly." },
        { title: "Log And Move On", text: "Send Through Your Email Transport; The Message Is Logged Against The Lead." },
      ],
    },
    considerations: {
      heading: "Accuracy And Etiquette",
      items: [
        "Profiles Are Only Captured When The Business Links Them From Its Site; Some Businesses Link None.",
        "Social Content Dates Quickly, So An Outdated Reference Can Undermine Your Credibility.",
        "Over-Personalisation Can Feel Invasive; One Relevant Observation Is Usually Enough.",
        "Platform Terms And Privacy Rules Apply To How You Use Social Data. Stay With Business-Level, Public Information.",
        "Personalisation Takes Time Per Lead, So Reserve It For Your Higher-Scoring Band.",
      ],
    },
    example: {
      heading: "One Line That Changed The Reply Rate Feeling",
      text: "Suppose A Corporate Gifting Company In Gurugram Is Writing To Event Agencies. For Its Top Twenty Leads, A Rep Opens Each Linked Profile And Finds That One Agency Recently Posted About A Large Product Launch. Her Reviewed Draft Opens With A Line About That Launch And Offers Branded Kits For Future Ones. Leads With Quiet Profiles Get The Standard Audit-Based Draft Instead.",
    },
    faqs: [
      { q: "Does Social Enrichment Find Profiles The Business Didn’t Link?", a: "Social Profiles Are Captured During Website Enrichment, So The Profiles Linked From The Business’s Own Site Are The Ones You Can Rely On." },
      { q: "Should I Contact Prospects Through Their Social Profiles?", a: "Teams Usually Treat Social Profiles As Context And Use Email Or Phone For Outreach. If You Do Message Through A Platform, Follow Its Rules And Keep It Relevant." },
      { q: "How Much Personalisation Is Enough?", a: "One Specific, Accurate, Business-Related Observation Tied To Your Reason For Writing Tends To Work Better Than Several Generic Compliments." },
      { q: "Why Might Social Context Be Wrong In A Draft?", a: "Profiles Change Quickly. If The Lead Was Enriched Weeks Ago, Re-Enrich Or Check The Live Profile Before Referencing Anything." },
      { q: "How Do I Know A Captured Profile Is The Official One?", a: "Profiles Are Captured From Links On The Business’s Own Website, Usually In The Header, Footer Or Contact Page. Because The Business Published The Link Itself, It Is Very Likely To Be Its Official Presence Rather Than A Fan Page Or Namesake." },
      { q: "Which Leads Deserve Social Research Before Outreach?", a: "Personalisation Takes Time Per Lead, So Most Teams Reserve It For Their Higher-Scoring Band. Lower-Priority Leads Or Those With Quiet Profiles Can Receive A Standard Audit-Based Draft Instead." },
      { q: "Can A Dormant Social Profile Be A Useful Signal?", a: "Yes. A Profile That Has Not Been Updated In A Long Time May Point To A Gap A Marketing Or Content Service Could Fill. Treat It As A Hint To Check, Not Proof That The Business Is Inactive." },
      { q: "What Should I Avoid Referencing From Social Profiles?", a: "Stick To What The Business Has Published As A Business, Such As Launches, Events Or New Services. Avoid Personal Posts By Staff, Respect Platform Terms And Privacy Rules, And Keep It To One Relevant Observation So The Message Does Not Feel Intrusive." },
    ],
    related: ["/services/ai-contact-enrichment", "/services/website-enrichment", "/services/ai-drafted-outreach-messages", "/services/prospect-research", "/services/linkedin-lead-enrichment"],
    cta: { heading: "Add Context To Every Lead", text: "Request A Walkthrough And See How Enrichment Builds A Fuller Picture Of Each Prospect.", label: "Request Access", href: "/book-a-demo" },
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
      "AI Lead Scoring In LeadGen AI Gives Every Lead A Single 0–100 Score And Stores The Reasons For That Score On The Record. The Score Reflects How Complete The Record Is, The Health Of The Business’s Website And Whether It Is Credibly Online, Its Fit Against Your Stated Market, Category And Geography, And Signals That It Is An Active, Operating Business.",
      "Sales Managers Use The Score To Decide Where Reps Spend Their Time. You Can Sort And Filter By Score, And Push The Top Band Into The CRM Pipeline. Scores Recalculate When A Lead Is Re-Enriched, So The Ranking Reflects The Latest Data, Not Last Month’s.",
    ],
    highlights: [
      "One 0–100 Score Per Lead",
      "Reasons Stored On Every Record",
      "Recalculates After Re-Enrichment",
      "Push The Top Band To Pipeline",
    ],
    sections: [
      {
        heading: "The Four Factors Behind Every Score",
        paragraphs: ["The Score Combines Four Kinds Of Evidence About A Lead:"],
        bullets: [
          "Record Completeness: How Much Of The Record Is Filled In, Such As Website, Phones And Emails",
          "Website Health: Whether The Business Has A Working Site And Is Credibly Online",
          "Fit: How Well The Lead Matches The Market, Category And Geography You Have Stated",
          "Activity: Signals That The Business Is Active And Operating",
        ],
      },
      {
        heading: "Why Stored Reasons Matter",
        paragraphs: [
          "A Number On Its Own Tends To Be Either Trusted Blindly Or Ignored. Storing The Reasons On The Record Lets A Rep See Why A Lead Scored 82 (Complete Contact Details, Healthy Site, Strong Fit) Or Why Another Scored 31. This Helps Reps Start Better Conversations, And It Helps Managers Spot When The Stated Market Definition Needs Adjusting.",
        ],
      },
      {
        heading: "Working With Score Bands",
        paragraphs: [
          "Most Teams Find It Useful To Think In Bands Rather Than Exact Numbers. A Common Approach Is A Top Band For Immediate Rep Attention, A Middle Band For Lighter-Touch Outreach Or Later Review, And A Low Band That Is Parked Or Used For Other Purposes. The Thresholds Are A Team Decision; Review Them After A Few Weeks Against What Actually Converted.",
          "For Agencies, Low Scores Are Not Always Bad News. A Business Scoring Low Because Of Website Health May Be An Ideal Prospect For Web Or SEO Services.",
        ],
      },
      {
        heading: "Recalculation Keeps Scores Honest",
        paragraphs: [
          "Scores Recalculate When A Lead Is Re-Enriched. If A Business Launches A Website, Adds Contact Details Or Changes Its Listing, Re-Enrichment Updates The Record And The Score Moves With It. Before A Campaign On An Older List, Re-Enriching Is A Sensible Way To Refresh Both Data And Priority.",
        ],
      },
      {
        heading: "From Score To Pipeline",
        paragraphs: [
          "Sorting And Filtering By Score Works Across The Lead Dashboard. When You Are Ready, Push The Top Band Into The CRM Pipeline, Assign Owners And Generate AI Drafts That Use Each Lead’s Enrichment And Audit Data. AI Lead Scoring Is Included In The Growth And Scale Plans.",
        ],
      },
    ],
    steps: {
      heading: "Putting Scores To Work",
      items: [
        { title: "State Your Market", text: "Define The Category, Geography And Market You Are Targeting So Fit Can Be Judged." },
        { title: "Enrich And Score", text: "Let Enrichment Complete; Each Lead Receives A 0–100 Score With Reasons." },
        { title: "Set Your Bands", text: "Agree Thresholds For Top, Middle And Low Bands With The Team." },
        { title: "Read Reasons Before Outreach", text: "Use The Stored Reasons To Shape The First Conversation." },
        { title: "Push And Review", text: "Move The Top Band Into The Pipeline And Revisit Thresholds Against Outcomes." },
      ],
    },
    considerations: {
      heading: "Using Scores Wisely",
      items: [
        "The Score Reflects Public Data; A Business With A Thin Online Presence May Be A Strong Buyer Offline.",
        "Fit Depends On How Clearly You State Your Market. A Vague Definition Produces Less Useful Scores.",
        "A Score Is A Prioritisation Aid, Not A Prediction Of Revenue Or A Guarantee Of Conversion.",
        "Stale Data Means Stale Scores; Re-Enrich Before Relying On An Old List.",
        "Scoring Is A Growth Feature, Not Part Of The Free Plan.",
      ],
    },
    example: {
      heading: "A Manager Rebuilding The Daily List",
      text: "Picture A Sales Manager At An Office-Supplies Distributor In Bhopal With Six Hundred Leads. She Sets A Top Band Of 75 And Above, Which Gives About Ninety Leads. Reading Reasons, She Notices Several High Scorers Sit Outside The Delivery Area, So She Tightens The Stated Geography. After Rescoring, The Top Band Is Smaller And More Deliverable, And Each Rep Gets Fifteen Leads A Day.",
    },
    faqs: [
      { q: "What Goes Into The 0–100 Score?", a: "Record Completeness, Website Health And Credible Online Presence, Fit Against Your Stated Market, Category And Geography, And Signals Of An Active, Operating Business." },
      { q: "Can I See Why A Lead Got Its Score?", a: "Yes. The Reasons Are Stored On The Lead Record, So Anyone Reviewing The Lead Can See What Drove The Score." },
      { q: "Do Scores Update Automatically?", a: "Scores Recalculate When A Lead Is Re-Enriched, So Refreshed Data Produces A Refreshed Score." },
      { q: "Should Agencies Ignore Low-Scoring Leads?", a: "Not Necessarily. A Low Score Driven By Poor Website Health Can Point To Exactly The Businesses That Need Web Or SEO Help." },
      { q: "How Do I Choose Thresholds For Score Bands?", a: "Thresholds Are A Team Decision. Many Teams Start With A Top Band For Immediate Rep Attention, A Middle Band For Lighter Outreach And A Low Band That Is Parked, Then Review The Cut-Offs After A Few Weeks Against What Actually Converted." },
      { q: "Why Are High-Scoring Leads Sometimes A Poor Fit?", a: "Usually Because The Stated Market Is Too Vague. Fit Is Judged Against The Category, Geography And Market You Define, So Reading The Stored Reasons And Tightening That Definition Often Produces A Smaller, More Useful Top Band." },
      { q: "Is The Score A Prediction Of Whether A Lead Will Buy?", a: "No. It Is A Prioritisation Aid Based On Public Data, Not A Forecast Of Revenue Or A Guarantee Of Conversion. A Business With A Thin Online Presence Can Still Be A Strong Buyer Offline." },
      { q: "Which Plans Include AI Lead Scoring?", a: "AI Lead Scoring Is Included On The Growth And Scale Plans. The Free Plan Covers Discovery, Website Enrichment, The Lead Dashboard And CSV Export, Which Lets You Judge Data Quality Before Upgrading." },
    ],
    related: ["/services/sales-prioritisation", "/services/crm-pipeline-management", "/services/ai-contact-enrichment", "/services/seo-website-audit", "/services/lead-dashboard", "/plans"],
    cta: { heading: "Rank Your Leads By Evidence", text: "Request Access To See AI Lead Scoring And Stored Reasons On Your Own Market.", label: "Request Access", href: "/book-a-demo" },
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
      "The SEO Website Audit In LeadGen AI Fetches A Lead’s Website And Checks It Against Rules Covering Technical Health, Content, Metadata, Structured Data And Performance. It Grades Each Area, Rolls The Grades Into An Overall Score And Produces A Report With A Per-Area Scorecard, Findings Ranked By Severity With Plain-English Explanations, Performance And Page-Health Metrics, And A Prioritised Fix List.",
      "For Agencies, That Report Does Two Jobs. It Qualifies The Prospect, Showing Whether There Is Real Work To Do, And It Opens The Conversation With Something Useful The Prospect Can Act On.",
    ],
    highlights: [
      "Five Audit Areas, Each Graded",
      "Findings Ranked By Severity",
      "Plain-English Explanations",
      "Prioritised, Client-Ready Fix List",
    ],
    sections: [
      {
        heading: "What The Rule Set Covers",
        paragraphs: ["Each Audit Checks The Site Against Rules Grouped Into Five Areas:"],
        bullets: [
          "Technical Health: Whether The Site Is Built And Served Soundly",
          "Content: The Substance And Quality Signals Of The Page Content",
          "Metadata: Titles, Descriptions And Similar Page-Level Signals",
          "Structured Data: Machine-Readable Markup That Helps Search Engines",
          "Performance: Speed And Page-Health Metrics",
        ],
      },
      {
        heading: "Reading The Scorecard",
        paragraphs: [
          "The Overall Grade Gives A Quick Answer To “Is This Site In Good Shape?”. The Per-Area Scorecard Shows Where The Problems Are: A Site Might Score Well On Content But Poorly On Metadata And Performance. That Breakdown Helps You Match Prospects To The Service You Actually Sell.",
        ],
      },
      {
        heading: "Severity-Ranked Findings In Plain English",
        paragraphs: [
          "Findings Are Ranked By Severity, So The Most Damaging Issues Appear First. Each Is Explained In Plain English. That Matters Because The Person Reading The Report Is Often A Business Owner, Not A Developer. A Clear Explanation Of Why An Issue Matters Is More Persuasive Than A Technical Code.",
        ],
      },
      {
        heading: "The Client-Ready Fix List",
        paragraphs: [
          "The Report Ends With A Prioritised Fix List That Can Be Handed To The Prospect. Agencies Often Send It As A Goodwill Gesture With A Short Note, Or Walk Through It On A Call. Because It Is Specific To The Prospect’s Site, It Shows Your Skill Far Better Than A Generic Sales Deck.",
        ],
      },
      {
        heading: "Audits Inside The Wider Pipeline",
        paragraphs: [
          "Audit Results Feed Other Modules. Weak Audits In The Bottom Band Are Flagged By Business Opportunity Detection. Website Health Contributes To The AI Lead Score. AI-Drafted Outreach Can Reference Audit Findings Directly. SEO And Website-Build Reports Are Included In The Growth Plan And Above.",
        ],
      },
      {
        heading: "Who Gets The Most From Audits",
        paragraphs: [
          "Audits Are Built With Agencies In Mind, But They Help Any Seller Whose Offer Touches A Prospect’s Online Presence: Web Designers, SEO And Content Specialists, Hosting And Maintenance Providers, And Marketing Consultants. For Other Sellers, A Quick Look At The Audit Grade Still Adds Context. A Business That Invests In A Healthy Site Often Takes Its Digital Channels Seriously.",
        ],
      },
    ],
    steps: {
      heading: "Running Audit-Led Prospecting",
      items: [
        { title: "Shortlist Leads With Websites", text: "Filter Enriched Leads To Those With A Working Site In Your Target Segment." },
        { title: "Run The Audits", text: "Each Site Is Fetched, Checked Against The Rule Set And Graded By Area." },
        { title: "Pick The Fitting Prospects", text: "Use The Scorecard To Find Sites Weak In The Areas Your Agency Fixes." },
        { title: "Personalise The Outreach", text: "Draft A Message That References The Top One Or Two Severity Findings." },
        { title: "Share The Fix List", text: "Offer The Prioritised Fix List And Suggest A Short Call To Talk Through It." },
      ],
    },
    considerations: {
      heading: "Things To Be Aware Of",
      items: [
        "An Audit Reflects The Site At The Moment It Was Fetched; Re-Run It If Time Has Passed.",
        "Automated Checks Cannot Judge Everything. Brand, Design Quality And Business Goals Still Need Human Review.",
        "A Strong Grade Means Less Obvious Work To Sell; Qualify Those Leads Differently.",
        "Present Findings Constructively; A Report That Reads As An Attack Rarely Wins A Client.",
        "Audit Reports Are Part Of Growth And Scale, Not The Free Plan.",
      ],
    },
    example: {
      heading: "An SEO Freelancer’s First Ten Pitches",
      text: "Imagine An SEO Freelancer In Coimbatore Targeting Architects. She Audits Thirty Sites And Finds That Most Score Reasonably On Content But Poorly On Metadata And Structured Data. She Writes To The Ten Weakest, Each Email Naming The Two Highest-Severity Findings In Plain Language, And Attaches The Fix List. Several Owners Reply Asking What Fixing The First Item Would Involve.",
    },
    faqs: [
      { q: "Which Areas Does The SEO Audit Grade?", a: "Technical Health, Content, Metadata, Structured Data And Performance. Each Is Graded And The Grades Roll Up Into An Overall Score." },
      { q: "Can I Send The Audit Report To A Prospect?", a: "Yes. The Report Is Designed As Client-Ready Output, With Plain-English Findings And A Prioritised Fix List." },
      { q: "How Do Audits Affect Opportunity Flags?", a: "Weak Audits In The Bottom Band Are Flagged By Business Opportunity Detection, With The Evidence Attached." },
      { q: "Is The Audit A Substitute For A Full Manual SEO Review?", a: "No. It Is A Fast, Rule-Based Assessment Ideal For Prospecting And Prioritising. A Paid Engagement Usually Adds Deeper Manual Analysis." },
      { q: "How Should I Use A Strong Audit Grade When Prospecting?", a: "A Strong Grade Means Less Obvious Work To Sell, So Qualify Those Leads Differently. For Non-Agency Sellers, A Healthy Site Can Suggest A Business That Takes Its Digital Channels Seriously, Which May Make It A Better Fit For Other Offers." },
      { q: "How Do I Present Audit Findings Without Offending A Prospect?", a: "Frame Findings As Helpful Observations, Not Criticism. Mention The One Or Two Highest-Severity Issues In Plain Language, Explain Why They Matter To The Business And Offer The Fix List. A Report That Reads As An Attack Rarely Wins A Client." },
      { q: "When Should I Re-Run An Audit?", a: "An Audit Reflects The Site At The Moment It Was Fetched. If Weeks Have Passed Since The Audit, Or You Know The Prospect Has Changed Its Site, Re-Run It Before Referencing Specific Findings In Outreach Or On A Call." },
      { q: "Is The SEO Audit Available On The Free Plan?", a: "No. SEO And Website-Build Reports Are Included On The Growth Plan And Above. The Free Plan Covers Discovery, Website Enrichment, The Lead Dashboard And CSV Export." },
    ],
    related: ["/services/opportunity-reports", "/services/business-opportunity-detection", "/services/seo-agency-lead-generation", "/services/agency-client-prospecting", "/strategies/website-audit-offers"],
    cta: { heading: "Open Conversations With An Audit", text: "See How Audit Reports Work For Your Prospects In A Short Walkthrough.", label: "Request Access", href: "/book-a-demo" },
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
      "Business Opportunity Detection In LeadGen AI Flags Leads That Show A Clear, Fixable Gap: Businesses With No Website, Websites That Don’t Resolve, Listings With No Reachable Contact Route, And Sites Whose Audit Lands In The Bottom Band. Every Flag Carries The Evidence Behind It, And A Flagged Lead Can Be Contacted Straight From The Outreach Tools.",
      "For Agencies And Service Sellers, Those Gaps Are The Opportunity. Rather Than Hoping A Prospect Has A Problem, You Start From A Documented One.",
    ],
    highlights: [
      "Four Kinds Of Opportunity Flag",
      "Evidence Attached To Each Flag",
      "Contact Flagged Leads Directly",
      "Built For Agencies And Service Sellers",
    ],
    sections: [
      {
        heading: "The Four Flags And What They Mean",
        paragraphs: ["Each Flag Points To A Different Kind Of Gap:"],
        bullets: [
          "No Website: The Business Has No Site Associated With It",
          "Site Doesn’t Resolve: A Website Is Listed But Does Not Load",
          "No Reachable Contact Route: The Listing Offers No Usable Way To Get In Touch",
          "Weak Audit: The Site’s Audit Result Is In The Bottom Band",
        ],
      },
      {
        heading: "Why Evidence Matters",
        paragraphs: [
          "A Flag Without Evidence Is Just A Claim. A Flag With Evidence Gives You Something Real To Talk About. Because Each Flag Records What Triggered It, A Rep Can Check It Before Reaching Out And Refer To It Accurately. That Protects Your Credibility: Telling A Business Its Site Is Down When It Was A Temporary Blip Is A Poor First Impression.",
        ],
      },
      {
        heading: "Matching Flags To Services",
        paragraphs: [
          "Different Flags Suit Different Sellers. Web Design Studios Tend To Pick No-Website And Non-Resolving Flags. SEO And Marketing Agencies Focus On Weak Audits. Businesses Selling Listing Management, Call Handling Or Customer-Communication Tools Find The No-Contact-Route Flag Useful, As It Signals Customers May Struggle To Reach The Business.",
        ],
      },
      {
        heading: "From Flag To Pipeline",
        paragraphs: [
          "Flagged Leads Can Be Contacted From The Outreach Tools. A Typical Workflow Filters The Dashboard For A Flag, Checks The Evidence, Pushes The Shortlist Into The CRM Pipeline With Owners, And Generates AI Drafts That Use The Lead’s Enrichment And Audit Data. Every Message Is Logged Against The Lead.",
          "For No-Contact-Route Leads, Email May Not Be Possible; Phone Or A Visit May Be The Only Realistic Route.",
        ],
      },
      {
        heading: "Combining Flags With Scores",
        paragraphs: [
          "Opportunity Flags And AI Lead Scores Answer Different Questions. The Flag Says “There Is A Gap”; The Score Helps Say “This Business Is Worth The Effort”. An Active, Well-Reviewed Business With No Website Is Usually A Better Prospect Than A Dormant Listing With The Same Flag.",
        ],
      },
      {
        heading: "Reviewing Flags As A Team",
        paragraphs: [
          "Flags Are Most Useful When The Team Agrees What Each One Means For Its Own Process. A Short Shared Note (Which Flags Each Person Works, How Evidence Is Checked And When A Flagged Lead Is Dropped) Keeps Effort Focused. Reviewing A Sample Of Flagged Leads Together In The First Weeks Also Helps Everyone Agree On What A Good Opportunity Looks Like In Your Market.",
        ],
      },
    ],
    steps: {
      heading: "Working Opportunity Flags",
      items: [
        { title: "Run Discovery In Your Niche", text: "Scrape A Category And Area Where Your Service Is Relevant." },
        { title: "Filter By Flag", text: "Choose The Flag Type That Matches What You Sell." },
        { title: "Verify The Evidence", text: "Check Each Flag’s Evidence Before Outreach." },
        { title: "Prioritise Active Businesses", text: "Use Score And Activity Signals To Keep The Businesses Worth Pursuing." },
        { title: "Reach Out Constructively", text: "Draft Outreach That Names The Gap Helpfully And Offers A Clear Next Step." },
      ],
    },
    considerations: {
      heading: "Caveats",
      items: [
        "A Missing Website May Be A Choice; Some Businesses Thrive On Referrals And Listings Alone.",
        "Non-Resolving Sites Can Be Temporary Outages, So Re-Check Before Claiming A Site Is Down.",
        "No-Contact-Route Leads Are, By Definition, Harder To Reach.",
        "Weak-Audit Flags Depend On Audits Being Run, Which Is A Growth Feature.",
        "Lead With Help Rather Than Criticism; Nobody Enjoys Being Told Their Business Is Failing.",
      ],
    },
    example: {
      heading: "A Studio Sorting Flags By Service",
      text: "Consider A Web And Marketing Studio In Mysuru That Scrapes Restaurants Across The City. Forty Are Flagged With No Website, Twelve With A Site That Doesn’t Resolve And Thirty With Weak Audits. The Founder Handles The No-Website Group With A Simple Starter-Site Offer, While Her Colleague Takes The Weak-Audit Group With Fix Lists Attached. Both Confirm The Evidence Before Each Message.",
    },
    faqs: [
      { q: "What Triggers An Opportunity Flag?", a: "No Website, A Website That Doesn’t Resolve, A Listing With No Reachable Contact Route, Or A Weak Audit In The Bottom Band." },
      { q: "Can I See Why A Lead Was Flagged?", a: "Yes. Every Flag Carries The Evidence Behind It, So You Can Verify It Before Outreach." },
      { q: "Which Opportunity Flag Suits Which Kind Of Seller?", a: "Web Studios Usually Start With No-Website And Non-Resolving Flags, SEO And Marketing Agencies With Weak Audits, And Sellers Of Communication Or Listing Tools With The No-Contact-Route Flag." },
      { q: "How Do I Contact A Lead With No Reachable Contact Route?", a: "Email Will Not Be Possible; Teams Usually Try Any Phone Number Found Elsewhere, Or A Visit For Local Businesses. Some Such Leads Are Simply Unreachable." },
      { q: "Should I Double-Check A Flag Before Contacting The Business?", a: "Yes. A Site That Did Not Resolve May Have Been Briefly Down, And A Missing Website Could Exist But Be Unlinked. Checking The Evidence First Protects Your Credibility, Because Telling A Business Its Site Is Down When It Is Not Makes A Poor First Impression." },
      { q: "How Do Opportunity Flags And Lead Scores Work Together?", a: "The Flag Shows There Is A Gap, While The Score Helps Show Whether The Business Is Worth The Effort. An Active, Well-Reviewed Business With No Website Is Usually A Better Prospect Than A Dormant Listing With The Same Flag." },
      { q: "Why Are Some Leads Missing A Weak-Audit Flag?", a: "Weak-Audit Flags Depend On Audits Being Run, And Audits Are A Growth Feature. If A Lead Has Not Been Audited, It Cannot Receive That Flag, Though It May Still Carry Website Or Contact-Route Flags." },
      { q: "How Can A Team Agree On Which Flags To Work?", a: "Write A Short Shared Note Covering Which Flags Each Person Handles, How Evidence Is Checked And When A Flagged Lead Is Dropped. Reviewing A Sample Of Flagged Leads Together In The First Weeks Helps Everyone Calibrate What A Good Opportunity Looks Like." },
    ],
    related: ["/services/missing-website-detection", "/services/seo-website-audit", "/services/website-redesign-prospecting", "/services/agency-client-prospecting", "/services/ai-outreach-campaigns"],
    cta: { heading: "Find Businesses With A Fixable Gap", text: "Book A Walkthrough To See Opportunity Flags And Their Evidence On Your Niche.", label: "Request Access", href: "/book-a-demo" },
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
      "Missing Website Detection In LeadGen AI Flags Two Specific Situations: Businesses With No Website At All, And Businesses Whose Listed Website Does Not Resolve. Both Are Part Of Business Opportunity Detection, And Each Flag Carries The Evidence Behind It, So A Web Design Studio Can See Exactly Why A Lead Was Flagged Before Writing A Word.",
      "For Studios And Freelancers, These Leads Are The Most Direct Opportunity There Is. The Business Plainly Lacks A Working Site; The Question Is Whether It Wants One, And Whether You Can Make The Case Without Sounding Pushy.",
    ],
    highlights: [
      "No-Website And Non-Resolving Flags",
      "Evidence Attached To Every Flag",
      "Best Paired With Activity Signals",
      "Contact Flagged Leads From Outreach",
    ],
    sections: [
      {
        heading: "Two Flags, Two Different Conversations",
        paragraphs: [
          "A Business With No Website Has Either Never Had One Or Never Linked One To Its Listings. A Business With A Non-Resolving Site Had One, Or At Least Listed One, That No Longer Loads. The Pitch Differs. The First Often Needs Persuading That A Site Is Worth Having; The Second Already Believed It Was And May Simply Have Let A Domain Or Hosting Plan Lapse.",
        ],
        bullets: [
          "No Website: Lead With What A Simple Site Would Do For Enquiries",
          "Non-Resolving: Point Out, Helpfully, That The Listed Link Is Broken",
        ],
      },
      {
        heading: "How Detection Works In The Pipeline",
        paragraphs: [
          "Discovery Captures The Website Field From Listings. Enrichment Then Tries To Find The Business’s Own Site. When No Site Exists, Or The Listed One Will Not Load, The Lead Is Flagged With The Evidence. Flags Appear Alongside The AI Lead Score, So You Can Filter For Flagged Leads And Sort Them By Score In One View.",
        ],
      },
      {
        heading: "Picking The Right Flagged Leads",
        paragraphs: [
          "Not Every Business Without A Site Is A Good Prospect. Ratings, Review Counts And Listing Completeness Help Separate Thriving Businesses That Have Outgrown Word Of Mouth From Dormant Listings. The AI Lead Score Also Considers Signals Of An Active, Operating Business. Many Studios Focus First On Well-Reviewed Businesses With Complete Listings But No Site: Clearly Trading, Clearly Reachable, Clearly Missing Something.",
        ],
      },
      {
        heading: "Pitch Approaches That Tend To Work",
        paragraphs: [
          "Teams Often Keep The First Message Short And Specific. Mention How You Found The Business, Note The Gap Neutrally, And Suggest One Concrete Benefit Tied To Its Category: Online Menus For Restaurants, Service Areas For Plumbers, Appointment Requests For Clinics. For Broken Sites, A Friendly Heads-Up That The Link Fails Is Useful In Itself And Earns Attention.",
          "AI-Drafted Outreach Can Use The Lead’s Data As A Starting Point; Review And Adjust Tone Before Sending.",
        ],
      },
      {
        heading: "Limits Of Missing-Website Signals",
        paragraphs: [
          "Detection Is Only As Good As What Is Publicly Listed And Loading At The Time. A Business May Have A Site That Is Simply Not Linked Anywhere, Or A Site That Was Briefly Down. Check Before You Say So. And Some Owners Have Deliberately Chosen Not To Have A Website; Respect A Clear “No”.",
        ],
      },
    ],
    steps: {
      heading: "A Studio’s Missing-Website Workflow",
      items: [
        { title: "Scrape A Local Category", text: "Choose Categories Where A Website Clearly Helps Customers Decide." },
        { title: "Filter For Website Flags", text: "Show Leads Flagged As Having No Website Or A Site That Doesn’t Resolve." },
        { title: "Check Activity", text: "Use Reviews, Completeness And Score To Keep Active Businesses." },
        { title: "Verify The Evidence", text: "Search For The Business Quickly And Confirm The Gap Is Real." },
        { title: "Send A Specific Offer", text: "Pitch One Relevant Benefit And Suggest A Short Call Or Sample." },
      ],
    },
    considerations: {
      heading: "Before You Pitch",
      items: [
        "Without A Website There Is Often No Discovered Email; Phone Or A Visit May Be The Only Route.",
        "Some Businesses Rely Happily On Listings And Referrals And Will Not Want A Site.",
        "Non-Resolving Sites May Be Temporary Outages; Recheck Before Mentioning Them.",
        "Avoid Implying The Business Is Failing; Frame The Gap As An Opportunity.",
        "Follow Local Rules On Unsolicited Calls And Messages.",
      ],
    },
    example: {
      heading: "A Two-Person Studio In A Tier-2 City",
      text: "Imagine A Two-Person Web Studio In Vadodara Scraping Physiotherapy Clinics And Bakeries. Twenty-Five Leads Are Flagged With No Website, And Eight Have Links That Don’t Resolve. They Sort By Score, Keep The Businesses With Strong Review Counts, And Phone The Bakeries First With An Offer Of A One-Page Site Showing Their Menu And Opening Hours. The Broken-Link Clinics Get A Short, Helpful Email.",
    },
    faqs: [
      { q: "What Is The Difference Between ‘No Website’ And ‘Doesn’t Resolve’?", a: "No Website Means No Site Is Associated With The Business. Doesn’t Resolve Means A Site Is Listed But Does Not Load When Fetched." },
      { q: "How Do I Reach A Business That Has No Website?", a: "Usually By The Phone Number On Its Listing, Or In Person For Local Businesses, Since There Is No Site From Which To Discover An Email." },
      { q: "Which Flagged Businesses Should A Studio Contact First?", a: "Many Start With Active, Well-Reviewed Businesses That Have Complete Listings But No Site, Because They Are Clearly Trading And Reachable." },
      { q: "Is Missing-Website Detection A Separate Product?", a: "It Is Part Of Business Opportunity Detection, Alongside Flags For Unreachable Listings And Weak Audits." },
      { q: "How Should The Pitch Differ For A Broken Site?", a: "A Business With A Non-Resolving Site Already Believed A Website Was Worth Having, And May Have Let A Domain Or Hosting Plan Lapse. A Friendly Heads-Up That The Listed Link Fails Is Useful In Itself, And Often Earns More Attention Than A Sales Pitch." },
      { q: "What Benefits Should I Mention To A Business Without A Website?", a: "Pick One Concrete Benefit Tied To Its Category, Such As Online Menus For Restaurants, Service Areas For Plumbers Or Appointment Requests For Clinics. Keep The First Message Short, Note The Gap Neutrally And Suggest A Brief Call Or Sample." },
      { q: "What If The Business Says It Doesn’t Want A Website?", a: "Respect A Clear No. Some Owners Thrive On Listings And Referrals Alone And Have Deliberately Chosen Not To Have A Site. Log The Outcome Against The Lead So Nobody On Your Team Contacts Them Again With The Same Offer." },
      { q: "Can A Business Be Flagged Even Though It Has A Website?", a: "Yes. Detection Relies On What Is Publicly Listed And Resolvable At The Time, So A Site That Is Not Linked Anywhere Or Was Briefly Down Can Trigger A Flag. A Quick Search Before Pitching Confirms Whether The Gap Is Real." },
    ],
    related: ["/services/business-opportunity-detection", "/services/website-redesign-prospecting", "/services/local-business-prospecting", "/services/google-maps-lead-extraction", "/services/website-enrichment"],
    cta: { heading: "Find Businesses That Need A Website", text: "Book A Walkthrough And See Missing-Website Flags On The Categories You Serve.", label: "Request Access", href: "/book-a-demo" },
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
      "CRM Pipeline Management In LeadGen AI Gives Sales Teams A Pipeline Board With Stages, Owners And Full Activity History. It Is Built Directly On The Lead Records The Platform Discovered, Enriched And Scored. Leads Move From The Dashboard Into The Pipeline (Usually The Top Score Band), And Every Message And Change Is Recorded Against Them.",
      "Because The Pipeline Lives In The Same Place As The Data, Reps Do Not Copy Leads Between Tools Or Lose The Context That Made A Lead Interesting In The First Place. Score Reasons, Audit Findings, Opportunity Flags And Outreach History All Sit With The Lead.",
    ],
    highlights: [
      "Pipeline Board With Stages",
      "Owners Assigned Per Lead",
      "Full Activity History",
      "Role-Based Visibility For Teams",
    ],
    sections: [
      {
        heading: "Stages That Reflect How You Sell",
        paragraphs: [
          "The Board Organises Leads Into Stages So Everyone Can See Where Each Opportunity Stands. Teams Usually Keep Stages Few And Clear (For Example, New, Contacted, In Conversation, Proposal, Won And Lost) With A Clear Rule For When A Lead Moves. Simple Stages Keep The Board Honest. With Too Many, Leads Tend To Sit In Vague Middle Columns.",
        ],
      },
      {
        heading: "Owners And Accountability",
        paragraphs: [
          "Every Lead In The Pipeline Can Have An Owner. Ownership Answers The Most Common Sales-Team Question, “Who Is Handling This?”, And Prevents Two Reps Contacting The Same Business. Managers Can Review A Rep’s Pipeline At A Glance And Rebalance Work When Someone Is Overloaded Or Away.",
        ],
      },
      {
        heading: "Full Activity History On Every Lead",
        paragraphs: [
          "Activity History Records What Has Happened To A Lead Over Time, And Every Outreach Message Is Logged Against Its Lead. When A Prospect Replies Months Later, Whoever Picks It Up Can See The Previous Conversation, The Audit That Was Shared And The Stage Changes That Followed. Nothing Gets Lost When A Lead Changes Hands.",
        ],
        bullets: [
          "See Every Message Sent To The Lead",
          "Review Stage Changes And Ownership",
          "Pick Up A Lead Without Asking Colleagues For Context",
        ],
      },
      {
        heading: "Role-Based Access For Teams",
        paragraphs: [
          "Role-Based Access Means Each Team Sees The Records It Should. Growth Includes Full Team Access With 7 Role Modules, So A Business Can Separate, For Instance, Sales From Operations, Or Give Managers Broader Visibility Than Individual Reps. Multi-Tenant Workspaces Keep Organisations Apart Entirely.",
        ],
      },
      {
        heading: "Fitting The Pipeline Into The Wider Workflow",
        paragraphs: [
          "The Pipeline Connects Upstream And Downstream. Upstream, You Sort And Filter By Score And Push The Top Band In. Downstream, You Draft Outreach From The Lead’s Own Enrichment And Audit Data And Send It Through Your Email Transport. If Your Team Also Uses Other Tools, CSV Export Lets You Move Data Out; Named Third-Party CRM Integrations Are Not Offered.",
        ],
      },
    ],
    steps: {
      heading: "Setting Up A Working Pipeline",
      items: [
        { title: "Agree Stage Definitions", text: "Write One Sentence Per Stage Describing When A Lead Enters And Leaves It." },
        { title: "Push Qualified Leads In", text: "Move The Top Score Band From The Dashboard Into The Pipeline." },
        { title: "Assign Owners", text: "Give Every Lead An Owner So Responsibility Is Clear." },
        { title: "Work And Log", text: "Send Outreach, Record Outcomes And Move Leads Through Stages; Messages Are Logged Automatically." },
        { title: "Review Weekly", text: "Check Stuck Leads, Rebalance Ownership And Close Out Dead Opportunities." },
      ],
    },
    considerations: {
      heading: "Points To Plan For",
      items: [
        "A Pipeline Is Only As Accurate As The Discipline Of Updating It; Agree Team Habits Early.",
        "Outreach And Team Roles Are Growth Features, So A Free Workspace Is Limited To One Admin User.",
        "If You Already Run A Separate CRM, Decide Which System Is The Source Of Truth To Avoid Double Entry.",
        "Data Moves To Other Tools Via CSV Export, Or Per-Org API Keys On Scale, Rather Than Named Integrations.",
        "Too Many Stages Blur Meaning; Start Simple And Add Only When Needed.",
      ],
    },
    example: {
      heading: "A Five-Rep Team Replacing A Shared Spreadsheet",
      text: "Imagine A Commercial Cleaning Company In Thane Whose Reps Tracked Prospects In A Shared Spreadsheet. They Switch To The Pipeline Board With Five Stages, Assign Every Lead An Owner And Push In The Top-Scoring Offices From A Recent Scrape. When A Facilities Manager Replies To An Old Email, The Rep Who Picks It Up Sees The Original Message, The Score Reasons And The Previous Owner In The Activity History.",
    },
    faqs: [
      { q: "Can I Customise What Each Stage Means?", a: "The Board Is Built On Stages, Owners And History. Teams Typically Agree Their Own Stage Definitions So Movement Between Columns Means The Same Thing To Everyone." },
      { q: "Does The Pipeline Connect To Other CRMs?", a: "Named Third-Party CRM Integrations Are Not Offered. Data Can Be Moved Out With CSV Export, Or Programmatically With Per-Org API Keys On The Scale Plan." },
      { q: "How Do I Stop Two Reps Contacting The Same Lead?", a: "Assign An Owner To Every Pipeline Lead And Use Role-Based Access So Each Team Sees The Records It Should." },
      { q: "Where Do Outreach Messages Appear?", a: "Every Message Is Logged Against Its Lead, So It Appears In That Lead’s Activity History." },
      { q: "How Many Pipeline Stages Should We Start With?", a: "Keep Them Few And Unambiguous, For Example New, Contacted, In Conversation, Proposal, Won And Lost. Write One Sentence Per Stage Describing When A Lead Enters And Leaves It, And Add Stages Only When The Team Clearly Needs Them." },
      { q: "Can A Manager Rebalance Leads When A Rep Is Away?", a: "Yes. Every Pipeline Lead Can Have An Owner, So A Manager Can Review Each Rep’s Pipeline At A Glance And Reassign Leads. The Activity History Stays With The Lead, So The New Owner Can See What Has Already Happened." },
      { q: "How Many Users Can Work The Pipeline On Each Plan?", a: "The Free Plan Is Limited To One Admin User. Growth Adds Full Team Access With 7 Role Modules, So Teams Can Give Managers Broader Visibility Than Individual Reps, And Scale Builds On That For Larger Operations." },
      { q: "What If We Already Use Another CRM?", a: "Decide Which System Is The Source Of Truth So Your Team Avoids Double Entry. Named Third-Party CRM Integrations Are Not Offered, But You Can Move Data Out With CSV Export, Or Programmatically With Per-Org API Keys On Scale." },
    ],
    related: ["/services/ai-outreach-campaigns", "/services/outreach-activity-logging", "/services/role-based-team-access", "/services/ai-lead-scoring", "/services/csv-lead-export"],
    cta: { heading: "Run Your Pipeline On Enriched Data", text: "Request A Walkthrough Of The Pipeline Board, Roles And Outreach Logging.", label: "Request Access", href: "/book-a-demo" },
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
      "AI Outreach Campaigns In LeadGen AI Let You Send Messages To A Selected Group Of Leads Through Your Own Configured Email Transport, Using Drafts Written From Each Lead’s Enrichment And Audit Data. Every Message Is Logged Against Its Lead. Outreach Respects Sending Limits And Opt-Out Obligations, And You Stay In Control Of The List.",
      "The Aim Is Relevant Messages At A Manageable Scale, Not Blasting A List. Campaigns Work Best When The Audience Is Narrow, The Message Refers To Something True About Each Business, And Someone Reviews The Drafts Before They Go.",
    ],
    highlights: [
      "Sent Via Your Email Transport",
      "Drafts Built From Lead Data",
      "Every Message Logged Per Lead",
      "Respects Limits And Opt-Outs",
    ],
    sections: [
      {
        heading: "How A Campaign Is Put Together",
        paragraphs: [
          "A Campaign Starts With A Selection: Usually Leads Filtered By Score, Flag Or Segment And Pushed Into The Pipeline. Messages Are Drafted Using Each Lead’s Enrichment And Audit Data, Reviewed, And Sent Through The Email Transport You Have Configured. Because Sending Happens Through Your Own Transport, Replies Come Back To Your Own Mailbox.",
        ],
      },
      {
        heading: "Why Your Own Email Transport Matters",
        paragraphs: [
          "Sending Through Your Configured Transport Keeps Your Brand On The Message And Your Relationship With The Recipient Direct. It Also Puts Your Sender Reputation On The Line, So The Same Hygiene You Would Apply To Any Outbound Email Applies Here: Authenticated Domains, Steady Volumes And Quick Removal Of Bounces And Opt-Outs.",
        ],
      },
      {
        heading: "Logging, Limits And Opt-Outs",
        paragraphs: [
          "Every Message Is Logged Against Its Lead, So Managers Can See Who Was Contacted, When And With What. Outreach Respects Sending Limits And Opt-Out Obligations. When Someone Asks Not To Be Contacted Again, Honour It Promptly And Make Sure The Lead Is Excluded From Future Campaigns.",
        ],
        bullets: [
          "Per-Lead Message Log For Accountability",
          "Sending Limits To Protect Deliverability",
          "Opt-Out Obligations Respected",
          "You Control Who Is On The List",
        ],
      },
      {
        heading: "Segmenting For Relevance",
        paragraphs: [
          "The Best Campaigns Share A Reason For Writing. Group Leads By Opportunity Flag (No Website, Weak Audit), By Category Or By Geography, So The Core Message Fits Everyone And The AI Draft Only Has To Personalise The Details. Mixing Unrelated Segments In One Campaign Tends To Produce Vague Messages.",
        ],
      },
      {
        heading: "Measuring And Improving",
        paragraphs: [
          "Because Messages And Stage Changes Live In The Activity History, Teams Can Review Which Segments Produced Conversations And Adjust. A Common Approach Is A Small First Send, A Review Of Replies, Then A Refined Message For The Next Batch. AI Outreach Is Included On The Growth And Scale Plans.",
        ],
      },
      {
        heading: "Follow-Ups Without Nagging",
        paragraphs: [
          "Replies Often Come After More Than One Touch, But Repeated Identical Reminders Damage Goodwill. A Common Pattern Is Two Or Three Follow-Ups Spaced Several Days Apart, Each Adding Something New: A Relevant Audit Finding, The Fix List, Or A Short Example Of Similar Work. Stop When The Prospect Asks You To, And Use The Activity Log To Make Sure Nobody On The Team Writes Again By Mistake.",
        ],
      },
    ],
    steps: {
      heading: "Launching A Campaign",
      items: [
        { title: "Configure Your Transport", text: "Connect The Email Transport You Want Campaigns Sent Through." },
        { title: "Select A Focused Segment", text: "Filter By Score, Flag Or Category And Move The Leads Into The Pipeline." },
        { title: "Generate And Review Drafts", text: "Let AI Draft From Enrichment And Audit Data, Then Edit For Accuracy And Tone." },
        { title: "Send Within Limits", text: "Send At A Steady Pace; Limits And Opt-Outs Are Respected And Every Message Is Logged." },
        { title: "Follow Up And Refine", text: "Track Replies, Move Leads Through Stages And Improve The Next Batch." },
      ],
    },
    considerations: {
      heading: "Responsibilities That Stay With You",
      items: [
        "Email Marketing Laws Such As Anti-Spam And Data-Protection Rules Differ By Country; Check Current Requirements And Take Legal Advice.",
        "AI Drafts Can Misread Data; Always Review Before Sending.",
        "Your Domain Reputation Is Affected By Complaints And Bounces, So Keep Lists Clean.",
        "Generic Shared Inboxes May Need A Message That Still Makes Sense When Forwarded.",
        "Outreach Requires The Growth Plan Or Above And A Configured Email Transport.",
      ],
    },
    example: {
      heading: "A Small SEO Agency’s Weekly Campaign",
      text: "Picture A Three-Person SEO Agency In Lucknow. Each Monday It Selects Twenty-Five Weak-Audit Leads In One Category, Generates Drafts That Cite Each Site’s Top Finding, And Spends An Hour Editing Them. Messages Go Out Through The Agency’s Own Mailbox Across The Week. On Friday The Team Reviews Replies In The Activity History And Adjusts The Following Week’s Opening Line.",
    },
    faqs: [
      { q: "Whose Email Account Sends The Campaign?", a: "Campaigns Are Sent Through The Email Transport You Configure, So Messages Come From Your Own Sending Setup And Replies Return To You." },
      { q: "What Happens When Someone Opts Out?", a: "Outreach Respects Opt-Out Obligations. Make Sure Opted-Out Leads Are Excluded From Future Sends, And Act On Requests Promptly." },
      { q: "How Large Should A Campaign Be?", a: "There Is No Single Right Size, But Many Teams Start Small And Focused So They Can Review Every Draft And Protect Deliverability." },
      { q: "Can Managers Audit What Was Sent?", a: "Yes. Every Message Is Logged Against Its Lead, Giving A Per-Lead Record Of Outreach." },
      { q: "How Should I Segment Leads For A Campaign?", a: "Group Leads That Share A Reason For Writing, Such As The Same Opportunity Flag, Category Or Geography. The Core Message Then Fits Everyone, And The AI Draft Only Has To Personalise The Details. Mixing Unrelated Segments Tends To Produce Vague Messages." },
      { q: "How Many Follow-Ups Should A Campaign Include?", a: "A Common Pattern Is Two Or Three Follow-Ups Spaced Several Days Apart, Each Adding Something New Such As An Audit Finding Or The Fix List. Stop When The Prospect Asks You To, And Check The Activity Log So Nobody Writes Again By Mistake." },
      { q: "How Do I Protect My Domain Reputation During Campaigns?", a: "Send At A Steady Pace, Use An Authenticated Sending Domain And Remove Bounces And Opt-Outs Quickly. Complaints And Bounces Affect Your Reputation Because Messages Go Through Your Own Transport, So Clean, Focused Lists Matter More Than Volume." },
      { q: "How Can I Tell Which Campaign Segments Are Working?", a: "Messages And Stage Changes Are Recorded In Each Lead’s Activity History, So You Can Review Which Segments Led To Replies And Conversations. Many Teams Send A Small First Batch, Review Responses And Refine The Message For The Next One." },
    ],
    related: ["/services/ai-drafted-outreach-messages", "/services/outreach-activity-logging", "/services/crm-pipeline-management", "/services/business-email-discovery", "/responsible-prospecting", "/strategies/cold-email-outreach"],
    cta: { heading: "Send Relevant Outreach, Not Volume", text: "See How Campaigns, Logging And Opt-Outs Work In A Guided Walkthrough.", label: "Request Access", href: "/book-a-demo" },
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
      "AI-Drafted Outreach Messages In LeadGen AI Are First Drafts Written From A Lead’s Own Enrichment And Audit Data: Its Website, Category, Location, Contact Details And, Where An Audit Has Been Run, Its Specific Findings. SDRs Get A Relevant Starting Point In Seconds Rather Than A Blank Page, Then Review And Edit Before The Message Is Sent Through Their Email Transport.",
      "The Value Comes From Using Real Data. A Draft That Refers To A Real Issue On A Prospect’s Site, Or To How The Business Describes Itself, Is More Useful Than A Template With A Name Swapped In, Provided A Human Checks It Is Accurate.",
    ],
    highlights: [
      "Drafts Use Enrichment And Audit Data",
      "Specific To Each Lead",
      "Human Review Before Sending",
      "Logged Against The Lead Once Sent",
    ],
    sections: [
      {
        heading: "What The Drafts Draw On",
        paragraphs: [
          "Drafts Use The Data The Platform Has Gathered About The Lead. That Can Include Enrichment Details Such As The Website, Contact And About Pages And Social Profiles, And Audit Data Such As The Overall Grade And The Highest-Severity Findings. Opportunity Flags Give A Reason To Write, And The Score Reasons Hint At What Makes The Lead Promising.",
        ],
      },
      {
        heading: "Why Data-Based Drafts Read Better",
        paragraphs: [
          "Recipients Can Tell When A Message Was Written For Them. A Specific Observation (“Your Site’s Pages Are Missing Descriptions, So Search Results Show Random Text”) Signals Effort And Expertise. Basing The Draft On The Lead’s Actual Data Makes That Kind Of Detail Possible At A Pace A Busy SDR Can Keep Up.",
        ],
      },
      {
        heading: "The Review Step Is Not Optional",
        paragraphs: [
          "AI Can Misread A Field, Overstate A Finding Or Strike The Wrong Tone. Teams Treat Every Draft As A Draft: Check Each Factual Claim Against The Record Or The Live Site, Trim Anything That Sounds Generic Or Exaggerated, And Make Sure The Ask Is Clear And Small.",
        ],
        bullets: [
          "Verify Every Specific Claim",
          "Cut Flattery And Filler",
          "Keep One Clear, Low-Effort Next Step",
          "Match The Tone To The Prospect’s Category",
        ],
      },
      {
        heading: "Drafts Within Campaigns And One-Off Sends",
        paragraphs: [
          "Drafts Work For Both Individual Messages And Campaigns. A Rep Preparing For A Key Account May Rewrite Heavily; A Campaign To A Tight Segment May Need Only Light Edits Per Lead. Either Way, Sending Goes Through Your Configured Email Transport And The Message Is Logged Against Its Lead, Respecting Sending Limits And Opt-Outs.",
        ],
      },
      {
        heading: "Writing Guidance Teams Often Adopt",
        paragraphs: [
          "Short Beats Long. A Common Structure Is A One-Line Reason For Writing Based On The Lead’s Data, One Line On Why It Matters To The Business, One Line On How You Help, And A Simple Question. Follow-Ups That Add A New Piece Of Value, Such As Offering The Audit’s Fix List, Tend To Land Better Than “Just Checking In”.",
        ],
      },
      {
        heading: "Keeping Brand Voice Consistent",
        paragraphs: [
          "When Several Reps Edit Drafts, Messages Can Drift In Tone And Claims. Teams Often Keep A Short Style Note (Preferred Greeting, Words To Avoid, How To Describe The Company’s Service, Which Claims Are Allowed) And Apply It While Reviewing. That Keeps Outreach Recognisably Yours Even Though Each Draft Starts From A Different Lead’s Data.",
        ],
      },
    ],
    steps: {
      heading: "From Draft To Sent Message",
      items: [
        { title: "Open The Lead", text: "Check Enrichment Details, Score Reasons And Any Audit Findings." },
        { title: "Generate A Draft", text: "Let The AI Write A First Version Using The Lead’s Own Data." },
        { title: "Fact-Check", text: "Confirm Each Specific Claim Against The Record Or The Live Website." },
        { title: "Edit For Voice", text: "Shorten, Adjust Tone And Make The Ask Clear." },
        { title: "Send And Log", text: "Send Through Your Email Transport; The Message Is Logged Against The Lead." },
      ],
    },
    considerations: {
      heading: "Know The Limits",
      items: [
        "Drafts Are Only As Good As The Data Behind Them; Thin Records Produce Generic Drafts.",
        "AI Can Phrase Findings More Strongly Than The Evidence Supports. Soften Where Needed.",
        "Reviewing Every Draft Takes Time; Budget For It Rather Than Skipping It.",
        "Personalised Does Not Mean Permitted; Marketing Rules Still Apply.",
        "AI Outreach Is Available On Growth And Scale Plans.",
      ],
    },
    example: {
      heading: "An SDR’s Morning Batch",
      text: "Imagine An SDR At A Website Maintenance Firm In Visakhapatnam With Fifteen Leads To Contact. For Each, She Generates A Draft That Cites The Site’s Top Audit Finding. On One, The Draft Says The Site Is “Very Slow”. She Checks The Metrics, Softens It To “Slower On Mobile Than It Could Be”, And Offers The Fix List. Fifteen Reviewed Messages Take Under An Hour.",
    },
    faqs: [
      { q: "What Data Does The AI Use To Write A Draft?", a: "The Lead’s Own Enrichment And Audit Data, Such As Its Website, Contact Pages, Social Profiles And Audit Findings." },
      { q: "Are Drafts Sent Automatically?", a: "Treat Them As Drafts. Review And Edit Each One, Then Send Through Your Configured Email Transport." },
      { q: "Why Does A Draft Sometimes Sound Generic?", a: "Usually Because The Lead’s Record Is Thin. Re-Enriching Or Running An Audit Gives The AI More Specific Material To Work With." },
      { q: "What Structure Works Well For A Short Outreach Draft?", a: "A Common Structure Is One Line On Why You Are Writing, Based On The Lead’s Data, One Line On Why It Matters To The Business, One Line On How You Help, And A Simple Question. Short Messages Are Easier To Read And Easier To Reply To." },
      { q: "What Should I Check Before Sending An AI Draft?", a: "Verify Every Specific Claim Against The Record Or The Live Website, Since AI Can Misread A Field Or Overstate A Finding. Cut Flattery And Filler, Match The Tone To The Prospect’s Category And Make Sure There Is One Clear, Low-Effort Next Step." },
      { q: "How Do We Keep Drafts Consistent Across Several Reps?", a: "Keep A Short Style Note Covering Your Preferred Greeting, Words To Avoid, How To Describe Your Service And Which Claims Are Allowed. Applying It During Review Keeps Messages Recognisably Yours, Even Though Each Draft Starts From A Different Lead’s Data." },
      { q: "Can I Use AI Drafts For Follow-Ups?", a: "Yes. Drafts Work For Individual Messages And Campaigns Alike. Follow-Ups That Add Something New, Such As Offering The Audit’s Fix List, Tend To Land Better Than A Plain “Just Checking In” Note, And Each Sent Message Is Logged Against The Lead." },
      { q: "Which Plans Include AI-Drafted Outreach?", a: "AI Outreach Is Available On The Growth And Scale Plans. Sending Also Needs A Configured Email Transport, Because Messages Go Out Through Your Own Setup Rather Than The Platform’s, With Sending Limits And Opt-Outs Respected." },
    ],
    related: ["/services/ai-outreach-campaigns", "/services/seo-website-audit", "/services/ai-contact-enrichment", "/services/prospect-research", "/strategies/cold-email-outreach"],
    cta: { heading: "Write Better First Messages, Faster", text: "Request Access To See Drafts Built From Your Own Leads’ Data.", label: "Request Access", href: "/book-a-demo" },
  },
  {
    path: "/services/lead-deduplication",
    title: "Lead De-Duplication",
    h1: "Lead De-Duplication: One Record Per Business",
    metaTitle: "Lead De-duplication Across Maps, LinkedIn and IndiaMART",
    metaDescription:
      "Results from Google Maps, LinkedIn and IndiaMART are normalised and merged so each business becomes one lead record, with field sources kept intact.",
    eyebrow: "Enrich",
    intro: [
      "Lead De-Duplication In LeadGen AI Merges Results From Different Sources So Each Business Ends Up As One Lead Record. When A Query Fans Out To Google Maps, LinkedIn And IndiaMART, The Results Are Normalised Into A Consistent Shape And De-Duplicated Across Sources, With Every Field Still Tagged With Where It Came From.",
      "For Ops Teams, This Removes One Of The Most Tedious Parts Of List Building: Matching Rows From Different Exports By Hand. For Reps, It Means One Owner, One History And No Embarrassing Double Contact.",
    ],
    highlights: [
      "Cross-Source Merge Into One Record",
      "Normalisation Makes Matching Possible",
      "Field Sources Preserved After Merging",
      "Prevents Double Contact",
    ],
    sections: [
      {
        heading: "Why Duplicates Appear In The First Place",
        paragraphs: [
          "The Same Business Is Often Listed In Several Places, And Each Listing Describes It Slightly Differently. One Source May Use A Trading Name, Another The Registered Name; One May Abbreviate “Road”, Another May Include A Floor Number. Without Matching, A Multi-Source Search Returns The Same Business Two Or Three Times.",
        ],
      },
      {
        heading: "Normalise First, Then Compare",
        paragraphs: [
          "De-Duplication Depends On Normalisation. Results Are Normalised Into One Record Shape (Consistent Fields, Consistent Phone Formats) So They Can Be Compared Like For Like. Once Normalised, Results Describing The Same Business Are Merged Into One Record Per Business.",
        ],
      },
      {
        heading: "What Happens To Fields When Records Merge",
        paragraphs: [
          "Merging Does Not Lose Track Of Where Data Came From. Each Field On The Merged Record Carries The Source It Came From, So You Can See That The Address Came From Maps And The Product Context From IndiaMART. Later, Enrichment Compares New Findings With The Merged Record. It Only Writes A Field When The New Value Is More Complete, And It Never Overwrites A Hand Edit.",
        ],
        bullets: [
          "Each Field Keeps Its Source Tag",
          "Enrichment Fills Gaps Only With More Complete Values",
          "Manual Edits Are Protected",
        ],
      },
      {
        heading: "Why One Record Per Business Matters Downstream",
        paragraphs: [
          "Duplicates Quietly Damage Everything After Discovery. They Inflate List Sizes, Split Activity History Across Records, Let Two Reps Own The Same Business And Risk A Prospect Receiving The Same Email Twice. With One Record Per Business, Scores, Audits, Ownership And Outreach Logs All Build Up In One Place.",
        ],
      },
      {
        heading: "Handling The Edge Cases",
        paragraphs: [
          "No Automatic Merge Is Perfect. Businesses With Several Branches, Very Different Names Across Platforms, Or Shared Addresses In A Market Complex Can Produce Records That Look Similar But Are Distinct, Or Distinct-Looking Records That Are The Same. Ops Teams Typically Spot-Check Merged Lists, Especially In Dense Commercial Areas, And Correct Anything That Looks Wrong.",
        ],
      },
      {
        heading: "De-Duplication And List Sizing",
        paragraphs: [
          "Merging Also Makes List Sizes Easier To Read. When One Query Fans Out To Several Sources, The Count Of Leads You Work Reflects Distinct Businesses Rather Than Raw Listings. That Gives Managers A Truer Picture Of Market Size For A Category And Area, And Stops Reps Overestimating How Many Prospects Remain In A Territory.",
        ],
      },
    ],
    steps: {
      heading: "Keeping Lists Clean",
      items: [
        { title: "Run Multi-Source Queries", text: "Search With The Sources That Suit Your Segment In A Single Query." },
        { title: "Let Normalisation And Merging Run", text: "Results Are Normalised And Merged Into One Record Per Business." },
        { title: "Spot-Check Dense Areas", text: "Review Records In Market Complexes And Multi-Branch Chains." },
        { title: "Correct By Hand Where Needed", text: "Fix Any Field You Know Is Wrong; Enrichment Will Not Overwrite Your Edit." },
        { title: "Assign One Owner", text: "Push The Clean List Into The Pipeline So Each Business Has One Owner And History." },
      ],
    },
    considerations: {
      heading: "Edge Cases And Trade-Offs",
      items: [
        "Multi-Branch Businesses May Be One Company But Several Genuine Locations. Decide How Your Team Wants To Treat Them.",
        "Very Different Names Across Sources Can Prevent A Match; Manual Review Helps.",
        "Shared Addresses In Malls Or Industrial Estates Can Make Distinct Businesses Look Alike.",
        "De-Duplication Applies To Platform Results; Data Imported From Elsewhere Is Your Responsibility To Check.",
        "Multi-Source Discovery With LinkedIn And IndiaMART Is A Scale Plan Feature.",
      ],
    },
    example: {
      heading: "A Merged List For A Building-Materials Supplier",
      text: "Suppose A Tile Distributor In Morbi Runs One Query For Contractors And Interior Firms Across Maps And IndiaMART. Dozens Of Firms Appear In Both. After Merging, Each Firm Is One Record: Maps Supplied The Rating And Exact Address, The Directory Supplied Product Context. An Ops Lead Spot-Checks Firms In A Busy Commercial Complex And Separates Two That Shared A Building.",
    },
    faqs: [
      { q: "How Does LeadGen AI Decide Two Results Are The Same Business?", a: "Results Are First Normalised Into A Consistent Record Shape, Then De-Duplicated Across Sources So Each Business Becomes One Record." },
      { q: "Do I Lose The Source Of A Field When Records Merge?", a: "No. Each Field On The Merged Record Keeps The Source It Came From." },
      { q: "What About Branches Of The Same Business?", a: "Branches Can Be Genuinely Separate Locations. Review Multi-Branch Chains And Decide How Your Team Wants To Handle Them." },
      { q: "Will Merging Overwrite My Manual Corrections?", a: "Hand-Edited Fields Are Protected; Enrichment Never Overwrites A Field The User Edited Manually." },
      { q: "Why Does The Same Business Appear In Several Sources?", a: "Businesses Are Often Listed In Many Places, And Each Listing Describes Them Slightly Differently. One Source May Use A Trading Name And Another A Registered Name, Or Format An Address Differently. Without Reconciliation, A Multi-Source Search Would Return The Same Business Several Times." },
      { q: "Where Is Manual Review Most Needed After Merging?", a: "Dense Commercial Areas Such As Malls And Industrial Estates, Where Distinct Businesses Can Share An Address, And Multi-Branch Chains. Businesses With Very Different Names Across Platforms Can Also Escape A Match, So Spot-Check Those Before Assigning Owners." },
      { q: "Does De-Duplication Apply To Data I Bring In From Elsewhere?", a: "De-Duplication Applies To Platform Results. Data Imported Or Combined From Other Sources Is Your Responsibility To Check, So Review It Carefully Before Mixing It With Your Working Lists To Avoid Duplicate Records And Double Contact." },
      { q: "How Does De-Duplication Change The Size Of My List?", a: "After Merging, The Count Reflects Distinct Businesses Rather Than Raw Listings. That Gives Managers A Truer Picture Of Market Size For A Category And Area, And Stops Reps Overestimating How Many Prospects Remain In A Territory." },
    ],
    related: ["/services/multi-source-lead-scraping", "/services/lead-data-normalisation", "/services/source-traceability", "/data-sources", "/services/crm-pipeline-management"],
    cta: { heading: "Work One Clean List, Not Three", text: "Ask For A Walkthrough Of Multi-Source Discovery And De-Duplication.", label: "Request Access", href: "/book-a-demo" },
  },
];
