import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import { Loader } from "@/features/portfolio/components/Loader";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
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
  title: "Mel Alejandrino — Frontend Developer | React, Next.js, Laravel",
  description:
    "Frontend developer based in Cagayan de Oro, Philippines. Specializing in ReactJS, NextJS, and Laravel — building clean, responsive web applications for real business problems. Portfolio featuring client work at Syntactics Inc. and personal open-source projects.",
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
    "jejeui",
    "Barely Fairy",
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
    card: "summary",
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
      className={`${bricolageGrotesque.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded focus:outline-none"
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
              "@type": "Person",
              name: "Mel Alejandrino",
              givenName: "Mel Carlo",
              familyName: "Alejandrino",
              jobTitle: "Frontend Developer",
              email: "alejandrino.mel002@gmail.com",
              url: "https://github.com/melalejandrino",
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
            }),
          }}
        />
      </body>
    </html>
  );
}
