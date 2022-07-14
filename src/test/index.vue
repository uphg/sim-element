<template>
  <div class="test">
    <h2>Button</h2>
    <s-demo>
      <s-input type="button" />
      <s-input type="button" >hi</s-input>
    </s-demo>
    <h2>Input - text</h2>
    <s-demo>
      <s-input v-model="input1" />
      <s-input v-model="input1" clearable/>
      <s-input v-model="input1" disabled />
      <br><br>
      <s-input type="password" v-model="input1" show-password/>
      <s-input type="password" v-model="input1" show-password clearable/>
      <br><br>
      <s-input type="textarea" v-model="input1"></s-input>
      <br><br>
      属性方式：
      <s-input suffix-icon="el-icon-date" placeholder="请选择日期" v-model="input1"></s-input>
      <s-input prefix-icon="el-icon-search" placeholder="请输入内容" v-model="input1"></s-input>
      <br><br>
      slot方式：
      <s-input
        placeholder="请选择日期"
        v-model="input1">
        <i slot="suffix" class="el-input__icon el-icon-date"></i>
      </s-input>
      <s-input
        placeholder="请输入内容"
        v-model="input1">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </s-input>
    </s-demo>
    <h2>Select</h2>
    <s-demo>
      <s-input
        class="hi"
        type="select"
        v-model="select"
        :options="options"
        placeholder="hi"
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
    <h2>Checkbox</h2>
    <s-demo>
      <s-input
        type="checkbox"
        v-model="checkbox"
        :options="options"
        @change="onChangeCheckbox"
      />
      <p>{{ checkbox }}</p>
    </s-demo>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Input as ElInput } from 'element-ui'

const options = [
  { label: '选项一', value: 0 },
  { label: '选项二', value: 1 },
  { label: '选项三', value: 2 }
]

const input1 = ref(null)

// Button

// Select
const select = ref(null)

function onChangeSelect(value) {
  // console.log('change - select')
  // console.log(value)
}

function onBlurSelect(event) {
  // console.log('blur - select')
  // console.log(event)
}

// Radio
const radio = ref(0)

function onChangeRadio(value) {
  // console.log('change - radio')
  // console.log(value)
}

// Checkbox
const checkbox =ref([])

function onChangeCheckbox(value) {
  console.log('checkbox - value')
  console.log(value)
}
</script>

<style lang="scss">
.test {
  .el-input {
    margin-right: 1em;
  }
}
</style>