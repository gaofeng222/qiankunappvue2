import store from "../store";

class Shared {
  constructor() {
    this.getToken();
  }
  getToken() {
    const state = store.state.User;
    console.log("🚀 ~ Shared ~ getToken ~ state:", state);
    return state.token || "";
  }
  /**
   * 设置 Token
   */
  setToken(token) {
    // 将 token 的值记录在 store 中
    store.commit("User/setToken", token);
  }
}

export default new Shared();
