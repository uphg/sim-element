<template>
  <s-input type="text" v-model="input" placeholder="请输入内容" />
</template>

<script setup>
import { ref } from 'vue';

const input = ref('')
</script>