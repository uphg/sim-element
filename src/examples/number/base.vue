<template>
  <s-input type="number" v-model="number" />
</template>

<script setup>
import { ref } from 'vue';

const number = ref(1)
</script>