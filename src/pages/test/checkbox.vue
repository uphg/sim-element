<template>
  <div class="test-checkbox">
    <s-block>
      <s-input
        type="checkbox"
        v-model="checkbox"
        :options="options"
        @change="onChangeCheckbox"
      />
      <p>{{ checkbox }}</p>
    </s-block>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const checkbox = ref([])

function onChangeCheckbox(value) {
  console.log('checkbox - value')
  console.log(value)
}
</script>