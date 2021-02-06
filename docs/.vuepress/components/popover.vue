<template>
  <div>
    <component v-if="demo" :is="demo" :code="code" title="popover" :tips="tip">
      <component v-if="popover" :is="popover" position="right">
        <template v-slot:content>
          <p>这是一个弹出的popover</p>
        </template>
        <component  v-if="button" :is="button">点我</component>
      </component>
    </component>
  </div>
</template>
<script>
export default {
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
      button: null,
      popover: null,
      demo: null,
    };
  },
  mounted() {
    import("../../../src/lib/GPopover").then((moudle) => {
      this.popover = moudle.default;
    });
    import("../../../src/lib/GButton").then((moudle) => {
      this.button = moudle.default;
    });
    import("./demo").then((moudle) => {
      this.demo = moudle.default;
    });
  },
};
</script>