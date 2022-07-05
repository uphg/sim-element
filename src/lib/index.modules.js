export { default as Form } from './form'
export { default as FormItem } from './form-item'
export { formGlobalFieldsKey } from './providers'

export function install(Vue) {
  Vue.component(Form.name, Form);
  Vue.component(FormItem.name, FormItem);
}

export function createGlobalField(fields) {
  return {
    [formGlobalFieldsKey]: fields
  }
}
