<template>
  <div class="about">
    <h1>This is an main_app about page</h1>
    <div>{{ userInfo.name }}</div>
    <el-button type="primary" @click="handleLogin">login</el-button>
  </div>
</template>

<script>
import actions from "../shared/actions";
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["userInfo"]),
  },
  mounted() {
    actions.onGlobalStateChange((state, prevState) => {
      // state: 变更后的状态; prevState: 变更前的状态
      console.log("主应用观察者：token 改变前的值为 ", prevState);
      console.log(
        "主应用观察者：登录状态发生改变，改变后的 token 的值为 ",
        state
      );
    });
  },
  methods: {
    ...mapActions(["setUserInfo"]),
    handleLogin() {
      /**
       * 可以是登录返回的数据
       */
      const userInfo = {
        name: "zhangsan",
        age: 18,
        gender: "男",
        money: 1000,
      };
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      //全部应用的共享状态
      actions.setGlobalState({
        userInfo: JSON.parse(localStorage.getItem("userInfo")),
      });
      //当前应用共享状态
      this.setUserInfo(userInfo);
    },
  },
};
</script>
