import { h, ref } from 'vue'
import { Form as ElForm } from 'element-ui'

export default {
  name: 'SForm',
  props: {
    model: {
      type: Object,
      default: () => ({})
    },
    rules: {
      type: [Object, Array, null],
      default: () => ([])
    },
    labelPosition: String,
    labelWidth: String,
    labelSuffix: {
      type: String,
      default: ''
    },
    validateOnRuleChange: false, // 是否在 rules 属性改变后立即触发一次验证，El 默认 true

    // customize props
    withValidator: Boolean, // 是否开启验证
    withEnterNext: Boolean, // 是否开启回车换行
  },
  setup(props, context) {
    return () => h(ElForm, {
      props: {
        model: props.model,
        // rules: props.rules,
        labelPosition: props.labelPosition,
        labelWidth: props.labelWidth,
        labelSuffix: props.labelSuffix,
        validateOnRuleChange: props.validateOnRuleChange,
      },
      scopedSlots: {
        default: () => context.slots.default()
      }
    })
  }
}