<template>
    <div class="fleet-style" :style="{ backgroundImage: 'url(' + getImgUrl('fleetList.png') + ')' }">
        <div class="paragraph">
            <p :class="{ 'content-En': !state.isChActive, 'content-Ch': state.isChActive }">{{ $t('fleet.paragraph1') }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { bus } from "@/utils/eventbus";
import { getImgUrl } from "@/utils/getImgUrl";
import { onBeforeUnmount, onMounted, reactive } from "vue";
const state = reactive({
    isChActive: false,
})
onMounted(() => {
    bus.on("isChActive", (info: any) => {
        state.isChActive = info
    })
})
onBeforeUnmount(() => {
    bus.off('isChActive')
})
</script>

<style scoped>
.fleet-style {
    height: 92vh;
    background: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
}

@media screen and (max-width:1366px) {
    .paragraph {
        overflow: hidden;
        color: #fff;
        padding: 10px 10px 10px 10px;
        position: relative;
        width: -webkit-fill-available;
        text-align: left;
        padding-top: 25vh;
        padding-left: 5vw;
    }

    .content-En {
        font-size: 14px;
        width: 30vw;
        letter-spacing: 2px;
        text-align: justify;
    }

    .content-Ch {
        padding-top: 5vh;
        font-size: 14px;
        width: 30vw;
        letter-spacing: 2px;
        line-height: 5vh;
        text-align: justify;
    }
}

@media screen and (min-width:1367px) {
    .paragraph {
        overflow: hidden;
        color: #fff;
        padding: 10px 10px 10px 10px;
        position: relative;
        width: -webkit-fill-available;
        text-align: left;
        padding-left: 5vw;
        padding-top: 20vh;
    }

    .content-En {
        font-size: 18px;
        width: 30vw;
        letter-spacing: 2px;
        line-height: 3.5vh;
        text-align: justify;
    }

    .content-Ch {
        font-size: 18px;
        width: 30vw;
        letter-spacing: 2px;
        line-height: 5vh;
        padding-top: 5vh;
        text-align: justify
    }
}
</style>