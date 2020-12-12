import GToast from "./GToast";
export default {
  install(Vue) {
    Vue.prototype.$toast = function(message) {
      const Constructor = Vue.extend(GToast);
      const vm = new Constructor();
      console.log(vm);
      vm.$slots.default = [message];
      const div = document.createElement("div");
      document.body.appendChild(div);
      vm.$mount(div);
    };
  },
};
