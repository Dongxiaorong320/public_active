import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        user_name:[],
        loading:false,
        menu:[],
        imageUrl:[]
    },
    mutations:{
         updata_user_name(state,data){
            state.user_name = data
         },
         switch_loading(state,data){
            state.loading = data
         },
         updata_menu(state,data){
            state.menu = data
         },
         upload_image(state,data){
             console.log(data)
             state.imageUrl.push(data)
         }
    }
})
export { store }