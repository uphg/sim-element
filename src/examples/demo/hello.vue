<template>
  <div>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const msg = ref('hi')
    return {
      msg
    }
  }
}
</script>
