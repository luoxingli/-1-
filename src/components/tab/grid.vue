<template>
    <div>
        <div class="nav-top" id="icon-img">
            <h2 class="grid-top-text">
                推荐歌单
            </h2>
        </div>
        <div class="grid-top" id="grid-top">
            <div class="grid-content">
                <div class="grid-col" v-for="(item,i) in lists" :key="i" @click="go">
                    <div class="col-top">
                        <img :src="item.path">
                        <span  class="col-text"><van-icon name="service-o" />{{item.num}}</span>
                    </div>
                    <p>{{item.text}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                lists:this.$store.state.grid.lists,
            }
        },
        methods:{
            go(){
                this.$router.push("/zhuanji")
                // window.console.log(this.$store.state.grid.lists)
            }
        }
    }
</script>

<style lang="scss" scoped>
html,body,h1,h2,h3,h4,h5{
    padding: 0;
    margin: 0;
}
    .nav-top{
        width:100%;
        // padding-top:20px;
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

    #grid-top{
        position: relative;
        padding-bottom: 24px;
        overflow: hidden;
        .grid-content{
            
            .grid-col{
                display: block;
                margin-bottom: 15px;
                float: left;
                width: 33.3%;
                padding-left: 1px;
                padding-right: 1px;
                box-sizing: border-box;
                position:relative;
                .col-top{
                    position: relative;
                    padding-bottom: 90%;
                    overflow: hidden;
                    img{
                        display: block;
                        position: absolute;
                        width: 100%;
                        left: 0;
                        top: 0;
                        z-index: 1;
                    }
                    .col-text{
                        position: relative;
                        right: -25px;
                        z-index: 3;
                        padding-left: 13px;
                        color: #fff;
                        font-size: 12px;
                        background-position: 0;
                        background-repeat: no-repeat;
                        background-size: 11px 10px;
                        text-shadow: 1px 0 0 rgba(0,0,0,.15);
                    }
                    .col-text::after{
                        content: " ";
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 20px;
                        z-index: 2;
                        background-image: -webkit-linear-gradient(top,rgba(0,0,0,.2),transparent);
                        background-image: linear-gradient(180deg,rgba(0,0,0,.2),transparent);
                    }
                }
                p{
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    padding: 6px 2px 0 6px;
                    min-height: 30px;
                    line-height: 1.2;
                    font-size: 13px;

                }
            }
        }
        .grid-col:first-child{
            padding-left: 0;
            padding-right: 2px;
        }
        .grid-content::after{
            display: block;
            visibility: hidden;
            clear: both;
            height: 0;
            overflow: hidden;
            content: ".";
        }
    }
</style>
