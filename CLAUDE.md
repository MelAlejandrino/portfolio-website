# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Personal portfolio site for Mel Alejandrino, a frontend developer. Single-page app built with Next.js 16 (App Router), Tailwind CSS v4, and TypeScript.

## Commands

```bash
npm run dev      # Start dev server on http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

- **App Router** (`app/`) — single route entry (`app/page.tsx`) that renders `PortfolioView`.
- **Feature module** (`src/features/portfolio/`) — all portfolio logic and UI lives here:
  - `PortfolioView.tsx` — main page composition (hero, experience, projects, stack, footer) plus the local `ProjectCard`
  - `portfolio.data.ts` — static content (experiences, projects, skill groups)
  - `portfolio.types.ts` — TypeScript interfaces (`Experience`, `Project`, `SkillGroup`)
  - `components/` — `Hero`, `Loader`
  - `index.ts` — barrel export
- **`@/*` path alias** maps to `./src/*` (configured in `tsconfig.json`).
- **Route entries are thin** — `app/page.tsx` imports and renders the feature view, nothing else.

## Styling

- **Design system** — `DESIGN_SYSTEM.md` (WINDRUNNER) is the source of truth for color, type, spacing, and layout patterns. Section wrappers, cards, and rows follow §12–17 verbatim.
- **Tailwind CSS v4** — uses `@import "tailwindcss"` and `@theme` block in `globals.css` (not `tailwind.config`).
- **Fonts** — Fraunces (`--font-display`) for headings, Geist (`--font-geist-sans`) for body, Geist Mono (`--font-geist-mono`) for periods, labels, and skill lists. All loaded via `next/font/google`.
- **Animations** — custom keyframes (`section-enter`, `loader-line-draw`, `loader-fade-in`) with `.section-entrance` utility class. Respects `prefers-reduced-motion`. No framer-motion — §18's motion system is approximated with these CSS keyframes and fixed `animationDelay` values.
- **Color tokens**: `background`, `foreground`, `primary` (#455548, the §2 forest green), `on-primary`, `primary-display` (#2f5d3a — hero title only, a deliberate deviation from the WINDRUNNER palette), `muted`, `on-surface`, `on-surface-variant`, `outline`, `outline-variant`, `surface-container-low`, `surface-container-high` — use these, not raw hex. Prefer the `on-surface*` pair over `foreground`/`muted` in new markup.
- **No shadows** — depth is tonal layering plus 1px `border-outline-variant` borders (§5).

## Conventions

- `interface` for object shapes (props, data types), not `type`.
- Components use named `function` declarations (not arrow functions) for exported components — except `PortfolioView` which is an arrow function.
- Data is static (no API calls, no React Query). All content is in `portfolio.data.ts`.
- The `Loader` component is `"client"` and uses `sessionStorage` to show the intro animation only once per session.
- **SEO is intentional** — the layout has extensive `Metadata` export and JSON-LD structured data. Preserve these during refactors.
- **tsconfig `jsx`** — set to `"react-jsx"` (not Next.js's default `"preserve"`). This is intentional; do not change it.
