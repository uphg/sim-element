<template>
  <div class="test-form">
    <s-form>
      <s-form-item v-model="input1" />
    </s-form>
    <p>{{ input1 }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const input1 = ref('')
</script>