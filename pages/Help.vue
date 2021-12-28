<template>
    <div>
        <!-- 第一行 -->
        <!-- <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/About' }">返回</el-breadcrumb-item>
            <el-breadcrumb-item>帮助</el-breadcrumb-item>
        </el-breadcrumb> -->
        <el-row class="onerow">
            <nuxt-link to="/About?lis=0" class="text">返回</nuxt-link>>
            <nuxt-link to=""  class="text">帮助</nuxt-link>
        </el-row>
        <!-- 第二行 -->
        <HelpsLeft></HelpsLeft>
    </div>
</template>

<style>
.onerow{
     width: 74.375rem;
    margin: 0 auto;
    height: 3.125rem;
    line-height: 50px;
    
}
.text{
    font-size: 14px;
    color:#2c3e50 ;
    text-decoration: none;
}
</style>
<script setup>

import { ArrowRight } from '@element-plus/icons-vue'
</script>