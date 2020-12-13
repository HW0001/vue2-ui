import GToast from "./GToast";
export default {
  install(Vue) {
    Vue.prototype.$toast = function(message, toastOptions) {
      const Constructor = Vue.extend(GToast);
      const vm = new Constructor({
        propsData: toastOptions,
      });
      vm.$slots.default = [message];
      vm.$mount();
      document.body.appendChild(vm.$el);
    };
  },
};
