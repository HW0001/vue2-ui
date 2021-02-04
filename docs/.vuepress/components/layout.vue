<template>
  <div>
    <demo :code="code" title="页面布局">
      <g-layout class="layout">
        <g-header class="header">header</g-header>
        <g-layout>
          <g-sider class="sider">sider</g-sider>
          <g-main class="main">main</g-main>
        </g-layout>
        <g-footer class="footer">footer</g-footer>
      </g-layout> 
      </demo>
  </div>
</template>
<script>
import GLayout from "../../../src/lib/GLayout";
import GHeader from "../../../src/lib/GHeader";
import GMain from "../../../src/lib/GMain";
import GSider from "../../../src/lib/GSider";
import GFooter from "../../../src/lib/GFooter";
import demo from "./demo";
export default {
  name: "gbuttomdemo", 
  data(){
      return{
          code:
          `
    <g-layout class="layout">
        <g-header class="header">header</g-header>
        <g-layout>
           <g-sider class="sider">sider</g-sider>
           <g-main class="main">main</g-main>
        </g-layout>
        <g-footer class="footer">footer</g-footer>
    </g-layout> 
          `
      }
  },
  components: {
    GLayout,
    GHeader,
    GMain,
    GFooter,
    GSider,
    demo,
  },
};
</script>
<<<<<<< HEAD
<style lang="scss" scoped>
.layout{
    height: 300px;
    .header{
        height: 20px;
        border: 1px solid black;
        line-height: 20px;
        text-align: center;
    }
    .sider{
        width: 20%;
        border: 1px solid black;
        margin-top: -1px;
    }
    .main{
        border: 1px solid black;
        margin: -1px 0 0 -1px;
    }
    .footer{
        height: 50px;
        border: 1px solid black;
        margin-top: -1px;
        line-height: 50px;
        text-align: center;
    }
}
</style>
=======
<style lang="scss" scoped></style>
>>>>>>> c4c364f6fd0e8fb750462cda811eb8106b0c3833
