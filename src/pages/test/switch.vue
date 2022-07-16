<template>
  <div class="test-switch">
    <s-block title="基本用法">
      <s-input
        type="switch"
        v-model="value"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </s-input>
    </s-block>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('')
</script>
