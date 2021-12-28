<template>
    <el-container>
        <el-header height="180px" style="background-color:white">
            <Head></Head>
        </el-header>

        <el-main>
            <slot></slot>
        </el-main>

        <el-footer height="275px" style="z-index:0;">
            <Foot></Foot>
        </el-footer>
    </el-container>
</template>