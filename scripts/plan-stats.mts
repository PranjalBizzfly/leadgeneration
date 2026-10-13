// Usage: node scripts/plan-stats.mts — prints page counts per group and phase.
import { PLAN } from "../src/content/plan.ts";

const counts: Record<string, number[]> = {};
for (const p of PLAN) {
  counts[p.group] ??= [0, 0];
  counts[p.group][p.phase - 1]++;
}
console.log("total", PLAN.length, "unique", new Set(PLAN.map((p) => p.path)).size);
console.log(JSON.stringify(counts));
console.log("phase1", PLAN.filter((p) => p.phase === 1).length);
