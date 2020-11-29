<template>
  <div class="ginput-wrapping">
    <input
      type="text"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
    />
  </div>
</template>
<script>
export default {
  name: "GInput",
  props: {
    value: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./scsshelper.scss";
.ginput-wrapping {
  display: inline-flex;
  font-size: 14px;
  > input {
    padding: 4px 8px;
    line-height: 1.5;
    border: 1px solid #666;
    border-radius: 4px;
    font-size: inherit;
    display: inline-block;
    &:focus {
      outline: none;
      border-color: $focus-color;
      box-shadow: inset 0 -2px 2px -2px $focus-color;
      transition: all 0.5s;
    }
    &:hover {
      border-color: $focus-color;
      transition: all 0.5s;
    }
    &[disabled] {
      border-color: #aaa;
      color: #aaa;
    }
  }
}
</style>
