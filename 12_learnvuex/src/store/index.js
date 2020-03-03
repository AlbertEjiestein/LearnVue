import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';
import moduleA from './modules/moduleA';

// 1.安装插件
Vue.use(Vuex);

const state = {
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
}

// 2.新建vuex实例
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules:{
    a:moduleA
  }
})

export default store
