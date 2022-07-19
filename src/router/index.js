import VueRouter from "vue-router";
import Test from '../pages/test/index.vue'

const createTestRoutes = () => {
  const result = []
  const pages = ['button', 'input', 'number', 'select', 'cascader', 'date', 'datetime', 'radio', 'checkbox', 'switch', 'upload', 'form', 'formulate']
  pages.forEach((name) => {
    result.push({
      path: name,
      component: () => import(`../pages/test/${name}.vue`)
    })
  })

  return result
}

const routes = [
  // {
  //   path: '/',
  //   component: () => import('src/test/index.vue')
  // },
  {
    path: '/zh',
    component: () => import(`../pages/docs/zh.md`)
  },
  {
    path: '/en',
    component: () => import(`../pages/docs/en.md`)
  },
  {
    path: '/test',
    component: Test,
    children: createTestRoutes()
  }
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router