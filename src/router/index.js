import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('src/test/index.vue')
  },
  {
    path: '/zh',
    component: () => import('src/docs/zh.md')
  },
  {
    path: '/en',
    component: () => import('src/docs/en.md')
  }
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router