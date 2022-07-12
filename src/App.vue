<template>
  <div class="app">
    <Docs />
    <Test />
  </div>
</template>

<script setup>
import Docs from './docs/index.md'
import Test from './components/test.vue'

</script>

<style>
.app {
  padding: 30px 16px;
  max-width: 700px;
  margin: 0 auto;
}
</style>
