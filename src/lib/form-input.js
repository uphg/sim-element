import useFormInput from './use-form-input'

export default {
  name: 'SFormBox',
  props: {
    value: {
      type: [String, Number, Array, Boolean, Date],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    options: [Array, Object],
    pickerOptions: [Object],
    placeholder: String,
    exclude: [RegExp, String, Number]
  },
  setup(props, context) {
    return useFormInput(props, context, { onKeyup(event) {
      if (event.keyCode !== 13) return
      console.log('执行回车') 
    } })
  }
}