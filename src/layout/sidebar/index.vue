<template>
  <aside class="sidebar">
    <section class="sidebar-group">
      <div class="title"></div>
      <div class="items">
        <router-link></router-link>
      </div>
    </section>
  </aside>
</template>

<script setup>
const sidebars = [
  {
    title: '',
    children: [
      {
        title: '',
        link: ''
      }
    ]
  }
]
</script>