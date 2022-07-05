import Vue from 'vue'
import App from './App.vue'
import { Form, FormItem, createGlobalField } from './lib'
import { globalFields } from './config'

Vue.component('t-form', Form)
Vue.component('t-form-item', FormItem)

new Vue({
  provide: createGlobalField(globalFields),
  render: h => h(App)
}).$mount('#app')
