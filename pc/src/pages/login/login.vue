<template>
    <div class="login">
        <ul>
            <li>
                <label><input type="text" v-model.trim="login_user" placeholder="请输入用户名" class="user_name"></label>
                <label><input type="password" v-model.trim="login_psw" placeholder="请输入密码" class="user_psw"></label>
            </li>
        </ul>
        <button @click="go_to_login" class="login_btn">登录</button>
    </div>
</template>

<script>
import {setCookie} from '../../utils/utils.js'
export default {
    data(){
        return {
            login_user:'',
            login_psw:'',
            loading:false
        }
    },
    methods:{
        go_to_login(){
            var query = this.$route.query.form || 'public'
            this.$store.commit('switch_loading',true)
            this.$http.post('/admin/loginUser',{
                login_user:this.login_user,
                login_psw:this.login_psw
            }).then(data=>{
                // console.log(data)
                setTimeout(()=>{
                    if(data.data.code == 1){
                        setCookie('token',data.data.token)
                        this.$store.commit('updata_user_name',this.login_user)
                        this.$router.push({name: query})
                    }else{
                        this.$alert(data.data.msg, '登录信息有误', {
                            confirmButtonText: '确定',
                            callback: action => {
                                this.login_user = '',
                                this.login_psw = ''
                            }
                        });
                    }
                    this.$store.commit('switch_loading',false)
                },2000)                
            })
        }
    }
}
</script>

<style>
    ul li{
        list-style:none;
    }
    ul li label{
        display: block;
        width: 500px;
        position: relative;
    }
    ul li label input{
        width: 150px;
        height: 30px;
        line-height: 30px;
        border-radius: 10px;
        border:none;
        outline: none;
        padding-left: 10px;
    }
    .user_name{
        position: absolute;
        left: 590px;
        top: 285px;
    }
    .user_psw{
        position: absolute;
        left: 590px;
        top: 337px;
    }
    *{
        margin: 0;
        padding: 0;
    }
    html,body{
       width: 100%;
       height: 100%; 
       overflow-x: hidden;
    }
    .login{
        width:100%;
        height: 100%;
        margin:0 auto;
        text-align: center;
        background-image: url('../../../static/img/img2.gif');
        background-size: 100% 100%;
    }
    .login_btn{
        width: 150px;
        height: 30px;
        outline: none;
        border: 1px solid #ccc;
        background: skyblue;
        color: #fff;
        margin-top: 50px;
        position: absolute;
        top:327px ;
        left: 615px;
    }
</style>
