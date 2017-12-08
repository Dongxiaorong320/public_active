<template>
    <div class="invit">
        <p style="padding:20px 0;background:#fff;padding-left:20px">
            <span style="margin-right:10px">邀请名单</span>
            <el-button type="text" @click="add_prople" style="color:skyblue;font-size:14px;margin-right:10px">添加居民</el-button>

            <el-dialog title="添加居民" :visible.sync="dialogFormVisibleyes">
              <el-form :model="form">
                <el-form-item label="居民信息" :label-width="formLabelWidth">
                  <el-input v-model="people_info" auto-complete="off" placeholder="请输入用户名或者手机号进行查询"></el-input>
                  <button class="search_info" @click="search_info">查询</button>
                </el-form-item>
              </el-form>
              <el-table :data="arrayInfo">
                <el-table-column
                type="selection"
                width="50">
                </el-table-column>
              <el-table-column property="name" label="居民姓名" width="150"></el-table-column>
              <el-table-column property="tel" label="联系电话" width="200"></el-table-column>
              <el-table-column property="sex" label="性别"></el-table-column>
              <el-table-column property="age" label="年龄"></el-table-column>
            </el-table>
            </el-dialog>

            <span style="color:#ccc;font-size:12px;">短信通知</span>
        </p>
        <el-table
            :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            stripe
            border
            style="width: 100%;text-align:center">
            <el-table-column
                type="selection"
                width="50">
            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            width="70">
            </el-table-column>
            <el-table-column
            prop="tel"
            label="联系电话"
            width="120">
            </el-table-column>
            <el-table-column
            prop="sex"
            label="性别"
            width="50">
            </el-table-column>
            <el-table-column
            prop="age"
            label="年龄"
            width="50">
            </el-table-column>
            <el-table-column
            prop="msg"
            label="短信通知"
            width="80">
            </el-table-column>
            <el-table-column
            prop="info"
            label="备注信息"
            width="250">
            </el-table-column>
            <el-table-column
            label="操作"
            width="268">
            <template slot-scope="scope">
                <el-button type="text" size="small" @click="showDialog(scope.row.id,scope.$index)">备注</el-button>

                <el-dialog title="添加备注" :visible.sync="dialogFormVisible">
                  <el-form :model="form">
                    <el-form-item>
                      <el-input v-model="msg" auto-complete="off" class="ipts"></el-input>
                    </el-form-item>
                    <button class="search_info" @click="ensure">确定</button>
                  </el-form>
                </el-dialog>

                <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
                <el-button type="text" size="small" @click='removeData(scope.row.id)'>删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5,10,15,20]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length">
        </el-pagination>
    </div>
</template>

<script>
import {getCookie} from '../utils/utils.js'
export default {
    data() {
      return {
        currentPage:1,
        pagesize:10,
        tableData:[],
         dialogTableVisible: false,
        dialogFormVisible: false,
        dialogFormVisibleyes:false,
        data:null,
        people_info:'',
        msg:'',
        arrayInfo:[],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      }
    },
    created(){
      this.$http.post('/admin/paginationlist').then(res=>{
        this.tableData = res.data 
      })
    },
    methods: {
      handleClick(row) {
        console.log(row);
      },
      handleSizeChange: function (size) {
        this.pagesize = size;
      },
      handleCurrentChange: function(currentPage){
        this.currentPage = currentPage;
      },
      showDialog(idx){
        this.data = idx;
        this.dialogFormVisible = true
      },
     ensure(){
       this.$http.post('/admin/remarks',{
         info:this.msg,
         data:this.data
       }).then(res=>{
          this.tableData = res.data.data
       })
       this.dialogFormVisible = false
       this.msg = ''
     },
      removeData(val){
        let that = this;
        this.$http.post('/admin/removedata',{
          id:val,
          token:getCookie('token')
        }).then(res=>{
          if(res.data.code == 1001){
            this.$msgbox({
              title: '消息',
              message:res.data.message,
              showCancelButton: true,
              confirmButtonText: '重新登录',
              cancelButtonText: '取消',
              beforeClose: (action, instance, done) => {
                if (action === 'confirm') {
                  that.$router.push({
                    name:'login',
                    query:{
                      form:this.$route.name
                    }
                  })
                }
                  done();
              }
            })
            return;
          }
          this.tableData = res.data.data
        })
      },
      add_prople(){
       this.dialogFormVisibleyes = true;
      },
      search_info(){
         console.log(this.people_info)
        this.$http.post('/admin/inquire',{
            add_people:this.people_info
        }).then(res=>{
            this.arrayInfo = []
            this.arrayInfo.push(res.data.data)
            this.people_info = ''
            // console.log(res.data.data)
        })
      }
    }
}
</script>

<style scoped>
   
    .invit{
        position: relative;
        height: 409.32px;
        height: auto!important;
    }
    .el-pagination{
      position: absolute;
      right: 0;
      bottom: -40px;
    }
    .el-table-column,.cell{
        text-align: center
    }
    
    .please{
        outline: none;
        border: 1px solid #ccc;
        height: 30px;
        line-height: 30px;
        width: 280px!important;
        border-radius: 5px;
        margin-left: 20px;
    }
    .inquiry{
        outline: none;
        border: none;
         height: 30px;
        line-height: 30px;
        background: skyblue;
        color: #fff;
        width: 70px;
        border-radius: 5px;
        margin-left: 20px;
    }
</style>
