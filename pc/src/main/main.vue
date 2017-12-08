<template>
  <el-main>
      <el-row class="navs">
          <el-col :span='12'>
              <el-menu
                class="el-menu-demo"
                mode="horizontal"
                background-color="#fff"
                text-color="#555"
                active-text-color="#01b069">
                    <el-menu-item index="1"><router-link :to="{name:'entry'}">一口式受理平台</router-link></el-menu-item>
                    <el-menu-item index="1"><router-link :to="{name:'grid'}">网络化管理平台</router-link></el-menu-item>
                    <el-submenu index="2">
                        <template slot="title"><router-link :to="{name:'public'}">公共服务平台</router-link></template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-submenu>
               
                </el-menu>
          </el-col>
          <el-col :span='12' class="right-menu">
              <el-menu
                class="el-menu-demo"
                mode="horizontal"
                background-color="#fff"
                text-color="#555"
                active-text-color="#01b069">
                    <el-menu-item index="1" class="el-icon-bell icons">
                        <span class="numbers">
                            42
                        </span>
                    </el-menu-item>
                    <el-menu-item index="1" class="el-icon-message icons">
                        <span class="numbers">
                            42
                        </span>
                    </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title"><img src="../../static/img/1.jpg" alt="">管理员:{{$store.state.user_name}}</template>
                        <el-menu-item index="2-1" @click='back'>退出</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-submenu>
                </el-menu>
          </el-col>
      </el-row>
      
      <el-row>
          <router-view></router-view>
      </el-row>
    </el-main>
    
</template>

<script>
import { delCookie } from '../utils/utils.js'
 export default {
    methods: {
      back(){
          delCookie('token');
          this.$router.push({name:'login'})
      }
      
    }
  }
</script>

<style>
    .el-message-box__headerbtn{
      right: 30px!important;
    }
    .el-carousel__container{
        height: 205px;
    }
    .el-upload{
        width: 100%;
        height: 100%;
    }
    .el-upload img{
        width: 100%;
        height: 100%;
    }
    a{
        text-decoration: none;
    }
    .el-menu-item .is-active{
        border-bottom: none!important;
        color:#fff;
    }
    .el-message-box{
      width: 700px!important;
    }
    .el-message-box__header{
      width: 700px!important;
      background: skyblue;
      color: #fff!important;
    }
    .el-message-box__title{
         color: #fff!important;
         
    }
    .el-message-box__title span{
        font-size: 16px!important;
        display: block;
        margin-top: -10px;
    }
    .el-message-box__headerbtn i{
        font-size: 20px!important;
    }
    .infos{
       font-size: 16px!important;
       font-weight: normal;
    }
    .please{
        outline: none;
        border: 1px solid #ccc;
        height: 30px;
        line-height: 30px;
        width: 280px!important;
        border-radius: 5px;
        margin-left: 20px;
        padding-left: 10px;
    }
    .has-gutter tr{
        background: #f2f2f2!important
    }
    .addarea{
        width: 600px;
        height: 100px;
        border: 1px solid #ccc;
        resize: none
    }
    .numbers{
        display: inline-block;
        width: 15px;
        height: 15px;
        color: #fff;
        text-align: center;
        line-height: 15px;
        border-radius: 50%;
        background: red;
        position: absolute;
        right: 18px;
        top: 15px;
        font-size: 12px;
    }
    .icons{
        font-size: 24px;
        position: relative;
    }
    .el-submenu img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 10px;
    }
    .el-menu--horizontal>.el-menu-item.is-active{
        border-bottom: none!important
    }
    .el-menu-item{
        border-bottom: none
    }
    .router-link-active{
        color: white!;
        /* background: skyblue; */
        display: inline-block
    }
    .ipt{
        height: 25px;
        line-height: 25px;
        border:1px solid #ccc;
        border-radius: 5px;
        width: 90%;  
        padding-left: 10px;
        outline: none
    }
    .btns{
        margin:auto;
        background: #01B0B9;
        color: #fff;
        width: 150px;
        height: 40px;
        line-height: 40px;
        border-radius: 30px;
        text-align: center;
        margin-top: 20px;
    }
    .search_div{
        width: 90%;
        margin-left: 6%;
        position: relative;
    }
    .search_icon{
        position: absolute;
        right: 15px;
        top: 5px;
    }
    .choose{
        float: right;
        margin-right: 15px;
        border: none
    }
    .navs{
        box-shadow: 0 3px 3px #ccc
    }
    .right-menu{
        background: #fff
    }
    .el-main{
        padding:0;
        background: #EEEEEE;
    }
    .right-menu ul[role='menubar']{
        float: right;
    }
    .more{
        color: #ccc;
        margin-left: 5px;
    }
    .pages{
        padding: 15px 0;
    }
    .btn{
        text-align: center;
        padding: 15px 0;
    }
    .cont{
        height: 100%;
        width: 98%;
        background: #fff;
        margin-left: 2%
    }
    .info{
        margin-left: 2%;
    }
    .rows{
        margin: 5px 0;
    }
    .info h4{
        padding: 15px 0;
    }
    .info el-row{
        margin: 5px 0;
    }
    .grid-content{
        font-size: 14px;
    }
    .names {
        background: #E0E0E0;
        border-radius: 4px;
        height: 30px;
        line-height: 30px;
        padding-left: 5px;
    }
    .conts{
        border-radius: 4px;
        height: 30px;
        line-height: 30px;
        padding-left: 5px;
        border: 1px solid #ccc;
    } 
    .compile{
        margin-top: 20px;
    }  
    .compile span{
        font-size: 14px;
        margin-right: 10px;
    }
    .compile span:nth-child(2){
        color: skyblue;
    }
    .compile span:nth-child(3){
        color: skyblue;
    }
    .compile span:nth-child(4){
        color: #ccc;
    }
    .compile span:nth-child(5){
        color: red;
    }
    .avatar-uploader{
        border: 1px solid #ccc;
        margin-top: 10px;
        text-align: center;
        height: 100px;
        line-height: 100px;
    }
    .format span{
        font-size: 14px;
        color: #ccc;
        margin-right: 10px;
        padding: 5px 0;    
    }
    .el-tabs__content{
     overflow: visible!important;
    }
    .el-dialog__header{
        background: skyblue;
        text-align: center;
    }
    .el-dialog__title{
         color: #fff;
         font-size: 16px;
    }
    .el-dialog__headerbtn i{
        font-size: 20px!important
    }
    .el-input{
        width: 75%;
    }
    .search_info{
        outline: none;
        border: 1px solid #ccc;
        background: skyblue;
        width: 80px;
        height: 35px;
        line-height: 35px;
        margin-left: 20px;
        border-radius: 5px;
        color: #fff;
    }
    .ipts{
        width: 100%;   
    }
    .ipts input{
        height: 100px!important;
    }
    .el-message-box__content{
        text-align: center
    }
    .el-message-box__title{
        text-align: center
    }
    .el-message-box__headerbtn{
        top: 6px!important
    }
    .el-table-column,.cell{
        text-align: center
    }
</style>
