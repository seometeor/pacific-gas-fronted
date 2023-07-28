<template>
    <div class="fleet-style" :style="{ backgroundImage: 'url(' + getImgUrl('fleetList.png') + ')' }">
        <div class="paragraph">
            <p :class="{ 'content-En': !isChActive, 'content-Ch': isChActive }">{{ $t('fleet.paragraph1') }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { bus } from "@/utils/eventbus";
import { getImgUrl } from "@/utils/getImgUrl";
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
        padding-top: 20vh;
        padding-left: 7vw;
        color: rgba(0, 0, 0, 0.5);
        text-shadow: 0px 0px 1px #005782;
    }

    .content-En {
        font-size: 14px;
        width: 34vw;
        letter-spacing: 0.5px;
        line-height: 3.5vh;
        text-align: justify;
    }

    .content-Ch {
        padding-top: 5vh;
        font-size: 14px;
        width: 34vw;
        letter-spacing: 1px;
        line-height: 5vh;
        text-align: justify;
    }
}

@media screen and (min-width:1367px) {
    .paragraph {
        overflow: hidden;
        padding: 10px 10px 10px 10px;
        position: relative;
        width: -webkit-fill-available;
        text-align: left;
        padding-left: 7vw;
        padding-top: 20vh;
        color: rgba(0, 0, 0, 0.5);
        text-shadow: 0px 0px 1px #005782;
    }

    .content-En {
        font-size: 18px;
        width: 34vw;
        letter-spacing: 0.5px;
        line-height: 4vh;
        text-align: justify;
    }

    .content-Ch {
        font-size: 18px;
        width: 34vw;
        letter-spacing: 1px;
        line-height: 6vh;
        padding-top: 5vh;
        text-align: justify
    }
}
</style>