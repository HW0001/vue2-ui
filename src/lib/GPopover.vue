<template>
  <div style="display: inline-block">
    <div
      v-if="visible"
      ref="contentWrapper"
      class="contentWrapper"
      :class="{ [`position-${position}`]: true }"
    >
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="trigger" style="display: inline-block"><slot></slot></span>
  </div>
</template>
<script>
export default {
  name: "GPopover",
  props: {
    trigger: {
      type: String,
      default: "click",
      validator: (value) => {
        return ["click", "hover"].indexOf(value) > -1;
      },
    },
    position: {
      type: String,
      default: "top",
      validator: (value) => {
        return ["top", "bottom", "left", "right"].indexOf(value) > -1;
      },
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    if (this.trigger === "click") {
      this.$refs.trigger.addEventListener("click", this.toggleVisible);
    } else {
      this.$refs.trigger.addEventListener("mouseenter", this.open);
      document.addEventListener("mousemove", this.hoverHandle);
    }
  },
  methods: {
    toggleVisible() {
      if (this.visible) {
        this.close();
      } else {
        this.open();
      }
    },
    open() {
      this.visible = true;
      this.$nextTick(() => {
        this.positionContent();
        this.onDocumentClick();
      });
    },
    close() {
      this.visible = false;
      document.removeEventListener("click", this.clickHandle);
    },
    onDocumentClick() {
      this.$nextTick(() => {
        document.addEventListener("click", this.clickHandle);
      });
    },
    clickHandle(e) {
      if (this.$refs.contentWrapper.contains(e.target)) {
      } else if (this.$refs.trigger.contains(e.target)) {
      } else {
        this.close();
      }
    },
    hoverHandle(e) {
      if (this.$refs.trigger && this.$refs.contentWrapper) {
        if (
          !this.$refs.trigger.contains(e.target) &&
          !this.$refs.contentWrapper.contains(e.target)
        ) {
          this.close();
        }
      }
    },
    positionContent() {
      const contentel = this.$refs.contentWrapper;
      const triggerel = this.$refs.trigger;
      document.body.append(contentel);
      const { width, height, left, top } = triggerel.getBoundingClientRect();
      const {
        width: contentWidth,
        height: contentHegiht,
      } = contentel.getBoundingClientRect();
      let popleft = left + window.scrollX;
      let poptop = top + window.scrollY;
      if (this.position === "bottom") {
        poptop = top + window.scrollY + height;
      } else if (this.position === "left") {
        popleft = left + window.scrollX - contentWidth;
        poptop = top + window.scrollY - (contentHegiht - height) / 2;
      } else if (this.position === "right") {
        popleft = left + window.scrollX + width;
        poptop = top + window.scrollY - (contentHegiht - height) / 2;
      }
      contentel.style.left = `${popleft}px`;
      contentel.style.top = `${poptop}px`;
    },
  },
  destroyed(){
      document.removeEventListener("mousemove",this.hoverHandle)
  }
};
</script>
<style lang="scss" scoped>
.contentWrapper {
  position: absolute;
  background: #ffffff;
  z-index: 999;
  padding: 0.5em 1em;
  border: 1px solid rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25);
  max-width: 20em;
  word-wrap: break-word;
  word-break: break-all;
  &::after,
  &::before {
    content: "";
    display: block;
    position: absolute;
    border: 10px solid transparent;
  }
  &.position-top {
    margin-top: -10px;
    transform: translateY(-100%);
    &::after {
      border-top-color: white;
      top: calc(100% - 1px);
    }
    &::before {
      border-top-color: black;
      top: 100%;
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::after {
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
    &::before {
      border-bottom-color: black;
      bottom: 100%;
    }
  }
  &.position-left {
    margin-left: -10px;
    &::after {
      border-left-color: white;
      left: calc(100% - 1px);
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      border-left-color: black;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::after {
      border-right-color: white;
      right: calc(100% - 1px);
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      border-right-color: black;
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>