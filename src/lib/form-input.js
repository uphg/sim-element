import { Input } from "element-ui"
import { toString } from "../utils"
import useFormInput from './use-form-input'
import { h } from "vue"

export default {
  name: 'SFormBox',
  props: {
    value: [String, Number, Array],
    type: {
      type: String,
      default: 'text'
    },
    options: [Array, Object]
  },
  setup(props, context) {
    return useFormInput(props, context)
  }
}