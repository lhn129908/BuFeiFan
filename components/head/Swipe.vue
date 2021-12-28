<template>
  <el-carousel arrow="hover" height="527px">
    <el-carousel-item v-for="item in list" :key="item.id">
      <img :src="item.img" />
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
<script setup lang="ts">
import { ref } from "vue";
const list = ref([
  {
    id: "1",
    img: "../../assets/images/swipe1.png",
  },
  {
    id: "2",
    img: "../../assets/images/swipe1.png",
  },
  {
    id: "3",
    img: "../../assets/images/swipe1.png",
  },
]);
</script>