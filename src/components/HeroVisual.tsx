import type { Visual } from "@/lib/groups";

/**
 * Original, text-free SVG illustrations. Each variant depicts the subject of its page group
 * (a data pipeline, a funnel, a local map, a buyer network…) and is varied deterministically by
 * `seed`, so pages in the same group get related but different compositions.
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
  dashboard: "Illustration of a lead dashboard with scored prospect rows and a score gauge",
  pipeline: "Illustration of a data pipeline moving leads from sources through enrichment and scoring to outreach",
  funnel: "Illustration of a lead generation funnel narrowing many prospects into qualified opportunities",
  map: "Illustration of a local map with business location pins, some highlighted as opportunities",
  network: "Illustration of a network of connected business buyers and decision-makers",
  form: "Illustration of a landing page with a lead capture form",
  flow: "Illustration of a lead qualification workflow with branching stages",
  chart: "Illustration of analytics charts tracking lead generation performance",
  book: "Illustration of stacked guides and checklists",
  scale: "Illustration of two options being compared on a balance",
};

export function HeroVisual({ variant, seed, hue = 265, className = "" }: { variant: Visual; seed: string; hue?: number; className?: string }) {
  const r = rng(seed);
  const c1 = `oklch(0.6 0.19 ${hue})`;
  const c2 = `oklch(0.75 0.13 ${(hue + 85) % 360})`;
  const c3 = `oklch(0.8 0.14 ${(hue + 170) % 360})`;
  const id = `g${Math.floor(r() * 1e6)}`;

  return (
    <svg viewBox="0 0 480 380" role="img" aria-label={ALT[variant]} className={className}>
      <defs>
        <linearGradient id={`${id}a`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c1} />
          <stop offset="1" stopColor={c2} />
        </linearGradient>
        <radialGradient id={`${id}b`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={c1} stopOpacity="0.28" />
          <stop offset="1" stopColor={c1} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="250" cy="190" r="190" fill={`url(#${id}b)`} />
      {variant === "pipeline" && <Pipeline r={r} id={id} c2={c2} c3={c3} />}
      {variant === "funnel" && <Funnel r={r} id={id} c2={c2} c3={c3} />}
      {variant === "map" && <MapScene r={r} id={id} c2={c2} c3={c3} />}
      {variant === "network" && <Network r={r} id={id} c2={c2} c3={c3} />}
      {variant === "flow" && <Flow r={r} id={id} c2={c2} c3={c3} />}
      {variant === "form" && <FormScene r={r} id={id} c2={c2} c3={c3} />}
      {variant === "chart" && <ChartScene r={r} id={id} c2={c2} c3={c3} />}
      {variant === "book" && <BookScene r={r} id={id} c2={c2} c3={c3} />}
      {variant === "scale" && <ScaleScene r={r} id={id} c2={c2} c3={c3} />}
      {variant === "dashboard" && <Dashboard r={r} id={id} c2={c2} c3={c3} />}
    </svg>
  );
}

interface SceneProps {
  r: () => number;
  id: string;
  c2: string;
  c3: string;
}

const panel = { fill: "var(--surface)", stroke: "var(--line)", strokeWidth: 1.5 };
const bar = (x: number, y: number, w: number, o = 1) => <rect x={x} y={y} width={w} height="8" rx="4" fill="var(--line)" opacity={o} />;

function Dashboard({ r, id, c2, c3 }: SceneProps) {
  const rows = 4;
  const scores = Array.from({ length: rows }, () => 0.35 + r() * 0.6).sort((a, b) => b - a);
  const angle = Math.PI * (0.15 + r() * 0.7);
  return (
    <g>
      <g className="float-slower">
        <rect x="70" y="60" width="340" height="250" rx="22" {...panel} />
        <circle cx="96" cy="84" r="5" fill={c3} />
        <circle cx="112" cy="84" r="5" fill={c2} />
        <circle cx="128" cy="84" r="5" fill="var(--line)" />
        {scores.map((s, i) => (
          <g key={i} transform={`translate(92 ${118 + i * 44})`}>
            <rect width="296" height="34" rx="10" fill="var(--surface-2)" />
            <rect x="10" y="7" width="20" height="20" rx="6" fill={`url(#${id}a)`} opacity={1 - i * 0.18} />
            {bar(40, 9, 70 + r() * 60)}
            {bar(40, 20, 40 + r() * 40, 0.6)}
            <rect x="210" y="13" width="70" height="8" rx="4" fill="var(--line)" />
            <rect x="210" y="13" width={70 * s} height="8" rx="4" fill={`url(#${id}a)`} />
          </g>
        ))}
      </g>
      <g className="float-slow" transform="translate(330 30)">
        <rect width="120" height="96" rx="18" {...panel} />
        <path d="M24 70a36 36 0 0 1 72 0" stroke="var(--line)" strokeWidth="10" fill="none" strokeLinecap="round" />
        <path d={`M24 70a36 36 0 0 1 ${36 - 36 * Math.cos(angle)} ${-36 * Math.sin(angle)}`} stroke={`url(#${id}a)`} strokeWidth="10" fill="none" strokeLinecap="round" />
      </g>
      <g className="float-slow" transform="translate(30 250)">
        <rect width="132" height="70" rx="16" {...panel} />
        {[0, 1, 2, 3, 4].map((i) => {
          const h = 12 + r() * 34;
          return <rect key={i} x={18 + i * 21} y={56 - h} width="12" height={h} rx="4" fill={i === 4 ? c3 : c2} opacity={0.5 + i * 0.1} />;
        })}
      </g>
    </g>
  );
}

function Pipeline({ r, id, c2, c3 }: SceneProps) {
  const sources = [0, 1, 2];
  const stages = [0, 1, 2];
  return (
    <g>
      {sources.map((i) => {
        const y = 80 + i * 110;
        return (
          <g key={i}>
            <path d={`M118 ${y + 25} C 170 ${y + 25}, 170 190, 210 190`} stroke={c2} strokeWidth="2.5" fill="none" className="dash-flow" opacity="0.8" />
            <g className={i % 2 ? "float-slow" : "float-slower"}>
              <rect x="40" y={y} width="78" height="50" rx="14" {...panel} />
              <circle cx="62" cy={y + 25} r="10" fill={i === 1 ? c3 : `url(#${id}a)`} opacity={0.9 - i * 0.15} />
              {bar(78, y + 16, 28)}
              {bar(78, y + 28, 18 + r() * 10, 0.6)}
            </g>
          </g>
        );
      })}
      {stages.map((i) => (
        <g key={i} transform={`translate(${210 + i * 78} ${165 - (i === 1 ? 10 : 0)})`}>
          <rect width="62" height={50 + (i === 1 ? 20 : 0)} rx="14" fill={i === 1 ? `url(#${id}a)` : "var(--surface)"} stroke="var(--line)" strokeWidth="1.5" />
          <rect x="16" y="18" width="30" height="6" rx="3" fill={i === 1 ? "white" : "var(--line)"} opacity="0.9" />
          <rect x="16" y="30" width={14 + r() * 16} height="6" rx="3" fill={i === 1 ? "white" : "var(--line)"} opacity="0.6" />
          {i < 2 && <path d="M64 25h12" stroke={c2} strokeWidth="2.5" className="dash-flow" />}
        </g>
      ))}
      <g className="float-slow" transform="translate(300 268)">
        <rect width="150" height="70" rx="16" {...panel} />
        <path d="M22 35l10 10 18-20" stroke={c3} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {bar(64, 24, 64)}
        {bar(64, 38, 40 + r() * 20, 0.6)}
      </g>
    </g>
  );
}

function Funnel({ r, id, c2, c3 }: SceneProps) {
  const dots = Array.from({ length: 22 }, () => ({ x: 110 + r() * 260, y: 40 + r() * 60, s: 4 + r() * 4 }));
  return (
    <g>
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.s} fill={i % 3 ? c2 : c3} opacity={0.35 + r() * 0.5} />
      ))}
      <path d="M100 120 H380 L300 230 V300 H180 V230 Z" fill="var(--surface)" stroke="var(--line)" strokeWidth="1.5" />
      <path d="M128 140 H352 L292 222 H188 Z" fill={`url(#${id}a)`} opacity="0.85" />
      <path d="M196 236 H284 V284 H196 Z" fill={c3} opacity="0.75" />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={222 + i * 18} cy={326 + (i % 2) * 6} r="7" fill={c3} className="float-slow" />
      ))}
      <g className="float-slower" transform="translate(370 230)">
        <rect width="92" height="64" rx="14" {...panel} />
        <path d="M18 44 L36 30 L52 38 L74 18" stroke={c2} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g className="float-slow" transform="translate(22 210)">
        <rect width="96" height="56" rx="14" {...panel} />
        {bar(16, 18, 60)}
        {bar(16, 32, 36 + r() * 20, 0.6)}
      </g>
    </g>
  );
}

function MapScene({ r, id, c2, c3 }: SceneProps) {
  const pins = Array.from({ length: 9 }, (_, i) => ({ x: 100 + r() * 280, y: 90 + r() * 200, hot: i < 3 }));
  return (
    <g>
      <rect x="60" y="50" width="360" height="280" rx="26" {...panel} />
      <path d={`M60 ${150 + r() * 40} C 160 ${120 + r() * 60}, 300 ${220 + r() * 40}, 420 ${170 + r() * 40}`} stroke="var(--line)" strokeWidth="14" fill="none" />
      <path d={`M${170 + r() * 60} 50 C ${200 + r() * 40} 150, ${150 + r() * 40} 250, ${200 + r() * 60} 330`} stroke="var(--line)" strokeWidth="10" fill="none" />
      <rect x={260 + r() * 40} y={70 + r() * 30} width="80" height="56" rx="10" fill={c2} opacity="0.18" />
      {pins.map((p, i) => (
        <g key={i} transform={`translate(${p.x} ${p.y})`} className={p.hot ? "float-slow" : undefined}>
          {p.hot && <circle r="20" fill={c3} opacity="0.22" />}
          <path d="M0 0c-9-11-13-17-13-23a13 13 0 0 1 26 0c0 6-4 12-13 23Z" fill={p.hot ? `url(#${id}a)` : "var(--muted)"} opacity={p.hot ? 1 : 0.45} />
          <circle cy="-23" r="4.5" fill="white" />
        </g>
      ))}
      <g className="float-slower" transform="translate(300 270)">
        <rect width="150" height="74" rx="16" {...panel} />
        <circle cx="30" cy="37" r="14" fill={c3} opacity="0.85" />
        {bar(54, 26, 70)}
        {bar(54, 41, 44 + r() * 20, 0.6)}
      </g>
    </g>
  );
}

function Network({ r, id, c2, c3 }: SceneProps) {
  const nodes = Array.from({ length: 8 }, (_, i) => {
    const a = (i / 8) * Math.PI * 2 + r() * 0.4;
    const d = 110 + r() * 40;
    return { x: 240 + Math.cos(a) * d, y: 190 + Math.sin(a) * d * 0.8 };
  });
  return (
    <g>
      {nodes.map((n, i) => (
        <path key={`l${i}`} d={`M240 190 L${n.x} ${n.y}`} stroke={i % 3 === 0 ? c2 : "var(--line)"} strokeWidth="2" className={i % 3 === 0 ? "dash-flow" : undefined} />
      ))}
      {nodes.map((n, i) => {
        const m = nodes[(i + 1) % nodes.length];
        return <path key={`m${i}`} d={`M${n.x} ${n.y} L${m.x} ${m.y}`} stroke="var(--line)" strokeWidth="1.2" opacity="0.6" />;
      })}
      {nodes.map((n, i) => (
        <g key={i} transform={`translate(${n.x} ${n.y})`} className={i % 2 ? "float-slow" : "float-slower"}>
          <circle r={i % 3 === 0 ? 20 : 15} fill="var(--surface)" stroke={i % 3 === 0 ? c2 : "var(--line)"} strokeWidth="2" />
          <circle cy="-3" r="5" fill={i % 3 === 0 ? c3 : "var(--muted)"} opacity={i % 3 === 0 ? 1 : 0.5} />
          <path d="M-8 9a8 8 0 0 1 16 0" fill={i % 3 === 0 ? c3 : "var(--muted)"} opacity={i % 3 === 0 ? 1 : 0.5} />
        </g>
      ))}
      <circle cx="240" cy="190" r="38" fill={`url(#${id}a)`} />
      <path d="M226 190l9 9 18-19" stroke="white" strokeWidth="4.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}

function FormScene({ r, id, c2, c3 }: SceneProps) {
  const fields = 2 + Math.floor(r() * 2);
  return (
    <g>
      <g className="float-slower">
        <rect x="60" y="50" width="250" height="290" rx="22" {...panel} />
        <rect x="84" y="78" width="130" height="12" rx="6" fill="var(--ink)" opacity="0.75" />
        {bar(84, 100, 180, 0.7)}
        {bar(84, 114, 120 + r() * 40, 0.5)}
        {Array.from({ length: fields }, (_, i) => (
          <g key={i} transform={`translate(84 ${142 + i * 44})`}>
            {bar(0, 0, 50, 0.8)}
            <rect y="12" width="202" height="24" rx="8" fill="var(--surface-2)" stroke="var(--line)" />
          </g>
        ))}
        <rect x="84" y={150 + fields * 44} width="202" height="34" rx="10" fill={`url(#${id}a)`} />
        <rect x="155" y={164 + fields * 44} width="60" height="6" rx="3" fill="white" opacity="0.9" />
      </g>
      <g className="float-slow" transform="translate(300 90)">
        <rect width="140" height="84" rx="18" {...panel} />
        <circle cx="34" cy="42" r="16" fill={c3} opacity="0.9" />
        <path d="M27 42l5 5 9-10" stroke="white" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {bar(60, 32, 60)}
        {bar(60, 46, 36 + r() * 20, 0.6)}
      </g>
      <g className="float-slower" transform="translate(320 220)">
        <rect width="120" height="96" rx="18" {...panel} />
        {[0, 1, 2].map((i) => (
          <rect key={i} x="18" y={22 + i * 22} width={30 + r() * 60} height="10" rx="5" fill={i === 0 ? c2 : "var(--line)"} />
        ))}
      </g>
    </g>
  );
}

function ChartScene({ r, id, c2, c3 }: SceneProps) {
  const pts = Array.from({ length: 7 }, (_, i) => ({ x: 90 + i * 48, y: 250 - (40 + i * 18 + r() * 40) }));
  const line = pts.map((p, i) => `${i ? "L" : "M"}${p.x} ${p.y}`).join(" ");
  return (
    <g>
      <rect x="60" y="60" width="360" height="250" rx="22" {...panel} />
      {[0, 1, 2, 3].map((i) => (
        <path key={i} d={`M84 ${110 + i * 45}H396`} stroke="var(--line)" strokeDasharray="4 6" />
      ))}
      {pts.map((p, i) => (
        <rect key={i} x={p.x - 12} y={p.y + 30} width="24" height={Math.max(0, 260 - p.y - 30)} rx="6" fill={c2} opacity="0.22" />
      ))}
      <path d={`${line} L${pts[6].x} 280 L${pts[0].x} 280 Z`} fill={`url(#${id}a)`} opacity="0.18" />
      <path d={line} stroke={`url(#${id}a)`} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={i === 6 ? 7 : 4} fill={i === 6 ? c3 : "var(--surface)"} stroke={c2} strokeWidth="2.5" />
      ))}
      <g className="float-slow" transform="translate(320 26)">
        <rect width="130" height="70" rx="16" {...panel} />
        <path d="M22 46l14-14 10 8 18-20" stroke={c3} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {bar(78, 24, 34)}
        {bar(78, 38, 22, 0.6)}
      </g>
      <g className="float-slower" transform="translate(28 268)">
        <rect width="110" height="70" rx="16" {...panel} />
        <circle cx="34" cy="35" r="18" fill="none" stroke="var(--line)" strokeWidth="8" />
        <circle cx="34" cy="35" r="18" fill="none" stroke={c3} strokeWidth="8" strokeDasharray={`${40 + r() * 60} 200`} transform="rotate(-90 34 35)" />
        {bar(62, 30, 34)}
      </g>
    </g>
  );
}

function BookScene({ r, id, c2, c3 }: SceneProps) {
  const books = [0, 1, 2, 3].map((i) => ({ w: 150 + r() * 70, h: 30 + r() * 10, off: (r() - 0.5) * 30, i }));
  const tops = books.reduce<number[]>((acc, b, i) => [...acc, (i ? acc[i - 1] : 320) - b.h - 4], []);
  return (
    <g>
      {books.map((b, i) => (
        <g key={b.i} transform={`translate(${130 + b.off} ${tops[i]})`}>
          <rect width={b.w} height={b.h} rx="8" fill={b.i % 2 ? c2 : `url(#${id}a)`} opacity={0.55 + b.i * 0.12} />
          <rect x="14" y={b.h / 2 - 3} width={b.w * 0.4} height="6" rx="3" fill="white" opacity="0.8" />
        </g>
      ))}
      <g className="float-slow" transform="translate(290 60)">
        <rect width="150" height="170" rx="18" {...panel} />
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} transform={`translate(20 ${26 + i * 28})`}>
            <rect width="16" height="16" rx="5" fill={i < 3 ? c3 : "var(--surface-2)"} stroke="var(--line)" />
            {i < 3 && <path d="M4 8l3 3 5-6" stroke="white" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
            {bar(26, 4, 50 + r() * 40, i < 3 ? 0.5 : 0.9)}
          </g>
        ))}
      </g>
      <g className="float-slower" transform="translate(40 70)">
        <circle cx="45" cy="45" r="40" fill="var(--surface)" stroke="var(--line)" strokeWidth="1.5" />
        <path d="M45 22c-9 0-16 7-16 15 0 6 4 9 7 12 2 2 2 4 2 6h14c0-2 0-4 2-6 3-3 7-6 7-12 0-8-7-15-16-15Z" fill={c3} opacity="0.85" />
        <rect x="37" y="60" width="16" height="7" rx="3" fill="var(--muted)" />
      </g>
    </g>
  );
}

function ScaleScene({ r, id, c2, c3 }: SceneProps) {
  const tilt = (r() - 0.5) * 14;
  return (
    <g>
      <rect x="226" y="120" width="28" height="200" rx="10" fill="var(--line)" />
      <rect x="170" y="310" width="140" height="22" rx="11" fill="var(--line)" />
      <g transform={`rotate(${tilt} 240 120)`}>
        <rect x="80" y="112" width="320" height="14" rx="7" fill={`url(#${id}a)`} />
        {[100, 380].map((x, i) => (
          <g key={x} transform={`translate(${x} 126)`}>
            <path d="M0 0 L-40 90 M0 0 L40 90" stroke="var(--line)" strokeWidth="2" />
            <g transform={`rotate(${-tilt} 0 90)`}>
              <rect x="-62" y="90" width="124" height="74" rx="16" {...panel} />
              <circle cx="-34" cy="127" r="14" fill={i ? c3 : c2} opacity="0.9" />
              {bar(-12, 117, 54)}
              {bar(-12, 131, 30 + r() * 20, 0.6)}
            </g>
          </g>
        ))}
      </g>
      <circle cx="240" cy="119" r="14" fill="var(--surface)" stroke={c2} strokeWidth="3" />
    </g>
  );
}

function Flow({ r, id, c2, c3 }: SceneProps) {
  const branch = 160 + r() * 60;
  const lit = 2 + Math.floor(r() * 2);
  return (
    <g>
      <g className="float-slower">
        <rect x="40" y="160" width="100" height="56" rx="14" {...panel} />
        {bar(58, 178, 60)}
        {bar(58, 192, 36, 0.6)}
      </g>
      <path d="M140 188 H190" stroke={c2} strokeWidth="2.5" className="dash-flow" />
      <path d="M214 164 L238 188 L214 212 L190 188 Z" fill={`url(#${id}a)`} />
      <path d={`M238 188 C 270 188, 270 ${branch - 80}, 300 ${branch - 80}`} stroke={c3} strokeWidth="2.5" fill="none" className="dash-flow" />
      <path d={`M238 188 C 270 188, 270 ${branch + 60}, 300 ${branch + 60}`} stroke="var(--line)" strokeWidth="2.5" fill="none" />
      <g className="float-slow" transform={`translate(300 ${branch - 108})`}>
        <rect width="140" height="56" rx="14" fill="var(--surface)" stroke={c3} strokeWidth="2" />
        <circle cx="26" cy="28" r="10" fill={c3} />
        {bar(46, 18, 70)}
        {bar(46, 32, 44, 0.6)}
      </g>
      <g className="float-slower" transform={`translate(300 ${branch + 32})`}>
        <rect width="140" height="56" rx="14" {...panel} />
        <circle cx="26" cy="28" r="10" fill="var(--muted)" opacity="0.5" />
        {bar(46, 18, 60)}
        {bar(46, 32, 30, 0.6)}
      </g>
      <g className="float-slow" transform="translate(150 50)">
        <rect width="120" height="64" rx="14" {...panel} />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={16 + i * 24} y="20" width="16" height="24" rx="4" fill={i < lit ? c2 : "var(--line)"} />
        ))}
      </g>
    </g>
  );
}
