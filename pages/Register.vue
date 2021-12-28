<template>
    <div class="container">
        <div class="content">
            <div class="title">布非凡家纺网注册</div>
            <el-form
                label-width="80px"
                class="demo-ruleForm"
                :model="ruleForm"
                ref="ruleFormRef"
                :rules="rules"
            >
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="ruleForm.username" placeholder="请输入用户名" :suffix-icon="User"></el-input>
                </el-form-item>
                <el-form-item label="手机号" prop="tel">
                    <el-input v-model="ruleForm.tel" placeholder="请输入手机号" :suffix-icon="Phone"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="ruleForm.email" placeholder="请输入邮箱地址" :suffix-icon="Message"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="ruleForm.password" placeholder="请输入密码" type="password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="password_agin">
                    <el-input
                        v-model="ruleForm.password_agin"
                        placeholder="请再次确认密码"
                        type="password"
                    ></el-input>
                </el-form-item>
                <span style="color:red">{{ error }}</span>
                <el-form-item>
                    <el-button type="primary" @click="register">立即注册</el-button>
                </el-form-item>
                <div class="xie">
                    注册账号即表示您同意并愿意遵守布艺家纺网
                    <nuxt-link class="link2" to="/About?lis=4">《服务协议》</nuxt-link>和
                    <nuxt-link class="2" to="/About?lis=5">《隐私政策》</nuxt-link>
                    <nuxt-link to="/Login" class="link1">已有帐号，去登陆></nuxt-link>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import CryptoJS from 'crypto-js'
import { useRouter } from 'vue-router'
import { User, Phone, Message } from '@element-plus/icons'
const router = useRouter()
const error = ref()
const ruleFormRef = ref()
//用户注册数据
const ruleForm = reactive({
    username: "",
    password: "",
    password_agin: "",
    tel: "",
    email: ""
})

const validatePassword = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请再次输入密码'))
    } else if (value !== ruleForm.password) {
        callback(new Error("两次密码不一致"))
    } else {
        callback()
    }
}

// 表单校验
const rules = reactive({
    username: [
        {
            required: true,
            type: 'string',
            message: '请输入用户名',
            trigger: 'blur',
        }
    ],
    password: [
        {
            required: true,
            type: 'string',
            message: '请输入密码',
            trigger: 'blur',
        },
        {
            pattern: /\w{6,}/,
            message: "请输入6位以上密码"
        }
    ],
    password_agin: [
        {
            required: true,
            type: 'string',
            validator: validatePassword,
            trigger: 'blur'
        }
    ],
    tel: [
        {
            required: true,
            type: 'string',
            message: '请输入手机号',
            trigger: 'blur',
        },
        {
            pattern: /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,
            message: "请输入正确的手机号"
        }
    ],
    email: [
        {
            required: true,
            type: 'email',
            message: '请输入正确邮箱',
            trigger: 'blur',
        }
    ],
})

const register = () => {
    ruleFormRef.value.validate(async (vaild) => {
        if (vaild) {
            console.log("提交注册请求")
            const { data } = await useFetch("/api/user/register", {
                method: "post",
                body: {
                    username: window.encodeURIComponent(ruleForm.username),//encodeURIComponent对中文进行编译
                    password: CryptoJS.MD5(ruleForm.password).toString(),//将密码加密并转码
                    tel: ruleForm.tel,
                    email: ruleForm.email,
                    headPortrait: "",
                    sex: "",
                    address: [],
                    orderCollection: []
                }
            })
            if (data.value.code === 0) {
                router.push({ path: '/Login' })
            }
            else {
                error.value = data.value.msg;
            }
            console.log(data, "收到服务器响应")
        }
    })
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
            font-size: 26px;
            font-family: "楷体", "楷体_GB2312";
            width: 100%;
            height:60px;
            line-height: 80px;
            text-align: center;
            color: burlywood;
        }
        .el-form {
            width: 90%;
            margin-left: 5%;
            padding-bottom: 30px;
            .el-form_item {
                margin-bottom: 0px !important;
            }
        }
        .el-button {
            background-color: #1b8bfa;
            width: 80%;
        }
        .xie {
            width: 65%;
            font-size: 8px;
            margin-left: 22%;
            margin-top: -20px;
            color: #929292;
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
</style>