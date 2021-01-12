<template>
  <div>
    <demo :code="code1" title="普通按钮">
      <g-button>默认</g-button>
      <g-button icon="download" icon-position="right">下载</g-button>
      <g-button icon="setting">设置</g-button>
      <g-button icon="setting" loading>(左)等待</g-button>
      <g-button icon="setting" icon-position="right" loading>等待(右)</g-button>
    </demo>
    <demo :code="code2" title="按钮组">
      <g-button-group>
        <g-button icon="left">前进</g-button>
        <g-button>更多</g-button>
        <g-button icon="right" icon-position="right">退后</g-button>
      </g-button-group>
    </demo>
  </div>
</template>
<script>
import GButton from "../../../src/lib/GButton";
import GButtonGroup from "../../../src/lib/GButtonGroup";
import demo from "./demo";
export default {
  name: "gbuttomdemo",
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
    };
  },
  components: {
    "g-button": GButton,
    demo,
    GButtonGroup,
  },
};
</script>