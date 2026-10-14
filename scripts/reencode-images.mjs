// Usage: node scripts/reencode-images.mjs
// Re-encodes every imported image from its original (public/images/incoming/done/<n>.<ext>) to a
// 1600×1000 HD WebP: Lanczos resampling, light unsharp mask for crisp edges, quality 90,
// full-resolution chroma (no 4:2:0 colour smearing). Also audits alt text for every image.
import { existsSync, readdirSync, readFileSync } from "node:fs";
import sharp from "sharp";

const ORDER = ["home.json", "core-services.json", "strategies.json", "industries.json", "b2b-b2c.json", "capture-qualification.json", "tools-compare.json", "resources.json"];
const entries = ORDER.flatMap((f) => JSON.parse(readFileSync(`docs/image-prompts/${f}`, "utf8")));
const originals = new Map(
  readdirSync("public/images/incoming/done")
    .filter((f) => /^\d+\.(png|jpe?g|webp)$/i.test(f))
    .map((f) => [parseInt(f), `public/images/incoming/done/${f}`]),
);

let done = 0, upscaled = 0;
const problems = [];
for (const [i, e] of entries.entries()) {
  const out = `public${e.file}`;
  if (!existsSync(out)) continue;
  const src = originals.get(i + 1);
  if (!src) {
    problems.push(`#${i + 1} ${e.file}: original not found, left as is`);
    continue;
  }
  const meta = await sharp(src).metadata();
  if ((meta.width ?? 0) < 1600) upscaled++;
  const buf = await sharp(src)
    .resize(1600, 1000, { fit: "cover", position: "attention", kernel: "lanczos3" })
    .sharpen({ sigma: 0.6, m1: 0.6, m2: 1.2 })
    .webp({ quality: 90, smartSubsample: true, effort: 6 })
    .toBuffer();
  await sharp(buf).toFile(out);
  done++;
  const words = (e.alt ?? "").trim().split(/\s+/).filter(Boolean).length;
  if (words < 6 || /^(image|picture|photo) of/i.test(e.alt)) problems.push(`#${i + 1} ${e.file}: weak alt text "${e.alt}"`);
}
console.log(`${done} images re-encoded to 1600×1000 WebP q90 (${upscaled} upscaled from smaller originals)`);
console.log(problems.length ? problems.join("\n") : "alt text: every image has a descriptive alt");
