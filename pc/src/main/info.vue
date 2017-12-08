<template>
     <div class="cont">
        <div class="info">
            <h4>基本信息</h4>
            <el-row class="rows">
                <el-col :span="12"><div class="grid-content bg-purple">责任人 
                        <el-dropdown class="choose">
                            <span class="el-dropdown-link">
                                选择责任人<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <div class="search_div">
                                    <input type="text" placeholder="输入关键词搜索" class="ipt">
                                    <span class='el-icon-search search_icon'></span>     
                                </div>
                                <el-dropdown-item>张鑫，132934383843 街道办事处</el-dropdown-item>
                                <el-dropdown-item>王亮，123123949839 居委会</el-dropdown-item>
                                <el-dropdown-item>李明，123439438577 居委会</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                </div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-light">责任人单位</div></el-col>
            </el-row>
            <el-row class="rows">
                <el-col :span="12"><div class="grid-content bg-purple names">张鑫,185020192181</div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-light names">北京八维研修学院</div></el-col>
            </el-row>
            <el-row class="rows">
                <el-col :span="24"><div class="grid-content bg-purple-dark">温馨提示</div></el-col>
            </el-row>
            <el-row class="rows">
                <el-col :span="24"><div class="grid-content bg-purple-dark conts">文本框内容</div></el-col>
            </el-row>
            <div>
                <uploaders
                v-for="(item,idx) in arr"
                :key="idx"
                :item='item'
                :arr='arr'
                :idx='idx'>
                </uploaders>
                <div class="btns">
                    保存并发布
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import uploaders from '../../src/main/upload.vue'
export default {
    data() {
      return {
        arr:[{hasDelete:false}],
        imageUrl: ''
      };
    },
    components:{
        uploaders
    }
}
</script>

<style>
    .el-upload{
        width: 100%;
        height: 100%;
    }
    .el-upload img{
        width: 100%;
        height: 100%;
    }
</style>
