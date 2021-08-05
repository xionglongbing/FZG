<template>
  <div>
    <div id="container" style="height: 500px; width: 100%"></div>
    <hr style="height:1px;border:none;border-top:1px dashed #0066CC;"/>
    <router-link to="/FZG_GuanCang/FZG_DuZhe"> 
    <span style="color:#426ab3;font-size:25px;text-decoration:underline">
        返回
        </span> 
    </router-link>
  </div>
</template>

<script>
import * as echarts from "echarts";
import "echarts-gl";
import Vue from "vue";

//挂载
Vue.prototype.myChart = echarts;

export default {
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var dom = document.getElementById("container");
      var myChart = echarts.init(dom);
      // var app = {};

      var option;

      option = {
        title: {
          text: "新书推荐",
          subtext: "数据来自网站",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["2020年", "2021年"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: "category",
          data: [
            "《高安市革命烈士风采录》",
            "《袁州年鉴（2020）》",
            "《萍乡年鉴（2020）》",
            "《景德镇市志（1986—2010）》",
            "《青山湖年鉴（2020）》",
            "《于都年鉴（2020）》",
            "书籍总阅读量(次)",
          ],
        },
        series: [
          {
            name: "2020年",
            type: "bar",
            data: [18023, 13489, 39034, 304970, 317404, 231100, 924020],
          },
          {
            name: "2021年",
            type: "bar",
            data: [29325, 38438, 31000, 281594, 134141, 420031, 934529],
          },
        ],
      };
      if (option && typeof option === "object") {
        myChart.setOption(option);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>