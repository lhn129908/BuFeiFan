<template>
    <div class="container">
        <el-tabs :tab-position="tabPosition" style="height: 200px" v-model="selectTab">
            <el-tab-pane label="个人中心" name="person">
                <div class="demo-type">
                    <el-avatar :size="160" src="https://empty" @error="errorHandler">
                        <img
                            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
                        />
                    </el-avatar>
                    <div class="ge">
                        <span class="usename">{{ user.username }}</span>
                        <span class="wen">你好啊~</span>
                        <span class="link" @click="qie1">修改个人信息></span>
                    </div>
                    <table class="bang">
                        <tr>
                            <td>账户安全：</td>
                            <td class="an">普通</td>
                        </tr>
                        <tr>
                            <td>绑定手机：</td>
                            <td>{{ user.tel }}</td>
                        </tr>
                        <tr>
                            <td>绑定邮箱：</td>
                            <td>{{ user.email }}</td>
                        </tr>
                    </table>
                </div>
                <el-divider></el-divider>
                <div class="table">
                    <div class="hang">
                        <div class="left">
                            <img src="../img/portal-icon-1.png" alt />
                        </div>
                        <div class="right">
                            <div class="right_top">
                                <span>待支付的订单：</span>
                                <span class="right_top_right">0</span>
                            </div>
                            <div class="right_bottom">
                                <span @click="qie">查看待支付的订单></span>
                            </div>
                        </div>
                    </div>
                    <div class="hang">
                        <div class="left">
                            <img src="../img/portal-icon-2.png" alt />
                        </div>
                        <div class="right">
                            <div class="right_top">
                                <span>待收货的订单：</span>
                                <span class="right_top_right">0</span>
                            </div>
                            <div class="right_bottom">
                                <span @click="qie">查看待收货的订单></span>
                            </div>
                        </div>
                    </div>
                    <div class="hang">
                        <div class="left">
                            <img src="../img/portal-icon-3.png" alt />
                        </div>
                        <div class="right">
                            <div class="right_top">
                                <span>待评价的订单：</span>
                                <span class="right_top_right">0</span>
                            </div>
                            <div class="right_bottom">
                                <span @click="qie">查看待评价的订单></span>
                            </div>
                        </div>
                    </div>
                    <div class="hang">
                        <div class="left">
                            <img src="../img/portal-icon-4.png" alt />
                        </div>
                        <div class="right">
                            <div class="right_top">
                                <span>我喜欢的商品：</span>
                                <span class="right_top_right">0</span>
                            </div>
                            <div class="right_bottom">
                                <span @click="qie">查看我喜欢的商品></span>
                            </div>
                        </div>
                    </div>
                </div>
            </el-tab-pane>
            <!-- ******************************************************************************************** -->
            <el-tab-pane label="收货地址" name="address">
                <div class="address">
                    <h1>收货地址</h1>
                    <div class="add_address" @click="addAddress">
                        <img class="add_img" src="../img/add_address.png" alt />
                        <span class="add_text">添加新地址</span>
                    </div>
                    <div class="address_item" v-for="item in address" :key="item._id">
                        <h2 class="address_name">{{ item.address.name }}</h2>
                        <span class="address_tel">{{ item.address.tel }}</span>
                        <div class="place">
                            <span>{{ item.address.province }}</span>
                            <span>{{ item.address.city }}</span>
                            <span>{{ item.address.area }}</span>
                        </div>
                        <span class="address_details">{{ item.address.detail }}</span>
                        <button class="address_remove" @click="removeAddress(item._id)">删除</button>
                        <button class="address_update" @click="updateAddress(item._id)">修改</button>
                    </div>
                </div>
                <!-- 对话框 -->
                <!-- <div v-show="addbox"> -->
                <UserDialog v-show="dialog" :addbox="dialog" @gu="guan"></UserDialog>
                <!-- </div> -->
            </el-tab-pane>
            <!-- ******************************************************************************************** -->
            <el-tab-pane label="我的订单" name="order">
                <div class="order">
                    <h1>我的订单</h1>
                    <el-tabs class="myoreder" type="border-card">
                        <el-tab-pane label="全部订单">
                            <UserOrder></UserOrder>
                        </el-tab-pane>
                        <el-tab-pane label="待支付订单">
                            <UserOrder></UserOrder>
                        </el-tab-pane>
                        <el-tab-pane label="待收货订单">
                            <UserOrder></UserOrder>
                        </el-tab-pane>
                        <el-tab-pane label="待评价订单">
                            <UserOrder></UserOrder>
                        </el-tab-pane>
                        <!-- <el-tab-pane label="我喜欢的商品">
                            <UserOrder></UserOrder>
                        </el-tab-pane>-->
                    </el-tabs>
                </div>
            </el-tab-pane>
            <!-- ******************************************************************************************** -->
            <el-tab-pane label="账号管理" name="account">
                <UserAccount @toggle="toggle"></UserAccount>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>


<script setup>
import { ref, reactive, watchEffect } from 'vue'
import dialogVue from '~~/components/user/dialog.vue';
import Order from '~~/components/user/order.vue';
// 拿到用户数据
const { user } = useUser()
const tabPosition = ref("left")
const selectTab = ref("person")

const dialog = ref()

const toggle = () => {
    console.log("togglle方法执行了")
    selectTab.value = "person"
}



// 获取地址数据
const { address } = useAddress()
// watchEffect(async () => {
//     let { data } = await useFetch(`/api/user/getaddrelist`, {
//         params: {
//             username: user.value.username
//         },
//         server: false
//     });
//     console.log(data.value, '----++++++++++++');
//     console.log(data.value, '++++++++++++');
//     if (data.value) {
//         console.log(data.value, '========');
//         address.value = data.value.address
//     }
    
// })



let { data } = await useFetch(`/api/user/getaddrelist`, {
    params: {
        username: user.value.username
    },
    server: false
});
watch(data, () => {
    if (data.value) {
        console.log(data.value, '----++++++++++++');
        console.log(data.value, '++++++++++++');
        console.log(data.value, '========');
        address.value = data.value.address
    }
}, { immediate: true })
console.log(data.value, '----++++++++++++');
console.log(data.value, '++++++++++++');
if (data.value) {
    console.log(data.value, '========');
    address.value = data.value.address
}

const errorHandler = () => true


const qie = () => {
    selectTab.value = "order"
}

const qie1 = () => {
    selectTab.value = "account"
}

const addAddress = () => {
    dialog.value = true
    console.log(dialog.value, "****")
}
const guan = (cancel) => {
    dialog.value = cancel
}

const removeAddress = async (id) => {
    console.log(id)
    const { data } = await useFetch("/api/user/removeadd", {
        method: "post",
        body: {
            _id: id,
        }
    })
    // console.log(data, "-----///")
    if (data.value.code === 0) {
        const { data } = await useFetch("/api/user/getaddrelist")
        console.log(data.value, "xxxxxxxxxxxxxxxxxxxxxxxxx")
        address.value = data
        console.log(address.value)
        location.reload()
    }
    else {
        error.value = data.value.address;
    }
}


const updateAddress = async (id) => {
    console.log(id)
    dialog.value=true
    const { data } = await useFetch("/api/user/update", {
        method: "post",
        body: {
            _id: id,
            update: {}
        }
    })
    // console.log(data, "---")
    if (data.value.code === 0) {
        const { data } = await useFetch("/api/user/getaddrelist")
        console.log(data.value, "xxxxxxxxxxxxxxxxxxxxxxxxx")
        address.value = data
        console.log(address.value)
        location.reload()
    }
    else {
        error.value = data.value.address;
    }
}

</script>


<style>
body {
    padding: 0px;
    margin: 0px;
}
.el-main {
    padding: 0px;
    margin: 60px 0px;
}
</style>


<style lang="scss" scoped>
.container {
    padding: 30px 50px;
    background-color: #e7e7e7;
    .el-tabs {
        height: auto !important;
        background-color: #ffffff;
    }
    .demo-type {
        overflow: auto;
        .el-avatar {
            float: left;
            margin: 4% 0px 2% 3%;
        }
        .ge {
            float: left;
            margin-left: 30px;
            .usename {
                display: block;
                width: 100px;
                text-align: center;
                color: #3a3a3a;
                font-weight: 700;
                font-size: 24px;
                margin-top: 72%;
            }
            .wen {
                display: block;
                font-size: 18px;
                color: #999999;
                margin: 30px 0px;
            }
            .link {
                display: block;
                font-size: 14px;
                text-decoration: none;
                margin-top: 20px;
                color: dodgerblue;
                cursor: pointer;
            }
        }
        .bang {
            float: right;
            margin: 9% 15% 0 0;
            tr {
                margin: 20px 20px 30px 0px;
                color: #757575;
                font-size: 16px;
                .an {
                    color: skyblue;
                }
            }
        }
    }
    .el-divider {
        width: 90%;
        margin-left: 5%;
    }
    .table {
        width: 80%;
        margin-left: 10%;
        margin-bottom: 80px;
        // overflow: auto;
        .hang {
            // float: left;
            width: 60%;
            margin-left: 10%;
            margin-bottom: 5%;
            overflow: auto;
            .left {
                float: left;
                width: 100px;
                height: 100px;
                background-color: transparent;
            }
            .right {
                float: left;
                margin-top: 2%;
                margin-left: 30px;
                padding: 0;
                .right_top {
                    color: #757575;
                    font-size: 22px;
                    .right_top_right {
                        color: skyblue;
                    }
                }
                .right_bottom {
                    margin-top: 15%;
                    color: #999999;
                    font-size: 18px;
                    cursor: pointer;
                }
            }
        }
    }

    .address {
        width: 90%;
        margin-left: 5%;
        margin-bottom: 20%;
        margin-top: 1%;
        overflow: auto;
        h1 {
            color: #707070;
        }
        .add_address,
        .address_item {
            margin-top: 2%;
            float: left;
            width: 30%;
            height: 180px;
            box-sizing: border-box;
            border: 1px solid #999999;
            margin-right: 3%;
            border-radius: 5%;
            margin-bottom: 3%;
            .add_img {
                width: 20%;
                margin: 10% 40% 0 40%;
            }
            .add_text {
                display: block;
                width: 30%;
                margin-left: 35%;
                text-align: center;
                color: #757575;
            }
            .address_name,
            .address_tel,
            .place,
            .address_details {
                margin-top: 3%;
                display: block;
                width: 80%;
                margin-left: 5%;
                margin-bottom: 3%;
                color: #686868;
                font-size: 15px;
                span {
                    margin-right: 3%;
                }
            }
            .address_remove,
            .address_update {
                border: 0px;
                background-color: transparent;
                float: right;
                margin-right: 2%;
                font-size: 16px;
                font-family: "楷体";
                font-weight: 500;
            }
            .address_remove {
                color: rgba(253, 16, 16, 0.781);
            }
            .address_remove:hover {
                color: white;
                background-color: rgba(253, 16, 16, 0.781);
            }
            .address_remove:active {
                opacity: 0.8;
            }
            .address_update {
                color: dodgerblue;
            }
            .address_update:hover {
                color: white;
                background-color: dodgerblue;
            }
            .address_update:active {
                opacity: 0.8;
            }
        }
        .add_address:active {
            opacity: 0.6;
        }
    }
    .myoreder {
        margin-top: 2%;
    }
    .order {
        width: 90%;
        margin-left: 5%;
        margin-bottom: 30%;
        margin-top: 1%;
        h1 {
            color: #707070;
        }
    }
}
</style>