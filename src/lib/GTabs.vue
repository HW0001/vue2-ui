<template>
  <div>
    <div class="g-tabs-nav" ref="tabsNav">
      <span
        v-for="(item, index) in titles"
        :key="index"
        @click="itemClick($event, item.itemKey, item.disabled)"
        :class="navClasses(item)"
        class="g-tabs-nav-items"
        >{{ item.title }}</span
      >
      <div class="g-tabs-underline" ref="underline"></div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "GTabs",
  data() {
    return {
      titles: [],
      eventBus: new Vue(),
      currentData: {
        el: null,
        key: null,
      },
    };
  },
  props: {
    activeKey: { type: String | Number, required: true },
    change: Function,
  },
  provide() {
    return { eventBus: this.eventBus };
  },
  computed: {
    tabLeft() {
      return this.$refs.tabsNav.getBoundingClientRect().left;
    },
  },
  mounted() {
    this.$children.forEach((vm, index) => {
      if (vm.$options.name !== "GTabItem")
        throw new Error("Wrong subcomponent type");
      this.titles.push({
        title: vm.$props.title,
        itemKey: vm.$props.itemKey,
        disabled: !!vm.$props.disabled,
      });
      if (vm.$props.itemKey === this.activeKey) {
        this.$nextTick(() => {
          const el = Array.from(this.$refs.tabsNav.children)[index];
          this.buildUnderLineStyle(el);
        });
      }
    });
    this.eventBus.$emit("itemClick", this.activeKey);
  },
  methods: {
    itemClick(e, key, disabled) {
      if (disabled) return;
      this.currentData = {
        el: e.target,
        key,
      };
      if (typeof this.change === "function") {
        this.change(this.next, this.currentData.key);
      } else {
        this.next();
      }
    },
    next() {
      this.buildUnderLineStyle(this.currentData.el);
      this.eventBus.$emit("itemClick", this.currentData.key);
      this.$emit("update:activeKey", this.currentData.key);
    },
    navClasses(item) {
      return {
        selected: this.activeKey === item.itemKey,
        disabled: item.disabled,
      };
    },
    buildUnderLineStyle(el) {
      const { width, left } = el.getBoundingClientRect();
      this.$refs.underline.style.width = `${width}px`;
      this.$refs.underline.style.left = `${left - this.tabLeft}px`;
    },
  },
};
</script>
<style lang="scss" scoped>
.g-tabs-nav {
  $active-color: rgb(64, 170, 255);
  $bgc-color: rgb(228, 231, 237);
  border-bottom: 2px solid $bgc-color;
  position: relative;
  > .g-tabs-nav-items {
    display: inline-block;
    padding: 0.5em 1em;
    cursor: pointer;
    &.selected {
      color: $active-color;
    }
    &.disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
  > .g-tabs-underline {
    display: inline-block;
    position: absolute;
    bottom: -2px;
    width: 100px;
    height: 0;
    border: 1px solid $active-color;
    transition: all 350ms;
  }
}
</style>