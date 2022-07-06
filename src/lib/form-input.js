import { Input } from "element-ui"
import { toString } from "../utils"

export default {
  name: 'SFormBox',
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {
      temp: []
    }
  },

  created() {
    this.temp = [
      Input,
      {
        props: {
          // value: this.value
        },
        on: {
          input: this.onInputText,
          change: this.onChange,
          blur: this.onblur,
          keyup: this.onKeyup
        },
        class: 'sim-form-input'
      }
    ]
  },
  mounted() {
    // console.log(`this[fieldsKey]`)
    // console.log(this[fieldsKey])
  },
  methods: {
    onInput(value) {
      this.$emit('input', value)
    },
    onInputText(value) {
      // const limit = current.value?.limit
      // const newValue = limit ? toString(value).replace(limit, '') : value
      this.onInput(value)
    },
    onChange(value) {
      this.$emit('change', value)
    },
    onblur() {

    },
    onKeyup(value) {

    }
  },
  render(h, context) {
    switch () {

    }
  }
}