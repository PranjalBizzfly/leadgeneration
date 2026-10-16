import { JsonLd } from "@/components/JsonLd";
import type { BlogPost } from "@/content/company";
import type { PageContent } from "@/content/types";
import { pageBackground } from "@/lib/page-background";
import { absoluteUrl, SITE } from "@/lib/site";

/**
 * Page-type structured data, added only where the visible content supports it. Organization,
 * BreadcrumbList and FAQPage are emitted elsewhere (layout, breadcrumbs, Faqs), so they are not repeated.
 */
const ORG = { "@type": "Organization", name: SITE.name, url: SITE.url } as const;
const GLOSSARY_PATH = "/resources/lead-generation-glossary";
/** Pages whose purpose is instructional; only these may carry HowTo, and only with a visible step list. */
const isInstructional = (c: PageContent) =>
  !/^use case/i.test(c.h1) && (/^how to\b/i.test(c.h1) || /\b(step[- ]by[- ]step|checklist|worksheet)\b/i.test(`${c.title} ${c.h1}`));

/** Glossary bullets written as "Term: definition", exactly as shown on the page. */
function glossaryTerms(content: PageContent): { name: string; description: string }[] {
  const terms: { name: string; description: string }[] = [];
  for (const s of content.sections) {
    for (const b of s.bullets ?? []) {
      const i = b.indexOf(": ");
      if (i <= 0 || i > 60) continue;
      terms.push({ name: b.slice(0, i).trim(), description: b.slice(i + 2).trim() });
    }
  }
  return terms;
}

function contentSchema(content: PageContent): object[] {
  const url = absoluteUrl(content.path);
  const out: object[] = [];

  if (content.path.startsWith("/services/")) {
    out.push({ "@context": "https://schema.org", "@type": "Service", name: content.title, description: content.metaDescription, url, provider: ORG });
  }

  if (content.path === GLOSSARY_PATH) {
    const terms = glossaryTerms(content);
    if (terms.length) {
      const id = `${url}#terms`;
      out.push({
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        "@id": id,
        name: content.title,
        description: content.metaDescription,
        url,
        hasDefinedTerm: terms.map((t) => ({ "@type": "DefinedTerm", name: t.name, description: t.description, inDefinedTermSet: id })),
      });
    }
  }

  const steps = content.steps?.items ?? [];
  if (content.steps && steps.length >= 2 && isInstructional(content)) {
    out.push({
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: content.steps.heading,
      description: content.metaDescription,
      url,
      step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.text })),
    });
  }
  return out;
}

function postSchema(post: BlogPost): object {
  const path = `/blog/${post.slug}`;
  const url = absoluteUrl(path);
  const image = pageBackground(path)?.image.src;
  // Posts carry no dates or named authors by design, so none are emitted.
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: ORG,
    publisher: ORG,
    articleSection: post.category,
    ...(image ? { image: absoluteUrl(image) } : {}),
  };
}

export function pageSchemaData(props: { content: PageContent } | { post: BlogPost }): object[] {
  return "post" in props ? [postSchema(props.post)] : contentSchema(props.content);
}

export function PageSchema(props: { content: PageContent } | { post: BlogPost }) {
  return (
    <>
      {pageSchemaData(props).map((data, i) => (
        <JsonLd key={i} data={data} />
      ))}
    </>
  );
}
