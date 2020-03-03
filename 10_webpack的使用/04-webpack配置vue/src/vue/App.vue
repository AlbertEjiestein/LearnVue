<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{name}}</h2>
    <Cpn/>
  </div>
</template>

<script>
import Cpn from './Cpn.vue'

export default {
  name:'App',
  data(){
    return {
      message:'hello webpack',
      name:'yaj'
    }
  },
  methods:{
    btnClick(){
      console.log('hello')
    }
  },
  components:{
    Cpn
  } 
}
</script>

<style>
.title{
  color: black;
}
</style>