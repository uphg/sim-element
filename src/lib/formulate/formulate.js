import { h, ref } from "vue"
import { Form as ElForm, FormItem as ElFormItem, Input as ElInput } from "element-ui"
import renderInput from './render-input'

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
    withValidator: Boolean, // 是否开启验证
    withEnterNext: Boolean, // 是否开启回车换行
    data: [Object],
    size: String,
  },
  setup(_props, context) {
    const props = _props.data ? _props.data : _props
    const formRef = ref(null)
    const formDate = ref(createFormData(props.fileds))
    const rules = ref({})

    props.fileds.forEach((item) => {
      const { key, type, label, required, rules: _rules } = item
      if (_rules) {
        rules.value[key] = _rules
      } else if (props.withValidator && !['submit', 'button'].includes(type) && typeof required !== 'boolean') {
        const prefix = `请${['checkbox', 'select', 'radio'].includes(type) ? '选择' : '输入'}`
        rules.value[key] = [
          { required: true, message: prefix + label, trigger: 'blur' }
        ]
      }
    })

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
    }, props.fileds.map((item) => h(ElFormItem, {
      props: {
        label: item.label,
        prop: item.key
      }
    }, Array.isArray(item) ? item.map(piece => renderInput(piece, { formRef, formDate, context })) : [renderInput(item, { formRef, formDate, context })]))
    )
  }
}
