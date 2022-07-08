import {
  Input as ElInput,
  Select as ElSelect,
  Option as ElOption,
  RadioGroup as ElRadioGroup,
  Radio as ElRadio,
  CheckboxGroup as ElCheckboxGroup,
  Checkbox as ElCheckbox,
  InputNumber as ElInputNumber,
  Switch as ElSwitch,
  Slider as ElSlider,
  TimeSelect as ElTimeSelect,
  DatePicker as ElDatePicker
} from 'element-ui'
import { toString, find } from '../utils'
import { h } from 'vue'

function useFormInput(props, context) {

  function onInput(value) {
    context.emit('input', value)
  }

  function onChange(value) {
    context.emit('change', value)
  }

  function onBlur(value) {
    context.emit('blur', value)
  }

  const inputMap = [
    {
      type: ['text', 'password', 'textarea'],
      render: () => h(ElInput, {
        props: {
          type: props.type,
          value: props.value
        },
        on: {
          input(value) {
            const newValue = props.exclude ? toString(value).replace(props.exclude, '') : value
            onInput(newValue)
          },
          blur: onBlur,
        }
      })
    },
    {
      type: 'select',
      render: () => h(ElSelect, {
        props: {
          value: props.value
        },
        on: {
          change: onInput,
          blur: onBlur,
        }
      }, props.options.map(
        (item) => h(ElOption,
          {
            props: {
              label: item.label,
              value: item.value,
            }
          }
        )
      ))
    },
    {
      type: 'radio',
      render: () => h(ElRadioGroup, {
        props: {
          value: props.value
        }
      }, props.options.map(
        (item) => h(ElRadio, {
          props: {
            label: item.value,
          },
          on: {
            change: () => {
              onInput(item.value)
            }
          }
        }, [item.label])
      ))
    },
    {
      type: 'checkbox',
      render: () => h(ElCheckboxGroup, {
        props: {
          value: props.value
        },
        on: {
          input: onInput
        }
      }, props.options.map(
        (item) => h(ElCheckbox, {
          props: {
            label: item.value
          },
        }, [item.label])
      ))
    },
    {
      type: 'number',
      render: () => h(ElInputNumber, {
        props: {
          value: props.value
        },
        on: {
          input(newVal) {
            if (props.value === newVal) return
            onInput(newVal)
          },
          change: onChange
        }
      })
    },
    {
      type: 'switch',
      render: () => h(ElSwitch, {
        props: {
          value: props.value
        },
        on: {
          input: onInput,
          change: onChange
        }
      })
    },
    {
      type: 'slider',
      render: () => h(ElSlider, {
        props: {
          value: props.value
        },
        on: {
          input: onInput,
          change: onChange
        }
      })
    },
    {
      type: 'time',
      render: () => h(ElTimeSelect, {
        props: {
          value: props.value,
          pickerOptions: props.pickerOptions,
          placeholder: props.placeholder
        },
        on: {
          input: onInput,
          change: onChange
        }
      })
    },
    {
      type: ['date', 'datetime'],
      render: () => h(ElDatePicker, {
        props: {
          type: props.type,
          value: props.value,
          placeholder: props.placeholder
        },
        on: {
          input: onInput,
          change: onChange
        }
      })
    },
  ]

  const render = find(inputMap, ({ type }) => (
    typeof type === 'string' ? props.type === type : type.indexOf(props.type) !== -1
  )).render

  return render
}

export default useFormInput