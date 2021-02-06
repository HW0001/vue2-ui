<template>
  <div>
    <component
      v-if="demo"
      :is="demo"
      :code="code"
      title="手风琴组件"
      :tips="tip"
    >
      <component
        v-if="collapse"
        :is="collapse"
        freedom
        mulitple
        :selected="['1', '2']"
      >
        <component
          v-if="collapseitem"
          :is="collapseitem"
          title="第一个"
          item-key="1"
        >
          <p>这是第一个标签的内容</p>
        </component>
        <component
          v-if="collapseitem"
          :is="collapseitem"
          title="第二个"
          item-key="2"
          >这是第二个标签的内容</component
        >
        <component
          v-if="collapseitem"
          :is="collapseitem"
          title="第三个"
          item-key="3"
          >这是第三个标签的内容</component
        >
      </component>
    </component>
  </div>
</template>
<script>
export default {
  data() {
    return {
      code: ` 
    <g-collapse freedom mulitple :selected='["1","2"]'>
        <g-collapse-item title="第一个" item-key="1">
            <p>这是第一个标签的内容</p>
        </g-collapse-item>
        <g-collapse-item title="第二个" item-key="2">
            这是第二个标签的内容
        </g-collapse-item>
        <g-collapse-item title="第三个" item-key="3">
            这是第三个标签的内容
        </g-collapse-item>
    </g-collapse>
          `,
      tip: ``,
      tabsKey: "2",
      collapse: null,
      collapseitem: null,
      demo: null,
    };
  },
  mounted() {
    import("../../../src/lib/GCollapse").then((moudle) => {
      this.collapse = moudle.default;
    });
    import("../../../src/lib/GCollapseItem").then((moudle) => {
      this.collapseitem = moudle.default;
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