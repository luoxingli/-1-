<template>
    <div id="app"> 
           
      <router-view />
  </div>  
  
</template>

<script>
//   home  用户引导
//   banner广告页
//   监听

export default {
  data(){
    return{
      // showactive  控制底部栏 在引导页和广告页不出现
      showactive:false,
      
    }
  },
  methods:{
  },
  created(){

  } , 
  watch: {
    // 监听路由跳转
    "$route.path":function(newValue,oldValue) {
      // 广告页不出现底部信息栏
        if(newValue == "/banner"|| newValue == "/"){
          this.showactive = false;
        }else{
          this.showactive = true;
        }
    }
  },
}
</script>
<style lang="scss">
html, body,h1,h2,h3,h4,h5,p,img{
  padding:0px;
  margin:0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
