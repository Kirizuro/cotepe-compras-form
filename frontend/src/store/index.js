import Vue from 'vue';
import Vuex from 'vuex';

import lead from './form/lead.js';
import jwt from './login/jwt';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    lead
  },
  strict: process.env.NODE_ENV !== `production`
});
