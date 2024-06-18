<template>
  <div id="app">
    <nav>
      main_app
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/sub_app01/">sub01_app_Home</router-link>|
      <router-link to="/sub_app01/about">sub01_app_About</router-link>|
      <router-link to="/sub_app02/">sub02_app_Home</router-link>|
      <router-link to="/sub_app02/about">sub02_app_About</router-link>|
    </nav>
    <div id="container"></div>
    <router-view />
  </div>
</template>
<script>
export default {
  computed: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
