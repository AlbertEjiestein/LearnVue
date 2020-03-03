<template>
  <div id="app">
    <hello-vuex/>
    <!-- 查找顺序：会首先查找store中有没有fullname2，如果没有再去moduleA中查找 -->
    <p>module-getter:{{$store.getters.fullname}}</p>
    <p>module-getter2:{{$store.getters.fullname2}}</p>
    <p>module-getter3:{{$store.getters.fullname3}}</p>
    <button @click="asyncUpdateName">moduleA修改name</button>
    <p>module:{{$store.state.a.name}}</p>
    <button @click="updateName">修改模块名字</button>
    <p>App:{{$store.state.counter}}</p>
    <p>App-power:{{$store.getters.powerCounter}}</p>
    <p>App-more25stu:{{$store.getters.more25stu}}</p>
    <p>App-more25stuLength:{{$store.getters.more25stuLength}}</p>
    <p>App-moreAgeStu:{{$store.getters.moreAgeStu(30)}}</p>

    <p>修改info:{{$store.state.info}}</p>
    <button @click="updateInfo">修改属性</button>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>
  </div>
</template>

<script>
const HelloVuex = () => import('./components/HelloVuex');
import {INCREMENT} from './store/mutations-types';

export default {
  name: 'App',
  components:{
    HelloVuex
  },
  methods:{
    addition(){
      // this.$store.commit('increment')
      this.$store.commit(INCREMENT)
    },
    subtraction(){
      this.$store.commit('decrement')
    },
    addCount(count){
      // // mutation的传参方式，第一种提交方式
      // this.$store.commit('incrementCount',count);
      // 第二种提交方式
      this.$store.commit({
        type:'incrementCount',
        count
      })
    },
    addStudent(){
      const stu = {id:5,name:'yb',age:50};
      this.$store.commit('addStudent',stu);
    },
    updateInfo(){
      // this.$store.commit('updateInfo')
      // this.$store.dispatch('aUpdateInfo','延迟一秒钟')
      // 注意this.$store.dispatch('aUpdateInfo')的值是一个promise，因为提交的aUpdateInfo是异步的
      this.$store.dispatch('aUpdateInfo').then(res => {
        console.log(res)
      })
    },
    // 通过mutation修改模块中的state
    updateName(){
      this.$store.commit('updateName','豆腐')
    },
    asyncUpdateName(){
      this.$store.dispatch('aUpdateName')
    }
  }
}
</script>

<style>
</style>
