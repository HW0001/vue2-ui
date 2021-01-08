<template>
  <div class="g-collapse">
    <div><slot></slot></div>
  </div>
</template>
<script>
export default {
  name: "GCollapse",
};
</script>
<style lang="scss" scoped>
.g-collapse {
  padding: 1em 1em;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  >div:first-child{
      padding: 1em;
      >div:not(:first-child){
          margin-top: -1px;
      }
  }
}
</style>