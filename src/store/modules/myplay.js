export default {
    state: {
        lists:[
            {tag:"本地音乐",tabname:"music-o",number:0},
            {tag:"最近播放",tabname:"play-circle-o",number:0},
            {tag:"下载管理",tabname:"down",number:0},
            {tag:"我的电台",tabname:"newspaper-o",number:0},
            {tag:"我的收藏",tabname:"star-o",number:"专辑/歌手/视频/专栏/Mlog"},
        ],
    },
    mutations: {
        tip(){
            this.$toast("此功能尚未开放");
        }
    },
    actions: {},
    modules: {
    }
  }