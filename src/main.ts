import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createVfm } from 'vue-final-modal';
import { i18n } from 'src/utils/i18n';
import { Icon } from '@iconify/vue';
import contextmenu from 'v-contextmenu';
import App from './App.vue';
import router from './router';
import './main.scss';
import '@noction/vue-bezier/dist/style.css';
import 'vue-final-modal/style.css';
import 'v-contextmenu/dist/themes/default.css';

const app = createApp(App)
  .use(createPinia())
  .use(router)
  .use(createVfm())
  .use(i18n)
  .use(contextmenu)
  .component('Icon', Icon);
router
  .isReady()
  .then(() => app.mount('#app'));
