import { CHANGE_COLLPASE } from "../mutation-types";

export default {
  state: {
    isCollpase: false,
    activeRoute: "sub_app01",
  },
  getters: {
    getActiveRoute: (state) => state.activeRoute,
    getIsCollpase: (state) => state.isCollpase,
  },
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
