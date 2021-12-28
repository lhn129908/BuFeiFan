<template>
  <div class="curtain">
    <img src="@/assets/images/13.png" alt="" />
    <div>
      <img src="" alt="" />
    </div>
    <div class="shangpin">
      <el-row :gutter="12">
        <el-col :span="8"></el-col>
        <el-col
          :span="8"
          v-for="item in shop"
          :key="item.id"
          
        >
        <nuxt-link :to="{ path: '/Details', query: { id: item.id } }">
          <el-card shadow="hover">
            <img :src="item.img" alt="" class="wupin" />
            <p>{{ item.title }}</p>
            <p>{{ item.price }}</p>
          </el-card>
          </nuxt-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<style lang="scss">
.curtain {
  margin-top: 650px;
  margin-left: 150px;
}
</style>
<script setup lang="ts">
import { ref } from "vue";
import Text from "./Text.vue";
const shop = ref([
  {
    id: "444",
    title: "绿意盎然竹乡庭院",
    img: "../../assets/images/13.jpg",
    price: "￥71.00",
  },
  {
    id: "443",
    title: "田园清新薄荷香草",
    img: "../../assets/images/5b7a4f9cbc5c15372.jpg",
    price: "￥120.00",
  },
  {
    id: "85",
    title: "粉色初恋玫瑰",
    img: "../../assets/images/5b7a5017c3cc07964.jpg",
    price: "￥161.00",
  },
  {
    id: "66",
    title: "甜蜜橙味波浪",
    img: "../../assets/images/5b7a4e5b614f22171.jpg",
    price: "￥137.00",
  },
  {
    id: "127",
    title: "天空蓝/柠檬黄之心的告白",
    img: "../../assets/images/5b7a4eb3612bf4390.jpg",
    price: "￥141.00",
  },
]);
</script>
<style scoped>
.wupin {
  width: 330px;
  height: 330px;
}
.shangpin {
  margin-top: -420px;
}
</style>