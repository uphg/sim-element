function noop() { }

const inputProps = {
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
  multiple: Boolean,

  // input - number
  max: {
    type: Number,
    default: Infinity
  },
  min: {
    type: Number,
    default: -Infinity
  },
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

  // upload
  action: {
    type: String,
    // required: true
  },
  headers: {
    type: Object,
    default() {
      return {};
    }
  },
  data: Object,
  // name: {
  //   type: String,
  //   default: 'file'
  // },
  drag: Boolean,
  dragger: Boolean,
  withCredentials: Boolean,
  showFileList: {
    type: Boolean,
    default: true
  },
  accept: String,
  beforeUpload: Function,
  beforeRemove: Function,
  onRemove: {
    type: Function,
    default: noop
  },
  onChange: {
    type: Function,
    default: noop
  },
  onPreview: {
    type: Function
  },
  onSuccess: {
    type: Function,
    default: noop
  },
  onProgress: {
    type: Function,
    default: noop
  },
  onError: {
    type: Function,
    default: noop
  },
  fileList: {
    type: Array,
    default() {
      return [];
    }
  },
  autoUpload: {
    type: Boolean,
    default: true
  },
  listType: {
    type: String,
    default: 'text' // text,picture,picture-card
  },
  httpRequest: Function,
  disabled: Boolean,
  limit: Number,
  onExceed: {
    type: Function,
    default: noop
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
}

export default inputProps