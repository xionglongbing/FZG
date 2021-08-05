<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/ZhanTing1.png" class="image" />
          <div style="padding: 14px">
            <span>决策与建设</span>
            <div class="bottom clearfix">
              <div class="block">
                <el-rate v-model="value1" :colors="colors"> </el-rate>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/ZhanTing2.png" class="image" />
          <div style="padding: 14px">
            <span>发展与开发</span>
            <div class="bottom clearfix">
              <div class="block">
                <el-rate v-model="value1" :colors="colors"> </el-rate>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
        <el-col :span="12"  style="margin-left:300px">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/ZhanTing3.png" class="image" />
          <div style="padding: 14px">
            <span>教育与研究</span>
            <div class="bottom clearfix">
              <div class="block">
                <el-rate v-model="value1" :colors="colors"> </el-rate>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <hr style="height: 3px; border: none; border-top: 3px double #df9464" />
    
    <el-row class="img">
  <el-col :span="6" >
    <el-card :body-style="{ padding: '0px' }">
      <img src="../assets/广西通志.png">
      <div style="padding: 14px;">
        <span>广西通志</span>
        <div class="bottom clearfix">
                <el-rate v-model="value1" :colors="colors"> </el-rate>
        </div>
      </div>
    </el-card>
  </el-col>
  <el-col :span="6" >
    <el-card :body-style="{ padding: '0px' }">
      <img src="../assets/江西省大志.png">
      <div style="padding: 14px;">
        <span>江西省大志</span>
        <div class="bottom clearfix">
                <el-rate v-model="value1" :colors="colors"> </el-rate>
        </div>
      </div>
    </el-card>
  </el-col>
  <el-col :span="6" >
    <el-card :body-style="{ padding: '0px' }">
      <img src="../assets/江西通志.png">
      <div style="padding: 14px;">
        <span>江西省大志</span>
        <div class="bottom clearfix">
                <el-rate v-model="value1" :colors="colors"> </el-rate>
        </div>
      </div>
    </el-card>
  </el-col>
  
  <el-col :span="6" >
    <el-card :body-style="{ padding: '0px' }">
      <img src="../assets/西江志.png">
      <div style="padding: 14px;">
        <span>西江志</span>
        <div class="bottom clearfix">
                <el-rate v-model="value1" :colors="colors"> </el-rate>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: null,
      value2: null,
      colors: ["#99A9BF", "#2a5caa", "#ef5b9c"],
      currentDate: new Date(),
    };
  },
};
</script>

<style lang="scss" scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.img .el-col img{
  width: 300px;
  height: 850px;
}
</style>