<template>
  <div
    class="g-row"
    :style="{ marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px' }"
  >
    <slot />
  </div>
</template>
<script>
export default {
  name: "GRow",
  props: {
    gutter: [Number, String],
  },
  mounted() {
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter;
    });
  },
};
</script>
<style lang="scss" scoped>
.g-row {
  display: flex;
  margin-bottom: 20px;
}
</style>
