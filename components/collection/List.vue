<template>
  <el-table :data="collectionData" style="width: 100%">
    <el-table-column prop="imgs" label="图片" width="180"> </el-table-column>
    <el-table-column prop="name" label="名称" width="180"> </el-table-column>
    <el-table-column prop="total" label="总价" width="180"> </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index)"
          >取消收藏</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
const props = defineProps({
  collectionData: {
    type: Array,
    default: () => {
      return [];
    },
  },
});

const handleDelete = (index) => {
  props.collectionData.splice(index, 1);
};
</script>