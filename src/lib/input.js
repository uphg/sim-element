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
    size: String,
    maxlength: [String, Number],
    minlength: [String, Number],
    showWordLimit: Boolean,

    // input - number
    step: {
      type: Number,
      default: 1
    },
    stepStrictly: {
      type: Boolean,
      default: false
    },
    precision: {
      type: Number,
      validator(val) {
        return val >= 0 && val === parseInt(val, 10);
      }
    },
    controls: {
      type: Boolean,
      default: true
    },
    controlsPosition: {
      type: String,
      default: ''
    },


    // select
    noMatchText: String,
    noDataText: String,

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