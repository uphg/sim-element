import VueRouter from 'vue-router'
import Home from 'src/pages/Home.vue'
import Form from 'src/docs/form.md'

const routes = [
  { path: '/', component: Home },
  { path: '/form', component: Form }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router