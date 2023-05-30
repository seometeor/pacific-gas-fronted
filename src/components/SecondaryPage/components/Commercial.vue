<template>
  <div class="commercial">
    <div style="display: flex;align-items: center;">
      <span style="font-size: 18px;">{{ $t('menu.position') }}：</span>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">{{ $t('menu.home') }}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">{{ $t('menu.company') }}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/second/commercial' }">
          <span style="color: #005782;">{{ $t('menu.commercial') }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="position: relative; width: 64%;">
      <el-image :src="getImgUrl('commercial.jpg')" />
      <div class="img-content">{{ $t('commercial.image') }}</div>
    </div>
    <span style="font-size: 36px; font-weight: bold; line-height: 100px;">{{ $t('menu.commercial') }}</span>
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

.params-content{
  font-size: 18px;
  line-height: 4vh;
  min-height: 40vh;
  // width: 64%;
}
</style>
  