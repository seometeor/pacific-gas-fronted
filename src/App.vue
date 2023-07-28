<template>
  <div style="text-align: center">
    <el-container style="position: relative;">
      <el-header style="padding: 0;height: 100%;">
        <HeaderMobile v-if="isMobile()" />
        <Header v-else />
      </el-header>
      <el-main style="padding: 0;height: 100%; margin-top: 8vh;">
        <RouterView />
      </el-main>
    </el-container>

  </div>
</template>

<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { onMounted } from 'vue';
import Header from '@/components/PC/Header.vue';
import HeaderMobile from './components/Mobile/HeaderMobile.vue';

const router = useRouter();
const isMobile = () => {
  let flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  return flag;
}
onMounted(() => {
  if (isMobile()) {
    router.replace('/homeMobile');
  } else {
    router.replace('/homePC');
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
