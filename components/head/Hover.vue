<template>
  <div class="hover">
    <el-row :gutter="12">
      <el-col :span="6" class="item">
        <nuxt-link :to="{ path: '/kind', query: {name:'zheguang'} }">
          <img src="@/assets/images/5d4e6e6678b529859.jpg" alt />
          <p>遮光帘</p>
        </nuxt-link>
      </el-col>
      <el-col :span="6" class="item">
        <nuxt-link :to="{ path: '/kind', query: {name:'xiuhua'} }">
          <img src="@/assets/images/5d4e6e72dbe3c5159.jpg" alt />
          <p>绣花帘</p>
        </nuxt-link>
      </el-col>
      <el-col :span="6" class="item">
        <nuxt-link :to="{ path: '/kind', query: {name:'tihua'} }">
          <img src="@/assets/images/5d4e6e7f61d1c1548.jpg" alt />
          <p>提花帘</p>
        </nuxt-link>
      </el-col>
      <el-col :span="6" class="item">
        <nuxt-link :to="{ path: '/kind', query: {name:'xiuhua'} }">
          <img src="@/assets/images/5d4e6e8f87f763958.jpg" alt />
          <p>绣花纱</p>
        </nuxt-link>
      </el-col>
      <el-col :span="6" class="item">
        <nuxt-link :to="{ path: '/kind', query: {name:'suse'} }">
          <img src="@/assets/images/5d4e6e9ab5be21081.jpg" alt />
          <p>素色纱</p>
        </nuxt-link>
      </el-col>
      <el-col :span="6" class="item">
        <nuxt-link :to="{ path: '/kind', query: {name:'lanhua'} }">
          <img src="@/assets/images/5d4e6ea3c12fd9655.jpg" alt />
          <p>烂花纱</p>
        </nuxt-link>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
.hover img {
  width: 100px;
  height: 100px;
}
.hover {
  width: 100%;
  height: 280px;
  background-color: rgba(255, 255, 255, 1);
  font-size: 5px;
  position: relative;
  z-index: 100000;
}
.item{
  text-align: center;;
}
</style>