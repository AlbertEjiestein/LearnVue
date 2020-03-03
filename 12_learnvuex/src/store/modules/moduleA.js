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

export default moduleA