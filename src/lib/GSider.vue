<template>
  <aside class="g-sider">
    <slot />
  </aside>
</template>
<script>
export default {
  name: "GSider",
};
</script>
<style lang="scss" scope>
.g-sider {
  height: 100%;
  width: 100%;
  border: 1px solid red;
}
</style>
