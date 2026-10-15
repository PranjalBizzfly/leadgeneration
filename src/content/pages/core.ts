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
      "LeadGen AI Is A Prospect Intelligence Platform That Helps Teams Find, Understand And Reach The Right Prospects. It Brings Scraping, Enrichment, Scoring, Website Audits, Opportunity Detection, A CRM Pipeline And AI-Drafted Outreach Into One Workflow. Turning A Market Into A Contact List No Longer Means Juggling A Dozen Tabs And Spreadsheets.",
      "The Platform Starts From Public Business Listings On Google Maps, LinkedIn And IndiaMART, Turns Them Into One Clean Record Per Business, And Then Adds The Context A Seller Needs Before Making Contact: Verified-Format Phone Numbers, Emails Found On The Company’s Own Site, A 0–100 Score With Stored Reasons, And An Audit Of The Prospect’s Website. This Page Explains What The Platform Is, Who It Is Built For And The Principles Behind It.",
    ],
    highlights: [
      "One Pipeline From Search To Outreach",
      "Google Maps, LinkedIn And IndiaMART Sources",
      "Every Field Traceable To Its Source",
      "Scores That Explain Themselves",
    ],
    sections: [
      {
        heading: "What LeadGen AI Actually Does",
        paragraphs: [
          "At Its Core, LeadGen AI Answers A Practical Question: Which Businesses In My Market Are Worth Contacting, And What Should I Say To Them? A Single Query (A Category And A Location, Or A Directory Search Term) Fans Out To Each Enabled Source. The Results Are Normalised Into One Lead Record Per Business And De-Duplicated Across Sources, So A Business Listed On Two Platforms Appears Once.",
          "From There, Each New Lead Is Queued For Enrichment Automatically. The Platform Finds The Website, Crawls The Pages That Normally Carry Contact Details And Matches What It Finds Against The Existing Record. Scoring, Auditing And Opportunity Detection Then Help The User Decide Where To Spend Time, And The CRM And Outreach Tools Carry The Chosen Leads Through To Contact.",
        ],
        bullets: [
          "Multi-Source Scraping With Cross-Source De-Duplication",
          "AI Contact Enrichment From The Company’s Own Website",
          "A 0–100 Lead Score With Reasons Stored On The Record",
          "SEO Website Audits With Client-Ready Reports",
          "Opportunity Flags Such As No Website Or A Weak Audit",
          "A Pipeline Board And AI-Drafted Outreach Sent Through Your Own Email Transport",
        ],
      },
      {
        heading: "Who The Platform Is Built For",
        paragraphs: [
          "LeadGen AI Suits Teams Whose Customers Are Businesses That Can Be Found In Public Listings. Digital And Web Agencies Use It To Find Local Businesses With Weak Or Missing Websites. B2B Sellers Use It To Build Territory Lists And Prioritise Accounts. Suppliers And Distributors In India Use IndiaMART Search Terms To Find Buyers And Peers In Their Category.",
          "The Plans Reflect That Range: A Free Plan For Small Teams Just Getting Started, A Growth Plan For Teams That Need Deeper Insights And Automation, And A Scale Plan For High-Volume Operations That Demand Dedicated Infrastructure.",
        ],
      },
      {
        heading: "Principles Behind The Product",
        paragraphs: [
          "A Few Design Choices Run Through The Whole Platform And Explain How It Behaves Day To Day.",
        ],
        bullets: [
          "Traceability: Every Lead Records The Source Each Field Came From, And Every Job Records What It Fetched And When.",
          "Respect For Human Edits: Enrichment Never Overwrites A Field The User Edited By Hand, And It Writes A Field Only When The New Value Is More Complete.",
          "Explainable Prioritisation: The Lead Score Is Stored With Its Reasons, So A Seller Can See Why A Lead Ranks Where It Does.",
          "User Control Over Outreach: Campaigns Go Out Through The User’s Configured Email Transport, Respect Sending Limits And Opt-Out Obligations, And Every Message Is Logged Against Its Lead.",
        ],
      },
      {
        heading: "How The Pieces Fit Together",
        paragraphs: [
          "Long Jobs Run On A Worker Fleet, So A Large Scrape Keeps Going After The Browser Tab Is Closed. Quotas Are Enforced Per Plan And Per Billing Cycle. Workspaces Are Multi-Tenant And Role-Based, So Each Team Sees The Records It Should. Leads Can Be Exported To CSV, And The Scale Plan Adds Per-Org API Keys For Teams That Want To Connect The Platform To Their Own Systems.",
          "The Result Is A Single Place Where Research, Qualification And First Contact Happen On The Same Record, With The History Of Each Lead Kept Alongside It.",
        ],
      },
      {
        heading: "Where To Go Next",
        paragraphs: [
          "If You Want The Step-By-Step Flow, Read How It Works. For The Modules And Data Model, See The Platform Overview. If You Are Weighing The Plans, The Plans Page Sets Out What Each Tier Includes. And If You Would Like A Guided Look At The Product, Request Access And We Will Arrange A Walkthrough.",
        ],
      },
    ],
    considerations: {
      heading: "What To Know Before You Start",
      items: [
        "LeadGen AI Works From Public Business Listings, So It Fits Best When Your Buyers Are Businesses Visible On Google Maps, LinkedIn Or IndiaMART.",
        "Lead Quality Depends On How Clearly You Define Your Market, Category And Geography; Vague Queries Produce Broad Lists.",
        "LinkedIn And IndiaMART As Sources Are Listed On The Scale Plan, So Check Which Sources Your Plan Includes.",
        "Outreach Is Sent Through Your Own Email Transport, So Your Sending Reputation And Compliance Remain Your Responsibility.",
      ],
    },
    example: {
      heading: "A Small Agency’s First Week",
      text: "Imagine A Four-Person Digital Agency In Jaipur That Wants More Website Clients. On The Free Plan It Runs A Query For Dental Clinics In Its City, Reviews The Enriched Records And Exports A Shortlist To CSV. Seeing That Several Clinics Have No Website Or A Weak Audit, It Moves To Growth To Use Scoring, Audit Reports And AI-Drafted Outreach For The Next Campaign.",
    },
    faqs: [
      {
        q: "Is LeadGen AI A Data Vendor That Sells Contact Lists?",
        a: "No. LeadGen AI Is A Platform You Run Yourself. You Define The Query, The Platform Gathers And Enriches Public Business Data For That Query, And The Resulting Records Sit In Your Own Workspace.",
      },
      {
        q: "What Does “Prospect Intelligence” Mean In Practice?",
        a: "It Means A Lead Arrives With Context Rather Than Just A Name And Number: Where Each Field Came From, A Score With Reasons, An Audit Of The Website And Any Opportunity Flags, All On One Record.",
      },
      {
        q: "Can I Try The Platform Before Committing To A Paid Plan?",
        a: "Yes. The Free Plan Includes 3 Scrape Queries, Website Enrichment, The Lead Dashboard And CSV Export For One Admin User, Which Is Enough To Judge Whether The Records Suit Your Market.",
      },
      {
        q: "What Kind Of Team Gets The Most Out Of LeadGen AI?",
        a: "Teams Whose Customers Are Businesses Visible In Public Listings. Digital And Web Agencies Use It To Find Local Businesses With Weak Or Missing Websites, B2B Sellers Build Territory Lists, And Suppliers In India Use IndiaMART Search Terms To Find Buyers And Peers.",
      },
      {
        q: "Why Does LeadGen AI Store The Source Of Every Field?",
        a: "Traceability Is One Of The Platform’s Core Principles. Knowing Where A Phone Number Or Email Came From Helps You Judge Its Reliability, Correct Mistakes And Answer A Prospect Honestly If They Ask How You Found Them.",
      },
      {
        q: "Will Automated Enrichment Undo The Corrections My Team Makes?",
        a: "No. Enrichment Never Overwrites A Field Someone Edited By Hand, And It Only Writes A Field When The New Value Is More Complete. That Way Records Improve Over Time Without Losing Your Team’s Knowledge.",
      },
      {
        q: "Who Is Responsible For The Emails Sent From The Platform?",
        a: "You Are. Campaigns Go Out Through Your Own Configured Email Transport, So Your Sending Reputation And Compliance Stay In Your Hands. The Platform Respects Sending Limits And Opt-Out Obligations And Logs Every Message Against Its Lead.",
      },
      {
        q: "What Is A Common Mistake When Starting Out?",
        a: "Running Vague, Broad Queries. Lead Quality Depends On How Clearly You Define Your Market, Category And Geography, So Start With One Specific Category In One Location, Review The Records, Then Widen.",
      },
    ],
    related: ["/how-it-works", "/platform", "/why-leadgen-ai", "/plans", "/data-sources"],
    cta: {
      heading: "See The Pipeline On Your Own Market",
      text: "Start With Three Free Queries And Judge The Records For Yourself.",
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
      "The Quickest Way To Reach LeadGen AI Is The Contact Form On This Page. Tell Us Who You Are, What You Are Trying To Do And What You Need From Us, And The Team Will Reply By Email.",
      "A Little Detail Up Front Saves A Round Of Back-And-Forth. The Guidance Below Explains What To Include For The Most Common Kinds Of Question, From Plan Choices To Data Handling And Policy Requests.",
    ],
    highlights: [
      "One Form For All Enquiries",
      "Replies Come By Email",
      "Specific Details Get Faster Answers",
    ],
    sections: [
      {
        heading: "What To Include In Your Message",
        paragraphs: [
          "The Most Useful Messages Describe The Situation Rather Than Just The Question. A Short Paragraph Covering The Points Below Usually Lets Us Answer In One Reply.",
        ],
        bullets: [
          "Your Name, Company And Work Email Address",
          "What You Sell And Who You Sell To (The Categories And Locations You Prospect)",
          "Which Sources Matter To You: Google Maps, LinkedIn Or IndiaMART",
          "Roughly How Many Queries You Expect To Run Each Month And How Many People Will Use The Workspace",
          "The Specific Question, Or The Decision You Are Trying To Make",
        ],
      },
      {
        heading: "Common Reasons People Get In Touch",
        paragraphs: [
          "Most Enquiries Fall Into A Few Groups. People Ask Us To Help Them Choose Between The Free, Growth And Scale Plans, Or To Check Whether The Data Sources Cover A Particular Market. Others Have Questions About Role-Based Access, Per-Org API Keys Or CSV Export, Or Want The Policy Documents For The LeadGen AI Application Itself.",
          "If You Already Know You Would Like To See The Product In Action, The Request Access Page Is The Better Route, Because It Collects The Details Needed To Plan A Walkthrough.",
        ],
      },
      {
        heading: "What Happens After You Send It",
        paragraphs: [
          "Your Message Goes To The LeadGen AI Team, Who Will Reply To The Email Address You Provide. We Use The Details Only To Respond To Your Enquiry, As Described In The Website Privacy Policy. If Your Question Needs Input From A Specialist (For Example On Plan Limits Or Data Handling), It May Take A Little Longer, And We Will Tell You.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I Use The Contact Form Or The Request Access Form?",
        a: "Use The Contact Form For Questions, Policy Requests And Anything General. Use Request Access When You Want A Guided Walkthrough Of The Product And Are Ready To Evaluate It.",
      },
      {
        q: "Can I Ask For The Privacy Policy That Covers The LeadGen AI Application?",
        a: "Yes. The Privacy Policy On This Website Covers The Marketing Site Only. Ask Through This Form For The Documents That Govern Your Use Of The Application.",
      },
      {
        q: "What Should I Avoid Putting In The Message?",
        a: "Please Don’t Send Passwords, API Keys Or Other Credentials. Describe The Issue Instead, And The Team Will Advise On Any Secure Next Step.",
      },
      {
        q: "How Will The Team Reply To My Message?",
        a: "Replies Come By Email To The Address You Enter In The Form. Use A Work Email You Check Regularly, And Look In Your Spam Folder If You Are Expecting A Reply And Haven’t Seen One.",
      },
      {
        q: "What Details Help You Recommend A Plan?",
        a: "Tell Us Which Sources Matter To You, Roughly How Many Queries You Expect To Run Each Month And How Many People Will Use The Workspace. Those Three Points Usually Decide Between Free, Growth And Scale.",
      },
      {
        q: "Can I Ask Whether The Data Sources Cover My Market?",
        a: "Yes. Describe What You Sell, The Categories You Prospect And The Locations You Cover. The Team Can Then Comment On How Google Maps, LinkedIn Or IndiaMART Are Likely To Fit Your Market.",
      },
      {
        q: "Why Might Some Answers Take Longer Than Others?",
        a: "Questions On Topics Such As Plan Limits Or Data Handling Sometimes Need Input From A Specialist. When That Happens, The Team Will Let You Know That The Reply May Take A Little Longer.",
      },
      {
        q: "How Are The Details I Send Through This Form Used?",
        a: "They Are Used Only To Respond To Your Enquiry, As Described In The Website Privacy Policy. If You Later Want Your Submission Deleted, You Can Ask Through This Same Form.",
      },
    ],
    related: ["/book-a-demo", "/faq", "/plans", "/security-and-data-handling", "/privacy-policy"],
    cta: {
      heading: "Prefer To See It First?",
      text: "Request Access And We Will Walk You Through The Pipeline On A Market You Care About.",
      label: "Request Access",
      href: "/book-a-demo",
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
      "LeadGen AI Works As One Pipeline: You Describe A Market, The Platform Gathers Matching Businesses From Google Maps, LinkedIn And IndiaMART, Enriches And Scores Each One, Audits Their Websites, Flags Opportunities And Lets You Reach The Best Leads Through Your Own Email Transport. Each Stage Writes To The Same Lead Record, So Nothing Has To Be Copied Between Tools.",
      "This Page Walks Through The Stages In Order And Explains What Happens At Each One, What You Control, And What The Record Looks Like By The Time It Reaches Your Pipeline.",
    ],
    highlights: [
      "Seven Stages, One Lead Record",
      "Jobs Keep Running After You Close The Tab",
      "Scores And Audits Explain Their Reasoning",
      "Outreach Goes Through Your Own Email",
    ],
    sections: [
      {
        heading: "Search: Describing The Market You Want",
        paragraphs: [
          "Everything Begins With A Query. For Map-Style Sources That Means A Category And A Location, Such As Architects In Kochi. For Directory Sources Such As IndiaMART It Can Be A Search Term That Matches How Suppliers Describe Themselves. The Same Query Fans Out To Every Source You Have Enabled, So You Describe The Market Once.",
          "The Clearer Your Query, The More Useful The List. Teams Often Start Narrow (One Category, One City), Check The Results, Then Widen.",
        ],
      },
      {
        heading: "Scrape: Gathering And Merging Listings",
        paragraphs: [
          "The Platform Collects Listings From Each Source And Normalises Them Into One Lead Record Per Business, De-Duplicating Across Sources. Each Record Carries The Business Name, Category And Full Postal Address; Website, Listed Phone Numbers And Public Email Addresses; Ratings, Review Counts And Listing-Completeness Signals; And The Source Each Field Came From.",
          "Long Jobs Run On A Worker Fleet, So A Large Scrape Continues After You Close The Browser Tab. Every Job Records What It Fetched And When, And Quotas Are Enforced Per Plan And Per Billing Cycle.",
        ],
      },
      {
        heading: "Enrich: Filling In Contact Details",
        paragraphs: [
          "New Leads Are Queued For Enrichment Automatically. The Platform Finds Each Business’s Website And Crawls The Pages That Normally Carry Contact Details (Usually The Contact And About Pages). It Then Matches The Results Against The Existing Record.",
        ],
        bullets: [
          "Business Emails Discovered On The Company’s Own Site",
          "Phone Numbers Normalised And Checked For A Plausible Format",
          "The Website And Its Contact And About Pages",
          "Social Profiles And Company Details",
        ],
      },
      {
        heading: "Score And Audit: Deciding Where To Focus",
        paragraphs: [
          "Each Lead Receives A Single 0–100 Score, With The Reasons Stored On The Record. The Score Looks At Four Things: How Complete The Record Is; Website Health And Whether The Business Is Credibly Online; Fit Against Your Stated Market, Category And Geography; And Signs That The Business Is Active And Trading. You Can Sort And Filter By Score, And Scores Recalculate When A Lead Is Re-Enriched.",
          "The SEO Website Audit Fetches A Lead’s Website And Checks It Against Rules Covering Technical Health, Content, Metadata, Structured Data And Performance. It Grades Each Area, Rolls The Grades Into An Overall Score, And Produces A Report With Ranked Findings, Plain-English Explanations And A Prioritised Fix List You Can Hand To The Prospect.",
        ],
      },
      {
        heading: "Detect And Reach Out: Turning Insight Into Contact",
        paragraphs: [
          "Opportunity Detection Flags Businesses With No Website, Sites That Don’t Resolve, Listings With No Reachable Contact Route And Audits In The Bottom Band. Each Flag Carries The Evidence Behind It.",
          "Leads You Want To Pursue Move Onto A Pipeline Board With Stages, Owners And Full Activity History. AI-Drafted Outreach Uses The Lead’s Own Enrichment And Audit Data, Campaigns Are Sent Through Your Configured Email Transport, And Every Message Is Logged Against Its Lead. Outreach Respects Sending Limits And Opt-Out Obligations, And You Stay In Control Of The List.",
        ],
      },
    ],
    steps: {
      heading: "The Pipeline In Six Steps",
      items: [
        { title: "Run A Query", text: "Enter A Category And Location, Or A Directory Search Term, And Choose The Sources To Use." },
        { title: "Let The Fleet Scrape", text: "Workers Gather Listings, Merge Duplicates And Record The Source Of Every Field." },
        { title: "Review Enriched Records", text: "Enrichment Adds Emails, Normalised Phone Numbers, Websites And Social Profiles Without Touching Your Manual Edits." },
        { title: "Prioritise By Score And Audit", text: "Sort By The 0–100 Score, Read The Stored Reasons And Open Audits For The Leads That Matter." },
        { title: "Act On Opportunity Flags", text: "Use Evidence-Backed Flags Such As A Missing Website Or A Weak Audit To Shape Your Pitch." },
        { title: "Move Leads Into The Pipeline And Contact Them", text: "Assign Owners, Draft Outreach With AI And Send Through Your Own Email Transport, With Every Message Logged." },
      ],
    },
    considerations: {
      heading: "Things To Keep In Mind",
      items: [
        "Available Sources And Features Depend On Your Plan; AI Scoring, Outreach And Audit Reports Are Part Of Growth.",
        "Enrichment Relies On What Businesses Publish On Their Own Sites, So Some Records Will Stay Incomplete.",
        "AI-Drafted Messages Are Drafts: Review Them For Accuracy And Tone Before Sending.",
        "Your Email Transport, Sending Volume And Opt-Out Handling Affect Deliverability And Compliance.",
      ],
    },
    example: {
      heading: "From Query To First Email",
      text: "Picture A Two-Person SEO Consultancy In Indore. It Queries For Physiotherapy Clinics In The City, Lets Enrichment Run Overnight, Then Filters For Leads Scoring In The Top Band Whose Audits Show Weak Metadata And Structured Data. It Moves Twelve Of Them Onto The Pipeline, Edits The AI Drafts To Reference Each Clinic’s Specific Findings And Sends Them Through Its Own Mailbox.",
    },
    faqs: [
      {
        q: "Do I Need To Keep The Browser Open While A Large Scrape Runs?",
        a: "No. Long Jobs Run On The Worker Fleet, So A Large Scrape Keeps Going After You Close The Tab, And The Job Record Shows What Was Fetched And When.",
      },
      {
        q: "What Happens To A Lead’s Score When Its Data Changes?",
        a: "Scores Recalculate When A Lead Is Re-Enriched, So A Record That Gains A Working Website Or Contact Details Can Move Up The List.",
      },
      {
        q: "Can I Skip Stages I Don’t Need?",
        a: "Yes. Many Teams Simply Scrape, Enrich And Export To CSV. Scoring, Audits And Outreach Are There When You Want Them, Subject To Your Plan.",
      },
      {
        q: "Where Do The AI-Drafted Messages Get Their Details From?",
        a: "From The Lead’s Own Record (Its Enrichment Data And, Where Available, Its Website Audit Findings) So Each Draft Refers To That Specific Business.",
      },
      {
        q: "How Should I Write My First Query?",
        a: "Start Narrow With One Category And One Location, Such As Architects In Kochi. For Directory Sources Like IndiaMART, Use A Search Term That Matches How Suppliers Describe Themselves. Check The Results, Then Widen Once You Know The List Is Useful.",
      },
      {
        q: "Why Do Some Leads Stay Incomplete After Enrichment?",
        a: "Enrichment Relies On What Businesses Publish On Their Own Websites. If A Business Has No Site, Or Its Site Has No Contact Details, There May Be Nothing To Add. Such Leads Can Still Be Useful, Especially When Flagged As An Opportunity.",
      },
      {
        q: "Which Areas Does The SEO Website Audit Check?",
        a: "It Checks Technical Health, Content, Metadata, Structured Data And Performance. Each Area Is Graded, The Grades Roll Up Into An Overall Score, And The Report Lists Ranked Findings With Plain-English Explanations And A Prioritised Fix List.",
      },
      {
        q: "Should I Send AI Drafts Without Editing Them?",
        a: "No. AI-Drafted Messages Are A Starting Point. Review Each One For Accuracy And Tone, And Add Specific References To The Prospect’s Findings Where It Helps, Before Sending It Through Your Own Email Transport.",
      },
    ],
    related: ["/platform", "/data-sources", "/services/ai-lead-scoring", "/services/seo-website-audit", "/services/ai-outreach-campaigns", "/why-leadgen-ai"],
    cta: {
      heading: "Run The Pipeline On Your Market",
      text: "Three Free Queries Are Enough To See Every Early Stage In Action.",
      label: "Start Free",
      href: "https://leadgeneration.oxo1.com/",
    },
  },
  {
    path: "/platform",
    title: "Platform Overview",
    h1: "The LeadGen AI Platform: Modules, Data Model And Infrastructure",
    metaTitle: "Platform Overview: Modules, Data Model, Fleet",
    metaDescription: "An overview of the LeadGen AI platform for sales and growth leaders: its modules, lead data model, worker fleet, role-based access, CSV export and API keys.",
    eyebrow: "Platform",
    intro: [
      "The LeadGen AI Platform Is A Set Of Connected Modules (Scraping, Enrichment, Scoring, SEO Audit, Opportunity Detection, CRM And Outreach) That All Read From And Write To A Single Lead Record. For A Sales Or Growth Leader, That Means One Source Of Truth For Prospect Data, With Clear Rules About Where Data Comes From, Who Can See It And How It Leaves The System.",
      "This Overview Covers The Modules, The Lead Data Model, The Worker Fleet That Runs Heavy Jobs, How Roles And Workspaces Separate Teams, And The Routes For Getting Data Out Through CSV Export And Per-Org API Keys.",
    ],
    highlights: [
      "Seven Modules On One Record",
      "Per-Field Source Traceability",
      "Distributed Worker Fleet For Big Jobs",
      "Role-Based, Multi-Tenant Workspaces",
    ],
    sections: [
      {
        heading: "The Modules And What Each One Owns",
        paragraphs: [
          "Each Module Has A Defined Job, And Together They Form The Pipeline From Discovery To Contact.",
        ],
        bullets: [
          "Multi-Source Scraping: One Query Fanned Out To Google Maps, LinkedIn And IndiaMART, Normalised And De-Duplicated.",
          "AI Contact Enrichment: Website Resolution, Contact-Page Crawling And Reconciliation With The Existing Record.",
          "AI Lead Scoring: A 0–100 Score Per Lead With Stored Reasons.",
          "SEO Website Audit: Graded Checks Across Technical Health, Content, Metadata, Structured Data And Performance.",
          "Business Opportunity Detection: Evidence-Backed Flags Such As No Website Or A Weak Audit.",
          "CRM Pipeline: Stages, Owners And Full Activity History.",
          "AI Outreach: Drafts Built From The Lead’s Data, Sent Through Your Configured Email Transport And Logged.",
        ],
      },
      {
        heading: "The Lead Record As The Data Model",
        paragraphs: [
          "Everything Is Built Around One Record Per Business. It Holds Identity And Location (Business Name, Category, Full Postal Address), Contact Routes (Website, Listed Phone Numbers, Public Email Addresses), Reputation And Listing Signals (Ratings, Review Counts, Listing Completeness), Enrichment Results (Emails From The Company’s Own Site, Normalised Phone Numbers, Contact And About Pages, Social Profiles, Company Details), The Score And Its Reasons, Audit Results, Opportunity Flags, Pipeline Stage And Owner, And The Activity History Including Every Message Sent.",
          "Importantly, The Record Also Stores The Source Each Field Came From. Enrichment Writes A Field Only When The New Value Is More Complete, And It Never Overwrites A Field A User Edited By Hand. So The Record Gets Better Over Time Without Wiping Out Your Team’s Corrections.",
        ],
      },
      {
        heading: "The Worker Fleet Behind Large Jobs",
        paragraphs: [
          "Scraping And Enrichment Can Involve Many Pages And Many Listings. LeadGen AI Runs Long Jobs On A Worker Fleet Rather Than In The Browser, So A Large Scrape Keeps Going After The Tab Is Closed. Every Job Records What It Fetched And When, Which Helps When You Need To Explain Where A List Came From.",
          "Quotas Are Enforced Per Plan And Per Billing Cycle. The Scale Plan Adds A Distributed Scrape Fleet For High-Volume Operations.",
        ],
      },
      {
        heading: "Roles, Workspaces And Team Access",
        paragraphs: [
          "The Platform Is Multi-Tenant And Role-Based. Each Organisation Works In Its Own Workspace, And Role-Based Access Means Each Team Sees The Records It Should. The Growth Plan Includes Full Team Access With Seven Role Modules, While The Free Plan Is For A Single Admin User.",
          "For Managers, This Makes It Practical To Give Researchers, Sellers And Agency Account Leads Different Views Of The Same Pipeline Without Sharing A Single Login.",
        ],
      },
      {
        heading: "Getting Data Out: CSV Export And API Keys",
        paragraphs: [
          "Every Plan Includes CSV Export From The Lead Dashboard, Which Is The Simplest Way To Move Records Into Another System Or Share A List. The Scale Plan Adds Per-Org API Keys For Teams That Want Programmatic Access From Their Own Tools. LeadGen AI Does Not Publish Named Integrations With Third-Party CRMs, So Plan Around CSV Export, API Keys And Your Email Transport.",
        ],
      },
    ],
    considerations: {
      heading: "Planning Considerations For Leaders",
      items: [
        "Decide Early Who Needs Which Role, So The Workspace Matches How Your Team Actually Splits The Work.",
        "If You Rely On Another CRM, Plan How CSV Exports Or API Access Will Keep Both Systems Aligned.",
        "Monthly Query Quotas On Growth Mean High-Volume Teams Should Estimate Usage Before Choosing A Plan.",
        "Per-Org API Keys And The Distributed Fleet Are Scale Features, So Teams Planning Lots Of Integrations Should Look At That Tier.",
        "Traceability Helps With Internal Review, But You Still Need Your Own Policy On How Prospect Data Is Used.",
      ],
    },
    example: {
      heading: "Splitting Work Across A Growing Team",
      text: "Consider A Twelve-Person B2B Services Firm In Hyderabad. Two Researchers Run Queries And Clean Records, Six Sellers Each Own A Pipeline Stage For Their Territory, And A Manager Reviews Scores And Activity History Weekly. Role-Based Access Keeps Each Seller Focused On Their Own Leads, While CSV Exports Feed The Finance Team’s Forecasting Spreadsheet.",
    },
    faqs: [
      {
        q: "Which Module Should A New Team Switch On First?",
        a: "Most Start With Scraping, Enrichment And The Lead Dashboard, Check Record Quality, Then Add Scoring And Audits Once They Know Which Markets To Focus On.",
      },
      {
        q: "Can Two Teams Share One Workspace Without Seeing Each Other’s Leads?",
        a: "Role-Based Access Is Designed So Each Team Sees The Records It Should. Plan Your Roles To Reflect Those Boundaries When You Set Up The Workspace.",
      },
      {
        q: "Is There An API On Every Plan?",
        a: "No. Per-Org API Keys Are Listed On The Scale Plan. Free And Growth Include CSV Export From The Lead Dashboard.",
      },
      {
        q: "Does LeadGen AI Have Built-In Integrations With Other CRMs?",
        a: "LeadGen AI Does Not Publish Named Integrations With Third-Party CRMs. Teams Usually Move Records With CSV Export Or, On The Scale Plan, Connect Their Own Tools Through Per-Org API Keys, So Plan Your Sync Process Around Those Routes.",
      },
      {
        q: "What Is Stored On A Single Lead Record?",
        a: "Identity And Location, Contact Routes, Ratings And Listing Signals, Enrichment Results, The Score And Its Reasons, Audit Results, Opportunity Flags, Pipeline Stage And Owner, And The Full Activity History. It Also Records The Source Of Each Field.",
      },
      {
        q: "Why Do Large Jobs Run On A Worker Fleet?",
        a: "Scraping And Enrichment Can Involve Many Pages And Listings, So Long Jobs Run On Workers Rather Than In The Browser. A Large Scrape Keeps Going After You Close The Tab, And Each Job Records What It Fetched And When.",
      },
      {
        q: "How Should A Manager Plan Roles Before Inviting The Team?",
        a: "Map Roles To How The Work Is Actually Split, Such As Researchers Who Run Queries, Sellers Who Own Pipeline Stages And Managers Who Review Scores. Growth Includes Full Team Access With Seven Role Modules, While Free Has A Single Admin User.",
      },
      {
        q: "When Does A Team Need The Scale Plan’s Infrastructure?",
        a: "When Monthly Query Volume Regularly Goes Beyond Growth’s 50 Queries, Or The Team Needs LinkedIn And IndiaMART Sources Or Programmatic Access. Scale Adds Unlimited Queries, A Distributed Scrape Fleet And Per-Org API Keys.",
      },
    ],
    related: ["/how-it-works", "/security-and-data-handling", "/services/role-based-team-access", "/services/api-access", "/services/distributed-scrape-fleet", "/plans"],
    cta: {
      heading: "Walk Through The Platform With Us",
      text: "Request Access To See The Modules, Roles And Data Model On A Live Workspace.",
      label: "Request Access",
      href: "/book-a-demo",
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
      "LeadGen AI Offers Three Plans: Free For Small Teams Just Getting Started, Growth For Growing Teams That Need Deeper Insights And Automation, And Scale For High-Volume Operations That Demand Dedicated Infrastructure. The Right Choice Depends Mainly On How Many Queries You Run, How Many People Need Access And Which Sources You Need.",
      "This Page Sets Out What Each Plan Includes And Helps You Choose By Situation. Prices Are Not Listed Here; Request Access Or Get In Touch For Current Pricing. The Live Site States “No Hidden Fees, Cancel Anytime”, And Shows A “Save 20%” Option On Annual Billing.",
    ],
    highlights: [
      "3 Free Queries Included",
      "Growth Is The Most Popular Plan",
      "No Hidden Fees, Cancel Anytime",
      "Save 20% With Annual Billing",
    ],
    sections: [
      {
        heading: "Free: For Small Teams Just Getting Started",
        paragraphs: [
          "The Free Plan Is A Way To Test LeadGen AI On Your Own Market Before You Commit. It Is Designed For One Person Evaluating Whether The Records Suit Their Prospecting.",
        ],
        bullets: [
          "3 Scrape Queries",
          "Website Enrichment",
          "Lead Dashboard And CSV Export",
          "1 Admin User",
        ],
      },
      {
        heading: "Growth: For Teams That Need Deeper Insights And Automation",
        paragraphs: [
          "Growth Is Marked As The Most Popular Plan. It Adds The Intelligence And Outreach Layers On Top Of The Basics, And Opens The Workspace To The Whole Team.",
        ],
        bullets: [
          "50 Scrape Queries Per Month",
          "AI Lead Scoring And Outreach",
          "Full Team Access With 7 Role Modules",
          "SEO And Website-Build Reports",
        ],
      },
      {
        heading: "Scale: For High-Volume Operations With Dedicated Infrastructure",
        paragraphs: [
          "Scale Removes Query Limits And Adds The Infrastructure, Sources And Support That Large Teams, Or Teams With Many Integrations, Need.",
        ],
        bullets: [
          "Unlimited Queries",
          "A Distributed Scrape Fleet",
          "Multiple Sources, Including LinkedIn And IndiaMART",
          "Per-Org API Keys",
          "Priority Support And SLA",
          "A Dedicated Success Manager",
        ],
      },
      {
        heading: "Choosing A Plan By Situation",
        paragraphs: [
          "Rather Than Comparing Feature Lists Line By Line, Start From Your Situation.",
        ],
        bullets: [
          "You Are Exploring On Your Own And Want To See Real Records: Start On Free And Use Your 3 Queries On Your Most Important Markets.",
          "You Are A Small Agency Or Sales Team That Prospects Every Week And Wants To Prioritise And Contact Leads From One Place: Growth, For Scoring, Outreach And Audit Reports.",
          "You Sell To Agencies’ Clients And Need Client-Ready Audit Output: Growth, Because SEO And Website-Build Reports Are Included.",
          "You Need LinkedIn Or IndiaMART Alongside Google Maps, Programmatic Access Or Very High Volume: Scale.",
          "You Want A Named Contact And An SLA: Scale, Which Includes Priority Support And A Dedicated Success Manager.",
        ],
      },
      {
        heading: "Estimating Your Query Needs",
        paragraphs: [
          "A Query Is One Search, For Example A Category In A Location. Teams Often Estimate Usage By Multiplying The Categories They Target By The Locations They Cover, Then By How Often They Refresh. If That Number Regularly Exceeds 50 A Month, Scale’s Unlimited Queries Are Worth Discussing. Quotas Are Enforced Per Billing Cycle.",
        ],
      },
    ],
    steps: {
      heading: "A Simple Way To Decide",
      items: [
        { title: "List Your Target Markets", text: "Write Down The Categories And Locations You Want To Prospect." },
        { title: "Check Your Sources", text: "Decide Whether Google Maps Is Enough Or Whether You Need LinkedIn Or IndiaMART." },
        { title: "Count Your Users", text: "One Person Can Start On Free; A Team Needs Growth Or Scale." },
        { title: "Estimate Monthly Queries", text: "Compare Your Estimate With Growth’s 50 Queries Per Month." },
        { title: "Test On Free, Then Upgrade", text: "Use The 3 Free Queries To Confirm Record Quality Before Choosing A Paid Tier." },
      ],
    },
    considerations: {
      heading: "Before You Choose",
      items: [
        "AI Scoring And Outreach Are Not Part Of Free, So Judge Free On Record Quality Rather Than The Full Workflow.",
        "Growth’s 50 Queries Are Per Month; Heavy Refresh Schedules Can Use Them Faster Than Expected.",
        "LinkedIn And IndiaMART Are Listed As Scale Sources, Which Matters If Your Buyers Live Mainly On Those Platforms.",
        "Annual Billing Offers Savings, But Monthly Billing May Suit You While You Are Still Testing Fit.",
      ],
    },
    example: {
      heading: "Two Teams, Two Choices",
      text: "Suppose A Solo Consultant In Pune Targets Three Categories In One City And Refreshes Quarterly; Free Is Enough To Start And Growth Covers The Year Comfortably. A Distributor In Ahmedabad That Wants IndiaMART Search Terms, Many Cities And An API Link To Its Order System Would Look Straight At Scale.",
    },
    faqs: [
      {
        q: "Why Aren’t Prices Shown On This Page?",
        a: "LeadGen AI Does Not Publish Prices On Its Public Site. Request Access Or Contact The Team For Current Pricing For Growth And Scale.",
      },
      {
        q: "How Does The Annual Billing Saving Work?",
        a: "The Live Site Shows A “Save 20%” Option For Annual Billing. Confirm The Details For Your Plan With The Team When You Request Access.",
      },
      {
        q: "Can I Cancel A Paid Plan Later?",
        a: "The Live Site States “No Hidden Fees, Cancel Anytime.” Check The Terms That Apply To Your Account For Specifics.",
      },
      {
        q: "Which Plan Includes Client-Ready SEO Reports?",
        a: "Growth Includes SEO And Website-Build Reports, And Scale Builds On Growth For Higher-Volume Teams.",
      },
      {
        q: "How Do I Estimate How Many Queries I Need Each Month?",
        a: "Multiply The Categories You Target By The Locations You Cover, Then By How Often You Refresh Each List. If The Total Regularly Exceeds 50 A Month, Growth’s Quota Will Feel Tight And Scale’s Unlimited Queries Are Worth Discussing.",
      },
      {
        q: "What Should I Judge During The Free Plan?",
        a: "Focus On Record Quality For Your Market. Free Includes 3 Scrape Queries, Website Enrichment, The Lead Dashboard And CSV Export, But Not AI Scoring Or Outreach, So Use It To Check Whether The Listings And Contact Details Suit Your Prospecting.",
      },
      {
        q: "Which Plan Do I Need For LinkedIn And IndiaMART?",
        a: "Multiple Sources, Including LinkedIn And IndiaMART, Are Listed On The Scale Plan. If Your Buyers Mainly Appear On Those Platforms Rather Than Google Maps, Factor That In When Choosing A Tier.",
      },
      {
        q: "What Extra Support Comes With Scale?",
        a: "Scale Includes Priority Support With An SLA And A Dedicated Success Manager. It Suits Teams That Want A Named Contact Alongside Unlimited Queries, A Distributed Scrape Fleet And Per-Org API Keys.",
      },
    ],
    related: ["/book-a-demo", "/platform", "/faq", "/services/seo-website-audit", "/services/api-access"],
    cta: {
      heading: "Not Sure Which Plan Fits?",
      text: "Request Access And We Will Help You Match A Plan To Your Markets And Team Size.",
      label: "Request Access",
      href: "/book-a-demo",
    },
  },
  {
    path: "/book-a-demo",
    title: "Request Access",
    h1: "Request Access And A LeadGen AI Walkthrough",
    metaTitle: "Request Access: Book a LeadGen AI Walkthrough",
    metaDescription: "Request access to LeadGen AI and arrange a walkthrough of scraping, enrichment, scoring, audits and outreach on a market that matters to your team.",
    eyebrow: "Request Access",
    intro: [
      "Request Access Using The Form On This Page And The LeadGen AI Team Will Arrange A Walkthrough Of The Platform. The Session Shows The Full Pipeline (Search, Scraping, Enrichment, Scoring, Audits, Opportunity Flags And Outreach) Ideally On A Market You Actually Sell Into.",
      "A Walkthrough Is Most Useful When We Know A Little About Your Team Beforehand. The Notes Below Explain What The Session Covers And How To Prepare So You Leave With A Clear View Of Fit.",
    ],
    highlights: [
      "Walkthrough On Your Own Market",
      "Covers The Full Pipeline",
      "Helps You Pick The Right Plan",
    ],
    sections: [
      {
        heading: "What The Walkthrough Covers",
        paragraphs: [
          "We Shape The Session Around Your Situation, But Most Walkthroughs Cover The Same Ground.",
        ],
        bullets: [
          "Running A Query Across Google Maps, LinkedIn And IndiaMART, And How Results Are Merged Into One Record Per Business",
          "What Enrichment Adds And How Source Traceability Works At Field Level",
          "How The 0–100 Score And Its Stored Reasons Help You Prioritise",
          "An SEO Website Audit Report And The Opportunity Flags It Can Trigger",
          "The Pipeline Board, AI-Drafted Outreach And Sending Through Your Own Email Transport",
          "Roles, Workspaces, CSV Export And Per-Org API Keys",
          "Which Plan Fits Your Volume, Sources And Team Size",
        ],
      },
      {
        heading: "How To Prepare",
        paragraphs: [
          "A Few Minutes Of Preparation Makes The Session Much More Useful. When You Fill In The Form, Include As Much Of The Following As You Can.",
        ],
        bullets: [
          "Two Or Three Categories And Locations You Prospect Today",
          "The Sources That Matter Most For Your Buyers",
          "How You Prospect Now: Spreadsheets, A CRM, Outsourced Lists, And What Frustrates You About It",
          "How Many People Would Use The Workspace And In What Roles",
          "Any Review Requirements, Such As Data Handling Questions From IT",
        ],
      },
      {
        heading: "After The Walkthrough",
        paragraphs: [
          "You Can Start On The Free Plan With 3 Queries Straight Away, Or Discuss Growth Or Scale If The Walkthrough Shows You Need Scoring, Outreach, More Sources Or Higher Volume. Pricing Is Shared Directly Rather Than Published.",
        ],
      },
    ],
    faqs: [
      {
        q: "Who From My Team Should Join The Walkthrough?",
        a: "Ideally The Person Who Owns Prospecting Day To Day And Whoever Decides On The Plan. If IT Will Review The Tool, Invite Them Too Or Send Their Questions In Advance.",
      },
      {
        q: "Can The Walkthrough Use A Market I Choose?",
        a: "That Is The Aim. Name The Categories And Locations In The Form So The Session Reflects Your Real Prospecting.",
      },
      {
        q: "Do I Have To Request Access To Use The Free Plan?",
        a: "No. You Can Start Free On The Live Site; Requesting Access Is For Teams That Want A Guided Evaluation.",
      },
      {
        q: "What Will The Walkthrough Show?",
        a: "Most Sessions Cover Running A Query, How Results Merge Into One Record, What Enrichment Adds, The 0–100 Score With Its Reasons, An SEO Audit Report, Opportunity Flags, The Pipeline Board And AI-Drafted Outreach, Plus Roles, CSV Export And API Keys.",
      },
      {
        q: "How Should I Prepare Before The Session?",
        a: "Note Two Or Three Categories And Locations You Prospect Today, The Sources That Matter For Your Buyers And How You Prospect Now. Mention What Frustrates You About Your Current Process So The Session Can Focus On It.",
      },
      {
        q: "Can IT Raise Data Handling Questions As Part Of The Request?",
        a: "Yes. Add Any Review Requirements To The Form. The Team Can Then Cover Workspaces, Roles And Traceability During The Session, And Point You To The Documentation That Governs The LeadGen AI Application If Your Review Needs It.",
      },
      {
        q: "Will I Get Pricing During Or After The Walkthrough?",
        a: "Yes. Pricing Is Shared Directly Rather Than Published On The Site. After The Session You Can Start On Free Straight Away, Or Discuss Growth Or Scale If You Need Scoring, Outreach, More Sources Or Higher Volume.",
      },
      {
        q: "What Should I Share About My Team Size?",
        a: "Say How Many People Would Use The Workspace And In What Roles, Such As Researchers, Sellers Or Managers. This Helps The Team Show Role-Based Access Properly And Recommend A Plan That Fits.",
      },
    ],
    related: ["/how-it-works", "/plans", "/platform", "/contact", "/security-and-data-handling"],
    cta: {
      heading: "Rather Explore On Your Own?",
      text: "Start With Three Free Queries And Come Back When You Want A Guided Tour.",
      label: "Start Free",
      href: "https://leadgeneration.oxo1.com/",
    },
    form: "demo",
  },
  {
    path: "/faq",
    title: "FAQ",
    h1: "LeadGen AI Frequently Asked Questions",
    metaTitle: "LeadGen AI FAQ: Product, Data, Plans",
    metaDescription: "Answers to common questions about LeadGen AI: data sources, enrichment, lead scoring, SEO audits, outreach, team access and the Free, Growth and Scale plans.",
    eyebrow: "FAQ",
    intro: [
      "This Page Answers The Questions People Most Often Ask About LeadGen AI, From Where The Data Comes From To How Scoring, Audits, Outreach And Plans Work. If Your Question Is Not Here, The Contact Page Is The Quickest Way To Ask It.",
      "The Answers Describe What The Platform Does Today. Where A Topic Depends On Your Own Obligations, Such As Email Compliance, We Point To General Guidance And Suggest Checking Current Rules For Your Market.",
    ],
    highlights: [
      "Product And Data Questions",
      "Scoring, Audit And Outreach Answers",
      "Plan And Access Questions",
    ],
    sections: [
      {
        heading: "Finding The Right Answer Quickly",
        paragraphs: [
          "The Questions Below Run Roughly From Data, To Scoring And Audits, To Outreach And Plans. For Deeper Explanations, How It Works Walks Through The Pipeline Stage By Stage, Data Sources Covers Google Maps, LinkedIn And IndiaMART In Detail, And Plans Compares The Three Tiers.",
        ],
      },
      {
        heading: "How These Answers Are Kept Accurate",
        paragraphs: [
          "Every Product Statement On This Page Reflects What The Live LeadGen AI Platform Describes About Itself. We Do Not Publish Prices, So Plan Questions Focus On What Each Tier Includes Rather Than What It Costs. If Something Here Seems To Differ From What You See In The Application, Tell Us Through The Contact Page So We Can Check And Correct It.",
        ],
      },
      {
        heading: "If You Are Evaluating For A Team",
        paragraphs: [
          "Reviewers From IT Or Operations Usually Want The Security & Data Handling Page, Which Sets Out Role-Based Access, Multi-Tenant Workspaces, Traceability And Manual-Edit Protection. Sales And Compliance Leads Will Find Practical Guidance On Responsible Prospecting.",
        ],
      },
    ],
    faqs: [
      {
        q: "What Kinds Of Businesses Can I Find With LeadGen AI?",
        a: "Any Business That Appears In Public Listings On Google Maps, LinkedIn Or IndiaMART. You Search By Category And Location, Or By A Directory Search Term.",
      },
      {
        q: "What Information Comes With Each Lead?",
        a: "Business Name, Category And Full Postal Address; Website, Listed Phone Numbers And Public Emails; Ratings, Review Counts And Listing-Completeness Signals; And The Source Of Each Field, Plus Whatever Enrichment Adds.",
      },
      {
        q: "Will I Get Duplicate Records When A Business Is Listed On Several Sources?",
        a: "No. Results Are Normalised Into One Lead Record Per Business And De-Duplicated Across Sources.",
      },
      {
        q: "Where Do Enriched Email Addresses Come From?",
        a: "From The Business’s Own Website. Enrichment Resolves The Site, Crawls The Pages That Normally Carry Contact Details And Records Where Each Value Came From.",
      },
      {
        q: "If I Correct A Lead’s Details By Hand, Will Enrichment Change Them Back?",
        a: "No. Enrichment Never Overwrites A Field You Edited By Hand, And It Writes A Field Only When The New Value Is More Complete.",
      },
      {
        q: "What Does The 0–100 Lead Score Take Into Account?",
        a: "Record Completeness, Website Health And Whether The Business Is Credibly Online, Fit Against Your Stated Market, Category And Geography, And Signals Of An Active, Operating Business. The Reasons Are Stored On The Record.",
      },
      {
        q: "Which Email Account Sends My Outreach?",
        a: "Your Own. Campaigns Go Out Through The Email Transport You Configure, And Every Message Is Logged Against Its Lead.",
      },
      {
        q: "Can I Export My Leads?",
        a: "Yes. CSV Export From The Lead Dashboard Is Included On Every Plan, And The Scale Plan Adds Per-Org API Keys.",
      },
    ],
    related: ["/how-it-works", "/data-sources", "/plans", "/security-and-data-handling", "/responsible-prospecting", "/contact"],
    cta: {
      heading: "Still Have A Question?",
      text: "Send Us The Details And The Team Will Reply By Email.",
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
      "Teams Choose LeadGen AI Because It Replaces A Patchwork Of Scrapers, Spreadsheets And Email Tools With A Single Pipeline. Every Lead Is Traceable, Every Score Is Explained, And Every Pitch Can Be Based On Real Facts About The Prospect’s Business. The Difference Comes Less From Any Single Feature Than From How The Stages Connect.",
      "This Page Compares That Approach With The Common Alternatives (Manual Research, Bought Lists And Stitched-Together Tools) And Explains The Four Ideas That Set LeadGen AI Apart.",
    ],
    highlights: [
      "Single Pipeline, No Copy-Paste",
      "Traceable Data At Field Level",
      "Scores With Stored Reasons",
      "Audit-Led, Evidence-Based Outreach",
    ],
    sections: [
      {
        heading: "A Single Pipeline Instead Of A Tool Chain",
        paragraphs: [
          "Many Teams Prospect With One Tool To Scrape, Another To Find Emails, A Spreadsheet To Sort, A CRM To Track And A Mail Client To Send. Each Hand-Off Loses Context And Adds Copy Errors. In LeadGen AI, Scraping, Enrichment, Scoring, Audits, Opportunity Detection, The Pipeline Board And Outreach All Work On The Same Lead Record.",
          "Because The Record Stays In One Place, A Lead’s History Stays Attached To It: Where It Came From, What Enrichment Found, How It Scored, What The Audit Said And Every Message Sent.",
        ],
      },
      {
        heading: "Traceable Data You Can Defend",
        paragraphs: [
          "Bought Lists Rarely Tell You Where A Phone Number Or Email Came From. LeadGen AI Stores The Source Each Field Came From, And Every Job Records What It Fetched And When. Enrichment Reads Only The Sources You Asked For.",
          "That Matters When A Prospect Asks How You Found Them, When A Manager Questions List Quality, Or When You Need To Correct A Record. Manual Corrections Are Protected Too: Enrichment Never Overwrites A Field You Edited By Hand.",
        ],
      },
      {
        heading: "Scoring Based On Evidence, Not Guesswork",
        paragraphs: [
          "Prioritising By Gut Feel Or By Alphabetical Order Wastes Effort. The LeadGen AI Score Is A Single 0–100 Number Per Lead, Built From How Complete The Record Is, Website Health And Credible Online Presence, Fit Against Your Stated Market, Category And Geography, And Signs That The Business Is Active And Trading.",
          "The Reasons Are Stored On The Record, So The Score Can Be Challenged And Understood Rather Than Taken On Trust. Scores Recalculate When A Lead Is Re-Enriched, Keeping Priorities Current.",
        ],
      },
      {
        heading: "Outreach That Starts From The Prospect’s Situation",
        paragraphs: [
          "Generic Cold Emails Tend To Be Ignored. LeadGen AI Gives You Something Specific To Say. The SEO Audit Grades A Prospect’s Website Across Technical Health, Content, Metadata, Structured Data And Performance, And Produces A Prioritised Fix List You Can Hand To Them. Opportunity Detection Flags Missing Websites, Non-Resolving Sites, Unreachable Listings And Weak Audits, Each With Evidence.",
          "AI-Drafted Outreach Then Uses The Lead’s Own Enrichment And Audit Data, So A First Message Can Refer To Something Real About The Business. You Send Through Your Own Email Transport, Within Sending Limits And Opt-Out Obligations.",
        ],
      },
      {
        heading: "How It Compares With The Alternatives",
        paragraphs: [
          "Each Approach Has Its Place; The Question Is Which Trade-Offs Suit Your Team.",
        ],
        bullets: [
          "Manual Research: Thorough For A Handful Of Accounts, But Slow To Scale And Hard To Keep Consistent.",
          "Bought Lists: Fast To Obtain, But Often Stale, Opaque About Sources And Shared With Competitors.",
          "Stitched-Together Tools: Flexible, But Context Is Lost Between Steps And Records Drift Out Of Sync.",
          "LeadGen AI: One Record Per Business Across Sources, With Enrichment, Scoring, Audit And Outreach Attached.",
        ],
      },
    ],
    considerations: {
      heading: "When LeadGen AI May Not Be The Right Fit",
      items: [
        "If Your Buyers Are Rarely Listed On Google Maps, LinkedIn Or IndiaMART, The Source Coverage May Be Limited For You.",
        "If You Rely On Deep Integrations With A Specific CRM, Note That LeadGen AI Offers CSV Export And Per-Org API Keys Rather Than Named Integrations.",
        "Teams That Only Need A One-Off List May Not Use The Scoring, Audit And Outreach Layers Enough To Justify A Paid Plan.",
        "Evidence-Based Outreach Still Needs Human Review; AI Drafts Are A Starting Point.",
      ],
    },
    example: {
      heading: "Replacing A Spreadsheet Workflow",
      text: "Imagine A Web Studio In Coimbatore Whose Founder Spends Evenings Copying Listings Into A Spreadsheet, Checking Websites By Hand And Writing Emails One By One. With LeadGen AI, The Same Founder Runs A Query For Boutique Hotels, Lets Enrichment And Audits Run, Filters For Leads Flagged With No Website Or A Weak Audit, And Sends Drafts That Cite Each Hotel’s Specific Gaps.",
    },
    faqs: [
      {
        q: "What Makes LeadGen AI Different From Buying A Lead List?",
        a: "You Build The List From Live Public Listings For The Exact Market You Define, And Every Field Records Its Source. A Bought List Is Fixed At The Moment It Was Put Together And Rarely Shows Where Its Data Came From.",
      },
      {
        q: "Does Evidence-Based Outreach Really Need An Audit For Every Lead?",
        a: "Not Always. Audits Are Most Useful When You Sell Web, SEO Or Digital Services. Other Teams May Lean On The Score, Enrichment Data And Opportunity Flags Instead.",
      },
      {
        q: "Can I Keep Using My Existing CRM Alongside LeadGen AI?",
        a: "Yes. Many Teams Prospect And Qualify In LeadGen AI And Move Chosen Leads Into Another System Via CSV Export, Or Via Per-Org API Keys On The Scale Plan.",
      },
      {
        q: "When Might LeadGen AI Not Be The Right Fit?",
        a: "If Your Buyers Rarely Appear On Google Maps, LinkedIn Or IndiaMART, Source Coverage May Be Limited. Teams That Only Need A One-Off List, Or Depend On Deep Named CRM Integrations, May Also Find Another Approach Suits Them Better.",
      },
      {
        q: "How Does A Single Pipeline Reduce Errors?",
        a: "Every Stage Works On The Same Lead Record, So Nothing Is Copied Between A Scraper, A Spreadsheet, A CRM And A Mail Client. That Removes Copy Errors And Keeps Each Lead’s History, Score, Audit And Messages Attached To It.",
      },
      {
        q: "Can A Lead Score Be Questioned By My Team?",
        a: "Yes. The Reasons Behind Each 0–100 Score Are Stored On The Record, So Sellers And Managers Can See Why A Lead Ranks Where It Does And Challenge It. Scores Also Recalculate When A Lead Is Re-Enriched.",
      },
      {
        q: "How Is This Better Than Manual Research?",
        a: "Manual Research Is Thorough For A Handful Of Accounts But Slow To Scale And Hard To Keep Consistent. LeadGen AI Applies The Same Gathering, Enrichment And Scoring To Every Lead, Leaving You Time To Review The Ones That Matter.",
      },
      {
        q: "What Gives An Outreach Message Real Substance?",
        a: "Specific Evidence About The Prospect, Such As Audit Findings Or An Opportunity Flag Like A Missing Website. AI Drafts Use The Lead’s Own Enrichment And Audit Data, So A First Message Can Refer To Something Real, Though It Still Needs Human Review.",
      },
    ],
    related: ["/how-it-works", "/about", "/services/source-traceability", "/services/ai-lead-scoring", "/services/business-opportunity-detection", "/plans"],
    cta: {
      heading: "Judge The Difference On Real Records",
      text: "Request Access And Compare LeadGen AI With How You Prospect Today.",
      label: "Request Access",
      href: "/book-a-demo",
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
      "LeadGen AI Draws Its Leads From Three Public Sources (Google Maps, LinkedIn And IndiaMART) And Turns Their Listings Into One Normalised, De-Duplicated Record Per Business. A Single Query Fans Out To Each Enabled Source, So You Describe Your Market Once And Get A Merged List Back.",
      "This Page Explains What Each Source Is Good For, Which Fields A Lead Carries, How Normalisation And De-Duplication Work, And How Traceability Lets You See Where Every Value Came From.",
    ],
    highlights: [
      "Three Sources, One Query",
      "One Record Per Business",
      "Source Recorded For Every Field",
      "Jobs Logged With What And When",
    ],
    sections: [
      {
        heading: "Google Maps: Local And Location-Led Markets",
        paragraphs: [
          "Google Maps Is The Natural Source For Businesses That Serve Customers In A Place, Such As Clinics, Restaurants, Contractors, Retailers, Studios And Professional Firms. A Query Is Typically A Category And A Location. Listings Often Carry A Website, Phone Number, Address, Ratings And Review Counts, And Listing-Completeness Signals Help Show How Actively A Business Manages Its Presence.",
        ],
      },
      {
        heading: "LinkedIn: Company Context For B2B Selling",
        paragraphs: [
          "LinkedIn Adds Company Context That Is Especially Useful For B2B Prospecting, Where Understanding The Organisation Matters As Much As Finding A Phone Number. It Is Listed Among The Multiple Sources Available On The Scale Plan. As With Any Professional Network, Use It Within The Platform’s Terms And With Care For How You Approach People.",
        ],
      },
      {
        heading: "IndiaMART: Suppliers And B2B Sellers In India",
        paragraphs: [
          "IndiaMART Is A Large B2B Directory For Indian Suppliers, Manufacturers And Traders. Queries Here Work Best As Directory Search Terms That Match How Suppliers Describe Their Products. It Suits Distributors Looking For Partners, Service Providers Selling To MSMEs And Anyone Mapping A Supply Category. IndiaMART Is Also Listed Among The Scale Plan’s Sources.",
        ],
      },
      {
        heading: "Normalisation And De-Duplication",
        paragraphs: [
          "Different Sources Describe The Same Business In Different Ways. LeadGen AI Normalises Results Into A Consistent Lead Record And De-Duplicates Across Sources, So A Business Listed On Google Maps And IndiaMART Appears Once Rather Than Twice.",
          "Each Record Carries The Business Name, Category And Full Postal Address; Website, Listed Phone Numbers And Public Email Addresses; Ratings, Review Counts And Listing-Completeness Signals; And The Source Each Field Came From. Enrichment Then Builds On That Base From The Business’s Own Website.",
        ],
      },
      {
        heading: "Writing Queries That Return Useful Lists",
        paragraphs: [
          "The Quality Of A Source List Depends Heavily On The Query. Teams Often Find That Specific Categories Work Better Than Broad Ones (“Orthodontist” Rather Than “Healthcare”), And That A City Or District Returns A More Manageable List Than A Whole State. For Directories, Try The Words Suppliers Actually Use In Their Product Titles, And Run A Couple Of Variants To See Which Brings Back The Most Relevant Businesses.",
          "It Also Helps To Review A Sample Before Running Many Queries. Check Whether The Categories Match What You Expected, Whether Listings Carry Websites And Phone Numbers, And How Much Enrichment Will Need To Fill In.",
        ],
      },
      {
        heading: "Traceability, Jobs And Quotas",
        paragraphs: [
          "Because Every Field Records Its Source, You Can Always Answer The Question “Where Did This Come From?”. Every Job Records What It Fetched And When. Long Jobs Run On A Worker Fleet And Keep Going After You Close The Tab, And Quotas Are Enforced Per Plan And Per Billing Cycle.",
        ],
      },
    ],
    steps: {
      heading: "From Query To Merged List",
      items: [
        { title: "Choose Your Sources", text: "Enable The Sources Your Plan Includes And That Match Where Your Buyers Are Listed." },
        { title: "Write The Query", text: "Use A Category And Location For Map-Style Sources, Or A Search Term For Directories." },
        { title: "Let The Job Run", text: "Workers Gather Listings In The Background And Log What They Fetch." },
        { title: "Review The Merged Records", text: "Check The De-Duplicated List And The Per-Field Sources Before Enrichment Fills Gaps." },
      ],
    },
    considerations: {
      heading: "Limits Of Public Listing Data",
      items: [
        "Listings Are Only As Current As The Business Keeps Them; Some Will Be Outdated Or Incomplete.",
        "Coverage Varies By Market: Some Categories And Regions Are Listed More Thoroughly Than Others.",
        "LinkedIn And IndiaMART Are Listed As Scale-Plan Sources, So Check What Your Plan Includes.",
        "Public Availability Does Not Remove Your Obligations; Follow Each Platform’s Terms And Applicable Law.",
      ],
    },
    example: {
      heading: "Combining Two Sources",
      text: "Suppose A Packaging Supplier In Ludhiana Wants Food Manufacturers In Punjab. It Runs A Google Maps Query By Category And Location And An IndiaMART Search Term For The Same Products. Businesses Found On Both Appear Once, With Each Field Showing Whether It Came From The Map Listing Or The Directory.",
    },
    faqs: [
      {
        q: "Which Source Should I Start With?",
        a: "Start Where Your Buyers Are Most Visible: Google Maps For Local, Location-Led Businesses; IndiaMART For Indian Suppliers And Traders; LinkedIn For B2B Company Context.",
      },
      {
        q: "How Does The Platform Decide Two Listings Are The Same Business?",
        a: "Results Are Normalised Into A Consistent Record And De-Duplicated Across Sources, So The Same Business Found On Different Platforms Is Merged Into One Lead.",
      },
      {
        q: "Can I See Which Source Supplied A Particular Phone Number?",
        a: "Yes. Every Lead Records The Source Each Field Came From, Including Values Added Later By Enrichment.",
      },
      {
        q: "How Do I Write A Good IndiaMART Search Term?",
        a: "Use The Words Suppliers Actually Put In Their Product Titles Rather Than Broad Industry Labels. Run A Couple Of Variants And Compare Which One Brings Back The Most Relevant Businesses Before Running Many Queries.",
      },
      {
        q: "Why Does My Google Maps Query Return Too Many Irrelevant Results?",
        a: "Broad Categories And Large Areas Produce Broad Lists. Specific Categories Usually Work Better, Such As “Orthodontist” Rather Than “Healthcare”, And A City Or District Gives A More Manageable List Than A Whole State.",
      },
      {
        q: "Are Listings Always Up To Date?",
        a: "No. Listings Are Only As Current As Each Business Keeps Them, And Coverage Varies By Category And Region. Review A Sample Before Scaling Up, And Let Enrichment Fill Gaps From The Business’s Own Website.",
      },
      {
        q: "Which Plan Includes LinkedIn And IndiaMART?",
        a: "Both Are Listed Among The Multiple Sources Available On The Scale Plan. Check Which Sources Your Plan Includes Before Building A Workflow Around Them.",
      },
      {
        q: "Does Public Listing Data Remove My Obligations When Contacting Businesses?",
        a: "No. Public Availability Does Not Remove Your Obligations. Follow Each Source Platform’s Terms And The Laws That Apply To Your Outreach, And Take Care With Any Details That Identify Individuals.",
      },
    ],
    related: ["/services/multi-source-lead-scraping", "/services/google-maps-lead-extraction", "/services/indiamart-lead-extraction", "/services/lead-deduplication", "/services/source-traceability", "/how-it-works"],
    cta: {
      heading: "Try A Query On Your Market",
      text: "See How Listings From Your Sources Merge Into Clean Records.",
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
      "LeadGen AI Handles Prospect Data Through Multi-Tenant, Role-Based Workspaces, Per-Org API Keys, Per-Field Source Traceability, Protection For Manual Edits, Job Records And Per-Plan Quotas. This Page Sets Out Those Controls For IT And Operations Reviewers, And Only States What We Can Confirm The Platform Does.",
      "We Do Not List Encryption Standards, Certifications Or Hosting Regions Here. If Your Review Needs Those Details, Contact The Team And Ask For The Documentation That Governs The LeadGen AI Application.",
    ],
    highlights: [
      "Multi-Tenant, Role-Based Workspaces",
      "Per-Org API Keys On Scale",
      "Per-Field Source Traceability",
      "Manual Edits Never Overwritten",
    ],
    sections: [
      {
        heading: "Workspace Separation And Role-Based Access",
        paragraphs: [
          "LeadGen AI Is Multi-Tenant: Each Organisation Works In Its Own Workspace. Within A Workspace, Role-Based Access Means Each Team Sees The Records It Should. The Growth Plan Includes Full Team Access With Seven Role Modules; The Free Plan Has A Single Admin User.",
          "Reviewers Usually Want To Map Roles To Job Functions (For Example Researchers, Sellers And Managers) So That Access Follows The Principle Of Least Privilege As Closely As Your Team Structure Allows.",
        ],
      },
      {
        heading: "API Access Scoped To Your Organisation",
        paragraphs: [
          "On The Scale Plan, Programmatic Access Uses Per-Org API Keys. Keys Belong To Your Organisation Rather Than Being Shared Across Customers. As With Any Credential, Treat Them As Secrets: Store Them In A Secure Location, Limit Who Can See Them And Replace Them If You Suspect Exposure.",
        ],
      },
      {
        heading: "Traceability Of Every Field And Job",
        paragraphs: [
          "Every Lead Records The Source Each Field Came From, Including Values Added By Enrichment. Every Scraping Job Records What It Fetched And When. Enrichment Reads Only The Sources The User Asked For.",
          "Together, These Give Reviewers An Audit Trail For Prospect Data: You Can Explain Where A Value Originated And When It Entered The Workspace.",
        ],
      },
      {
        heading: "Protection For Human Corrections",
        paragraphs: [
          "Automated Enrichment Writes A Field Only When The New Value Is More Complete Than The Existing One, And It Never Overwrites A Field A User Edited By Hand. This Prevents Automated Processes From Silently Undoing Corrections Your Team Has Made.",
        ],
      },
      {
        heading: "Questions Reviewers Commonly Raise",
        paragraphs: [
          "IT And Operations Reviewers Tend To Ask The Same Few Questions About Any Prospecting Tool: Who Can See The Data, Where It Came From, Whether Automation Can Corrupt It, And How It Leaves The System. LeadGen AI’s Answers Are Kept Simple. Visibility Is Governed By Workspaces And Roles. Origin Is Recorded Per Field And Per Job. Automation Only Fills In More Complete Values And Leaves Manual Edits Alone. Data Leaves Through CSV Export, Per-Org API Keys On Scale, And Outreach Sent Through Your Own Email Transport.",
          "Where A Review Asks About Controls Not Described Here, Such As Infrastructure, Encryption Or Formal Attestations, Treat This Page As Incomplete For That Purpose And Request The Relevant Documentation From The Team Rather Than Assuming Either Way.",
        ],
      },
      {
        heading: "Quotas, Outreach Logging And User Control",
        paragraphs: [
          "Quotas Are Enforced Per Plan And Per Billing Cycle, Which Limits How Much Data A Workspace Can Gather. On The Outreach Side, Campaigns Are Sent Through The User’s Own Configured Email Transport, Every Message Is Logged Against Its Lead, And Outreach Respects Sending Limits And Opt-Out Obligations, With The User In Control Of The List.",
        ],
      },
    ],
    steps: {
      heading: "A Practical Review Checklist",
      items: [
        { title: "Map Roles", text: "List Who Needs Access And Assign Role Modules To Match Job Functions." },
        { title: "Decide On API Use", text: "If You Are On Scale, Agree Who Holds Per-Org API Keys And How They Are Stored." },
        { title: "Confirm Your Email Transport", text: "Review The Sending Account Outreach Will Use And Your Opt-Out Process." },
        { title: "Request Application Documents", text: "Ask The Team For The Policies That Govern The LeadGen AI Application Itself." },
      ],
    },
    considerations: {
      heading: "What Remains Your Responsibility",
      items: [
        "Granting The Right Roles And Removing Access When People Leave.",
        "Keeping API Keys And Email Transport Credentials Secure.",
        "Deciding Lawful And Appropriate Uses Of Prospect Data In Your Jurisdictions.",
        "Requesting The Application’s Own Policy And Security Documentation If Your Review Requires It.",
      ],
    },
    faqs: [
      {
        q: "Does This Page Describe Encryption Or Certifications?",
        a: "No. We Only State Controls We Can Verify Here. Contact The Team For Documentation On Topics Such As Encryption, Certifications Or Hosting.",
      },
      {
        q: "Can One Customer See Another Customer’s Leads?",
        a: "The Platform Is Multi-Tenant, With Each Organisation In Its Own Workspace And Role-Based Access Within It.",
      },
      {
        q: "How Can I Show Where A Lead’s Data Originated During An Internal Audit?",
        a: "Use The Per-Field Source Records On The Lead And The Job Record Showing What Was Fetched And When.",
      },
      {
        q: "How Should We Store Per-Org API Keys?",
        a: "Treat Them As Secrets. Keep Them In A Secure Location, Limit Who Can See Them And Replace Them If You Suspect Exposure. Keys Belong To Your Organisation And Are Available On The Scale Plan.",
      },
      {
        q: "Can Automated Enrichment Overwrite Our Manual Corrections?",
        a: "No. Enrichment Writes A Field Only When The New Value Is More Complete, And It Never Overwrites A Field A User Edited By Hand. This Stops Automated Processes From Silently Undoing Your Team’s Fixes.",
      },
      {
        q: "In What Ways Can Data Leave The Platform?",
        a: "Through CSV Export From The Lead Dashboard, Through Per-Org API Keys On The Scale Plan, And Through Outreach Sent Via Your Own Configured Email Transport. Every Outreach Message Is Logged Against Its Lead.",
      },
      {
        q: "What Should We Do When Someone Leaves The Team?",
        a: "Remove Their Access Promptly And Review Whether Any API Keys Or Email Transport Credentials They Could See Should Be Replaced. Managing Roles And Access Remains Your Responsibility.",
      },
      {
        q: "How Can Roles Follow The Principle Of Least Privilege?",
        a: "Map Role Modules To Job Functions, Such As Researchers, Sellers And Managers, And Give Each Person Only The Access Their Work Needs. Growth Includes Full Team Access With Seven Role Modules To Support This.",
      },
    ],
    related: ["/platform", "/services/role-based-team-access", "/services/multi-tenant-workspaces", "/services/source-traceability", "/responsible-prospecting", "/contact"],
    cta: {
      heading: "Need More Detail For Your Review?",
      text: "Contact The Team For The Documentation That Governs The LeadGen AI Application.",
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
      "Responsible Prospecting Means Contacting Businesses That Have A Plausible Reason To Want What You Offer, Using Data They Have Made Public, Through Channels And Volumes That Respect Them And The Law. A Tool Can Make Outreach Faster; It Cannot Make Careless Outreach Acceptable.",
      "This Page Offers General Guidance For Sales And Compliance Teams And Explains How LeadGen AI’s Design Supports Good Practice. It Is Not Legal Advice: Rules Differ By Country And Channel, So Check Current Requirements And Take Legal Advice For Your Situation.",
    ],
    highlights: [
      "Relevance Before Volume",
      "Honour Every Opt-Out",
      "Stay Within Sending Limits",
      "Know Where Your Data Came From",
    ],
    sections: [
      {
        heading: "Using Public Business Data Thoughtfully",
        paragraphs: [
          "LeadGen AI Gathers Information That Businesses Publish In Listings On Google Maps, LinkedIn And IndiaMART And On Their Own Websites. Public Availability Is A Starting Point, Not A Blanket Permission. Teams Often Apply A Simple Test: Would This Business Reasonably Expect To Be Contacted About This Offer At This Address?",
          "Business Contact Routes, Such As A Published Business Email Or Switchboard Number, Generally Raise Fewer Concerns Than Personal Details. Be Cautious With Anything That Identifies An Individual, And Follow The Terms Of Each Source Platform.",
        ],
      },
      {
        heading: "Consent And Lawful Basis",
        paragraphs: [
          "Different Jurisdictions Treat Business-To-Business Outreach Differently. Some Rely On Legitimate Interest For Relevant B2B Contact, Others Require Prior Consent For Certain Channels, And Rules For SMS Or Calls Can Be Stricter Than For Email. Laws Such As GDPR In Europe, CAN-SPAM In The United States And India’s DPDP Act Each Set Their Own Expectations.",
          "Because The Details Change And Depend On Context, Document Your Reasoning For Each Campaign And Seek Legal Advice Where You Are Unsure.",
        ],
      },
      {
        heading: "Opt-Outs And Sending Limits",
        paragraphs: [
          "An Easy, Honoured Opt-Out Is A Basic Expectation In Most Markets. Make It Simple To Decline Further Contact, Act On Requests Promptly And Keep A Suppression List So People Who Opt Out Are Not Contacted Again From Another List.",
          "Volume Matters Too. Sending Large Batches From A New Or Cold Mailbox Harms Deliverability And Can Look Like Spam. LeadGen AI Outreach Respects Sending Limits And Opt-Out Obligations, And Campaigns Go Through Your Own Configured Email Transport, So Your Domain’s Reputation Is At Stake. That Is Another Reason Not To Rush.",
        ],
      },
      {
        heading: "Relevance And Honesty In The Message",
        paragraphs: [
          "The Most Respectful Outreach Is Relevant. Audit Findings, Opportunity Flags And Enrichment Data Let You Write About Something Real, Such As A Broken Website, Missing Structured Data Or An Unreachable Listing. Keep Claims Accurate, Identify Yourself Clearly And Avoid Misleading Subject Lines.",
          "AI-Drafted Messages In LeadGen AI Use The Lead’s Own Data, But They Are Drafts. Review Each One Before It Is Sent.",
        ],
      },
      {
        heading: "How LeadGen AI Supports Good Practice",
        paragraphs: [
          "Several Platform Features Make It Easier To Keep Prospecting Responsibly.",
        ],
        bullets: [
          "Every Field Records Its Source, So You Can Answer “How Did You Get My Details?” Honestly.",
          "Enrichment Reads Only The Sources You Asked For And Never Overwrites Fields Edited By Hand.",
          "Every Message Is Logged Against Its Lead, Giving A Record Of Who Was Contacted And When.",
          "You Stay In Control Of The List, And Outreach Respects Sending Limits And Opt-Out Obligations.",
        ],
      },
    ],
    steps: {
      heading: "A Responsible Campaign Routine",
      items: [
        { title: "Define A Relevant Audience", text: "Choose Categories And Locations Where Your Offer Genuinely Fits." },
        { title: "Check Your Basis For Contact", text: "Confirm The Rules For Your Channel And The Recipients’ Jurisdiction." },
        { title: "Clean And Suppress", text: "Remove Opt-Outs And Records You Shouldn’t Contact Before Sending." },
        { title: "Review Every Draft", text: "Make Sure Each Message Is Accurate, Specific And Clearly Identifies You." },
        { title: "Send In Measured Batches", text: "Respect Sending Limits And Watch Replies And Opt-Outs Closely." },
      ],
    },
    considerations: {
      heading: "Common Pitfalls",
      items: [
        "Treating Public Data As Consent For Any Type Of Contact.",
        "Re-Importing Lists Without Applying Your Suppression List.",
        "Sending Unreviewed AI Drafts That Make Inaccurate Claims About A Prospect.",
        "Scaling Volume Faster Than Your Mailbox Reputation Can Support.",
        "Assuming Rules In One Country Apply In Another.",
      ],
    },
    example: {
      heading: "Handling A Reply That Asks How You Found Them",
      text: "Imagine An Accounting Practice In Nagpur Replies To An Outreach Email Asking Where Its Address Came From. The Sender Checks The Lead Record, Sees The Email Was Found On The Practice’s Own Contact Page During Enrichment, Explains That Politely And, When Asked, Adds The Practice To The Suppression List.",
    },
    faqs: [
      {
        q: "Is It Acceptable To Email A Business Just Because Its Address Is Public?",
        a: "Not Automatically. Relevance, The Channel, The Recipient’s Jurisdiction And Your Basis For Contact All Matter. Check The Rules That Apply And Take Advice If Unsure.",
      },
      {
        q: "How Should We Handle An Opt-Out Request Received By Phone?",
        a: "Treat It The Same As An Email Unsubscribe: Record It, Add The Contact To Your Suppression List And Make Sure No Future Campaign Reaches Them.",
      },
      {
        q: "Does LeadGen AI Make Our Outreach Compliant Automatically?",
        a: "No Tool Can. The Platform Respects Sending Limits And Opt-Out Obligations And Keeps Records, But Compliance Depends On Your Audience, Content And Process.",
      },
      {
        q: "Why Keep A Suppression List?",
        a: "A Suppression List Stops People Who Opted Out From Being Contacted Again When They Appear In A New Query Or Import. Apply It Before Every Campaign, Not Just The First One.",
      },
      {
        q: "How Quickly Should We Increase Sending Volume?",
        a: "Gradually. Large Batches From A New Or Cold Mailbox Harm Deliverability And Can Look Like Spam. Because Outreach Goes Through Your Own Email Transport, Your Domain’s Reputation Is At Stake, So Send In Measured Batches And Watch Replies And Opt-Outs.",
      },
      {
        q: "What Should We Say If A Prospect Asks How We Got Their Details?",
        a: "Check The Lead Record, Which Shows The Source Of Each Field, And Explain Honestly, For Example That The Email Was Found On Their Own Contact Page. If They Ask Not To Be Contacted, Add Them To Your Suppression List.",
      },
      {
        q: "Do The Same Rules Apply In Every Country?",
        a: "No. Laws Such As GDPR In Europe, CAN-SPAM In The United States And India’s DPDP Act Set Different Expectations, And Rules For Calls Or SMS Can Be Stricter Than For Email. Check Current Requirements For Each Recipient’s Jurisdiction.",
      },
      {
        q: "Are Personal Details Treated Differently From Business Contact Routes?",
        a: "Generally, Yes. A Published Business Email Or Switchboard Number Usually Raises Fewer Concerns Than Details That Identify An Individual. Be Cautious With Personal Information And Follow The Terms Of Each Source Platform.",
      },
    ],
    related: ["/security-and-data-handling", "/services/ai-outreach-campaigns", "/services/outreach-activity-logging", "/services/source-traceability", "/data-sources"],
    cta: {
      heading: "Talk Through Your Outreach Process",
      text: "Request Access And We Will Show How Logging, Traceability And Limits Work In Practice.",
      label: "Request Access",
      href: "/book-a-demo",
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
      "This Policy Explains What Information This LeadGen AI Marketing Website Collects, Why, And What Choices You Have. In Short: The Site Collects What You Submit In The Contact And Request-Access Forms, Stores Your Theme Preference In Your Own Browser, And Does Not Run Analytics.",
      "This Policy Covers This Website Only. It Does Not Govern The LeadGen AI Application. For The Authoritative Policy That Applies To Your Use Of The Application, Please Contact LeadGen AI Through The Contact Page.",
    ],
    highlights: [
      "Form Submissions Only",
      "Theme Stored In Your Browser",
      "No Analytics Installed",
    ],
    sections: [
      {
        heading: "Information This Website Collects",
        paragraphs: [
          "When You Use The Contact Form Or The Request-Access Form, We Receive The Details You Enter: Your Name, Work Email, Phone Number With Its Country Code, Company (Optional), Topic And Message. Please Don’t Include Sensitive Personal Information Or Credentials In These Forms.",
          "To Block Spam, The Server Briefly Checks Your IP Address Against A Short-Term Submission Limit And Checks How Long The Form Took To Fill In. These Checks Are Held In Memory For A Few Minutes And Are Not Stored With Your Submission.",
          "The Site Remembers Whether You Prefer A Light Or Dark Theme By Storing That Choice In Your Browser’s localStorage. This Value Stays On Your Device And Is Not Sent To Us. No Analytics Or Advertising Trackers Are Installed On This Website.",
        ],
      },
      {
        heading: "How We Use It",
        paragraphs: [
          "We Use Form Submissions To Reply To Your Enquiry, To Arrange A Walkthrough If You Request Access, And To Keep A Record Of Our Correspondence With You. We Do Not Sell Form Submissions.",
          "Submissions Are Passed To The Service We Use To Receive And Manage Enquiries, So The Team Can Read And Reply To Them.",
        ],
      },
      {
        heading: "Retention",
        paragraphs: [
          "We Keep Form Submissions For As Long As Needed To Handle Your Enquiry And Any Resulting Relationship, And Then Delete Or Anonymise Them When They Are No Longer Needed. You Can Clear The Theme Preference At Any Time By Clearing Your Browser’s Site Data.",
        ],
      },
      {
        heading: "Your Choices And Rights",
        paragraphs: [
          "Depending On Where You Live, You May Have Rights To Access, Correct Or Delete The Personal Information You Have Sent Us, Or To Object To How It Is Used. To Make A Request, Use The Contact Page. We Will Respond Within A Reasonable Time And May Need To Confirm Your Identity.",
        ],
      },
      {
        heading: "Changes And Contact",
        paragraphs: [
          "We May Update This Policy If The Website Changes, For Example If A New Form Or Tool Is Added, And Will Revise This Page When We Do. Questions About This Policy, Or Requests For The Policy Governing The LeadGen AI Application, Can Be Sent Through The Contact Page.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does This Website Use Cookies For Tracking?",
        a: "No Analytics Are Installed. The Only Stored Preference Is Your Theme Choice, Kept In Your Browser’s localStorage.",
      },
      {
        q: "Does This Policy Cover Data Inside The LeadGen AI Application?",
        a: "No. It Covers This Marketing Website Only. Contact LeadGen AI For The Authoritative Policy That Governs The Application.",
      },
      {
        q: "How Do I Ask For My Form Submission To Be Deleted?",
        a: "Send A Request Through The Contact Page, Using The Same Email Address You Used In The Original Form If Possible.",
      },
      {
        q: "What Information Do The Website Forms Collect?",
        a: "The Contact And Request-Access Forms Collect What You Enter: Your Name, Work Email, Phone Number, Optional Company, Topic And Message. Please Don’t Include Sensitive Personal Information Or Credentials In These Forms.",
      },
      {
        q: "Is My Form Submission Sold To Anyone?",
        a: "No. This Policy States That Form Submissions Are Not Sold. They Are Used To Reply To Your Enquiry, Arrange A Walkthrough If You Request Access And Keep A Record Of Our Correspondence With You.",
      },
      {
        q: "How Long Are Form Submissions Kept?",
        a: "The Policy Says They Are Kept For As Long As Needed To Handle Your Enquiry And Any Resulting Relationship, Then Deleted Or Anonymised When No Longer Needed. It Does Not Set A Fixed Period.",
      },
      {
        q: "How Do I Clear My Saved Theme Preference?",
        a: "Your Light Or Dark Theme Choice Is Stored In Your Browser’s localStorage And Stays On Your Device. You Can Remove It At Any Time By Clearing This Site’s Data In Your Browser Settings.",
      },
      {
        q: "Why Might You Ask Me To Confirm My Identity?",
        a: "When You Ask To Access, Correct Or Delete Information, Confirming Your Identity Helps Make Sure The Request Really Comes From You. Depending On Where You Live, The Rights Available To You May Vary.",
      },
    ],
    related: ["/terms", "/contact", "/security-and-data-handling", "/responsible-prospecting"],
    cta: {
      heading: "Questions About Your Data?",
      text: "Get In Touch And We Will Respond By Email.",
      label: "Contact",
      href: "/contact",
    },
  },
  {
    path: "/terms",
    title: "Terms Of Use",
    h1: "Website Terms Of Use",
    metaTitle: "Terms of Use: LeadGen AI Website",
    metaDescription: "The terms for using the LeadGen AI marketing website: permitted use, content accuracy, acceptable behaviour, limits of liability and how these terms change.",
    eyebrow: "Legal",
    intro: [
      "These Terms Govern Your Use Of This LeadGen AI Marketing Website. By Using The Site, You Agree To Use It Lawfully And In Line With The Conditions Below. If You Do Not Agree, Please Do Not Use The Site.",
      "These Terms Cover The Website Only. Use Of The LeadGen AI Application Is Governed By Separate Terms; Contact LeadGen AI Through The Contact Page For The Authoritative Documents That Apply To The Application.",
    ],
    highlights: [
      "Applies To This Website Only",
      "Content Is General Information",
      "Use The Site Lawfully",
    ],
    sections: [
      {
        heading: "Using This Website",
        paragraphs: [
          "You May Browse The Site, Read Its Content And Use Its Forms To Contact LeadGen AI Or Request Access. You May Share Links To Pages And Quote Short Passages With Attribution.",
        ],
      },
      {
        heading: "About The Content",
        paragraphs: [
          "Product Descriptions On This Site Reflect The LeadGen AI Platform As We Understand It At The Time Of Writing, And Features Or Plans May Change. Educational Articles Offer General Guidance On Lead Generation; They Are Not Legal, Financial Or Professional Advice. Examples Are Illustrative And Do Not Describe Real Customers. Regulatory Topics Are Summarised Only In General Terms, So Check Current Rules And Take Advice For Your Circumstances.",
        ],
      },
      {
        heading: "Acceptable Use",
        paragraphs: [
          "When Using This Site, Please Do Not:",
        ],
        bullets: [
          "Submit False, Misleading Or Unlawful Information Through Its Forms",
          "Attempt To Disrupt, Overload Or Gain Unauthorised Access To The Site",
          "Copy Substantial Parts Of The Site’s Content For Republication Without Permission",
          "Use The Site To Send Spam Or To Harvest Information About Others",
        ],
      },
      {
        heading: "Limitation Of Liability",
        paragraphs: [
          "The Website Is Provided As It Is, For General Information. To The Extent Permitted By Law, LeadGen AI Is Not Liable For Losses Arising From Reliance On The Site’s Content Or From The Site Being Unavailable. Links To External Sites Are Provided For Convenience, And We Are Not Responsible For Their Content. Nothing In These Terms Limits Rights You Have Under Law That Cannot Be Excluded.",
        ],
      },
      {
        heading: "Changes To These Terms",
        paragraphs: [
          "We May Update These Terms From Time To Time, And The Version On This Page Applies From The Time It Is Published. Questions About These Terms Can Be Sent Through The Contact Page.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do These Terms Apply To My LeadGen AI Account?",
        a: "No. They Apply To This Website Only. Contact LeadGen AI For The Terms That Govern The Application.",
      },
      {
        q: "Can I Quote Content From This Website In My Own Article?",
        a: "Short Quotations With Attribution And A Link Are Fine. For Larger Reuse, Please Ask Through The Contact Page.",
      },
      {
        q: "Are The Examples On This Site Real Customer Stories?",
        a: "No. Examples Are Illustrative Scenarios Written To Explain Ideas, And They Do Not Describe Real Businesses.",
      },
      {
        q: "Can I Rely On Articles On This Site As Legal Advice?",
        a: "No. Educational Articles Offer General Guidance On Lead Generation And Are Not Legal, Financial Or Professional Advice. Regulatory Topics Are Summarised Only In General Terms, So Check Current Rules And Take Advice For Your Circumstances.",
      },
      {
        q: "Are Product Descriptions On This Site Guaranteed To Stay The Same?",
        a: "No. They Reflect The Platform As Understood At The Time Of Writing, And Features Or Plans May Change. If Something Matters To Your Decision, Confirm The Current Details With The Team.",
      },
      {
        q: "What Kinds Of Use Are Not Allowed On This Website?",
        a: "Submitting False Or Unlawful Information Through The Forms, Trying To Disrupt Or Gain Unauthorised Access To The Site, Republishing Substantial Content Without Permission, And Using The Site To Send Spam Or Harvest Information About Others.",
      },
      {
        q: "Is LeadGen AI Responsible For Linked External Websites?",
        a: "No. Links To External Sites Are Provided For Convenience, And These Terms State That LeadGen AI Is Not Responsible For Their Content. Review Each External Site’s Own Terms Before Relying On It.",
      },
      {
        q: "How Will I Know If These Terms Change?",
        a: "Updated Terms Are Published On This Page, And The Version Shown Here Applies From The Time It Is Published. Check Back Occasionally, And Send Any Questions Through The Contact Page.",
      },
    ],
    related: ["/privacy-policy", "/contact", "/responsible-prospecting", "/about"],
    cta: {
      heading: "Have A Question About These Terms?",
      text: "Send Us A Message And The Team Will Reply.",
      label: "Contact",
      href: "/contact",
    },
  },
];
