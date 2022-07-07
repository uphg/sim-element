<template>
  <div class="form-box-demo">
    <p style="width: 320px;">
      <s-form-input
        type="text"
        v-model="input"
      />
      {{ input }}
    </p>
    <p>
      <s-form-input
        type="select"
        :options="[
          { label: '选项1', value: 1 },
          { label: '选项2', value: 2 },
          { label: '选项3', value: 3 },
        ]"
        v-model="select"
      />
      {{ select }}
    </p>
    <p>
      <p>改变 type</p>
      <s-form-input v-model="autoInput" :type="autoType" ></s-form-input>
      <button @click="clickButton">改变</button>
    </p>
    <p>
      <s-form-input v-model="autoInput" :type="autoType" ></s-form-input>
    </p>
    <p>
      <s-form-input
        type="radio"
        v-model="radio"
        :options="[
          { label: '选项1', value: 1 },
          { label: '选项2', value: 2 },
          { label: '选项3', value: 3 },
        ]"
        @input="onInputRadio"
      ></s-form-input>
    </p>
  </div>
</template>
<script>
import { FormInput as SFormInput } from '../lib'

export default {
  components:{ SFormInput },
  data() {
    return {
      input: '',
      select: '',
      autoType: 'text',
      autoInput: '',
      radio: 1
    }
  },
  methods: {
    clickButton() {
      this.autoType = this.autoType === 'text' ? 'password' : 'text'
    },
    onInputRadio(value) {
      console.log('onInputRadio')
      console.log(value)
    }
  }
}
</script>

<style>
.form-box-demo {
  padding: 0 20px;
  border: 1px solid blueviolet;
  min-height: 50vh;
  max-width: 80vw;
  margin: 0 auto;
}
</style>