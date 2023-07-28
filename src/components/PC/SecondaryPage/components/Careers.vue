<template>
  <div class="careers">
    <div style="display: flex;align-items: center;">
      <span style="font-size: 18px;">{{ $t('menu.position') }}：</span>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/homePC' }">{{ $t('menu.home') }}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/second/careers' }">
          <span style="color: #005782;">{{ $t('menu.careers') }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-image :src="getImgUrl('careers.jpg')" />
    <div class="params-content">
      <span style="font-size: 36px; font-weight: bold; line-height: 100px;">{{ $t('menu.careers') }}</span>
      <p>{{ $t('careers.params1') }} <a href="mailto:resume@pg-shipmanagement.com">resume@pg-shipmanagement.com</a></p>
      <p>{{ $t('careers.params2') }}
        <a href="mailto:hr@pacific-gas.com">hr@pacific-gas.com</a>
      </p>
      <p style="margin-top: 5vh;">{{ $t('careers.params3') }}</p>
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
  letter-spacing: 2px;
}

.el-breadcrumb {
  font-size: 18px;
}

.params-content {
  font-size: 18px;
  line-height: 4vh;
}
</style>
  