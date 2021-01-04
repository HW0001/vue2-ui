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
          const {left,top,width,height}=this.$refs.trigger.getBoundingClientRect()
          const {height:popheight}=el.getBoundingClientRect()
          let poptop=top-height-10
          if(poptop<popheight){
              poptop=top+height+10
          }
          el.style.left=`${left}px`
          el.style.top=`${poptop}px`
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