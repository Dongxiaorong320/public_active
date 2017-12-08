<template>
    <div>
        tab2
    </div>
</template>
<script>
export default {
  created(){
        this.$store.commit('switch_loading',true)
        this.$http.get('./admin/menu/grid').then(res=>{
            console.log(res);
            this.$store.commit('updata_menu',res.data.data)
             this.$store.commit('switch_loading',false)
        })
    }
}
</script>
