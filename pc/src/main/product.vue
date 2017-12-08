<template>
    <div>
       <div class="top">
           <h5>基本信息</h5>
           <span>未发布</span>
       </div>
       <div class="main">
            <div class="left">
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
                <p class="formats">  
                    <span>图片格式:jpg\png</span>
                    <span>图片大小:小于200k</span>
                    <span>建议尺寸:317*175px</span>
                </p>
            </div>
            <div class="right">
                <el-row class="rows">
                    <el-col :span="24"><div class="grid-content bg-purple-dark actives">活动名称</div></el-col>
                </el-row>
                <el-row class="rows">
                   <el-col>
                        <input type="text" name="" id="ipt1" placeholder="春暖花开4月生日会" v-model="activeName">
                    </el-col>
                </el-row>
                <el-row class="rows">
                    <el-col :span="24"><div class="grid-content bg-purple-dark actives">活动时间</div></el-col>
                </el-row>
                <el-row class="chosdate">
                    <el-col :span="24" style="display:flex">
                        <el-date-picker
                        v-model="startData"
                        type="date"
                        placeholder="选择开始日期"
                        style="width:300px!important;margin-right:20px">
                        </el-date-picker>
                        <el-date-picker
                        v-model="endDate"
                        type="date"
                        placeholder="选择结束日期"
                        style="width:300px!important">
                        </el-date-picker>
                    </el-col>
                </el-row>
                <el-row class="rows">
                    <el-col :span="12"><div class="grid-content bg-purple-dark actives">请选择地址</div></el-col>
                </el-row>
                <div class="active_name">
                <span class="choose_address">请选择地址</span>
                
                   <choose-down
                   :cityData='cityData'
                    @info='getInfo'
                   >
                   </choose-down>
                
            </div>

            </div>
       </div>
       <div class="images">
           <up-image
            v-for="(item,idx) in arr"
            :key="idx"
            :item='item'
            :arr='arr'
            :idx='idx'></up-image>
       </div>
       
       <div class="btns" @click='sub_publish'>
            保存并发布
        </div>
    </div>
</template>

<script>
import upImage from './upload.vue'
import chooseDown from './Dropdown/dropdown.vue'
  export default {
    data() {
      return {
        arr:[{hasDelete:false}],
        imageUrl: '',
        startData:'',
        endDate:'',
        activeName:'',
        cityData:[],
        cityInfo:''
      };
    },
    created(){
        this.$http.post('/admin/community/location/root').then(res=>{
            // console.log(res.data)
            this.cityData = res.data
        })
    },
    methods: {
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
      },
      sub_publish(){
        if(!this.activeName){
            this.$message('请输入活动名称')
            return
        }
        if(!this.imageUrl){
            this.$message('请至少上传一张图片')
            return
        }
        if(!this.startData){
            this.$message('请输入活动开始时间')
            return
        }
        if(!this.endDate){
            this.$message('请输入活动结束时间')
            return
        }
        if(!this.cityInfo){
            this.$message('请选择地址')
            return
        }
        this.$http.post('/admin/activity/add', {
            categoryId: 1,
            name: this.activeName,
            imagePath: this.$store.state.imageUrl,
            startDate: this.startData,
            endDate: this.endDate,
            locationName: this.cityInfo
        })
        .then((val) => {
            console.log(val)
        })
      },
      getInfo(data){
          this.cityInfo = data
      }
    },
    components:{
        upImage,
        chooseDown
    }
  }
</script>

<style scoped>
    .formats{
        margin-right: 5px;
        font-size: 12px;
        color: #ccc;
        padding:10px 0;
    }
    .images{
        clear: both;
    }
    .choose_address{
        color: #ccc;
        margin-bottom: 5px;
        display: block;
    }
    .chose{
        border: 1px solid #ccc;
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
        position: relative;
        padding-left: 5px;
    }
    .spns{
        position: absolute;
        right: -65px;
        top: 7px;
    }
    #ipt1{
        width: 720px;
        height: 40px;
        line-height: 40px;
        border-radius: 5px;
        outline: none;
        border:1px solid #ccc;
        padding-left: 5px;
    }
    .el-date-editor{
        width: 720px;
        height: 40px;
        line-height: 40px;
        border-radius: 5px;
        outline: none;
    }
    .cook{
        margin-top:8px;
    }
    .main{
        width: 100%;
    }
    .main .left{
        float: left;
        width: 324.17px;
    }
    .main .left img{
        width: 100%;
        height: 200px;
    }
    .main .right{
        float: right;
        width: 724px;
    }
    .top{
        width: 100%;
        height: 25px;
        line-height: 25px;
    }
    .top h5{
        float: left;
    }
    .top span{
        float: right;
        font-size: 14px;
        color:#ccc;
    }
    .avatar-uploader{
        width: 300px;
        height: 200px;
        line-height: 200px;
    }
    .year{
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
        border: 1px solid #ccc;
        width: 590px;
        padding-left: 10px;
        margin: 6px 0;
    }
    .actives{
        color: #ccc;
    }
</style>
