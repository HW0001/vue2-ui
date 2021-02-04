<template>
  <div>
    <demo :code="code" title="手风琴组件" :tips="tip">
        <g-collapse freedom mulitple :selected='["1","2"]'>
          <g-collapse-item title="第一个" item-key="1">
            <p>这是第一个标签的内容</p>
          </g-collapse-item>
          <g-collapse-item title="第二个" item-key="2"
            >这是第二个标签的内容</g-collapse-item
          >
          <g-collapse-item title="第三个" item-key="3"
            >这是第三个标签的内容</g-collapse-item
          >
        </g-collapse>
    </demo>
  </div>
</template>
<script>
import GCollapse from "../../../src/lib/GCollapse";
import GCollapseItem from "../../../src/lib/GCollapseItem";
import demo from "./demo";
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
    };
  },
  components: {
    demo,
    GCollapse,
    GCollapseItem,
  },
  methods: {
    itemChange(next, nextKey) {
      nextKey && next();
    },
  },
};
</script>