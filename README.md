# vooth.id

Apex marketing website for **Vooth** — a motorcycle-portable self-service photobooth.
Static site. WhatsApp booking. No application logic lives here.

This repo is **only** the public marketing surface (`vooth.id`). Two other
surfaces are separate and do **not** live here:

- **Product app** (RPi + Android + Go backend): `~/workspace/produk/motorbooth`
- **Photo delivery app** (`foto.vooth.id`, dynamic signed-URL pages): served by
  the Go backend in the product repo (`vps/`), running on the aquaworld VPS.

## Stack

- [Astro 5](https://astro.build) + [Tailwind 4](https://tailwindcss.com) (`@tailwindcss/vite`)
- `@astrojs/mdx`, `@astrojs/sitemap`, `@tailwindcss/typography`
- TypeScript (`astro check`), eslint + prettier
- i18n: `id` (default) + `en`
- Reference implementation to mirror: `~/workspace/website/stmik.tazkia.ac.id/frontend`

## Config

`WHATSAPP_NUMBER` is **required** at build/dev time — the single source of truth
for the booking deep link lives in [`src/config.ts`](src/config.ts), which
throws if it is unset or malformed (no placeholder number is ever shipped).
Format: international, digits only, no `+`/spaces/leading `0` (e.g.
`6281234567890`). Copy `.env.example` → `.env` and fill it in.

## Develop

```bash
npm install
cp .env.example .env   # then set WHATSAPP_NUMBER
npm run dev            # astro dev
npm run build          # astro build → dist/
npm run preview        # serve dist/ locally
npm run typecheck      # astro check
```

## Deploy

Git-connected **Cloudflare Workers Builds** — a push to `main` triggers
Cloudflare to clone, `npm run build` (→ `dist/`), and `npx wrangler deploy`.
`wrangler.jsonc` serves `dist/` as Workers static assets with `custom_domain:
true` for `vooth.id`. The `WHATSAPP_NUMBER` build variable is set in the
Cloudflare dashboard, not in this repo. Full setup and settings:
[`docs/DEPLOY.md`](docs/DEPLOY.md).

```bash
git push origin main   # → Cloudflare builds and deploys
```

## DNS (Cloudflare)

- `vooth.id` (apex) → this site (Cloudflare Worker static assets)
- `foto.vooth.id` → A record → aquaworld VPS (Go delivery app, separate repo)

## Brand

Source guideline + machine-readable index live in [`brand/`](brand/):
- `Vooth_Guideline_Aplikasi.pdf` — authoritative brand + UX guideline (Bahasa)
- `vooth-brand.json` — structured index (palette, tagline, principles, flow)

Palette "Senja Modern": ink `#26215C`, accent `#7F77DD`, highlight `#D4537E`,
background `#EEEDFE`. Tagline: **Rekam Sekarang, Cerita Nanti**.
