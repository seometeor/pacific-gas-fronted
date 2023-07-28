<template>
    <div class="page-header">
        <el-row>
            <el-col :span="8">
                <el-button @click="toggle('zh')" :class="{ isActive: state.isActive }" :disabled="state.isDisabled"
                    ref="isChActive" text>中文</el-button>
                <el-divider direction="vertical" />
                <el-button @click="toggle('en')" :class="{ isActive: !state.isActive }" :disabled="!state.isDisabled"
                    text>English</el-button>
            </el-col>
            <el-col :span="8">
                <router-link :to="{ path: '/homePC' }">
                    <el-image :src="getImgUrl('header.png')" />
                    <div v-if="state.isHover">
                        <Navigation style="position: absolute;left: 0;top: 8vh;z-index: 10000;" @mouseleave="leave()" />
                    </div>
                </router-link>
            </el-col>
            <el-col :span="8" style="text-align: -webkit-center;">
                <div class="menu" @mouseenter="state.isHover = true">
                    <el-image :src="getImgUrl('menu.png')" style="width: 24px;" />
                    <p>{{ $t('home.menu') }}</p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
  
<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useI18n } from "vue-i18n";
import { getImgUrl } from "@/utils/getImgUrl";
import Navigation from './Navigation.vue';
import { bus } from '@/utils/eventbus';

const state = reactive({
    isActive: false,
    isHover: false,
    isDisabled: false,
})
const isChActive: any = ref(localStorage.getItem("isChActive"))

const { locale: i18nLanguage } = useI18n();
const toggle = (languageKey: any) => {
    state.isActive = !state.isActive;
    state.isDisabled = !state.isDisabled;
    i18nLanguage.value = languageKey;
    bus.emit("isChActive", !isChActive.value.disabled)
    sessionStorage.setItem("isChActive", state.isDisabled.toString())
};
const leave = function () {
    setTimeout(() => {
        state.isHover = false
    }, 2000);
}
</script>
  
<style scoped>
.menu {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    width: 5vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

@media screen and (max-width:1366px) {
    .header-icon {
        width: 80%;
    }
}

@media screen and (min-width:1367px) {
    .logo-left {
        height: 50px;
        padding-top: 16px;
    }
}

.isActive {
    color: #fff !important;
}

.page-header {
    background-color: #005782;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1000;
}

.el-row {
    height: 8vh;
    align-items: center;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}

:deep(.el-button.is-text) {
    color: grey;
    font-weight: bold;
}

.el-button:active {
    background: #126c9e !important;
    font-weight: bold;
}

.el-button:hover {
    background: #126c9e !important;
    color: white !important;
    font-weight: bold;
    border-color: #01a8f9 !important;
}

:deep(.el-button:hover) {
    color: #000;
}
</style>