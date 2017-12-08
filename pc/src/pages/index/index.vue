<template>
    <!-- <h1>hello world</h1> -->
  <el-container>
    <menus></menus>
    <mains></mains>
  </el-container>
</template>

<script>
import menus from '../../menu/menu.vue'
import mains from '../../main/main.vue'
export default {
    name:'index',
    components:{
        menus,
        mains
    }
}
</script>

<style>

</style>
