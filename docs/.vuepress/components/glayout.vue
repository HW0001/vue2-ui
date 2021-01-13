<template>
  <div>
    <demo :code="code" title="layout布局">
        <div>
        <g-row>
          <g-col><div class="layoutdemo1"></div></g-col>
        </g-row>
        <g-row gutter="20">
          <g-col span='12'><div class="layoutdemo2"></div></g-col>
          <g-col span='12'><div class="layoutdemo2"></div></g-col>
        </g-row>
        <g-row gutter="20">
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
      code: `
     
          `,
      mess: "",
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
}
</style>