<template>
  <div>
    <h2>我是用户，小黄</h2>
    <h2>你好，小黄</h2>
    <!-- 当匹配到一个路由时，使用$route.params可以获取该组件的参数 -->
    <!-- <h2>{{$route.params.userId}}</h2> -->
    <h2>{{userId}}</h2>
  </div>
</template>

<script>
export default {
  name:'User',
  computed:{
    userId(){
      return this.$route.params.userId
    }
  }, 
  created(){
    console.log('created')
  },
  destroyed(){
    console.log('destroyed')
  }
}
</script>

<style>

</style>