export default {
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
}