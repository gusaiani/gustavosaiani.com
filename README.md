# gustavosaiani.com

Personal site of Gustavo Saiani. Senior product engineer, full-stack + AI.
Live at [gustavosaiani.com](https://gustavosaiani.com).

## Stack

- [Next.js 16](https://nextjs.org) (App Router, static export) + React 19 + TypeScript
- Single-page layout: hero, experience, projects, skills, contact
- No CMS: content lives as data arrays in `app/page.tsx`
- JSON-LD `Person` structured data in `app/layout.tsx`
- Self-hosted Plau variable fonts in `app/fonts/`, so no external font requests

## Design: "Iro" (色)

The visual system is adapted from Ikko Tanaka's color-plane posters (the
`Nihon Buyo` lineage): white ground, warm hairlines, and flat cut planes of
color. Everything lives in `app/globals.css` as custom properties on
`:root`. There is no CSS framework and no theme toggle; the site is
light-only by design.

### Tokens

| Token | Value | Role |
| --- | --- | --- |
| `--paper` | `#ffffff` | Page ground |
| `--canvas` | `#ffffff` | Card ground |
| `--gray` | `#eeeae1` | Tech-chip ground |
| `--ink` | `#17151a` | Body text |
| `--rule` / `--rule-strong` / `--rule-on-plane` | `#e4dfd5` / `#d5cfc2` / `rgba(23,21,26,.2)` | Hairlines: dividers, card edges, portrait, plane underlines |
| `--muted` | `#6b675e` | Secondary text |
| `--hot` | `#e23a2e` | Vermilion, the identity pigment |
| `--gold` | `#c8a03c` | Gold, the interaction pigment |
| `--p-wheat` | `#efd9a8` | Skill plane |
| `--p-tea` | `#cfe0d5` | Skill plane |
| `--p-violet` | `#d9cfe8` | Skill plane |
| `--p-mizu` | `#cbd8e0` | Skill plane |
| `--bar` / `--bar-ink` / `--bar-muted` / `--bar-line` | `#17151a` / `#f1ede3` / `#a8a49b` / `#3a3740` | Dark nav + footer bar |

### Rules the system follows

- **Color is pigment, never body text.** Vermilion and gold both fail contrast
  as text on paper, so they only ever appear as a *ground* (the wordmark
  plane, chips, the hinomaru wash) or as a *mark* (the square before each
  section label, the rule under an inline link). Section labels stay ink so
  they keep full contrast. The hinomaru is a 4% `radial-gradient` on `body`,
  **not** a positioned element. That is deliberate: a background never
  contributes to scrollable overflow, so it cannot widen the layout viewport,
  and being on `body` it still bleeds past the hero rule. An absolutely
  positioned disc hanging off the right edge widened the layout viewport to
  501px against a 390px screen, and iOS Safari lays out at that widened width
  even under `overflow-x: clip`: body text wrapped past the screen edge and
  was chopped. There is now no `overflow-x` containment anywhere, because
  nothing overflows.
- **Vermilion is identity; gold is interaction.** The wordmark carries the
  full name, so the hero needs no display heading. The `h1` stays in the
  markup, visually hidden, to keep the document outline and the
  `#gustavo-saiani` anchor. Wordmark, hinomaru, and section-label squares
  are vermilion; the portrait takes the same hairline border as the cards. Hover
  states, the role rule on experience cards, and nav hover are gold.
- **Hairlines, not hard rules.** Every divider and border is a warm hairline
  rather than black ink; the graphic weight comes from the colour planes and
  the dark bar, not from outlines. Card hover is a 10% ink offset shadow, a
  flat displacement rather than a blur.
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
| **Kimura Sans** (Carlos Mignot) | `KimuraSansVF.woff2` | `opsz 12-72`, `wght 100-900`, `slnt -10-0` | Everything, body through display |
| **Carbona** (Carlos Mignot) | `CarbonaVF.woff2` | `MONO 0-100`, `wght 200-900`, `slnt -10-0` | Card URLs, pinned to `MONO 100` |

Kimura Sans replaces the Google-hosted Zen Kaku Gothic New the design was
first drafted in: it is the closest thing in the catalogue to a Japanese
gothic, which is the right register for a Tanaka homage. Its **optical size
axis is the reason it carries the whole page alone**: `font-optical-sizing`
is left at `auto`, so the browser maps `opsz` to the rendered size and the
display line picks up the tight display cut while body text keeps the open
one. No manual `font-variation-settings` is needed anywhere except Carbona's
`MONO`.

Weights in use: 400 body, 500 labels and kickers, 700 the `GS` wordmark,
900 display (hero name, section titles, card names, footer heading).

Both are licensed under Plau's "Company Size" retail EULA, whose clause 2.4
covers *"toda a família das fontes selecionadas, incluídos todos os pesos,
para utilização em desktop, webfonts e aplicativos"*, so webfont use is
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

`ai-engineering.png` is the exception: it shows the NovaCRM Support Agent
mid-answer, so it cannot be captured by a plain page load. Regenerate it by
driving the UI, filling `#prompt`, clicking `#send`, and waiting for the
streamed reply to stop growing before shooting at 1440x900. Pick a question
that misses the semantic cache, otherwise the capture shows a cache hit
instead of the router and tool-call chips.

## Overflow test

```bash
npm run test:overflow                          # against localhost:3000
npm run test:overflow -- https://gustavosaiani.com/
```

Checks Chromium and WebKit across ten viewport widths plus three iPhone
profiles, asserting that no element crosses the viewport edge and that the
layout viewport never exceeds the visual one.

It forces `overflow-x: visible` on the root before measuring, which matters:
root-level `overflow-x: clip` or `hidden` makes a page *look* fixed, because it
can no longer be scrolled sideways, while iOS Safari still lays content out at
the widened width and clips the overhang. Asserting "cannot scroll sideways" is
therefore not enough, and passed while the page was visibly broken on a real
phone. The assertion that holds is that nothing overflows at all.

## Deploy

Pushes to `main` deploy via GitHub Actions (`.github/workflows/deploy.yml`).
The build is a static export (`output: "export"`), rsynced with `--delete` to
`/var/www/gustavosaiani.com/public_html` on `poe.ma`, served by nginx.

### Server config

nginx is configured at `/etc/nginx/sites-enabled/gustavosaiani.com.conf`. Two
rules there matter, and both exist because of a real bug:

| Rule | Why |
| --- | --- |
| `try_files $uri $uri.html $uri/ =404` | A static export has no client router, so a missing file must 404. The previous `/index.html` fallback answered every unknown path with the homepage at status 200, including requests for assets. |
| `Cache-Control: no-cache` on HTML, `immutable` on `/_next/static/` | The HTML must never be cached, because it names content-hashed asset URLs that `rsync --delete` removes on the next deploy. The hashed assets themselves can be cached forever. |

Together those two gaps caused the webfonts to appear broken on other people's
machines. A visitor holding HTML from an earlier deploy requested a CSS or font
URL that no longer existed, the catch-all returned `index.html` with status
`200 text/html`, the browser rejected the stylesheet on MIME mismatch, and the
page rendered with no CSS and therefore no Kimura Sans. Nothing errored
visibly, which is why it only showed up as "the font is not loading".

`gzip_types` is set on this vhost (the global nginx default gzips `text/html`
only, leaving CSS and JS uncompressed), and `font/woff2` was added to
`/etc/nginx/mime.types`, which nginx 1.18 ships without.
