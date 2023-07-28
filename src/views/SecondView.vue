<template>
  <Second />
  <Footer />
</template>

<script setup lang="ts">
import Second from '@/components/PC/Second.vue'
import Footer from '@/components/PC/Footer.vue';
</script>

<style>
body {
  margin: 0;
  padding: 0;
  overflow: auto;
}

body::-webkit-scrollbar {
  display: none;
}
</style>
