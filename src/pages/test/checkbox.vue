<template>
  <div class="test-checkbox">
    <s-block>
      <s-input
        type="checkbox"
        v-model="checkbox"
        :options="options"
        @change="onChangeCheckbox"
        @input="onInputCheckbox"
      />
      <p>{{ checkbox }}</p>
    </s-block>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { options } from './_common';

const checkbox = ref([])

function onChangeCheckbox(value) {
  console.log('change - checkbox')
  console.log(value)
}

function onInputCheckbox(value) {
  console.log('input - value')
  console.log(value)
}

function onBlurCheckbox(value) {
  console.log('blur - value')
  console.log(value)
}
</script>