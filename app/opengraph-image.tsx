import { ImageResponse } from "next/og";

export const alt =
  "Mel Alejandrino — Web Developer, Cagayan de Oro, Philippines";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// ponytail: no webfont fetch — the OG renderer's built-in serif is a newspaper
// face already, and one less network call at build time.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 64,
          background: "#f4f0e4",
          color: "#17150f",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: 3,
            color: "#6b6553",
            fontFamily: "sans-serif",
            borderBottom: "1px solid #b3ab93",
            paddingBottom: 12,
          }}
        >
          <span>EST. 2025</span>
          <span>VOL. 01 · NO. 01</span>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 62,
            letterSpacing: 2,
            marginTop: 28,
            paddingBottom: 20,
          }}
        >
          MEL ALEJANDRINO
        </div>

        {/* Double rule — satori has no `double` border style, so it is drawn. */}
        <div
          style={{
            display: "flex",
            height: 3,
            borderTop: "1px solid #17150f",
            borderBottom: "1px solid #17150f",
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 76,
            lineHeight: 1.02,
            marginTop: 40,
          }}
        >
          I BUILD DIGITAL PRODUCTS FOR THE WEB.
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "auto",
            fontSize: 20,
            letterSpacing: 2,
            color: "#6b6553",
            fontFamily: "sans-serif",
            borderTop: "1px solid #b3ab93",
            paddingTop: 16,
          }}
        >
          <span>WEB DEVELOPER · BUILDER · DIGITAL CRAFT</span>
          <span>CAGAYAN DE ORO, PH</span>
        </div>
      </div>
    ),
    size,
  );
}
