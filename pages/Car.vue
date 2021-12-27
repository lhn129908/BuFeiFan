<template>
  <div class="page-cart">
    <el-row>
      <el-col v-if="cart.length" :span="24" class="m-cart">
        <CartList :cart-data="cart"></CartList>
        <p>
          应付金额：
          <em class="money">￥{{ total }}</em>
        </p>
        <!--提交订单按钮-->
        <div class="post">
          <el-button
            type="primary"
            @click="submit"
            style="background-color: #13d1be"
            >提交订单</el-button
          >
        </div>
      </el-col>

      <el-col v-else class="empty">
        <el-empty description="购物车为空"></el-empty>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const router = useRouter();
var { total } = useTotal();

const cart = ref([
  {
    name: "小米粒遮光窗帘",
    price: 36.0,
    count: 1,
  },
  {
    name: "小米粒遮光窗帘",
    price: 36.0,
    count: 1,
  },
  {
    name: "小米粒遮光窗帘",
    price: 36.0,
    count: 1,
  },
  {
    name: "小米粒遮光窗帘",
    price: 36.0,
    count: 1,
  },
]);

total.value = computed(() => {
  let sum = 0;
  cart.value.map((item) => {
    sum += item.price * item.count;
  });
  return sum;
});

const orderData = ref([]);

const submit = () => {
  router.push({ path: "/order" });
};
</script>

<style lang="scss">
@import "@/assets/css/cart/index.scss";
</style>