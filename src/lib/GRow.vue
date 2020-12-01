<template>
  <div class="g-row" :style="rowStyle" :class="rowClass">
    <slot />
  </div>
</template>
<script>
export default {
  name: "GRow",
  props: {
    gutter: [Number, String],
    align: {
      type: String,
      default: "center",
      validator(value) {
        return ["left", "center", "right"].indexOf(value) > -1;
      },
    },
  },
  computed: {
    rowStyle() {
      const { gutter } = this;
      return {
        marginLeft: -gutter / 2 + "px",
        marginRight: -gutter / 2 + "px",
      };
    },
    rowClass() {
      return ["g-row-" + this.align];
    },
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
  flex-wrap: wrap;
  margin-bottom: 20px;
  &.g-row-left {
    justify-content: flex-start;
  }
  &.g-row-center {
    justify-content: center;
  }
  &.g-row-right {
    justify-content: flex-end;
  }
}
</style>
