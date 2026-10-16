"use client";

import { useLayoutEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { createRoot, type Root } from "react-dom/client";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const v = new THREE.Vector3();

/**
 * A DOM label pinned to a point in the scene. Like drei's <Html>, but it unmounts its React root
 * asynchronously, so tearing down the scene mid-render doesn't trigger React's
 * "synchronously unmount a root while React was already rendering" error.
 */
export function SceneHtml({ position, center, zIndexRange = [16777271, 0], style, children }: { position: [number, number, number]; center?: boolean; zIndexRange?: [number, number]; style?: CSSProperties; children: ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const { gl, camera, size, events } = useThree();
  const elRef = useRef<HTMLDivElement | null>(null);
  const root = useRef<Root | null>(null);

  useLayoutEffect(() => {
    const el = (elRef.current = document.createElement("div"));
    const target = (events.connected as HTMLElement | undefined) ?? gl.domElement.parentElement;
    el.style.cssText = "position:absolute;top:0;left:0;";
    // The label sits inside the canvas's event container. Without this, a click on a chip in the label
    // also reaches the 3D scene as a click on empty space (onPointerMissed), which deselects the room
    // right after the chip's own action ran.
    const stop = (e: Event) => e.stopPropagation();
    const kinds = ["pointerdown", "pointerup", "pointermove", "click", "wheel"] as const;
    kinds.forEach((k) => el.addEventListener(k, stop));
    target?.appendChild(el);
    const r = (root.current = createRoot(el));
    return () => {
      root.current = null;
      setTimeout(() => {
        r.unmount();
        el.remove();
        if (elRef.current === el) elRef.current = null;
      });
    };
  }, [gl, events.connected]);

  useLayoutEffect(() => {
    root.current?.render(<div style={{ position: "absolute", transform: center ? "translate3d(-50%,-50%,0)" : undefined, ...style }}>{children}</div>);
  });

  useFrame(() => {
    const el = elRef.current;
    if (!el || !group.current) return;
    v.setFromMatrixPosition(group.current.matrixWorld).project(camera);
    const visible = v.z > -1 && v.z < 1;
    el.style.display = visible ? "block" : "none";
    el.style.transform = `translate3d(${(v.x * 0.5 + 0.5) * size.width}px,${(-v.y * 0.5 + 0.5) * size.height}px,0)`;
    el.style.zIndex = String(Math.round(zIndexRange[1] + (zIndexRange[0] - zIndexRange[1]) * (1 - (v.z + 1) / 2)));
  });

  return <group ref={group} position={position} />;
}
