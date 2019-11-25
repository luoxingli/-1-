<template>
    <div>
        <div class="myplay">
            <div class="myp-box" v-for="(item,i) in lists" :key="i" @click="tip">
                <div class="myp-l">
                    <van-icon :name="item.tabname" />
                </div>
                <div class="myp-r">
                    {{item.tag}}<span>({{item.number}})</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                lists:this.$store.state.myplay.lists
            }
        },
        methods:{
            tip(){
                this.$toast("此功能尚未开放");
            }
        }
    }
</script>

<style lang="scss" scoped>
     .myplay{
        width: 100%;
        overflow: hidden;
        padding:10px 0px;
        .myp-box{
            height:30px;
            padding:5px 0px;
            display: flex;
            .myp-l{
                flex:1;
                font-size:20px;
                text-align: center;
                line-height: 30px;
            }
            .myp-r{
                flex:4;
                text-align: left;
                line-height: 29px;
                position: relative;
                span{
                    padding:0px 5px;
                    font-size:12px;
                    color:#ccc;
                }
            }
            .myp-r:after{
                display: block;
                content:"";
                width: 80%;
                height:0px;
                border-bottom:1px solid #ccc;
                position: absolute;
                bottom:-9px;
            }
        }
    }
</style>