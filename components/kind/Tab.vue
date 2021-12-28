<template>
  <div style="color: #ccc;">
    <el-tabs :tab-position="tabPosition" style=" height: 1200px" v-model="selTab">
      <el-tab-pane class="fenlei" label="产品分类">
        <div class="elt">
          <div class="elttop">
            <button class="butf">综合</button>
            <button>最新</button>
            <button>价格</button>
          </div>
          <div class="eltbut">
            <div class="eltbutp">
              <div class="butpone">
                <nuxt-link to="/Details?id=195" class="butpone">
                  <div class="butponetu">
                    <img src="../img/hongse.jpg" />
                  </div>
                  <div class="butponena">红色蒲公英少女</div>
                  <div class="butponepr">￥60.00</div>
                </nuxt-link>
              </div>
              <div class="butpone">
                 <nuxt-link to="/Details?id=443" class="butpone">
                  <div class="butponetu">
                    <img src="../img/redai.jpeg" />
                  </div>
                  <div class="butponena">热带风情</div>
                  <div class="butponepr">1060.00</div>
                 </nuxt-link>
              </div>
              <div class="butpone">
               <nuxt-link to="/Details?id=170" class="butpone">
                  <div class="butponetu">
                    <img src="../img/qinchun.jpg" />
                  </div>
                  <div class="butponena">青春斑马线</div>
                  <div class="butponepr">￥66.00</div>
               </nuxt-link>
              </div>
              <div class="butpone">
               <nuxt-link to="/Details?id=167" class="butpone">
                  <div class="butponetu">
                    <img src="../img/lvyi.jpg" />
                  </div>
                  <div class="butponena">绿意盎然竹香庭院</div>
                  <div class="butponepr">￥60.00</div>
               </nuxt-link>
              </div>
              <div class="butpone">
               <nuxt-link to="/Details?id=168" class="butpone">
                  <div class="butponetu">
                    <img src="../img/ziran.jpg" />
                  </div>
                  <div class="butponena">自然恬静厥叶森林</div>
                  <div class="butponepr">￥60.00</div>
               </nuxt-link>
              </div>
              <div class="butpone">
                <nuxt-link to="/Details?id=166" class="butpone">
                  <div class="butponetu">
                    <img src="../img/danya.jpg" />
                  </div>
                  <div class="butponena">淡雅竹风铃</div>
                  <div class="butponepr">￥60.00</div>
                </nuxt-link>
              </div>
            </div>
            <div class="butpag">
              <el-pagination background page-size="6" layout="prev, pager, next" :total="290"></el-pagination>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <!-- <div>产品分类</div> -->
      <el-tab-pane label="遮光帘" name="zheguang">
        <div class="elt">
          <div class="elttop">
            <button class="butf">综合</button>
            <button>最新</button>
            <button>价格</button>
          </div>
          <div class="eltbut">
            <div class="eltbutp">
              <div class="butpone">
                 <nuxt-link to="/Details?id=195" class="butpone">
                  <div class="butponetu">
                    <img src="../../img/hongse.jpg" />
                  </div>
                  <div class="butponena">红色蒲公英少女</div>
                  <div class="butponepr">￥60.00</div>
                 </nuxt-link>
              </div>
              <div class="butpone">
                <nuxt-link to="/Details?id=443" class="butpone">
                  <div class="butponetu">
                    <img src="../../img/redai.jpeg" />
                  </div>
                  <div class="butponena">热带风情</div>
                  <div class="butponepr">60.00</div>
                </nuxt-link>
              </div>
              <div class="butpone">
                <nuxt-link to="/Details?id=127" class="butpone">
                  <div class="butponetu">
                    <img src="../../img/qinchun.jpg" />
                  </div>
                  <div class="butponena">青春斑马线</div>
                  <div class="butponepr">￥66.00</div>
                </nuxt-link>
              </div>
              <div class="butpone">
                <nuxt-link to="/Details?id=167" class="butpone">
                  <div class="butponetu">
                    <img src="../../img/lvyi.jpg" />
                  </div>
                  <div class="butponena">绿意盎然竹香庭院</div>
                  <div class="butponepr">￥60.00</div>
                </nuxt-link>
              </div>
              <div class="butpone">
                 <nuxt-link to="/Details?id=168" class="butpone">
                  <div class="butponetu">
                    <img src="../../img/ziran.jpg" />
                  </div>
                  <div class="butponena">自然恬静厥叶森林</div>
                  <div class="butponepr">￥60.00</div>
                 </nuxt-link>
              </div>
              <div class="butpone">
                 <nuxt-link to="/Details?id=166" class="butpone">
                  <div class="butponetu">
                    <img src="../../img/danya.jpg" />
                  </div>
                  <div class="butponena">淡雅竹风铃</div>
                  <div class="butponepr">￥60.00</div>
                 </nuxt-link>
              </div>
            </div>
            <div class="butpag">
              <el-pagination background page-size="6" layout="prev, pager, next" :total="290"></el-pagination>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="绣花帘" name="xiuhua">
        <div class="elt">
          <div class="elttop">
            <button class="butf">综合</button>
            <button>最新</button>
            <button>价格</button>
          </div>
          <div class="eltbut">
            <div class="eltbutp">
              <div class="butpone">
                <a href class="butpone">
                  <div class="butponetu">
                    <img src="../../img/qinchun.jpg" />
                  </div>
                  <div class="butponena">青春斑马线</div>
                  <div class="butponepr">￥66.00</div>
                </a>
              </div>
              <div class="butpone">
                <a href class="butpone">
                  <div class="butponetu">
                    <img src="../../img/lvyi.jpg" />
                  </div>
                  <div class="butponena">绿意盎然竹香庭院</div>
                  <div class="butponepr">￥60.00</div>
                </a>
              </div>
              <div class="butpone">
                <a href class="butpone">
                  <div class="butponetu">
                    <img src="../../img/ziran.jpg" />
                  </div>
                  <div class="butponena">自然恬静厥叶森林</div>
                  <div class="butponepr">￥60.00</div>
                </a>
              </div>
              <div class="butpone">
                <a href class="butpone">
                  <div class="butponetu">
                    <img src="../../img/danya.jpg" />
                  </div>
                  <div class="butponena">淡雅竹风铃</div>
                  <div class="butponepr">￥60.00</div>
                </a>
              </div>
            </div>
            <div class="butpag">
              <el-pagination background page-size="6" layout="prev, pager, next" :total="290"></el-pagination>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="提花帘" name="tihua">Role</el-tab-pane>
      <el-tab-pane label="绣花纱" name="xiuhuasha">Task</el-tab-pane>
      <el-tab-pane label="素色纱" name="suse">Task</el-tab-pane>
      <el-tab-pane label="烂花纱" name="lanhua">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabPosition: 'left',
    }
  },
}
</script>

<script setup>
import { ref, watch } from 'vue'
const selTab = ref("zheguang");
const route = useRoute();
selTab.value = route.query.name;
watch(route, () => {
  console.log(route.query.name)
  selTab.value = route.query.name;
})


</script>


<style scoped>
.fenlei{
  font-size: 23px;
}
.elt {
  /* background-color: bisque; */
  width: 1000px;
  height: 1100px;
}
#tab-0 {
  width: 200px;
  height: 120px;
  display: flex;
  font-size: 20px;
  color: #333;
  padding-left: 50px;
  padding-top: 30px;
  /*禁止点击 */
  pointer-events: none;
}
.el-tabs__item {
  padding-top: 4px;
  padding-right: 170px;
  margin-top: 20px;
  width: 186px;
  height: 50px;
  line-height: 60px;
  font-size: 16px;
  color: #333;
  /* background-color: bisque; */
  border-bottom: 1px solid #ccc;
}
.elttop {
  width: 948px;
  height: 40px;
  margin-left: 50px;
  /* margin-top: 20px; */
  float: left;

  /* background-color: cadetblue; */
}
.elttop button {
  width: 112px;
  height: 40px;
  border-left: 1px solid white;
  font-size: 14px;
  color: black;
}
.elttop .butf {
  background-color: #b68b55;
  color: white;
}
.eltbut {
  width: 948px;
  height: 920px;
  margin-top: 20px;
  /* background-color: chartreuse; */
}
.eltbut .eltbutp {
  width: 882px;
  height: 920px;
  margin: auto;
  /* background-color: #ccc; */
}
.eltbut .eltbutp .butpone {
  width: 280px;
  height: 376px;
  color: black;
  float: left;
  margin-left: 10px;
  /* background-color: yellowgreen; */
  margin-top: 20px;
  /* margin-bottom: 40px; */
  text-decoration: none;
}
.butponetu img {
  width: 280px;
  height: 280px;
  /* margin-top: 20px; */
  /* background-color: aquamarine; */
}
.butponena {
  width: 280px;
  height: 20px;
  margin: auto;
  font-size: 14px;
  margin-top: 26px;
  font-weight: 600;
  text-align: center;
  height: 20px;
}
.butponepr {
  width: 280px;
  height: 22px;
  font-size: 24px;
  margin-top: 7px;
  font-weight: 600;
  text-align: center;
  height: 20px;
}
.butpag {
  margin-left: 260px;
  margin-bottom: 50px;
}
</style>
