<template>
  <div>
    <div v-if="visible"><slot name="content"></slot></div>
    <span @click="xxx"><slot></slot></span>
  </div>
</template>
<script>
export default {
    name:"GPopover",
    data(){
        return{
            visible:false
        }
    },
    mounted(){
        
    },
    methods:{
        xxx(){
            this.visible=!this.visible
        }
    }
};
</script>
<style lang="scss" scoped>
</style>