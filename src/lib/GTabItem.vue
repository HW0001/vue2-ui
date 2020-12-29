<template>
  <div v-if="isActive">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GTabs",
  inject:["eventBus"],
  data(){
     return {isActive:false} 
  },
  props: {
    title: String | Number,
    itemKey:String|Number
  },
  mounted(){
      this.eventBus.$on("itemClick",this.itemClick)
  },
  methods:{
      itemClick(key){
          this.isActive=this.itemKey===key
      }
  }
};
</script>