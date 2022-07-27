import { h } from "vue"
import { FormItem as ElFormItem } from "element-ui"
import { inputProps, useInput } from "../shared"

export default {
  name: 'SFormItem',
  props: {
    ...inputProps,
    label: String,
    labelWidth: String,
    prop: String,
    required: {
      type: Boolean,
      default: undefined
    },
    rules: [Object, Array],
    error: String,
    validateStatus: String,
    for: String,
    inlineMessage: {
      type: [String, Boolean],
      default: ''
    },
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String
  },
  setup(props, context) {
    const { render, expose } = useInput(props, context, {
      onKeyup(event) {
        if (event.keyCode !== 13) return
        // 执行回车
      }
    })

    expose && context.expose(expose)

    return () => h(ElFormItem, {
      props: {
        label: props.label,
        labelWidth: props.labelWidth,
        prop: props.prop,
        required: props.required,
        rules: props.rules,
        error: props.error,
        validateStatus: props.validateStatus,
        for: props.for,
        inlineMessage: props.inlineMessage,
        showMessage: props.showMessage,
        size: props.size
      },
      scopedSlots: {
        header: () => context.slots.header()
      }
    }, [
      context.slots.itemPrefix && context.slots.itemPrefix(),
      render(),
      context.slots.itemSuffix && context.slots.itemSuffix(),
    ])
  }
}
