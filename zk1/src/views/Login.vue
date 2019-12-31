<template>
<!-- 导航守卫 -->
  <div v-show="isinput">
    <input placeholder="请输入邮件/手机号"/>
    <br/>
    <input placeholder="请输入密码"/>
    <br/>
  <button>登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
     isinput:true
    }
  },
}
</script>

<style lang="scss">
  button{
    width: 200px;
    height: 30px;
    background: orange;
    color: #eee;
  }
</style>