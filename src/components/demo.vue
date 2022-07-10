<template>
  <div class="demo">
    <div>
      <div class="example-source language-vue" v-html="decodeURIComponent(source)" />
    </div>
    <p>{{ path }}</p>
    <!-- <component :is="codeComponent.default" /> -->
  </div>
</template>

<script>
export default {
  props: {
    source: String,
    path: String,
    code: {
      type: Object
    }
  },
  setup(props) {
    console.log('props.code')
    console.log(props.code)
  }
}
</script>