import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import { Loader } from "@/features/portfolio/components/Loader";
import NoiseTexture from "@/features/portfolio/components/NoiseTexture";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://meldev-ph.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Made by Mel — Mel Alejandrino",
  description:
    "Developer who builds software, websites, desktop apps, and things I probably didn't need to build. Based in Cagayan de Oro, PH.",
  keywords: [
    "Mel Alejandrino",
    "developer",
    "portfolio",
    "React",
    "Next.js",
    "Laravel",
    "Fluss",
    "Made by Mel",
    "Cagayan de Oro",
    "Philippines",
  ],
  authors: [{ name: "Mel Alejandrino" }],
  creator: "Mel Alejandrino",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Made by Mel — Mel Alejandrino",
    description:
      "Developer who builds software, websites, desktop apps, and things I probably didn't need to build.",
    url: siteUrl,
    type: "website",
    locale: "en_US",
    siteName: "Made by Mel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Made by Mel — Mel Alejandrino",
    description:
      "Developer who builds software, websites, desktop apps, and things I probably didn't need to build.",
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
      className={`${fraunces.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-on-primary focus:rounded focus:outline-none"
        >
          Skip to content
        </a>
        <Loader />
        <NoiseTexture />
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
                  jobTitle: "Frontend Developer",
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
                  name: "Made by Mel — Mel Alejandrino",
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
