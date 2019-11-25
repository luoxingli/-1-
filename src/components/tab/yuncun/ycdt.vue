<template>
    <div>
        <div class="ycdt">
            <div class="yc-new-wrap" v-for="(item,i) in lists" :key="i">
                <div class="yc-new">
                    <div class="yc-n-top">
                        <div class="yc-n-t-left">
                            <span class="n-t-left-img">
                                <img :src="item.spath" alt="">
                            </span>
                            <div>
                                <h3>{{item.name}}</h3>
                                <span>{{item.fans}}</span>
                            </div>
                        </div>
                        <div class="yc-n-t-right" @click="focus(i)">
                            <van-icon name="plus" v-show="item.showbtn" />
                            {{item.focustext}}
                        </div>
                    </div>
                    <div class="yc-n-bottom">
                        <h3>{{item.htag1}}</h3>
                        <h3>{{item.htag2}}</h3>
                        <div class="bt-img">
                            <img :src="item.bpath" alt="">
                        </div>
                        <div class="bt-msg">
                            <span><van-icon name="replay" />{{item.looked}}</span>
                            <span><van-icon name="chat-o" />{{item.great}}</span>
                            <span><van-icon name="thumb-circle-o" />{{item.new}}</span>
                            <span class="s-right"><van-icon name="ellipsis" /></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ycdt-bottom">
                <span class="span-line">~</span>
                <span>我是有底线的</span>
                <span class="span-line">~</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                lists:this.$store.state.ycdt.lists,
            }
        },
        methods:{
            focus(i){
                this.lists[i].showbtn=!this.lists[i].showbtn;
                if(this.lists[i].showbtn==0){                    
                    this.lists[i].focustext="已关注";
                }else{
                    this.lists[i].focustext="关注";
                }
                this.$store.commit("focus",this.lists)                
            }
        }
    }
</script>

<style lang="scss" scoped>
html,body,h1,h2,h3,h4,h5,span,img{
    padding: 0;
    margin: 0;
}
.ycdt{  
    .yc-new-wrap{
        width: 100%;
        overflow: hidden;    
        border-bottom: 1px solid #ccc;
        border-top: 1px solid #ccc;
        .yc-new{
            width: 94%;
            margin:15px auto ;
            
            .yc-n-top{
                height:50px;
                overflow: hidden;
                text-align: left;
                .yc-n-t-left{
                    height: 100%;
                    width: 70%;
                    float:left;
                    .n-t-left-img{
                        float:left;
                        display: inline-block;
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        background-color: #888;
                        img{
                            display:block;
                            width: 50px;
                            height: 50px;
                            border-radius: 50%;
                        }
                    }
                    div{
                        float:left;
                        height: 50px;
                        h3{
                            font-size:21px;
                            span{
                                font-size:18px;
                            }
                        }
                    }
                }
                .yc-n-t-right{
                    width: 30%;
                    margin: 10px auto;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    color:#fff;
                    background-color: rgb(170, 21, 21);
                    border-radius: 15px;
                    float:left;
                }
            }
            .yc-n-bottom{
                width: 85%;
                margin: 10px auto;
                h3{
                    margin-top: 3px;
                    font-size:18px;
                    text-align: left;
                }
                .bt-img{
                    width: 100%;
                    height: 245px;
                    overflow: hidden;
                    margin-top: 10px;
                    img{
                        width: auto;
                        height: 100%;
                        border-radius:15px;
                    }
                }
                .bt-msg{
                    display: flex;
                    span{
                        flex:1;
                        height: 35px;
                        line-height: 30px;
                        text-align: left;
                        color: rgb(66, 63, 63);
                        .van-icon{
                            font-size:16px;
                            margin-right: 5px;
                        }
                    }
                    .s-right{
                        text-align: right;
                    }
                }
            }
        }
    } 
    .ycdt-bottom{
        text-align: center;
        padding: 15px 0px;
        background-color: #f8f8f8;
        span{
            width: 33.33%;
            height: 30px;
            color:rgb(65, 61, 61);
        }
        .span-line:after{
            font-size:20px;
        }
    } 
}
</style>