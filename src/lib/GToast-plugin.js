import GToast from "./GToast";
let vm;
export default {
  install(Vue) {
    Vue.prototype.$toast = function(message, toastOptions) {
      if (vm) {
        !vm.leave && vm.close();
        vm = null;
      }
      const Constructor = Vue.extend(GToast);
      vm = new Constructor({
        propsData: toastOptions,
      });
      vm.$slots.default = [message];
      vm.$mount();
      document.body.appendChild(vm.$el);
    };
  },
};
