import {
  Button as ElButton,
  Input as ElInput,
  Select as ElSelect,
  Cascader as ElCascader,
  Option as ElOption,
  RadioGroup as ElRadioGroup,
  Radio as ElRadio,
  CheckboxGroup as ElCheckboxGroup,
  Checkbox as ElCheckbox,
  InputNumber as ElInputNumber,
  Switch as ElSwitch,
  Slider as ElSlider,
  TimeSelect as ElTimeSelect,
  DatePicker as ElDatePicker,
  Upload as ElUpload
} from 'element-ui'
import { h } from 'vue'
import createOptions from './create-options'


function createInput(props, { formDate, context, children }) {

  switch (props.type || 'text') {
    case 'text':
    case 'password':
    case 'textarea':
      return h(ElInput, {
        props: {
          type: props.type,
          value: formDate.value[props.key],
          disabled: props.disabled,
          clearable: props.clearable,
          suffixIcon: props.suffixIcon,
          prefixIcon: props.prefixIcon,
          showWordLimit: props.showWordLimit,
          showPassword: props.showPassword,
        },
        attrs: {
          minlength: props.minlength,
          maxlength: props.maxlength,
        },
        on: {
          input(value) {
            formDate.value[props.key] = value
          }
        }
      })
    case 'radio':
      return h(ElRadioGroup, {
        props: {
          value: formDate.value[props.key],
          disabled: props.disabled,
        },
        on: {
          input(value) {
            formDate.value[props.key] = value
          }
        }
      }, createOptions({ type: props.type, options: props.options }))
    case 'checkbox':
      return h(ElCheckboxGroup, {
        props: {
          value: formDate.value[props.key],
          disabled: props.disabled,
        },
        on: {
          input(value) {
            formDate.value[props.key] = value
          }
        }
      }, createOptions({ type: props.type, options: props.options }))
    case 'select':
      return h(ElSelect, {
        props: {
          value: formDate.value[props.key],
          disabled: props.disabled,
        },
        on: {
          input(value) {
            formDate.value[props.key] = value
          }
        }
      }, createOptions({ type: props.type, options: props.options }))
    case 'button':
      return h(ElButton, {
        props: {
          text: props.text,
          disabled: props.disabled,
        },
        on: {
          click(event) {
            context.emit('click', event)
          }
        }
      })
    case 'submit':
      return h(ElButton, {
        props: {
          text: props.text,
          disabled: props.disabled,
        },
        on: {
          click() {
            context.emit('submit', formDate.value)
          }
        }
      })
  }
}

export default createInput