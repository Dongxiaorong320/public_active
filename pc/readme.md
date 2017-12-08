# （三鑫社区）项目总结
## 项目背景
    津南区智慧社区升级改造项目将建设智慧社区管理平台，用于进一步创新社会服务管理的方式方法，运用信息化手段加强和改进社会服务管理。该平台应与智慧津南其他相关平台互联互通，并兼顾数据安全与系统管理。充分利用和发挥物联网、云计算等高新技术的优越性，推进社区信息化建设，构建智能、人文、宜居的现代新型社区   
## 项目介绍目标
*  “四平台”的整体架构
*  “四平台”旨在搭建四个信息化平台。分别是：
    1. 一口式受理平台
    2. 公共服务平台
    3. 变多头受理为一口受理
    4. 社区网格化管理平台

    将过去被动应对问题的管理模式转变为主动发现问题和解决问题的新模式；智慧社区公共服务平台，实现居家养老、便民缴费、殡仪服务等基础服务事项；搭建智慧社区生活服务平台，引导市场参与，提供涵盖衣食住行各方面服务
## 项目技术点
* vue

    是一套构建用户界面的渐进式框架,易于上手，便于与第三方库或既有项目进行整合,Vue 也完全能够为复杂的单页应用程序提供驱动

* vue-router

    实现页面中的路由跳转
    
* vuex

    管理共享状态

* element-ui

    是一款基于Vue.js 2.0 的桌面端UI框架，手机端有对应框架是mint-ui，这个项目的整体排版都是基于element-ui的

* axios

    一个基于 Promise 的,为浏览器和 Node.js 设计的 HTTP 客户端。它尽可能简化封装了 HTTP 相关的各种操作,在 Web App 中使用非常方便。项目过程中用于去请求后台的接口，后台返回给前端数据，前端拿到数据之后进行页面渲染

* node(express)

    Express是nodejs的一套框架。在做三鑫社区这个项目的时候基于node简单的搭建了一个web服务器，用于前端的请求
## 项目介绍
* 登录注册

    注册时请求后台的接口，获取用户名和密码写入json文件(server/admin_list.json)

    登录时请求后台的接口，读取admin_list.json文件，点击登录按钮获取用户名和密码，将获取到的值跟json数据进行匹配，匹配成功用路由跳转到默认页(admin/menu/public),为了防止用户的信息泄露，运用jsonwebtoken令牌对其进行了加密，保证了用户的个人信息

* 上传图片

    请求后台的接口，主要运用了node的一个中间件(Multer)，Multer增加了一个body对象和一个file或files对象的request对象,所述body对象包含的形式的文本字段的值时，file或files对象包含经由形式上传的文件

* 公共服务平台

    * 信息管理以及活动管理的路由跳转
* 公共服务平台/活动管理/活动介绍中的保存并发布

    点击保存并发布按钮，请求后台的接口，获取图片路径、活动名称、活动的开始/结束时间以及地址的值写入json文件(server/DataTable/activeList.json),后台返回给前台一个成功的信息，前台弹出一个提示框(上传成功)

* 公共服务平台/活动管理/邀请居民


1. 表格渲染

    其结构用了element-ui中的table表格，请求后台的接口，读取paginationList.json返回给前天数据，前台拿到数据之后进行渲染
2. 分页功能

    其结构用了element-ui中的pagination,页数为前台拿到的数据的长度,默认显示的页数主页是对拿到的数据进行截取实现
3. 表格中的删除功能

    （1）点击删除的时候请求后台的数据，读取paginationList.json文件，前台在请求的时候发送了当前点击的ID，将前台传过来的ID跟后台的数据中的ID字段进行匹配，匹配成功就将当前的这一条数据给删除，并将删除之后的数据发送给前台，前台会自动重新渲染

    （2）点击删除如果当前的token过期，提示一个弹框，点击重新登录跳到登录页面，如果不过期直接删除（在这其中涉及到一个登录权限的问题，用户是管理员或者不是管理员）
4. 添加居民

    点击添加居民，弹出一个弹框，弹框里面有搜索功能，点击搜索的时候请求后台的接口，将input框中的值（可以是用户名/手机号）传到后台，接着读取paginationList.json文件匹配，匹配成功就把当前的这条数据返回给前台
5. 备注

    点击备注弹出一个弹框，去请求后台的接口，点击确定，获取input中的值，将获取到的值传到后台，接着读取paginationList.json文件匹配，同样是通过前台传到后台ID进行数据匹配，匹配成功，将当前数据中的Info字段改变为前台传过来的值，在将这个数据发送给前台

    
* 一口式受理平台/人员管理中的报名

1. 轮播
    排版用的是element-ui中的走马灯
2. 活动信息与报名以及人员管理的路由跳转
3. 活动信息与报名请求接口进行渲染
4. 人员管理的报名效果

    点击报名获取姓名、电话、备注信息的值，请求后台的数据，将获取到的值传给后台，读取paginationList.json文件，后台获取到的数据push到json文件中
## 问题

    完成这个项目的整个过程相对来说还是比较容易的，当然有一些地方也很棘手，在做路由跳转的时候，因为排版用的element-ui框架，无法正确实现侧边栏的渲染，多种方法尝试之后，最后封装了vuex插件，很好的解决了这个问题