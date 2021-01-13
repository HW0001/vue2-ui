<template>
  <div class="g-collapse" @addItem="addItem">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "GCollapse",
  props: {
    selected: { type: Array | String, default: "" },
    mulitple: { type: Boolean, default: false },
    freedom: { type: Boolean, default: false },
  },
  data() {
    return {
      eventBus: new Vue(),
      freedomKey: [],
    };
  },
  provide() {
    return { eventBus: this.eventBus };
  },
  methods: {
    removeItem(key) {
      if (this.freedom) {
        if (this.mulitple) {
          const index = this.freedomKey.indexOf(key);
          index > -1 && this.freedomKey.splice(index, 1);
        } else {
          this.freedomKey = [];
        }
      } else {
        if (!this.mulitple) {
          this.$emit("update:selected", key);
        } else {
          const index = this.selected.indexOf(key);
          index > -1 &&
            this.$emit(
              "update:selected",
              this.selected.filter((s) => s !== key)
            );
        }
      }
      this.notify();
    },
    addItem(key) {
      if (this.freedom) {
        if (this.mulitple) {
          this.freedomKey.push(key);
        } else {
          this.freedomKey = [key];
        }
      } else {
        if (!this.mulitple) {
          this.$emit("update:selected", key);
        } else {
          this.$emit("update:selected", [...this.selected, key]);
        }
      }
      this.notify();
    },
    notify() {
      this.$nextTick(() => {
        this.eventBus.$emit(
          "collapseSelected",
          this.freedom ? this.freedomKey : this.selected
        );
      });
    },
  },
  mounted() {
    if (this.freedom) {
        this.freedomKey=JSON.parse(JSON.stringify(this.selected))
    } else {
      if (!this.mulitple && typeof this.selected !== "string")
        throw new Error("mulitple is true ,expect 'selected' to be a String ");
      if (this.mulitple && !Array.isArray(this.selected))
        throw new Error("mulitple is false ,expect 'selected' to be a Array ");
    }
    this.eventBus.$on("removeItem", this.removeItem);
    this.eventBus.$on("addItem", this.addItem);
    this.notify();
  },
};
</script>
<style lang="scss" scoped>
.g-collapse {
  padding: 1em 1em;
  border: 1px solid rgba(153, 153, 153, 0.3);
  border-radius: 4px;
  padding: 1em;
  > div:not(:first-child) {
    margin-top: -1px;
  }
}
</style>