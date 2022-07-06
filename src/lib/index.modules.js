import { formGlobalFieldsKey } from './providers'
export { default as Form } from './form'
export { default as FormItem } from './form-item'
export { default as FormInput } from './form-input'
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
