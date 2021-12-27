<template>
  <div class="page-order">
    <el-row>
      <el-col :span="18" :push="3">
        <h3>收货方式</h3>
        <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
          <el-tab-pane label="快递发货" name="first">
            <h3>配送方式</h3>
            <el-row>
              <el-col>
                <el-select v-model="value" placeholder="请选择配送方式">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="上门取货" name="second">
            <h3>自提人信息</h3>
            <el-form :rules="rules" :model="ruleForm">
              <el-form-item label="提货人:" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="手机号:" prop="tel">
                <el-input v-model="ruleForm.tel"></el-input>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
        <el-divider></el-divider>
        <h3>商品详情</h3>
        <el-row>
          <el-col class="table">
            <OrderList :cur="cur" />
            <el-row class="tips">
              <el-col :span="6">
                <p>给卖家留言:</p>
              </el-col>
              <el-col :span="16">
                <el-input
                  v-model="input"
                  placeholder="选填：对本次交易的说明(建议填写和卖家达成一致的说明)"
                ></el-input>
              </el-col>
              <el-col :span="2">
                <p>50字</p>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="16"></el-col>
              <el-col :span="2">使用优惠券</el-col>
              <el-col :span="6">
                <el-select
                  v-model="coupon"
                  placeholder="无优惠券"
                  :popper-append-to-body="false"
                >
                  <el-option
                    v-for="item in couponlist"
                    :key="item.value"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-col>
            </el-row>
            <p class="ordertotal">
              应付金额：
              <em class="money">￥{{ total }}</em>
            </p>
            <el-row>
              <el-col :span="22"></el-col>
              <el-col :span="2">
                <el-button
                  type="primary"
                  @click="submit"
                  style="background-color: #13d1be;"
                  >立即下单</el-button>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from "vue";

const { total } = useTotal();

const input = ref("");
const coupon = ref("");
const couponlist = ref([{ value: "无优惠券" }]);

const list = ref([
  {
    status: 0,
    name: "小米粒遮光窗帘",
    count: 1,
    total: 36.0,
    imgs: [
      {
        url: "http://www.buyijiafang.com/upload/201908/17/5d578dae4ebef4190.jpg",
      },
    ],
    title: "代金券",
  },
  {
    status: 0,
    name: "小米粒遮光窗帘",
    count: 1,
    total: 36.0,
    imgs: [
      {
        url: "http://www.buyijiafang.com/upload/201908/17/5d578dae4ebef4190.jpg",
      },
    ],
    title: "代金券",
  },
  {
    status: 0,
    name: "小米粒遮光窗帘",
    count: 1,
    total: 36.0,
    imgs: [
      {
        url: "http://www.buyijiafang.com/upload/201908/17/5d578dae4ebef4190.jpg",
      },
    ],
    title: "代金券",
  },
]);
const options = ref([
  {
    value: "顺丰快递",
  },
  {
    value: "中通快递",
  },
  {
    value: "韵达快递",
  },
  {
    value: "EMS",
  },
]);
const value = ref("");
const activeName = ref("first");

const ruleForm = reactive({
  name: "",
  tel: "",
});
const rules = ref({
  name: [
    {
      required: true,
      message: "请输入自提人姓名",
      trigger: "blur",
    },
    {
      min: 3,
      max: 10,
      message: "长度是3-10",
      trigger: "blur",
    },
  ],
  tel: [
    {
      required: true,
      message: "请输入正确的手机号码",
      pattern: "^[1][3,5,7,8,9][0-9]\\d{8}$",
      trigger: "blur",
    },
  ],
});

const handleClick = () => {};

const cur = computed(() => {
  return list.value;
});
</script>

<style lang="scss">
@import "@/assets/css/order/index.scss";
</style>

<style scoped>
.page-order .table .tips {
  border-top: 1px solid #e5e5e5 !important;
  border-bottom: 1px solid #e5e5e5;
}
.ordertotal {
  text-align: right;
}
.money {
  font-size: 20px;
  color: #f76120;
  font-style: normal;
}
</style>

