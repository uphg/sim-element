<template>
  <div class="app">
    <Docs />
  </div>
</template>

<script>
import FormTest from "./components/form-test.vue"
import FormBoxDemo from "./components/form-box-demo.vue"
import Docs from './docs/index.md'

export default {
  components: { FormTest, FormBoxDemo, Docs }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
