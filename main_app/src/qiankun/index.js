import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "sub_app01",
    entry: "//localhost:9091",
    container: "#container",
    activeRule: "/sub_app01",
  },
  {
    name: "sub_app02",
    entry: "http://localhost:9092",
    container: "#container",
    activeRule: "/sub_app02",
  },
]);
console.log("start qiankun");
console.log(window.__POWERED_BY_QIANKUN__, "window.__POWERED_BY_QIANKUN__");
// 启动 qiankun
start();
