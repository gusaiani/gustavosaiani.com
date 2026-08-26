# gustavosaiani.com

Personal site of Gustavo Saiani — senior product engineer, full-stack + AI.
Live at [gustavosaiani.com](https://gustavosaiani.com).

## Stack

- [Next.js 16](https://nextjs.org) (App Router, static export) + React 19 + TypeScript
- Single-page layout: hero, experience, projects, skills, contact
- No CMS — content lives as data arrays in `app/page.tsx`
- JSON-LD `Person` structured data in `app/layout.tsx`

## Design — "Iro" (色)

The visual system is adapted from Ikko Tanaka's color-plane posters (the
`Nihon Buyo` lineage): warm paper, hard ink rules, zero border radius, and
flat cut planes of color. Everything lives in `app/globals.css` as custom
properties on `:root` — there is no CSS framework and no theme toggle (the
site is light-only by design).

### Tokens

| Token | Value | Role |
| --- | --- | --- |
| `--paper` | `#f1ede3` | Page ground |
| `--canvas` | `#fbf9f3` | Card ground |
| `--gray` | `#ddd7c8` | Tech-chip ground |
| `--ink` | `#17151a` | Body text, every rule and border |
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
  they keep full contrast.
- **Vermilion is identity; gold is interaction.** The wordmark, the portrait
  ring, the hinomaru, and the section-label squares are vermilion. Hover
  states, the role rule on experience cards, and nav hover are gold.
- **Zero radius, hard edges.** The only circles are the portrait and the
  hinomaru — they rhyme with each other on purpose. Card hover is a hard
  6px ink offset shadow, not a blur.
- **Planes, not borders, carry the skills grid.** The eight skill groups are
  solid cut planes separated by 1px ink gaps. The color is chosen in
  `app/page.tsx` as `plane-${(i + Math.floor(i / 4)) % 4}`, which weaves the
  four planes so no color repeats down a column of the 4-wide grid.

### Typeface

[Zen Kaku Gothic New](https://fonts.google.com/specimen/Zen+Kaku+Gothic+New)
(400/500/700/900) via `next/font/google`, loaded in `app/layout.tsx`. Display
weights are 900 with tight negative tracking; labels are 500–700 uppercase
with wide tracking (`0.14em`–`0.3em`).

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
