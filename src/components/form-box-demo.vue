<template>
  <div class="form-box-demo">
    <p style="width: 320px;">
      <s-form-input
        type="text"
        v-model="input"
      />
      <p>{{ input }}</p>
    </p>
    <p style="width: 320px;">
      <s-form-input
        type="password"
        v-model="input"
      />
      <p>{{ input }}</p>
    </p>
    <p style="width: 320px;">
      <s-form-input
        type="textarea"
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
    <p>
      <s-form-input
        type="number"
        v-model="inputNumber"
        @input="onInputNumber"
        @change="onChangeInputNumber"
      ></s-form-input>
    </p>
    <p>
      <s-form-input
        type="switch"
        v-model="switchValue"
      ></s-form-input>
      <p>{{ switchValue }}</p>
    </p>
    <p>
      <s-form-input
        type="slider"
        v-model="slider"
      ></s-form-input>
      <p>{{ slider }}</p>
    </p>
    <p>
      <s-form-input
        type="time"
        v-model="time"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30'
        }"
      ></s-form-input>
      <p>{{ time }}</p>
    </p>
    <p>
      <s-form-input
        type="date"
        v-model="date"
      ></s-form-input>
      <p>{{ date }}</p>
    </p>
    <p>
      <s-form-input
        type="datetime"
        v-model="datetime"
      ></s-form-input>
      <p>{{ datetime }}</p>
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
      checkbox: [],
      inputNumber: 0,
      switchValue: false,
      slider: 0,
      time: '',
      date: '',
      datetime: '',
    }
  },
  methods: {
    clickButton() {
      this.autoType = this.autoType === 'text' ? 'password' : 'text'
    },
    onInputRadio(value) {
    },
    onInputNumber(value) {
            console.log('onInputNumber 触发')
      console.log(value)
    },
    onChangeInputNumber(value) {
      // console.log('onChangeInputNumber 触发')
      // console.log(value)
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
  min-height: 1.6em;
}
</style>