<template>
  <main class="g-main">
    <slot />
  </main>
</template>
<script>
export default {
  name: "GMain",
};
</script>
<style lang="scss" scope>
.g-main {
  height: 100%;
  width: 100%;
  border: 1px solid red;
}
</style>
