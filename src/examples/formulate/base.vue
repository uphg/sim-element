<template>
  <s-formulate ref="formRef" class="sim-formulate" :data="data" />
</template>

<script setup>
import { ref } from 'vue';
import errorFormat from '../../utils/errorFormat'

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
    label: '活动时间'
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
    label: '证明文件',
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
        console.log(formData)
      }
    },
    {
      type: 'button',
      text: '清除校验',
      onClick() {
        console.log('点击取消')
        formRef.value.clearValidate()
      }
    }
  ]
]

const data = {
  labelPosition: 'left',
  labelWidth: '80px',
  withValidate: true,
  errorFormat,
  fileds,
}

const formRef = ref(null)
</script>

<style lang="scss">
.sim-formulate {
  .el-upload__tip {
    line-height: 1em;
  }
}
</style>