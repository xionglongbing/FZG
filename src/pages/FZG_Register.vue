<template>
  <div>
    <el-container>
      <el-aside width="400px">
        <div class="demo-image__placeholder">
          <div class="block">
            <!-- <span class="demonstration">自定义</span> -->
            <el-image :src="src" class="img1">
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
            </el-image>
          </div>
        </div>
      </el-aside>
      <el-container>
        <el-header>
          <div class="box1">
            <span class="span1">江西省方志馆</span><br />
            <!-- <span class="span2">Jiang Xi Sheng Shu Zi Fang Zhi Guan</span> -->
          </div>
        </el-header>
        <el-main> 
      <router-view></router-view>

            <!-- <span style="color:black;font-size:30px;font-weight:bolder">注册</span>

            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input v-model="ruleForm.password"></el-input>
  </el-form-item>

  <el-form-item label="用户类型" prop="region">
    <el-select style="float:left" v-model="ruleForm.region" placeholder="请选择用户类型">
      <el-option label="普通用户" value="shanghai"></el-option>
      <el-option label="管理员" value="beijing"></el-option>
    </el-select>
  </el-form-item>

  <el-form-item label="用户意见" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>

</el-form> -->
        </el-main>
        <el-footer> 
             <div class="footer">
                 <router-link :to="{ name: 'FZG_Homepage' }">
              <span
                class="span3"
                :underline="false"
                style="color: white; font-size: 22px; line-height: 100px"
                >网站首页</span
              >
            </router-link>
        <p style="text-align: center">
           <router-link to="/FZG_GuanCang/FZG_WangZhan">
          <span style="color:white">
          网站地图
          </span>
        </router-link>
           |
        <router-link to="/FZG_GuanCang/FZG_GuanYu">
            <span style="color:white">
          关于我们
          </span>
        </router-link>
        </p>
        <p>
          地址：南昌市红谷滩新区怡园路688号 电话：0791-82066509 邮编：330038
        </p>
        <p>版权所有：江西省方志馆</p>
        <p>赣ICP备19011078 赣公网安备 36010202000213号</p>
      </div>
        </el-footer>
      </el-container>
    </el-container>
    <div class="background">
      <img :src="imgSrc" width="100%" height="100%" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        src:require("../assets/reg3.jpg"),
      imgSrc: require("../assets/body1.jpg"),
        ruleForm: {
          name: '',
          password:"",
          region: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 2 到 7 个字符', trigger: 'blur' }
          ],
          password:[
              { required: true, message: '请输入登录密码', trigger: 'blur' },
            { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择用户类型', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写个人意见', trigger: 'blur' }
          ]
        }
    };
  },
   methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
};
</script>

<style lang="scss" scoped>
.login_contain {
    position: relative;
    height: 100%;
    background-color: #2b4b6b;
  }
  .login_box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 300px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 8px;
  }
  .nav a{
    float: left;
    text-decoration: none;
    font-size: 20px;
    color: black;
    margin: 3px 10px;
  }
  .nav a.router-link-exact-active {
    text-decoration: underline;
    font-size: 23px;
    color: #42b983;
  }
  .avatar_box {
    overflow: hidden;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    padding: 10px;
    border: 1px solid #aaa;
    border-radius: 50%;
    box-shadow: 0 0 10px #ddd;
  }
  .avatar_box img {
    width: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
  .login_form {
    position: absolute;
    bottom: 0;
    padding: 0 20px;
    box-sizing: border-box;
    width: 100%;
  }
  .nav a.router-link-exact-active {
    margin-top: 0;
    text-decoration: underline;
    font-size: 23px;
    color: #42b983;
  }

.background {
  // background-image: url("assets/body1.jpg");
  top: 0px; // 这里是设置与顶部的距离
  left: 0px; // 这里是设置与左边的距离
  // margin-left: -8px;
  // margin-top: -61px;
  width: 100%;
  height: 120%; /**宽高100%是为了图片铺满屏幕 */
  z-index: -1;
  position: absolute;
  //   opacity: 0.6;//图片透明化
  //   filter: blur(1px);//图片虚化
}
.span1 {
  color: white;
  z-index: 100;
  font-size: 45px;
  font-style: italic;
  font-family: "黑体";
  font-weight: bolder;
  // position: absolute;
  // top:200px;
}
.span2 {
  color: white;
  z-index: 100;
  font-size: 20px;
  // font-style: italic;
  font-family: "黑体";
  font-weight: bolder;
}

// .box1 {
//   width: 400px;
//   height: 80px;
//   border: none;
//   position: absolute;
//   top: 20px;
//   left: 20px;
//   // background-image: url("../assets/logo.png");
//   // background-repeat: no-repeat;
//   // background-size: 100%;
// }

.el-header {
  background-color: #25a1a1;
  color: #333;
  text-align: center;
  height: 120%;
  margin-top: -59px;
  margin-right: -8px;
  //   opacity: 0.6;//图片透明化
}
.el-footer {
  background-color: #25a1a1;

  // background-color: #B3C0D1;
  color: #333;
  text-align: center;
  height: 245px  !important;
  margin-right: -8px;
    // opacity: 0.9;//图片透明化
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  margin-top: -59px;
  height: 700px;
  margin-left: -10px;
//   opacity: 0.6; //图片透明化
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 370px;
  margin-right: -8px;

  // line-height: 160px;
//   opacity: 0.8; //图片透明化
}
.footer {
//   position: absolute;
//   text-align: center;
//   left: 580px;
//   top: 400px;
  color: white;
}
.img1{
  height: 700px
}

//   body > .el-container {
//     margin-bottom: 40px;
//   }

//   .el-container:nth-child(5) .el-aside,
//   .el-container:nth-child(6) .el-aside {
//     line-height: 260px;
//   }

//   .el-container:nth-child(7) .el-aside {
//     line-height: 320px;
//   }
</style>