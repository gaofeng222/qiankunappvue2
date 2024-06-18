import { registerMicroApps, start, initGlobalState } from "qiankun";

if (!window.qiankunStarted) {
  window.qiankunStarted = true;

  let state = {
    accessToken: "",
    userInfo: {},
  };

  const actions = initGlobalState(state);
  //这里监听子应用传过来的数据，暂时用不到
  actions.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log("更改后的状态", state, prev);
  });

  registerMicroApps([
    {
      name: "sub_app01",
      entry: "//localhost:9091",
      container: "#container",
      activeRule: "/sub_app01",
      props: {
        userInfo: localStorage.getItem("userInfo") || {
          name: "qiankun",
          age: 18,
          sex: "男",
          address: "北京",
        },
        accessToken:
          localStorage.getItem("accessToken") ||
          "xxxx-aaaaa-ssss-s-s-ss-s-s--sub01",
        actions: actions,
      },
    },
    {
      name: "sub_app02",
      entry: "http://localhost:9092",
      container: "#container",
      activeRule: "/sub_app02",
      props: {
        userInfo: localStorage.getItem("userInfo") || {
          name: "qiankun",
          age: 18,
          sex: "男",
          address: "北京",
        },
        accessToken:
          localStorage.getItem("accessToken") ||
          "xxxx-aaaaa-ssss-s-s-ss-s-s-cccccccccc-sub02",
        actions: actions,
      },
    },
  ]);
}
console.log("start qiankun");
console.log(window.__POWERED_BY_QIANKUN__, "window.__POWERED_BY_QIANKUN__");
// 启动 qiankun
start();
