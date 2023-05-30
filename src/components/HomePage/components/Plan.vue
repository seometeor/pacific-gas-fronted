<template>
    <div class="plan-style">
        <div class="paragraph">
            <el-row :gutter="10" style="padding-top: 3rem;">
                <el-col :span="24">
                    <p class="title">我们的<span style="color: green;">计划</span></p>
                </el-col>
                <el-col :span="7"></el-col>
                <el-col :span="10">
                    <p class="subtitle">2M联盟是马士基和地中海航运，2M联盟是马士基和地中海航运</p>
                </el-col>
                <el-col :span="7"></el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <div class="plan-card">
                        <div class="title">基础</div>
                        <el-image :src="getImgUrl('icon-basic.png')" style="font-size: 1.5rem; margin-top: 1rem;" />
                        <div class="subtitle">4$</div>
                        <div>2M联盟是马士基和地中海航运</div>
                        <div class="content">2M联盟是马士基和地中海航运</div>
                        <div class="content">2M联盟是马士基和地中海航运</div>
                        <el-button>开始了解</el-button>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="plan-card">
                        <div class="title">精准</div>
                        <el-image :src="getImgUrl('icon-precise.png')" style="font-size: 1.5rem; margin-top: 1rem;" />
                        <div class="subtitle">32$</div>
                        <div>2M联盟是马士基和地中海航运</div>
                        <div class="content">2M联盟是马士基和地中海航运</div>
                        <div class="content">2M联盟是马士基和地中海航运</div>
                        <el-button>开始了解</el-button>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="plan-card">
                        <div class="title">合理</div>
                        <el-image :src="getImgUrl('icon-reasonable.png')" style="font-size: 1.5rem; margin-top: 1rem;" />
                        <div class="subtitle">64$</div>
                        <div>2M联盟是马士基和地中海航运</div>
                        <div class="content">2M联盟是马士基和地中海航运</div>
                        <div class="content">2M联盟是马士基和地中海航运</div>
                        <el-button>开始了解</el-button>
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
.plan-style {
    position: relative;
    height: 92vh;
    background-color: #f9f9f9;
}

@media screen and (min-width:1366px) {
    .subtitle {
        color: #000;
        font-size: 16px;
        line-height: normal;
    }

    .plan-card {
        height: 28rem;
        background-color: rgba(0, 0, 0, 0);
        color: #000;
        line-height: 2rem;
        border-radius: 6px;

        .el-image {
            width: 2vw;
        }

        .title {
            font-size: 20px;
            padding-top: 2rem;
        }

        .subtitle {
            font-size: 22px;
            margin-top: 1rem;
        }

        .content {
            width: 50%;
            margin-left: 25%;
        }

        p {
            font-size: 14px;
        }

        .el-button {
            color: #000;
            width: 50%;
            font-weight: bold;
            border-color: #000 !important;
            margin-top: 2rem;
        }
    }

    .plan-card:hover {
        background: #fff !important;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);

        .el-button {
            background: #fff !important;
            color: #000 !important;
            font-weight: bold;
            border-color: #fff !important;
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
        }
    }
}

@media screen and (min-width:1367px) {
    .subtitle {
        color: #000;
        font-size: 18px;
        line-height: normal;
    }

    .plan-card {
        height: 28rem;
        background-color: rgba(0, 0, 0, 0);
        color: #000;
        line-height: 2rem;
        border-radius: 6px;

        .el-image {
            width: 3vw;
        }

        .title {
            font-size: 22px;
            padding-top: 2rem;
        }

        .subtitle {
            font-size: 24px;
            margin-top: 1rem;
        }

        .content {
            width: 50%;
            margin-left: 25%;
        }

        p {
            font-size: 16px;
        }

        .el-button {
            color: #000;
            width: 50%;
            font-weight: bold;
            border-color: #000 !important;
            margin-top: 2rem;
        }
    }

    .plan-card:hover {
        background: #fff !important;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);

        .el-button {
            background: #fff !important;
            color: #000 !important;
            font-weight: bold;
            border-color: #fff !important;
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
        }
    }
}

.paragraph {
    position: relative;
    z-index: 2;
    width: 60%;
    margin-left: 20%;
    text-align: center;
    color: #fff;
    letter-spacing: 3px;
    line-height: 3rem;
}

.title {
    color: #000;
    margin-bottom: 0;
    font-size: 2rem;
    font-weight: bold;
}
</style>