import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue"
import Gg from "../views/gg.vue"
import Banner from "../views/banner.vue"
import zhuanji from "../components/xiangqing/zhuanji.vue"
import playMusic from "../components/xiangqing/playMusic.vue"



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/gg",
    name: "Gg",
    component: Gg
  },
  {
    path: "/banner",
    name: "banner",
    component: Banner
  }, 
  {
    path: "/zhuanji",
    name: "zhuanji",
    component: zhuanji
  }, 
  {
    path: "/playMusic",
    name: "playMusic",
    component: playMusic
  },
];

const router = new VueRouter({
  // mode: "history",
  // base: process.env.BASE_URL,
  routes
});

export default router;
