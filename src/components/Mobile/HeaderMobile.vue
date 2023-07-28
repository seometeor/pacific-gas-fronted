<template>
    <div class="headerMobile">
        <el-row>
            <el-col :span="7">
                <el-button @click="toggle('zh')" :class="{ isActive: state.isActive }" :disabled="state.isDisabled"
                    ref="isChActive" text>中</el-button>
                <el-divider direction="vertical" />
                <el-button @click="toggle('en')" :class="{ isActive: !state.isActive }" :disabled="!state.isDisabled"
                    text>En</el-button>
            </el-col>
            <el-col :span="10">
                <el-image :src="getImgUrl('header.png')" />
            </el-col>
            <el-col :span="7">
                <el-image :src="getImgUrl('menu.png')" style="width: 24px;" @click="drawer = true" />
            </el-col>
        </el-row>
    </div>
    <el-drawer v-model="drawer" direction="ltr" :with-header="false" size="70%"
        style="background-color: rgba(0, 0, 0, 0.7);">
        <el-container class="menuMobile">
            <el-main>
                <router-link :to="{ path: '/secondMobile/aboutUsMobile' }" @click="drawer = false">
                    <p>{{ $t('menu.aboutUs') }}</p>
                </router-link>
                <router-link :to="{ path: '/secondMobile/milestoneMobile' }" @click="drawer = false">
                    <p>{{ $t('menu.milestone') }}</p>
                </router-link>
                <router-link :to="{ path: '/secondMobile/commercialMobile' }" @click="drawer = false">
                    <p>{{ $t('menu.commercial') }}</p>
                </router-link>
                <router-link :to="{ path: '/secondMobile/technicalMobile' }" @click="drawer = false">
                    <p>{{ $t('menu.technical') }}</p>
                </router-link>
                <router-link :to="{ path: '/secondMobile/marineMobile' }" @click="drawer = false">
                    <p>{{ $t('menu.marine') }}</p>
                </router-link>
                <router-link :to="{ path: '/secondMobile/fleetListMobile' }" @click="drawer = false">
                    <p>{{ $t('menu.fleetList') }}</p>
                </router-link>
                <router-link :to="{ path: '/secondMobile/sustainabilityMobile' }" @click="drawer = false">
                    <p>{{ $t('menu.sustainability') }}</p>
                </router-link>
                <router-link :to="{ path: '/secondMobile/careersMobile' }" @click="drawer = false">
                    <p>{{ $t('menu.careers') }}</p>
                </router-link>
                <router-link :to="{ path: '/secondMobile/contactUsMobile' }" @click="drawer = false">
                    <p>{{ $t('menu.contactUs') }}</p>
                </router-link>
                <router-link :to="{ path: '/secondMobile/infoAnnouncementMobile' }" @click="drawer = false">
                    <p>{{ $t('menu.infoAnnouncement') }}</p>
                </router-link>
            </el-main>
            <el-footer>
                <router-link :to="{ path: '/homeMobile' }" @click="drawer = false">
                    {{ $t('home.home') }}
                </router-link>
            </el-footer>
        </el-container>
    </el-drawer>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useI18n } from "vue-i18n";
import { getImgUrl } from "@/utils/getImgUrl";
import { bus } from '@/utils/eventbus';

const drawer = ref(false)

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
</script>

<style scoped lang="less">
.headerMobile {
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

.isActive {
    color: #fff !important;
}

:deep(.el-button.is-text) {
    color: grey;
    font-weight: bold;
    width: 30%;
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

.menuMobile {
    a {
        color: #fff;
    }
}
</style>