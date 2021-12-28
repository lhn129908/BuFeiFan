<template>
  <div class="list-detail">
    <!-- 左边内容 -->
    <div class="left-content">
      <p class="list-detail-t">{{ roundDetail.length && roundDetail[0].name }}</p>
      <p class="list-detail-o">
        <span>一米阳光</span>
        <span>2018.11.03</span>
      </p>
      <!-- 图片渲染 -->
      <div v-for="item in contentArr" :key="item.value" class="detail">
        <!-- 文章内容 -->
        <template v-if="item['type'] === 'text'">
          <p>{{ item.value }}</p>
        </template>
        <template v-else>
          <img :src="item.value" />
        </template>
      </div>

      <div class="left-voice">
        <div></div>
        <input type="text" placeholder="200字内" v-model="content" />
        <div class="left-message" @click="onSubmit">留言</div>
      </div>
      <div class="left-word">全部留言&nbsp;&nbsp;&nbsp;2</div>
      <div class="left-word-li" v-for="item in rawValue" :key="item.id">
        <img :src="item.src" alt />
        <div class="left-word-one">
          <div class="left-word-two">{{ item.name }}</div>
          <div class="left-word-third">{{ item.evaluate }}</div>
        </div>
      </div>
    </div>
    <!-- 右边登录 -->
    <div class="right-content">
      <!--    用户登录成功 -->
      <div class="right-login" v-if="user.username">
        <div class="right-hi">
          <img src="user.headPortrait" />
          <div class="right-font">
            <p>{{ user.username }},您好!!</p>
            <p>您已登录</p>
          </div>
        </div>
        <div class="right-now" @click="exit">退出登录</div>
      </div>

      <!-- 用户没有登录 -->
      <div class="right-login" v-else>
        <div class="right-hi">
          <img src="../images/user_moren.png" />
          <div class="right-font">
            <p>Hi 您好</p>
            <p>登录发现更多精彩</p>
          </div>
        </div>
        <div class="right-now">
          <nuxt-link to="/Login" style="color:rgb(0, 153, 255)">立即登录</nuxt-link>
        </div>
      </div>

      <div class="right-message">
        <div class="right-message-t">
          <div class="right-message-x">相关资讯</div>
          <div class="right-message-h">换一批>></div>
        </div>
        <div class="right-message-single">
          <img src="../images/recommend01.jpg" alt />
          <div class="right-message-one">
            <p class="right-message-two">国际窗帘装饰10大流行趋势</p>
            <p class="right-message-third">
              <span>房天下</span>
              <span>2018.01.30</span>
            </p>
          </div>
        </div>

        <div class="right-message-single">
          <img src="../images/recommend02.jpg" alt />
          <div class="right-message-one">
            <p class="right-message-two">窗帘有必要装纱帘吗？怎么选购窗帘？</p>
            <p class="right-message-third">
              <span>新浪网</span>
              <span>2018.08.04</span>
            </p>
          </div>
        </div>

        <div class="right-message-single">
          <img src="../images/recommend03.jpg" alt />
          <div class="right-message-one">
            <p class="right-message-two">窗帘应该选这样的，让家里美上天！</p>
            <p class="right-message-third">
              <span>高质量生活知识</span>
              <span>2018.08.06</span>
            </p>
          </div>
        </div>

        <div class="right-message-single">
          <img src="../images/recommend04.jpg" alt />
          <div class="right-message-one">
            <p class="right-message-two">养儿不防老，防晒才防老</p>
            <p class="right-message-third">
              <span>买购网</span>
              <span>2018.01.30</span>
            </p>
          </div>
        </div>

        <div class="right-message-single">
          <img src="../images/recommend05.jpg" alt />
          <div class="right-message-one">
            <p class="right-message-two">家纺四件套面料辨别</p>
            <p class="right-message-third">
              <span>全球纺织网</span>
              <span>2018.01.28</span>
            </p>
          </div>
        </div>

        <div class="right-message-single">
          <img src="../images/recommend06.jpg" alt />
          <div class="right-message-one">
            <p class="right-message-two">窗帘有必要装纱帘吗？怎么选购窗帘？</p>
            <p class="right-message-third">
              <span>百度</span>
              <span>2018.08.06</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect, computed } from 'vue'
// 传参
const route = useRoute()
const ID = ref(0)
// input输入框中的数据存放在content中
const content = ref('')
// 内容
const rawValue = ref([])
// 发现页面的ID值
ID.value = route.query.id

const { user } = useUser()

//菜单项
const config = useRuntimeConfig()
const { roundDetail } = useRoundDetail()
//http://101.35.3.52/api/findrounds/find/90
async function getFind() {
  //服务器执行
  if (config.API_BASE) {
    let { data } = await useFetch(
      `${config.API_BASE}/api/findrounds/find/${ID.value}`
    )
    roundDetail.value = data._rawValue
  }
  //客户端执行
  else {
    let { data } = await useFetch(`/api/findrounds/find/${ID.value}`)
    if (data.value) {
      roundDetail.value = data._rawValue
    }
  }
  getfindds()
}
getFind()

// 处理图片路径问题
const contentArr = computed(() => {
  const contentArr = []
  for (var i = 0; i < roundDetail.value.length; i++) {
    const item = roundDetail.value[i]
    if (item['p']) {
      if (item['p'].indexOf('../../../') != -1) {
        var r = item['p'].replace('../../../', 'http://101.35.3.52/')
        contentArr.push({
          type: 'icon',
          value: r,
        })
      } else {
        contentArr.push({
          type: 'text',
          value: item['p'],
        })
      }
    }
  }
  return contentArr
})

// 点击留言后，input输入框中的数据发送给数据库
const onSubmit = async () => {
  //判断如果输入框中没有输入任何东西，则不能提交
  if (content.value) {
    //服务器执行
    if (config.API_BASE) {
      await useFetch(`${config.API_BASE}/api/findds/finddet`, {
        method: 'post',
        body: {
          id: ID.value,
          nameId: 1,
          name: '张三',
          src: '/images/2.jpg',
          evaluate: content.value,
        },
      })
    } else {
      // 客户端执行
      await useFetch(`/api/findds/finddet`, {
        method: 'post',
        body: {
          id: ID.value,
          nameId: 1,
          name: '张三',
          src: '/images/2.jpg',
          evaluate: content.value,
        },
      })
    }
  }
  // 输入框清空
  content.value = ''
  getfindds()
}

// 获取评论
async function getfindds() {
  //服务器执行
  if (config.API_BASE) {
    let { data } = await useFetch(`${config.API_BASE}/api/findds/find`)
    rawValue.value = data._rawValue
  }
  //客户端执行
  else {
    let { data } = await useFetch(`/api/findds/find`)
    if (data.value) {
      rawValue.value = data._rawValue
    }
  }
}

const exit = async () => {
  let { data } = await useFetch(`/api/user/exit`);
  user.value = {};
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/finddetails.scss";
</style>
