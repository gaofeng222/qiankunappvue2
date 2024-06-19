<template>
  <div class="home">
    <h1>This is an main_app home page</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  mounted() {
    window.addEventListener("popstate", (event) => {
      console.log("🚀 ~ window.addEventListener ~ event:", event);
    });
  },
};
</script>
