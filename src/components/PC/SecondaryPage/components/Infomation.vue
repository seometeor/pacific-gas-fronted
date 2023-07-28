<template>
    <div class="infomation">
        <div style="display: flex;align-items: center;">
            <span style="font-size: 18px;">{{ $t('menu.position') }}：</span>
            <el-breadcrumb :separator-icon="ArrowRight">
                <el-breadcrumb-item :to="{ path: '/homePC' }">{{ $t('menu.home') }}</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/second/infoAnnouncement' }">
                    {{ $t('menu.infoAnnouncement') }}
                </el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/second/infomation' }">
                    <span style="color: #005782;">{{ $t('menu.infomation') }}</span>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div v-for="item in infomationList" :key="item.id" style="margin: 0 10%;">
            <div v-show="item.id == infomationIndex">
                <h2>太平洋气体船（香港）控股有限公司</h2>
                <h2 v-text="infomationList[parseInt(infomationIndex) - 1].subTitle"></h2>
                <div style="display: flex;justify-content: center;">
                    <p class="warning">本公司公告内容不存在任何虚假记载、误导性陈述或者重大遗漏，并对其内容的真实性、准确性和完整性承担责任。</p>
                </div>
                <h3>一、公司基本情况</h3>
                <p>1.中文名称 ：太平洋气体船（香港）控股有限公司 简 称 : 太平洋气体船</p>
                <p>2.外文名称 ：Pacific Gas (Hong Kong) Holdings Limited</p>
                <p>3.法定代表人：李茂忠 </p>
                <p>4.注册地址：香港特别行政区湾仔港湾道26号华润大厦36楼3605室</p>
                <p>5.经营范围：船舶租赁、运营及管理。</p>
                <p>6.办公地址：上海市浦东新区世纪大道1168号东方金融广场B栋1102室、香港湾仔港湾道26号华润大厦36楼3605室</p>
                <p>7.网址：www.pacific-gas.com</p>
                <p>8.电子信箱: info@pacific-gas.com</p>
                <p>9.公司简介:
                    太平洋气体船成立于2014年，公司致力于为国际清洁能源及化工品原料市场提供专业化运输服务。通过与全球上下游客户的友好合作，公司现已发展成为一家以远洋运输为主的全球清洁能源运输服务商，专业从事多元化气体运输，业务范围覆盖甲烷（LNG）、乙烷（ETHANE）、丙丁烷（LPG）及其他石化类气体（如乙烯、丙烯、丁二烯等）。截止2022年12月底，公司旗下现有20家专业或特殊目的子公司，管理运营船舶20艘，包括8艘VLGC，5艘LEG，2艘VLEC，另有五艘VLEC在建，年供货能力达480万吨，船队规模在全球同行业中名列前茅。
                </p>
                <h3>二、企业重大改制重组结果</h3>
                <p v-text="infomationList[parseInt(infomationIndex) - 1].secondContent"></p>
                <h3>三、公司治理及管理架构、重要人事变动</h3>
                <p v-html="infomationList[parseInt(infomationIndex) - 1].thirdContent"></p>
                <p v-html="infomationList[parseInt(infomationIndex) - 1].lastContent"></p>
                <p class="rightbottom">太平洋气体船（香港）控股有限公司</p>
                <p class="rightbottom" v-html="infomationList[parseInt(infomationIndex) - 1].time"></p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import { ref } from "vue";
import { infomationList } from "@/assets/data/infomationList";

const infomationIndex = ref('1')

infomationIndex.value = localStorage.getItem("activeIndex")!
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
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button {
    padding: 0;
    min-height: auto;
}

h3 {
    text-align: left;
}

p {
    text-align: left;
}

.warning {

    color: #005782;
    font-size: 18px;
    border: 1px #005782 solid;
    width: fit-content;
}

.rightbottom {
    text-align: right;
}
</style>