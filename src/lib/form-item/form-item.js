import { FormItem as ElFormItem } from "element-ui"
import { h } from "vue"

export default {
  name: 'SFormItem',
  // props: {},
  setup(props, context) {
    return () => h(ElFormItem, {
      props,
      scopedSlots: {
        // default: () => context.slots.default(),
        header: () => context.slots.header()
      }
    }, [context.slots.default && context.slots.default()])
  }
}
