<template>
  <div>
      <div class="g-tabs-nav" ref="tabsNav">
        <span v-for="(item,index) in titles" :key="index"
         @click="itemClick($event,item.itemKey)" 
         :class="navClasses(item.itemKey)"
         class="g-tabs-nav-items"
         >{{item.title}}</span>
         <div class="g-tabs-underline" ref="underline"></div>
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
  },
  computed:{
      tabLeft(){
          return this.$refs.tabsNav.getBoundingClientRect().left
      }
  },
  mounted() {
      console.log(this);
    this.$children.forEach((vm,index) =>{
        if(vm.$options.name!=="GTabItem")
        throw new Error("Wrong subcomponent type")
        this.titles.push({title:vm.$props.title,itemKey:vm.$props.itemKey})
        if(vm.$props.itemKey===this.activeKey){
           this.$nextTick(()=>{
            const el = Array.from(this.$refs.tabsNav.children)[index]
            this.buildUnderLineStyle(el)
           })
        }
    });
    this.eventBus.$emit("itemClick",this.activeKey)
  },
  methods:{
      itemClick(e,key){
        this.buildUnderLineStyle(e.target);
        this.eventBus.$emit("itemClick",key)
        this.$emit("update:activeKey",key)
      },
      navClasses(key){
          return {selected:this.activeKey===key}
      },
      buildUnderLineStyle(el){
        const {width,left}=el.getBoundingClientRect()
        this.$refs.underline.style.width=`${width}px`
        this.$refs.underline.style.left=`${left-this.tabLeft}px`
      }
  }
};
</script>
<style lang="scss" scoped>
.g-tabs-nav{
    $active-color:rgb(64,170,255);
    border-bottom: 2px solid rgb(228,231,237);
    position: relative;
    >.g-tabs-nav-items{
        display: inline-block;
        padding: .5em 1em;
        cursor: pointer;
        &.selected{
            color: $active-color;
        }
    }
    >.g-tabs-underline{
        display: inline-block;
        position: absolute;
        bottom: -2px;
        width: 100px;
        height: 0;
        border: 1px solid $active-color;
        transition: all 350ms;
    }
}
</style>