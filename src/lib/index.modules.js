import { formGlobalFieldsKey } from './shared/form-providers'
export { default as Form } from './form'
export { default as FormItem } from './form-item'
export { default as Input } from './input'
export { formGlobalFieldsKey }

export function install(Vue) {
  Vue.component(Form.name, Form);
  Vue.component(FormItem.name, FormItem);
}

export function createFormGlobalField(fields) {
  return {
    [formGlobalFieldsKey]: fields
  }
}
