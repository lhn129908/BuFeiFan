<template>
  <div class="user">
    <template v-if="user.login">
      <nuxt-link to="User">
        <el-avatar :size="50" src="user.headPortrait" @error="errorHandler">
        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
      </el-avatar>
      </nuxt-link>
      欢迎您，
      <nuxt-link class="username" to="/User">{{ user.username }}</nuxt-link>[
      <a class="exit" @click.prevent="exit">退出</a>]
    </template>
    <template v-else>
      <nuxt-link to="/Login" class="login">立即登录</nuxt-link>|
      <nuxt-link class="register" to="/Register">注册</nuxt-link>
    </template>
  </div>
</template>
<script setup>



const errorHandler = () => true


import { ref } from "vue";
const { user } = useUser();
const exit = async () => {
  let { data } = await useFetch(`/api/user/exit`);
  user.value = {};
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/user.scss";
</style>