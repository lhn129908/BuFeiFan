<template>
    <div>
        <div class="order_collection" v-for="item1 in user.collection" :key="item1.id">
            <div class="ding" v-for="item in item1.order" :key="item.id">
                <img class="order_img" :src="item.img" />
                <div class="order_text">
                    <span class="order_title">{{ item.title }}</span>
                    <span class="order_specification">
                        <span>{{ item.specification.style }}</span>
                        <span>{{ item.specification.color }}</span>
                        <span>{{ item.specification.width }}</span>
                        <span>{{ item.specification.heigth }}</span>
                    </span>
                    <span class="order_quantity">x{{ item.quantity }}</span>
                    <span class="order_price">价格：{{ item.price }}</span>
                    <span class="order_total">
                        {{ item.total }}
                        <span class="yuan1">￥</span>
                    </span>
                </div>
            </div>
            <span class="collection_total">
                共计：{{ item1.totals }}
                <span class="yuan">￥</span>
            </span>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue"

// 拿到用户数据
const {user}=useUser()

// const collection = reactive()
</script>


<style lang="scss" scoped>
.order_collection {
    width: 80%;
    margin-left: 10%;
    border: 1px solid #bababa;
    margin-bottom: 5%;
    box-shadow: 10px 10px 5px #888888;
    .ding {
        width: 90%;
        height: 160px;
        margin: 5%;
        border: 1px solid #bababa;
        border-radius: 10px;
        box-shadow: 10px 10px 5px #888888;
        overflow: inherit;
        .order_img {
            float: left;
            width: 16%;
            margin-left: 4%;
            margin-top: 1.5%;
            box-shadow: 4px 5px 3px #888888;
        }
        .order_text {
            width: 80%;
            float: left;
            color: #707070;
            .order_title {
                margin-top: 1%;
                margin-left: 5%;
                display: block;
                color: #3f3f3f;
                font-weight: 400;
                font-size: 18px;
                /*强制文字在一行文本框内*/
                white-space: nowrap;
                /*溢出部分文字隐藏*/
                overflow: hidden;
                /*溢出部分省略号处理*/
                text-overflow: ellipsis;
            }
            .order_specification {
                margin-top: 1%;
                margin-left: 5%;
                display: block;
                font-size: 14px;
                span {
                    margin-right: 1%;
                }
            }
            .order_quantity {
                margin-top: 1%;
                margin-left: 5%;
                display: block;
            }
            .order_price {
                margin-top: 1%;
                margin-left: 5%;
                display: inline-block;
                color: rgba(69, 156, 243, 0.925);
            }
            .order_total {
                display: inline-block;
                margin-top: 1%;
                margin-left: 90%;
                color: dodgerblue;
                .yuan1 {
                    font-size: 20px;
                    font-weight: 400;
                    color: rgb(255, 113, 30);
                }
            }
        }
    }
    .collection_total {
        display: inline-block;
        margin-left: 80%;
        color: rgb(255, 68, 68);
        margin-bottom: 2%;
        font-size: 20px;
        .yuan {
            font-size: 24px;
            font-weight: 400;
            color: rgba(143, 143, 143, 0.973);
        }
    }
}
</style>