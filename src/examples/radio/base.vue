<template>
  <s-input type="radio" v-model="radio" :options="options" />
</template>

<script setup>
import { ref } from 'vue';

const radio = ref(0)
const options = ref([
  { label: '选项一', value: 0 },
  { label: '选项二', value: 1 },
  { label: '选项三', value: 2, disabled: true },
  { label: '选项四', value: 3 }
])
</script>