import VueRouter from 'vue-router'
import Vue from 'vue'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

// 懒加载
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

// 安装插件
Vue.use(VueRouter);

const routes = [
  // 路由默认路径
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
    meta:{
      title:'首页'
    },
    children:[
      // {
      //   path:'',
      //   redirect:'news'
      // },
      {
        path:'news',
        component:HomeNews
      },
      {
        path:'message',
        component:HomeMessage
      }
    ]
  },
  {
    path:'/about',
    component:About,
    meta:{
      title:'关于'
    }
  },
  {
    path:'/user/:userId',
    component:User,
    meta:{
      title:'用户'
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      title:'档案'
    }
  }
]

// 创建vuetouter对象
const router = new VueRouter({
  routes,
  mode:'history',
  // linkActiveClass作用是将路由的控件类重命名为active
  linkActiveClass:'active'
})

// // 前置首位(guard)
// router.beforeEach((to,from,next) => {
//   // 直接用to.meta.title会获取不到，因为最开始默认的路由是一个嵌套，子路由没有title
//   // 从from路由跳转到to路由
//   // meta：元数据(描述数据的数据)
//   document.title = to.matched[0].meta.title;
//   console.log(to)
//   next()
// })

// // 后置钩子(hook)
// router.afterEach((to,from) => 
//   console.log('----')
// )

export default router;