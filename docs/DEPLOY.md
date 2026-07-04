# Deploy

`vooth.id` deploys via **Cloudflare Workers Builds** — a Git-connected
("pull") build. Cloudflare clones this repo, runs the build, and deploys on
every push to `main`. There is no GitHub Actions workflow and no
`CLOUDFLARE_API_TOKEN` on the GitHub side; the build runs inside Cloudflare.

## Model

- The site is a **Worker with static assets** — `wrangler.jsonc` declares
  `assets.directory: "dist"` and `routes: [{ pattern: "vooth.id",
  custom_domain: true }]`. Worker name: `vooth-id`.
- Cloudflare runs `npm run build` (→ `astro build` → `dist/`) then
  `npx wrangler deploy`.

## Cloudflare build configuration

Dashboard → **Workers & Pages → `vooth-id` → Settings → Build**:

| Setting          | Value                |
| ---------------- | -------------------- |
| Git repository   | `vooth/vooth.id`     |
| Branch           | `main`               |
| Build command    | `npm run build`      |
| Deploy command   | `npx wrangler deploy`|
| Root directory   | `/`                  |

### Build variables

| Name              | Value           | Why                                             |
| ----------------- | --------------- | ----------------------------------------------- |
| `WHATSAPP_NUMBER` | `6281283443767` | Booking deep link; baked into HTML at build time |

`WHATSAPP_NUMBER` is required at build time. `src/config.ts` throws if it is
unset or malformed (international format, digits only, no `+`/spaces/leading
`0`), so a missing value fails the Cloudflare build loudly instead of shipping
a broken link. It is the single source of truth for the number — it lives only
in the Cloudflare build config, not in the repo.

## Normal flow

```bash
git push origin main   # → Cloudflare builds and deploys automatically
```

## Manual deploy (fallback)

Only needed if you deploy from a workstation instead of the Git-connected
build. Requires Cloudflare auth (`npx wrangler login`) and the build variable
in the shell:

```bash
WHATSAPP_NUMBER=6281283443767 npm run build
npx wrangler deploy
```

## DNS

- `vooth.id` (apex) → this Worker (custom domain, managed by the route above).
- `foto.vooth.id` → A record → aquaworld VPS (Go delivery app, separate repo) —
  not part of this deploy.
