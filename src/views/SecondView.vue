<template>
  <!-- <el-scrollbar max-height="calc(100vh)"> -->
  <Second />
  <Footer />
  <!-- </el-scrollbar> -->
</template>

<script setup lang="ts">
import Second from '../components/Second.vue'
import Footer from '@/components/Footer.vue';
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
