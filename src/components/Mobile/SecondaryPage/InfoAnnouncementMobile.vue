<template>
    <div class="infoAnnouncement">
        <div style="display: flex;align-items: center;">
            <span style="font-size: 14px;">{{ $t('menu.position') }}：</span>
            <el-breadcrumb :separator-icon="ArrowRight">
                <el-breadcrumb-item :to="{ path: '/homeMobile' }">{{ $t('menu.home') }}</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/secondMobile/infoAnnouncementMobile' }">
                    <span style="color: #005782;">{{ $t('menu.infoAnnouncement') }}</span>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div v-for="(item, index) in announcementList" :key="index" @click="setInfomation(item)">
            <el-row>
                <el-col :span="24">
                    <RouterLink :to="{ path: '/secondMobile/infomationMobile' }">
                        <el-image :src="getImgUrl('infoAnnouncement.jpg')" class="img" />
                    </RouterLink>
                </el-col>
                <el-col :span="24">
                    <RouterLink :to="{ path: '/secondMobile/infomationMobile' }" @click="setInfomation(item)">
                        <p class="title">{{ item.title }}</p>
                    </RouterLink>
                </el-col>
                <el-col :span="24">
                    <span class="subTitle">
                        <p>发布时间：{{ item.date }} 分类：{{ item.type }}</p>
                    </span>
                </el-col>
                <el-col :span="24">
                    <RouterLink :to="{ path: '/secondMobile/infomationMobile' }" @click="setInfomation(item)">阅读正文
                    </RouterLink>
                </el-col>
            </el-row>
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
    text-align: center;
}

.el-breadcrumb {
    font-size: 14px;
}

.img {
    border: 2px #bbb solid;
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
    font-size: 24px;
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

p {
    margin: 10px;
}
</style>