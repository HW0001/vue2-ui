<template>
  <header class="g-header">
    <slot />
  </header>
</template>
<script>
export default {
  name: "GHeader",
};
</script>
<style lang="scss" scope>
.g-header {
  height: 100%;
  width: 100%;
  border: 1px solid red;
}
</style>
