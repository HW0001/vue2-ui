<template>
  <div class="g-collapse-item">
    <div class="g-collapse-item-title" @click="itemClick" ref="title">
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
    title: {
      type: String,
      required: true,
    },
    itemKey: {
      type: String || Number,
      required: true,
    },
  },
  inject: ["eventBus"],
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    itemClick() {
      if (this.visible) {
        this.eventBus.$emit("removeItem", this.itemKey);
      } else {
        this.eventBus.$emit("addItem", this.itemKey);
      }
    },
    beforeEnter(el) {
      el.style.height = 0;
    },
    enter(el, done) {
      this.$refs.title.style.borderBottom = "none";
      let height = el.scrollHeight;
      el.style.transition = "height .3s ease-in-out";
      el.style.height = `${height}px`;
      el.addEventListener("transitionend", () => {
        done();
      });
    },
    afterEnter(el) {
      el.style.borderBottom = "1px solid rgba(153,153,153,.4)";
    },
    leave(el, done) {
      el.style.height = 0;
      el.addEventListener("transitionend", () => {
        done();
      });
    },
    afterLeave(el) {
      this.$refs.title.style.borderBottom = "1px solid rgba(153,153,153,.4)";
    },
  },
  mounted() {
    this.eventBus.$on("collapseSelected", (selected) => {
      this.visible = selected ===this.itemKey || selected.indexOf(this.itemKey) > -1;
    });
  },
};
</script>
<style lang="scss" scoped>
.g-collapse-item {
  $border-color: rgba(153,153,153,.4);
  > .g-collapse-item-title {
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
    padding: .5em 0;
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
