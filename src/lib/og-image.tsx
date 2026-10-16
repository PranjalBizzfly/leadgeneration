import { ImageResponse } from "next/og";
import { SITE } from "./site";

/** Shared 1200x630 social preview in the site brand style. Uses ImageResponse's bundled font, so no remote font fetch per image. */
export const OG_SIZE = { width: 1200, height: 630 };

export function brandOgImage({ label, title, footer }: { label?: string; title: string; footer?: string }) {
  const fontSize = title.length > 70 ? 52 : title.length > 44 ? 60 : 68;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #0a0b0f 0%, #1e1b4b 55%, #3b0764 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            L
          </div>
          <div style={{ fontSize: 44, fontWeight: 800 }}>{SITE.name}</div>
        </div>
        {label && (
          <div style={{ display: "flex", marginTop: 48 }}>
            <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#c4b5fd", padding: "8px 20px", borderRadius: 999, border: "2px solid rgba(139,92,246,0.6)" }}>
              {label}
            </div>
          </div>
        )}
        <div style={{ fontSize, fontWeight: 800, marginTop: label ? 28 : 48, lineHeight: 1.1, maxWidth: 1040 }}>{title}</div>
        {footer && <div style={{ fontSize: 30, marginTop: 28, opacity: 0.75 }}>{footer}</div>}
      </div>
    ),
    OG_SIZE,
  );
}
