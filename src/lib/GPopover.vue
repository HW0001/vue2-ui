<template>
  <div>
    <div v-if="visible" ref="contentWrapper" class="contentWrapper">
      <slot name="content"></slot>
    </div>
    <span
      @click.stop="toggleVisible"
      ref="trigger"
      style="display: inline-block"
      ><slot></slot
    ></span>
  </div>
</template>
<script>
export default {
  name: "GPopover",
  props: {
    trigger: {
      type: String,
      default: "click",
      validator: (value) => {
        return true||["top", "bottom", "left", "right"].indexOf(value) > -1;
      },
    },postion: {
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
      if (this.visible) {
        this.close();
      } else {
        this.open();
      }
    },
    open() {
      this.visible = true;
      this.$nextTick(() => {
        this.positionContent();
        this.onDocumentClick();
      });
    },
    close() {
      this.visible = false;
      document.removeEventListener("click", this.handle);
    },
    onDocumentClick() {
      this.$nextTick(() => {
        document.addEventListener("click", this.handle);
      });
    },
    handle(e) {
      if (
        this.$refs.contentWrapper &&
        !this.$refs.contentWrapper.contains(e.target)
      ) {
        this.close();
      }
    },
    positionContent() {
      const contentel = this.$refs.contentWrapper;
      const triggerel = this.$refs.trigger;
      document.body.append(contentel);
      const {width,height,left,top}=triggerel.getBoundingClientRect()
      let popleft=left+window.scrollX;
      let poptop=top+window.scrollY;
      contentel.style.left = `${popleft}px`;
      contentel.style.top = `${poptop}px`;
    },
  },
};
</script>
<style lang="scss" scoped>
.contentWrapper {
  position: absolute;
  background: #ffffff;
  z-index: 999;
  transform: translateY(-100%);
  padding: .5em 1em;
  border: 1px solid rgba(0,0,0,.7);
  border-radius: 4px;
  box-shadow: 0 0 1px 1px rgba(0,0,0,.25);
  margin-top: -10px;
}
</style>