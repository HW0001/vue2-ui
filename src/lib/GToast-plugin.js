import GToast from "./GToast";
export default {
  install(Vue) {
    Vue.prototype.$toast = function(message) {
      const Constructor = Vue.extend(GToast);
      const vm = new Constructor();
      vm.$slots.default = [message];
      vm.$mount();
      document.body.appendChild(vm.$el);
    };
  },
};
