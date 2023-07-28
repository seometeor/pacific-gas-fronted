<template>
  <div class="technical">
    <div style="display: flex;align-items: center;">
      <span style="font-size: 18px;">{{ $t('menu.position') }}：</span>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/homePC' }">{{ $t('menu.home') }}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/homePC' }">{{ $t('menu.company') }}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/second/technical' }">
          <span style="color: #005782;">{{ $t('menu.technical') }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="image-style">
      <el-image :src="getImgUrl('technical.jpg')" />
      <div class="img-content">{{ $t('technical.image') }}</div>
    </div>
    <div class="params-content">
      <span style="font-size: 36px; font-weight: bold; line-height: 100px;">{{ $t('menu.technical') }}</span>
      <p>{{ $t('technical.params1') }}</p>
      <p>{{ $t('technical.params2') }}</p>
      <p>{{ $t('technical.params3') }}</p>
      <ul>
        <li>{{ $t('technical.params4') }}</li>
        <li>{{ $t('technical.params5') }}</li>
        <li>{{ $t('technical.params6') }}</li>
        <li>{{ $t('technical.params7') }}</li>
        <li>{{ $t('technical.params8') }}</li>
        <li>{{ $t('technical.params9') }}</li>
      </ul>
    </div>
  </div>
</template>
    
<script setup lang="ts">
import { getImgUrl } from "@/utils/getImgUrl";
import { ArrowRight } from '@element-plus/icons-vue'
</script>
    
<style scoped lang="less">
.technical {
  text-align: left;
  letter-spacing: 2px;

  ul {
    li {
      line-height: 3vh;
    }
  }
}

.el-breadcrumb {
  font-size: 18px;
}

ul {
  padding-left: 20px;
}

.image-style {
  position: relative;
  width: 64%;
  max-width: 1024px;
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
}
</style>
    