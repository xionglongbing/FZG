<template>
  <div>
    <div class="background">
      <img :src="imgSrc" width="100%" height="100%" alt="" />
      <div class="box1">
        <span class="span1">江西省方志馆</span><br />
        <span class="span2">Jiang Xi Sheng Shu Zi Fang Zhi Guan</span>
      </div>
      <div class="img">
        <img
          width="200%"
          height="200%"
          style="margin-left: 1130px"
          src="../assets/logo1.jpg"
          alt=""
        />
      </div>
      <el-container>
        <el-header class="m-header">
          <div class="position1">
            <router-link :to="{ name: 'FZG_Homepage' }">
              <span
                class="span3"
                :underline="false"
                style="color: black;font-weight:bolder;background-color:white;border:3px outset #afb4db; font-size: 22px; line-height: 100px"
                >网站首页</span
              >
            </router-link>

            <router-link :to="{ name: 'FZG_ShengQing' }">
              <span
                class="span3"
                style="color: black;font-weight:bolder;background-color:white;border:3px outset #afb4db; font-size: 22px; line-height: 100px"
                >省情概况</span
              >
            </router-link>
            <router-link :to="{ name: 'FZG_GuanCang_1' }">
              <span
                class="span3 "
                style="color: black;font-weight:bolder;background-color:white;border:3px outset #afb4db; font-size: 22px; line-height: 100px"
                >馆藏目录</span
              >
            </router-link>
            <router-link :to="{ name: 'FZG_WangShang' }">
              <span
                class="span3"
                style="color: black;font-weight:bolder;background-color:white;border:3px outset #afb4db; font-size: 22px; line-height: 100px"
                >网上展厅</span
              >
            </router-link>
            <router-link :to="{ name: 'FZG_DuZhe' }">
              <span
                class="span3"
                style="color: black;font-weight:bolder;background-color:white;border:3px outset #afb4db; font-size: 22px; line-height: 100px"
                >读者服务</span
              >
            </router-link>
            <!-- <div class="position2"> -->
            <el-input
              style="width: 200px; margin-left: 50px"
              v-model="input"
              placeholder="请输入内容"
              clearable
            ></el-input>
            <el-button type="primary">搜索</el-button>
            <!-- </div> -->
          </div>
        </el-header>
        <el-main>
          <router-view>
            
          </router-view>
        </el-main>
        <el-footer>
          <div class="footer">
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      imgSrc: require("../assets/body1.jpg"),
    };
  },
};
</script>

<style lang="scss" scoped>
.router-link-visited{
  color: white;
}
.background {
  // background-image: url("assets/body1.jpg");
  top: 0px; // 这里是设置与顶部的距离
  left: 0px; // 这里是设置与左边的距离
  width: 100%;
  height: 170%; /**宽高100%是为了图片铺满屏幕 */
  z-index: -1;
  position: absolute;
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

.box1 {
  width: 400px;
  height: 80px;
  border: none;
  position: absolute;
  top: 20px;
  left: 20px;
  // background-image: url("../assets/logo.png");
  // background-repeat: no-repeat;
  // background-size: 100%;
}
.box2{
  // border: 2px solid red;
  width: 80px;
  height: 150px;
  margin: 10px;
  // margin-left: 20px;
  // float: left;
  display: inline;
}

.img {
  width: 5%;
  position: absolute;
  top: 0px;
  opacity: 0.75;
  // filter: alpha(opacity=70);
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  margin-top: 95px;
  height: 100px !important;
  opacity: 0.8;
  // filter: alpha(opacity=40);
}
.position1 {
  margin-left: -100px;
}
.span3 {
  margin: 35px;
  padding: 10px 10px;
}
.background .m-header .span3:hover{
  transform: translate(-2px,-2px);
  background-color: #333;
}
// .position2{
//   margin-right: 20px;
// }
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 747px;
  // opacity: 0.9;
  // filter: alpha(opacity=40);
}
.el-footer {
  background-color: #b3c0d1;
  color: white;
  text-align: center;
  height: 180px !important;
  // opacity: 0.6;
  // filter: alpha(opacity=40);
}
.el-container {
  width: 100%;
  position: absolute;
  top: 0px;
}
</style>