import type { Faq } from "./types";

/** FAQs for company pages rendered by dedicated routes, grounded only in each page’s own content. */

export const CAREERS_FAQS: Faq[] = [
  { q: "Which open roles is LeadGen AI hiring for right now?", a: "The roles listed on this page are sales executive, software developer coordinator, email marketing executive, business development executive and prompt engineer. Each card shows the team, the key responsibilities and the skills that help." },
  { q: "How do I apply for a role at LeadGen AI?", a: "Choose a role and select its contact button. The contact form opens with the careers topic and the role filled in, so you only need to add a short note about yourself." },
  { q: "Should I include my CV when applying through the contact form?", a: "Yes. The page asks you to include a link to your CV or profile along with a short note about yourself and the role you want." },
  { q: "Where will I hear back after sending a careers application?", a: "We reply to the email address you provide in the contact form, so double-check it before you send your message." },
  { q: "Can I apply if none of the listed roles fit me?", a: "Yes. Use the contact form with the careers topic and tell us what you would like to work on. We read every message." },
  { q: "What does the prompt engineer role involve day to day?", a: "It covers creating and improving AI prompts, testing outputs, refining instructions for accuracy and documenting what works. The role shapes AI inside the product, such as AI-drafted outreach, and internal workflows." },
  { q: "Do I need deep technical skills for the sales executive role?", a: "The page asks for clear communication, good discovery questions, organised follow-up and comfort explaining a software product. Those matter more than coding knowledge for this role." },
  { q: "What product would I be working on if I join?", a: "LeadGen AI is a prospect intelligence platform that takes teams from a search across Google Maps, LinkedIn and IndiaMART to enrichment, 0–100 scoring, website audits and outreach in one pipeline." },
];

export const VENDORS_FAQS: Faq[] = [
  { q: "What kinds of vendors does LeadGen AI want to hear from?", a: "The page lists four areas: infrastructure and tooling, email and communication, agencies and consultants, and content and training. These describe the collaboration we consider, not existing partnerships." },
  { q: "How do I introduce my company as a potential vendor?", a: "Use the contact form with the vendors topic and tell us who you are, what you offer and the problem it solves." },
  { q: "Will every vendor proposal be accepted?", a: "No. We check each proposal against our current needs, and not every one will match what we need right now." },
  { q: "Does LeadGen AI reply to vendor proposals?", a: "Yes. The page states that we reply to every proposal sent through the form." },
  { q: "What happens after my vendor introduction passes the first review?", a: "If there is a fit, we arrange a call to understand scope, approach and expectations. Any engagement is then confirmed in writing before work begins." },
  { q: "What do you expect from vendors around data handling?", a: "Responsible handling of any data shared during the work, and respect for the role-based access and data-handling practices described on our security page." },
  { q: "Can an agency talk to you about recommending LeadGen AI to its clients?", a: "Yes. Marketing, SEO and sales consultancies that want to discuss using or recommending the platform for client prospecting are one of the listed collaboration areas." },
  { q: "Do you need a new email sending provider for customer campaigns?", a: "Not for sending on behalf of customers. LeadGen AI sends campaigns through each customer’s own configured email transport, though we are open to conversations with relevant communication providers." },
];

export const MEDIA_FAQS: Faq[] = [
  { q: "How can a journalist contact LeadGen AI for a story?", a: "Send a message through the contact form with the media topic selected. It covers interviews, comment, product information and image requests." },
  { q: "What details should I include in a media enquiry?", a: "Include your name and publication, the topic and your deadline, and the questions you would like answered." },
  { q: "Does LeadGen AI publish press releases on its website?", a: "No. We do not currently publish press releases or coverage on this site." },
  { q: "What are the key facts to know about LeadGen AI?", a: "It scrapes Google Maps, LinkedIn and IndiaMART, enriches leads with contact routes, scores them from 0 to 100 with reasons, audits websites, flags opportunities and offers a CRM with AI-drafted outreach. Plans are Free, Growth and Scale." },
  { q: "Where can I find logos and approved descriptions for an article?", a: "The press kit page has logo files, approved short and long descriptions, and the official brand colours and typefaces." },
  { q: "How should I check a fact about LeadGen AI before publishing?", a: "Rely on the facts on the media page and the press kit, and contact us through the form to confirm anything else before you publish." },
  { q: "How does a LeadGen AI search work, in simple terms?", a: "A single query, such as a business category and a location, fans out to each enabled source. Results are normalised into one de-duplicated record per business and enriched with contact routes." },
  { q: "Can I request an interview with the LeadGen AI team?", a: "Yes. Use the contact form with the media topic, and include your deadline so we can do our best to respond in time." },
];

export const PRESS_KIT_FAQS: Faq[] = [
  { q: "Which logo files are included in the LeadGen AI press kit?", a: "There is an SVG logo mark, PNG versions at 1024px and 512px, and a reversed SVG mark with a white tile and an indigo L." },
  { q: "Can I change the colours of the LeadGen AI logo?", a: "No. Please use the assets as provided and don’t recolour, stretch, rotate or add effects to the logo." },
  { q: "How much clear space should surround the logo?", a: "Keep clear space around the mark of at least a quarter of its width." },
  { q: "What are the official LeadGen AI brand colours?", a: "Indigo #6366F1 is the primary colour, violet #8B5CF6 is the gradient partner, cyan #22D3EE is the accent and ink #0A0B0F is used for dark backgrounds." },
  { q: "Which fonts does the LeadGen AI brand use?", a: "Large headings use Bricolage Grotesque, and body text and smaller headings use DM Sans. The wordmark is set in DM Sans Bold." },
  { q: "Which company description should I use in my piece?", a: "Pick the length that fits: there are one-line, short and long approved descriptions, each with a copy button." },
  { q: "Which logo version works on a dark background?", a: "The page shows the mark and wordmark on both light and dark backgrounds, and the reversed SVG mark offers a white tile alternative." },
  { q: "How do I get product screenshots that aren’t in the press kit?", a: "Use the contact page with the media topic and tell us what you need." },
];

export const BLOG_FAQS: Faq[] = [
  { q: "What topics does the LeadGen AI blog cover?", a: "Articles cover prospecting, outreach, qualification, data and compliance, and agency growth, all aimed at people who find, qualify and reach business prospects." },
  { q: "How do I find a blog article on a specific subject?", a: "Filter the articles by topic or use the search box on the blog page to find what you need." },
  { q: "Who are the LeadGen AI blog articles written for?", a: "They are hands-on notes for people who build prospect lists, write outreach and qualify leads, including small agencies." },
  { q: "How long does each blog article take to read?", a: "Each article shows its reading time on its card and at the top of the page, and most take a few minutes." },
  { q: "Do the blog articles only work if I use LeadGen AI?", a: "No. The guidance is general and practical, and where the platform is mentioned it is as one way to apply the advice." },
  { q: "Is the advice in the blog articles legal advice?", a: "No. Articles that touch on rules for outreach are general guidance, and you should take proper advice for your own situation." },
  { q: "Can I try the ideas from the blog for free?", a: "Yes. The Free plan includes 3 queries, so you can run a first search and put an article’s advice into practice." },
  { q: "Where can I go after reading a blog article to learn more?", a: "Each article links to related articles in the same category and to related guide pages on the site in its keep reading section." },
];
