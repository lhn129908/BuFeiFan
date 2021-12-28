<template>
    <div class="cen">
        <el-row>
            <el-col :span="4" class="left">
                <!-- 左边 -->
                <p class="p1">帮助中心</p>
                <p class="p2">---  HELP CENTER  ---</p>
                <ul class="leftli">
                    <li  @click="add(0)" :class="su===0?'add':''">{{lis[0]}}</li>
                    <li  @click="add(1)" :class="su===1?'add':''">{{lis[1]}}</li>
                    <li  @click="add(2)" :class="su===2?'add':''">{{lis[2]}}</li>
                    <li  @click="add(3)" :class="su===3?'add':''">{{lis[3]}}</li>
                    <li  @click="add(4)" :class="su===4?'add':''">{{lis[4]}}</li>
                    <li  @click="add(5)" :class="su===5?'add':''">{{lis[5]}}</li>
                    <li  @click="add(6)" :class="su===6?'add':''">{{lis[6]}}</li>
                    <li  @click="add(7)" :class="su===7?'add':''">{{lis[7]}}</li> 
                </ul>
            </el-col>
            <el-col class="right" :span="20">
                <!-- 右边 -->
                <div v-if="su===0">
                    <HelpsOne></HelpsOne>
                </div>
                <div v-else-if="su===1">
                    <HelpsTwo></HelpsTwo>
                </div>
                <div v-else-if="su===2">
                    <HelpsThree></HelpsThree>
                </div>
                <div v-else-if="su===3">
                    <HelpsFour></HelpsFour>
                </div>
                <div v-else-if="su===4">
                    <HelpsFive></HelpsFive>
                </div>
                <div v-else-if="su===5">
                    <HelpsSix></HelpsSix>
                </div>
                <div v-else-if="su===6">
                    <HelpsSeve></HelpsSeve>
                </div>
                <div v-else-if="su===7">
                    <HelpsEight></HelpsEight>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<style>
.cen{
    background-color: #fff;
    width: 74.375rem;
    margin: 0 auto;
}
.left{
    background-color: #373D44;
    height: 108.4375rem;
}
.leftli>li{
    list-style: none;
    height:2.6875rem;
    line-height:2.6875rem;
    text-align: center;
    border-bottom:2px #4B5157 dotted ;
    /* margin: 0px 13px; */
    color: #fff;
    font-size:.875rem ;
    padding: 0px;
}
.add{
    width:13.75rem ;
    padding: 0px;
    margin: 0px;
    border: 0px !important;
    color: #000 !important;
    font-size:.875rem ;
    background:url(../../assets/img/jiao.png) no-repeat;
    transition: width 2s, height 2s, transform 2s;
    -webkit-transition: width 2s, height 2s, -webkit-transform 2s;
}
.p1{
    color: #fff;
    font-size: 1.25rem;
    margin-top: 63px;
}
.p2{
    color:#7A7E82; 
   font-size: 3px !important;
}
.right{
    padding: 5rem;
}
.helpt {
    font-size: 26px;
    margin-bottom: 25px;
}

.helpt1 {
    font-size: 20px;
    color: #2c3e50;
    line-height: 20px;
    height: 20px;
    margin-bottom: 25px;
}

.helpc {
    font-size: 14px;
    color: #2c3e50;
    line-height: 25px;
    margin-bottom: 35px;
}

.s1 {
    text-align: center;
    font-size: 1.375rem;
    color: #2c3e50;
}

.s2 {
    text-align: center;
    font-size: .75rem;
    color: #bdc3c7;
    letter-spacing: .0625rem;
    margin-top: .625rem;
    margin-bottom: 2.1875rem;
}

.s4 {
    font-weight: bold;
}

.s3 {
    font-size: .75rem;
    color: #7f8c8d;
    padding: 0 2.8125rem 3.5rem .25rem;
}
</style>
<script setup>
import { ref } from "vue";
const lis=ref(["常见问题","购买相关","配送与验收","售后服务","会员积分","优惠卷","活动信息","联系我们"])
const flag=ref(false)
const su=ref(0)
const add=(index)=>{
    // for(var i=0;i<lis.value.length;i++){
    //     su.value=su.value+1;
    // }
    su.value=index
    console.log("flag:",su.value)
}
</script>