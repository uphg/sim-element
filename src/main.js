import Vue from 'vue'
import App from './App.vue'
import { Form, FormItem, createFormGlobalField } from './lib'
import { globalFields } from './config'
import 'element-ui/lib/theme-chalk/index.css';

Vue.component('t-form', Form)
Vue.component('t-form-item', FormItem)

new Vue({
  provide: createFormGlobalField(globalFields),
  render: h => h(App)
}).$mount('#app')
