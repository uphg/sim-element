import useFormInput from './use-form-input'

export default {
  name: 'SFormBox',
  props: {
    value: [String, Number, Array, Boolean, Date],
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
    return useFormInput(props, context)
  }
}