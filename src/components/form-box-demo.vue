<template>
  <div class="form-box-demo">
    <p>
      <s-form-input
        type="input"
        v-model="input"
      />
      {{ input }}
    </p>
  </div>
</template>
<script>
import { FormInput as SFormInput } from '../lib'

export default {
  components:{ SFormInput },
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style>
.form-box-demo {
  border: 1px solid blueviolet;
  min-height: 50vh;
  max-width: 80vw;
  margin: 0 auto;
}
</style>