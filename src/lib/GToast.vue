<template>
  <div class="g-toast">
    <slot />
  </div>
</template>
<script>
export default {
  name: "GToast",
};
</script>
<style lang="scss" scope>
.g-toast {
  position: absolute;
  top: 10px;
  left: 50%;
  width: 100px;
  border: 1px solid red;
  transform: translateX(-50%);
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
}
</style>
