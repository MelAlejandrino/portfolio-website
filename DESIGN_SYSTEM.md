# THE BROADSHEET — editorial design system

The portfolio is set as a newspaper. Every decision below exists to make the
page read like a printed publication that happens to live on the web. The
sophistication comes from typography, composition, hierarchy and rules — not
from effects.

Source of truth for the implementation is `app/globals.css`.

---

## 1. Principles

1. **Quiet over impressive.** No gradients, no shadows, no glass, no parallax.
2. **Rules do the structural work.** Borders separate content; containers do not float.
3. **Rectangular.** `border-radius: 0` everywhere. No exceptions so far.
4. **Prints in black and white.** Colour is paper, ink, and one restrained accent.
5. **Asymmetry.** The masthead is centred because mastheads are. Nothing else is.
6. **Never "too designed."** If an effect is there to impress, it is deleted.

---

## 2. Colour

| Token | Value | Use |
| --- | --- | --- |
| `paper` | `#f4f0e4` | Page ground — warm newsprint |
| `paper-raised` | `#efeada` | Alternating section bands |
| `paper-deep` | `#e7e1cd` | Plates, image beds |
| `ink` | `#17150f` | Body text, primary rules |
| `ink-soft` | `#3a372c` | Secondary prose, deks |
| `ink-faint` | `#6b6553` | Metadata, labels |
| `rule` | `#b3ab93` | Column and section rules |
| `rule-soft` | `#d5cdb6` | Hairlines inside dense blocks |
| `accent` | `#6d1f1f` | Kickers, folios, hover — dark burgundy |

Use the tokens (`text-ink-faint`, `border-rule`, `bg-paper-raised`), never raw
hex. The accent appears on section kickers, active navigation folios, and link
hover. That is the whole budget.

---

## 3. Typography

Three faces, all traditional.

| Role | Token | Face |
| --- | --- | --- |
| Headlines, mastheads, pull quotes, deks | `font-headline` | EB Garamond |
| Body copy | `font-text` | Source Serif 4 |
| Metadata, labels, navigation, tables | `font-meta` | Arial / Helvetica (system) |

Rules of use:

- Headlines are **uppercase**, weight 500, `leading-[0.95]`, near-zero tracking.
  The shared `headline` constant in `PortfolioView.tsx` carries this.
- Deks and pull quotes are **EB Garamond italic**, never the body face.
- All metadata uses the `.meta` (11px) or `.meta-sm` (10px) utility: uppercase,
  0.12–0.14em tracking, system sans. Never a serif.
- Body copy is 17px / 1.62 in Source Serif. `.prose-editorial` indents runs of
  paragraphs and hyphenates, as a newspaper does.
- `.drop-cap` opens the first paragraph of a long story only — front page and
  profile. Not on short entries.
- `.columns-editorial` gives two columns with a hairline rule, collapsing to one
  below 768px.

Type scale is expressed as `clamp()` per role, not as a step ladder — headline
sizes are chosen for the width of the column they sit in.

---

## 4. Layout

- 12-column grid (`lg:grid-cols-12`), max width `1240px`, `px-5 sm:px-8`.
- Column gutters are `gap-x-10`; the visual separator is a `border-rule` on the
  spanning element, not a background.
- Sections alternate `paper` and `paper-raised` and are separated by
  `border-b border-ink`.
- Section headings use `SectionHead`: a 2px rule, a burgundy folio kicker
  (`02 — SELECTED WORK`), an optional right-aligned note, then the headline.
- Stories vary in width on purpose — `lead` (7/5 with the figure left), `half`
  (two columns with a centre rule), and `brief` (a compact ruled row, no plate).
  Weight is priority: client work carries `lead` and `half`, personal work runs
  as a `brief` under its own kicker at the foot of the section.

Rule vocabulary:

| Class | Rule |
| --- | --- |
| `border-b border-ink` | Section boundary |
| `.rule-thick` | 2px section head rule |
| `.rule-double` | Masthead and footer double rule |
| `border-rule` | Column divider |
| `border-rule-soft` | Hairline inside tables and metadata lists |

---

## 5. Components

- **Masthead** (`Masthead.tsx`) — publication metadata, centred title, tagline,
  double rule, edition date. Server-rendered; the date is real and refreshes
  daily via `revalidate` on the page.
- **NavStrip** (`NavStrip.tsx`) — sticky index strip. Small uppercase labels with
  folio numbers, cell dividers, active section in bold with a burgundy folio.
  Horizontally scrollable on mobile. Plain `#hash` anchors, so smooth scroll and
  browser history are the platform's job, not ours.
- **Figure** (`Figure.tsx`) — bordered image bed with halftone screen, caption
  and credit. With no `src` it prints a typographic **plate** instead, so a story
  without a photograph still looks composed.
- **Story** — kicker, headline, italic dek, hairline metadata list (year, role,
  stack, client), editorial body, `READ CASE STUDY →`.
- **Brief** — the short form: title, one metadata line, dek, one paragraph. Used
  for personal work so it reads as secondary without being hidden.
- **Ledger entry** — its own section (05), not a footnote to the profile.
  Period + discipline / role + org + place / note + a ruled list of highlights,
  across 3-4-5 columns, separated by 2px rules. No dots, no timeline graphics.
- **Technical index** — a real `<table>` with 2px head rules and hairline rows.
  Everyday fields come first in full ink; `primary: false` rows sit last in
  `ink-faint`, so emphasis matches the claim without spelling it out.
- **Note entry** — date, headline, category, excerpt.
- **Footer** — publication information block in four columns of `.meta-sm`.

---

## 6. Paper

`body::before` lays a fixed SVG turbulence grain over the page at 5.5% opacity,
multiplied. `body` carries two very faint radial washes for aging. Photographs
get `.newsprint`: grayscale plus a 3px halftone dot screen at 14%.

If the texture is noticeable, it is too strong.

---

## 7. Motion

Paper and typography moving — nothing else.

- `ink-rise` (10px, 640ms, expo-out) on section reveal, via `Reveal.tsx`.
- `ink-fade` and `rule-draw` on the once-per-session masthead intro.
- Hover: `.link-read` underlines and nudges its arrow 3px; `.newsprint` lifts
  grayscale slightly; navigation goes bold.

`Reveal` never hides content up front — the animation class is added only once
the element is observed, so a throttled tab or disabled JS shows a static page
rather than an empty one. `prefers-reduced-motion` flattens everything.

---

## 8. Responsive

| Width | Behaviour |
| --- | --- |
| `lg` and up | Full 12-column grid, two-column body copy, column rules |
| `md` | Two-column stories, column rules kept, single-column prose |
| below `md` | One column, rules become horizontal separators, masthead scales via `clamp()`, nav strip scrolls horizontally |

Nothing is merely shrunk: the column rules and multi-column prose are dropped
rather than compressed, so mobile reads as a mobile newspaper.
