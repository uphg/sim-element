<template>
  <div>
    <s-block>
      <s-input
        type="radio"
        v-model="radio"
        :options="options"
        @change="onChangeRadio"
      />
      <p>{{ radio }}</p>
    </s-block>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { options } from './_common';

const radio = ref(0)

function onChangeRadio(value) {
  // console.log('change - radio')
  // console.log(value)
}
</script>