<template>
    <div>
        <van-tabs v-model="active" animated>
            <van-tab v-for="(item, i) in lists" :title="item.name" :key="i">
                <ycgc v-if="i==0" />
                <ycdt v-if="i==1" />
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import ycgc from "./yuncun/ycgc.vue"
import ycdt from "./yuncun/ycdt.vue"
    export default {
        data(){
            return{
                active:"",
                lists:[
                    {name:"广场"},
                    {name:"动态"},
                ]
            }
        },
        components:{
            ycgc,
            ycdt
        }
    }
</script>

<style lang="scss" scoped>

</style>