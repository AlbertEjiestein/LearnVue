<template>
  <div id="app">
    <!-- <router-link to='/home' tag='button' replace active-class='active'>首页</router-link>
    <router-link to='/about' tag='button' replace active-class='active'>关于</router-link> -->
    <!-- <router-link to='/home' tag='button' replace>首页</router-link>
    <router-link to='/about' tag='button' replace>关于</router-link> -->
    <!-- <button @click='linkToHome'>首页</button>
    <button @click='linkToAbout'>关于</button> -->
    <router-link to='/home'>首页</router-link>
    <router-link to='/about'>关于</router-link>
    <!-- <router-link :to="'/user/'+userId">用户</router-link>
    <router-link :to="{path:'/profile',query:{name:'yaj',age:23}}">档案</router-link> -->
    <button @click='clickUser'>用户</button>
    <button @click='clickProfile'>档案</button>
    <!-- 占位 -->
    <keep-alive exclude="About">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId:'xiaohuang'
    }
  },
  methods:{
    linkToHome(){
      this.$router.push('/home');
      console.log('linkToHome')
    },
    linkToAbout(){
      this.$router.push('/about');
      console.log('linkToAbout')
    },
    clickUser(){
      this.$router.push('/user/'+this.userId)
    },
    clickProfile(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'小黄',
          age:24
        }
      })
    }
  }
}
</script>

<style>
/* .router-link-active{
  color: red
} */
.active{
  color: red
}
</style>
