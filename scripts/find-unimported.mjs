// Usage: node scripts/find-unimported.mjs — lists source images in public/images/incoming (and done/)
// that don't visually match any already-imported image in public/images/pages (perceptual hash),
// copying them to .qa/new/ for review.
import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import sharp from "sharp";

async function hash(path) {
  const px = await sharp(path).resize(16, 10, { fit: "fill" }).grayscale().raw().toBuffer();
  const avg = px.reduce((a, b) => a + b, 0) / px.length;
  return Array.from(px, (v) => (v > avg ? 1 : 0));
}
const dist = (a, b) => a.reduce((n, v, i) => n + (v !== b[i] ? 1 : 0), 0);

const imported = await Promise.all(readdirSync("public/images/pages").map((f) => hash(`public/images/pages/${f}`)));
const sources = [
  ...readdirSync("public/images/incoming").filter((f) => /\.(png|jpe?g|webp)$/i.test(f)).map((f) => `public/images/incoming/${f}`),
  ...readdirSync("public/images/incoming/done").filter((f) => /^[a-f0-9]{8}-.*\.(png|jpe?g|webp)$/i.test(f)).map((f) => `public/images/incoming/done/${f}`),
];
if (existsSync(".qa/new")) rmSync(".qa/new", { recursive: true });
mkdirSync(".qa/new", { recursive: true });
const fresh = [];
const seen = [];
for (const s of sources) {
  const h = await hash(s);
  const near = Math.min(...imported.map((i) => dist(i, h)));
  if (near <= 22) continue; // already on the site
  if (seen.some((x) => dist(x, h) <= 12)) continue; // duplicate of another new file
  seen.push(h);
  fresh.push(s);
  copyFileSync(s, `.qa/new/${s.split("/").pop()}`);
}
console.log(`${sources.length} source files · ${fresh.length} not yet imported`);
