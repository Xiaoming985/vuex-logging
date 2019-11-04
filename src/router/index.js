import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/",
    name: "index",
    component: () => import("../views/Index.vue")
  },
  {
    path: "/userCenter",
    name: "userCenter",
    component: () => import("../views/UserCenter.vue")
  },
  {
    path: "/course/:id",
    name: "course",
    component: () => import("../views/Course.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
