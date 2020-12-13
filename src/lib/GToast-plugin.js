import GToast from "./GToast";
export default {
  install(Vue) {
    Vue.prototype.$toast = function(message) {
      const Constructor = Vue.extend(GToast);
      const vm = new Constructor({
        propsData: {
          autoClose: false,
          showClose: true,
        },
      });
      vm.$slots.default = [message];
      vm.$mount();
      document.body.appendChild(vm.$el);
    };
  },
};
