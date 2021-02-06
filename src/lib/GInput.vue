<template>
  <div class="ginput-wrapping" :class="{ error: error }">
    <input
      type="text"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    />
    <template v-if="error">
      <g-icon iconName="error" class="icon-error"></g-icon>
      <span class="span-error">{{ error }}</span>
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
    error: String,
  },
};
</script>
<style lang="scss" scoped>
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
      border-color: rgb(64, 169, 255);
      box-shadow: inset 0 -2px 2px -2px rgb(64, 169, 255);
      transition: all 0.5s;
    }
    &:hover {
      border-color: rgb(80, 151, 228);
      transition: all 0.5s;
    }
    &[disabled] {
      border-color: #aaa;
      color: #aaa;
    }
  }
  &.error > input {
    border-color: red;
  }
  .icon-error {
    fill: red;
  }
  .span-error {
    color: red;
  }
}
</style>
