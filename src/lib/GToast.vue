<template>
  <div class="g-toast" :class="toastClasses">
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
    position: {
      type: String,
      default: "top",
      validator: function (value) {
        return ["top", "middle", "bottom"].indexOf(value) > -1;
      },
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
      this.leave = true;
      setTimeout(() => {
        this.$el.remove();
        this.$destroy();
      }, 1000);
    },
    iconClose() {
      this.close();
    },
  },
  computed: {
    toastClasses() {
      return {
        [`g-toast-leave-${this.position}`]: this.leave,
        [`g-toast-position-${this.position}`]: true,
      };
    },
  },
};
</script>
<style lang="scss" scope>
.g-toast {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  display: flex;
  align-items: center;
  max-width: 50%;
  color: #909399;
  &.g-toast-position-top {
    top: 10px;
    animation: toast-animation-top 0.5s;
  }
  &.g-toast-position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
    animation: toast-animation-middle 0.5s;
  }
  &.g-toast-position-bottom {
    bottom: 10px;
    animation: toast-animation-bottom 0.5s;
  }
  &.g-toast-leave-top {
    top: -100%;
    transition: 2s;
  }
  &.g-toast-leave-middle {
    transform: translate(-50%,-40px);
    transition: 1s;
  }
  &.g-toast-leave-bottom {
    bottom: -100%;
    transition: 2s;
  }
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
  @keyframes toast-animation-top {
    0% {
      top: -100%;
    }
    100% {
      top: 10px;
    }
  }
  @keyframes toast-animation-middle {
    0% {
      top: calc(50%);
      transform: translate(-50%, calc(-50% - 40px));
    }
    100% {
      transform: translate(-50%, -50%);
    }
  }
  @keyframes toast-animation-bottom {
    0% {
      bottom: -100%;
    }
    100% {
      bottom: 10px;
    }
  }
}
</style>
