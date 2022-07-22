import { h, ref } from "vue"
import { Form as ElForm, FormItem as ElFormItem, Input as ElInput } from "element-ui"
import { isArray } from "../../utils"
import renderInput from './render-input'

function initFormData(baseFileds, filedsIsArray) {
  const result = {}
  const fileds = filedsIsArray ? baseFileds : Object.keys(baseFileds)
  fileds.forEach((value, _key) => {
    const key = filedsIsArray ? value.key : value
    const type = filedsIsArray ? value.type : baseFileds[value]?.type
    if (!key) return
    switch (type) {
      case 'checkbox':
      case 'file':
      case 'upload':
        result[key] = []
        break;
      case 'switch':
        result[key] = false
        break;
      case '$children':
        break;
      default:
        result[key] = ''
    }
  })
  return result
}

function mapFileds(baseFileds, callback, filedsIsArray) {
  const fileds = filedsIsArray ? baseFileds : Object.keys(baseFileds)

  return fileds.map((value, index) => {
    let item
    if (filedsIsArray) {
      item = value
    } else {
      if (value === '$children') {
        const filed = baseFileds[value]
        if (isArray(filed)) {
          item = filed
          console.log('isArray - item')
          console.log(item)
        } else {
          item = mapFileds(filed, null, false)
          console.log('item')
          console.log(item)
        }
      } else if (/^\$/.test(value)) {
        item = { ...baseFileds[value], type: value.replace('$', '') }
      } else {
        item = { ...baseFileds[value], key: value }
      }
    }
    callback && callback(item, index)
    return item
  })
}

export default {
  name: 'SFormulate',
  props: {
    data: [Object],
    fileds: [Array, Object],
    labelPosition: String,
    labelWidth: String,
    labelSuffix: {
      type: String,
      default: ''
    },
    validateOnRuleChange: false, // 是否在 rules 属性改变后立即触发一次验证，El 默认 true
    withValidator: Boolean, // 是否开启验证
    withEnterNext: Boolean, // 是否开启回车换行
    size: String,
  },
  setup(_props, context) {
    const props = _props.data ? _props.data : _props
    const filedsIsArray = isArray(props.fileds)

    const formRef = ref(null)
    const rules = ref({})

    const formDate = ref(initFormData(props.fileds, filedsIsArray))
    const fileds = mapFileds(props.fileds, (item) => {
      const { type, key, label, required, rules: _rules } = item
      if (_rules) {
        rules.value[key] = _rules
      } else if (props.withValidator && !['submit', 'button'].includes(type) && typeof required !== 'boolean') {
        const prefix = `请${['checkbox', 'select', 'radio'].includes(type) ? '选择' : '输入'}`
        rules.value[key] = [
          { required: true, message: prefix + label, trigger: 'blur' }
        ]
      }
    }, filedsIsArray)

    function setFormData(obj) {
      const keys = Object.keys(obj)
      keys.forEach((key) => {
        formDate.value[key] = obj[key]
      })
    }

    context.expose({ setFormData })

    return () => h(ElForm, {
      ref: (el) => formRef.value = el,
      props: {
        rules: rules.value,
        model: formDate.value,
        labelPosition: props.labelPosition,
        labelWidth: props.labelWidth,
        labelSuffix: props.labelSuffix,
        validateOnRuleChange: props.validateOnRuleChange,
      }
    }, fileds.map((item) => h(ElFormItem, {
      props: {
        label: item.label,
        prop: item.key,
        required: item.required
      }
    }, isArray(item) ? item.map(piece => renderInput(piece, { formRef, formDate, context })) : [renderInput(item, { formRef, formDate, context })]))
    )
  }
}
