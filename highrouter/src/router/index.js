import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Me from '../views/Me.vue'
import list from '../views/list.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta:{
      needlogin:true,
      isAuth:true,
      content:"这是首页"
    },
    component: Home,
    beforeEnter: (to, from, next) => {
      console.log("首页独享的路由进入函数")
      next()
    }
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/me/:id',
    name: 'me',
    props:true,
    component: ()=>{
      component: () => import(/* webpackChunkName: "about" */ '../views/Me.vue')
    }
  },

  {
    path:"/list",
    component:list,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    console.log('------------------')
    if(to.path=='/list'){
      console.log(savedPosition)
      //let obj = {x:0,y:savedPosition.y/2};
      //console.log(obj)
      //return  savedPosition
      setTimeout(()=>{
        window.scrollTo(0,savedPosition.y)
      },2000)
      // return savedPosition
    }
    // return 期望滚动到哪个的位置
  }
})

router.beforeEach((to,from,next)=>{
  console.log('前置路由守卫函数0')
  next()
})

router.beforeEach((to,from,next)=>{
  console.log('前置路由守卫函数1')
  console.log(to)//前往页面的route对象
  console.log(from)//从某个页面出发的route对象
  if(to.path=='/about'){
    // console.log('此用户没有访问about的权限，将跳转至/me页面')
    // next('/me')
    // 触发错误的操作
    let error = new Error("此用户没有访问about的权限")
    next(error)
  }else{
    next()
  }
})

router.beforeResolve((to,from,next)=>{
  next()
  console.log('路由解析成功的函数')
})

router.afterEach((to,from)=>{
  console.log("路由后置函数")
})

router.onError(function(error){
  console.log(error)
})

export default router
