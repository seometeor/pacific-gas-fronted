<template>
  <div class="about-us">
    <div style="display: flex;align-items: center;">
      <span style="font-size: 18px;">{{ $t('menu.position') }}：</span>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">{{ $t('menu.home') }}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">{{ $t('menu.company') }}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/second/aboutUs' }">
          <span style="color: #005782;">{{ $t('menu.aboutUs') }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="position: relative;width: 81%;">
      <el-image :src="getImgUrl('aboutUs.jpg')" />
      <div class="img-content">{{ $t('aboutUs.image') }}</div>
    </div>
    <div class="params-content">
      <span style="font-size: 36px; font-weight: bold; line-height: 100px;">{{ $t('menu.aboutUs') }}</span>
      <p>{{ $t('aboutUs.params1') }}</p>
      <p>{{ $t('aboutUs.params2') }}</p>
      <p>{{ $t('aboutUs.params3') }}</p>
      <p>{{ $t('aboutUs.params4') }}</p>
      <ul>
        <li>{{ $t('aboutUs.title1') }}</li>
      </ul>
      <p>{{ $t('aboutUs.params5') }}</p>
      <ul>
        <li>{{ $t('aboutUs.title2') }}</li>
      </ul>
      <p>{{ $t('aboutUs.params6') }}</p>
      <ul>
        <li>{{ $t('aboutUs.title3') }}</li>
      </ul>
      <p>{{ $t('aboutUs.params7') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getImgUrl } from "@/utils/getImgUrl";
import { ArrowRight } from '@element-plus/icons-vue'
</script>

<style scoped lang="less">
.about-us {
  text-align: left;
  letter-spacing: 2px;
}

.el-breadcrumb {
  font-size: 18px;
}

ul {
  padding-left: 20px;
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
  // width: 81%;
}
</style>
