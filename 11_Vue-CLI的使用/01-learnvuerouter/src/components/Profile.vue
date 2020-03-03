<template>
  <div>
    <h2>我是档案</h2>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
  </div>
</template>

<script>
export default {
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