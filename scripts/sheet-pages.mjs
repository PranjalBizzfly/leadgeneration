// Usage: node scripts/sheet-pages.mjs — numbered contact sheets of every image in public/images/pages,
// in prompt order, for visual review. Writes .qa/review-N.png and .qa/review-index.json.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import sharp from "sharp";

const ORDER = ["home.json", "core-services.json", "strategies.json", "industries.json", "b2b-b2c.json", "capture-qualification.json", "tools-compare.json", "resources.json"];
const entries = ORDER.flatMap((f) => JSON.parse(readFileSync(`docs/image-prompts/${f}`, "utf8")))
  .map((e, i) => ({ n: i + 1, file: e.file }))
  .filter((e) => existsSync(`public${e.file}`));
mkdirSync(".qa", { recursive: true });
writeFileSync(".qa/review-index.json", JSON.stringify(entries));

const W = 384, H = 240, COLS = 5, PER = 20;
for (let s = 0; s * PER < entries.length; s++) {
  const batch = entries.slice(s * PER, s * PER + PER);
  const tiles = await Promise.all(
    batch.map(async (e, i) => {
      const img = await sharp(`public${e.file}`).resize(W, H).toBuffer();
      const label = Buffer.from(`<svg width="${W}" height="${H}"><rect width="64" height="34" fill="#000" opacity=".8"/><text x="8" y="25" font-size="22" font-family="Arial" font-weight="bold" fill="#fff">${e.n}</text></svg>`);
      return { input: await sharp(img).composite([{ input: label }]).toBuffer(), left: (i % COLS) * W, top: Math.floor(i / COLS) * H };
    }),
  );
  await sharp({ create: { width: COLS * W, height: Math.ceil(batch.length / COLS) * H, channels: 3, background: "#222" } }).composite(tiles).png().toFile(`.qa/review-${s + 1}.png`);
}
console.log(`${entries.length} images → ${Math.ceil(entries.length / PER)} sheets`);
