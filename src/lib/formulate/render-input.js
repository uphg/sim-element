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

function renderInput(props, { formRef, formDate, context }) {
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
    case 'number':
      return h(ElInputNumber, {
        props: {
          value: formDate.value[props.key],
          disabled: props.disabled,
          step: props.step,
          stepStrictly: props.stepStrictly,
          precision: props.precision,
          controls: props.controls,
          controlsPosition: props.controlsPosition,
          size: props.size,
          min: props.min,
          max: props.max,
          placeholder: props.placeholder,
          name: props.name,
        },
        on: {
          input(newVal) {
            if (props.value === newVal) return
            formDate.value[props.key] = newVal
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
      }, props.options.map(
        (item) => h(ElRadio, {
          props: {
            label: item.value,
            disabled: item.disabled,
          }
        }, [item.label])
      ))
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
      }, props.options.map(
        (item) => h(ElCheckbox, {
          props: {
            label: item.value,
            disabled: item.disabled,
          },
        }, [item.label])
      ))
    case 'date':
    case 'datetime':
      return h(ElDatePicker, {
        props: {
          value: formDate.value[props.key],
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
          // 原生属性
          name: context.attrs.name,
          placeholder: context.attrs.placeholder,
        },
        on: {
          input(value) {
            formDate.value[props.key] = value
          }
        }
      })
    case 'switch':
      return h(ElSwitch, {
        props: {
          value: formDate.value[props.key],
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
        },
        on: {
          input(value) {
            formDate.value[props.key] = value
          }
        }
      })

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
      }, props.options.map(
        (item) => h(ElOption, {
          props: {
            label: item.label,
            value: item.value,
            disabled: item.disabled,
          }
        })
      ))
    case 'upload':
    case 'file':
      return h(ElUpload, {
        props: {
          fileList: formDate.value[props.key],
          disabled: props.disabled,
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
          // fileList: props.fileList,
          httpRequest: props.httpRequest,
          limit: props.limit,
          onExceed: props.onExceed,
          name: context.attrs.name,
        }
      }, [
        h(ElButton, {
          props: {
            type: 'primary',
            size: 'small',
          }
        }, ['点击上传']),
        h('div', {
          class: 'el-upload__tip',
          slot: 'tip',
        }, [props.tip])
      ]
      )
    case 'button':
    case 'submit':
      return h(ElButton, {
        props: {
          text: props.text,
          disabled: props.disabled,
          type: props.hue
        },
        on: {
          click: props.type === 'submit' ? () => {
            formRef.value.validate((valid) => {
              valid && props.onSubmit ? props.onSubmit(formDate.value) : context.emit('submit', formDate.value)
            })
          } : (event) => {
            props.onClick(event)
          }
        }
      }, [props.text && props.text])
  }
}

export default renderInput