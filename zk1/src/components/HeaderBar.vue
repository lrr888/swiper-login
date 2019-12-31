<template>
<!-- 登录 -->
  <div>
    <span @click="Eventlogin()">免费注册</span>
    <span>立即登录</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // isinput:true
    }
  },
  methods: {
    Eventlogin(){
      this.$router.push('/login')
    }
  },
}
</script>

<style lang="scss">
span{
  width: 100px;
  height: 30px;
  background: #ccc;
}
</style>