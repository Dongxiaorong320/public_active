<template>
    <div>
       <el-row class="pages">
            <el-breadcrumb separator-class='el-icon-arrow-right'>
            <el-breadcrumb-item class="more">......</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">社会生日会</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">创建活动</el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
        <div class="activily_list">
            <h4 class="tit">活动列表</h4>
            <template>
                <el-carousel indicator-position="outside" :autoplay='true'>
                    <el-carousel-item v-for="item in 4" :key="item">
                        <div class="div_box">
                            <h3>{{ item }}</h3>
                            <h3>{{ item }}</h3>
                            <h3>{{ item }}</h3>
                            <h3>{{ item }}</h3>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </template>
        </div>
        <div class="btn">
            <el-button @click='activemsg' type="primary">活动信息与报名</el-button>
            <el-button @click='peoplemsg'>人员管理</el-button>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            banner_list:null
        }
    },
  created(){
        this.$store.commit('switch_loading',true)
        this.$http.get('./admin/menu/entry').then(res=>{
            // console.log(res);
            this.$store.commit('updata_menu',res.data.data)
             this.$store.commit('switch_loading',false)
        })
        this.$http.post('/admin/banner_swiper').then(res=>{
            // console.log(res.data.data)
            this.banner_list = res.data.data
        })
    },
    methods:{
        activemsg(){
            this.$router.push({name:'activeInfo'})
        },
        peoplemsg(){
            this.$router.push({name:'personal'})
        }
    }
}
</script>

<style scoped>
    .activily_list{
        width:95%;
        height: 280px;
        border: 1px solid #ccc;
        background: #fff;
        margin-left: 2.5%;
        margin-top: 2%;
    }
    .tit{
        margin:15px;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }    
    .el-carousel__item:nth-child(2n) {
        /* background-color: #99a9bf; */
    } 
    .el-carousel__item:nth-child(2n+1) {
        /* background-color: #d3dce6; */
    }
    .el-carousel__item{
        height: 200px;
    }
    .el-button{
        width: 150px!important;
    }
   
    .div_box{
        display: flex;
        width: 96%;
        margin-left: 2%;
    }
    .div_box h3{
        width: 25%;
        border: 1px solid #ccc;
        text-align: center
    }
</style>
