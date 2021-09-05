import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import stateview from '../views/state.vue'
import getview from '../views/getter.vue'
import actionView from  '../views/action.vue'
import buyCarview from '../views/buycar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
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
    path:"/state",
    component:stateview
  },
  {
    path:"/getter",
    component:getview
  },{
    path:"/action",
    component:actionView
  },{
    path:'/buycar',
    component:buyCarview
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
