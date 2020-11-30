<template>
  <div class="g-col" :class="colClass" :style="colStyle">
    <slot />
  </div>
</template>
<script>
export default {
  name: "GCol",
  props: {
    span: [Number, String],
    offset: [Number, String],
  },
  data() {
    return {
      gutter: 0,
    };
  },
  computed: {
    colClass() {
      const { span, offset } = this;
      return { [`span_${span}`]: span, [`offset_${offset}`]: offset };
    },
    colStyle() {
      const { gutter } = this;
      return {
        paddingLeft: gutter / 2 + "px",
        paddingRight: gutter / 2 + "px",
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.g-col {
  width: 50%;
}
$class-prefix: span_;
@for $n from 1 through 24 {
  .#{$class-prefix}#{$n} {
    width: ($n/24) * 100%;
  }
}
$class-prefix: offset_;
@for $n from 1 through 24 {
  .#{$class-prefix}#{$n} {
    margin-left: ($n/24) * 100%;
  }
}
</style>
