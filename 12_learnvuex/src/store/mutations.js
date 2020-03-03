import {INCREMENT} from './mutations-types';

export default {
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
}