<template>
    <div class="homePage">
        <FirstPageMobile />
        <FleetMobile />
        <ServiceMobile />
        <MemberMobile />
        <FooterMobile />
    </div>
</template>

<script setup lang="ts">
import FirstPageMobile from './HomePage/FirstPageMobile.vue';
import FleetMobile from './HomePage/FleetMobile.vue';
import ServiceMobile from './HomePage/ServiceMobile.vue';
import MemberMobile from './HomePage/MemberMobile.vue';
import FooterMobile from './FooterMobile.vue';
</script>

<style scoped lang="less">
.homePage {
    width: 100vw;
}
</style>
