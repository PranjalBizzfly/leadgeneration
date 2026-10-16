// Usage:
//   node scripts/generate-hero-images.mjs [--dry-run] [--category <b2b|b2c|compare|industries|lead-capture|lead-qualification|resources|services|strategies|tools>] [--limit <n>]
//
// Automatically parses docs/HERO-BACKGROUND-PROMPTS.md, skips any image already present on disk,
// generates the missing ones using the provided API (GEMINI_API_KEY or OPENAI_API_KEY),
// converts them to 1600x1000 WebP (quality 82, attention crop), and updates src/content/images.ts.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import sharp from "sharp";

const text = readFileSync("docs/HERO-BACKGROUND-PROMPTS.md", "utf8");
const regex = /###\s+\d+\.\s+([^\n]+)\s*\n\s*-\s+\*\*Page:\*\*\s+`?([^`\n]+)`?\s*\n\s*-\s+\*\*Save as:\*\*\s+`?([^`\n]+)`?\s*\n\s*-\s+\*\*Alt text:\*\*\s+([^\n]+)\s*\n\s*>\s+([^\n]+)/g;

const entries = [];
let match;
while ((match = regex.exec(text)) !== null) {
  const file = match[3].replace(/`/g, "").trim();
  const page = match[2].replace(/`/g, "").trim();
  const title = match[1].trim();
  const alt = match[4].trim();
  const prompt = match[5].trim();
  const category = page.split("/")[1] || "root";
  entries.push({ title, page, file, alt, prompt, category });
}

// CLI args
const args = process.argv.slice(2);
const isDryRun = args.includes("--dry-run");
const helpIdx = args.findIndex((a) => a === "--help" || a === "-h");
if (helpIdx !== -1) {
  console.log(`
Generate Hero Images CLI
-----------------------
Options:
  --category <name>   Filter by category (b2b, b2c, compare, industries, lead-capture,
                      lead-qualification, resources, services, strategies, tools)
  --limit <n>         Maximum number of images to generate in this run
  --dry-run           List matching missing entries without calling any API
  --help              Show this message

Environment Variables:
  GEMINI_API_KEY      Google GenAI / Imagen API key
  OPENAI_API_KEY      OpenAI API key (DALL-E 3)
`);
  process.exit(0);
}

const catIdx = args.indexOf("--category");
const targetCategory = catIdx !== -1 ? args[catIdx + 1] : null;

const limitIdx = args.indexOf("--limit");
const limit = limitIdx !== -1 ? parseInt(args[limitIdx + 1], 10) : Infinity;

const missing = entries.filter((e) => {
  if (existsSync(e.file)) return false;
  if (targetCategory && e.category !== targetCategory) return false;
  return true;
});

console.log(`\n======================================================`);
console.log(`Hero Background Images Generator`);
console.log(`Total entries in doc: ${entries.length}`);
console.log(`Already live on disk: ${entries.length - entries.filter((e) => !existsSync(e.file)).length}`);
console.log(`Pending in selection: ${missing.length} (target: ${targetCategory || "all"}, limit: ${limit === Infinity ? "none" : limit})`);
console.log(`======================================================\n`);

if (isDryRun) {
  console.log("DRY RUN — Matching pending items:");
  for (const [i, item] of missing.slice(0, limit).entries()) {
    console.log(`${i + 1}. [${item.category}] ${item.page} -> ${item.file}`);
    console.log(`   Alt: ${item.alt}`);
  }
  process.exit(0);
}

const geminiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
const openaiKey = process.env.OPENAI_API_KEY;

if (!geminiKey && !openaiKey) {
  console.log("No API key provided. Set GEMINI_API_KEY or OPENAI_API_KEY in your environment.");
  console.log("Example:");
  console.log("  $env:GEMINI_API_KEY=\"your_key\"; node scripts/generate-hero-images.mjs --category services");
  process.exit(1);
}

async function generateImageGemini(prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=${geminiKey}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      instances: [{ prompt }],
      parameters: {
        sampleCount: 1,
        aspectRatio: "16:9",
        outputMimeType: "image/jpeg",
        personGeneration: "ALLOW_ADULT",
      },
    }),
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Gemini Imagen API error ${res.status}: ${errText}`);
  }
  const data = await res.json();
  const b64 = data.predictions?.[0]?.bytesBase64Encoded;
  if (!b64) throw new Error("No image data returned in Gemini response");
  return Buffer.from(b64, "base64");
}

async function generateImageOpenAI(prompt) {
  const url = "https://api.openai.com/v1/images/generations";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${openaiKey}`,
    },
    body: JSON.stringify({
      model: "dall-e-3",
      prompt,
      n: 1,
      size: "1792x1024",
      quality: "standard",
      response_format: "b64_json",
    }),
  });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`OpenAI API error ${res.status}: ${errText}`);
  }
  const data = await res.json();
  const b64 = data.data?.[0]?.b64_json;
  if (!b64) throw new Error("No image data returned in OpenAI response");
  return Buffer.from(b64, "base64");
}

function updateManifest() {
  const ORDER = [
    "home.json",
    "core-services.json",
    "strategies.json",
    "industries.json",
    "b2b-b2c.json",
    "capture-qualification.json",
    "tools-compare.json",
    "resources.json",
    "company-blog.json",
  ];
  const allJson = ORDER.flatMap((f) => {
    try {
      return JSON.parse(readFileSync(`docs/image-prompts/${f}`, "utf8"));
    } catch {
      return [];
    }
  });

  // Also include anything from entries that exists on disk
  const map = new Map();
  for (const e of allJson) {
    if (existsSync(`public${e.file}`)) {
      map.set(e.file, e.alt);
    }
  }
  for (const e of entries) {
    const relFile = e.file.startsWith("public") ? e.file.replace(/^public/, "") : e.file;
    if (existsSync(e.file)) {
      map.set(relFile, e.alt);
    }
  }

  const manifestEntries = Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  const ts = `// Generated by scripts/generate-hero-images.mjs. Do not edit by hand.
export interface SiteImage {
  src: string;
  alt: string;
}

/** Every imported image, keyed by its public path. */
export const IMAGES: Record<string, SiteImage> = {
${manifestEntries.map(([file, alt]) => `  ${JSON.stringify(file)}: { src: ${JSON.stringify(file)}, alt: ${JSON.stringify(alt)} },`).join("\n")}
};

/** Hero image for a page path, if one has been imported. */
export function heroImage(path: string): SiteImage | undefined {
  const file = "/images/pages/" + (path === "/" ? "home" : path.slice(1).replace(/\\//g, "--")) + ".webp";
  return IMAGES[file];
}
`;
  writeFileSync("src/content/images.ts", ts);
  console.log(`Updated src/content/images.ts (${manifestEntries.length} images live)`);
}

mkdirSync("public/images/pages", { recursive: true });

let completed = 0;
for (const item of missing.slice(0, limit)) {
  console.log(`Generating [${item.category}] ${item.page}...`);
  try {
    const rawBuffer = geminiKey ? await generateImageGemini(item.prompt) : await generateImageOpenAI(item.prompt);
    await sharp(rawBuffer)
      .resize(1600, 1000, { fit: "cover", position: "attention" })
      .webp({ quality: 82 })
      .toFile(item.file);
    completed++;
    console.log(`✓ Saved ${item.file}`);
  } catch (err) {
    console.error(`✗ Failed for ${item.page}:`, err.message);
  }
}

updateManifest();
console.log(`\nRun complete: ${completed} images generated.\n`);
