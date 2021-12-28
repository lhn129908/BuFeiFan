<template>
    <div class="all">
        <!-- 列表 -->
        <el-row>
            <ul class="nav">
                <li v-for="(item,index) in nav" :key="index" @click="change(item)" :class="{'active':active===item}">{{item}}</li>
            </ul>
        </el-row>
         <!--列表面标  -->
        <div >
             <ul>
                 <li v-for="item in lis" :key="item.id"  class="penl">
                     <ul>
                         <li class="penl-one">
                             <span>发布日期：{{item.date}}</span>
                             <span>工作地点：{{item.work}}</span>
                             <span>招聘人数：{{item.sum}}</span>
                             <span>工作经验：{{item.workdate}}</span>
                        </li>
                        <li class="penl-t">{{item.workname}}</li>
                        <li v-html="item.ask1" class="penl-s"></li>
                     </ul>
                 </li>
             </ul>
         </div> 
    </div>
</template>
<script setup>
import { ref } from "vue";
//  const lis=ref([      
//         {
//             type:"技术",
//             workname:"前端工程师",
//             date:"2018-04-13 16:00:00",
//             work:"绍兴",
//             sum:2,
//             workdate:"一年以上",
//              tem:"（0575）84881933",
//             ema:"ccwsn1@163.com",
//             岗位职责:              1.负责WEB端，移动端的页面构建和设计稿还原，根据需求完成高质量的开发和维护              2.根据需求实现页面交互效果,为用户呈现更好的用户体验界面              3.负责日常运营活动的视觉设计              4.通过良好的前端技术手段，提高用户体验并满足性能要求        任职要求:              1.负责WEB端，移动端的页面构建和设计稿还原，根据需求完成高质量的开发和维护              2.根据需求实现页面交互效果,为用户呈现更好的用户体验界面              3.负责日常运营活动的视觉设计              4.通过良好的前端技术手段，提高用户体验并满足性能要求
//             
//         },
//         {
//             type:"技术",
//             workname:"后端工程师",
//             date:"2018-04-13 16:00:00",
//             work:"绍兴",
//             sum:2,
//              workdate:"一年以上",
//              tem:"（0575）84881933",
//             ema:"ccwsn1@163.com",
//             ask1:{
//                 1:"负责WEB端，移动端的页面构建和设计稿还原，根据需求完成高质量的开发和维护",
//                 2:"根据需求实现页面交互效果,为用户呈现更好的用户体验界面",
//                 3:"负责日常运营活动的视觉设计",
//                 4:"通过良好的前端技术手段，提高用户体验并满足性能要求",
//             },
//             ask2:{
//                 1:"负责WEB端，移动端的页面构建和设计稿还原，根据需求完成高质量的开发和维护",
//                 2:"根据需求实现页面交互效果,为用户呈现更好的用户体验界面",
//                 3:"负责日常运营活动的视觉设计",
//                 4:"通过良好的前端技术手段，提高用户体验并满足性能要求",
//             },
//         },
//         {
//             type:"行政",
//             workname:"人力资源主管",
//             date:"2018-04-13 16:00:00",
//             work:"绍兴",
//             sum:2,
//              workdate:"一年以上",
//              tem:"（0575）84881933",
//             ema:"ccwsn1@163.com",
//             ask1:{
//                 1:"负责WEB端，移动端的页面构建和设计稿还原，根据需求完成高质量的开发和维护",
//                 2:"根据需求实现页面交互效果,为用户呈现更好的用户体验界面",
//                 3:"负责日常运营活动的视觉设计",
//                 4:"通过良好的前端技术手段，提高用户体验并满足性能要求",
//             },
//             ask2:{
//                 1:"负责WEB端，移动端的页面构建和设计稿还原，根据需求完成高质量的开发和维护",
//                 2:"根据需求实现页面交互效果,为用户呈现更好的用户体验界面",
//                 3:"负责日常运营活动的视觉设计",
//                 4:"通过良好的前端技术手段，提高用户体验并满足性能要求",
//             }
//         },
//         {
//             type:"运营",
//             workname:"前端工程师",
//             date:"2018-04-13 16:00:00",
//             work:"绍兴",
//             sum:2,
//              workdate:"一年以上",
//              tem:"（0575）84881933",
//             ema:"ccwsn1@163.com",
//             ask1:{
//                 1:"负责WEB端，移动端的页面构建和设计稿还原，根据需求完成高质量的开发和维护",
//                 2:"根据需求实现页面交互效果,为用户呈现更好的用户体验界面",
//                 3:"负责日常运营活动的视觉设计",
//                 4:"通过良好的前端技术手段，提高用户体验并满足性能要求",
//             },
//             ask2:{
//                 1:"负责WEB端，移动端的页面构建和设计稿还原，根据需求完成高质量的开发和维护",
//                 2:"根据需求实现页面交互效果,为用户呈现更好的用户体验界面",
//                 3:"负责日常运营活动的视觉设计",
//                 4:"通过良好的前端技术手段，提高用户体验并满足性能要求",
//             }
//         },
//         {
//             type:"设计",
//             workname:"前端工程师",
//             date:"2018-04-13 16:00:00",
//             work:"绍兴",
//             sum:2,
//              workdate:"一年以上",
//              tem:"（0575）84881933",
//             ema:"ccwsn1@163.com",
//             ask1:{
//                 1:"负责WEB端，移动端的页面构建和设计稿还原，根据需求完成高质量的开发和维护",
//                 2:"根据需求实现页面交互效果,为用户呈现更好的用户体验界面",
//                 3:"负责日常运营活动的视觉设计",
//                 4:"通过良好的前端技术手段，提高用户体验并满足性能要求",
//             },
//             ask2:{
//                 1:"负责WEB端，移动端的页面构建和设计稿还原，根据需求完成高质量的开发和维护",
//                 2:"根据需求实现页面交互效果,为用户呈现更好的用户体验界面",
//                 3:"负责日常运营活动的视觉设计",
//                 4:"通过良好的前端技术手段，提高用户体验并满足性能要求",
//             }
//         },
//         {
//             type:"市场和销售",
//             workname:"前端工程师",
//             date:"2018-04-13 16:00:00",
//             work:"绍兴",
//             sum:2,
//              workdate:"一年以上",
//              tem:"（0575）84881933",
//             ema:"ccwsn1@163.com",
//             ask1:{
//                 a1:"负责WEB端，移动端的页面构建和设计稿还原，根据需求完成高质量的开发和维护",
//                 a2:"根据需求实现页面交互效果,为用户呈现更好的用户体验界面",
//                 a3:"负责日常运营活动的视觉设计",
//                 a4:"通过良好的前端技术手段，提高用户体验并满足性能要求",
//             },
//             ask2:{
//                 a1:"负责WEB端，移动端的页面构建和设计稿还原，根据需求完成高质量的开发和维护",
//                 a2:"根据需求实现页面交互效果,为用户呈现更好的用户体验界面",
//                 a3:"负责日常运营活动的视觉设计",
//                 a4:"通过良好的前端技术手段，提高用户体验并满足性能要求",
//             }
//         },
//         {
//             type:"技术" ,
//                workname:"算法工程师",
//              date:"2018-04-13 16:00:00",
//              work:"绍兴",
//              sum:2,
//               workdate:"一年以上",
//               tem:"（0575）84881933",
//              ema:"ccwsn1@163.com",
//              ask1:{
//                  a1:"负责WEB端，移动端的页面构建和设计稿还原，根据需求完成高质量的开发和维护",
//                  a2:"根据需求实现页面交互效果,为用户呈现更好的用户体验界面",
//                  a3:"负责日常运营活动的视觉设计",
//                  a4:"通过良好的前端技术手段，提高用户体验并满足性能要求",
//              },
//              ask2:{
//                  a1:"负责WEB端，移动端的页面构建和设计稿还原，根据需求完成高质量的开发和维护",
//                  a2:"根据需求实现页面交互效果,为用户呈现更好的用户体验界面",
//                  a3:"负责日常运营活动的视觉设计",
//                  a4:"通过良好的前端技术手段，提高用户体验并满足性能要求",
//              },
//          }
//      ]);
const lis=ref([])
const cun=ref([])
const nav=ref(["全部","技术","行政","运营","设计","市场和销售"])
const active=ref(nav.value[0])
const getlis=async()=>{
    console.log("oooooo")
    let {data} =await useFetch(`/api/work/find`);
        lis.value=data._rawValue.data
        cun.value=lis.value
        console.log("hhhhh",data._rawValue.data,lis.value,cun.value)
}
getlis()
const change=(item)=>{
    var arry={}
    cun.value=[]
    for(var i=0;i<lis.value.length;i++){
        if(lis.value[i].type===item){
           arry=lis.value[i]
           active.value=item
            console.log("llll",i,active.value,item)
            cun.value.push(arry)
        }else if(item==="全部"){
            cun.value=lis.value
            active.value=item
        }
    }
    console.log("nnn",cun.value) 
}


</script>
<style>
.all{
    padding: 5rem 10.1875rem; 
    width: 870px;
    margin: 0 auto;
    background-color: #fff;
}
li{
    list-style: none;
}
.nav{
    height: 1.875rem;
    line-height:1.875rem;
    text-align: center;

}
.nav>li{
    float: left;
    list-style: none;
    width: 5.9375rem;
    
}
.active{
    background-color:#3498DB ;
    border-radius: 15px;
    color: #fff;
}
.penl{
    border-bottom: 1px solid #d8d8d8;
    padding-top: 45px;
    font-size: 12px;
    color: #7f8c8d;
}
.penl-one span{
    margin-right: 40px;
    color: #bdc3c7!important;
    font-size: 12px;
}
.penl-t{
   font-size: 22px;
    color: #2c3e50;
    margin-top: 17px; 
}
.penl-s{
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 12px;
    color: #7f8c8d;
}
.penl-li{
    margin-bottom: 20px;
}
.penl-li li{
    font-size: 12px;
    color: #7f8c8d;
    min-height: 25px;
    line-height: 25px;
    margin-left: 13px;
}
.penl-e{
        margin: 40px 0px;

}
.penl-e span{
    font-size: 12px;
    color: #7f8c8d;
    margin-right: 20px;
}
</style>