import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import messages, { Locale } from './i18n';
import App from './App.vue';
import router from './router';
import './main.scss';

const app = createApp(App)
  .use(createPinia())
  .use(router)
  .use(
    createI18n({
      locale: navigator.language,
      fallbackLocale: 'en' satisfies Locale,
      messages,
      globalInjection: true,
      legacy: false,
    }),
  );
router
  .isReady()
  .then(() => app.mount('#app'));
