import 'element-ui/lib/theme-chalk/index.css';
import 'github-markdown-css'
import './styles/index.scss'
import Vue from 'vue'
import App from './App.vue'
import Code from './components/s-code.vue'
import Demo from './components/s-demo.vue'
import { Form, FormItem, createFormGlobalField, Input } from './lib'
import { globalFields } from './config'

Vue.component('s-demo', Demo)
Vue.component('s-code', Code)

Vue.component('s-input', Input)
Vue.component('s-form', Form)
Vue.component('s-form-item', FormItem)

new Vue({
  provide: createFormGlobalField(globalFields),
  render: h => h(App),
}).$mount('#app')
