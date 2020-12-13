<template>
  <div class="g-toast">
    <slot></slot>
    <g-icon
      v-if="showClose"
      class="g-toast-icon"
      iconName="close"
      @click.native="iconClose"
    ></g-icon>
  </div>
</template>
<script>
import GIcon from "./GIcon";
export default {
  name: "GToast",
  components: { GIcon },
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
      type: Number,
      default: 3,
    },
    showClose: {
      type: Boolean,
      default: false,
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
    iconClose() {
      this.close();
    },
  },
};
</script>
<style lang="scss" scope>
.g-toast {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  padding: 4px 16px;
  padding-right: 8px;
  text-align: center;
  background-color: #fff;
  vertical-align: middle;
  > .g-toast-icon {
    vertical-align: middle;
    margin-left: 8px;
    cursor: pointer;
  }
}
</style>
