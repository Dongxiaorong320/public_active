<template>
    <div>
        <ul>
            <li>
                <label>管理员: <input type="text" v-model="login_user"></label>
                <label>密  码: <input type="password" v-model="login_psw"></label>
            </li>
        </ul>
        <button @click="go_to_register">注册</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            login_user:'',
            login_psw:''
        }
    },
    methods:{
        go_to_register(){
            this.$http.post('/admin/registerUser',{
                login_user:this.login_user,
                login_psw:this.login_psw
            }).then(res=>{
                // if (res.data.code == 1) {
                //     this.$router.push({name: 'login'})
                // } else {
                //     // this.$router.push({name: 'register'})
                // }
            })
        }
    }
}
</script>

<style>
    ul li{
        list-style:none
    }
</style>
