import { PLAN } from "@/content/plan";
import { allPages } from "@/content/all-pages";
import type { PageContent, PlanEntry } from "@/content/types";
import { GROUPS } from "./groups";
import type { SearchItem } from "./search";

/** Routes rendered by dedicated components rather than PageContent data. */
const CUSTOM_ROUTES = new Set(["/", "/sitemap"]);

const contentByPath = new Map<string, PageContent>(allPages.map((p) => [p.path, p]));
const planByPath = new Map<string, PlanEntry>(PLAN.map((p) => [p.path, p]));

/** A plan entry is live once it is Phase 1 (or later promoted) AND has something to render. */
export const LIVE: PlanEntry[] = PLAN.filter((p) => CUSTOM_ROUTES.has(p.path) || contentByPath.has(p.path));
const liveSet = new Set(LIVE.map((p) => p.path));

export const isLive = (path: string) => liveSet.has(path);
export const getPlan = (path: string) => planByPath.get(path);
export const getContent = (path: string) => contentByPath.get(path);

/** Catch-all route params for every content-driven live page. */
export function contentSlugs(): string[][] {
  return LIVE.filter((p) => !CUSTOM_ROUTES.has(p.path)).map((p) => p.path.slice(1).split("/"));
}

/** Live pages in a group, excluding the hub itself. */
export function groupChildren(groupKey: PlanEntry["group"]): PlanEntry[] {
  const hub = GROUPS[groupKey].hub;
  return LIVE.filter((p) => p.group === groupKey && p.path !== hub);
}

const CUSTOM_DESCRIPTIONS: Record<string, string> = {
  "/": "AI-powered lead generation: find, enrich, score and reach prospects from Google Maps, LinkedIn and IndiaMART.",
  "/sitemap": "A directory of every live page on the site, grouped by topic.",
};

export function describe(path: string): string {
  return contentByPath.get(path)?.metaDescription ?? CUSTOM_DESCRIPTIONS[path] ?? planByPath.get(path)?.outline ?? "";
}

export interface Crumb {
  name: string;
  href: string;
}

export function breadcrumbs(path: string): Crumb[] {
  const plan = planByPath.get(path);
  if (!plan || path === "/") return [];
  const crumbs: Crumb[] = [{ name: "Home", href: "/" }];
  const hub = GROUPS[plan.group].hub;
  if (hub && hub !== path && isLive(hub)) crumbs.push({ name: planByPath.get(hub)!.title, href: hub });
  crumbs.push({ name: plan.title, href: path });
  return crumbs;
}

/** Curated related links first, topped up with live siblings from the same group. */
export function relatedPages(path: string, limit = 6): PlanEntry[] {
  const plan = planByPath.get(path);
  const curated = (contentByPath.get(path)?.related ?? []).filter((r) => r !== path && isLive(r));
  const out = curated.map((r) => planByPath.get(r)!);
  if (plan) {
    const siblings = LIVE.filter((p) => p.group === plan.group && p.path !== path && !curated.includes(p.path));
    const start = Math.max(0, siblings.findIndex((p) => p.path > path));
    for (let i = 0; out.length < limit && i < siblings.length; i++) out.push(siblings[(start + i) % siblings.length]);
  }
  return out.slice(0, limit);
}

export function searchIndex(): SearchItem[] {
  return LIVE.map((p) => ({
    path: p.path,
    title: contentByPath.get(p.path)?.h1 ?? p.title,
    group: GROUPS[p.group].label,
    description: describe(p.path),
  }));
}
