<template>
  <div class="star">
    <!-- <el-icon :size="20" ><Star /></el-icon> -->
    <!-- <el-icon :size="40" ><Service /></el-icon> -->
    <el-badge :value="0" class="item" type="warning">
      <el-icon @click="CARR" :size="40">
        <ShoppingCartFull />
      </el-icon>
    </el-badge>
  </div>
</template>
<script setup>
const { user } = useUser()
const router = useRouter()
import { ShoppingCartFull, Star, Service } from "@element-plus/icons";

const CARR = () => {
  router.push({
    path: "/Car",
    query: {
      username:user.value.username
    },
  })
}

</script>


<style lang="scss" scoped>
@import "@/assets/scss/star.scss";
</style>
