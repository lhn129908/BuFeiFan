<template>
  <main>
    <NuxtPage />
  </main>
</template>

<style >
.el-main {
  padding: 0px;
}
.el-header {
  padding: 0px;
}
a {
  color: cornflowerblue;
  text-decoration: none;
}
a:hover {
  color: deepskyblue;
}
</style>
<script setup>
import { watchEffect } from 'vue';
const config = useRuntimeConfig();

//凡是需要根据这里的结果再去发送二次请求的请求 放到app.vue
//获取登录的用户数据
const { user } = useUser();
if (!config.API_BASE) {
  let { data } = await useFetch(`/api/user/userinfo`, { server: false });
  watchEffect(() => {
    if (data.value) {
      user.value = data.value;
    }
  })
}

</script>
