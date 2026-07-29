import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import { Loader } from "@/features/portfolio/components/Loader";
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
  // ponytail: 51 chars — under Google's ~60 char cutoff. Laravel dropped from the
  // title on purpose; it's still in the description, keywords, and JSON-LD knowsAbout.
  title: "Mel Alejandrino — React & Next.js Frontend Developer",
  // ponytail: 149 chars — Google truncates around 155–160, so this renders whole.
  description:
    "Frontend developer in Cagayan de Oro, PH. I build clean, responsive web apps with ReactJS, NextJS, and Laravel — client systems and open-source work.",
  keywords: [
    "frontend developer",
    "ReactJS",
    "NextJS",
    "Laravel",
    "web developer",
    "Philippines",
    "Mel Alejandrino",
    "portfolio",
    "Syntactics Inc.",
    "Fluss",
  ],
  authors: [{ name: "Mel Alejandrino" }],
  creator: "Mel Alejandrino",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mel Alejandrino — Frontend Developer",
    description:
      "Frontend developer specializing in ReactJS, NextJS, and Laravel. Portfolio featuring client work and personal open-source projects.",
    url: siteUrl,
    type: "website",
    locale: "en_US",
    siteName: "Mel Alejandrino",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mel Alejandrino — Frontend Developer",
    description:
      "Frontend developer specializing in ReactJS, NextJS, and Laravel. Portfolio featuring client work and personal projects.",
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
                    "ReactJS",
                    "NextJS",
                    "Laravel",
                    "TypeScript",
                    "JavaScript",
                    "PHP",
                    "Tailwind CSS",
                    "Node.js",
                    "Sanity CMS",
                    "Radix UI",
                    "TanStack Virtual",
                    "shadcn/ui",
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
                  name: "Mel Alejandrino — Frontend Developer",
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
