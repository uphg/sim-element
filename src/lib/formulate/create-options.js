import {
  Option as ElOption,
  Radio as ElRadio,
  Checkbox as ElCheckbox,
} from 'element-ui'
import { h } from 'vue'

function createOptions(props, size) {
  switch (props.type) {
    case 'radio':
      return props.options.map(
        (item) => h(ElRadio, {
          props: {
            label: item.value,
            disabled: item.disabled,
            size: size,
          }
        }, [item.label])
      )
    case 'checkbox':
      return props.options.map(
        (item) => h(ElCheckbox, {
          props: {
            label: item.value,
            disabled: item.disabled,
            size: size,
          },
        }, [item.label])
      )
    case 'select':
      return props.options.map(
        (item) => h(ElOption, {
          props: {
            label: item.label,
            value: item.value,
            disabled: item.disabled,
            size: size,
          }
        })
      )
    default:
      return null
  }
}

export default createOptions
