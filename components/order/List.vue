
<template>
  <div class="m-order">
    <ul>
      <li v-if="cur.length">
        <el-row v-for="(item, idx) in cur" :key="idx">
          <el-col :span="6">
            <img :src="item.imgs[0].url" alt />
          </el-col>
          <el-col :span="8">
            <h4>{{ item.name }}</h4>
          </el-col>
          <el-col :span="4">
            <p>数量: {{ item.count }}</p>
          </el-col>
          <el-col :span="6">总价: ￥ {{ item.total }}</el-col>
        </el-row>
      </li>
      <li v-else class="empty">没有订单</li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  cur: {
    type: Array,
    default: () => [],
  },
});
</script>

<style>
li {
  list-style: none;
}
</style>