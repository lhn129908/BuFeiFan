<template>
    <div class="dialog">
        <div class="dialog_head">
            <img src="/img/cancel.png" alt="关闭" @click="click1" />
        </div>
        <el-form :label-position="labelPosition" label-width="100px" :model="addform">
            <el-form-item label="姓名">
                <el-input v-model="addform.name"></el-input>
            </el-form-item>
            <el-form-item label="联系方式">
                <el-input v-model="addform.tel"></el-input>
            </el-form-item>
            <span class="el-form-item__label">省/市/区/街道</span>
            <el-cascader
                :options="cityOptions"
                style="margin-bottom: 5%;width:80%"
                v-model="value"
                @change="ck"
                clearable
            />
            <el-form-item label="详细地址">
                <el-input v-model="addform.detail"></el-input>
            </el-form-item>
        </el-form>
        <div class="dialog_foot">
            <button class="dialog_submit" @click="addAdress">确认</button>
        </div>
    </div>
</template>



<script setup>
import { reactive, ref } from 'vue';

import options from "@/assets/data/citydata.js"
const router = useRouter()
const cityOptions = ref([])
cityOptions.value = options

const value = ref()
const {user}=useUser()

const { address } = useAddress()

const emit = defineEmits(['gu'])

const props = defineProps({
    addbox: {
        type: Boolean,
        default() {
            return []
        }
    }
})


const addform = ref({
    name: "",
    tel: "",
    province: "",
    city: "",
    area: "",
    detail: ""
})


const click1 = () => {
    emit('gu', false)

}


const addAdress = async () => {
    addform.value.province = value.value[0]
    addform.value.city = value.value[1]
    addform.value.area = value.value[2]
    const { data } = await useFetch("/api/user/address", {
        method: "post",
        body: {
            address: addform,
        }
    })
    console.log("发送添加请求")
    if (data.value.code === 0) {
        emit('gu', false);
        const { data } = await useFetch("/api/user/getaddrelist")     
        console.log(data.value,"xxxxxxxxxxxxxxxxxxxxxxxxx")
        address.value=data
        console.log(address.value)
        location.reload()
        // router.push("/User")
    }
    else {
        error.value = data.value.address;
    }

}


</script>

<style scoped>
.el-form {
    width: 80%;
    margin-left: 10%;
}
</style>

<style lang="scss" scoped>
.dialog {
    position: fixed;
    top: 15%;
    left: 25%;
    box-shadow: 10px 10px 5px #888888;
    width: 50%;
    display: block;
    background-color: white;
    border-radius: 10px;
    .dialog_head {
        width: 100%;
        margin-bottom: 8%;
        background-color: dodgerblue;
        border-radius: 10px 10px 0px 0px;
        img {
            width: 5%;
            margin-left: 93%;
            margin-top: 1%;
        }
    }
    .dialog_foot {
        width: 100%;
        margin-bottom: 3%;
        button {
            width: 10%;
            height: 30px;
            margin-left: 85%;
            background-color: dodgerblue;
            color: white;
            border: 0px;
        }
    }
}
</style>
