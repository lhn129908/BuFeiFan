<template>
  <div class="page-cart">
    <el-row>
      <el-col v-if="collectionList.length" :span="24" class="m-cart">
        <CollectionList :collection-list="collectionList" />
      </el-col>
      <el-col v-else class="empty">
        <el-empty description="暂无收藏"></el-empty>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from "vue";

const collectionList = ref([
  {
    name: "小米粒遮光窗帘",
    total: 36.0,
    imgs: [
      {
        url: "http://www.buyijiafang.com/upload/201908/17/5d578dae4ebef4190.jpg",
      },
    ],
  },
]);
</script>

// <style lang="scss">
// @import "@/assets/css/cart/index.scss";
// </style>