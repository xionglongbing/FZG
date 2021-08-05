<template>
  <el-form
    ref="login_form"
    :rules="msg"
    :model="loginForm"
    label-width="0"
    class="login_form"
  >
    <h2>用户登录</h2>
    <el-form-item prop="username">
      <el-input
        v-model="loginForm.username"
        prefix-icon="el-icon-user-solid"
      ></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        type="password"
        show-password
        v-model="loginForm.password"
        prefix-icon="el-icon-s-goods"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login">登录</el-button>
      <el-button type="info" @click="reset">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "12345678",
      },
      msg: {
        username: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          { min: 2, max: 10, message: "长度在2到10个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入登陆密码", trigger: "blur" },
          { min: 6, max: 15, message: "长度在6到15个字符", trigger: "blur" },
        ],
      },
      userinfo: [],
      username:''
    };
  },
  mounted() {
    const that = this;
    function init() {
      try {
        if (!localStorage.getItem("userinfo")) {
          axios.get("http://localhost:8080/db/userinfo.json").then(
            function (success) {
              localStorage.setItem("userinfo", JSON.stringify(success.data));
              that.userinfo = localStorage.getItem("userinfo");
              that.userinfo = JSON.parse(that.userinfo);
            },
            function (error) {
              console.log(error);
            }
          );
        } else {
          that.userinfo = localStorage.getItem("userinfo");
          that.userinfo = JSON.parse(that.userinfo);
        }
      } catch (error) {
        console.log(error, "用户信息已重置");
        localStorage.removeItem("userinfo");
        init();
      }
    }
    init();
  },
  methods: {
    reset() {
      this.$refs.login_form.resetFields();
    },

    login() {
      this.$refs.login_form.validate((valid) => {
        // console.log(valid);//判断表单提交数据是否合格
        // console.log(this.loginForm);//数据提交给后台验证
        if (valid) {
          let flag = this.userinfo.some((value) => {
            this.username=value.username;
            return (
              value.username == this.loginForm.username &&
              value.password == this.loginForm.password
            );
          });
          if (flag) {
            this.$message({
              message: "成功登录",
              type: "success",
            });
            sessionStorage.setItem("token",this.username);
            this.$router.push("/FZG_GuanCang/FZG_FaBu");

          } else {
            this.$message({
              message: "用户名或密码错误",
              type: "error",
            });
          }
        }
      });
    },
  },
};
</script>

<style>
</style>
