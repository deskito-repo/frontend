import en from './en';
import ko from './ko';

const locales = ['en', 'ko'] as const;
type Locale = typeof locales[number];
export { locales };
export type {
  Locale,
};
export default {
  en,
  ko,
} satisfies Record<Locale, typeof en>;
