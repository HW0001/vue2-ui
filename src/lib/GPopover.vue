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
      const handle = (e) => {
        let isUpdaet = true
        let el = e.target
        while(el !== null){
            if(el===this.$refs.contentWrapper){
                isUpdaet=false
                el=null
            }
            else if(el===document.body){
                el=null
            }else{
                el=el.parentNode
            }
        }
        if (isUpdaet) this.visible = false;
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
          const { width } = this.$refs.trigger.getBoundingClientRect();
          const {
            height: popheight,
            width: popwidth,
          } = el.getBoundingClientRect();
          let poptop = top - popheight - 12;
          if (this.trigger === "bottom") {
            poptop = top + popheight + 12;
          }
          if (this.trigger === "top" && poptop < 0) {
            poptop = top + popheight + 12;
          } else if (
            this.trigger === "bottom" &&
            poptop > document.body.getBoundingClientRect().height
          ) {
            poptop = top - popheight - 12;
          }
          console.log(popwidth);
          console.log(left);
          let popleft = left - (popwidth - width) / 2;
          console.log(popleft);
          if (this.trigger === "right") {
            poptop = top + popheight / 2;
            popleft = left - 12;
          }

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
  z-index: 999;
}
</style>