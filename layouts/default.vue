<template>
    <el-container>
        <el-header height="180px">
            <Head></Head>
        </el-header>

        <el-main>
            <slot></slot>
        </el-main>

        <el-footer height="275px">
            <Foot></Foot>
        </el-footer>
    </el-container>
</template>

<style lang="scss">
   main.el-main{
    padding: 0;
    margin: 0;
  }
</style>