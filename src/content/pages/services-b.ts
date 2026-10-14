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
      "Lead Data Normalisation Means Turning Records That Arrive In Different Shapes From Different Sources Into One Consistent Format, So Every Lead Has The Same Fields, Written The Same Way. In LeadGen AI, Results From Google Maps, LinkedIn And IndiaMART Are Normalised Into One Lead Record Per Business. Phone Numbers Are Normalised And Checked For A Plausible Format, And Each Field Keeps A Note Of The Source It Came From.",
      "For Ops And RevOps Teams, That Consistency Is What Makes Everything Downstream Work: Sorting By Score, Filtering By Category Or Geography, De-Duplicating Across Sources, Exporting To CSV And Handing Records To Sellers Who Should Not Have To Tidy Data Before They Call. This Page Explains What Normalisation Covers, Where It Stops, And How To Keep Records Clean Once They Are In Your Workspace.",
    ],
    highlights: [
      "One Record Shape Across Three Sources",
      "Phone Numbers Normalised And Format-Checked",
      "Every Field Traceable To Its Source",
      "Manual Edits Never Overwritten",
    ],
    sections: [
      {
        heading: "Why Records From Different Sources Disagree",
        paragraphs: [
          "A Map Listing, A Professional Network Page And A B2B Directory Entry Describe The Same Business In Different Words. One Gives A Category Label, Another An Industry, A Third A List Of Products. Addresses Arrive Split Into Parts Or As A Single Line. Phone Numbers Come With Or Without Country Codes, Spaces, Brackets Or Extension Notes.",
          "If Those Variations Land In Your Lead List As They Are, Filters Miss Records, Duplicates Slip Through And Exported Files Need Manual Clean-Up Before Anyone Can Use Them. Normalisation Fixes This When The Data Is Collected, Rather Than Leaving It To Each User.",
        ],
      },
      {
        heading: "What LeadGen AI Normalises",
        paragraphs: [
          "Every Lead Is Held As A Single Record Per Business With A Consistent Set Of Fields. Where The Sources Provide Them, Those Fields Are:",
        ],
        bullets: [
          "Business Name And Category",
          "Full Postal Address",
          "Website, Listed Phone Numbers And Public Email Addresses",
          "Ratings, Review Counts And Listing-Completeness Signals",
          "The Source Each Field Came From",
        ],
      },
      {
        heading: "Phone Formats And Contact Fields",
        paragraphs: [
          "Phone Numbers Are The Field Most Likely To Arrive In A Mess. During Enrichment, LeadGen AI Normalises Numbers And Checks Them For A Plausible Format, So A Calling Team Works From A Consistent Column Rather Than A Mix Of Styles. A Plausible-Format Check Is Not A Live Connection Test: It Tells You A Number Is Shaped Correctly, Not That Someone Will Answer It.",
          "Emails Added By Enrichment Are Business Addresses Discovered On The Company’s Own Website. Enrichment Only Writes A Field When The New Value Is More Complete Than The Existing One. That Rule Stops A Weaker Value From Replacing A Better One.",
        ],
      },
      {
        heading: "Normalisation, De-Duplication And Traceability Work Together",
        paragraphs: [
          "Normalising Fields Is What Makes Cross-Source De-Duplication Reliable: Two Listings Can Only Be Recognised As The Same Business Once Their Names, Addresses And Contact Details Are Written The Same Way. LeadGen AI De-Duplicates Across Sources Into One Record Per Business.",
          "Because Each Field Records Where It Came From, A Normalised Record Does Not Hide Its Origins. If A Seller Questions An Address Or A Number, Anyone With Access Can See Which Source Supplied It And When The Job That Fetched It Ran.",
        ],
      },
      {
        heading: "Keeping Records Clean After Import",
        paragraphs: [
          "Normalisation At Collection Is Only Half The Job. Teams Often Add A Light Set Of House Rules: A Naming Convention For Pipeline Stages, An Agreed Way To Record When A Contact Asked Not To Be Contacted Again, And A Habit Of Correcting A Field By Hand When A Seller Learns Something Better On A Call.",
          "LeadGen AI Never Overwrites A Field The User Edited By Hand, So Those Corrections Survive Later Enrichment Runs. Re-Enrichment Can Still Fill Gaps In Other Fields And Scores Recalculate When A Lead Is Re-Enriched.",
        ],
      },
    ],
    steps: {
      heading: "How A Lead Becomes A Clean Record",
      items: [
        { title: "Run A Query", text: "Enter A Category And Location, Or A Directory Search Term; The Query Fans Out To Each Enabled Source." },
        { title: "Merge Into One Record", text: "Results Are Normalised Into One Lead Record Per Business And De-Duplicated Across Sources." },
        { title: "Enrich And Compare", text: "The Enrichment Queue Finds The Website, Crawls Contact Pages And Writes A Field Only When The New Value Is More Complete." },
        { title: "Check Formats", text: "Phone Numbers Are Normalised And Checked For A Plausible Format Before Your Team Relies On Them." },
        { title: "Review And Correct", text: "Sellers Fix Anything They Learn By Hand; Those Edits Are Protected From Future Enrichment." },
      ],
    },
    considerations: {
      heading: "Limits Worth Knowing",
      items: [
        "Normalisation Tidies The Data That Sources Provide; It Cannot Create A Field A Business Never Published.",
        "A Plausibly Formatted Phone Number May Still Be Out Of Service, So Calling Teams Should Mark Dead Numbers By Hand.",
        "Category Labels Differ Between Sources, So Agree How Your Team Segments Leads Rather Than Relying On One Source’s Labels.",
        "If You Export To Another System, Map Fields Carefully So That System’s Own Rules Do Not Undo Your Clean Formats.",
        "Hand Edits Are Protected, Which Also Means An Incorrect Manual Edit Stays Until Someone Corrects It.",
      ],
    },
    example: {
      heading: "A Distributor Cleaning Up A Regional List",
      text: "Imagine A Packaging Distributor In Coimbatore Running An IndiaMART Search For Food Manufacturers Alongside A Google Maps Query For The Same Category In Three Districts. Several Businesses Appear In Both. In LeadGen AI They Arrive As Single Records With Consistent Addresses And Phone Formats, Each Field Marked With Its Source. The Ops Lead Filters By District, Notices Two Numbers A Rep Has Already Corrected By Hand, And Confirms Those Corrections Are Still In Place After A Re-Enrichment Run Before Exporting The List To CSV For A Field Team.",
    },
    faqs: [
      { q: "Does Normalisation Change The Data I Typed In Myself?", a: "No. LeadGen AI Never Overwrites A Field The User Edited By Hand. Normalisation And Enrichment Work Around Your Corrections." },
      { q: "Can I See The Original Source Of A Normalised Value?", a: "Yes. Each Field Records The Source It Came From, So A Tidy Value Is Still Traceable To The Listing, Profile Or Website That Supplied It." },
      { q: "Is A Normalised Phone Number Guaranteed To Connect?", a: "No. Numbers Are Normalised And Checked For A Plausible Format. That Catches Malformed Entries But Cannot Confirm A Line Is Live Or Answered." },
      { q: "Why Do Some Records Have More Fields Than Others?", a: "Sources Publish Different Amounts Of Detail, And Some Businesses List Very Little. Normalisation Gives Every Record The Same Shape, But Empty Fields Stay Empty Until Enrichment Finds A More Complete Value." },
      { q: "Does Normalisation Merge The Same Business Found On Google Maps And IndiaMART?", a: "Yes. Results From Each Enabled Source Are Normalised Into One Lead Record Per Business And De-Duplicated Across Sources. Consistent Names, Addresses And Phone Formats Are What Make That Matching Reliable, So You Work From One Record Instead Of Several Partial Ones." },
      { q: "Why Do Category Labels Still Differ Between My Leads?", a: "Each Source Uses Its Own Vocabulary, So One Calls A Business A Category, Another An Industry And A Third Lists Products. Normalisation Gives Records The Same Shape, But Your Team Should Agree Its Own Segments Rather Than Relying On Any One Source’s Taxonomy." },
      { q: "What Happens If Someone Makes A Wrong Manual Edit?", a: "Hand Edits Are Protected From Later Enrichment, So An Incorrect Value Stays Until Someone Fixes It. Ask Sellers To Correct Fields Carefully, And Check A Field’s Source When A Value Looks Odd Before Deciding Which Version To Keep." },
      { q: "How Do I Keep Clean Formats When I Export To Another Tool?", a: "Map Fields Deliberately And Run A Small Test Import First. Some Tools Reformat Phone Numbers Or Strip Leading Characters, Which Can Undo The Consistent Formats Your Records Had Inside LeadGen AI." },
    ],
    related: ["/services/lead-deduplication", "/services/phone-number-validation", "/services/source-traceability", "/services/ai-contact-enrichment", "/services/csv-lead-export", "/data-sources"],
    cta: { heading: "See Clean Records From Your Own Query", text: "Run A Search And Inspect How Each Lead Is Normalised, De-Duplicated And Traced To Its Source.", label: "Start Free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/services/csv-lead-export",
    title: "CSV Lead Export",
    h1: "CSV Lead Export: Take Your Leads Into Other Tools",
    metaTitle: "CSV Lead Export for Use in Other Tools",
    metaDescription: "Export LeadGen AI leads to CSV on every plan. Learn how to prepare a clean export, map fields to your other tools and keep data hygiene after it leaves.",
    eyebrow: "Export",
    intro: [
      "CSV Lead Export Lets You Take The Leads You Have Found, Enriched And Scored In LeadGen AI And Open Them In Any Tool That Reads A Spreadsheet File. CSV Export Is Included With The Lead Dashboard On Every Plan, Including Free, So Teams That Run A Separate CRM, Dialler Or Reporting Sheet Can Still Use LeadGen AI To Find Prospects.",
      "A CSV Is Simple And Works Almost Anywhere. That Is Its Strength And Its Risk: Once A File Leaves The Platform It No Longer Benefits From Source Tracking, Manual-Edit Protection Or Role-Based Access. This Page Covers How To Prepare A Useful Export, How To Map Fields And How To Keep Exported Data Tidy.",
    ],
    highlights: [
      "Included On Free, Growth And Scale",
      "Export Filtered And Score-Sorted Views",
      "Works With Any Spreadsheet-Ready Tool",
      "Plan Field Mapping Before Importing",
    ],
    sections: [
      {
        heading: "When Exporting Is The Right Move",
        paragraphs: [
          "Export Makes Sense When Another System Is Where The Work Happens: A CRM Your Sales Team Already Lives In, A Calling Tool, A Mail-Merge Sheet For A Small Campaign, Or A Report For A Manager Who Does Not Log In. It Also Suits One-Off Handovers, Such As Sending A Regional List To A Partner.",
          "If Your Team Can Work Inside LeadGen AI, The Built-In CRM Pipeline, Outreach Tools And Activity History Keep Everything Linked To Each Lead. Many Teams Do Both: They Work The Top Band Inside The Platform And Export A Wider List For Other Purposes.",
        ],
      },
      {
        heading: "What A Lead Export Can Include",
        paragraphs: [
          "The Fields Available Depend On What The Sources Published And What Enrichment Found. A Typical Lead Record In LeadGen AI Carries:",
        ],
        bullets: [
          "Business Name, Category And Full Postal Address",
          "Website, Listed Phone Numbers And Public Business Emails",
          "Ratings, Review Counts And Listing-Completeness Signals",
          "The 0–100 Lead Score On Plans That Include AI Lead Scoring",
          "Social Profiles And Company Details Added By Enrichment",
        ],
      },
      {
        heading: "Preparing An Export Worth Importing",
        paragraphs: [
          "Most Messy Imports Start With An Unfiltered Export. Before Downloading, Use The Lead Dashboard To Narrow The View: Filter By Category, Location Or Score, Sort So The Strongest Leads Are First, And Remove Records You Have Already Decided To Skip. A Smaller, Focused File Is Easier To Check And Less Likely To Create Clutter In The Destination System.",
          "It Also Helps To Name Files Consistently, For Example With The Query, Region And Date, So Anyone Can Tell Later Where A List Came From Even Though The CSV Itself Does Not Carry The Platform’s Job Records.",
        ],
      },
      {
        heading: "Mapping Fields To The Destination Tool",
        paragraphs: [
          "Every CRM Or Spreadsheet Has Its Own Field Names. Spend A Few Minutes Deciding Which LeadGen AI Columns Map To Which Destination Fields, And Which Should Be Left Out. Common Decisions Include Whether To Split The Address, Where The Score Should Live And Whether To Bring Across Ratings And Review Counts As Custom Fields.",
          "Run A Small Test Import Of Ten Or Twenty Rows First. Check Phone Numbers In Particular, Because Some Tools Reformat Or Strip Leading Characters On Import.",
        ],
      },
      {
        heading: "Hygiene Once Data Leaves The Platform",
        paragraphs: [
          "An Exported File Is A Snapshot. It Will Not Update When A Lead Is Re-Enriched Or A Score Recalculates, And It Will Not Reflect Corrections Your Team Makes In LeadGen AI Afterwards. Treat Old Exports As Stale And Re-Export When You Need Current Data.",
          "Personal Data In A Spreadsheet Is Easy To Forward And Forget. Store Exports Where Access Is Controlled, Delete Files You No Longer Need, And Carry Any Opt-Out Records Across So That A Contact Who Asked Not To Be Contacted Is Not Reached Again From Another Tool.",
        ],
      },
    ],
    steps: {
      heading: "A Clean Export Routine",
      items: [
        { title: "Filter The View", text: "In The Lead Dashboard, Filter By Category, Location And Score So The File Contains Only The Leads You Intend To Use." },
        { title: "Sort By Priority", text: "Sort By Score So The Strongest Leads Sit At The Top Of The File." },
        { title: "Export To CSV", text: "Download The Filtered View And Name The File With Its Query, Region And Date." },
        { title: "Test The Import", text: "Import A Small Sample Into The Destination Tool And Check Field Mapping And Phone Formats." },
        { title: "Import And Archive", text: "Import The Full File, Then Store Or Delete The CSV According To Your Team’s Data Rules." },
      ],
    },
    considerations: {
      heading: "Trade-Offs To Weigh",
      items: [
        "Exports Do Not Stay In Sync; Scores And Enrichment In LeadGen AI May Change After You Download.",
        "Per-Field Source Tracking And Manual-Edit Protection Do Not Travel With A CSV.",
        "Role-Based Access Stops At The Edge Of The Platform, So Control Who Receives Exported Files.",
        "Opt-Out And Suppression Records Must Be Carried Into Other Tools By Your Own Process.",
        "For Automated, Recurring Transfers, Per-Org API Keys On The Scale Plan May Fit Better Than Repeated Manual Exports.",
      ],
    },
    example: {
      heading: "A Two-Person Consultancy Feeding Its Own CRM",
      text: "Picture A Two-Person Bookkeeping Consultancy In Leeds That Already Keeps Clients In A Separate CRM. Each Fortnight The Founder Runs A Google Maps Query For New Cafés And Salons In Nearby Postcodes, Filters The Results To Leads With A Website And A Listed Phone Number, Sorts By Score And Exports The Top Forty Rows. A Test Import Of Five Rows Shows The CRM Dropping A Leading Zero From Phone Numbers, So She Changes The Column Type Before Importing The Rest And Keeps The File Name Tied To The Query And Date.",
    },
    faqs: [
      { q: "Is CSV Export Available On The Free Plan?", a: "Yes. The Free Plan Includes The Lead Dashboard And CSV Export, Alongside Three Scrape Queries, Website Enrichment And One Admin User." },
      { q: "Will My Exported File Update If A Lead Changes Later?", a: "No. A CSV Is A Snapshot At The Moment You Export. Re-Export When You Need The Latest Enrichment, Scores Or Corrections." },
      { q: "Can I Export Only Part Of My Leads?", a: "Yes. Filter And Sort The Lead Dashboard First, Then Export That View, So The File Contains Just The Segment You Need." },
      { q: "Does LeadGen AI Connect Directly To My CRM?", a: "LeadGen AI Does Not Advertise Named CRM Connectors. The Ways To Move Data Out Are CSV Export And, On The Scale Plan, Per-Org API Keys." },
      { q: "Why Did Phone Numbers Lose Their Leading Zero After Import?", a: "Some Spreadsheets And CRMs Treat Phone Numbers As Numbers And Drop Leading Characters. Set The Phone Column To Text In The Destination Tool, And Always Check A Small Test Import Of Ten Or Twenty Rows Before Loading The Full File." },
      { q: "Does An Exported CSV Show Where Each Field Came From?", a: "Plan For It Not To. Per-Field Source Tracking And Manual-Edit Protection Stay Inside LeadGen AI. Naming Each File With Its Query, Region And Date Helps You Trace A List Later, But The Platform Remains The Reference For Sources." },
      { q: "How Should I Handle Opt-Outs In Exported Lists?", a: "Carry Them Across With Your Own Process. If A Contact Asked Not To Be Contacted, Make Sure That Status Reaches The Destination Tool Too, So Nobody Reaches Them Again From A Different System Or An Old Spreadsheet." },
      { q: "Is The Lead Score Included In My Export?", a: "The 0–100 Score Can Be Part Of A Lead Record On Plans That Include AI Lead Scoring, Which Means Growth And Scale. On Free, Exports Focus On Listing And Enrichment Fields Such As Contact Details, Ratings And Review Counts." },
    ],
    related: ["/services/lead-dashboard", "/services/api-access", "/services/lead-data-normalisation", "/services/crm-pipeline-management", "/plans"],
    cta: { heading: "Build A List And Export It Today", text: "Three Free Queries Are Included, With The Lead Dashboard And CSV Export On The Free Plan.", label: "Start Free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/services/role-based-team-access",
    title: "Role-Based Team Access",
    h1: "Role-Based Team Access For Prospecting Teams",
    metaTitle: "Role-Based Team Access and Permissions",
    metaDescription: "Set up role-based access in LeadGen AI so each team sees the records it should. Learn how role modules, visibility and team structure fit together.",
    eyebrow: "Administration",
    intro: [
      "Role-Based Team Access Means Each Person In Your Workspace Sees And Does Only What Their Role Requires. LeadGen AI Is Multi-Tenant And Role-Based, So Each Team Sees The Records It Should. The Growth Plan Includes Full Team Access With Seven Role Modules, While The Free Plan Has A Single Admin User.",
      "For Admins, The Practical Question Is How To Turn A Real Team (Researchers, SDRs, Account Managers, A Manager Or Two) Into Roles That Keep Data Tidy Without Slowing Anyone Down. This Page Covers How To Think About Role Modules, Visibility And Team Structure, And The Habits That Keep Permissions Sensible As The Team Grows.",
    ],
    highlights: [
      "Seven Role Modules On Growth",
      "Each Team Sees Its Own Records",
      "Free Plan: One Admin User",
      "Pairs With Per-Lead Activity History",
    ],
    sections: [
      {
        heading: "Why Access Control Matters In Prospecting",
        paragraphs: [
          "A Prospecting Workspace Holds Contact Details, Notes From Calls, Audit Reports And A Log Of Every Message Sent. Not Everyone Needs All Of It. A Researcher Building Lists Rarely Needs To Send Campaigns; A Seller Working One Region May Not Need Another Region’s Pipeline; A Manager Needs Visibility Across Both.",
          "Access Control Reduces Mistakes As Much As It Reduces Risk. When People Only See The Records That Belong To Them, They Are Less Likely To Email Someone A Colleague Is Already Speaking To Or Edit A Lead They Do Not Own.",
        ],
      },
      {
        heading: "Role Modules And What They Control",
        paragraphs: [
          "On The Growth Plan LeadGen AI Gives You Full Team Access With Seven Role Modules. Rather Than Giving Everyone The Same Broad Rights, An Admin Decides Which Areas Of The Product Each Role Can Use. When Planning Roles, Teams Usually Think Through Areas Such As:",
        ],
        bullets: [
          "Running Scrape Queries And Spending Plan Quota",
          "Viewing And Editing Lead Records",
          "Moving Leads Through CRM Pipeline Stages",
          "Drafting And Sending Outreach Through The Email Transport",
          "Viewing SEO Audit And Opportunity Reports",
          "Exporting Leads To CSV And Administering Users",
        ],
      },
      {
        heading: "Visibility Follows Team Structure",
        paragraphs: [
          "LeadGen AI’s Role-Based Access Is Designed So Each Team Sees The Records It Should. Combined With Pipeline Owners, That Lets You Mirror How Your Organisation Actually Sells: By Region, By Product Line, Or By Client Account In An Agency.",
          "Because The Platform Is Also Multi-Tenant, Separate Organisations Or Client Workspaces Stay Apart. Role-Based Access Then Controls Who Can Do What Inside Each One.",
        ],
      },
      {
        heading: "Designing Roles For Common Team Shapes",
        paragraphs: [
          "A Small Team Might Use Just Three Roles: An Admin Who Manages Users And Quota, Sellers Who Work The Pipeline And Send Outreach, And A Viewer For A Founder Who Wants To Watch Progress. A Larger Team Typically Separates List Building From Outreach So That Query Quota Is Spent With Care, And Gives Managers Broad Read Access Without Making Them Admins.",
          "Whatever The Shape, Start With The Narrowest Access That Lets Each Person Do Their Job, Then Widen It When A Real Need Appears. Narrowing Rights After People Are Used To Them Is Harder.",
        ],
      },
      {
        heading: "Accountability Alongside Access",
        paragraphs: [
          "Permissions Decide What People Can Do; Activity History Shows What They Did. The CRM Pipeline Keeps A Full Activity History And Every Outreach Message Is Logged Against Its Lead, So A Manager Can Review Who Contacted Whom And When.",
        ],
      },
    ],
    steps: {
      heading: "Setting Up Roles For A New Team",
      items: [
        { title: "List The Real Jobs", text: "Write Down Who Builds Lists, Who Sells, Who Manages And Who Only Needs To Watch." },
        { title: "Map Jobs To Role Modules", text: "Decide Which Product Areas Each Job Needs: Queries, Records, Pipeline, Outreach, Reports, Export, Admin." },
        { title: "Invite With Narrow Rights", text: "Add Users With The Least Access That Lets Them Work, And Keep Admin Rights To One Or Two People." },
        { title: "Assign Owners", text: "Give Pipeline Leads Clear Owners So Visibility And Responsibility Line Up." },
        { title: "Review Quarterly", text: "Remove Leavers Promptly And Adjust Roles As Responsibilities Change." },
      ],
    },
    considerations: {
      heading: "Things Admins Should Plan For",
      items: [
        "The Free Plan Includes One Admin User; Full Team Access With Seven Role Modules Comes With Growth.",
        "Role Design Is An Organisational Decision; The Platform Enforces It But Cannot Decide It For You.",
        "Exported CSV Files Sit Outside Role-Based Access, So Restrict Export Rights Where Data Sensitivity Matters.",
        "Too Many Admins Weakens Control; Too Few Creates A Bottleneck When Someone Is Away.",
        "Offboarding Is A Process: Remove Access The Day Someone Leaves.",
      ],
    },
    example: {
      heading: "A Regional Sales Team Splitting Responsibilities",
      text: "Consider An Office-Supplies Wholesaler In Ahmedabad With A Sales Manager, Two Researchers And Four Field Sellers Covering Different Parts Of Gujarat. On The Growth Plan The Manager Sets Researchers Up To Run Queries And Edit Records But Not Send Campaigns, Gives Sellers Pipeline And Outreach Rights For Leads They Own, And Keeps Export With Herself. When A Seller Moves To Another Role, She Removes His Outreach Access The Same Day And Reassigns His Open Leads, Whose Activity History Stays Intact.",
    },
    faqs: [
      { q: "How Many Users Can I Have On The Free Plan?", a: "The Free Plan Includes One Admin User. Full Team Access With Seven Role Modules Is Part Of The Growth Plan." },
      { q: "Can Different Teams See Different Leads?", a: "Yes. LeadGen AI Is Role-Based So Each Team Sees The Records It Should, And Pipeline Owners Help Line Up Visibility With Responsibility." },
      { q: "Should Researchers Be Able To Send Outreach?", a: "Many Teams Separate The Two So List Building And Messaging Have Clear Owners, But It Depends On Your Size. Small Teams Often Combine Them." },
      { q: "What Happens To A Leaver’s Leads?", a: "Their Access Should Be Removed And Their Leads Reassigned To New Owners. Activity History And Message Logs Stay Attached To Each Lead." },
      { q: "How Many Admins Should A Workspace Have?", a: "Usually One Or Two. Too Many Admins Weakens Control, While Only One Can Create A Bottleneck When That Person Is Away. Keep Admin Rights Narrow And Give Managers Broad Read Access Instead Of Making Them Admins." },
      { q: "Should Everyone Be Able To Export Leads To CSV?", a: "Often Not. Exported Files Sit Outside Role-Based Access, So Once Data Leaves The Platform Anyone With The File Can Forward It. Many Teams Keep Export Rights With A Manager Or Admin Where Data Sensitivity Matters." },
      { q: "Is It Better To Start With Narrow Or Broad Permissions?", a: "Start Narrow. Give Each Person The Least Access That Lets Them Do Their Job, Then Widen It When A Real Need Appears. Taking Rights Away After People Are Used To Them Is Usually Harder Than Adding Them." },
      { q: "How Often Should Roles Be Reviewed?", a: "A Quarterly Review Suits Most Teams, Plus An Immediate Change Whenever Someone Leaves Or Changes Job. Remove Leavers The Same Day, Reassign Their Leads And Adjust Roles As Responsibilities Shift Between Researchers, Sellers And Managers." },
    ],
    related: ["/services/multi-tenant-workspaces", "/services/crm-pipeline-management", "/services/outreach-activity-logging", "/security-and-data-handling", "/plans"],
    cta: { heading: "Plan Roles For Your Team", text: "Walk Through How Role Modules Would Map To Your Team Structure.", label: "Request Access", href: "/book-a-demo" },
  },
  {
    path: "/services/api-access",
    title: "API Access",
    h1: "API Access With Per-Org API Keys",
    metaTitle: "API Access With Per-Org Keys on Scale",
    metaDescription: "LeadGen AI offers per-org API keys on the Scale plan. Learn general integration patterns, how to plan a connection to your systems and how to keep keys secure.",
    eyebrow: "For Technical Teams",
    intro: [
      "LeadGen AI Provides Per-Org API Keys On The Scale Plan, Giving Technical Teams A Programmatic Route To The Platform Alongside The Lead Dashboard And CSV Export. That Is What Is Offered: An API Key Issued Per Organisation, On The Highest Plan, For Teams That Want LeadGen AI To Sit Inside Their Own Data Flows.",
      "This Page Does Not Describe Specific Endpoints Or Named Connectors. Instead It Covers General Integration Patterns Teams Commonly Use With A Prospecting Platform, How To Plan A Connection Responsibly, And How To Look After Keys. For Endpoint Details, Confirm The Current Documentation With The LeadGen AI Team During Evaluation.",
    ],
    highlights: [
      "Per-Org API Keys On Scale",
      "No Named Third-Party Connectors Claimed",
      "General Integration Patterns Explained",
      "Key Security Is Your Responsibility Too",
    ],
    sections: [
      {
        heading: "What Is And Is Not Offered",
        paragraphs: [
          "The Scale Plan Lists Per-Org API Keys Alongside Unlimited Queries, A Distributed Scrape Fleet, Multiple Sources (LinkedIn, IndiaMART), Priority Support And SLA, And A Dedicated Success Manager. Free And Growth Plans Do Not List API Keys; On Those Plans, CSV Export Is The Route For Moving Leads Into Other Tools.",
          "LeadGen AI Does Not Advertise Ready-Made Connectors To Named CRMs Or Marketing Tools. Any Connection To Your Systems Is Something Your Team Builds Using The API Key, So Plan For Engineering Time.",
        ],
      },
      {
        heading: "Common Integration Patterns",
        paragraphs: [
          "The Following Are General Patterns Teams Use With Prospecting Data. Treat Them As Guidance For Planning, And Confirm What The API Supports Before Committing To A Design.",
        ],
        bullets: [
          "Scheduled Sync: A Nightly Job Pulls New Or Updated Leads Into An Internal Database Or Warehouse.",
          "Downstream Push: Your Own Service Forwards High-Scoring Leads Into The CRM Your Sellers Already Use.",
          "Reporting: Lead Counts, Scores And Pipeline Status Feed An Internal Dashboard.",
          "Enrichment Of Your Own Lists: Internal Records Are Matched Against Platform Data Where The API Allows It.",
        ],
      },
      {
        heading: "Planning The Data Flow",
        paragraphs: [
          "Before Writing Code, Decide Which System Is The Source Of Truth For Each Field. LeadGen AI Never Overwrites A Field A User Edited By Hand And Records Where Each Value Came From. If Your Integration Writes Data Back And Forth, Design It So Those Protections Are Not Undone By A Sync That Blindly Copies Values.",
          "Also Decide How Often Data Needs To Move. Scores Recalculate When A Lead Is Re-Enriched, So A One-Off Copy Will Drift. A Periodic Sync With Clear Rules For Updates Usually Works Better Than A Single Bulk Import.",
        ],
      },
      {
        heading: "Keeping API Keys Secure",
        paragraphs: [
          "A Per-Org Key Represents Your Organisation’s Access, So Treat It Like A Password. Standard Good Practice Applies:",
        ],
        bullets: [
          "Store Keys In A Secrets Manager Or Environment Variables, Never In Source Code.",
          "Limit Who In Your Organisation Can View Or Rotate The Key.",
          "Rotate The Key When A Team Member With Access Leaves Or A Leak Is Suspected.",
          "Log Your Own Integration’s Calls So You Can Trace Unexpected Activity.",
        ],
      },
      {
        heading: "Responsible Use Of Automated Access",
        paragraphs: [
          "Automation Makes It Easy To Move A Lot Of Contact Data Quickly. The Same Obligations Apply As In The Interface: Honour Opt-Outs, Respect Sending Limits In Any Downstream Outreach, And Check Data Protection Rules In The Jurisdictions You Work In. If A Contact Has Asked Not To Be Contacted, Make Sure That Status Reaches Every System The API Feeds.",
        ],
      },
    ],
    steps: {
      heading: "Planning An Integration",
      items: [
        { title: "Confirm Plan And Scope", text: "Check That You Are On, Or Moving To, The Scale Plan, And Confirm Current API Documentation With The LeadGen AI Team." },
        { title: "Define The Use Case", text: "Write Down Exactly What Data Should Move, In Which Direction And How Often." },
        { title: "Assign Field Ownership", text: "Decide Which System Owns Each Field So Syncs Never Overwrite Better Data." },
        { title: "Secure The Key", text: "Store The Per-Org Key In A Secrets Manager And Restrict Who Can Access It." },
        { title: "Build, Test, Monitor", text: "Start With A Small Sample, Verify Results Against The Dashboard, Then Add Logging And Alerts." },
      ],
    },
    considerations: {
      heading: "Before You Commit Engineering Time",
      items: [
        "API Keys Are Listed Only On The Scale Plan; Smaller Plans Rely On CSV Export.",
        "There Are No Advertised Named Connectors, So Any CRM Link Is Custom Work.",
        "Integrations Need Maintenance As Both Your Systems And The Platform Change.",
        "Automated Flows Can Spread Stale Or Opted-Out Contacts Quickly If Suppression Is Not Handled.",
        "Role-Based Access Does Not Extend To Systems You Copy Data Into; Secure Those Separately.",
      ],
    },
    example: {
      heading: "A Data Team Feeding An Internal Warehouse",
      text: "Suppose A Facilities-Services Group In Bengaluru Runs High-Volume Prospecting Across Several Cities On The Scale Plan. Its Two-Person Data Team Uses The Per-Org API Key In A Nightly Job That Copies New And Re-Scored Leads Into The Company’s Internal Warehouse, Where Regional Managers Already Have Reports. They Store The Key In Their Secrets Manager, Treat LeadGen AI As The Owner Of Enrichment Fields, And Make Sure Any Opt-Out Recorded In Their Own Systems Is Checked Before A Lead Is Passed To Sellers.",
    },
    faqs: [
      { q: "Which Plan Includes API Access?", a: "Per-Org API Keys Are Listed On The Scale Plan, Alongside Unlimited Queries, The Distributed Scrape Fleet And Priority Support." },
      { q: "Is There A Ready-Made Connector For My CRM?", a: "LeadGen AI Does Not Advertise Named CRM Connectors. Teams Use CSV Export, Or Build Their Own Connection With Per-Org API Keys On Scale." },
      { q: "Is The Key Per User Or Per Organisation?", a: "Keys Are Per Org, Meaning They Are Issued At The Organisation Level. Manage Who Can See Them Accordingly." },
      { q: "Where Can I Find Endpoint Documentation?", a: "Ask The LeadGen AI Team During Evaluation For Current API Documentation; This Page Covers Planning And General Patterns Only." },
      { q: "Can I Use The API On The Growth Plan?", a: "Per-Org API Keys Are Listed Only On The Scale Plan. On Free And Growth, CSV Export Is The Route For Moving Leads Into Other Tools, Which Works Well For Smaller Or Less Frequent Transfers." },
      { q: "What Should I Do If Our API Key Is Exposed?", a: "Treat It Like A Leaked Password. Rotate The Key Promptly, Update Your Integration To Use The New One, And Check Your Own Logs For Unexpected Activity. Rotating Is Also Sensible Whenever A Team Member With Access Leaves." },
      { q: "How Often Should Our Integration Sync Leads?", a: "It Depends On Your Use Case. Scores Recalculate When Leads Are Re-Enriched, So A One-Off Copy Will Drift. A Periodic Sync, Such As A Nightly Job With Clear Rules For Updates, Usually Works Better Than A Single Bulk Import." },
      { q: "How Do I Stop A Sync From Overwriting Corrected Data?", a: "Decide Which System Owns Each Field Before Writing Code. LeadGen AI Never Overwrites A Field A User Edited By Hand, So Design Your Integration Not To Blindly Copy Values Back And Forth In A Way That Undermines Those Corrections." },
    ],
    related: ["/services/csv-lead-export", "/services/distributed-scrape-fleet", "/services/multi-tenant-workspaces", "/platform", "/plans"],
    cta: { heading: "Discuss An Integration", text: "Talk Through Your Use Case And What The Scale Plan’s Per-Org API Keys Would Involve.", label: "Contact", href: "/contact" },
  },
  {
    path: "/services/distributed-scrape-fleet",
    title: "Distributed Scrape Fleet",
    h1: "Distributed Scrape Fleet For High-Volume Prospecting",
    metaTitle: "Distributed Scrape Fleet for Large Jobs",
    metaDescription: "LeadGen AI runs long scrape jobs on a worker fleet, so large jobs continue after you close the tab. See how background jobs, quotas and job records work.",
    eyebrow: "Infrastructure",
    intro: [
      "A Distributed Scrape Fleet Is A Pool Of Background Workers That Runs Large Data-Collection Jobs In Parallel, Independent Of The User’s Browser. In LeadGen AI, Long Jobs Run On A Worker Fleet, So A Large Scrape Keeps Going After The Browser Tab Is Closed. The Scale Plan Includes A Distributed Scrape Fleet For High-Volume Work That Needs Dedicated Infrastructure.",
      "For Teams Prospecting Across Many Categories And Cities, This Changes How Work Is Planned: You Queue Jobs And Return To Finished Results Rather Than Waiting At A Screen. Quotas Are Enforced Per Plan And Per Billing Cycle, And Every Job Records What It Fetched And When, So Volume Stays Easy To Track.",
    ],
    highlights: [
      "Jobs Continue After The Tab Closes",
      "Distributed Fleet Included On Scale",
      "Quotas Per Plan And Billing Cycle",
      "Every Job Records What It Fetched",
    ],
    sections: [
      {
        heading: "Why Large Scrapes Need Background Workers",
        paragraphs: [
          "A Single Query In LeadGen AI Fans Out To Each Enabled Source (Google Maps, LinkedIn And IndiaMART) And Then Results Are Normalised, De-Duplicated And Queued For Enrichment. Multiply That Across Dozens Of Locations And Categories And The Work Is Far Too Long To Run In One Browser Session.",
          "Running Jobs On A Worker Fleet Separates The Work From The Person Who Started It. A Seller Can Start A Regional Scrape Before A Meeting, Close The Laptop, And Find Results Ready Afterwards.",
        ],
      },
      {
        heading: "What The Fleet Handles",
        paragraphs: [
          "The Fleet Takes On The Long-Running Parts Of The Pipeline So The Interface Stays Responsive. In Practice That Means:",
        ],
        bullets: [
          "Fanning A Query Out To Each Enabled Source",
          "Collecting Listing Fields Such As Name, Category, Address, Website, Phones, Ratings And Reviews",
          "Feeding New Leads Into The Automatic Enrichment Queue",
          "Recording What Each Job Fetched And When",
        ],
      },
      {
        heading: "Quotas And Plan Limits",
        paragraphs: [
          "Quotas Are Enforced Per Plan And Per Billing Cycle. The Free Plan Includes Three Scrape Queries, Growth Includes 50 Scrape Queries Per Month, And Scale Offers Unlimited Queries With A Distributed Scrape Fleet And Multiple Sources Including LinkedIn And IndiaMART.",
          "Even With Unlimited Queries, Volume Should Be Planned. Large Jobs Produce Large Lists That Someone Must Review, Score And Contact Responsibly, So Plan Scrapes Around The Capacity Of The Team That Will Work Them.",
        ],
      },
      {
        heading: "Job Records And Accountability",
        paragraphs: [
          "Because Every Job Records What It Fetched And When, You Can Answer Practical Questions Later: Which Query Produced This Lead, How Fresh Is This Data, And How Much Of This Cycle’s Quota Has Gone On A Particular Campaign. Combined With Per-Field Source Tracking, Job Records Give Ops Teams The Audit Trail They Need To Trust A Large Data Set.",
        ],
      },
      {
        heading: "Organising High-Volume Work",
        paragraphs: [
          "Teams Running Many Jobs Usually Follow A Simple Naming And Scheduling Habit: One Job Per Category-And-Region Pair, A Clear Owner Per Job, And A Regular Schedule For Re-Running Searches In Markets That Change Quickly. Spreading Large Jobs Across A Week Also Spreads The Follow-Up Work For Sellers, Rather Than Delivering Thousands Of Leads On A Single Day.",
        ],
      },
    ],
    steps: {
      heading: "Running A Large Job On The Fleet",
      items: [
        { title: "Design The Queries", text: "Break A Market Into Category And Location Pairs, Or Directory Search Terms, That Match Your Segments." },
        { title: "Check Quota", text: "Confirm How Many Queries Your Plan And Billing Cycle Allow Before Queuing A Batch." },
        { title: "Queue And Leave", text: "Start The Jobs; The Worker Fleet Keeps Running After You Close The Browser Tab." },
        { title: "Review Results", text: "Return To Normalised, De-Duplicated Leads Moving Through Enrichment And Scoring." },
        { title: "Check The Job Record", text: "Use The Job’s Record Of What It Fetched And When To Confirm Coverage And Freshness." },
      ],
    },
    considerations: {
      heading: "What To Weigh Before Scaling Up",
      items: [
        "The Distributed Fleet And Unlimited Queries Are Scale Plan Features; Free And Growth Have Fixed Query Quotas.",
        "More Data Is Only Useful If Your Team Can Qualify And Contact It Responsibly.",
        "Source Coverage Varies By Market; Some Regions Have Sparse Listings No Matter How Many Jobs You Run.",
        "Scraped Data Ages, So Schedule Refreshes Rather Than Treating A Large Run As Permanent.",
        "Respect Each Source’s Terms And Local Data Protection Rules; Take Advice Where Unsure.",
      ],
    },
    example: {
      heading: "A National Supplier Mapping A New Vertical",
      text: "Imagine A Commercial-Kitchen Equipment Supplier On The Scale Plan That Wants To Map Restaurants And Caterers Across Twelve Indian Cities. The Operations Lead Queues One Google Maps Job Per City On Monday Morning And An IndiaMART Search For Catering Businesses, Then Closes Her Laptop. By The Afternoon The Jobs Have Finished In The Background; Leads Are De-Duplicated And Moving Through Enrichment. She Uses The Job Records To Confirm Every City Was Covered, Then Releases Two Cities A Day To The Sales Team So Follow-Up Stays Manageable.",
    },
    faqs: [
      { q: "Do I Need To Keep My Browser Open While A Scrape Runs?", a: "No. Long Jobs Run On A Worker Fleet, So A Large Scrape Keeps Going After The Browser Tab Is Closed." },
      { q: "Which Plan Includes The Distributed Scrape Fleet?", a: "The Scale Plan Lists A Distributed Scrape Fleet, Unlimited Queries And Multiple Sources Including LinkedIn And IndiaMART." },
      { q: "How Are Query Limits Counted?", a: "Quotas Are Enforced Per Plan And Per Billing Cycle: Three Queries On Free, 50 Per Month On Growth And Unlimited On Scale." },
      { q: "Can I Tell When A Lead Was Fetched?", a: "Yes. Every Job Records What It Fetched And When, And Each Field Records Its Source." },
      { q: "Does Unlimited Queries Mean I Should Scrape Everything At Once?", a: "No. Large Jobs Produce Large Lists That Someone Must Review, Score And Contact Responsibly. Plan Scrapes Around Your Team’s Capacity, And Consider Releasing Results In Batches So Follow-Up Stays Manageable." },
      { q: "How Should I Organise Many Jobs Across Regions?", a: "Many Teams Run One Job Per Category-And-Region Pair, Give Each Job A Clear Owner And Spread Large Batches Across The Week. That Keeps Job Records Easy To Read And Avoids Delivering Thousands Of Leads On A Single Day." },
      { q: "Why Did A Large Job Return Few Leads In One Region?", a: "Source Coverage Varies By Market, And Some Areas Simply Have Sparse Listings. Check The Job Record To Confirm What Was Fetched, Then Try Different Category Terms Or Add Another Source Such As IndiaMART Where It Suits The Segment." },
      { q: "How Often Should Large Scrapes Be Re-Run?", a: "Scraped Data Ages, Especially In Local Markets Where Businesses Open And Close Often. Schedule Refreshes For Fast-Changing Segments Rather Than Treating One Big Run As Permanent, And Use Job Records To See How Old Each Data Set Is." },
    ],
    related: ["/services/multi-source-lead-scraping", "/services/source-traceability", "/services/api-access", "/services/lead-list-building", "/platform", "/plans"],
    cta: { heading: "Plan High-Volume Prospecting", text: "See How The Scale Plan’s Distributed Fleet Would Handle Your Markets.", label: "Request Access", href: "/book-a-demo" },
  },
  {
    path: "/services/lead-dashboard",
    title: "Lead Dashboard",
    h1: "The Lead Dashboard: Find, Filter And Act On Leads",
    metaTitle: "Lead Dashboard: Views, Filters and Sorting",
    metaDescription: "Use the LeadGen AI lead dashboard to view, filter and sort leads by score, push the top band into your pipeline and export to CSV. Included on every plan.",
    eyebrow: "Everyday Workspace",
    intro: [
      "The Lead Dashboard Is Where You See Every Lead In Your LeadGen AI Workspace, Filter It Down To The Ones That Matter And Decide What To Do Next. It Is Included On Every Plan, From Free Upwards, Together With CSV Export. On Plans With AI Lead Scoring You Can Sort And Filter By The 0–100 Score And Push The Top Band Into The CRM Pipeline.",
      "Most Users Spend More Time Here Than Anywhere Else. This Page Explains What The Dashboard Shows, How To Build Useful Views, And How To Turn A Long List Into A Short List You Can Work Each Day.",
    ],
    highlights: [
      "Included On Free, Growth And Scale",
      "Sort And Filter By 0–100 Score",
      "Push Top Leads Into The Pipeline",
      "Export Any Filtered View To CSV",
    ],
    sections: [
      {
        heading: "What Each Lead Row Tells You",
        paragraphs: [
          "Each Lead Is One Normalised Record Per Business, De-Duplicated Across Sources. At A Glance You Can See The Details That Decide Whether A Lead Is Worth Pursuing:",
        ],
        bullets: [
          "Business Name, Category And Location",
          "Website, Phone Numbers And Public Emails",
          "Ratings, Review Counts And Listing Completeness",
          "The Lead Score And Its Stored Reasons, Where Scoring Is On",
          "Opportunity Flags Such As No Website Or Weak Audit",
        ],
      },
      {
        heading: "Filtering To A Workable List",
        paragraphs: [
          "A Raw Scrape Is Rarely A To-Do List. Filters Narrow It: By Category To Focus On One Vertical, By Location To Match A Territory, By Whether A Website Or Phone Exists, Or By Score Band. Combine Filters To Answer Real Questions Such As ‘Which Dental Clinics In This City Have No Reachable Contact Route?’ Or ‘Which Manufacturers Scored Above Our Threshold This Week?’",
        ],
      },
      {
        heading: "Sorting By Score And Reading The Reasons",
        paragraphs: [
          "On Plans That Include AI Lead Scoring, Each Lead Has A Single 0–100 Score With The Reasons Stored On The Record. The Score Reflects Record Completeness, Website Health, Fit Against Your Stated Market, Category And Geography, And Signals Of An Active, Operating Business. Sorting By Score Puts The Strongest Leads First.",
          "Read The Reasons Before Acting On A Number. Two Leads With Similar Scores May Be Strong For Different Reasons, And The Reasons Often Suggest The Right Opening Line.",
        ],
      },
      {
        heading: "From Dashboard To Pipeline And Outreach",
        paragraphs: [
          "Once You Have A Good View, Push The Top Band Into The CRM Pipeline, Where Leads Gain Stages, Owners And An Activity History. From There, AI-Drafted Outreach Can Use Each Lead’s Enrichment And Audit Data, And Campaigns Go Out Through Your Configured Email Transport With Every Message Logged.",
        ],
      },
      {
        heading: "Exporting A View",
        paragraphs: [
          "Any Filtered, Sorted View Can Be Exported To CSV For Use In Other Tools. Because An Export Is A Snapshot, Filter Carefully First And Re-Export When You Need Current Scores Or Enrichment.",
        ],
      },
    ],
    steps: {
      heading: "A Daily Dashboard Routine",
      items: [
        { title: "Open Your Territory View", text: "Filter By The Categories And Locations You Own." },
        { title: "Sort By Score", text: "Put The Highest-Scoring Leads At The Top And Skim Their Stored Reasons." },
        { title: "Check Opportunity Flags", text: "Note Leads Flagged For A Missing Website, Unreachable Contact Route Or Weak Audit." },
        { title: "Push To Pipeline", text: "Move The Day’s Best Leads Into The CRM Pipeline And Assign Owners." },
        { title: "Export If Needed", text: "Download A CSV Of Any View Another Tool Or Colleague Needs." },
      ],
    },
    considerations: {
      heading: "Using The Dashboard Well",
      items: [
        "Lead Scoring Is Part Of Growth And Scale; On Free The Dashboard Focuses On Listing And Enrichment Fields.",
        "A Score Is A Prioritisation Aid, Not A Verdict; Check The Reasons And Use Judgement.",
        "Very Broad Views Hide Good Leads; Build Narrow Views For Each Segment You Work.",
        "Exports Do Not Update, So Avoid Working From Old Downloads.",
        "Role-Based Access Determines Which Records Each User Sees On Their Dashboard.",
      ],
    },
    example: {
      heading: "An SDR’s Monday Morning",
      text: "Picture An SDR At A Small HR-Software Company In Kochi Who Owns The Hospitality Vertical In Kerala. On Monday She Opens The Dashboard, Filters To Hotels And Resorts In Her Districts, Sorts By Score And Reads The Reasons For The Top Twenty. Three Carry A Weak-Audit Flag That Suggests Their Booking Pages Are Slow, Which Gives Her A Natural Reason To Get In Touch. She Pushes Twelve Leads Into The Pipeline, Assigns Them To Herself And Exports The Rest Of The View For A Colleague Planning A Later Campaign.",
    },
    faqs: [
      { q: "Is The Lead Dashboard Available On The Free Plan?", a: "Yes. The Free Plan Includes The Lead Dashboard And CSV Export Along With Three Scrape Queries And Website Enrichment." },
      { q: "Can I Sort Leads By Score On Every Plan?", a: "AI Lead Scoring Is Listed On Growth And Scale. On Those Plans You Can Sort And Filter By Score And Push The Top Band Into The Pipeline." },
      { q: "Do I See Every Lead My Organisation Has Collected?", a: "That Depends On Your Role. LeadGen AI Uses Role-Based Access So Each Team Sees The Records It Should." },
      { q: "What Is The Quickest Way To Share A List With Someone Outside The Platform?", a: "Filter And Sort The View You Want, Then Export It To CSV, Keeping In Mind That The File Is A Snapshot." },
      { q: "What Are Opportunity Flags On The Dashboard?", a: "They Mark Leads With No Website, A Site That Does Not Resolve, No Reachable Contact Route Or A Weak Audit, Each With The Evidence Behind It. They Help You Spot A Specific Reason To Get In Touch Alongside The Score." },
      { q: "How Do I Build A View For My Territory?", a: "Filter By The Categories And Locations You Own, Then Sort By Score On Plans With AI Lead Scoring. Narrow Views For Each Segment You Work Are More Useful Than One Broad View, Which Tends To Hide Good Leads." },
      { q: "Should I Trust The Score Without Reading The Reasons?", a: "No. The Score Is A Prioritisation Aid, Not A Verdict. Two Leads With Similar Scores May Be Strong For Different Reasons, And The Stored Reasons Often Suggest The Best Opening Line For Each One." },
      { q: "What Happens When I Push Leads Into The Pipeline?", a: "They Gain Stages, Owners And An Activity History In The CRM Pipeline. From There You Can Use AI-Drafted Outreach Built From Each Lead’s Enrichment And Audit Data, Sent Through Your Configured Email Transport With Every Message Logged." },
    ],
    related: ["/services/ai-lead-scoring", "/services/sales-prioritisation", "/services/csv-lead-export", "/services/crm-pipeline-management", "/how-it-works"],
    cta: { heading: "Try The Dashboard With Your Own Query", text: "Three Free Queries, The Lead Dashboard And CSV Export Are Included On Free.", label: "Start Free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/services/source-traceability",
    title: "Source Traceability",
    h1: "Source Traceability: Know Where Every Lead Field Came From",
    metaTitle: "Source Traceability for Every Lead Field",
    metaDescription: "LeadGen AI records the source of each lead field and what every job fetched and when. See how traceability builds trust and supports responsible prospecting.",
    eyebrow: "Data Trust",
    intro: [
      "Source Traceability Means You Can Tell Where Each Piece Of Lead Data Came From. LeadGen AI Records The Source Of Every Field On Every Lead. Enrichment Notes Where Each Value Came From, And Every Scrape Job Records What It Fetched And When. Nothing In A Record Is An Unexplained Value.",
      "For Data-Conscious Teams, That Matters For Three Reasons: Sellers Trust Records They Can Check, Ops Teams Can Find The Cause Of Bad Data Quickly, And Compliance Conversations Go Better When You Can Show How A Contact Detail Was Obtained. This Page Explains What Is Traced, How To Use It And Where Its Limits Lie.",
    ],
    highlights: [
      "Per-Field Source On Every Lead",
      "Job Records Of What And When",
      "Enrichment Notes Each Value’s Origin",
      "Manual Edits Stay Protected",
    ],
    sections: [
      {
        heading: "What Gets Traced",
        paragraphs: [
          "Traceability In LeadGen AI Works At Three Levels:",
        ],
        bullets: [
          "Field Level: Each Field On A Lead Records The Source It Came From: Google Maps, LinkedIn, IndiaMART Or The Company’s Own Website.",
          "Enrichment Level: Enrichment Reads Only The Sources You Asked For And Records Where Each Value Came From.",
          "Job Level: Every Scrape Job Records What It Fetched And When.",
        ],
      },
      {
        heading: "Why Traceability Builds Trust In Data",
        paragraphs: [
          "Sellers Quickly Stop Trusting A List When A Few Numbers Are Wrong And Nobody Can Say Why. With Per-Field Sources, A Seller Who Finds A Bad Phone Number Can See Whether It Came From A Directory Listing Or The Business’s Own Contact Page, And Ops Can Decide Whether The Problem Is A Stale Listing Or Something Else.",
          "It Also Helps When Sources Disagree. If A Map Listing And A Website Show Different Addresses, Knowing Which Is Which Lets A Person Make A Sensible Call Rather Than Guessing.",
        ],
      },
      {
        heading: "Traceability And Responsible Prospecting",
        paragraphs: [
          "Many Data Protection Laws Expect Organisations To Know How They Obtained Personal Data And To Be Able To Explain It. Recording Sources Does Not By Itself Make Any Processing Lawful, But It Gives You The Facts You Need When A Contact Asks Where You Found Their Details Or When You Review Your Own Practices. Check The Current Rules In Your Markets And Take Legal Advice For Your Situation.",
          "Business Emails Added By Enrichment Are Discovered On The Company’s Own Site, And Enrichment Reads Only The Sources The User Asked For. Both Are Useful Facts In Those Conversations.",
        ],
      },
      {
        heading: "How Traceability Works With Enrichment",
        paragraphs: [
          "When Enrichment Runs, It Compares New Results With The Existing Record And Only Writes A Field When The New Value Is More Complete. It Updates The Source Note To Match. It Never Overwrites A Field The User Edited By Hand, So Human Corrections Are Not Silently Replaced By Automated Values.",
        ],
      },
      {
        heading: "Putting Traceability To Work",
        paragraphs: [
          "Teams Often Build A Few Habits Around Source Information: Checking The Source Before Calling A Number That Looks Odd, Reviewing Job Records When Coverage Of A Region Seems Thin, And Noting In The CRM When A Seller Corrects A Field So The Reason Is Visible Later. Over Time This Shows Which Sources Work Best For Which Markets And Segments.",
        ],
      },
    ],
    steps: {
      heading: "Investigating A Questionable Field",
      items: [
        { title: "Spot The Issue", text: "A Seller Flags A Phone Number, Email Or Address That Looks Wrong." },
        { title: "Check The Field’s Source", text: "Open The Lead And See Which Source Supplied The Value." },
        { title: "Check The Job Record", text: "Look At When The Job That Fetched It Ran To Judge Freshness." },
        { title: "Correct By Hand", text: "Edit The Field With The Right Value; The Manual Edit Will Not Be Overwritten By Later Enrichment." },
        { title: "Note The Pattern", text: "If One Source Is Often Wrong For A Segment, Adjust Which Sources You Enable For It." },
      ],
    },
    considerations: {
      heading: "Limits Of Traceability",
      items: [
        "Knowing A Value’s Source Does Not Prove The Value Is Still Correct; Listings Go Stale.",
        "Traceability Supports Compliance Work But Does Not Replace Legal Advice Or Your Own Policies.",
        "Source Notes Stay In The Platform; A CSV Export Or Downstream System May Not Carry Them.",
        "Manual Edits Are Protected, So A Wrong Manual Value Persists Until Someone Fixes It.",
        "Teams Need A Habit Of Checking Sources For Traceability To Change Outcomes.",
      ],
    },
    example: {
      heading: "Answering A Prospect’s Question",
      text: "Suppose A Marketing Consultant In Bristol Emails The Owner Of A Local Joinery Firm, Who Replies Asking Where His Address Came From. The Consultant Opens The Lead In LeadGen AI, Sees The Business Email Was Found On The Firm’s Own Contact Page And The Phone Number Came From Its Map Listing, And Replies With Exactly That. The Owner Asks Not To Be Contacted Again, So The Consultant Records The Opt-Out Against The Lead, Where It Sits Alongside The Logged Message History.",
    },
    faqs: [
      { q: "Can I See Which Source Supplied A Specific Field?", a: "Yes. Each Lead Records The Source Each Field Came From, Such As A Map Listing, A Directory Entry Or The Company’s Website." },
      { q: "Does LeadGen AI Record When Data Was Collected?", a: "Every Job Records What It Fetched And When, So You Can Judge How Fresh A Lead’s Data Is." },
      { q: "Is Source Traceability Enough For Data Protection Compliance?", a: "It Helps You Explain Where Data Came From, But Compliance Depends On Your Processing, Purposes And Local Law. Take Legal Advice For Your Markets." },
      { q: "Do Source Notes Survive A CSV Export?", a: "Plan For Them Not To. Treat Traceability As A Platform Feature And Keep The Platform As Your Reference When Questions Arise." },
      { q: "What Should I Do When Two Sources Show Different Addresses?", a: "Check Which Source Supplied Each Value And When The Job That Fetched It Ran. A Person Can Then Make A Sensible Call, Confirm On The Call If Needed, And Correct The Field By Hand, Which Later Enrichment Will Not Overwrite." },
      { q: "How Do I Answer A Prospect Who Asks Where I Found Their Details?", a: "Open The Lead And Check The Field’s Source, Such As The Firm’s Own Contact Page Or Its Map Listing, Then Explain Simply. If They Ask Not To Be Contacted Again, Record The Opt-Out Against The Lead Straight Away." },
      { q: "Does Enrichment Change The Source Note On A Field?", a: "Enrichment Writes A Field Only When The New Value Is More Complete And Updates The Source Note Accordingly. It Never Overwrites A Field Edited By Hand, So Human Corrections Are Not Silently Replaced." },
      { q: "Can Traceability Show Which Sources Work Best For A Segment?", a: "Yes, Over Time. If One Source Is Often Wrong Or Thin For A Particular Market, Patterns In Field Sources And Job Records Make That Visible, And You Can Adjust Which Sources You Enable For That Segment." },
    ],
    related: ["/services/lead-data-normalisation", "/services/distributed-scrape-fleet", "/services/outreach-activity-logging", "/responsible-prospecting", "/security-and-data-handling", "/data-sources"],
    cta: { heading: "Work With Data You Can Explain", text: "See Per-Field Sources And Job Records On Your Own Leads.", label: "Start Free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/services/local-business-prospecting",
    title: "Local Business Prospecting",
    h1: "Local Business Prospecting With Maps-Led Discovery",
    metaTitle: "Local Business Prospecting Workflow",
    metaDescription: "A practical workflow for selling to local SMBs: find businesses on Google Maps, enrich and score them, spot opportunities and run personalised outreach.",
    eyebrow: "For Sellers To Local SMBs",
    intro: [
      "Local Business Prospecting Is Finding And Approaching Small Businesses In A Defined Area (Salons, Clinics, Restaurants, Trades, Shops). LeadGen AI Handles It As One Pipeline: A Category-And-Location Query On Google Maps, Automatic Contact Enrichment, A 0–100 Score With Stored Reasons, Opportunity Flags And AI-Drafted Outreach Sent Through Your Own Email Transport.",
      "If You Sell Anything To Local SMBs (Software, Marketing, Accounting, Supplies, Equipment Servicing) The Challenge Is Rarely Finding Businesses. It Is Deciding Which Ones Are Worth Your Time And Saying Something Relevant When You Reach Out. This Page Sets Out A Step-By-Step Workflow In LeadGen AI For Exactly That.",
    ],
    highlights: [
      "Category Plus Location On Google Maps",
      "Contacts Enriched From Business Websites",
      "Scores And Flags Guide Priority",
      "Outreach Logged Against Each Lead",
    ],
    sections: [
      {
        heading: "Why Local Markets Reward A Focused Approach",
        paragraphs: [
          "Local Businesses Are Often Owner-Run, Busy And Wary Of Generic Pitches. They Respond Better To Someone Who Knows Their Area And Has Noticed Something Specific About Their Business. They Are Also Tightly Clustered By Geography, Which Makes Territory-Based Work Efficient For Field And Phone Sellers Alike.",
          "Map Listings Are A Natural Starting Point Because Nearly Every Local Business Keeps One, And Listings Carry Useful Signals: Category, Address, Phone, Website, Ratings, Review Counts And How Complete The Listing Is.",
        ],
      },
      {
        heading: "Step One: Discover Businesses By Category And Place",
        paragraphs: [
          "Start With A Query That Pairs A Category With A Location, Such As ‘Physiotherapy Clinics In Indiranagar’ Or ‘Bakeries In Manchester City Centre’. The Query Fans Out To Each Enabled Source And Results Are Normalised Into One De-Duplicated Record Per Business. For Product Sellers In India, An IndiaMART Search Can Add Suppliers And Traders That Do Not Rely On Map Listings.",
          "Break A City Into Neighbourhoods Or A Region Into Towns Rather Than Running One Huge Query; Smaller Segments Are Easier To Review And Assign.",
        ],
      },
      {
        heading: "Step Two: Enrich And Score",
        paragraphs: [
          "New Leads Queue For Enrichment Automatically. The Platform Finds Each Website, Crawls The Pages That Usually List Contact Details, And Adds Business Emails Found On The Company’s Own Site, Normalised Phone Numbers, Social Profiles And Company Details.",
          "On Growth And Scale, Each Lead Then Gets A 0–100 Score Reflecting Record Completeness, Website Health, Fit Against Your Stated Market, Category And Geography, And Signals Of An Active, Operating Business. Sort By Score To Find Businesses That Are Clearly Trading And Match Your Target.",
        ],
      },
      {
        heading: "Step Three: Find The Reason To Reach Out",
        paragraphs: [
          "Opportunity Detection Flags Businesses With No Website, Sites That Don’t Resolve, Listings With No Reachable Contact Route And Weak Audits, Each With The Evidence Behind It. For Sellers Of Web, Marketing Or Booking Services, Those Flags Are A Direct Opening. For Other Sellers, The Enrichment And Listing Data Still Give Context: Review Volume, Category, How Established The Online Presence Looks.",
        ],
        bullets: [
          "Web And Marketing Services: Lead With A Missing Site Or Weak Audit.",
          "Software And Booking Tools: Reference The Business Type And Current Online Set-Up.",
          "Suppliers And Services: Reference Category, Location And Visible Scale.",
        ],
      },
      {
        heading: "Step Four: Personalised Outreach And Follow-Up",
        paragraphs: [
          "Push The Top Band Into The CRM Pipeline, Assign Owners By Territory And Use AI-Drafted Outreach That Draws On Each Lead’s Enrichment And Audit Data. Review Every Draft Before Sending. Campaigns Go Through Your Configured Email Transport, Respect Sending Limits And Opt-Out Obligations, And Every Message Is Logged Against Its Lead.",
        ],
      },
    ],
    steps: {
      heading: "The Local Prospecting Loop",
      items: [
        { title: "Query A Neighbourhood", text: "Run A Category-And-Location Search For One Segment Of Your Territory." },
        { title: "Let Enrichment Run", text: "Contacts, Websites And Social Profiles Are Added Automatically From The Sources You Chose." },
        { title: "Sort And Filter", text: "Use Score, Flags And Listing Signals To Pick This Week’s Best Twenty Or Thirty Businesses." },
        { title: "Draft And Review", text: "Generate AI Drafts From Enrichment And Audit Data, Then Edit Them So Each Sounds Like You." },
        { title: "Send, Log, Follow Up", text: "Send Through Your Email Transport And Manage Replies And Next Steps In The Pipeline." },
      ],
    },
    considerations: {
      heading: "Practical Cautions",
      items: [
        "Many Very Small Businesses Publish Little Beyond A Phone Number, So Some Leads Will Have No Email To Enrich.",
        "Rules On Unsolicited Email And Calls Differ By Country; Check Current Requirements And Take Advice Where Needed.",
        "Owners Talk To Each Other In Small Markets, So A Careless Message Can Travel; Keep Volume Modest.",
        "Scores And Flags Support Your Judgement; A High-Scoring Business May Still Not Need What You Sell.",
        "Free Covers Three Queries; Sustained Territory Work Usually Needs Growth’s 50 Monthly Queries And Scoring.",
      ],
    },
    example: {
      heading: "A POS Reseller Covering One City",
      text: "Imagine A Point-Of-Sale Reseller In Jaipur With Two Sellers. Each Monday They Run Google Maps Queries For Cafés And Restaurants In Two Neighbourhoods, Let Enrichment Fill In Websites And Emails, Then Sort By Score. They Filter For Businesses With Healthy Review Counts, A Sign Of Steady Footfall, And Check Opportunity Flags For Those Without A Reachable Contact Route, Which They Plan To Visit In Person. The Rest Receive Reviewed AI Drafts Referencing Their Neighbourhood And Type Of Venue, Sent Through The Company’s Own Mail Server And Logged Against Each Lead.",
    },
    faqs: [
      { q: "Which Source Is Best For Local Businesses?", a: "Google Maps Is The Natural Starting Point For Most Local Categories. IndiaMART Suits Suppliers And Traders In India, And LinkedIn Adds Company Context Where A Business Has A Presence There." },
      { q: "What If A Local Business Has No Email Address?", a: "Enrichment Only Adds Emails Found On The Company’s Own Site. For Businesses Without One, Use The Listed Phone Number Or Plan An In-Person Visit." },
      { q: "How Many Businesses Should I Contact Each Week?", a: "There Is No Universal Number. Most Teams Pick A Volume They Can Personalise And Follow Up Properly, Then Adjust Based On Replies." },
      { q: "Can I Split A City Between Several Sellers?", a: "Yes. Run Queries By Neighbourhood, Push Leads Into The Pipeline And Assign Owners, With Role-Based Access Controlling What Each Person Sees." },
      { q: "How Should I Break Up A City For Prospecting?", a: "Run Separate Queries By Neighbourhood Or Town Rather Than One Huge Query. Smaller Segments Are Easier To Review, Easier To Assign To Sellers And Let You Mention The Area In Your Message, Which Local Owners Tend To Notice." },
      { q: "What Can I Say To A Business If I Do Not Sell Web Services?", a: "Use The Listing And Enrichment Data For Context: Their Category, Neighbourhood, Review Volume And Current Online Set-Up. Software Sellers Might Reference The Business Type, While Suppliers Can Reference Category, Location And Visible Scale." },
      { q: "Is The Free Plan Enough For Ongoing Local Prospecting?", a: "Free Includes Three Queries, Which Suits A Trial Of One Or Two Neighbourhoods. Sustained Territory Work Usually Needs Growth, Which Adds 50 Monthly Queries, AI Lead Scoring And AI-Drafted Outreach." },
      { q: "What Mistakes Hurt Local Prospecting Most?", a: "Generic Pitches And High Volume. Owners In Small Markets Talk To Each Other, So A Careless Message Can Travel. Review Every AI Draft, Keep Volume Modest And Check Local Rules On Unsolicited Email And Calls Before Starting." },
    ],
    related: ["/services/google-maps-lead-extraction", "/services/business-opportunity-detection", "/services/ai-drafted-outreach-messages", "/services/sales-prioritisation", "/services/lead-list-building"],
    cta: { heading: "Map Your Local Market", text: "Run Your First Category-And-Location Queries Free And See How Leads Are Enriched And Scored.", label: "Start Free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/services/agency-client-prospecting",
    title: "Agency Client Prospecting",
    h1: "Agency Client Prospecting With Audit-Led Pitches",
    metaTitle: "Agency Client Prospecting: Audit-Led Pitches",
    metaDescription: "How marketing agencies can find new clients with LeadGen AI: discover businesses, flag opportunities, attach audit evidence and send outreach that proves value.",
    eyebrow: "For Marketing Agencies",
    intro: [
      "Agency Client Prospecting Works Best When Your First Message Shows Expertise Rather Than Claiming It. LeadGen AI Is Built For That: It Finds Businesses In Your Target Niche And Area, Flags Opportunities Such As Missing Websites And Weak Audits With The Evidence Behind Them, And Drafts Outreach That Uses Each Lead’s Own Enrichment And Audit Data.",
      "Marketing Agencies Often Depend On Referrals, Which Are Welcome But Unpredictable. A Repeatable Outbound Process Fills The Gaps. This Page Sets Out A Concrete Workflow For Agencies, From Choosing A Niche To Running A Follow-Up Sequence, Using Only Features LeadGen AI Actually Has.",
    ],
    highlights: [
      "Find Clients By Niche And Area",
      "Opportunity Flags With Supporting Evidence",
      "Drafts Built From Audit Findings",
      "Separate Workspaces For Teams Or Clients",
    ],
    sections: [
      {
        heading: "Choose A Niche You Can Speak To",
        paragraphs: [
          "Agencies That Prospect ‘Any Business’ Struggle To Say Anything Specific. Pick One Or Two Niches Where You Already Have Results Or Knowledge (Dental Practices, Boutique Hotels, Home-Improvement Trades, B2B Manufacturers) And A Geography You Can Serve. The Narrower The Niche, The More Specific Your Observations About A Prospect’s Marketing Can Be.",
        ],
      },
      {
        heading: "Build The Target List",
        paragraphs: [
          "Run Category-And-Location Queries On Google Maps For Local Niches, IndiaMART Searches For Indian Manufacturers And Suppliers, And Add LinkedIn On The Scale Plan For Company Context. Results Are De-Duplicated Into One Record Per Business And Enriched Automatically With Websites, Business Emails From The Company’s Own Site, Phone Numbers And Social Profiles.",
          "Listing Signals Already Hint At Need: A Business With Many Reviews But A Thin Listing, Or A Respected Firm With No Social Presence, May Be Poorly Served By Its Current Marketing.",
        ],
      },
      {
        heading: "Let Opportunity Flags And Audits Do The Qualifying",
        paragraphs: [
          "Business Opportunity Detection Flags Businesses With No Website, Sites That Don’t Resolve, Listings With No Reachable Contact Route And Weak Audits In The Bottom Band, Each With Its Evidence. On Growth, SEO And Website-Build Reports Add Depth: The Audit Grades Technical Health, Content, Metadata, Structured Data And Performance, Ranks Findings By Severity In Plain English And Produces A Prioritised Fix List.",
          "Map The Flags To Your Services So Each Lead Lands With The Right Offer:",
        ],
        bullets: [
          "No Website Or Non-Resolving Site: Website Build",
          "Weak Audit On Metadata, Content Or Structured Data: SEO Retainer",
          "Strong Reviews, Weak Online Presence: Reputation And Social Work",
          "Performance Issues: Site Speed And Technical Fixes",
        ],
      },
      {
        heading: "Pitch With Evidence, Not Adjectives",
        paragraphs: [
          "AI-Drafted Outreach Uses Each Lead’s Enrichment And Audit Data, So A First Message Can Mention Two Or Three Specific Findings And Offer The Full Fix List. Edit Each Draft So The Tone Is Yours And The Claims Are Ones You Can Stand Behind. Avoid Promising Rankings Or Traffic; Describe What You Found And What You Would Fix.",
        ],
      },
      {
        heading: "Manage The Pipeline As A Team",
        paragraphs: [
          "Push Qualified Prospects Into The CRM Pipeline With Stages That Suit An Agency Sale: Contacted, Audit Shared, Call Booked, Proposal Sent, Won Or Lost. Owners And Activity History Keep Account Managers On The Same Page, And Every Message Sent Through Your Email Transport Is Logged. Multi-Tenant Workspaces And Role-Based Access Help Larger Agencies Keep Teams Or Sub-Brands Separate.",
        ],
      },
    ],
    steps: {
      heading: "An Agency Prospecting Cycle",
      items: [
        { title: "Define Niche And Area", text: "Choose The Business Types And Locations Where Your Case For Value Is Strongest." },
        { title: "Scrape And Enrich", text: "Run Queries Across The Relevant Sources And Let Enrichment Add Contacts And Websites." },
        { title: "Filter By Flags And Score", text: "Shortlist Leads With Opportunity Flags That Match Your Services And Solid Fit Scores." },
        { title: "Audit And Draft", text: "Review Each Shortlisted Audit, Then Edit AI Drafts That Reference Its Findings." },
        { title: "Send And Track", text: "Send Through Your Email Transport And Move Replies Through Pipeline Stages." },
      ],
    },
    considerations: {
      heading: "Points Agencies Should Weigh",
      items: [
        "Audit Reports Are A Door-Opener, Not A Full Strategy; Be Ready To Go Deeper On A Call.",
        "Unsolicited Audits Can Feel Intrusive; Keep The Tone Helpful And Offer, Rather Than Attach, Long Reports Where Appropriate.",
        "Prospecting Rules Differ By Country; Check Email And Data Protection Requirements Before Scaling.",
        "SEO And Website-Build Reports And AI Outreach Are Growth Features; Free Covers Scraping, Enrichment And Export.",
        "Results Depend On Your Services And Follow-Up; No Tool Guarantees New Clients.",
      ],
    },
    example: {
      heading: "A Boutique Agency Targeting Physiotherapy Clinics",
      text: "Consider A Four-Person Marketing Agency In Edinburgh That Has Done Good Work For Two Physiotherapy Practices. It Runs Google Maps Queries For Physiotherapy Clinics Across Five Scottish Towns, Filters For Leads With Weak Audits Or No Website, And Reviews The Top Thirty. For A Clinic Whose Audit Shows Missing Page Titles And No Structured Data, The Account Manager Edits An AI Draft That Names Those Two Issues And Offers The Prioritised Fix List. Replies Move Through The Pipeline, And The Team Reviews Which Flags Led To Calls After A Month.",
    },
    faqs: [
      { q: "Which Opportunity Flags Matter Most For Agencies?", a: "It Depends On Your Services. Missing Or Non-Resolving Websites Suit Web-Build Offers; Weak Audits Suit SEO And Technical Work; Thin Listings Suggest Local Presence Work." },
      { q: "Can Several Account Managers Prospect Without Stepping On Each Other?", a: "Yes. Pipeline Owners, Role-Based Access And Per-Lead Activity History Show Who Owns And Has Contacted Each Prospect." },
      { q: "Do I Need The Scale Plan To Prospect For Agency Clients?", a: "Not Necessarily. Growth Includes AI Scoring, Outreach And SEO And Website-Build Reports. Scale Adds Unlimited Queries, LinkedIn And IndiaMART Sources And Per-Org API Keys." },
      { q: "Is It Acceptable To Send A Prospect An Audit They Did Not Ask For?", a: "Many Agencies Do, But Tone Matters. Lead With One Or Two Useful Findings And Offer The Full Report Rather Than Overwhelming The Reader." },
      { q: "How Narrow Should An Agency’s Niche Be?", a: "Narrow Enough That You Can Say Something Specific About A Prospect’s Marketing. One Or Two Niches Where You Already Have Results, Such As Dental Practices Or Boutique Hotels, In A Geography You Can Serve Usually Works Better Than Targeting Any Business." },
      { q: "What Pipeline Stages Suit An Agency Sale?", a: "Many Agencies Use Stages Such As Contacted, Audit Shared, Call Booked, Proposal Sent And Won Or Lost. Owners And Activity History Keep Account Managers On The Same Page, And Every Message Sent Through Your Email Transport Is Logged Against The Lead." },
      { q: "Should I Promise Rankings Or Traffic In My Pitch?", a: "No. Describe What You Found And What You Would Fix Instead. Outcomes Depend On Many Factors, And Specific, Accurate Findings Build More Trust Than Promises. Edit Every AI Draft So Each Claim Is One You Can Stand Behind." },
      { q: "How Do I Know Which Flags Actually Lead To Clients?", a: "Review Your Pipeline After A Month Or So. Check Which Opportunity Flags And Audit Findings Led To Replies, Calls And Proposals, Then Focus Future Queries And Messages On The Niches And Flags That Worked Best." },
    ],
    related: ["/services/business-opportunity-detection", "/services/opportunity-reports", "/services/seo-agency-lead-generation", "/services/website-redesign-prospecting", "/services/multi-tenant-workspaces", "/industries/digital-agencies"],
    cta: { heading: "Find Your Next Agency Clients", text: "See How Opportunity Flags And Audits Could Feed Your Outbound Pipeline.", label: "Request Access", href: "/book-a-demo" },
  },
  {
    path: "/services/website-redesign-prospecting",
    title: "Website Redesign Prospecting",
    h1: "Website Redesign Prospecting For Web Studios",
    metaTitle: "Website Redesign Prospecting for Studios",
    metaDescription: "Find businesses whose websites need a redesign. Use LeadGen AI’s weak-audit flags, scorecards and fix lists to back a redesign pitch with real evidence.",
    eyebrow: "For Web Studios",
    intro: [
      "Website Redesign Prospecting Means Finding Businesses That Already Have A Website But Would Clearly Benefit From A Better One. LeadGen AI Supports It Directly: Its SEO Audit Grades Each Lead’s Site On Technical Health, Content, Metadata, Structured Data And Performance, And Opportunity Detection Flags Weak Audits In The Bottom Band, As Well As Sites That Don’t Resolve.",
      "For A Web Studio, Redesign Prospects Are Often Better Buyers Than Businesses With No Site At All: They Already Value Being Online And May Have A Budget Line For It. The Hard Part Is Evidence. This Page Shows How To Turn Audit Data Into A Redesign Pitch That A Business Owner Can Understand And Act On.",
    ],
    highlights: [
      "Weak-Audit Flags Find Tired Sites",
      "Per-Area Scorecard Backs Your Case",
      "Plain-English Findings Ranked By Severity",
      "Prioritised Fix List To Share",
    ],
    sections: [
      {
        heading: "Redesign Prospects Versus No-Website Prospects",
        paragraphs: [
          "A Business With No Website Needs Persuading That A Site Is Worth Having. A Business With A Weak Site Already Accepts That, But May Not Realise How Its Site Compares Or What Is Wrong With It. Your Pitch Therefore Shifts From ‘You Need A Website’ To ‘Here Is Specifically What Is Holding Your Current Site Back’.",
          "Sites That Don’t Resolve At All Sit Between The Two: The Owner Thinks They Have A Website, But Visitors Cannot Reach It. That Is Often The Most Urgent Message You Can Send.",
        ],
      },
      {
        heading: "Spotting Weak Sites At Scale",
        paragraphs: [
          "Start With Queries For The Business Types You Design For, In The Areas You Serve. After Enrichment Finds Each Website, The SEO Audit (Included With SEO And Website-Build Reports On Growth) Checks It Against Rules For Technical Health, Content, Metadata, Structured Data And Performance, Grades Each Area And Rolls Them Into An Overall Score.",
          "Opportunity Detection Then Flags The Bottom Band As Weak Audits. Combine That Flag With Lead Score And Listing Signals: A Business With Strong Reviews And A Failing Site Is A Better Redesign Prospect Than One That Appears Barely Active.",
        ],
      },
      {
        heading: "Reading The Audit Like A Designer",
        paragraphs: [
          "Not Every Audit Finding Justifies A Redesign. Missing Metadata Can Be Fixed In An Afternoon; Poor Performance Across Every Page, Broken Structure And Thin Content Usually Point To A Rebuild. Read The Per-Area Scorecard And Severity-Ranked Findings To Decide Which Pitch Fits:",
        ],
        bullets: [
          "A Few Metadata Or Structured-Data Gaps: Offer Fixes, Which Can Lead To A Larger Project Later.",
          "Poor Performance And Page-Health Metrics Across The Site: A Strong Case For A Rebuild.",
          "Weak Content And Technical Issues Together: A Redesign With A Content Refresh.",
          "Site Not Resolving: An Urgent Repair Or Replacement Conversation.",
        ],
      },
      {
        heading: "Building The Pitch From Evidence",
        paragraphs: [
          "AI-Drafted Outreach Uses Each Lead’s Enrichment And Audit Data, So Your First Message Can Reference Real Findings In Plain English. Keep It Short: Name The Overall Grade Or Two Specific Issues, Explain Why They Matter To Customers, And Offer To Send The Prioritised Fix List. Edit Every Draft Before It Goes Out Through Your Email Transport.",
          "Avoid Criticising The Previous Designer Or Exaggerating Consequences. Owners Respond Better To Calm, Specific Observations Than To Alarm.",
        ],
      },
      {
        heading: "Following Up And Closing",
        paragraphs: [
          "Track Each Prospect Through Pipeline Stages Such As Audit Shared, Call Booked And Proposal Sent. Because Every Message Is Logged Against Its Lead, You Can See At A Glance Who Has Seen The Audit And Who Needs A Nudge. When A Prospect Engages, The Full Report (Scorecard, Findings And Fix List) Forms The Basis Of Your Proposal.",
        ],
      },
    ],
    steps: {
      heading: "Redesign Prospecting, Step By Step",
      items: [
        { title: "Target The Right Businesses", text: "Query Categories You Design For In The Areas You Serve." },
        { title: "Audit The Sites", text: "Let Enrichment Find Websites And The SEO Audit Grade Each One." },
        { title: "Shortlist Weak But Active", text: "Filter For Weak-Audit Flags Plus Strong Listing Signals And Fit Scores." },
        { title: "Choose The Pitch", text: "Decide Between Quick Fixes, A Rebuild Or An Urgent Repair Based On The Scorecard." },
        { title: "Send And Follow Up", text: "Send Reviewed AI Drafts Referencing Specific Findings And Track Replies In The Pipeline." },
      ],
    },
    considerations: {
      heading: "Things To Keep In Mind",
      items: [
        "An Automated Audit Measures Technical And Content Signals; It Cannot Judge Brand Fit Or Visual Quality.",
        "Some Owners Are Attached To Their Current Site, So Frame Findings As Opportunities, Not Failures.",
        "SEO And Website-Build Reports Are Part Of Growth; Plan Your Tier Accordingly.",
        "A Site May Be Temporarily Down When Audited; Re-Check Before Calling It Non-Resolving.",
        "Email And Data Protection Rules Vary By Country; Review Them Before Running Campaigns.",
      ],
    },
    example: {
      heading: "A Three-Person Studio Targeting Dental Clinics",
      text: "Picture A Three-Person Web Studio In Pune That Has Rebuilt Sites For Two Dental Clinics. It Runs Google Maps Queries For Dental Clinics Across Pune And Nashik, Filters For Weak-Audit Flags, And Sorts By Score So Clinics With Many Reviews And Solid Fit Come First. One Clinic’s Audit Shows Poor Performance Metrics And Missing Structured Data Across Its Pages. The Studio’s Founder Edits An AI Draft That Names Those Findings In Plain Language, Offers The Fix List, And Logs The Reply When The Clinic Asks For A Call.",
    },
    faqs: [
      { q: "How Does LeadGen AI Decide A Website Is Weak?", a: "The SEO Audit Grades Technical Health, Content, Metadata, Structured Data And Performance, And Opportunity Detection Flags Sites Whose Audits Fall In The Bottom Band." },
      { q: "Can The Audit Judge Whether A Site Looks Dated?", a: "No. It Checks Technical, Content And Performance Rules. Visual And Brand Judgements Remain Yours, So Look At The Site Yourself Before Pitching." },
      { q: "Should I Attach The Full Audit To My First Email?", a: "Many Studios Mention Two Or Three Findings And Offer The Full Report On Request. That Keeps The First Message Short And Invites A Reply." },
      { q: "Is A Non-Resolving Site Always A Redesign Lead?", a: "Not Always. It May Be A Lapsed Domain Or Hosting Issue. Treat It As An Urgent Repair Conversation That Can Lead To A Redesign." },
      { q: "Are Redesign Prospects Better Than Businesses With No Website?", a: "Often, Because They Already Value Being Online And May Have A Budget For It. Your Pitch Shifts From Persuading Them To Have A Site To Showing Specifically What Is Holding Their Current Site Back." },
      { q: "When Do Audit Findings Justify A Full Rebuild?", a: "Poor Performance And Page-Health Metrics Across The Whole Site, Or Weak Content Combined With Technical Issues, Usually Point To A Rebuild. A Few Metadata Or Structured-Data Gaps Are Better Offered As Quick Fixes, Which Can Lead To A Larger Project Later." },
      { q: "How Do I Avoid Offending An Owner Who Likes Their Site?", a: "Frame Findings As Opportunities, Not Failures, And Never Criticise The Previous Designer. Calm, Specific Observations In Plain English Work Better Than Alarm, And Offering The Fix List Lets The Owner Judge The Evidence Themselves." },
      { q: "Which Prospects Should I Prioritise Among Weak Sites?", a: "Combine The Weak-Audit Flag With Lead Score And Listing Signals. A Business With Strong Reviews And A Failing Site Is Usually A Better Redesign Prospect Than One That Appears Barely Active Or Poorly Matched To Your Market." },
    ],
    related: ["/services/seo-website-audit", "/services/missing-website-detection", "/services/opportunity-reports", "/services/agency-client-prospecting", "/services/ai-drafted-outreach-messages"],
    cta: { heading: "Find Sites Worth Rebuilding", text: "See Weak-Audit Flags And Scorecards On Businesses In Your Target Market.", label: "Request Access", href: "/book-a-demo" },
  },
  {
    path: "/services/seo-agency-lead-generation",
    title: "SEO Agency Lead Generation",
    h1: "SEO Agency Lead Generation With Audit Door-Openers",
    metaTitle: "SEO Agency Lead Generation Workflow",
    metaDescription: "A lead generation workflow for SEO agencies: find prospects, use audit reports as door-openers, qualify with scores and flags, and manage outreach in one place.",
    eyebrow: "For SEO Agencies",
    intro: [
      "SEO Agencies Generate Leads Most Reliably By Showing A Prospect A Specific, Credible Problem With Their Own Site. LeadGen AI Is Built Around That Idea: It Finds Businesses In Your Target Niche, Audits Each Website For Technical Health, Content, Metadata, Structured Data And Performance, And Produces Client-Ready Output With A Prioritised Fix List.",
      "The Difficulty For SEO Agencies Is That Every Competitor Also Offers A ‘Free Audit’. What Sets Yours Apart Is Qualification (Auditing The Right Businesses) And Restraint In How You Present Findings. This Page Covers Both As A Step-By-Step Workflow In LeadGen AI.",
    ],
    highlights: [
      "Audits As Evidence-Backed Door-Openers",
      "Qualify With Scores Before Auditing Deeply",
      "Severity-Ranked Findings In Plain English",
      "Every Message Logged Per Lead",
    ],
    sections: [
      {
        heading: "Why Audit-Led Prospecting Works For SEO",
        paragraphs: [
          "SEO Is Hard For Owners To Evaluate, So Promises Sound Alike. A Short List Of Real Issues On Their Own Site, Explained In Plain English, Is Different: It Shows You Looked, And It Gives Them Something To Check. LeadGen AI’s Audit Report Includes An Overall Grade, A Per-Area Scorecard, Findings Ranked By Severity With Plain-English Explanations, Performance And Page-Health Metrics, And A Prioritised Fix List.",
        ],
      },
      {
        heading: "Qualifying Before You Pitch",
        paragraphs: [
          "Not Every Weak Site Belongs To A Good Client. Use The Lead Score To Check That A Business Is Active And Fits Your Stated Market, Category And Geography. Use Listing Signals Such As Reviews And Completeness To Judge Whether It Is Established Enough To Pay For Ongoing SEO.",
          "Good Qualification Questions To Answer From The Data Include:",
        ],
        bullets: [
          "Is The Business Clearly Operating, With Recent Reviews And A Complete Listing?",
          "Does It Sit In A Category Where Search Drives Enquiries?",
          "Do The Audit Findings Point To Work You Do Well And Can Explain?",
          "Is There A Reachable Contact Route, Such As A Business Email On Its Site?",
        ],
      },
      {
        heading: "Turning Findings Into A First Message",
        paragraphs: [
          "Choose The Two Or Three Highest-Severity Findings A Non-Specialist Can Understand, Such As Missing Page Titles, Absent Structured Data Or Slow Pages. AI-Drafted Outreach Uses The Lead’s Audit And Enrichment Data To Produce A First Version. Your Job Is To Tighten It, Remove Jargon And Make Sure Every Claim Is Accurate.",
          "Do Not Promise Rankings, Traffic Or Timelines. Explain What You Found, Why It Matters, And Offer The Fix List Or A Short Call.",
        ],
      },
      {
        heading: "Choosing Niches Where SEO Matters",
        paragraphs: [
          "SEO Agencies Often Do Best In Categories Where People Search Before They Buy: Clinics, Legal And Accounting Practices, Home Services, Hospitality, Education Providers And B2B Manufacturers Whose Buyers Research Suppliers Online. Run Category-And-Location Queries For Those, Or IndiaMART Searches For Indian Manufacturers, And Compare Audit Results Across A Niche To Understand Its Typical Weaknesses.",
        ],
      },
      {
        heading: "Running The Pipeline",
        paragraphs: [
          "Move Responsive Prospects Through Stages Such As Audit Shared, Discovery Call, Proposal And Won. The CRM Pipeline Keeps Owners And Full Activity History, And Every Message Sent Through Your Email Transport Is Logged Against Its Lead. Outreach Respects Sending Limits And Opt-Out Obligations; Honour Any Request To Stop.",
        ],
      },
    ],
    steps: {
      heading: "An SEO Agency Workflow",
      items: [
        { title: "Pick A Search-Driven Niche", text: "Choose Categories And Areas Where Buyers Search Before Choosing A Provider." },
        { title: "Scrape And Enrich", text: "Run Queries And Let Enrichment Find Websites And Business Contacts." },
        { title: "Qualify", text: "Filter By Score, Listing Signals And A Reachable Contact Route." },
        { title: "Review The Audit", text: "Pick The Clearest High-Severity Findings And Check Them Yourself." },
        { title: "Reach Out And Track", text: "Send Edited AI Drafts Through Your Email Transport And Manage Replies In The Pipeline." },
      ],
    },
    considerations: {
      heading: "Honest Trade-Offs",
      items: [
        "Prospects May Receive Many ‘Free Audit’ Emails; Specificity And Tone Are What Set Yours Apart.",
        "Automated Audits Cover Rule-Based Checks, Not Competitive Research Or Keyword Strategy.",
        "Verify A Finding Manually Before Naming It In Outreach To Avoid Embarrassing Errors.",
        "AI Scoring, Outreach And SEO Reports Are Growth Features; Free Offers Scraping, Enrichment And Export.",
        "Check Email Marketing And Data Protection Rules For Each Country You Prospect In.",
      ],
    },
    example: {
      heading: "A Small SEO Consultancy Focusing On Law Firms",
      text: "Suppose A Two-Consultant SEO Practice In Melbourne Wants More Work From Small Law Firms. It Runs Queries For Family And Conveyancing Lawyers Across Three Suburbs, Keeps Firms With Complete Listings, A Business Email And Solid Scores, And Reviews Their Audits. For A Firm Whose Pages Lack Meta Descriptions And Structured Data, One Consultant Confirms The Findings In A Browser, Edits The AI Draft To Two Short Paragraphs And Offers The Fix List. Over A Few Weeks The Team Notes Which Findings Prompted Replies.",
    },
    faqs: [
      { q: "What Does The Audit Report Give An SEO Agency To Share?", a: "An Overall Grade, A Per-Area Scorecard, Severity-Ranked Findings In Plain English, Performance And Page-Health Metrics And A Prioritised Fix List Designed To Be Handed To The Prospect." },
      { q: "How Do I Avoid Auditing Businesses That Will Never Buy?", a: "Qualify First. Use The Lead Score, Review Counts, Listing Completeness And Fit With Your Market Before Spending Time On An Audit-Led Pitch." },
      { q: "Can I Promise A Prospect Better Rankings Based On The Audit?", a: "Avoid It. Describe The Issues Found And How You Would Fix Them; Outcomes Depend On Many Factors Outside An Audit." },
      { q: "Which Niches Suit Audit-Led SEO Prospecting?", a: "Categories Where Customers Search Before Buying, Such As Clinics, Professional Services, Home Services And Hospitality, Tend To Respond To Search-Related Findings." },
      { q: "How Do I Stand Out When Prospects Get Many Free Audit Emails?", a: "Specificity And Tone. Name Two Or Three Verified, High-Severity Findings A Non-Specialist Can Understand, Explain Why They Matter, And Keep The Message Short. Generic Audit Offers Blur Together, While Accurate Observations About Their Own Site Do Not." },
      { q: "Does The Audit Cover Keyword Research Or Competitors?", a: "No. The Automated Audit Covers Rule-Based Checks On Technical Health, Content, Metadata, Structured Data And Performance. Keyword Strategy And Competitive Research Remain Your Agency’s Own Work, Often After A Prospect Engages." },
      { q: "Why Should I Verify Findings Before Sending Outreach?", a: "A Wrong Claim In A First Message Damages Credibility Quickly. Check The Top Findings Yourself In A Browser Before Naming Them, Especially Because A Site May Have Changed Since The Audit Ran." },
      { q: "Which Plan Do SEO Agencies Need?", a: "AI Scoring, AI-Drafted Outreach And SEO And Website-Build Reports Are Growth Features, Which Covers The Core Audit-Led Workflow. Free Offers Scraping, Enrichment And Export Only, While Scale Adds Unlimited Queries, LinkedIn And IndiaMART Sources And API Keys." },
    ],
    related: ["/services/seo-website-audit", "/services/opportunity-reports", "/services/agency-client-prospecting", "/services/ai-lead-scoring", "/services/prospect-research", "/industries/digital-agencies"],
    cta: { heading: "Open Doors With Audit Evidence", text: "See How LeadGen AI’s Audit Reports Could Support Your Agency’s Outbound Work.", label: "Request Access", href: "/book-a-demo" },
  },
  {
    path: "/services/sales-prioritisation",
    title: "Sales Prioritisation",
    h1: "Sales Prioritisation With Score Bands And Daily Lists",
    metaTitle: "Sales Prioritisation With Lead Score Bands",
    metaDescription: "Help sellers focus on the right leads each day. Use LeadGen AI score bands, stored reasons and opportunity flags to build short, focused daily call lists.",
    eyebrow: "For Sales Managers",
    intro: [
      "Sales Prioritisation Is Deciding Which Leads Each Seller Should Work Today. LeadGen AI Supports It With A 0–100 Score Per Lead, Reasons Stored On The Record, Opportunity Flags With Evidence, And The Ability To Sort And Filter By Score And Push The Top Band Into The CRM Pipeline.",
      "Most Teams Do Not Lack Leads; They Lack Focus. Sellers Cherry-Pick Familiar Names, Chase Stale Opportunities Or Work Lists In Alphabetical Order. This Page Shows Sales Managers How To Turn Scores Into Bands, Bands Into Daily Lists, And Daily Lists Into A Habit The Team Actually Follows.",
    ],
    highlights: [
      "Group Scores Into Clear Bands",
      "Reasons Explain Every Priority",
      "Short Daily Lists Per Seller",
      "Scores Refresh On Re-Enrichment",
    ],
    sections: [
      {
        heading: "What The Score Is Built From",
        paragraphs: [
          "LeadGen AI Gives Each Lead A Single 0–100 Score Reflecting Record Completeness, Website Health And Whether The Business Is Credibly Online, Fit Against Your Stated Market, Category And Geography, And Signals Of An Active, Operating Business. The Reasons Are Stored On The Record, So A Seller Can See Why A Lead Ranks Where It Does.",
          "Because Fit Is Measured Against Your Stated Market, Defining That Market Carefully Is The First Prioritisation Decision A Manager Makes.",
        ],
      },
      {
        heading: "Turning Scores Into Bands",
        paragraphs: [
          "Individual Numbers Lead To Arguments Over A Point Or Two. Bands Are Easier To Act On. Many Teams Use Three:",
        ],
        bullets: [
          "Top Band: Push Into The Pipeline And Work This Week.",
          "Middle Band: Hold For Campaigns Or Re-Check After Re-Enrichment.",
          "Low Band: Park Unless An Opportunity Flag Gives A Specific Reason To Act.",
        ],
      },
      {
        heading: "Building Daily Lists",
        paragraphs: [
          "A Daily List Should Be Short Enough To Finish. Filter Each Seller’s Territory To The Top Band, Sort By Score, And Add Any Leads With Fresh Opportunity Flags That Match Your Offer. Then Push Them Into The CRM Pipeline With The Seller As Owner. A List A Seller Can Complete Keeps Them Moving. A List Of Two Hundred Gets Put Off.",
        ],
      },
      {
        heading: "Keeping Priorities Current",
        paragraphs: [
          "Scores Recalculate When A Lead Is Re-Enriched, So A Business That Launches A Website Or Completes Its Listing Can Move Up. Re-Run Enrichment On Parked Leads From Time To Time And Review The Top Band Again. Activity History In The Pipeline Shows Which Priority Leads Have Actually Been Contacted, Which Is The Real Measure Of Whether Prioritisation Is Working.",
        ],
      },
      {
        heading: "Where Judgement Still Matters",
        paragraphs: [
          "Scores Summarise Data That Is Visible Online. They Cannot Know That A Prospect Just Signed With A Competitor Or That A Referral Is Warm. Encourage Sellers To Override Priorities When They Have Better Information, And To Correct Records By Hand. LeadGen AI Never Overwrites A Manual Edit.",
        ],
      },
    ],
    steps: {
      heading: "Setting Up A Prioritisation Routine",
      items: [
        { title: "Define Your Market", text: "State The Categories And Geographies You Sell To So Fit Scoring Reflects Them." },
        { title: "Agree Bands", text: "Choose Score Ranges For Top, Middle And Low Bands And Write Them Down." },
        { title: "Build Daily Lists", text: "Filter Each Territory To The Top Band Plus Relevant Flags And Keep The List Short." },
        { title: "Push And Assign", text: "Move Each List Into The Pipeline With An Owner." },
        { title: "Review Weekly", text: "Check Activity History, Re-Enrich Parked Leads And Adjust Bands If Needed." },
      ],
    },
    considerations: {
      heading: "Cautions For Managers",
      items: [
        "AI Lead Scoring Is Part Of Growth And Scale, Not The Free Plan.",
        "A Vague Market Definition Weakens Fit Scoring For Everyone.",
        "Bands Are A Team Convention; Revisit Them As You Learn Which Leads Convert.",
        "Leaning Too Hard On Scores Can Mean Promising Low-Band Leads With Strong Opportunity Flags Get Ignored.",
        "Prioritisation Helps Only If Sellers Work The List; Track Activity, Not Just List Creation.",
      ],
    },
    example: {
      heading: "A Manager Resetting A Scattered Team",
      text: "Imagine A Sales Manager At A Uniform Supplier In Ludhiana Whose Five Sellers Each Work Leads Their Own Way. She Sets The Stated Market To Schools, Hospitals And Hotels In Punjab, Agrees Bands With The Team, And Each Morning Filters Every Territory To The Top Band, Capping Lists At Fifteen. Leads Go Into The Pipeline With Owners. After A Month, Activity History Shows Far Fewer Untouched Top-Band Leads, And She Moves The Band Threshold Slightly After Seeing Which Leads Led To Meetings.",
    },
    faqs: [
      { q: "Why Use Bands Instead Of Raw Scores?", a: "Bands Turn A Precise Number Into A Clear Instruction (Work Now, Hold, Or Park) And Reduce Debate Over Small Differences." },
      { q: "Can A Low-Scoring Lead Still Be Worth Calling?", a: "Yes. A Lead With An Opportunity Flag That Matches Your Offer, Or A Warm Referral, Can Justify Action Regardless Of Score." },
      { q: "How Long Should A Daily List Be?", a: "Short Enough To Finish With Proper Follow-Up. Many Teams Find A List A Seller Completes Each Day Beats A Long One They Abandon." },
      { q: "What Makes A Lead Move Between Bands?", a: "Scores Recalculate When A Lead Is Re-Enriched, So New Information About Its Website, Listing Or Contact Details Can Change Its Band." },
      { q: "Why Does Defining Our Market Matter For Prioritisation?", a: "Fit Is Scored Against Your Stated Market, Category And Geography. A Vague Definition Weakens Fit Scoring For The Whole Team, So Describing The Categories And Regions You Sell To Carefully Is The First Prioritisation Decision A Manager Makes." },
      { q: "How Do I Know If Prioritisation Is Working?", a: "Check Activity History In The Pipeline, Not Just Whether Lists Were Created. If Top-Band Leads Are Actually Being Contacted And Some Lead To Meetings, It Is Working. Untouched Top-Band Leads Suggest Lists Are Too Long Or Not Being Followed." },
      { q: "Can Sellers Override The Score?", a: "Yes, And They Should When They Know More. Scores Summarise Data Visible Online, So They Cannot Know About A Warm Referral Or A Recent Competitor Deal. Sellers Can Also Correct Records By Hand Without Later Enrichment Overwriting Them." },
      { q: "Is Lead Scoring Available On The Free Plan?", a: "No. AI Lead Scoring Is Part Of The Growth And Scale Plans. On Free You Can Still Filter And Sort By Listing And Enrichment Fields, But Score Bands Need A Plan With Scoring Switched On." },
    ],
    related: ["/services/ai-lead-scoring", "/services/lead-dashboard", "/services/crm-pipeline-management", "/services/business-opportunity-detection", "/services/local-business-prospecting"],
    cta: { heading: "Give Your Team A Focused List", text: "See How Score Bands And Daily Lists Would Work With Your Territories.", label: "Request Access", href: "/book-a-demo" },
  },
  {
    path: "/services/lead-list-building",
    title: "Lead List Building",
    h1: "Lead List Building: Query Design, Segments And Quality",
    metaTitle: "Lead List Building With Better Queries",
    metaDescription: "Build better lead lists with LeadGen AI: design focused queries across Google Maps, LinkedIn and IndiaMART, segment results and keep list quality high.",
    eyebrow: "For Marketers And SDRs",
    intro: [
      "Lead List Building Is Turning A Target Market Into A Concrete Set Of Businesses You Can Contact. In LeadGen AI It Starts With A Query (A Category And A Location, Or A Directory Search Term) That Fans Out To Each Enabled Source And Returns Normalised, De-Duplicated Records That Are Then Enriched Automatically.",
      "The Quality Of A List Is Decided Mostly Before You Press Search. Query Design, Segmentation And A Few Quality Checks Matter More Than Volume. This Page Explains How Marketers And SDRs Can Build Lists That Are Focused Enough To Personalise And Clean Enough To Trust.",
    ],
    highlights: [
      "Queries Fan Out Across Sources",
      "Segment By Category And Geography",
      "De-Duplicated, Enriched Records",
      "Quality Checks Before Outreach",
    ],
    sections: [
      {
        heading: "Designing Queries That Match Your Market",
        paragraphs: [
          "Google Maps Queries Pair A Category With A Location. IndiaMART Takes Directory Search Terms That Describe Products Or Suppliers. LinkedIn Adds Company Context On The Scale Plan. A Precise Category And A Bounded Location Produce A List You Can Review. A Vague Term Over A Whole Country Produces Noise.",
          "Try The Words Your Buyers Would Use To Describe Themselves. ‘Physiotherapy Clinic’ And ‘Sports Injury Clinic’ May Return Different Businesses, And Running Both Can Widen Coverage Without Losing Focus.",
        ],
      },
      {
        heading: "Segmenting From The Start",
        paragraphs: [
          "Build One List Per Segment You Will Message Differently. Useful Segment Dimensions Include:",
        ],
        bullets: [
          "Category Or Product Line",
          "Geography: City, District Or Neighbourhood",
          "Online Maturity: Has A Website, Healthy Audit Or None",
          "Visible Scale: Review Counts And Listing Completeness",
          "Score Band, On Plans With AI Lead Scoring",
        ],
      },
      {
        heading: "What The Platform Does For List Quality",
        paragraphs: [
          "Results Are Normalised Into One Record Per Business And De-Duplicated Across Sources, So The Same Company Does Not Appear Three Times. Enrichment Adds Business Emails Found On The Company’s Own Site, Normalised Phone Numbers, Websites, Social Profiles And Company Details. It Only Writes A Field When The New Value Is More Complete. Each Field Records Its Source, And Every Job Records What It Fetched And When.",
        ],
      },
      {
        heading: "Checks Before A List Goes Live",
        paragraphs: [
          "Before Handing A List To Sellers Or A Campaign, Spot-Check Twenty Records: Are They The Right Type Of Business, In The Right Place, Still Trading? Filter Out Records With No Contact Route If You Plan Email Outreach, And Remove Businesses You Already Work With. Small Checks Prevent Large Embarrassments.",
        ],
      },
      {
        heading: "Planning Volume Around Quotas",
        paragraphs: [
          "Queries Are Counted Against Your Plan: Three On Free, 50 Per Month On Growth And Unlimited On Scale. On Limited Plans, Spend Queries On Your Highest-Value Segments First, And Review Results Before Running The Next Batch So You Learn What A Good Query Looks Like.",
        ],
      },
    ],
    steps: {
      heading: "Building A List From Scratch",
      items: [
        { title: "Define The Segment", text: "Write Down The Business Type, Location And Reason You Are Contacting Them." },
        { title: "Draft Queries", text: "Choose Category-And-Location Pairs Or Directory Terms In Your Buyers’ Own Words." },
        { title: "Run And Review", text: "Run The Queries And Scan The First Results For Relevance Before Running More." },
        { title: "Filter And Segment", text: "Use The Dashboard To Split Results By Category, Area, Contact Route And Score." },
        { title: "Spot-Check And Hand Over", text: "Check A Sample By Hand, Then Push To The Pipeline Or Export To CSV." },
      ],
    },
    considerations: {
      heading: "Common Pitfalls",
      items: [
        "Big Lists Feel Productive But Are Hard To Personalise; Prefer Several Focused Lists.",
        "Category Labels Vary By Source, So Check Results Rather Than Trusting Labels Blindly.",
        "Some Businesses Publish Little Contact Information; Expect Gaps In Email Coverage.",
        "Lists Age Quickly In Fast-Changing Local Markets; Plan Refreshes.",
        "Check Data Protection And Marketing Rules Before Contacting People On A New List.",
      ],
    },
    example: {
      heading: "An SDR Building Lists For A New Product",
      text: "Consider An SDR At An Inventory-Software Start-Up In Hyderabad Tasked With Testing Demand Among Hardware Wholesalers. She Runs IndiaMART Searches For Hardware And Sanitaryware Wholesalers Plus Google Maps Queries For The Same Categories In Two Cities. After De-Duplication She Splits Results By City And By Whether A Website Exists, Spot-Checks Twenty Records, Removes Three Existing Customers And Pushes Two Segments Of Forty Into The Pipeline With Different Opening Messages.",
    },
    faqs: [
      { q: "Should I Run One Big Query Or Several Small Ones?", a: "Several Focused Queries Usually Work Better. They Give Segments You Can Message Specifically And Make Review Manageable." },
      { q: "Will The Same Business Appear Twice If It Is On Several Sources?", a: "Results Are Normalised Into One Record Per Business And De-Duplicated Across Sources." },
      { q: "How Do I Build Lists On The Free Plan?", a: "Free Includes Three Scrape Queries, Website Enrichment, The Lead Dashboard And CSV Export, So Choose Your Three Most Important Segments." },
      { q: "What Should I Check Before A List Goes To Sellers?", a: "Relevance, Location, Whether Businesses Are Still Trading, A Usable Contact Route And Overlap With Existing Customers." },
      { q: "How Often Should I Refresh A Lead List?", a: "It Depends On How Fast The Market Changes. Local Categories With Frequent Openings And Closures Benefit From Re-Running Queries Every Few Months, While Stable B2B Directories Can Be Refreshed Less Often. Re-Enrichment Also Updates Contact Fields And Scores On Existing Records." },
      { q: "How Do I Choose The Right Words For A Query?", a: "Use The Terms Your Buyers Would Use To Describe Themselves. Similar Terms Such As “Physiotherapy Clinic” And “Sports Injury Clinic” Can Return Different Businesses, So Running Both Can Widen Coverage While Keeping The List Focused." },
      { q: "Which Segments Should I Split A List Into?", a: "Build One List Per Segment You Would Message Differently. Useful Dimensions Include Category, Geography, Online Maturity Such As Having A Website, Visible Scale From Reviews And Listing Completeness, And Score Band On Plans With AI Lead Scoring." },
      { q: "Why Do Some Businesses On My List Have No Email?", a: "Some Businesses Publish Little Contact Information, And Enrichment Only Adds Business Emails Found On The Company’s Own Site. Expect Gaps, Filter Out Records Without A Contact Route If You Plan Email Outreach, And Use Listed Phone Numbers For The Rest." },
    ],
    related: ["/services/multi-source-lead-scraping", "/services/google-maps-lead-extraction", "/services/indiamart-lead-extraction", "/services/lead-dashboard", "/services/lead-deduplication"],
    cta: { heading: "Build Your First Focused List", text: "Three Free Queries Are Included, Enough To Test A Well-Designed Segment.", label: "Start Free", href: "https://leadgeneration.oxo1.com/" },
  },
  {
    path: "/services/prospect-research",
    title: "Prospect Research",
    h1: "Prospect Research Before The Call",
    metaTitle: "Prospect Research Using Enrichment and Audits",
    metaDescription: "Prepare for sales calls in minutes. Use LeadGen AI enrichment, score reasons, audit findings and activity history to research a prospect before you speak.",
    eyebrow: "For Account Executives",
    intro: [
      "Prospect Research Is The Preparation You Do Before A Call Or Meeting So You Can Talk About The Prospect’s Business Rather Than Your Own. LeadGen AI Puts Most Of That Context On One Record: Enriched Contact Details, Website And About Pages, Social Profiles, The Lead Score With Its Reasons, SEO Audit Findings, Opportunity Flags And The Full Activity History.",
      "Account Executives Rarely Have An Hour Per Prospect. The Goal Is A Focused Ten-Minute Routine That Brings Out What Matters. This Page Sets One Out, Using Only The Data LeadGen AI Actually Holds, And Suggests What To Check Outside The Platform.",
    ],
    highlights: [
      "Context Gathered On One Record",
      "Score Reasons Suggest Talking Points",
      "Audit Findings Give Specific Hooks",
      "History Shows Every Prior Touch",
    ],
    sections: [
      {
        heading: "What Is Already On The Record",
        paragraphs: [
          "Before Opening Another Tab, Read The Lead Record. It Can Hold:",
        ],
        bullets: [
          "Business Name, Category, Address, Ratings And Review Counts",
          "Website Plus Contact And About Pages, Found By Enrichment",
          "Business Emails, Normalised Phone Numbers And Social Profiles",
          "A 0–100 Score With Stored Reasons",
          "SEO Audit Grades And Severity-Ranked Findings, On Plans With Reports",
          "Opportunity Flags And Their Evidence",
        ],
      },
      {
        heading: "Reading The Score Reasons",
        paragraphs: [
          "The Stored Reasons Explain Why The Lead Scored As It Did: How Complete The Record Is, How Healthy The Website Looks, How Well It Fits Your Market And Whether It Shows Signs Of An Active Business. They Often Point To A Conversation Topic: A Strong Fit With A Weak Site, Or An Active Business With An Incomplete Listing.",
        ],
      },
      {
        heading: "Using Audit Findings Carefully",
        paragraphs: [
          "If The Prospect Has A Website, The Audit’s Plain-English Findings And Performance Metrics Give You Concrete, Verifiable Observations. Pick One Or Two Relevant To What You Sell And Check Them Yourself In A Browser. Raised As Questions Rather Than Criticism, They Show Preparation Without Putting The Prospect On The Defensive.",
        ],
      },
      {
        heading: "Checking History Before You Speak",
        paragraphs: [
          "The CRM Pipeline Keeps Full Activity History And Every Outreach Message Is Logged Against Its Lead. Read It Before The Call: Who Reached Out, What Was Said, What The Prospect Replied. Nothing Hurts A Call Faster Than Repeating A Pitch A Colleague Already Made.",
        ],
      },
      {
        heading: "What To Check Beyond The Platform",
        paragraphs: [
          "LeadGen AI Holds What Sources And The Business’s Own Website Publish. For Bigger Deals, AEs Often Also Read Recent Posts On The Prospect’s Social Profiles, Skim The About Page For History And Values, And Think About Likely Objections. Record Anything Useful In The Pipeline So The Next Person Benefits.",
        ],
      },
    ],
    steps: {
      heading: "A Ten-Minute Research Routine",
      items: [
        { title: "Read The Record", text: "Note Category, Location, Reviews And Contact Details." },
        { title: "Read The Score Reasons", text: "Identify The Strongest Fit Signals And Any Gaps." },
        { title: "Scan The Audit", text: "Pick One Or Two Findings Relevant To Your Offer And Verify Them." },
        { title: "Review History", text: "Check Previous Messages, Replies And Notes In The Pipeline." },
        { title: "Write Three Questions", text: "Prepare Open Questions Based On What You Found, And Log Them On The Lead." },
      ],
    },
    considerations: {
      heading: "Research Pitfalls",
      items: [
        "Data Reflects What Was Public When Collected; Confirm Anything Important On The Call.",
        "Audit Findings Are Technical Signals; Don’t Assume You Know The Prospect’s Priorities.",
        "Over-Researching Small Deals Wastes Time; Match Effort To Deal Size.",
        "Use Social Profiles For Business Context Only, And Stay Respectful Of Personal Boundaries.",
        "Scoring And Audit Reports Require Growth Or Scale.",
      ],
    },
    example: {
      heading: "An AE Preparing For A Discovery Call",
      text: "Imagine An Account Executive At A Scheduling-Software Company In Dublin With A Call Booked With A Chain Of Three Dental Practices. In Ten Minutes She Reads The Record (Strong Reviews, All Three Addresses). She Sees Score Reasons Noting Good Fit But A Slow Website, Checks The Audit’s Performance Findings And Confirms One In Her Browser, And Reads The Logged Emails Showing A Colleague’s First Message. She Opens The Call By Asking How Patients Currently Book, Rather Than Pitching.",
    },
    faqs: [
      { q: "Where Does The Context On A Lead Record Come From?", a: "From The Sources You Enabled (Google Maps, LinkedIn, IndiaMART) And From Enrichment Of The Business’s Own Website, With Each Field’s Source Recorded." },
      { q: "Can I See What My Colleagues Have Already Sent A Prospect?", a: "Yes, Subject To Your Role. Every Message Is Logged Against Its Lead And The Pipeline Keeps Full Activity History." },
      { q: "How Should I Raise Audit Findings On A Call?", a: "As Questions, For Example Asking Whether Site Speed Affects Bookings, Rather Than As Criticism. Verify The Finding First." },
      { q: "Is This Enough Research For Large Deals?", a: "It Is A Strong Starting Point. For Larger Deals, Add Reading Beyond The Platform And Record What You Learn On The Lead." },
      { q: "Should I Research Every Lead This Thoroughly?", a: "No. Save The Full Routine For Booked Calls And Meetings. For First-Touch Outreach, The Score Reasons And One Audit Finding Are Usually Enough To Write A Relevant Message, And AI-Drafted Outreach Already Draws On Enrichment And Audit Data." },
      { q: "What Should I Do With Information I Learn On A Call?", a: "Record It On The Lead In The Pipeline. Notes, Stage Changes And Corrected Fields Help The Next Person Who Works The Account, And Fields You Edit By Hand Are Never Overwritten By Later Enrichment." },
      { q: "How Recent Is The Data On A Lead Record?", a: "It Reflects What Sources And The Business’s Own Website Published When The Data Was Collected. Every Job Records What It Fetched And When, So Check That Date And Confirm Anything Important Directly With The Prospect." },
      { q: "Is It Fine To Use A Prospect’s Social Profiles For Research?", a: "Use Them For Business Context, Such As Recent Company Posts Or Announcements. Stay Respectful Of Personal Boundaries, And Avoid Bringing Up Anything That Would Feel Intrusive In A First Conversation." },
    ],
    related: ["/services/ai-contact-enrichment", "/services/website-enrichment", "/services/social-profile-enrichment", "/services/outreach-activity-logging", "/services/seo-agency-lead-generation"],
    cta: { heading: "Prepare For Calls Faster", text: "See How Much Context A Single LeadGen AI Lead Record Holds.", label: "Request Access", href: "/book-a-demo" },
  },
  {
    path: "/services/opportunity-reports",
    title: "Opportunity Reports",
    h1: "Opportunity Reports: Shareable Audits And Fix Lists",
    metaTitle: "Opportunity Reports With Shareable Fix Lists",
    metaDescription: "LeadGen AI opportunity reports give agencies a client-ready audit: overall grade, per-area scorecard, severity-ranked findings and a prioritised fix list.",
    eyebrow: "For Agencies",
    intro: [
      "An Opportunity Report Is A Document You Can Hand To A Prospect That Shows What Is Holding Their Online Presence Back And What To Fix First. In LeadGen AI, The SEO Audit Produces Client-Ready Output (An Overall Grade With A Per-Area Scorecard, Findings Ranked By Severity With Plain-English Explanations, Performance And Page-Health Metrics, And A Prioritised Fix List). Opportunity Detection Adds Flags With The Evidence Behind Them.",
      "For Agencies, The Report Is Both A Sales Asset And The Start Of A Scope Of Work. This Page Explains What Goes Into It, How To Present It, And How To Use It From First Contact To Proposal.",
    ],
    highlights: [
      "Overall Grade And Per-Area Scorecard",
      "Severity-Ranked, Plain-English Findings",
      "Prioritised Fix List To Hand Over",
      "Opportunity Flags With Evidence",
    ],
    sections: [
      {
        heading: "What Is In The Report",
        paragraphs: [
          "The Audit Checks A Lead’s Website Against Rules Covering Technical Health, Content, Metadata, Structured Data And Performance, Grades Each Area And Rolls The Grades Into An Overall Score. The Output Includes:",
        ],
        bullets: [
          "An Overall Grade With A Scorecard For Each Area",
          "Findings Ranked By Severity, Each Explained In Plain English",
          "Performance And Page-Health Metrics",
          "A Prioritised Fix List That Can Be Handed To The Prospect",
        ],
      },
      {
        heading: "Where Opportunity Flags Fit",
        paragraphs: [
          "Opportunity Detection Flags Businesses With No Website, Sites That Don’t Resolve, Listings With No Reachable Contact Route And Weak Audits In The Bottom Band. Each Flag Carries Its Evidence. For Businesses With No Working Site There Is No Audit To Share, So The Flag And Its Evidence Become The Conversation Instead.",
        ],
      },
      {
        heading: "Presenting A Report To A Prospect",
        paragraphs: [
          "A Report Lands Better When It Is Introduced, Not Dumped. Summarise The Overall Grade And The Two Most Important Findings In Your Message, And Offer The Full Report. When You Share It, Walk Through The Fix List In Order And Explain Which Items You Would Handle And Roughly How. Keep The Tone Factual And Helpful.",
        ],
      },
      {
        heading: "From Report To Proposal",
        paragraphs: [
          "The Prioritised Fix List Maps Naturally To A Scope: Quick Fixes In A First Phase, Structural Work In A Second, Ongoing Content Or Performance Work After That. Because Findings Are Severity-Ranked, You Can Justify The Order. After The Client Signs, A Later Audit Gives A Straightforward Before-And-After View Of The Same Areas.",
        ],
      },
      {
        heading: "Using Reports Inside The Pipeline",
        paragraphs: [
          "Add A Pipeline Stage Such As ‘Report Shared’ So The Team Can See Which Prospects Have Received One. AI-Drafted Outreach Can Reference Audit Data Directly, And Every Message Is Logged, So Follow-Ups Stay Consistent Across Account Managers.",
        ],
      },
    ],
    steps: {
      heading: "Using An Opportunity Report In A Sale",
      items: [
        { title: "Shortlist Prospects", text: "Filter For Weak-Audit And Other Opportunity Flags Among Well-Fitting Leads." },
        { title: "Review The Report", text: "Read The Scorecard And Findings, And Verify The Top Items Yourself." },
        { title: "Introduce It", text: "Send A Short Message Naming Two Findings And Offering The Full Report." },
        { title: "Walk Through The Fix List", text: "On A Call, Explain Priorities And What You Would Do About Each." },
        { title: "Turn It Into Scope", text: "Build Your Proposal Around The Fix List’s Order." },
      ],
    },
    considerations: {
      heading: "Using Reports Responsibly",
      items: [
        "Rule-Based Audits Do Not Cover Brand, Design Quality Or Competitive Strategy.",
        "Verify Top Findings Before Sharing; A Wrong Claim Damages Credibility.",
        "Avoid Implying Guaranteed Results From Fixing The Listed Items.",
        "SEO And Website-Build Reports Are Part Of The Growth Plan.",
        "A Site May Change After The Audit; Re-Run It Before A Proposal Meeting.",
      ],
    },
    example: {
      heading: "A Digital Agency Turning A Report Into A Scope",
      text: "Suppose A Five-Person Digital Agency In Cape Town Shares A Report With A Boutique Hotel Whose Site Has A Weak Overall Grade. The Fix List Starts With Missing Metadata And Structured Data, Then Performance Issues Across Room Pages. On The Call, The Account Lead Proposes A Two-Phase Project In That Order. The Hotel Agrees To Phase One, And The Agency Plans To Re-Run The Audit Afterwards To Show Progress Area By Area.",
    },
    faqs: [
      { q: "What Is Included In A Client-Ready Report?", a: "An Overall Grade With A Per-Area Scorecard, Severity-Ranked Findings In Plain English, Performance And Page-Health Metrics And A Prioritised Fix List." },
      { q: "What If The Prospect Has No Website To Audit?", a: "Opportunity Detection Flags Missing Or Non-Resolving Websites With Evidence, Which Becomes The Basis Of The Conversation Instead Of An Audit." },
      { q: "Can A Report Become Part Of My Proposal?", a: "Yes. The Severity-Ranked Fix List Maps Well To Project Phases And Helps Justify The Order Of Work." },
      { q: "Should I Re-Run The Audit Later?", a: "Re-Running Before A Proposal Keeps Findings Current, And Re-Running After Work Is Done Gives A Clear Before-And-After Comparison." },
      { q: "Can I Add My Agency’s Own Commentary To The Findings?", a: "Your Commentary Belongs In The Message, The Call And The Proposal. Use The Report As The Factual Base, Then Explain In Your Own Words Which Items Matter Most For This Particular Business And Why You Would Tackle Them In That Order." },
      { q: "Which Plan Includes Opportunity Reports?", a: "SEO And Website-Build Reports Are Part Of The Growth Plan. Free Covers Scraping, Enrichment, The Lead Dashboard And CSV Export, So Audit-Based Reports Need A Paid Plan." },
      { q: "What Does An Audit Report Not Cover?", a: "The Audit Is Rule-Based, Checking Technical Health, Content, Metadata, Structured Data And Performance. It Does Not Judge Brand, Design Quality Or Competitive Strategy, So Add Your Own Expert View When Discussing Those Areas With A Prospect." },
      { q: "How Can I Track Which Prospects Have Received A Report?", a: "Add A Pipeline Stage Such As “Report Shared”. Every Message Is Logged Against Its Lead, So Account Managers Can See Who Has Seen A Report And Who Needs A Follow-Up Without Duplicating Each Other’s Work." },
    ],
    related: ["/services/seo-website-audit", "/services/business-opportunity-detection", "/services/agency-client-prospecting", "/services/website-redesign-prospecting", "/services/multi-tenant-workspaces"],
    cta: { heading: "See A Sample Opportunity Report", text: "Walk Through How Audit Output Could Support Your Agency’s Pitches.", label: "Request Access", href: "/book-a-demo" },
  },
  {
    path: "/services/outreach-activity-logging",
    title: "Outreach Activity Logging",
    h1: "Outreach Activity Logging For Accountable Teams",
    metaTitle: "Outreach Activity Logging and Accountability",
    metaDescription: "LeadGen AI logs every outreach message against its lead and keeps full pipeline activity history. See how logging supports managers and compliance reviews.",
    eyebrow: "For Managers And Compliance",
    intro: [
      "Outreach Activity Logging Is Keeping A Reliable Record Of Every Message Sent To Every Prospect. In LeadGen AI, Every Message Is Logged Against Its Lead, And The CRM Pipeline Keeps Full Activity History, With Stages And Owners. Managers Can See Who Contacted Whom And When Without Asking Around.",
      "Logs Serve Two Audiences. Managers Use Them To Coach, Balance Workloads And Stop Duplicate Contact. Compliance And Leadership Use Them To Show Outreach Is Controlled, Respects Sending Limits And Honours Opt-Outs. This Page Covers Both Uses And The Habits That Make Logs Useful.",
    ],
    highlights: [
      "Every Message Logged Per Lead",
      "Full Pipeline Activity History",
      "Owners Make Responsibility Visible",
      "Supports Opt-Out And Limit Discipline",
    ],
    sections: [
      {
        heading: "What Gets Recorded",
        paragraphs: [
          "Campaigns Go Out Through Your Configured Email Transport And Every Message Is Logged Against The Lead It Went To. The Pipeline Adds Stage Changes, Owners And Full Activity History, So A Single Record Shows The Full Sales History Of A Prospect: When They Were Found, Who Owns Them, What They Were Sent And Where They Are Now.",
        ],
      },
      {
        heading: "How Managers Use Activity Logs",
        paragraphs: [
          "Logs Answer Everyday Questions Quickly:",
        ],
        bullets: [
          "Has Anyone Already Contacted This Business?",
          "Which Top-Band Leads Have Not Been Touched This Week?",
          "How Many Follow-Ups Does A Typical Reply Take?",
          "Which Messages Or Audit Findings Prompt Responses?",
        ],
      },
      {
        heading: "Logs As A Compliance Aid",
        paragraphs: [
          "LeadGen AI’s Outreach Respects Sending Limits And Opt-Out Obligations, And The User Stays In Control Of The List. Message Logs Let You Show What Was Sent, To Whom And When, Which Helps When A Recipient Asks About Contact Or When You Review Your Own Practices. Combined With Per-Field Source Tracking, You Can Also Explain Where A Contact Detail Came From.",
          "Logging Supports Compliance But Does Not Prove It. Rules On Electronic Marketing And Data Protection Vary By Country; Check Current Requirements And Take Legal Advice For Your Situation.",
        ],
      },
      {
        heading: "Preventing Duplicate And Unwanted Contact",
        paragraphs: [
          "In A Team, The Most Common Outreach Mistake Is Two People Contacting The Same Prospect, Or Someone Contacting A Person Who Asked To Stop. Clear Pipeline Owners And A Check Of The Log Before Sending Prevent The First. Recording Opt-Outs Against The Lead, And Checking Before Every Campaign, Prevents The Second.",
        ],
      },
      {
        heading: "Making Logs Useful, Not Just Complete",
        paragraphs: [
          "A Log Full Of Messages But No Outcomes Tells Half The Story. Ask Sellers To Move Stages Promptly And Add Short Notes After Calls. Review Logs In Weekly One-To-Ones Rather Than Only When Something Goes Wrong, So They Become A Coaching Tool Rather Than An Audit Threat.",
        ],
      },
    ],
    steps: {
      heading: "Building A Logging Routine",
      items: [
        { title: "Configure The Transport", text: "Set Up Your Email Transport So Campaigns Send From Your Own Domain And Are Logged." },
        { title: "Assign Owners", text: "Give Every Pipeline Lead An Owner So Responsibility Is Clear." },
        { title: "Check Before Sending", text: "Review A Lead’s History And Any Opt-Out Before Contacting It." },
        { title: "Record Outcomes", text: "Move Stages And Add Notes After Replies And Calls." },
        { title: "Review Weekly", text: "Use Logs In Team Reviews To Spot Gaps And Coach." },
      ],
    },
    considerations: {
      heading: "Limits And Responsibilities",
      items: [
        "Logs Cover Outreach Sent Through LeadGen AI; Messages From Personal Inboxes Or Phones Need Recording Separately.",
        "Logging Is A Record, Not Legal Advice; Your Policies Decide What Is Acceptable.",
        "Role-Based Access Controls Who Can View Logs, So Set Roles Carefully.",
        "Exported Data Leaves The Log Behind; Keep The Platform As The System Of Record For Contact History.",
        "Logs Help Only When People Check Them Before Acting.",
      ],
    },
    example: {
      heading: "A Manager Preventing Double Contact",
      text: "Picture A Sales Manager At An Industrial-Fasteners Distributor In Chennai With Six Sellers Working Overlapping Regions. Two Sellers Both Draft Emails To The Same Automotive Workshop. Before Sending, One Checks The Lead’s Log, Sees Her Colleague’s Message From Two Days Earlier And Holds Back. In The Weekly Review The Manager Uses Logs To Show The Team How Many Top-Band Leads Went Uncontacted, Then Rebalances Territories.",
    },
    faqs: [
      { q: "Are Messages Sent From LeadGen AI Recorded Automatically?", a: "Yes. Every Message Is Logged Against Its Lead, And The Pipeline Keeps Full Activity History." },
      { q: "Do Logs Prove Our Outreach Is Compliant?", a: "They Help You Show What Was Sent And When, But Compliance Depends On Your Practices And Local Law. Take Legal Advice For Your Markets." },
      { q: "Who Can See Outreach Logs?", a: "Access Follows LeadGen AI’s Role-Based Permissions, So Each Team Sees The Records It Should." },
      { q: "What About Calls And Emails Sent Outside The Platform?", a: "Those Are Not Captured Automatically. Add Notes To The Lead So The History Stays Complete." },
      { q: "How Can Logs Help With Coaching Sellers?", a: "Reviewing A Seller’s Logged Messages Alongside The Replies And Stage Changes They Led To Shows Which Openings And Follow-Up Patterns Work. Managers Often Pick One Or Two Examples Each Week To Discuss, Which Keeps Reviews Helpful Rather Than Critical." },
      { q: "How Do Logs Help Prevent Two Sellers Contacting The Same Prospect?", a: "Clear Pipeline Owners Plus A Habit Of Checking The Lead’s Log Before Sending. If A Colleague’s Recent Message Is Already There, The Second Seller Can Hold Back And Coordinate Instead Of Sending A Duplicate." },
      { q: "Where Should Opt-Out Requests Be Recorded?", a: "Record Them Against The Lead In LeadGen AI As Soon As They Arrive, And Check For Them Before Every Campaign. If You Export Data, Carry Opt-Outs Into Other Tools Too, Because Exported Files Leave The Log Behind." },
      { q: "What Makes A Log Useful Rather Than Just Complete?", a: "Outcomes. Ask Sellers To Move Pipeline Stages Promptly And Add Short Notes After Calls And Replies. A Log That Shows Messages Alongside Results Supports Coaching And Reviews Far Better Than A List Of Sent Emails Alone." },
    ],
    related: ["/services/ai-outreach-campaigns", "/services/crm-pipeline-management", "/services/role-based-team-access", "/services/source-traceability", "/responsible-prospecting"],
    cta: { heading: "Run Accountable Outreach", text: "See How Per-Lead Logs And Pipeline History Work For Your Team.", label: "Request Access", href: "/book-a-demo" },
  },
  {
    path: "/services/multi-tenant-workspaces",
    title: "Multi-Tenant Workspaces",
    h1: "Multi-Tenant Workspaces For Agencies And Multi-Team Orgs",
    metaTitle: "Multi-Tenant Workspaces With Role Control",
    metaDescription: "LeadGen AI is multi-tenant and role-based. Learn how agencies and multi-team organisations can separate workspaces, assign roles and administer them well.",
    eyebrow: "Administration",
    intro: [
      "Multi-Tenant Workspaces Keep Separate Organisations’ Data Apart On The Same Platform. LeadGen AI Is Described As Multi-Tenant And Role-Based: Tenants Are Separated, And Within Each, Role-Based Access Means Each Team Sees The Records It Should. Per-Org API Keys On The Scale Plan Follow The Same Organisation Boundary.",
      "For Agencies Prospecting On Behalf Of Several Clients, And For Organisations With Distinct Business Units, That Separation Decides Whether Leads, Outreach Logs And Reports Stay Where They Belong. This Page Covers How To Think About Tenant Separation, Roles Within Each Workspace And Day-To-Day Administration. Confirm Exact Workspace Arrangements For Your Account With The LeadGen AI Team.",
    ],
    highlights: [
      "Multi-Tenant And Role-Based",
      "Each Team Sees Its Own Records",
      "Per-Org API Keys On Scale",
      "Clear Administration Habits",
    ],
    sections: [
      {
        heading: "Tenant Separation Versus Role-Based Access",
        paragraphs: [
          "Two Layers Work Together. Tenant Separation Is The Outer Wall: One Organisation’s Leads, Pipelines And Logs Are Kept Apart From Another’s. Role-Based Access Is The Inner Structure: Within An Organisation, People See And Do Only What Their Role Allows. Growth Includes Full Team Access With Seven Role Modules.",
        ],
      },
      {
        heading: "Who Benefits From Multi-Tenancy",
        paragraphs: [
          "Common Cases Include:",
        ],
        bullets: [
          "Agencies Running Prospecting For Several Clients Who Must Not See Each Other’s Data",
          "Groups With Separate Brands Or Regional Businesses Selling Into Different Markets",
          "Franchise-Style Organisations With Local Teams And Central Oversight",
          "Resellers Or Consultancies Separating Internal Prospecting From Client Work",
        ],
      },
      {
        heading: "Structuring Workspaces",
        paragraphs: [
          "Decide Early Where The Walls Go. A Useful Test: If Two Teams Should Never See Each Other’s Leads Or Outreach History, They Belong In Separate Tenants. If They Should Collaborate But With Different Permissions, They Belong In One Tenant With Distinct Roles. Agencies Often Keep Their Own New-Business Prospecting Separate From Client Work For Exactly This Reason.",
        ],
      },
      {
        heading: "Administration And Quotas",
        paragraphs: [
          "Quotas Are Enforced Per Plan And Per Billing Cycle. Every Job Records What It Fetched And When, Which Helps Admins See How Query Capacity Is Being Used. On Scale, Per-Org API Keys Let Technical Teams Integrate An Organisation’s Data With Its Own Systems Without Exposing Other Tenants.",
          "Keep A Short List Of Admins Per Workspace, Document Who Owns Each, And Review Access When Staff Or Clients Change.",
        ],
      },
      {
        heading: "Ending A Client Relationship Cleanly",
        paragraphs: [
          "When An Agency Client Leaves, Decide In Advance What Happens To The Data Gathered For Them: Whether It Is Exported To CSV And Handed Over, Retained Or Deleted, In Line With Your Contract And Data Protection Obligations. Remove User Access Promptly, Rotate Any API Key The Client’s Systems Used, And Record The Decision.",
        ],
      },
    ],
    steps: {
      heading: "Setting Up Workspaces For An Agency",
      items: [
        { title: "Map The Boundaries", text: "List Clients And Internal Teams And Decide Which Need Full Separation." },
        { title: "Confirm The Set-Up", text: "Agree The Workspace Arrangement For Your Account With The LeadGen AI Team." },
        { title: "Define Roles", text: "Within Each Workspace, Assign Role Modules By Job, Keeping Admin Rights Narrow." },
        { title: "Secure Integrations", text: "On Scale, Store Each Organisation’s API Key Separately And Restrict Access." },
        { title: "Review Regularly", text: "Audit Users, Roles And Keys When Staff Or Clients Change." },
      ],
    },
    considerations: {
      heading: "Planning Considerations",
      items: [
        "Confirm How Workspaces Map To Plans And Billing For Your Account Before Committing.",
        "Separation Protects Data In The Platform; Exported CSVs Need Your Own Controls.",
        "Too Many Workspaces Add Admin Overhead; Separate Only Where It Matters.",
        "Client Contracts Should State Who Owns Prospecting Data And What Happens At The End.",
        "Data Protection Duties May Differ By Client And Country; Take Advice Where Unsure.",
      ],
    },
    example: {
      heading: "An Agency Serving Three Clients",
      text: "Imagine A Growth Agency In Nairobi That Runs Outbound Prospecting For A Solar Installer, A Logistics Firm And Its Own New Business. Each Client’s Work Sits In Its Own Workspace So Leads And Outreach Logs Never Mix, And Account Managers Are Given Roles Only In The Workspaces They Serve. When The Logistics Client Ends Its Contract, The Agency Exports That Client’s Leads To CSV As Agreed, Removes The Client’s Users And Rotates The API Key Its Systems Used.",
    },
    faqs: [
      { q: "Is LeadGen AI Multi-Tenant?", a: "Yes. The Platform Is Described As Multi-Tenant And Role-Based, So Organisations Are Kept Separate And Each Team Sees The Records It Should." },
      { q: "Can An Agency Keep Each Client’s Prospecting Separate?", a: "That Is A Key Use Of Multi-Tenancy. Confirm The Exact Workspace Arrangement For Your Plan With The LeadGen AI Team." },
      { q: "How Do API Keys Work Across Tenants?", a: "API Keys Are Issued Per Organisation On The Scale Plan, So Each Organisation’s Integrations Use Its Own Key." },
      { q: "What Should Happen To Data When A Client Leaves?", a: "Agree It In Your Contract: Export, Hand Over, Retain Or Delete In Line With Your Obligations, Then Remove Access And Rotate Keys." },
      { q: "Should A Small Team Use More Than One Workspace?", a: "Usually Not. A Single Workspace With Sensible Roles Is Simpler For A Small Team. Separate Workspaces Are Worth The Extra Admin When Data Must Not Be Shared, Such As Between Agency Clients." },
      { q: "When Should Teams Share A Workspace Instead Of Separating?", a: "If Two Teams Should Collaborate But With Different Permissions, Keep Them In One Workspace With Distinct Roles. If They Should Never See Each Other’s Leads Or Outreach History, Separate Workspaces Are The Better Fit." },
      { q: "Do Exported CSVs Stay Inside A Tenant’s Protection?", a: "No. Tenant Separation Protects Data Inside The Platform, But Once A CSV Is Downloaded It Needs Your Own Controls. Store Exports Securely, Limit Who Receives Them And Delete Files You No Longer Need." },
      { q: "How Can Admins See How Query Quota Is Being Used?", a: "Quotas Are Enforced Per Plan And Per Billing Cycle, And Every Job Records What It Fetched And When. Reviewing Job Records Helps Admins Understand Which Teams Or Campaigns Are Using Query Capacity." },
    ],
    related: ["/services/role-based-team-access", "/services/api-access", "/services/agency-client-prospecting", "/security-and-data-handling", "/plans"],
    cta: { heading: "Plan Workspaces For Your Teams", text: "Talk Through How Tenant Separation And Roles Would Fit Your Agency Or Organisation.", label: "Contact", href: "/contact" },
  },
];
