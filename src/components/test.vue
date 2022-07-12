<template>
  <div class="test">
    <br>
    <hr>
    <h2>Select</h2>
    <s-demo>
      <s-input
        type="select"
        v-model="select"
        :options="options"
        @change="onChangeSelect"
        @blur="onBlurSelect"
      />
    </s-demo>
    <h2>Radio</h2>
    <s-demo>
      <s-input
        type="radio"
        v-model="radio"
        :options="options"
        @change="onChangeRadio"
      />
      <p>{{ radio }}</p>
    </s-demo>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const options = [
  { label: '选项一', value: 0 },
  { label: '选项二', value: 1 },
  { label: '选项三', value: 2 }
]

// Select
const select = ref(null)

function onChangeSelect(value) {
  console.log('change - select')
  console.log(value)
}

function onBlurSelect(event) {
  console.log('blur - select')
  console.log(event)
}

// Radio
const radio = ref(0)

function onChangeRadio(value) {
  console.log('change - radio')
  console.log(value)
}
</script>