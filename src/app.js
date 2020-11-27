import Vue from "vue";
import GButton from "./lib/GButton";
import GIcon from "./lib/GIcon";

Vue.component("g-button", GButton);
Vue.component("g-icon", GIcon);

new Vue({
  el: "#app",
});
