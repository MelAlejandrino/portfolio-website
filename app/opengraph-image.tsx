import { ImageResponse } from "next/og";

export const alt = "Made by Mel — Developer who builds things. Cagayan de Oro, PH";
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
          background: "#fcf9f4",
          color: "#1c1c19",
        }}
      >
        <div style={{ fontSize: 20, letterSpacing: 2, color: "#737873" }}>
          MADE BY MEL
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: "#2f5d3a",
            marginTop: 16,
            lineHeight: 1,
          }}
        >
          I build things.
        </div>
        <div style={{ fontSize: 28, marginTop: 32, color: "#434843" }}>
          Mel Alejandrino — Cagayan de Oro, PH
        </div>
      </div>
    ),
    size,
  );
}
