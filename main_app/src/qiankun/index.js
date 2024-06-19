import {
  registerMicroApps,
  start,
  initGlobalState,
  setDefaultMountApp,
  runAfterFirstMounted,
} from "qiankun";
import actions from "../shared";
import store from "../store";
console.log("🚀 ~ store:", store.state);
if (!window.qiankunStarted) {
  window.qiankunStarted = true;

  setDefaultMountApp("/sub_app02/");

  registerMicroApps([
    {
      name: "sub_app01",
      entry: "//localhost:9091",
      container: "#container",
      activeRule: "/sub_app01",
      props: {
        ...store.state.User,
        ...store.state.Setting,
        actions,
      },
    },
    {
      name: "sub_app02",
      entry: "http://localhost:9092",
      container: "#container",
      activeRule: "/sub_app02",
      props: {
        ...store.state.User,
        ...store.state.Setting,
        actions,
      },
    },
  ]);
  //第一个微用调用后开启的方法
  runAfterFirstMounted(() => {
    console.log("第一个微用调用后开启的方法");
  });
}
console.log("start qiankun");
console.log(window.__POWERED_BY_QIANKUN__, "window.__POWERED_BY_QIANKUN__");
// 启动 qiankun
start({
  sandbox: {
    strictStyleIsolation: true, //隔离主子应用样式
    // experimentalStyleIsolation: true, //   开启沙箱模式,实验性方案
  },
});
