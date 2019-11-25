export default {
    state: {
        createlist:[
            {cname:"我喜欢的音乐",cnumber:0,ctag:"like-o",cmodel:"心动模式"},
        ],
        show:false,
        message:"",
        contrlShow:true,
    },
    mutations: { 
        // 控制歌单出现消失
        contrlGD(state){
            this.contrlShow=state;
            // window.console.log(this.$store)
        },
        del(state){
            // window.console.log(state)
            this.createlist=state;
        },
        // 创建歌单
        create(state){
            this.show=state.show
        },
        // 确认添加
        createadd(state){
            this.show=state.show;
            this.createlist=state.createlist;
        },
        // 取消创建
        createfaild(state){
            this.show=state.show;
        }
        
    },
    actions: {},
    modules: {
    }
  }