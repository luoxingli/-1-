import Vue from "vue";
import Vuex from "vuex";
import ycdt from "./modules/ycdt.js"
import grid from "./modules/grid.js"
import lists from "./modules/lists.js"
import myhome from "./modules/myhome.js"
import myplay from "./modules/myplay.js"
import playMusic from "./modules/playMusic.js"
import swipe from "./modules/swipe.js"
import zhuanji from "./modules/zhuanji.js"
import createGD from "./modules/createGD.js"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {},
  actions: {},
  modules: {
    ycdt,
    playMusic,
    grid,
    lists,
    myhome,
    swipe,
    zhuanji,
    myplay,
    createGD
  }
});

 