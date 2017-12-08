<template>
    <div>
       <el-row class="pages">
        <el-breadcrumb separator-class='el-icon-arrow-right'>
        <el-breadcrumb-item class="more">......</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">社会生日会</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">创建活动</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <el-row>
        <div class="btn">
            <el-button type="primary" @click="infoMsg">信息管理</el-button>
            <el-button  @click="activeMsg">活动管理</el-button>
        </div>
      </el-row>
      <el-row>
          <router-view></router-view>
      </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
         imageUrl: ''
        };
    },
    methods:{
        infoMsg(){
            this.$router.push({name:'info'})
        },
        activeMsg(){
            this.$router.push({name:'active'})
        }, 
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
    },
    created(){
        this.$store.commit('switch_loading',true)
        this.$http.get('./admin/menu/public').then(res=>{
            // console.log(res);
            this.$store.commit('updata_menu',res.data.data)
            this.$store.commit('switch_loading',false)
        })
    }
}
</script>
<style scoped>
   
</style>
