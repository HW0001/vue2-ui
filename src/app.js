import Vue from "vue";
import GButton from "./lib/GButton";
import GButtonGroup from "./lib/GButtonGroup";
import GIcon from "./lib/GIcon";
import GInput from "./lib/GInput";

Vue.component("g-button", GButton);
Vue.component("g-icon", GIcon);
Vue.component("g-button-group", GButtonGroup);
Vue.component("g-input", GInput);

new Vue({
  el: "#app",
});
