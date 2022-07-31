import { formGlobalFieldsKey } from './shared/form-providers'

import Input  from './input/index'
import Form  from './form'
import FormItem  from './form-item'
import Formulate  from './formulate'
import Table  from './table'

function install(Vue) {
  Vue.use(Input)
  Vue.use(Form)
  Vue.use(FormItem)
  Vue.use(Formulate)
  Vue.use(Table)
}

function createFormGlobalField(fields) {
  return {
    [formGlobalFieldsKey]: fields
  }
}

export {
  install,
  Input,
  Form,
  FormItem,
  Formulate,
  Table,
  formGlobalFieldsKey,
  createFormGlobalField
}
