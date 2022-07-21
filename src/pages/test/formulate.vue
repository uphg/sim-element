<template>
  <div class="test-formulate">
    <s-formulate ref="formRef" :data="data" />
    <br>
    <s-formulate :data="data2" />
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue';

const formRef = ref(null)

const fileds = [
  {
    key: 'username',
    label: '用户名',
    exclude: /[^\w]/g,
    maxlength: 20,
    rules: [
      { required: true, message: `请输入用户名`, trigger: 'blur' },
      { min: 6, message: `最小长度在 6 个字符以上`, trigger: 'blur' }
    ]
  },
  {
    type: 'password',
    key: 'password',
    label: '密码',
    exclude: /[\u4E00-\u9FA5\s]/g,
    maxlength: 20,
    rules: [
      { required: true, message: `请输入密码`, trigger: 'blur' },
      { min: 6, message: `最小长度在 6 个字符以上`, trigger: 'blur' }
    ]
  },
  {
    key: 'checkPassword',
    label: '确认密码',
    showPassword: true,
    exclude: /[\u4E00-\u9FA5\s]/g,
    maxlength: 20,
    rules: [
      { required: true, message: `请输入确认密码`, trigger: 'blur' },
      { min: 6, message: `最小长度在 6 个字符以上`, trigger: 'blur' }
    ]
  },
  {
    key: 'phone',
    label: '手机号',
    exclude: /^0|[^\d]/g,
    maxlength: 11
  },
  {
    type: 'date',
    key: 'date',
    label: '活动时间',
    valueFormat: 'timestamp'
  },
  {
    type: 'number',
    key: 'number',
    label: '数量',
    max: 10,
    min: 2
  },
  {
    type: 'switch',
    key: 'delivery',
    label: '即时配送'
  },
  {
    type: 'select',
    key: 'region',
    label: '活动区域',
    options: [
      { label: '区域1', value: 0 },
      { label: '区域2', value: 1 },
      { label: '区域3', value: 2, disabled: true },
      { label: '区域4', value: 3 }
    ]
  },
  {
    type: 'checkbox',
    key: 'type',
    label: '活动性质',
    options: [
      { label: '区域1', value: 0 },
      { label: '区域2', value: 1 },
      { label: '区域3', value: 2, disabled: true },
      { label: '区域4', value: 3 }
    ]
  },
  {
    type: 'radio',
    key: 'resource',
    label: '特殊资源',
    options: [
      { label: '区域1', value: 0 },
      { label: '区域2', value: 1 },
      { label: '区域3', value: 2, disabled: true },
      { label: '区域4', value: 3 }
    ]
  },
  {
    type: 'file',
    key: 'file',
    label: '上传文件',
    action: 'https://jsonplaceholder.typicode.com/posts/',
    tip: '只能上传jpg/png文件，且不超过500kb',
    onPreview(file) {
      console.log(file);
    },
    onRemove(file, fileList) {
      console.log(file, fileList);
    }
  },
  [
    {
      type: 'submit',
      text: '提交',
      hue: 'primary',
      onSubmit(formData) {
        console.log('formData')
        console.log(formData)
      }
    },
    {
      type: 'button',
      text: '取消',
      onClick() {

      }
    }
  ]
]

const fileds2 = {
  username: {
    label: '用户名',
    exclude: /[^\w]/g,
    maxlength: 20,
    rules: [
      { required: true, message: `请输入用户名`, trigger: 'blur' },
      { min: 6, message: `最小长度在 6 个字符以上`, trigger: 'blur' }
    ]
  },
  password: {
    type: 'password',
    label: '密码',
    exclude: /[\u4E00-\u9FA5\s]/g,
    maxlength: 20,
    rules: [
      { required: true, message: `请输入密码`, trigger: 'blur' },
      { min: 6, message: `最小长度在 6 个字符以上`, trigger: 'blur' }
    ]
  },
  checkPassword: {
    label: '确认密码',
    showPassword: true,
    exclude: /[\u4E00-\u9FA5\s]/g,
    maxlength: 20,
    rules: [
      { required: true, message: `请输入确认密码`, trigger: 'blur' },
      { min: 6, message: `最小长度在 6 个字符以上`, trigger: 'blur' }
    ]
  },
  phone: {
    label: '手机号',
    exclude: /^0|[^\d]/g,
    maxlength: 11
  },
  date: {
    type: 'date',
    label: '活动时间',
    valueFormat: 'timestamp'
  },
  number: {
    type: 'number',
    label: '数量',
    max: 10,
    min: 2
  },
  delivery: {
    type: 'switch',
    label: '即时配送'
  },
  region: {
    type: 'select',
    label: '活动区域',
    options: [
      { label: '区域1', value: 0 },
      { label: '区域2', value: 1 },
      { label: '区域3', value: 2, disabled: true },
      { label: '区域4', value: 3 }
    ]
  },
  type: {
    type: 'checkbox',
    label: '活动性质',
    options: [
      { label: '区域1', value: 0 },
      { label: '区域2', value: 1 },
      { label: '区域3', value: 2, disabled: true },
      { label: '区域4', value: 3 }
    ],
  },
  resource: {
    type: 'radio',
    label: '特殊资源',
    options: [
      { label: '区域1', value: 0 },
      { label: '区域2', value: 1 },
      { label: '区域3', value: 2, disabled: true },
      { label: '区域4', value: 3 }
    ]
  },
  file: {
    type: 'file',
    label: '上传文件',
    action: 'https://jsonplaceholder.typicode.com/posts/',
    tip: '只能上传jpg/png文件，且不超过500kb',
    onPreview(file) {
      console.log(file);
    },
    onRemove(file, fileList) {
      console.log(file, fileList);
    }
  },
  $chlidren: [
    {
      type: 'submit',
      text: '提交',
      hue: 'primary',
      onSubmit(formData) {
        console.log('formData')
        console.log(formData)
      }
    },
    {
      type: 'button',
      text: '取消',
      onClick() {

      }
    }
  ]
}

const data = {
  labelPosition: 'left',
  labelWidth: '80px',
  withValidator: true,
  fileds,
}

const data2 = {
  labelPosition: 'left',
  labelWidth: '80px',
  withValidator: true,
  fileds: fileds2,
}

console.log('formRef')
console.log(formRef)


onMounted(() => {
  formRef.value.setFormData({ username: 'Jack', phone: '15631102331', date: 1658412703406 })
})

nextTick(() => {
  
})
</script>

<style lang="scss">
.test-formulate {
  .el-upload__tip {
    line-height: 1em;
  }
}
</style>