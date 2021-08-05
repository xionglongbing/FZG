<template>
  <div>
    <div class="block">
      <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
      <el-carousel height="450px" width="300px">
        <el-carousel-item v-for="item in itemlist" :key="item.img">
          <img style="width: 50%" :src="item.img" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <hr style="border: 2px solid #5f3c23" />
    <div class="position2">
      <div class="box2">
        <!-- <router-link target="_top" :to="{name:'/FZG_GuanCang_ZS',query:{id:'1'}}">
          <img style="width: 15%" src="../assets/TZ.png" alt="志书" />
        </router-link> -->

        <router-link to="/FZG_GuanCang/FZG_GuanCang_1/FZG_GuanCang_ZS">
          <img style="width: 15%" src="../assets/TZ.png" alt="志书" />
        </router-link>
      </div>

      <div class="box2">
        <router-link to="/FZG_GuanCang/FZG_GuanCang_1/FZG_GuanCang_NJ">
        <img style="width: 15%" src="../assets/NJ.png" alt="年鉴" />
        <!-- <span style="font-size:20px;position:relative;top:20px;left:-110px">年鉴</span> -->
        </router-link>

      </div>

      <div class="box2">
        <router-link to="/FZG_GuanCang/FZG_GuanCang_1/FZG_GuanCang_JP">
        <img style="width: 15%" src="../assets/JP.png" alt="家谱" />
        <!-- <span style="font-size:20px;position:relative;top:20px;left:-110px">家谱</span> -->
        </router-link>
      </div>

      <div class="box2">
        <router-link to="/FZG_GuanCang/FZG_GuanCang_1/FZG_GuanCang_BZ">
        <img style="width: 15%" src="../assets/BZ.png" alt="报纸" />
        <!-- <span style="font-size:20px;position:relative;top:20px;left:-110px">报纸</span> -->
        </router-link>

      </div>

      <div class="box2">
        <router-link to="/FZG_GuanCang/FZG_GuanCang_1/FZG_GuanCang_QK">
        <img style="width: 15%" src="../assets/QK.png" alt="期刊" />
        <!-- <span style="font-size:20px;position:relative;top:20px;left:-110px">期刊</span> -->
        </router-link>

      </div>

      <div class="box2">
        <router-link to="/FZG_GuanCang/FZG_GuanCang_1/FZG_GuanCang_QT">
        <!-- <span style="font-size:20px;position:relative;top:20px;left:-110px">其他</span> -->
        <img style="width: 15%" src="../assets/QT.png" alt="其他" />
        </router-link>
      </div>

    </div>
    <router-view ></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
      itemlist: [
        {
          img: require("../assets/GC1.png"),
        },
        {
          img: require("../assets/GC2.png"),
        },
        {
          img: require("../assets/GC3.png"),
        },
        {
          img: require("../assets/GC4.png"),
        },
        {
          img: require("../assets/GC5.png"),
        },
         {
          img: require("../assets/GC6.png"),
        },
      ],
    };
  },
  //  methods: {
     
  //   searchbyName(){
  //       this.$emit('ttsearchbyName',this.keywords);
  //   }
    
  // },
};
</script>

<style lang="scss" scoped>
.box2 {
  // border: 2px solid red;
  width: 80px;
  height: 150px;
  margin: 10px;
  // margin-left: 20px;
  // float: left;
  display: inline;
}
</style>