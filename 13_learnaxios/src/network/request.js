import axios from 'axios';

// 方法四:自己封装的promise没有必要
export function request(config){
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })

  // axios请求拦截器
  instance.interceptors.request.use(config => {
    // console.log(config);
    return config;
  },err => {
    config.log(err);
  })

   // axios响应拦截器
  instance.interceptors.response.use(res => {
    console.log(res);
    return res;
  },err => {
    config.log(err);
  })

  // instance本身返回一个promise
  return instance(config)
}


// // 方法三：promise封装
// export function request(config){
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })

//   return new Promise((resolve,reject) => {
//     instance(config)
//     .then(res => {
//       resolve(res);
//     })
//     .catch(err => {
//       reject(err);
//     })
//   })
// }



// // 方法二
// export function request(config){
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })

//   instance(config.baseConfig)
//   .then(res => {
//     config.success(res);
//   })
//   .catch(err => {
//     config.failure(err);
//   })
// }

// // 方法一：回调函数
// export function request(config,success,failure){
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })

//   instance(config)
//   .then(res => {
//     success(res);
//   })
//   .catch(err => {
//     failure(err);
//   })
// }
