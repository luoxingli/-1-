<template>
    <div>
          <!-- Swiper -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img class="animated fadeIn" v-show="flag" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1235013410,3286070613&fm=26&gp=0.jpg" alt="">
                    <h3 class="animated fadeIn delay-1s"  v-show="flag">古风专场</h3>
                </div>
                <div class="swiper-slide">
                    <img class="animated fadeIn" v-show="flag" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574503596987&di=3053714aa6d7bdb29b3b0c3273aeae24&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0161d65b9a2acda8012099c8f43ccc.png%401280w_1l_2o_100sh.png" alt="">
                    <h2 class="animated fadeIn delay-1s" v-show="flag">新<br>碟<br>上<br>架<br>
                    </h2>
                </div>
                <div class="swiper-slide">
                    <img class="animated flash" v-show="flag" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3000557335,2351291919&fm=15&gp=0.jpg" alt="">
                    <button @click="go" class="animated flash delay-1s" v-show="flag">立即体验</button>
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
    export default {
        data() {
            return {
                flag:true
            }
        },
        methods: {
            go() {
                localStorage.one = true;
                this.$router.push("/gg");
            }
        },
        created() {
            // 判断是否执行引导页
            if(localStorage.one) {
                this.$router.push("/banner");
            }else{
                localStorage.one = true;
            }
        },
        mounted() {
            let _this = this;
            new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                },
                on: {
                    slideChangeTransitionStart: function(){
                        _this.flag = false;
                    },
                    slideChangeTransitionEnd: function(){
                        _this.flag = true;
                        // alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
                    },
                },
            });
        },      
    }
</script>

<style lang="scss" scoped>
   .swiper-container {
       position:fixed;
       top:0px;
       left: 0px;
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      text-align: center;
      display: block;
      position:relative;
        img{
        width:100%;
        height: 100%;
        }
        h2{
            position:absolute;
            color:#888;
            top:350px;            
            left: 8%;
        }
        h3{
           position:absolute;
            color:rgb(22, 59, 59);
            font-size:25px;
            bottom:70px;            
            right: 14%; 
        }
    }
    button{
        width: 200px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        border: 1px solid #C8EFD4;
        background: rgb(247, 202, 80);
        font-size:25px;
        color:rgb(77, 62, 13);
        position: absolute;
        left:0px;
        right: 0px;
        bottom: 30px;
        margin:0 auto;
    }
</style>
