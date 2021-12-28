<template>
    <div>
        <!-- 地图 -->
        <el-row>
            <el-col :span="12">地图</el-col>
             <el-col :span="12">
                  <p>商务合作：<span>partnership@buyijiafang.com</span></p>
            <p>联系电话:400-809-7866</p>
            <p>座机:0575-84881933</p>
            <p>媒体邮箱:<span>customercare@buyijiafang.com</span></p>
            <p>邮政编码:312000</p>
            <p>工作时间:8:00-17:00</p>
            <p>公司地址:浙江省绍兴市柯桥区山阴路1698号</p>
             </el-col>
        </el-row>
    </div>
</template>
<style>
 
</style>
<script setup>
const data=()=>{
    return {
          jump_path:"",
            center: {lng: 120.4373010751, lat: 23.1095638170},
            zoom: 15,  //缩放级别
            title:"标题",
            contents: '地址：具体地址信息',  //标签内容
            show: true,  //显示标签
            scroll:true,  //地图缩放
            dragging:true,  //地图拖拽
    }
}
</script>

