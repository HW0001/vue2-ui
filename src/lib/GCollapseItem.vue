<template>
  <div class="g-collapse-item">
    <div class="g-collapse-item-title" @click="itemClick">
      <span>{{ title }}</span>
    </div>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <div class="g-collapse-item-content" v-show="visible">
        <slot></slot>
      </div>
    </transition>
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
    beforeEnter(el) {
      el.style.height = 0;
    },
    enter(el, done) {
      let height = el.scrollHeight;
      el.style.transition = "height .3s ease-in-out";
      el.style.height = `${height}px`;
      el.addEventListener("transitionend", () => {
        done();
      });
    },
    afterEnter(el) {},
    leave(el, done) {
      el.style.height = 0;
      el.addEventListener("transitionend", () => {
        done();
      });
    },
    afterLeave(el) {},
  },
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
}
</style>
