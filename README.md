# SweetsByLea

A bilingual, mobile-first marketing site for SweetsByLea. Built with [Astro](https://astro.build), deployed to Cloudflare Pages.

## Pages

- **Home** — hero, Lea’s story, services, media, and WhatsApp CTA
- **Services** — custom cakes, cupcakes, event desserts, and baking consultations
- **About** — faith-centered story and process
- **Gallery** — filterable local photos and videos
- **Contact** — localized inquiry form that opens WhatsApp

## Stack

- Astro (static output), vanilla CSS design system, vanilla JS interactions
- Self-hosted fonts via Fontsource (Outfit + Great Vibes)
- Local SweetsByLea photography and video media

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
```

## Deployment

The site deploys to Cloudflare Pages. Two paths are configured:

1. **CI (recommended):** pushing to `main` triggers `.github/workflows/deploy.yml`.
2. **Manual:** `npx wrangler pages deploy dist --project-name=leanna-bakehouse`

### Secrets

The deploy workflow reads these GitHub Actions secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## Customizing content

- Brand, localized copy, services, contact info, and gallery: `src/data/site.js`
- Colors and typography tokens: `src/styles/global.css` (`:root`)
- Site domain (for canonical URLs): `astro.config.mjs` (`site`)
