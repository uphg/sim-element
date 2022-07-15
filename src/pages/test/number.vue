<template>
  <div class="test-number">
    <s-demo>
      <s-input type="number" v-model="number1" :max="5" :min="-1" /> 
      <s-input type="number" v-model="number2" disabled />
      <s-input type="number" v-model="number3" :step="2" />
      <br><br>
      <s-input type="number" v-model="number4" :step="2" step-strictly />
      <s-input type="number" v-model="number5" :precision="2" :step="0.1" :max="10" />
      <s-input type="number" v-model="number6" :step="2" controls-position="right"/>
    </s-demo>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const number1 = ref(0)
const number2 = ref(0)
const number3 = ref(0)
const number4 = ref(0)
const number5 = ref(1)
const number6 = ref(1)
</script>