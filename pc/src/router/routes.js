import index from '../pages/index/index.vue'
import active from '../main/active.vue'
import info from '../main/info.vue'
import login from '../pages/login/login.vue'
import register from '../pages/register/register.vue'
import entry from '../main/entry/entry.vue'
import grid from '../main/gird/gird.vue'
import publics from '../main/public/public.vue'
import activeInfo from '../main/entry/activeInfo.vue'
import personal from '../main/entry/personal.vue'
let routes = [
    {
        path:'/',
        redirect:'/admin/menu/public'
    },
    {
        path:'/login',
        name:'login',
        component:login
    },
    {
        path:'/register',
        name:'register',
        component:register
    },
    {
        path:'/admin',
        name:'admin',
        component:index,
        children:[
            {
                path:'/admin/menu/entry',
                name:'entry',
                component:entry,
                children:[
                    {
                        path:'activeInfo',
                        name:'activeInfo',
                        component:activeInfo
                    },
                    {
                        path:'personal',
                        name:'personal',
                        component:personal
                    }
                ]
            },
            {
                path:'/admin/menu/grid',
                name:'grid',
                component:grid
            },
            {
                path:'/admin/menu/public',
                name:'public',
                component:publics,
                children:[
                    {
                        path:'active',
                        name:'active',
                        component:active
                    },
                    {
                        path:'info',
                        name:'info',
                        component:info
                    }
                ]
            }
        ]
    }
    
]
export default routes