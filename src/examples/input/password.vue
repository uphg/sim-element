<template>
  <s-input type="password" v-model="password" placeholder="请输入密码" />
</template>

<script setup>
import { ref } from 'vue';

const password = ref('')
</script>