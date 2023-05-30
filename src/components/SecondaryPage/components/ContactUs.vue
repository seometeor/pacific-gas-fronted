<template>
  <div class="contact-us">
    <div style="display: flex;align-items: center;">
      <span style="font-size: 18px;">{{ $t('menu.position') }}：</span>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">{{ $t('menu.home') }}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/second/contactUs' }">
          <span style="color: #005782;">{{ $t('menu.contactUs') }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      <TencentMap />
    </div>
    <div class="params-content">
      <span style="font-size: 36px; font-weight: bold; line-height: 100px;">{{ $t('menu.contactUs') }}</span>
      <p>{{ $t('contactUs.title1') }}<a href="mailto:info@pacific-gas.com">info@pacific-gas.com</a></p>
      <p class="title">{{ $t('contactUs.title2') }}</p>
      <p>{{ $t('contactUs.params1') }}</p>
      <p class="title">{{ $t('contactUs.title3') }}</p>
      <p>{{ $t('contactUs.params2') }}</p>
      <p class="title">{{ $t('contactUs.title4') }}</p>
      <p>{{ $t('contactUs.params3') }}</p>
      <p class="title">{{ $t('contactUs.title5') }}</p>
      <p>{{ $t('contactUs.params4') }}</p>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import TencentMap from "@/components/TencentMap.vue";
import { ArrowRight } from '@element-plus/icons-vue'
</script>
  
<style scoped lang="less">
.contact-us {
  text-align: left;
  letter-spacing: 2px;
}

.el-breadcrumb {
  font-size: 18px;
}

.title {
  font-size: 22px;
  color: #005782;
  line-height: 0;
  margin-top: 5vh;
}

.params-content {
  font-size: 18px;
  line-height: 4vh;
}
</style>
  