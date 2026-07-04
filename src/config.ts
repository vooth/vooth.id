/**
 * Single source of truth for outbound contact links.
 *
 * The WhatsApp number is the only booking channel for this site (there is no
 * booking backend — see CLAUDE.md). It is intentionally NOT hardcoded: set it
 * via the `WHATSAPP_NUMBER` build-time environment variable. If it is unset we
 * throw here rather than shipping a placeholder number (no-fallback rule).
 *
 * Format: international, digits only — no `+`, spaces, or leading `0`.
 * Example: `6281234567890`.
 */

const rawNumber = import.meta.env.WHATSAPP_NUMBER;

if (!rawNumber) {
  throw new Error(
    'WHATSAPP_NUMBER is not set. Define it (digits only, international format, ' +
      'e.g. 6281234567890) in .env or the build environment. Refusing to build ' +
      'with a placeholder number.'
  );
}

if (!/^[1-9]\d{7,14}$/.test(rawNumber)) {
  throw new Error(
    `WHATSAPP_NUMBER is malformed: "${rawNumber}". Expected international format, ` +
      'digits only, no leading zero (e.g. 6281234567890).'
  );
}

export const WHATSAPP_NUMBER = rawNumber;

export const INSTAGRAM_URL = 'https://instagram.com/vooth.id';

/**
 * Build a wa.me deep link with a URL-encoded prefilled message.
 * @param message plain-text first message shown in the user's WhatsApp composer
 */
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
