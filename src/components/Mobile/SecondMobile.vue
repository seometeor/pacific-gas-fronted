<template>
    <el-container>
        <el-main>
            <RouterView :key="$route.fullPath" />
        </el-main>
    </el-container>
    <FooterMobile />
</template>
  
<script setup lang="ts">
import FooterMobile from './FooterMobile.vue';
</script>
  
<style scoped lang="less">
.el-main {
    width: 100vw;
}
</style>
  