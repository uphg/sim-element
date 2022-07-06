import { FormItem } from "element-ui"
import { formFieldsKey, formAddFieldKey, formWithEnterNextKey } from "./providers"

export default {
  name: 'SFormItem',
  inject: {
    fields: formFieldsKey,
    addField: formAddFieldKey,
    withEnterNext: formWithEnterNextKey
  },
  mounted() {
    // console.log(`this[fieldsKey]`)
    // console.log(this[fieldsKey])
  },
  methods: {

  },
  render(h, context) {
    const slots = this.$slots.default
    return h(FormItem, {
      class: 'sim-form-item',
      scopedSlots: {
        default: () => slots,
        header: () => this.$slots.header
      }
    }/* , slots */)
  }
}