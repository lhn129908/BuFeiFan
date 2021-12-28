<template>
    <div class="account">
        <h1>账号管理</h1>
        <el-form label-width="80px" class="account_form" ref="formRef">
            <div class="headPortrait">
                <el-avatar :icon="UserFilled" :src="user1.headPortrait" :size="100"></el-avatar>
                <el-button class="account_update" type="text" @click="uploder = true">修改头像 ></el-button>
            </div>
            <UserUploder v-show="uploder" class="uploder"></UserUploder>
            <el-form-item label="用户名">{{ user.username }}</el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="user1.password" disabled="false"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-radio-group v-model="user1.sex">
                    <el-radio label="♂"></el-radio>
                    <el-radio label="♀"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="手机号" prop="tel">
                <el-input v-model="user1.tel" :suffix-icon="Phone"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="user1.email" :suffix-icon="Message"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="xiu1" round @click="xiugai(user)">修改</el-button>
            </el-form-item>
        </el-form>

        <el-dialog v-model="dialogVisible" title="提示" width="30%">
            <span>恭喜您，修改用户信息成功</span>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="cancel">取消</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>


<script setup>
import { UserFilled } from '@element-plus/icons-vue'
import { ref, reactive, watchEffect } from "vue"
import CryptoJS from 'crypto-js'
const dialogVisible = ref(false)
const formRef = ref()

const emit = defineEmits(['toggle'])

const { user } = useUser()

const uploder = ref(false)

const user1 = reactive({
    name: "",
    password: "",
    tel: "",
    email: "",
    headPortrait: "",
    sex: ""
})
watchEffect(() => {
    user1.name = user.value.username;
    user1.password = user.value.password;
    user1.tel = user.value.tel;
    user1.email = user.value.email;
    user1.headPortrait = user.value.headPortrait;
    user1.sex = user.value.sex
})

const cancel = ()=>{
    dialogVisible.value = false;
    emit("toggle")

}

const xiugai = async (e) => {
    const { data } = await useFetch("/api/user/userupdate", {
        method: "post",
        body: {
            username: user1.name,
            password: CryptoJS.MD5(user1.password).toString(),
            tel: user1.tel,
            email: user1.email,
            headPortrait: user1.headPortrait,
            sex: user1.sex
        }
    })
    if (data.value) {
        if (data.value.code === 0) {
            console.log("333333333333333333333333333333333333333333333333",data.value.user)
            dialogVisible.value =true;
            user.value = data.value.user;
        }
    }
}

</script>

<style lang="scss" scoped>
.account {
    width: 90%;
    margin-left: 5%;
    margin-bottom: 20%;
    overflow: auto;
    margin-top:1% ;
    h1 {
        color: #707070;
    }
    .account_form {
        width: 60%;
        margin-left: 20%;
    }
    .headPortrait {
        width: 30%;
        margin-left: 35%;
    }
    .uploder {
        width: 30%;
        margin-left: 35%;
    }
    .xiu1 {
        background-color: #f56c6c;
        color: white;
    }
    .sure1 {
        background-color: #53a8ff;
        color: white;
    }
}
</style>