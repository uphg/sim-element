<template>
  <s-formulate :data="data" />
</template>

<script setup>
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
    },
    $footer: {
      $submit: {
        text: '提交',
        hue: 'primary',
        onSubmit(formData) {
          console.log(formData)
        }
      },
      $button: {
        text: '取消',
        onClick() {
          console.log('点击取消')
        }
      }
    }
  }
}
</script>