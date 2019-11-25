<template>
  <div>
    <van-tabs v-model="active" animated>
        <van-tab v-for="(item,i) in list" :key="i" :title="item.name">
            <tab1 v-if="i==1" />
            <tab3 v-if="i==3" />
            <tab2 v-if="i==0" />
            <yuncun v-if="i==2" />
        </van-tab>
      </van-tabs> 
  </div>
</template>

<script>
import tab1 from "@/components/tab/tab1.vue"
import tab2 from "@/components/tab/tab2.vue"
import tab3 from "@/components/tab/tab3.vue"
import yuncun from "@/components/tab/yuncun.vue"

export default {
  data(){
    return{
      active:'',
      list:[
        {name:"我的"},
        {name:"发现"},
        {name:"云村"},
        {name:"搜索 "},
      ]
    }
  },
  components:{
    tab1,
    tab2,
    tab3,
    yuncun,
  }, 
}
</script>


<style lang="scss" scoped>
html, body,h1,h2,h3,h4,h5,p,span,img{
  padding:0px;
  margin:0px;
}
  .van-tabs__wrap.van-tabs__wrap--scrollable{
    position:fixed;
    top:0px;
  }
  .header-nav{
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 84px;
    -webkit-transition: padding-bottom .3s;
    transition: padding-bottom .3s;
    .header-wrap{
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      padding: 0 10px;
      width: 100%;
      height: 84px;
      background-color: #d43c33;
      box-sizing: border-box;
      .nav-left{
        position: relative;
        width: 142px;
        height: 25px;
        div{
          position: absolute;
          left: 0;
          top: 0;
          width: 142px;
          height: 25px;
          h1{
            height:25px;
            font-size:22px;
            line-height: 25px;
            text-align: center;
            padding-left:5px;
            float: left;
            display:block;
            color:#fff;
          }
          .nav-logo{
            display:block;
            width: 25px;
            height:25px;
            background-color:#d43c33;
            border-radius:50%;
            float: left;
            overflow:hidden;
            position:relative;
            img{
              display:block;
              border-radius:50%;
              position:absolute;
              left:-2px;
              width: 120%;
              height:100%;
            }
          }
        }
      }
      .van-button--info{
        width: 100px;
        height: 42px;
        color:#d43c33;
        background-color:#fff;
        border:1px solid #d43c33;
      
      }
    }
  }
</style>