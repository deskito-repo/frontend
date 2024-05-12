import * as VueRouter from 'vue-router';
import { runtimeEnvironment } from 'src/config';
import routes from './routes';

const history = runtimeEnvironment === 'chrome-extension' ? VueRouter.createWebHashHistory() : VueRouter.createWebHistory();
export default VueRouter.createRouter({
  history,
  routes,
});
