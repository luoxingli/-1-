import Vue from "vue";
// 引入mint-ui
import  Mint from 'mint-ui';
Vue.use(Mint);

// 引入jsonp
import VueJsonp from 'vue-jsonp';
Vue.use(VueJsonp);

// 引入并全局注册
import axios from "axios";
Vue.prototype.$axios = axios;
// 引入bootstrap
import "./assets/dist/css/bootstrap.css";
// 装包
// $cnpm i mint-ui -S
// $cnpm i bootstrap@3.3.7 -S
// $cnpm i babel-plugin-component -S
// $cnpm i vant -S
// $cnpm i vue-jsonp -S
// $cnpm i vue-router -S
// $cnpm i swiper@4.5.0 -S
// $cnpm i axios -S

// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);


import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
// 引入swiper
import "swiper/dist/css/swiper.css";
// 引入animate动画
import "animate.css"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
