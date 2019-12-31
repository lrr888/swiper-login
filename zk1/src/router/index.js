import Vue from 'vue'
import VueRouter from 'vue-router'
// 配置路由
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/muise',
    name: 'muise',
    component: () => import(/* webpackChunkName: "muise" */ '../views/Muise.vue')
  },
  {
    path: '/man',
    name: 'man',
    component: () => import(/* webpackChunkName: "man" */ '../views/Man.vue')
  },
  {
    path: '/song',
    name: 'song',
    component: () => import(/* webpackChunkName: "song" */ '../views/Song.vue')
  },
  {
    path: '/ji',
    name: 'ji',
    component: () => import(/* webpackChunkName: "ji" */ '../views/Ji.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
