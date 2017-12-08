<template>
    <div>
        <div class="message_active">
            <p>活动信息</p>
            <p>活动地点:社区居委会活动室</p>
            <p>温馨提示:请携带有效证件前往，如身份证</p>
        </div>
        <div class="sing_up">
            <h5>居民报名</h5>
            <div class="name_tel">
                <el-row class="rows_name">
                    <el-col :span="24"><div class="grid-content bg-purple-dark actives">姓名</div></el-col>
                    <el-col>
                        <input type="text" name="" id="ipt1" placeholder="文本框内容" v-model="activeName">
                    </el-col>
                </el-row>

                <el-row class="rows_name">
                    <el-col :span="24"><div class="grid-content bg-purple-dark actives">联系电话</div></el-col>
                    <el-col>
                        <input type="text" name="" id="ipt1" placeholder="文本框内容" v-model="activeTel">
                    </el-col>
                </el-row>
            </div>
            <el-row class="rows">
                <el-col :span="24"><div class="grid-content bg-purple-dark actives">备注信息</div></el-col>
                <el-col>
                    <input type="text" name="" id="ipt1" placeholder="文本框内容" v-model="activeInfo">
                </el-col>
            </el-row>
            <div class="name_enroll">
                 <button class="name_upload" @click="name_enroll_success">报名</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            activeName:'',
            activeTel:'',
            activeInfo:'',
            data:new Date()
        }
    },
    methods:{
        name_enroll_success(){
            this.$http.post('/admin/Birthday_registration',{
                name:this.activeName,
                tel:this.activeTel,
                info:this.activeInfo,
                time:this.data
            }).then(res=>{
                console.log(res)
                if(res.data.msg == 'success'){
                    this.$msgbox({
                        title: '提示',
                        message: '报名成功',
                        showCancelButton: true,
                        confirmButtonText: '知道了',
                        beforeClose: (action, instance, done) => {
                        if (action === 'confirm') {

                        }else{
                            done()
                        }
                        }
                    })
                }
            })
        }
    }
}
</script>

<style scoped>
    .message_active{
        width: 95%;
        margin-left: 2.5%;
        height: 120px;
        background: #fff;
        margin-top: 20px;
        text-align: left;
    }
    .message_active h5{
        margin: 15px;
    }
    .message_active p{
        margin: 5px 15px;
    }
    .message_active p:nth-child(1){
        padding-top: 20px;
        font-weight: bold
    }
    .sing_up{
        width: 95%;
        margin-left: 2.5%;
        height: 270px;
        background: #fff;
        margin-top: 30px;
        text-align: left
    }
    .sing_up h5{
        margin: 15px;
        padding-top: 20px;
        font-weight: bold;
        font-size: 16px;
    }
    .name_tel{
        display: flex;
    }
    .rows_name{
        width: 50%;
        padding-left: 2%;
    }
    .rows_name input{
        width: 96%;
        height: 30px;
        line-height: 30px;
        margin-top: 10px;
        padding-left: 10px;
        outline: none
    }
    .rows{
        padding-left: 2%;
        margin-top: 10px;
    }
    .rows input{
        padding-left: 10px;
        width: 98%;
        height: 30px;
        line-height: 30px;
        outline: none;
        margin-top: 10px;
    }
    .name_upload{
        width: 120px;
        height: 40px;
        line-height: 40px;
        background: skyblue;
        color: #fff;
        outline: none;
        border: none;
        border-radius: 5px;
    }
    .name_enroll{
        width: 120px;
        height: 40px;
        margin: 20px auto;
    }
</style>
