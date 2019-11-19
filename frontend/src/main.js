import Vue from 'vue';
import App from './App.vue';
import router from './router';

import store from './store';

import VeeValidate, { Validator } from 'vee-validate';

import pt from 'vee-validate/dist/locale/pt_BR';

import './directives';
import vuetify from './plugins/vuetify';
Vue.use(VeeValidate);

Validator.localize('pt_BR', pt);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
