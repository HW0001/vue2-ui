<template>
  <div>
    <component v-if="demo" :is="demo"  :code="code" title="tabs" :tips="tip">
      <component  v-if="tabs" :is="tabs" :active-key.sync="tabsKey" :item-change="itemChange">
        <component  v-if="tabitem" :is="tabitem" title="第一项" item-key="1" disabled>测试1</component>
        <component v-if="tabitem" :is="tabitem"  title="第二项" item-key="2">测试2</component>
        <component v-if="tabitem" :is="tabitem"  title="第三项" item-key="3">测试3</component>
      </component>
      <hr />
    </component>
  </div>
</template>
<script>
export default {
  name: "gbuttomdemo",
  data() {
    return {
      code: ` 
    <g-tabs :active-key.sync="tabsKey" :item-change="itemChange">
        <g-tab-item title="第一项" item-key="1" disabled>测试1</g-tab-item>
        <g-tab-item title="第二项" item-key="2">测试2</g-tab-item>
        <g-tab-item title="第三项" item-key="3">测试3</g-tab-item>
    </g-tabs> 
          `,
      tip: `注：item-chang为点击选项卡时调用的函数，接收两个参数，next 和 nextKey，在传入的函数内部需手动调用next方法来切换下一个选项卡`,
      tabsKey: "2",
      tabs: null,
      tabitem: null,
      demo: null,
    };
  },
  mounted() {
    import("../../../src/lib/GTabs").then((moudle) => {
      this.tabs = moudle.default;
    });
    import("../../../src/lib/GTabItem").then((moudle) => {
      this.tabitem = moudle.default;
    });
    import("./demo").then((moudle) => {
      this.demo = moudle.default;
    });
  },
  methods: {
    itemChange(next, nextKey) {
      nextKey && next();
    },
  },
};
</script>