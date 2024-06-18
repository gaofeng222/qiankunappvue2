import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Layout from "../layout/default.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
    meta: {
      title: "首页",
    },
    component: Layout,
    children: [
      {
        path: "/home",
        name: "home",
        component: HomeView,
        meta: {
          title: "首页",
        },
      },
      {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
        meta: {
          title: "关于",
        },
      },
      {
        path: "/sub_app01",
        name: "sub_app01",
        meta: {
          title: "子应用1",
        },
        children: [
          {
            path: "/sub_app01/",
            name: "sub01-home",
            meta: {
              title: "子应用1-首页",
            },
          },
          {
            path: "/sub_app01/about",
            name: "sub01-about",
            meta: {
              title: "子应用1-关于",
            },
          },
        ],
      },
      {
        path: "/sub_app02",
        name: "sub_app02",
        meta: {
          title: "子应用2",
        },
        children: [
          {
            path: "/sub_app02/",
            name: "sub02-home",
            meta: {
              title: "子应用2-首页",
            },
          },
          {
            path: "/sub_app02/about",
            name: "sub02-about",
            meta: {
              title: "子应用2-关于",
            },
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

const originalPush = VueRouter.prototype.push;
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default router;
