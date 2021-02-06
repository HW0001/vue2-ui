<template>
  <div>
    <component v-if="demo" :is="demo" :code="code" title="自定义关闭popover" :tips="tip">
      <component v-if="popover" :is="popover" position="top">
        <template v-slot:content="{ close }">
          <p>这是一个弹出的popover</p>
          <component v-if="button" :is="button" @click="close">关闭</component>
        </template>
        <component v-if="button" :is="button">点我</component>
      </component>
    </component>
  </div>
</template>
<script>
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