<template>
    <div>
        <div class="search-box">
            <div class="mysearch">
                <form action="#" class="my-input" method="get">
                    <div class="inputcover">
                        <span class="search-svg"></span>
                        <input type="search" :placeholder="placeholder" class="input" autocomplete="off" v-model="keycode">
                        <!-- <label class="holder">{{placeholder}}</label> -->
                    </div>
                </form>
                <div class="hot-list-wrap">
                    <section class="hot-list">
                        <h3 class="title">热门搜索</h3>
                        <ul class="list-ul" v-for="(item,i) in search(keycode)" :key="i">
                            <li><a class="link" hret="javascript:;">{{item.name}}</a></li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                placeholder:"搜索歌曲、歌手、专辑",
                lists:[
                    {name:"love poem",},
                    {name:"尤长靖连名带姓",},
                    {name:"Taylor Swift新歌",},
                    {name:"love poem",},
                    {name:"尤长靖连名带姓",},
                    {name:"Taylor Swift新歌",},
                    {name:"love poem",},
                    {name:"尤长靖连名带姓",},
                    {name:"Taylor Swift新歌",},
                ],
                keycode:""
            }
        },
        methods:{
            search(keycode){
                var newlist = [];
                // forEach() find() findIndex() filter() map()
                this.lists.forEach(item=>{
                    if(item.name.indexOf(keycode)!= -1){
                        newlist.push(item);
                    }
                })
                return newlist;
            }
        }
    }
</script>

<style lang="scss" scoped>
    html,body,h1,h2,h3,h4,h5,p,img,ul,ol{
        padding: 0;
        margin: 0;
    }
    ul{
        list-style:none;
    }
    label{
        cursor: default;
    }
    .mysearch{
        width: 100%;
        height:100%;
        background: #fbfcfd;
        .my-input{
            padding: 15px 10px;
            position: relative;
            .inputcover{
                position: relative;
                width: 100%;
                height: 30px;
                padding: 0 30px;
                box-sizing: border-box;
                background: #ebecec;
                border-radius: 30px;
                .search-svg{
                    display: inline-block;
                    vertical-align: middle;
                    background-position: 0 0;
                    background-size: contain;
                    background-repeat: no-repeat;
                    width: 13px;
                    height: 13px;
                    background-image: url(./sousuo.png);
                    position: absolute;
                    left: 0;
                    top: 9px;
                    margin: 0 8px;
                    vertical-align: middle;

                    
                }
                .input{
                    width: 100%;
                    height: 30px;
                    line-height: 18px;
                    background: transparent;
                    font-size: 14px;
                    color: #333;
                    outline: none;
                    -webkit-appearance: none;
                    border-radius: 0;
                    border: 0;
                    background-color: transparent;
                }
                .holder{
                    position: absolute;
                    left: 30px;
                    top: 5px;
                    font-size: 14px;
                    color: #c9c9c9;
                    background: transparent;
                    pointer-events: none;
                }
            }
        }
    }
    .hot-list-wrap{
        .hot-list{
            padding: 15px 10px 0;
            .title{
                font-size: 12px;
                line-height: 12px;
                color: #666;
            }
            .list-ul{
                margin: 10px 0 7px;
                li{
                    float:left;
                    height: 32px;
                    margin-right: 8px;
                    margin-bottom: 8px;
                    border:1px solid #ccc;
                    border-radius: 32px 32px;
                    padding: 0 14px;
                    font-size: 14px;
                    line-height: 32px;
                    color: #333;
                    a{
                        color: #333;
                    }
                }
                
            }
        }
    }
</style>