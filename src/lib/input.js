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
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    collapseTags: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: true
    },

    // cascader
    showAllLevels: {
      type: Boolean,
      default: true
    },
    props: Object,

    // date
    format: String,
    valueFormat: String,
    readonly: Boolean,
    startPlaceholder: String,
    endPlaceholder: String,
    prefixIcon: String,
    clearIcon: {
      type: String,
      default: 'el-icon-circle-close'
    },
    disabled: Boolean,
    clearable: {
      type: Boolean,
      default: true
    },
    popperClass: String,
    editable: {
      type: Boolean,
      default: true
    },
    align: {
      type: String,
      default: 'left'
    },
    defaultValue: {},
    defaultTime: {},
    rangeSeparator: {
      default: '-'
    },
    unlinkPanels: Boolean,

    // switch
    width: {
      type: Number,
      default: 40
    },
    activeIconClass: {
      type: String,
      default: ''
    },
    inactiveIconClass: {
      type: String,
      default: ''
    },
    activeText: String,
    inactiveText: String,
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },

    // other options
    validateEvent: {
      type: Boolean,
      default: true
    },
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