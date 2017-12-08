import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import { store } from './src/store/store.js'
import router from './src/router/config'
import axios from './src/Http/axios'
import app from './app.vue'

let vm = new Vue({
    el:'.container',
    store,
    router,
    render:function(creatElement){
        return creatElement(app)
    }
})
if(module.hot){
    module.hot.accept()
}