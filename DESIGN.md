# Design

## Color

Restrained strategy — neutrals carry the surface, typography carries the design, violet carries the brand at ~10%. Pure white canvas, no tinted warmth.

### Palette

```css
:root {
  --color-bg:      oklch(1.000 0.000 0);       /* pure white */
  --color-surface: oklch(0.965 0.000 0);        /* barely-there gray — cards, panels */
  --color-ink:     oklch(0.145 0.005 270);      /* near-black, whisper of violet coolness */
  --color-primary: oklch(0.520 0.160 270);      /* deep violet — links, selected states, key moments */
  --color-accent:  oklch(0.450 0.120 185);      /* deep teal — badges, hover states, the unexpected note */
  --color-muted:   oklch(0.480 0.003 270);      /* secondary text, captions — cool-toned gray */
}
```

### Roles

| Token | Usage | Constraints |
|---|---|---|
| `--color-bg` | Page background | Pure white. No hidden warmth. |
| `--color-surface` | Cards, panels, raised sections | Subtle distinction from bg. Use sparingly — cards are not the default layout. |
| `--color-ink` | Body text, headings | ≥7:1 contrast vs bg. Slight violet undertone for temperature. |
| `--color-primary` | Links, active nav, selection, key accents | ≤10% of surface area. Text on primary fills uses white. |
| `--color-accent` | Badges, status pills, hover accents, callout rules | Distinct from primary in hue and lightness. Text on accent fills uses white. |
| `--color-muted` | Secondary text, captions, metadata | ≥4.5:1 contrast vs bg. |

### Color strategy

Restrained. Neutrals with one accent at ~10%. The personality comes from type, not from color spread. Primary and accent are used deliberately — never both competing for attention in the same viewport region.

### Dark mode

Not in scope for initial DESIGN.md. The light palette above is the default. Dark mode can be added later as a variant.

## Typography

### Font stack

| Role | Font | Style |
|---|---|---|
| Display / Headings | Bricolage Grotesque | Condensed, confident, angular. Designer character. |
| Body | Geist Sans | Clean geometric sans. Readable at length, doesn't compete with Bricolage. |
| Mono | Geist Mono | Code blocks, inline code, data. |

```css
--font-display: 'Bricolage Grotesque', sans-serif;
--font-body: 'Geist', sans-serif;
--font-mono: 'Geist Mono', monospace;
```

Bricolage Grotesque is available on Google Fonts. Geist and Geist Mono ship with the Next.js scaffold via `next/font/google`.

### Scale

Modular scale with a 1.25 ratio. Fluid `clamp()` for headings.

| Step | Size | Usage |
|---|---|---|
| xs | 0.75rem (12px) | Captions, legal, fine print |
| sm | 0.875rem (14px) | Secondary body, labels, metadata |
| base | 1rem (16px) | Body text |
| md | 1.25rem (20px) | Subheadings, lede paragraphs |
| lg | 1.563rem (25px) | H4 |
| xl | 1.953rem (31px) | H3 |
| 2xl | 2.441rem (39px) | H2 |
| 3xl | 3.052rem (49px) | H1 |
| 4xl | clamp(3.052rem, 5vw, 5rem) | Display / hero |

### Hierarchy rules

- Headings use Bricolage Grotesque with `text-wrap: balance`
- Body uses Geist Sans with `text-wrap: pretty` on long prose
- Line length capped at 65–75ch for body text
- Light-on-dark (if added later): add 0.05–0.1 to line-height
- `letter-spacing` on display headings ≥ -0.04em (never tighter)
- No all-caps body copy. Uppercase reserved for short labels (≤4 words) and badges
- Weight contrast ≥300 between heading and body (e.g., Bricolage 600–700 vs Geist 400)

## Spacing

```css
--space-xs:  0.25rem;   /* 4px  — tight grouping */
--space-sm:  0.5rem;    /* 8px  — inline gaps */
--space-md:  1rem;      /* 16px — default separation */
--space-lg:  1.5rem;    /* 24px — section padding */
--space-xl:  2rem;      /* 32px — section gaps */
--space-2xl: 3rem;      /* 48px — major section breaks */
--space-3xl: 4rem;      /* 64px — page-level breathing room */
```

Section-level spacing uses fluid `clamp()` on larger viewports. Vary rhythm intentionally — tight groupings, generous separations.

## Layout

- **Grid**: `repeat(auto-fit, minmax(280px, 1fr))` for responsive grids without breakpoints
- **Max width**: Content constrained to 72rem (1152px) with centered alignment
- **Line length**: 65–75ch for body prose
- **Cards**: Used only when they're the right affordance — not the default layout element. Nested cards are never used
- **Asymmetry**: Allowed and encouraged for emphasis. Grid doesn't mean symmetry

## Motion

Subtle and refined. Motion is present but never calls attention to itself.

- Page-load: gentle fade-up reveal for hero content (200–400ms, ease-out)
- Section reveals: optional subtle entrance on scroll, gated by `prefers-reduced-motion`
- Transitions: smooth but fast (150–250ms ease-out for hover states, 200–300ms for page transitions)
- No bounce, no elastic, no spring physics
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo) as the default curve
- All motion respects `@media (prefers-reduced-motion: reduce)` — instant transitions as fallback
- Content is never gated on animation. Default state is fully visible; animation enhances it

## Borders & Radii

- Border radius: `0.375rem` (6px) default, `0.5rem` (8px) for cards, `9999px` for pills
- Borders: 1px solid, using surface or muted color. No side-stripe borders (left/right >1px as accent)
- No glassmorphism. No gradient text.

## Components

### Links

- Primary color, underlined on hover. Standalone meaning in text — "View project" not "Click here"
- External links: subtle icon indicator

### Buttons

- Verb + object labels: "View work" not "OK"
- Primary: filled primary bg, white text
- Secondary: 1px border, transparent bg, ink text
- Hover: 150ms ease-out transition

### Badges / Tags

- Accent bg at low opacity, accent text. Small, 0.75rem, pill-shaped.

### Nav

- Minimal. Ink text, primary for active state. No background until scroll (if sticky).

## Imagery

Portfolio surfaces require imagery — project screenshots, previews, or representative visuals. A text-only portfolio fails the brief. Use real project assets where available; Unsplash where needed. Alt text is part of the voice.
