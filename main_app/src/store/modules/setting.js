import { CHANGE_COLLPASE } from "../mutation-types";

export default {
  state: {
    isCollpase: false,
  },
  getters: {},
  mutations: {
    [CHANGE_COLLPASE](state, isCollpase) {
      state.isCollpase = isCollpase;
    },
  },
  actions: {
    changeCollpase({ commit }, isCollpase) {
      commit(CHANGE_COLLPASE, isCollpase);
    },
  },
  modules: {},
};
