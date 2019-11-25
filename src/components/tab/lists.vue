<template>
    <div>
        <div class="m-lists">
            <div class="lists-wrap">
                <div class="lists-col">
                    <div class="col-content" v-for="(item,i) in lists" :key="i">
                        <div class="lists-col-l">
                            <div class="lists-col-l-top">
                                {{item.top}}
                            </div>
                            <div class="lists-col-l-bottom">
                                <img :src="item.path">
                                {{item.bottom}}
                            </div>
                        </div>
                        <div class="lists-col-r" @click="goplay">
                            <span class="lists-col-r-sprt"></span>
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
                lists:this.$store.state.lists.lists,
            }
        },
        methods:{
            goplay(){
                this.$router.push("/playMusic")
            }
        }
    }
</script>

<style lang="scss" scoped>
    html,body,h1,h2,h3,h4,h5,img,p,div{
        padding: 0;
        margin: 0;
    }
    .m-lists{
        position: relative;
        min-height: 20px;
        .lists-wrap{
            .lists-col:visited{
                color:#333;
            }
            .lists-col{
                color:#333;
                padding-left: 10px;
                .col-content{
                        display: -webkit-box;
                        display: -webkit-flex;
                        display: -ms-flexbox;
                        display: flex;
                        position: relative;
                    .lists-col-l{
                        padding: 6px 0;
                        font-size: 17px;
                        -webkit-box-flex: 1;
                        -webkit-flex: 1 1 auto;
                        -ms-flex: 1 1 auto;
                        flex: 1 1 auto;
                        text-align:left;
                        .lists-col-l-top{
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            word-break: normal;
                        }
                        .lists-col-l-bottom{
                            font-size: 12px;
                            color: #888;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            word-break: normal;
                            img{
                                background: url(//s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28…=) no-repeat;
                                background-size: 166px 97px;
                                display: inline-block;
                                width: 12px;
                                height: 8px;
                                margin-right: 4px;
                            }
                        }
                    }
                    .lists-col-r{
                        display: -webkit-box;
                        display: -webkit-flex;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-align: center;
                        -webkit-align-items: center;
                        -ms-flex-align: center;
                        align-items: center;
                        padding: 0 10px;
                        .lists-col-r-sprt{
                            background: url(//s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28…=) no-repeat;
                            background-size: 166px 97px;
                            display: inline-block;
                            width: 22px;
                            height: 22px;
                            background-position: -24px 0;
                        }
                    }
                }
            }
        }
    }
</style>