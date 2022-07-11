<template>
  <div class="sim-code">
    <div class="code-source language-vue" v-html="decodeURIComponent(source)" />
  </div>
</template>

<script>
export default {
  props: {
    source: String,
    path: String
  }
}
</script>
