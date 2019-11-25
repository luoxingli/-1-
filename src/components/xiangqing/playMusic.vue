<template>
    <div>
        <div class="pm-wrap">
            <!-- 头部back -->
            <div class="zj-top-back">
                <div class="zj-t-left">
                    <van-icon name="arrow-left" @click="back" />                    
                </div>
                <div class="zj-t-center">
                    <h3>{{publisher}}</h3>
                    <h4>{{album}}</h4>
                </div>
                <div class="zj-t-right">
                    <van-icon name="search" @click="back" />
                    <van-icon name="ellipsis" />
                </div>
            </div>
            <!-- background-img -->
            <div class="pm-bg">
                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2863227827,2030794223&fm=26&gp=0.jpg">

            </div>
            <!-- bottom-tab -->
            <div class="pm-bottom">
                <div class="pm-b-tag">
                    <van-icon name="like-o" />
                </div>
                <div class="pm-b-tag">
                    <van-icon name="down" />
                </div>
                <div class="pm-b-tag">
                    <van-icon name="chat-o" />
                </div>
                <div class="pm-b-tag">
                    <van-icon name="more-o" />
                </div>
            </div>
                <!-- 进度条 progress bar -->
            <div class="pm-b-pgbar">
                <van-progress inactive :percentage="ppgbarNum" />
            </div>
            <!--  -->
            <div class="pm-b-bottom">
                <div class="pm-b-tag">
                    <van-icon name="replay" />
                </div>
                <div class="pm-b-tag">
                    <van-icon name="arrow-left" @click="prevPlay" />
                </div>
                <div class="pm-b-tag pla-p" @click="conPlay">
                    <div>
                        <van-icon name="pause-circle-o" @click="audioPause" v-show="!playShow" />
                    </div>
                    <div>
                        <van-icon name="play-circle-o" @click="audioPlay" v-show="playShow" />
                    </div>
                </div>
                <div class="pm-b-tag">
                    <van-icon name="arrow" @click="nextPlay" />
                </div>
                <div class="pm-b-tag">
                    <van-icon name="coupon-o" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                // 发布者publisher  专辑album
                publisher:this.$store.state.playMusic.publisher,
                album:this.$store.state.playMusic.album,
                active:this.$store.state.playMusic.active,
                ppgbarNum:this.$store.state.playMusic.ppgbarNum,
                playShow:this.$store.state.playMusic.playShow,
                // audiopath:'https://cdn.veigen.com/veigen/gaobaizhiye.mp3',
                audioContrl:this.$store.state.playMusic.audioContrl,
                createaudio:this.$store.state.playMusic.createaudio,
                aPlayTime:this.$store.state.playMusic.aPlayTime,
                currentTime:this.$store.state.playMusic.currentTime,
                currentBarLen:this.$store.state.playMusic.currentBarLen,
                audiolen:this.$store.state.playMusic.audiolen,
            }
        },
        methods:{
            back(){
                this.$router.push("/gg")
            },
            conPlay(){
                this.playShow=!this.playShow;
                this.$store.commit("conPlay",this.playShow)
            },
            // 导航条进度
            aPlayCount(){ 
                clearInterval(this.aPlayTime);
                let index=0;

                this.aPlayTime=setInterval(function(){
                    // window.console.log(this.ppgbarNum)
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
                if(!this.audioContrl){
                    this.createaudio[this.audiolen].audio.play();
                    this.audioContrl=true;
                    
                    //  计算比例  百分比  当前时间/100  每1/100进行一次 ppgbarNum ++
                    this.currentTime=this.createaudio[this.audiolen].audio.duration;
                    this.currentBarLen=Math.floor(1000*this.currentTime/100);
                    // this.aPlayCount()
                    // window.console.log(this.audioContrl)
                }
                // this.$store.commit("audioPlay")
            },
            // 暂停
            audioPause(){
                if(this.audioContrl){
                    this.createaudio[this.audiolen].audio.pause();
                    this.audioContrl=false;
                    // 
                    // clearInterval(this.aPlayTime)
                }
                // this.$store.commit("audioPause")
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
                // this.$store.commit("nextPlay")
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
        }
    }
</script>

<style lang="scss" scoped>
    .pm-wrap{
        width:100%;
        height:667px;
        overflow:hidden;
        background:linear-gradient(
            to top,
            rgb(211, 63, 71),
            rgb(207, 49, 49)
        );
        color:#fff;
        .zj-top-back{
            padding-top: 10px;
            width: 90%;
            margin: 0 auto;
            height: 50px;
            overflow: hidden;
            .zj-t-left{
                width: 10%;
                float: left;
                line-height: 50px; 
                text-align: left; 
                .van-icon{
                    font-size:20px;
                    margin: 0px 5px;
                }              
            }
            .zj-t-center{
                width: 40%;
                float: left;
                height: 100%;
                text-align: left;
                h3{
                    font-size:18px;
                }
                h4{
                    font-size:12px;
                    margin-top: 6px;
                }
            }
            .zj-t-right{
                width: 50%;
                float:left;
                line-height: 50px; 
                text-align: right; 
                .van-icon{
                    font-size:20px;
                    margin: 0px 5px;
                }  
            }
        }
        .pm-bg{
            width: 270px;
            height: 300px;
            margin:60px auto;
            img{
                width: 100%;
                height:100%;
            }
        }
        .pm-bottom{
            width: 100%;
            overflow:hidden;
            padding-top: 50px;
            .pm-b-tag{
                width: 25%;
                float:left;
                font-size:25px;

            }
            .pm-b-tag::after{
                content:"";
                display:block;
                clear:both;
            }            
        }
        .pm-b-pgbar{
            width: 90%;
            margin:25px 5%;
            float:left;
        }
        .pm-b-bottom{
            width: 100%;
            overflow:hidden;
            padding-top: 5px;
            text-align: center;
            height: 50px;
            line-height: 50px;
            .pm-b-tag{
                width: 20%;
                float:left;
                font-size:25px;

            }
            .pm-b-tag::after{
                content:"";
                display:block;
                clear:both;
            } 
            .pla-p{
                font-size:34px;
            }           
        }
    }
</style>