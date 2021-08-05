import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import AMap from 'vue-amap';
Vue.use(AMap);
 // 初始化vue-amap
 AMap.initAMapApiLoader({
  // 高德key
  key: '3df4e4b51fc46a0afe22ea2ef79a989b',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Geolocation']
});

// 导入自定义的路由组件js
import myRouter from "./plugins/myRouter.js";

// 导入axios
import "./plugins/myAxios.js";

// 导入elementui
import "./plugins/elementUI.js";

// //导入semantic-ui-vue
// import "./plugins/SuiVue.js";

// 把路由挂载到vue
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  // 把路由挂载到vue
  router: myRouter
}).$mount('#app')
