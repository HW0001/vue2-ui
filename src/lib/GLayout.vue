<template>
  <section class="g-layout" :class="{ 'g-layout-sider': layoutClass }">
    <slot />
  </section>
</template>
<script>
export default {
  name: "GButtonGroup",
  data() {
    return {
      layoutClass: false,
    };
  },
  mounted() {
    if (this.$children.some((vm) => vm.$options.name === "GSider")) {
      this.layoutClass = true;
    }
  },
};
</script>
<style lang="scss" scope>
.g-layout {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  &.g-layout-sider {
    flex-direction: row;
  }
}
</style>
