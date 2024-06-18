const { defineConfig } = require("@vue/cli-service");
const { name } = require("./package");
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  devServer: {
    port: 9091, // 端口号
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      // 修改 html 的 title
      args[0].title = name;
      return args;
    });
    config.output.libraryTarget("umd");
    config.output.library(`${name}-[name]`);
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
  },
});
