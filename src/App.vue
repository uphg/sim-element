

<template>
  <div>
    <form-test />
    <FormBoxDemo />
  </div>
</template>

<script>
import FormTest from "./components/form-test.vue"
import FormBoxDemo from "./components/form-box-demo.vue"

export default {
  components: { FormTest, FormBoxDemo }
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
