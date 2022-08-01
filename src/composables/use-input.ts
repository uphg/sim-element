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
import { h, ref } from 'vue'
import { toString, find, omitBy } from '../utils'
import { InputProps } from '../shared/input-props'

export function useInput(props: InputProps, context, options = { onKeyup: null, onInput: null }) {
  const { onKeyup } = options
  const { emit } = context

  const nativeOn = omitBy({ keyup: onKeyup }, (item) => !item)

  const inputRef = ref(null)

  function onClick(event) {
    emit('click', event)
  }

  const onInput = options.onInput ? options.onInput : props.exclude ? (value) => {
    const newVal = toString(value).replace(props.exclude, '')
    emit('input', newVal)
  } : (value) => {
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

  function onFocus(event) {
    emit('focus', event)
  }

  function onClear() {
    emit('clear')
  }

  function focus() {
    inputRef.value.focus()
  }

  function blur() {
    inputRef.value.blur()
  }

  function select() {
    inputRef.value.select()
  }

  function setRef(el) {
    inputRef.value = el
  }

  const inputMap = [{
    type: 'button',
    expose: {
      click() {
        inputRef.value.$el.click()
      },
      focus() {
        inputRef.value.$el.focus()
      }
    },
    render: () => h(ElButton, {
      ref: setRef,
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
    }, [props.text ? props.text : context.slots?.default()])
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
        input: onInput,
        change: onChange
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
    type: ['text', 'password', 'textarea'],
    expose: {
      focus,
      blur,
      select
    },
    render: () => h(ElInput, {
      ref: setRef,
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
        input: onInput,
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
    expose: {
      focus,
      blur() {
        const number = inputRef.value.$el
        const input = number.querySelector('.el-input__inner')
        input.blur()
      },
      select
    },
    render: () => h(ElInputNumber, {
      ref: setRef,
      props: {
        value: props.value,
        disabled: props.disabled,
        step: props.step,
        stepStrictly: props.stepStrictly,
        precision: props.precision,
        controls: props.controls,
        controlsPosition: props.controlsPosition,
        size: props.size,
        min: props.min,
        max: props.max,
        placeholder: context.attrs.placeholder,
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
    expose: {
      focus,
      blur
    },
    render: () => h(ElSelect, {
      ref: setRef,
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
        change: onChange,
        blur: onBlur,
      }
    })
  }, {
    type: [
      'date', 'year', 'month', 'dates', 'week', 'daterange', 'monthrange',
      'datetime', 'datetimerange'
    ],
    expose: {
      focus
    },
    render: () => h(ElDatePicker, {
      ref: setRef,
      props: {
        value: props.value,
        type: props.type,
        format: props.format,
        valueFormat: props.valueFormat,
        readonly: props.readonly,
        startPlaceholder: props.startPlaceholder,
        endPlaceholder: props.endPlaceholder,
        prefixIcon: props.prefixIcon,
        clearIcon: props.clearIcon,
        disabled: props.disabled,
        clearable: props.clearable,
        popperClass: props.popperClass,
        editable: props.editable,
        align: props.align,
        defaultValue: props.defaultValue,
        defaultTime: props.defaultTime,
        rangeSeparator: props.rangeSeparator,
        pickerOptions: props.pickerOptions,
        unlinkPanels: props.unlinkPanels,
        validateEvent: props.validateEvent,
        size: props.size,
        // 原生属性
        name: context.attrs.name,
        placeholder: context.attrs.placeholder,
      },
      on: {
        input: onInput,
        change: onChange,
        blur: onBlur,
        focus: onFocus
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
    type: 'switch',
    expose: {
      focus
    },
    render: () => h(ElSwitch, {
      ref: setRef,
      props: {
        value: props.value,
        disabled: props.disabled,
        width: props.width,
        activeIconClass: props.activeIconClass,
        inactiveIconClass: props.inactiveIconClass,
        activeText: props.activeText,
        inactiveText: props.inactiveText,
        activeColor: props.activeColor,
        inactiveColor: props.inactiveColor,
        activeValue: props.activeValue,
        inactiveValue: props.inactiveValue,
        validateEvent: props.validateEvent,
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
    type: ['file', 'upload'],
    expose: {
      clearFiles() {
        inputRef.value.clearFiles()
      },
      abort(file) {
        inputRef.value.abort(file)
      },
      submit() {
        inputRef.value.submit()
      }
    },
    render: () => h(ElUpload, {
      ref: setRef,
      props: {
        value: props.value,
        disabled: props.disabled,
        size: props.size,
        action: props.action,
        headers: props.headers,
        multiple: props.multiple,
        data: props.data,
        withCredentials: props.withCredentials,
        showFileList: props.showFileList,
        drag: props.drag,
        accept: props.accept, // accept="image/png, image/jpeg"
        onPreview: props.onPreview,
        onRemove: props.onRemove,
        onSuccess: props.onSuccess,
        onError: props.onError,
        onProgress: props.onProgress,
        onChange: props.onChange,
        beforeUpload: props.beforeUpload,
        beforeRemove: props.beforeRemove,
        listType: props.listType,
        autoUpload: props.autoUpload,
        fileList: props.fileList,
        httpRequest: props.httpRequest,
        limit: props.limit,
        onExceed: props.onExceed,
        name: context.attrs.name,
      },
      scopedSlots: {
        file: props => context.slots.file && context.slots.file({ file: props.file })
      }
    }, [
      context.slots?.default && h('slot', {
        slot: 'default'
      }, context.slots.default()),
      context.slots?.trigger && h('slot', {
        slot: 'trigger'
      }, context.slots.trigger()),
      context.slots?.tip && h('slot', {
        slot: 'tip'
      }, context.slots.tip())
    ])
  }]

  const template = find(inputMap, ({ type }) => (
    typeof type === 'string' ? props.type === type : type.indexOf(props.type) !== -1
  ))

  return template
}
