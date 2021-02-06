<template>
  <div>
    <component v-if="demo" :is="demo"  :code="code" title="页面布局" :tips='tip'>
      <component v-if="button" :is="button" @click="toastClick">点我</component>
    </component>
  </div>
</template>
<script>
import GToast from "../../../src/lib/GToast-plugin";
import Vue from 'vue'
Vue.use(GToast)
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
          tip:`注：使用前需引用 GToast-plugin插件，再使用Vue.use(GToast-plugin),将$toast挂载至vue实例中`,
          demo:null,
          button:null
    };
  },
  mounted() {
   import("./demo").then((moudle) => {
      this.demo = moudle.default;
    });
       import("../../../src/lib/GButton").then((moudle)=>{
      this.button=moudle.default
      })
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