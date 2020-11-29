<template>
  <div class="g-button-group">
    <slot />
  </div>
</template>
<script>
export default {
  name: "GButtonGroup",
  mounted() {
    const slots = this.$slots.default;
    slots.forEach((e) => {
      const tag = e.tag;
      if (tag && !tag.match(/\w*GButton\w*/)) {
        console.warn(
          `g-button-group应该存在子元素为g-button，但是却出现了${tag}`
        );
        console.log(232);
      }
    });
  },
};
</script>
<style lang="scss" scope>
.g-button-group {
  display: inline-flex;
  vertical-align: middle;
  .g-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
