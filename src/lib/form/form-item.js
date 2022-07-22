import { h } from "vue"
import { FormItem as ElFormItem } from "element-ui"
import { inputProps, useInput } from "../shared"

export default {
  name: 'SFormItem',
  props: {
    ...inputProps
  },
  setup(props, context) {
    let render
    if (context.slots.default) {
      render = context.slots.default
    } else {
      const template = useInput(props, context, {
        onKeyup(event) {
          if (event.keyCode !== 13) return
          // 执行回车
        }
      })

      template.expose && context.expose(template.expose)
      render = template.render
    }

    return () => h(ElFormItem, {
      props: {
        label: props.label,
      },
      scopedSlots: {
        header: () => context.slots.header()
      }
    }, [render()])
  }
}
