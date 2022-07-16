<template>
  <div class="test-radio">
    <s-block title="基础用法">
      <s-input
        type="radio"
        v-model="value"
        :options="options"
        @change="onChangeRadio"
        @input="onInputRadio"
      />
      <p>{{ value }}</p>
    </s-block>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { options } from './_common';

const value = ref(0)

function onChangeRadio(value) {
  console.log('radio change')
  console.log(value)
}

function onInputRadio(value) {
  console.log('input - radio')
  console.log(value)
}
</script>