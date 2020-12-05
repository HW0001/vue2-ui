<template>
  <footer class="g-footer">
    <slot />
  </footer>
</template>
<script>
export default {
  name: "GFooter",
};
</script>
<style lang="scss" scope>
.g-footer {
  height: 100%;
  width: 100%;
  border: 1px solid red;
}
</style>
