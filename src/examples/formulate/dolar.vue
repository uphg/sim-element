<template>
  <div>
    <s-formulate ref="formRef" :data="data" />
    <Button @click="onClick">提交</Button>
    <Button @click="onClickSetForm">设置表单</Button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Button } from 'element-ui'

const data = {
  labelPosition: 'left',
  labelWidth: '80px',
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
  const { formData } = formRef.value
  console.log('formData')
  console.log(formData)
}

function onClickSetForm() {
  formRef.value.formData.name = 'hi'
  formRef.value.formData = { region: 1 }
}
</script>