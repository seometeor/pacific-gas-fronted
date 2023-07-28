<template>
    <div class="infoAnnouncement">
        <div style="display: flex;align-items: center;">
            <span style="font-size: 18px;">{{ $t('menu.position') }}：</span>
            <el-breadcrumb :separator-icon="ArrowRight">
                <el-breadcrumb-item :to="{ path: '/homePC' }">{{ $t('menu.home') }}</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/second/infoAnnouncement' }">
                    <span style="color: #005782;">{{ $t('menu.infoAnnouncement') }}</span>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div v-for="(item, index) in announcementList" :key="index" @click="setInfomation(item)">
            <div style="display: flex;">
                <RouterLink :to="{ path: '/second/infomation' }">
                    <el-image :src="getImgUrl('infoAnnouncement.jpg')" class="img" />
                </RouterLink>
                <div style="display: flex;flex-direction: column;">
                    <RouterLink :to="{ path: '/second/infomation' }" @click="setInfomation(item)">
                        <p class="title">{{ item.title }}</p>
                    </RouterLink>
                    <span class="subTitle">
                        <p>发布时间：{{ item.date }} 分类：{{ item.type }}</p>
                    </span>
                </div>
                <div class="bottom">
                    <RouterLink :to="{ path: '/second/infomation' }" @click="setInfomation(item)">阅读正文</RouterLink>
                </div>
            </div>
            <el-divider />
        </div>
    </div>
</template>

<script setup lang="ts">
import { getImgUrl } from "@/utils/getImgUrl";
import { ArrowRight } from '@element-plus/icons-vue'
import type { RouterLink } from "vue-router";
import { announcementList } from "@/assets/data/announcementList";

const setInfomation = (item: any) => {
    localStorage.setItem("activeIndex", item.id)
}

</script>

<style scoped>
.infoAnnouncement {
    text-align: left;
    letter-spacing: 2px;
}

.el-breadcrumb {
    font-size: 18px;
}

.img {
    border: 2px #bbb solid;
    margin: 2vh;
    padding: 2vh;
    background-color: bbb;
}

.bottom {
    margin-left: auto;
    display: flex;
    align-items: flex-end;
}

.button {
    padding: 0;
    min-height: auto;
}

.title {
    font-size: 3vh;
}

.subTitle {
    color: #bbb;
    margin: 0;
}

a {
    color: #005782;
}

a:visited {
    color: #005782;
}
</style>