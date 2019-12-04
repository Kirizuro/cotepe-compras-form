import { api } from '../../services/Api';

const state = {
  currentJwt: ''
};

const getters = {
  jwt: state => state.currentJwt,
  jwtData: (state, getters) =>
    state.currentJwt ? JSON.parse(atob(getters.jwt.split('.')[1])) : null,
  jwtSubject: (state, getters) =>
    getters.jwtData ? getters.jwtData.sub : null,
  jwtIssuer: (state, getters) => (getters.jwtData ? getters.jwtData.iss : null)
};

const mutations = {
  setJwt(state, jwt) {
    state.currentJwt = jwt;
  }
};

const actions = {
  async fetchJwt({ commit }, { user, password }) {
    const result = await api.post(`/auth?u=${user}&p=${password}`);
    commit('setJwt', await result.text());
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
