import { FormItem } from "element-ui"
import { fieldsKey, formAddFieldKey, withEnterNextKey } from "./providers"

export default {
  name: 'SFormItem',
  inject: {
    fields: fieldsKey,
    formAddField: formAddFieldKey,
    withEnterNext: withEnterNextKey
  },
  mounted() {
    // console.log(`this[fieldsKey]`)
    // console.log(this[fieldsKey])
  },
  render(h, context) {
    const slots = this.$slots.default
    return h(FormItem, {
      class: 't-form-item',
      scopedSlots: {
        default: () => slots
      }
    })
  }
}