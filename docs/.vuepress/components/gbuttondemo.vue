<template>
  <div>
    <div class="wrapper">
      <div>
        <g-button>默认</g-button>
        <g-button icon="download" icon-position="right">下载</g-button>
        <g-button icon="setting">设置</g-button>
        <g-button icon="setting" loading>(左)等待</g-button>
        <g-button icon="setting" icon-position="right" loading
          >等待(右)</g-button
        >
      </div>
    </div>
    <pre>
        <code>
           {{text1}}
        </code>
    </pre>
    <g-button-group>
      <g-button icon="left">前进</g-button>
      <g-button>更多</g-button>
      <g-button icon="right" icon-position="right">退后</g-button>
    </g-button-group>
    <pre>
        <code>
           {{text2}}
        </code>
    </pre>
  </div>
</template>
<script>
import GButton from "../../../src/lib/GButton";
import GButtonGroup from "../../../src/lib/GButtonGroup";
export default {
  name: "gbuttomdemo",
  data() {
    return {
      text1: `   <g-button>默认</g-button>
            <g-button icon="download" icon-position="right">下载</g-button>
            <g-button icon="download" icon-position="right">下载</g-button>
            <g-button icon="setting" loading>(左)等待</g-button>
            <g-button icon="setting" icon-position="right" loading>等待(右)</g-button>`,
      text2: `  <g-button-group>
                <g-button icon="left">前进</g-button>
                <g-button>更多</g-button>
                <g-button icon="right" icon-position="right">退后</g-button>
            </g-button-group>`,
    };
  },
  components: {
    "g-button": GButton,
    GButtonGroup,
  },
};
</script>
<style lang='scss' scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>