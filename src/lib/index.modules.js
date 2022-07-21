import { formGlobalFieldsKey } from './shared/form-providers'
export { default as Input } from './input'
export { default as Form } from './form'
export { default as FormItem } from './form-item'
export { default as Formulate } from './formulate'
export { formGlobalFieldsKey }

export function install(Vue) {
  Vue.component(Form.name, Form);
  Vue.component(FormItem.name, FormItem);
  Vue.component(Formulate.name, Formulate);
}

export function createFormGlobalField(fields) {
  return {
    [formGlobalFieldsKey]: fields
  }
}
