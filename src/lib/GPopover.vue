<template>
  <div>
    <div v-if="visible" ref="contentWrapper" class="contentWrapper">
      <slot name="content"></slot>
    </div>
    <span @click.stop="toggleVisible" ref="trigger"><slot></slot></span>
  </div>
</template>
<script>
export default {
  name: "GPopover",
  props: {
    trigger: {
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
  mounted() {},
  methods: {
    toggleVisible() {
      this.visible = !this.visible;
      this.$nextTick(() => {
        if (this.visible) {
         this.positionContent()
         this.globalEvent();
        }
      });
    },
    globalEvent() {
      const handle = (e) => {
        if (!this.$refs.contentWrapper.contains(e.target)) {
          this.visible = false;
          document.removeEventListener("click", handle);
        }
      };
      this.$nextTick(() => {
        document.addEventListener("click", handle);
      });
    },
    positionContent(){
         const el = this.$refs.contentWrapper;
          document.body.append(el);
          const top = this.$refs.trigger.offsetTop;
          const left = this.$refs.trigger.offsetLeft;
          const { width, height } = this.$refs.trigger.getBoundingClientRect();
          const {
            height: popheight,
            width: popwidth,
          } = el.getBoundingClientRect();
          let poptop = top - popheight - 8;
          if (this.trigger === "bottom") {
            poptop = top + popheight + 8;
          }
          if (this.trigger === "top" && poptop < 0) {
            poptop = top + popheight + 8;
          } else if (
            this.trigger === "bottom" &&
            poptop > document.body.getBoundingClientRect().height
          ) {
            poptop = top - popheight - 8;
          }
          let popleft = left - popwidth / 2 + width / 2;
          if (this.trigger === "right") {
            popleft = left + width + 8;
            poptop = top;
          }
          el.style.left = `${popleft}px`;
          el.style.top = `${poptop}px`;
    }
  },
};
</script>
<style lang="scss" scoped>
.contentWrapper {
  position: absolute;
  background: #ffffff;
  z-index: 999;
}
</style>