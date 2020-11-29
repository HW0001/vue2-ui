<template>
  <div class="ginput-wrapping" :class="{ error: errorMessage }">
    <input
      type="text"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      v-on="$listeners"
    />
    <template v-if="errorMessage">
      <g-icon iconName="error" class="icon-error"></g-icon>
      <span class="span-error">{{ errorMessage }}</span>
    </template>
  </div>
</template>
<script>
import GIcon from "./GIcon";
export default {
  components: { GIcon },
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
    errorMessage: String,
  },
};
</script>
<style lang="scss" scoped>
@import "./scsshelper.scss";
.ginput-wrapping {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: inherit;
  flex-wrap: wrap;
  > *:not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    padding: 4px 8px;
    line-height: 1.3;
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
  &.error > input {
    border-color: $error-color;
  }
  .icon-error {
    fill: $error-color;
  }
  .span-error {
    color: $error-color;
  }
}
</style>
