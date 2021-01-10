<template>
  <div class="g-collapse"  @addItem="addItem">
    <slot></slot>
</template>
<script>
import Vue from 'vue'
export default {
  name: "GCollapse",
  props:{
    selected:Array
  },
  data(){
    return {
      eventBus:new Vue()
    }
  },
  provide(){
   return { eventBus:this.eventBus,
   }
  },
  methods:{
     addItem(x) {
      console.log(x);
    },
    removeItem(key){
      const index = this.selected.indexOf(key)
    index>-1 && this.selected.splice(index,1)
    this.notify()
    },
    addItem(key){
      this.selected.push(key)
    this.notify()
    },
    notify(){
      this.eventBus.$emit("collapseSelected",this.selected)
    }
  },
  mounted(){
    this.eventBus.$on("removeItem",this.removeItem)
    this.eventBus.$on("addItem",this.addItem)
    this.notify()
  }
};
</script>
<style lang="scss" scoped>
.g-collapse {
  padding: 1em 1em;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  padding: 1em;
  >div:first-child{
      >div:not(:first-child){
          margin-top: -1px;
      }
  }
}
</style>