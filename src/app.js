import Vue from "vue";
import GButton from "./lib/GButton";
import GButtonGroup from "./lib/GButtonGroup";
import GIcon from "./lib/GIcon";

Vue.component("g-button", GButton);
Vue.component("g-icon", GIcon);
Vue.component("g-button-group", GButtonGroup);

new Vue({
  el: "#app",
});

import chai from "chai";
var expect = chai.expect;

{
  var constructor = Vue.extend(GButton);
  const vm = new constructor({
    propsData: {
      icon: "setting",
    },
  });
  vm.$mount();
  const icon = vm.$el.querySelector("use").getAttribute("xlink:href");
  expect(icon).to.eq("#i-setting");
}

{
  var constructor = Vue.extend(GButton);
  const vm = new constructor({
    propsData: {
      icon: "setting",
    },
  });
  vm.$on("click", function () {
    console.log(2);
  });
  vm.$mount("#test");
  vm.$el.click();
}
