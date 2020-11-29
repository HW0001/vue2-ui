<template>
  <div class="ginput-wrapping">
    <input type="text" :value="value" />
  </div>
</template>
<script>
export default {
  name: "GInput",
  props: {
    value: String,
  },
};
</script>
<style lang="scss" scoped>
$focus-color: rgb(64, 169, 255);
$active-color: rgb(80, 151, 228);
.ginput-wrapping {
  display: inline-flex;
  font-size: 14px;
  > input {
    line-height: 1.5;
    border: 1px solid #666;
    border-radius: 4px;
    &:focus {
      outline: none;
    }
    &:hover {
    }
  }
}
</style>
