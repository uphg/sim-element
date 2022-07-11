import useInput from './use-input'

export default {
  name: 'SInput',
  props: {
    value: {
      type: [String, Number, Array, Boolean, Date],
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    hue: {
      type: String,
      default: 'default'
    },
    options: [Array, Object],
    pickerOptions: [Object],
    // placeholder: String,
    exclude: [RegExp, String, Number]
  },
  setup(props, context) {
    return useInput(props, context, { onKeyup(event) {
      if (event.keyCode !== 13) return
      console.log('执行回车') 
    } })
  }
}