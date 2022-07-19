<template>
  <div class="test-formulate">
    <s-formulate label-position="left" label-width="80px" :fileds="fileds" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const fileds = ref([
  {
    key: 'username',
    label: '用户名',
    exclude: /[^\w]/g,
    maxLength: 20,
    rules: [
      { required: true, message: `请输入用户名`, trigger: 'blur' },
      { min: 6, message: `最小长度在 6 个字符以上`, trigger: 'blur' }
    ]
  },
  {
    key: 'password',
    label: '密码',
    exclude: /[\u4E00-\u9FA5\s]/g,
    maxLength: 20,
    rules: [
      { required: true, message: `请输入密码`, trigger: 'blur' },
      { min: 6, message: `最小长度在 6 个字符以上`, trigger: 'blur' }
    ]
  },
  {
    key: 'checkPassword',
    label: '确认密码',
    exclude: /[\u4E00-\u9FA5\s]/g,
    maxLength: 20,
    rules: [
      { required: true, message: `请输入确认密码`, trigger: 'blur' },
      { min: 6, message: `最小长度在 6 个字符以上`, trigger: 'blur' }
    ]
  },
  {
    type: 'select',
    key: 'region',
    label: '活动区域',
    exclude: /[\u4E00-\u9FA5\s]/g,
    maxLength: 20,
    options: [
      { label: '区域1', value: 0 },
      { label: '区域2', value: 1 },
      { label: '区域3', value: 2 },
      { label: '区域4', value: 3 }
    ],
    rules: [
      { required: true, message: `请输入确认密码`, trigger: 'blur' },
      { min: 6, message: `最小长度在 6 个字符以上`, trigger: 'blur' }
    ]
  }
])
</script>