<template>
  <section class="g-layout" :class="layoutClass">
    <slot />
  </section>
</template>
<script>
export default {
  name: "GButtonGroup",
  data() {
    return {
      layoutClass: false,
    };
  },
  mounted() {
    if (this.$children.some((vm) => vm.$options.name === "GSider")) {
      this.layoutClass = true;
    }
  },
};
</script>
<style lang="scss" scope>
.g-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
