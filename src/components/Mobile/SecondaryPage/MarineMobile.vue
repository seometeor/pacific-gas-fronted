<template>
  <div class="marine">
    <div style="display: flex;align-items: center;">
      <span style="font-size: 14px;">{{ $t('menu.position') }}：</span>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/homeMobile' }">{{ $t('menu.home') }}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/secondMobile/marineMobile' }">
          <span style="color: #005782;">{{ $t('menu.marine') }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-image :src="getImgUrl('marine.jpg')" />
    <div class="params-content">
      <span class="table-title">{{ $t('menu.marine') }}</span>
      <p>{{ $t('marine.title1') }}</p>
      <ul>
        <li>{{ $t('marine.params1') }}</li>
        <li>{{ $t('marine.params2') }}</li>
        <li>{{ $t('marine.params3') }}</li>
        <li>{{ $t('marine.params4') }}</li>
        <li>{{ $t('marine.params5') }}</li>
        <li>{{ $t('marine.params6') }}</li>
      </ul>
      <p>{{ $t('marine.title2') }}</p>
      <ul>
        <li>{{ $t('marine.params7') }}</li>
        <li>{{ $t('marine.params8') }}</li>
        <li>{{ $t('marine.params9') }}</li>
        <li>{{ $t('marine.params10') }}</li>
        <li>{{ $t('marine.params11') }}</li>
      </ul>
    </div>
  </div>
</template>
    
<script setup lang="ts">
import { getImgUrl } from "@/utils/getImgUrl";
import { ArrowRight } from '@element-plus/icons-vue'
</script>
    
<style scoped lang="less">
.marine {
  text-align: left;

  ul {
    li {
      line-height: 3vh;
    }
  }
}

.el-breadcrumb {
  font-size: 14px;
}

ul {
  padding-left: 20px;
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
    