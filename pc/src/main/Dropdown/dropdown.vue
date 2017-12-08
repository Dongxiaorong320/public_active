<template>

<el-row :gutter="10" class="more_select">

    <el-col :span="6">
        <div class="grid-content bg-purple">
            <el-select v-model="provice" placeholder="请选择小区" @change="chooseProvice">
                <el-option
                v-for="item in cityData"
                :key="item.name"
                :value="item.name">
                </el-option>
            </el-select>
        </div>
    </el-col>

    <el-col :span="6">
        <div class="grid-content bg-purple">
            <el-select v-model="city" placeholder="请选择小区" @change="chooseCity">
                <el-option
                v-for="item in cityList"
                :key="item.name"
                :value="item.name">
                </el-option>
            </el-select>
        </div>
    </el-col>

    <el-col :span="6">
        <div class="grid-content bg-purple">
            <el-select v-model="area" placeholder="请选择小区" @change="choosearea">
                <el-option
                v-for="item in areaList"
                :key="item.value"
                :value="item">
                </el-option>
            </el-select>
        </div>
    </el-col>

    <el-col :span="6">
        <div class="grid-content bg-purple">
            <el-select v-model="provice" placeholder="请选择小区" @change="chooseProvice">
                <el-option
                v-for="item in cityData"
                :key="item.name"
                :value="item.name">
                </el-option>
            </el-select>
        </div>
    </el-col>

</el-row>

</template>

<script>
export default {
    props:{
        cityData:{
            type:Array
        }
    },
    data(){
        return {
            provice:'',
            city:'',
            area:'',
            cityList:'',
            areaList:''
        }
    },
    methods:{
       chooseProvice(val){
           console.log(val)
           this.cityData.forEach((item,index)=>{
               if(item.name == val){
                   this.cityList = item.city
               }
           })
           this.city = ''
           this.area = ''
       },
       chooseCity(val){
           console.log(val)
            this.cityList.forEach((item,index)=>{
               if(item.name == val){
                   this.areaList = item.area
               }
           })

           this.area = ''
       },
       choosearea(val){
           console.log(val)
           this.sendInfo()
       },
       sendInfo(){
           if(this.provice && this.city && this.area){
               this.$emit('info',{
                   provice:this.provice,
                   city:this.city,
                   area:this.area
               })
           }
       }
    }
}
</script>

<style>

</style>
