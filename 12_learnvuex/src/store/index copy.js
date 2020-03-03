import Vue from 'vue';
import Vuex from 'vuex';
import {INCREMENT} from './mutations-types';

// 1.安装插件
Vue.use(Vuex);

// 新建对象
const moduleA = {
  state:{
    name:'大个'
  },
  mutations:{
    updateName(state,payload){
      state.name = payload
    }
  },
  getters:{
    fullname(state){
      return state.name + 'love';
    },
    fullname2(state,getters){
      return getters.fullname + '豆腐';
    },
    // 子module中多了一个参数rootState，代表store的state
    fullname3(state,getters,rootState){
      return getters.fullname2 + rootState.counter + '倍';
    }
  },
  actions:{
    // context指向本module
    aUpdateName(context){
      setTimeout(()=>{
        context.commit('updateName','姚爱杰')
      },1000)
    }
  }
}

// 2.新建vuex实例
const store = new Vuex.Store({
  state:{
    counter:1000,
    stus:[
      {id:0,name:'yaj',age:20},
      {id:1,name:'yja',age:25},
      {id:2,name:'ayj',age:30},
      {id:3,name:'ajy',age:35}
    ],
    info:{
      name:'kebo',
      age:40,
      height:1.98
    }
  },
  mutations:{
    // 方法
    // increment(state){
    //   state.counter++
    // },
    [INCREMENT](state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    // mutation的传参方式
    // incrementCount(state,count){
    //   state.counter += count;
    // },
    incrementCount(state,payload){
      state.counter += payload.count;
    },
    addStudent(state,stu){
      state.stus.push(stu);
    },
    updateInfo(state){
      state.info.name = 'yaj'
      // state.info['address'] = '洛杉矶'
      // Vue.set(state.info,'address','洛杉矶')
      // Vue.delete(state.info,'age')
    }
  },
  getters:{
    // 类似计算属性的getter
    powerCounter(state){
      return state.counter * state.counter
    },
    more25stu(state){
      return state.stus.filter(s => s.age > 25)
    },
    // 第二个参数永远是getters
    more25stuLength(state,getters){
      return getters.more25stu.length;
    },
    // 如果age是动态的，如何传参
    moreAgeStu(state){
      return function(age){
        return state.stus.filter(s => s.age > age);
      }
    }
  },
  actions:{
    // 方法一
    // aUpdateInfo(context,payload){
    //   setTimeout(() => {
    //     // 修改info必须通过mutation
    //     context.commit('updateInfo');
    //     console.log(payload)
    //   },1000)
    // }
    // 方法二  promise封装,返回值是在提交aUpdateInfo的地方
    // context相当于store对象
    aUpdateInfo(context,payload){
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          // 修改info必须通过mutation
          context.commit('updateInfo');
          resolve('提交成功');
        },1000)
      })
    }
  },
  modules:{
    a:moduleA
  }
})

export default store