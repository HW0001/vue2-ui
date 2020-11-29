<template>
  <svg class="icon">
    <use :xlink:href="`#i-${iconName}`"></use>
  </svg>
</template>
<script>
export default {
  name: "GIcon",
  props: ["iconName"],
};
</script>
<style lang="scss" scope>
.icon {
  width: 1em;
  height: 1em;
}
</style>
