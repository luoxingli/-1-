<template>
    <div>
        <!-- 创建歌单 -->
        <div class="create-wrap">
            <div class="create">
                <div class="create-top">
                    <div class="ct-left">
                        <div class="left-icon-contrl" @click="contrlGD">
                            <van-icon name="arrow-down" />
                        </div>
                        <h3>创建的歌单</h3>
                        <span>(1)</span>
                    </div>
                    <div class="ct-right">
                        <!--  @click="create" -->
                        <van-icon name="plus" @click="create">
                            <van-popup
                            v-model="show"
                            close-icon="close"
                            position="bottom"
                            :style="{ height: '70%' }"
                            >
                                <van-cell-group>
                                    <van-field
                                        v-model="message"
                                        rows="2"
                                        autosize
                                        label="新建"
                                        type="textarea"
                                        maxlength="15"
                                        placeholder="请输入名字..."
                                        show-word-limit
                                    />
                                </van-cell-group>
                                <!--  @click="createfaild" -->
                                 <!-- @click="createadd" -->
                                <van-button type="warning" @click.stop="createfaild">取消</van-button>
                                <van-button type="info" @click.stop="createadd">确认</van-button>
                            </van-popup>
                        </van-icon>
                        <van-icon name="ellipsis" />
                    </div>
                </div>
                <div class="create-new" v-for="(item,i) in createlist" :key="i" v-show="contrlShow">
                    <div class="create-center">
                        <div class="cc-left">
                            <div class="cc-left-icon">
                                <van-icon :name="item.ctag" />
                            </div>
                            <div class="cc-left-text">
                                <h4>{{item.cname}}</h4>
                                <span>{{item.cnumber}}首</span>
                            </div>
                        </div>                
                        <div class="cc-right">
                            <van-icon :name="item.ctag" />{{item.cmodel}}
                        </div>
                        <div class="cc-delete" @click="del(i)">
                            <van-icon name="delete" />
                        </div>
                    </div>                    
                </div>
                <div class="create-bottom">
                    截图导入歌单
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{                
                // createlist:[
                //     {cname:"我喜欢的音乐",cnumber:0,ctag:"like-o",cmodel:"心动模式"},
                // ],
                createlist:this.$store.state.createGD.createlist,
                show:this.$store.state.createGD.false,
                message:this.$store.state.createGD.message,
                contrlShow:this.$store.state.createGD.true,
            }
        },
        methods:{  
            // 控制歌单出现消失
            contrlGD(){
                this.contrlShow=!this.contrlShow;
                // window.console.log(this.$store)
                this.$store.commit("contrlGD",this.contrlShow)
            },
            del(num){
                this.createlist.splice(num,1)
                this.$store.commit("del",this.createlist)
            },
            // 创建歌单
            create(){
                this.show=true;
                this.$store.commit("create",{show:this.show})
            },
            // 确认添加
            createadd(){
                this.show=false;
                this.createlist.push({cname:this.message,cnumber:0,ctag:"like-o",cmodel:"心动模式"})
                this.message="";
                this.$store.commit("createadd",{createlist:this.createlist,show:this.show})
            },
            // 取消创建
            createfaild(){
                this.show=false;
                this.$store.commit("createfaild", {show:this.show})
            }
        }

    }
</script>

<style lang="scss" scoped>
    // create
    .create-wrap{
        width: 100%;
        background:#f8f8f8;
        overflow: hidden;
        padding-bottom: 15px;
        .create{
            padding:10px 0px;
            background:#fff;
            .create-top{
                height:30px;
                line-height: 30px;
                text-align: center;
                .ct-left{
                    padding-left:5px;
                    float:left;
                    .left-icon-contrl{
                        display:inline-block;
                    }
                    h3{
                        display:inline-block;
                        font-size:17px;
                        padding-left:5px;
                    }
                    span{
                        font-size:13px;
                        padding-left:5px;
                        color:#888;
                    }
                }
                .ct-right{
                    font-size:17px;
                    float:right;
                    padding-right:10px;
                    .van-icon-plus{
                        padding-right:10px;
                    }
                }

            }
            .create-new{
                .create-center{
                    width:100%;
                    padding: 20px 0px;
                    text-align: center;
                    .cc-left{  
                        width:60%;
                        padding-left: 10px;
                        float:left;  
                        .cc-left-icon{
                            width: 35px;
                            height: 35px;
                            line-height: 35px;
                            text-align: center;
                            color:#fff;
                            background:rgb(51,51,51);
                            border-radius:15%;
                            float:left;
                            font-size:15px;
                        }
                        .cc-left-text{
                            float:left;
                            padding-left: 10px;
                            h4{
                                font-size:15px;
                            }
                            span{
                                font-size:13px;
                                color:#888;
                            }
                        }
                    }
                    .cc-right{
                        float:left;
                        width:30%;
                        border: 1px solid #ccc;
                        border-radius:15px;
                    }
                    .cc-delete{
                        width: 10%;
                        float:left;
                    }
                }
            }
            .create-center::after{
                content:"";
                display: block;
                clear:both;
            }
            .create-bottom{
                height: 40px;
                width: 60%;
                line-height: 40px;
                text-align: center;
                border: 1px dashed #ccc;
                margin:0 auto
            }
        }
    }
</style>