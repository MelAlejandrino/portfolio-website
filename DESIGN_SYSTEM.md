---
name: WINDRUNNER
colors:
  surface: '#fcf9f4'
  surface-dim: '#dcdad5'
  surface-bright: '#fcf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ee'
  surface-container: '#f0ede9'
  surface-container-high: '#ebe8e3'
  surface-container-highest: '#e5e2dd'
  on-surface: '#1c1c19'
  on-surface-variant: '#434843'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f3f0eb'
  outline: '#737873'
  outline-variant: '#c3c8c1'
  surface-tint: '#526255'
  primary: '#2e3e32'
  on-primary: '#ffffff'
  primary-container: '#455548'
  on-primary-container: '#b7c9b8'
  inverse-primary: '#b9cbbb'
  secondary: '#5f5e5a'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfda'
  on-secondary-container: '#63635f'
  tertiary: '#4b3437'
  on-tertiary: '#ffffff'
  tertiary-container: '#644a4e'
  on-tertiary-container: '#debbc0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e7d6'
  primary-fixed-dim: '#b9cbbb'
  on-primary-fixed: '#101f14'
  on-primary-fixed-variant: '#3b4b3e'
  secondary-fixed: '#e5e2dd'
  secondary-fixed-dim: '#c9c6c1'
  on-secondary-fixed: '#1c1c19'
  on-secondary-fixed-variant: '#474743'
  tertiary-fixed: '#fedade'
  tertiary-fixed-dim: '#e1bec2'
  on-tertiary-fixed: '#2a161a'
  on-tertiary-fixed-variant: '#594044'
  background: '#fcf9f4'
  on-background: '#1c1c19'
  surface-variant: '#e5e2dd'
typography:
  display-lg:
    fontFamily: Fraunces
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-md:
    fontFamily: Fraunces
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-technical:
    fontFamily: Geist Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 1px
  margin-sm: 12px
  margin-md: 24px
  panel-padding: 16px
  stack-gap: 8px
---

# WINDRUNNER Design System

> This is the single source of truth for the WINDRUNNER design system. **Part I** defines the visual foundation — brand, color, typography, spacing, and base components (the token layer). **Part II** documents the systematic layout and interaction patterns used to build pages from those tokens (the implementation layer). Token values live in the frontmatter above and are referenced throughout by semantic name.

---

# Part I — Visual Foundation

## 1. Brand & Style

This design system is built for products that balance technical precision with editorial elegance. The brand personality is that of a "specialized instrument"—reliable, calm, and highly focused.

The aesthetic identity is defined by **Technical Minimalism** and **Subtle Brutalism**. It rejects soft shadows and decorative flourishes in favor of structural integrity, hard-edge alignment, and tonal layering. The experience should feel like working with high-end archival equipment: tactile through contrast and layout rather than physical metaphor. It suits users who value a high-density, distraction-free environment that prioritizes content and data over chrome.

## 2. Colors

The palette is rooted in an "Archival Paper" base, providing a warm, low-fatigue background that distinguishes the product from typical cold-gray software.

- **Primary & Accent:** A Muted Forest Green (#455548) is used sparingly for primary actions, success states, and active selection markers.
- **Surface Hierarchy:** Depth is communicated through a stepped series of parchment-toned neutrals. As elements move "closer" to the user, they transition from the background color to progressively cooler, darker neutral tones (#F6F3EE down to #E5E2DD).
- **Typography & Borders:** Text is anchored by a near-black ink color (#1C1C19). Borders use a structural gray-green (#C3C8C1) to define the workspace without creating visual noise.

Exact token values are defined in the `colors` block of the frontmatter.

## 3. Typography

The typography system creates a "Technical Editorial" feel by pairing a high-contrast serif with precise, modern sans-serifs.

- **Display (Fraunces):** Reserved for high-level headers, titles, and branding moments. It adds a layer of sophisticated authority.
- **UI (Geist):** Used for the majority of the interface, including body text and navigational elements. Its technical, clean structure ensures legibility at small sizes.
- **Technical (Geist Mono):** Essential for any fixed-width or numeric data—IDs, timestamps, file paths, code, and metadata. The monospaced nature ensures that columns of data remain perfectly aligned, reinforcing the "specialized instrument" feel.

Exact type tokens (size, weight, line-height, letter-spacing) are defined in the `typography` block of the frontmatter.

## 4. Layout & Spacing

This design system utilizes a **Fixed Panel Grid** model. The interface is composed of resizable rectangular modules separated by 1px borders rather than floating, free-form content.

- **The 4px Rule:** All internal spacing (padding, gaps) must be a multiple of 4px to maintain a rigid, calculated rhythm.
- **Panel Logic:** Instead of floating cards, the layout relies on docked panels. Each panel has a consistent internal padding of 16px.
- **Tight Density:** Information density should be high but organized. Use a 1px "structural border" rather than negative space to separate distinct functional zones.

## 5. Elevation & Depth

In this design system, depth is purely structural and tonal. **Shadows are strictly prohibited.**

1.  **Tonal Layering:** The primary method of showing hierarchy. A "Level 1" surface sits on the background; a "Level 2" surface appears as an inset or an overlay.
2.  **Thin Outlines:** All interactive elements and panels are defined by a 1px solid border (#C3C8C1).
3.  **Active States:** Selection is indicated by a shift to the Primary Accent color or a 2px interior stroke, never by a lift or drop shadow.
4.  **Glass Effects:** Modals may use a very subtle backdrop blur, but the container itself must remain opaque and bordered to maintain the "Subtle Brutalist" aesthetic.

> **Note:** The single exception to the no-shadow rule is the Floating Action Button (see §14.5), which may use `shadow-sm` because it floats above the structural grid.

## 6. Shapes

The shape language is disciplined and sharp.

- **Radius:** A universal 4px radius is applied to buttons, input fields, and small containers. This provides just enough softness to feel modern while maintaining the rigid, "instrument" aesthetic.
- **Hard Edges:** Large layout panels and the main application window should have 0px or 2px radii to emphasize the structural grid.
- **Consistency:** Avoid pill-shaped buttons; all interactive targets should be rectangular with the standard 4px corner.

## 7. Iconography

- Icons should be 1px stroke weight, geometric, and non-rounded, matching the structural line weight of borders.
- Prefer outline icons over filled; reserve fills for active/selected states, mirroring the accent-color logic.
- Keep icons on a consistent square grid so they align with the 4px spacing rhythm.

## 8. Base Components

### 8.1 Buttons
- **Primary:** Solid #455548 background, #FCF9F4 text, 4px radius. No gradient.
- **Secondary:** Transparent background, 1px border (#C3C8C1), #1C1C19 text.
- **Ghost:** No border or background unless hovered; uses Geist Mono for a more technical feel in utility/toolbars.

### 8.2 Input Fields
- **Text Inputs:** #F6F3EE background, 1px border. On focus, the border thickens to 2px #455548. Use Geist Mono for technical or numeric data inputs.
- **Checkboxes:** Square with 2px radius. When checked, uses a solid #455548 fill with a white checkmark.

### 8.3 Data Tables & Lists
- Use Geist Mono for all values, IDs, and numeric fields so columns stay aligned.
- Use `label-caps` for column headers and section labels.
- Alternating row stripes (zebra striping) using Surface Level 1 and Background for high-density data legibility.

### 8.4 Cards & Panels
- Panels are never floating. They are "docked" units with 1px #C3C8C1 borders.
- Header bars for panels use Surface Level 2 (#F0EDE8) to differentiate from the content area.

### 8.5 Numeric & Status Readouts
- Any live value, counter, coordinate, or status display uses Geist Mono at `body-md` size, housed in a Surface Level 2 container.
- Keep readouts fixed-width where possible so values don't shift the layout as they update.

## 9. Applying the System to Domain-Specific UI

When a project introduces components not covered above (specialized controls, viewers, editors, dashboards, or any bespoke widget), derive them from the same principles rather than inventing new visual language:

- **Structure over decoration:** define regions with 1px #C3C8C1 borders and tonal surface steps, never shadows or floating cards.
- **Mono for machine data:** any technical, numeric, or fixed-format value uses Geist Mono; prose and labels use Geist; only headline moments use Fraunces.
- **Accent sparingly:** #455548 marks the primary action, active selection, or success—nothing else competes for it.
- **4px rhythm:** every offset, gap, and padding value resolves to a multiple of 4px.
- **Sharp, tactile controls:** 1px geometric icons, rectangular targets, 4px radius, and state changes expressed through color and stroke weight rather than motion or elevation.

---

# Part II — Layout & Interaction Patterns

> This section documents the systematic layout and interaction patterns used across single-page sites. It builds directly on the tokens and base components in Part I; where it references colors, typefaces, or spacing, those are the semantic tokens defined in the frontmatter and Part I.

## 10. Pattern Philosophy

The pattern follows **Technical Minimalism**: a desktop-centric, precision-engineered aesthetic with structural clarity, hard-edge alignment, and zero ornamental decoration. Elevation is expressed through tonal layering and thin outlines rather than drop shadows. The overall rhythm is calculated, calm, and utilitarian.

## 11. Page Structure

A single-page site is composed of sequentially stacked `<section>` elements wrapped in a `<main>` tag.

```tsx
<main>
  <Hero />
  <SectionA />
  <SectionB />
  ...
</main>
```

Sections are ordered by narrative priority (hero → features → details → limitations → process → FAQ → footer).

## 12. Section Anatomy

Every content section follows the same internal structure:

1. **Section wrapper** — padded container with a top border separator
2. **Intro block** — heading, optional description
3. **Content block** — the primary layout (grid, list, etc.)

### 12.1 Section Wrapper

```tsx
<section className="py-24 px-6 border-t border-outline-variant">
  <div className="max-w-5xl mx-auto">
    ...
  </div>
</section>
```

- `py-24` — vertical rhythm (96px)
- `px-6` — page gutter (24px)
- `border-t border-outline-variant` — subtle section separator
- Inner container: `max-w-5xl mx-auto` — centered content column

**Exception — Hero section:** Uses `min-h-screen flex items-center justify-center` instead of `py-24` to fill the viewport.

**Exception — Alternate surface section:** Occasionally a section swaps in `bg-surface-container-low` for tonal differentiation while keeping the same border and padding.

### 12.2 Intro Block

Every section (except Hero and Footer) begins with an animated intro block containing a heading and optional description.

```tsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
  className="mb-12"
>
  <h2 className="text-3xl md:text-4xl font-semibold text-on-surface font-fraunces mb-3">
    {title}
  </h2>
  <p className="text-on-surface-variant max-w-xl">{description}</p>
</motion.div>
```

- Heading: responsive size (`text-3xl md:text-4xl`), semantic text color
- Description: constrained to `max-w-xl` to preserve readability
- Spacing below intro: `mb-12` on desktop sections, `mb-10` on denser sections

### 12.3 Footer Section

The footer uses a horizontal layout on desktop and stacks on mobile:

```tsx
<footer className="py-12 px-6 border-t border-outline-variant">
  <motion.div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-on-surface-variant">
    ...
  </motion.div>
</footer>
```

- Reduced vertical padding (`py-12`)
- `flex-col md:flex-row` with `items-center justify-between`

## 13. Content Width System

Three width tiers govern content density:

| Tier | Class | Usage |
|------|-------|-------|
| Full content | `max-w-5xl` | Sections, grids, general content |
| Dense list | `max-w-3xl` | Feature rows, FAQ, limitations |
| Reading measure | `max-w-xl` | Descriptions, body copy |

The outer page padding is `px-6` (24px). All content containers are centered with `mx-auto`.

## 14. Spacing Rhythm

Spacing follows a strict 4px base unit (see §4).

| Token | Value | Usage |
|-------|-------|-------|
| Page gutter | `px-6` (24px) | All section side padding |
| Section vertical | `py-24` (96px) | Standard section padding |
| Footer vertical | `py-12` (48px) | Footer padding |
| Intro bottom | `mb-12` (48px) / `mb-10` (40px) | Space after heading block |
| Card internal | `gap-3` (12px) | Between icon, title, description |
| Grid gap | `gap-4` (16px) / `gap-8` (32px) | Between grid children |
| List row | `py-5` (20px) | Vertical padding inside rows |
| List divider | `border-b` | Between rows, `last:border-b-0` to remove final line |

## 15. Typography Scale (Usage)

Reference the `typography` frontmatter and §3 for exact token values. The patterns below describe usage, not definitions.

### 15.1 Headings

- **Section heading (H2):** `text-3xl md:text-4xl font-semibold text-on-surface font-fraunces mb-3`
- **Card / item heading (H3):** `text-base font-semibold text-on-surface`
- **Large step heading:** `text-lg font-semibold text-on-surface`

### 15.2 Body Text

- **Description / lead:** `text-on-surface-variant max-w-xl`
- **Card / row description:** `text-sm text-on-surface-variant leading-relaxed`
- **Body copy:** `text-base text-on-surface-variant leading-relaxed`

### 15.3 Labels & Metadata

- **Button / input label:** `text-sm font-medium`
- **Small tag / badge:** `text-xs font-medium tracking-widest uppercase`
- **Version badge:** `text-[11px] font-mono`

### 15.4 Font Family Assignment

- **Display / headings:** Fraunces (serif, editorial)
- **UI / body / labels:** Geist (sans, technical)
- **Mono / badges:** Geist Mono

## 16. Grid Systems

Two primary grid layouts are used for content sections.

### 16.1 Two-Column Card Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {items.map(item => <Card key={item.title} {...item} />)}
</div>
```

- Used for: feature highlights, symmetric content
- Gap: `gap-4` (16px)

### 16.2 Three-Column Step Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {steps.map((step, idx) => <Step key={step.number} {...step} index={idx} />)}
</div>
```

- Used for: sequential processes, numbered steps
- Gap: `gap-8` (32px)

## 17. Component Patterns

These are the composed, page-level implementations of the base components in §8.

### 17.1 Feature Card

Used inside two-column grids. Each card is a self-contained block with icon, title, and description.

```tsx
<div className="flex flex-col gap-3 p-6 bg-surface-container-low border border-outline-variant rounded-sm transition-colors hover:border-outline">
  <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-surface-container-high text-primary">
    {icon}
  </div>
  <h3 className="text-base font-semibold text-on-surface">{title}</h3>
  <p className="text-sm text-on-surface-variant leading-relaxed">{description}</p>
</div>
```

- Padding: `p-6`
- Background: `bg-surface-container-low`
- Border: `border border-outline-variant` (hover: `hover:border-outline`)
- Radius: `rounded-sm`
- Icon container: `w-10 h-10 rounded-sm bg-surface-container-high text-primary`

### 17.2 Feature Row / List Item

Used for dense, sequential lists (advanced features, limitations). Rows are separated by thin borders.

```tsx
<div className="flex items-start gap-4 py-5 border-b border-outline-variant last:border-b-0">
  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-sm bg-surface-container-high text-primary">
    {icon}
  </div>
  <div className="flex flex-col gap-1">
    <h3 className="text-base font-semibold text-on-surface">{title}</h3>
    <p className="text-sm text-on-surface-variant leading-relaxed">{description}</p>
  </div>
</div>
```

- Vertical padding: `py-5`
- Icon wrapper: `flex-shrink-0` to prevent compression
- Title/desc stack: `flex flex-col gap-1`

### 17.3 Primary Button

```tsx
<button className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-primary text-on-primary rounded text-sm font-medium transition-all hover:bg-primary/90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed">
  {label}
</button>
```

- Padding: `px-5 py-2`
- Radius: `rounded` (4px)
- States: `hover:bg-primary/90`, `active:scale-[0.98]`
- Disabled: `disabled:opacity-60 disabled:cursor-not-allowed`

### 17.4 Version Badge

```tsx
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-[11px] font-mono text-on-surface-variant border border-outline-variant">
  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
  {version}
</span>
```

- Radius: `rounded-full`
- Background: `bg-surface-container-high`
- Pulsing dot: `w-1.5 h-1.5 rounded-full bg-primary animate-pulse`

### 17.5 Floating Action Button (Back to Top)

```tsx
<button className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-10 h-10 bg-primary text-on-primary rounded-sm shadow-sm hover:bg-primary/90 active:scale-[0.98] transition-colors" aria-label="Back to top">
  {icon}
</button>
```

- Positioning: `fixed bottom-6 right-6 z-50`
- Size: `w-10 h-10`
- Radius: `rounded-sm`
- Shadow: `shadow-sm` — the only permitted shadow, since this element floats above the structural grid (see §5)

## 18. Motion & Animation System

All animations use Framer Motion with a consistent easing curve and reduced-motion support.

### 18.1 Easing

```ts
ease: [0.4, 0, 0.2, 1] // CircOut — snappy, mechanical
```

### 18.2 Reduced Motion Guard

Every animated component imports `useReducedMotion()` and conditionally applies animations:

```tsx
const shouldReduceMotion = useReducedMotion();

<motion.div
  initial={shouldReduceMotion ? false : "hidden"}
  animate={shouldReduceMotion ? false : "show"}
  ...
/>
```

When reduced motion is preferred, `initial` and `animate` are set to `false`, rendering the element immediately without transition.

### 18.3 Stagger Variants

List-based sections use a parent container variant that staggers children:

```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};
```

- Stagger interval: `0.08s`
- Initial delay before first child: `0.1s`
- Item duration: `0.5s`

### 18.4 Viewport Trigger

Scroll-triggered sections use `whileInView` with once-only behavior:

```tsx
<motion.div
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
>
```

- `once: true` — animation plays only on first entry
- `margin: "-80px"` — triggers slightly before element enters viewport
- Intro animations use `duration: 0.6`; list items use `duration: 0.5`

### 18.5 Step Delays

For numbered steps, delay is calculated per item:

```tsx
transition={{
  duration: 0.5,
  ease: [0.4, 0, 0.2, 1],
  delay: index * 0.1,
}}
```

## 19. Dividers & Borders

Horizontal separation between sections and list items uses thin outline borders:

- **Section separator:** `border-t border-outline-variant`
- **List item separator:** `border-b border-outline-variant`
- **Last item:** `last:border-b-0` to remove the trailing line
- **Card border:** `border border-outline-variant` (hover: `hover:border-outline`)

Borders replace shadows as the primary depth mechanism (see §5).

## 20. Icon System

- **Style:** Monochrome SVG with `stroke="currentColor"` and `strokeWidth="2"`
- **Size:** 20px–24px for content icons, 16px for inline UI icons
- **Container:** Icons live inside a `w-10 h-10 rounded-sm bg-surface-container-high text-primary` wrapper
- **Constraint:** No multi-color illustrative icons; all icons inherit `text-primary` or `text-on-surface`

## 21. Responsive Behavior

| Breakpoint | Behavior |
|-----------|----------|
| Mobile | Single column grids, reduced heading sizes (`text-3xl`), stacked footer |
| Desktop (`md:`) | Two/three column grids, full heading sizes (`text-4xl`), horizontal footer |

Tailwind responsive prefixes (`md:`) are used exclusively. No custom breakpoints.

## 22. Accessibility

- `useReducedMotion()` is checked on every animated element
- Icon-only buttons include `aria-label`
- Semantic HTML: `<section>`, `<main>`, `<footer>`, `<h1>`–`<h3>` in logical order
- Focus states rely on native browser focus rings (styled via `focus:` utilities where needed)

## 23. Shape Language (Implementation)

- **Default radius:** `rounded-sm` (4px) for cards, buttons, icon containers
- **Pills / badges:** `rounded-full`
- **Inputs:** `rounded` (4px)
- **No border-radius extremes** — the system avoids `rounded-lg` and larger to maintain the technical, sharp aesthetic

## 24. Implementation Checklist

When porting this system to a new project:

1. Copy this file as the combined visual + layout guide
2. Use the frontmatter token block as the visual token source (colors, type scale, spacing values)
3. Use the section wrapper, intro block, and content width patterns verbatim (§12–13)
4. Apply the motion variants and reduced-motion guard to all scroll-triggered content (§18)
5. Use the card and row component patterns for list-based content (§17)
6. Maintain the 4px base unit for all spacing decisions (§4, §14)
