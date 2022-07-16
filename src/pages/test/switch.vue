<template>
  <div class="test-switch">
    <s-block title="基本用法">
      <s-input
        type="switch"
        v-model="value"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </s-input>
    </s-block>
    <s-block title="文字描述">
      <s-input
        type="switch"
        v-model="value2"
        active-text="按月付费"
        inactive-text="按年付费">
      </s-input>
      <br> <br>
      <s-input
        type="switch"
        style="display: block"
        v-model="value3"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="按月付费"
        inactive-text="按年付费">
      </s-input>
    </s-block>
    <s-block title="扩展的 value 类型">
      <s-input
        type="switch"
        v-model="value4"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-value="100"
        inactive-value="0">
      </s-input>
    </s-block>
    <s-block title="禁用状态">
      <s-input
        type="switch"
        v-model="value5"
        disabled>
      </s-input>
      <s-input
        type="switch"
        v-model="value6"
        disabled>
      </s-input>
    </s-block>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(true)
const value2 = ref(true)
const value3 = ref(true)
const value4 = ref('100')
const value5 = ref(false)
const value6 = ref(true)
</script>
