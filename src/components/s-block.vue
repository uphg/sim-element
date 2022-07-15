<template>
  <div class="sim-block">
    <h2 v-if="title">{{ title }}</h2>
    <s-demo>
      <slot />
    </s-demo>
  </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>
