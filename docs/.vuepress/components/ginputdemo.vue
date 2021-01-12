<template>
  <div>
    <demo :code="code" title="输入框">
      <g-input value="今天天气不错" @change="changes"></g-input>
      <hr />
      <g-input value="今天天气不错" readonly></g-input>
      <hr />
      <g-input value="今天天气不错" disabled></g-input>
      <hr />
      <g-input value="今天天气不错" error="填写的信息有问题"></g-input>
      <hr />
      <g-input v-model="mess"></g-input>{{ mess }}
    </demo>
  </div>
</template>
<script>
import GInput from "../../../src/lib/GInput";
import demo from "./demo";
export default {
  name: "gbuttomdemo",
  data() {
    return {
      code: `
      <g-input value="今天天气不错" @change="changes"></g-input> 
            //支持input change focus blur四种事件
      
      <g-input value="今天天气不错" readonly></g-input>

      <g-input value="今天天气不错" disabled></g-input>

      <g-input value="今天天气不错" error="填写的信息有问题"></g-input>

      <g-input v-model="mess"></g-input>{{ mess }}
          `,
      mess: "",
    };
  },
  methods: {
    changes(e) {
      console.log(e);
    },
  },
  components: {
    GInput,
    demo,
  },
};
</script>