<template>
  <div class="commercial">
    <div style="display: flex;align-items: center;">
      <span style="font-size: 14px;">{{ $t('menu.position') }}：</span>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/homeMobile' }">{{ $t('menu.home') }}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/secondMobile/commercialMobile' }">
          <span style="color: #005782;">{{ $t('menu.commercial') }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="image-style">
      <el-image :src="getImgUrl('commercial.jpg')" />
      <div class="img-content">{{ $t('commercial.image') }}</div>
    </div>
    <span class="table-title">{{ $t('menu.commercial') }}</span>
    <div class="params-content">
      <p>{{ $t('commercial.params1') }}</p>
      <p>{{ $t('commercial.params2') }}</p>
    </div>
  </div>
</template>
    
<script setup lang="ts">
import { getImgUrl } from "@/utils/getImgUrl";
import { ArrowRight } from '@element-plus/icons-vue'
</script>
    
<style scoped lang="less">
.commercial {
  text-align: left;
}

.el-breadcrumb {
  font-size: 14px;
}

.image-style {
  position: relative;
}

.img-content {
  overflow: hidden;
  background-color: rgba(37, 52, 80, 0.5);
  color: #fff;
  padding: 10px 10px 10px 10px;
  position: absolute;
  width: -webkit-fill-available;
  bottom: 5px;
  text-align: center;
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
    