<template>
  <div>
    <s-formulate ref="formRef" :data="data" />
    <el-button @click="onClick">提交</el-button>
    <el-button @click="onClickSetForm">设置表单</el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Button as ElButton } from 'element-ui'
import errorFormat from '../../utils/errorFormat'

const data = {
  labelPosition: 'left',
  labelWidth: '80px',
  withValidate: true,
  errorFormat,
  fileds: {
    name: {
      label: '活动名称'
    },
    region: {
      type: 'select',
      label: '活动区域',
      options: [
        { label: '区域1', value: 0 },
        { label: '区域2', value: 1 }
      ]
    }
  }
}

const formRef = ref(null)

function onClick() {
  formRef.value.submit((formData, { valid, errors }) => {

  })
}

function onClickSetForm() {
  formRef.value.formData.name = 'hi'
  formRef.value.formData = { region: 1 }
}
</script>