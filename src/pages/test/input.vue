<template>
  <div class="test-input">
    <s-demo>
      <s-input ref="inputRef" v-model="input1" tabindex="1" />
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
      slot 方式：
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
      <br><br>
      <s-input type="textarea" v-model="input1" autosize></s-input>
      <br><br>
      <s-input type="textarea" v-model="input1" :autosize="{ minRows: 2, maxRows: 4}"></s-input>
      <br><br>
      <div>
        <s-input placeholder="请输入内容" v-model="input1">
          <template slot="prepend">Http://</template>
        </s-input>
      </div>
      <div style="margin-top: 15px;">
        <s-input placeholder="请输入内容" v-model="input1">
          <template slot="append">.com</template>
        </s-input>
      </div>
      <div style="margin-top: 15px;">
        <s-input placeholder="请输入内容" v-model="input1" class="input-with-select">
          <s-input type="select" slot="prepend" v-model="select" :options="options" placeholder="请选择"></s-input>
          <s-input type="button" slot="append" icon="el-icon-search"></s-input>
        </s-input>
      </div>
    </s-demo>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import { options } from './_common';

// Input
const input1 = ref(null)
const select = ref(null)
const inputRef = ref(null)

nextTick(() => {
  console.log('inputRef.value')
  console.log(inputRef.value)
  console.log(inputRef.value.focus())
})
</script>