<template>
    <div class="dataAxis-style">
        <TimeLineNew />
        <Waves />
    </div>
</template>

<script setup lang="ts">
import TimeLine from '@/components/TimeLine.vue'
import Waves from '@/components/Waves.vue'
import TimeLineNew from '@/components/TimeLineNew.vue';
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