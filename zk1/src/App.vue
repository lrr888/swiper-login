<template>
<!-- 主页面 -->
  <div id="app">
    <HeaderBar/>
    <div class="left">
    <Left/>
    </div>
    <div class="right">
    <router-view/>
    </div>
  </div>
</template>
<script>
import Left from '@/components/Left.vue'
import HeaderBar from '@/components/HeaderBar.vue'
export default {
  components:{
    Left,
    HeaderBar
  }
}
</script>
<style lang="scss">
@import url('../public/css/reset.scss');
#app {
  width: 600px;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.left{
  float: left;
    line-height: 50px;
}
.right{
  text-align: center;
  line-height: 20px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
