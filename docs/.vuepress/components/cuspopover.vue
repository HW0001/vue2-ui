<template>
  <div>
    <demo :code="code" title="自定义关闭popover" :tips="tip">
        <g-popover position="top">
            <template v-slot:content="{close}">
              <p>这是一个弹出的popover</p>
              <g-button @click="close">关闭</g-button>
            </template>
            <g-button>点我</g-button>
          </g-popover>
    </demo>
  </div>
</template>
<script>
import GPopover from "../../../src/lib/GPopover";
import GButton from "../../../src/lib/GButton";
import demo from "./demo";
export default {
  name: "gbuttomdemo",
  data() {
    return {
      code: ` 
        <g-popover position="top">
            <template v-slot:content="{close}">
              <p>这是一个弹出的popover</p>
              <g-button @click="close">关闭</g-button>
            </template>
            <g-button>点我</g-button>
        </g-popover>
          `,
      tip: `注：content插槽提供close接口，用于关闭popover`,
    };
  },
  components: {
    demo,
    GPopover,
    GButton
  }, 
};
</script>