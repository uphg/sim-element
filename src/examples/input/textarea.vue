<template>
  <s-input type="textarea" v-model="input" :rows="2" placeholder="请输入内容" />
</template>

<script setup>
import { ref } from 'vue';

const input = ref('')
</script>