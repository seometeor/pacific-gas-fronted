<template>
  <div class="technical">
    <div style="display: flex;align-items: center;">
      <span style="font-size: 14px;">{{ $t('menu.position') }}：</span>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/homeMobile' }">{{ $t('menu.home') }}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/secondMobile/technicalMobile' }">
          <span style="color: #005782;">{{ $t('menu.technical') }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="image-style">
      <el-image :src="getImgUrl('technical.jpg')" />
      <div class="img-content">{{ $t('technical.image') }}</div>
    </div>
    <div class="params-content">
      <span class="table-title">{{ $t('menu.technical') }}</span>
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
      