<template>
  <div class="app">
    <Docs />
  </div>
</template>

<script>
import Docs from './docs/index.md'

export default {
  components: { Docs }
}
</script>

<style>
.app {
  padding: 30px 16px;
  max-width: 700px;
  margin: 0 auto;
}
</style>
