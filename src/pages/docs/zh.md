# Sim Element

更易于使用，基于数据的 Element 组件。

## Formulate 组件

根据传入数据定制 form 表单，基本用法

<s-demo :component="FormulateDolar" />

:::code

formulate/dolar

:::

数组类型 fileds

<s-demo :component="FormulateBase" />

:::code

formulate/base

:::

封装 errorFormat 示例

```js
const selectTypes = [
  'select', 'checkbox', 'radio', 'switch', 
  'date', 'year', 'month', 'dates', 'week',
  'daterange', 'monthrange', 'datetime', 'datetimerange'
]

function errorFormat({ type, label, key }) {
  let prefix
  if (selectTypes.includes(type)) {
    prefix = '请选择'
  } else if (['file', 'upload'].includes(type)) {
    prefix = '请上传'
  } else {
    prefix = '请输入'
  }
  return [
    { required: true, message: prefix + label, trigger: 'blur' }
  ]
}
```


## Button 按钮

设置 `type="button"`，即可使用 Button 按钮

<s-demo :component="ButtonBase" />

:::code

button/base

:::

由于与默认 `<el-button>` 的 `type` 属性属性冲突，该属性转为 `hue`（`type -> hue`）

其他属性见：[Button 按钮 - Attributes](https://element.eleme.cn/#/zh-CN/component/button#attributes)

## Input 输入框

### text 文本输入框

设置 `type="text"`，使用 Input 输入框

<s-demo :component="InputBase" />

:::code

input/base

:::

属性配置见：[Input 输入框 - Input Attributes](https://element.eleme.cn/#/zh-CN/component/input#input-attributes)

### 密码输入框

设置 `type="password"`，展示密码输入框

<s-demo :component="InputPassword" />

:::code

input/password

:::

### 多行文本输入框

设置 `type="textarea"`，展示多行文本框

<s-demo :component="InputTextarea" />

:::code

input/textarea

:::


## Number 计数器

设置 `type="number"`，使用计数器

<s-demo :component="NumberBase" />

:::code

number/base

:::

属性配置见：[InputNumber 计数器 - Attributes](https://element.eleme.cn/#/zh-CN/component/input-number#attributes)

## Select 选择器

设置 `type="select"`，使用 Select 下拉选框

<s-demo :component="SelectBase" />

:::code

select/base

:::

属性配置见：[Select 选择器 - Select Attributes](https://element.eleme.io/#/zh-CN/component/select#select-attributes)

## Radio 单选框

设置 `type="radio"`，使用单选框

<s-demo :component="RadioBase" />

:::code

radio/base

:::

属性配置见：[Radio 单选框 - Radio Attributes](https://element.eleme.io/#/zh-CN/component/radio#radio-attributes)

## Checkbox 多选框

设置 `type="checkbox"`，使用多选框

<s-demo :component="CheckboxBase" />

:::code

checkbox/base

:::

属性配置见：[Checkbox 多选框 - Checkbox Attributes](https://element.eleme.io/#/zh-CN/component/checkbox#checkbox-attributes)


## Switch 开关

设置 `type="switch"`，使用开关组件

<s-demo :component="SwitchBase" />

:::code

switch/base

:::

属性配置见：[Switch 开关 - Attributes](https://element.eleme.io/#/zh-CN/component/select#select-attributes)

## DatePicker 日期选择器

设置 `type="date"`，使用日期选择器

<s-demo :component="DateBase" />

:::code

date/base

:::

属性配置见：[DatePicker 日期选择器 - Attributes](https://element.eleme.io/#/zh-CN/component/date-picker#attributes)

<script setup>
import FormulateDolar from 'src/examples/formulate/dolar.vue'
import FormulateBase from 'src/examples/formulate/base.vue'
import ButtonBase from 'src/examples/button/base.vue'
import InputBase from 'src/examples/input/base.vue'
import InputPassword from 'src/examples/input/password.vue'
import InputTextarea from 'src/examples/input/textarea.vue'
import NumberBase from 'src/examples/number/base.vue'
import SelectBase from 'src/examples/select/base.vue'
import RadioBase from 'src/examples/radio/base.vue'
import CheckboxBase from 'src/examples/checkbox/base.vue'
import SwitchBase from 'src/examples/switch/base.vue'
import DateBase from 'src/examples/date/base.vue'
</script>
