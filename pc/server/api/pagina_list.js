const Mock = require('mockjs')
const fs = require('fs')
module.exports = (req,res) =>{

    // const paginationData = Mock.mock({
    //     'list|1-150':[{
    //         'id|+1':1,
    //         'name':'@cname',
    //         'tel':/^1[385][1-9]\d{8}/,
    //         'age|18-30':18,
    //         'sex|1':['男','女'],
    //         'msg|1':['已通知','未通知'],
    //         "info":'-'
    //     }]
    // })

    var list = JSON.parse(fs.readFileSync('../server/DataTable/paginationList.json','utf-8'))
    res.end(JSON.stringify(list))

}