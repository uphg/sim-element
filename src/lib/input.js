import useInput from './use-input'

export default {
  name: 'SInput',
  props: {
    value: {
      type: [String, Number, Array, Boolean, Date],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    text: String,
    disabled: Boolean,
    clearable: Boolean,
    showPassword: Boolean,
    suffixIcon: String,
    prefixIcon: String,
    options: [Array, Object],
    pickerOptions: [Object],
    hue: {
      type: String,
      default: 'default'
    },
    exclude: [RegExp, String, Number]
  },
  setup(props, context) {
    return useInput(props, context, {
      onKeyup(event) {
        if (event.keyCode !== 13) return
        console.log('执行回车')
      }
    })
  }
}