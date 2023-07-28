<template>
  <el-container>
    <el-aside>
      <Menu />
    </el-aside>
    <el-main>
      <RouterView :key="$route.fullPath" />
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import Menu from './SecondaryPage/Menu.vue';
</script>


<style scoped lang="less">
.el-main {
  width: 100vw;
}
</style>
