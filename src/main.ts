import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import messages, { locales, type Locale } from './i18n';
import App from './App.vue';
import router from './router';
import './main.scss';
import '@noction/vue-bezier/dist/style.css';

const app = createApp(App)
  .use(createPinia())
  .use(router)
  .use(
    createI18n({
      locale: (locales.filter((locale) => navigator.language.includes(locale)))[0] || 'en' satisfies Locale,
      fallbackLocale: 'en' satisfies Locale,
      messages,
      globalInjection: true,
      legacy: false,
    }),
  );
router
  .isReady()
  .then(() => app.mount('#app'));
