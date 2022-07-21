import { h, ref } from "vue"
import { Form as ElForm, FormItem as ElFormItem, Input as ElInput } from "element-ui"
import createInput from './create-input'

function createFormData(fileds) {
  const filedKeys = {}
  fileds.forEach(({ type, key }) => {
    if (!key) return
    switch (type) {
      case 'checkbox':
      case 'file':
      case 'upload':
        filedKeys[key] = []
        break;
      case 'switch':
        filedKeys[key] = false
      default:
        filedKeys[key] = ''
    }
  })
  return filedKeys
}

function createRules(fileds) {
  const result = {}
  fileds.forEach(({ key, rules }) => {
    if (!key) return
    result[key] = rules
  })

  return result
}

export default {
  name: 'SFormulate',
  props: {
    fileds: [Array, Object],
    labelPosition: String,
    labelWidth: String,
    labelSuffix: {
      type: String,
      default: ''
    },
    validateOnRuleChange: false, // 是否在 rules 属性改变后立即触发一次验证，El 默认 true
    data: [Object],
    size: String,
  },
  setup(_props, context) {
    const props = _props.data ? _props.data : _props
    const formRef = ref(null)
    const formDate = ref(createFormData(props.fileds))
    const rules = ref(createRules(props.fileds))

    const render = () => h(ElForm, {
      ref: (el) => formRef.value = el,
      props: {
        rules: rules.value,
        model: formDate.value,
        labelPosition: props.labelPosition,
        labelWidth: props.labelWidth,
        labelSuffix: props.labelSuffix,
        validateOnRuleChange: props.validateOnRuleChange,
      }
    }, props.fileds.map((item) => h(ElFormItem, {
      props: {
        label: item.label,
        prop: item.key
      }
    }, Array.isArray(item) ? item.map(piece => createInput(piece, { formRef, formDate, context })) : [createInput(item, { formRef, formDate, context })])))

    return render
  }
}
