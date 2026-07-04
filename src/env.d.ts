/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  /**
   * WhatsApp business number in international format, digits only (no `+`,
   * spaces, or leading `0`). Example: `6281234567890`.
   * Required at build time — see src/config.ts. Build fails if unset.
   */
  readonly WHATSAPP_NUMBER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
