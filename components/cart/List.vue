<template>
  <el-table :data="cartData" style="width: 980px">
    <el-table-column prop="name" label="名称" width="232" align="center" />
    <el-table-column prop="price" label="单价" width="150" align="center" />
    <el-table-column label="数量" width="232" align="center">
      <!--自定义表格-->
      <template #default="scope">
        <!--双向绑定数据，表示绑定当前一行的个数。这边实际绑定的是父亲传递过来的cart，但是因为修改的是cart里面的信息，而不是修改cart本身，所以不会报错-->
        <el-input-number v-model="scope.row.count" :min="0" />
      </template>
    </el-table-column>
    <el-table-column label="总价" align="center">
      <template #default="scope">
        <div class>{{ scope.row.price * scope.row.count }}</div>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="120" align="center">
      <template #default="scope">
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
const props = defineProps({
  cartData: {
    type: Array,
    default: () => {
      return [];
    },
  },
});
const handleDelete = (index) => {
  props.cartData.splice(index, 1);
};
</script>