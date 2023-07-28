<template>
    <div class="member-style">
        <div class="paragraph">
            <el-row :gutter="10">
                <el-col :span="24">
                    <p class="title">{{ $t('home.our') }}<span style="color: green;">{{ $t('home.partner') }}</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <p class="partners-content">{{ $t('home.parter_content') }}</p>
                </el-col>
            </el-row>
            <el-row :gutter="100" style="font-size: 22px;">
                <el-col :span="24">
                    <el-image :src="getImgUrl('partners.png')" />
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getImgUrl } from "@/utils/getImgUrl";
</script>

<style scoped>
.member-style {
    position: relative;
    height: 92vh;
    background-color: #fff;
}

.paragraph {
    position: relative;
    z-index: 2;
    width: 60%;
    margin-left: 20%;
    text-align: center;
    letter-spacing: 3px;
    line-height: 3rem;
}

.title {
    color: #000;
    margin-bottom: 0;
    font-size: 2rem;
    font-weight: bold;
}

.partners-content {
    color: #000;
    font-size: 18px;
    line-height: normal;
    text-align: justify;
}

@media screen and (max-width:1366px) {
    .partners-content {
        letter-spacing: 1px;
    }
}
</style>