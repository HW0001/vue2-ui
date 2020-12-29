<template>
    <div>
        <slot></slot>
        <div></div>
    </div>
</template>
<script>
export default {
    name:"GTabs",
    mounted(){
        console.log(this)
    }
}
</script>