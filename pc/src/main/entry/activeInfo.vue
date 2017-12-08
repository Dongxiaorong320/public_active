<template>
    <div>
        <div class="enroll">
            <h5>报名名单</h5>
        </div>
        <el-table
            stripe
            border
            :data="tableData2.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            style="width: 95%;margin-left:2.5%;">
            <el-table-column
            prop="name"
            label="居民姓名"
            width="198"
            class='people_name'>
            </el-table-column>
            <el-table-column
            prop="tel"
            label="联系电话"
            width="198"
            class='people_tel'>
            </el-table-column>
            <el-table-column
            prop="info"
            label="备注信息"
            width="198"
            class='remark'>
            </el-table-column>
            <el-table-column
            prop="time"
            label="报名时间"
            width="198"
            class='registration_time'>
            </el-table-column>
            <el-table-column
            label="操作"
            width="198"
            class="operation">
            <template slot-scope="scope">
                <el-button type="text" size="small">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[1,3,5,7,10]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData2.length">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                currentPage:1,
                pagesize:5,
                tableData2: []
            }
        },
        created(){
            this.$http.post('/admin/registration').then(res=>{
                this.tableData2 = res.data.data
            })
        },
        methods:{
            handleSizeChange: function (size) {
                this.pagesize = size;
            },
            handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
            }
        }
    }
</script>

<style scoped>
.enroll {
  width: 95%;
  margin-left: 2.5%;
  height: 60px;
  line-height: 60px;
  background: #fff;
  border: 1px solid #ccc;
  margin-top: 20px;
  position: relative;
}
.enroll h5 {
  margin-left: 10px;
  font-size: 16px;
  position: absolute;
  left: 10px;
  top: 0;
}
</style>
