<template>
  <div class="demo">
    <div class="demo-source language-vue" v-html="decodeURIComponent(source)" />
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