<template>
  <div class="about">
    <h1>This is an sub_app01 about page</h1>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  mounted() {
    window.addEventListener("popstate", function (event) {
      // event.state 就是通过 history.pushState 传递的状态对象
      console.log(event.state, "123456"); // 输出：{someData: 'value'}
    });
  },
};
</script>