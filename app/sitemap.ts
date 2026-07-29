import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://meldev-ph.vercel.app",
      // ponytail: fixed date, not new Date() — SEO.md §4 forbids a lastmod that
      // changes on every request. Bump this by hand when the page content changes.
      lastModified: "2026-07-29",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
