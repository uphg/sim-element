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
.app {
  padding: 30px 16px;
  max-width: 700px;
  margin: 0 auto;
}
</style>
