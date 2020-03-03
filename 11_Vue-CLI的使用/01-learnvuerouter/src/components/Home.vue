<template>
  <div>
    <h2>我是home，大个</h2>
    <h2>你呢?</h2>
    <router-link to='/home/news'>新闻</router-link>
    <router-link to='/home/message'>消息</router-link>
    <!-- <router-view></router-view> -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Home",
  data () {
    return {
      path:'/home/news'
    };
  },
  // 取消了在index.js中设置的home默认重定向之后，该怎么达到相同效果并且可以离开home该组件不被频繁销毁和创建？
  // 收钱是设置keep-alive标签
  // 这两个函数，只有在组件被保持了状态使用了keep-alive时，才是有效的，注意keep-alive必须是父组件的即App.vue的
  activated(){
    // console.log('activated')
    this.$router.push(this.path);
  },
  // deactivated(){
  //   console.log('deactivated')
  // },
  beforeRouteLeave(to,from,next){
    // console.log(this.$route.path)
    this.path = this.$route.path;
    next()
  }
}
</script>
<style>
</style>