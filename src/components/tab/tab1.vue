<template>
    <div>
        <div class="swiper-top"><swipe></swipe></div>
        <div class="nav-top" id="icon-img">
            <!-- <h2 class="grid-top-text">
                推荐歌单
            </h2> -->
            <div></div>
            <grid />
            <h2 class="grid-top-text">
                最新音乐
            </h2>
            <lists />
        </div>
        
    </div>
</template>

<script>
import grid from "./grid.vue"
import lists from "./lists.vue"
import swipe from "./found/swipe.vue"
    export default {
        components:{
            grid,
            lists,
            swipe
        }
    }
</script>

<style lang="scss" scoped>
html, body,h1,h2,h3,h4,h5{
    margin: 0;
    padding: 0;
}
.swiper-top{
    padding:10px 0px;
}
    .nav-top{
        width:100%;
        padding-top:20px;
        overflow:hidden;
        .grid-top-text{
            position: relative;
            padding-left: 9px;
            margin-bottom: 14px;
            font-size: 17px;
            height: 20px;
            line-height: 20px;
            text-align: left;
        }
        .grid-top-text::after{
            content: " ";
            position: absolute;
            left: 0;
            top: 50%;
            margin-top: -9px;
            width: 2px;
            height: 16px;
            background-color: #d33a31;
        }
        #icon-img{
            width: 100%;
            height:100%; 
        }
    }
</style>