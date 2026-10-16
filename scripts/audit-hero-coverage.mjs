import { existsSync, statSync } from "node:fs";
import { PLAN } from "../src/content/plan.ts";
import { COMPANY_PAGES } from "../src/content/company.ts";
import { posts } from "../src/content/blog-posts.ts";
import { heroImage, IMAGES } from "../src/content/images.ts";

const allPages = [
  ...PLAN.map((p) => ({ path: p.path, title: p.title, group: p.group, type: "content" })),
  ...COMPANY_PAGES.map((p) => ({ path: p.path, title: p.title, group: p.group, type: "company" })),
  ...posts.map((p) => ({ path: `/blog/${p.slug}`, title: p.title, group: "blog", type: "blog-post" })),
];

console.log("==============================================================");
console.log(`TOTAL REGISTERED INNER PAGES TO AUDIT: ${allPages.length - 1} (excluding homepage /)`);
console.log("==============================================================\n");

const withoutImage = [];
const missingFileOnDisk = [];
const emptyAlt = [];
const validWithImage = [];

for (const page of allPages) {
  if (page.path === "/") continue; // Homepage has Hero3D interactive hero

  const photo = heroImage(page.path);
  if (!photo) {
    withoutImage.push(page);
    continue;
  }

  const filePath = `public${photo.src}`;
  if (!existsSync(filePath)) {
    missingFileOnDisk.push({ ...page, expectedFile: filePath });
    continue;
  }

  const stat = statSync(filePath);
  if (stat.size === 0) {
    missingFileOnDisk.push({ ...page, expectedFile: filePath, emptyFile: true });
    continue;
  }

  if (!photo.alt || photo.alt.trim().length === 0) {
    emptyAlt.push({ ...page, file: filePath });
    continue;
  }

  validWithImage.push({ ...page, src: photo.src, alt: photo.alt, size: stat.size });
}

console.log(`RESULTS:`);
console.log(`  Pages with valid, active hero images: ${validWithImage.length}`);
console.log(`  Pages without hero image:            ${withoutImage.length}`);
console.log(`  Pages with missing file on disk:     ${missingFileOnDisk.length}`);
console.log(`  Pages with empty alt text:           ${emptyAlt.length}`);
console.log("--------------------------------------------------------------");

if (withoutImage.length > 0) {
  console.log("\nPAGES WITHOUT HERO IMAGE:");
  for (const p of withoutImage) {
    console.log(`- [${p.type}] [${p.group}] ${p.path} ("${p.title}")`);
  }
} else {
  console.log("\nALL INNER PAGES CARRY A VALID HERO BACKGROUND IMAGE!");
}

if (missingFileOnDisk.length > 0) {
  console.log("\nPAGES WITH MISSING FILE ON DISK:");
  for (const p of missingFileOnDisk) {
    console.log(`- ${p.path}: ${p.expectedFile}`);
  }
}

// Group summary
const byGroup = {};
for (const p of validWithImage) {
  byGroup[p.group] = (byGroup[p.group] || 0) + 1;
}
console.log("\nVALID HERO IMAGES BY GROUP:");
console.table(byGroup);
