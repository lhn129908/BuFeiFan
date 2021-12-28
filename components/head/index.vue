<template>
  <div class="box">
    <el-row :gutter="0">
      <el-col :span="8">
        <HeadUser></HeadUser>
      </el-col>
      <el-col :span="8">
        <HeadIcon></HeadIcon>
      </el-col>
      <el-col :span="8">
        <HeadStar></HeadStar>
      </el-col>
    </el-row>
  </div>
  <el-affix :offset="0">
    <HeadNav></HeadNav>
  </el-affix>
</template>
<style scoped>
body {
  padding: 0px;
  margin: 0px;
}
header.el-header {
  padding: 0;
}
</style>
<style lang="scss" scoped>
@import "@/assets/scss/bar.scss";
</style>

