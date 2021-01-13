<template>
  <div>
    <span class="title">{{ title }}</span>
    <hr />
    <div class="wrapper">
      <div>
        <slot></slot>
      </div>
    </div>
    <div v-if="tips" class="tips">
      <span>{{ tips }}</span>
    </div>
    <pre>
        <code v-text="code">
            
        </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: "demo",
  props: {
    code: String,
    title: String,
    tips: String,
  },
};
</script>
<style lang='scss' scoped>
.title {
  font-size: 20px;
  font-weight: 500;
}
.wrapper {
  display: flex;
  justify-content: center;
  align-content: center;
  > div:first-child {
    width: 100%;
  }
}
.tips{
    font-size: 14px;
}
</style>