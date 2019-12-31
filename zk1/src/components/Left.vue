<template>
<!-- 路由页面 -->
  <div class="home">
    <router-link to='/home'>发现</router-link>
    <router-link to='/about'>排行榜</router-link>
    <router-link to='/muise'>音乐人企划</router-link>
    <router-link to='/man'>音乐人</router-link>
    <router-link to='/song'>歌曲</router-link>
    <router-link to='/ji'>专辑</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  }
}
</script>
<style lang="scss">
  .home{
    display: flex;
    flex-direction: column;
    a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: orange;
    }
  }
  }
</style>
