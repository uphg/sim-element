<template>
  <div class="test-button">
    <s-demo>
      <s-input ref="buttonRef" type="button" text="hello" @click="onClickButton" @focus="onFocusButton"></s-input>
      <s-input type="button">hi</s-input>
    </s-demo>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const buttonRef = ref(null)

function onClickButton() {
  console.log('按钮被点击了')
}

function onFocusButton() {
  console.log('按钮被聚焦了')
}

setTimeout(() => {
  console.log(buttonRef.value.focus())
})
</script>
