<template>
     <el-row>
        <el-tabs type="card">
            <el-tab-pane label="活动介绍" name="first">
                <product></product>
            </el-tab-pane>
            <el-tab-pane label="邀请具名" name="second">
                <invite></invite>
            </el-tab-pane>
            <el-tab-pane label="居民报名" name="third">
                <enroll></enroll>
            </el-tab-pane>
            <el-tab-pane label="活动总结" name="fourth">
                <up-image
                v-for="(item,idx) in arr"
                :key="idx"
                :item='item'
                :arr='arr'
                :idx='idx'></up-image>
                <div class="btns">
                    保存并发布
                </div>
            </el-tab-pane>
        </el-tabs>
      </el-row>
</template>

<script>
import upImage from './upload.vue'
import product from './product.vue'
import invite from './invite.vue'
import enroll from './enroll.vue'
export default {
    data(){
        return {
            arr:[{hasDelete:false}]
        }
    },
    components:{
        upImage,
        product,
        invite,
        enroll
    }
}
</script>

<style>

</style>
