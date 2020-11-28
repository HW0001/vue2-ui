<template>
  <div class="g-button-group">
    <slot />
  </div>
</template>
<style lang="scss">
.g-button-group {
  display: inline-flex;
  vertical-align: middle;
  .g-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
