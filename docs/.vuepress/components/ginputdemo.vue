<template>
  <div>
    <component v-if="demo" :is="demo" :code="code" title="输入框">
      <component v-if="input" :is="input" value="今天天气不错" @change="changes"></component>
      <hr />
      <component v-if="input" :is="input" value="今天天气不错" readonly></component>
      <hr />
      <component v-if="input" :is="input" value="今天天气不错" disabled></component>
      <hr />
      <component v-if="input" :is="input"  value="今天天气不错" error="填写的信息有问题"></component>
      <hr />
      <component v-if="input" :is="input"  v-model="mess"></component>{{ mess }}
    </component>
  </div>
</template>
<script>
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
      input: null,
      demo: null,
    };
  },
  methods: {
    changes(e) {
      console.log(e);
    },
  },
  mounted(){
      import("../../../src/lib/GInput").then((moudle)=>{
      this.input=moudle.default
      })
     import("./demo").then((moudle)=>{
      this.demo=moudle.default
      })
  },
};
</script>