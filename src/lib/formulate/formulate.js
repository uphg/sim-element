import { h, ref } from "vue"
import { Form as ElForm, FormItem as ElFormItem, Input as ElInput } from "element-ui"
import createInput from './create-input'
import createOptions from "./create-options"

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
    size: String,
  },
  setup(props, context) {

    const filedKeys = {}
    props.fileds.forEach(({ key }) => {
      filedKeys[key] = ''
    })

    const formDate = ref(filedKeys)

    const render = () => h(ElForm, {
      props: {
        model: formDate.value,
        labelPosition: props.labelPosition,
        labelWidth: props.labelWidth,
        labelSuffix: props.labelSuffix,
        validateOnRuleChange: props.validateOnRuleChange,
      }
    }, props.fileds.map((item) => h(ElFormItem, {
      props: {
        label: item.label
      }
    }, [
      createInput(item, { formDate, context } )
    ]))
    )


    return render
  }
}
