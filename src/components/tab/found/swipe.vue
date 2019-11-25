<template>
    <div>
        <div @click="go">
            <van-swipe :autoplay="3000" indicator-color="darkred">
                <van-swipe-item v-for="(item,i) in list" :key="i">
                    <img :src="item.path" >
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                list:this.$store.state.swipe.list
            }
        },
        methods:{
            go(){
                this.$router.push("/zhuanji")
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>