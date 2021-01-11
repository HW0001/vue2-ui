import Vue from "vue";
import GButton from "./lib/GButton";
import GButtonGroup from "./lib/GButtonGroup";
import GIcon from "./lib/GIcon";
import GInput from "./lib/GInput";
import GCol from "./lib/GCol";
import GRow from "./lib/GRow";
import GLayout from "./lib/GLayout";
import GMain from "./lib/GMain";
import GSider from "./lib/GSider";
import GHeader from "./lib/GHeader";
import GFooter from "./lib/GFooter";
import GToast from "./lib/GToast-plugin";
import GTabs from "./lib/GTabs";
import GTabItem from "./lib/GTabItem";
import GPopover from "./lib/GPopover";
import GCollapse from "./lib/GCollapse";
import GCollapseItem from "./lib/GCollapseItem";

Vue.component("g-button", GButton);
Vue.component("g-icon", GIcon);
Vue.component("g-button-group", GButtonGroup);
Vue.component("g-input", GInput);
Vue.component("g-row", GRow);
Vue.component("g-col", GCol);
Vue.component("g-layout", GLayout);
Vue.component("g-main", GMain);
Vue.component("g-sider", GSider);
Vue.component("g-header", GHeader);
Vue.component("g-footer", GFooter);
Vue.component("g-tabs", GTabs);
Vue.component("g-tab-item", GTabItem);
Vue.component("g-popover", GPopover);
Vue.component("g-collapse", GCollapse);
Vue.component("g-collapse-item", GCollapseItem);

Vue.use(GToast);

new Vue({
  el: "#app",
  data: {
    mess: "hi",
    tabsKey: "2",
    cols: [ "2"],
  },
  methods: {
    changes(e) {
      console.log(e);
    },
    toastClick() {
      this.$toast("这是一个toast" + Math.random() * 100, {
        autoClose: true,
        autoCloseDelay: 2,
        showClose: true,
        useHtml: false,
        position: "top",
        closeCallBack: function() {
          console.log("我关闭了");
        },
      });
    },
    itemChange(next, nextkey) {
      console.log(nextkey);
      next();
    },
    xxx() {
      console.log("xxx");
    },
  },
});
