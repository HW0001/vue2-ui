<template>
  <div>
      <span class="title">{{title}}</span>
      <hr/>
    <div class="wrapper">
      <div>
       <slot></slot>
      </div>
    </div>
    <pre>
        <code v-text="code">
            
        </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: "demo",
 props:{
     code:String,
     title:String
 }
};
</script>
<style lang='scss' scoped>
.title{
    font-size: 20px;
    font-weight: 500;
}
.wrapper {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>