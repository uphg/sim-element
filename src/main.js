import 'element-ui/lib/theme-chalk/index.css';
import 'github-markdown-css'
import './styles/index.scss'
import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import Code from './components/s-code.vue'
import Demo from './components/s-demo.vue'
import Block from './components/s-block.vue'
import { Form, FormItem, createFormGlobalField, Input, Formulate } from './lib'
import { globalFields } from './config'
import router from './router'

Vue.use(VueRouter)

Vue.component('s-demo', Demo)
Vue.component('s-code', Code)
Vue.component('s-block', Block)

Vue.component('s-input', Input)
Vue.component('s-form', Form)
Vue.component('s-form-item', FormItem)
Vue.component('s-formulate', Formulate)

new Vue({
  provide: createFormGlobalField(globalFields),
  router,
  render: h => h(App),
}).$mount('#app')