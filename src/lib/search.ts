export interface SearchItem {
  path: string;
  title: string;
  group: string;
  description: string;
}

/** Simple ranked search: every query term must appear; title hits outrank description hits. */
export function runSearch(items: SearchItem[], query: string, limit = 50): SearchItem[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  const scored: { item: SearchItem; score: number }[] = [];
  for (const item of items) {
    const title = item.title.toLowerCase();
    const rest = `${item.group} ${item.description} ${item.path}`.toLowerCase();
    let score = 0;
    let ok = true;
    for (const t of terms) {
      if (title.includes(t)) score += title.startsWith(t) ? 6 : 4;
      else if (rest.includes(t)) score += 1;
      else {
        ok = false;
        break;
      }
    }
    if (ok) scored.push({ item, score });
  }
  return scored.sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title)).slice(0, limit).map((s) => s.item);
}

let cache: Promise<SearchItem[]> | null = null;
export function loadSearchIndex(): Promise<SearchItem[]> {
  cache ??= fetch("/search-index.json")
    .then((r) => (r.ok ? r.json() : []))
    .catch(() => {
      cache = null;
      return [];
    });
  return cache;
}
