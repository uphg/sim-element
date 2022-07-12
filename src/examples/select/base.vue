<template>
  <s-input type="select" v-model="select" :options="options" />
</template>

<script setup>
import { ref } from 'vue';

const select = ref(null)
const options = ref([
  { label: '选项一', value: 0 },
  { label: '选项二', value: 1 },
  { label: '选项三', value: 2 }
])
</script>