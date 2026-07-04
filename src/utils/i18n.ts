import idTranslations from '../../public/locales/id/common.json';
import enTranslations from '../../public/locales/en/common.json';

export const translations = {
  id: idTranslations,
  en: enTranslations,
};

export type Locale = keyof typeof translations;

export function getLocaleFromUrl(url: URL): Locale {
  if (url.pathname.startsWith('/en')) return 'en';
  return 'id';
}

export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: unknown = translations[locale];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      value = undefined;
      break;
    }
  }

  if (typeof value !== 'string') {
    throw new Error(`Missing translation for key "${key}" in locale "${locale}"`);
  }
  return value;
}

export function localizePath(locale: Locale, path: string): string {
  // Default locale (id) has no prefix.
  if (locale === 'id') return path;
  return `/${locale}${path}`;
}
