<template>
  <div>
    <div class="top-data">
      <p class="day">
        {{ day }}
      </p>
      <p style="font-size: 10px">{{ year }}-{{ mon }}</p>
    </div>
    <div class="text">
      <p>{{ title }}</p>
      <text>{{ text }}</text>
    </div>
    <div class="pic">
      <img :src="pic" alt="" class="img" />
    </div>
    <div>
      <el-row :gutter="12">
        <el-col :span="2"></el-col>
        <el-col
          v-for="item in tabs"
          :key="item.id"
          :span="5"
          @click.stop="tab(item.id)"
        >
          <el-card shadow="hover">
            <div class="data">
              <p class="day">
                {{ item.day }}
              </p>
              <p style="font-size: 10px">{{ item.year }}-{{ item.mon }}</p>
            </div>
            <div class="title">
              {{ item.title }}
            </div>
            <!-- <p>{{ item.year }}</p>
            <text>{{ item.mon }}/</text><text>{{ item.day }}</text>
            <div style="float: right; font-size: 12px" class="title">
              {{ item.title }}
            </div> -->
          </el-card>
        </el-col>
        <el-col :span="2"></el-col>
      </el-row>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Text from "./Text.vue";
const tabs = ref([
  {
    id: "1",
    title: "咖色与蓝色得完美结合",
    text: "相信很多人和小编一样再装修时常常纠结房子得色调搭配，传统得黑白灰很百搭，却缺少点别致，过于千篇一律，今天小编为大家带来一组全新得色系搭配",
    year: "2018",
    mon: "08",
    day: "06",
    img: "../../assets/images/pc011.jpg",
  },
  {
    id: "2",
    title: "窗纱————让家仙起来",
    text: "说到窗纱，大家脑海里有没有这样一个画面，少年站在窗边，低头看书，随风吹起得窗纱轻轻得拂过少年的脸，没错，这是电影《情书》里面的一幕相信这一...",
    year: "2018",
    mon: "08",
    day: "04",
    img: "../../assets/images/pc011.jpg",
  },
  {
    id: "3",
    title: "单身怎么了我的男朋友再窗",
    text: "根据2017年初国家统计局发布的《中国统计年鉴2016》显示，2016年，国内20岁至39岁的独居者数量目前已经接近2000万人，当然目前的数据应该远远超...",
    year: "2018",
    mon: "05",
    day: "04",
    img: "../../assets/images/pc011.jpg",
  },
  {
    id: "4",
    title: "2018室内窗帘设计流行趋势",
    text: "人们总再追逐时尚，然而时尚总是处于不断的变化之中，不论是时装还是家装，我们不仅要讲究实用，更要跟得上潮流，那么，2018年的家装流行趋势有什么特点...",
    year: "2018",
    mon: "02",
    day: "05",
    img: "../../assets/images/pc011.jpg",
  },
]);
const isshow = ref(false);
const text = ref(
  "相信很多人和小编一样再装修时常常纠结房子得色调搭配，传统得黑白灰很百搭，却缺少点别致，过于千篇一律，今天小编为大家带来一组全新得色系搭配"
);
const pic = ref("../../assets/images/pc011.jpg");
const day = ref("06");
const mon = ref("08");
const year = ref("2018");
const title = ref("咖色与蓝色得完美结合");
const tab = (id) => {
  console.log(tabs.value[id - 1]);
  text.value = tabs.value[id - 1].text;
  day.value = tabs.value[id - 1].day;
  year.value = tabs.value[id - 1].year;
  mon.value = tabs.value[id - 1].mon;
  pic.value = tabs.value[id - 1].img;
  title.value = tabs.value[id - 1].title;
};
</script>
<style scoped>
.data {
  float: left;
  padding-bottom: 17px;
}
.title {
  float: right;
  font-size: 12px;
  padding-top: 21px;
}
.day {
  font-size: 30px;
  letter-spacing: 10px;
  font-weight: 100;
  font-family: "shu";
}
.text {
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  margin-left: 200px;
}
.top-data {
  margin-left: 250px;
  margin-bottom: 30px;
}
.pic {
  margin-left: 700px;
  margin-top: -200px;
}
.pic.img {
  width: 200px;
  height: 100px;
}
</style>

