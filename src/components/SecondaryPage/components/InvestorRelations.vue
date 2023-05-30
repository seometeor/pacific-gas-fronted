<template>
  <div class="investorRelations">
    <div style="display: flex;align-items: center;">
      <span style="font-size: 18px;">{{ $t('menu.position') }}：</span>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">{{ $t('menu.home') }}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/second/investorRelations' }">
          <span style="color: #005782;">{{ $t('menu.investorRelations') }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="position: relative; width: 64%;">
      <el-image :src="getImgUrl('investorRelations.jpg')" />
      <div class="img-content">{{ $t('investorRelations.image') }}</div>
    </div>
    <div class="params-content">
      <span style="font-size: 36px; font-weight: bold; line-height: 100px;">{{ $t('menu.investorRelations') }}</span>
      <p>{{ $t('investorRelations.params1') }}</p>
      <p>{{ $t('investorRelations.params2') }}</p>
      <p>{{ $t('investorRelations.email') }}<a href="mailto:ir@pacific-gas.com">ir@pacific-gas.com</a></p>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { getImgUrl } from "@/utils/getImgUrl";
import { ArrowRight } from '@element-plus/icons-vue'
</script>
  
<style scoped lang="less">
.investorRelations {
  text-align: left;
  letter-spacing: 2px;
}

.el-breadcrumb {
  font-size: 18px;
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
  font-size: 22px;
}

.params-content {
  font-size: 18px;
  line-height: 4vh;
  width: 100%;
}
</style>
  