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
  DatePicker as ElDatePicker
} from 'element-ui'
import { h, ref, toRef } from 'vue'
import { toString, find, omitBy, pick } from '../utils'

function useInput(props, context, options = { onKeyup: null }) {
  const { onKeyup } = options
  const { emit } = context

  const nativeOn = omitBy({ keyup: onKeyup }, (item) => !item)

  const inputRef = ref(null)

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

  function onVisibleChange() {
    emit('visible-change', value)
  }

  function onBlur(value) {
    emit('blur', value)
  }

  function onClear() {
    emit('clear', value)
  }

  function focus() {
    inputRef.value.focus()
  }

  const inputMap = [{
    type: ['button'],
    render: () => h(ElButton, {
      props: {
        type: props.hue,
        size: props.size,
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
    render: () => h(ElInput, {
      ref: 'inputRef',
      props: {
        type: props.type,
        value: props.value,
        clearable: props.clearable,
        disabled: props.disabled,
        showPassword: props.showPassword,
        suffixIcon: props.suffixIcon,
        prefixIcon: props.prefixIcon,
        maxlength: props.maxlength,
        minlength: props.minlength,
        showWordLimit: props.showWordLimit,
        size: props.size,
        clear: onClear
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
    }, [
      context.slots?.suffix && h('slot', {
        slot: 'suffix'
      }, context.slots.suffix()),
      context.slots?.prefix && h('slot', {
        slot: 'prefix'
      }, context.slots.prefix()),
      context.slots?.prepend && h('slot', {
        slot: 'prepend'
      }, context.slots.prepend()),
      context.slots?.append && h('slot', {
        slot: 'append'
      }, context.slots.append())
    ])
  }, {
    type: 'number',
    attrs: context.attrs,
    render: () => h(ElInputNumber, {
      props: {
        value: props.value,
        disabled: props.disabled,
        step: props.step,
        stepStrictly: props.stepStrictly,
        precision: props.precision,
        controls: props.controls,
        controlsPosition: props.controlsPosition,
        size: props.size,
        placeholder: context.attrs.placeholder,        
        min: context.attrs.min,
        max: context.attrs.max,
        name: context.attrs.name,
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
        clearable: props.clearable,
        disabled: props.disabled,
        size: props.size,
        multiple: props.multiple,
        multipleLimit: props.multipleLimit,
        collapseTags: props.collapseTags,
        popperAppendToBody: props.popperAppendToBody,
        autocomplete: context.attrs.autocomplete
      },
      attrs: context.attrs,
      on: {
        input: onInput,
        change: onChange,
        visibleChange: onVisibleChange,
        blur: onBlur,
        clear: onClear
      },
      nativeOn
    }, props.options.map(
      (item) => h(ElOption, {
        props: {
          label: item.label,
          value: item.value,
          disabled: item.disabled,
          size: props.size,
        }
      })
    ))
  }, {
    type: 'cascader',
    render: () => h(ElCascader, {
      props: {
        value: props.value,
        disabled: props.disabled,
        options: props.options,
        clearable: props.clearable,
        showAllLevels: props.showAllLevels,
        props: props.props,
        collapseTags: props.collapseTags
      },
      on: {
        input: onInput,
        change: onChange
      }
    })
  }, {
    type: 'radio',
    render: () => h(ElRadioGroup, {
      props: {
        value: props.value,
        disabled: props.disabled,
      },
      on: {
        input: onInput,
        change: onChange
      }
    }, props.options.map(
      (item) => h(ElRadio, {
        props: {
          label: item.value,
          disabled: item.disabled,
          size: props.size,
        }
      }, [item.label])
    ))
  }, {
    type: 'checkbox',
    render: () => h(ElCheckboxGroup, {
      props: {
        value: props.value,
        disabled: props.disabled,
      },
      on: {
        input: onInput
      }
    }, props.options.map(
      (item) => h(ElCheckbox, {
        props: {
          label: item.value,
          disabled: item.disabled,
          size: props.size,
        },
      }, [item.label])
    ))
  }, {
    type: 'switch',
    render: () => h(ElSwitch, {
      props: {
        value: props.value,
        disabled: props.disabled,
        size: props.size,
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
        value: props.value,
        disabled: props.disabled,
        size: props.size,
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
        disabled: props.disabled,
        size: props.size,
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
        disabled: props.disabled,
        size: props.size,
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