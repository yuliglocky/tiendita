import { createRouter, createWebHistory } from 'vue-router';
import auth from './views/AuthView.vue';

const routes = [
  { path: '/', component: auth }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;