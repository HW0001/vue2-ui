<template>
  <button
    @click="$emit('click')"
    class="g-button"
    :class="{
      [`g-button-icon-${iconPosition}`]: true,
      'g-icon-loading': loading,
    }"
  >
    <g-icon class="g-button-icon" v-if="icon" :icon-name="iconName"></g-icon>
    <span class="g-button-span"><slot /></span>
  </button>
</template>
<script>
import GIcon from "./GIcon.vue";
export default {
  name: "GButton",
  components: { GIcon },
  props: {
    icon: String,
    iconPosition: {
      type: String,
      default: "left",
    },
    loading: Boolean,
  },
  computed: {
    iconName() {
      return this.loading ? "loading" : this.icon;
    },
  },
};
</script>
<style lang="scss" scope>
.g-button {
  padding: 0.4em 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  border-radius: 4px;
  border: 1px solid rgb(217, 217, 217);
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &:hover {
    border-color: rgb(64, 169, 255);
    color: rgb(64, 169, 255);
    transition: all 500ms;
    .g-button-icon {
      fill: rgb(64, 169, 255);
    }
  }
  &:active {
    border-color: rgb(80, 151, 228);
    color: rgb(80, 151, 228);
    transition: all 500ms;
    .g-button-icon {
      fill: rgb(80, 151, 228);
    }
  }

  &.g-button-icon-left {
    .g-button-icon {
      margin-right: 0.2em;
      order: 1;
    }
    .g-button-span {
      order: 2;
    }
  }
  &.g-button-icon-right {
    .g-button-icon {
      margin-left: 0.2em;
      order: 2;
    }
    .g-button-span {
      order: 1;
    }
  }
  &.g-icon-loading {
    .g-button-icon {
      animation: iconanimate 1s infinite linear;
    }
  }
  @keyframes iconanimate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
