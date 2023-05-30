<template>
    <div class="story-style">
        <div class="story" :style="{ backgroundImage: 'url(' + getImgUrl('story.png') + ')' }">
            <div class="paragraph">
                <p>{{ $t('story.paragraph1') }}</p>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { getImgUrl } from "@/utils/getImgUrl";
</script>
  
<style scoped lang="less">
.story-style {
    height: 71vh;
    width: 100%;
}

.story {
    height: 51vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: no-repeat;
    background-size: cover;
    background-position: center;
}

@media screen and (min-width:1367px) {
    .paragraph {
        position: fixed;
        width: 60%;
        text-align: center;
        color: #fff;
        letter-spacing: 2px;

        p {
            line-height: 5vh;
            font-size: 20px;
        }

        .param {
            margin-top: 5rem;
        }
    }
}

@media screen and (max-width:1366px) {
    .paragraph {
        position: fixed;
        width: 60%;
        text-align: center;
        color: #fff;
        letter-spacing: 2px;

        p {
            line-height: 4vh;
            font-size: 16px;
        }

        .param {
            margin-top: 4rem;
        }
    }
}
</style>