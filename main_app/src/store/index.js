import Vue from "vue";
import Vuex from "vuex";
import Setting from "./modules/setting";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {
    isCollpase: (state) => state.Setting.isCollpase,
  },
  mutations: {},
  actions: {},
  modules: { Setting },
});
