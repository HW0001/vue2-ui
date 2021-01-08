<template>
<div class="g-collapse-item" :class="itemClasses">
  <div class="g-collapse-item-title" @click="itemClick">
        <span>{{title}}</span>
  </div>
    <div class="g-collapse-item-content" v-if="visible">
        <slot></slot>
    </div>
</div>
</template>
<script>
export default {
    name:"GCollapseItem",
    props:{
        title:String
    },
    data(){
        return{
            visible:false
        }
    },
    methods:{
        itemClick(){
            this.visible=!this.visible
        }
    },
    computed:{
        itemClasses(){
            return {
                "active":this.visible
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.g-collapse-item{
    $border-color: #ebebeb;
    >.g-collapse-item-title{
        border-top: 1px solid $border-color;
        border-bottom: 1px solid $border-color;
        padding: 1em 0;
        cursor: pointer;
    }
    >.g-collapse-item-content{
        padding-top: .5em;
        padding-bottom: 1em;
    }
    &.active{
        >.g-collapse-item-title{
            border-bottom: none;
        }
        >.g-collapse-item-content{
            border-bottom: 1px solid $border-color;
        }
    }
}
</style>