<template>
  <div>
    <demo :code="code" title="页面布局" :tips='tip'>
      <button @click="toastClick">点我</button>
    </demo>
  </div>
</template>
<script>
import GToast from "../../../src/lib/GToast-plugin";
import Vue from 'vue'
Vue.use(GToast)
import demo from "./demo";
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
          tip:`注：使用前需引用 GToast-plugin插件，再使用Vue.use(GToast-plugin),将$toast挂载至vue实例中`
    };
  },
  components: {
    demo,
  },
  methods: {
    toastClick() {
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
    },
  },
};
</script>