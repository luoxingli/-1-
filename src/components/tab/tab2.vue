<template>
    <div>        
        <!-- myhome -->
        <myhome />
        <!-- 我的歌单 -->
        <myplay />
        <!-- 引入创建歌单模块 -->
        <createGD /> 
        <!-- 引入宫格 -->
        <grid /> 
    </div>
</template>

<script>
import grid from "./grid.vue"
import createGD from "./my/createGD.vue"
import myhome from "./my/myhome.vue"
import myplay from "./my/myplay.vue"
    export default {
        
        components:{
            grid,
            createGD,
            myhome,
            myplay
        }
    }
</script>

<style lang="scss" scoped>
// my list
    .my-hmhot{
        width: 100%;
        height: 100%;
        .hotop{            
            .hotop-wrap{
                position: relative;
                padding-top: 38.9%;
                overflow: hidden;
                background: url(//s3.music.126.net/mobile-new/img/hot_music_bg_2x.jpg?f01a252…=) no-repeat;
                background-size: contain;
                .hotop-sprt{
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-orient: vertical;
                    -webkit-box-direction: normal;
                    -webkit-flex-direction: column;
                    -ms-flex-direction: column;
                    flex-direction: column;
                    -webkit-box-pack: center;
                    -webkit-justify-content: center;
                    -ms-flex-pack: center;
                    justify-content: center;
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    z-index: 2;
                    padding-left: 20px;
                    box-sizing: border-box;
                   .hotop-icon{
                        background: url(//s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28…=) no-repeat;
                        background-size: 166px 97px;
                        width: 142px;
                        height: 67px;
                        background-position: -24px -30px;
                   }
                   .hotop-text{
                       margin-top: 10px;
                        color: hsla(0,0%,100%,.8);
                        font-size: 12px;
                        -webkit-transform: scale(.91);
                        -ms-transform: scale(.91);
                        transform: scale(.91);
                        -webkit-transform-origin: left top;
                        -ms-transform-origin: left top;
                        transform-origin: left top;
                        text-align:left;
                   } 
                }
            }
        }
    }
</style>