<template>
    <div>        
        <div class="banner">
            <div class="banner-wrap">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574487774494&di=f83ec20188e061d756ffd469eb7f525f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0113245889e762a8012060c8079498.gif" alt="">
            </div>
            <div @click="gohome">
                <van-circle
                v-model="currentRate"
                :rate="totalRate"
                :speed="100"
                :text="text"
                fill="#f8f8f8"
                size="40px">
                </van-circle>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data:function(){
            return{
                num:3,
                cleardata:null,
                currentRate: 0,
                totalRate:15
            }
        },
        methods:{
            gohome(){
                this.$router.push("/gg")
            }
        },
        computed:{
            text() {
            return this.currentRate.toFixed(0) + 's'
            }
        },
        created(){
            this.cleardata=setInterval(()=>{
                if(this.totalRate==0){
                    // 跳往首页 
                    this.$router.push("/gg")
                    // clearInterval(this.cleardata)
                }else{
                    this.totalRate--;
                }
            },1000)
        },
        beforeDestroy() {
            //  页面跳转先销毁在跳转
            clearInterval(this.cleardata)
        },
    }
</script>

<style lang="scss" scoped>
    .banner{
        width:100%;
        height:100%;
        overflow:hidden;
        .van-circle{
            position: absolute;
            right: 10px;
            top:15px;
            .van-circle__text{
                color:#fff;
                font-size:20px;
            }
        }
        .banner-wrap{            
            width: 100%;
            height:100%;
            img{
                width:100%;
                height:100%;
            }
        }
    }
</style>