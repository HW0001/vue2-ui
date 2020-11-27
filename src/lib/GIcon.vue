<template>
  <svg class="icon">
    <use :xlink:href="`#i-${iconName}`"></use>
  </svg>
</template>
<script>
export default {
  props: ["iconName"],
};
</script>
<style lang="scss">
.icon {
  width: 1em;
  height: 1em;
}
</style>
