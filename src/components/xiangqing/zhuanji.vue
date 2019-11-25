<template>
    <div>
        <div class="zj-top">
            <!-- zj-top -->
            <div class="zj-top-back">
                <div class="zj-t-left">
                    <van-icon name="arrow-left" @click="back" />                    
                </div>
                <div class="zj-t-center">
                    <h3>歌单</h3>
                    <h4>猜你喜欢</h4>
                </div>
                <div class="zj-t-right">
                    <van-icon name="search" @click="back" />
                    <van-icon name="ellipsis" />
                </div>
            </div>
            <!--  -->
            <div class="zj-wrap">
                <div class="zj-wrap-img">
                    <div class="zj-wrap-img-b">
                        <span><img :src="path"></span>
                        <div>
                            <van-icon name="service-o" />
                            <p>{{num}}</p>
                        </div>
                    </div>                    
                </div>
                <div class="zj-wrap-content">
                    <div class="zj-content-top">{{title}}</div>
                    <div class="zj-content-bottom">                        
                        {{editor}}<van-icon name="arrow" />
                    </div>
                </div>
                <div class="zj-tag">
                    <span class="zj-tag-li">简介：{{title}}</span>
                    <p class="zj-tag-li">{{li}}</p>
                </div>
            </div>
            <!-- zj-list  -->
            <div class="zj-list">
                <van-row>
                    <van-col span="6">
                        <van-icon name="chat-o" />
                        <div>27</div>
                    </van-col>
                    <van-col span="6">
                        <van-icon name="apps-o" />
                        <div>28</div>
                    </van-col>
                    <van-col span="6">
                        <van-icon name="down" />
                        <div>下载</div>
                    </van-col>
                    <van-col span="6">
                        <van-icon name="certificate" />
                        <div>多选</div>
                    </van-col>
                </van-row>  
            </div>
        </div>
        <lists />
    </div>
</template>

<script>
import lists from "../tab/lists.vue"
    export default {
        data(){
            return{
                num:this.$store.state.zhuanji.num,
                li:this.$store.state.zhuanji.li,
                title:this.$store.state.zhuanji.title,
                path:this.$store.state.zhuanji.path,
                editor:this.$store.state.zhuanji.editor
                
            }
        },
        components:{
            lists,
        },
        methods:{
            back(){
                this.$router.push("/gg")
            }
        }
    }
</script>

<style lang="scss" scoped>
html,body,h1,h2,h3,h4,h5,span,img,p{
    padding: 0;
    margin: 0;
}
    .zj-top{
        width:100%;
        background:linear-gradient(
            to bottom,
            rgb(68, 56, 56),
            rgb(110, 21, 21)
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
        .zj-wrap{
            width: 90%;
            margin:10px auto;
            overflow: hidden;
            .zj-wrap-img{
                width: 40%;
                float:left;
                .zj-wrap-img-b{
                    position: relative;
                    width: 100%;
                    height: 130px;
                    span{                        
                        width: 100%;
                        height: 100%;
                        img{
                            display: block;
                            width: 100%;
                            height: 100%;

                        }
                    }
                    div{
                        position:absolute;
                        right: 10px;
                        top: 10px;
                        p{
                            display: inline-block;
                            z-index:1;
                        }
                    }
                }
            }
            .zj-wrap-img::after{
                display: block;
                content:"";
                clear:both;
            }
            .zj-wrap-content{
                width: 55%;
                margin-left: 5px;
                float: left;
                text-align: left;
                .zj-content-top{
                    font-size:18px;
                    text-align: left;
                }
                .zj-content-bottom{
                    text-align: left;
                    span{
                        
                    }
                }
            }
        }
        .zj-list{
            padding: 10px 0px;
            .van-icon{
                font-size:23px;
            }
        }
        .zj-tag{
            width:55%;
            float:left;
            text-align: left;
            margin-top: 35px;
        }
    }
</style>