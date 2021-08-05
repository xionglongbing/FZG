<template>
  <div>
    <div class="background">
      <img :src="imgSrc" width="100%" height="100%" alt="" />
      <div class="box1">
        <span class="span1">江西省方志馆</span><br />
        <span class="span2">Jiang Xi Sheng Shu Zi Fang Zhi Guan</span>
      </div>
      <div class="button">
        <el-row>
        <router-link to="/FZG_Login">
          <el-button type="primary" plain>登录</el-button>
        </router-link>
        <router-link to="/FZG_Register/user/register">
          <el-button type="success" plain>注册</el-button>
        </router-link>
        </el-row>
      </div>
      <div class="icon">
        <i class="el-icon-message-solid" style="font-size: 30px"></i>
      </div>
      <div class="need">
        <el-button
          @click="drawer = true"
          style="
            border: none;
            margin-left: 12px;
            background-color: #789bed;
            color: white;
          "
          >入馆须知</el-button
        >
      </div>

      <div class="box2"></div>
      <div class="box3">
        <img
          :src="imgSrc1"
          style="float: left"
          width="50%"
          height="100%"
          alt=""
        />
        <router-link to="/FZG_GuanCang/FZG_ShengQing">

        <span
          class="span3"
          style="color: white; font-size: 22px; line-height: 100px"
          >省情概况</span
        >
        </router-link>

      </div>
      <div class="box4">
        <img
          :src="imgSrc2"
          style="float: left"
          width="50%"
          height="100%"
          alt=""
        />
        <router-link to="/FZG_GuanCang/FZG_DuZhe">

        <span
          class="span3"
          style="color: white; font-size: 22px; line-height: 100px"
          >读者服务</span
        >
        </router-link>

      </div>
      <div class="box5">
        <img
          :src="imgSrc3"
          style="float: left"
          width="50%"
          height="100%"
          alt=""
        />
        <router-link to="/FZG_GuanCang/ZG_WangShang">

        <span
          class="span3"
          style="color: white; font-size: 22px; line-height: 100px"
          >网上展厅</span
        >
        </router-link>

      </div>
      <div class="box6">
        <img
          :src="imgSrc4"
          style="float: left"
          width="50%"
          height="100%"
          alt=""
        />
        <router-link to="/FZG_GuanCang/FZG_GuanCang_1">
          <span
            class="span3"
            style="color: white; font-size: 22px; line-height: 100px"
            >馆藏目录</span
          >
        </router-link>
      </div>
      <div class="footer">
        <p style="text-align: center;display: block;">
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
    </div>
    <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
      <span style="font-size: 30px">入馆须知</span>
      <p>
        尊敬的读者：当前全球疫情仍在蔓延，全国多地疫情散发，为保障您和他人的健康，根据2020年12月31日发布的江西省新型冠状病毒感染的肺炎疫情防控应急指挥部第20号令的文件精神，现公布防疫期间入馆须知如下：
      </p>
      <p>
        一、开放时间 周一至周四：上午9:00-12:00，下午1:30-5:00
        周五：上午9:00-12:00，下午闭馆
      </p>
      <p>
        二、注意事项
        1.读者来馆前，请通过电话进行预约，预约仅当天有效，过期作废。预约电话：0791-82066708，82066514。
        2.读者须持有效身份证件、佩戴口罩、测量体温、扫描我馆二维码后签到入馆。对老年人、未成年人等特殊群体，采取现场登记的方式入馆。体温异常或有明显呼吸道症状的人员、填报信息不实人员、未佩戴口罩人员将谢绝入馆。
        3.进馆读者必须全程佩带口罩。进馆登记、阅览图书时请自觉按照“1米线”要求保持间距。在馆期间如出现咳嗽、发烧、乏力等症状，请及时与工作人员联系。
        4.禁止携带酒精等易燃易爆危险品进馆。在馆期间，请勿吸烟和食用食品。
        5.请自觉维护公共场所卫生，做好个人健康防护，口罩投入指定丢放垃圾桶，共同营造文明、清洁、舒适、安全的环境。
        6.防疫期间，本馆按要求保持开窗通风，严格实行消毒制度，每日对馆内开放区域、桌椅、书架、电子设备等进行消毒。读者阅读的书籍也将统一消毒后上架。开放区域和卫生间为读者提供杀菌洗手液、免洗杀菌洗手液等物品。请读者放心阅览书籍。
        7.读者如需帮助或有疑问，请联系身边的工作人员。
        江西省方志馆将根据防控情况及时调整服务，请关注江西省方志馆官方网站www.jxsfzg.cn、微信公众号及时了解最新动态信息。
      </p>
      <p>敬请相互转告，感谢您的理解和支持！</p>
      <footer style="float: right">江西省方志馆</footer>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      imgSrc: require("../assets/body1.jpg"),
      imgSrc1: require("../assets/shengqing.png"),
      imgSrc2: require("../assets/duzhe.png"),
      imgSrc3: require("../assets/wangshang.png"),
      imgSrc4: require("../assets/guancang.png"),
    };
  },
  // methods: {
  //    login(){
  //       this.$router.push("/FZG_Login")

  //    }
  //   }
};
</script>

<style lang="scss" scoped>
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
}
.button{
  position: absolute;
  top:10px;
  left: 1100px;
}
.icon {
  position: absolute;
  top: 70px;
  left: 800px;
}
.need {
  position: absolute;
  top: 65px;
  left: 820px;
}
// img{
//   filter: blur(-3px);//图片虚化
// }
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
.box2 {
  width: 300px;
  height: 300px;
  border: none;
  position: absolute;
  top: 100px;
  left: 900px;
  background-image: url("../assets/1.png");
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 50% / 40%;
  opacity: 0.6;
  filter: alpha(opacity=40);
}

.box3 {
  width: 200px;
  height: 100px;
  // background-color: #0460C3;
  border: 8px solid yellow;
  position: absolute;
  top: 160px;
  left: 200px;
  -webkit-border-image: url("../assets/body1.jpg") 30 30 round; /* Safari 5 and older */
  -o-border-image: url("../assets/body1.jpg") 30 30 round; /* Opera */
  border-image: url("../assets/body1.jpg") 30 30 round;
}
.box4 {
  width: 200px;
  height: 100px;
  // background-color: rgb(204, 47, 68);
  border: 8px solid yellow;
  position: absolute;
  top: 280px;
  left: 200px;
  -webkit-border-image: url("../assets/body1.jpg") 30 30 round; /* Safari 5 and older */
  -o-border-image: url("../assets/body1.jpg") 30 30 round; /* Opera */
  border-image: url("../assets/body1.jpg") 30 30 round;
}
.box5 {
  width: 200px;
  height: 100px;
  // background-color: rgb(204, 47, 68);
  border: 8px solid yellow;
  position: absolute;
  top: 280px;
  left: 420px;
  -webkit-border-image: url("../assets/body1.jpg") 30 30 round; /* Safari 5 and older */
  -o-border-image: url("../assets/body1.jpg") 30 30 round; /* Opera */
  border-image: url("../assets/body1.jpg") 30 30 round;
}
.box6 {
  width: 200px;
  height: 100px;
  // background-color: #0460C3;
  border: 8px solid yellow;
  position: absolute;
  top: 160px;
  left: 420px;
  -webkit-border-image: url("../assets/body1.jpg") 30 30 round; /* Safari 5 and older */
  -o-border-image: url("../assets/body1.jpg") 30 30 round; /* Opera */
  border-image: url("../assets/body1.jpg") 30 30 round;
}
.footer {
  position: absolute;
  text-align: center;
  left: 370px;
  top: 500px;
  color: white;
}
</style>