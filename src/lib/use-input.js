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
import { h, toRef } from 'vue'
import { toString, find, omitBy, pick } from '../utils'

function useInput(props, context, options = { onKeyup: null }) {
  const { onKeyup } = options
  const { emit } = context

  const nativeOn = omitBy({ keyup: onKeyup }, (item) => !item)

  function onClick(event) {
    emit('click', event)
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
        focus: onFocus,
        blur: onBlur,
        ...nativeOn
      },
    }, [props.text ? props.text : context.slots?.default?.()])
  }, {
    type: ['text', 'password', 'textarea'],
    render: () => {
      console.log('context.slots')
      console.log(context.slots)
      return h(ElInput, {
        props: {
          type: props.type,
          value: props.value,
          clearable: props.clearable,
          disabled: props.disabled,
          showPassword: props.showPassword,
          suffixIcon: props.suffixIcon,
          prefixIcon: props.prefixIcon
        },
        attrs: context.attrs,
        on: {
          input(value) {
            const newValue = props.exclude ? toString(value).replace(props.exclude, '') : value
            onInput(newValue)
          },
          change: onChange,
          blur: onBlur,
        },
        nativeOn,
        scopedSlots: {
          suffix: () => h(context.slots?.suffix?.()),
          prefix: () => h(context.slots?.prefix?.()),
        }
      }, /* [
        context.slots?.prefix && h(context.slots.prefix(), {
          slot: 'prefix'
        }),
        context.slots?.suffix && h(context.slots.suffix(), {
          slot: 'suffix'
        })
      ] */)
    }
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
        change: onChange,
        blur: onBlur,
      }
    })
  }, {
    type: 'select',
    render: () => h(ElSelect, {
      props: {
        value: props.value,
        clearable: props.clearable
      },
      attrs: context.attrs,
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
        pickerOptions: props.pickerOptions
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
        value: props.value
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