<template>
  <div class="dbg">
    <div class="bg">
      <div class="tp">
        <el-tabs tab-position="bottom">
          <el-tab-pane v-for="item in img" :key="item" >
            <template #label >
              <div >
                <img class="limg" :src="'http://101.35.3.52/' + item" />
              </div>
            </template>
            <img class="bimg" :src="'http://101.35.3.52/' + item" />
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="jieshao">
        <div class="top">
          <div class="lsj">零售价</div>
        </div>
        <div class="shoptitle">{{ name }}</div>
        <div class="shopimgBz">版权所有，仿冒必究</div>
        <span class="naturel">商品价格</span>
        <span class="naturele"
          ><span class="naturelee">￥</span>{{ prices }}</span
        >
        <span class="naturelex"
          ><span class="naturelee">￥</span>{{ prices_e }}</span
        >
        <span class="qdl">起订量:1</span>
        <span class="xdl">限订量:1000</span>
        <span class="sh">商品色号</span>
        <ul class="shxq">
          <div
            class="xxsh"
            :class="{ active: active == index }"
            v-for="(item, index) in data2"
            :key="index"
            @click="change(index)"
          >
            <img :src="'http://101.35.3.52/' + item.img" class="xsh" />
            <span class="itna">{{ item.title }}</span>
          </div>
        </ul>
        <span class="size">尺寸规格</span>
        <select name="shop-gg" id="shop-gg">
          <option value="挂钩定制每米">挂钩定制每米</option>
          <option value="韩褶/打孔定制每米">韩褶/打孔定制每米</option>
        </select>

        <div>
          <span class="sl">数量</span>
          <div class="js">
            {{ ssl }}
          </div>
          <div class="btn1" @click="add()">
            <el-icon><arrow-up /></el-icon>
          </div>
          <div class="btn2" @click="decrease()">
            <el-icon><arrow-down /></el-icon>
          </div>
          <span class="jian">件</span>
          <span class="kc">库存1000件</span>
        </div>
        <el-button class="gwc" @click="createCart()">加入购物车</el-button>
        <div class="sc" @click="layout">
          <img v-if="lay_type" src="@/assets/pictures/sc.png" />
          <img v-else src="@/assets/pictures/ysc.png" />
        </div>
      </div>
    </div>
    <div class="message">
      <div class="tz">
        <div>
          <img class="head" src="@/assets/pictures/众华.png" />
        </div>
        <div class="textcenter">浙江中华家纺集团有限公司</div>
        <span class="info1">供应商</span>
        <span class="info2">已认证</span>
        <div class="haveshop">共227件商品</div>
        <div class="collect">已关注</div>
        <a class="enter" href="/"> 进入主页 </a>
      </div>
      <div class="xxxx">
        <span class="title">产品信息</span>
        <div class="clearboth">
          <div class="check" v-for="item in merchandiseNews" :key="item">
            <span class="checkmc">{{ item.name }}:</span>
            <span class="checkcon" :title="item.title">{{ item.title }}</span>
          </div>
          <img
            v-for="item in tupian"
            :key="item"
            class="img"
            :src="'http://101.35.3.52/' + item"
          />
        </div>
      </div>
    </div>
    <!-- <div v-show="popup" round @click="closepopup">
      <div class="login">
        <span>购买数量不能小于1</span>
      </div>

      <div class="over"></div>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/details/index.scss";
:deep(.el-tabs__nav-wrap){
  display: flex;
  align-items: center;
}
:deep(.el-tabs__item){
  height: 120px;
}
:deep(#tab-0){
  display: none;
}
</style>

<script setup>



import { ArrowUp, ArrowDown } from "@element-plus/icons";
import { ref } from "vue";
const route = useRoute();
const router = useRouter();
const { productList } = useProduct();
const config = useRuntimeConfig();
const { user } = useUser();
import { useProduct } from "../composables/productsList";

if (config.API_BASE) {
  let { data } = await useFetch(`${config.API_BASE}/api/comms/comm?id=${route.query.id}`);
  // console.log(data.value);
  productList.value = data.value;
}
//客户端执行
else {
  let { data } = await useFetch(`/api/comms/comm?id=${route.query.id}`);
  // console.log(data.value);
  if (data.value) {
    productList.value = data.value;
  }
}

// console.log(user.value.username,"xxxxxxxxxxxxxxxxxxxxxxxxx")

console.log(productList.value);
const username=user.value.username;
const name = productList.value.data[0].name;
const id = productList.value.data[0]._id;
const prices = productList.value.data[0].commodityPrices[0].naturem;
const prices_e = productList.value.data[0].commodityPrices[0].naturem_e;
const img = productList.value.data[0].img;
const tupian = productList.value.data[0].tupian;
const data = productList.value.data[0].commodityPrices[1];
const merchandiseNews = productList.value.data[0].merchandiseNews;
const data2 = ref([]);
for(var i =0;i<data.length;i++){
  if(data[i].img){
    data2.value.push(data[i])
  }
}
const active = ref(0);
const lay_type = ref(0);
const popup = ref(0);
const nowIndex = ref(0);
console.log(img[0]);
const ssl = ref(1);
const add = () => {
  console.log(ssl.value);
  ssl.value++;
  console.log(ssl.value);
};
const decrease = () => {
  if (ssl.value > 1) {
    ssl.value--;
    console.log(ssl.value);
  } else {
    popup.value = 1;
  }
};
const closepopup = () => {
  popup.value = 0;
};
const layout = () => {
  if (lay_type.value == 0) {
    lay_type.value = 1;
  } else {
    lay_type.value = 0;
  }
};
const change = (index) => {
  active.value = index;
};
const createCart = async () => {
  const myDate = new Date();
  const time = myDate.getMilliseconds(); 
  const cartNo = (Math.random() * 1000 + time).toString();
  console.log(cartNo)
  const { data } = await useFetch("/api/carts/create", {
    method: "post",
    body: {
      id: id,
      username:username,
      detail: {
        name: name,
        price: prices,
        count: ssl.value,
        cartNo:cartNo
      },
    },
  });
  console.log(data.value,"aaaaaa")
  if (data.value && data.value.code === 0) {
    router.push({
      path: "/Car",
      query: {
        username: data.value.id
      },
    });
  }
};

console.log("details ----------------------------------------------------end")
</script>