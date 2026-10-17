"use client";

import { createContext, memo, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState, type ReactNode, type RefObject } from "react";
import { Canvas, useFrame, useThree, type ThreeEvent } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { SceneHtml as Html } from "./SceneHtml";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import * as THREE from "three";
import { STATIONS, type Station } from "./stations";


/* ───────────────────────── Shared geometry & materials ─────────────────────────
   Every box, cylinder and sphere in the office reuses one unit geometry, scaled per mesh,
   and materials are cached by colour. All of it is disposed when the canvas unmounts. */

type Kit = {
  box: THREE.BoxGeometry;
  cyl: THREE.CylinderGeometry;
  sphere: THREE.SphereGeometry;
  cone: THREE.ConeGeometry;
  capsule: THREE.CapsuleGeometry;
  mat: (color: string, opts?: { emissive?: number; opacity?: number; rough?: number; metal?: number }) => THREE.MeshStandardMaterial;
};

const KitContext = createContext<Kit | null>(null);
const useKit = () => useContext(KitContext)!;

function KitProvider({ children }: { children: ReactNode }) {
  const [cache] = useState(() => new Map<string, THREE.MeshStandardMaterial>());
  const kit = useMemo<Kit>(() => {
    return {
      box: new THREE.BoxGeometry(1, 1, 1),
      cyl: new THREE.CylinderGeometry(0.5, 0.5, 1, 24),
      sphere: new THREE.SphereGeometry(0.5, 20, 14),
      cone: new THREE.ConeGeometry(0.5, 1, 20),
      // Unit capsule: diameter 1, total height 2. Scale x/z by diameter, y by half the height.
      capsule: new THREE.CapsuleGeometry(0.5, 1, 3, 8),
      mat(color, opts = {}) {
        const key = `${color}|${opts.emissive ?? 0}|${opts.opacity ?? 1}|${opts.rough ?? 0.75}|${opts.metal ?? 0}`;
        let m = cache.get(key);
        if (!m) {
          m = new THREE.MeshStandardMaterial({
            color,
            roughness: opts.rough ?? 0.75,
            metalness: opts.metal ?? 0,
            emissive: opts.emissive ? new THREE.Color(color) : new THREE.Color(0),
            emissiveIntensity: opts.emissive ?? 0,
            transparent: opts.opacity !== undefined && opts.opacity < 1,
            opacity: opts.opacity ?? 1,
          });
          cache.set(key, m);
        }
        return m;
      },
    };
  }, [cache]);
  useEffect(
    () => () => {
      kit.box.dispose();
      kit.cyl.dispose();
      kit.sphere.dispose();
      kit.cone.dispose();
      kit.capsule.dispose();
      // Materials are created lazily, so dispose whatever the cache holds at unmount.
      cache.forEach((m) => m.dispose());
      cache.clear();
    },
    [kit, cache],
  );
  return <KitContext.Provider value={kit}>{children}</KitContext.Provider>;
}

type V3 = [number, number, number];

/** Box centred at p with size s. */
function B({ p, s, c, rot = 0, shadow = true, e, o }: { p: V3; s: V3; c: string; rot?: number; shadow?: boolean; e?: number; o?: number }) {
  const k = useKit();
  return <mesh geometry={k.box} material={k.mat(c, { emissive: e, opacity: o })} position={p} scale={s} rotation-y={rot} castShadow={shadow} receiveShadow />;
}
function Cyl({ p, r, h, c, e }: { p: V3; r: number; h: number; c: string; e?: number }) {
  const k = useKit();
  return <mesh geometry={k.cyl} material={k.mat(c, { emissive: e })} position={p} scale={[r * 2, h, r * 2]} castShadow receiveShadow />;
}
function Ball({ p, r, c, e }: { p: V3; r: number; c: string; e?: number }) {
  const k = useKit();
  return <mesh geometry={k.sphere} material={k.mat(c, { emissive: e })} position={p} scale={r * 2} castShadow />;
}

/* ───────────────────────── People & furniture ───────────────────────── */

// Indian skin tones, office clothing and hair.
const SKIN = ["#c68a62", "#a8714f", "#8d5a3b", "#d9a07a", "#b97c55", "#7b4f35"];
const SHIRTS = ["#f8fafc", "#93c5fd", "#1e3a8a", "#e2e8f0", "#0f766e", "#7c3aed", "#be185d", "#cbd5e1", "#475569"];
const PANTS = ["#1f2937", "#334155", "#3f3f46", "#1e3a5f", "#57534e"];
const HAIR = ["#141110", "#1f1a17", "#2a1d15", "#3b2a20"];
const pick = <T,>(arr: T[], i: number) => arr[Math.abs(i) % arr.length];

/** Rounded limb: a capsule from the shared kit, `len` long and `r` thick, hanging down from its origin. */
function Limb({ len, r, c }: { len: number; r: number; c: string }) {
  const k = useKit();
  return <mesh geometry={k.capsule} material={k.mat(c)} position={[0, -len / 2, 0]} scale={[r * 2, len / 2, r * 2]} />;
}

/**
 * A stylised office person with proper proportions: legs, torso, shoulders, arms with hands, neck,
 * head and hair. `walk` (when given) drives a walk cycle; seated people sit with arms on the desk.
 */
function Person({ p, rot = 0, seed = 0, seated = false, walk }: { p: V3; rot?: number; seed?: number; seated?: boolean; walk?: RefObject<Walker> }) {
  const k = useKit();
  const shirt = pick(SHIRTS, seed);
  const skin = pick(SKIN, seed * 3 + 1);
  const pants = pick(PANTS, seed * 7 + 2);
  const hair = pick(HAIR, seed * 5);
  const longHair = seed % 3 === 1;
  const legL = useRef<THREE.Group>(null);
  const legR = useRef<THREE.Group>(null);
  const armL = useRef<THREE.Group>(null);
  const armR = useRef<THREE.Group>(null);
  useFrame((st) => {
    if (!walk) return;
    const w = walk.current?.walking ? Math.sin(st.clock.elapsedTime * 9) * 0.55 : 0;
    if (legL.current) legL.current.rotation.x = w;
    if (legR.current) legR.current.rotation.x = -w;
    if (armL.current) armL.current.rotation.x = -w * 0.8;
    if (armR.current) armR.current.rotation.x = w * 0.8;
  });
  const hipY = seated ? 0.55 : 0.86;
  return (
    // Scene layouts place seated people facing -z (towards their desk); the body is modelled facing +z.
    <group position={p} rotation-y={rot + (seated ? Math.PI : 0)}>
      {/* Legs (thigh + shin), with shoes */}
      {[-0.1, 0.1].map((x, i) => (
        <group key={x} ref={i ? legR : legL} position={[x, hipY, seated ? -0.05 : 0]} rotation-x={seated ? -Math.PI / 2 : 0}>
          <Limb len={seated ? 0.42 : 0.82} r={0.085} c={pants} />
          {seated ? (
            <group position={[0, -0.42, 0]} rotation-x={Math.PI / 2}>
              <Limb len={0.5} r={0.075} c={pants} />
              <mesh geometry={k.box} material={k.mat("#111827")} position={[0, -0.52, 0.06]} scale={[0.12, 0.07, 0.24]} />
            </group>
          ) : (
            <mesh geometry={k.box} material={k.mat("#111827")} position={[0, -0.84, 0.05]} scale={[0.13, 0.07, 0.25]} />
          )}
        </group>
      ))}
      {/* Torso, tapered at the waist, with rounded shoulders */}
      <mesh geometry={k.capsule} material={k.mat(shirt)} position={[0, hipY + 0.28, 0]} scale={[0.4, 0.27, 0.24]} castShadow />
      <mesh geometry={k.capsule} material={k.mat(shirt)} position={[0, hipY + 0.52, 0]} rotation-z={Math.PI / 2} scale={[0.2, 0.27, 0.22]} />
      {/* Arms with hands */}
      {/* Arms: upper arm + bent forearm (seated people rest their hands on the desk) */}
      {[-0.26, 0.26].map((x, i) => (
        <group key={x} ref={i ? armR : armL} position={[x, hipY + 0.55, 0]} rotation-x={seated ? -0.35 : 0.05} rotation-z={x > 0 ? 0.1 : -0.1}>
          <Limb len={0.3} r={0.058} c={shirt} />
          <group position={[0, -0.3, 0]} rotation-x={seated ? -1.15 : -0.2}>
            <Limb len={0.27} r={0.05} c={seated ? skin : shirt} />
            <mesh geometry={k.sphere} material={k.mat(skin)} position={[0, -0.3, 0.01]} scale={[0.1, 0.12, 0.08]} />
          </group>
        </group>
      ))}
      {/* Neck, head, hair */}
      <mesh geometry={k.cyl} material={k.mat(skin)} position={[0, hipY + 0.68, 0]} scale={[0.13, 0.12, 0.13]} />
      <mesh geometry={k.sphere} material={k.mat(skin)} position={[0, hipY + 0.88, 0.01]} scale={[0.3, 0.34, 0.3]} />
      {/* Eyes, so people read as people rather than mannequins */}
      {[-0.055, 0.055].map((x) => (
        <mesh key={x} geometry={k.sphere} material={k.mat("#1b1412")} position={[x, hipY + 0.9, 0.145]} scale={[0.035, 0.045, 0.02]} />
      ))}
      <mesh geometry={k.sphere} material={k.mat(hair)} position={[0, hipY + 0.95, -0.03]} scale={[0.32, 0.26, 0.32]} />
      {longHair ? (
        <mesh geometry={k.capsule} material={k.mat(hair)} position={[0, hipY + 0.74, -0.1]} scale={[0.28, 0.17, 0.14]} />
      ) : (
        seed % 3 === 2 && <mesh geometry={k.sphere} material={k.mat(hair)} position={[0, hipY + 0.98, -0.16]} scale={0.14} />
      )}
    </group>
  );
}

function Chair({ p, rot = 0, c = "#334155" }: { p: V3; rot?: number; c?: string }) {
  return (
    <group position={p} rotation-y={rot}>
      <Cyl p={[0, 0.22, 0]} r={0.04} h={0.44} c="#94a3b8" />
      <B p={[0, 0.46, 0]} s={[0.5, 0.08, 0.5]} c={c} />
      <B p={[0, 0.78, 0.23]} s={[0.5, 0.56, 0.07]} c={c} />
    </group>
  );
}

/** Desk with a monitor; the seat sits on +z, facing -z. */
function Desk({ p, rot = 0, screen = "#38bdf8", seed = 0, occupied = true }: { p: V3; rot?: number; screen?: string; seed?: number; occupied?: boolean }) {
  return (
    <group position={p} rotation-y={rot}>
      <B p={[0, 0.74, 0]} s={[1.5, 0.06, 0.75]} c="#f8fafc" />
      <B p={[-0.7, 0.36, 0]} s={[0.05, 0.72, 0.7]} c="#cbd5e1" />
      <B p={[0.7, 0.36, 0]} s={[0.05, 0.72, 0.7]} c="#cbd5e1" />
      <B p={[0, 0.9, -0.22]} s={[0.06, 0.26, 0.06]} c="#475569" />
      <B p={[0, 1.12, -0.24]} s={[0.78, 0.44, 0.04]} c="#0f172a" />
      <B p={[0, 1.12, -0.215]} s={[0.72, 0.38, 0.01]} c={screen} e={0.9} shadow={false} />
      <B p={[0.05, 0.78, 0.12]} s={[0.42, 0.02, 0.14]} c="#e2e8f0" />
      <Chair p={[0, 0, 0.62]} />
      {occupied && <Person p={[0, 0, 0.62]} seed={seed} seated />}
    </group>
  );
}

function Plant({ p, s = 1 }: { p: V3; s?: number }) {
  return (
    <group position={p} scale={s}>
      <Cyl p={[0, 0.22, 0]} r={0.2} h={0.44} c="#e7e5e4" />
      <Ball p={[0, 0.72, 0]} r={0.38} c="#3f9d5a" />
      <Ball p={[0.15, 0.95, 0.05]} r={0.26} c="#4fb36b" />
    </group>
  );
}

function Tree({ p, s = 1 }: { p: V3; s?: number }) {
  const k = useKit();
  return (
    <group position={p} scale={s}>
      <Cyl p={[0, 0.5, 0]} r={0.12} h={1} c="#7c5a3c" />
      <mesh geometry={k.cone} material={k.mat("#2f8f55")} position={[0, 1.6, 0]} scale={[1.3, 1.6, 1.3]} castShadow />
      <mesh geometry={k.cone} material={k.mat("#3aa564")} position={[0, 2.25, 0]} scale={[0.95, 1.2, 0.95]} castShadow />
    </group>
  );
}

function Wall({ from, to, h = 2.4, glass = false }: { from: [number, number]; to: [number, number]; h?: number; glass?: boolean }) {
  const dx = to[0] - from[0];
  const dz = to[1] - from[1];
  const len = Math.hypot(dx, dz);
  return (
    <B
      p={[(from[0] + to[0]) / 2, h / 2, (from[1] + to[1]) / 2]}
      s={[len, h, glass ? 0.06 : 0.2]}
      rot={-Math.atan2(dz, dx)}
      c={glass ? "#bfdbfe" : "#f5f5f4"}
      o={glass ? 0.28 : undefined}
      shadow={!glass}
    />
  );
}

/* ───────────────────────── Station props (one per product stage) ───────────────────────── */

function useAnim(reduced: boolean, fn: (t: number, dt: number) => void) {
  useFrame((s, dt) => {
    if (!reduced) fn(s.clock.elapsedTime, dt);
  });
}

function ScrapeRoom({ reduced }: { reduced: boolean }) {
  const pins = useRef<THREE.Group>(null);
  useAnim(reduced, (t) => pins.current?.children.forEach((c, i) => (c.position.y = 1.05 + Math.sin(t * 2 + i * 1.7) * 0.12)));
  const sources: { x: number; z: number; c: string }[] = [
    { x: -0.9, z: -0.3, c: "#ea4335" }, // Google Maps
    { x: 0.2, z: 0.35, c: "#0a66c2" }, // LinkedIn
    { x: 1, z: -0.4, c: "#f97316" }, // IndiaMART
  ];
  return (
    <group>
      {/* Map table */}
      <B p={[0, 0.72, 0.3]} s={[3.2, 0.08, 1.9]} c="#f8fafc" />
      <Cyl p={[0, 0.36, 0.3]} r={0.25} h={0.72} c="#94a3b8" />
      <B p={[0, 0.77, 0.3]} s={[3, 0.02, 1.7]} c="#d9f2e3" shadow={false} />
      <B p={[0, 0.785, 0.3]} s={[3, 0.01, 0.12]} c="#ffffff" shadow={false} />
      <B p={[-0.4, 0.785, 0.3]} s={[0.12, 0.01, 1.7]} c="#ffffff" shadow={false} />
      <B p={[0.8, 0.785, 0.3]} s={[0.12, 0.01, 1.7]} c="#ffffff" shadow={false} />
      <group ref={pins} position={[0, 0, 0.3]}>
        {sources.map((s) => (
          <group key={s.c} position={[s.x, 1.05, s.z]}>
            <Ball p={[0, 0.12, 0]} r={0.16} c={s.c} e={0.35} />
            <ConeDown c={s.c} />
          </group>
        ))}
      </group>
      <Person p={[-1, 0, 1.6]} rot={Math.PI} seed={1} />
      <Person p={[1.1, 0, 1.55]} rot={Math.PI - 0.3} seed={4} />
      <Desk p={[-2.2, 0, -2.2]} seed={7} />
      <Desk p={[2.2, 0, -2.2]} seed={2} screen="#a5b4fc" />
    </group>
  );
}

function ConeDown({ c }: { c: string }) {
  const k = useKit();
  return <mesh geometry={k.cone} material={k.mat(c, { emissive: 0.35 })} position={[0, -0.08, 0]} scale={[0.22, 0.3, 0.22]} rotation-x={Math.PI} castShadow />;
}

function EnrichRoom({ reduced }: { reduced: boolean }) {
  const cards = useRef<THREE.Group>(null);
  useAnim(reduced, (t) =>
    cards.current?.children.forEach((c, i) => {
      const k = (t * 0.35 + i / 3) % 1;
      c.position.set(-2.4 + k * 4.8, 1.9 + Math.sin(k * Math.PI) * 0.5, -0.6);
      c.rotation.y = t + i;
    }),
  );
  return (
    <group>
      {[-2.1, 0, 2.1].map((x, i) => (
        <Desk key={x} p={[x, 0, -1.3]} seed={i + 3} screen="#7dd3fc" />
      ))}
      {[-2.1, 0, 2.1].map((x, i) => (
        <Desk key={`b${x}`} p={[x, 0, 1.6]} rot={Math.PI} seed={i + 9} screen="#7dd3fc" occupied={i !== 1} />
      ))}
      <B p={[-3.1, 0.8, -2.6]} s={[0.7, 1.6, 0.5]} c="#cbd5e1" />
      <group ref={cards}>
        {[0, 1, 2].map((i) => (
          <B key={i} p={[0, 1.9, -0.6]} s={[0.42, 0.28, 0.03]} c="#e0f2fe" e={0.5} shadow={false} />
        ))}
      </group>
    </group>
  );
}

function ScoreRoom({ reduced }: { reduced: boolean }) {
  const gauge = useRef<THREE.Group>(null);
  const needle = useRef<THREE.Mesh>(null);
  const k = useKit();
  const arc = useMemo(() => new THREE.TorusGeometry(0.85, 0.08, 10, 48, Math.PI * 1.5), []);
  useEffect(() => () => arc.dispose(), [arc]);
  useAnim(reduced, (t) => {
    if (gauge.current) gauge.current.rotation.y = t * 0.4;
    if (needle.current) needle.current.rotation.z = -0.6 - Math.sin(t * 0.8) * 0.5;
  });
  return (
    <group>
      <Cyl p={[0, 0.72, 0]} r={1.25} h={0.08} c="#f8fafc" />
      <Cyl p={[0, 0.36, 0]} r={0.2} h={0.72} c="#94a3b8" />
      {[0, 1, 2, 3].map((i) => {
        const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
        return <Chair key={i} p={[Math.sin(a) * 1.75, 0, Math.cos(a) * 1.75]} rot={a} c="#4c1d95" />;
      })}
      <Person p={[Math.sin(Math.PI / 4) * 1.75, 0, Math.cos(Math.PI / 4) * 1.75]} rot={Math.PI / 4} seed={6} seated />
      <Person p={[Math.sin(Math.PI * 1.25) * 1.75, 0, Math.cos(Math.PI * 1.25) * 1.75]} rot={Math.PI * 1.25} seed={2} seated />
      <group ref={gauge} position={[0, 2.05, 0]}>
        <mesh geometry={arc} material={k.mat("#a78bfa", { emissive: 0.9 })} rotation-z={-Math.PI * 0.25} />
        <mesh ref={needle} geometry={k.box} material={k.mat("#f5f3ff", { emissive: 0.6 })} scale={[0.75, 0.06, 0.06]} position={[0, 0, 0]} />
        <mesh geometry={k.sphere} material={k.mat("#f5f3ff", { emissive: 0.6 })} scale={0.16} />
      </group>
      <Cyl p={[0, 0.9, 0]} r={0.12} h={0.3} c="#7c3aed" e={0.6} />
      <Desk p={[-2.4, 0, -2.3]} seed={5} screen="#c4b5fd" />
      <Plant p={[2.9, 0, -2.6]} />
    </group>
  );
}

function AuditRoom({ reduced }: { reduced: boolean }) {
  const bars = useRef<THREE.Group>(null);
  useAnim(reduced, (t) =>
    bars.current?.children.forEach((c, i) => {
      const h = 0.35 + (Math.sin(t * 1.3 + i * 1.1) * 0.5 + 0.5) * 0.9;
      c.scale.y = h;
      c.position.y = 0.6 + h / 2;
    }),
  );
  const colors = ["#22c55e", "#84cc16", "#facc15", "#f97316", "#22c55e"];
  return (
    <group>
      {/* Wall screen on the building's east wall */}
      <B p={[3.45, 1.55, 0]} s={[0.12, 1.9, 3.2]} c="#0f172a" />
      <B p={[3.38, 1.55, 0]} s={[0.02, 1.7, 3]} c="#064e3b" e={0.25} shadow={false} />
      <group ref={bars} position={[3.36, 0, -1.1]}>
        {colors.map((c, i) => (
          <B key={i} p={[0, 1, i * 0.55]} s={[0.03, 1, 0.3]} c={c} e={0.8} shadow={false} />
        ))}
      </group>
      <Desk p={[0.6, 0, 0]} rot={-Math.PI / 2} seed={8} screen="#86efac" />
      <Desk p={[-1.8, 0, -1.8]} seed={1} screen="#86efac" />
      <Person p={[1.9, 0, 1.6]} rot={-Math.PI / 2 - 0.4} seed={3} />
      <Plant p={[-2.9, 0, 2.5]} />
    </group>
  );
}

function DetectRoom({ reduced }: { reduced: boolean }) {
  const sweep = useRef<THREE.Mesh>(null);
  const flags = useRef<THREE.Group>(null);
  const k = useKit();
  const sector = useMemo(() => new THREE.CircleGeometry(1.6, 32, 0, Math.PI / 3), []);
  useEffect(() => () => sector.dispose(), [sector]);
  useAnim(reduced, (t) => {
    if (sweep.current) sweep.current.rotation.z = t * 1.4;
    flags.current?.children.forEach((c, i) => (c.scale.y = 1 + Math.max(0, Math.sin(t * 1.4 - i * 2.1)) * 0.35));
  });
  return (
    <group>
      <Cyl p={[0, 0.36, 0]} r={1.75} h={0.72} c="#fef3c7" />
      <Cyl p={[0, 0.73, 0]} r={1.7} h={0.02} c="#1c1917" />
      <mesh ref={sweep} geometry={sector} material={k.mat("#fbbf24", { emissive: 0.8, opacity: 0.55 })} position={[0, 0.75, 0]} rotation-x={-Math.PI / 2} />
      <group ref={flags}>
        {[
          [0.7, 0.4],
          [-0.8, 0.5],
          [0.2, -0.9],
        ].map(([x, z], i) => (
          <group key={i} position={[x, 0.75, z]}>
            <B p={[0, 0.3, 0]} s={[0.03, 0.6, 0.03]} c="#e5e7eb" />
            <B p={[0.12, 0.5, 0]} s={[0.22, 0.16, 0.02]} c="#ef4444" e={0.5} />
          </group>
        ))}
      </group>
      <Person p={[-2.1, 0, 0.3]} rot={Math.PI / 2} seed={5} />
      <Person p={[2.1, 0, -0.4]} rot={-Math.PI / 2} seed={0} />
      <Person p={[0.3, 0, 2.2]} rot={Math.PI} seed={7} />
      <Desk p={[-2.2, 0, -2.3]} seed={4} screen="#fcd34d" occupied={false} />
    </group>
  );
}

function CrmRoom({ reduced }: { reduced: boolean }) {
  const plane = useRef<THREE.Group>(null);
  useAnim(reduced, (t) => {
    if (!plane.current) return;
    const a = t * 0.8;
    plane.current.position.set(Math.cos(a) * 2.2, 2.3 + Math.sin(a * 2) * 0.25, Math.sin(a) * 1.4);
    plane.current.rotation.y = -a;
  });
  const columns = ["#c7d2fe", "#bae6fd", "#fde68a", "#bbf7d0"];
  return (
    <group>
      {/* Pipeline board on the west partition */}
      <B p={[-3.45, 1.5, 0]} s={[0.1, 1.8, 3.4]} c="#ffffff" />
      {columns.map((c, col) =>
        [0, 1, 2].slice(0, 3 - (col % 2)).map((row) => <B key={`${col}-${row}`} p={[-3.38, 2.05 - row * 0.42, -1.2 + col * 0.8]} s={[0.02, 0.3, 0.6]} c={c} shadow={false} />),
      )}
      <Person p={[-2.6, 0, 0.4]} rot={-Math.PI / 2} seed={8} />
      <Desk p={[0, 0, -1.6]} seed={2} screen="#f9a8d4" />
      <Desk p={[1.9, 0, -1.6]} seed={6} screen="#f9a8d4" />
      <Desk p={[0.9, 0, 1.6]} rot={Math.PI} seed={4} screen="#f9a8d4" />
      <group ref={plane}>
        <PaperPlane />
      </group>
    </group>
  );
}

function PaperPlane() {
  const k = useKit();
  return <mesh geometry={k.cone} material={k.mat("#ffffff", { emissive: 0.4 })} scale={[0.28, 0.6, 0.1]} rotation-z={-Math.PI / 2} castShadow />;
}

const ROOM_PROPS: Record<string, (p: { reduced: boolean }) => ReactNode> = {
  scrape: ScrapeRoom,
  enrich: EnrichRoom,
  score: ScoreRoom,
  audit: AuditRoom,
  detect: DetectRoom,
  crm: CrmRoom,
};

/* ───────────────────────── Rooms, markers and the lead journey ───────────────────────── */

const ROOM_W = 7.2;
const ROOM_D = 6.8;

function Room({ s, index, selected, done, onSelect, reduced }: { s: Station; index: number; selected: boolean; done: boolean; onSelect: (id: string) => void; reduced: boolean }) {
  const [hover, setHover] = useState(false);
  const tint = useMemo(() => "#" + new THREE.Color(s.accent).lerp(new THREE.Color("#ffffff"), 0.8).getHexString(), [s.accent]);
  useEffect(() => {
    if (!hover) return;
    document.body.style.cursor = "pointer";
    return () => void (document.body.style.cursor = "");
  }, [hover]);
  const k = useKit();
  const beacon = useRef<THREE.Group>(null);
  useFrame((st) => {
    if (beacon.current && !reduced) beacon.current.position.y = 3.3 + Math.sin(st.clock.elapsedTime * 2 + index) * 0.12;
  });
  const Props = ROOM_PROPS[s.id];
  return (
    <group
      position={[s.pos[0], 0, s.pos[1]]}
      onClick={(e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation();
        onSelect(s.id);
      }}
      onPointerOver={(e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation();
        setHover(true);
      }}
      onPointerOut={() => setHover(false)}
    >
      <mesh geometry={k.box} position={[0, 0.02, 0]} scale={[ROOM_W, 0.04, ROOM_D]} receiveShadow>
        <meshStandardMaterial color={tint} roughness={0.9} emissive={s.accent} emissiveIntensity={selected ? 0.22 : hover ? 0.12 : 0} />
      </mesh>
      <Props reduced={reduced} />
      <group ref={beacon} position={[0, 3.3, 0]}>
        <mesh geometry={k.cone} material={k.mat(s.accent, { emissive: 0.7 })} rotation-x={Math.PI} scale={[0.32, 0.45, 0.32]} />
        <Label text={`${done ? "✓" : String(index + 1).padStart(2, "0")}  ${s.short}`} accent={s.accent} active={selected || hover} />
      </group>
    </group>
  );
}

/** Room name tag drawn to a canvas texture, so labels live inside the WebGL scene. */
function Label({ text, accent, active }: { text: string; accent: string; active: boolean }) {
  const tex = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 512;
    c.height = 112;
    const g = c.getContext("2d")!;
    g.font = "700 46px Inter, system-ui, sans-serif";
    const w = Math.min(500, g.measureText(text).width + 64);
    const x = (512 - w) / 2;
    g.beginPath();
    g.roundRect(x, 8, w, 96, 48);
    g.fillStyle = active ? accent : "rgba(15,23,42,0.88)";
    g.fill();
    g.lineWidth = 4;
    g.strokeStyle = active ? "rgba(255,255,255,0.9)" : accent;
    g.stroke();
    g.fillStyle = "#ffffff";
    g.textAlign = "center";
    g.textBaseline = "middle";
    g.fillText(text, 256, 58);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    return t;
  }, [text, accent, active]);
  useEffect(() => () => tex.dispose(), [tex]);
  return (
    <sprite position={[0, 0.85, 0]} scale={[4.4, 0.96, 1]} renderOrder={10}>
      <spriteMaterial map={tex} transparent depthTest={false} toneMapped={false} />
    </sprite>
  );
}

/** The lead journey: a tidy oval track along the corridor, passing every room's door in pipeline order. */
const JOURNEY = (() => {
  const pts: THREE.Vector3[] = [];
  const [x0, x1, r] = [-6.2, 13.2, 0.85];
  for (let i = 0; i <= 24; i++) pts.push(new THREE.Vector3(x0 + ((x1 - x0) * i) / 24, 0.06, -r));
  for (let i = 1; i < 12; i++) pts.push(new THREE.Vector3(x1 + Math.sin((i / 12) * Math.PI) * r, 0.06, -Math.cos((i / 12) * Math.PI) * r));
  for (let i = 0; i <= 24; i++) pts.push(new THREE.Vector3(x1 - ((x1 - x0) * i) / 24, 0.06, r));
  for (let i = 1; i < 12; i++) pts.push(new THREE.Vector3(x0 - Math.sin((i / 12) * Math.PI) * r, 0.06, Math.cos((i / 12) * Math.PI) * r));
  return new THREE.CatmullRomCurve3(pts, true, "centripetal");
})();

const LOBBY = new THREE.Vector3(-11, 0, 0);

/** Where "you" are; shared between the walking avatar and the camera rig. */
export interface Walker {
  pos: THREE.Vector3;
  walking: boolean;
}

/** Corridor route from wherever you stand to the spot just inside a room's doorway. */
function routeTo(from: THREE.Vector3, s: Station): THREE.Vector3[] {
  const side = s.pos[1] < 0 ? -1 : 1;
  const pts: THREE.Vector3[] = [];
  // Step out into the corridor first if you're inside a room.
  if (Math.abs(from.z) > 1) pts.push(new THREE.Vector3(from.x, 0, 0));
  pts.push(new THREE.Vector3(s.pos[0], 0, 0));
  pts.push(new THREE.Vector3(s.pos[0], 0, side * 2.6));
  return pts;
}

/**
 * "You": the studio owner from the story, walking the corridor into whichever room is open.
 * Reports arrival so the room's host can start the conversation.
 */
function Avatar({ selected, walkerRef, reduced, onArrive }: { selected: string | null; walkerRef: RefObject<Walker>; reduced: boolean; onArrive?: (id: string) => void }) {
  const g = useRef<THREE.Group>(null);
  const path = useRef<THREE.Vector3[]>([]);
  const arrived = useRef<string | null>(null);
  const k = useKit();
  useEffect(() => {
    const st = STATIONS.find((s) => s.id === selected);
    arrived.current = null;
    path.current = st ? routeTo(walkerRef.current.pos, st) : [new THREE.Vector3(walkerRef.current.pos.x, 0, 0), LOBBY.clone()];
    walkerRef.current.walking = path.current.length > 0;
  }, [selected, walkerRef]);
  useFrame((state, dt) => {
    const grp = g.current;
    if (!grp) return;
    const next = path.current[0];
    if (next) {
      const step = reduced ? Infinity : 3.6 * dt;
      const d = next.clone().sub(walkerRef.current.pos);
      if (d.length() <= step) {
        walkerRef.current.pos.copy(next);
        path.current.shift();
      } else {
        walkerRef.current.pos.add(d.setLength(step));
        grp.rotation.y = Math.atan2(d.x, d.z);
      }
      if (!path.current.length) {
        walkerRef.current.walking = false;
        if (selected && arrived.current !== selected) {
          arrived.current = selected;
          onArrive?.(selected);
        }
      }
    }
    grp.position.set(walkerRef.current.pos.x, walkerRef.current.walking && !reduced ? Math.abs(Math.sin(state.clock.elapsedTime * 9)) * 0.06 : 0, walkerRef.current.pos.z);
  });
  return (
    <group ref={g} position={LOBBY.toArray()}>
      <mesh geometry={k.cyl} material={k.mat("#fbbf24", { emissive: 0.8 })} position={[0, 0.03, 0]} scale={[0.75, 0.02, 0.75]} />
      <Person p={[0, 0, 0]} seed={4} walk={walkerRef} />
      <Html position={[0, 2.05, 0]} center zIndexRange={[20, 0]} style={{ pointerEvents: "none" }}>
        <span className="whitespace-nowrap rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-bold text-[#0b0d12] shadow">You</span>
      </Html>
    </group>
  );
}

export interface Bubble {
  stationId: string;
  host: string;
  text: string;
  chips: { label: string; onClick: () => void; primary?: boolean }[];
}

/** The room host's speech bubble, anchored in the 3D scene above the room. */
function SpeechBubble({ bubble }: { bubble: Bubble }) {
  const st = STATIONS.find((s) => s.id === bubble.stationId);
  if (!st) return null;
  return (
    <Html position={[st.pos[0], 2.4, st.pos[1] * 0.55]} center zIndexRange={[30, 0]}>
      <div className="w-60 rounded-2xl border border-black/5 bg-white p-3 text-[#0f1222] shadow-2xl" role="dialog" aria-label={`${bubble.host} says`}>
        <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: st.accent }}>
          {bubble.host}
        </p>
        <p className="mt-1 text-[13px] font-semibold leading-snug">{bubble.text}</p>
        {bubble.chips.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {bubble.chips.map((c) => (
              <button
                key={c.label}
                type="button"
                onClick={c.onClick}
                className={`rounded-full px-3 py-1.5 text-[11px] font-bold transition ${c.primary ? "text-white hover:brightness-110" : "border border-black/10 hover:bg-black/5"}`}
                style={c.primary ? { background: st.accent } : undefined}
              >
                {c.label}
              </button>
            ))}
          </div>
        )}
        <span className="absolute -bottom-1.5 left-1/2 size-3 -translate-x-1/2 rotate-45 bg-white" />
      </div>
    </Html>
  );
}

/** The pipeline track along the corridor that connects every room in order. */
function Journey() {
  const k = useKit();
  const tube = useMemo(() => new THREE.TubeGeometry(JOURNEY, 220, 0.05, 6, true), []);
  useEffect(() => () => tube.dispose(), [tube]);
  return <mesh geometry={tube} material={k.mat("#6366f1", { emissive: 0.6 })} />;
}

function Building({ reduced, selected, completed, onSelect }: { reduced: boolean; selected: string | null; completed: string[]; onSelect: (id: string) => void }) {
  return (
    <group>
      {/* Lawn plinth, office slab and corridor */}
      <B p={[0, -0.55, 0]} s={[35, 0.5, 23]} c="#1f2d26" />
      <B p={[0, -0.26, 0]} s={[31, 0.5, 19]} c="#e7e3dc" />
      <B p={[0, 0.005, 0]} s={[30.4, 0.02, 18.4]} c="#f5f3ef" shadow={false} />
      <B p={[3.4, 0.012, 0]} s={[22.2, 0.02, 3.6]} c="#e9e6f5" shadow={false} />
      {/* Cut-away walls: taller on the far sides, low kerbs on the near sides so every room stays visible */}
      <Wall from={[-15.2, -9.2]} to={[15.2, -9.2]} h={1.5} />
      <Wall from={[-15.2, -9.2]} to={[-15.2, 9.2]} h={1.5} />
      <Wall from={[15.2, -9.2]} to={[15.2, 9.2]} h={0.3} />
      <Wall from={[-15.2, 9.2]} to={[-12.6, 9.2]} h={0.3} />
      <Wall from={[-9.4, 9.2]} to={[15.2, 9.2]} h={0.3} />
      {/* Low room partitions */}
      {[-7.1, 0.3, 7.7].map((x) => (
        <group key={x}>
          <Wall from={[x, -9.2]} to={[x, -1.8]} h={0.9} />
          <Wall from={[x, 1.8]} to={[x, 9.2]} h={0.9} />
        </group>
      ))}
      {/* Corridor kerbs with a doorway into each room */}
      {STATIONS.map((s) => {
        const z = s.pos[1] < 0 ? -1.8 : 1.8;
        return (
          <group key={s.id}>
            <Wall from={[s.pos[0] - 3.7, z]} to={[s.pos[0] - 1, z]} h={0.35} />
            <Wall from={[s.pos[0] + 1, z]} to={[s.pos[0] + 3.7, z]} h={0.35} />
          </group>
        );
      })}
      <Lobby />
      {STATIONS.map((s, i) => (
        <Room key={s.id} s={s} index={i} selected={selected === s.id} done={completed.includes(s.id)} onSelect={onSelect} reduced={reduced} />
      ))}
      <Journey />
      {/* Grounds */}
      {/* Evenly spaced trees along the two near edges */}
      {[-10, -4, 2, 8, 14].map((x) => (
        <Tree key={`s${x}`} p={[x, -0.3, 10.6]} s={0.75} />
      ))}
      {[-6, 0, 6].map((z) => (
        <Tree key={`e${z}`} p={[16.6, -0.3, z]} s={0.75} />
      ))}
    </group>
  );
}

function Lobby() {
  return (
    <group position={[-11.1, 0, 0]}>
      <B p={[0, 0.02, 0]} s={[7.8, 0.04, 18.2]} c="#e7e1d8" shadow={false} />
      {/* Brand wall behind reception */}
      <B p={[-3.6, 1.4, -1]} s={[0.14, 2.2, 3.6]} c="#1e1b4b" />
      <B p={[-3.5, 1.6, -1]} s={[0.04, 0.9, 0.9]} c="#6366f1" e={0.8} shadow={false} />
      {/* Reception desk */}
      <B p={[-1.6, 0.55, -1]} s={[0.8, 1.1, 3]} c="#f8fafc" />
      <B p={[-1.6, 1.12, -1]} s={[0.95, 0.06, 3.15]} c="#cbd5e1" />
      <Person p={[-2.5, 0, -1.4]} rot={Math.PI / 2} seed={11} />
      <Person p={[-0.6, 0, -0.5]} rot={-Math.PI / 2} seed={12} />
      {/* Waiting area */}
      <B p={[1.6, 0.25, -6.6]} s={[3, 0.5, 1]} c="#64748b" />
      <B p={[1.6, 0.7, -7]} s={[3, 0.5, 0.25]} c="#64748b" />
      <B p={[1.6, 0.25, -4.9]} s={[1.2, 0.4, 0.7]} c="#f8fafc" />
      {/* Faces the coffee table (+z), back against the sofa's backrest. */}
      <Person p={[0.8, 0, -6.7]} rot={Math.PI} seed={14} seated />
      <Plant p={[-3, 0, -7.8]} s={1.2} />
      <Plant p={[3.2, 0, -7.8]} />
      {/* Entrance mat and planters on the south side */}
      <B p={[0, 0.03, 8.6]} s={[3, 0.02, 1.2]} c="#475569" shadow={false} />
      <Plant p={[-2.4, 0, 8]} s={1.1} />
      <Plant p={[2.4, 0, 8]} s={1.1} />
      <B p={[1.8, 0.4, 4.6]} s={[1.6, 0.8, 0.8]} c="#f8fafc" />
      <Person p={[-1.2, 0, 5.4]} rot={0.6} seed={15} />
    </group>
  );
}

/* ───────────────────────── Camera rig ───────────────────────── */

export interface SceneApi {
  rotate: (dir: 1 | -1) => void;
  zoom: (factor: number) => void;
  reset: () => void;
}

const HOME_TARGET = new THREE.Vector3(1, 0, 0);

function Rig({
  selected,
  reduced,
  compact,
  api,
  controls,
  walkerRef,
}: {
  selected: string | null;
  reduced: boolean;
  compact: boolean;
  api: RefObject<SceneApi | null>;
  controls: RefObject<OrbitControlsImpl | null>;
  walkerRef: RefObject<Walker>;
}) {
  const size = useThree((s) => s.size);
  const invalidate = useThree((s) => s.invalidate);
  const get = useThree((s) => s.get);
  const goal = useRef<{ target: THREE.Vector3 | null; zoom: number | null; rot: number }>({ target: null, zoom: null, rot: 0 });
  const lastTouch = useRef(0);
  const fit = compact ? Math.min(size.width / 29, size.height / 20) : Math.min(size.width / 39, size.height / 27);
  // A canvas measured mid-layout can report 0×0; never aim the camera at a zero/NaN zoom.
  const baseZoom = Number.isFinite(fit) && fit > 2 ? fit : 20;
  // Last camera state that rendered something sensible, to fall back on if a value ever goes bad.
  const lastGood = useRef<{ pos: THREE.Vector3; target: THREE.Vector3; zoom: number } | null>(null);

  // Fly to the selected station, or back to the overview.
  useEffect(() => {
    const st = STATIONS.find((s) => s.id === selected);
    goal.current.target = st ? new THREE.Vector3(st.pos[0], 0, st.pos[1]) : HOME_TARGET.clone();
    goal.current.zoom = st ? baseZoom * (compact ? 2 : 1.9) : baseZoom;
    invalidate();
  }, [selected, baseZoom, compact, invalidate]);

  useImperativeHandle(
    api,
    () => ({
      rotate: (dir) => {
        goal.current.rot += (dir * Math.PI) / 6;
        invalidate();
      },
      zoom: (f) => {
        const cam = get().camera as THREE.OrthographicCamera;
        goal.current.zoom = THREE.MathUtils.clamp((goal.current.zoom ?? cam.zoom) * f, baseZoom * 0.7, baseZoom * 3.2);
        invalidate();
      },
      reset: () => {
        goal.current.target = HOME_TARGET.clone();
        goal.current.zoom = baseZoom;
        // Return to the default north-west viewing angle.
        const c = controls.current;
        if (c) {
          const off = get().camera.position.clone().sub(c.target);
          const d = Math.PI / 4 - Math.atan2(off.x, off.z);
          goal.current.rot = Math.atan2(Math.sin(d), Math.cos(d));
        }
        invalidate();
      },
    }),
    [baseZoom, controls, get, invalidate],
  );

  useEffect(() => {
    const c = controls.current;
    if (!c) return;
    const stop = () => {
      lastTouch.current = performance.now();
      goal.current.target = null;
    };
    c.addEventListener("start", stop);
    return () => c.removeEventListener("start", stop);
  }, [controls]);

  useFrame((state, dt) => {
    const c = state.controls as OrbitControlsImpl | null;
    if (!c) return;
    const cam = state.camera as THREE.OrthographicCamera;
    const k = reduced ? 1 : 1 - Math.exp(-dt * 4.5);
    let moving = false;
    const g = goal.current;
    // While "you" walk between rooms, the camera follows you (unless the visitor is steering it).
    const wp = walkerRef.current.pos;
    if (walkerRef.current.walking && performance.now() - lastTouch.current > 2500 && Number.isFinite(wp.x + wp.z)) g.target = wp.clone();
    if (g.target) {
      const delta = g.target.clone().sub(c.target).multiplyScalar(k);
      c.target.add(delta);
      cam.position.add(delta);
      if (c.target.distanceTo(g.target) < 0.01) g.target = null;
      else moving = true;
    }
    if (g.zoom !== null) {
      cam.zoom += (g.zoom - cam.zoom) * k;
      cam.updateProjectionMatrix();
      if (Math.abs(cam.zoom - g.zoom) < 0.05) g.zoom = null;
      else moving = true;
    }
    if (Math.abs(g.rot) > 0.0005) {
      const step = g.rot * k;
      g.rot -= step;
      cam.position.sub(c.target).applyAxisAngle(THREE.Object3D.DEFAULT_UP, step).add(c.target);
      moving = true;
    }
    // Keep the view over the building.
    c.target.x = THREE.MathUtils.clamp(c.target.x, -14, 14);
    c.target.z = THREE.MathUtils.clamp(c.target.z, -9, 9);
    c.target.y = 0;
    c.autoRotate = !reduced && !selected && performance.now() - lastTouch.current > 8000;
    c.update();
    // Validate before the frame is drawn: a NaN/infinite position or a non-positive zoom renders an
    // empty view. Restore the last good camera instead of drawing that frame.
    const ok = Number.isFinite(cam.position.x + cam.position.y + cam.position.z + c.target.x + c.target.z) && cam.zoom > 0.5 && Number.isFinite(cam.zoom);
    if (ok) {
      if (!lastGood.current) lastGood.current = { pos: cam.position.clone(), target: c.target.clone(), zoom: cam.zoom };
      else {
        lastGood.current.pos.copy(cam.position);
        lastGood.current.target.copy(c.target);
        lastGood.current.zoom = cam.zoom;
      }
    } else {
      const lg = lastGood.current;
      cam.position.copy(lg ? lg.pos : new THREE.Vector3(24, 26, 24));
      c.target.copy(lg ? lg.target : HOME_TARGET);
      cam.zoom = lg ? lg.zoom : baseZoom;
      cam.updateProjectionMatrix();
      g.target = null;
      g.zoom = null;
      g.rot = 0;
      c.update();
    }
    if (moving) invalidate();
  });
  return null;
}

/* ───────────────────────── Canvas ───────────────────────── */

export interface OfficeSceneProps {
  selected: string | null;
  onSelect: (id: string | null) => void;
  reduced: boolean;
  active: boolean;
  compact: boolean;
  api: RefObject<SceneApi | null>;
  onReady?: () => void;
  /** Stage ids whose sample demo the visitor has run. */
  completed?: string[];
  /** Called when "you" reach the open room. */
  onArrive?: (id: string) => void;
  /** The open room host's speech bubble. */
  bubble?: Bubble | null;
  /** WebGL could not be recovered; the hero should show its non-3D fallback. */
  onFatal?: () => void;
}

/** How long to wait for the browser to restore a lost context before building a fresh canvas. */
const RESTORE_WAIT_MS = 2500;
const MAX_REBUILDS = 2;

function OfficeSceneInner({ selected, onSelect, reduced, active, compact, api, onReady, completed = [], onArrive, bubble, onFatal }: OfficeSceneProps) {
  const controls = useRef<OrbitControlsImpl | null>(null);
  const walker = useRef<Walker>({ pos: LOBBY.clone(), walking: false });
  // If the GPU ever drops the WebGL context, come back in a lighter mode (no shadows, 1x pixels) so it
  // doesn't happen again on that machine.
  const [lowPower, setLowPower] = useState(false);
  // Context-loss recovery: wait for the browser to restore the context; if it doesn't, remount the
  // canvas (a brand-new context) a couple of times, then hand over to the hero's non-3D fallback.
  const [lost, setLost] = useState(false);
  const [generation, setGeneration] = useState(0);
  const rebuilds = useRef(0);
  const cleanup = useRef<(() => void) | null>(null);
  useEffect(() => () => cleanup.current?.(), []);
  return (
    <>
      {lost && (
        <p className="pointer-events-none absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 text-center text-sm font-semibold text-ink/70" role="status">
          Restoring The 3D View…
        </p>
      )}
    <Canvas
      key={generation}
      orthographic
      flat
      shadows={!lowPower}
      dpr={lowPower ? 1 : [1, compact ? 1.25 : 1.5]}
      frameloop={active && !reduced ? "always" : "demand"}
      camera={{ position: [24, 26, 24], zoom: 30, near: 0.1, far: 300 }}
      // Opaque canvas + preserved drawing buffer: the page compositor never sees an empty or
      // half-transparent WebGL frame, which is what made the office blink on real GPUs.
      gl={{ antialias: true, alpha: false, preserveDrawingBuffer: true, powerPreference: "high-performance" }}
      onCreated={({ gl, invalidate }) => {
        cleanup.current?.();
        // The canvas is opaque, so paint its background with the theme's panel colour and follow the
        // light/dark toggle.
        const paint = () => {
          gl.setClearColor(getComputedStyle(document.documentElement).getPropertyValue("--bg-alt").trim() || "#0e1016", 1);
          invalidate();
        };
        paint();
        const themeWatch = new MutationObserver(paint);
        themeWatch.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
        // If the browser drops the WebGL context (GPU reset, driver hiccup), ask it to restore the
        // context; if it doesn't within a moment, rebuild the canvas rather than leave the office blank.
        let wait = 0;
        const onLost = (e: Event) => {
          e.preventDefault();
          console.warn("[LeadGen AI] 3D office: WebGL context lost; restoring in low-power mode.");
          setLowPower(true);
          setLost(true);
          window.clearTimeout(wait);
          wait = window.setTimeout(() => {
            if (rebuilds.current < MAX_REBUILDS) {
              rebuilds.current++;
              // Detach first: disposing the old canvas fires its own "context lost" event.
              cleanup.current?.();
              cleanup.current = null;
              setGeneration((n) => n + 1);
            } else onFatal?.();
          }, RESTORE_WAIT_MS);
        };
        const onRestored = () => {
          window.clearTimeout(wait);
          setLost(false);
          invalidate();
        };
        const el = gl.domElement;
        el.addEventListener("webglcontextlost", onLost, false);
        el.addEventListener("webglcontextrestored", onRestored, false);
        cleanup.current = () => {
          themeWatch.disconnect();
          window.clearTimeout(wait);
          el.removeEventListener("webglcontextlost", onLost);
          el.removeEventListener("webglcontextrestored", onRestored);
        };
        // A rebuilt canvas starts with a working context.
        setLost(false);
        onReady?.();
      }}
      onPointerMissed={() => onSelect(null)}
      style={{ touchAction: compact ? "pan-y" : "none" }}

    >
      <KitProvider>
        <hemisphereLight args={["#ffffff", "#52525b", 1.15]} />
        <directionalLight
          position={[14, 26, 10]}
          intensity={1.7}
          color="#fff7ed"
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-camera-left={-22}
          shadow-camera-right={22}
          shadow-camera-top={16}
          shadow-camera-bottom={-16}
          shadow-camera-far={80}
          shadow-bias={-0.0004}
          shadow-normalBias={0.02}
        />
        <directionalLight position={[-16, 12, -12]} intensity={0.35} color="#c7d2fe" />
        <Building reduced={reduced} selected={selected} completed={completed} onSelect={(id) => onSelect(id)} />
        <Avatar selected={selected} walkerRef={walker} reduced={reduced} onArrive={onArrive} />
        {bubble && <SpeechBubble bubble={bubble} />}
        <OrbitControls
          ref={controls}
          makeDefault
          target={[1, 0, 0]}
          enableDamping={!reduced}
          dampingFactor={0.08}
          minPolarAngle={0.45}
          maxPolarAngle={1.12}
          minZoom={8}
          maxZoom={120}
          enableZoom={compact}
          screenSpacePanning={false}
          autoRotateSpeed={0.35}
          // On touch screens one finger scrolls the page; two fingers pinch, pan and rotate the office.
          touches={{ ONE: compact ? (undefined as unknown as THREE.TOUCH) : THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_ROTATE }}
        />
        <Rig selected={selected} reduced={reduced} compact={compact} api={api} controls={controls} walkerRef={walker} />
      </KitProvider>
    </Canvas>
    </>
  );
}

/** Memoised so hero UI updates (panel text, play state) never re-render the 3D tree unnecessarily. */
const OfficeScene = memo(OfficeSceneInner);
export default OfficeScene;
