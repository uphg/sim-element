<template>
  <div class="test-formulate">
    <s-formulate :data="data" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

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
    maxlength: 11,
    rules: [
      { required: true, message: `请输入确认密码`, trigger: 'blur' },
      { min: 6, message: `最小长度在 6 个字符以上`, trigger: 'blur' }
    ]
  },
  {
    type: 'date',
    key: 'date',
    label: '活动时间',
    rules: [
      { required: true, message: `请选择活动时间`, trigger: 'blur'  }
    ]
  },
  {
    type: 'switch',
    key: 'delivery',
    label: '即时配送',
    rules: [
      { required: true, message: `请选择是否即时配送`, trigger: 'blur'  }
    ]
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
    ],
    rules: [
      { required: true, message: `请选择活动区域`, trigger: 'blur' }
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
    ],
    rules: [
      { required: true, message: `请选择活动性质`, trigger: 'blur' }
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
    ],
    rules: [
      { required: true, message: `请选择特殊资源`, trigger: 'blur' }
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
    },
    rules: [
      { required: true, message: `请选择上传文件`, trigger: 'blur'  }
    ]
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

const data = {
  labelPosition: 'left',
  labelWidth: '80px',
  fileds,
}
</script>

<style lang="scss">
.test-formulate {
  .el-upload__tip {
    line-height: 1em;
  }
}
</style>