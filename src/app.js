import Vue from "vue";
import GButton from "./lib/GButton";
import GButtonGroup from "./lib/GButtonGroup";
import GIcon from "./lib/GIcon";
import GInput from "./lib/GInput";
import GCol from "./lib/GCol";
import GRow from "./lib/GRow";

Vue.component("g-button", GButton);
Vue.component("g-icon", GIcon);
Vue.component("g-button-group", GButtonGroup);
Vue.component("g-input", GInput);
Vue.component("g-row", GRow);
Vue.component("g-col", GCol);

new Vue({
  el: "#app",
  data: {
    mess: "hi",
  },
  methods: {
    changes(e) {
      console.log(e);
    },
  },
});
