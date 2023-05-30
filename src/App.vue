<template>
  <div style="text-align: center">
    <el-container style="position: relative;">
      <el-header style="padding: 0;height: 100%;">
        <Header />
      </el-header>
      <el-main style="padding: 0;height: 100%; margin-top: 8vh;">
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import { onMounted } from 'vue';
onMounted(() => {
  window.onbeforeunload = function (e) {
    var storage = window.localStorage;
    storage.clear()
  }
})
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

.el-sub-menu .el-sub-menu__icon-arrow {
  display: none;
}

a {
  text-decoration: none
}
</style>
