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


function createInput(props, { formDate, context, children }) {
  switch (props.type || 'text') {
    case 'text':
    case 'password':
    case 'textarea':
      return h(ElInput, {
        props: {
          value: formDate.value[props.key]
        },
        on: {
          input(value) {
            formDate.value[props.key] = value
          }
        }
      })
    case 'button':
      return h(ElButton, {
        props: {
          text: props.text
        },
        on: {
          click(value) {
            context.emit('submit', formDate.value)
          }
        }
      })
    case 'radio':
      return h(ElRadioGroup, {
        props: {
          text: props.text
        },
        on: {
          click(value) {
            context.emit('submit', formDate.value)
          }
        }
      }, createOptions({ type: props.type, options: props.options }))
    case 'checkbox':
      return h(ElCheckboxGroup, {
        props: {
          text: props.text
        },
        on: {
          click(value) {
            context.emit('submit', formDate.value)
          }
        }
      }, createOptions({ type: props.type, options: props.options }))
    case 'radio':
      return h(ElRadioGroup, {
        props: {
          text: props.text
        },
        on: {
          click(value) {
            context.emit('submit', formDate.value)
          }
        }
      }, createOptions({ type: props.type, options: props.options }))
  }
}

export default createInput