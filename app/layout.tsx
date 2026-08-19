import type { Metadata } from "next";
import { EB_Garamond, Source_Serif_4 } from "next/font/google";
import { Loader } from "@/features/portfolio/components/Loader";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl = "https://meldev-ph.vercel.app";

const description =
  "Mel Alejandrino is a web developer in Cagayan de Oro, Philippines, building business systems, client platforms, and desktop software.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mel Alejandrino — Web Developer, Cagayan de Oro",
  description,
  keywords: [
    "Mel Alejandrino",
    "web developer",
    "frontend developer",
    "portfolio",
    "React",
    "Next.js",
    "Laravel",
    "Fluss",
    "Cagayan de Oro",
    "Philippines",
  ],
  authors: [{ name: "Mel Alejandrino" }],
  creator: "Mel Alejandrino",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mel Alejandrino — Web Developer, Cagayan de Oro",
    description,
    url: siteUrl,
    type: "website",
    locale: "en_US",
    siteName: "Mel Alejandrino",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mel Alejandrino — Web Developer, Cagayan de Oro",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${sourceSerif.variable} antialiased`}
    >
      <body>
        <a
          href="#content"
          className="meta sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:border focus:border-ink focus:bg-paper focus:px-4 focus:py-2 focus:text-ink focus:outline-none"
        >
          Skip to content
        </a>
        <Loader />
        {children}
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": `${siteUrl}/#person`,
                  name: "Mel Alejandrino",
                  givenName: "Mel Carlo",
                  familyName: "Alejandrino",
                  jobTitle: "Web Developer",
                  email: "alejandrino.mel002@gmail.com",
                  url: siteUrl,
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Cagayan de Oro",
                    addressCountry: "PH",
                  },
                  worksFor: {
                    "@type": "Organization",
                    name: "Syntactics Inc.",
                    url: "https://syntacticsinc.com",
                  },
                  sameAs: [
                    "https://github.com/melalejandrino",
                    "https://linkedin.com/in/melcarlo",
                  ],
                  knowsAbout: [
                    "React",
                    "Next.js",
                    "Vue",
                    "Laravel",
                    "PHP",
                    "Python",
                    "Rust",
                    "Node.js",
                    "TypeScript",
                    "JavaScript",
                    "Tailwind CSS",
                    "MySQL",
                    "MongoDB",
                  ],
                },
                {
                  // ponytail: no SearchAction — the site has no search (SEO.md §18).
                  "@type": "WebSite",
                  "@id": `${siteUrl}/#website`,
                  url: siteUrl,
                  name: "Mel Alejandrino",
                  inLanguage: "en",
                  publisher: { "@id": `${siteUrl}/#person` },
                },
                {
                  "@type": "ProfilePage",
                  "@id": `${siteUrl}/#webpage`,
                  url: siteUrl,
                  name: "Mel Alejandrino — Web Developer, Cagayan de Oro",
                  isPartOf: { "@id": `${siteUrl}/#website` },
                  about: { "@id": `${siteUrl}/#person` },
                  mainEntity: { "@id": `${siteUrl}/#person` },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
