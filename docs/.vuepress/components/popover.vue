<template>
  <div>
    <demo :code="code" title="popover" :tips="tip">
      <g-popover position="right">
        <template v-slot:content>
         <p>这是一个弹出的popover</p>
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
      <g-popover position="right">
            <template v-slot:content>
                <p>这是一个弹出的popover</p>
            </template>
         <g-button>点我</g-button>
      </g-popover>
          `,
      tip: `注：popover内部有两个插槽，默认插槽是触发源，content插槽用于显示内容`,
    };
  },
  components: {
    demo,
    GPopover,
    GButton
  }, 
};
</script>