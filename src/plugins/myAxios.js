import Vue from "vue";

//导入axios组件
import Axios from "axios";

// 默认访问的url前缀
Axios.defaults.baseURL="http://rap2api.taobao.org/app/mock/245745";

// 把axios挂载到vue中
Vue.prototype.myAxios = Axios;

