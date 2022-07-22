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
  // Vue.component(Form.name, Form);
  // Vue.component(FormItem.name, FormItem);
  // Vue.component(Formulate.name, Formulate);
  // Vue.component(Table.name, Table);
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
