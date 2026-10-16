import { heroImage, IMAGES, type SiteImage } from "@/content/images";
import { LIVE } from "./registry";

/**
 * Hero background for any page. A page's own photo is used when it has one. Pages without one
 * borrow a photo whose description matches their topic:
 *   - words are weighted by rarity across all photo descriptions (so "dog" counts far more than "sales"),
 *   - photos from the page's own section get a small bonus,
 *   - each borrowed photo is used on at most MAX_REUSE pages, assigned strongest match first,
 *   - pages without a real match get the least-used neutral business scene (office, team, desk).
 * Borrowed photos are decorative (empty alt), since their alt text describes a different page.
 * The assignment is computed once, deterministically, for the whole site.
 */
const MAX_REUSE = 3;
const MIN_SCORE = 2.5;
const STOP = new Set(
  "a an and the for of to in on with at by from into your their his her its as is are be or vs how what when who why which it this that one two three new using use guide basic".split(" "),
);
const stem = (w: string) => w.replace(/(ies)$/, "y").replace(/(ing|ers|er|es|s)$/, "");
const words = (s: string) =>
  new Set(
    s
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, " ")
      .split(/\s+/)
      .filter((w) => w.length > 2 && !STOP.has(w))
      .map(stem),
  );
const NEUTRAL = /\b(office|team|meeting|desk|laptop|colleague|manager|stand-up|whiteboard|glass wall|conference)\b/i;
const SPECIFIC_TERMS =
  "dog vet clinic dental patient gym kettlebell jewel wedding bakery metro train saree classroom student retired elderly family couple factory cnc brass textile fabric knitwear solar plumb restaurant hotel insurance warehouse godown pump salon".split(" ");
const SPECIFIC = new RegExp(`\\b(${SPECIFIC_TERMS.join("|")})`, "i");
const termRe = new Map(SPECIFIC_TERMS.map((t) => [t, new RegExp(`\\b${t}`, "i")]));
/** A photo of a specific setting only suits a page whose topic mentions that setting. */
const fits = (alt: string, topic: string) => {
  const settings = SPECIFIC_TERMS.filter((t) => termRe.get(t)!.test(alt));
  return !settings.length || settings.some((t) => termRe.get(t)!.test(topic));
};

let assigned: Map<string, SiteImage> | null = null;

function assign(): Map<string, SiteImage> {
  const images = Object.values(IMAGES);
  const imgWords = images.map((i) => words(i.alt));
  const df = new Map<string, number>();
  for (const ws of imgWords) for (const w of ws) df.set(w, (df.get(w) ?? 0) + 1);
  const idf = (w: string) => Math.log((images.length + 1) / ((df.get(w) ?? 0) + 1));
  const groupOf = new Map<string, string>();
  for (const p of LIVE) {
    const img = heroImage(p.path);
    if (img) groupOf.set(img.src, p.group);
  }
  const pages = LIVE.filter((p) => p.path !== "/" && !heroImage(p.path));
  const scored = pages.map((p) => {
    const text = `${p.title} ${p.outline} ${p.audience} ${p.path.replace(/[/-]/g, " ")}`;
    const topic = words(`${p.title} ${text}`);
    const scores = images.map((img, i) => {
      let s = 0;
      if (!fits(img.alt, text)) return 0;
      for (const w of topic) if (imgWords[i].has(w)) s += idf(w);
      if (s > 0 && groupOf.get(img.src) === p.group) s += 0.5;
      return s;
    });
    return { p, scores, best: Math.max(...scores) };
  });
  const uses = new Map<string, number>();
  const out = new Map<string, SiteImage>();
  const neutral = images.map((img, i) => ({ img, i })).filter(({ img }) => NEUTRAL.test(img.alt) && !SPECIFIC.test(img.alt));
  // Strongest matches pick first.
  for (const { p, scores } of scored.sort((a, b) => b.best - a.best || a.p.path.localeCompare(b.p.path))) {
    const order = scores.map((s, i) => ({ s, i })).sort((a, b) => b.s - a.s || a.i - b.i);
    const hit = order.find(({ s, i }) => s >= MIN_SCORE && (uses.get(images[i].src) ?? 0) < MAX_REUSE);
    let img = hit ? images[hit.i] : undefined;
    if (!img) {
      // Least-used neutral scene (ties broken by catalogue order for stability).
      const n = [...neutral].sort((a, b) => (uses.get(a.img.src) ?? 0) - (uses.get(b.img.src) ?? 0) || a.i - b.i)[0];
      img = n?.img ?? images[0];
    }
    uses.set(img.src, (uses.get(img.src) ?? 0) + 1);
    out.set(p.path, img);
  }
  return out;
}

export function pageBackground(path: string): { image: SiteImage; own: boolean } | undefined {
  const own = heroImage(path);
  if (own) return { image: own, own: true };
  assigned ??= assign();
  const img = assigned.get(path);
  return img ? { image: img, own: false } : undefined;
}
