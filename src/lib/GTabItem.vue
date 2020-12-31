<template>
  <div v-if="isActive">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GTabItem",
  inject:["eventBus"],
  data(){
     return {isActive:false} 
  },
  props: {
    title: String | Number,
    itemKey:String|Number,
    disabled:{type:Boolean,default:false}
  },
  mounted(){
      this.eventBus && this.eventBus.$on("itemClick",this.itemClick)
  },
  methods:{
      itemClick(key){
          this.isActive=this.itemKey===key
      }
  }
};
</script>