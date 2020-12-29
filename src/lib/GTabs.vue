<template>
  <div>
      <div class="g-tabs-nav">
        <span v-for="(item,index) in titles" :key="index"
         @click="itemClick(item.itemKey)" 
         :class="navClasses(item.itemKey)">{{item.title}}</span>
      </div>
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: "GTabs",
  data() {
    return {
      titles: [],
      eventBus:new Vue()
    };
  },
  props:{
      activeKey:String|Number
  },
  provide(){
     return{eventBus: this.eventBus}
  }
  ,
  mounted() {
    this.$children.forEach((vm) => this.titles.push({title:vm.$props.title,itemKey:vm.$props.itemKey}));
    this.eventBus.$emit("itemClick",this.activeKey)
  },
  methods:{
      itemClick(key){
         this.eventBus.$emit("itemClick",key)
         this.$emit("update:activeKey",key)
      },
      navClasses(key){
          return {selected:this.activeKey===key}
      }
  }
};
</script>
<style lang="scss" scoped>
.g-tabs-nav{
    >span{
        display: inline-block;
        padding: .5em 1em;
        cursor: pointer;
        &.selected{
            color: rgb(64,170,255);
        }
    }
    border-bottom: 1px solid rgb(228,231,237);
}
</style>