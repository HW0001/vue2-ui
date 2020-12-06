<template>
  <transition name="fade">
    <aside class="g-sider" v-if="visiable">
      <slot></slot>
      <button @click="toggle">关闭</button>
    </aside>
  </transition>
</template>
<script>
export default {
  name: "GSider",
  data() {
    return {
      visiable: true,
    };
  },
  methods: {
    toggle() {
      this.visiable = false;
    },
  },
};
</script>
<style lang="scss" scope>
.g-sider {
  width: 200px;
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  margin-left: -180px;
}
</style>
