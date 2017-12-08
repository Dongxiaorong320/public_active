<template>
    <el-aside>
      <el-row>
        <el-col :span="24">
            <div class="pic">
                <h1>三鑫智慧社区</h1>
                <h3>公共管理平台</h3>
                <dl>
                    <dt>
                        <img src="../../static/img/1.jpg" alt="">
                    </dt>
                    <dd>
                        管理员:{{$store.state.user_name}}
                    </dd>
                </dl>
            </div>
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#29282e"
            text-color="#fff"
            active-text-color="#ffd04b">
                <el-submenu :index="index.toString()" v-for="(item,index) in $store.state.menu" :key="index">

                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>{{item.name}}</span>
                    </template>

                    <el-submenu :index=" index + '-' + index_sub " v-for="(item_sub,index_sub) in item.submenus" :key="index_sub">
                        <template slot="title">{{item_sub.name}}</template>
                        <el-menu-item :index=" index + '-' + index_sub+ '-' + index_sub_sub " v-for="(item_sub_sub,index_sub_sub) in item_sub.submenus" :key="index_sub_sub">{{item_sub_sub.name}}</el-menu-item>
                    </el-submenu>

                </el-submenu>
            </el-menu>
        </el-col>
      </el-row>
    </el-aside>
</template>
<script>
import axios from 'axios'
    export default {
        data(){
            return {
                menu:[]     
            }
        },
        created(){
            // axios.get('../../../Mock/entry.json')
            //     .then(res=>{
            //         this.menu = res.data.data
            //     })
        }
    }
</script>

<style>
    *{margin: 0;padding: 0}
    .pic{
        background-color: #29282e;
        color: #fff;
        text-align: center;
    }
    .pic h1{
        padding: 10px 0;
    }
    .pic h3{
        padding: 10px 0;
        font-size: 16px;
    }
    .el-aside{
        padding: 0
    }
    dl{
        text-align: center;
    }
    dl dt{
        border: 3px solid #fff;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        text-align: center;
        margin: 15px 0;
        margin-left: 120px;
    }
    dl dt img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
</style>

