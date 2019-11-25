<template>
    <div>
        <!-- 个人中心 -->
        <div class="my-home">
            <div class="home-left">
                <span class="home-icon">
                    <van-icon name="contact" />
                    <!-- <img src="./sousuo.png"> -->
                    
                </span>
            </div>
            <div class="my-msg">
                <span class="my-name">{{user}}</span>
                <span>个人中心</span>
            </div>
            <div class="my-right">
                <div class="my-r-click" @click="click" v-show="infoShow">
                    {{userselect}}
                    <van-overlay :show="myshow" @click="show = true">
                        <div class="wrapper" @click.stop>
                            <div class="block">
                                <van-cell-group>
                                    <van-field
                                        v-model="username"
                                        required
                                        clearable
                                        label="用户名"
                                        right-icon="question-o"
                                        placeholder="手机、邮箱、QQ、微信"
                                        @click-right-icon="$toast('question')"
                                    />

                                    <van-field
                                        v-model="password"
                                        type="password"
                                        label="密码"
                                        placeholder="请输入密码"
                                        required
                                    />
                                </van-cell-group>
                                <van-button type="info" @click="clickInfo">登录</van-button>
                            </div>
                        </div>                        
                    </van-overlay>
                </div>
                <div class="my-r-click" @click.stop="clickOut" v-show="!infoShow">
                    {{userselect}}
                    <van-overlay :show="myshow" @click="show = true">
                        <div class="wrapper" @click.stop>
                            <div class="block">
                                <van-cell-group>
                                    <van-field
                                        v-model="username"
                                        required
                                        clearable
                                        label="用户名"
                                        right-icon="question-o"
                                        placeholder="手机、邮箱、QQ、微信"
                                        @click-right-icon="$toast('question')"
                                    />

                                    <van-field
                                        v-model="password"
                                        type="password"
                                        label="密码"
                                        placeholder="请输入密码"
                                        required
                                    />
                                </van-cell-group>
                                <van-button type="info">登录</van-button>
                            </div>
                        </div>                        
                    </van-overlay>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{                
                myshow:this.$store.state.myhome.myshow,
                username:this.$store.state.myhome.username,
                password:this.$store.state.myhome.password,
                nameistrue:this.$store.state.myhome.nameistrue,
                passistrue:this.$store.state.myhome.passistrue,
                user:this.$store.state.myhome.user,
                userselect:this.$store.state.myhome.userselect,
                infoShow:this.$store.state.myhome.infoShow,
                info:this.$store.state.myhome.info
            }
        },
        methods:{
            // 点击跳出登录遮罩层
            click(){
                this.myshow=true;
                this.$store.commit("click",this.myshow)
            },
            // 登录
            clickInfo(){
                if(this.username.length>0){
                    if(this.password.length>0){
                        this.myshow=false
                        this.user=this.username;
                        this.userselect="退出";
                        this.infoShow=false;
                        this.username=this.password="";
                    }else{
                        // alert("请输入账号或密码");
                        alert("登录失败!");
                        this.userselect="点击登录";
                        this.infoShow=false;
                        this.myshow=false;
                    }
                }               
                else{
                    alert("登录失败!");
                    this.userselect="点击登录";
                    this.infoShow=false;
                    this.myshow=false
                }
                this.$store.commit("clickInfo",{username:this.username,password:this.password})
            
            },
            clickOut(){
                this.userselect="点击登录";
                this.infoShow=true;
                this.user="未登录";
                // window.console.log(this.user,this.infoShow)
                this.$store.commit("clickOut",{userselect:this.userselect,infoShow:this.infoShow,user:this.user})
            }

        },
    }
</script>

<style lang="scss" scoped>
    // my-home
    .my-home{
        width: 100%;
        height: 60px;
        margin: 15px auto 0px auto;
        border-bottom: 1px solid #f8f8f8;
        .home-left{
            width: 25%;
            float:left;
            height: 60px;
            line-height: 60px;
            overflow: hidden;
            .home-icon{
                display: block;
                height: 100%;
                width: 70%;
                margin:0 auto;
                border-radius:50%; 
                text-align: center;               
                .van-icon-contact{
                    font-size:35px;
                    padding: 7px 0px;
                }
                img{
                    width: 100%;
                    height: 100%;
                    border-radius:50%;
                }
            }
        }
        .my-msg{
            width:50%;
            height: 60px;
            float:left;
            text-align: left;
            span{
                font-size:16px;
                display: block;
            }
            .my-name{
                font-size:18px;
            }
        }
        .my-right{
            width: 23%;
            height: 100%;
            float:left;
            .my-r-click{
                width: 80%;
                height: 25px;
                background-color: darkred;
                color:#fff;
                border-radius:15px;
                line-height: 25px;
                text-align: center;
                .wrapper {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    .block {
                        width: 70%;
                        height: 70%;
                        background-color: #fff;
                    }
                }
            }
        }
    }
</style>