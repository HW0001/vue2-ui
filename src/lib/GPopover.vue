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
  mounted() {
    this.$nextTick(() => {
      const handle = () => {
        this.visible = false;
      };
      document.addEventListener("click", handle);
    });
  },
  methods: {
    toggleVisible() {
      this.visible = !this.visible;
      this.$nextTick(() => {
        if (this.visible) {
          const el = this.$refs.contentWrapper;
          document.body.append(el);
          const top = this.$refs.trigger.offsetTop;
          const left = this.$refs.trigger.offsetLeft;
          const {
            height: popheight,
            width: popwidth,
          } = el.getBoundingClientRect();
          let poptop = top - popheight - 10;
          if (this.trigger === "bottom") {
            poptop = top + popheight + 10;
          }
          if (this.trigger === "top" && poptop < 0) {
            poptop = top + popheight + 10;
          } else if (
            this.trigger === "bottom" &&
            poptop > document.body.getBoundingClientRect().height
          ) {
            poptop = top - popheight - 10;
          }
          
         let popleft = left - popwidth / 2;
          if (popleft < 0) {
            popleft = left;
          }
            console.log(poptop);
          el.style.left = `${popleft}px`;
          el.style.top = `${poptop}px`;
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.contentWrapper {
  position: absolute;
  background: #ffffff;
}
</style>