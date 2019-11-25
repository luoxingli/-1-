<template>
    <div>
        <div class="yc-t-container">
            <div class="yc-top-wrap">
                <div class="yc-top-left">
                    <div class="yc-t-l-top">
                        <h4 class="yc-t-l-text">云村热评墙</h4>
                        <van-icon name="arrow" />
                    </div>
                    <div class="yc-t-l-bottom">
                        <span class="yc-t-l-text">村友，今日最戳心评论，你看过几条？</span>
                    </div>                
                </div>
                <div class="yc-top-right">
                    <h4>Nov</h4>
                    <h3>22</h3>
                </div>
            </div>
        </div>
        <div class="yc-list">
        <div class="yc-list-wrap" v-for="(item,i) in lists" :key="i"  @click="toZj" >
            <div class="yc-list-top">
                <img :src="item.bpath" alt="">
            </div>
            <div class="yc-list-bottom">
                <h3>{{item.tag}}</h3>
                <div class="yc-l-b-text">
                    <div class="t-left">
                        <span><img :src="item.spath" alt=""></span>
                        <span>{{item.name}}</span>
                    </div>
                    <div class="t-right">
                        <span>{{item.bumber}}</span>
                        <van-icon name="plus" />
                    </div>                    
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                lists:[
                    
                    {bpath:"http://img2.imgtn.bdimg.com/it/u=4280818391,516628045&fm=26&gp=0.jpg",
                    spath:"http://img1.imgtn.bdimg.com/it/u=2713288513,2026476790&fm=26&gp=0.jpg",
                    tag:"好看的铁路拍摄地",name:"然冰77",number:"913赞"
                    },
                    {bpath:"http://img2.imgtn.bdimg.com/it/u=4280818391,516628045&fm=26&gp=0.jpg",
                    spath:"http://img1.imgtn.bdimg.com/it/u=2713288513,2026476790&fm=26&gp=0.jpg",
                    tag:"好看的铁路拍摄地",name:"然冰77",number:"913赞"
                    },
                    {bpath:"http://img2.imgtn.bdimg.com/it/u=4280818391,516628045&fm=26&gp=0.jpg",
                    spath:"http://img1.imgtn.bdimg.com/it/u=2713288513,2026476790&fm=26&gp=0.jpg",
                    tag:"好看的铁路拍摄地",name:"然冰77",number:"913赞"
                    },
                    {bpath:"http://img2.imgtn.bdimg.com/it/u=4280818391,516628045&fm=26&gp=0.jpg",
                    spath:"http://img1.imgtn.bdimg.com/it/u=2713288513,2026476790&fm=26&gp=0.jpg",
                    tag:"好看的铁路拍摄地",name:"然冰77",number:"913赞"
                    },
                    {bpath:"http://img2.imgtn.bdimg.com/it/u=4280818391,516628045&fm=26&gp=0.jpg",
                    spath:"http://img1.imgtn.bdimg.com/it/u=2713288513,2026476790&fm=26&gp=0.jpg",
                    tag:"好看的铁路拍摄地",name:"然冰77",number:"913赞"
                    },
                    {bpath:"http://img2.imgtn.bdimg.com/it/u=4280818391,516628045&fm=26&gp=0.jpg",
                    spath:"http://img1.imgtn.bdimg.com/it/u=2713288513,2026476790&fm=26&gp=0.jpg",
                    tag:"好看的铁路拍摄地",name:"然冰77",number:"913赞"
                    },
                    {bpath:"http://img2.imgtn.bdimg.com/it/u=4280818391,516628045&fm=26&gp=0.jpg",
                    spath:"http://img1.imgtn.bdimg.com/it/u=2713288513,2026476790&fm=26&gp=0.jpg",
                    tag:"好看的铁路拍摄地",name:"然冰77",number:"913赞"
                    },
                    {bpath:"http://img2.imgtn.bdimg.com/it/u=4280818391,516628045&fm=26&gp=0.jpg",
                    spath:"http://img1.imgtn.bdimg.com/it/u=2713288513,2026476790&fm=26&gp=0.jpg",
                    tag:"好看的铁路拍摄地",name:"然冰77",number:"913赞"
                    },
                ]
            }
        },
        methods:{
            toZj(){
                this.$router.push("/zhuanji")
            }
        }
    }
</script>

<style lang="scss" scoped>
html, body, h1,h2,h3,h4,h5,img,p,span{
    margin: 0;
    padding: 0;
}
.t-left{
    float:left
}
.t-right{
    float:right
}
.yc-list{
    width: 95%;
    margin: 10px auto;
    overflow: hidden;
    .yc-list-wrap{
        width:48%;
        margin-left: 5px;
        float:left;
        overflow: hidden;
        border-radius: 5%;
        .yc-list-top{
            width: 100%;
            img{
                width: 100%;
                border-radius: 5%;
            }
        }
        .yc-list-bottom{
            width: 100%;
            margin: 5px 0px;
            h3{
                font-size:18px;
            }
            .yc-l-b-text{
                height: 30px;
                overflow: hidden;
                div{
                    span{
                    font-size:14px;
                    img{
                        display: inline-block;
                        width: 25px;
                        height: 25px;
                        border-radius: 50%;
                    }
                }
                }
            }
        }
    }
    .yc-list-wrap:after{
        display: block;
        content:"";
        clear:both;
    }
}

.yc-t-container{
    margin: 10px auto;
    width: 96%;
    border-radius: 35px;
    background:linear-gradient(
        to right,
        black,
        darkred
        
    );
    color:#fff;
    .yc-top-wrap{
        width: 100%;
        padding: 20px 10px;
        display:flex;
        .yc-top-left{
            flex:5;
            text-align: left;
            .yc-t-l-top{
                margin-left: 10px;
                h4{
                    font-size:17px;
                    display: inline-block;
                }
            }
            .yc-t-l-bottom{
                margin-top: 10px;
                margin-left: 10px;
                span{
                    font-size:14px;
                }
            }
            
        }
        .yc-top-right{
            flex:1;
            h4{
                font-size:17px; 
            }
            h3{
                font-size:24px;
                margin-top: 8px;
            }
        }
    }
}

</style>