import type { ReactNode } from "react";
import type { Visual } from "@/lib/groups";

/**
 * Original SVG illustrations drawn as labelled product mock-ups. Each variant depicts the subject of
 * its page group (a lead list, the source pipeline, a funnel, a local map…) using the platform's real
 * concepts — Google Maps, LinkedIn and IndiaMART sources, 0–100 scores, opportunity flags — and is
 * varied deterministically by `seed`. `topic` (the page name) labels the scene where it fits.
 * All names and figures are illustrative.
 */

function rng(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

const ALT: Record<Visual, string> = {
  dashboard: "Illustration of a lead dashboard listing scored prospects with opportunity flags",
  pipeline: "Illustration of leads flowing from Google Maps, LinkedIn and IndiaMART through enrichment, scoring and audit",
  funnel: "Illustration of a lead generation funnel narrowing prospects into qualified leads and meetings",
  map: "Illustration of a local map with business pins, some highlighted as opportunities",
  network: "Illustration of the decision-makers connected to one business account",
  form: "Illustration of a landing page lead capture form and a new-lead notification",
  flow: "Illustration of a lead qualification workflow routing leads to sales or nurture",
  chart: "Illustration of an analytics chart tracking qualified leads over time",
  book: "Illustration of a lead generation checklist and a stack of guides",
  scale: "Illustration of two options being weighed against each other on a balance",
};

const BUSINESSES = ["Northside Studio", "Harbor & Co", "Greenline Services", "Summit Partners", "Bluebird Clinic", "Oakridge Supply", "Metro Works", "Crestview Group", "Riverside Traders", "Brightpath Co"];
const FLAGS = ["No Website", "Weak Audit", "Email Found", "New Listing", "Phone Checked", "Few Reviews"];

const pick = <T,>(r: () => number, list: readonly T[]) => list[Math.floor(r() * list.length)];
function pickN<T>(r: () => number, list: readonly T[], n: number) {
  const pool = [...list];
  return Array.from({ length: n }, () => pool.splice(Math.floor(r() * pool.length), 1)[0]);
}
const clip = (s: string, n: number) => (s.length > n ? `${s.slice(0, n - 1).trimEnd()}…` : s);
const fmt = (n: number) => n.toLocaleString("en-US");

export function HeroVisual({ variant, seed, hue = 265, topic = "", className = "" }: { variant: Visual; seed: string; hue?: number; topic?: string; className?: string }) {
  const r = rng(seed);
  const c1 = `oklch(0.6 0.19 ${hue})`;
  const c2 = `oklch(0.72 0.14 ${(hue + 85) % 360})`;
  const c3 = `oklch(0.74 0.15 ${(hue + 170) % 360})`;
  const id = `g${Math.floor(r() * 1e6)}`;
  const props: SceneProps = { r, id, c2, c3, topic };

  return (
    <svg viewBox="0 0 480 380" role="img" aria-label={ALT[variant]} className={className} fontFamily="inherit">
      <defs>
        <linearGradient id={`${id}a`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c1} />
          <stop offset="1" stopColor={c2} />
        </linearGradient>
        <radialGradient id={`${id}b`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={c1} stopOpacity="0.24" />
          <stop offset="1" stopColor={c1} stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}s`} x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0f1222" floodOpacity="0.12" />
        </filter>
      </defs>
      <circle cx="240" cy="190" r="190" fill={`url(#${id}b)`} />
      {variant === "dashboard" && <Dashboard {...props} />}
      {variant === "pipeline" && <Pipeline {...props} />}
      {variant === "funnel" && <Funnel {...props} />}
      {variant === "map" && <MapScene {...props} />}
      {variant === "network" && <Network {...props} />}
      {variant === "form" && <FormScene {...props} />}
      {variant === "flow" && <Flow {...props} />}
      {variant === "chart" && <ChartScene {...props} />}
      {variant === "book" && <BookScene {...props} />}
      {variant === "scale" && <ScaleScene {...props} />}
    </svg>
  );
}

interface SceneProps {
  r: () => number;
  id: string;
  c2: string;
  c3: string;
  topic: string;
}

/* ───────── Shared pieces ───────── */

function Card({ x, y, w, h, id, rx = 16, className, children, accent }: { x: number; y: number; w: number; h: number; id: string; rx?: number; className?: string; children?: ReactNode; accent?: string }) {
  return (
    <g transform={`translate(${x} ${y})`} className={className}>
      <rect width={w} height={h} rx={rx} fill="var(--surface)" stroke={accent ?? "var(--line)"} strokeWidth={accent ? 2 : 1.5} filter={`url(#${id}s)`} />
      {children}
    </g>
  );
}

function T({ x, y, children, size = 11, weight = 600, fill = "var(--ink)", anchor, opacity }: { x: number; y: number; children: ReactNode; size?: number; weight?: number; fill?: string; anchor?: "start" | "middle" | "end"; opacity?: number }) {
  return (
    <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor} opacity={opacity}>
      {children}
    </text>
  );
}

const Muted = (p: Parameters<typeof T>[0]) => <T weight={500} fill="var(--muted)" {...p} />;

function Chip({ x, y, label, color, solid, ink = "white" }: { x: number; y: number; label: string; color: string; solid?: boolean; ink?: string }) {
  const w = label.length * 5.6 + 16;
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height="17" rx="8.5" fill={color} opacity={solid ? 1 : 0.16} />
      <T x={w / 2} y={12} size={9} weight={700} fill={solid ? ink : color} anchor="middle">
        {label}
      </T>
    </g>
  );
}

/** Text drawn on the light accent fill (c3), which is too pale for white text. */
const ON_ACCENT = "#17142b";

const Check = ({ x, y, color = "white", s = 1 }: { x: number; y: number; color?: string; s?: number }) => (
  <path transform={`translate(${x} ${y}) scale(${s})`} d="M-5 0l3.5 3.5L5-4" stroke={color} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
);

/* ───────── Scenes ───────── */

function Dashboard({ r, id, c2, c3, topic }: SceneProps) {
  const names = pickN(r, BUSINESSES, 4);
  const scores = Array.from({ length: 4 }, () => 42 + Math.floor(r() * 54)).sort((a, b) => b - a);
  const flags = pickN(r, FLAGS, 4);
  const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  const angle = Math.PI * (avg / 100);
  return (
    <g>
      <Card x={52} y={58} w={350} h={262} rx={22} id={id} className="float-slower">
        <circle cx="22" cy="22" r="4.5" fill={c3} />
        <circle cx="36" cy="22" r="4.5" fill={c2} />
        <circle cx="50" cy="22" r="4.5" fill="var(--line)" />
        <T x={68} y={topic ? 21 : 26} size={12} weight={700}>Lead Dashboard</T>
        {topic && <Muted x={68} y={34} size={9}>{clip(topic, 34)}</Muted>}
        <path d="M0 42H350" stroke="var(--line)" />
        <Muted x={22} y={60} size={9}>BUSINESS</Muted>
        <Muted x={180} y={60} size={9}>SIGNAL</Muted>
        <Muted x={326} y={60} size={9} anchor="end">SCORE</Muted>
        {names.map((n, i) => (
          <g key={n} transform={`translate(14 ${70 + i * 46})`}>
            <rect width="322" height="38" rx="10" fill={i === 0 ? "var(--surface-2)" : "transparent"} />
            <rect x="8" y="9" width="20" height="20" rx="6" fill={`url(#${id}a)`} opacity={1 - i * 0.18} />
            <T x={20} y={23} size={9} weight={800} fill="white" anchor="middle">{n[0]}</T>
            <T x={36} y={17} size={11}>{n}</T>
            <Muted x={36} y={30} size={9}>{i % 2 ? "Google Maps" : pick(r, ["LinkedIn", "IndiaMART", "Google Maps"])}</Muted>
            <Chip x={166} y={11} label={flags[i]} color={i < 2 ? c3 : c2} />
            <rect x="262" y="16" width="34" height="6" rx="3" fill="var(--line)" />
            <rect x="262" y="16" width={34 * (scores[i] / 100)} height="6" rx="3" fill={`url(#${id}a)`} />
            <T x={314} y={23} size={11} weight={800} anchor="end">{scores[i]}</T>
          </g>
        ))}
      </Card>
      <Card x={336} y={24} w={124} h={92} rx={18} id={id} className="float-slow">
        <path d="M26 70a36 36 0 0 1 72 0" stroke="var(--line)" strokeWidth="10" fill="none" strokeLinecap="round" />
        <path d={`M26 70a36 36 0 0 1 ${36 - 36 * Math.cos(angle)} ${-36 * Math.sin(angle)}`} stroke={`url(#${id}a)`} strokeWidth="10" fill="none" strokeLinecap="round" />
        <T x={62} y={68} size={18} weight={800} anchor="middle">{avg}</T>
        <Muted x={62} y={84} size={9} anchor="middle">Avg Lead Score</Muted>
      </Card>
      <Card x={18} y={300} w={150} h={70} id={id} className="float-slow">
        <Muted x={14} y={18} size={9}>New Leads / Week</Muted>
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const h = 8 + r() * 30;
          return <rect key={i} x={14 + i * 21} y={60 - h} width="13" height={h} rx="4" fill={i === 5 ? c3 : c2} opacity={0.45 + i * 0.1} />;
        })}
      </Card>
    </g>
  );
}

function Pipeline({ r, id, c2, c3, topic }: SceneProps) {
  const sources = ["Google Maps", "LinkedIn", "IndiaMART"];
  const stages = ["Enrich", "Score", "Audit"];
  const ready = 40 + Math.floor(r() * 160);
  return (
    <g>
      {sources.map((s, i) => {
        const y = 60 + i * 96;
        return (
          <g key={s}>
            <path d={`M134 ${y + 26} C 170 ${y + 26}, 168 176, 196 176`} stroke={c2} strokeWidth="2.5" fill="none" className="dash-flow" opacity="0.85" />
            <Card x={20} y={y} w={114} h={52} rx={14} id={id} className={i % 2 ? "float-slow" : "float-slower"}>
              <circle cx="24" cy="26" r="11" fill={i === 1 ? c3 : `url(#${id}a)`} />
              <T x={24} y={30} size={10} weight={800} fill="white" anchor="middle">{s[0]}</T>
              <T x={42} y={23} size={10.5}>{s}</T>
              <Muted x={42} y={37} size={9}>{fmt(80 + Math.floor(r() * 400))} Found</Muted>
            </Card>
          </g>
        );
      })}
      {stages.map((s, i) => {
        const active = i === 1;
        return (
          <g key={s} transform={`translate(${196 + i * 92} ${active ? 140 : 150})`}>
            <rect width="76" height={active ? 72 : 52} rx="14" fill={active ? `url(#${id}a)` : "var(--surface)"} stroke="var(--line)" strokeWidth="1.5" filter={`url(#${id}s)`} />
            <T x={38} y={active ? 32 : 24} size={11} weight={800} fill={active ? "white" : "var(--ink)"} anchor="middle">{s}</T>
            <T x={38} y={active ? 50 : 39} size={9} weight={500} fill={active ? "white" : "var(--muted)"} anchor="middle" opacity={active ? 0.85 : 1}>
              {["Contacts", "0–100", "SEO Health"][i]}
            </T>
            {i < 2 && <path d={`M78 ${active ? 36 : 26}h12`} stroke={c2} strokeWidth="2.5" className="dash-flow" />}
          </g>
        );
      })}
      <Card x={276} y={262} w={184} h={80} id={id} className="float-slow">
        <circle cx="28" cy="40" r="15" fill={c3} />
        <Check x={28} y={40} color={ON_ACCENT} />
        <T x={52} y={34} size={12} weight={800}>{ready} Leads Ready</T>
        <Muted x={52} y={50} size={9.5}>{topic ? clip(topic, 22) : "For Outreach"}</Muted>
      </Card>
      <Muted x={196} y={120} size={9}>ONE RECORD PER BUSINESS</Muted>
    </g>
  );
}

function Funnel({ r, id, c2, c3, topic }: SceneProps) {
  const top = 800 + Math.floor(r() * 900);
  const qualified = Math.round(top * (0.18 + r() * 0.12));
  const meetings = Math.round(qualified * (0.12 + r() * 0.1));
  const dots = Array.from({ length: 18 }, () => ({ x: 120 + r() * 220, y: 34 + r() * 46, s: 3 + r() * 4 }));
  const rows = [
    { label: "Prospects", n: top, path: "M90 100 H370 L338 150 H122 Z", fill: "var(--surface-2)", text: "var(--ink)" },
    { label: "Qualified", n: qualified, path: "M126 158 H334 L304 208 H156 Z", fill: `url(#${id}a)`, text: "white" },
    { label: "Meetings", n: meetings, path: "M160 216 H300 L282 266 H178 Z", fill: c3, text: ON_ACCENT },
  ];
  return (
    <g>
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.s} fill={i % 3 ? c2 : c3} opacity={0.35 + r() * 0.45} />
      ))}
      {rows.map((row, i) => (
        <g key={row.label}>
          <path d={row.path} fill={row.fill} stroke="var(--line)" strokeWidth={i ? 0 : 1.5} />
          <T x={230} y={124 + i * 58} size={13} weight={800} fill={row.text} anchor="middle">{fmt(row.n)}</T>
          <T x={230} y={139 + i * 58} size={9} weight={600} fill={row.text} anchor="middle" opacity={0.8}>{row.label}</T>
        </g>
      ))}
      <path d="M230 270 V300" stroke={c3} strokeWidth="2.5" className="dash-flow" />
      <Card x={182} y={302} w={96} h={40} rx={12} id={id}>
        <T x={48} y={25} size={11} weight={800} anchor="middle">Pipeline</T>
      </Card>
      <Card x={352} y={214} w={110} h={70} rx={14} id={id} className="float-slower">
        <Muted x={14} y={22} size={9}>Lead → Meeting</Muted>
        <T x={14} y={48} size={20} weight={800}>{((meetings / top) * 100).toFixed(1)}%</T>
      </Card>
      <Card x={18} y={196} w={118} h={70} rx={14} id={id} className="float-slow">
        <Muted x={14} y={22} size={9}>Playbook</Muted>
        <T x={14} y={42} size={10.5}>{clip(topic || "Outbound", 17)}</T>
        <Chip x={14} y={48} label="Active" color={c3} />
      </Card>
    </g>
  );
}

function MapScene({ r, id, c2, c3, topic }: SceneProps) {
  const pins = Array.from({ length: 10 }, (_, i) => ({ x: 96 + r() * 290, y: 100 + r() * 170, hot: i < 3 }));
  const flag = pick(r, ["No Website", "Weak Audit", "Few Reviews"]);
  return (
    <g>
      <rect x="40" y="40" width="400" height="300" rx="26" fill="var(--surface)" stroke="var(--line)" strokeWidth="1.5" />
      <path d={`M40 ${150 + r() * 40} C 160 ${120 + r() * 60}, 300 ${220 + r() * 40}, 440 ${170 + r() * 40}`} stroke="var(--surface-2)" strokeWidth="16" fill="none" />
      <path d={`M${170 + r() * 60} 40 C ${200 + r() * 40} 150, ${150 + r() * 40} 250, ${200 + r() * 60} 340`} stroke="var(--surface-2)" strokeWidth="12" fill="none" />
      <rect x={290 + r() * 30} y={64 + r() * 20} width="90" height="60" rx="10" fill={c2} opacity="0.14" />
      <Card x={58} y={56} w={168} h={34} rx={17} id={id}>
        <circle cx="18" cy="17" r="6" fill="none" stroke="var(--muted)" strokeWidth="2" />
        <path d="M22.5 21.5l4 4" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" />
        <T x={34} y={21} size={10.5}>{clip(topic || "Category", 15)} · City</T>
      </Card>
      {pins.map((p, i) => (
        <g key={i} transform={`translate(${p.x} ${p.y})`} className={p.hot ? "float-slow" : undefined}>
          {p.hot && <circle cy="-14" r="20" fill={c3} opacity="0.2" />}
          <path d="M0 0c-9-11-13-17-13-23a13 13 0 0 1 26 0c0 6-4 12-13 23Z" fill={p.hot ? `url(#${id}a)` : "var(--muted)"} opacity={p.hot ? 1 : 0.4} />
          <circle cy="-23" r="4.5" fill="white" />
        </g>
      ))}
      <Card x={270} y={250} w={190} h={92} id={id} className="float-slower">
        <T x={16} y={26} size={12} weight={800}>3 Opportunities</T>
        <Muted x={16} y={42} size={9.5}>Of {pins.length} Businesses In View</Muted>
        <Chip x={16} y={54} label={flag} color={c3} />
        <Chip x={16 + flag.length * 5.6 + 22} y={54} label="Score 70+" color={c2} />
      </Card>
    </g>
  );
}

function Network({ r, id, c2, c3, topic }: SceneProps) {
  const roles = pickN(r, ["Owner", "Ops Lead", "Finance", "IT Head", "Buyer", "Champion", "Marketing", "Procurement"], 6);
  const nodes = roles.map((role, i) => {
    const a = (i / roles.length) * Math.PI * 2 - Math.PI / 2 + (r() - 0.5) * 0.3;
    return { role, key: i % 3 === 0, x: 240 + Math.cos(a) * 160, y: 190 + Math.sin(a) * 118 };
  });
  return (
    <g>
      {nodes.map((n, i) => (
        <path key={`l${i}`} d={`M240 190 L${n.x} ${n.y}`} stroke={n.key ? c2 : "var(--line)"} strokeWidth="2" className={n.key ? "dash-flow" : undefined} />
      ))}
      {nodes.map((n, i) => (
        <g key={n.role} transform={`translate(${n.x} ${n.y})`} className={i % 2 ? "float-slow" : "float-slower"}>
          <rect x="-46" y="-17" width="92" height="34" rx="17" fill="var(--surface)" stroke={n.key ? c2 : "var(--line)"} strokeWidth={n.key ? 2 : 1.5} filter={`url(#${id}s)`} />
          <circle cx="-30" r="9" fill={n.key ? c3 : "var(--surface-2)"} />
          <circle cx="-30" cy="-2.5" r="3" fill={n.key ? "white" : "var(--muted)"} />
          <path d="M-35.5 5a5.5 5.5 0 0 1 11 0" fill={n.key ? ON_ACCENT : "var(--muted)"} />
          <T x={-16} y={4} size={10}>{n.role}</T>
        </g>
      ))}
      <circle cx="240" cy="190" r="48" fill={`url(#${id}a)`} filter={`url(#${id}s)`} />
      <T x={240} y={186} size={9.5} weight={800} fill="white" anchor="middle">{topic ? clip(topic, 17) : "Account"}</T>
      <T x={240} y={201} size={9} weight={500} fill="white" anchor="middle" opacity={0.85}>{nodes.filter((n) => n.key).length} Key Contacts</T>
    </g>
  );
}

function FormScene({ r, id, c2, c3, topic }: SceneProps) {
  const fields = ["Name", "Work Email", "Phone"].slice(0, 2 + Math.floor(r() * 2));
  const rate = (2 + r() * 6).toFixed(1);
  return (
    <g>
      <Card x={40} y={40} w={260} h={300} rx={22} id={id} className="float-slower">
        <T x={24} y={38} size={14} weight={800}>{clip(topic || "Get Your Free Guide", 24)}</T>
        <Muted x={24} y={56} size={10}>Takes Less Than A Minute.</Muted>
        {fields.map((f, i) => (
          <g key={f} transform={`translate(24 ${74 + i * 50})`}>
            <T x={0} y={10} size={9.5}>{f}</T>
            <rect y="16" width="212" height="26" rx="8" fill="var(--surface-2)" stroke="var(--line)" />
          </g>
        ))}
        <g transform={`translate(24 ${84 + fields.length * 50})`}>
          <rect width="16" height="16" rx="5" fill={c3} />
          <Check x={8} y={8} s={0.8} color={ON_ACCENT} />
          <Muted x={24} y={12} size={9}>I Agree To Be Contacted</Muted>
        </g>
        <rect x="24" y={114 + fields.length * 50} width="212" height="34" rx="10" fill={`url(#${id}a)`} />
        <T x={130} y={135 + fields.length * 50} size={11.5} weight={800} fill="white" anchor="middle">Submit</T>
      </Card>
      <Card x={282} y={70} w={180} h={76} rx={18} id={id} className="float-slow">
        <circle cx="30" cy="38" r="15" fill={c3} />
        <Check x={30} y={38} color={ON_ACCENT} />
        <T x={54} y={33} size={11.5} weight={800}>New Lead Captured</T>
        <Muted x={54} y={49} size={9.5}>Routed To Sales · Just Now</Muted>
      </Card>
      <Card x={318} y={232} w={142} h={90} rx={18} id={id} className="float-slower">
        <Muted x={16} y={24} size={9.5}>Form Conversion</Muted>
        <T x={16} y={54} size={22} weight={800}>{rate}%</T>
        <path d="M84 66 L98 56 L110 60 L126 44" stroke={c2} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </Card>
    </g>
  );
}

function Flow({ r, id, c2, c3 }: SceneProps) {
  const threshold = pick(r, [60, 65, 70, 75]);
  const fit = 2 + Math.floor(r() * 3);
  return (
    <g>
      <Card x={22} y={160} w={118} h={60} rx={14} id={id} className="float-slower">
        <T x={16} y={26} size={11.5} weight={800}>New Lead</T>
        <Muted x={16} y={43} size={9.5}>{pick(r, BUSINESSES)}</Muted>
      </Card>
      <path d="M140 190 H176" stroke={c2} strokeWidth="2.5" className="dash-flow" />
      <path d="M216 146 L258 190 L216 234 L174 190 Z" fill={`url(#${id}a)`} filter={`url(#${id}s)`} />
      <T x={216} y={187} size={10} weight={800} fill="white" anchor="middle">Score</T>
      <T x={216} y={201} size={10} weight={800} fill="white" anchor="middle">≥ {threshold}?</T>
      <path d="M258 190 C 284 190, 280 110, 306 110" stroke={c3} strokeWidth="2.5" fill="none" className="dash-flow" />
      <path d="M258 190 C 284 190, 280 272, 306 272" stroke="var(--line)" strokeWidth="2.5" fill="none" />
      <Chip x={262} y={128} label="Yes" color={c3} solid ink={ON_ACCENT} />
      <Chip x={262} y={238} label="No" color="var(--muted)" solid />
      <Card x={306} y={80} w={156} h={60} rx={14} id={id} accent={c3} className="float-slow">
        <circle cx="24" cy="30" r="11" fill={c3} />
        <Check x={24} y={30} s={0.9} color={ON_ACCENT} />
        <T x={44} y={26} size={11.5} weight={800}>Sales-Ready</T>
        <Muted x={44} y={42} size={9.5}>Assign Owner · Call</Muted>
      </Card>
      <Card x={306} y={242} w={156} h={60} rx={14} id={id} className="float-slower">
        <circle cx="24" cy="30" r="11" fill="var(--surface-2)" stroke="var(--line)" />
        <T x={44} y={26} size={11.5} weight={800}>Nurture</T>
        <Muted x={44} y={42} size={9.5}>Email Sequence · 30 Days</Muted>
      </Card>
      <Card x={120} y={40} w={150} h={70} rx={14} id={id} className="float-slow">
        <Muted x={14} y={22} size={9.5}>Fit Signals</Muted>
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={14 + i * 22} y="32" width="16" height="22" rx="4" fill={i < fit ? c2 : "var(--line)"} />
        ))}
        <T x={136} y={50} size={13} weight={800} anchor="end">{fit}/4</T>
      </Card>
    </g>
  );
}

function ChartScene({ r, id, c2, c3, topic }: SceneProps) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  const values = months.map((_, i) => 20 + i * 9 + Math.floor(r() * 18));
  const max = Math.max(...values) * 1.15;
  const pts = values.map((v, i) => ({ x: 92 + i * 46, y: 270 - (v / max) * 150 }));
  const line = pts.map((p, i) => `${i ? "L" : "M"}${p.x} ${p.y}`).join(" ");
  const growth = Math.round(((values[6] - values[5]) / values[5]) * 100);
  const reply = 4 + Math.floor(r() * 12);
  return (
    <g>
      <Card x={52} y={64} w={376} h={250} rx={22} id={id}>
        <T x={22} y={30} size={12} weight={800}>Qualified Leads</T>
        {topic && <Muted x={354} y={30} size={9.5} anchor="end">{clip(topic, 30)}</Muted>}
      </Card>
      {[0, 1, 2, 3].map((i) => (
        <path key={i} d={`M72 ${126 + i * 48}H408`} stroke="var(--line)" strokeDasharray="4 6" />
      ))}
      <path d={`${line} L${pts[6].x} 270 L${pts[0].x} 270 Z`} fill={`url(#${id}a)`} opacity="0.16" />
      <path d={line} stroke={`url(#${id}a)`} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={i === 6 ? 6.5 : 4} fill={i === 6 ? c3 : "var(--surface)"} stroke={c2} strokeWidth="2.5" />
      ))}
      {months.map((m, i) => (
        <Muted key={m} x={92 + i * 46} y={296} size={9} anchor="middle">{m}</Muted>
      ))}
      <Card x={330} y={20} w={128} h={66} rx={16} id={id} className="float-slow">
        <Muted x={14} y={22} size={9.5}>Month On Month</Muted>
        <T x={14} y={50} size={20} weight={800} fill={c3}>{growth >= 0 ? "+" : ""}{growth}%</T>
      </Card>
      <Card x={18} y={276} w={136} h={66} rx={16} id={id} className="float-slower">
        <circle cx="32" cy="33" r="16" fill="none" stroke="var(--line)" strokeWidth="7" />
        <circle cx="32" cy="33" r="16" fill="none" stroke={c3} strokeWidth="7" strokeDasharray={`${(reply / 100) * 100.5 * 3} 200`} transform="rotate(-90 32 33)" />
        <T x={58} y={30} size={14} weight={800}>{reply}%</T>
        <Muted x={58} y={45} size={9}>Reply Rate</Muted>
      </Card>
    </g>
  );
}

function BookScene({ r, id, c2, c3, topic }: SceneProps) {
  const titles = ["Playbook", "Checklist", "Glossary", "Guide"];
  const books = titles.map((t, i) => ({ t, w: 150 + r() * 60, h: 32 + r() * 8, off: (r() - 0.5) * 26, i }));
  const tops = books.reduce<number[]>((acc, b, i) => [...acc, (i ? acc[i - 1] : 340) - b.h - 4], []);
  const steps = ["Define Your ICP", "Build The List", "Verify Contacts", "Write Outreach", "Track Replies"];
  const done = 2 + Math.floor(r() * 2);
  return (
    <g>
      {books.map((b, i) => (
        <g key={b.t} transform={`translate(${40 + b.off} ${tops[i]})`}>
          <rect width={b.w} height={b.h} rx="8" fill={b.i % 2 ? c2 : `url(#${id}a)`} opacity={0.6 + b.i * 0.1} />
          <rect x="10" y="6" width="4" height={b.h - 12} rx="2" fill="white" opacity="0.5" />
          <T x={22} y={b.h / 2 + 4} size={11} weight={800} fill="white">{b.t}</T>
        </g>
      ))}
      <Card x={250} y={40} w={210} h={214} rx={18} id={id} className="float-slow">
        <T x={18} y={30} size={12.5} weight={800}>{clip(topic || "Lead Gen Checklist", 24)}</T>
        <Muted x={18} y={46} size={9.5}>{done} Of {steps.length} Complete</Muted>
        <rect x="18" y="54" width="174" height="5" rx="2.5" fill="var(--line)" />
        <rect x="18" y="54" width={174 * (done / steps.length)} height="5" rx="2.5" fill={c3} />
        {steps.map((s, i) => (
          <g key={s} transform={`translate(18 ${74 + i * 27})`}>
            <rect width="16" height="16" rx="5" fill={i < done ? c3 : "var(--surface-2)"} stroke="var(--line)" />
            {i < done && <Check x={8} y={8} s={0.75} color={ON_ACCENT} />}
            <T x={26} y={12} size={10.5} weight={i < done ? 500 : 600} fill={i < done ? "var(--muted)" : "var(--ink)"}>{s}</T>
          </g>
        ))}
      </Card>
      <Card x={40} y={40} w={150} h={72} rx={16} id={id} className="float-slower">
        <circle cx="30" cy="36" r="16" fill={c3} opacity="0.9" />
        <path d="M30 26c-5 0-9 4-9 8.5 0 3.5 2.5 5 4 7 1 1 1 2 1 3h8c0-1 0-2 1-3 1.5-2 4-3.5 4-7 0-4.5-4-8.5-9-8.5Z" fill="white" />
        <T x={56} y={32} size={11} weight={800}>Key Idea</T>
        <Muted x={56} y={47} size={9.5}>Read In 5 Min</Muted>
      </Card>
    </g>
  );
}

function ScaleScene({ r, id, c2, c3, topic }: SceneProps) {
  const tilt = (r() - 0.5) * 12;
  const sides = topic.includes(" Vs ") ? topic.split(" Vs ").map((s) => s.trim()) : ["Option A", "Option B"];
  const pros = [pick(r, ["Faster Start", "Lower Cost", "More Control"]), pick(r, ["Scales Better", "Less Effort", "Wider Reach"])];
  return (
    <g>
      <rect x="230" y="120" width="20" height="196" rx="8" fill="var(--line)" />
      <rect x="170" y="308" width="140" height="22" rx="11" fill="var(--line)" />
      <g transform={`rotate(${tilt} 240 120)`}>
        <rect x="70" y="113" width="340" height="12" rx="6" fill={`url(#${id}a)`} />
        {[100, 380].map((x, i) => (
          <g key={x} transform={`translate(${x} 125)`}>
            <path d="M0 0 L-46 88 M0 0 L46 88" stroke="var(--line)" strokeWidth="2" />
            <g transform={`rotate(${-tilt} 0 88)`}>
              <rect x="-74" y="88" width="148" height="78" rx="16" fill="var(--surface)" stroke={i ? c3 : c2} strokeWidth="2" filter={`url(#${id}s)`} />
              <T x={0} y={116} size={12} weight={800} anchor="middle">{clip(sides[i] ?? "", 20)}</T>
              <Chip x={-50} y={130} label={pros[i]} color={i ? c3 : c2} />
            </g>
          </g>
        ))}
      </g>
      <circle cx="240" cy="119" r="13" fill="var(--surface)" stroke={c2} strokeWidth="3" />
      <Card x={160} y={30} w={160} h={44} rx={22} id={id} className="float-slow">
        <T x={80} y={27} size={11} weight={800} anchor="middle">Which Fits Your Team?</T>
      </Card>
    </g>
  );
}
