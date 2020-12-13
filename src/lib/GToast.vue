<template>
  <div class="g-toast" :class="{ 'g-toast-leave': leave }">
    <div class="wrapper">
      <div v-if="useHtml" v-html="$slots.default[0]"></div>
      <slot v-else></slot>
    </div>
    <g-icon
      v-if="showClose"
      class="g-toast-icon"
      iconName="close"
      @click.native="iconClose"
    >
    </g-icon>
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
    useHtml: {
      type: Boolean,
      default: false,
    },
    leave: {
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
  position: fixed;
  left: 50%;
  top: 10px;
  transform: translateX(-50%);
  background-color: #fff;
  display: flex;
  align-items: center;
  max-width: 50%;
  color: #909399;
  animation: toast-animation 0.5s;
  > .wrapper {
    font-size: 14px;
    text-align: start;
    line-height: 1.5;
  }
  > .g-toast-icon {
    margin-left: 32px;
    cursor: pointer;
    flex-shrink: 0;
    fill: #909399;
  }
  @keyframes toast-animation {
    0% {
      top: -100%;
    }
    100% {
      top: 10px;
    }
  }
}
</style>
