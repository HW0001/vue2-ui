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
  border: 1px solid red;
}
</style>
