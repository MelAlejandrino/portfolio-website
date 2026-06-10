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
npm run test     # Run Playwright e2e tests (starts dev server automatically)
```

## Architecture

- **App Router** (`app/`) — single route entry (`app/page.tsx`) that renders `PortfolioView`.
- **Feature module** (`src/features/portfolio/`) — all portfolio logic and UI lives here:
  - `PortfolioView.tsx` — main page composition (hero, experience, projects, skills sections)
  - `portfolio.data.ts` — static content (experiences, projects, skill groups)
  - `portfolio.types.ts` — TypeScript interfaces (`Experience`, `Project`, `SkillGroup`)
  - `components/` — `Hero`, `Section`, `Loader`, `SkillList`, `ExperienceList` (see note below on unused components)
  - `index.ts` — barrel export
- **`@/*` path alias** maps to `./src/*` (configured in `tsconfig.json`).
- **Route entries are thin** — `app/page.tsx` imports and renders the feature view, nothing else.

## Styling

- **Tailwind CSS v4** — uses `@import "tailwindcss"` and `@theme` block in `globals.css` (not `tailwind.config`). Custom properties defined with oklch values.
- **Fonts** — Bricolage Grotesque (`--font-display`) for headings, Geist (`--font-geist-sans`) for body, Geist Mono (`--font-geist-mono`). All loaded via `next/font/google`.
- **Animations** — custom keyframes (`section-enter`, `loader-line-draw`, `loader-fade-in`) with `.section-entrance` utility class. Respects `prefers-reduced-motion`.
- **Color tokens**: `background`, `foreground`, `surface`, `primary`, `accent`, `muted` — use these, not raw oklch values.

## Conventions

- `interface` for object shapes (props, data types), not `type`.
- Components use named `function` declarations (not arrow functions) for exported components — except `PortfolioView` which is an arrow function.
- Data is static (no API calls, no React Query). All content is in `portfolio.data.ts`.
- The `Loader` component is `"client"` and uses `sessionStorage` to show the intro animation only once per session.
- **Unused components** — `SkillList.tsx`, `ExperienceList.tsx`, and `Section.tsx` exist but are not imported. `PortfolioView` inlines equivalent markup directly. These are kept for potential future use; do not delete or refactor into `PortfolioView` without checking intent.
- **SEO is intentional** — the layout has extensive `Metadata` export and JSON-LD structured data. Preserve these during refactors.
- **tsconfig `jsx`** — set to `"react-jsx"` (not Next.js's default `"preserve"`). This is intentional; do not change it.
