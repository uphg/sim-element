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
    [
      ['text', 'password', 'textarea'],
      () => h(ElInput, {
        props: {
          value: props.value
        },
        on: {
          input: onInput
        }
      })
    ],
    [
      'select',
      () => h(ElSelect, {
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
    ],
    [
      'radio',
      () => h(ElRadioGroup, {
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
    ],
    [
      'checkbox',
      () => h(ElCheckbox, {
        on: {
          input: onInput
        }
      }, props.options.map(() => ))
    ]
  ]
  const current = find(inputMap, (item) => {
    const type = item[0]
    return typeof type === 'string' ? props.type === type : type.indexOf(props.type) !== -1
  })
  console.log('渲染一次 setup')
  return current[1]
}

export default useFormInput