<template>
    <div class="dataAxis-style">
        <TimeLine />
        <Canvas />
    </div>
</template>

<script setup lang="ts">
import TimeLine from '@/components/PC/TimeLine.vue'
import Canvas from '@/components/PC/Canvas.vue';
</script>

<style scoped lang="less">
.dataAxis-style {
    position: relative;
    height: 92vh;
    overflow-y: hidden;
}
.container {
    width: 100%;
}
</style>