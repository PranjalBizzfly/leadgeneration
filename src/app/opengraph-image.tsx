import { ImageResponse } from "next/og";

export const alt = "LeadGen AI — Prospect Intelligence Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          <div style={{ fontSize: 44, fontWeight: 800 }}>LeadGen AI</div>
        </div>
        <div style={{ fontSize: 68, fontWeight: 800, marginTop: 48, lineHeight: 1.1, maxWidth: 950 }}>Find, enrich, score and reach the right prospects</div>
        <div style={{ fontSize: 30, marginTop: 28, opacity: 0.75 }}>Google Maps · LinkedIn · IndiaMART</div>
      </div>
    ),
    size,
  );
}
