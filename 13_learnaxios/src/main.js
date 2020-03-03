import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// // axios返回promise对象
// axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }).then(res => {
//   console.log(res)
// })

// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   // 针对get的参数拼接
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res => {
//   console.log(res)
// })


// // 3.全局配置
// axios.defaults.baseURL = 'http://123.207.32.32:8000';
// axios.defaults.timeout = 5000

// // 2.axios发送并发请求
// axios.all([axios({
//   url:'/home/multidata'
// }),axios({
//   url:'/home/data',
//   // 针对get的参数拼接
//   params:{
//     type:'pop',
//     page:1
//   }
// })])
// .then(axios.spread((res1,res2) => {
//   console.log(res1);
//   console.log(res2);
// }))
// // .then(results => {
// //   console.log(results)
// // })

// // 4.axios实例
// const instance1 = axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// })

// instance1({
//   url:'/home/multidata'
// }).then(res => {
//   console.log(res)
// })

// const instance2 = axios.create({
//   baseURL:'http://123.207.33.33:8000',
//   timeout:4000,
//   headers:{}
// })

// 5.封装request模块
// 方法一
// import {request} from './network/request';

// request({
//   url:'/home/multidata'
// },res => {
//   console.log(res)
// },err => {
//   console.log(err)
// })

// // 方法二
// import {request} from './network/request';

// request({
//   baseConfig:{
//     url:'/home/multidata'
//   },
//   success:res => {
//     console.log(res)
//   },
//   failure:err => {
//     console.log(err)
//   }
// })

// // 方法三
// import {request} from './network/request';

// request({
//   url:'/home/multidata'
// })
// .then(res => 
//   console.log(res)
// )
// .catch(err => 
//   console.log(err)
// )

// 方法三
import {request} from './network/request';

request({
  url:'/home/multidata'
})
.then(res => 
  console.log(res)
)
.catch(err => 
  console.log(err)
)
