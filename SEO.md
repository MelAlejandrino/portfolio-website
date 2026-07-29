# SEO.md

# Maximum Crawlability, Indexability & Search Discoverability Specification

## Purpose

This document defines the SEO requirements for the entire application.

The primary objective is to build the website so that it is:

* Extremely easy for Google to crawl
* Extremely easy for search engines to understand
* Extremely easy for search engines to index
* Discoverable through relevant search queries
* Accessible to legitimate web crawlers and search bots
* Accessible to AI search engines and answer engines where appropriate
* Semantically structured and machine-readable
* Optimized for Google Search, Bing, DuckDuckGo, Brave Search, and other search engines
* Optimized for modern AI-powered search and answer engines
* Fast and performant
* Mobile-first
* Accessible
* Technically clean
* Internally well connected through links
* Resistant to common indexing problems
* Built around high-quality, useful, original content
* Capable of scaling to thousands or millions of indexable pages without creating SEO problems

The implementation must prioritize **technical SEO + semantic SEO + content quality + crawlability + performance + discoverability**.

Do not use black-hat SEO techniques.

Do not generate spam pages.

Do not create doorway pages.

Do not create keyword-stuffed content.

Do not create duplicate pages solely to target different keywords.

Do not use hidden text.

Do not manipulate search engines through deceptive techniques.

The goal is to make the website genuinely useful while making its content exceptionally easy for machines to discover, crawl, understand, and rank.

---

# 1. Core SEO Principles

The application must follow these principles:

1. Every important page must be crawlable.
2. Every important page must be indexable.
3. Every indexable page must have a unique canonical URL.
4. Every indexable page must have unique and meaningful metadata.
5. Every important page must be discoverable through internal links.
6. Every important page must be included in XML sitemaps.
7. Every page must have a clear semantic purpose.
8. Every page must have a unique title.
9. Every page must have a unique meta description where appropriate.
10. Every page must have a single clear H1.
11. Headings must follow a logical hierarchy.
12. URLs must be clean, stable, descriptive, and permanent.
13. Content must be rendered in a way that search engines can reliably access.
14. JavaScript must never be the only way to expose critical content.
15. Critical content must not depend on user interaction to become available to crawlers.
16. Internal links must use descriptive anchor text.
17. Images must have meaningful alt text.
18. Structured data must be implemented wherever applicable.
19. The site must have excellent Core Web Vitals.
20. The site must be fully usable on mobile devices.
21. The site must avoid unnecessary crawl waste.
22. The site must avoid duplicate content.
23. The site must expose clear relationships between pages.
24. The site must provide strong contextual internal linking.
25. The site must make content understandable without relying exclusively on visual presentation.

---

# 2. Search Engine Accessibility

The website must be accessible to legitimate search engine crawlers.

At minimum, ensure compatibility with:

* Googlebot
* Googlebot Smartphone
* Bingbot
* DuckDuckBot
* YandexBot where relevant
* Baiduspider where relevant
* Applebot
* Common AI/search crawlers where appropriate

Do not block legitimate search engine crawlers unnecessarily.

Do not block critical application routes through:

* robots.txt
* server firewall rules
* CDN bot protection
* WAF rules
* authentication
* JavaScript challenges
* rate limits

unless there is a legitimate security or infrastructure reason.

If bot protection is implemented, ensure legitimate search crawlers are not accidentally blocked.

Security systems must distinguish between:

* malicious bots
* legitimate crawlers
* normal users

Do not blindly allow a crawler based only on its User-Agent string.

---

# 3. robots.txt

Create and maintain a valid `/robots.txt`.

The robots.txt file must:

* Be accessible at the domain root
* Return HTTP 200
* Contain valid syntax
* Avoid blocking CSS
* Avoid blocking JavaScript
* Avoid blocking critical images
* Avoid blocking important page resources
* Avoid blocking pages that should be indexed
* Prevent unnecessary crawl waste

Example structure:

```txt
User-agent: *

Allow: /

Disallow: /admin/
Disallow: /dashboard/
Disallow: /account/
Disallow: /settings/
Disallow: /login/
Disallow: /register/
Disallow: /api/
Disallow: /internal/

Sitemap: https://example.com/sitemap.xml
```

Replace paths based on the actual application.

Do not use robots.txt as the primary mechanism for removing a URL from Google's index.

If a page must not appear in search results, use:

```html
<meta name="robots" content="noindex,follow">
```

or an equivalent HTTP header.

Important:

A URL blocked by robots.txt may still appear in search results if Google discovers the URL elsewhere.

Therefore:

* Use robots.txt for crawl control.
* Use `noindex` for index control.
* Use canonical tags for duplicate URL consolidation.
* Use authentication for private content.

Do not confuse these mechanisms.

---

# 4. XML Sitemap System

Implement XML sitemaps.

At minimum:

```txt
/sitemap.xml
```

For large websites, implement a sitemap index:

```txt
/sitemap.xml
/sitemap-index.xml
```

or an equivalent structure.

The sitemap system must support:

* Static pages
* Dynamic pages
* Category pages
* Collection pages
* Product pages
* Articles
* Documentation
* Profiles
* Other important public content

Only include URLs that are:

* Canonical
* Publicly accessible
* Indexable
* HTTP 200
* Not redirected
* Not blocked by robots.txt
* Not marked noindex

Do not include:

* 404 pages
* 410 pages
* 301 redirects
* 302 redirects
* noindex pages
* duplicate URLs
* parameterized duplicates
* private pages
* authentication pages

Each sitemap URL should use the canonical URL.

Example:

```xml
<url>
    <loc>https://example.com/example-page</loc>
    <lastmod>2026-07-28</lastmod>
</url>
```

Use accurate `lastmod` values.

Do not update `lastmod` on every request.

Only update it when the meaningful content of a page changes.

For very large websites:

* Split sitemaps by content type
* Split sitemaps by category
* Split sitemaps by date
* Keep sitemap files within search engine limits
* Use a sitemap index

Example:

```txt
/sitemap.xml
    ├── sitemap-pages.xml
    ├── sitemap-posts.xml
    ├── sitemap-products.xml
    ├── sitemap-categories.xml
    └── sitemap-docs.xml
```

Submit the sitemap to:

* Google Search Console
* Bing Webmaster Tools

The sitemap URL must also be declared in robots.txt.

---

# 5. Canonical URLs

Every indexable page must have a canonical URL.

Example:

```html
<link rel="canonical" href="https://example.com/page">
```

Canonical URLs must:

* Use HTTPS
* Use the preferred hostname
* Use the preferred URL format
* Be absolute URLs
* Point to a 200 status page
* Be indexable
* Be self-referencing for unique pages

Avoid unnecessary URL variations.

These should resolve consistently:

```txt
http://example.com
https://example.com
http://www.example.com
https://www.example.com
```

Choose one canonical domain.

Redirect all other variants to the canonical domain.

For example:

```txt
HTTP → HTTPS
www → non-www
```

or the reverse.

Do not create canonical chains.

Bad:

```txt
/page-a → /page-b → /page-c
```

Prefer:

```txt
/page-a → /page-c
```

---

# 6. URL Structure

URLs must be:

* Short where practical
* Descriptive
* Human-readable
* Stable
* Lowercase
* Hyphen-separated
* Free from unnecessary parameters

Preferred:

```txt
/blog/technical-seo-guide
```

Avoid:

```txt
/page?id=12345
```

Avoid unnecessary:

```txt
/category/page/12345
```

Avoid:

```txt
/blog/Technical_SEO_GUIDE
```

Avoid:

```txt
/blog/technical-seo-guide?utm_source=google
```

Tracking parameters must not create duplicate indexable URLs.

Where query parameters are necessary, implement appropriate canonicalization and indexing rules.

Do not change URLs unnecessarily after publication.

If URLs must change:

1. Create a 301 redirect.
2. Update internal links.
3. Update canonical tags.
4. Update sitemap entries.
5. Update structured data.
6. Update external references where possible.

---

# 7. HTTP Status Codes

Use correct HTTP status codes.

### 200

For valid pages.

### 301

For permanent redirects.

### 302

Only for temporary redirects.

### 404

For genuinely missing resources.

### 410

For permanently removed resources when appropriate.

### 500

For server errors.

### 503

For temporary maintenance or downtime.

Never return HTTP 200 for pages that are actually missing.

Avoid "soft 404" pages.

Example:

```txt
https://example.com/nonexistent-page
```

must not return a normal page with HTTP 200.

---

# 8. Server-Side Rendering and HTML Accessibility

Search engines must be able to access the meaningful content of pages.

For JavaScript applications:

* Prefer SSR or SSG where practical.
* Use progressive enhancement.
* Ensure critical content exists in initial HTML where possible.
* Do not hide important content exclusively behind client-side JavaScript.
* Do not require clicks to load primary content.
* Do not require scrolling to trigger critical content loading.
* Do not require authentication for public content.
* Do not depend on cookies to expose primary content.

If using Next.js:

Prefer:

* Server Components
* Static generation
* Server-side rendering
* Metadata API
* `generateMetadata`
* Dynamic sitemap generation
* Dynamic robots generation

Avoid unnecessary client components for SEO-critical content.

Do not mark entire pages with `"use client"` unless necessary.

Important content should be available to:

* Users
* Googlebot
* Other search crawlers
* Accessibility tools
* AI retrieval systems

---

# 9. Rendering Strategy

Choose rendering strategies based on content.

### Static Content

Prefer:

* SSG
* Static generation

### Frequently Updated Content

Prefer:

* SSR
* Incremental Static Regeneration
* Appropriate cache revalidation

### User-Specific Content

Do not index.

Examples:

* Dashboards
* Account pages
* Private settings
* Personalized feeds

### Public Dynamic Content

Make it crawlable.

Examples:

* Public profiles
* Public articles
* Public products
* Public documentation
* Public directories

---

# 10. Metadata

Every indexable page must have appropriate metadata.

At minimum:

```html
<title>Unique Page Title</title>

<meta
    name="description"
    content="Unique and useful description of the page."
/>

<link
    rel="canonical"
    href="https://example.com/page"
/>
```

Titles must be:

* Unique
* Descriptive
* Specific
* Natural
* Relevant to the page

Do not keyword stuff.

Bad:

```txt
Best Shoes | Shoes | Cheap Shoes | Buy Shoes | Running Shoes
```

Better:

```txt
Best Running Shoes for Beginners | Example
```

Descriptions should:

* Explain what the page is about
* Match actual page content
* Encourage useful clicks
* Be unique
* Avoid keyword stuffing

---

# 11. Open Graph

Implement Open Graph metadata.

At minimum:

```html
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Page description">
<meta property="og:type" content="website">
<meta property="og:url" content="https://example.com/page">
<meta property="og:image" content="https://example.com/image.jpg">
```

For articles:

```html
<meta property="og:type" content="article">
```

Include:

* `og:title`
* `og:description`
* `og:url`
* `og:type`
* `og:image`
* `og:site_name`

Where appropriate:

* `article:published_time`
* `article:modified_time`
* `article:author`

---

# 12. Twitter / X Cards

Implement appropriate social card metadata.

Example:

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Page Title">
<meta name="twitter:description" content="Page description">
<meta name="twitter:image" content="https://example.com/image.jpg">
```

Use accurate metadata.

---

# 13. Semantic HTML

Use semantic HTML.

Prefer:

```html
<header>
<nav>
<main>
<article>
<section>
<aside>
<footer>
```

Avoid building the entire page from:

```html
<div>
<div>
<div>
```

Use semantic elements where appropriate.

Use:

```html
<h1>
<h2>
<h3>
<h4>
```

in logical hierarchy.

Each important page should generally have one primary H1.

Do not use headings purely for visual styling.

---

# 14. Internal Linking

Internal linking is a major SEO priority.

Every important page must be reachable through internal links.

Avoid orphan pages.

A page should ideally be discoverable through:

* Navigation
* Category pages
* Related content
* Contextual links
* Breadcrumbs
* Search results where appropriate

Use descriptive anchor text.

Good:

```html
<a href="/guides/technical-seo">
    Learn more about technical SEO
</a>
```

Avoid:

```html
<a href="/guides/technical-seo">
    Click here
</a>
```

Create logical content clusters.

Example:

```txt
SEO
│
├── Technical SEO
│   ├── Crawlability
│   ├── Indexability
│   ├── Sitemaps
│   └── Canonical URLs
│
├── On-Page SEO
│   ├── Titles
│   ├── Headings
│   └── Internal Linking
│
└── Content SEO
    ├── Keyword Research
    ├── Content Strategy
    └── Topic Clusters
```

Important pages should have strong internal link authority.

Do not over-optimize anchor text.

Use natural variations.

---

# 15. Breadcrumbs

Implement breadcrumbs for hierarchical content.

Example:

```txt
Home
→ Guides
→ SEO
→ Technical SEO
```

Use visible breadcrumbs.

Implement BreadcrumbList structured data.

Example:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://example.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Guides",
      "item": "https://example.com/guides"
    }
  ]
}
```

The structured data must match visible page content.

---

# 16. Structured Data

Use Schema.org structured data where it genuinely applies.

Potential types include:

* Organization
* WebSite
* WebPage
* Article
* BlogPosting
* BreadcrumbList
* Product
* Review
* AggregateRating
* FAQPage where eligible
* HowTo where eligible
* Event
* Person
* LocalBusiness
* SoftwareApplication
* VideoObject
* ImageObject

Do not add structured data that does not represent actual page content.

Do not fabricate:

* Reviews
* Ratings
* Prices
* Authors
* Organizations
* Events

Structured data must match visible content.

Use JSON-LD where possible.

Example:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Example",
  "url": "https://example.com"
}
</script>
```

For articles, include where applicable:

* Headline
* Description
* Image
* Author
* Publisher
* Date published
* Date modified
* Main entity
* URL

---

# 17. Organization Entity

Create a consistent organization identity.

Use Organization structured data.

Include where applicable:

* Name
* URL
* Logo
* Description
* SameAs profiles
* Contact information

Maintain consistent organization information across:

* Website
* Social profiles
* Business listings
* External profiles

---

# 18. Website Entity

Implement WebSite structured data.

Where appropriate, provide a site search action.

Example:

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://example.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://example.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

Only implement this if the site's search functionality actually works.

---

# 19. Images

Images must be optimized for:

* Search engines
* Accessibility
* Performance
* Image search

Use meaningful filenames.

Prefer:

```txt
technical-seo-crawlability-guide.webp
```

Avoid:

```txt
IMG_1234.jpg
```

Use:

```html
<img
    src="/images/technical-seo-crawlability-guide.webp"
    alt="Diagram showing how search engine crawlers discover and index web pages"
/>
```

Alt text must describe the image's actual purpose.

Do not keyword stuff alt text.

Decorative images should use:

```html
alt=""
```

Optimize:

* File size
* Dimensions
* Format
* Responsive loading

Prefer modern formats such as:

* WebP
* AVIF

Use lazy loading for below-the-fold images.

Do not lazy-load critical above-the-fold images unnecessarily.

Use width and height attributes or equivalent layout reservation to prevent CLS.

---

# 20. Image Sitemap

For websites where image search is important, consider including images in XML sitemaps or using appropriate image sitemap mechanisms.

Ensure important images are:

* Crawlable
* Public
* Not blocked
* Associated with relevant pages

---

# 21. Video SEO

If the application contains video:

Implement:

* VideoObject structured data
* Video titles
* Video descriptions
* Video thumbnails
* Video URLs where applicable
* Captions
* Transcripts where useful

Ensure video content is discoverable without requiring complex interactions.

---

# 22. Pagination

Implement pagination carefully.

Use crawlable links:

```html
<a href="/articles?page=2">
    Next
</a>
```

Do not rely exclusively on JavaScript buttons for important content discovery.

Avoid creating infinite crawl spaces.

If infinite scrolling is implemented:

* Provide crawlable paginated URLs.
* Ensure each page can be independently accessed.
* Ensure canonicalization is correct.

---

# 23. Faceted Navigation

If the application has filters:

Examples:

```txt
/category?color=red
/category?size=large
/category?sort=price
```

Prevent uncontrolled URL explosion.

Determine which filtered pages deserve indexing.

Index only useful, unique, search-worthy combinations.

For low-value filter combinations:

* Canonicalize
* Noindex where appropriate
* Prevent crawl waste where appropriate

Do not create millions of thin pages.

---

# 24. Search Results Pages

Internal search result pages should generally not be indexed unless they provide substantial, unique, useful content.

Default recommendation:

```html
<meta name="robots" content="noindex,follow">
```

However, if a search result page represents a valuable curated landing page with unique content, it may be treated differently.

---

# 25. Thin Content

Avoid thin content.

Every indexable page should provide meaningful value.

Avoid pages that contain only:

* A title
* A few words
* Automatically generated boilerplate
* Duplicate content
* Keyword variations
* Affiliate links without useful content

If a page has no meaningful search value:

* Do not create it.
* Merge it.
* Improve it.
* Redirect it.
* Noindex it.

---

# 26. Duplicate Content

Avoid duplicate content across:

* HTTP/HTTPS
* www/non-www
* Trailing slash variants
* Query parameters
* Tracking parameters
* Duplicate categories
* Duplicate tags
* Pagination
* Filter combinations

Use:

* Canonical tags
* Redirects
* Internal linking consistency
* Appropriate noindex directives

---

# 27. Mobile SEO

The website must be mobile-first.

Ensure:

* Responsive design
* No horizontal overflow
* Readable text
* Accessible navigation
* Proper viewport configuration
* Touch-friendly controls
* Fast mobile loading

Google primarily uses mobile-first indexing.

The mobile version must contain the same important content as the desktop version.

Do not hide essential SEO content only on mobile.

---

# 28. Core Web Vitals

Optimize for:

* Largest Contentful Paint
* Interaction to Next Paint
* Cumulative Layout Shift

Focus on:

* Fast server response
* Efficient caching
* Image optimization
* Font optimization
* Minimal JavaScript
* Code splitting
* Lazy loading
* CDN delivery
* Efficient database queries
* Reduced third-party scripts

Do not sacrifice usability for SEO.

Performance optimization must improve real user experience.

---

# 29. Page Speed

Target:

* Fast initial HTML response
* Fast Largest Contentful Paint
* Minimal JavaScript execution
* Minimal layout shifts
* Minimal blocking resources

Optimize:

* CSS
* JavaScript
* Fonts
* Images
* API requests
* Database queries

Avoid unnecessary:

* Third-party scripts
* Analytics scripts
* Tracking scripts
* UI libraries
* Client-side hydration

---

# 30. JavaScript Links

Important links must be real crawlable links.

Prefer:

```html
<a href="/about">About</a>
```

Avoid:

```html
<div onclick="navigate('/about')">
```

Search engines and accessibility tools should be able to understand navigation.

---

# 31. Link Discovery

Ensure important pages are discoverable through:

* HTML navigation
* Internal links
* Sitemaps
* Breadcrumbs
* Related content
* Category pages

Do not rely only on:

* XML sitemap
* Internal search
* JavaScript
* User interaction

Use multiple discovery paths for important pages.

---

# 32. Crawl Depth

Keep important pages reasonably close to the homepage.

Ideal structure:

```txt
Homepage
→ Category
→ Subcategory
→ Content
```

Avoid:

```txt
Homepage
→ Category
→ Subcategory
→ Subcategory
→ Subcategory
→ Subcategory
→ Content
```

Important pages should not be buried deeply.

---

# 33. Orphan Page Detection

Build tooling or automated checks to identify pages that:

* Exist in the database
* Exist in the sitemap
* Are indexable
* But have no internal links

These should be reviewed.

Every important indexable page should have at least one meaningful internal link.

---

# 34. SEO Health Checks

Create automated SEO validation where possible.

Check:

* Missing titles
* Duplicate titles
* Missing descriptions
* Duplicate descriptions
* Missing H1
* Multiple H1s where inappropriate
* Missing canonical
* Incorrect canonical
* Broken internal links
* Broken external links where practical
* 404 pages
* 500 errors
* Redirect chains
* Redirect loops
* Orphan pages
* Noindex pages in sitemap
* Redirects in sitemap
* Canonical URLs returning non-200 responses
* Blocked important resources
* Missing alt text
* Duplicate URLs
* Thin content
* Missing structured data
* Invalid structured data

Run these checks automatically in development and CI where practical.

---

# 35. SEO Metadata Architecture

Create a centralized SEO metadata system.

Example conceptual structure:

```ts
type SEOData = {
    title: string
    description: string
    canonical?: string
    image?: string
    noIndex?: boolean
    noFollow?: boolean
    type?: "website" | "article"
}
```

Each page should be able to define its own SEO metadata.

Avoid hardcoding the same metadata on every page.

Use dynamic metadata for:

* Articles
* Products
* Categories
* Profiles
* Documentation
* Public content

---

# 36. Dynamic Page Metadata

For dynamic pages:

```txt
/products/product-name
/articles/article-name
/categories/category-name
/users/public-profile
```

Generate metadata from the page's actual content.

Example:

```txt
Title:
{Page Name} | {Site Name}

Description:
{Unique page description}

Canonical:
https://example.com/{canonical-path}
```

Do not use database IDs as titles.

Do not use generic metadata such as:

```txt
Welcome to our website
```

for every page.

---

# 37. SEO-Friendly Content Architecture

Build a clear information architecture.

Example:

```txt
/
├── about/
├── services/
│   ├── service-a/
│   ├── service-b/
│   └── service-c/
├── blog/
│   ├── category-a/
│   ├── category-b/
│   └── articles/
├── guides/
├── documentation/
└── contact/
```

Every section should have a clear purpose.

Avoid creating URLs solely because they are easy to generate.

Every indexable URL should have a reason to exist.

---

# 38. Topic Clusters

Organize content into topic clusters.

Example:

```txt
Main Topic
│
├── Pillar Page
│
├── Supporting Article 1
├── Supporting Article 2
├── Supporting Article 3
└── Supporting Article 4
```

Link supporting articles to the pillar page.

Link the pillar page to supporting content.

Create strong topical relationships.

---

# 39. Content Quality

Content must be:

* Original
* Useful
* Accurate
* Clear
* Comprehensive where appropriate
* Written for humans
* Easy to understand

Use:

* Real examples
* Data
* Original insights
* First-hand experience where applicable
* References to authoritative sources
* Clear explanations

Do not create content solely to rank for keywords.

---

# 40. AI-Generated Content

AI may be used to assist content creation.

However:

* Do not mass-produce low-quality pages.
* Do not publish unreviewed AI hallucinations.
* Do not create thousands of near-identical pages.
* Do not generate content solely to manipulate rankings.

AI-generated content should be:

* Fact-checked
* Edited
* Useful
* Original
* Relevant
* Human-reviewed where appropriate

The final content should provide genuine value.

---

# 41. AI Search and Answer Engine Discoverability

Optimize content for modern search experiences.

Make content easy to:

* Retrieve
* Parse
* Quote accurately
* Summarize
* Understand
* Attribute

Use:

* Clear headings
* Direct answers
* Definitions
* Structured lists
* Tables where appropriate
* FAQ sections where useful
* Consistent terminology
* Semantic HTML
* Structured data
* Author information
* Publication dates
* Modification dates

Avoid hiding important information inside:

* Canvas elements
* Images
* Client-only interfaces
* Complex JavaScript widgets

Important facts should exist as actual text in the HTML.

---

# 42. Crawler Access Policy

Do not unnecessarily block legitimate crawlers.

Review:

* robots.txt
* CDN rules
* WAF rules
* Firewall rules
* Rate limiting
* Hosting configuration
* Server configuration

However, crawler accessibility must not compromise security.

Private and sensitive information must remain protected.

Never expose:

* Authentication data
* Private user information
* API keys
* Secrets
* Internal administration tools
* Private documents

SEO accessibility applies only to content intended to be public.

---

# 43. HTTP Headers

Review headers relevant to SEO and crawling.

Ensure appropriate:

```txt
Content-Type
Cache-Control
ETag
Last-Modified
Content-Language
```

Avoid accidental headers that prevent crawling or indexing.

Review:

```txt
X-Robots-Tag
```

Ensure it does not accidentally apply `noindex` to public content.

---

# 44. Language and International SEO

If the website supports multiple languages:

Use:

```html
<html lang="en">
```

For multilingual websites, implement:

* `hreflang`
* Language-specific URLs
* Self-referencing hreflang
* Correct canonical URLs

Example:

```html
<link
    rel="alternate"
    hreflang="en"
    href="https://example.com/en/page"
/>

<link
    rel="alternate"
    hreflang="fil"
    href="https://example.com/fil/page"
/>

<link
    rel="alternate"
    hreflang="x-default"
    href="https://example.com/page"
/>
```

Do not use automatic IP-based redirects that prevent crawlers from accessing alternative language versions.

---

# 45. Local SEO

If the website represents a local business:

Implement:

* LocalBusiness structured data
* Accurate business name
* Address
* Phone
* Opening hours
* Geo information where appropriate
* Google Business Profile
* Consistent business information

Create useful location pages only when they represent real locations or genuinely useful geographic content.

Do not create hundreds of fake location pages.

---

# 46. Author and Publisher Information

For content websites:

Clearly identify:

* Author
* Publisher
* Publication date
* Last updated date

Where appropriate, create author pages.

Example:

```txt
/articles/example-article
/authors/author-name
```

Author pages should contain meaningful information.

---

# 47. Date Metadata

Use accurate dates.

For articles:

```txt
Published:
2026-07-28

Updated:
2026-07-28
```

Do not modify dates without meaningful content updates.

Do not manipulate freshness signals.

---

# 48. Accessibility as SEO

The website must follow strong accessibility practices.

Implement:

* Semantic HTML
* Keyboard navigation
* Accessible forms
* Proper labels
* Alt text
* Sufficient contrast
* Focus states
* ARIA only when necessary

Accessibility improvements often improve:

* Crawlability
* Content structure
* User experience
* Usability

---

# 49. Analytics and Search Monitoring

Set up:

* Google Search Console
* Bing Webmaster Tools
* Analytics platform
* Server logs where available

Monitor:

* Indexed pages
* Crawled pages
* Search queries
* Search impressions
* Search clicks
* CTR
* Crawl errors
* Core Web Vitals
* Sitemap status
* Manual actions
* Security issues

Review SEO health regularly.

---

# 50. Server Log Analysis

Where infrastructure permits, analyze server logs.

Identify:

* Googlebot activity
* Bingbot activity
* Crawl frequency
* 404 errors
* 500 errors
* Crawl waste
* Unexpected bot traffic
* Important pages not being crawled

Use logs to identify real crawler behavior.

Do not rely only on assumptions.

---

# 51. SEO Testing

Before production deployment, test:

### Crawlability

* Can Googlebot access the page?
* Can Bingbot access the page?
* Are important resources accessible?

### Indexability

* Is the page indexable?
* Is there an accidental noindex?
* Is canonical correct?

### Discoverability

* Is the page internally linked?
* Is it in the sitemap?

### Rendering

* Is important content present in HTML?
* Does content require JavaScript?

### Metadata

* Unique title?
* Unique description?
* Correct canonical?

### Structured Data

* Valid JSON-LD?
* Matches visible content?

### Performance

* Fast initial response?
* Good Core Web Vitals?

### Mobile

* Responsive?
* Same important content?

---

# 52. SEO Deployment Checklist

Before deployment:

```txt
[ ] HTTPS enabled
[ ] HTTP redirects to HTTPS
[ ] Canonical domain configured
[ ] robots.txt available
[ ] XML sitemap available
[ ] Sitemap submitted
[ ] Canonicals implemented
[ ] Titles implemented
[ ] Meta descriptions implemented
[ ] Open Graph implemented
[ ] Twitter/X cards implemented
[ ] Structured data implemented
[ ] Breadcrumbs implemented
[ ] Internal linking implemented
[ ] 404 page implemented
[ ] Correct HTTP status codes
[ ] No accidental noindex
[ ] No accidental robots.txt blocking
[ ] Mobile responsive
[ ] Core Web Vitals optimized
[ ] Images optimized
[ ] Alt text implemented
[ ] SSR/SSG implemented where appropriate
[ ] Important content available without interaction
[ ] Search Console configured
[ ] Bing Webmaster Tools configured
[ ] Analytics configured
```

---

# 53. Continuous SEO Monitoring

SEO is not a one-time implementation.

The application should be periodically checked for:

* New crawl errors
* Broken links
* New orphan pages
* Duplicate metadata
* Duplicate content
* Indexation problems
* Sitemap errors
* Performance regressions
* Mobile usability issues
* Structured data errors
* Server errors

Create automated monitoring where practical.

---

# 54. SEO Architecture Rule

SEO must be treated as a core application feature.

Do not add SEO as an afterthought.

The architecture should make it easy to:

* Create indexable pages
* Generate metadata
* Generate canonical URLs
* Generate structured data
* Generate sitemap entries
* Create internal links
* Manage redirects
* Control indexing

SEO logic should be reusable and centralized.

---

# 55. Recommended Next.js Implementation

If the project uses Next.js App Router, use the built-in SEO capabilities.

Implement:

```txt
app/
├── layout.tsx
├── robots.ts
├── sitemap.ts
├── manifest.ts
├── opengraph-image.tsx
├── twitter-image.tsx
```

For dynamic content:

```txt
app/
├── blog/
│   └── [slug]/
│       ├── page.tsx
│       └── opengraph-image.tsx
```

Use:

```ts
export async function generateMetadata()
```

for dynamic metadata.

Use:

```ts
export default function sitemap()
```

for sitemap generation where appropriate.

Use:

```ts
export default function robots()
```

for robots configuration.

Prefer framework-native metadata APIs over manually injecting duplicate metadata.

---

# 56. SEO URL Strategy

All public content should have a stable URL.

Examples:

```txt
/
 /about
 /services
 /services/service-name
 /blog
 /blog/article-name
 /guides
 /guides/topic-name
```

Avoid changing URLs unnecessarily.

Once a page is indexed and receives external links, treat its URL as permanent.

---

# 57. SEO Content Discovery Strategy

Every new piece of important content should have multiple discovery paths.

For example:

```txt
Homepage
    ↓
Category
    ↓
Article
    ↓
Related Articles
    ↓
Topic Cluster
```

Additionally:

```txt
XML Sitemap
    ↓
Search Engine Discovery
```

And:

```txt
External Links
    ↓
Search Engine Discovery
```

The goal is to avoid creating isolated content.

---

# 58. SEO Golden Rule

The website should be built so that a crawler can enter the site with no prior knowledge and understand:

1. What the website is.
2. Who owns it.
3. What the website is about.
4. What every page is about.
5. How pages relate to each other.
6. Which pages are most important.
7. Which pages are canonical.
8. Which pages should be indexed.
9. Which pages should not be indexed.
10. When content was published.
11. When content was updated.
12. Who created the content.
13. How to discover additional content.
14. How to navigate the entire public website.

The site should be understandable through:

* HTML
* Links
* Metadata
* Structured data
* XML sitemaps
* Semantic markup
* Clear information architecture

Do not rely on visual appearance alone.

---

# 59. Final Claude Implementation Instruction

When implementing this project:

> Treat SEO as a first-class architectural requirement.
>
> Every public page must be designed with crawlability, indexability, discoverability, semantic clarity, performance, accessibility, and long-term search visibility in mind.
>
> Before creating any new public route, determine:
>
> 1. Should this URL be indexable?
> 2. What is its canonical URL?
> 3. What is its unique title?
> 4. What is its unique description?
> 5. What structured data applies?
> 6. How will crawlers discover it?
> 7. How will users navigate to it?
> 8. Which pages should link to it?
> 9. Should it appear in the sitemap?
> 10. Does it provide enough unique value to deserve indexing?
>
> Never create an indexable page solely for SEO manipulation.
>
> Never block legitimate search engine crawling unless there is a specific technical or security reason.
>
> Never expose private or sensitive information to crawlers.
>
> Never rely exclusively on client-side JavaScript for critical SEO content.
>
> Never generate duplicate or thin pages at scale.
>
> Always prefer clean architecture, semantic HTML, useful content, fast performance, and genuine user value.
>
> The final application should be technically optimized so that legitimate search engines and search/AI discovery systems can efficiently discover, crawl, render, understand, and index all appropriate public content.

---

# 60. Definition of Done

SEO implementation is considered complete only when:

* Every public page has a clear indexing strategy.
* Every indexable page has a canonical URL.
* Every indexable page has unique metadata.
* Important pages are internally linked.
* No important pages are orphaned.
* XML sitemaps contain only valid canonical indexable URLs.
* robots.txt is valid and does not accidentally block important resources.
* No accidental noindex directives exist.
* JavaScript does not hide critical content from crawlers.
* Structured data is valid and accurate.
* Open Graph metadata is implemented.
* Images are optimized and accessible.
* URLs are clean and stable.
* HTTP status codes are correct.
* Redirects are clean.
* Mobile experience is optimized.
* Core Web Vitals are monitored.
* Search Console is configured.
* Bing Webmaster Tools is configured.
* SEO health checks are automated where practical.
* The application can scale without creating uncontrolled crawl or index problems.
* The website provides genuine, useful, original content.

The final objective is not simply to "add SEO."

The final objective is to build a website that is **technically accessible, semantically understandable, highly discoverable, genuinely useful, and maximally eligible for indexing across modern search ecosystems**.
