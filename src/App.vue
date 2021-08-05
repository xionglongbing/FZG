<template>
  <div id="app">
    <!-- <FZG_AdmPage></FZG_AdmPage> -->
    <!-- <FZG_UserInfoChangePage></FZG_UserInfoChangePage> -->

        <FZG_Homepage></FZG_Homepage>
        <router-view></router-view>

        <!-- <FZG_DuZhe></FZG_DuZhe> -->

        <!-- <FZG_ArticleCheckPage></FZG_ArticleCheckPage> -->
        <!-- <FZG_XinShu></FZG_XinShu> -->
  </div>
</template>

<script>

import FZG_Homepage from "./components/FZG_Homepage.vue";
// import FZG_DuZhe from "./pages/FZG_DuZhe.vue";
// import FZG_AdmPage from "./pages/FZG_AdmPage.vue";
// import FZG_UserInfoChangePage from "./pages/FZG_UserInfoChangePage.vue";

// import FZG_ArticleCheckPage from "./pages/FZG_ArticleCheckPage.vue";
// import FZG_XinShu from "./pages/FZG_XinShu.vue";





export default {
  name: "App",
  components: {
    // FZG_XinShu
    // FZG_ArticleCheckPage
    // FZG_AdmPage
// FZG_UserInfoChangePage

    // FZG_DuZhe
    FZG_Homepage,
    // login
  },

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
