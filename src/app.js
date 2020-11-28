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
