<template>
  <div class="test-form">
    <s-form>
      <s-form-item v-model="input1" />
      <s-form-item type="number" v-model="number1" />
      <s-form-item type="select" v-model="select1" :options="options" />
      <s-form-item type="radio" v-model="radio1"  :options="options"/>
    </s-form>
    <p>{{ input1 }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const input1 = ref('')
const number1 = ref('')
const select1 = ref(0)
const radio1 = ref('')

const options = [
  { label: '选项1', value: 0 },
  { label: '选项2', value: 1 },
  { label: '选项3', value: 2, disabled: true },
  { label: '选项4', value: 3 }
]
</script>