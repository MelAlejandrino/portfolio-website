# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Personal portfolio for Mel Alejandrino, a web developer — designed as a classic
newspaper. Single page, Next.js 16 (App Router),
Tailwind CSS v4, TypeScript.

## Commands

```bash
npm run dev      # Start dev server on http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

- **App Router** (`app/`) — single route (`app/page.tsx`) that renders `PortfolioView`. It sets `revalidate = 86400` so the masthead's edition date stays current.
- **Feature module** (`src/features/portfolio/`):
  - `PortfolioView.tsx` — the whole publication: front page, work, profile, employment ledger, technical index, notes, back page, footer. Server component; local presentational helpers (`SectionHead`, `StoryHeading`, `StoryMeta`, `StoryLink`, `LedgerEntry`, `NoteEntry`) live here.
  - `portfolio.data.ts` — all content: publication metadata, navigation, lead story, projects, positions, notes, technical index, facts, contact.
  - `portfolio.types.ts` — interfaces (`Publication`, `Project`, `Position`, `Note`, `IndexRow`, `Fact`, `ContactEntry`, `NavItem`).
  - `components/` — `Masthead` (server), `NavStrip` (client), `Figure` (server), `Reveal` (client), `Loader` (client).
  - `index.ts` — barrel export.
- **`@/*` path alias** maps to `./src/*`.
- **Route entries are thin** — `app/page.tsx` renders the feature view and nothing else.
- **Only three client components.** `NavStrip` (active section), `Reveal` (scroll reveal), `Loader` (session intro). Everything else is server-rendered.

## Styling

- **Design system** — `DESIGN_SYSTEM.md` (THE BROADSHEET) is the source of truth for colour, type, rules, layout, and components. `app/globals.css` is the implementation.
- **Tailwind CSS v4** — `@import "tailwindcss"` plus an `@theme` block in `globals.css` (no `tailwind.config`).
- **Colour tokens**: `paper`, `paper-raised`, `paper-deep`, `ink`, `ink-soft`, `ink-faint`, `rule`, `rule-soft`, `accent`. Use these, not raw hex. The burgundy `accent` is reserved for section kickers, the active nav folio, and link hover.
- **Fonts** — EB Garamond (`font-headline`) for headlines, deks, and pull quotes; Source Serif 4 (`font-text`) for body copy; the system Arial/Helvetica stack (`font-meta`) for all metadata. Both webfonts load via `next/font/google`. **Do not introduce a geometric or "designer" sans** — that breaks the whole concept.
- **Utility classes** in `globals.css`: `.meta`, `.meta-sm`, `.prose-editorial`, `.drop-cap`, `.columns-editorial`, `.rule-thick`, `.rule-double`, `.newsprint`, `.plate`, `.link-editorial`, `.link-read`, `.no-print`.
- **No shadows, no gradients, no rounded corners.** Depth is paper tone plus 1px/2px rules. `border-radius: 0` is a rule of the system, not an oversight.
- **Paper texture** — a fixed SVG turbulence grain on `body::before` at 5.5%. It must stay near-invisible. Note: a *percent-encoded* SVG data URI gets dropped by the Tailwind v4 CSS pipeline; the grain is base64 for that reason.
- **Animations** — CSS keyframes only (`ink-rise`, `ink-fade`, `rule-draw`). No framer-motion; it was removed deliberately. `Reveal` adds the animation on intersection and never pre-hides content, so a page with dead JS still reads.

## Conventions

- `interface` for object shapes, not `type`.
- Named `function` declarations for exported components — except `PortfolioView`, which is an arrow function.
- Data is static. No API calls, no client fetching. All content lives in `portfolio.data.ts`.
- Figures take an optional `image`; without one they print a typographic plate. To add real screenshots, drop files in `public/` and set `image` on the project.
- **SEO is intentional** — the layout has an extensive `Metadata` export and JSON-LD (`Person`, `WebSite`, `ProfilePage`). Preserve these during refactors. `app/opengraph-image.tsx` renders the masthead; satori has no `double` border style, so that rule is drawn with two divs.
- The `Loader` is session-once via `sessionStorage`, ~1.4s total. Keep it short.
- **tsconfig `jsx`** — `"react-jsx"`, not Next's default `"preserve"`. Intentional; do not change.
