import { Form } from "element-ui"
import { pick } from "../utils"
import { fieldsKey, formAddFieldKey, withEnterNextKey, formGlobalFieldsKey } from "./providers"

const elPropKeys = ['model', 'labelPosition', 'labelWidth', 'labelSuffix', 'validateOnRuleChange']

const props = {
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
  validateOnRuleChange: false,
  // customize props
  withValidator: Boolean,
  withEnterNext: Boolean,
}

export default {
  name: 'SForm',
  props,
  data() {
    return {
      baseRules: [],
      fields: []
    }
  },
  inject: { globalFields: formGlobalFieldsKey },
  provide() {
    return {
      [fieldsKey]: this.fields,
      [formAddFieldKey]: this.formAddField,
      [withEnterNextKey]: this.withEnterNext,
    }
  },
  methods: {
    formAddField(item) {
      this.fields.push(item)
    },
    createFormRules(fields, model) {
      const result = {}
      fields.forEach((field) => {
        const key = field.prop
        const item = this.globalFields[key]
        const newRules = []

        if (field.eqField) {
          newRules.push({
            validator: (_, value, callback) => {
              if (value !== model?.[field.eqField]) {
                const error = field.eqError
                callback(new Error(error))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          })
        }

        if (field.uneqField) {
          newRules.push({
            validator: (_, value, callback) => {
              if (value === model?.[field.uneqField]) {
                const error = field.uneqError
                callback(new Error(error))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          })
        }

        result[key] = item?.rules?.length ? item.rules.concat(newRules) : newRules
      })
      return result
    }
  },
  mounted() {
    if (this.withValidator) {
      this.baseRules = this.createFormRules(this.fields, this.model)
    }
  },
  render(h) {
    const slots = this.$slots.default
    return h(Form, {
      class: 't-form',
      ref: 'elFormRef',
      props: {
        ...pick(this, elPropKeys),
        rules: {}
      },
      scopedSlots: {
        default: () => slots
      }
    })
  }
}
