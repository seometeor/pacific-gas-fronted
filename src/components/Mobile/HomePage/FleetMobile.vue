<template>
    <div class="fleet-style">
        <div class="paragraph">
            <p class="title">{{ $t('home.about') }}<span style="color: green;">{{ $t('home.us') }}</span></p>
            <p :class="{ 'content-En': !isChActive, 'content-Ch': isChActive }" class="content">{{ $t('fleet.paragraph1') }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { bus } from "@/utils/eventbus";
import { onBeforeUnmount, onMounted, ref } from "vue";
const isChActive = ref(false)
onMounted(() => {
    if (sessionStorage.getItem("isChActive") == 'true') {
        isChActive.value = true
    } else {
        isChActive.value = false
    }
    bus.on("isChActive", (info: any) => {
        isChActive.value = info
    })
})
onBeforeUnmount(() => {
    bus.off('isChActive')
})
</script>

<style scoped lang="less">
.paragraph {
    overflow: hidden;
    color: #000;
    padding: 20px;
    position: relative;
}

.title {
    color: #000;
    margin: 0;
    font-size: 24px;
    font-weight: bold;
}

.content {
    text-align: left;
    padding: 1rem;
    margin-left: 0.5rem;
}

.fleet-style {
    background: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
}

.content-En {
    font-size: 14px;
}

.content-Ch {
    font-size: 14px;
    text-align: justify;
    letter-spacing: 2px;
}
</style>