<template>
    <div @mouseenter="state.isHover = true">
        <div class="page-header">
            <el-row>
                <el-col :span="9">
                    <el-button @click="toggle('zh')" :class="{ isActive: state.isActive }" :disabled="state.isDisabled"
                        ref="isChActive" text>中文</el-button>
                    <el-divider direction="vertical" />
                    <el-button @click="toggle('en')" :class="{ isActive: !state.isActive }" :disabled="!state.isDisabled"
                        text>English</el-button>
                </el-col>
                <el-col :span="6">
                    <router-link :to="{ path: '/' }">
                        <el-row>
                            <el-col :span="4"></el-col>
                            <el-col :span="12">
                                <el-image :src="getImgUrl('header-logo.png')" style="width: 90%;" />
                            </el-col>
                            <el-col :span="4">
                                <el-image :src="getImgUrl('header-icon.png')" style="width: 70%; padding-top: 1vh;" />
                            </el-col>
                        </el-row>
                    </router-link>
                    <div v-if="state.isHover">
                        <Navigation style="position: absolute;left: 0;top: 8vh;z-index: 10000;" @mouseleave="leave()" />
                    </div>
                </el-col>
                <el-col :span="9">
                    <!-- <el-input class="input-style" placeholder="搜索" :prefix-icon="Search" /> -->
                </el-col>
            </el-row>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { onDeactivated, reactive, ref } from 'vue';
import { useI18n } from "vue-i18n";
import { Search } from '@element-plus/icons-vue'
import { getImgUrl } from "@/utils/getImgUrl";
import Navigation from "./Navigation/Navigation.vue";
import { bus } from '@/utils/eventbus';
const isChActive: any = ref(null)
const state = reactive({
    isActive: false,
    isHover: false,
    isDisabled: false,
})
onDeactivated(() => {
    bus.emit("isChActive", !isChActive.value!.disabled)
})
const { locale: i18nLanguage } = useI18n();
const toggle = (languageKey: any) => {
    state.isActive = !state.isActive;
    state.isDisabled = !state.isDisabled;
    i18nLanguage.value = languageKey;
    bus.emit("isChActive", !isChActive.value!.disabled)
    localStorage.setItem("isChActive", state.isDisabled.toString())
};
const leave = function () {
    setTimeout(() => {
        state.isHover = false
    }, 2000);
}
</script>
  
<style scoped>
@media screen and (max-width:1366px) {
    .header-logo {
        width: 70%;
    }
}

@media screen and (min-width:1367px) {}

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

.input-style {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: #fff;
    width: 50%;
}

:deep(.el-input__wrapper) {
    background-color: rgba(0, 0, 0, 0);
    box-shadow: none;
}

:deep(.el-input__wrapper:hover) {
    box-shadow: none;
}

:deep(.el-input__wrapper.is-focus) {
    box-shadow: none;
}

:deep(.el-input__inner) {
    caret-color: #fff;
}

:deep(.el-input__inner::placeholder) {
    color: #fff;
}
</style>