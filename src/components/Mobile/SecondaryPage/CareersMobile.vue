<template>
  <div class="careers">
    <div style="display: flex;align-items: center;">
      <span style="font-size: 14px;">{{ $t('menu.position') }}：</span>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/homeMobile' }">{{ $t('menu.home') }}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/secondMobile/careersMobile' }">
          <span style="color: #005782;">{{ $t('menu.careers') }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-image :src="getImgUrl('careers.jpg')" />
    <div class="params-content">
      <span class="table-title">{{ $t('menu.careers') }}</span>
      <p>{{ $t('careers.params1') }} <a href="mailto:resume@pg-shipmanagement.com">resume@pg-shipmanagement.com</a></p>
      <p>{{ $t('careers.params2') }}
        <a href="mailto:hr@pacific-gas.com">hr@pacific-gas.com</a>
      </p>
      <p>{{ $t('careers.params3') }}</p>
      <p>{{ $t('careers.params4') }}</p>
      <p>{{ $t('careers.params5') }}</p>
    </div>
  </div>
</template>
    
<script setup lang="ts">
import { getImgUrl } from "@/utils/getImgUrl";
import { ArrowRight } from '@element-plus/icons-vue'
</script>
    
<style scoped lang="less">
.careers {
  text-align: left;
}

.el-breadcrumb {
  font-size: 14px;
}

.params-content {
  font-size: 14px;
  line-height: 4vh;
}

.table-title {
  font-size: 24px;
  font-weight: bold;
  line-height: 64px;
}
</style>
    