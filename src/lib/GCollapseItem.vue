<template>
  <div class="g-collapse-item" :class="itemClasses">
    <div class="g-collapse-item-title" @click="itemClick">
      <span>{{ title }}</span>
    </div>
      <div class="g-collapse-item-content" :class="{visible:visible}">
        <div><slot></slot></div>
      </div>
  </div>
</template>
<script>
export default {
  name: "GCollapseItem",
  props: {
    title: String,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    itemClick() {
      this.visible = !this.visible;
    },
  },
  computed: {
    itemClasses() {
      return {
        active: this.visible,
      };
    },
  },
  watch:{
      visible(val){
        if(val){
            
        }
      }
  }
};
</script>
<style lang="scss" scoped>
.g-collapse-item {
  $border-color: #ebebeb;
  > .g-collapse-item-title {
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
    padding: 1em 0;
    cursor: pointer;
  }
  > .g-collapse-item-content {
    padding-top: 0.5em;
    padding-bottom: 1em;
    overflow: hidden;
    will-change: height;
}
  &.active {
    > .g-collapse-item-title {
      border-bottom: none;
    }
    > .g-collapse-item-content {
      border-bottom: 1px solid $border-color;
    }
  }
  .visible{
      animation:  fade-in .3s ease-in-out;
      transform-origin: center top;
  }
  @keyframes fade-in {
      0%{
          height: 0;
      }
      100%{
          height: 40px;
          display: block;
      }
  }
}
</style>