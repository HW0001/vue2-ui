<template>
  <div>
    <div v-if="visible"><slot name="content"></slot></div>
    <span @click.stop="toggleVisible"><slot></slot></span>
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
    this.$nextTick(()=>{
       const handle=()=>{
            this.visible=false
        }
        document.addEventListener("click",handle)
    })
  },
  methods: {
    toggleVisible() {
      this.visible = !this.visible;
    },
  },
};
</script>
<style lang="scss" scoped>
</style>