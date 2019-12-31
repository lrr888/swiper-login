<template>
<!-- 轮播图 -->
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{item}}</h3>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
import swiper from 'swiper'
import 'swiper/css/swiper.css'

export default {
  data() {
    return {
      
    }
  },
}
</script>
<style lang="scss">
  .el-carousel_item h3{
     color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #5fa6f6;
  }
    .el-carousel__item:nth-child(2n+1) {
    background-color: #5fa6f6;
  }
</style>