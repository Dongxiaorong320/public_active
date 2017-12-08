var fs = require('fs');
var express = require('express');
var jwt = require('jsonwebtoken');
var body_parser = require('body-parser');
var multer = require('multer')

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
var uploader = multer({storage:storage})
var app = express();
app.use(body_parser.json())
app.all("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    
    next()
})
// 登录
let login = '/admin/loginUser';
// 注册
let register = '/admin/registerUser'
// 菜单
let public = '/admin/menu/:name'
// 删除
let removes =  '/admin/removedata'

// let public = '/admin/menu/entry'
// let public = '/admin/menu/grid'
// 上传图片
let upload = '/user/upload'
app.post(upload,uploader.single('test'),function(req,res){
    res.end(JSON.stringify(1))
})
// 添加活动
const addActive = require('./api/addActive')
app.post('/admin/activity/add', addActive)
// 城市渲染
const addrs = require('./api/localtion')
app.post('/admin/community/location/root',addrs)
// 分页
const pagin = require('./api/pagina_list')
app.post('/admin/paginationlist',pagin)
// 删除
app.post(removes,function(req,res){
    // console.log(req.body)
    jwt.verify(req.body.token,'1508B',(errs,decoded)=>{
        // console.log(errs)
        // console.log(decoded)
        if(errs){
            errs.code = 1001;  // 登录超时
            res.end(JSON.stringify(errs));
        }else{
            const list = JSON.parse(fs.readFileSync('./DataTable/paginationList.json','utf-8'))
            // console.log(list)
            list.forEach((item,idx)=>{
                // console.log(idx)
                if(req.body.id == item.id){
                    list.splice(idx,1)
                    fs.writeFileSync('./DataTable/paginationList.json',JSON.stringify(list))
                }
            })
        
            res.end(JSON.stringify({
                data:list
            }))
        }
    }) 
})
// 添加备注
app.post('/admin/remarks',(req,res)=>{

    const listdata = JSON.parse(fs.readFileSync('./DataTable/paginationList.json','utf-8'))

    listdata.forEach((item,idx)=>{
        if(req.body.data == item.id){
            item.info = req.body.info
            fs.writeFileSync('./DataTable/paginationList.json',JSON.stringify(listdata))
        }
    })

    res.end(JSON.stringify({
        data:listdata
    }))

    // console.log(req.body.info,req.body.data)
})
// 查询
app.post('/admin/inquire',(req,res)=>{

    const inquiredata = JSON.parse(fs.readFileSync('./DataTable/paginationList.json','utf-8'))

    inquiredata.forEach((item,idx)=>{
        if(req.body.add_people == item.tel || req.body.add_people == item.name){
            res.end(JSON.stringify({
                data:item
            }))
        }
    }) 
})
// 报名
app.post('/admin/Birthday_registration',(req,res)=>{
    console.log(req.body)
    const birthday_registration_list = JSON.parse(fs.readFileSync('./DataTable/paginationList.json','utf-8'))
    birthday_registration_list.push(req.body)
    fs.writeFileSync('./DataTable/paginationList.json',JSON.stringify(birthday_registration_list))  
    res.end(JSON.stringify({
        data:birthday_registration_list,
        msg:'success'
    })) 
})
//渲染活动信息与报名
app.post('/admin/registration',(req,res)=>{
    const registration_list = JSON.parse(fs.readFileSync('./DataTable/paginationList.json','utf-8'))
    res.end(JSON.stringify({
        data:registration_list
    })) 
})
// 轮播
app.post('/admin/banner_swiper',(req,res)=>{
    const banner_list = fs.readFileSync('./DataTable/activeList.json','utf-8')
    // console.log(banner_list)
    res.end(JSON.stringify({
        data:banner_list
    }))
})
app.all(public,function(req,res){
    console.log(req.params)
    var data = null;
    switch(req.params.name){
        case 'public' : data = fs.readFileSync('../Mock/public.json','utf-8');
        break;
        case 'grid' : data = fs.readFileSync('../Mock/grid.json','utf-8');
        break;
        case 'entry' : data = fs.readFileSync('../Mock/entry.json','utf-8');
        break;
    }
    res.end(data)
})
app.post(login,function(req,res){
    res.writeHead(200,{'Content-Type':'application/json;charset=utf-8'});
    // console.log(req.body);
    var token,response,flag=false;   
    // const user_name = req.body.login_user
    // const user_pas = req.body.login_psw
    let admin_list = fs.readFileSync('./admin_list.json', {'encoding': 'utf-8'})
    admin_list = JSON.parse(admin_list)
    admin_list.list.forEach((item)=>{
        if(item.login_user == req.body.login_user){
            flag = true;
            if(item.login_psw == req.body.login_psw){
                token = jwt.sign(req.body,'1508B',{expiresIn:30});
                response = {
                    "code": 1,
                    "token":token,
                    "msg": "SUCCESS"
                }
            }else{
                response = {
                    "code": 2,
                    "error":'error',
                    "msg": "密码错误"
                }
            }
        }
    })
    if(!flag){
        response = {
            "code": 3,
            "error":'error',
            "msg": "此用户不存在"
        }
    }
    res.end(JSON.stringify(response))
});

app.post(register,function(req,res){
    res.writeHead(200,{'Content-Type':'application/json;charset=utf-8'});
    // console.log(req.body);
    var admin_list = fs.readFileSync('./admin_list.json',{encoding:'utf-8'})
    // console.log(admin_list)
    admin_list = JSON.parse(admin_list);
    admin_list.list.push(req.body);
    fs.writeFileSync('./admin_list.json',JSON.stringify(admin_list))
    var obj={
        "code": 1,
        "msg": "SUCCESS"
    }
    res.end(JSON.stringify(obj))
});

app.listen(3000,function(data){
    console.log('server listen 3000')
})