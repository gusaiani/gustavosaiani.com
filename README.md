# gustavosaiani.com

Personal site of Gustavo Saiani — senior product engineer, full-stack + AI.
Live at [gustavosaiani.com](https://gustavosaiani.com).

## Stack

- [Next.js 16](https://nextjs.org) (App Router, static export) + React 19 + TypeScript
- Single-page layout: hero, experience, projects, skills, contact
- No CMS — content lives as data arrays in `app/page.tsx`
- JSON-LD `Person` structured data in `app/layout.tsx`

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
