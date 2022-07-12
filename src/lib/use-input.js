import {
  Button as ElButton,
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
import { toString, find, omitBy } from '../utils'
import { h } from 'vue'

function useInput(props, context, options = { onKeyup: null }) {
  const { onKeyup } = options
  const { emit } = context

  const nativeOn = omitBy({ keyup: onKeyup }, (item) => !item)

  function onClick(event) {
    emit('click', event)
  }

  function onActive(event) {
    emit('active', event)
  }

  function onFocus(event) {
    emit('focus', event)
  }

  function onInput(value) {
    emit('input', value)
  }

  function onChange(value) {
    emit('change', value)
  }

  function onBlur(value) {
    emit('blur', value)
  }

  const inputMap = [{
    type: ['button'],
    render: () => h(ElButton, {
      props: {
        type: props.hue
      },
      on: {
        click: onClick,
      },
      nativeOn: {
        active: onActive,
        focus: onFocus,
        blur: onBlur,
        ...nativeOn
      },
    }, [props.text ? props.text : context.slots.default()])
  }, {
    type: ['text', 'password', 'textarea'],
    render: () => h(ElInput, {
      props: {
        type: props.type,
        value: props.value,
        clearable: props.clearable
      },
      on: {
        input(value) {
          const newValue = props.exclude ? toString(value).replace(props.exclude, '') : value
          onInput(newValue)
        },
        blur: onBlur,
      },
      attrs: context.attrs,
      nativeOn,
    })
  }, {
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
  }, {
    type: 'select',
    render: () => h(ElSelect, {
      props: {
        value: props.value,
        clearable: props.clearable
      },
      on: {
        input: onInput,
        change: onChange,
        blur: onBlur,
      },
      nativeOn
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
  }, {
    type: 'radio',
    render: () => h(ElRadioGroup, {
      props: {
        value: props.value
      },
      on: {
        input: onInput,
        change: onChange
      }
    }, props.options.map(
      (item) => h(ElRadio, {
        props: {
          label: item.value,
        }
      }, [item.label])
    ))
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }]

  const render = find(inputMap, ({ type }) => (
    typeof type === 'string' ? props.type === type : type.indexOf(props.type) !== -1
  )).render

  return render
}

export default useInput