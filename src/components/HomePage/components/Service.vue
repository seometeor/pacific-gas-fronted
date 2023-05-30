<template>
    <div class="service-style" :style="{ backgroundImage: 'url(' + getImgUrl('世界地图定位.png') + ')' }">
        <div class="paragraph">
            <el-row :gutter="10" style="padding-top: 3rem;">
                <el-col :span="24">
                    <p class="title">{{ $t('home.our') }}<span style="color: green;">{{ $t('home.service') }}</span></p>
                </el-col>
            </el-row>
            <el-row :gutter="100" style="margin-top: 3rem;">
                <el-col :span="8">
                    <router-link :to="{ path: '/second/commercial' }">
                        <div class="service-card">
                            <div class="title">{{ $t('home.service_commercial') }}</div>
                            <hr align="left">
                            <div class="content">{{ $t('home.service_commercial_content') }}</div>
                        </div>
                    </router-link>
                </el-col>
                <el-col :span="8">
                    <router-link :to="{ path: '/second/technical' }">
                        <div class="service-card">
                            <div class="title">{{ $t('home.service_technical') }}</div>
                            <hr align="left">
                            <div class="content">
                                <p>{{ $t('home.service_technical_content_params1') }}</p>
                                <p>{{ $t('home.service_technical_content_params2') }}</p>
                            </div>
                        </div>
                    </router-link>
                </el-col>
                <el-col :span="8">
                    <router-link :to="{ path: '/second/marine' }">
                        <div class="service-card">
                            <div class="title">{{ $t('home.service_marine') }}</div>
                            <hr align="left">
                            <div class="content">{{ $t('home.service_marine_content') }}</div>
                        </div>
                    </router-link>
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
    height: 92vh;
    background: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
}

@media screen and (max-width:1366px) {

    .paragraph {
        position: relative;
        z-index: 2;
        width: 80%;
        margin-left: 10%;
        text-align: center;
        color: #fff;
        letter-spacing: 3px;
        line-height: 3rem;
    }

    .subtitle {
        color: #000;
        font-size: 16px;
        line-height: normal;
    }

    .service-card {
        width: 20vw;
        background-color: rgba(0, 0, 0, 0);
        color: #000;
        line-height: 3vh;
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
}

@media screen and (min-width:1367px) {

    .paragraph {
        position: relative;
        z-index: 2;
        width: 70%;
        margin-left: 15%;
        text-align: center;
        color: #fff;
        letter-spacing: 3px;
        line-height: 3rem;
    }

    .subtitle {
        color: #000;
        font-size: 18px;
        line-height: normal;
    }

    .service-card {
        width: 18vw;
        background-color: rgba(0, 0, 0, 0);
        color: #000;
        line-height: 3vh;
        border-radius: 6px;
        text-align: left;
        padding: 1rem;
        min-height: 50vh;

        .el-image {
            width: 4vw;
        }

        hr {
            width: 2rem;
            color: #666;
            border: 0px;
            margin-left: 0.5rem;
            border-bottom: 2px solid #666;
        }

        .title {
            font-size: 22px;
            color: #666;
            margin-left: 0.5rem;
        }

        .content {
            font-size: 16px;
            margin-left: 0.5rem;
        }
    }

    .service-card:hover {
        background: #fff !important;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);

        hr {
            width: 17vw;
            color: #666;
            border: 0px;
            margin-left: 0.5rem;
            border-bottom: 2px solid #666;
        }

        .title {
            font-size: 22px;
            color: #599b46;
            margin-left: 0.5rem;
        }

        .content {
            margin-left: 0.5rem;
        }
    }
}

.title {
    color: #000;
    margin-bottom: 0;
    font-size: 2rem;
    font-weight: bold;
}
</style>