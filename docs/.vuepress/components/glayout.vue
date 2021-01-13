<template>
  <div>
    <demo :code="code1" title="栅栏组件" :tips='tips1'>
        <div>
        <g-row>
          <g-col><div class="layoutdemo1"></div></g-col>
        </g-row>
        <g-row gutter="20"  align="center">
          <g-col span='8' offset="4"><div class="layoutdemo2"></div></g-col>
          <g-col span='12'><div class="layoutdemo2"></div></g-col>
        </g-row>
        <g-row gutter="30">
          <g-col span="4"><div class="layoutdemo3"></div></g-col>
          <g-col span="8"><div class="layoutdemo3"></div></g-col>
          <g-col span="12"><div class="layoutdemo3"></div></g-col>
        </g-row>
      </div>
    </demo>
        <demo :code="code1" title="自适应栅栏组件" :tips='tips1'>
        <div>
        <g-row>
          <g-col  
          :sm="{span:20}"
          :md="{span:18}"
          :lg="{span:16}"
          :xl="{span:14}"
          :xxl="{span:12}"
          ><div class="layoutdemo1"></div></g-col>
        </g-row>
        <g-row>
          <g-col span='8' offset="4"
          :sm="{span:10,offset:'2'}"
          :md="{span:12}"
          :lg="{span:14}"
          :xl="{span:16}"
          :xxl="{span:18}"
          ><div class="layoutdemo2"></div></g-col>
          <g-col span='12'
          :sm="{span:8,offset:'4'}"
          :md="{span:12}"
          :lg="{span:10}"
          :xl="{span:8}"
          :xxl="{span:6}"
          ><div class="layoutdemo2"></div></g-col>
        </g-row>
        <g-row gutter="30">
          <g-col span="4"><div class="layoutdemo3"></div></g-col>
          <g-col span="8"><div class="layoutdemo3"></div></g-col>
          <g-col span="12"><div class="layoutdemo3"></div></g-col>
        </g-row>
      </div>
    </demo>
  </div>
</template>
<script>
import GRow from "../../../src/lib/GRow";
import GCol from "../../../src/lib/GCol";
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
      tips1: "注：align属性支持left、center、right,用于控制col内元素对齐方式"
    };
  },
  components: {
    GRow,
    GCol,
    demo,
  },
};
</script>
<style lang="scss" scoped>
.layoutdemo1 {
  background-color: #7294c5;
  height: 20px;
}
.layoutdemo2 {
  background-color: rgba(211, 220, 230, 0.8);
  height: 20px;
}
.layoutdemo2:nth-child(2) {
  background-color: rgba(211, 220, 230, 0.5);
  height: 20px;
}
.layoutdemo3 {
  background-color: #99a9bf;
   height: 20px;
}
</style>