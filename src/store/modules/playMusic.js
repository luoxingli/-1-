export default {
    state: {
        // 发布者publisher  专辑album
        publisher:"夢娞",
        album:"si suliment",
        active:0,
        ppgbarNum:0,
        playShow:true,
        // audiopath:'https://cdn.veigen.com/veigen/gaobaizhiye.mp3',
        audioContrl:false,
        createaudio:[
            { audio:new Audio(require("@/components/source/xuan.mp3"))},
            { audio:new Audio(require("@/components/source/tuzixiansheng.mp3"))},
            { audio:new Audio(require("@/components/source/xuan.mp3"))},
            { audio:new Audio(require("@/components/source/tuzixiansheng.mp3"))},
            { audio:new Audio(require("@/components/source/xuan.mp3"))},
            { audio:new Audio(require("@/components/source/tuzixiansheng.mp3"))},
        ],
        aPlayTime:null,
        currentTime:0,
        currentBarLen:0,
        audiolen:0
    },
    mutations: {
            back(){
                this.$router.push("/gg")
            },
            conPlay(state){
                this.playShow=state;
            },
            // 导航条进度
            aPlayCount(){ 
                clearInterval(this.aPlayTime);

                this.aPlayTime=setInterval(function(){
                   
                    index++;
                    this.ppgbarNum=index;
                    this.ppgbarNum=parseInt(this.ppgbarNum);
                    window.console.log(this.ppgbarNum)
                    if(this.ppgbarNum>=100){
                        clearInterval(this.aPlayTime)
                    }
                },this.currentBarLen)
            },
            // 播放
            audioPlay(){
                this.audioContrl=true;
                // window.console.log(state)
            },
            // 暂停
            audioPause(){
                if(this.audioContrl){
                    this.createaudio[this.audiolen].audio.pause();
                    this.audioContrl=false;
                    // clearInterval(this.aPlayTime)
                }
            },
            // 上一首
            nextPlay(){
                // 先清除上一个播放
                this.createaudio[this.audiolen].audio.pause();
                if(this.audiolen>this.createaudio.length-1){
                    this.audiolen=0;
                }
                this.audiolen++;
                this.createaudio[this.audiolen].audio.play();
                this.audioContrl=true;
                this.audiolen=state;
                window.console.log(this.audiolen)
            },
            // 下一首
            prevPlay(){
                this.createaudio[this.audiolen].audio.pause();
                if(this.audiolen<0){
                    this.audiolen=this.createaudio.length-1;
                }
                this.audiolen--;
                this.createaudio[this.audiolen].audio.play();
                this.audioContrl=true;
            }
        
    },
    actions: {},
    modules: {
      
    }
  };