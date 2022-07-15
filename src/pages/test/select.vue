<template>
  <div class="test-select">
    <s-demo>
      <s-input
        class="hi"
        type="select"
        v-model="select1"
        :options="options"
        placeholder="hi"
        @change="onChangeSelect"
        @blur="onBlurSelect"
      />
      <s-input
        class="hi"
        type="select"
        v-model="select2"
        :options="options"
        placeholder="hi"
        @change="onChangeSelect"
        @blur="onBlurSelect"
        multiple
      />
      <br>
      <br>
      <s-input
        class="hi"
        type="select"
        v-model="select3"
        :options="options"
        placeholder="hi"
        clearable
      />
    </s-demo>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { options } from './_common';

const select1 = ref(null)
const select2 = ref(null)
const select3 = ref(null)

function onChangeSelect(value) {
  // console.log('change - select')
  // console.log(value)
}

function onBlurSelect(event) {
  // console.log('blur - select')
  // console.log(event)
}

</script>