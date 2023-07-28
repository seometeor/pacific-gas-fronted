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
    background-color: #fff;
}

.paragraph {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 20px;
}

.title {
    color: #000;
    margin: 0;
    font-size: 24px;
    font-weight: bold;
}

.partners-content {
    color: #000;
    font-size: 14px;
    line-height: normal;
    text-align: left;
    padding: 1rem;
    margin-left: 0.5rem;
}
</style>