<template>
  <el-input
    ref="inputRef"
    v-if="type === 'text' || type === 'password' || type === 'textarea'"
    :type="type"
    :value="value"
    :maxlength="maxLength"
    :show-password="type === 'password'"
    :placeholder="placeholder"
    :disabled="disabled"
    @input="onInputText"
    @change="onChange"
    @blur="onBlur"
    @keyup.enter.native="onEnter"
  >
    <slot slot="suffix" name="suffix"></slot>
  </el-input>
  <el-select
    ref="inputRef"
    v-else-if="type === 'select'"
    :value="value"
    :placeholder="placeholder"
    :disabled="disabled"
    @change="onInput" 
    @blur="onBlur"
    @keyup.enter.native="onEnter"
  >
    <el-option
      v-for="item, key in options"
      :key="key"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  <el-radio-group
    v-else-if="type === 'radio'"
    ref="inputRef"
    :value="value"
  >
    <el-radio
      v-for="item in options"
      :key="item.value"
      :label="item.value"
      :disabled="item.disabled"
      @change="onInput(item.value)"
      @keyup.enter.native="onEnter"
    >{{ item.label }}</el-radio>
  </el-radio-group>
  <el-date-picker
    v-else-if="type === 'date-picker'"
    ref="inputRef"
    :value="value"
    :type="dateType"
    :placeholder="placeholder"
    @input="onInput"
    @change="onChange"
    @blur="onBlur"
    @keyup.enter.native="onEnter"
  ></el-date-picker>
  <el-checkbox-group
    v-else-if="type === 'checkbox'"
    ref="inputRef"
    :value="value"
    :disabled="disabled"
    @input="onInput"
    @keyup.enter.native="onEnter"
  >
    <el-checkbox
      v-for="item in options"
      :key="item.value"
      :label="item.value"
      :disabled="item.disabled"
      @change="onChange"
    >{{ item.label }}</el-checkbox>
  </el-checkbox-group>
  <el-input-number
    v-else-if="type === 'input-number'"
    ref="inputRef"
    label="描述文字"
    :value="value"
    :min="min"
    :max="max"
    :precision="precision"
    :disabled="disabled"
    @input="onInputNumber"
    @change="onChange"
    @keyup.enter.native="onEnter"
  ></el-input-number>
</template>

<script>
// import { ref, computed, onMounted, nextTick, inject  } from '@vue/composition-api'
import {
  Input as ElInput,
  Select as ElSelect,
  RadioGroup as ElRadioGroup,
  Radio as ElRadio,
  DatePicker as ElDatePicker,
  CheckboxGroup as ElCheckboxGroup,
  Checkbox as ElCheckbox,
  InputNumber as ElInputNumber,

} from 'element-ui'
import { formAddFieldKey, formFieldsKey, formWithEnterNextKey, formGlobalFieldsKey, } from './use-t-form'
import { toString } from '../utils'

export default {
  components: {
    ElInput,
    ElSelect,
    ElRadioGroup,
    ElRadio,
    ElDatePicker,
    ElCheckbox,
    ElCheckboxGroup,
    ElInputNumber
  },
  inject: {
    fields: formFieldsKey,
    formAddField: formAddFieldKey,
    globalFields: formGlobalFieldsKey,
    withEnterNext: formWithEnterNextKey,
  },
  props: {
    value: [String, Number, Date, Array],
    type: {
      type: String,
      default: 'input'
    },
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
    inlineMessage: {
      type: [String, Boolean],
      default: ''
    },
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String,
    options: {
      type: [Object, Array],
      default: () => []
    },
    placeholder: String,
    disabled: Boolean,
    dateType: {
      type: String,
      default: 'date'
    },
    min: {
      type: Number,
      default: -Infinity,
    },
    max: {
      type: Number,
      default: Infinity,
    },
    precision: Number,
    eqField: String,
    eqError: String,
    uneqField: String,
    uneqError: String,
    submitText: String,
    cancelText: String,
  },
  setup() {

  },

  mounted() {
    formAddField(createField())

    // 设置当前 form item 索引
    const length = this.fields?.length
    this.order = length - 1

    // 修复 select 组件初始化激活验证的 bug
    if (this.type === 'select') {
      nextTick(() => {
        this.$refs.elFormItemRef.clearValidate()
      })
    }
  }, 

  methods: {
    onInput(value) {
      this.$emit('input', value)
    },

    onInputText(value) {
      const limit = current.value?.limit
      const newValue = limit ? toString(value).replace(limit, '') : value
      this.onInput(newValue)
    },

    onInputNumber(newVal) {
      if (this.value === newVal) return
      this.onInput(newVal)
    },

    onChange(value) {
      this.$emit('change', value)
    },

    onBlur(value) {
      this.$emit('blur', value)
    },

    createField() {
      const { type, prop, eqField, eqError, uneqField, uneqError } = this
      const result = {
        type,
        prop,
        elFormItem: this.$refs.elFormItemRef
      }

      if (eqField) {
        result.eqField = eqField
        result.eqError = eqError
      }

      if (uneqField) {
        result.uneqField = uneqField
        result.uneqError = uneqError
      }

      if (enterNext && !this.$slots.default) {
        if (type === 'input' || type === 'password' || type === 'textarea') {
          result.selected = inputRef.value.focus
        } else if (type === 'select') {
          result.selected = selectRef.value.toggleMenu
        } else if (type === 'radio') {
          const firstRadio = radioGroupRef.value.$children[0].$el
          result.selected = () => {
            firstRadio.focus()
            // onInput(props.options[0].value)
          }
        } else if (type === 'date-picker') {
          result.selected = datePickerRef.value.focus
        } else if (type === 'input-number') {
          result.selected = inputNumberRef.value.focus
        } else if (type === 'checkbox') {
          const firstCheckbox = checkboxGroupRef.value.$children[0].$el
          result.selected = () => {
            firstCheckbox.focus()
          }
        }
      } else {
        if (type === 'button') {
          const buttons = this.$slots.default()
          result.selected = () => {
            buttons[0].elm.click()
          }
        }
      }
      
      return result
    },

    onEnter() {
      const { order, fields } = this
      if (enterNext) {
        if (this.type === 'textarea') {
          return
        }
        const formItem = this.$refs.elFormItemRef
        formItem.validate('blur', (message) => {
          if (formItem.validateState === 'error') {
            return
          }
          if (order >= (fields.length - 1)) {
            return
          }
          const next = fields[order + 1]
          next.selected && next.selected() 
        });
      }
    }
  },
  setup(props, context) {
    const current = computed(() => globalFields?.[props.prop])
    const elFormItemRef = ref(null)
    const inputRef = ref(null)

    const order = ref(-1)
    const validateState = computed(() => elFormItemRef.value?.validateState)

    const baseLabel = computed(() => props.label || globalFields[props.prop]?.label)
    const isInput = computed(() => {
      const type = props.type
      return type === 'text' || type === 'password' || type === 'textarea'
    })

    const maxLength = computed(() => current.value?.maxLength)

    const fields = inject(fieldsKey)
    const formAddField = inject(formAddFieldKey)
    const enterNext = inject(enterNextKey)

    function onInput(value) {
      this.$emit('input', value)
    }

    function onInputText(value) {
      const limit = current.value?.limit
      const newValue = limit ? _toString(value).replace(limit, '') : value
      onInput(newValue)
    }

    function onInputNumber(newVal) {
      if (props.value === newVal) return
      onInput(newVal)
    }

    function onChange(value) {
      this.$emit('change', value)
    }

    function onBlur(value) {
      this.$emit('blur', value)
    }

    function createField() {
      const { type, prop, eqField, eqError, uneqField, uneqError } = props
      const result = {
        type,
        prop,
        elFormItem: elFormItemRef.value
      }

      if (eqField) {
        result.eqField = eqField
        result.eqError = eqError
      }

      if (uneqField) {
        result.uneqField = uneqField
        result.uneqError = uneqError
      }

      if (enterNext && !context.slots.default) {
        if (type === 'input' || type === 'password' || type === 'textarea') {
          result.selected = inputRef.value.focus
        } else if (type === 'select') {
          result.selected = selectRef.value.toggleMenu
        } else if (type === 'radio') {
          const firstRadio = radioGroupRef.value.$children[0].$el
          result.selected = () => {
            firstRadio.focus()
            // onInput(props.options[0].value)
          }
        } else if (type === 'date-picker') {
          result.selected = datePickerRef.value.focus
        } else if (type === 'input-number') {
          result.selected = inputNumberRef.value.focus
        } else if (type === 'checkbox') {
          const firstCheckbox = checkboxGroupRef.value.$children[0].$el
          result.selected = () => {
            firstCheckbox.focus()
          }
        }
      } else {
        if (type === 'button') {
          const buttons = context.slots.default()
          result.selected = () => {
            buttons[0].elm.click()
          }
        }
      }
      
      return result
    }

    function onEnter() {
      if (enterNext) {
        if (props.type === 'textarea') {
          return
        }
        const formItem = elFormItemRef.value
        formItem.validate('blur', (message) => {
          if (formItem.validateState === 'error') {
            return
          }
          if (order.value >= (fields.value.length - 1)) {
            return
          }
          const next = fields.value[order.value + 1]
          next.selected && next.selected() 
        });
      }
    }

    function _toString(value) {
      return typeof value === 'string' ? value : String(value)
    }

    onMounted(() => {
      formAddField(createField())

      // 设置当前 form item 索引
      const length = fields.value?.length
      order.value = length - 1

      // 修复 select 组件初始化激活验证的 bug
      if (props.type === 'select') {
        nextTick(() => {
          elFormItemRef.value.clearValidate()
        })
      }
    })

    return {
      elFormItemRef,
      inputRef,
      order,
      isInput,
      baseLabel,
      onInput,
      onInputText,
      onInputNumber,
      onChange,
      onBlur,
      onEnter,
      maxLength,
    }
  }
}
</script>