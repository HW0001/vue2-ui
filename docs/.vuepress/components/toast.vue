<template>
  <div>
    <component v-if="demo" :is="demo" :code="code" title="toast" :tips="tip">
      <component v-if="button" :is="button" @click="toastClick">点我</component>
    </component>
  </div>
</template>
<script>
export default {
  name: "gbuttomdemo",
  data() {
    return {
      code: ` 
    this.$toast("这是一个toast" + Math.random() * 100, {
        autoClose: false,
        autoCloseDelay: 2,
        showClose: true,
        useHtml: false,
        position: "top",
        closeCallBack: function () {
          console.log("我关闭了");
        },
    });
          `,
      tip: `注：使用前需引用 GToast-plugin插件，再使用Vue.use(GToast-plugin),将$toast挂载至vue实例中`,
      demo: null,
      button: null,
    };
  },
  mounted() {
    import("./demo").then((moudle) => {
      this.demo = moudle.default;
    });
    import("../../../src/lib/GButton").then((moudle) => {
      this.button = moudle.default;
    });
    import("../../../src/lib/GToast-plugin").then((moudle) => {
      import("vue").then((m) => {
        m.default.use(moudle.default);
      });
    });
  },
  methods: {
    toastClick() {
      this.$toast("这是一个toast" + Math.random() * 100, {
        autoClose: false,
        autoCloseDelay: 2,
        showClose: true,
        useHtml: false,
        position: "top",
        closeCallBack: function() {
          console.log("我关闭了");
        },
      });
    },
  },
};
</script>
