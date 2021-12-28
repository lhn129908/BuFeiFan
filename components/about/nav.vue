<template>
  <div>
    <div class="about_log">
      <img class="image" src="../../assets/img/about.jpg" />
    </div>
    <el-row class="about_nav">
      <el-col :span="12">
        <el-icon :size="40" color="#13d1be"><warning /></el-icon>
        <span class="span">关于ABOUT</span>
      </el-col>
      <el-col :span="12">
        <ul class="aboutnav_lis">
          <!-- <li @click="about_nav(index)" v-for="(item,index) in aboutnav" :key="index">{{item}}</li> -->
          <li>
            <nuxt-link to="/about?lis=0" class="text1">{{ aboutnav[0] }}</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about?lis=1" class="text1">{{ aboutnav[1] }}</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/Help" class="text1">{{ aboutnav[2] }}</nuxt-link>
          </li>
           <li>
            <nuxt-link to="/about?lis=3" class="text1">{{ aboutnav[3] }}</nuxt-link>
          </li>
        </ul>
      </el-col>
    </el-row>
    <!-- <AboutWe></AboutWe> -->
    <div v-if="$route.query.lis === '0'">
      <AboutWe></AboutWe>
    </div>
    <div v-else-if="$route.query.lis === '1'">
      <AboutCall></AboutCall>
    </div>
    <div v-else-if="$route.query.lis === '3'">
      <AboutWork></AboutWork>
    </div>
    <!-- 路由跳转 -->
    <div v-else-if="$route.query.lis === '4'">
      <AboutXieyi></AboutXieyi>
    </div>
    <div v-else-if="$route.query.lis === '5'">
      <AboutYinsi></AboutYinsi>
    </div>
  </div>
</template>
<script setup>
import { Warning } from "@element-plus/icons";
import { ref } from "vue";
const aboutnav = ref(["关于我们", "联系我们", "帮助中心", "招聘中心"]);
</script>
<style>
.about_log {
  width: 100%;
  margin: 0 auto;
}

image li ul {
  padding: 0px;
  margin: 0px;
}
.image {
  width: 100%;
}
.about_nav {
  width: 1190px;
  background-color: #373d44 !important;
  color: #fff;
  margin: 0 auto;
  /* height:70px ;
    line-height: 70px; */
}
.el-icon {
  font-size: 20px !important;
  padding: 0.625rem;
}
.span {
  height: 70px;
  line-height: 70px;
  /* margin-top: 8px; */
}
.text1 {
  font-size: 16.5px;
  color: #fff !important;
  text-decoration: none;
}
.aboutnav_lis {
  height: 70px;
  line-height: 70px;
  /* padding-top: 0px; */
}
.aboutnav_lis > li {
  float: left;
  list-style: none;
  margin-left: 20px;
  height: 50px;
  line-height: 50px;
  margin-top: 8px;
}
.aboutnav_lis > li:hover {
  border-bottom: 0.1875rem solid #3498db;
}
</style>