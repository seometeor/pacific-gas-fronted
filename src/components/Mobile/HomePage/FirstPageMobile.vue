<template>
    <div style="width: 100vw;">
        <video :src="getVideoUrl('firstPage.mp4')" poster="@/assets/images/firstPage.png" controls muted preload="auto"
            autoplay style="width:100%; height:100%; object-fit:fill" webkit-playsinline="true" x-webkit-airplay="true"
            playsinline="true" x5-video-player-type="h5" x5-video-orientation="h5" x5-video-player-fullscreen="true">
        </video>
    </div>
</template>
<script lang="ts" setup>
import { getVideoUrl } from "@/utils/getVideoUrl";
</script>
  