import { createI18n } from 'vue-i18n';
import messages, { locales, type Locale } from 'src/i18n';

const i18n = createI18n({
  locale: (locales.filter((locale) => navigator.language.includes(locale)))[0] || 'en' satisfies Locale,
  fallbackLocale: 'en' satisfies Locale,
  messages,
  globalInjection: true,
  legacy: false,
});

export {
  i18n,
};
