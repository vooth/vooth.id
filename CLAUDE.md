# CLAUDE.md — vooth.id

AI assistant instructions for the Vooth apex marketing website. Read this before
doing anything.

## Global rules (inherited)

- No marketing lingo, strictly technical, no bloated/repetitive content — this
  applies to code and docs. (Public-facing site copy is Bahasa marketing copy;
  that is content, not documentation — keep it warm but not overwrought, per the
  brand guideline's "ringan tapi bermakna".)
- No fallback policy, no default values in code. Fail loud (throw / log), do not
  silently substitute.

## What this repo is

The **static marketing website** for Vooth, served at `vooth.id`. It exists to
explain what Vooth is and drive bookings via a **WhatsApp deep link**. Nothing
more. There is deliberately **no booking backend** — business direction is
unsettled, so the site stays fully static until that firms up.

Do **not** build here:
- Product/app logic (camera, print, capture flow) → lives in
  `~/workspace/produk/motorbooth` (RPi Python + Android Kotlin + Go VPS).
- Photo delivery pages (`foto.vooth.id`, dynamic signed-URL download) → served
  by the Go backend (`vps/`) in the product repo, on the aquaworld VPS. This
  site only links to it; it does not implement it.

## Stack — mirror the STMIK frontend

Clone conventions from `~/workspace/website/stmik.tazkia.ac.id/frontend`:

- Astro 5, Tailwind 4 via `@tailwindcss/vite` (not the old `@astrojs/tailwind`)
- Integrations: `@astrojs/mdx`, `@astrojs/sitemap`, plugin
  `@tailwindcss/typography`
- TypeScript; lint via `astro check`, eslint + prettier (`prettier-plugin-astro`)
- `astro.config.mjs`: `site: 'https://vooth.id'`, i18n `{ defaultLocale: 'id',
  locales: ['id','en'] }`, `vite: { plugins: [tailwindcss()] }`,
  `integrations: [mdx(), sitemap()]`
- Bahasa-first (`id` default). English (`en`) is secondary; ship `id` first, `en`
  can lag.

## Brand — Senja Modern

Authoritative source: `brand/Vooth_Guideline_Aplikasi.pdf`. Structured index:
`brand/vooth-brand.json` (read this first — palette, tagline, principles, flow,
UX rules are all there).

Palette (define as Tailwind theme tokens / CSS custom properties):

| Token     | Hex       | Use                          |
|-----------|-----------|------------------------------|
| ink       | `#26215C` | text & foundations, dark bg  |
| accent    | `#7F77DD` | buttons & primary elements   |
| highlight | `#D4537E` | secondary accent, CTAs "seru"|
| bg        | `#EEEDFE` | soft light background        |

Tagline: **Rekam Sekarang, Cerita Nanti**.
Design principles (keep every screen honest to these): ringan tapi bermakna;
cepat, anti-antre; momen di atas fitur.

## Site structure (target)

- `/` (id) + `/en/` — single landing page:
  - Hero: name + tagline + primary **WhatsApp CTA**
  - "Bukan photobooth biasa" — media perekam momen pitch
  - **Konteks Momen** section — the differentiator (note printed on back of the
    4R card + embedded in the digital file). This is the story worth telling.
  - Sample gallery — use Astro `<Image>` (responsive AVIF/WebP). This is why the
    site is Astro, not Hugo: the photos are the product.
  - Packages / pricing (static content, MDX-friendly)
  - Footer: WhatsApp, Instagram, contact
- `/privasi` (+ `/en/privacy`) — port from
  `~/workspace/produk/motorbooth/docs/PRIVACY_POLICY.md` (UU PDP requires the
  privacy policy be publicly reachable).

WhatsApp CTA: `https://wa.me/<number>?text=<url-encoded prefilled message>`.
The number is not yet decided — leave it as a single documented constant in one
place, and **throw/log an obvious build-time error if unset** rather than
shipping a placeholder number (no-fallback rule).

## Deploy — Cloudflare

DNS for `vooth.id` is already delegated to Cloudflare. Build to `dist/`, serve
via Workers static assets. Add `wrangler.jsonc` mirroring
`~/workspace/website/endy.muhardin.com/wrangler.jsonc` but with
`assets.directory: "dist"` and `routes: [{ pattern: "vooth.id", custom_domain:
true }]`. Deploy with `npx wrangler deploy`.

GitHub: `github.com/vooth/vooth.id` (remote `origin` already set).

## What NOT to do

- No booking form / backend / database. WhatsApp deep link only.
- No SPA framework (React/Next/Vue). Astro islands only if genuinely needed
  (e.g. a gallery lightbox) — ship ~0 JS by default.
- No placeholder/fallback values (WhatsApp number, URLs) — fail loud if unset.
- Do not implement `foto.vooth.id` delivery pages here — that is the Go backend.
- Do not copy the STMIK backend/infra layout — only its `frontend/` Astro
  conventions apply.
