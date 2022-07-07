<template>
  <div class="form-box-demo">
    <p style="width: 320px;">
      <s-form-input
        type="text"
        v-model="input"
      />
      <p>{{ input }}</p>
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
      <p>{{ select }}</p>
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
      <p>{{ radio }}</p>
    </p>
    <p>
      <s-form-input
        type="checkbox"
        v-model="checkbox"
        :options="[
          { label: '选项1', value: 1 },
          { label: '选项2', value: 2 },
          { label: '选项3', value: 3 },
        ]"
      ></s-form-input>
      <p>{{ checkbox }}</p>
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
      radio: 1,
      checkbox: []
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
p {
  min-height: 2.2em;
}
</style>