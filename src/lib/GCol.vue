<template>
  <div class="g-col" :class="{ [`span_${span}`]: span }">
    <slot />
  </div>
</template>
<script>
export default {
  name: "GCol",
  props: {
    span: [Number, String],
  },
};
</script>
<style lang="scss" scoped>
.g-col {
  width: 50%;
  border: 1px solid gray;
}
$class-prefix: span_;
@for $n from 1 through 24 {
  .#{$class-prefix}#{$n} {
    width: ($n/24) * 100%;
  }
}
</style>
