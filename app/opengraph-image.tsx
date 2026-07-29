import { ImageResponse } from "next/og";

export const alt = "Mel Alejandrino — Frontend Developer, Cagayan de Oro, PH";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// ponytail: one file — Next reuses this for og:image and twitter:image.
// Default ImageResponse font, no Fraunces fetch at build time.
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
          background: "#fcf9f4",
          color: "#1c1c19",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 1, color: "#455548" }}>
          FRONTEND DEVELOPER — CAGAYAN DE ORO, PH
        </div>
        <div style={{ fontSize: 96, fontWeight: 600, color: "#2f5d3a", marginTop: 24 }}>
          Mel Alejandrino
        </div>
        <div style={{ fontSize: 36, marginTop: 24, color: "#434843" }}>
          ReactJS · NextJS · Laravel
        </div>
      </div>
    ),
    size,
  );
}
