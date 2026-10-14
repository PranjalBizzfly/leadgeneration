// Usage: node scripts/contact-sheet.mjs — tiles public/images/incoming/done/* (oldest first) into
// numbered contact sheets at .qa/sheet-N.png, and writes .qa/sheet-index.json (number → file name).
import { mkdirSync, readdirSync, statSync, writeFileSync } from "node:fs";
import sharp from "sharp";

const DIR = process.argv[2] ?? "public/images/incoming/done";
const files = readdirSync(DIR)
  .filter((f) => /\.(png|jpe?g|webp)$/i.test(f))
  .sort((a, b) => statSync(`${DIR}/${a}`).mtimeMs - statSync(`${DIR}/${b}`).mtimeMs);
mkdirSync(".qa", { recursive: true });
writeFileSync(".qa/sheet-index.json", JSON.stringify(files, null, 1));

const W = 400, H = 250, COLS = 4, PER = 16;
for (let s = 0; s * PER < files.length; s++) {
  const batch = files.slice(s * PER, s * PER + PER);
  const rows = Math.ceil(batch.length / COLS);
  const tiles = await Promise.all(
    batch.map(async (f, i) => {
      const n = s * PER + i + 1;
      const img = await sharp(`${DIR}/${f}`).resize(W, H, { fit: "cover" }).toBuffer();
      const label = Buffer.from(`<svg width="${W}" height="${H}"><rect x="0" y="0" width="70" height="44" fill="#000" opacity=".8"/><text x="10" y="32" font-size="30" font-family="Arial" font-weight="bold" fill="#fff">${n}</text></svg>`);
      return { input: await sharp(img).composite([{ input: label }]).toBuffer(), left: (i % COLS) * W, top: Math.floor(i / COLS) * H };
    }),
  );
  await sharp({ create: { width: COLS * W, height: rows * H, channels: 3, background: "#222" } }).composite(tiles).png().toFile(`.qa/sheet-${s + 1}.png`);
}
console.log(`${files.length} images → ${Math.ceil(files.length / PER)} sheets`);
