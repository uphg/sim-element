<template>
  <s-input
    type="date"
    v-model="date">
  </s-input>
</template>

<script setup>
import { ref } from 'vue';

const date = ref('')
</script>