import Vue from "vue";
import Vuex from "vuex";
import Setting from "./modules/setting";
import User from "./modules/user";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {
    isCollpase: (state) => state.Setting.isCollpase,
    userInfo: (state) => state.User.userInfo,
  },
  mutations: {},
  actions: {},
  modules: { Setting, User },
});
