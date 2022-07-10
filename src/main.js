import Vue from 'vue'
import App from './App.vue'
import { Form, FormItem, createFormGlobalField, FormInput } from './lib'
import Demo from './components/demo.vue'
import { globalFields } from './config'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.component('t-form', Form)
Vue.component('t-form-item', FormItem)
Vue.component('t-form-input', FormInput)
Vue.component('Demo', Demo)

new Vue({
  provide: createFormGlobalField(globalFields),
  router,
  render: h => h(App),
}).$mount('#app')
