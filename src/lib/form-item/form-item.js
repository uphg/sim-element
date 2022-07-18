import { h } from "vue"
import { FormItem as ElFormItem } from "element-ui"
import { inputProps } from "../shared"

export default {
  name: 'SFormItem',
  props: {
    ...inputProps
  },
  setup(props, context) {
    return () => h(ElFormItem, {
      props: {

      },
      scopedSlots: {
        // default: () => context.slots.default(),
        header: () => context.slots.header()
      }
    }, [context.slots.default && context.slots.default()])
  }
}
