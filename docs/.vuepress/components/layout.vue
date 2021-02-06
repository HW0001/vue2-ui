<template>
  <div>
    <component  v-if="demo" :is="demo"   :code="code" title="页面布局">
      <component  v-if="layout" :is="layout"   class="layout">
        <component  v-if="header" :is="header" class="header">header</component>
        <component v-if="layout" :is="layout"  >
          <component v-if="sider" :is="sider"   class="sider">sider</component>
          <component v-if="main" :is="main"   class="main">main</component>
        </component>
        <component v-if="footer" :is="footer"   class="footer">footer</component>
      </component>
    </component>
  </div>
</template>
<script>
export default {
  data() {
    return {
      code: `
    <g-layout class="layout">
        <g-header class="header">header</g-header>
        <g-layout>
           <g-sider class="sider">sider</g-sider>
           <g-main class="main">main</g-main>
        </g-layout>
        <g-footer class="footer">footer</g-footer>
    </g-layout> 
          `,
      layout: null,
      header: null,
      main: null,
      sider: null,
      footer: null,
      demo: null,
    };
  },
  mounted() {
    import("../../../src/lib/GLayout").then((moudle) => {
      this.layout = moudle.default;
    });
    import("../../../src/lib/GHeader").then((moudle) => {
      this.header = moudle.default;
    });
    import("../../../src/lib/GSider").then((moudle) => {
      this.sider = moudle.default;
    });
    import("../../../src/lib/GMain").then((moudle) => {
      this.main = moudle.default;
    });
    import("../../../src/lib/GFooter").then((moudle) => {
      this.footer = moudle.default;
    });
    import("./demo").then((moudle) => {
      this.demo = moudle.default;
    });
  },
};
</script>
<style lang="scss" scoped>
.layout {
  height: 300px;
  .header {
    height: 20px;
    border: 1px solid black;
    line-height: 20px;
    text-align: center;
  }
  .sider {
    width: 20%;
    border: 1px solid black;
    margin-top: -1px;
  }
  .main {
    border: 1px solid black;
    margin: -1px 0 0 -1px;
  }
  .footer {
    height: 50px;
    border: 1px solid black;
    margin-top: -1px;
    line-height: 50px;
    text-align: center;
  }
}
</style>
