<template>
  <div class="g-toast">
    <slot />
  </div>
</template>
<script>
export default {
  name: "GToast",
};
</script>
<style lang="scss" scope>
.g-toast {
  flex-grow: 1;
}
</style>
