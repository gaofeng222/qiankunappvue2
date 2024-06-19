import {
  GET_TOKEN,
  SET_TOKEN,
  SET_USERINFO,
  GET_USERINFO,
} from "@/store/mutation-types";

export default {
  state: {
    userInfo: JSON.parse(localStorage.getItem("userInfo") || "{}"),
    token:
      localStorage.getItem("accessToken") ||
      "xxxx-aaaaa-ssss-s-s-ss-s-s--sub01",
  },
  mutations: {
    [SET_TOKEN]: (state, token) => {
      state.token = token;
    },
    [GET_TOKEN]: (state) => {
      return state.token;
    },
    [SET_USERINFO](state, payload) {
      state.userInfo = payload;
    },
    [GET_USERINFO](state) {
      return state.userInfo;
    },
  },
  actions: {
    setUserInfo({ commit }, payload) {
      commit(SET_USERINFO, payload);
    },
    getUserInfo({ commit }) {
      return commit(GET_USERINFO);
    },
  },
};
