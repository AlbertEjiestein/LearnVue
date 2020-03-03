export default {
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
}