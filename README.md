# gustavosaiani.com

Personal site of Gustavo Saiani — senior product engineer, full-stack + AI.
Live at [gustavosaiani.com](https://gustavosaiani.com).

## Stack

- [Next.js 16](https://nextjs.org) (App Router, static export) + React 19 + TypeScript
- Single-page layout: hero, experience, projects, skills, contact
- No CMS — content lives as data arrays in `app/page.tsx`
- JSON-LD `Person` structured data in `app/layout.tsx`
- Self-hosted Plau variable fonts in `app/fonts/` — no external font requests

## Design — "Iro" (色)

The visual system is adapted from Ikko Tanaka's color-plane posters (the
`Nihon Buyo` lineage): warm paper, hard ink rules, zero border radius, and
flat cut planes of color. Everything lives in `app/globals.css` as custom
properties on `:root` — there is no CSS framework and no theme toggle (the
site is light-only by design).

### Tokens

| Token | Value | Role |
| --- | --- | --- |
| `--paper` | `#ffffff` | Page ground |
| `--canvas` | `#ffffff` | Card ground |
| `--gray` | `#eeeae1` | Tech-chip ground |
| `--ink` | `#17151a` | Body text |
| `--rule` / `--rule-strong` / `--rule-on-plane` | `#e4dfd5` / `#d5cfc2` / `rgba(23,21,26,.2)` | Hairlines — dividers, card edges, plane underlines |
| `--muted` | `#6b675e` | Secondary text |
| `--hot` | `#e23a2e` | Vermilion — identity pigment |
| `--gold` | `#c8a03c` | Gold — interaction pigment |
| `--p-wheat` | `#efd9a8` | Skill plane |
| `--p-tea` | `#cfe0d5` | Skill plane |
| `--p-violet` | `#d9cfe8` | Skill plane |
| `--p-mizu` | `#cbd8e0` | Skill plane |
| `--bar` / `--bar-ink` / `--bar-muted` / `--bar-line` | `#17151a` / `#f1ede3` / `#a8a49b` / `#3a3740` | Dark nav + footer bar |

### Rules the system follows

- **Color is pigment, never body text.** Vermilion and gold both fail contrast
  as text on paper, so they only ever appear as a *ground* (the `GS` wordmark
  plane, chips, the hinomaru wash) or as a *mark* (the square before each
  section label, the rule under an inline link). Section labels stay ink so
  they keep full contrast. The hinomaru sits at 4% and `z-index: -1`, so it
  reads as a tint and bleeds past the hero rule instead of being clipped by
  the next section.
- **Vermilion is identity; gold is interaction.** The wordmark — which
  carries the full name, so the hero needs no display heading (the `h1`
  stays in the markup, visually hidden, to keep the document outline and the
  `#gustavo-saiani` anchor) — plus the portrait ring, the hinomaru, and the
  section-label squares are vermilion. Hover
  states, the role rule on experience cards, and nav hover are gold.
- **Hairlines, not hard rules.** Every divider and border is a warm hairline
  rather than black ink; the graphic weight comes from the colour planes and
  the dark bar, not from outlines. Card hover is a 10% ink offset shadow —
  a flat displacement, never a blur.
- **The label square is cap-height.** `.section-label::before` is sized in
  `1cap` and aligned to the baseline, so the square's top and bottom edges
  land exactly on the cap and baseline of the E beside it. A `0.72em`
  declaration precedes it as the fallback for engines without `cap`.
- **Cards carry an 8px radius; nothing else does.** The portrait and the
  hinomaru are the only circles, and they rhyme on purpose.
- **Planes, not borders, carry the skills grid.** The eight skill groups are
  solid cut planes separated by 1px ink gaps. The color is chosen in
  `app/page.tsx` as `plane-${(i + Math.floor(i / 4)) % 4}`, which weaves the
  four planes so no color repeats down a column of the 4-wide grid.

### Typefaces

Two [Plau](https://plau.design) retail variable fonts, self-hosted via
`next/font/local` from `app/fonts/` and declared in `app/layout.tsx`. 352 KB
for the pair; no external font requests.

| Font | File | Axes | Role |
| --- | --- | --- | --- |
| **Kimura Sans** (Carlos Mignot) | `KimuraSansVF.woff2` | `opsz 12–72`, `wght 100–900`, `slnt −10–0` | Everything — body through display |
| **Carbona** (Carlos Mignot) | `CarbonaVF.woff2` | `MONO 0–100`, `wght 200–900`, `slnt −10–0` | Card URLs, pinned to `MONO 100` |

Kimura Sans replaces the Google-hosted Zen Kaku Gothic New the design was
first drafted in: it is the closest thing in the catalogue to a Japanese
gothic, which is the right register for a Tanaka homage. Its **optical size
axis is the reason it carries the whole page alone** — `font-optical-sizing`
is left at `auto`, so the browser maps `opsz` to the rendered size and the
display line picks up the tight display cut while body text keeps the open
one. No manual `font-variation-settings` is needed anywhere except Carbona's
`MONO`.

Weights in use: 400 body, 500 labels and kickers, 700 the `GS` wordmark,
900 display (hero name, section titles, card names, footer heading).

Both are licensed under Plau's "Company Size" retail EULA, whose clause 2.4
covers *"toda a família das fontes selecionadas, incluídos todos os pesos,
para utilização em desktop, webfonts e aplicativos"* — webfont use is
explicitly included.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to out/
```

## Project screenshots

Card thumbnails in `public/images/` are captured with Playwright:

```bash
node scripts/screenshots.mjs
```

Add new sites to the `sites` array in that script and re-run.

## Deploy

Pushes to `main` deploy via GitHub Actions (`.github/workflows/deploy.yml`).
