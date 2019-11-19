import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './views/Home.vue';
import Teste from './views/Teste.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/teste',
    name: 'teste',
    component: Teste
  }
];

const router = new VueRouter({
  routes
});

export default router;
