<template>
    <el-menu :default-openeds="openeds">
        <el-sub-menu index="1">
            <template #title>
                <el-icon>
                    <CaretRight />
                </el-icon>
                <span class="menu-title">{{ $t('menu.company') }}</span>
            </template>
            <el-menu-item-group>
                <router-link :to="{ path: '/second/aboutUs' }">
                    <el-menu-item index="1-1">
                        {{ $t('menu.aboutUs') }}
                    </el-menu-item>
                </router-link>
                <router-link :to="{ path: '/second/milestone' }">
                    <el-menu-item index="1-2">
                        {{ $t('menu.milestone') }}
                    </el-menu-item>
                </router-link>
            </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="2">
            <template #title>
                <el-icon>
                    <CaretRight />
                </el-icon>
                <span class="menu-title">{{ $t('menu.business') }}</span>
            </template>
            <el-menu-item-group>
                <router-link :to="{ path: '/second/commercial' }">
                    <el-menu-item index="2-1">
                        {{ $t('menu.commercial') }}
                    </el-menu-item>
                </router-link>
                <router-link :to="{ path: '/second/technical' }">
                    <el-menu-item index="2-2">
                        {{ $t('menu.technical') }}
                    </el-menu-item>
                </router-link>
                <router-link :to="{ path: '/second/marine' }">
                    <el-menu-item index="2-3">
                        {{ $t('menu.marine') }}
                    </el-menu-item>
                </router-link>
            </el-menu-item-group>
        </el-sub-menu>
        <router-link :to="{ path: '/second/fleetList' }">
            <el-menu-item index="3">
                <el-icon>
                    <CaretRight />
                </el-icon>
                <span class="menu-title">{{ $t('menu.fleetList') }}</span>
            </el-menu-item>
        </router-link>
        <router-link :to="{ path: '/second/investorRelations' }">
            <el-menu-item index="4">
                <el-icon>
                    <CaretRight />
                </el-icon>
                <span class="menu-title">{{ $t('menu.investorRelations') }}</span>
            </el-menu-item>
        </router-link>
        <router-link :to="{ path: '/second/careers' }">
            <el-menu-item index="5">
                <el-icon>
                    <CaretRight />
                </el-icon>
                <span class="menu-title">{{ $t('menu.careers') }}</span>
            </el-menu-item>
        </router-link>
        <router-link :to="{ path: '/second/contactUs' }">
            <el-menu-item index="6">
                <el-icon>
                    <CaretRight />
                </el-icon>
                <span class="menu-title">{{ $t('menu.contactUs') }}</span>
            </el-menu-item>
        </router-link>
    </el-menu>
</template>

<script setup lang="ts">
import { CaretRight } from '@element-plus/icons-vue'
const openeds = ['1', '2']
</script>

<style scoped>
.el-menu {
    height: 100%;
    padding-left: 10%;
}

.menu-title {
    font-weight: bold;
    font-size: 18px;
}

.el-menu-item.is-active {
    color: #005782;
}
</style>