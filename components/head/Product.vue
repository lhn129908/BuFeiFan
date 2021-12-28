<template>
  <div class="product"><div class="pro">Product/产品中心</div></div>
  <div class="imgbox">
    <img class="sha" src="../../assets/images/10.png" alt="" />
    <img class="bu" src="../../assets/images/12.png" alt="" />
  </div>
</template>
<style lang="scss" scoped>
.product {
  height: 200px;
  background-color: black;
}
.pro {
  color: white;
  font-weight: bold;
  font-size: 40px;
  padding-top: 70px;
  margin-left: 200px;
}
</style>
<style scoped>
.imgbox {
  position: relative;
  text-align: center;
}
.bu {
  position: absolute;
  left: 700px;
  top: -120px;
}
.sha {
  position: absolute;
  left: 120px;
  top: 60px;
}
</style>