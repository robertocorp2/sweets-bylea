# Leanna Corporan's Bakehouse

A premium, mobile-first marketing site for a custom bakery. Built with [Astro](https://astro.build), deployed to Cloudflare Pages, with automatic deploys from GitHub Actions.

## Pages

- **Home** — hero, story, best sellers, testimonials, Instagram grid
- **Menu** — category filters, product quick-view, custom cake builder
- **About** — story, ingredients, process
- **Gallery** — filterable masonry portfolio
- **Contact** — order form with lead-time notice and hours

## Stack

- Astro (static output), vanilla CSS design system, vanilla JS interactions
- Self-hosted fonts via Fontsource (Outfit + Great Vibes)
- Photography via the Unsplash CDN

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

- Brand, contact info, products, testimonials, and gallery: `src/data/site.js`
- Colors and typography tokens: `src/styles/global.css` (`:root`)
- Site domain (for canonical URLs): `astro.config.mjs` (`site`)

Before launch, update the placeholder contact details (email, phone, Instagram
handle) and the pickup address in `src/data/site.js` and `src/pages/contact.astro`.
