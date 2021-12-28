<template>
<div>
<div class="mao">
    <div class="maot" v-if="isshow">
        <div> <a @click="goAnchor('#xin1')">第一项</a></div>
        <div> <a @click="goAnchor('#xin2')">第二项</a></div>
        <div> <a @click="goAnchor('#xin3')">第三项</a></div>
        <div> <a @click="goAnchor('#backimg1')">第四项</a></div>
        <div> <a @click="goAnchor('#backimg2')">第五项</a></div>                           
    </div>
    <div class="maob" @click="isshow = !isshow">
      <img src="../../img/btn2.png" >
    </div>
</div>
<div class="dingbu">
  <a href="#top"><img src="../../img/btn3.png"></a>  
</div>
</div>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default ({
    data(){
        return {
            isshow:false,
        }

    },
    setup() {
    return {
      visible: ref(false),
    }
  },
    methods: {
            //模拟锚点跳转
            goAnchor(selector) {//参数selector是id选择器（#anchor14）
                document.querySelector(selector).scrollIntoView({
                    behavior: "smooth"
                });
            },
        }
  
})

</script>
