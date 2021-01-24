<template>
  <div>
    <demo :code="code1" title="页面布局" :tips="tips1">
      <div>
        3333
      </div>
    </demo>
  </div>
</template>
<script>
import demo from "./demo";
export default {
  name: "gbuttomdemo",
  data() {
    return {
      code1: `
        <g-row>
          <g-col><div class="layoutdemo1"></div></g-col>
        </g-row>
        <g-row gutter="20">
          <g-col span='12'><div class="layoutdemo2"></div></g-col>
          <g-col span='12'><div class="layoutdemo2"></div></g-col>
        </g-row>
        <g-row gutter="30">
          <g-col span="4"><div class="layoutdemo3"></div></g-col>
          <g-col span="8"><div class="layoutdemo3"></div></g-col>
          <g-col span="12"><div class="layoutdemo3"></div></g-col>
        </g-row>
          `,
      code2: `
        <g-row gutter="30">
          <g-col
            span="4"
            :sm="{ span: 8, offset: '1' }"
            :md="{ span: 11, offset: '1' }"
            :lg="{ span: 9, offset: '1' }"
            :xl="{ span: 7, offset: '1' }"
            :xxl="{ span: 5, offset: '1' }"
            ><div class="layoutdemo3"></div
          ></g-col>
        
          `,
      tips1: "注：align属性支持left、center、right,用于控制col内元素对齐方式",
    };
  },
  components: {
    demo,
  },
};
</script>
<style lang="scss" scoped></style>
