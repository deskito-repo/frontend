import * as VueRouter from 'vue-router';
import routes from './routes';

export default VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});
