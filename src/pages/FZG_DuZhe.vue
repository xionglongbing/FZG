<template>
  <div class="mm">
    <el-container>
      <el-container class="containe">
        <el-aside width="255px">
          <ul>
             <router-link to="/FZG_GuanCang/FZG_GongGao">
            <li>最新公告</li>
            </router-link>

             <router-link to="/FZG_GuanCang/FZG_XinShu">
            <li>新书推荐</li>
            </router-link>

             <router-link to="/FZG_GuanCang/FZG_XianLu">
            <li>线路查询</li>
            </router-link>

             <router-link to="/FZG_GuanCang/FZG_FaBuHistory">
            <li >信息发布</li>
            </router-link>

            <li class="active">读者留言</li>

             <router-link to="/FZG_GuanCang/FZG_RuGuan">
            <li>入馆指南</li>
            </router-link>
          </ul>
        </el-aside>
        <el-main class="main">
          <span class="r">
            <router-link to="/FZG_GuanCang/FZG_DuZheHistory">
              <button>查看留言</button>
            </router-link>
          </span>
          <el-row>
            <el-col :span="4">
              <div class="div1">是否匿名：</div>
            </el-col>
            <el-col :span="20">
              <div class="div2">
                <el-radio v-model="feedback.anonymity" :label="true"
                  >是</el-radio
                >
                <el-radio v-model="feedback.anonymity" :label="false"
                  >否</el-radio
                >
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="div1">用户名：</div>
            </el-col>
            <el-col :span="20">
              <div class="div2">
                <el-input v-model="feedback.author"></el-input>请填写作者名称
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="div1">联系电话：</div>
            </el-col>
            <el-col :span="20">
              <div class="div2">
                <el-input v-model="feedback.numphone"></el-input
                >请填写正确的电话号码
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="div1">电子邮件：</div>
            </el-col>
            <el-col :span="20">
              <div class="div2">
                <el-input v-model="feedback.email"></el-input
                >请填写正确的邮件地址
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="div1">来信主题：</div>
            </el-col>
            <el-col :span="20">
              <div class="div2">
                <el-input v-model="feedback.theme"></el-input>请填写主题
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="div1">具体内容：</div>
            </el-col>
            <el-col :span="20">
              <div class="div2">
                <el-input
                  type="textarea"
                  :rows="7"
                  placeholder="请输入内容"
                  v-model="feedback.content"
                >
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4"> </el-col>
            <el-col :span="20">
              <div class="div2">
                <button @click="submit">提交</button>
                <button @click="reset">重填</button>
              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>





<script>
export default {
  data() {
    return {
      feedbackStorage: [],
      feedback: {
        anonymity: false,
        author: "",
        numphone: "",
        email: "",
        theme: "",
        content: "",
        time: "",
      },
    };
  },

  methods: {
    setfeedback() {
      this.$message({
        type: "success",
        message: "成功留下您的评论",
      });
    },
    submit() {
      this.feedback.time = new Date().toLocaleString();
      console.log(new Date().toLocaleString());
      if (!localStorage.getItem("feedback")) {
        if (this.feedback.anonymity) {
          this.feedback.author = "匿名用户";
        }
        this.feedbackStorage.push(this.feedback);
        localStorage.setItem("feedback", JSON.stringify(this.feedbackStorage));
      } else {
        this.feedbackStorage = JSON.parse(localStorage.getItem("feedback"));
        this.feedbackStorage.push(this.feedback);
        localStorage.setItem("feedback", JSON.stringify(this.feedbackStorage));
        console.log(localStorage.getItem("feedback"));
      }
      this.$router.push('/FZG_GuanCang/FZG_DuZheHistory')
    },
    reset() {
      this.feedback = {
        author: "",
        numphone: "",
        email: "",
        theme: "",
        content: "",
        time: "",
      };
    },
  },
};
</script>
<style >
.mm .el-container {
  width: 1250px;
  height: 500px;
  margin-left: -10px;
  /* margin: 0 ; */
  background-color: #fefffa;
}
.mm .el-header {
  background-color: pink;
}
.mm .el-aside {
  border: 2px solid #000;
  margin-left: 30px;
  margin-right: 60px;
  height: 408px;
  /* background-color: orange; */
}
.mm ul {
  padding-left: 15px;
}
.mm .el-aside ul li {
  list-style: none;
  box-sizing: border-box;
  margin-top: 12px;
  padding-left: 31px;
  width: 210px;
  height: 28px;
  line-height: 28px;
  font-weight: bold;
  background-color: #f1e9dc !important;
  color: #572e00;
  text-align: left;
  background: url(../assets/colL.png) 10px center no-repeat;
  border-bottom: 1px solid #e4d6c0;
}

.mm .el-aside ul .active {
  background-color: #795d46 !important;
  color: #fff;
}
.mm .el-row {
  margin: 5px;
  border-left: 2px solid #000;
  border-top: 2px solid #000;
  width: 870px;
}
.mm .el-row .el-col {
  border-radius: 0;
  padding: 5px 0;
  box-sizing: border-box;
  text-align: right;
  color: #795d46;
  font-size: 15px;
}
.mm .el-row .el-col:nth-child(even) {
  border-left: 1px solid #000;
  border-right: 1px solid #000;
}
.mm .el-row:last-child {
  border-bottom: 1px solid #000;
}
.mm .div2 {
  padding-left: 10px;
  text-align: left;
}
.mm .div2 .el-input {
  display: block;
}
.mm .div2 .el-input__inner {
  margin-right:5px;
  float: left;
  width: 200px;
  height: 21px;
  border-radius: 0;
}
.mm .div2 .el-input__inner:focus {
  border-color: black;
}
.mm .el-row:last-child .div2 .el-textarea__inner {
  border-color: black;
  width: 400px;
}
.mm .div2 button {
  padding: 6px 20px;
  background-color: #795d46;
  font-size: 14px;
  margin: 10px 10px;
  color: #fff;
  font-weight: 700;
  border-radius: 10px;
  background: #453638;
  box-shadow: 1px 1px 1px #3b2e30, -1px -1px 1px #4f3e40;
}
.mm .r {
  float: right;
  margin-top: -19px;
}
.mm .r button {
  /* padding: 3px 5px; */
  background-color: saddlebrown;
  font-size: 15px;
  color: white;
  font-weight: 700;
  cursor: pointer;
}
</style>