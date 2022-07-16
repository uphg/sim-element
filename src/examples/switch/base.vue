<template>
  <s-input
    type="switch"
    v-model="value"
    active-color="#13ce66"
    inactive-color="#ff4949">
  </s-input>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('')
</script>
