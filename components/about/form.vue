<template>
    <div class="all">
        <!-- 表单 -->
        <p class="p1">CONTACT US</p>
        <p class="p2">联系我们</p>
        <div class="p3"></div>
        <el-row :gutter="2">
            <el-col :span="12"><p class="p4">您的称呼*</p></el-col>
            <el-col :span="12"><p class="p4">您的电话*</p></el-col>
        </el-row>
         <el-row>
            <el-col :span="12"><input type="text" v-model="lname"></el-col>
            <el-col :span="12"><input type="password" v-model="ltel"></el-col>
        </el-row>
        <p>写下您的需求和建议*</p>
        <textarea name="" id="" cols="105" rows="10" v-model="lsuggset"></textarea>
        <p class="p5"><button @click="tijiao">提交信息</button></p>
    </div>
</template>
<style>
*{
    padding: 0;
    margin: 0;

}
input{
    height: 2.5rem;
    width: 360px;
    line-height: 2.5rem;
    outline: none;
    margin: 10px 0px;
    border: 1px solid #D8D8D8;
}
textarea{
   margin: 10px 0px;
    border: 1px solid #D8D8D8; 
}
.p5{
     margin: 10px auto !important;
    text-align: center;
}
.p5>button{
    background-color: #3498DB;
    width:9.375rem;
    height: 2.5rem;
    line-height: 2.5rem;
   
    border-radius: 5px;
    font-size: 14px;
    margin-bottom: 80px;
    color: #fff;
    border: none;
   
}
.all{
    /* padding: 4.125rem 13.25rem; */
    color:#2C3E50;
}
.p1{
    text-align: center;
    font-size: 12px;
    margin-bottom: 10px;
    color:#2C3E50;

}
.p2{
    text-align: center;
    font-size: 28px;
    margin-bottom: 10px;
    color:#2C3E50;

}
.p3{
   width: 2rem;
    height: .125rem;
    margin: 0 auto 6.25rem;
    border-bottom: 3px solid #00ACDE;
}
.p4{
    height: 30px;
    line-height: 30px;
}

</style>
<script setup>
const lname=ref()
const ltel=ref()
const lsuggset=ref()
const tijiao=()=>{
 const {data} =useFetch("/api/suggest/add",{
     method:"post",
     body:{
         name:lname.value,
         tel:ltel.value,
         sugg:lsuggset.value,
         type:"suggest"
     }
 })
 lname.value=""
 ltel.value=""
 lsuggset.value=""
}

</script>