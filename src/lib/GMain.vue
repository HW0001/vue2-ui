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
  flex-grow: 1;
}
</style>
