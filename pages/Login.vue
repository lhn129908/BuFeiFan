<template>
    <div class="container">
        <div class="content">
            <div class="title">布非凡家纺网登录</div>
            <el-form label-width="80px">
                <el-form-item label="用户名">
                    <el-input v-model="username" placeholder="请输入用户名" :suffix-icon="User"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item label="验证码">
                    <el-input class="yan" v-model="yan" placeholder="请输入验证码"></el-input>
                    <Sldentify class="sidentify" @click="refreshCode" :identifyCode="identifyCode" ref="sldentify"></Sldentify>
                    <span class="shua">看不清?点击刷新!</span>
                </el-form-item>
                <el-form-item>
                    <span style="color:red">{{ error }}</span>
                    <el-button type="primary" @click="login">立即登录</el-button>
                </el-form-item>
                <nuxt-link to="/Register" class="link1">还没有帐号，去注册></nuxt-link>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { User } from '@element-plus/icons'
import CryptoJS from 'crypto-js'
import { useRouter } from 'vue-router'
import { useUser } from '~~/composables/user';

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const { user } = useUser()

const sldentify=ref()
const yan=ref()
const identifyCode=ref()

const login = async () => {
    console.log("登录")
    const { data } = await useFetch("/api/user/login", {
        method: "post",
        body: {
            username: window.encodeURIComponent(username.value),//encodeURIComponent对中文进行编译
            password: CryptoJS.MD5(password.value).toString(),//将密码加密并转码
        }
    })
    console.log(yan.value,identifyCode)
    if (data.value.code === 0) {
        // 在登陆之后拿去数据库数据
        const { data: result } = await useFetch("/api/user/userinfo")
        user.value = result.value
        // console.log(user.value)
        router.push({ path: '/' })
    } else {
        error.value = data.value.msg
    }
}



const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}
const refreshCode = () => {
    identifyCode = ''
    makeCode(identifyCodes, 4)
}
const makeCode = (o, l) => {
    for (let i = 0; i < l; i++) {
        identifyCode += identifyCodes[
            randomNum(0, identifyCodes.length)
        ]
    }
}

</script>

<style>
body {
    padding: 0px;
    margin: 0px;
}
</style>

<style lang="scss" scoped>
.container {
    width: 100%;
    margin-top: 5%;
    background-image: url(../img/1.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .content {
        margin-left: 60%;
        background-color: white;
        width: 30%;
        .title {
            display: block;
            font-size: 26px;
            font-family: "楷体", "楷体_GB2312";
            width: 100%;
            height: 60px;
            line-height: 80px;
            text-align: center;
            color: burlywood;
        }
        .el-form {
            width: 90%;
            margin-left: 5%;
            padding-bottom: 30px;

            .el-button {
                background-color: #1b8bfa;
                width: 80%;
            }
            .yan {
                width: 45%;
            }
            .sidentify {
                float: right;
            }
            .shua {
                height: 30px;
                line-height: 30px;
                display: block;
                font-size: 6px;
                color: #868686;
                font-family: "楷体", "楷体_GB2312";
            }
            .link1 {
                display: block;
                margin-left: 30%;
                margin-top: 30px;
                font-size: 12px;
                text-decoration: none;
            }
        }
    }
}
</style>