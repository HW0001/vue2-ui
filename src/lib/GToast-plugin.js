export default {
  install(Vue) {
    Vue.prototype.$toast = function(message) {
      console.log(message);
    };
  },
};
