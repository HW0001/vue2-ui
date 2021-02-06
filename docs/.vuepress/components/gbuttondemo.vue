<template>
  <div>
    <component v-if="demo" :is="demo" :code="code1" title="普通按钮">
        <component v-if="button" :is="button">默认</component>
        <component v-if="button" :is="button" icon="download" icon-position="right">下载</component>
        <component v-if="button" :is="button" icon="setting">设置</component>
        <component v-if="button" :is="button"  icon="setting" loading>(左)等待</component>
        <component v-if="button" :is="button"  icon="setting" icon-position="right" loading>等待(右)</component> 
    </component>
    <component  v-if="demo" :is="demo"  :code="code2" title="按钮组">
        <component  v-if="buttongroup" :is="buttongroup">
            <component v-if="button" :is="button"  icon="left">前进</component>
            <component v-if="button" :is="button" >更多</component>
            <component v-if="button" :is="button"  icon="right" icon-position="right">退后</component>
        </component> 
    </component>
  </div>
</template>
<script>
export default {
  data() {
    return {
      code1: `
        <g-button>默认</g-button>
        <g-button icon="download" icon-position="right">下载</g-button>
        <g-button icon="setting">设置</g-button>
        <g-button icon="setting" loading>(左)等待</g-button>
        <g-button icon="setting" icon-position="right" loading>等待(右)</g-button>
          `,
      code2: `
        <g-button-group>
            <g-button icon="left">前进</g-button>
            <g-button>更多</g-button>
            <g-button icon="right" icon-position="right">退后</g-button>
        </g-button-group>
          `,
          button:null,
          buttongroup:null,
          demo:null
    };
  },
  mounted(){
      import("../../../src/lib/GButton").then((moudle)=>{
      this.button=moudle.default
      })
     import("../../../src/lib/GButtonGroup").then((moudle)=>{
      this.buttongroup=moudle.default
      })
     import("./demo").then((moudle)=>{
      this.demo=moudle.default
      })
  },
};
</script>