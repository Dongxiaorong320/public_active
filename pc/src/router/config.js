import Vue from 'vue'
import VueRouter from 'vue-router'
import { getCookie, setCookie } from '../utils/utils.js'
Vue.use(VueRouter)
import routes from './routes.js'


let router = new VueRouter({
    routes
})

router.beforeEach((to,from,next)=>{
    if(to.name == 'login' || to.name == 'register'){
        next()
    }else{
        if(getCookie('token')){
            next()
        }else{
             next('/login')
        }  
    }
})

export default router