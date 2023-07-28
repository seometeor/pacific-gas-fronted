<template>
  <div class="investorRelations">
    <div style="display: flex;align-items: center;">
      <span style="font-size: 18px;">{{ $t('menu.position') }}：</span>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/homePC' }">{{ $t('menu.home') }}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/second/sustainability' }">
          <span style="color: #005782;">{{ $t('menu.sustainability') }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="position: relative; width: 64%; color: #005782; text-align: center;">
      <el-row style="background-size: cover; padding: 2%;"
        :style="{ backgroundImage: 'url(' + getImgUrl('sustainability/sustainability-background.png') + ')' }">
        <el-col :span="24">
          <p style="font-size: 42px;">{{ $t('sustainability.title1') }}</p>
        </el-col>
        <el-col :span="24">
          <p style="font-size: 18px;">{{ $t('sustainability.params1') }}</p>
        </el-col>
        <el-divider />
        <el-col :span="24">
          <p style="font-size: 22px;font-style:italic;">{{ $t('sustainability.params2') }}</p>
        </el-col>
        <el-divider />
        <el-col :span="24">
          <p style="font-size: 48px; font-weight: bold;">{{ $t('sustainability.title2') }}</p>
        </el-col>
        <el-col :span="24">
          <p style="font-size: 30px; font-weight: bold;">{{ $t('sustainability.title3') }}</p>
        </el-col>
        <el-col :span="24">
          <el-image :src="getImgUrl('sustainability/sustainability1.png')" class="img-style" />
        </el-col>
      </el-row>
      <el-row style="background-size: cover; padding: 2%;"
        :style="{ backgroundImage: 'url(' + getImgUrl('sustainability/sustainability-background.png') + ')' }">
        <el-col :span="12">
          <el-image :src="getImgUrl('sustainability/sustainability2.png')" class="img-style" />
        </el-col>
        <el-col :span="12" class="params-style">
          <p>{{ $t('sustainability.params3') }}</p>
        </el-col>
        <el-col :span="12" class="params-style">
          <p style="width: 21vw;">{{ $t('sustainability.params4') }}</p>
        </el-col>
        <el-col :span="12">
          <el-image :src="getImgUrl('sustainability/sustainability3.png')" class="img-style" />
        </el-col>
        <el-col :span="12">
          <el-image :src="getImgUrl('sustainability/sustainability4.png')" class="img-style" />
        </el-col>
        <el-col :span="12" class="params-style">
          <p>{{ $t('sustainability.params5') }}</p>
        </el-col>
      </el-row>
    </div>
    <div class="params-content">
      <p>{{ $t('sustainability.email') }}<a href="mailto:ir@pacific-gas.com">marine@pacific-gas.com</a></p>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { getImgUrl } from "@/utils/getImgUrl";
import { ArrowRight } from '@element-plus/icons-vue'
</script>
  
<style scoped lang="less">
.el-col {
  margin-top: 10px;
  margin-bottom: 10px;
}

.el-divider--horizontal {
  height: 0;
  width: 80%;
  border: 1px solid #4472c4;
  border-top: none;
  margin: auto;
}

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

.img-style {
  width: 100%;
}

.params-style {
  margin: auto;
  padding: 3%;
  font-size: 20px;
  text-align: justify;
}

.params-style>p {
  width: 23vw;
  letter-spacing: 0;
}
</style>
  