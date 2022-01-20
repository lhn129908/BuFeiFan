<template>
  <div class="foot">
    <div class="link">
      <nuxt-link to="/About?lis=0">关于我们</nuxt-link>
      <nuxt-link to="/About?lis=1">联系我们</nuxt-link>
      <nuxt-link to="/help">帮助中心</nuxt-link>
      <!-- <nuxt-link to="/about?lis=2">售后服务</nuxt-link> -->
      <nuxt-link to="/About?lis=3">招聘求职</nuxt-link>
      <!-- <nuxt-link to="/about?lis=4">商务合作</nuxt-link> -->
       <nuxt-link to="/About?lis=5">服务协议</nuxt-link> 
      <nuxt-link to="/About?lis=5">隐私政策</nuxt-link>
    </div>
    <div class="zhe">
      <p style="color: white">Copyright©2018郑州布非凡家纺有限公司版权所有</p>
      <text style="color: blue">豫ICP备19022120号-1</text>
      <text style="color: grey">经营许可证:浙B2-20180798</text>
    </div>
    <div class="erweima">
      <img class="er1" src="@/assets/images/2.png" alt="" />
      <img class="er2" src="@/assets/images/3.png" alt="" />
    </div>
    <div style="margin-left: 800px; margin-top: 100px">
      <text style="font-weight: bold; font-size: 35px; color: white"
        >400-809-7866</text
      >
      <p style="color: white">服务时间:8:30-17:00</p>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/scss/foot.scss";
</style>
<style>
.el-footer {
  background-color: #4d4d4d;
}
.link a {
  color: white;
  text-decoration: none;
}
.erweima {
  position: absolute;
  top: 100px;
  left: 800px;
}
.er1 {
  margin-right: 20px;
  width: 100px;
  height: 100px;
}
.er2 {
  width: 100px;
  height: 100px;
}
.foot a {
  padding-right: 50px;
}
.link a:hover {
  color: rgb(120, 146, 231);
}
hr {
  width: 650px;
  margin-left: 319px;
  margin-top: 30px;
  color: rgba(236, 240, 241, 0.2);
}
.link {
  border-bottom: 1px solid rgba(236, 240, 241, 0.2);
  height: 94px;
  line-height: 94px;
}
.zhe {
  float: left;
  margin-left: 199px;
  margin-top: 30px;
}
</style>
<script setup>


</script>