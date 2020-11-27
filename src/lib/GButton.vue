<template>
  <button class="g-button" :class="{ [`g-button-icon-${iconPostion}`]: true }">
    <g-icon
      class="g-button-icon"
      v-if="iconName"
      :icon-name="iconName"
    ></g-icon>
    <span class="g-button-span"><slot /></span>
  </button>
</template>
<script>
export default {
  props: {
    iconName: String,
    iconPostion: {
      type: String,
      default: "left",
    },
  },
};
</script>
<style lang="scss">
.g-button {
  $focus-color: rgb(64, 169, 255);
  $active-color: rgb(80, 151, 228);

  padding: 0.45em 1em;
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
    border-color: $focus-color;
    color: $focus-color;
    transition: all 500ms;
    .g-button-icon {
      fill: $focus-color;
    }
  }
  &:active {
    border-color: $active-color;
    color: $active-color;
    transition: all 500ms;
    .g-button-icon {
      fill: $active-color;
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
}
</style>
