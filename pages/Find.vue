<template>
  <div class="find">
    <div class="find-title">跟着小编发现好物</div>
    <div class="find-container">
      <div class="find-img">
        <!-- 大推荐 -->
        <a class="find-big" href="#">
          <div class="find-big1">
            <div class="find-bigTop">
              <img src="../images/2.jpg" alt="" class="find-buyi" />
              <div class="buyi">
                <span>(3)</span>
                <span>BY:布非凡家纺</span>
                <div>08-21-2018</div>
              </div>
            </div>
            <div class="find-bigCenter">这个夏天，来一款“冰淇凌”窗帘</div>
            <div class="find-bigCenter2">
              很久很久以前~~人们为了解酷暑的炎热，创造了冰淇凌然而，人类对冰淇凌的喜爱超乎想象，这冰凉顺滑的口感搭配多种口味的消暑甜品已然俘虏了男女老少...
            </div>
            <div class="find-bigBottom">
              <div>
                <img src="../images/10.jpg" alt="粉色初恋玫瑰" />
                <p>粉色初恋玫瑰</p>
                <p>￥161.00</p>
              </div>
              <div>
                <img src="../images/11.png" alt="馥郁铃兰花园" />
                <p>馥郁铃兰花园</p>
                <p>￥161.00</p>
              </div>
              <div>
                <img src="../images/12.jpg" alt="枫叶红现代竖条" />
                <p>枫叶红现代竖条</p>
                <p>￥161.00</p>
              </div>
            </div>
          </div>
        </a>
        <!-- 小推荐 .slice(0, 4)-->
        <div
          class="find-small"
          v-for="(item, findIndex) in roundContent"
          :key="findIndex"
        >
          <!-- 跳转路由 -->
          <nuxt-link
            :to="{ path: '/finddetails', query: { id: item.id } }"
            style="text-decoration: none"
          >
            <div class="find-smallimg">
              <img :src="item.images" alt="" />
              <p>{{ item.title }}</p>
              <p>
                {{ item.id }} {{ item.name }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
                  item.time
                }}
              </p>
              <div>
                {{ item.introduce }}
              </div>
            </div>
          </nuxt-link>
          <nuxt-link
            :to="{ path: '/finddetails', query: { id: item.id } }"
            style="text-decoration: none"
          >
            <div class="find-smallimg">
              <img :src="item.images" alt="" />
              <p>{{ item.title }}</p>
              <p>
                {{ item.id }} {{ item.name }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
                  item.time
                }}
              </p>
              <div>
                {{ item.introduce }}
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="find-page">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="roundContentTotal"
        :page-size="pageOptions.size"
        @current-change="currentPageChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue'

const config = useRuntimeConfig()
const { roundContent, roundContentTotal } = useRoundContent()
// 分页
const pageOptions = reactive({
  page: 1,
  size: 6,
})

getAList()
async function getAList() {
  if (config.API_BASE) {
    let { data } = await useFetch(
      `${config.API_BASE}/api/findRounds/findround`,
      {
        params: {
          size: pageOptions.size,
          page: pageOptions.page,
        },
      }
    )
    roundContent.value = data._rawValue.data
    roundContentTotal.value = data._rawValue.total
  }
  //客户端执行
  else {
    let { data } = await useFetch('/api/findRounds/findround', {
      params: {
        size: pageOptions.size,
        page: pageOptions.page,
      },
    })
    if (data.value) {
      roundContent.value = data._rawValue.data
      roundContentTotal.value = data._rawValue.total
    }
  }
}
// 点击分页
const currentPageChange = async (current) => {
  console.log(current, 'currentPageChange')
  pageOptions.page = current
  console.log(pageOptions.page)
  getAList()
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/find.scss';
.find-container {
  display: flex;
}
</style>
