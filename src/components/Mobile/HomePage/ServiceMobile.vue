<template>
    <div class="service-style" :style="{ backgroundImage: 'url(' + getImgUrl('service.png') + ')' }">
        <div class="paragraph">
            <el-row :gutter="10">
                <el-col :span="24">
                    <p class="title">{{ $t('home.our') }}<span style="color: green;">{{ $t('home.service') }}</span></p>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <div class="service-card">
                        <div class="title">{{ $t('home.service_commercial') }}</div>
                        <hr align="left">
                        <div class="content">{{ $t('home.service_commercial_content') }}</div>
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="service-card">
                        <div class="title">{{ $t('home.service_technical') }}</div>
                        <hr align="left">
                        <div class="content">
                            <p>{{ $t('home.service_technical_content_params1') }}</p>
                            <p>{{ $t('home.service_technical_content_params2') }}</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="service-card">
                        <div class="title">{{ $t('home.service_marine') }}</div>
                        <hr align="left">
                        <div class="content">{{ $t('home.service_marine_content') }}</div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getImgUrl } from "@/utils/getImgUrl";
</script>

<style scoped lang="less">
.service-style {
    background: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
}

.paragraph {
    position: relative;
    z-index: 2;
    text-align: center;
    color: #fff;
    padding: 20px;
}

.subtitle {
    color: #000;
    font-size: 16px;
    line-height: normal;
}

.service-card {
    background-color: rgba(0, 0, 0, 0);
    color: #000;
    border-radius: 6px;
    text-align: left;
    padding: 1rem;

    .el-image {
        width: 3vw;
    }

    hr {
        width: 2rem;
        color: #666;
        border: 0px;
        margin-left: 0.5rem;
        border-bottom: 2px solid #666;
    }

    .title {
        font-size: 16px;
        color: #666;
        margin-left: 0.5rem;
    }

    .content {
        font-size: 14px;
        margin-left: 0.5rem;
    }
}

.service-card:hover {
    background: #fff !important;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);

    hr {
        width: 19vw;
        color: #666;
        border: 0px;
        margin-left: 0.5rem;
        border-bottom: 2px solid #666;
    }

    .title {
        font-size: 16px;
        color: #599b46;
        margin-left: 0.5rem;
    }

    .content {
        margin-left: 0.5rem;
    }
}

.title {
    color: #000;
    margin: 0;
    font-size: 24px;
    font-weight: bold;
}
</style>