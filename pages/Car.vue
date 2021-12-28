<template>
  <div class="page-cart">
    <el-row>
      <el-col v-if="cart.length" :span="24" class="m-cart">
        <CartList :cart-data="cart"></CartList>
        <p>
          应付金额：
          <em class="money">￥{{ total }}</em>
        </p>
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
import { ref, computed, watchEffect } from "vue";
const route = useRoute();
const router = useRouter();
const cart = ref([]);
var { total } = useTotal();
const { user } = useUser();
if (!user.value.login) {
    router.push("/login")
}
console.log(route.query.username)
let { data } = await useFetch(`/api/carts/getcart/`, {
  params: {
    username: route.query.username,
  },
  server: false,
});

watchEffect(() => {
  if (data.value) {
    data.value.cart.map((item) => {
      cart.value.push(item.detail[0]);
    });
  }
  console.log("data.value", cart.value);
});
total.value = computed(() => {
  let sum = 0;
  cart.value.map((item) => {
    sum += item.price * item.count;
  });
  return sum;
});
const orderData = ref([]);
const submit = () => {
  router.push({ path: "/User" });
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/cart/index.scss";
</style>