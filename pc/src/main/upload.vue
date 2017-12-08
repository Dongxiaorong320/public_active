<template>
<div>
    <div>
        <p class="compile">
            <span>请输入栏目名称</span>
            <span>编辑</span>
            <span @click='add_column'>添加栏目</span>
            <span @click='preview' type="primary">预览</span>
            <span v-if="item.hasDelete" @click="del_column">删除</span>
        </p>
        <el-upload
            class="avatar-uploader"
            action="http://localhost:3000/user/upload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            name='test'>
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <p class="format">  
            <span>图片格式:jpg\png</span>
            <span>图片大小:小于200k</span>
            <span>建议尺寸:宽度大于800px</span>
        </p>
        
    </div>
    <div class="alert" v-if="isShow">
        <img :src="imageUrl" alt="">
        <span class="close" @click='close_alert'>
          x
        </span>
    </div>
</div>
</template>

<script>
export default {
    props:{
      item:{
        type:Object
      },
      arr:{
        type:Array
      },
      idx:{
        type:Number
      }
    },
    data() {
      return {
        imageUrl: '',
        isShow:false
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log(this.imageUrl)
        this.$store.commit('upload_image',this.imageUrl)
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
      },
      add_column(){
        this.arr.push({hasDelete:true})
      },
      del_column(){
        this.arr.splice(this.idx,1)
      },
      preview(){
        this.isShow = true
      },
      close_alert(){
        this.isShow = false
      }
    }
}
</script>

<style>
  .compile span{
    cursor: pointer;
  }
  .el-container{
    position: relative!important;
  }
  .alert{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    left: 0;
    top: 0;
  }
  .alert img{
    width: 40%;
    height: auto;
    position: absolute;
    left: 40%;
    top: 25%;
    right: 0;
    bottom: 0;
  }
  .close{
    display:block;
    width: 30px;
    height: 30px;
    background: #ccc;
    color: #fff;
    text-align: center;
    line-height: 30px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 20px;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 0.14rem;
  }
  html,body{
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>
