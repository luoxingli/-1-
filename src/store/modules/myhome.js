export default {
    state: {
        myshow:false,
        username:"",
        password:"",
        nameistrue:false,
        passistrue:false,
        user:"未登录",
        userselect:"点击登录",
        infoShow:true,
        info:''
    },
    mutations: {
        // 点击跳出登录遮罩层
        click(state){
            this.myshow=state;
        },
        // 登录
        clickInfo(state){

            // window.console.log(state)
            this.username=state.username;
            this.password=state.password;
        
        },
        clickOut(state){
            this.userselect=state.userselect;
            this.infoShow=state.infoShow;
            this.user=state.user;
            window.console.log(this.user,this.infoShow)
        }
    },
    actions: {},
    modules: {
    }
  }