import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Dashboard from './views/Dashboard.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Admin',
    name: 'admin',
    component: Dashboard
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
