<template>
  <el-container>
    <el-aside :width="!isCollpase?'200px':'55px'">
      <el-menu
        :default-active="activeRoute"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
        :collapse="isCollpase"
        unique-opened
      >
        <el-menu-item index="/">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/about">
          <i class="el-icon-document"></i>
          <span slot="title">关于</span>
        </el-menu-item>
        <el-submenu index="/sub_app01">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>子应用01</span>
          </template>
          <el-menu-item index="/sub_app01/">
            <i class="el-icon-setting"></i>
            <span slot="title">子应用1-首页</span>
          </el-menu-item>
          <el-menu-item index="/sub_app01/about">
            <i class="el-icon-set-up"></i>
            <span slot="title">子应用1-关于</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="/sub_app02">
          <template slot="title">
            <i class="el-icon-user-solid"></i>
            <span>子应用02</span>
          </template>
          <el-menu-item index="/sub_app02/">
            <i class="el-icon-discover"></i>
            <span slot="title">子应用2-首页</span>
          </el-menu-item>
          <el-menu-item index="/sub_app02/about">
            <i class="el-icon-timer"></i>
            <span slot="title">子应用2-关于</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <div class="top-header">
          <div class="left">
            <div>
              <i
                @click="handleToggleSide(true)"
                v-if="!isCollpase"
                class="icon-toggle el-icon-s-fold"
              ></i>
              <i @click="handleToggleSide(false)" v-else class="icon-toggle el-icon-s-unfold"></i>
            </div>
            <div>
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item
                  v-for="(item,index) in breadcrumbLists"
                  :key="index"
                  :to="{ path: item.path === '' ? '/' : item.path }"
                >{{ item.meta.title }}</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </div>
          <div class="right">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            <el-dropdown class="top-info" @command="handleCommand">
              <span class="el-dropdown-link">
                欢迎你,{{ userInfo.name }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <el-main>
        <transition name="el-fade-in-linear">
          <div>
            <router-view></router-view>
            <div id="container"></div>
          </div>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { Breadcrumb } from "element-ui";
import { mapGetters, mapActions } from "vuex";
import actions from "../shared/actions";
export default {
  data() {
    return {
      breadcrumbLists: [],
      activeRoute: "/sub_app02",
    };
  },
  watch: {
    $route: {
      handler(newRoute) {
        if (newRoute) {
          console.log("🚀 ~ handler ~ newRoute:", newRoute);
          this.activeRoute = newRoute.path;
          this.breadcrumbLists = newRoute.matched;
        }
      },
      immediate: true,
    },
  },
  computed: {
    ...mapGetters(["isCollpase", "userInfo"]),
  },
  methods: {
    ...mapActions(["changeCollpase", "setUserInfo"]),
    handleToggleSide(state) {
      this.changeCollpase(state);
    },
    handleCommand(command) {
      if (command === "logout") {
        const userInfo = {};
        localStorage.setItem("userInfo", "");
        this.setUserInfo(userInfo);
        actions.setGlobalState({ userInfo });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.el-aside {
  background: #586169;
  .el-menu {
    border-right: none;
  }
}
.el-header {
  padding: 0;
  .top-header {
    padding: 0 20px;
    height: 55px;
    line-height: 55px;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon-toggle {
      cursor: pointer;
    }
    .left {
      display: flex;
      align-items: center;
      .el-breadcrumb {
        margin-left: 20px;
      }
    }
    .right {
      .el-avatar,
      .top-info {
        vertical-align: middle;
      }
      .top-info {
        margin-left: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>