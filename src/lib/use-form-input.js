import {
  Input as ElInput,
  Select as ElSelect,
  Option as ElOption,
  RadioGroup as ElRadioGroup,
  Radio as ElRadio,
  DatePicker as ElDatePicker,
  CheckboxGroup as ElCheckboxGroup,
  Checkbox as ElCheckbox,
  InputNumber as ElInputNumber,
} from 'element-ui'
import { formAddFieldKey, formFieldsKey, formWithEnterNextKey, formGlobalFieldsKey, } from './providers'
import { toString, find } from '../utils'
import { h } from 'vue'

function useFormInput(props, context) {

  function onInput(value) {
    context.emit('input', value)
  }

  const inputMap = [
    {
      type: ['text', 'password', 'textarea'],
      render: () => h(ElInput, {
        props: {
          value: props.value
        },
        on: {
          input: onInput
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
          change: onInput
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
              console.log('radio change')
              console.log(item.value)
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
    }
  ]

  const render = find(inputMap, ({ type }) => (
    typeof type === 'string' ? props.type === type : type.indexOf(props.type) !== -1
  )).render

  return render
}

export default useFormInput