<template>
    <div class="invit">
        <p style="padding:20px 0;background:#fff;padding-left:20px">
            <span style="margin-right:10px">报名名单</span>
            <span style="color:#ccc;font-size:12px;">短信通知</span>
        </p>
        <el-table
            :data="tableData"
            border
            style="width: 100%;text-align:center">
            <el-table-column
                type="selection"
                width="50">
            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            width="50">
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
                <el-button type="text" size="small">备注</el-button>
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
                <el-button type="text" size="small">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>
    </div>
</template>

<script>
export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        tableData: [{
          name: '张三',
          tel: '18502019210',
          sex: '男',
          age:'65',
          msg:'已通知',
          info: '张大爷一直强烈要求想参加此次活动'
        }, {
          name: '张三',
          tel: '18502019210',
          sex: '男',
          age:'65',
          msg:'已通知',
          info: '张大爷一直强烈要求想参加此次活动'
        }, {
         name: '张三',
          tel: '18502019210',
          sex: '男',
          age:'65',
          msg:'已通知',
          info: '张大爷一直强烈要求想参加此次活动'
        }, {
          name: '张三',
          tel: '18502019210',
          sex: '男',
          age:'65',
          msg:'已通知',
          info: '张大爷一直强烈要求想参加此次活动'
        }]
      }
    }
}
</script>

<style>
    .invit{
        position: relative;
        height: 409.32px;
    }
    .el-pagination{
        position: absolute;
        bottom: 0;
        right: 0;
    }
    .el-table-column,.cell{
        text-align: center
    }
    .please{
        outline: none;
        border: 1px solid #ccc;
        height: 30px;
        line-height: 30px;
        width: 200px;
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
