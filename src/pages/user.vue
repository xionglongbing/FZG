<template>
  <div class="login_contain">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="nav">
        <router-link replace to="/FZG_Register/user/register">注册</router-link>
      <router-link replace to="/FZG_Login/user/login">登录</router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style>
    @import '../assets/css/user.css';


</style>