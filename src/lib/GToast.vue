<template>
  <div class="g-toast">
    <slot />
  </div>
</template>
<script>
export default {
  name: "GToast",
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
      type: Number,
      default: 3,
    },
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.autoCloseDelay * 1000);
    }
  },
  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
    },
  },
};
</script>
<style lang="scss" scope>
.g-toast {
  position: absolute;
  top: 10px;
  left: 50%;
  border: 1px solid red;
  transform: translateX(-50%);
  font-size: 14px;
  padding: 4px 16px;
  text-align: center;
}
</style>
