import Link from "next/link";
import type { Crumb } from "@/lib/registry";
import { absoluteUrl } from "@/lib/site";
import { ChevronRight } from "./icons";
import { JsonLd } from "./JsonLd";

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  if (items.length < 2) return null;
  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className="flex flex-wrap items-center gap-1.5 text-muted">
          {items.map((c, i) => (
            <li key={c.href} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={14} className="opacity-60" />}
              {i === items.length - 1 ? (
                <span aria-current="page" className="font-medium text-ink-soft">
                  {c.name}
                </span>
              ) : (
                <Link href={c.href} className="inline-flex min-h-11 items-center hover:text-brand md:min-h-0">
                  {c.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: absoluteUrl(c.href) })),
        }}
      />
    </>
  );
}
